import { useEffect } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useOutsideDrop = (ref: any, setDropSelect: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    function handleClickOutside(event: { target: unknown }) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropSelect(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setDropSelect]);
};

export default useOutsideDrop;
