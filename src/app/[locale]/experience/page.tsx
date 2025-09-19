import Heading from "@/components/general/Heading"; 
import TravelExperiences from "@/components/sections/experiance-layout";
import HeroImage from "@/components/sections/hero-image";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t2 = useTranslations("ExperiencePage");
  return (
    <>
      <Heading
        title={t2("HeadingTitle")}
        description={t2("HeadingDescription")}
        keywords={t2("HeadingKeywords")}
      />
      <HeroImage
        title={t2("HeroTitle")}
        description={t2("HeroDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1756012746/2148593462_mpm4yr.jpg"
        uri="https://booking.aidaayurveda.com"
        buttonText={t2("HeroButtonText")}
      />
      <TravelExperiences />
    </>
  );
};

export default Page;
