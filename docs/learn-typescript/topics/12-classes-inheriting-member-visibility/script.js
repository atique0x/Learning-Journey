var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{
    var Person = /** @class */ (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.display = function () {
            return "Hello, my name is ".concat(this.name);
        };
        return Person;
    }());
    var p1 = new Person("Atique", 26);
    console.log(p1.display());
    /*
  Public Members (Default) - Accessible within class, subclass, outside
  */
    var User_1 = /** @class */ (function () {
        function User(username) {
            this.username = username;
        }
        User.prototype.greet = function () {
            console.log("Hi, I'm ".concat(this.username));
        };
        return User;
    }());
    var u = new User_1("Atique");
    console.log(u.username); // ✅ Accessible
    u.greet(); // ✅ Accessible
    /*
  Private - Accessible inside class only
  */
    var BankAccount = /** @class */ (function () {
        function BankAccount(initialBanlance) {
            this.balance = initialBanlance;
        }
        BankAccount.prototype.deposit = function (amount) {
            this.balance += amount;
            console.log("Deosite Ammount ".concat(amount));
        };
        BankAccount.prototype.getBalance = function () {
            return this.balance;
        };
        return BankAccount;
    }());
    var account = new BankAccount(1000);
    account.deposit(500); // ✅ Allowed
    console.log(account.getBalance()); // ✅ Allowed
    //console.log(account.balance); // ❌ Error: balance is private
    /*
  Protected - Accessible within the class and its subclasses
  */
    var Employee = /** @class */ (function () {
        function Employee(salary) {
            this.salary = salary;
        }
        return Employee;
    }());
    var Manager = /** @class */ (function (_super) {
        __extends(Manager, _super);
        function Manager() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Manager.prototype.displaySalary = function () {
            console.log("Manager's salary: ".concat(this.salary)); // ✅ Allowed
        };
        return Manager;
    }(Employee));
    var m = new Manager(80000);
    m.displaySalary(); // ✅ Works
    // console.log(m.salary); // ❌ Error: salary is protected
}
/*


Project
*/
var Role;
(function (Role) {
    Role["Admin"] = "admin";
    Role["Member"] = "member";
})(Role || (Role = {}));
var BookStatus;
(function (BookStatus) {
    BookStatus["Available"] = "Available";
    BookStatus["Borrowed"] = "Borrowed";
})(BookStatus || (BookStatus = {}));
var User = /** @class */ (function () {
    function User(username) {
        this.borrowedBooks = [];
        this.username = username;
    }
    User.prototype.addBorrowedBook = function (book) {
        this.borrowedBooks.push(book);
    };
    User.prototype.removeBorrowedBook = function (book) {
        this.borrowedBooks = this.borrowedBooks.filter(function (b) { return b.title !== book.title; });
    };
    User.prototype.getBorrowedBooks = function () {
        return this.borrowedBooks;
    };
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(username) {
        return _super.call(this, username) || this;
    }
    Admin.prototype.addBook = function (library, title) {
        library.addBook(title);
    };
    Admin.prototype.removeBook = function (library, title) {
        library.removeBook(title);
    };
    return Admin;
}(User));
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(username) {
        return _super.call(this, username) || this;
    }
    Member.prototype.borrowBook = function (library, title) {
        if (library.borrowBook(title)) {
            this.addBorrowedBook({ title: title, status: BookStatus.Borrowed });
            saveMembersToStorage();
        }
        else {
            alert("Book \"".concat(title, "\" is not available."));
        }
    };
    Member.prototype.returnBook = function (library, title) {
        if (library.returnBook(title)) {
            var book = this.getBorrowedBooks().find(function (b) { return b.title === title; });
            if (book)
                this.removeBorrowedBook(book);
            saveMembersToStorage();
        }
        else {
            alert("Book \"".concat(title, "\" cannot be returned."));
        }
    };
    return Member;
}(User));
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.loadFromStorage();
    }
    Library.prototype.addBook = function (title) {
        this.books.push({ title: title, status: BookStatus.Available });
        saveLibraryToStorage();
        updateBookList();
    };
    Library.prototype.removeBook = function (title) {
        this.books = this.books.filter(function (b) { return b.title !== title; });
        saveLibraryToStorage();
        updateBookList();
    };
    Library.prototype.borrowBook = function (title) {
        var book = this.books.find(function (b) { return b.title === title && b.status === BookStatus.Available; });
        if (book) {
            book.status = BookStatus.Borrowed;
            saveLibraryToStorage();
            updateBookList();
            return true;
        }
        return false;
    };
    Library.prototype.returnBook = function (title) {
        var book = this.books.find(function (b) { return b.title === title && b.status === BookStatus.Borrowed; });
        if (book) {
            book.status = BookStatus.Available;
            saveLibraryToStorage();
            updateBookList();
            return true;
        }
        return false;
    };
    Library.prototype.loadFromStorage = function () {
        var data = localStorage.getItem("libraryBooks");
        if (data)
            this.books = JSON.parse(data);
    };
    Library.prototype.showBooks = function () {
        return this.books;
    };
    return Library;
}());
// --- LocalStorage Helpers ---
function saveLibraryToStorage() {
    localStorage.setItem("libraryBooks", JSON.stringify(library.showBooks()));
}
function saveMembersToStorage() {
    var membersData = {};
    Object.entries(members).forEach(function (_a) {
        var name = _a[0], member = _a[1];
        membersData[name] = member.getBorrowedBooks();
    });
    localStorage.setItem("membersData", JSON.stringify(membersData));
}
function loadMembersFromStorage() {
    var data = localStorage.getItem("membersData");
    if (data) {
        var parsed = JSON.parse(data);
        Object.entries(parsed).forEach(function (_a) {
            var name = _a[0], books = _a[1];
            var member = new Member(name);
            books.forEach(function (b) { return member.addBorrowedBook(b); });
            members[name] = member;
        });
    }
}
// --- Instances & DOM ---
var library = new Library();
var members = {};
loadMembersFromStorage();
function updateBookList() {
    var bookList = document.getElementById("book-list");
    bookList.innerHTML = library
        .showBooks()
        .filter(function (b) { return b.status === BookStatus.Available; })
        .map(function (b) { return "<li>".concat(b.title, "</li>"); })
        .join("");
}
function updateMemberBooks() {
    var memberBooks = document.getElementById("member-books");
    memberBooks.innerHTML = Object.entries(members)
        .map(function (_a) {
        var name = _a[0], member = _a[1];
        return "<li>".concat(name, ": ").concat(member
            .getBorrowedBooks()
            .map(function (b) { return b.title; })
            .join(", ") || "None", "</li>");
    })
        .join("");
}
// --- Event Listeners ---
document.getElementById("add-book-btn").addEventListener("click", function () {
    var input = document.getElementById("book-title");
    var title = input.value.trim();
    if (title) {
        new Admin("Admin").addBook(library, title);
        input.value = "";
    }
});
document.getElementById("borrow-btn").addEventListener("click", function () {
    var memberInput = document.getElementById("member-name");
    var bookInput = document.getElementById("borrow-book-title");
    var memberName = memberInput.value.trim();
    var bookTitle = bookInput.value.trim();
    if (memberName && bookTitle) {
        if (!members[memberName])
            members[memberName] = new Member(memberName);
        members[memberName].borrowBook(library, bookTitle);
        updateMemberBooks();
        bookInput.value = "";
    }
});
document.getElementById("return-btn").addEventListener("click", function () {
    var memberInput = document.getElementById("member-name");
    var bookInput = document.getElementById("borrow-book-title");
    var memberName = memberInput.value.trim();
    var bookTitle = bookInput.value.trim();
    if (memberName && bookTitle && members[memberName]) {
        members[memberName].returnBook(library, bookTitle);
        updateMemberBooks();
        bookInput.value = "";
    }
});
// --- Initial Render ---
updateBookList();
updateMemberBooks();
