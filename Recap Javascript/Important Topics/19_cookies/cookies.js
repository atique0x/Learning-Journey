// document.cookie = "username=atique0x; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// document.cookie = "username=atique1x; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// document.cookie = "password=atique0x; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// console.log(document.cookie);

// function getCookie(name = "password") {
//   const cookies = document.cookie.split(";");
//   for (let cookie of cookies) {
//     const [key, value] = cookie.trim().split("=");
//     if (key === name) {
//       return value;
//     }
//   }
//   return null; // cookie not found
// }

// console.log(getCookie()); // logs the password cookie value

//
//
//
const form = document.getElementById("cookieForm");

const cookiesTableBody = document.querySelector("#cookiesTable tbody");

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/;`;
}

function getAllCookies() {
  const cookies = document.cookie ? document.cookie.split("; ") : [];
  const result = [];

  for (let i = 0; i < cookies.length; i++) {
    const parts = cookies[i].split("=");
    const key = parts[0];
    const value = decodeURIComponent(parts.slice(1).join("="));
    result.push({key, value});
  }

  return result;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function renderCookies() {
  const cookies = getAllCookies();
  cookiesTableBody.innerHTML = "";

  if (cookies.length === 0) {
    cookiesTableBody.innerHTML = '<tr><td colspan="3">No cookies found</td></tr>';
    return;
  }

  cookies.forEach(({key, value}) => {
    const tr = document.createElement("tr");

    const tdKey = document.createElement("td");
    tdKey.textContent = key;

    const tdValue = document.createElement("td");
    tdValue.textContent = value;

    const tdAction = document.createElement("td");
    const delBtn = document.createElement("button");

    delBtn.textContent = "Delete";
    delBtn.className = "deleteBtn";

    delBtn.onclick = () => {
      deleteCookie(key);
      alert(`Cookie "${key}" deleted`);
      renderCookies();
    };

    tdAction.appendChild(delBtn);

    tr.appendChild(tdKey);
    tr.appendChild(tdValue);
    tr.appendChild(tdAction);

    cookiesTableBody.appendChild(tr);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const key = document.getElementById("cookieKey").value.trim();
  const value = document.getElementById("cookieValue").value.trim();
  if (key && value) {
    setCookie(key, value, 7);
    alert(`Cookie "${key}" set with value "${value}"`);
    form.reset();
    renderCookies();
  }
});

window.onload = () => {
  renderCookies();
};
