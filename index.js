// Code your solution here:

function driversWithRevenueOverMine(drivers, revenue){
  
  return drivers.filter(function(driver){
    
    return driver.reveneu > revenue;
    
  });
  
}

function driversWithRevenueOver (drivers, revenue) {
  return drivers.filter(function (driver) {
    return driver.revenue > revenue;
  });
}