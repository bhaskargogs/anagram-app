import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  word: String;
  anagrams: String[];
  isDesc: boolean;

  sort(): void {
    this.isDesc = !this.isDesc;
    const direction = this.isDesc ? 1 : -1;

    this.anagrams.sort(function (a, b) {
      if (a < b) {
        return -1 * direction;
      } else if (a > b) {
        return 1 * direction;
      } else {
        return 0;
      }
    });
  }

  ngOnInit(): void {
    this.isDesc = false;
  }

  /*
  *generateAnagram(String) function is used to generate anagrams randomly from a word string
  * */
  generateAnagram(word): void {
    if (this.anagrams !== []) {
      this.anagrams = [];
    }
    this.anagrams = this.getRandom(this.getAnagram(word));
  }

  /*
  * getRandom(String[]) function is used to generate different anagrams by shuffling
  */
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

  /*
  getAnagram(String) is the main function to generate anagrams from a word
  */
  getAnagram(word: String): String[] {
    if (word.length < 2) {
      return [word];
    }
    const anagrams = [];
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      if (word.indexOf(letter) !== i) {
        continue;
      }
      const shortWord = word.substr(0, i) + word.substr(i + 1, word.length - 1);
      const shortWordArr = this.getAnagram(shortWord);
      for (let j = 0; j < shortWordArr.length; j++) {
        anagrams.push(letter + shortWordArr[j]);
      }
    }
    return anagrams;
  }

}
