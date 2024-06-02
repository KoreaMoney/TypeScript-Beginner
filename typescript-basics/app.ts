// STRING

// string에 number가 서로 다른 type으로 typescript는 자동으로 알려줍니다.
let variable = "hello";
// variable = 15; // fail
variable = "world"; // pass

//-------------------------------------------------------------------------------------------------------------
// NUMBER

let age = 20;
// age = "20"; // fail

//-------------------------------------------------------------------------------------------------------------
// NUMBER TYPE

// ":"뒤에는 type을 정의하는 것으로 number라고 작성 후 string값이 들어오면 typescript는 에러를 알려줍니다.
let ageWithType: number;
// ageWithType = "hello world"; // fail
ageWithType = 20; // pass

//-------------------------------------------------------------------------------------------------------------
// STRING TYPE

let testString: string;
testString = "hello world"; // pass

//-------------------------------------------------------------------------------------------------------------
// BOOLEAN TYPE

let testBoolean: boolean;
testBoolean = false; // pass

//-------------------------------------------------------------------------------------------------------------
// Union Type TYPE

let testStringOrNumber: string | number; //string 또는 number인 경우의 type을 정의할 경우 "|"을 사용합니다.
testStringOrNumber = 10; // pass
testStringOrNumber = "10"; // pass
// testStringOrNumber = false; // fail

//-------------------------------------------------------------------------------------------------------------
// ARRAY

let names = ["jenny", "jane", "tom"]; // [string] 일 경우 names에 추가할 사항도 string이여야 합니다.
// names.push(3); //fail : string이 아닌 number이기 때문입니다.
names.push("john"); //pass

let numbers = [10, 20, 30]; //[number] 일 경우 names에 추가할 사항도 number이여야 합니다.
// numbers.push("john"); //fail : number가 아닌 string이기 때문입니다.
numbers.push(40); //pass

//-------------------------------------------------------------------------------------------------------------
// ARRAY - STRING

let testStringArray: string[]; // string으로 구성된 배열이라는 것을 나타냅니다.
// testStringArray = [1, 2, 3]; //fail : string이 아닌 number이기 때문입니다.
testStringArray = ["jan", "Feb", "Mar"]; //pass

//-------------------------------------------------------------------------------------------------------------
// ARRAY - NUMBER

let testNumberArray: number[]; // number로 구성된 배열이라는 것을 나타냅니다.
// testNumberArray = ["jan", false, 20]; //fail : number가 아닌 string 또는 boolean의 값이 포함되었기 때문입니다.
testNumberArray = [1, 2, 3]; //pass

//-------------------------------------------------------------------------------------------------------------
// ARRAY - STRING OR NUMBER

let testStringOrNumberArray: (string | number)[]; //배열의 값이 string 또는 number인 경우
testStringOrNumberArray = [1, 2, "string"]; //pass
// testStringOrNumberArray = [1, 2, "string", true]; //fail : number와 string이 아닌 배열 안에  boolean값이 들어가서 fail이 됩니다.

//-------------------------------------------------------------------------------------------------------------
// OBJECT

let user = {
  username: "john",
  age: 222,
  isAdmin: false,
};

user.username = "admin"; //pass
// user.age = "20"; //fail : user객체에서 선언한 값은 number이기 때문에 값을 변경시키고자 한다면 동일한 type을 가져야 합니다.
user.age = 20; //pass
user.isAdmin = true; //pass
// user.phone = "+8110123445678" //fail : user의 phone이라는 항목을 추가하고 싶다면 user내에 type으로 선정된 부분이 없기 떼문입니다.

// ":" 대신 "="사용하면 안됩니다. type을 정의할때는 ":"을 사용합니다.
let userObj: {
  username: string;
  age: number;
  isAdmin: boolean;
};
/**
 * 만약 userObj에서 type으로 정의한 대로 없다면 형식이 맞지 않다는 에러가 발생할 것입니다.
 * 모두 작성이 되어야 pass가 됩니다.
 */
userObj = {
  username: "john",
  age: 20,
  isAdmin: false,
};

//-------------------------------------------------------------------------------------------------------------
// OBJECT 선택적 인자

/**
 * ?: 선택적으로 인자를 전달할 수 있습니다. 즉 다시 말해 phone이 들어갈 수도 있고 안 들어갈 수 도 있다는 뜻입니다.
 * 이렇게 구성하면 함수의 유연성을 위해 여러 타입의 변수를 받을 수 있습니다.
 */
let userObj2: {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};
userObj2 = {
  username: "hugh",
  age: 20,
  isAdmin: false,
};

//-------------------------------------------------------------------------------------------------------------
// ANY

