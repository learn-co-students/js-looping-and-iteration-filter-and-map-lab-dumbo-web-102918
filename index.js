// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue > revenue;
  });
}


function driverNamesWithRevenueOver(drivers, revenue){
  const selectDrivers = driversWithRevenueOver(drivers, revenue);
  return selectDrivers.map(function (driver){
    return driver.name;
  });
}
function exactMatch(drivers, attrObj){
  return drivers.filter(function (driver){
    for (const driverKey in driver){
      if (driver[driverKey] === attrObj[driverKey]){
        return true;
      }
    }
  });
}


function exactMatchToList(drivers, attrObj){
  const pickDrivers = exactMatch(drivers, attrObj);
  return pickDrivers.map(function (driver){
    return driver.name;
  });
}
