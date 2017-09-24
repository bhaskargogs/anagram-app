import {Component, OnInit} from '@angular/core';
import {AnagramService} from './anagram.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AnagramService]
})
export class AppComponent implements OnInit {
  title = 'app';
  word: String;
  anagrams: String[];
  isDesc: boolean;

  constructor(private anagramService: AnagramService) {
  }

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
  getAnagrams(word): void {
    if (this.anagrams !== []) {
      this.anagrams = [];
    }
    this.anagramService.getAnagram(this.word).then(anagrams => this.anagrams = anagrams);
  }

}
