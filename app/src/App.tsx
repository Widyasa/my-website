import { useCallback, useState } from 'react';
import BootScreen from './components/game/BootScreen';
import CustomCursor from './components/game/CustomCursor';
import PageWipe, { type WipePhase } from './components/game/PageWipe';
import Header, { type NavTarget } from './sections/Header';
import Footer from './sections/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';

type Page = 'home' | 'projects';

export default function App() {
  const [booted, setBooted] = useState(false);
  const [page, setPage] = useState<Page>('home');
  const [wipe, setWipe] = useState<WipePhase>('idle');

  const switchPage = useCallback(
    (next: Page) => {
      if (next === page || wipe !== 'idle') return;
      setWipe('cover');
      window.setTimeout(() => {
        setPage(next);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
        setWipe('reveal');
      }, 420);
      window.setTimeout(() => setWipe('idle'), 820);
    },
    [page, wipe]
  );

  const onNav = useCallback(
    (target: NavTarget) => {
      if (target === 'projects') {
        switchPage('projects');
        return;
      }
      if (target === 'about' || target === 'contact') {
        if (page !== 'home') {
          switchPage('home');
          window.setTimeout(() => {
            document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
          }, 900);
        } else {
          document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' });
        }
        return;
      }
      switchPage('home');
      if (page === 'home') window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [page, switchPage]
  );

  return (
    <div style={{ background: 'var(--ink)', minHeight: '100vh' }}>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <CustomCursor />
      <PageWipe phase={wipe} />

      <Header page={page} onNav={onNav} />

      <main>{page === 'home' ? <Home onNav={onNav} /> : <Projects />}</main>

      <Footer onNav={onNav} />
    </div>
  );
}
