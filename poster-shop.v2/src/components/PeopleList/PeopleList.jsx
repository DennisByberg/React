//components
import peoples from "../../people.json";
import PersonCard from "../PersonCard/PersonCard";
//sass
import "./PeopleList.scss";
//states
import { useState } from "react";

function PeopleList() {
  const [persons, setPersons] = useState([]);

  peoples.people.map((people) => {
    if (people.id < 10) {
      persons.push(people);
    }
  });

  const personListComponents = persons.map((person) => {
    return (
      <PersonCard
        key={person.id}
        title={person.title}
        description={person.description}
        image={person.image}
      />
    );
  });

  return (
    <section className="people-list">
      <ul className="people-list__ul">{personListComponents}</ul>
    </section>
  );
}

export default PeopleList;
