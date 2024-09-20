class Studentx {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  display(): void {
    console.log(`Student ID: ${this.id}, Student Name: ${this.name}`);
  }
}

let std = new Studentx(101, "Jnanesh");
std.display();
