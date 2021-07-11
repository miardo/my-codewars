export const initialElements = [
    {
        kata: '8',
        task: `Very simple, given a number, find its opposite. 
        
        Examples: 
        1: -1 
        14: -14 
        -34: 34`,
        code: `function opposite(number) { 
            return (-number) 
        }`
    },
    {
        kata: '8',
        task: `Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.`,
        code: `function even_or_odd(number) {
            if (number % 2 === 0 || number === 0) {
                return "Even"
            }
            return "Odd"
        }`
    },
    {
        kata: '8',
        task: `Complete the solution so that it reverses the string passed into it.
        'world'  =>  'dlrow'`,
        code: `function solution(str) {
            const wordArr = str.split('').reverse().join('');
            return wordArr
        }`
    },
    {
        kata: '8',
        task: `A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
        Implement a function that checks if something is a palindrome.
        
        Examples
        isPalindrome("anna")   ==> true
        isPalindrome("walter") ==> false
        isPalindrome(12321)    ==> true
        isPalindrome(123456)   ==> false`,
        code: `function isPalindrome(line) {
            const stringValue = String(line);
            if (stringValue === stringValue.split('').reverse().join('')) {
            return true;
            } 
            return false;
        }`
    },
    {
        kata: '7',
        task: `An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

        Note: anagrams are case insensitive
        
        Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
        
        Examples
        "foefet" is an anagram of "toffee"
        
        "Buckethead" is an anagram of "DeathCubeK"`,
        code: `var isAnagram = function(test, original) {
            const wordOne = test.toLowerCase().split('').sort().join('');
            const wordTwo = original.toLowerCase().split('').sort().join('');
        
            if (wordOne == wordTwo) {
            return true
            }
            return false
        };`
    },
    {
        kata: '8',
        task: `The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

        Given a year, return the century it is in.
        
        Input , Output Examples :
        1705 --> 18
        1900 --> 19
        1601 --> 17
        2000 --> 20`,
        code: `function century(year) {
            return Math.ceil(year/100);
        }`
    },
    {
        kata: '7',
        task: `Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

        The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.`,
        code: `function mygcd(x,y){
            if (y > x) return mygcd(y, x);
            if (!y) return x;
            return mygcd(y, x % y);
            }`
    },
    {
        kata: '7',
        task: `In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

            Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).`,
        code: `function factorial(n) {
                if (n < 0 || n > 12) {
                    throw new RangeError('Параметр должен быть между 0 и 12');
                }
                if (n === 0 || n === 1) {
                    return 1
                } else {
                    for (let i = n; i > 0; i--) {
                        if (n === i) {
                            n *= --i
                        } else {
                            n *= i
                        }
                    }
                }
                return n
            }`
    },
    {
        kata: '8',
        task: `Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.`,
        code: `class Kata {
                static getVolumeOfCuboid(length, width, height) {
                  return length * width * height;
                }
            }`
    },
    {
        kata: '8',
        task: `Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

            Example:
            
            ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
            None of the arrays will be empty, so you don't have to worry about that!`,
        code: `function removeEveryOther(arr){
                let newArr = [];
                for(let i = 0; i < arr.length; i += 2) {
                newArr.push(arr[i]);
                }
                return newArr;
            }`
    },
    {
        kata: '8',
        task: `Define a function that removes duplicates from an array of numbers and returns it as a result.

            The order of the sequence has to stay the same.`,
        code: `function distinct(a) {
                let newA = [];
                a.forEach(item => {
                if (!newA.includes(item)) {
                newA.push(item)
                }
            })
                return newA
                }`
    },
    {
        kata: '8',
        task: `You get an array of numbers, return the sum of all of the positives ones.

                Example [1,-4,7,12] => 1 + 7 + 12 = 20
                
                Note: if there is nothing to sum, the sum is default to 0.`,
        code: `function positiveSum(arr) {
                    let summ = 0;
                    for (let i = 0; i < arr.length; i++) {
                    if (arr[i] > 0) {
                        summ += arr [i]
                    } else {
                        summ += 0
                    }
                    }
                    return summ
                }`
    },
    {
        kata: '7',
        task: `Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1 (in C#, N might be less then 1).

                Replace certain values however if any of the following conditions are met:
                
                If the value is a multiple of 3: use the value "Fizz" instead
                If the value is a multiple of 5: use the value "Buzz" instead
                If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
                Method calling example:
                
                fizzbuzz(3) -->  [1, 2, "Fizz"]`,
        code: `function fizzbuzz(n) {
            let array = [];
            for (let i = 1; i <= n; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                array.push('FizzBuzz')
            } else if (i % 5 === 0) {
                array.push('Buzz')
            } else if (i % 3 === 0) {
                array.push('Fizz')
            } else {
                array.push(i)
            }
            }
            return array
        }`
    },
    {
        kata: '7',
        task: `Simple, given a string of words, return the length of the shortest word(s).

        String will never be empty and you do not need to account for different data types.`,
        code: `function findShort(s){
            const arrS = s.split(' ')
            let newArr = [];
            for (let i = 0; i < arrS.length; i++) {
                newArr.push(arrS[i].length)
            }
        return Math.min.apply(null, newArr)
        }`
    },
    {
        kata: '7',
        task: `Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

        For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
        
        Note: The function accepts an integer and returns an integer`,
        code: `function squareDigits(num){
            const numString = String(num);
            const numArray = numString.split('');
            let newNum = [];
            for (let i = 0; i < numArray.length; i++) {
               newNum.push(numArray[i] * numArray[i])
            }
            return Number(newNum.join(''))
            }`
    },
    {
        kata: '7',
        task: `The code provided is supposed return a person's Full Name given their first and last names.

            But it's not working properly.
            
            Notes
            The first and/or last names are never null, but may be empty.
            
            Task
            Fix the bug so we can all go home early.`,
        code: `class Dinglemouse{

                constructor( firstName, lastName ){
                this.firstName = firstName;
                this.lastName = lastName;
                }
                
                getFullName(){
                return (this.firstName +" "+ this.lastName).trim()
                }
                
            }`
    },
    {
        kata: '7',
        task: `Your job is to create a class called Song.

            A new Song will take two parameters, title and artist.
            
            const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
            
            mountMoose.title => 'Mount Moose'
            mountMoose.artist => 'The Snazzy Moose'
            You will also have to create an instance method named howMany() (or how_many()).
            
            The method takes an array of people who have listened to the song that day. The output should be how many new listeners the song gained on that day out of all listeners. Names should be treated in a case-insensitive manner, i.e. "John" is the same as "john".
            
            Example
            const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
            
            // day 1 (or test 1)
            mountMoose.howMany(['John', 'Fred', 'BOb', 'carl', 'RyAn']); => 5
            // These are all new since they are the first listeners.
            
            // day 2
            mountMoose.howMany(['JoHn', 'Luke', 'AmAndA']); => 2
            // Luke and Amanda are new, john already listened to it the previous day
            Also if the same person listened to it more than once a day it should only count them once.
            
            Example
            const mountMoose = new Song('Mount Moose', 'The Snazzy Moose');
            
            // day 1
            mountMoose.howMany(['John', 'joHN', 'carl']); => 2
            Good luck!`,
        code: `class Song {
                constructor(title, artist) {
                this.title = title;
                this.artist = artist;
                this.array = [];
                }
                
                howMany(data) {
                    const newArray = [];
                    let users = 0;
                    for (let i = 0; i < data.length; i++) {
                    newArray.push(data[i].toLowerCase())
                }
                        for (let i = 0; i < newArray.length; i++) {  
                    if (this.array.indexOf(newArray[i]) != -1) {
                        this.array.push(newArray[i]);
                    } else {
                        users++
                        this.array.push(newArray[i]);
                    }
                        }
                return users
                }
                }`
    },
    {
        kata: '7',
        task: `I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

                Example
                
                n = 3, so I expect a 3x3 square back just like below as a string:
                
                +++
                +++
                +++`,
        code: `function generateShape(integer){
                    let res = ""
                    for (let i = 0; i < integer * integer; i++) {
                    if (i % integer === 0 && i > 0) {
                    res += "\n"
                    }
                    res += "+"
                    }
                    return res
                    }`
    },
    {
        kata: '7',
        task: `Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.`,
        code: `sortme = function( names ){
            return names.sort()
        }`
    },
    {
        kata: '8',
        task: `Nathan loves cycling.

        Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
        
        You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
        
        For example:
        
        time = 3 ----> litres = 1
        
        time = 6.7---> litres = 3
        
        time = 11.8--> litres = 5`,
        code: `function litres(time) {
            return Math.floor(time * 0.5);
        }`
    },
    {
        kata: '7',
        task: `You are given an odd-length array of integers, in which all of them are the same, except for one single number.

        Complete the method which accepts such an array, and returns that single different number.
        
        The input array will always be valid! (odd-length >= 3)
        
        Examples
        [1, 1, 2] ==> 2
        [17, 17, 3, 17, 17, 17, 17] ==> 3`,
        code: `function stray(numbers) {
            let num = 0;
            if (numbers[0] === numbers[1]) {
            num = numbers[0];
            } else if (numbers[0] != numbers[1]) {
            num = numbers[2];
            }
            for (let i = 0; i <= numbers.length; i++) {
            if (numbers[i] != num)
                return numbers[i]
            }
        }`
    },
    {
        kata: '7',
        task: `Given a two-dimensional array, return a new array which carries over only those arrays from the original, which were not empty and whose items are all of the same type (i.e. homogenous). For simplicity, the arrays inside the array will only contain characters and integers.

        Example:
        
        Given [[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]], your function should return [[1, 5, 4], ['b']].
        
        Addendum:
        
        Please keep in mind that for this kata, we assume that empty arrays are not homogenous.
        
        The resultant arrays should be in the order they were originally in and should not have its values changed.
        
        No implicit type casting is allowed. A subarray [1, '2'] would be considered illegal and should be filtered out.`,
        code: `function filterHomogenous(arrays) {
            let arr = [];
            for (let i = 0; i < arrays.length; i++) {
                let count = 0;
            const newArr = arrays[i];
            for (let j = 0; j < newArr.length; j++) {
                if (typeof newArr[0] === typeof newArr[j] || newArr.length === 1) {
                count++
                } else {
                count = 0
                }
            }
            if (count === newArr.length && newArr.length != 0) {
                arr.push(arrays[i])
            }
            }
            return arr;
        }`
    },
    {
        kata: '7',
        task: `You have a group chat application, but who is online!?

        You want to show your users which of their friends are online and available to chat!
        
        Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.
        
        If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
        
        If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}
username will always be a string, status will always be either 'online' or 'offline' (UserStatus enum in C#) and lastActivity will always be number >= 0.

Finally, if you have no friends in your chat application, the input will be an empty array []. In this case you should return an empty object {} (empty Dictionary in C#).`,
        code: `const whosOnline = (friends) => {
            let nameOnline = [];
            let nameOffline = [];
            let nameAway = [];
            let newObj = {
            }
            for (let i = 0; i < friends.length; i++) {
            if (friends[i].status === 'online' && friends[i].lastActivity <= 10) {
            nameOnline.push(friends[i].username)
            } else if (friends[i].status === 'offline' ) {
                nameOffline.push(friends[i].username)
            } else if (friends[i].status === 'online' && friends[i].lastActivity > 10) {
            nameAway.push(friends[i].username)
            }
            }
                if (nameOnline.length > 0) {
            newObj.online = nameOnline
            } 
            if (nameOffline.length > 0) {
            newObj.offline = nameOffline
            } 
            if (nameAway.length > 0) {
            newObj.away = nameAway
            }
            return newObj
        }`
    }
];