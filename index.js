// Code your solution here
function findMatching (drivers, attribute) {
    return drivers.filter(function (driver) {return driver.toLowerCase() === attribute.toLowerCase()})
}