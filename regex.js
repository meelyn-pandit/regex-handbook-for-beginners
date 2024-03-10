/**Regular Expressions (Regex) */

// regular expression literal
const re0 = /ab+c/

// both are the same

// RegExp class
const re1 = new RegExp('ab+c')

// simple pattern: /abc/

// special characters: /ab*c/

//How to use regex in javascript

// regex.methodname(string)
// string.test(string)

// test method - checks whether a string matches a specificed pattern or regex, returns true or false
let pattern = /hello/
let str = 'hello world'

let result = pattern.test(str)
console.log(result) // console logs true

// exec() method - returns an array containin details like matched text, index of match within string and input string itself
let result1 = pattern.exec(str)
console.log(result1) // conole.logs array [hello, index, input, groups]

// match() method - searches for occurrences of a pattern within a string, returns the first element matched
// // if the global flag (g), it returns an array containing all matches found or null if no matches are found

str = 'The quick brown fox jumps over the lazy dog'
let matches = str.match(/the/gi)
console.log(matches) // matches both The and the

// matchAll() method - returns an iterator of all results matching a regex against a string.
// // each element of the iterator is an array containing details about the match, including captured groups

str = "Hello world! This is a test string."
let regex = /[a-zA-Z]+/g // matches all letters, upper and lowercase

matches = str.matchAll(regex) // creates an array with each word as its own array

for (let match of matches) {
    console.log(match) // each word is matched, so each word is put into its own array with index, input, and groups
}

// regex = /[A-Z]+/g // matches all letters, upper and lowercase
// matches = str.matchAll(regex)
// for(let match of matches) {
//     console.log('upper case', match) // only matches the uppercase letters in the string
// }

// search() method  searches for a specified pattern within a string. 
//// It returns the index of the first occurrence of the pattern within the string or -1 if the pattern is not found
pattern = /brown/
str = 'The quick brown fox jumps over the lazy dog'
result = str.search(pattern)
console.log(result) // logs 10, which is the position of brown in the string

// replace() method replaces the first occurrence of a specified pattern in a string with another substring or value.
//// to replace all occurrences, you can use the global flag(g) in the regular expression.

str = 'Hello, world'
newStr = str.replace(/o/g, '0') // replaces all the o's with a zero

console.log(newStr)

// replaceAll() method replaces all occurrences of a specified substring or pattern with a replacement string.
//// differs from replace() in that it replaces all occurrences by default, without the need for a global flag (g)

str = 'apple,banana,apple,grape'
newStr = str.replaceAll('apple', 'orange') // replaces apple with orange
console.log(newStr) // all instances of apple replaced with orange 'orange,banana,orange,grape'

// split() method can accept a regex pattern as its argument to split a string into an array of substrings based on the specified patterns or delimiters
str = 'apple,banana,grape'
let arr = str.split(/,/)
console.log(arr) // splits string at commas into three array elements

/**Advanced searching with flagsl */
// two common flags: ignore (i) and global (g)

// ignore flag (i) - instructs the regular expression to ignore case sensitivity when searching for matches
re = /hello/i
let testString = 'Hello, World!'
result = re.test(testString)

console.log(result) // conole.logs true because it matches Hello despite differences in case

// global flag (g) - find all matches within a string, rather than stopping after the first match
re = /hi/g
testString = 'hi there, hi again!'
result = testString.match(re)
console.log(result) // console logs an array with two hi's

// combine flags to achieve specific matching behavior
//// using both the ignore flag and global flat allows for case-insensitive matching while finding all occurrences of the pattern

re = /hi/gi
testString = 'Hi there, HI again!'
result = testString.match(re)

console.log(result) // matches both Hi's because we removed case sensitivity and we used global flag

// u flag - handles unicode characters, especially surrotgate pairs, correctly
//// surrogate pairs used to represent characters outside the basic multilingual plane (BMP) in utf-18 encoding

// without the u flag
result1 = 'Smile Please 😊'.match(/[😒😊🙄]/);
console.log(result1) // without u flag, result is the unicode code

// with the u flag
let result2 = 'Smile Please 😊'.match(/[😒😊🙄]/u);
console.log(result2) // with u flag, result is the actual emoji

// anchors in regex - special characters in regex taht do not represent actual characters but instead indicate positions within a string
//// two main anchors: ^ and $
//// ^ marks beginning of string, checks if string starts with a specific character or pattern
//// $ marks end of string, checks if string ends with a specific character or pattern

// ^ matches the beginning of the text, checks if a string starts with a specific character or pattern
str = 'Mountain'
console.log(/^S/.test(str)) //output is false because there is no capital S

