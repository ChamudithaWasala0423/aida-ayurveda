import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiHome6Line } from "react-icons/ri";
import { MdBalcony } from "react-icons/md";
import { PiFlowerTulipBold } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { LuBath } from "react-icons/lu";
import { MdPool } from "react-icons/md";
import { Check } from "lucide-react";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { ImageSwiper } from "../ui/image-swiper";
import en from "../../../messages/en.json";

const images = [
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207048/539498792_tfmyhe.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207047/539498776_k8vebs.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207048/539498787_gcmtmn.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207047/539498748_remgux.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207049/539498804_enmh7i.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758208066/WhatsApp_41_dy6vbh.webp",
];
const imagesTwo = [
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758206804/539498757_mztehf.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758206804/539501377_uqm5mz.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758206804/539501375_n4fy0f.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758206804/539501378_kcghga.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758206804/539501374_1_oeaeqh.jpg",
];
const imagesThree = [
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207249/539498793_q2igek.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207249/539498801_waawcu.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207247/539498777_frtsnc.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207249/539498794_f97mtg.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207248/539498785_xjegpe.jpg",
  "https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758207248/539497026_mmum1z.jpg",
];

const AccommodationImageGrid = () => {
  const t = (en as any).AccommodationGrid;
  return (
    <section>
      <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32 py-24">
        <div className="flex flex-col  items-center gap-4 sm:gap-6">
          <Image
            src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758105345/92e06c3ccdeca35cd8b7b0d72f265d61_nxuray.png"
            alt={t.IconAlt}
            width={200}
            height={200}
          />
          <h2 className=" uppercase order-1  tracking-tight text-center text-balance !leading-tight font-light text-3xl md:text-5xl lg:text-5xl font-[family-name:var(--font-lora)] ">
            {t.Title}
          </h2>
          <p className=" order-2 mt-4 text-lg  text-gray-900 text-center lg:w-[70%] xl:w-[70%] md:w-[70%] w-full text-balance">
            {t.Intro}
          </p>
          <Link href="https://booking.aidaayurveda.com" className="order-3">
            <div className="flex items-center justify-center mt-4">
              <Button size="lg" className=" bg-orange-500 hover:bg-orange-600 rounded-full">
                {t.Common.BookNow}
              </Button>
            </div>             
          </Link>
        </div>
        {/* -------- Sakura Suite -------- */}
        <div className="grid grid-cols-1 rounded-bl-3xl rounded-tr-3xl md:rounded-tr-none lg:rounded-tr-none xl:rounded-tr-none md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-[#FCF2EB]  p-6 rounded-bl-xl rounded-tr-3xl">
            <div className="w-full">
              <ImageSwiper images={images} />
            </div>
            <div className="mt-3">
              <h2 className="text-center font-semibold">
                {t.Rooms.SakuraSuite.Title}
              </h2>
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center  justify-between gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-[#FCF2EB] ring-2 ring-[#F7710F] text-[#F7710F] hover:bg-[#F7710F] hover:text-white"
                      >
                        {t.Common.KnowMore}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-700px] mt-14">
                      <DialogHeader>
                        <DialogTitle>
                          {t.Rooms.SakuraSuite.Title}
                        </DialogTitle>
                        <DialogDescription>{t.Rooms.SakuraSuite.BedInfo}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4  ">
                        <div className="grid grid-cols-1 items-center gap-4">
                          <div>
                            <div className="grid  grid-cols-4 gap-2 ">
                              <div className="flex gap-1 items-center">
                                <RiHome6Line size={20} />
                                <p className=" text-xs">
                                  {t.Rooms.SakuraSuite.SizeValue} {t.Common.FeatureLabels.SizeUnit}
                                </p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <MdBalcony size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Balcony}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <PiFlowerTulipBold size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Garden}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <TbAirConditioning size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.AC}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <LuBath size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Bath}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <MdPool size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Pool}</p>
                              </div>
                            </div>
                            <div className="mt-2">
                              <p className="text-sm font-semibold">
                                {t.Rooms.SakuraSuite.SizeLabel}
                              </p>
                              <p className="text-xs">
                                {t.Common.ComfyBedsScore}
                              </p>
                              <p className="text-xs">
                                {t.Rooms.SakuraSuite.Description}
                              </p>
                            </div>
                            {/* ------------------------------------------ */}
                            <div className="mt-2 ">
                              <p className="text-sm font-semibold">
                                {t.Common.PrivateBathroomTitle}
                              </p>
                              <ul className={`mt-1 space-y-2 text-left font-medium flex flex-col items-center sm:items-start `}>
                                <div className=" grid grid-cols-2 items-center ">
                                  {t.Common.PrivateBathroomList.map((item: string) => (
                                    <li key={item} className=" flex gap-1.5 items-center text-left text-gray-900 text-xs">
                                      <Check className="h-5 w-5 shrink-0 text-orange-600" />
                                      {item}
                                    </li>
                                  ))}
                                </div>
                              </ul>
                            </div>
                            {/* ------------------------------------------ */}
                            <div className="mt-2 ">
                              <p className="text-sm font-semibold">
                                {t.Common.FacilitiesTitle}
                              </p>
                              <ul className={`mt-1 space-y-2 text-left font-medium flex flex-col items-center sm:items-start `}>
                                <div className=" grid grid-cols-2 items-center ">
                                  {t.Rooms.SakuraSuite.FacilitiesList.map((item: string) => (
                                    <li key={item} className=" flex gap-1.5 items-center text-left text-gray-900 text-xs">
                                      <Check className="h-5 w-5 shrink-0 text-orange-600" />
                                      {item}
                                    </li>
                                  ))}
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Link href="https://booking.aidaayurveda.com">
                          <Button className="bg-[#F7710F] hover:bg-[#f7640f]">
                            {t.Common.BookNow}
                          </Button>
                        </Link>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Link href="https://booking.aidaayurveda.com">
                    <Button className="bg-[#F7710F] hover:bg-[#f7640f]">
                      {t.Common.BookNow}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* -------- Deluxe Double -------- */}
          <div className="bg-[#FCF2EB] p-6 rounded-bl-xl rounded-tr-3xl">
            <div className="w-full">
              <ImageSwiper images={imagesTwo} />
            </div>
            <div className="mt-3">
              <h2 className="text-center font-semibold">
                {t.Rooms.DeluxeDouble.Title}
              </h2>
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center  justify-between gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-[#FCF2EB] ring-2 ring-[#F7710F] text-[#F7710F] hover:bg-[#F7710F] hover:text-white"
                      >
                        {t.Common.KnowMore}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-700px] mt-14">
                      <DialogHeader>
                        <DialogTitle>
                          {t.Rooms.DeluxeDouble.Title}
                        </DialogTitle>
                        <DialogDescription>{t.Rooms.DeluxeDouble.BedInfo}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4  ">
                        <div className="grid grid-cols-1 items-center gap-4">
                          <div>
                            <div className="grid  grid-cols-4 gap-2 ">
                              <div className="flex gap-1 items-center">
                                <RiHome6Line size={20} />
                                <p className=" text-xs">
                                  {t.Rooms.DeluxeDouble.SizeValue} {t.Common.FeatureLabels.SizeUnit}
                                </p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <MdBalcony size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Balcony}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <PiFlowerTulipBold size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Garden}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <TbAirConditioning size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.AC}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <LuBath size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Bath}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <MdPool size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Pool}</p>
                              </div>
                            </div>
                            <div className="mt-2">
                              <p className="text-sm font-semibold">
                                {t.Rooms.DeluxeDouble.SizeLabel}
                              </p>
                              <p className="text-xs">
                                {t.Common.ComfyBedsScore}
                              </p>
                              <p className="text-xs">
                                {t.Rooms.DeluxeDouble.Description}
                              </p>
                            </div>
                            {/* ------------------------------------------ */}
                            <div className="mt-2 ">
                              <p className="text-sm font-semibold">
                                {t.Common.PrivateBathroomTitle}
                              </p>
                              <ul className={`mt-1 space-y-2 text-left font-medium flex flex-col items-center sm:items-start `}>
                                <div className=" grid grid-cols-2 items-center ">
                                  {t.Common.PrivateBathroomList.map((item: string) => (
                                    <li key={item} className=" flex gap-1.5 items-center text-left text-gray-900 text-xs">
                                      <Check className="h-5 w-5 shrink-0 text-orange-600" />
                                      {item}
                                    </li>
                                  ))}
                                </div>
                              </ul>
                            </div>
                            {/* ------------------------------------------ */}
                            <div className="mt-2 ">
                              <p className="text-sm font-semibold">
                                {t.Common.FacilitiesTitle}
                              </p>
                              <ul className={`mt-1 space-y-2 text-left font-medium flex flex-col items-center sm:items-start `}>
                                <div className=" grid grid-cols-2 items-center ">
                                  {t.Rooms.DeluxeDouble.FacilitiesList.map((item: string) => (
                                    <li key={item} className=" flex gap-1.5 items-center text-left text-gray-900 text-xs">
                                      <Check className="h-5 w-5 shrink-0 text-orange-600" />
                                      {item}
                                    </li>
                                  ))}
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Link href="https://booking.aidaayurveda.com">
                          <Button className="bg-[#F7710F] hover:bg-[#f7640f]">
                            {t.Common.BookNow}
                          </Button>
                        </Link>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Link href="https://booking.aidaayurveda.com">
                    <Button className="bg-[#F7710F] hover:bg-[#f7640f]">
                      {t.Common.BookNow}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* -------- Private Villa -------- */}
          <div className="bg-[#FCF2EB]  p-6 rounded-bl-xl rounded-tr-3xl">
            <div className="w-full">
              <ImageSwiper images={imagesThree} />
            </div>
            <div className="mt-3">
              <h2 className="text-center font-semibold">
                {t.Rooms.PrivateVilla.Title}
              </h2>
              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center  justify-between gap-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="bg-[#FCF2EB] ring-2 ring-[#F7710F] text-[#F7710F] hover:bg-[#F7710F] hover:text-white"
                      >
                        {t.Common.KnowMore}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-700px] mt-14">
                      <DialogHeader>
                        <DialogTitle>
                          {t.Rooms.PrivateVilla.Title}
                        </DialogTitle>
                        <DialogDescription>{t.Rooms.PrivateVilla.BedInfo}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4  ">
                        <div className="grid grid-cols-1 items-center gap-4">
                          <div>
                            <div className="grid  grid-cols-4 gap-2 ">
                              <div className="flex gap-1 items-center">
                                <RiHome6Line size={20} />
                                <p className=" text-xs">
                                  {t.Rooms.PrivateVilla.SizeValue} {t.Common.FeatureLabels.SizeUnit}
                                </p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <MdBalcony size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Balcony}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <PiFlowerTulipBold size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Garden}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <TbAirConditioning size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.AC}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <LuBath size={20} />
                                <p className=" text-xs">{t.Common.FeatureLabels.Bath}</p>
                              </div>
                              <div className="flex gap-1 items-center">
                                <MdPool size={20} />
                                <p className=" text-xs">
                                  {t.Rooms.PrivateVilla.UsePoolViewLabel ? t.Common.FeatureLabels.PoolView : t.Common.FeatureLabels.Pool}
                                </p>
                              </div>
                            </div>
                            <div className="mt-2">
                              <p className="text-sm font-semibold">
                                {t.Rooms.PrivateVilla.SizeLabel}
                              </p>
                              <p className="text-xs">
                                {t.Common.ComfyBedsScore}
                              </p>
                              <p className="text-xs">
                                {t.Rooms.PrivateVilla.Description}
                              </p>
                            </div>
                            {/* ------------------------------------------ */}
                            <div className="mt-2 ">
                              <p className="text-sm font-semibold">
                                {t.Common.PrivateBathroomTitle}
                              </p>
                              <ul className={`mt-1 space-y-2 text-left font-medium flex flex-col items-center sm:items-start `}>
                                <div className=" grid grid-cols-2 items-center ">
                                  {t.Common.PrivateBathroomList.map((item: string) => (
                                    <li key={item} className=" flex gap-1.5 items-center text-left text-gray-900 text-xs">
                                      <Check className="h-5 w-5 shrink-0 text-orange-600" />
                                      {item}
                                    </li>
                                  ))}
                                </div>
                              </ul>
                            </div>
                            {/* ------------------------------------------ */}
                            <div className="mt-2 ">
                              <p className="text-sm font-semibold">
                                {t.Common.FacilitiesTitle}
                              </p>
                              <ul className={`mt-1 space-y-2 text-left font-medium flex flex-col items-center sm:items-start `}>
                                <div className=" grid grid-cols-2 items-center ">
                                  {t.Rooms.PrivateVilla.FacilitiesList.map((item: string) => (
                                    <li key={item} className=" flex gap-1.5 items-center text-left text-gray-900 text-xs">
                                      <Check className="h-5 w-5 shrink-0 text-orange-600" />
                                      {item}
                                    </li>
                                  ))}
                                </div>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <DialogFooter>
                        <Link href="https://booking.aidaayurveda.com">
                          <Button className="bg-[#F7710F] hover:bg-[#f7640f]">
                            {t.Common.BookNow}
                          </Button>
                        </Link>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Link href="https://booking.aidaayurveda.com">
                    <Button className="bg-[#F7710F] hover:bg-[#f7640f]">
                      {t.Common.BookNow}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AccommodationImageGrid;
                          
