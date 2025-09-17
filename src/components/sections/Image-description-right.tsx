import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  Url: string;
  buttonTitle: string;
};

const ImageDescriptionRight = ({
  title,
  description,
  imageUrl,
  Url,
  buttonTitle,
}: Props) => {
  return (
    <section>
      <div className="h-full  w-full bg-[#FCF2EB]">
        <MaxWidthWrapper >
          <div className=" w-full h-full grid grid-cols-1 xl:grid-cols-2  items-center justify-center">
            <div className=" w-full h-full  p-6 flex items-left justify-center flex-col">
              <h2 className="w-full  text-left text-balance uppercase font-light text-black text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)]">
                {title}
              </h2>
              <p className="text-lg w-full text-balance mt-6">
                {description}
              </p>
              <Link href={Url}>
                <Button size="lg" className="rounded-full mt-6 bg-orange-500 hover:bg-orange-600">
                  {buttonTitle}
                </Button>
              </Link>
            </div>
            <div className=" w-full h-full flex items-center justify-center p-6">
              <div className="grid grid-col-1 w-full  ">
                <Image
                  src={imageUrl}
                  alt="image-1"
                  className=" rounded-bl-3xl rounded-tr-3xl md:rounded-bl-3xl lg:rounded-bl-3xl xl:rounded-bl-3xl h-full w-full object-cover"
                  width={1200}
                  height={1200}
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  );
};

export default ImageDescriptionRight;
