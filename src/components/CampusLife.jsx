import { bir, ikki, uch, tort } from "@/images";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function CampusLife() {
  const t = useTranslations("CompusLive");
  return (
    <section className="mx-auto px-20 py-16 md:py-24">
      <div className="container flex items-center gap-9 overflow-x-auto">
        <h3 className="text-2xl md:text-6xl font-thin tracking-tight whitespace-nowrap flex-shrink-0">
          {t("compus")}
          <span className="inline-block ml-4 transform hover:translate-x-2 transition-transform duration-300">
            →
          </span>
        </h3>
        <div className="flex gap-4 flex-nowrap">
          <Link
            href="#cultural-events"
            className="block group flex-shrink-0"
            aria-label="Cultural Events"
          >
            <div className="relative w-[400px] h-[450px] overflow-hidden rounded-2xl">
              <Image
                src={bir}
                alt="Cultural celebration on campus"
                width={400}
                height={450}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <Link
            href="#academic-life"
            className="block group flex-shrink-0"
            aria-label="Academic Life"
          >
            <div className="relative w-[400px] h-[450px] overflow-hidden rounded-2xl">
              <Image
                src={ikki}
                alt="Faculty exhibition"
                width={400}
                height={450}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <Link
            href="#outdoor-activities"
            className="block group flex-shrink-0"
            aria-label="Outdoor Activities"
          >
            <div className="relative w-[400px] h-[450px] overflow-hidden rounded-2xl">
              <Image
                src={uch}
                alt="Group gathering outside"
                width={400}
                height={450}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>

          <Link
            href="#indoor-sessions"
            className="block group flex-shrink-0"
            aria-label="Indoor Sessions"
          >
            <div className="relative w-[400px] h-[450px] overflow-hidden rounded-2xl">
              <Image
                src={tort}
                alt="Indoor academic session"
                width={400}
                height={450}
                className="object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
