import img1 from "../img/img1.webp";
import img2 from "../img/img2.webp";
import img3 from "../img/img3.webp";
//import img4 from "../img/img4.webp";
import img5 from "../img/img5.webp";
import img6 from "../img/img6.png";
//new names

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
            Swedish massage is a classic technique that relaxes the body and
            mind. It uses long, smooth strokes, kneading, and gentle pressure to
            relieve tension. This type of massage enhances circulation, eases
            muscle pain, and promotes overall relaxation. Ideal for those new to
            massage, it helps reduce stress and fosters a sense of well-being.
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
            enhance fluid flow and reduce swelling. This gentle technique uses
            light, rhythmic strokes to encourage the removal of toxins and
            improve circulation. Ideal for reducing bloating and boosting
            immunity, it promotes overall well-being and a sense of lightness.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={img3} />
          </div>
          <div className="grid__item-title">Aromatherapy</div>
          <div className="grid__item-description">
            Aromatherapy uses essential oils to enhance physical and emotional
            well-being. By incorporating soothing scents into massage, it
            promotes relaxation, reduces stress, and supports mental clarity.
            Each essential oil offers unique benefits, providing a tailored
            experience to uplift mood and rejuvenate the senses.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={img3} />
          </div>
          <div className="grid__item-title">Deep Tissue</div>
          <div className="grid__item-description">
            Deep tissue massage targets the deeper layers of muscles and
            connective tissue. By applying firm pressure and slow strokes, it
            helps alleviate chronic pain, reduce muscle tension, and improve
            flexibility. This technique is ideal for addressing specific areas
            of discomfort and promoting long-lasting relief.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={img5} />
          </div>
          <div className="grid__item-title">Sports Massage</div>
          <div className="grid__item-description">
            Sports massage focuses on preventing and treating injuries
            associated with athletic activities. It combines various techniques
            to enhance flexibility, reduce muscle soreness, and improve
            performance. Ideal for athletes and active individuals, it aids in
            faster recovery and maintains peak physical condition.
          </div>
        </div>

        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={img6} />
          </div>
          <div className="grid__item-title">Reflexology</div>
          <div className="grid__item-description">
            Foot massage focuses on relieving tension and improving circulation
            in the feet. Using gentle pressure and soothing techniques, it helps
            to reduce stress, alleviate fatigue, and promote relaxation. Ideal
            for soothing tired feet, this treatment revitalizes and refreshes,
            offering a comforting escape from daily strain.
          </div>
        </div>
        <div className="grid__item">
          <div className="grid__item__imgBox">
            <img className="grid__item-img" src={img1} />
          </div>
          <div className="grid__item-title">
            Back, Neck & <br />
            Shoulders
          </div>
          <div className="grid__item-description">
            A back, neck, and shoulders massage targets common areas of tension
            and discomfort. This focused therapy uses techniques to relieve
            muscle tightness, improve circulation, and alleviate stress. Ideal
            for those experiencing stiffness or soreness, it promotes relaxation
            and overall well-being.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Treatments;
