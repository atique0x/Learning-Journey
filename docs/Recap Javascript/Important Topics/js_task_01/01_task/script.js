const newArr = [];

const phases = [
    { id: 1, name: "Planning" },
    { id: 2, name: "Execution" },
    { id: 3, name: "Monitoring" },
    { id: 4, name: "Closure" },
    { id: 5, name: "Post-Analysis" },
];

const stages = [
    // Planning
    { id: 1, name: "Market Research", fkPhaseId: 1 },
    { id: 2, name: "Budgeting", fkPhaseId: 1 },
    { id: 3, name: "Stakeholder Alignment", fkPhaseId: 1 },

    // Execution
    { id: 4, name: "Development", fkPhaseId: 2 },
    { id: 5, name: "Testing", fkPhaseId: 2 },
    { id: 6, name: "Deployment", fkPhaseId: 2 },

    // Monitoring
    { id: 7, name: "Performance Tracking", fkPhaseId: 3 },
    { id: 8, name: "Issue Logging", fkPhaseId: 3 },
    { id: 9, name: "Weekly Reviews", fkPhaseId: 3 },

    // Closure
    { id: 10, name: "Final Reporting", fkPhaseId: 4 },
    { id: 11, name: "Client Handover", fkPhaseId: 4 },
    { id: 12, name: "Team Retrospective", fkPhaseId: 4 },

    // Post-Analysis
    { id: 13, name: "Data Collection", fkPhaseId: 5 },
    { id: 14, name: "Root Cause Analysis", fkPhaseId: 5 },
    { id: 15, name: "Future Recommendations", fkPhaseId: 5 },
];

const steps = [
    // Stage 1
    { id: 1, name: "Survey Customers", fkStageId: 1 },
    { id: 2, name: "Analyze Trends", fkStageId: 1 },
    { id: 3, name: "Study Competitors", fkStageId: 1 },

    // Stage 2
    { id: 4, name: "Estimate Costs", fkStageId: 2 },
    { id: 5, name: "Allocate Budget", fkStageId: 2 },

    // Stage 3
    { id: 6, name: "Identify Key Stakeholders", fkStageId: 3 },
    { id: 7, name: "Schedule Meetings", fkStageId: 3 },

    // Stage 4
    { id: 8, name: "Write Code", fkStageId: 4 },
    { id: 9, name: "Code Review", fkStageId: 4 },

    // Stage 5
    { id: 10, name: "Unit Testing", fkStageId: 5 },
    { id: 11, name: "Integration Testing", fkStageId: 5 },
    { id: 12, name: "QA Approval", fkStageId: 5 },

    // Stage 6
    { id: 13, name: "Create Release Package", fkStageId: 6 },
    { id: 14, name: "Deploy to Production", fkStageId: 6 },

    // Stage 7
    { id: 15, name: "Setup Dashboards", fkStageId: 7 },
    { id: 16, name: "Track KPIs", fkStageId: 7 },

    // Stage 8
    { id: 17, name: "Log Issues in Tracker", fkStageId: 8 },
    { id: 18, name: "Assign Severity Levels", fkStageId: 8 },

    // Stage 9
    { id: 19, name: "Prepare Weekly Report", fkStageId: 9 },
    { id: 20, name: "Review with Team", fkStageId: 9 },

    // Stage 10
    { id: 21, name: "Compile Final Results", fkStageId: 10 },
    { id: 22, name: "Submit to Client", fkStageId: 10 },

    // Stage 11
    { id: 23, name: "Transfer Knowledge", fkStageId: 11 },
    { id: 24, name: "Finalize Documentation", fkStageId: 11 },

    // Stage 12
    { id: 25, name: "Conduct Retrospective", fkStageId: 12 },
    { id: 26, name: "Collect Feedback", fkStageId: 12 },

    // Stage 13
    { id: 27, name: "Extract Data from Tools", fkStageId: 13 },
    { id: 28, name: "Clean & Prepare Data", fkStageId: 13 },

    // Stage 14
    { id: 29, name: "Identify Root Issues", fkStageId: 14 },
    { id: 30, name: "Document Findings", fkStageId: 14 },

    // Stage 15
    { id: 31, name: "Suggest Process Improvements", fkStageId: 15 },
    { id: 32, name: "Create Action Plan", fkStageId: 15 },
];

const listSection = document.getElementById("listedId");

