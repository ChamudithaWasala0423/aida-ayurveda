import Heading from "@/components/general/Heading";
import AboutGrid from "@/components/sections/about-grid";
import AboutImageGrid from "@/components/sections/about-image-grid";
import HeroImage from "@/components/sections/hero-image";
import ImageFullGrid from "@/components/sections/ImageFullGrid";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t2 = useTranslations("AboutPage");

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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128715/Avinya-Ayurveda-4-2048x1365_zkpw5l.jpg"
        uri="/contact"
        buttonText={t2("HeroButtonText")}
      />
      <ImageFullGrid
        title={t2("AboutResortTitle")}
        description={t2("AboutResortDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128746/aida-hotel-full_efljrg.jpg"
        buttonText={t2("AboutResortButtonText")}
      />
      <AboutGrid
        title={t2("ChairmanTitle")}
        description={t2("ChairmanDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758138399/Frame-382.png_m7rkot.webp"
        imageUrlTwo="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758138399/Frame-403-3.png_bcud8a.webp"
        imageUrlThree="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758138408/Frame-404-3.png_bjbnsv.webp"
        imageUrlFour="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758138410/Frame-38321_ro6abx.png"
        buttonText={t2("ChairmanButtonText")}
        buttonUrl="/contact"
      />
      <AboutImageGrid
        title={t2("AboutImageTitle")}
        description={t2("AboutImageDescription")}
        imageUrlOne="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106385/avinya-ayurveda-7_ggak9l.jpg"
        imageUrlTwo="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106389/AH2I6140-Enhanced-NR-copy_yubjmi.jpg"
        imageUrlThree="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106386/Avinya-Ayurveda-6-2048x1365_kgsuaw.jpg"
        UrlOne="https://booking.aidaayurveda.com"
        UrlTwo="https://booking.aidaayurveda.com/"
        UrlThree="https://booking.aidaayurveda.com/"
        boxOneTitle={t2("BoxOneTitle")}
        boxTwoTitle={t2("BoxTwoTitle")}
        boxThreeTitle={t2("BoxThreeTitle")}
      />
    </>
  );
};

export default Page;
