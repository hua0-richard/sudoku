import React, { useEffect, useState } from "react";
import { IoMdPause } from "react-icons/io";
import { IoMdPlay } from "react-icons/io";
import "./StopWatch.css";

function StopWatch() {
  const [counter, setCounter] = useState(1);
  const [time, setTime] = useState("0:00");
  const [pause, setPause] = useState(true);

  function run() {
    setTimeout(() => {
      setCounter(counter + 1);
      let minute = Math.floor(counter / 60);
      let second = counter - minute * 60;
      if (second < 10) {
        second = "0" + second.toString();
      } else {
        second = second.toString();
      }
      if (minute > 60) {
        let hour = Math.floor(minute / 60);
        minute = minute - hour * 60;
        if (minute < 10) {
          minute = "0" + minute.toString();
        } else {
          minute = minute.toString();
        }
        setTime(hour + ":" + minute + ":" + second);
      } else {
        setTime(minute + ":" + second);
      }
    }, 1000);
  }

  useEffect(() => {
    if (pause) {
      run();
    }
  });

  return (
    <div id="container">
      {pause && (
        <IoMdPause
          id="pause"
          onClick={() => {
            setPause(!pause);
          }}
        ></IoMdPause>
      )}
      {!pause && (
        <IoMdPlay
          id="pause"
          onClick={() => {
            setPause(!pause);
          }}
        ></IoMdPlay>
      )}
      <div>{time}</div>
    </div>
  );
}

export default StopWatch;
