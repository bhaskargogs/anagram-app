import {Injectable} from '@angular/core';

@Injectable()
export class AnagramService {

  getAnagram(word): Promise<any> {
    return Promise.resolve();
  }

  generateAnagram(word, anagram = '', anagrams = []): any {
    if (!word) {
      anagrams.push(anagram);
      return;
    }
    for (let i = 0; i < word.length; i++) {
      this.generateAnagram(word.slice(0, i) + word.slice(i + 1), anagram + word[i]);
    }

    return [...Array.from(new Set(anagrams))];
  }
}
