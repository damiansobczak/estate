import Gallery1 from "./assets/image-1.jpg";
import Gallery2 from "./assets/image-2.jpg";
import Gallery3 from "./assets/image-3.jpg";
import Gallery4 from "./assets/image-4.jpg";

export const galleryAPI = [
  Gallery1, Gallery2, Gallery3, Gallery4
];

export const assetsAPI = [
  { id: 1, name: "Łazienka", desc: "Prysznic, pralka" },
  { id: 2, name: "Pokoje", desc: "2, TV, stół, sofa" },
  { id: 3, name: "Kuchnia", desc: "Kuchenka, czajnik" },
  { id: 4, name: "Taras", desc: "6m2, zastawa" },
  { id: 5, name: "Parking", desc: "Miejsce, szlaban" },
  { id: 6, name: "Metraż", desc: "26m2, taras" }
];

export const menuAPI = [
  { id: 1, name: "Strona główna", desc: "Biuro nieruchomości", url: "/" },
  {
    id: 2,
    name: "Wynajem",
    desc: "Strona z ofertami wynajmu",
    url: "/wynajem"
  },
  {
    id: 3,
    name: "Sprzedaż",
    desc: "Strona z ofertami sprzedaży",
    url: "/sprzedaz"
  }
];

export const offerJumboAPI = {
  subtitle: "Mieszkanie z garażem",
  title: "Przestronne mieszkanie, atrakcyjna lokalizacja",
  text:
    "Maecenas in turpis diam. Sed eget metus at urna mattis vehicula. Duis iaculis ligula a enim vestibulum lacinia. Sed eget metus at urna mattis vehicula. Duis iaculis ligula a enim. ",
  center: {
    x: 51.752549,
    y: 18.056496
  },
  address: "Ostrów Wielkopolski, Panorama ul. Jasna 32/7"
};
