# Assignment-05: GitHub Issues Tracker

### 🚀 Challenges [Answer to Questions]

1️⃣ What is the difference between var, let, and const?
- Ans: The main difference between `var`, `let`, and `const` is in scope and hoisting.  Again, there are also some other differences. Such as:
   1. `var` is globally scope, wheres `let` & `const` are block-scoped.
   2. `var` can be redeclared and updated within its scope, `let` cannot be redeclared but can be updated, and `const` cannot be redeclared nor updated.
   3. `var` & `let` don't need to be assigned a value immediately, but `const` need to assign the value at declaration.
---
2️⃣ What is the spread operator (...)?
- Ans: The spread operator is written as (...). It is used to expand or spread out the elements of an array, object, or iterable into individual parts.
In the example below, the Math function is using for an array with the help of spread operator.
```javascript
const numbers = [4, 7, 9];
console.log(Math.max(...numbers)); // 9
```
---
3️⃣ What is the difference between map(), filter(), and forEach()?
- Ans: `map(), filter(), and forEach() --> ` these 3 are array methods; but--
   1. `map()` is used to transform each element in an array and returns a new array of same length. Example:
   ```js
   const numbersArr1 = [1, 5, 9];
   const doubleIt = numbersArr1.map(num => num * 2);
   console.log(doubleIt); // [2, 10, 18]
   ```
   2. `filter()` is used to select some elements from an array and returns a new array. Example:
   ```js
   const arrNum = [10, 15, 20, 25, 30];
   const moreThan12 = arrNum.filter(num => num > 12);
   console.log(moreThan12); // [15, 20, 25, 30]
   ```
   3. `forEach()` is used to loop through the array and execute a function but it does not return a array. Example:
   ```js
   const numbersArr2 = [1, 2, 3];
   numbersArr2.forEach(num => {
      console.log(num);    // in new lines:- 1  2  3
   });
   ```
---
4️⃣ What is an arrow function?
- Ans: An arrow function is a shorter way to write a function in JavaScript introduced in ES6. It eliminates the need of `function` keyword. Example: 
```js
   const jogKoro = (ka, kha) => ka + kha;
```
---
5️⃣ What are template literals?
- Ans: Template literals are a way to write strings using backticks `(``)` instead of quotes introduced in ES6. Its easier to add variables and write multi-line texts.

---

###  **All Issues:** 
  - https://phi-lab-server.vercel.app/api/v1/lab/issues 

###  **Single Issue:**
   - https://phi-lab-server.vercel.app/api/v1/lab/issue/{id}

   - Example: https://phi-lab-server.vercel.app/api/v1/lab/issue/33

###  **Search Issue:** https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q={searchText}

   - Example:  https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=notifications
---

## 🔑 Demo Credentials
```text
Username: admin
Password: admin123
```

## 📤 What to submit
**GitHub Repository Link** & **Live Site Link**
<!-- also linkedIn  -->
---