const allItems = [];
const selectionItemDiv = document.getElementById("selectionItem");
const navMenuSection = document.getElementById("recursiveNav");

const findingLevelData = (data, parentId = null) => {
    const parentData = data.filter((data) => data.parentId == parentId);
    // console.log(parentData);

    const childData = parentData.map((parent) => {
        //data.filter((data) => parent._id == data.parentId)
        const subItem = findingLevelData(data, parent._id);
        return {
            ...parent,
            subMenu: subItem,
        };
    });
    return childData;
};

const nav = (alldata) => {
    const ul = document.createElement("ul");
    for (let data of alldata) {
        const li = document.createElement("li");
        li.innerText = data.category;
        // console.log(data.category);
        if (data.subMenu.length > 0) {
            const subMenu = nav(data.subMenu);
            li.appendChild(subMenu);
        }
        ul.appendChild(li);
    }
    return ul;
};

function buildFullChain(item, allItems) {
    let chain = [item.category];
    let current = item;

    while (current.parentId !== null) {
        const parent = allItems.find((i) => i._id === current.parentId);
        if (!parent) break;
        chain.unshift(parent.category);
        current = parent;
    }

    return chain.join(" -> ");
}

function formSubmit(e) {
    e.preventDefault();

    const inputValue = e.target.category.value.trim();
    const parentValue = e.target.parent.value;

    const newObj = {
        _id: allItems.length + 1,
        category: inputValue,
        parentId: null,
        parentCategory: null,
    };

    if (parentValue) {
        const findParent = allItems.find(
            (item) => item.category === parentValue
        );
        newObj.parentId = findParent._id;
        newObj.parentCategory = findParent.category;
    }
    allItems.push(newObj);

    const option = document.createElement("option");
    option.value = inputValue;
    option.innerText = buildFullChain(newObj, allItems);
    selectionItemDiv.appendChild(option);

    e.target.category.value = "";
    e.target.parent.value = "";
    console.log(allItems);
    console.log("Leveled Data");
    console.log(findingLevelData(allItems));
    navMenuSection.innerHTML = "";
    navMenuSection.appendChild(nav(findingLevelData(allItems)));
}

// const allItems = [];
// const selectionItemDiv = document.getElementById("selectionItem");
// const recursiveMenu = document.getElementById("recursiveNav");

// function parentCheck(items, value) {
//     for (let item of items) {
//         if (item.category === value) return item;
//         if (item.subMenu.length > 0) {
//             const found = parentCheck(item.subMenu, value);
//             if (found) return found;
//         }
//     }
//     return null;
// }

// function formSubmit(e) {
//     e.preventDefault();
//     const categoryValue = e.target.category.value.trim();
//     const parentValue = e.target.parent.value;

//     const newObj = {
//         category: categoryValue,
//         subMenu: [],
//     };

//     if (parentValue) {
//         const parent = parentCheck(allItems, parentValue);
//         // const parent = allItems.find((item) => item.category === parentValue);
//         if (parent) {
//             parent.subMenu.push(newObj);
//             // console.log(allItems);
//         }
//     } else {
//         allItems.push(newObj);
//     }

//     const option = document.createElement("option");
//     option.value = categoryValue;
//     option.innerText = categoryValue;
//     selectionItemDiv.appendChild(option);

//     e.target.category.value = "";
//     console.log(allItems);

//     recursiveMenu.innerHTML = "";

//     function navDisplay(mainMenu) {
//         const ul = document.createElement("ul");

//         for (let menu of mainMenu) {
//             const li = document.createElement("li");
//             li.innerText = menu.category;

//             if (menu.subMenu) {
//                 const subUl = navDisplay(menu.subMenu);
//                 li.appendChild(subUl);
//             }
//             ul.appendChild(li);
//         }
//         return ul;
//     }
//     const menuUl = navDisplay(allItems);
//     recursiveMenu.appendChild(menuUl);
// }

// const alldata = [
//     { _id: 1, category: "Vehicle", parentId: null, parentCategory: null },
//     { _id: 2, category: "Car", parentId: 1, parentCategory: "Vehicle" },
//     { _id: 3, category: "Truck", parentId: 1, parentCategory: "Vehicle" },
//     { _id: 4, category: "Food", parentId: null, parentCategory: null },
//     { _id: 5, category: "Toyota", parentId: 2, parentCategory: "Car" },
//     { _id: 6, category: "Nissan", parentId: 2, parentCategory: "Car" },
//     { _id: 7, category: "Pickup", parentId: 3, parentCategory: "Truck" },
//     { _id: 8, category: "Semi Truck", parentId: 3, parentCategory: "Truck" },
//     { _id: 9, category: "Fruits", parentId: 4, parentCategory: "Food" },
//     { _id: 10, category: "Vegetables", parentId: 4, parentCategory: "Food" },
// ];
// const alldata = [
//     { _id: 1, category: "Vehicle", parentId: null },
//     { _id: 2, category: "Car", parentId: 1 },
//     { _id: 3, category: "Truck", parentId: 1 },
//     { _id: 4, category: "Food", parentId: null },
//     { _id: 5, category: "Toyota", parentId: 2 },
//     { _id: 6, category: "Nissan", parentId: 2 },
//     { _id: 7, category: "Pickup", parentId: 3 },
//     { _id: 8, category: "Semi Truck", parentId: 3 },
//     { _id: 9, category: "Fruits", parentId: 4 },
//     { _id: 10, category: "Vegetables", parentId: 4 },
// ];

// const parentData = alldata.filter((data) => data.parentId == null);
// console.log(parentData);

// const childData = parentData.map((parent) => {
//     return {
//         ...parent,
//         subMenu: alldata.filter((data) => parent._id == data.parentId),
//     };
// });
