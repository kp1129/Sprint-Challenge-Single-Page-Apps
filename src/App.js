import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import "./App.css";

export default function App() {
  return (
    <main>
      <Header />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
      </nav>
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
    </main>
  );
}
