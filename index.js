// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  
  return drivers.filter(function(driver){
    
    return driver.revenue > revenue;
    
  });
  
}

function driverNamesWithRevenueOver(drivers, revenueValue){
  
  return driversWithRevenueOver(drivers, revenueValue).map(function (driver){
    
    return driver.name;
    
  })
  
}

function exactMatchMine(drivers, toBeMatched){
  
  return drivers.filter(function(driver){
    
    let match = null;
    
    for (const key in toBeMatched)
      match = driver.key === toBeMatched.key;
    
    return match;
    
  })
  
}

function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}