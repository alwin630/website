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

    // Display the result
    document.getElementById("li80percent").textContent = "80% of " + userInput + " = " + eightypercent + " lbs";
    document.getElementById("li1").textContent = "5: " + forty_percent_or_bar + " lbs";
    document.getElementById("li2").textContent = "4: " + fifty_five_percent + " lbs";
    document.getElementById("li3").textContent = "3: " + seventy_percent + " lbs";
    document.getElementById("li4").textContent = "2: " + eighty_five_percent + " lbs";
}