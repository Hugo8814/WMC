function Location() {
  return (
    <section
      className="location"
      id="location"
      aria-labelledby="location-heading"
    >
      <div className="location__header">
        <h2 id="location-heading" className="location__header-text">
          Our Location in Ashford
        </h2>
      </div>
      <div className="map">
        <div className="map__img">
          <iframe
            className="map__iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d318606.6594324663!2d0.0664882062500165!3d51.40095031266161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dedb9c938e4ad7%3A0x986ba3f8f482775b!2sWelfare%20Massage%20Centre!5e0!3m2!1sen!2suk!4v1724250591760!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0 }} // Fixed style syntax
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Welfare Massage Centre location map - 59 High Street, Ashford TN24 8SG"
            aria-label="Google Maps showing Welfare Massage Centre location in Ashford"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;
