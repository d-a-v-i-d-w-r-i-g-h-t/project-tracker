//
var timeSpan = document.getElementById("currentTime");

var myModal = document.getElementById('inputModal')
var myInput = document.getElementById('inputModal')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
})




function updateTime() {
  var timeInterval = setInterval(function() {
    // const currentDate = dayjs();
    // timeSpan.textContent = currentDate.format('MMMM d, YYYY h:mm:ss a');
    timeSpan.textContent = getCurrentDateTime();
  }, 1000);
}

updateTime();

function getCurrentDateTime() {
  const currentDate = dayjs();
  return currentDate.format('MMMM d, YYYY h:mm:ss a')
}



