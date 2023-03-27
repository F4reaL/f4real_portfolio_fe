import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
const GG_SHEET_URL = process.env.GG_SHEET_URL;
const ContactsForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(GG_SHEET_URL);
    const dataForm = {
      Name: name,
      Email: email,
      Phone: phone,
      Title: title,
      Message: message,
    };
    await fetch(
      GG_SHEET_URL,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(dataForm),
      }
    )
      .then((res) => {
        setIsSuccess(true);
        setIsLoading(false);
      })
      .catch((e) => alert("Please contact me via Facebook!"));

    handleResetForm();
  };
  const handleResetForm = () => {
    setEmail("");
    setMessage("");
    setName("");
    setPhone("");
    setTitle("");
  };
  return (
    <>
      <form
        className="w-full  flex flex-col items-start gap-4"
        onSubmit={handleSubmitForm}
      >
        <InputComponent
          required={true}
          placeholder="Name"
          value={name}
          setValue={setName}
          name={"Name"}
        />
        <div className="flex w-full gap-4">
          <InputComponent
            placeholder="Email"
            required={true}
            value={email}
            setValue={setEmail}
            name={"Email"}
          />
          <InputComponent
            placeholder="Phone"
            value={phone}
            setValue={setPhone}
            name={"Phone"}
          />
        </div>
        <InputComponent
          placeholder="Title"
          value={title}
          setValue={setTitle}
          name={"Title"}
        />
        <InputComponent
          required={true}
          placeholder="Message"
          type={"textbox"}
          value={message}
          setValue={setMessage}
          name={"Message"}
        />
        <div className="flex items-center gap-4">
          <ButtonComponent classname={"border-lavender hover:bg-lavender-20"}>
            {isLoading ? "Sending ...":'Send'}
          </ButtonComponent>
          {isSuccess && (
            <div className="text-green-500 font-[600]">Sent Successfully !</div>
          )}
        </div>
      </form>
    </>
  );
};

export default ContactsForm;
