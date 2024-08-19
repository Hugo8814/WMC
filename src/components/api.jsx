/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

const ApiContext = createContext();
export function ApiProvider({ children }) {
  const [state, setState] = useState(null);
  useEffect(() => {
    async function call() {
      try {
        const res = await fetch("http://localhost:3001/result");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log("API Response:", data); // Debug: Log the response
        setState(data);
      } catch (error) {
        console.error("Fetch error:", error);
        setState(null); // Set state to null in case of an error
      }
    }
    call();
  }, []);

  return <ApiContext.Provider value={state}>{children}</ApiContext.Provider>;
}

export default ApiProvider;
