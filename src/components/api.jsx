import { useEffect, useState } from "react";

function Api() {
  const [state, setState] = useState(null);
  useEffect(() => {
    async function call() {
      try {
        const res = await fetch("http://localhost:3001/result");
        const data = await res.json();
        setState(data);
      } catch (error) {
        console.log(error);
      }
    }
    call();
  }, []);

  console.log(state);

  return <div></div>;
}

export default Api;
