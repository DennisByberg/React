type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

const employee1: Employee = {
  id: 1,
  name: "Dennis",
  retire: (date: Date) => {
    console.log(date);
  },
};

const employee2: Employee = {
  id: 2,
  name: "Erik",
  retire: (date: Date) => {
    console.log(date);
  },
};

console.log(employee1);
console.log(employee2);
