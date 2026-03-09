// Create a type for following product object:
// {
//   id: 2;
//   name: "Example Product";
//   price: 123;
//   description: "Example product description";
//   category: "Generic";
//   stock: 12;
// }

// Create a function type for the function called "logSum" which takes array of numbers and logs the sum of them to the console.

// Create user type (name, age, etc.)

// Create a function which changes the name of the user (Pick)

// Create a function called "createUser" that takes a name (string)
// and age (number) and returns a User object.
// Then, WITHOUT writing a new type manually, create a type called
// "CreatedUser" that is automatically inferred from createUser's return value. (ReturnType)

// Create a type which can be utilized while creating an updateUser function. (Partial)

// Create a type called "FrozenUser" where all properties of User cannot be modified after creation. (Readonly)

// Create admin type which extends user and has one required and another optional parameter

// Create a function type to build an admin user with two additional types both required (Required)

// Create a type called "Status" that can only be one of:
// "active", "inactive", "pending", "banned"
// Then create a type called "UserWithStatus" that extends User
// and includes the Status type.

// Create a type called Staff for following object.
//
// {
//    admin: (... Admin type),
//    vip: (... UserWithStatus type),
//    attendee: (... User type)
// }

// Create a generic function called "getFirstItem" that accepts
// an array of any type and returns the first element.
// It should work correctly for:
//   getFirstItem([1, 2, 3])        → returns number
//   getFirstItem(["a", "b", "c"]) → returns string
//   getFirstItem([true, false])    → returns boolean
