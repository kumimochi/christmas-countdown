let countDate = new Date('Dec 25, 2020 00:00:00').getTime();

function newChristmas() {
  let now = new Date().getTime();
      difference = countDate - now;

      let second = 1000;
      let minute = second * 60;
      let hour =  minute * 60;
      let day = hour * 24;

      let d = Math.floor(difference / (day));
      let h = Math.floor((difference % (day)) / (hour));
      let m = Math.floor((difference %  (hour)) / (minute));
      let s = Math.floor((difference %  (minute)) / second );

      document.querySelector('#day').innerText = d;
      document.querySelector('#hour').innerText = h;
      document.querySelector('#minute').innerText = m;
      document.querySelector('#second').innerText = s;

    }
    
    setInterval(function() {
      newChristmas();
    }, 1000)