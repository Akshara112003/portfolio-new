
import React from 'react';
import Image from "next/image";
import phone from "../assets/phone.png";
import mail from "../assets/mail.png";

const Contact = () => {
  return (
    <div className="max-w-[1000px] mx-auto flex flex-col lg:flex-row text-white/70 p-8 rounded-lg space-y-8 lg:space-y-0 lg:space-x-8 bg-black" id="contact">
      
      {/* Left Side: Contact Info */}
      <div className="flex justify-center items-center w-full lg:w-1/2">
        <ul className="space-y-8">
          <li className="flex items-center">
            <Image src={phone} alt="phone" className="h-[110px] w-auto mr-4" />
            <p className="text-xl">+91 9787617194</p>
          </li>
          <li className="flex items-center">
            <Image src={mail} alt="mail" className="h-[100px] w-auto mr-4" />
            <p className="text-xl">takshara212@gmail.com</p>
          </li>
        </ul>
      </div>

      {/* Right Side: Contact Form */}
      <div className="bg-white/10 p-6 rounded-xl w-full lg:w-1/2">
        <h2 className="text-5xl font-bold text-orange-400 mb-4">Lets Connect</h2>
        <p className="text-white/70 mb-6">Send me a message and lets schedule a call</p>
        <form className="space-y-4" action="https://getform.io/f/bvrrdyeb" method='POST'>
          <div className="grid md:grid-cols-2 gap-4">
            <input type='text' name='name'
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="First Name"
            />
            <input type='text' name='name'
              className="bg-black/70 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Last Name"
            />
          </div>
          <input type='email' name='mail'
            className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Email"
          />
          <input type='phone' name='phone'
            className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Phone"
          />
          <textarea
            className="bg-black/70 w-full rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Your message"
          />
          <button
            className="bg-orange-700 hover:bg-orange-500 text-white px-6 py-2 w-full font-semibold text-xl rounded-xl"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
};

export default Contact;
