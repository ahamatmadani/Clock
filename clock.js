 function updateclock(){
    const now = new Date();
    const time = now.toLocaleString();
    const date = now.toLocaleDateString('en-US', {weekday:'long',year:'numeric',month:'long',day: 'numeric',});

    document.getElementById('time').textContent= time;
    document.getElementById('date').textContent= date;
 }
    updateclock();
 setInterval(updateclock,1000);

 