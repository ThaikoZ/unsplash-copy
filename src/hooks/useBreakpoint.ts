import { useEffect, useState } from "react";
import { pixelsToNumber } from "../utils/pixels";
import { breakpoints } from "../styles/breakpoints";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string>(breakpoints.md);

  useEffect(() => {
    const handleBreakpoint = () => {
      let breakpoint = "";
      const width = window.innerWidth;

      if (width < (pixelsToNumber(breakpoints.xs) || 0))
        breakpoint = breakpoints.xs;
      else if (width < (pixelsToNumber(breakpoints.sm) || 0))
        breakpoint = breakpoints.sm;
      else if (width < (pixelsToNumber(breakpoints.md) || 0))
        breakpoint = breakpoints.md;
      else if (width < (pixelsToNumber(breakpoints.lg) || 0))
        breakpoint = breakpoints.lg;
      else if (width < (pixelsToNumber(breakpoints.xl) || 0))
        breakpoint = breakpoints.xl;
      else breakpoint = breakpoints.xxl;

      setBreakpoint(breakpoint);
    };

    handleBreakpoint();

    window.addEventListener("resize", handleBreakpoint);
    return () => window.removeEventListener("resize", handleBreakpoint);
  }, []);

  return breakpoint;
};

export default useBreakpoint;
