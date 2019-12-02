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
// const words = ["tank", "boy", "tourist", "ten",
//         "pen", "car", "marble", "sonnet", "pleasant",
//         "ink", "atom", "Hello", "World"]

// console.log("Starting with 'H'");
// words.forEach(e => {

//         if (_.startsWith(e, 'H')) {

//                 console.log(e);
//         }
// });

// console.log("Ending with 'd'");
// words.forEach(e => {

//         if (_.endsWith(e, 'd')) {

//                 console.log(e);
//         }
// });

//The _.forIn() function can be used to iterate over object properties.
// const p = { age: 24, name: "Rebecca", occupation: "teacher", hello: "world" };

// _.forIn(p, (value, key) => {

//         console.log(`${key}: ${value}`);
// })

// Locash library contains several functions that work with the case of words.
// const words = ["sky", "Sun", "Blue Island", "Hello World"];

// console.log(_.map(words, _.camelCase));
// console.log(_.map(words, _.capitalize));
// console.log(_.map(words, _.kebabCase));
// console.log(_.map(words, _.lowerCase));
// console.log(_.map(words, _.upperCase));


// const first = "Hello World"
// console.log(first);

var data = ['Hello', 'World'];

// var data = (['Hello', 'World'], ['Hello']);

// _.times(5, () => {

//         console.log(data);
// })

// console.log(_.chunk(data, 1));

// console.log(_.join(data, '~'));

// console.log(_.join(data, ' '));

// console.log(_.reverse(data));

// console.log(_.last(data));

// console.log(_.slice(data, 1, 5));

// console.log(_.sortedIndex(data, 10));

// console.log(_.countBy(data, 'length'));

// console.log(_.sample(data));

// function duplicate(n) {
//         return [n, n];
// }

// console.log(_.flatMap(data, duplicate));

// console.log(_.size(data));


// _.defer(function (stamp) {
//         console.log(_.now() - stamp);
// }, _.now());
// // => Logs the number of milliseconds it took for the deferred invocation.


// console.log(_.isDate(new Date));

// console.log(_.isRegExp(/Hello World/));

// console.log(_.escapeRegExp(data));

// console.log(_.initial(data));

// console.log(_.words(data));

// console.log(_.intersection(data));

// console.log(_.last(data));

// console.log(_.nth(data, 0));

// console.log(_.nth(data, -1));

// console.log(_.pull(data, 'Hello'));

// console.log(_.reverse(data));

// console.log(_.take(data, 1));

// console.log(_.takeRight(data));

// console.log(_.union(data));

// console.log(_.uniq(data));

// console.log(_.without(data, 'Hello'));

// console.log(_.zip(data));

// _.forEach(data, function (value) {
//         console.log(value);
// });

// console.log(_.invokeMap(data, String.prototype.split, ''));

// console.log(_.sample(data));

// console.log(_.sampleSize(data, 2));

// console.log(_.shuffle(data));

// console.log(_.size(data));

/* Flip */
// var data = _.flip(function () {
//         return _.toArray(arguments);
// })

// data = ['Hello']
// console.log(data);

console.log(_.padStart(data, 20, '.'));