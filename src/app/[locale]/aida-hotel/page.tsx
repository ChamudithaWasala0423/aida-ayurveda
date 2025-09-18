import Heading from "@/components/general/Heading";
import AboutImageGrid from "@/components/sections/about-image-grid";
import CenterTitle from "@/components/sections/centerTitle";
import ClientSay from "@/components/sections/client-say";
import { GallerySection } from "@/components/sections/gallery-section";
import HeroImage from "@/components/sections/hero-image";
import ImageDescriptionRight from "@/components/sections/Image-description-right";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t2 = useTranslations("HotelPage");
  const t = useTranslations("HomePage");
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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128746/aida-hotel-full_efljrg.jpg"
        uri="/contact"
        buttonText={t2("HeroButtonText")}
      />
      <AboutImageGrid
        title={t2("HotelHomeTitle")}
        description={t2("HotelDescription")}
        imageUrlOne="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128741/AH2I6591-copy_2_oudjma.jpg"
        imageUrlTwo="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128726/AH2I6867-Enhanced-NR-Edit-copy_1_a9qrhv.jpg"
        imageUrlThree="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128795/Avinya-Ayurveda-43-2048x1365_by4ixt.jpg"
        UrlOne="https://booking.aidaayurveda.com"
        UrlTwo="https://booking.aidaayurveda.com/"
        UrlThree="https://booking.aidaayurveda.com/"
        boxOneTitle={t2("HotelBoxOneTitle")}
        boxTwoTitle={t2("HotelBoxTwoTitle")}
        boxThreeTitle={t2("HotelBoxThreeTitle")}
      />
      <ImageDescriptionRight
        title={t("rightImageOneTitle")}
        description={t("rightImageOneDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758108724/Avinya-Ayurveda-Bentota-YOGA-3-2048x1365_tnqywx.jpg"
        Url="https://booking.aidaayurveda.com"
        buttonTitle={t("BookNow")}
      />
        <ClientSay
        imageUrl={
          "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758126911/avinya-ayurveda-3-2048x1152_ycqrjz.jpg"
        }
      />
      <div className="py-20">
        <CenterTitle
          title={`${t("galleryTitle")}`}
          description={t("galleryDescription")}
          buttonUrl="/gallery"
          buttonText={`${t("galleryButtonText")}`}
        />
        <GallerySection />
      </div>
    </>
  );
};

export default Page;
