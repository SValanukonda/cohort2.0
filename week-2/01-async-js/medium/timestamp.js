const fs = require('fs');


function formatTime24(hours, minutes, seconds) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}


function formatTime12(hours, minutes, seconds) {
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    return `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
}

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const time24 = formatTime24(hours, minutes, seconds);
    const time12 = formatTime12(hours, minutes, seconds);

    const content = `24 Hour Format: ${time24}\n12 Hour Format: ${time12}`;

    console.log(content)
}


setInterval(updateClock, 1000);
