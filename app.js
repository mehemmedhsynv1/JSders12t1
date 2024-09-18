let employees = [
    ["Jaylee Macy", "marketing"],
    ["John Smith", "management"],
    ["Blossom Hartley", "design"],
    ["Austin Cerpenter", "marketing"],
    ["Joan Knowles", "development"],
    ["Sally Nunez", "management"],
    ["Laurel Ward", "development"],
    ["Lark Simon", "marketing"],
    ["Jane Stone", "management"],
    ["Courtney Olson", "development"],
]
let devs = [];
for(let i = 0; i < employees.length; i++){
    if(employees[i][1] == "development"){
        devs.push(`${employees[i]}`);
    }
}
console.log(devs);