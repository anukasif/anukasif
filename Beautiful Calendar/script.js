document.addEventListener('DOMContentLoaded', () => {
    // Update current date, day, and time
    const updateCurrentInfo = () => {
        const now = new Date();
        
        // Format the date as "20 December 2024"
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const dayOptions = { weekday: 'long' };

        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;

        const time = `${hours}:${minutes}:${seconds} ${ampm}`;

        // Setting the date, day and time
        document.getElementById('current-date').textContent = now.toLocaleDateString(undefined, options); // "20 December 2024"
        document.getElementById('current-day').textContent = now.toLocaleDateString(undefined, dayOptions);
        document.getElementById('current-time').textContent = time;
    };

    // Update every second
    setInterval(updateCurrentInfo, 1000);

    // Calculate date difference
    const dateForm = document.getElementById('date-form');
    dateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const startDate = new Date(document.getElementById('start-date').value);
        const endDate = new Date(document.getElementById('end-date').value);

        if (startDate && endDate) {
            const difference = Math.abs(endDate - startDate);
            const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
            document.getElementById('days-difference').textContent = `${days} days`; // Show "10 days"
        } else {
            alert('Please select valid dates!');
        }
    });
});
