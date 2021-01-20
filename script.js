function clock(){
  var meridiam = "AM"
  var time = new Date(),
  hours = time.getHours(),
  minutes = time.getMinutes(),
  seconds = time.getSeconds();
  
  
  document.querySelectorAll('.clock')[0].innerHTML =
  hquartz(hours) + ":" + quartz(minutes) + ":" + quartz(seconds) + " " + meridiam;
  
  
  function hquartz(hr){
  if(hr > 12){
  hr = hr - 12
  meridiam = "PM"
  return '0' + hr 
  }else{meridiam = "AM"}
  return hr 
  }

  
  function quartz(ms){
  if(ms < 10){
  ms = '0' + ms
  }
  return ms
  }


  }
  setInterval(clock, 1000);