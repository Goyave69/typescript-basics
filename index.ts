type Student = {
    username: string,
    age: number,
    country: string
}

let studentsByAge: Array<Student> = [];
let studentsByCountry: Array<Student> = [];

let firstGroup: Array<Student> = [
    {
        username: "jojo",
        age: 30,
        country: "FR"
    },
    {
        username: "coco",
        age: 25,
        country: "MEX"
    },
    {
        username: "coca",
        age: 19,
        country: "USA"
    }
];

let secondGroup: Array<Student> = [
    {
        username: "toto",
        age: 30,
        country: "FR"
    },
    {
        username: "pikachu",
        age: 49,
        country: "JPN"
    },
    {
        username: "aziz",
        age: 23,
        country: "DZ"
    }
];

function comparesByAge(a: Student, b: Student): number {
    return a.age - b.age;
}

function comparesByCountry(a: Student, b: Student): number {
    if ( a.country < b.country ){
        return -1;
      }
      if ( a.country > b.country ){
        return 1;
      }
      return 0;
  }

function filterBy(criteria: string, arrayToFilter: Array<Student>): Array<Student> {
    if (criteria === "age") {
        arrayToFilter.sort(comparesByAge);
    }

    if (criteria === "country") {
        arrayToFilter.sort(comparesByCountry);
    }

    return arrayToFilter;
}

console.log(filterBy("age", firstGroup), filterBy("country", secondGroup))
