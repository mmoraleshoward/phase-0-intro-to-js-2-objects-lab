// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value){
    employee[name] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    const newisEmployee = {...employee};
    delete newisEmployee[key];
    return newisEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee[name];
    return employee;
}
