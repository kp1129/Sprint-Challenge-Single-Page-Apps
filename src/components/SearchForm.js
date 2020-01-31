import React, { useState } from "react";

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
     <form>
        <input
          type="text"
          onChange={props.handleInputChange}
          value={props.query}
          name="name"
          tabIndex="0"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
    </section>
  );
}
