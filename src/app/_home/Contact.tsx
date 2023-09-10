import React from "react";
import { Icons } from "./data";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="layout text-center mb-24 md:mb-40" id="contact">
      <h3 className="title">Contact</h3>
      <h2 className="text-accent font-extrabold pt-3 pb-10 ">
        Don't be shy! Hit me up! 👇
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-12">
        <div className="flex gap-4 items-center text-left">
          <Image
            className="w-16 p-4 rounded-lg shadow-md"
            src={Icons.location}
            alt="Pabna, Bangladesh"
          />
          <div className="w-fit">
            <h3 className="text-accent font-semibold">Location</h3>
            <p className="text-neutral">Pabna, Bangladesh</p>
          </div>
        </div>
        <div className="flex gap-4 items-center text-left">
          <Image
            className="w-16 p-4 rounded-lg shadow-md"
            src={Icons.mail}
            alt="rakibuzzaman.contact@gmail.com"
          />
          <div className="w-fit">
            <h3 className="text-accent font-semibold">Email</h3>
            <p className="text-neutral">rakibuzzaman.contact@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