const phaseShow = (phases) => {
    const mainUl = document.createElement("ul");

    for (let phase of phases) {
        console.log(phase.name);
        const phaseLi = document.createElement("li");
        const phaseButton = document.createElement("button");
        phaseButton.innerText = phase.name;
        phaseButton.style.color = "red";

        const stageUl = document.createElement("ul");
        stageUl.setAttribute("hidden", "hidden");

        phaseButton.onclick = () => {
            if (stageUl.getAttribute("hidden")) {
                stageUl.removeAttribute("hidden");
            } else {
                stageUl.setAttribute("hidden", "hidden");
            }
        };
        phaseLi.appendChild(phaseButton);

        const child = stages.filter((step) => step.fkPhaseId == phase.id);

        for (let stage of child) {
            const stageLi = document.createElement("li");
            const stageButton = document.createElement("button");
            stageButton.innerText = stage.name;
            stageButton.style.color = "blue";

            const stepUl = document.createElement("ul");
            stepUl.setAttribute("hidden", "hidden");

            stageButton.onclick = () => {
                if (stepUl.getAttribute("hidden")) {
                    stepUl.removeAttribute("hidden");
                } else {
                    stepUl.setAttribute("hidden", "hidden");
                }
            };

            stageLi.appendChild(stageButton);

            const subChild = steps.filter((step) => step.fkStageId == stage.id);

            for (let step of subChild) {
                const stepLi = document.createElement("li");
                const stepButton = document.createElement("button");
                stepButton.innerText = step.name;
                stepButton.style.color = "black";
                stepLi.appendChild(stepButton);
                stepUl.appendChild(stepLi);
            }
            stageUl.appendChild(stageLi);
            stageUl.appendChild(stepUl);
        }
        mainUl.appendChild(phaseLi);
        mainUl.appendChild(stageUl);
    }
    return mainUl;
};
const allPhases = phaseShow(phases);

listSection.appendChild(allPhases);
console.log(listSection);

const transactions = [
    { category: "Food", amount: 20 },
    { category: "Transport", amount: 15 },
    { category: "Food", amount: 30 },
    { category: "Entertainment", amount: 50 },
    { category: "Transport", amount: 25 },
    { category: "Utilities", amount: 80 },
    { category: "Entertainment", amount: 30 },
];
//
//
//
//
//
//
//
//
//Problem-2
const allItems = {};
const parent = [];
function formSubmit(e) {
    e.preventDefault();

    const parentValue = e.target.parent.value.trim();
    const childValue = e.target.child.value.trim();
    const parentIndex = e.target.parentIndex.value.trim();

    if (!allItems[parentIndex]) {
        allItems[parentIndex] = [];
        parent.push(parentValue);
    }

    allItems[parentIndex].push(childValue);
    e.target.parent.value = "";
    e.target.child.value = "";
    e.target.parentIndex.value = "";
    console.log(allItems);
    console.log(parent);
    showValues(allItems);
}
let listedIdSection = document.getElementById("listedId2");

function showValues(items) {
    listedIdSection.innerText = "";
    for (let key in items) {
        const h4 = document.createElement("h4");
        const itemArr = items[key];
        h4.innerText = parent[key];
        listedIdSection.appendChild(h4);
        for (let val of itemArr) {
            if (val) {
                const p = document.createElement("p");
                const cleanVal = val[0].toUpperCase() + val.slice(1);
                p.innerText = `--${cleanVal}`;
                listedIdSection.appendChild(p);
            }
        }
    }
}

//
//
//
//
//
//
//
//
//Problem-3
const groupedObject = [];
const groupedAmount = transactions.reduce((acc, curr) => {
    if (!acc[curr.category]) {
        acc[curr.category] = [];
    }
    acc[curr.category].push(curr.amount);
    return acc;
}, {});

for (let val in groupedAmount) {
    let newObj = { [val]: groupedAmount[val].reduce((acc, cur) => acc + cur) };
    // console.log(newObj);
    groupedObject.push(newObj);
}
console.log(groupedObject);

const tableBodySection = document.getElementById("tableBody");
function tableCreate(groupedObject) {
    for (let item of groupedObject) {
        const tr = document.createElement("tr");
        for (let i in item) {
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");
            td1.innerText = i;
            td2.innerText = item[i];
            tr.appendChild(td1);
            tr.appendChild(td2);
        }
        tableBodySection.appendChild(tr);
    }
}
tableCreate(groupedObject);
