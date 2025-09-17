import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { Button } from "../ui/button";
import Link from "next/link"

type Props = {
  videoUrl: string;
  title:  string;
  description: string;
  buttonText: string;
  buttonUrl: string

}

const HeroVideo = ({videoUrl, title, description, buttonText, buttonUrl}: Props) => {
  return (
    <section className="relative w-full h-96  md:h-[800px] xl:h-[800px] lg:h-[800px] ">
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full bg-gray-500">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={videoUrl}
          />
        </div>
        <div className="hidden md:block absolute inset-0 bg-black opacity-40" />
      </div>
      <MaxWidthWrapper>
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center mt-20">
          <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-white md:text-4xl lg:text-7xl font-[family-name:var(--font-roboto-flex)]">
            {title}
          </h1>
          <p className="relative z-10 mt-4 max-w-2xl text-center text-sm text-white md:text-lg lg:text-2xl">
           {description}
          </p>
          <Link href={buttonUrl}></Link>
          <Button className="relative z-10 mt-8 bg-white text-black hover:bg-gray-200">
           {buttonText}
          </Button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HeroVideo;
