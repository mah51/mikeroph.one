import React from 'react';

export default function useIsOnscreen(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  elementRef: any,
  defaultState = false
): any {
  const [isOnscreen, setIsOnscreen] = React.useState(defaultState);

  React.useEffect(() => {
    if (!elementRef.current) {
      return null;
    }

    const observer = new window.IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsOnscreen(entry.intersectionRatio > 0);
    });

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return isOnscreen;
}
