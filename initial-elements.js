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
    }
];