/**
 * any type은 어떤 타입도 지정할 수 있습니다. 일반 Javascript와 다르지 않습니다.
 * ts를 쓰는 이유가 없는 것과 다름 없습니다.
 */
let testAny;
testAny = "john";
testAny = 12;
testAny = true;
testAny = ["john"];
testAny = [true, 20, "John"];
testAny = {};

let testAnyArray: any[];
testAnyArray = [20, true, "coke", []]; //pass

//-------------------------------------------------------------------------------------------------------------
// FUNCTIONS

// type은 "let sayHi:()=>void"가 된다.
let sayHi = () => {
  console.log("hello world!");
};
// sayHi = "hello world!"; //fail

// 함수의 return값의 tyep을 정의합니다.
let funReturnString = (): string => {
  console.log("hello world!");
  return "world";
};

// props의 항목에 사용하는 부분도 type이 필요합니다.
let multiple = (num: number) => {
  return num * 2;
};

let multiple2 = (num: number): number => {
  return num * 2;
};

/**
 * void는 함수에서 return이 없을 경우 return 타입으로 사용됩니다.
 * num void는 값을 반환하지 않는 함수의 반환 값을 의미합니다. 함수에 return문이 없거나, 명시적으로 값을 반환하지 않을 때, 추론되는 타입입니다.
 * void를 반환 타입으로 지정했을 때, undefined 외에 다른 타입의 값도 반환 할 수도 있습니다.
 * 반환 값이 존재하면 안됩니다.(return이 있으면 안됩니다.)(undefind만 반환 가능합니다.).
 * 그래서 return에 어떤 값이 와도 상관은 없지만, 사용하지 않는다는 뜻으로 해석됩니다.
 */
let multiple3 = (num: number): void => {
  // return num * 2;
};

let sum = (num1: number, num2: number, another?: number) => {
  return num1 + num2;
};
sum(2, 3);

let func = (user: { username: string; age: number; phone?: string }) => {
  console.log("user: ", user.username);
};

//-------------------------------------------------------------------------------------------------------------
// TYPE ALIASES

/**
 * 새로운 타입 값을 하나 생성하는 것이 아니라 정의한 타입에 대해 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같습니다.
 * 타입 별칭과 인터페이스의 가장 큰 차이점은 타입의 확장 가능 / 불가능 여부입니다.
 * 인터페이스는 확장이 가능한데 반해 타입 별칭은 확장이 불가능합니다.
 * 가능한한 type 보다는 interface로 선언해서 사용하는 것을 추천합니다.
 */
type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: UserType2 = {
  username: "hugh",
  age: 20,
  theme: "dark",
};

//-------------------------------------------------------------------------------------------------------------
//INTERFACES

/**
 * 여러 타입을 모두 만족하는 하나의 타입을 의미합니다.
 * 인터페이스에서 extends 키워드는 인터페이스 상속을 통해 다중 상속을 지원하는 데 사용됩니다. 인터페이스 A가 인터페이스 B를 extends 할 경우,
 * 인터페이스 A는 인터페이스 B의 멤버를 상속받습니다.
 * 이를 통해 코드 재사용성과 계약(contract)의 구현을 강화할 수 있습니다.
 * 예를 들어, interface A extends B와 같이 사용하여 인터페이스 A가 인터페이스 B를 확장한다고 선언할 수 있습니다.
 */
interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}

const emp: IUser = {
  username: "tom",
  email: "tom@gmail.com",
  age: 20,
};

const emp2: IEmployee = {
  username: "tom",
  email: "tom@gmail.com",
  age: 20,
  employeeId: 10,
};

//-------------------------------------------------------------------------------------------------------------
//GENERICS

/**
 * 타입을 직접적으로 고정된 값으로 명시하지말고 '변수' 를 통해 언제든지 변할 수 있는 타입을 통해 보다 유연하게 코딩을 할 수 있는 장치입니다.
 * 타입을 변수화 한 것과 같습니다.
 * 꺾쇠와 문자 T를 이용해 표현합니다. 그리고 T는 변수명이라고 보면 됩니다.
 */
interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface IPost {
  id: number;
  titles: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<String> = {
  id: 1,
  title: "post title",
  desc: "post description",
  extra: ["str1", "str2"],
};

interface IPostEvenBetter<T extends object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: IPostEvenBetter<{ id: number; username: string }> = {
  id: 1,
  title: "post title",
  desc: "post description",
  extra: [
    {
      id: 1,
      username: "tom",
    },
  ],
};

const testMe3: IPostEvenBetter<IAuthor> = {
  id: 1,
  title: "post title",
  desc: "post description",
  extra: [
    {
      id: 1,
      username: "tom",
    },
  ],
};

const testMe4: IPostEvenBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post description",
  extra: [
    {
      id: 1,
      title: "category title",
    },
  ],
};
