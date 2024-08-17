import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3001;

// Enable CORS to allow requests from other origins
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the API server!");
});

app.get("/api/reviews", async (req, res) => {
  const API_URL =
    "https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ10qOk5zb3kcRW3eC9Pija5g&fields=name,rating,reviews&key=AIzaSyDlpXTfN7I7Nbi5dEw1_pGMRKD4FIL2r_Q";

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    res.json(data); // Send the data back to the frontend
  } catch (error) {
    console.error("Error fetching data:", error);
    res
      .status(500)
      .json({ error: "Failed to fetch data", message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
