import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-practice-game",
  templateUrl: "./practice-game.component.html",
  styleUrls: ["./practice-game.component.scss"]
})
export class PracticeGameComponent implements OnInit {
  time: number = 5;
  score: number = 0;
  isPlaying: boolean;
  wordInput: string = "";
  arrIndex: number = 0;
  i: number = 0;
  words: any = [
    { text: "the", state: null },
    { text: "continuation", state: null },
    { text: "of", state: null },
    { text: "breathe", state: null },
    { text: "is", state: null },
    { text: "when", state: null },
    { text: "mole", state: null },
    { text: "essay", state: null },
    { text: "because", state: null },
    { text: "lorem", state: null },
    { text: "can't", state: null },
    { text: "die", state: null },
    { text: "meal", state: null },
    { text: "prayer", state: null },
    { text: "continuation", state: null },
    { text: "angle", state: null },
    { text: "laborer", state: null },
    { text: "x-ray", state: null },
    { text: "pilot", state: null },
    { text: "stride.", state: null },
    { text: "primary", state: null },
    { text: "shaft", state: null },
    { text: "Europe.", state: null },
    { text: "friendly.", state: null },
    { text: "vague.", state: null },
    { text: "vender.", state: null }
  ];

  constructor() {}

  ngOnInit() {
    // console.log(check);
  }

  matchWords() {
    if (this.words[this.arrIndex].text === this.wordInput) {
      this.wordInput = "";
      this.changestate(true);
      this.i = 0;
      this.arrIndex += 1;
      this.completed();
      return false;
    } else {
      this.changestate("typing");
    }
  }

  changestate(state) {
    this.words[this.arrIndex].state = state;
  }

  onKey(event) {
    let wordArr = this.words[this.arrIndex].text.split("");
    let typedWord = this.wordInput.replace(/\s/g, "").split("");
    this.verfiyString(wordArr, typedWord);
    console.log(wordArr.length, typedWord.length);
    console.log(wordArr[this.i], typedWord[this.i]);
  }

  verfiyString(wordArr, typedWord) {
    if (wordArr[this.i] == typedWord[this.i]) {
      this.changestate("typing");
      if (wordArr.length == typedWord.length) {
        this.matchWords();
        return;
      } else {
        this.i += 1;
      }
    } else {
      this.changestate(false);
    }
  }

  delete(event) {
    this.i -= 1;
    this.onKey(event);
  }

  completed() {
    let arrayNumber = this.words.length - 1;
    if (this.words[arrayNumber].state == true) {
      console.log("Completed");
    }
  }
}
