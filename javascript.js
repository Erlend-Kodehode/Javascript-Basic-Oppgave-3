/******************************************************************************
------------------------------------
!READ THE ASSIGNMENT TEXT CAREFULLY!
------------------------------------

1.

Use a normal 'for loop' to loop over the people array and do the following:

- If the objects 'name' value is "Otto", do not do any of the changes below to 
  that object (hint: the 'continue' keyword)

- Make a new key on each person object in the array called "city" and set the 
	value to a random city from the cities array.

- Make a new key on each person object called "title" and set it to "Mr." for
	males and "Ms." for females.
	
- Increment the age by 2

- Add "coding" to the beginning of the hobby array on each object.



PS: Use only 1 loop to do the above steps.

console.log(people) after your loop to check that your changes are correct.

Use your loop to also calculate the combined 
age of all the people objects and store it in the combinedAge variable.

Then, after the loop, use the combined age to calculate the average age
of everyone and store it in the averageAge variable.

Do your calculations AFTER you add the two years to the ages, and remember,
skip Otto!

******************************************************************************/

const cities = ["New York", "London", "Paris", "Berlin", "Copenhagen", "Rome"];

const people = [
  {
    name: "Thomas",
    male: true,
    age: 23,
    hobbies: ["cycling", "football", "pool"],
  },
  {
    name: "Susan",
    male: false,
    age: 26,
    hobbies: ["jogging", "travelling", "dancing"],
  },
  {
    name: "Monica",
    male: false,
    age: 21,
    hobbies: ["skateboarding", "guitar", "concerts"],
  },
  {
    name: "Avery",
    male: true,
    age: 28,
    hobbies: ["writing", "games", "memes"],
  },
  {
    name: "Phillip",
    male: true,
    age: 24,
    hobbies: ["boxing", "wrestling", "mma"],
  },
  {
    name: "Otto",
    male: true,
    age: 36,
    hobbies: ["movies", "cinema", "music"],
  },
  {
    name: "Annabelle",
    male: false,
    age: 30,
    hobbies: ["makeup", "fashion", "shopping"],
  },
  {
    name: "Cathy",
    male: false,
    age: 18,
    hobbies: ["design", "drawing", "css"],
  },
];
let combinedAge = 0;

//your code here

// For of loop to go through the object array
for (const person of people) {
  // Skips the person if their name is Otto
  if (person.name === "Otto") continue;
  // Adds a random city from the city array
  person.city = cities[Math.floor(Math.random() * cities.length)];
  // Gives the person an appropriate title based on their gender
  person.title = person.male ? "Mr." : "Ms.";
  // Increaments their age by 2
  person.age += 2;
  // Adds coding to the beggining of each persons hobby array
  person.hobbies.unshift("coding");
  // Adds the current persons age to the combinedAge variable
  combinedAge += person.age;
}
console.log(people);

//Divides the combined age with the number of people to get the avrage age
let averageAge = combinedAge / people.length;
console.log(averageAge);

/******************************************************************************
2.

Make the following function:

It should take in 1 number as a parameter.

The function should return an array of random numbers between 1 and 6, the 
length of the array is decided by the number the function receives as a 
parameter (think of it as the number of dice we roll)

Examples: 
diceRoller(4) should return something like: [4, 1, 2, 6]
diceRoller(6) should return something like: [5, 5, 6, 2, 3, 4]

EXTRA CREDIT:
(This is not mandatory)
Add a second parameter to the function that decides how many faces the dice 
should have.
diceRoller(5, 20) should return an array of 5 random numbers ranging from 1-20 
******************************************************************************/

function diceRoller(diceNum, diceFaces) {
  //declares an array to return
  diceArray = [];
  //loops "diceNum" times
  for (let i = 0; i < diceNum; i++) {
    //adds a random number between 1 and "diceFaces" to diceArray
    diceArray.push(Math.ceil(Math.random() * diceFaces));
  }
  return diceArray;
}

