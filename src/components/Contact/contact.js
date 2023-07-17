import React, { useState } from "react";
import styled from "styled-components";
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
  // margin-top: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: black;
  margin-top: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  border: none;
  background-color: red;
  color: white;
  cursor: pointer;
`;

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Perform contact form submission logic here
  //     console.log("Form submitted!");
  //   };

  return (
    <Container id="myForm">
      <h2 className="white-text" style={{ marginBottom: "20px" }}>
        Contact Us For A Free Quote
      </h2>
      <Form
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
        name="contact v1"
        method="post"
        data-netlify="true"
        netlify
      >
        <FormGroup>
          <input type="hidden" name="form-name" value="contact v1" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <Label
            htmlFor="name"
            style={{ marginTop: "300px" }}
            className="white-text"
          >
            Name:
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email" className="white-text">
            Email:
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message" className="white-text">
            Message:
          </Label>
          <TextArea
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default ContactPage;
