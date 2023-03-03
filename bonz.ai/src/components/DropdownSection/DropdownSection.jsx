import "./DropdownSection.scss";

const DropdownSection = () => {
  return (
    <section className="dropdown-section grid">
      <div className="dropdown">
        <div className="dropdown__options">
          <select
            defaultValue={"DEFAULT"}
            className="dropdown__option body-text--xs"
          >
            <option value="DEFAULT" disabled>
              Available Rooms
            </option>
            <option>Nature's Nest</option>
            <option>Organic Comfort</option>
            <option>Green Gateway</option>
          </select>
          <select
            defaultValue={"DEFAULT"}
            className="dropdown__option body-text--xs"
          >
            <option value="DEFAULT" disabled>
              Check In Date
            </option>
          </select>
          <select
            defaultValue={"DEFAULT"}
            className="dropdown__option body-text--xs"
          >
            <option value="DEFAULT" disabled>
              Check Out Date
            </option>
          </select>
          <select
            defaultValue={"DEFAULT"}
            className="dropdown__option body-text--xs"
          >
            <option value="DEFAULT" disabled>
              Travelers
            </option>
          </select>
        </div>
        <button className="dropdown__button button-text--large">
          Check Availability
        </button>
      </div>
    </section>
  );
};

export default DropdownSection;
