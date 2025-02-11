"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronDown, Search, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SearchInput() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="relative flex items-center">
      {!isExpanded && (
        <Button
          variant="ghost"
          size="icon"
          className="text-white md:hidden hover:bg-white/10"
          onClick={() => setIsExpanded(true)}
        >
          <Search className="h-5 w-5" />
        </Button>
      )}
      <div
        className={`
          relative
          ${isExpanded ? "w-full md:w-auto" : "hidden md:block"}
          ${isMobile ? "absolute right-0 top-0 z-50" : ""}
        `}
      >
        <input
          type="text"
          placeholder="Search"
          className="
            w-full
            md:w-[180px]
            lg:w-[200px]
            pl-10
            pr-4
            py-2
            text-black
            text-sm
            rounded-full
            border
            border-gray-300
            transition-all
            duration-300
            ease-in-out
            outline-none
            opacity-90
            focus:opacity-100
            focus:ring-2
            focus:ring-blue-500
            md:focus:w-[280px]
            lg:focus:w-[320px]
            bg-white
          "
        />
        {isExpanded && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 md:hidden hover:bg-gray-100"
            onClick={() => setIsExpanded(false)}
          >
            <X className="h-4 w-4 text-gray-500" />
          </Button>
        )}
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
      </div>
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("Navigation");

  const languages = [
    { code: "uz", name: "Uz", flag: "/uzb.svg" },
    { code: "ru", name: "Ru", flag: "/rus.svg" },
    { code: "en", name: "En", flag: "/eng.svg" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === locale) || languages[0];

  const menuItems = [
    { title: t("about"), href: "/" },
    { title: t("departments"), href: "/" },
    { title: t("faculties"), href: "/" },
    { title: t("news"), href: "/" },
    { title: t("services"), href: "/" },
    { title: t("admission"), href: "/" },
    { title: t("contact"), href: "/" },
  ];

  const handleLanguageChange = (lang) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    const newPath = `/${lang.code}${pathWithoutLocale || "/"}`;
    router.push(newPath);
  };

  return (
    <nav className="bg-[#3B4B94] text-white sticky top-0 z-50">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/Logo.svg"
                alt="logo"
                width={200}
                height={60}
                className="w-auto h-[32px] sm:h-[40px] md:h-[50px] lg:h-[60px] transition-all"
                priority
              />
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-grow justify-center">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="text-sm xl:text-base hover:text-gray-300 transition-colors whitespace-nowrap py-1 px-2 rounded-md hover:bg-white/10"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1 sm:gap-2 md:gap-3">
            <SearchInput />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="text-white hidden md:flex hover:bg-white/10"
                >
                  <Image
                    src={currentLang.flag || "/placeholder.svg"}
                    alt={currentLang.code.toUpperCase()}
                    width={24}
                    height={24}
                    className="mr-2 w-5 h-5 sm:w-6 sm:h-6"
                  />
                  <span className="hidden sm:inline text-sm">
                    {currentLang.name}
                  </span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[120px]">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => handleLanguageChange(lang)}
                    className="cursor-pointer"
                  >
                    <Image
                      src={lang.flag || "/placeholder.svg"}
                      alt={lang.code.toUpperCase()}
                      width={24}
                      height={24}
                      className="mr-2 w-5 h-5"
                    />
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base sm:text-lg hover:text-gray-500 transition-colors py-2 px-3 rounded-md hover:bg-gray-100"
                    >
                      {item.title}
                    </Link>
                  ))}
                  <div className="pt-4 mt-4 border-t">
                    <div className="flex flex-col space-y-2">
                      {languages.map((lang) => (
                        <Button
                          key={lang.code}
                          variant="ghost"
                          className="justify-start h-12"
                          onClick={() => {
                            handleLanguageChange(lang);
                            setIsOpen(false);
                          }}
                        >
                          <Image
                            src={lang.flag || "/placeholder.svg"}
                            alt={lang.code.toUpperCase()}
                            width={24}
                            height={24}
                            className="mr-3 w-6 h-6"
                          />
                          {lang.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
