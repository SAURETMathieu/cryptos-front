import { useEffect, useState } from "react";

export default function useBreakpoint(breakpoint: number) {
  const [isBreakpoint, setIsBreakpoint] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsBreakpoint(window.innerWidth >= breakpoint);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isBreakpoint;
}
