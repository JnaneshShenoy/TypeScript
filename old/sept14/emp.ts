interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  gender: string;
  empcode: number;
}

const empobj: Employee = {
  name: "Rahul",
  age: 25,
  gender: "Male",
  empcode: 4566,
};

console.log(`name: ${empobj.name}`);
console.log(`Employee code: ${empobj.empcode}`);
