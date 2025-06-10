

function superbowlWin(recordarray){

    let foundWinner = recordarray.find(finder)

    return foundWinner ? foundWinner.year : undefined

}
function finder(currentValue){
    // currentValue:  {year: "2015", result: "W"}
    let targetrecord =  currentValue.result == "W"
    return targetrecord
}

const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"}
]
console.log(superbowlWin(record))