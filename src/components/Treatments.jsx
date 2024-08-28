import img1 from "../img/img1.webp";
import img2 from "../img/img2.webp";
import img3 from "../img/img3.webp";
//import img4 from "../img/img4.webp";

import img6 from "../img/img6.png";
import deepimg from "../img/deep_tissue.jpg";
import sideimg from "../img/side.png";
import footimg from "../img/foot.png";
import bns from "../img/bns.png";

function Treatments() {
  return (
    <div className="treatments" id="treatments">
      <div className="grid">
        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={img1} />
          </div>
          <div className="grid__item-title">Swedish Massage</div>
          <div className="grid__item-description">
            Swedish massage is a classic technique that relaxes body and mind.
            Using long strokes, kneading, and light pressure, it relieves
            tension, improves circulation, and reduces muscle pain. Ideal for
            beginners, it promotes overall relaxation and well-being.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={img6} />
          </div>
          <div className="grid__item-title">Hot Stone Massage</div>
          <div className="grid__item-description">
            Hot stone massage involves using warm stones to ease muscle tension
            and promote relaxation. The heat helps improve circulation and
            relieve stress, offering a soothing and restorative experience.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={img2} />
          </div>
          <div className="grid__item-title">Lymphatic Drainage</div>
          <div className="grid__item-description">
            Lymphatic drainage massage stimulates the lymphatic system to
            improve fluid flow and reduce swelling. Using light, rhythmic
            strokes, it removes toxins and boosts circulation. Ideal for
            reducing bloating and boosting immunity, it promotes well-being and
            a sense of lightness.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={img3} />
          </div>
          <div className="grid__item-title">Aromatherapy</div>
          <div className="grid__item-description">
            Aromatherapy uses essential oils to enhance well-being. Infusing
            soothing scents into massage, it promotes relaxation, reduces
            stress, and boosts mental clarity. Each oil offers unique benefits,
            creating a tailored experience to uplift mood and refresh the
            senses.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={deepimg} />
          </div>
          <div className="grid__item-title">Deep Tissue</div>
          <div className="grid__item-description">
            Deep tissue massage targets deeper muscle layers and connective
            tissue. With firm pressure and slow strokes, it relieves chronic
            pain, reduces muscle tension, and improves flexibility. Ideal for
            addressing specific discomfort, it promotes lasting relief.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={sideimg} />
          </div>
          <div className="grid__item-title">Pregnacy massage</div>
          <div className="grid__item-description">
            Pregnancy massage is a gentle treatment for pregnant women. Using
            gentle techniques, it alleviates common discomforts such as back
            pain and swelling, promotes relaxation, and improves circulation.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={footimg} />
          </div>
          <div className="grid__item-title">Reflexology</div>
          <div className="grid__item-description">
            Reflexology relieves tension and improves circulation in the feet.
            Using gentle pressure, it reduces stress, alleviates fatigue, and
            promotes relaxation. Ideal for tired feet, it revitalizes and
            refreshes, offering a soothing escape from daily strain.
          </div>
        </div>
        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={bns} />
          </div>
          <div className="grid__item-title">
            Back, Neck & <br />
            Shoulders
          </div>
          <div className="grid__item-description">
            A back, neck, and shoulders massage targets common tension areas. It
            uses techniques to relieve muscle tightness, improve circulation,
            and reduce stress. Ideal for stiffness or soreness, it promotes
            relaxation and overall well-being.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Treatments;
