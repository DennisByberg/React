import "./Name.css";

const Name = () => {
  const firstName = "Ada";
  const lastName = "Lovelace";
  const fullName = firstName + " " + lastName;

  return <div className="name">{fullName}</div>;
};

export default Name;
