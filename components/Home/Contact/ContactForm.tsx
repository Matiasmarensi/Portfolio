import React, { useEffect, useState } from "react";
import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xoqowdlg"); // Reemplaza con tu endpoint de Formspree

  type FormFields = {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
  };
  const [formClean, setFormClean] = useState<FormFields>({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (state.succeeded) {
      window.alert("Mensaje enviado");
      setFormClean({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }, [state.succeeded]);

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;

    if (id in formClean) {
      setFormClean({
        ...formClean,
        [id]: value,
      });
    }
  };

  return (
    <div className="bg-[#0c0f1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">Contacto</h1>

      {/* Formulario */}
      <form onSubmit={handleSubmit} method="POST" className="mt-8 block w-full overflow-hidden text-base">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="First Name"
            id="name"
            name="name"
            value={formClean.name}
            onChange={handleInputs}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-300 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            value={formClean.lastName}
            onChange={handleInputs}
            required
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-300 border-opacity-15 outline-none w-full"
          />
        </div>

        <div className="flex flex-col mt-5 md:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={formClean.email}
            onChange={handleInputs}
            required
            className={`bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-opacity-15 outline-none w-full ${
              state.errors ? "border-red-500" : "border-gray-300"
            }`}
          />

          <input
            type="text"
            placeholder="Phone Number"
            id="phone"
            name="phone"
            value={formClean.phone}
            onChange={handleInputs}
            required
            className="bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-300 border-opacity-15 outline-none w-full"
          />
        </div>

        <textarea
          rows={7}
          placeholder="Message"
          id="message"
          name="message"
          value={formClean.message}
          onChange={handleInputs}
          required
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
        ></textarea>

        <div className="mt-4">
          <button
            type="submit"
            className="px-5 py-2 bg-[#d97706] text-white hover:bg-[#ffb74d] transition-all duration-150 rounded-full"
            disabled={state.submitting}
          >
            Enviar
          </button>
        </div>
      </form>

      {state.succeeded && <p className="mt-4 text-green-500">Mensaje enviado correctamente!</p>}
    </div>
  );
};

export default ContactForm;
