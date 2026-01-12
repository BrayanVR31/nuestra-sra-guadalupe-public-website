import { useLayoutEffect } from "react";

export default function useLockBodyScroll(isLock: boolean) {
  useLayoutEffect(() => {
    if (!isLock) return;
    const orgStyle = window.getComputedStyle(document.body).overflow;
    const scrollBarW = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarW}px`;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = orgStyle;
      document.body.style.paddingRight = '0px';
    }
  }, [isLock]);
}