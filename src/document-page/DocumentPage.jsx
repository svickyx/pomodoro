import React from "react";
import "./document-page.scss";

const DocumentPage = () => {
  return (
    <div className="document-page">
      <h1>An online Pomodoro Timer to boost your productivity</h1>
      <div className="text-box">
        <h2>What is Pomofocus?</h2>
        <p>
          Pomofocus is a customizable pomodoro timer that works on desktop &
          mobile browser. The aim of this app is to help you focus on any task
          you are working on, such as study, writing, or coding. This app is
          inspired by Pomodoro Technique which is a time management method
          developed by Francesco Cirillo.
        </p>
      </div>
      <div className="text-box">
        <h2>What is Pomodoro Technique?</h2>
        <p>
          The Pomodoro Technique is created by Francesco Cirillo for a more
          productive way to work and study. The technique uses a timer to break
          down work into intervals, traditionally 25 minutes in length,
          separated by short breaks. Each interval is known as a pomodoro, from
          the Italian word for 'tomato', after the tomato-shaped kitchen timer
          that Cirillo used as a university student. - Wikipedia
        </p>
      </div>
      <div className="text-box">
        <h2>Features</h2>
        <li>Responsive design that works with desktop and mobile</li>
        <li>
          Color transition to switch moods between work time and rest time
        </li>
      </div>
    </div>
  );
};

export default DocumentPage;
