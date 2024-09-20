let sum = (a: number, b: number): number => a + b;
console.log(sum(20, 30));

let printx = () => console.log("Hello world");
printx();

let add = (a: number, b: number) => a + b;
console.log(`Result = ${add(45, 78)}`);

class Student {
  usn: number;
  name: string;

  constructor(usn: number, name: string) {
    this.usn = usn;
    this.name = name;
  }

  showDetails = () => {
    console.log(`Student USN: ${this.usn}, Student Name: ${this.name}`);
  };
}

let student = new Student(101, "Ram");
student.showDetails();


