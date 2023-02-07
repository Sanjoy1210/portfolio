import { MutableRefObject, useEffect } from 'react';

interface IConfig {
  size: number;
  color: string;
  duration: number;
}

export const useClickAnimation = (
  element: MutableRefObject<HTMLButtonElement | null>,
  config: IConfig
) => {
  const { size = 100, color = '#fff', duration = 800 } = config;

  useEffect(() => {
    const applyContainerProps = () => {
      if (element.current !== null) {
        element.current.classList.add('effect-container');
      }
    };

    const applyStyles = (e: MouseEvent) => {
      const { offsetX, offsetY } = e;
      if (element.current !== null) {
        const { style } = element.current;
        const sizeOffset = 50;

        style.setProperty('--effect-duration', `${duration}ms`);
        style.setProperty('--effect-top', `${offsetY - sizeOffset}px`);
        style.setProperty('--effect-left', `${offsetX - sizeOffset}px`);
        style.setProperty('--effect-height', `${size}px`);
        style.setProperty('--effect-width', `${size}px`);
        style.setProperty('--effect-color', color);
      }
    };

    const onClick = (e: MouseEvent) => {
      element.current!.classList.remove('active');
      applyStyles(e);
      element.current!.classList.add('active');
    };

    applyContainerProps();

    // add the event listener on mount
    if (element.current) {
      element.current.addEventListener('mouseup', onClick);
    }

    // needed for referencing the ref in the return function
    const cleanupRef = element.current!;

    return () => {
      cleanupRef.removeEventListener('mouseup', onClick);
    };
  }, [color, duration, element, size]);
};
