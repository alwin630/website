function countdown() {
    var now = new Date();
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    tomorrow.setHours(8, 15, 0, 0); // Set to 8:15 AM

    var diff = tomorrow - now;
    var hours = Math.floor(diff / 1000 / 60 / 60);
    var minutes = Math.floor(diff / 1000 / 60) % 60;
    var seconds = Math.floor(diff / 1000) % 60;

    document.getElementById("countdownTimer").textContent = hours + " hours " + minutes + " minutes " + seconds + " seconds ";

    setTimeout(countdown, 1000);

    console.log(hours);
}

// Start the countdown
countdown();
