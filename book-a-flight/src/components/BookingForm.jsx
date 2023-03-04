import "./BookingForm.css";

const BookingForm = () => {
  let travelClass = 0;
  let amountOfTickets = 0;
  let titleOfUser = "";
  let firstNameOfUser = "";
  let lastNameOfUser = "";
  let agreeToTerms = false;
  let data = {};

  function handleClass(e) {
    travelClass = e.target.value;
    console.log(travelClass);
  }

  function handleTicketsAmount(e) {
    amountOfTickets = e.target.value;
    console.log(`Tickets: ${amountOfTickets}`);
  }

  function handleTitleOfUser(e) {
    titleOfUser = e.target.value;
    console.log(`Title: ${titleOfUser}`);
  }

  function handleFirstNameOfUser(e) {
    firstNameOfUser = e.target.value;
    console.log(`Firstname: ${firstNameOfUser}`);
  }

  function handleLastNameOfUser(e) {
    lastNameOfUser = e.target.value;
    console.log(`Lastname: ${lastNameOfUser}`);
  }

  function handleTerms(e) {
    agreeToTerms = e.target.checked;
    console.log(`User agree to terms: ${agreeToTerms}`);
  }

  function handleSubmit(e) {
    e.preventDefault(); // disable the sumbit.
    data.firstName = firstNameOfUser;
    data.lastName = lastNameOfUser;
    data.tickets = amountOfTickets;
    data.title = titleOfUser;
    data.agreeTerms = agreeToTerms;
    data.class = travelClass;
    console.log(data);
  }

  return (
    <section className="booking-form">
      <form className="booking-form__form">
        <h1 className="booking-form__heading">ÅKA TÅG</h1>

        <div className="booking-form__city-and-time">
          <div className="booking-form__first-city-and-time-container">
            <h2 className="booking-form__first-city">STOCKHOLM</h2>
            <p className="booking-form__first-time">10.30</p>
          </div>
          <img
            className="booking-form__arrow"
            src="https://cdn-icons-png.flaticon.com/512/664/664866.png"
          />
          <div className="booking-form__second-city-and-time-container">
            <h2 className="booking-form__second-city">GÖTEBORG</h2>
            <p className="booking-form__second-time">14.45</p>
          </div>
        </div>

        <div className="booking-form__radio-buttons">
          <label className="booking-form__radio-btn1">
            <input type="radio" name="class" value={2} onChange={handleClass} />
            2:a klass
          </label>
          <label className="booking-form__radio-btn2">
            <input type="radio" name="class" value={1} onChange={handleClass} />
            1:a klass
          </label>
        </div>

        <div className="booking-form__inputs-labels-and-button-wrapper">
          <div className="booking-form__tickets-and-title-container">
            <div className="booking-form__tickets-container">
              <label htmlFor="tickets">Antal biljetter</label>
              <select
                defaultValue={0}
                onChange={handleTicketsAmount}
                id="tickets"
              >
                <option value={0} disabled hidden>
                  0
                </option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
              </select>
            </div>
            <div className="booking-form__title-container">
              <label htmlFor="title">Titel</label>
              <select defaultValue="" onChange={handleTitleOfUser} id="title">
                <option value="" disabled hidden></option>
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          {/* förnamn */}
          <div className="booking-form__first-name-container">
            <label className="booking-form__" htmlFor="first-name">
              Förnamn
            </label>
            <input
              placeholder="Enter your firstname here..."
              onChange={handleFirstNameOfUser}
              id="first-name"
              type="text"
              maxLength={15}
            />
          </div>

          {/* efternamn */}
          <div className="booking-form__last-name-container">
            <label htmlFor="last-name">Efternamn</label>
            <input
              placeholder="Enter your lastname here..."
              onChange={handleLastNameOfUser}
              id="last-name"
              type="text"
              maxLength={15}
            />
          </div>

          {/* Godkänn villkor */}
          <div className="booking-form__agree-to-the-terms-container">
            <label htmlFor="agree-to-the-terms">
              <input
                onChange={handleTerms}
                type="checkbox"
                id="agree-to-the-terms"
              />
              Godkänner villkoren
            </label>
          </div>

          {/* Boka Biljett */}
          <button
            onClick={handleSubmit}
            className="booking-form__book-ticket-btn"
          >
            Boka Bilett
          </button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
