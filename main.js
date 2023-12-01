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
  document.getElementById("li_eighty_p").textContent = "80% of " + userInput + " = " + eightypercent + " lbs " + eightypercent_result;

  document.getElementById("li1").textContent = forty_percent_or_bar + " lbs ";
  document.getElementById("newCol1").textContent = forty_percent_or_bar_result;
  document.getElementById("li2").textContent = fifty_five_percent + " lbs ";
  document.getElementById("newCol2").textContent = fifty_five_percent_result;
  document.getElementById("li3").textContent = seventy_percent + " lbs ";
  document.getElementById("newCol3").textContent = seventy_percent_result;
  document.getElementById("li4").textContent = eighty_five_percent + " lbs ";
  document.getElementById("newCol4").textContent = eighty_five_percent_result;
  document.getElementById("li5").textContent = userInput + " lbs ";
  document.getElementById("newCol5").textContent = workingweight_result;
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