// $ anchor matches the end of the text. it checks if a string ends with a specific character or pattern
str = 'Ocean'
console.log(/n$/i.test(str)) //output is true because there is an n at the end of the string

// using ^ and $ together to see if it fully matches a pattern
let isValid = /^\d\d:\d\d$/.test('10:01')
console.log(isValid) // output is true because string starts with two digits followed by a colon and ends with two digits

// multiline mode of anchors (^ and $) - in some cases, you might want to match the beginning and end of individual lines within a multiline string.
//// multiline mode (m) flag allows you to do this
str = `1st line
2nd line
3rd line`

re = /^\d/g //'^\d matches the digit at the beginning of the string
matches = str.match(re)

console.log(matches) // output is '1' because it only matches first digit (1) in the string

// multiline mode (m): /^\d/gm is the regex pattern with the m flag enabled
//// ensure that ^ and $ match the beginning and end of individual lines within a multiline string, rather than just the entire string itself
str = `1st line
2nd line
3rd line`

re = /^\d/gm
matches = str.match(re)
console.log(matches) // output is '1', '2', '3' because it matches all digits on all lines

// Word Boundaries (\b) - special character in regular expressions called an anchor, just like ^ and $
//// used to match a position in the string where a word character (letter, digit, or underscore) is not followed or preceded by another word character.
///// \bword\b matches the word 'word' in the string but not substrings like 'wording' or 'swordfish'

pattern = /\bword\b/
pattern2 = /word/
console.log(pattern.test('This is a word.')) // output is true because it matches word
console.log(pattern.test('This is wording.')) // output is false because the pattern only matches 'word' and nothing else
console.log(pattern2.test('This is wording')) // output is true because pattern matches 'word' and anything before/after

// \b\d+\b matches whole numbers in the string, but doesn't include non-numeric characters adjacent to the numbers\
// ^\bword\b$ matches a string that consists solely of the word 'word'

// quantifiers in regex - symbols or characters that define how many instances of a character or group you're looking for

// exact count {n} - specifies an exact count of characters or character class you want to match
//// extract 'Year 2022'

str = 'Year: 2022'
re = /\d{4}/ // matches a four-digit number ; basically a concise and better way to write \d\d\d\d
result = str.match(re)
console.log(result) // output is an array, 2022 is matched because we specified a four digit number /\d{4}/

// range {n,m} - matches a character or character class from n to m times, inclusively
str = 'The meeting is scheduled for 10:30 AM and ends at 2 PM'
re = /\d{2,4}/g // matches numbers with 2 to 4 digits
result = str.match(re)
console.log(result) // output is an array, matches 10 and 30 because they are at least 2 digits long, but does not match the 2

// {n,} and shorthands - matches a character or charadcter class at least n times
str = 'the price of the item is $2500'
re = /\d{2,}/g // matches numbers with 2 or more digits

result = str.match(re)
console.log(result) // output is 2500 because it matches at least two digits and we do not specify the end of the number

// shorthands +, ?, *
// + matches one or more digits
let phone = '+1-(103)-777-0101'
result = phone.match(/\d+/g)
console.log(result) // output is an array of matched numbers. all numbers regardless of digit length are matched.

// ? means zero or one occurence of the preceding character or group, equivalent to {0,1}
str = 'The sky is blue in color, but the ocean is blue in colour'
result = str.match(/colou?r/g)
console.log(result) // output matches color and colour because the u? quantifier allows for zero or one occurence of the letter u

// * - zero or more occurences of the preceding character or group, equivalent to {0,}
str = 'computer science is fascinating, but computational engineering is equally interesting'
re = /comput\w*/g;
results = str.match(re)
console.log(results) // matches computer and computational because the * allows for zero or more occurrences
// \w is word?

// greedy quantifiers - quantifiers operate in greedy mode, or match as much of the preceding element as possible
regexp = /".+"/g // . matches any character and + quantifies it to match one or more times
str = 'The "Boy" and his "Friends" were here'
console.log(str.match(regexp)) // finds one match encompassing ("Boy" and his "Friends") rather than "Boy" and "Friends" separately

// regex is by default greedy (i.e. matching as many characters as possible)

// non greedy quantifiers (lazy mode) - in lazy mode, quantified chartacter4s are repeated the minimal number of times necessary to satisfy the pattern
//// enable the lazy mode by appending a question mark ? after the quantifier
////// *? or +? denotes lazy repetition
regexp = /".+?"/g
str = 'The "Boy" and his "Friends" were here'
console.log(str.match(regexp)) // output is '"Boy"' and '"Friends"' because of the ? after the quantifier +. ensures that each quoted string is matched separately by minimizing the number of character4s matched between the opening and closing quotes.

