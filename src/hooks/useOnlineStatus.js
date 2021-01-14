import { useState, useEffect } from "react";


function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(() => {

    window.addEventListener('online', () => setIsOnline(true));
    window.addEventListener('offline', () => setIsOnline(false));

    return () => {
      window.removeEventListener('online', () => setIsOnline(true));
      window.removeEventListener('offline', () => setIsOnline(false));
    };
  }, []);

  return isOnline;
}

export default useOnlineStatus;

