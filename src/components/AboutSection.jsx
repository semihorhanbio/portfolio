"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>Next.js</li>
        <li>React</li>
        <li>Tailwind</li>
        <li>Python</li>
        <li>FastAPI</li>
        <li>Ethereum</li>
        <li>Solidity</li>
        <li>Hardhat</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Izmir Institute of Technology, Molecular Biology and Genetics</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Meta Front-End Developer Professional Certificate</li>
        <li>Data Analyst Certificate by Dataquest</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="avatar" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a dynamic and enthusiastic junior developer with a deep passion for full-stack web and blockchain development. My journey in tech has led me to acquire a diverse set of skills that I am eager to apply and expand. In the world of frontend development, I excel with React and Next.js, crafting seamless and user-friendly interfaces. My proficiency with TailwindCSS ensures that my projects are not only functional but visually appealing as well. I also specialize in using shadcn/ui as my UI library, enhancing the overall user experience with its robust features. Moving to the backend, my expertise lies in Node.js and Python. These powerful programming languages enable me to develop robust and scalable applications. I am adept in utilizing Express and FastAPI, allowing me to build efficient and secure backend solutions. My passion does not stop at web development; I am also deeply immersed in the blockchain world. Actively learning the Ethereum ecosystem, I specialize in Solidity for smart contract development and leverage Hardhat for an efficient Ethereum development environment. This knowledge positions me uniquely in the intersection of traditional web and blockchain technologies. I am thrilled at the prospect of bringing my diverse skill set to new challenges and collaborations. Lets create something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
