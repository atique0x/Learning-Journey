const myObject = [
    {
        1: "Number one",
        true: "Boolean true",
        null: "Null value",
        undefined: "Undefined value",
        NaN: "Not a Number",
        "[1,2,3]": "Array as key",
        "{a:1}": "Object-like key",
        "() => {}": "Function-like key",
        "[object Date]": "Date-like key",
        hello: "Custom string",
    },
    {
        2: "Number two",
        false: "Boolean false",
        null: "Still null",
        undefined: "Still undefined",
        NaN: "Still NaN",
        "[4,5,6]": "Another array",
        "{b:2}": "Another object",
        "function(){}": "Another function",
        "[object Object]": "Object string",
        world: "Another string",
    },
    {
        3: "Number three",
        true: "Yes again",
        null: "Yet null",
        undefined: "Again undefined",
        NaN: "Still NaN here",
        "[7,8,9]": "Yet another array",
        "{c:3}": "Yet another object",
        "() => 42": "Arrow function form",
        "[object Window]": "Fake window",
        test: "String key",
    },
    {
        4: "Fourth number",
        false: "False again",
        null: "Null again",
        undefined: "Undef again",
        NaN: "NaN again",
        "[10,11,12]": "Array variant",
        "{d:4}": "Object variant",
        "() => 'x'": "Arrow func again",
        "[object HTMLDivElement]": "Fake DOM",
        demo: "Demo string",
    },
    {
        5: "Fifth value",
        true: "True once more",
        null: "Null value here",
        undefined: "Undefined still",
        NaN: "NaN as always",
        "[13,14,15]": "Another array key",
        "{e:5}": "One more object",
        "() => null": "Function again",
        "[object Global]": "Global fake",
        final: "Final string key",
    },
];

let theadRow = "";
let rowDataArray = [];
let thead = "";
let tRow = "";

const headDataArr = Object.keys(myObject[0]);

//Table Head
headDataArr.map((eachData) => {
    theadRow = theadRow + `<th>${eachData}</th>`;
});
thead = `<tr>${theadRow}</tr>`;

//Table Body
myObject.map((eachObj) => {
    let tdataRow = "";
    Object.values(eachObj).map((eachVal) => {
        tdataRow = tdataRow + `<td>${eachVal}</td>`;
    });
    rowDataArray.push(tdataRow);
});

rowDataArray.map((eachval) => {
    tRow = tRow + `<tr>${eachval}</tr>`;
});

//Show on table
const tableHead = document.getElementById("tableHeadId");
const tableBody = document.getElementById("tableBodyId");

tableHead.innerHTML = thead;
tableBody.innerHTML = tRow;
