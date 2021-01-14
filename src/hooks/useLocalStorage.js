import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {

  const [state, setState] = useState(() => {
    try {

      return JSON.parse(window.localStorage.getItem(key)) || JSON.stringify(defaultValue);

    } catch (error) {

      console.log(error);
      return defaultValue;

    }
  });

  useEffect(() => { window.localStorage.setItem(key, state) }, [state])

  return [state, setState];
}