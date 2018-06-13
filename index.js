// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  
  return drivers.filter(function(driver){
    
    return driver.revenue > revenue;
    
  });
  
}

function driverNamesWithRevenueOver(drivers, revenueValue){
  
  return drivers.filter(function(driver){
    
    if (driver.revenue > revenueValue)
      
      return driver.name;
    
  })
  
}