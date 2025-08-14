// Upload Form
const uploadForm = document.getElementById("upload-form");
const fileInfo = document.getElementById("file-info");
const imagePreview = document.getElementById("image-preview");
const pdfPreview = document.getElementById("pdf-preview");

uploadForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const imageFile = document.getElementById("image-input").files[0];
  const otherFile = document.getElementById("file-input").files[0];

  let infoText = "";
  if (imageFile)
    infoText += `Image: ${imageFile.name} (${imageFile.type}, ${imageFile.size} bytes)<br>`;
  if (otherFile)
    infoText += `File: ${otherFile.name} (${otherFile.type}, ${otherFile.size} bytes)`;
  fileInfo.innerHTML = infoText || "No files selected";

  // Preview image
  if (imageFile) {
    const reader = new FileReader();
    reader.onload = (event) => {
      localStorage.setItem("image", event.target.result); // Save Base64
      imagePreview.src = event.target.result; // Display preview
      imagePreview.style.display = "block";
    };
    reader.readAsDataURL(imageFile); // Convert to Base64
  }

  // Preview PDF / other file
  if (otherFile) {
    const fileURL = URL.createObjectURL(otherFile);
    pdfPreview.src = fileURL;
    pdfPreview.style.display = "block";
  }
});

// User Form
const userForm = document.getElementById("user-form");

userForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(userForm); // Use userForm here

  fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Data Posted");
      }
    })
    .catch((err) => console.log(err));

  const name = formData.get("name");
  const age = formData.get("age");
  const email = formData.get("email");
  const profileImage = formData.get("profileImage");

  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Email:", email);
  console.log("Profile Image:", profileImage);

  if (profileImage && profileImage.size > 0) {
    const previewDiv = document.getElementById("preview");
    const url = URL.createObjectURL(profileImage);
    previewDiv.innerHTML = `
      <p>${name} (${age})</p>
      <img src="${url}" alt="Profile Image" width="150">
    `;
  }
});
