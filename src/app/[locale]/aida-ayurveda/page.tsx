import Heading from "@/components/general/Heading";
import AboutImageGrid from "@/components/sections/about-image-grid";
import AyurvedaInfo from "@/components/sections/ayurveda-infor";
import CenterTitle from "@/components/sections/centerTitle";
import HeroImage from "@/components/sections/hero-image";
import ImageFullGrid from "@/components/sections/ImageFullGrid";
import ImageGridDes from "@/components/sections/imageGridDes";
import RightImageDescription from "@/components/sections/right-image-description";
import SocialCarousel from "@/components/sections/social-carousel";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("HomePage");
  const t2 = useTranslations("AyurvedaPage");
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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106389/AH2I6140-Enhanced-NR-copy_yubjmi.jpg"
        uri="/contact"
        buttonText={t2("HeroButtonText")}
      />
      <ImageFullGrid
        title={t2("AboutAturvedaTitle")}
        description={t2("AboutAturvedaDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128722/AH2I6167-Enhanced-NR-copy_1_u3qawt.jpg"
        buttonText={t2("AboutAturvedaButtonText")}
      />
      <CenterTitle
        title={`${t2("AyurvedaInfoTitle")}`}
        description={t2("AyurvedaInfoDescription")}
        buttonUrl="/contact"
        buttonText={`${t2("AyurvedaInfoButtonText")}`}
      />
      <AyurvedaInfo />
      <ImageGridDes />
      <AboutImageGrid
        title={t("AboyHomeTitle")}
        description={t("AboutHomeDescription")}
        imageUrlOne="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106385/avinya-ayurveda-7_ggak9l.jpg"
        imageUrlTwo="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106389/AH2I6140-Enhanced-NR-copy_yubjmi.jpg"
        imageUrlThree="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106386/Avinya-Ayurveda-6-2048x1365_kgsuaw.jpg"
        UrlOne="https://booking.aidaayurveda.com"
        UrlTwo="https://booking.aidaayurveda.com/"
        UrlThree="https://booking.aidaayurveda.com/"
        boxOneTitle={t("AbotBoxOneTitle")}
        boxTwoTitle={t("AbotBoxTwoTitle")}
        boxThreeTitle={t("AbotBoxThreeTitle")}
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
