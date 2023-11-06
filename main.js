function calculate_ul1() {
    // Get the user input
    var userInput = document.getElementById("userWorkingWeight").value;

    var roundto = 2.5;

    // Perform a calculation (for example, double the input)
    var forty_percent_or_bar = Math.max(2.5 * Math.floor((userInput * .4) / 2.5), 45);
    var fifty_five_percent = Math.max(2.5 * Math.floor((userInput * .55) / 2.5), 45);
    var seventy_percent = Math.max(2.5 * Math.floor((userInput * .7) / 2.5), 45);
    var eighty_five_percent = Math.max(2.5 * Math.floor((userInput * .85) / 2.5), 45);

    // Display the result
    document.getElementById("li1").textContent = forty_percent_or_bar + " lbs";
    document.getElementById("li2").textContent = fifty_five_percent + " lbs";
    document.getElementById("li3").textContent = seventy_percent + " lbs";
    document.getElementById("li4").textContent = eighty_five_percent + " lbs";
}