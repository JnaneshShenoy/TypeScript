//default parameter-typescript initializes value for the parameter if the user does
//not pass a value to an arguement
//function function_name(parameter1[:type), parameter2[:type]=default_value){}
function displayName(name: string, greeting: string = "Good Morning"): string {
  return greeting + " " + name + "!";
}
console.log(displayName("NMAM"));
console.log(displayName("NMAM", "HI"));
console.log(displayName("TYPESCRIPT"));
