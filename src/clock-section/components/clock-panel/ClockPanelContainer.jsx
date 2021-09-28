import React, { useState, useEffect } from "react";
import { confirmAlert } from "react-confirm-alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";

import "./clock-panel.scss";
import "react-confirm-alert/src/react-confirm-alert.css";

const ClockPanelContainer = ({ setBaseColor }) => {
  //font-awesome icons
  const stepForwardIcon = <FontAwesomeIcon icon={faStepForward} />;

  //hooks
  const [action, setAction] = useState("pomodoro");
  const [timer, setTimer] = useState(1500);
  const [countDownActive, setCountDownActive] = useState(false);
  const [startButton, setStartButton] = useState("#f81a0ad0");

  //change timer, background color and START button color
  useEffect(() => {
    if (action === "pomodoro") {
      setTimer(1500);
      setBaseColor("#f81a0ad0");
      setStartButton("#f81a0ad0");
    }
    if (action === "short") {
      setTimer(300);
      setBaseColor("#f28aa5");
      setStartButton("#f28aa5");
    }
    if (action === "long") {
      setTimer(900);
      setBaseColor("#74ad7a");
      setStartButton("#74ad7a");
    }
  }, [action, setBaseColor]);

  //if timer is ready, start count down when click the start button
  useEffect(() => {
    let timeoutTag;
    if (countDownActive && timer > 0) {
      timeoutTag = setTimeout(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    }
    return () => clearTimeout(timeoutTag);
  }, [countDownActive, timer]);

  // function to format the time
  const formatTime = () => {
    let getSeconds = `${timer % 60}`;
    let getMinutes = `${Math.floor(timer / 60)}`;

    if (getSeconds <= 9) {
      getSeconds = `0${timer % 60}`;
    }
    if (getMinutes <= 9) {
      getMinutes = `0${Math.floor(timer / 60)}`;
    }

    return `${getMinutes}:${getSeconds}`;
  };

  // use confirmAlert library to reset the clock
  const resetPomodoro = () => {
    confirmAlert({
      title: "ALERT",
      message: "The timer is still running, are you sure you want to switch?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setAction("pomodoro");
            setTimer(1500);
            setCountDownActive(false);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  const resetShort = () => {
    confirmAlert({
      title: "ALERT",
      message: "The timer is still running, are you sure you want to switch?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setAction("short");
            setTimer(300);
            setCountDownActive(false);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };
  const resetLong = () => {
    confirmAlert({
      title: "ALERT",
      message: "The timer is still running, are you sure you want to switch?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setAction("long");
            setTimer(900);
            setCountDownActive(false);
          },
        },
        {
          label: "No",
        },
      ],
    });
  };

  return (
    <div className="clock-panel-container">
      <div className="clock-panel">
        <div className="clock-header-container">
          <button
            className="work-button"
            onClick={() => {
              countDownActive ? resetPomodoro() : setAction("pomodoro");
            }}
          >
            Pomodoro
          </button>
          <button
            className="short-break-button"
            onClick={() => {
              countDownActive ? resetShort() : setAction("short");
            }}
          >
            Short Break
          </button>
          <button
            className="long-break-button"
            onClick={() => {
              countDownActive ? resetLong() : setAction("long");
            }}
          >
            Long Break
          </button>
        </div>
        <div className="clock-timer">{formatTime()}</div>
        <div>
          {countDownActive ? (
            <div className="clock-buttons-container">
              <button
                style={{
                  color: startButton,
                  position: "relative",
                  top: "6px",
                  boxShadow: "none",
                }}
                className="clock-start-button"
                onClick={() => {
                  setCountDownActive(false);
                }}
              >
                STOP
              </button>
              {/* <i className="clock-stop-button">{stepForwardIcon}</i> */}
            </div>
          ) : (
            <button
              style={{ color: startButton }}
              className="clock-start-button"
              onClick={() => {
                setCountDownActive(true);
              }}
            >
              START
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClockPanelContainer;
