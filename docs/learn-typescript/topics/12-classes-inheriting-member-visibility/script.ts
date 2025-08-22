{
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    display(): string {
      return `Hello, my name is ${this.name}`;
    }
  }

  const p1: Person = new Person("Atique", 26);
  console.log(p1.display());

  /*
Public Members (Default) - Accessible within class, subclass, outside
*/
  class User {
    public username: string; // same as just "username: string"

    constructor(username: string) {
      this.username = username;
    }

    public greet() {
      console.log(`Hi, I'm ${this.username}`);
    }
  }

  const u = new User("Atique");
  console.log(u.username); // ✅ Accessible
  u.greet(); // ✅ Accessible

  /*
Private - Accessible inside class only
*/

  class BankAccount {
    private balance: number;

    constructor(initialBanlance: number) {
      this.balance = initialBanlance;
    }

    deposit(amount: number) {
      this.balance += amount;
      console.log(`Deosite Ammount ${amount}`);
    }
    getBalance() {
      return this.balance;
    }
  }
  const account = new BankAccount(1000);
  account.deposit(500); // ✅ Allowed
  console.log(account.getBalance()); // ✅ Allowed
  //console.log(account.balance); // ❌ Error: balance is private

  /*
Protected - Accessible within the class and its subclasses
*/
  class Employee {
    protected salary: number;

    constructor(salary: number) {
      this.salary = salary;
    }
  }

  class Manager extends Employee {
    displaySalary(): void {
      console.log(`Manager's salary: ${this.salary}`); // ✅ Allowed
    }
  }

  const m = new Manager(80000);
  m.displaySalary(); // ✅ Works
  // console.log(m.salary); // ❌ Error: salary is protected
}
/*


Project
*/
enum Role {
  Admin = "admin",
  Member = "member",
}

enum BookStatus {
  Available = "Available",
  Borrowed = "Borrowed",
}

interface IBook {
  title: string;
  status: BookStatus;
}

class User {
  public username: string;
  protected borrowedBooks: IBook[] = [];

  constructor(username: string) {
    this.username = username;
  }

  addBorrowedBook(book: IBook) {
    this.borrowedBooks.push(book);
  }

  protected removeBorrowedBook(book: IBook) {
    this.borrowedBooks = this.borrowedBooks.filter(
      (b) => b.title !== book.title
    );
  }

  getBorrowedBooks(): IBook[] {
    return this.borrowedBooks;
  }
}

class Admin extends User {
  constructor(username: string) {
    super(username);
  }

  addBook(library: Library, title: string) {
    library.addBook(title);
  }

  removeBook(library: Library, title: string) {
    library.removeBook(title);
  }
}

class Member extends User {
  constructor(username: string) {
    super(username);
  }

  borrowBook(library: Library, title: string) {
    if (library.borrowBook(title)) {
      this.addBorrowedBook({ title, status: BookStatus.Borrowed });
      saveMembersToStorage();
    } else {
      alert(`Book "${title}" is not available.`);
    }
  }

  returnBook(library: Library, title: string) {
    if (library.returnBook(title)) {
      const book = this.getBorrowedBooks().find((b) => b.title === title);
      if (book) this.removeBorrowedBook(book);
      saveMembersToStorage();
    } else {
      alert(`Book "${title}" cannot be returned.`);
    }
  }
}

class Library {
  books: IBook[] = [];

  constructor() {
    this.loadFromStorage();
  }

  addBook(title: string) {
    this.books.push({ title, status: BookStatus.Available });
    saveLibraryToStorage();
    updateBookList();
  }

  removeBook(title: string) {
    this.books = this.books.filter((b) => b.title !== title);
    saveLibraryToStorage();
    updateBookList();
  }

  borrowBook(title: string): boolean {
    const book = this.books.find(
      (b) => b.title === title && b.status === BookStatus.Available
    );
    if (book) {
      book.status = BookStatus.Borrowed;
      saveLibraryToStorage();
      updateBookList();
      return true;
    }
    return false;
  }

  returnBook(title: string): boolean {
    const book = this.books.find(
      (b) => b.title === title && b.status === BookStatus.Borrowed
    );
    if (book) {
      book.status = BookStatus.Available;
      saveLibraryToStorage();
      updateBookList();
      return true;
    }
    return false;
  }

  loadFromStorage() {
    const data = localStorage.getItem("libraryBooks");
    if (data) this.books = JSON.parse(data);
  }

  showBooks(): IBook[] {
    return this.books;
  }
}

// --- LocalStorage Helpers ---
function saveLibraryToStorage() {
  localStorage.setItem("libraryBooks", JSON.stringify(library.showBooks()));
}

function saveMembersToStorage() {
  const membersData: { [key: string]: IBook[] } = {};
  Object.entries(members).forEach(([name, member]) => {
    membersData[name] = member.getBorrowedBooks();
  });
  localStorage.setItem("membersData", JSON.stringify(membersData));
}

function loadMembersFromStorage() {
  const data = localStorage.getItem("membersData");
  if (data) {
    const parsed: { [key: string]: IBook[] } = JSON.parse(data);
    Object.entries(parsed).forEach(([name, books]) => {
      const member = new Member(name);
      books.forEach((b) => member.addBorrowedBook(b));
      members[name] = member;
    });
  }
}

// --- Instances & DOM ---
const library = new Library();
const members: { [key: string]: Member } = {};

loadMembersFromStorage();

function updateBookList() {
  const bookList = document.getElementById("book-list")!;
  bookList.innerHTML = library
    .showBooks()
    .filter((b) => b.status === BookStatus.Available)
    .map((b) => `<li>${b.title}</li>`)
    .join("");
}

function updateMemberBooks() {
  const memberBooks = document.getElementById("member-books")!;
  memberBooks.innerHTML = Object.entries(members)
    .map(
      ([name, member]) =>
        `<li>${name}: ${
          member
            .getBorrowedBooks()
            .map((b) => b.title)
            .join(", ") || "None"
        }</li>`
    )
    .join("");
}

// --- Event Listeners ---
(document.getElementById("add-book-btn") as HTMLButtonElement).addEventListener(
  "click",
  () => {
    const input = document.getElementById("book-title") as HTMLInputElement;
    const title = input.value.trim();
    if (title) {
      new Admin("Admin").addBook(library, title);
      input.value = "";
    }
  }
);

(document.getElementById("borrow-btn") as HTMLButtonElement).addEventListener(
  "click",
  () => {
    const memberInput = document.getElementById(
      "member-name"
    ) as HTMLInputElement;
    const bookInput = document.getElementById(
      "borrow-book-title"
    ) as HTMLInputElement;

    const memberName = memberInput.value.trim();
    const bookTitle = bookInput.value.trim();

    if (memberName && bookTitle) {
      if (!members[memberName]) members[memberName] = new Member(memberName);
      members[memberName].borrowBook(library, bookTitle);
      updateMemberBooks();
      bookInput.value = "";
    }
  }
);

(document.getElementById("return-btn") as HTMLButtonElement).addEventListener(
  "click",
  () => {
    const memberInput = document.getElementById(
      "member-name"
    ) as HTMLInputElement;
    const bookInput = document.getElementById(
      "borrow-book-title"
    ) as HTMLInputElement;

    const memberName = memberInput.value.trim();
    const bookTitle = bookInput.value.trim();

    if (memberName && bookTitle && members[memberName]) {
      members[memberName].returnBook(library, bookTitle);
      updateMemberBooks();
      bookInput.value = "";
    }
  }
);

// --- Initial Render ---
updateBookList();
updateMemberBooks();
