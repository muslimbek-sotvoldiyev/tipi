import CampusLife from "@/components/CampusLife";
import { ContactForm } from "@/components/Contact";
import Hero from "@/components/Hero";
import { Stats } from "@/components/starts";
import Universal from "@/components/Universal";

export default function HomePage() {
  const NewsData = [
    {
      id: 1,
      title: "Yangi ilmiy tadqiqot natijalari e’lon qilindi",
      date: "2024.02.11",
      image: "https://picsum.photos/380/260?random=1",
    },
    {
      id: 2,
      title: "Olimlar yangi texnologiyani ishlab chiqishdi",
      date: "2024.02.10",
      image: "https://picsum.photos/380/260?random=2",
    },
    {
      id: 3,
      title: "Universitetda ilmiy konferensiya bo‘lib o‘tdi",
      date: "2024.02.09",
      image: "https://picsum.photos/380/260?random=3",
    },
    {
      id: 4,
      title: "Yosh olimlar mukofot bilan taqdirlandilar",
      date: "2024.02.08",
      image: "https://picsum.photos/380/260?random=4",
    },
    {
      id: 5,
      title: "Ilmiy jurnallarda yangi maqolalar chop etildi",
      date: "2024.02.07",
      image: "https://picsum.photos/380/260?random=5",
    },
  ];
  const Pedagoglar = [
    {
      id: 1,
      title: "Yangi Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=1",
    },
    {
      id: 2,
      title: "Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=2",
    },
    {
      id: 3,
      title: "Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=3",
    },
    {
      id: 4,
      title: "Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=4",
    },
    {
      id: 5,
      title: "Ilmiy Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=5",
    },
  ];
  const Tadbirlar = [
    {
      id: 1,
      title: "Yangi Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=1",
    },
    {
      id: 2,
      title: "Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=2",
    },
    {
      id: 3,
      title: "Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=3",
    },
    {
      id: 4,
      title: "Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=4",
    },
    {
      id: 5,
      title: "Ilmiy Burxanov Abduvali",
      date: "Pedagogika fanlari bo‘yicha falsafa doktori, dotsent",
      image: "https://picsum.photos/380/260?random=5",
    },
  ];

  return (
    <div>
      <Hero />
      <Stats />
      <CampusLife />
      <Universal newsData={NewsData} title="Ilmiy yangiliklar" />
      <Universal newsData={Pedagoglar} title="Pedagoglar" />
      <Universal newsData={Tadbirlar} title="Tadbirlar" />
      <ContactForm />
    </div>
  );
}
