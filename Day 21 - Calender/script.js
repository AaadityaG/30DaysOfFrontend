const datePickerContainer = document.getElementById('datePickerContainer');
const openDatePickerBtn = document.getElementById('openDatePicker');
const closeDatePickerBtn = document.getElementById('closeDatePicker');
const calendar = document.getElementById('calendar');
const currentMonthYear = document.getElementById('currentMonthYear');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const selectedDateInput = document.getElementById('selectedDate');

openDatePickerBtn.addEventListener('click', () => {
  datePickerContainer.style.display = 'flex';
});

closeDatePickerBtn.addEventListener('click', () => {
  datePickerContainer.style.display = 'none';
});

function renderCalendar(month, year) {
    calendar.innerHTML = '';
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    currentMonthYear.textContent = monthNames[month] + ' ' + year;
  
    for (let i = 0; i < firstDayOfMonth; i++) {
      const emptyDiv = document.createElement('div');
      calendar.appendChild(emptyDiv);
    }
  
    for (let i = 1; i <= daysInMonth; i++) {
      const dayDiv = document.createElement('div');
      dayDiv.textContent = i;
      dayDiv.addEventListener('click', () => {
        const selectedDate = new Date(year, month, i);
        const formattedDate = formatDate(selectedDate);
        selectedDateInput.value = formattedDate; // Update the input field value with the selected date
        datePickerContainer.style.display = 'none';
      });
      calendar.appendChild(dayDiv);
    }
  }
  
  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

renderCalendar(currentMonth, currentYear);

prevMonthBtn.addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextMonthBtn.addEventListener('click', () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});
