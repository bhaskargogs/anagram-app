# AnagramApp

This project was created using Angular 2. 

# Instructions and Description

## Requirements

Install [NodeJS](https://nodejs.org/en/) to get the npm package manager 

## Building and running the application

Run the following commands:
```
git clone https://github.com/bhaskargogs/anagram-app
cd anagram-app
npm install
ng-serve
```
 Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Sorting

You can click on the `Anagrams` tab to sort in either ascending/descending order.

## Functionalitites

The main goal of this application is to generate Anagrams for any string typed through Service and Controller components.

### Service

I created a Service `AnagramService` that holds the logic behind generating Anagrams randomly while returning a Promise of an array out of any word string given as input.

The logic behind generating Anagrams out of words is done through `generateAnagram(word)` function which returns an array.

This array is then shuffled through `getRandom(array)` function which is triggered in each click function.

### Controller

In the Controller component, I have injected the `AnagramService` and used `getAnagram(word)` to get the Promise returned by Service to display the anagrams

<i>Note:</i> Comments are also given on the code
