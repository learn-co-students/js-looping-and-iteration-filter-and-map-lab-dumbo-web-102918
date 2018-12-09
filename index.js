//It returns an array of `driver` objects that have a `revenue` attribute that's greater than the passed-in `revenue` argument.
function driversWithRevenueOver(drivers, num){
  return drivers.filter(function(driver){
    return driver.revenue > num;
  });
}
function driverNamesWithRevenueOver(drivers, num){
  return driversWithRevenueOver(drivers, num).map(function(driver){
    return driver.name;
  })
}
function exactMatch(drivers, obj){
  return drivers.filter(function(driver){
    let matches = false;
    for (const key in obj){
      matches = driver[key] === obj[key];
    }
    return matches;
  });
}
function exactMatchToList(drivers, obj){
  return exactMatch(drivers, obj).map(driver => driver.name);
}
