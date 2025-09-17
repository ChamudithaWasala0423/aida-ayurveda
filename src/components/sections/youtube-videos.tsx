import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import HeroVideoDialog from "../ui/hero-video-dialog";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { useTranslations } from "next-intl";

const YouTubeVideos = () => {
  const t = useTranslations("YouTubeSection");
  const tNav = useTranslations("Navigation");

  return (
    <section className="py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 ">
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
            <Link href="https://youtube.com/@aidaayurvedabentota?si=f-RawHaNro3oCWPc">
              <span className=" font-bold underline">{t("Handle")}</span>
            </Link>
          </p>
          <Link href="/contact" className="order-3">
            <div className="flex items-center justify-center mt-4">
              <Button size="lg"  className="bg-orange-500 hover:bg-orange-600 rounded-full">
                {tNav("contact")}
              </Button>
            </div>
          </Link>
        </div>

        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/eYuihv9vZz8?si=jHhJ6pkIIcqJV-k"
              thumbnailSrc="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758125416/1_ekakrs.jpg"
              thumbnailAlt="AIDA Ayurveda "
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/eYuihv9vZz8?si=jHhJ6pkIIcqJV-k"
              thumbnailSrc="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758125416/1_ekakrs.jpg"
              thumbnailAlt="AIDA Ayurveda"
            />
          </div>
          <div className="relative">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/_zPttmB8RYQ?si=6B3DeS3YG9ehLYEp"
              thumbnailSrc="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758125415/2_uuttqb.jpg"
              thumbnailAlt="AIDA Ayurveda "
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/_zPttmB8RYQ?si=6B3DeS3YG9ehLYEp"
              thumbnailSrc="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758125415/2_uuttqb.jpg"
              thumbnailAlt="AIDA Ayurveda"
            />
          </div>
          <div className="relative">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/nkaelmVGpF0?si=Ce4bA4r3_cELyWEe"
              thumbnailSrc="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758125417/3_ugh5ni.jpg"
              thumbnailAlt="AIDA Ayurveda "
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/nkaelmVGpF0?si=Ce4bA4r3_cELyWEe"
              thumbnailSrc="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758125417/3_ugh5ni.jpg"
              thumbnailAlt="AIDA Ayurveda"
            />
          </div>
          <div className="relative">
            <HeroVideoDialog
              className="dark:hidden block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/k6I0ehht7wM?si=-6dz_qKbNsBk2zjL"
              thumbnailSrc="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758125417/4_mwwlz3.jpg"
              thumbnailAlt="AIDA Ayurveda "
            />
            <HeroVideoDialog
              className="hidden dark:block"
              animationStyle="from-center"
              videoSrc="https://www.youtube.com/embed/k6I0ehht7wM?si=-6dz_qKbNsBk2zjL"
              thumbnailSrc="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758125417/4_mwwlz3.jpg"
              thumbnailAlt="AIDA Ayurveda"
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default YouTubeVideos;
