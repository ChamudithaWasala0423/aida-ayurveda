import Heading from "@/components/general/Heading";
import GalleryMainPage from "@/components/sections/gallery-main-page";
import HeroImage from "@/components/sections/hero-image";
import { useTranslations } from "next-intl";

const Page = () => {
  const t2 = useTranslations("GalleryPage");
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
        uri="https://booking.aidaayurveda.com"
        buttonText={t2("HeroButtonText")}
      />

      <GalleryMainPage />
    </>
  );
};

export default Page;
