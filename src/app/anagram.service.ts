import {Injectable} from '@angular/core';

@Injectable()
export class AnagramService {
  getAnagram(word): Promise<String[]> {
    return Promise.resolve(this.getRandom(this.generateAnagram(word)));
  }


  getRandom(array): String[] {
    let currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  generateAnagram(word: String): String[] {
    // return word if less than 2
    if (word.length < 2) {
      return [word];
    }
    // creating an array and looping over letters
    const anagrams = [];
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      // skip the letters if already taken into consideration
      if (word.indexOf(letter) !== i) {
        continue;
      }

      // main logic behind generating anagrams and pushing it to the array
      const shortWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
      const shortWordArr = this.generateAnagram(shortWord);
      for (let j = 0; j < shortWordArr.length; j++) {
        anagrams.push(letter + shortWordArr[j]);
      }
    }
    return anagrams;
  }
}
