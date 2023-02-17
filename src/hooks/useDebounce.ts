import React, { useEffect, useState } from 'react';

export const useDebounce = <T = string>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, delay]);
  return debouncedValue;
};

const useTest = () => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setValue((v) => v + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  React.useEffect(() => {
    console.log('UseEffect body');

    return () => {
      console.log('UseEffect return');
    };
  }, [value]);
};
