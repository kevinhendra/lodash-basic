// The _.first()/_.head() functions return the first array element; the _.last() function returns the last array element.
const _ = require("lodash")

// words = ['sky', 'wood', 'forest', 'falcon',
//         'pear', 'ocean', 'universe'];

// let fel = _.first(words);
// let lel = _.last(words);

// console.log(`First element: ${fel}`);
// console.log(`Last element: ${lel}`);

//The _.chunk() function creates an array of elements split into groups the length of the specified size.
// const _ = require("lodash")

// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let c1 = _.chunk(nums, 2);
// console.log(c1);

// let c2 = _.chunk(nums, 3);
// console.log(c2);

//The _.slice() method gets a slice from an array. It takes two indexes: the starting and ending index, where the starting index is inclusive and the ending is exclusive.
// const _ = require("lodash")

// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let c1 = _.slice(nums, 2, 6);
// console.log(c1);

// let c2 = _.slice(nums, 0, 8);
// console.log(c2);

//With the _.sample() function, we can pick a random element from an array.
// const _ = require("lodash")

// words = ['sky', 'wood', 'forest', 'falcon',
//         'pear', 'ocean', 'universe'];

// let word = _.sample(words);
// console.log(word);


//Lodash contains functions which determine the data type of a value.
// const _ = require("lodash");

// const vals = [1, 2, 'good', [1, 2], { name: 'Peter', age: 32 }];

// vals.forEach((e) => {

//         if (_.isNumber(e)) {
//                 console.log(`${e} is a number`);
//         }

//         if (_.isString(e)) {
//                 console.log(JSON.stringify(e) + ' is a string');
//         }

//         if (_.isArray(e)) {
//                 console.log(JSON.stringify(e) + ' is an array');
//         }

//         if (_.isObject(e)) {
//                 console.log(JSON.stringify(e) + ' is an object');
//         }

// });
// The _.startsWith() function determines if the string starts with the specified string. The _.endsWith() function determines if the string ends with the specified string.
const words = ["tank", "boy", "tourist", "ten",
        "pen", "car", "marble", "sonnet", "pleasant",
        "ink", "atom", "Hello", "World"]

console.log("Starting with 'H'");
words.forEach(e => {

        if (_.startsWith(e, 'H')) {

                console.log(e);
        }
});

console.log("Ending with 'd'");
words.forEach(e => {

        if (_.endsWith(e, 'd')) {

                console.log(e);
        }
});

//The _.forIn() function can be used to iterate over object properties.
const p = { age: 24, name: "Rebecca", occupation: "teacher", hello: "world" };

_.forIn(p, (value, key) => {

        console.log(`${key}: ${value}`);
})