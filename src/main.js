// import axios from 'axios';
// import iziToast from 'izitoast';
// import 'izitoast/dist/css/iziToast.min.css';

// const refs = {
//   button: document.querySelector('.js-btn'),
//   form: document.querySelector('.js-form'),
//   list: document.querySelector('.js-list'),
//   container: document.querySelector('.form-container'),
// };
// let query;

// // refs.button.addEventListener('click', onClick);
// refs.form.addEventListener('submit', onSubmit);

// function onSubmit(ev) {
//   ev.preventDefault();

//   query = ev.target.elements.query.value;

//   // const formData = new FormData(ev.target);
//   // const queries = formData
//   //   .getAll('query')
//   //   .map(query => query.trim())
//   //   .filter(query => query);

//   fetchCountry(query);
// }

// async function fetchCountry(query) {
//   const options = {
//     method: 'GET',
//     url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${query}`,
//     headers: {
//       'x-rapidapi-key': 'c5ce318161msh6f54f80d0d6d8dep16ecc9jsn4bc9b82f1540',
//       'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response);
//   } catch (error) {
//     console.error(error);
//   }

// const BASE_URL = 'https://wft-geo-db.p.rapidapi.com/v1/';
// const END_POINT = 'geo/countries/';
// const url = `${BASE_URL}${END_POINT}${query}`;
// const options = {
//   headers: {
//     'x-rapidapi-key': 'c5ce318161msh6f54f80d0d6d8dep16ecc9jsn4bc9b82f1540',
//     'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
//   },
// };
// try {
//   const response = await axios.get(url, options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
// const resps = queries.map(async query => axios.get(`${query}`));
// const data = await Promise.allSettled(resps);
// console.log(data);
// return data
//   .filter(resp => resp.status === 'fulfilled')
//   .map(resp => resp.value.data);

// function onClick() {
//   const addinput =
//     '<input type="text" name="query" placeholder="Search country..." />';

//   refs.form.insertAdjacentHTML('beforeend', addinput);
// }

// ===================================
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// function makeTransaction(quantity, pricePerDroid, customerCredits) {
//   let totalOrdered = quantity * pricePerDroid;

//   if (totalOrdered > customerCredits) {
//     return "Insufficient funds!";
//   } else {
//     return `You ordered ${quantity} droids worth ${totalOrdered} credits!`;
//   }
// }
// console.log(makeTransaction(5, 3000, 23000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000, 15000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 5000, 8000)); // "Insufficient funds!"
// console.log(makeTransaction(8, 2000, 10000)); // "Insufficient funds!"
// console.log(makeTransaction(10, 500, 5000)); // "You ordered 10 droids worth 5000 credits!"

// function slugify(title) {
//   return title.toLowerCase().split(" ").join("-");
// }
// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function makeArray(firstArray, secondArray, maxlength) {
//   const arr = firstArray.concat(secondArray);

//   return arr.slice(0, maxlength);
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// function filterArray(numbers, value) {
//   let arr = [];
//   for (const num of numbers) {
//     if (num > value) {
//       arr.push(num);
//     }
//   }
//   return arr;
// }
// function isEnoughCapacity(products, containerSize) {
//   let allprod = 0;
//   for (const key in products) {
//     allprod += products[key];
//   }
//   if (allprod <= containerSize) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

// console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

// console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

// console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false

// function changeEven(numbers, value) {
//   let arr = [];
//   for (let num of numbers) {
//     if (num % 2 === 0) {
//       arr.push(num + value);
//     } else {
//       arr.push(num);
//     }
//   }
//   return arr;
// }
// // console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// // function getUserNames(users) {
// //   return users.map((user) => user.name);
// // }
// // console.log(
// //   getUserNames([
// //     {
// //       name: "Moore Hensley",
// //       email: "moorehensley@indexia.com",
// //       balance: 2811,
// //     },
// //     {
// //       name: "Sharlene Bush",
// //       email: "sharlenebush@tubesys.com",
// //       balance: 3821,
// //     },
// //     {
// //       name: "Ross Vazquez",
// //       email: "rossvazquez@xinware.com",
// //       balance: 3793,
// //     },
// //     {
// //       name: "Elma Head",
// //       email: "elmahead@omatom.com",
// //       balance: 2278,
// //     },
// //     {
// //       name: "Carey Barr",
// //       email: "careybarr@nurali.com",
// //       balance: 3951,
// //     },
// //     {
// //       name: "Blackburn Dotson",
// //       email: "blackburndotson@furnigeer.com",
// //       balance: 1498,
// //     },
// //     {
// //       name: "Sheree Anthony",
// //       email: "shereeanthony@kog.com",
// //       balance: 2764,
// //     },
// //   ])
// // ); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

// function getUsersWithFriend(users, friendName) {
//   return users.filter((a) => a.friends.includes(friendName));
// }

// const allUsers = [
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//   },
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//   },
// ];

// console.log(getUsersWithFriend(allUsers, "Briana Decker"));
// // [
// //   {
// //     name: "Sharlene Bush",
// //     friends: ["Briana Decker", "Sharron Pace"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// // [
// //   {
// //     name: "Elma Head",
// //     friends: ["Goldie Gentry", "Aisha Tran"]
// //   },
// //   {
// //     name: "Sheree Anthony",
// //     friends: ["Goldie Gentry", "Briana Decker"]
// //   }
// // ]

// console.log(getUsersWithFriend(allUsers, "Adrian Cross")); // []

// function getTotalBalanceByGender(users, gender) {
//   return users
//     .filter((a) => a.gender === gender)
//     .reduce((a, b) => a + b.balance, 0);
// }
// const clients = [
//   {
//     name: "Moore Hensley",
//     gender: "male",
//     balance: 2811,
//   },
//   {
//     name: "Sharlene Bush",
//     gender: "female",
//     balance: 3821,
//   },
//   {
//     name: "Ross Vazquez",
//     gender: "male",
//     balance: 3793,
//   },
//   {
//     name: "Elma Head",
//     gender: "female",
//     balance: 2278,
//   },
//   {
//     name: "Carey Barr",
//     gender: "male",
//     balance: 3951,
//   },
//   {
//     name: "Blackburn Dotson",
//     gender: "male",
//     balance: 1498,
//   },
//   {
//     name: "Sheree Anthony",
//     gender: "female",
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, "male")); // 12053

// console.log(getTotalBalanceByGender(clients, "female")); // 8863

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     return this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const idx = this.#items.indexOf(itemToRemove);
//     if (idx > -1) {
//       return this.#items.splice(idx, 1);
//     }
//   }
// }
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// storage.removeItem("Scaner");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }

  getValue() {
    return this.#value;
  }

  padEnd(str) {
    return (this.#value += str);
  }

  padStart(str) {
    return (this.#value = str + this.#value);
  }

  padBoth(str) {
    return (this.#value = str + this.#value + str);
  }
}
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
