import Image from "next/image";
import { Leaf } from "lucide-react";
import MaxWidthWrapper from "../general/MaxWidthWrapper";
import { useTranslations } from "next-intl";

const AyurvedaInfo = () => {
  const t = useTranslations("AyurvedaInfo");
  return (
    <section className="py-24">
      <MaxWidthWrapper className="flex flex-col items-center gap-10 sm:gap-12">
        {/* Types of Ayurveda */}
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
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.Abhyanga.title")}</span>{" "}
                  {t("TypesItems.Abhyanga.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.Shirodhara.title")}</span>{" "}
                  {t("TypesItems.Shirodhara.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.Panchakarma.title")}</span>{" "}
                  {t("TypesItems.Panchakarma.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.HerbalSteam.title")}</span>{" "}
                  {t("TypesItems.HerbalSteam.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("TypesItems.Nasya.title")}</span>{" "}
                  {t("TypesItems.Nasya.desc")}
                </p>
              </li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              {t("TypesOutro")}
            </p>
          </div>
        </div>

        {/* Image + Benefits */}
        <div className="w-full max-w-5xl grid grid-cols-1 xl:grid-cols-2 gap-6 md:gap-10 items-start">
          <div className="w-full overflow-hidden rounded-md">
            <Image
              src="https://res.cloudinary.com/dy3lm6cvw/image/upload/v1758106385/avinya-ayurveda-7_ggak9l.jpg"
              alt={t("ImageAlt")}
              width={1000}
              height={750}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="rounded-md border border-slate-200 bg-white/70 backdrop-blur-sm  p-5 md:p-6">
            <h3 className="text-xl uppercase  font-semibold text-slate-800">
              {t("BenefitsTitle")}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {t("BenefitsIntroPrefix")}{" "}
              <span className="font-semibold">{t("BrandShort")}</span>{" "}
              {t("BenefitsIntroSuffix")}
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800">
              <li className="flex gap-2.5 items-start">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.StressRelief")}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.Detoxification")}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.ImprovedDigestion")}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.BalancedEnergy")}</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <span className="font-semibold">{t("BenefitsList.Rejuvenation")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* How to Enter Into Ayurveda */}
        <div className="w-full max-w-5xl">
          <h3 className="text-xl uppercase tracking-wide text-slate-500 font-semibold">
            {t("HowTitle")}
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            {t("HowIntroPrefix")}{" "}
            <span className="font-semibold">{t("BrandShort")}</span>
            {t("HowIntroSuffix")}
          </p>

          <div className="mt-4 rounded-md border border-slate-200 bg-white/70 backdrop-blur-sm  p-5 md:p-6">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-800">
              <li className="flex gap-2.5">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.Consultation.title")}</span>{" "}
                  {t("Steps.Consultation.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.PersonalizedPlan.title")}</span>{" "}
                  {t("Steps.PersonalizedPlan.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.Treatments.title")}</span>{" "}
                  {t("Steps.Treatments.desc")}
                </p>
              </li>
              <li className="flex gap-2.5">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.HerbalSteam.title")}</span>{" "}
                  {t("Steps.HerbalSteam.desc")}
                </p>
              </li>
              <li className="flex gap-2.5 sm:col-span-2">
                <Leaf className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                <p>
                  <span className="font-semibold">{t("Steps.OngoingWellness.title")}</span>{" "}
                  {t("Steps.OngoingWellness.desc")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default AyurvedaInfo;
          