// Sets and Ranges in Regex

//sets - [] allows you to match any charaqcter within the set
//// [aeiou] matches any of the vowels a, e, i o, or u

str = 'The quick brown fox jumps over the lazy dog'
re = /[aeiou]/g
results = str.match(re)
console.log(results) // output is all the vowels in the string in an array

str = 'The cat chased the rats in the backyard'
re = /[cr]at/g
results = str.match(re)
console.log(results) // output matches both cat and rat because [cr]at matches words that start with either c or r and are followed by at

// ranges - specify a range of characters within a set.
//// [a-z] matches any lowercase letter from 'a' to 'z' and [0-9] matches any digit from '0' to '9'
str = 'Hello World!'
re = /[a-z]/g
results = str.match(re)
console.log(results) // output is an array of all unique letters in alphabetical order in string

// Negating/ Excluding ranges: to exclude certain characters from a set, use the ^ symbol inside the square brackets
str = 'The price is $19.99'
re = /[^0-9]/g
results = str.match(re)
console.log(results) // output is everything except the digits, becasue of ^0-9

// similarly [^a-z] will match any character that is not lowercase letter

str = 'The price is $19.99'
result = str.match(/[^a-z]/g)
console.log(result) // output is everything that is not a lowercase letter because of ^a-z. It does match the T though because it is case sensitive

// predefined character classes
//// \d matches any digit character, equivalent to the range [0-9]
phone = '+1-(103)-777-0101'
re = /\d/g
let numbers = phone.match(re)
let phoneNo = numbers.join('')
console.log(phoneNo) // output is one long string that contains all the numbers and no dashes

//// \s matches a single whitespace character including spaces, tabs, and newline characters.
//// \w matches any word character (alphanumeric character or underscore), equivalent to the range [a-zA-Z0-9_]

str = 'O2 is oxygen'
re = /\w\d/g
console.log(str.match(re)) // matches the 'O2 because it is a word character followed by a digit

//// inverse classes \D match any character not included in the corresponding lowercase class.
////// matches non-digit characters, non-whitespace characters, or non-word characters
phone = '+1-(103)-777-0101'
re = /\D/g
console.log(phone.replace(re, '')) //output is string of all digits, because \D found everything that was not a number (i.e. the dashes)
// and replaced them with nothing

/**Special Characters and Escaping in regex */
// metacharacters - have special meanings and are used to construcct patterns for matching text

// anchors - ^ and $
// alternation - |
// quantifiers - +, ?, {}
// predefined character classes - \d, \w, \s

// Dot (.) - used to match any single character except newline characters (\n)
//// serves as a wildcard, allowing for flexible pattern matching when the exact character is unknown or irrelevant
////// if you need the dot to match newline characters, use /s (not a typo!) flag in javascript, which enables single line mode

regex = /a.b/
console.log(regex.test('acb')) //output is true because it matches a followed by any string
console.log(regex.test('aXb')) //output is true it matches a followed by any string
console.log(regex.test('a\nb')) //output is false because the newline character (\n) is not matched
console.log(regex.test('a\nb', 's')) //output should be true because with the /s flag the newline is matched as well
console.log(regex.test('ab')) //output is false because we are missing a character between a and b

// the dot (.) can be combined with other regex elements to form more complex patterns.
//// /.at/ matches any three-charcter sequence ending with 'at', such as 'cat', 'bat', or 'hat'

// Escape Special Characters - essential when you want to search for or match these characters in input strings without invoking
// their special regex meanins
//// to matched a special character literally in regex pattern, you need to escape it by preceding it (put in front of) with a backslash(\)
////// this tells the regex engine to treat the special character as a regular character

str = 'This ^ symbol is called Caret '
re = /[\^]/g
results = str.match(re)
console.log(results) // matches the carrot only because of \^, without \ it will be interpreted as a literal caret symbol

// the / we use to escape metacharacters is itself a metacharacter and can be escaped with another backslash as //

// Groupings in RegEx
//// capturing groups - used to extract specific parts of a matched string.
///// path like 'resource/id' for instance 'posts/123'
/////// match this path use regex like /\w+\/\d+/

// \w+ matches one or more word characters
// \/ matches the forward slash (/)
// \d+ matches one or more digits
// \s matches whitespace

path = 'posts/123'
pattern = /\w+\/(\d+)/
match = path.match(pattern)
console.log(match) // output contains the entire string, and the digits '123' becuase of (\d+)

