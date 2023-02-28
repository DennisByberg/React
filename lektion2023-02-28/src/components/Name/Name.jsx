import "./Name.css";

const Name = () => {
  const firstName = "Ada"; // Variable to store the first name.
  const lastName = "Lovelace"; // Variable to store the last name.

  // Function to return the full name by combining first and last name.
  const getFullName = () => {
    return `${firstName} ${lastName}`;
  };

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
