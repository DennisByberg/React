import "./SpecialPeopleList.scss";
import peoples from "../../people.json";
import { useState } from "react";
import SpecialPeopleCard from "../SpecialPeopleCard/SpecialPeopleCard";

function SpecialPeopleList() {
  const [specialPersons, setSpecialPersons] = useState([]);

  peoples.people.map((people) => {
    if (people.id > 9) {
      specialPersons.push(people);
    }
  });

  const specialPersonListComponents = specialPersons.map((specialPerson) => {
    return (
      <SpecialPeopleCard
        key={specialPerson.id}
        title={specialPerson.title}
        description={specialPerson.description}
        image={specialPerson.image}
      />
    );
  });

  return (
    <section className="special-people-list">
      <ul className="special-people-list__ul">{specialPersonListComponents}</ul>
    </section>
  );
}

export default SpecialPeopleList;