// using multiple capturing groups - to capture both the resource (like 'posts') and the id (like '123') from the path 'posts/123'
// you can use /(\w+)\/(\d+)/

path = 'posts/123'
pattern = /(\w+)\/(\d+)/
match = path.match(pattern)
console.log(match) // output contains both posts due to (\w+) and 123 due to (\d+), the / is included in the full string, but not its own array element

// named capturing groups - assign names to capturing groups, makes it easier to reference them later in code
//// (?<name>rule)
////// () indicates capturing group
////// ?<name> specifies the name of the capturing group
////// rule is a rule in the pattern, liek {2} indicating string is 2 characters long

path = 'posts/123'
pattern = /(?<resource>\w+)\/(?<id>\d+)/ // resource and id are names because they are preceded by the question mark
match = path.match(pattern)
console.log(match.groups) // output has groups array with an object that contains resource: 'posts' and id: '123'
console.log(match.groups.resource) // able to get data without using array indexing
console.log(match.groups.id)
// resource and id are the names assigned to the capturing groups
//// can access them using match.groups

// another example
//// path = 'posts/2022/02/18' and we want to capture the resource (posts), year (2022), month (02), day (18)
path = 'posts/2024/02/22'
pattern = /(?<resource>\w+)\/(?<year>\d{4})\/(?<month>\d{2})\/(?<day>\d{2})/ // capture groups are resource, year, month, and day
// rule is that the year, month and day are 4, 2, and 2 digits long respectively
match = path.match(pattern)
console.log(match.groups.resource)
console.log(match.groups.year)
console.log(match.groups.month)
console.log(match.groups.day)
// captures all the ids that we defined above in the groups object

// non-capturing groups - used to group parts of a pattern together for applying quantifiers or alternation, without capturing the matched substring
//// create non-capturing group by adding ?: at the beginning of the parentheses
////// /(?:\d)+/ tells regex engine not to cpature the matched substring

//capturing groups
let regexWithCapture = /(\d{2})\/(\d{2})\/(\d{4})/
// let regexWithCapture = /(?<month>\d{2})\/(?<day>\d{2})\/(?<year>\d{4})/ // splits string up and saves them to groups object
let matchWithCapture = regexWithCapture.exec('02/26/2024')
console.log(matchWithCapture) //output has captured month, day, and year as separate elements in the array

//non-capturing groups
let regexWithoutCapture = /(?:\d{2})\/(?:\d{2})\/(?:\d{4})/
let matchWithoutCapture = regexWithoutCapture.exec('02/26/2024')
console.log(matchWithoutCapture) // matches whole date string, does not split string up

// non-capturing groups(?:pattern) behave like regular capturing groups () in terms of matching patterns but they don't store the matched text
// in memory for later retrieval.
//// make them useful when you odn't need to extract specific parts of the matched text

// Backreferences - refer to previously captured groups within a regular expression.
/// syntax is \N in which N is an integer representing the capturing group number

// ex. remove the second lion in the string
let s = 'Lion Lion is the King'
pattern = /(\w+)\s+\1/ // (\w+)\s matches the word and creates capturing group using (), \1 is a backreference to refer to the 1st capturing group
result = s.replace(pattern, '$1') // replace the entire match with the first (technically second since 0 is first) capturing group using String.replace
console.log(s.match(pattern))
console.log(result)

// regex alternation - allows you to match different patterns within a single regex
//// similar to the logical OR operator
///// use the pipe | symbol to denote alternation, in which you can match either A or B
// A | B // This means you can match either pattern A or pattern B

// ex. matching time string in the hh:mm format
//// /\d{2}:\d{2}/ would match all the times, but also includ stuff like 99:99 which is not a real time
let timeString = '07:23 33:71 21:17 25:81'
pattern = /([01]\d|2[0-3]):[0-5]\d/g // [01]\d matches numbers from 00 to 19, and 2[0-3] matches numbers from 20-23, the only numbers allowed for hours
// the alternator | allows you to match multiple patterns
// [05]\d matches valid minutes
// : matches the colon
matches = timeString.match(pattern)
console.log(matches) // output is '07:23', and '21:17' the only valid times within the string

//Lookahead and lookbehind in regex
// lookahead = matches a pattern (x) only if it's followed by another specific pattern (y)
// syntax is x(?=y), in which x is the pattern you want to match, (?=y) is the lookahead asserttion by indicating that x should be followed by y

//ex. identify numbers followed by units miles but not km
let dist = 'He ran 5 miles, but not 10 kilometers'
regex = /\d+(?=\s*miles)/g
console.log(dist.match(regex)) // output only contains 5 becuase it is proceeded by miles and not kilometers

