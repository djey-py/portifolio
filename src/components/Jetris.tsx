import { useEffect, useRef, useState } from "react";

const COLS = 10;
const ROWS = 20;
const BLOCK = 24;

const SHAPES = [
  [[1, 1, 1, 1]], // I
  [
    [1, 1],
    [1, 1],
  ], // O
  [
    [0, 1, 0],
    [1, 1, 1],
  ], // T
];

const randomShape = () =>
  SHAPES[Math.floor(Math.random() * SHAPES.length)];

const Jetris = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [board, setBoard] = useState(
    Array.from({ length: ROWS }, () => Array(COLS).fill(0))
  );
  const [piece, setPiece] = useState({
    shape: randomShape(),
    x: 3,
    y: 0,
  });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const draw = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, COLS * BLOCK, ROWS * BLOCK);

    board.forEach((row, y) =>
      row.forEach((value, x) => {
        if (value) {
          ctx.fillStyle = "#00ffff";
          ctx.fillRect(x * BLOCK, y * BLOCK, BLOCK, BLOCK);
        }
      })
    );

    piece.shape.forEach((row, dy) =>
      row.forEach((value, dx) => {
        if (value) {
          ctx.fillStyle = "#a855f7";
          ctx.fillRect(
            (piece.x + dx) * BLOCK,
            (piece.y + dy) * BLOCK,
            BLOCK,
            BLOCK
          );
        }
      })
    );
  };

  const merge = () => {
    const newBoard = board.map((row) => [...row]);
    piece.shape.forEach((row, dy) =>
      row.forEach((value, dx) => {
        if (value) {
          newBoard[piece.y + dy][piece.x + dx] = 1;
        }
      })
    );
    return newBoard;
  };

  const collide = (nx: number, ny: number, shape = piece.shape) => {
    return shape.some((row, dy) =>
      row.some((value, dx) => {
        if (!value) return false;
        const x = nx + dx;
        const y = ny + dy;
        return (
          x < 0 ||
          x >= COLS ||
          y >= ROWS ||
          (y >= 0 && board[y][x])
        );
      })
    );
  };

  const rotate = () => {
    const rotated = piece.shape[0].map((_, i) =>
      piece.shape.map((row) => row[i]).reverse()
    );
    if (!collide(piece.x, piece.y, rotated)) {
      setPiece({ ...piece, shape: rotated });
    }
  };

  const drop = () => {
    if (!collide(piece.x, piece.y + 1)) {
      setPiece({ ...piece, y: piece.y + 1 });
    } else {
      const merged = merge();
      const cleared = merged.filter(
        (row) => !row.every((cell) => cell === 1)
      );
      const linesCleared = ROWS - cleared.length;

      while (cleared.length < ROWS) {
        cleared.unshift(Array(COLS).fill(0));
      }

      setBoard(cleared);
      setScore(score + linesCleared * 10);

      const newPiece = { shape: randomShape(), x: 3, y: 0 };
      if (collide(newPiece.x, newPiece.y, newPiece.shape)) {
        setGameOver(true);
      } else {
        setPiece(newPiece);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver) drop();
    }, 600);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    draw();
  }, [board, piece]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (gameOver) return;

      if (e.key === "ArrowLeft" && !collide(piece.x - 1, piece.y)) {
        setPiece({ ...piece, x: piece.x - 1 });
      }
      if (e.key === "ArrowRight" && !collide(piece.x + 1, piece.y)) {
        setPiece({ ...piece, x: piece.x + 1 });
      }
      if (e.key === "ArrowDown") drop();
      if (e.key === "ArrowUp") rotate();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  });

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-3xl font-black text-neon-blue mb-4">
        🎮 JETRIS
      </h3>

      <canvas
        ref={canvasRef}
        width={COLS * BLOCK}
        height={ROWS * BLOCK}
        className="bg-black border border-white/20 rounded"
      />

      <p className="mt-4 text-neon-purple font-mono">
        Score: {score}
      </p>

      {gameOver && (
        <p className="mt-4 text-red-500 font-bold">
          GAME OVER
        </p>
      )}
    </div>
  );
};

export default Jetris;