// Code your solution here

function findMatching(arr, string) {
    return arr.filter (function (el) {
        return el.toLowerCase().indexOf(string.toLowerCase()) !== -1
    });
}


/*const fuzzyMatch =(arr, string) => {
    return arr.filter(el => el.toLowerCase().indexOf(string.toLowerCase()) !== -1)
}*/


function fuzzyMatch(arr, string) {
    return arr.filter(possibleMatch => possibleMatch.toLowerCase().indexOf(string.toLowerCase()) === 0)
}



function matchName(drivers, string) {
    return drivers.filter(function(hometown){
        return hometown.name === string;
    })
}