/******************************************************************************
3.

Make the following function:

The function should take in 1 array of strings.

Inside the function, do this:

Write a loop that loops strings in the array, and does the following:
- Removes whitespace from the beginning and end of each word
- Converts all the words to lower case

Use a "FOR of" loop.

After the loop, use a method to join the array into a string with a single 
space between the words (" "), and return the resulting string.

Example:
[" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"]
should return:
"this text needs to be cleaned up"
******************************************************************************/
testArray = [" thIS", "teXt  ", " nEeds ", "to", "BE", "cleANED   ", " Up"];

const cleaner = (array) => {
  //declares array to return
  newArray = [];
  //goes through each string in the provided array
  for (const string of array) {
    //adds a trimmed and lovercased version of the string to newArray
    newArray.push(string.trim().toLowerCase());
  }
  //returns a string consisting of the elememnts of newArray joined with a space between each element
  return newArray.join(" ");
};

console.log(cleaner(testArray));

/******************************************************************************
4.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Make a function called 'helloChecker' that takes in 1 string 
as a parameter.

Write code that checks all the words in the string if they match the word for 
'hello' in any of these languages:

hello - english
ciao - italian
salut - french
hallo - german
hola - spanish
czesc - polish

If any of the words in the string matches any of these, the function should 
return: "HELLO detected in (name of the language)."

If none of the words in the string match any of the words for hello in the 
different languages, your function should return: "No HELLO detected."

PS: Make sure the function is case insensitive, both 'Hello' and 'hello' 
should be detected.

I have provided some string variables to test your function with.
******************************************************************************/
const greetings = [
  "Hello, how are you today?",
  "Diciamo ciao prima di andare!",
  "Salut, ça va bien?",
  "Kannst du mich hören? Hallo!",
  "Hva er regex?",
  "Nos saludamos con un alegre hola.",
  "Ona pomachała i powiedziała cześć z uśmiechem.",
  "Good afternoon gentlemen!",
];

//An object array that includes all the names of the relavent languages and their respective greetings
const languages = [
  {
    name: "english",
    greeting: "hello",
  },
  {
    name: "italian",
    greeting: "ciao",
  },
  {
    name: "french",
    greeting: "salut",
  },
  {
    name: "german",
    greeting: "hallo",
  },
  {
    name: "spanish",
    greeting: "hola",
  },
  {
    name: "polish",
    greeting: "cześć",
  },
];

function helloChecker(string) {
  //goes through each object of the languages object array
  for (const language of languages) {
    //puts the provided string to lovercase and check if it includes the greeting of the current language
    if (string.toLowerCase().includes(language.greeting))
      //returns that hello was detected and the language it was detected in
      return `HELLO detected in ${language.name}.`;
  }
  //will only run if no language matches since if they did the previous return statemant would've ended the loop
  return "No HELLO detected.";
}

for (const greeting of greetings) {
  console.log(helloChecker(greeting));
}

/******************************************************************************
5.

EXTRA CREDIT:

(This assignment is not mandatory, only for those who want an extra challenge)

Complete the function below to accomplish the following:

Return the string received in the first parameter with the 
following alterations:

any letter in the string matching charA (the second parameter in the function) 
will be replaced with charB (the third parameter) and VICE VERSA - meaning 
letters matching charA will be replaced with charB, and letters matching charB 
will be replaced with charA. See the expected console log comments below.

Examples:

doubleSwap("this is a string", "i", "s")
should return "thsi si a itrsng"

doubleSwap("m#ybe #nother #ppro#ch is necess#ry", "#", "a")
should return "maybe another approach is necessary"

doubleSwap("what is the point of this?", "o", "t")
should return "whao is ohe ptino tf ohis?"
******************************************************************************/

function doubleSwap(string, charA, charB) {
  //your code here

  //declares a string to return
  let returnString = "";
  //goes through each character in the string
  for (const char of string) {
    switch (char) {
      //if the character matches charA, charB is added to the returnstring
      case charA:
        returnString += charB;
        break;
      //if the character matches charB, charA is added to the returnstring
      case charB:
        returnString += charA;
        break;
      //if neither characters match it adds the current character to the returnstring
      default:
        returnString += char;
        break;
    }
  }
  //returns the new string with the swapped characters
  return returnString;
}
