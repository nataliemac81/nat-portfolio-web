import React from "react";
import styled from "@emotion/styled";
import Button from "components/_ui/Button";



const ContactContainer = styled("div")`
    max-height: 1000px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    // align-items: flex-start;
    // align-content: flex-end;
    margin-bottom: 1.23em;

    img {
        width: 100%;
    }
`;

const Input = styled.input`
  outline: 0;
  padding: 1rem 1rem;
  margin-bottom: 1rem;
  margin: 0px auto;
  border: 2px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  min-width: 90%;
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

const ModButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const Label = styled.div`
  color: pink;
  height: 90px;
  display: flex;
  align-items: center;
`;

const TextArea = styled.input`
    outline: 0;
    padding: 3rem 1rem;
    border: 2px solid rgba(34, 36, 38, 0.15);
    border-radius: 3px;
    margin: 8rem auto;
    margin-bottom: 50px;
    min-width: 90%;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
        <Label for="name">
            Name:
            <Input type="text" name="name" id="name" />
        </Label>
        <Label for="email">
            Email:
            <Input type="email" name="email" id="email" />
        </Label>
        <Label for="subject">
            Subject:
            <Input type="text" name="subject" id="subject" />
        </Label>
        <Label for="message">
            Message:
            <TextArea name="message" id="message" rows="5"/>
        </Label>
        <ModButton>
        <Button type="submit" className="Button--secondary">Send</Button>
        </ModButton>
        </form>
    </ContactContainer>
    </>
);

export default ContactForm;