import React, { Component } from "react";
import styles from "./ContactForm.module.css";

const INITIAL_STATE = {
  name: "",
  number: "",
};

export default class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  };

  handleNumberChange = (e) => {
    const { value } = e.target;
    this.setState({ number: value });
  };

  handleAddContact = () => {
    const { name, number } = this.state;
    if ((name, number) !== "") {
      this.props.onAddContact(name, number);
      this.setState({ ...INITIAL_STATE });
    }
  };

  render() {
    return (
      <form className={styles.form}>
        <label className={styles.label}>
          {" "}
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            className={styles.input}
            required
          ></input>
        </label>
        <label className={styles.label}>
          Number
          <input
            type="text"
            value={this.state.number}
            onChange={this.handleNumberChange}
            className={styles.input}
            required
          ></input>
        </label>
        <button
          type="submit"
          onClick={this.handleAddContact}
          className={styles.button}
        >
          Add contact
        </button>
      </form>
    );
  }
}