// multiple lookaheads - use x(?=y)(?=z) to impose multiple conditions for matching

// match strings that contain both 'foo' and 'bar'
regex = /(?=.*foo)(?=.*bar)/
console.log(regex.test('foobar')) //output is true, matches foo and bar in any order
console.log(regex.test('barfoo')) //output is true, matches foo and bar in any order
console.log(regex.test('foo')) //output is false, missing bar
console.log(regex.test('bar')) //output is false, missing foo

// negative lookaheads - (?!y), regex engine matches x only if it is not followed by y
text = 'He ran 5 miles, but not 10 kilometers'
regex = /\d+(?!\s*miles)/g // matches any digit followed by anything but miles, because (?!\s*miles) is the negative lookahead
console.log(text.match(regex)) //output is 10 because it is followed by kilometers

// lookbehind - provides a way to match patterns based on what precedes them, essentially matching an element if there is another specific element before it
// ex. match numbers preceded by $ but not €
let priceString = "The price is $100, but €200."
regex = /(?<=\$)\d+/g
console.log(priceString.match(regex)) // only matches the 100 because the $ preceeds it (before it) and (?<=\$) matches it
// \ is used to escape the special character '$', treating it as a literal character

// negative lookbehind - match a pattern only if it is not preceded by a specific pattern, 
// useful in excluding certain patterns from matches based on what precedes them

// ex. string with prices in different currencies, only match the numbers not preceded by the $ symbol
priceString = 'The price is $50, but not €100'
regex = /(?<!\$)\b\d+\b/g // (?<!\$) is the negative lookbehind syntax, matches the pattern only if it is not preceded by the literal string '$'
console.log(priceString.match(regex)) //output is 100 because it is not preceded by $ taht is matched with (?<!\$)

/**Practical Examples and Use Cases of Regex */
// password strength checking
function checkPasswordStrength(password) {
    let pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/
    return pattern.test(password)
}
// regex ensures that password contains at least 1 digit, 1 lowercase letter, 1 uppercase letter, 1 special character, and is at least 8 characters long
console.log(checkPasswordStrength('Pass0rd!'))
console.log(checkPasswordStrength('weakpassword'))

// here's what the pattern does:
//// (?=.*\d) - requires at least one digit
//// (?=.*[a-z]) - requires at least one lowercase letter
//// (?=.*[A-Z]) - requires at least one uppercase letter
//// (?=.*[!@#$%^&*]) - requires at least one special character
//// .{8,} - requires at minimum length of 8 characters

// Email Validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // matches email-name, the @ symbol, followed by website, the '.', followed by com
    return emailRegex.test(email)
}
console.log(validateEmail('example@email.com')) //true
console.log(validateEmail('invalid-email')) //false

// here's what the pattern does
//// ^ asserts teh start of the string
//// [^\s@]+ matches one or more characters that are not whitespace or '@'
//// @ matches the @ symbol
//// [^\s@]+ matches one or more characters that are not whitespace or '@'
//// \. matches the '.' symbol (escaped because '.' has a special meaning in regex)
//// [^\s@]+ matches one or more characters that are not whitespace or @
//// $ asserts the end of the string

// Phone number formatting function
// can find and format phone numbers using replace() method
function formatPhoneNumber(phoneNumber) {
    const phoneRegex = /(\d{3})(\d{3})(\d{4})/ // first part looks for 3 digits, followed by second match that has 3 digits, followed by 3rd match with 4 digits
    return phoneNumber.replace(phoneRegex, '($1) $2-$3') // replaces the string with the first match in parentheses
    // followed by the 2nd and 3rd match connected with a hyphen
}

const formattedNumber = formatPhoneNumber('9876543210')
console.log(formattedNumber) // (987) 654-3210

// the replace() method $1, $2, and $3 represent the cpatured groups in the regex pattern, corresponding to the three sets of digits in the phone number

/**Tips and Best Practices for Using Regular Expressions */
// 1. Understand the regular expression syntax
// 2. Test Regular Expressions - test multiple input strings to ensure they behave as expected in various scenarios
// 3. Optimize performance - do this by simplifying patterns or using more efficient alternatives where possible
// 4. Use built-in methods - js has .match(), .replace(), and .split() for common string manipulation tasks.
//// evaluate whether these methods can accomplish your task without the need for regex
// 5. Comment your regular expressions to explain parts of complex patterns
// 6. Break down Complex Patterns - breaking down complex patterns into manageable parts makes it easier to understand
//// use variables to store individual components of the pattern and combine them as needed
// 7. Use Online Resources and Keep on Practicing
