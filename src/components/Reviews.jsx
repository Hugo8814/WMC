import { useEffect } from "react";

function Reviews() {
  useEffect(() => {
    // Function to load the Elfsight script
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.setAttribute("data-use-service-core", "true");
      script.defer = true;
      document.body.appendChild(script);

      // Function to remove the watermark after script loads
      script.onload = () => {
        const removeWatermark = () => {
          const watermark = document.querySelector('a[href*="elfsight.com"]');
          if (watermark) {
            watermark.style.display = "none";
          }
        };

        // Check periodically if the watermark is present
        const intervalId = setInterval(() => {
          removeWatermark();
          if (document.querySelector('a[href*="elfsight.com"]')) {
            // Continue checking until watermark is found and removed
            return;
          }
          clearInterval(intervalId);
        }, 500); // Adjust the interval time as needed
      };

      // Clean up the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    };

    loadScript();
  }, []);

  return (
    <div className="reviews">
      <div className="reviews__header">Reviews</div>
      <div
        className="elfsight-app-dcb18da4-50cf-4b26-9790-5eea4a73eeda"
        data-elfsight-app-lazy
      ></div>
    </div>
  );
}

export default Reviews;
