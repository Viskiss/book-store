import { useEffect } from 'react';

export const useOutsideClick = (
  ref: React.MutableRefObject<HTMLElement | null>,
  setDropSelect: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  useEffect(() => {
    function handlerClickOutside(event: { target: unknown }) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setDropSelect(false);
      }
    }
    document.addEventListener('mousedown', handlerClickOutside);
    return () => {
      document.removeEventListener('mousedown', handlerClickOutside);
    };
  }, [ref, setDropSelect]);
};
