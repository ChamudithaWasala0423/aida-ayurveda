import Heading from "@/components/general/Heading";
import AboutImageGrid from "@/components/sections/about-image-grid";
import CenterTitle from "@/components/sections/centerTitle";
import HeroImage from "@/components/sections/hero-image";
import ImageDescriptionRight from "@/components/sections/Image-description-right";
import SocialCarousel from "@/components/sections/social-carousel";
import YogaInfor from "@/components/sections/yoga-infor";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("HomePage");
  const t2 = useTranslations("YogaPage");
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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128791/Avinya-Ayurveda-Bentota-YOGA-4-2048x1359_im4noa.jpg"
        uri="/contact"
        buttonText={t2("HeroButtonText")}
      />
      <AboutImageGrid
        title={t2("AboutYogaTitle")}
        description={t2("AboutYogaDescription")}
        imageUrlOne="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128791/Avinya-Ayurveda-Bentota-YOGA-4-2048x1359_im4noa.jpg"
        imageUrlTwo="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128708/Avinya-Ayurveda-4-2-2048x1365_qfkdso.jpg"
        imageUrlThree="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115727/Avinya-Ayurveda-40-2048x1365_kuyvwd.jpg"
        UrlOne="https://booking.aidaayurveda.com"
        UrlTwo="https://booking.aidaayurveda.com/"
        UrlThree="https://booking.aidaayurveda.com/"
        boxOneTitle={t2("AboutBoxOneTitle")}
        boxTwoTitle={t2("AboutBoxTwoTitle")}
        boxThreeTitle={t2("AboutBoxThreeTitle")}
      />
      <ImageDescriptionRight
        title={t("rightImageOneTitle")}
        description={t("rightImageOneDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758108724/Avinya-Ayurveda-Bentota-YOGA-3-2048x1365_tnqywx.jpg"
        Url="https://booking.aidaayurveda.com"
        buttonTitle={t("BookNow")}
      />
      <CenterTitle
        title={`${t2("YogaInfoTitle")}`}
        description={t2("YogaInfoDescription")}
        buttonUrl="/contact"
        buttonText={`${t2("YogaInfoButtonText")}`}
      />
      <YogaInfor />
      <SocialCarousel />
    </>
  );
};

export default Page;
