const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const responseMessage = document.getElementById('responseMessage');
const calendarLink = document.getElementById('calendarLink');

yesBtn.addEventListener('click', () => {
    responseMessage.classList.remove('hidden');
    yesBtn.style.display = 'none';
    noBtn.style.display = 'none';
    generateCalendarInvite();
});

noBtn.addEventListener('mouseover', () => {
    const containerRect = noBtn.parentElement.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();
    
    const maxX = containerRect.width - btnRect.width;
    const maxY = containerRect.height - btnRect.height;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

function generateCalendarInvite() {
    const restaurantName = "Traveler's Table"; // Replace with your chosen restaurant
    const location = "520 WestHeimer Road, Houston"; // Replace with the actual address
    const startTime = "2025-02-14T14:00:00"; // Replace with your desired date and time
    const endTime = "2025-02-14T16:00:00"; // Adjust end time as needed

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:${startTime.replace(/[-:]/g, '')}
DTEND:${endTime.replace(/[-:]/g, '')}
SUMMARY:Valentine's Date
DESCRIPTION:Our special Valentine's date!
LOCATION:${location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    calendarLink.href = url;
}
