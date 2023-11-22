function calculate_ul1(input) {

  switch (input) {
    case "default":
      var userInput = document.getElementById("userWorkingWeight").value;
      break;
    case "use_eighty":
      var userInput = document.getElementById("userWorkingWeight").value * .8;
      break;
  }

  // Perform a calculation (for example, double the input)
  var eightypercent = 2.5 * Math.floor((userInput * .8) / 2.5)
  var forty_percent_or_bar = Math.max(2.5 * Math.floor((userInput * .4) / 2.5), 45);
  var fifty_five_percent = Math.max(2.5 * Math.floor((userInput * .55) / 2.5), 45);
  var seventy_percent = Math.max(2.5 * Math.floor((userInput * .7) / 2.5), 45);
  var eighty_five_percent = Math.max(2.5 * Math.floor((userInput * .85) / 2.5), 45);

  // String containing plates needed
  var eightypercent_result = writeResultString(calculatePlatesForWeight(eightypercent));
  var forty_percent_or_bar_result = writeResultString(calculatePlatesForWeight(forty_percent_or_bar));
  var fifty_five_percent_result = writeResultString(calculatePlatesForWeight(fifty_five_percent));
  var seventy_percent_result = writeResultString(calculatePlatesForWeight(seventy_percent));
  var eighty_five_percent_result = writeResultString(calculatePlatesForWeight(eighty_five_percent));
  var workingweight_result = writeResultString(calculatePlatesForWeight(userInput));

  // Display the result
  document.getElementById("li_eighty_p").innerHTML = "80% of " + userInput + " = " + eightypercent + " lbs <span style='padding-left:25px;'>" + eightypercent_result + "</span>";
  document.getElementById("li1").innerHTML = "5: " + forty_percent_or_bar + " lbs <span style='padding-left:75px;'>" + forty_percent_or_bar_result + "</span>";
  document.getElementById("li2").innerHTML = "4: " + fifty_five_percent + " lbs <span style='padding-left:75px;'>" + fifty_five_percent_result + "</span>";
  document.getElementById("li3").innerHTML = "3: " + seventy_percent + " lbs <span style='padding-left:75px;'>" + seventy_percent_result + "</span>";
  document.getElementById("li4").innerHTML = "2: " + eighty_five_percent + " lbs <span style='padding-left:75px;'>" + eighty_five_percent_result + "</span>";
  document.getElementById("li5").innerHTML = "working: " + userInput + " lbs <span style='padding-left:50px;'>" + workingweight_result + "</span>";
}

function writeResultString(usedPlates) {
  let resultString = '';
  for (const [plate, count] of usedPlates) {
    resultString += `(${plate} x ${count}) `;
  }
  return resultString;
}

function calculatePlatesForWeight(goalWeight) {
  goalWeight -= 45; // Subtract 45 from the goal weight
  goalWeight /= 2; // Divide the goal weight by half
  // Round it down to the nearest multiple of 2.5
  goalWeight = Math.floor(goalWeight / 2.5) * 2.5;

  let remainingWeight = goalWeight;
  const usedPlates = new Map();

  for (const plate of plates) {
    if (plate <= remainingWeight) {
      const count = Math.floor(remainingWeight / plate);
      if (count > 0) { // Only add to the Map if count is greater than 0
        usedPlates.set(plate, count);
        remainingWeight -= count * plate;
      }
    }
  }

  if (remainingWeight === 0) {
    return usedPlates;
  } else {
    return null; // No combination of plates can reach the adjusted goal weight
  }
}

// Define your available plates
const plates = [45, 35, 25, 10, 5, 2.5];






// function writeResultString(usedPlates) {
//   let resultString = '';
//   for (const plate in usedPlates) {
//     resultString += `(${usedPlates[plate]} x ${plate}) `;
//   }
//   return resultString;
// }

// // Sort the plates in descending order
// plates.sort((a, b) => b - a);

// let remainingWeight = goalWeight;
// const usedPlates = {};

// for (const plate of plates) {
//   if (plate <= remainingWeight) {
//     const count = Math.floor(remainingWeight / plate);
//     usedPlates[plate] = count;
//     remainingWeight -= count * plate;
//   }
// }