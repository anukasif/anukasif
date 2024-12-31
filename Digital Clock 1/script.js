const displayTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  let amPm = '';
  
  // AM/PM
  hour < 12 ? amPm = 'AM' : amPm = 'PM';
  
  // 12-hour clock format
  if (hour > 12) {
    hour -= 12;
  }
  
  // Padding
  let padHour = String(hour).padStart(2, '0');
  let padMin = String(minute).padStart(2, '0');
  let padSec = String(second).padStart(2, '0'); // Added seconds
  
  // Selecting the time element
  const time = document.getElementById('time');
  
  // Display the time
  time.textContent = `${padHour}:${padMin}:${padSec} ${amPm}`;
  
  // Update time every second
  setTimeout(displayTime, 1000);
}

displayTime();
