import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname.replace(/\/$/, '') === '/windows-guide';
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isHome) return undefined;

    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, [isHome]);

  return (
    <>
      {!isHome && (
        <div className="scrollProgress" role="progressbar" aria-label="Reading progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow={Math.round(progress)}>
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
      )}
      {children}
    </>
  );
}
