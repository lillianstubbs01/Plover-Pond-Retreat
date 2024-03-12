'use client'

import React, { useState } from 'react';
import NavBar from "../components/navbar/navbar";

import "./contact.css";

function Contact() {

    //info
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    //classnames
    const [nameClass, setNameClass] = useState("contact-grouping");
    const [emailClass, setEmailClass] = useState("contact-grouping");
    const [messageClass, setMessageClass] = useState("contact-grouping");
    const [nameErrorClass, setNameErrorClass] = useState("hidden");
    const [emailErrorClass, setEmailErrorClass] = useState("hidden");
    const [messageErrorClass, setMessageErrorClass] = useState("hidden");

    //errors
    const emptyError = "This field is required."
    const invalidError = "This is an invalid entry."
    const [emailError, setEmailError] = useState(emptyError);

    function handleClear() {
        setName("");
        setEmail("");
        setMessage("");
        clearErrorMessages();
    }

    function handleSubmit() {
        clearErrorMessages();
        if (!inputErrors()) {
            // insert message submission and handling
            handleClear();
        }
    }

    // returns boolean for errors found
    function inputErrors() {
        let errors = false;
        if (name === "") {
            setNameClass("contact-grouping error");
            setNameErrorClass("error-text");
            errors = true;
        }
        if (email === "") {
            setEmailClass("contact-grouping error");
            setEmailErrorClass("error-text");
            setEmailError(emptyError);
            errors = true;
        }
        if (message === "") {
            setMessageClass("contact-grouping error");
            setMessageErrorClass("error-text");
            errors = true;
        }
        if (checkValidEmail()) {
            setEmailClass("contact-grouping error");
            setEmailErrorClass("error-text");
            setEmailError(invalidError);
            errors = true
        }
        return errors
    }

    function clearErrorMessages() {
        setNameErrorClass("hidden");
        setEmailErrorClass("hidden");
        setMessageErrorClass("hidden");
    }

    function checkValidEmail() {
        // insert email validation or regex
        return false
    }

    return (
        <div className="contact-page">
            <NavBar/>
            <div className="contact">
                <h1>We&apos;re Happy To Help</h1>
                <p className="contact-text">Fill out the contact sheet and we will follow up to answer any of your questions.
                    It is our goal to give you your best stay possible.
                </p>
                <div className="contact-card">
                    <div className={nameClass}>
                        <h2>Name<span>*</span></h2>
                        <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}></input>
                        <p className={nameErrorClass}>{emptyError}</p>
                    </div>
                    <div className={emailClass}>
                        <h2>Email<span>*</span></h2>
                        <input type="text" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                        <p className={emailErrorClass}>{emailError}</p>
                    </div>
                    <div className={messageClass}>
                        <h2>Message<span>*</span></h2>
                        <textarea value={message} onChange={(e) => {setMessage(e.target.value)}}></textarea>
                        <p className={messageErrorClass}>{emptyError}</p>
                    </div>
                    <div className="btn-row">
                        <button className="clear-btn" onClick={() => handleClear()}>Clear</button>
                        <button className="submit-btn" onClick={() => handleSubmit()}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact