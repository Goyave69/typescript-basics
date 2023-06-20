"use strict";
let studentsByAge = [];
let studentsByCountry = [];
let firstGroup = [
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
let secondGroup = [
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
function comparesByAge(a, b) {
    return a.age - b.age;
}
function comparesByCountry(a, b) {
    if (a.country < b.country) {
        return -1;
    }
    if (a.country > b.country) {
        return 1;
    }
    return 0;
}
function filterBy(criteria, arrayToFilter) {
    if (criteria === "age") {
        arrayToFilter.sort(comparesByAge);
    }
    if (criteria === "country") {
        arrayToFilter.sort(comparesByCountry);
    }
    return arrayToFilter;
}
console.log(filterBy("age", firstGroup), filterBy("country", secondGroup));
