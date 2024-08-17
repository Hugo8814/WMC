import { useEffect, useState } from "react";

function Api() {
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:3001/api/reviews");

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }

        const data = await res.json();
        setReviews(data.result.reviews);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError(error.message);
      }
    }

    fetchData();
  }, []);
  if (error) return <div>Error: {error}</div>;
  if (!reviews) return <div>Loading...</div>;

  return <div>Check the console for the API response.</div>;
}

export default Api;
