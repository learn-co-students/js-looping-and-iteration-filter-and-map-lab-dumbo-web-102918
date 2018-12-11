// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
  }
  //   if driverRevenue > driver
  //     return richDrivers.push(driver)
  //   else
  //    return richDrivers
function driverNamesWithRevenueOver(drivers,revenue){
  richDrivers = driversWithRevenueOver(drivers, revenue);
  return richDrivers.map(function(driver) {
    return driver.name
  });
}

function exactMatch(drivers, object){
  return drivers.filter(function (driver){
    for (const driverKey in driver){
      if (driver[driverKey] === object[driverKey]){
        return true;
      }
    }
  });
}

function exactMatchToList(drivers, object) {
  exactDrivers = exactMatch(drivers, object);
  return exactDrivers.map(function(driver){
    return driver.name
  });
}
