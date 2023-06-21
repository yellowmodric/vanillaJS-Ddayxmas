const clock = document.querySelector("h2");

function countDay() {
    const christmas = new Date('December 25, 2023 00:00:00 GMT+0900');
    const today = new Date();
    const count = ((christmas.getTime() - today.getTime()) / 1000);
    const days = Math.floor(count / (24 * 60 * 60));
    const hour = Math.floor(count / (60 * 60) % 24);
    const minute = Math.floor(count / 60 % 60);
    const second = Math.floor(count % 60);
    const seconds = String(second).padStart(2, "0");
    const minutes = String(minute).padStart(2, "0");
    const hours = String(hour).padStart(2, "0")
    clock.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

countDay();
setInterval(countDay, 1000);