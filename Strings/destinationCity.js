var destCity = function (paths) {
  const startCities = [];
  const destinationCities = [];
  for (let i = 0; i < paths.length; i++) {
    startCities.push(paths[i][0]);
    destinationCities.push(paths[i][1]);
  }
  // console.log(startCities, destinationCities)
  const noOfDest = destinationCities.length;
  let notDestCities = [];
  for (let j = 0; j < noOfDest; j++) {
    // console.log(startCities, destinationCities[j])
    if (startCities.includes(destinationCities[j])) {
      notDestCities.push(destinationCities[j]);
    }
  }
  // console.log(notDestCities);

  result = destinationCities.filter((item) => !notDestCities.includes(item));

  // console.log(startCities, result);
  return result[result.length - 1];
};
