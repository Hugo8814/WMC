function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="contact__img">
        <div className="curved" aria-hidden="true"></div>
        <div className="contact__infoBox">
          <div className="contact__OpenTimes">
            <h2 id="contact-heading" className="contact__OpenTimes-title">
              Opening Hours & Contact Information
            </h2>
            <h3 className="sr-only">Opening Times</h3>
            <p className="contact__OpenTimes-text">Monday: 09:30 - 19:00</p>
            <p className="contact__OpenTimes-text">Tuesday: 09:30 - 19:00</p>
            <p className="contact__OpenTimes-text">Wednesday: 09:30 - 19:00</p>
            <p className="contact__OpenTimes-text">Thursday: 09:30 - 19:00</p>
            <p className="contact__OpenTimes-text">Friday: 09:30 - 19:00</p>
            <p className="contact__OpenTimes-text">Saturday: 09:30 - 19:00</p>
            <p className="contact__OpenTimes-text">Sunday: Closed</p>
          </div>
          <div className="contact__line" aria-hidden="true"></div>
          <div
            className="contact__info"
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <p className="contact__info-text">
              Contact us today to book your next massage appointment in Ashford.
            </p>
            <p className="contact__info-text">
              <strong>Phone:</strong>{" "}
              <a href="tel:+441233610050" itemProp="telephone">
                01233 610050
              </a>
            </p>
            <p className="contact__info-text">
              <strong>Text:</strong>{" "}
              <a href="sms:+447496285460" itemProp="telephone">
                07496 285460
              </a>
            </p>
            <p className="contact__info-text">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@welfaremc.co.uk" itemProp="email">
                info@welfaremc.co.uk
              </a>
            </p>
            <address
              className="contact__info-text"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <strong>Address:</strong>{" "}
              <span itemProp="streetAddress">59 High Street</span>,
              <span itemProp="addressLocality">Ashford</span>
              <span itemProp="postalCode">TN24 8SG</span>,
              <span itemProp="addressCountry">UK</span>
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
