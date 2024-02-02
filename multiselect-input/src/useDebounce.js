import { useEffect, useState } from "react";

const useDebounce = (search, delay) => {
  const [debouncedValue, setDebouncedValue] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [search, delay]);
  return debouncedValue;
};

export default useDebounce;
