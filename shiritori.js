class Shiritori {
  constructor(arr) {
    this.arr = arr;
  }
  get lastEle() {
    return this.arr[this.arr.length - 1].charAt(
      this.arr[this.arr.length - 1].length - 1
    );
  }
  play(word) {
    if (this.arr.length === 0) {
      this.arr.push(word);
      console.log(this.arr);
    } else if (word.charAt(0) === this.lastEle) {
      if (this.arr.includes(word)) {
        console.log(`${word} already exist. Game-Over`);
      } else {
        this.arr.push(word);
        console.log(this.arr);
      }
    } else {
      console.log(`${word} does not start with ${this.lastEle}`);
      this.restart();
    }
  }
  get words() {
    console.log(this.arr);
  }
  restart() {
    this.arr.splice(0, this.arr.length);
    console.log("game restarted");
  }
}

const my_shiritori = new Shiritori([]);
my_shiritori.play("apple");
my_shiritori.play("eat");
my_shiritori.play("rat");
my_shiritori.words;
