import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Facebook, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-[#3B4B94] text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-3">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-9">
              <Image
                src="/logo2.svg"
                alt="Institute Logo"
                width={90}
                height={90}
                className="rounded-full"
              />
              <div className="pt-2 text-center sm:text-left">
                <h2 className="text-lg font-medium leading-tight uppercase">
                  {t("title")}
                </h2>
                <address className="not-italic mt-4 text-sm space-y-1">
                  <p>{t("address.city")}</p>
                  <p>{t("address.street")}</p>
                </address>
                <div className="space-y-1 mb-4 text-sm text-center sm:text-left mt-4">
                  <p>
                    {t("contacts.phone")}{" "}
                    <Link href="tel:+998559000604" className="hover:text-muted">
                      +998 55 900 06 04
                    </Link>
                  </p>
                  <p>
                    {t("contacts.email")}{" "}
                    <Link
                      href="mailto:tipiuniversity@mail.uz"
                      className="hover:text-muted"
                    >
                      tipiuniversity@mail.uz
                    </Link>
                  </p>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-4">
                  <Link href="#" className="hover:text-muted transition-colors">
                    <MessageCircle className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="hover:text-muted transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="hover:text-muted transition-colors">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-6">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-medium mb-4">{t("about.title")}</h3>
                <ul className="space-y-2 text-sm font-medium">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-muted transition-colors"
                    >
                      {t("about.history")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-muted transition-colors"
                    >
                      {t("about.license")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-muted transition-colors"
                    >
                      {t("about.administration")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-muted transition-colors"
                    >
                      {t("about.management")}
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-medium mb-4">
                  {t("departments.title")}
                </h3>
                <ul className="space-y-2 text-sm font-medium">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-muted transition-colors"
                    >
                      {t("departments.finance")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-muted transition-colors"
                    >
                      {t("departments.office")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-muted transition-colors"
                    >
                      {t("departments.spiritual")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-muted transition-colors"
                    >
                      {t("departments.scientific")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-muted transition-colors"
                    >
                      {t("departments.educational")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 mt-6">
            <Card className="w-full h-[200px] overflow-hidden">
              <CardContent className="p-0 h-full">
                <a
                  href="https://yandex.uz/maps/org/193297945866/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.715763959021!2d69.5413527!3d41.4359431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aefb81e98fa5bf%3A0x6f0f86d77ec98842!2sToshkent+Iqtisodiyot+va+Pedagogika+Instituti!5e0!3m2!1sen!2s!4v1737633177136!5m2!1sen!2s"
                    width="100%"
                    height="200"
                    className="w-full"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </footer>
  );
}
