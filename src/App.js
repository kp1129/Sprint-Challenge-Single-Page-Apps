import React from "react";
import Header from "./components/Header.js";
import { Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />
      {/* links */}
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/characters">Characters</Link>
      </nav>
      {/* routes */}
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route path="/characters">
        <CharacterList />
      </Route>
    </main>
  );
}
