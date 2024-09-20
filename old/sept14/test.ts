interface OS {
   name: string;
   version: number;
 }
 
 let operatingSys = (type: OS): void => {
   console.log(`Android ${type.name} has version ${type.version}`);
 };
 
 let android = { name: "Pie", version: 9 };
 operatingSys(android);
 