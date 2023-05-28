/* eslint-disable */
import { useState, useEffect } from 'react';
import { mediaQueries } from './mediaQueries';

type MediaQuery = keyof typeof mediaQueries;

const useMedia = (query: MediaQuery): boolean | undefined => {
  const queryToMatch = mediaQueries[query];
  const [match, setMatch] = useState<boolean>(false);
  if (typeof window !== 'object') return;
  if (!window.matchMedia) return;

  useEffect(() => {
    let mounted = true;
    const mediaQueryWindow = window.matchMedia(queryToMatch);

    const onChange = (): void => {
      if (!mounted) {
        return;
      }
      setMatch(Boolean(mediaQueryWindow.matches));
    };

    mediaQueryWindow.hasOwnProperty('addEventListener')
      ? mediaQueryWindow.addEventListener('resize', onChange)
      : mediaQueryWindow.addListener(onChange);

    setMatch(mediaQueryWindow.matches);

    return () => {
      mounted = false;
      mediaQueryWindow.hasOwnProperty('removeEventListener')
        ? mediaQueryWindow.removeEventListener('resize', onChange)
        : mediaQueryWindow.removeListener(onChange);
    };
  }, [queryToMatch]);

  return match;
};

export default useMedia;
