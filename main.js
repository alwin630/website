function calculate_ul1() {
    // Get the user input
    var userInput = document.getElementById("userWorkingWeight").value;

    var roundto = 2.5;

    // Perform a calculation (for example, double the input)
    var eightypercent = 2.5 * Math.floor((userInput * .8) / 2.5)
    var forty_percent_or_bar = Math.max(2.5 * Math.floor((userInput * .4) / 2.5), 45);
    var fifty_five_percent = Math.max(2.5 * Math.floor((userInput * .55) / 2.5), 45);
    var seventy_percent = Math.max(2.5 * Math.floor((userInput * .7) / 2.5), 45);
    var eighty_five_percent = Math.max(2.5 * Math.floor((userInput * .85) / 2.5), 45);

    var usedPlates = calculatePlatesForWeight(eightypercent, plates);
    let li80percent_resultString = '';
    for (const plate in usedPlates) {
      li80percent_resultString += `(${usedPlates[plate]} x ${plate}) `;
    }
    var usedPlates = calculatePlatesForWeight(forty_percent_or_bar, plates);
    let forty_percent_or_bar_resultString = '';
    for (const plate in usedPlates) {
      forty_percent_or_bar_resultString += `(${usedPlates[plate]} x ${plate}) `;
    }
    var usedPlates = calculatePlatesForWeight(fifty_five_percent, plates);
    let fifty_five_percent_resultString = '';
    for (const plate in usedPlates) {
      fifty_five_percent_resultString += `(${usedPlates[plate]} x ${plate}) `;
    }
    var usedPlates = calculatePlatesForWeight(seventy_percent, plates);
    let seventy_percent_resultString = '';
    for (const plate in usedPlates) {
      seventy_percent_resultString += `(${usedPlates[plate]} x ${plate}) `;
    }
    var usedPlates = calculatePlatesForWeight(eighty_five_percent, plates);
    let eighty_five_percent_resultString = '';
    for (const plate in usedPlates) {
      eighty_five_percent_resultString += `(${usedPlates[plate]} x ${plate}) `;
    }
    var usedPlates = calculatePlatesForWeight(userInput, plates);
    let workingweight_resultString = '';
    for (const plate in usedPlates) {
      workingweight_resultString += `(${usedPlates[plate]} x ${plate}) `;
    }


    // Display the result
    document.getElementById("li80percent").textContent = "80% of " + userInput + " = " + eightypercent + " lbs " + li80percent_resultString;
    document.getElementById("li1").textContent = "5: " + forty_percent_or_bar + " lbs " + forty_percent_or_bar_resultString;
    document.getElementById("li2").textContent = "4: " + fifty_five_percent + " lbs " + fifty_five_percent_resultString;
    document.getElementById("li3").textContent = "3: " + seventy_percent + " lbs " + seventy_percent_resultString;
    document.getElementById("li4").textContent = "2: " + eighty_five_percent + " lbs " + eighty_five_percent_resultString;
    document.getElementById("li5").textContent = "working: " + userInput + " lbs " + workingweight_resultString;
}


function calculatePlatesForWeight(goalWeight, plates) {
  goalWeight -= 45; // Subtract 45 from the goal weight
  goalWeight /= 2; // Divide the goal weight by half
    // Round it down to the nearest multiple of 2.5
  goalWeight = Math.floor(goalWeight / 2.5) * 2.5;

  // Sort the plates in descending order
  plates.sort((a, b) => b - a);

  let remainingWeight = goalWeight;
  const usedPlates = {};

  for (const plate of plates) {
    if (plate === 10 && usedPlates[10] >= 1) {
      // Skip using a second 10 lb plate
      continue;
    }

    if (plate <= remainingWeight) {
      const count = Math.floor(remainingWeight / plate);
      usedPlates[plate] = count;
      remainingWeight -= count * plate;
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

// Set your goal weight
const goalWeight = 225;

// Calculate the plates needed to reach half of the adjusted goal weight

