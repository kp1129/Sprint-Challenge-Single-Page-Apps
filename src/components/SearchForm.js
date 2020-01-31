import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "./SearchForm.css";

export default function SearchForm(props) {
  return (
    <section className="search-form">
      <Form>
        <FormGroup>
          <Label>
            <Input
              type="text"
              onChange={props.handleInputChange}
              value={props.query}
              name="name"
              tabIndex="0"
              placeholder="search by name"
              autoComplete="off"
            />
          </Label>
        </FormGroup>
      </Form>
    </section>
  );
}
