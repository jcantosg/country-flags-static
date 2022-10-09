import { useState } from "react";

// Hook
function useLocalStorage(key: string) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
     if (typeof window === "undefined") {
        return [];
      }
    // Get from local storage by key
    const items: number[] = JSON.parse(localStorage.getItem(key) || "[]");

    console.log("items ", items);
    // Parse stored json or if none return initialValue
    return items;
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (id: number) => {
    try {
      // Allow value to be a function so we have same API as useState
      let favorites: number[] = storedValue;

      console.log(storedValue, id);

      if (storedValue.includes(id)) {
        favorites = storedValue.filter((pokID) => pokID !== id);
      } else {

        favorites.push(id);
      }

      setStoredValue(favorites);
      localStorage.setItem(key, JSON.stringify(favorites));

      // Save state
      /* setStoredValue(id);
        // Save to local storage
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(value));
        } */
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
