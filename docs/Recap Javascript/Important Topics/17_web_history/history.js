class BrowserHistory {
  constructor(homepage) {
    this.visited = [homepage];
    this.pointer = 0;
  }

  visit(url) {
    this.visited = this.visited.slice(0, this.pointer + 1);
    this.visited.push(url);
    this.pointer += 1;
  }

  back(steps) {
    this.pointer -= steps;
    if (this.pointer < 0) this.pointer = 0;
    console.log(this.visited[this.pointer]);
  }

  forward(steps) {
    this.pointer += steps;
    if (this.pointer >= this.visited.length) {
      this.pointer = this.visited.length - 1;
    }

    console.log(this.visited[this.pointer]);
  }
}

// Step 1: Create the object
let obj = new BrowserHistory("leetcode.com"); // ["leetcode.com"]

// // Step 2: Call methods in order
obj.visit("google.com"); // visit google.com
obj.visit("facebook.com"); // visit facebook.com
obj.visit("youtube.com"); // visit youtube.com
obj.back(1); // go back 1 step
obj.back(1); // go back 1 step
obj.forward(1);
obj.visit("linkedin.com"); // visit linkedin.com (forwards are now cleared)
obj.forward(2); // try to go forward 2 steps (but no forward history)
obj.back(2); // go back 2 steps
obj.back(7); // try to go back 7 steps (go to first page)
