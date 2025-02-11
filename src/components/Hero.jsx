"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <div className="container mx-auto px-2 py-16">
      <div className="flex flex-col items-center justify-center space-y-8 mb-12">
        <h1 className="text-[40px] md:text-[64px] text-center font-normal leading-[1.2] max-w-[900px]">
          {t("title")}
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#3B4B94] hover:bg-[#3B4B94]/90 text-white min-w-[140px]">
            {t("contact")}
          </Button>
          <Button
            variant="outline"
            className="border-[#3B4B94] text-[#3B4B94] hover:bg-[#3B4B94]/10"
          >
            {t("contact")}
          </Button>
        </div>
      </div>

      <div className="relative w-full h-[632px] rounded-2xl overflow-hidden">
        <Image
          src="/image.png"
          alt="TIPI building"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
}
