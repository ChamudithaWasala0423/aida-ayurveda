import Heading from "@/components/general/Heading";
import ImageDescriptionRight from "@/components/sections/Image-description-right";
import AboutImageGrid from "@/components/sections/about-image-grid";
import HeroVideo from "@/components/sections/HeroVideo";
import { useTranslations } from "next-intl";
import Offers from "@/components/sections/offers";
import YouTubeVideos from "@/components/sections/youtube-videos";
import ClientSay from "@/components/sections/client-say";

export default function Home() {
  const t = useTranslations("HomePage");
  return (
    <>
      <Heading
        title={t("HeadingTitle")}
        description={t("HeadingDescription")}
        keywords={t("HeadingKeywords")}
      />
      <HeroVideo videoUrl="https://res.cloudinary.com/dy3lm6cvw/video/upload/v1758022877/web_djruis.mp4" />
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
      <ImageDescriptionRight
        title={t("rightImageOneTitle")}
        description={t("rightImageOneDescription")}
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758108724/Avinya-Ayurveda-Bentota-YOGA-3-2048x1365_tnqywx.jpg"
        Url="https://booking.aidaayurveda.com"
        buttonTitle={t("BookNow")}
      />
      <Offers
        title={t("OffersTitle")}
        description={t("OffersDescription")}
        url="/about"
        buttonText={t("OffersButtonText")}
      />
      <YouTubeVideos />
      <ClientSay imageUrl={"https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758126911/avinya-ayurveda-3-2048x1152_ycqrjz.jpg"} />
    </>
  );
}
