import Heading from "@/components/general/Heading";
import AccommodationImageGrid from "@/components/sections/AccommodationImageGrid";
import ClientSay from "@/components/sections/client-say";
import HeroImage from "@/components/sections/hero-image";
import RightImageDescription from "@/components/sections/right-image-description";
import SocialCarousel from "@/components/sections/social-carousel";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("HomePage");
  const t2 = useTranslations("AccommodationPage");
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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128726/AH2I6867-Enhanced-NR-Edit-copy_1_a9qrhv.jpg"
        uri="/contact"
        buttonText={t2("HeroButtonText")}
      />
      <AccommodationImageGrid />
      <ClientSay
        imageUrl={
          "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758126911/avinya-ayurveda-3-2048x1152_ycqrjz.jpg"
        }
      />
      <RightImageDescription
        title={t("rightImageTwoTitle")}
        description={t("rightImageTwoDescription")}
        imageOneUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758127525/benefits-ayurvedic-healing-herbs_fgrbb0.jpg"
        imageTwoUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115832/Avinya-Ayurveda-5-2048x1365_cpflvc.jpg"
        visible={""}
        Url="/aida-ayurveda"
        ButtonText={t("rightImageTwoButtonText")}
      />
      <SocialCarousel />
    </>
  );
};

export default Page;
