// Function to update slack username
function slackUsername() {
  const slackUsername = document.querySelector('[data-testid="slackDisplayName"]');
  slackUsername.textContent = "Daniel Okafor";
}

// Function to update slack email 
function slackEmail() {
  const slackEmail = document.querySelector('[data-testid="slackEmail"]');
  slackTrack.textContent = "bucheed@gmail.com";
}

// Function to update slack display image
function slackDisplayImage() {
  const slackDisplayImage = document.querySelector(
    '[data-testid="slackProfilePicture"]'
  );
  slackDisplayImage.src = "./img/IMG-20230908-WA0000.jpg";
  slackDisplayImage.alt = "Buchman";
}

// Function to update the current day of the week
function updateDayOfWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const dayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );
  dayElement.textContent = dayOfWeek;
}

// Function to update the current UTC time
function updateUTCTime() {
  const currentDate = new Date();
  const timeString = currentDate.toUTCString();
  const timeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  timeElement.textContent = timeString;
}

// Function to update my track
function myTrack() {
  const myTrack = document.querySelector('[data-testid="myTrack"]');
  myTrack.textContent = "Frontend";
}

// Function to update my github link
function githubURL() {
  const githubURL = document.querySelector('[data-testid="githubURL"]');
  githubURL.href = "https://github.com/Buch-dev/Frontend-Page-Creation-with-Specific-Elements.git";
}

// Call the update functions when the page loads
window.onload = function () {
  slackUsername();
  slackDisplayImage();
  updateDayOfWeek();
  updateUTCTime();
  myTrack();
  githubURL();
};
