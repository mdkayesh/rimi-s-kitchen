"use client";

import Button from "@/app/_conponents/Button";
import React from "react";

const styles = {
  input: `py-2 px-4 bg-transparent outline-none border-gray-500 border rounded-md w-full focus-within:border-primary`,
};

const ContactForm = () => {
  return (
    <div className="bg-bg_secondary px-6 py-10">
      <h2 className="text-3xl font-semibold">Contact With Us!</h2>
      <form action="">
        <div className="flex gap-6 mt-6 flex-col md:flex-row ">
          <input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className={styles.input}
          />
          <input
            required
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={styles.input}
          />
        </div>
        <input
          required
          type="subject"
          name="subject"
          id="subject"
          placeholder="Enter your subject"
          className={`${styles.input} mt-6`}
        />
        <textarea
          required
          name="message"
          id="message"
          cols={30}
          rows={10}
          placeholder="Enter your message"
          className={`${styles.input} mt-6`}
        ></textarea>

        <Button type="submit" tag="button" btnClass="mt-5 w-full">
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
