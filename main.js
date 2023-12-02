function calculate_ul1(input) {

  switch (input) {
    case "default":
      var userInput = document.getElementById("userWorkingWeight").value;
      break;
    case "use_eighty":
      var userInput = document.getElementById("userWorkingWeight").value * .8;
      break;
  }

  // FIRST TABLE
  var eightyPercent = calcPercent(userInput, 80, false);
  var fortyPercent = calcPercent(userInput, 40);
  var fiftyFivePercent = calcPercent(userInput, 55);
  var seventyPercent = calcPercent(userInput, 70);
  var eightyFivePercent = calcPercent(userInput, 85);

  // SECOND TABLE
  var fortyFivePercent = calcPercent(userInput, 45);
  var sixtyFivePercent = calcPercent(userInput, 65);
  var ninetyPercent = calcPercent(userInput, 90);
  var ninetyFivePercent = calcPercent(userInput, 95);

  // FIRST TABLE
  var fortyPercentResult = writeResultString(calculatePlatesForWeight(fortyPercent));
  var fiftyFivePercentResult = writeResultString(calculatePlatesForWeight(fiftyFivePercent));
  var seventyPercentResult = writeResultString(calculatePlatesForWeight(seventyPercent));
  var eightyFivePercentResult = writeResultString(calculatePlatesForWeight(eightyFivePercent));
  var workingWeightResult = writeResultString(calculatePlatesForWeight(userInput));

  // SECOND TABLE
  var fortyFivePercentResult = writeResultString(calculatePlatesForWeight(fortyFivePercent));
  var sixtyFivePercentResult = writeResultString(calculatePlatesForWeight(sixtyFivePercent));
  // eightyFivePercentResult
  var ninetyPercentResult = writeResultString(calculatePlatesForWeight(ninetyPercent));
  var ninetyFivePercentResult = writeResultString(calculatePlatesForWeight(ninetyFivePercent));

  // Display the result
  var eightyPercentResult = writeResultString(calculatePlatesForWeight(eightyPercent));
  document.getElementById("li_eighty_p").textContent = "80% of " + userInput + " = " + eightyPercent + " lbs " + eightyPercentResult;

  // FIRST TABLE
  document.getElementById("table1Col2Row1").textContent = fortyPercent + " lbs ";
  document.getElementById("table1Col2Row2").textContent = fiftyFivePercent + " lbs ";
  document.getElementById("table1Col2Row3").textContent = seventyPercent + " lbs ";
  document.getElementById("table1Col2Row4").textContent = eightyFivePercent + " lbs ";
  document.getElementById("table1Col2Row5").textContent = userInput + " lbs ";

  document.getElementById("table1Col3Row1").textContent = fortyPercentResult;
  document.getElementById("table1Col3Row2").textContent = fiftyFivePercentResult;
  document.getElementById("table1Col3Row3").textContent = seventyPercentResult;
  document.getElementById("table1Col3Row4").textContent = eightyFivePercentResult;
  document.getElementById("table1Col3Row5").textContent = workingWeightResult;

  // SECOND TABLE
  document.getElementById("table2Col2Row1").textContent = "45 lbs ";
  document.getElementById("table2Col2Row2").textContent = fortyFivePercent + " lbs ";
  document.getElementById("table2Col2Row3").textContent = sixtyFivePercent + " lbs ";
  document.getElementById("table2Col2Row4").textContent = eightyFivePercent + " lbs ";
  document.getElementById("table2Col2Row5").textContent = ninetyPercent + " lbs ";
  document.getElementById("table2Col2Row6").textContent = ninetyFivePercent + " lbs ";

  document.getElementById("table2Col3Row2").textContent = fortyFivePercentResult;
  document.getElementById("table2Col3Row3").textContent = sixtyFivePercentResult;
  document.getElementById("table2Col3Row4").textContent = eightyFivePercentResult;
  document.getElementById("table2Col3Row5").textContent = ninetyPercentResult;
  document.getElementById("table2Col3Row6").textContent = ninetyFivePercentResult;
}

function calcPercent(userInput, percentage, useMinimum = true) {
  var percentageWeight = userInput * (percentage / 100);
  var roundedWeight = 2.5 * Math.floor(percentageWeight / 2.5);

  if (useMinimum) {
    return Math.max(roundedWeight, 45);
  } else {
    return roundedWeight;
  }
}

function writeResultString(usedPlates) {
  if (usedPlates === null) {
    return "No valid plate combination found";
  }

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
