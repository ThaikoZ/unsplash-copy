import { useEffect, useState } from 'react'
import { pixelsToNumber } from '../utils/pixels';
import { breakpoints} from '../styles/breakpoints';

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<string>(breakpoints.md);

  useEffect(()=> {
    const handleBreakpoint = () => {
      let breakpoint = '';
      const width = window.innerWidth;
      
      if(width < pixelsToNumber(breakpoints.xs))
        breakpoint = breakpoints.xs
      else if(width < pixelsToNumber(breakpoints.sm))
        breakpoint = breakpoints.sm
      else if(width < pixelsToNumber(breakpoints.md))
        breakpoint = breakpoints.md
      else if(width < pixelsToNumber(breakpoints.lg))
        breakpoint = breakpoints.lg
      else if(width < pixelsToNumber(breakpoints.xl))
        breakpoint = breakpoints.xl
      else 
        breakpoint = breakpoints.xxl
      
      setBreakpoint(breakpoint);
    }

    window.addEventListener('resize', handleBreakpoint);
    return () => window.removeEventListener('resize', handleBreakpoint);
  }, [])

  return breakpoint;
}

export default useBreakpoint
