import Heading from "@/components/general/Heading";
import Blogs from "@/components/sections/blog-section";
import HeroImage from "@/components/sections/hero-image";
import { useTranslations } from "next-intl";

const Page = () => {
  const t2 = useTranslations("BlogPage");
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
        imageUrl="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758128800/hero_f8cwo2.jpg"
        uri="/contact"
        buttonText={t2("HeroButtonText")}
      />
      <Blogs />
    </>
  );
};

export default Page;  
