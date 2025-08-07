## Dynamic menu creation

```js
const allItems = [];
const selectionItemDiv = document.getElementById("selectionItem");
const navMenuSection = document.getElementById("recursiveNav");

//Leveling Data
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

//Creating Nav
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
```
