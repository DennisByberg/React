import "./BookingForm.css";
import React, { useState } from "react";

const BookingForm = () => {
  const [isSelected1, setIsSelected1] = useState(true);
  const [isSelected2, setIsSelected2] = useState(false);

  const handleRadio1 = (e) => {
    setIsSelected1(true);
    setIsSelected2(false);
  };

  const handleRadio2 = (e) => {
    setIsSelected1(false);
    setIsSelected2(true);
  };

  return (
    <section className="booking-form">
      <form className="booking-form__form" action="">
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
            <input
              type="radio"
              checked={isSelected1}
              onChange={handleRadio1}
              value="2a klass"
            />
            2:a klass
          </label>
          <label className="booking-form__radio-btn2">
            <input
              type="radio"
              checked={isSelected2}
              onChange={handleRadio2}
              value="1a klass"
            />
            1:a klass
          </label>
        </div>

        <div className="booking-form__tickets-and-title-container">
          <div className="booking-form__tickets-container">
            <label htmlFor="tickets">Antal biljetter</label>
            <select id="tickets">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>

          <div className="booking-form__title-container">
            <label htmlFor="title">Titel</label>
            <select id="title">
              <option value="Mr">Mr.</option>
              <option value="Mrs">Mrs.</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <label htmlFor="first-name">Förnamn</label>
        <input id="first-name" type="text" maxLength={15} />
        <label htmlFor="last-name">Efternamn</label>
        <input id="last-name" type="text" maxLength={15} />
        <label htmlFor="agree-to-the-terms">
          <input type="checkbox" id="agree-to-the-terms" />
          Godkänner villkoren
        </label>
        <button>Boka Bilett</button>
      </form>
    </section>
  );
};

export default BookingForm;
