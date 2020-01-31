import React from "react";
import "./WelcomePage.css";

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        <p>Head over to the Characters page to see your favorite characters!</p>
      </header>
    </section>
  );
}
