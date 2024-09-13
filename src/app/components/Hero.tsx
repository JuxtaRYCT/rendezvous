"use client";

import { Play } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [showLine, setshowLine] = useState(false);
  useEffect(() => {
    setshowLine(true);
  }, []);

  return (
    <section className="text-center mt-24">
      <h1 className="text-4xl font-bold mb-6 leading-snug">
        A meeting at an{" "}
        <span
          className={
            "text-blue-600 cool-underline " + (showLine ? "show-underline" : "")
          }
        >
          agreed time and place
        </span>
        . <br />
        Skip the Fuss, Schedule with Us!
      </h1>
      <p className="text-gray-600">
        Rendezvous is an intuitive meeting scheduling app designed to streamline
        the process of coordinating meetings and events. With its user-friendly
        interface, Rendezvous allows users to propose multiple time slots, send
        invites, and automatically sync accepted times across participants'
        calendars. The app eliminates back-and-forth scheduling, offers
        reminders, and supports integration with popular calendar apps, ensuring
        that finding the perfect time for a meeting is fast and hassle-free.
      </p>
      <div className="mt-4 flex justify-center gap-4 items-center">
        <Link href={"/"} className="bg-black text-white py-2 px-4 rounded-full">
          Start scheduling at superspeed with rendezvous
        </Link>
        <Link
          href={"/"}
          className="border rounded-full py-2 px-4 flex gap-2 items-center text-gray-800"
        >
          <Play size={16} />
          Watch Guide
        </Link>
      </div>
    </section>
  );
};

export default Hero;
