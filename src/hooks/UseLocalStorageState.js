import { useEffect, useState } from "react";

function UseLocalStorageState(key, initialState) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== undefined && storedValue !== null
      ? JSON.parse(storedValue)
      : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default UseLocalStorageState;
