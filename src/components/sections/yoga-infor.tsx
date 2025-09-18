import Image from "next/image";
import { Check } from "lucide-react";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { useTranslations } from "next-intl";

const YogaInfor = () => {
  const t = useTranslations("YogaInfo");
  return (
    <section className="py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-10 sm:gap-12">
        {/* Types of Yoga (card) */}
        <div className="w-full max-w-5xl">
          <h3 className="text-xl uppercase tracking-wide text-slate-500 font-semibold">
            {t("TypesTitle")}
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            {t("TypesIntro")}
          </p>
          <div className="mt-4 rounded-md border border-slate-200 bg-white/70 backdrop-blur-sm p-5 md:p-6">
            <ul className="space-y-3 text-slate-800">
              <li className="flex gap-2.5">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.Hatha.title")}</span>{" "}
                  {t("TypesItems.Hatha.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.Vinyasa.title")}</span>{" "}
                  {t("TypesItems.Vinyasa.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.Restorative.title")}</span>{" "}
                  {t("TypesItems.Restorative.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.Pranayama.title")}</span>{" "}
                  {t("TypesItems.Pranayama.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.Meditation.title")}</span>{" "}
                  {t("TypesItems.Meditation.desc")}
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Image + Benefits (grid + card) */}
        <div className="w-full max-w-5xl grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="w-full overflow-hidden rounded-md">
            <Image
              src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758115727/Avinya-Ayurveda-40-2048x1365_kuyvwd.jpg"
              alt={t("ImageAlt")}
              width={1000}
              height={750}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="rounded-md border border-slate-200 bg-white/70 backdrop-blur-sm p-5 md:p-6">
            <h3 className="text-xl uppercase font-semibold text-slate-800">
              {t("BenefitsTitle")}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {t("BenefitsIntro")}
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800">
              <li className="flex gap-2.5 items-start">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.ImprovedFlexibility")}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.StrengthBalance")}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.StressReduction")}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.EnhancedBreathControl")}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.HolisticHealing")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How to Start (card) */}
        <div className="w-full max-w-5xl">
          <h3 className="text-xl uppercase tracking-wide text-slate-500 font-semibold">
            {t("HowTitle")}
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            {t("HowIntro")}
          </p>

          <div className="mt-4 rounded-md border border-slate-200 bg-white/70 backdrop-blur-sm p-5 md:p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800">
              <li className="flex gap-2.5">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.Consultation.title")}</span>{" "}
                  {t("Steps.Consultation.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.PersonalizedPractice.title")}</span>{" "}
                  {t("Steps.PersonalizedPractice.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.DailyYoga.title")}</span>{" "}
                  {t("Steps.DailyYoga.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.HerbalSteamTherapy.title")}</span>{" "}
                  {t("Steps.HerbalSteamTherapy.desc")}
                </p>
              </li>
              <li className="flex gap-2.5 sm:col-span-2">
                <Check className="h-5 w-5 text-orange-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.OngoingPractice.title")}</span>{" "}
                  {t("Steps.OngoingPractice.desc")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default YogaInfor;