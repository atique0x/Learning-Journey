class BrowserHistory {
  constructor(homepage) {
    this.action = [null];
    this.visited = [homepage];
    this.pointer = 0;
  }

  visit(url) {
    this.visited.length = this.pointer + 1;
    this.visited.push(url);
    this.pointer = this.visited.length - 1;
    this.action.push(null);
  }

  back(steps) {
    this.pointer = this.pointer - steps;
    if (this.pointer < 0) this.pointer = 0;
    this.action.push(this.visited[this.pointer]);
  }

  forward(steps) {
    this.pointer += steps;
    if (this.pointer >= this.visited.length)
      this.pointer = this.visited.length - 1;
    this.action.push(this.visited[this.pointer]);
  }

  display() {
    console.log(this.visited);
    console.log(this.action);
  }
}

// Step 1: Create the object
let obj = new BrowserHistory("leetcode.com"); // ["leetcode.com"]

// Step 2: Call methods in order
obj.visit("google.com"); // visit google.com
obj.visit("facebook.com"); // visit facebook.com
obj.visit("youtube.com"); // visit youtube.com
obj.back(1); // go back 1 step
obj.back(1); // go back 1 step
obj.forward(1); // go forward 1 step
obj.visit("linkedin.com"); // visit linkedin.com (forwards are now cleared)
obj.forward(2); // try to go forward 2 steps (but no forward history)
obj.back(2); // go back 2 steps
obj.back(7); // try to go back 7 steps (go to first page)
obj;

obj.display();
