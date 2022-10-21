import React, { useState } from "react";
import { send } from "emailjs-com";
export const Feedback = () => {
  const [feedback, setfeedback] = useState("");
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  function send_e(e) {
    e.preventDefault()
    send(
      "service_i7hl489",
      "template_e6ct3qg",
      { from_name: name, to_name: "Guhan", message: feedback, reply_to: email },
      "TOHmTw5KrSU9KZG3m"
    )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }
  return (
    <div className="feedback-container">
      <form  onSubmit={send_e}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="name"
        onChange={(e) => {
          setname(e.target.value);
        }}
        placeholder="Enter your name"
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email" className="email"
        required={true}
        onChange={(e) => {
          setemail(e.target.value);
        }}
        placeholder="Enter your email"
      />
      <br />
      <label htmlFor="feedback">Feedback</label>
      <textarea
        name="feedback"
        id="feedback"
        onChange={(e) => {
          setfeedback(e.target.value);
        }}
      ></textarea>
      <button type="submit" className="feedback-submit">
        Submit
      </button>
      </form>
    </div>
  );
};