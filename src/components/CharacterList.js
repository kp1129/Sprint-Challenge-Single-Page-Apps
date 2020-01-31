import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";
import "./CharacterList.css";

export default function CharacterList() {
  const [data, setData] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        console.log(res.data.results);
        const characters = res.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setData(characters);
      })
      .catch(err => console.log(err));
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="character-list">
      <SearchForm query={query} handleInputChange={handleInputChange} />

      <div className="characters-displayed">
        {data.map(character => {
          return <CharacterCard data={character} id={character.id} />;
        })}
      </div>
    </section>
  );
}
