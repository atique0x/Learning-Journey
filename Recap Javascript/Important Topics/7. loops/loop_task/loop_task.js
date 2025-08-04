// const allItems = [];
// const selectionItemDiv = document.getElementById("selectionItem");

// function formSubmit(e) {
//     e.preventDefault();

//     const inputValue = e.target.category.value.trim();
//     const parentValue = e.target.parent.value;

//     console.log(inputValue, parentValue);

//     // const alreadyExist = allItems.find((item) => item.category == inputValue);

//     const newObj = {
//         _id: allItems.length + 1,
//         category: inputValue,
//         parentId: null,
//         parentCategory: null,
//     };

//     if (parentValue) {
//         const findParent = allItems.find(
//             (item) => item.category === parentValue
//         );
//         newObj.parentId = findParent._id;
//         newObj.parentCategory = findParent.category;
//     }
//     allItems.push(newObj);

//     const option = document.createElement("option");
//     option.value = inputValue;
//     option.innerText =
//         newObj.parentCategory === null
//             ? inputValue
//             : newObj.parentCategory + " -> " + inputValue;
//     selectionItemDiv.appendChild(option);

//     e.target.category.value = "";
//     console.log(allItems);
// }

const allItems = [];
const selectionItemDiv = document.getElementById("selectionItem");
const recursiveMenu = document.getElementById("recursiveNav");

function parentCheck(items, value) {
    for (let item of items) {
        if (item.category === value) return item;
        if (item.subMenu.length > 0) {
            const found = parentCheck(item.subMenu, value);
            if (found) return found;
        }
    }
    return null;
}

function formSubmit(e) {
    e.preventDefault();
    const categoryValue = e.target.category.value.trim();
    const parentValue = e.target.parent.value;

    const newObj = {
        category: categoryValue,
        subMenu: [],
    };

    if (parentValue) {
        const parent = parentCheck(allItems, parentValue);
        // const parent = allItems.find((item) => item.category === parentValue);
        if (parent) {
            parent.subMenu.push(newObj);
            // console.log(allItems);
        }
    } else {
        allItems.push(newObj);
    }

    const option = document.createElement("option");
    option.value = categoryValue;
    option.innerText = categoryValue;
    selectionItemDiv.appendChild(option);

    e.target.category.value = "";
    console.log(allItems);

    recursiveMenu.innerHTML = "";

    function navDisplay(mainMenu) {
        const ul = document.createElement("ul");

        for (let menu of mainMenu) {
            const li = document.createElement("li");
            li.innerText = menu.category;

            if (menu.subMenu) {
                const subUl = navDisplay(menu.subMenu);
                li.appendChild(subUl);
            }
            ul.appendChild(li);
        }
        return ul;
    }
    const menuUl = navDisplay(allItems);
    recursiveMenu.appendChild(menuUl);
}
