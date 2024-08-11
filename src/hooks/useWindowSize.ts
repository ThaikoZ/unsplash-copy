import { useEffect, useState } from 'react'

interface Size {
  width: number;
  height: number;
}

const useWindowSize = () => {
  const [size, setSize] = useState<Size>({
    width:window.innerWidth,
    height:window.innerHeight,
  });

  useEffect(()=> {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  return size;
}

export default useWindowSize
