import { useRef, useEffect } from "react";

export const useFadeIn = () => {
  const element = useRef();
  useEffect(()=>{
    element.current.style.transition = "opacity 0.3s ease-in-out";
    element.current.style.opacity = 1;
  })
  return element;
};