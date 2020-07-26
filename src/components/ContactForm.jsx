import React from "react";
import styled from "@emotion/styled";
import Button from "components/_ui/Button";
import colors from "styles/colors";



const ContactContainer = styled("div")`
    max-height: 1000px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.23em;

    img {
        width: 100%;
    }
`;

const Input = styled.input`
  outline: none;
  padding: 12px 20px;
  font-size: 1em;
  color: ${colors.grey800};
  margin-bottom: 1rem;
  margin: 0px auto;
//   border: 2px solid rgba(34, 36, 38, 0.15);
//   border-radius: 3px;
  border: none;
  border-bottom: 2px solid #D4D4D5;
  min-width: 90%;
  display: flex;
  flex-direction: column;
  &:focus,
  &:active {
    border-color: #7f56b3;
  }
`;

const ContactHeader = styled.h2`
    color: ${colors.grey800};
`;

const ModButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;


const Label = styled.div`
  color: ${colors.grey600};
  height: 90px;
  display: flex;
  align-items: center;
`;

const TextArea = styled.textarea`
    outline: 0;
    resize: none;
    padding: 1rem 1rem;
    // border: 2px solid rgba(34, 36, 38, 0.15);
    // border-radius: 3px;
    border: none;
    border-bottom: 2px solid #D4D4D5;
    margin-top: 7rem;
    margin-left: 0.37rem;
    margin-bottom: 50px;
    min-width: 90%;
    height: 120px;
    font-size: 1em;
    color: ${colors.grey800};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    &:focus,
    &:active {
    border-color: #7f56b3;
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
            <Input type="text" name="name" id="name"/>
        </Label>
        <Label for="email">
            Email:
            <Input type="email" name="email" id="email"/>
        </Label>
        <Label for="subject">
            Subject:
            <Input type="text" name="subject" id="subject"/>
        </Label>
        <Label for="message">
            Message:
            <TextArea name="message" id="message"></TextArea>
        </Label>
        <ModButton>
        <Button type="submit" className="Button--secondary">Send</Button>
        </ModButton>
        </form>
    </ContactContainer>
    </>
);

export default ContactForm;