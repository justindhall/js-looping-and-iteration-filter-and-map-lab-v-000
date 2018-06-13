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

function exactMatch(driver, object){
  
  return drivers.filter(function(driver){
    
    let match = [];
    
    for (const key in object)
      match = driver.key === object.key;
    
    return match;
    
  })
  
}