import { useState } from "react";
import img1 from "../img/img1.webp";
import img2 from "../img/img2.webp";
import img3 from "../img/img3.webp";
//import img4 from "../img/img4.webp";
import img6 from "../img/img6.png";
import deepimg from "../img/deep_tissue.jpg";
import sideimg from "../img/side.png";
import footimg from "../img/foot.png";
import bns from "../img/bns.png";
import { useRef } from "react";
import { useEffect } from "react";

const treatmentsData = [
  {
    img: img1,
    title: "Swedish Massage",
    description:
      "Swedish massage is a classic technique that relaxes body and mind. Using long strokes, kneading, and light pressure, it relieves tension, improves circulation, and reduces muscle pain. Ideal for beginners, it promotes overall relaxation and well-being.",
  },
  {
    img: img6,
    title: "Hot Stone Massage",
    description:
      "Hot stone massage involves using warm stones to ease muscle tension and promote relaxation. The heat helps improve circulation and relieve stress, offering a soothing and restorative experience.",
  },
  {
    img: img2,
    title: "Lymphatic Drainage",
    description:
      "Lymphatic drainage massage stimulates the lymphatic system to improve fluid flow and reduce swelling. Using light, rhythmic strokes, it removes toxins and boosts circulation. Ideal for reducing bloating and boosting immunity, it promotes well-being and a sense of lightness.",
  },
  {
    img: img3,
    title: "Aromatherapy",
    description:
      "Aromatherapy uses essential oils to enhance well-being. Infusing soothing scents into massage, it promotes relaxation, reduces stress, and boosts mental clarity. Each oil offers unique benefits, creating a tailored experience to uplift mood and refresh the senses.",
  },
  {
    img: deepimg,
    title: "Deep Tissue",
    description:
      "Deep tissue massage targets deeper muscle layers and connective tissue. With firm pressure and slow strokes, it relieves chronic pain, reduces muscle tension, and improves flexibility. Ideal for addressing specific discomfort, it promotes lasting relief.",
  },
  {
    img: sideimg,
    title: "Pregnancy Massage",
    description:
      "Pregnancy massage is a gentle treatment for pregnant women. Using gentle techniques, it alleviates common discomforts such as back pain and swelling, promotes relaxation, and improves circulation.",
  },
  {
    img: footimg,
    title: "Reflexology",
    description:
      "Reflexology relieves tension and improves circulation in the feet. Using gentle pressure, it reduces stress, alleviates fatigue, and promotes relaxation. Ideal for tired feet, it revitalizes and refreshes, offering a soothing escape from daily strain.",
  },
  {
    img: bns,
    title: "Back, Neck & Shoulders",
    description:
      "A back, neck, and shoulders massage targets common tension areas. It uses techniques to relieve muscle tightness, improve circulation, and reduce stress. Ideal for stiffness or soreness, it promotes relaxation and overall well-being.",
  },
];

function Treatments() {
  const [showMore, setShowMore] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const gridRef = useRef(null);

  const itemsToShow = showMore ? treatmentsData : treatmentsData.slice(0, 4);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!showMore) {
      // Save the current scroll position before expanding
      setScrollPosition(window.scrollY);
    }
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (showMore && gridRef.current) {
      // Optionally adjust max-height if needed
      gridRef.current.style.maxHeight = `${gridRef.current.scrollHeight}px`;
    } else {
      // Collapse the content and restore the scroll position
      if (gridRef.current) {
        gridRef.current.style.maxHeight = "0";
      }
      window.scrollTo({ top: scrollPosition, behavior: "smooth" });
    }
  }, [showMore, scrollPosition]);
  return (
    <div className="treatments" id="treatments">
      <div className="grid">
        {itemsToShow.map((item, index) => (
          <div className="grid__item" key={index}>
            <div className="grid__item__imgBox">
              <img className="grid__item-img" src={item.img} alt={item.title} />
            </div>
            <div className="grid__item-title">{item.title}</div>
            <div className="grid__item-description" id="here">
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {treatmentsData.length > 4 && (
        <a
          href={showMore ? "#here" : undefined} // Add href only when showMore is true
          className="show-more-btn"
          onClick={handleButtonClick}
        >
          {showMore ? "Show Less" : "Show More"}
        </a>
      )}
    </div>
  );
}

export default Treatments;
