// Implementation
function submitUser(username, password, name, email) {
    var user;
    if (name && email) {
        user = { username: username, password: password, name: name, email: email };
        return user;
    }
    else if (name) {
        user = { username: username, password: password, name: name };
        return user;
    }
    else if (email) {
        user = { username: username, password: password, email: email };
        return user;
    }
    else {
        user = { username: username, password: password };
        return user;
    }
}
var form = document.getElementById("userForm");
var output = document.getElementById("output");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = form.elements.namedItem("username").value.trim();
    var password = form.elements.namedItem("password").value.trim();
    var fullname = form.elements.namedItem("fullname").value.trim();
    var email = form.elements.namedItem("email").value.trim();
    if (!username || !password) {
        alert("Username and password are required!");
        return;
    }
    var user;
    if (fullname && email)
        user = submitUser(username, password, fullname, email);
    else if (fullname)
        user = submitUser(username, password, fullname);
    else if (email)
        user = submitUser(username, password, email);
    else
        user = submitUser(username, password);
    output.classList.remove("hidden");
    output.innerHTML = "\n        <h2 class=\"text-lg font-semibold mb-2\">Submitted User:</h2>\n        <pre class=\"bg-gray-200 rounded-lg p-3 text-sm\">".concat(JSON.stringify(user, null, 2), "</pre>\n      ");
});
function doubles(value) {
    if (Array.isArray(value))
        return value.map(function (v) { return v * 2; });
    return value * 2;
}
var results1 = doubles(5); // TypeScript infers: number | number[]
var results2 = doubles([1, 2, 3]); // TypeScript infers: number | number[]
function double(value) {
    if (Array.isArray(value))
        return value.map(function (v) { return v * 2; });
    return value * 2;
}
var result1 = double(5); // TypeScript infers: number
var result2 = double([1, 2, 3]); // TypeScript infers: number[]
console.log(result1.toFixed());
