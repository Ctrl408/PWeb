function updateTimer() {
    var now = new Date();
    var startOfYear = new Date(now.getFullYear(), 0, 0);
    var diff = now - startOfYear;
    const currentYear = now.getFullYear();
    var oneDay = 1000 * 60 * 60 * 24;
    var dayOfYear = Math.floor(diff / oneDay);
    var totalDays = 365;
    var elapsedPercentage = (dayOfYear / totalDays) * 100;
    var secondsElapsed = Math.floor(diff / 1000);
    document.getElementById('timer').innerHTML =  currentYear +": " + secondsElapsed + ": " + elapsedPercentage.toFixed(2) + "%";
  }

  setInterval(updateTimer, 1000);