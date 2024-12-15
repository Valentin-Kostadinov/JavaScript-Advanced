function solve(steps, stepLength, speed) {
  let distanceInMeters = steps * stepLength;

  let speedForMeterInSec = speed / 3.6;

  let rest = Math.floor(distanceInMeters / 500);

  let timeInSeconds = distanceInMeters / speedForMeterInSec + rest * 60;

  let timeInHours = Math.floor(timeInSeconds / 3600);
  let timeInMins = Math.floor((timeInSeconds % 3600) / 60);
  let timeInSecs = Math.ceil(timeInSeconds % 60);

  let formattedHours = timeInHours.toString().padStart(2, "0");
  let formattedMins = timeInMins.toString().padStart(2, "0");
  let formattedSecs = timeInSecs.toString().padStart(2, "0");

  console.log(`${formattedHours}:${formattedMins}:${formattedSecs}`);
}

solve(4000, 0.6, 5);
solve(2564, 0.7, 5.5);
