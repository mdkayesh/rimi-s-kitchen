import React from "react";
import CommonHero from "../_conponents/CommonHero";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosMailOpen } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa6";
import ContactForm from "./_components/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <section className="contact">
      <CommonHero title="Contact" img="/hero-2.png" />
      <div className="container mt-10">
        <div className="flex gap-x-7 gap-y-10 flex-col min-[700px]:flex-row">
          {/* left */}
          <div className="bg-bg_secondary min-[700px]:max-w-xs w-full px-6 py-10 border-t-2 border-b-2 border-primary">
            <p className="text-primary">Contact Info</p>
            <h2 className="text-3xl font-semibold text-heading mt-3 capitalize">
              {"Let's Connect With Us"}
            </h2>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              imperdiet varius mi, ut hendrerit magna mollis ac.
            </p>

            <ul className="mt-7 flex flex-col gap-7">
              <li className="flex gap-6 group">
                <p className="rounded-full h-12 w-12 flex justify-center items-center bg-primary text-xl">
                  <FaPhoneVolume />
                </p>
                <div>
                  <h3 className="font-semibold text-heading text-xl">
                    Phone Number
                  </h3>
                  <a
                    href="tel:+8801734909372"
                    className="group-hover:text-primary mt-1 block"
                  >
                    +8801734909372
                  </a>
                </div>
              </li>
              <li className="flex gap-6 group">
                <p className="rounded-full h-12 w-12 flex justify-center items-center bg-primary text-xl">
                  <IoIosMailOpen />
                </p>
                <div>
                  <h3 className="font-semibold text-heading text-xl">
                    Email Me
                  </h3>
                  <a
                    href="mailto:mrskhan9485@gmail.com"
                    className="group-hover:text-primary mt-1 block"
                  >
                    mrskhan9485@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex gap-6 group">
                <p className="rounded-full h-12 w-12 flex justify-center items-center bg-primary text-xl">
                  <FaAddressBook />
                </p>
                <div>
                  <h3 className="font-semibold text-heading text-xl">
                    Address
                  </h3>
                  <a
                    href="mailto:mrskhan9485@gmail.com"
                    className="group-hover:text-primary mt-1 block"
                  >
                    Dhaka, Bangladesh
                  </a>
                </div>
              </li>
            </ul>
          </div>
          {/* right */}
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
