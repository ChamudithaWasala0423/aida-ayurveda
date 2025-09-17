"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { DatePickerWithRange } from "../ui/date-range";
import { useTranslations } from "next-intl";

const BookingBar = () => {
  const router = useRouter();
  const t = useTranslations("BookingBar");
  return (
    <div className="w-full mt-48 flex flex-col p-6">
      <MaxWidthWrapper className="flex flex-col items-center justify-center">
        <div className="hidden lg:flex items-center w-full md:w-[70%] mx-auto mb-2">
          <Image
            src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758102681/medicine-white_s2vone.png"
            alt={t("IconAlt")}
            width={30}
            height={30}
          />
          <p className="hidden md:block text-sm ml-2 font-medium text-white">
            {t("Tagline")}
          </p>
        </div>
        <div className="hidden lg:flex flex-col md:flex-row bg-white w-full md:w-[70%] h-auto md:h-20 rounded-tr-3xl rounded-bl-3xl mt-2 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex items-center justify-center h-20 p-4">
              <Select>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder={t("SelectRoomPlaceholder")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{t("RoomsLabel")}</SelectLabel>
                    <SelectItem value="apple">
                      {t("RoomOption.SakuraSuite")}
                    </SelectItem>
                    <SelectItem value="banana">
                      {t("RoomOption.DeluxeDouble")}
                    </SelectItem>
                    <SelectItem value="blueberry">
                      {t("RoomOption.PrivateVilla")}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-center h-20 p-4">
              <DatePickerWithRange />
            </div>
            <div className="flex items-center justify-center h-20 p-4">
              <p className="text-sm ml-2 font-medium">{t("Adults")}:</p>
              <input
                type="number"
                placeholder="0"
                className="w-10 h-10 text-sm ml-2"
              />
              <p className="text-sm ml-2 font-medium">{t("Children")}:</p>
              <input
                type="number"
                placeholder="0"
                className="w-10 h-10 text-sm ml-2"
              />
            </div>
            <div className="flex items-center justify-center bg-orange-500 w-full md:w-40 h-20 rounded-tr-3xl">
              <button
                className="text-sm font-medium text-white w-full h-full"
                aria-label={t("BookNowAria")}
                onClick={() =>
                  router.push("https://booking.aidaayurveda.com")
                }
              >
                {t("BookNow")}
              </button>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default BookingBar;
