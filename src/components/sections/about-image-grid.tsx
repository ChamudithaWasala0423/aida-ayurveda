import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { useTranslations } from "next-intl";

type Props = {
  title: string;
  description: string;
  imageUrlOne: string;
  imageUrlTwo: string;
  imageUrlThree: string;
  UrlOne: string;
  UrlTwo: string;
  UrlThree: string;
  boxOneTitle: string;
  boxTwoTitle: string;
  boxThreeTitle: string;
};

const AboutImageGrid = ({
  title,
  description,
  imageUrlOne,
  imageUrlTwo,
  imageUrlThree,
  UrlOne,
  UrlTwo,
  UrlThree,
  boxOneTitle,
  boxTwoTitle,
  boxThreeTitle,
}: Props) => {
  const t = useTranslations("Navigation");
  return (
    <>
      <section>
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 py-24">
          <div className="flex flex-col  items-center gap-4 sm:gap-6">
            <Image
              src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
              alt="ayurvedic icon"
              width={200}
              height={200}
            />
            <h2 className=" uppercase order-1  tracking-tight text-center text-balance !leading-tight font-light text-3xl md:text-5xl  font-[family-name:var(--font-lora)]">
              {title}
            </h2>
            <p className=" order-2 mt-4 text-lg  text-gray-900 text-center lg:w-[70%] xl:w-[70%] md:w-[70%] w-full text-balance">
              {description}
            </p>
            <Link href="/contact" className="order-3">
              <div className="flex items-center justify-center mt-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-full py-3 px-6">
                  {t("contact")}
                </Button>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none lg:rounded-tr-none xl:rounded-tr-none  xl:grid-cols-3 gap-4">
            <div className="relative h-[600px] bg-slate-100 rounded-bl-3xl rounded-tr-3xl md:rounded-bl-3xl lg:rounded-bl-3xl xl:rounded-bl-3xl">
              <Image
                src={imageUrlOne}
                alt="image-1"
                className=" rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none lg:rounded-tr-none xl:rounded-tr-none md:rounded-bl-3xl lg:rounded-bl-3xl xl:rounded-bl-3xl h-full w-full object-cover"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none lg:rounded-tr-none xl:rounded-tr-none md:rounded-bl-3xl  lg:rounded-bl-3xl xl:rounded-bl-3xl" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-lg xl:text-xl text-center font-semibold">{boxOneTitle}</h3>
                  <Link href={UrlOne} target="_blank">
                    <Button variant="link" className="text-sm text-white ">
                      {t("DiscoverMore")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] bg-slate-100 rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none lg:rounded-tr-none xl:rounded-tr-none md:rounded-bl-3xl  lg:rounded-bl-3xl xl:rounded-bl-3xl">
              <Image
                src={imageUrlTwo}
                alt="image-1"
                className=" h-full w-full object-cover rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none lg:rounded-tr-none xl:rounded-tr-none md:rounded-bl-3xl  lg:rounded-bl-3xl xl:rounded-bl-3xl"
                width={900}
                height={900}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none lg:rounded-tr-none xl:rounded-tr-none md:rounded-bl-none  lg:rounded-bl-none xl:rounded-bl-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-lg xl:text-xl text-center font-semibold">{boxTwoTitle}</h3>
                  <Link href={UrlTwo}>
                    <Button variant="link" className="text-sm text-white ">
                      {t("DiscoverMore")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] bg-slate-100 rounded-tr-3xl ">
              <Image
                src={imageUrlThree}
                alt="image-1"
                className="rounded-tr-3xl h-full w-full object-cover rounded-bl-3xl  md:rounded-bl-none  lg:rounded-bl-none xl:rounded-bl-none"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-tr-3xl rounded-bl-3xl  md:rounded-bl-none  lg:rounded-bl-none xl:rounded-bl-none" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex flex-col items-center justify-center">
                  <h3 className="text-lg xl:text-xl text-center font-semibold">{boxThreeTitle}</h3>
                  <Link href={UrlThree}>
                    <Button variant="link" className="text-sm text-white ">
                      {t("DiscoverMore")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
};

export default AboutImageGrid;
