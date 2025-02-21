"use client";

import Image from "next/image";
import myImage from "@/assets/img.jpg";

const AboutPage = () => {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20">
      <h1 className="text-center mb-2 text-lg font-Ovo">Introduction</h1>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>
      <div className="flex  w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image src={myImage} alt="My-Image" className="w-full rounded-3xl" />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced Full Stack Developer with over a seven month of
            profissional experties in the field. Throughout my career, I will
            have have the privilege of colloborating with prestigious
            organizations, contributing to their success and growth{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
