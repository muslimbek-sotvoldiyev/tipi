"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export function ContactForm() {
  const t = useTranslations("contact");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-white py-12 md:py-16 lg:py-20 ">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            {t("title")}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-xl md:text-2xl mb-6">{t("form.title")}</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 grid-cols-2">
                  <Input
                    placeholder={t("form.name.placeholder")}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-gray-50 border-gray-100"
                  />
                  <Input
                    placeholder={t("form.phone.placeholder")}
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    required
                    className="bg-gray-50 border-gray-100"
                  />
                </div>
                <Textarea
                  placeholder={t("form.message.placeholder")}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="min-h-[150px] bg-gray-50 border-gray-100"
                />
                <Button
                  type="submit"
                  className="bg-[#363D59] hover:bg-[#2b3047] text-white px-8"
                >
                  {t("form.submit")}
                </Button>
              </form>
            </div>

            <div className="lg:pl-12">
              <div className="space-y-6">
                <a
                  href="mailto:tipiuniversity@mail.uz"
                  className="flex items-center gap-4 text-[36px] hover:text-blue-600 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  tipiuniversity@mail.uz
                </a>
                <a
                  href="tel:+998559000604"
                  className="flex items-center gap-4 text-[36px] hover:text-blue-600 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  55 900 06 04
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
