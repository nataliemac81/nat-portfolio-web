import React from "react";
import styled from "@emotion/styled";
import Button from "components/_ui/Button";



const ContactContainer = styled("div")`
    max-height: 900px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    margin-bottom: 1.23em;

    img {
        width: 100%;
    }
`;

const Input = styled.input`
  outline: 0;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  margin: 0 auto;
  border: 2px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  min-width: 80%;
  display: flex;
  flex-direction: column;
  &:focus,
  &:active {
    border-color: #85b7d9;
  }
`;

const ContactHeader = styled.h2`
  color: pink;
`;


// const Label = styled.input`
//   color: pink;
// `;

const TextArea = styled.input`
    outline: 0;
    padding: 1rem 1rem;
    border: 2px solid rgba(34, 36, 38, 0.15);
    border-radius: 3px;
    margin: 0 auto;
    margin-bottom: 50px;
    min-width: 80%;
    height: 90px;
    display: flex;
    flex-direction: column;
    &:focus,
    &:active {
    border-color: #85b7d9;
    }
`;

const ContactForm = () => (
    <>
    <ContactContainer>
        <ContactHeader>
            Contact
        </ContactHeader>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact">
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
        <label for="name">
            Name
            <Input type="text" name="name" id="name" />
        </label>
        <label for="email">
            Email
            <Input type="email" name="email" id="email" />
        </label>
        <label for="subject">
            Subject
            <Input type="text" name="subject" id="subject" />
        </label>
        <label for="message">
            Message
            <TextArea name="message" id="message" rows="5"/>
        </label>
        <Button type="submit" className="Button--secondary">Send</Button>
        </form>
    </ContactContainer>
    </>
);

export default ContactForm;