import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { idForAll } from "../Home";

const Contact = ({ id }: idForAll) => {
  return (
    <div id={id} className="pt-16 pb-16 bg-[#0e1e36]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        {/* Contact Form */}
        <div>
          <ContactForm />
        </div>
        {/* Contact Info */}
        <div className="xl:mx-auto">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;
