import Button from './Button'

let startTime;
let elapsedTime;
let currentTime;
let mins = 0;
let minsText = '00'
let hours;
let seconds;
let secondsText = '00'
let interval;

function startTimer() {
  startTime = new Date().getTime();
  interval = setInterval(function () {
    currentTime = new Date().getTime();
    elapsedTime = Math.round((currentTime - startTime) / 1000);
    seconds = elapsedTime % 60;
    if (seconds == 0) mins += 1;
    minsText = mins < 10 ? `0${mins}` : `${mins}`
    secondsText = seconds < 10 ? `0${seconds}` : `${seconds}`
    document.getElementById('timer').innerHTML = `${minsText} : ${secondsText}`;
  }, 1000)
}

function endTimer() {
  clearInterval(interval);
}

function TimeCard() {
  return (
    <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
      <div style={cardStyle}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <Button onClick={startTimer}>Start</Button>
          <Button onClick={endTimer} color={'red'}>Stop</Button>
        </div>
        <div style={{  margin: '40px'}}>
          <span style={timeStyle} id="timer">00 : 00</span>
        </div>
      </div>

    </div>
  );
}

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  alignSelf: 'center',
  border: '1px solid black',
  borderRadius: '8px',
  margin: '5px',
  width: '20%',
  height: '400px',
  flexDirection: 'column'
}
const timeStyle = {
  fontSize: 30,

}

export default TimeCard;