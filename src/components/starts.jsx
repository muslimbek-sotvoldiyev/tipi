"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useTranslations } from "next-intl";

export function Stats() {
  const t = useTranslations("Count");

  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(1000);

  const rounded1 = useTransform(count1, (latest) => Math.round(latest));
  const rounded2 = useTransform(count2, (latest) => Math.round(latest));
  const rounded3 = useTransform(
    count3,
    (latest) => `${(latest / 1000000000).toFixed(1)} ${t("billion_value")}`
  );

  useEffect(() => {
    const controls1 = animate(count1, 11000, {
      duration: 2,
      ease: "easeOut",
    });

    const controls2 = animate(count2, 400, {
      duration: 2,
      ease: "easeOut",
    });

    const controls3 = animate(count3, 1000000000, {
      duration: 2,
      ease: "easeOut",
    });

    return () => {
      controls1.stop();
      controls2.stop();
      controls3.stop();
    };
  }, [count1, count2, count3]);

  return (
    <div className="bg-[#3B4B94] text-white p-8 md:p-16 flex flex-col md:flex-row items-center justify-around">
      <h2 className="text-2xl md:text-[73px] font-bold inline-block border-b border-white pb-5">
        {t("number")}
      </h2>

      <div className="grid gap-8 md:gap-16">
        <div className="flex gap-20 md:gap-40 items-center">
          <div className="space-y-2">
            <motion.div className="text-3xl md:text-5xl font-bold">
              <motion.span>{rounded1}</motion.span>+
            </motion.div>
            <div className="text-sm md:text-base text-gray-300 border-t pt-2">
              {t("students")}
            </div>
          </div>

          <div className="space-y-2">
            <motion.div className="text-3xl md:text-5xl font-bold">
              <motion.span>{rounded2}</motion.span>+
            </motion.div>
            <div className="text-sm md:text-base text-gray-300 border-t pt-2">
              {t("teachers")}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <motion.div className="text-3xl md:text-5xl font-bold">
            <motion.span>{rounded3}</motion.span>
          </motion.div>
          <div className="text-sm md:text-base text-gray-300 border-t pt-2">
            {t("grants")}
          </div>
        </div>
      </div>
    </div>
  );
}
