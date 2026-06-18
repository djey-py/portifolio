import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Interests from './components/Interests';
import Contact from './components/Contact';

const Background3D = lazy(() => import('./components/Background3D'));

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="relative text-white selection:bg-neon-blue selection:text-black">
      <Suspense fallback={<div className="fixed inset-0 bg-[#050505]" />}>
        <Background3D />
      </Suspense>
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>

      <footer className="py-10 text-center text-gray-600 border-t border-white/5 relative z-10">
        <p className="text-sm tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Joelson Pedro. Built with React & Three.js
        </p>
      </footer>
    </div>
  );
}

export default App;
