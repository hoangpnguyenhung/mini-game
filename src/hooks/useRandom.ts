import { useRef } from "react";

const useRandom = (): number => {
  const randomValueRef = useRef<number | null>(null);

  if (randomValueRef.current === null) {
    randomValueRef.current = Math.random();
  }

  return randomValueRef.current;
};

export default useRandom;
