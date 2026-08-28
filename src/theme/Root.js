import React, { useEffect, useState } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({ children }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  useEffect(() => {
    const sidebar = document.querySelector('.theme-doc-sidebar-container');
    if (!sidebar) return undefined;

    const keepSidebarScroll = (event) => {
      if (sidebar.scrollHeight <= sidebar.clientHeight) return;
      event.preventDefault();
      sidebar.scrollTop += event.deltaY;
    };

    sidebar.addEventListener('wheel', keepSidebarScroll, { passive: false });
    return () => sidebar.removeEventListener('wheel', keepSidebarScroll);
  }, [pathname]);

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
