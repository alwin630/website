function countdown() {
    // Get the current date and time
    var now = new Date();

    // Create a new date for tomorrow
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    // Set the time to 8:15 AM EST
    // Note: JavaScript works in the local time zone, so adjust the hours accordingly to match EST
    // If your local time zone is EST, you can directly set it to 8:15 AM
    tomorrow.setHours(8, 15, 0, 0);

    // Calculate the difference in milliseconds
    var diff = tomorrow - now;

    // Convert the difference to hours, minutes, and seconds
    var hours = Math.floor(diff / 1000 / 60 / 60);
    var minutes = Math.floor(diff / 1000 / 60) % 60;
    var seconds = Math.floor(diff / 1000) %     // Get the paragraph element by its ID
    var countdownElement = document.getElementById("countdownTimer");

    // Update the content of the paragraph
    countdownElement.textContent = hours + " hours " + minutes + " minutes " + seconds + " seconds ";

    // Update the countdown every second
    setTimeout(countdown, 1000);
}

// Start the countdown
countdown();
