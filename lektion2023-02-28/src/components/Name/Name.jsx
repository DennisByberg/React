import "./Name.css";

const Name = ({ firstName, lastName }) => {
  // Function to return the full name by combining first and last name.
  function getFullName() {
    return `${firstName} ${lastName}`;
  }

  // here we declare the fullName variable with the value returned by the getFullName function.
  const fullName = getFullName();

  // Conditional rendering, renders firstName and lastName when they are both present.
  return (
    <div className="name">
      {firstName && lastName ? `${firstName} ${lastName}` : null}
    </div>
  );
};

export default Name;
