import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Check } from "lucide-react";
import MaxWidthWrapper from "../general/MaxWidthWrapper";

type Props = {
  title: string;
  description: string;
  imageOneUrl: string;
  imageTwoUrl: string;
  visible: string;
  Url: string;
  ButtonText: string;
};

const RightImageDescription = ({
  title,
  description,
  imageOneUrl,
  imageTwoUrl,
  visible,
  Url,
  ButtonText,
}: Props) => {
  return (
    <section>
      <div className=" w-full">
        <MaxWidthWrapper>
          <div className=" grid grid-cols-1  xl:grid-cols-2 2xl:grid-cols-2 gap-4 p-6  w-full h-full items-center justify-center">
            <div className=" w-full h-full   flex items-left justify-center flex-col">
              <h2 className="w-full text-left text-balance uppercase text-black text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] font-light tracking-tight !leading-tight">
                {title}
              </h2>
              <p className="text-lg w-full text-balance mt-6">{description}</p>
              <ul
                className={` ${visible} mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start `}
              >
                <div className="space-y-2 ">
                  <li className=" flex gap-1.5 items-center text-left text-gray-900">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    Virechana (Purgation)
                  </li>
                  <li className=" flex gap-1.5 items-center text-left text-gray-900">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />5 year
                    Vamana (Emesis)
                  </li>
                  <li className=" flex gap-1.5 items-center text-left text-gray-900">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    Snehavasthi (Medicated Oil Enema)
                  </li>
                  <li className=" flex gap-1.5 items-center text-left text-gray-900">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    Kashayavasti (medicated decoction enema)
                  </li>
                  <li className=" flex gap-1.5 items-center text-left text-gray-900">
                    <Check className="h-5 w-5 shrink-0 text-orange-600" />
                    Nasya (Nasal Administration)
                  </li>
                </div>
              </ul>
              <Link href={Url}>
                <Button size="lg" className="mt-6 bg-orange-500 hover:bg-orange-600 rounded-full">
                  {ButtonText}
                </Button>
              </Link>
            </div>
            <div className="relative w-full h-full flex items-center justify-center p-6">
              <div className="grid grid-col-1 w-full  h-[600px]">
                <Image
                  src={imageOneUrl}
                  alt="image-1"
                  className=" rounded-bl-3xl rounded-tr-3xl md:rounded-bl-3xl lg:rounded-bl-3xl xl:rounded-bl-3xl h-full w-full object-cover"
                  width={1400}
                  height={1400}
                />
              </div>
              <div className=" absolute grid grid-col-1  h-[400px] mt-64 mr-32 md:mr-64 xl:mr-64 lg:mr-64 ring-4 rounded-tr-3xl ring-[#FCF2EB]">
                <Image
                  src={imageTwoUrl}
                  alt="image-1"
                  className=" rounded-bl-3xl rounded-tr-3xl md:rounded-bl-3xl lg:rounded-bl-3xl xl:rounded-bl-3xl h-full w-full object-cover"
                  width={800}
                  height={800}
                />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
        <div className=" hidden w-96 h-full  ml-52">
          <Image
            src="/icons/green-leaf.png"
            alt="image-1"
            className=" rounded-bl-3xl rounded-tr-3xl md:rounded-bl-3xl lg:rounded-bl-3xl xl:rounded-bl-3xl h-full w-full object-cover"
            width={800}
            height={800}
          />
        </div>
      </div>
    </section>
  );
};

export default RightImageDescription;
