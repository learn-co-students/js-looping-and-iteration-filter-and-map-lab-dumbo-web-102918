// Code your solution here:
function driversWithRevenueOver(list, revenue) {
        return list.filter(function(driver){
          return driver.revenue > revenue;
        });
}

function driverNamesWithRevenueOver(list, revenue) {
  return driversWithRevenueOver(list, revenue).map(function(driver) {
    return driver.name;
  });
}

function exactMatch(list, obj){
  return list.filter(function(driver) {
    let matches = false
    for(const key in obj) {
      matches = driver[key] === obj[key];
    }
    return matches
  });
}

function exactMatchToList(list, obj) {
  return exactMatch(list, obj).map(function(driver) {
    return driver.name
  });
}
