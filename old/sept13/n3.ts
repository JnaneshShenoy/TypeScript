let passcode = "secret password";

class Studentx1 {
    private fullname1: string;

    get fullname(): string {
        return this.fullname1;
    }

    set fullname(newName: string) {
        if (passcode && passcode === "secret password") {
            this.fullname1 = newName;
        } else {
            console.log("Unauthorized update of student details.");
        }
    }
}

let student1 = new Studentx1();
student1.fullname = "John Doe";
console.log(student1.fullname);
