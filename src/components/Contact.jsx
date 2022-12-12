import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_jh8wv7i",
        "template_fw0ajbk",
        form.current,
        "0_-8b67k160j5lkgJ")
    emailjs
      .sendForm(
        "service_jh8wv7i",
        "template_99u8gfi",
        form.current,
        "0_-8b67k160j5lkgJ"
      )
      .then(
        (result) => {
          alert("your message has been sent !");
        },
        (error) => {
          alert(error.text);
        }
      );
  };

  return (
    <div>
      <h1 className=" absolute mt-[8%] mx-[25%] font-bold">
        You can contact me directly through the buttons, or you can write to me
        by filling out the form
      </h1>
      <div className="flex">
        <div className=" mt-[150px] m-2 w-[450px] h-[450px]">
        <a href="tel:0021625050301"><button
            className="my-[7%] mx-[10%] bg-green-400 rounded-[100px] text-center text-[20px] font-bold border-4
          shadow-[0_-25px_18px_-14px_rgba(44,187,99,.15)] h-[50px] w-[350px] px-10
          hover:bg-black hover:text-green-400"
          >
            Call me now!
          </button></a>
          <a href="mailto: omarzribi@proton.me"> <button
            className="my-[7%] mx-[10%] bg-green-400 rounded-[100px] text-center text-[20px] font-bold border-4
          shadow-[0_-25px_18px_-14px_rgba(44,187,99,.15)] h-[50px] w-[350px] px-10
          hover:bg-black hover:text-green-400"
          >
            Send Email
          </button></a>

          <a href="https://www.linkedin.com/in/omar--zribi/" target="blank">
          <button
            className="my-[7%] mx-[10%] bg-green-400 rounded-[100px] text-center text-[20px] font-bold border-4
          shadow-[0_-25px_18px_-14px_rgba(44,187,99,.15)] h-[50px] w-[350px] px-10
          hover:bg-black hover:text-green-400"
          >
              my linkedin profile
          </button>
            </a>
            <a href="https://github.com/omar-zribi" target="blank">
          <button
            className="my-[7%] mx-[10%] bg-green-400 rounded-[100px] text-center text-[20px] font-bold border-4
          shadow-[0_-25px_18px_-14px_rgba(44,187,99,.15)] h-[50px] w-[350px] px-10
          hover:bg-black hover:text-green-400"
          >
              my github profile
          </button>
            </a>
        </div>
       <div className="mt-[150px] m-2 w-[1050px] h-[450px]">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex w-[950px] mt-10">
              <label className=" text-center w-[250px]">Full Name</label>
              <input
                id="name"
                type="text"
                className="w-[550px] border-2 border-green-400"
                name="Name"
                placeholder="First and Last"
                required
                minLength="3"
                maxLength="25"
              />
            </div>
            <div className="flex w-[950px] mt-10">
              <label className=" text-center w-[250px]">Email Address</label>
              <input
                id="email"
                type="email"
                className="w-[550px] border-2 border-green-400"
                name="Email"
                placeholder="email@domain.tld"
                required
              />
            </div>
            <div className="flex w-[950px] mt-10">
              <label className="text-center w-[250px]">Message</label>
              <textarea
                id="Message"
                className="w-[550px] border-2 border-green-400"
                name="Message"
                rows="5"
                placeholder="Type your message here...."
              ></textarea>
            </div>
            <div className="h-20">
              <button
                className="my-[7%] mx-[35%] bg-green-400 rounded-[100px] text-center text-[20px] font-bold border-4
          shadow-[0_-25px_18px_-14px_rgba(44,187,99,.15)] h-[50px] w-[350px] px-10
          hover:bg-black hover:text-green-400"
          type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      </div>
  );
};
export default Contact;
