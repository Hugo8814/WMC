function Bookbtn() {
  return (
    <aside
      className="container"
      role="complementary"
      aria-label="Booking actions"
    >
      <div className="header__Btn" role="group">
        <a
          href="https://www.fresha.com/a/welfare-massage-centre-ashford-59-high-street-lk5oiedp/all-offer?menu=true&pId=123299"
          className="header__Btn-BookNow"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book massage appointment online now"
        >
          Book Now
        </a>
        <a
          href="https://www.fresha.com/a/welfare-massage-centre-ashford-59-high-street-lk5oiedp/all-offer?menu=true&pId=123299"
          className="header__Btn-viewall"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all available massage treatments and pricing"
        >
          View All Treatments
        </a>
      </div>
    </aside>
  );
}

export default Bookbtn;
