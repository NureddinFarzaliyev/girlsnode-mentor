// Create a type for following product object:
// {
//   id: 2;
//   name: "Example Product";
//   price: 123;
//   description: "Example product description";
//   category: "Generic";
//   stock: 12;
// }
// Generic, Furniture, Clothing

enum ProductCategory {
    GENERIC = "Generic",
    FURNITURE = "Furniture",
    CLOTHING = "Clothing"
}

export type Product = {
    id: number,
    name: string,
    price: number,
    description: string,
    category: ProductCategory,
    stock: number
}

// Create a function type for the function called "logSum" which takes array of numbers and logs the sum of them to the console.

type LogSum = (arr: number[]) => number 
const logSum: LogSum = (arr) => arr.reduce((acc, val) => acc + val, 0)
logSum([1,2,3]) // 6

// Create user type (name, age, etc.)

type User = {
    id: number,
    name: string,
    age: number,
    bio?: string
}

// Pick<User, "id"> -> { id: number }
// User["id"] -> number

// Create a function which changes the name of the user (Pick)

type ChangeName = (id: User["id"], newName: User["name"]) => User

const changeName: ChangeName = (id, newName) => {
    return {
        id: id,
        name: newName,
        age: 10,
        bio: "new bio"
    }
}

// Create a function called "createUser" that takes a name (string)
// and age (number) and returns a User object.

type CreateUser = (name: User["name"], age: User["age"]) => User

const createUser: CreateUser = (name, age) => ({id: 2, name, age, bio: "test bio"})
const createUserSQL: CreateUser = (name, age) => ({id: 3, name, age, bio: "test sql bio"})

// Then, WITHOUT writing a new type manually, create a type called
// "CreatedUser" that is automatically inferred from createUser's return value. (ReturnType)

const sum = (a: number, b: number) => `${a + b}`
type SumReturn = ReturnType<typeof sum>

type CreatedUser = ReturnType<CreateUser>
// type CreatedUser = ReturnType<typeof createUser>

// Create a type which can be utilized while creating an updateUser function. (Partial)

type PartialUser = Partial<User>
type UpdateUser = (id: User["id"], newUser: PartialUser) => User

// Create a type called "FrozenUser" where all properties of User cannot be modified after creation. (Readonly)

type FrozenUser = Readonly<User>

// Create admin type which extends user and has one required and another optional parameter

enum Role {
    ADMIN = "admin",
    MODERATOR = "moderator",
}

type Admin = User & {
    role: Role,
    adminBio?: string
}

// Create a function type to build an admin user with two additional types both required (Required)

type RequiredAdmin = Required<Admin>
type CreateAdmin = (data: RequiredAdmin) => Admin

const newAdmin: Admin = {
    age: 20,
    id: 1,
    name: "admin one",
    role: Role.ADMIN,
}

// Create a type called "Status" that can only be one of:
// "active", "inactive", "pending", "banned"

// type Status = "Active" | "inactive" | "pending" | "banned"

enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
    PENDING = "pending",
    BANNED = "banned"
}

// Then create a type called "UserWithStatus" that extends User
// and includes the Status type.

type UserWithStatus = User & {
    status: Status
}

// Create a type called Staff for following object.
//
// {
//    admin: (... Admin type),
//    vip: (... UserWithStatus type),
//    attendee: (... User type)
// }

// object -> Record
// key: string
// value: User | Admin | UserWithStatus

type Attendance = Record<string, User | Admin | UserWithStatus>

const exampleAttendance: Attendance = {
    "admin": newAdmin
}

type ExampleRecord = Record<string, number>

const exampleObject: ExampleRecord = {
    "sample": 12,
    "another": 24
}

// Create a generic function called "getFirstItem" that accepts
// an array of any type and returns the first element.
// It should work correctly for:
//   getFirstItem([1, 2, 3])        → returns number
//   getFirstItem(["a", "b", "c"]) → returns string
//   getFirstItem([true, false])    → returns boolean

const getFirstItem = <T>(arr: T[]): T | undefined => arr[0]

getFirstItem([1,2,3]) // 1
getFirstItem<string>(["a", "b", "c"]) // "a"
getFirstItem([true, false]) // true