// Code your solution here:
function driversWithRevenueOver(drivers, rev){
  return drivers.filter(function(driver){
    return driver.revenue > rev;
  })
}

function driverNamesWithRevenueOver(drivers, rev){
  return drivers.filter(function(driver){
    return driver.revenue > rev;
  }).map(function(driver){return driver.name})
}

function exactMatch(drivers, att){
  return drivers.filter(function(driver){


    for (const key in att){
      return driver[key] === att[key];
    }

  })
}


function exactMatchToList(drivers, rev){
  return drivers.filter(function(driver){
    return driver.revenue > rev;
  })
}

function driverNamesWithRevenueOver(drivers, rev){
  return drivers.filter(function(driver){
    return driver.revenue > rev;
  }).map(function(driver){return driver.name})
}

function exactMatchToList(drivers, att){
  return drivers.filter(function(driver){


    for (const key in att){
      return driver[key] === att[key];
    }

  }).map(function(driver){return driver.name})
}
