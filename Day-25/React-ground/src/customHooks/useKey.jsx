import { useEffect } from 'react';

function useKey(key, action) {
  useEffect(() => {
    function handleKey(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) action();
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [key, action]);
}

export default useKey;
