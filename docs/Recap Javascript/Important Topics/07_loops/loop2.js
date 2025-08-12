const menu = [
    {
        title: "Home",
    },
    {
        title: "About",
    },
    {
        title: "Services",
        subMenu: [
            {
                title: "Web Development",
                subMenu: [
                    {
                        title: "Frontend",
                        subMenu: [
                            { title: "React" },
                            { title: "Angular" },
                            { title: "Vue" },
                        ],
                    },
                    {
                        title: "Backend",
                        subMenu: [
                            { title: "Node.js" },
                            { title: "Django" },
                            { title: "Laravel" },
                        ],
                    },
                ],
            },
            {
                title: "UI/UX Design",
            },
            {
                title: "SEO Optimization",
            },
        ],
    },
    {
        title: "Blog",
    },
    {
        title: "Contact",
    },
];

const nav = document.getElementById("navId");
const menuLength = menu.length;
for (let i = 0; i < menuLength; i++) {
    const li = document.createElement("li");
    li.innerText = menu[i].title;

    if (menu[i].subMenu) {
        const ul = document.createElement("ul");
        const subMenuLenght1 = menu[i].subMenu.length;
        for (let j = 0; j < subMenuLenght1; j++) {
            const li2 = document.createElement("li");
            li2.innerText = menu[i].subMenu[j].title;

            if (menu[i].subMenu[j].subMenu) {
                const ul3 = document.createElement("ul");
                const subMenuLenght2 = menu[i].subMenu[j].subMenu.length;
                for (let k = 0; k < subMenuLenght2; k++) {
                    const li3 = document.createElement("li");
                    li3.innerText = menu[i].subMenu[j].subMenu[k].title;

                    if (menu[i].subMenu[j].subMenu[k].subMenu) {
                        const ul4 = document.createElement("ul");
                        const subMenuLenght3 =
                            menu[i].subMenu[j].subMenu[k].subMenu.length;
                        for (let l = 0; l < subMenuLenght3; l++) {
                            const li4 = document.createElement("li");
                            li4.innerText =
                                menu[i].subMenu[j].subMenu[k].subMenu[l].title;
                            ul4.appendChild(li4);
                        }
                        li3.appendChild(ul4);
                    }
                    ul3.appendChild(li3);
                }
                li2.appendChild(ul3);
            }
            ul.appendChild(li2);
        }
        li.appendChild(ul);
    }
    nav.appendChild(li);
}

console.log(menu);

const recursiveMenu = document.getElementById("recursiveNav");

function navDisplay(mainMenu) {
    const ul = document.createElement("ul");

    for (let menu of mainMenu) {
        const li = document.createElement("li");
        li.innerText = menu.title;

        if (menu.subMenu) {
            const subUl = navDisplay(menu.subMenu);
            li.appendChild(subUl);
        }
        ul.appendChild(li);
    }
    return ul;
}
const menuUl = navDisplay(menu);
recursiveMenu.appendChild(menuUl);

let allValue = [];
let submitValue = {};

const mainCategory = document.getElementById("mainCategory");
const foodSelection = document.getElementById("foodSelection");
const foodTypeSelect = document.getElementById("foodType");
const vegetableSelection = document.getElementById("vegetableSelection");
const vegetableType = document.getElementById("vegetableType");
const textInput = document.getElementById("textInput");

mainCategory.addEventListener("change", () => {
    const mainCategoryValue = mainCategory.value;
    console.log(mainCategoryValue);

    foodSelection.style.display = "none";
    vegetableSelection.style.display = "none";
    textInput.style.display = "none";
    foodTypeSelect.value = "";
    vegetableType.value = "";

    if (mainCategoryValue === "Food") {
        submitValue.category = "Food";
        foodSelection.style.display = "block";
    } else if (mainCategoryValue === "Clothing") {
        submitValue.category = "Clothing";
        textInput.style.display = "block";
    }
});

foodTypeSelect.addEventListener("change", () => {
    const foodTypeValue = foodTypeSelect.value;
    vegetableSelection.style.display = "none";
    textInput.style.display = "none";
    vegetableType.value = "";

    console.log(foodTypeValue);

    if (foodTypeValue === "Fruit") {
        submitValue.type = "Fruit";
        textInput.style.display = "block";
    } else if (foodTypeValue === "Vegetable") {
        submitValue.type = "Vegetable";
        vegetableSelection.style.display = "block";
    }
});

vegetableType.addEventListener("change", () => {
    const vegetableTypeValue = vegetableType.value;
    submitValue.subType = vegetableTypeValue;
    textInput.style.display = "block";
});

function submitBtn(e) {
    e.preventDefault();
    const inputVal = document.getElementById("itemInput").value;
    console.log(inputVal);
    submitValue.name = inputVal;
    console.log(submitValue);
    allValue.push(submitValue);
    submitValue = {};
    mainCategory.value = "";
    foodSelection.style.display = "none";
    vegetableSelection.style.display = "none";
    textInput.style.display = "none";
    foodTypeSelect.value = "";
    vegetableType.value = "";
    console.log(allValue);
}

// const newObj = [
//     { category: "Food", type: "Fruit", name: "A" },
//     { category: "Food", type: "Vegetable", subType: "Fresh", name: "A" },
//     { category: "Food", type: "Vegetable", subType: "Dried", name: "A" },
//     { category: "Clothing", name: "A" },
// ];

function displayAllInputValue() {
    let i = 1;

    for (let value of allValue) {
        console.log("Input - ", i);
        for (let key in value) {
            console.log(`${key} : ${value[key]}`);
        }
        i++;
    }
}
