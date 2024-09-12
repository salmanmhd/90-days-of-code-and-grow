function timer() {
  setInterval(() => {
    const now = new Date();
    let hours24 = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    // let annotation = hours24 < 12 ? 'AM' : 'PM';

    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;
    // hours24 = hours24 <= 12 ? `${hours24}` : `${hours24 - 12}`;
    hours24 = hours24 < 10 ? `0${hours24}` : hours24;

    console.log(`${hours24}:${minutes}:${seconds}`);
    // console.log(`${hours24}:${minutes}:${seconds} ${annotation}`);
  }, 1000);
}

timer();
