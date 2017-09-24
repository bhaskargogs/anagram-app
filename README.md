# AnagramApp

This project was created using Angular 2. 

# Instructions and Description

## Building and running the application

Run the following commands:
```
git clone https://github.com/bhaskargogs/anagram-app
cd anagram-app
npm install
ng-serve
```
 Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Functionalitites

The main goal of this application is to generate Anagrams for any string typed.

`getAnagram(word)` produces an array of anagrams (`anagrams`), for the input `word`

`getRandom(array)` makes the items of the `array` shuffle. 

`generateAnagram(word)` makes sure that the array `anagrams` is empty (by making it empty, if not) and generates anagrams randomly. It is done by calling the `getRandom` method on `getAnagram` method.

  
