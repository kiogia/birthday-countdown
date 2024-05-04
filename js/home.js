const date = document.getElementById('date');
const timer = document.getElementById('timer');

date.value = localStorage?.getItem('birthday');

function getThisYearBirthdayDate(date) {
  const dateNow = new Date();
  const thisYearBirthdayDate = new Date(date);
  thisYearBirthdayDate.setHours(0);
  thisYearBirthdayDate.setMinutes(0);
  thisYearBirthdayDate.setSeconds(0);
  thisYearBirthdayDate.setFullYear(dateNow.getFullYear());
  return thisYearBirthdayDate;
}

function getLeftTime(date) {
  const dateNow = new Date();
  const thisYearBirthdayDate = getThisYearBirthdayDate(date);
  if (dateNow.getTime() > thisYearBirthdayDate.getTime()) {
    thisYearBirthdayDate.setFullYear(dateNow.getFullYear() + 1);
  }
  const total = thisYearBirthdayDate.getTime() - dateNow.getTime();

  return {
    seconds: Math.floor((total / 1000) % 60),
    minutes: Math.floor((total / 1000 / 60) % 60),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
  };
}

function getAge(date) {
  const birthdayDate = new Date(date);
  const thisYearBirthdayDate = getThisYearBirthdayDate(date);
  return thisYearBirthdayDate.getFullYear() - birthdayDate.getFullYear();
}

const interval = setInterval(() => {
  const birthday = localStorage?.getItem('birthday');
  if (!birthday) {
    timer.textContent == 'CHOOSE BIRTHDAY';
  } else {
    const age = getAge(birthday);
    const leftTime = getLeftTime(birthday);
    if (leftTime.days > 0) {
      timer.textContent = `${leftTime.days + 1} DAYS`;
    } else if (leftTime.hours > 0) {
      timer.textContent = `${leftTime.hours + 1} HOURS`;
    } else if (leftTime.minutes > 0) {
      timer.textContent = `${leftTime.minutes + 1} MINUTES`;
    } else if (leftTime.seconds > 0) {
      timer.textContent = `${leftTime.seconds} SECONDS`;
    } else {
      timer.textContent = `HAPPY ${age}th BIRTHDAY`;
      clearInterval(interval);
    }
  }
}, 1000);

date.addEventListener('input', (event) => {
  localStorage.setItem('birthday', event.target.value);
});
