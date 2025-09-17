import Image from "next/image";

import Link from "next/link";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { SocialCardsCarousel } from "./social-cards-carousel";
import { useTranslations } from "next-intl";

const SocialCarousel = () => {
  const t = useTranslations("SocialSection");
  const tNav = useTranslations("Navigation");

  return (
    <>
      <section>
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 py-24">
          <div className="flex flex-col  items-center gap-4 sm:gap-6">
            <Image
              src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
              alt={t("FlowerAlt")}
              width={200}
              height={200}
            />
            <h2 className=" uppercase order-1  tracking-tight text-center text-balance !leading-tight font-light text-3xl md:text-5xl  font-[family-name:var(--font-lora)]">
              {t("Title")}
            </h2>
            <p className=" order-2 mt-4 text-sm  text-gray-900 text-center lg:w-[70%] xl:w-[70%] md:w-[70%] w-full text-balance">
              {t("Subtitle")}{" "}
              <Link href="https://www.instagram.com/avinya.ayurveda.official/">
                <span className=" font-bold underline">{t("Handle")}</span>
              </Link>
            </p>
            <Link href="/contact" className="order-3">
              <div className="flex items-center justify-center mt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 rounded-full" size="lg">
                  {tNav("contact")}
                </Button>
              </div>
            </Link>
          </div>
        </MaxWidthWrapper>
        <SocialCardsCarousel />
      </section>
      <Image
        src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
        alt={t("FlowerAlt")}
        width={800}
        height={800}
        className="hidden md:flex lg:flex xl:flex opacity-20 -mt-64 mr-32"
      />
    </>
  );
};

export default SocialCarousel;
