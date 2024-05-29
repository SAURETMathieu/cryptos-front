import { useEffect, useState } from "react";

function useBreakpoint(breakpoint: number) {
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

const useBreakpoints = () => {
  const sm = useBreakpoint(640);
  const md = useBreakpoint(768);
  const lg = useBreakpoint(1024);
  const xl = useBreakpoint(1280);
  const xxl = useBreakpoint(1536);

  return { sm, md, lg, xl, xxl };
};

export default useBreakpoints;
