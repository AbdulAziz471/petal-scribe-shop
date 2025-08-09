export type Product = {
  id: string;
  slug: string;
  name: string;
  price: number; // in cents
  image: string;
  description: string;
  tags: string[];
  rating: number; // 0-5
  reviews: number; // count
};

import heroImg from "@/assets/hero-bouquet.jpg";
import roseBlush from "@/assets/product-rose-blush.jpg";
import sageMeadow from "@/assets/product-sage-meadow.jpg";
import peonyDawn from "@/assets/product-peony-dawn.jpg";
import morningMist from "@/assets/product-morning-mist.jpg";
import blushHarmony from "@/assets/product-blush-harmony.jpg";
import eucalyptusWhisper from "@/assets/product-eucalyptus-whisper.jpg";

export const HERO_IMAGE = heroImg;

export const products: Product[] = [
  {
    id: "p1",
    slug: "rose-blush",
    name: "Rose Blush",
    price: 6499,
    image: roseBlush,
    description:
      "An elegant bouquet of blush garden roses and white ranunculus with fresh eucalyptus. Perfect for celebrations and everyday beauty.",
    tags: ["roses", "blush", "romantic"],
    rating: 4.8,
    reviews: 132,
  },
  {
    id: "p2",
    slug: "sage-meadow",
    name: "Sage Meadow",
    price: 5899,
    image: sageMeadow,
    description:
      "A calming mix of white tulips and soft blue accents wrapped with sage greenery, evoking fresh spring mornings.",
    tags: ["tulips", "spring", "calm"],
    rating: 4.7,
    reviews: 98,
  },
  {
    id: "p3",
    slug: "peony-dawn",
    name: "Peony Dawn",
    price: 7999,
    image: peonyDawn,
    description:
      "Luxurious pale peach peonies complemented by white roses and airy greens—an irresistible showstopper.",
    tags: ["peonies", "luxury", "peach"],
    rating: 4.9,
    reviews: 164,
  },
  {
    id: "p4",
    slug: "morning-mist",
    name: "Morning Mist",
    price: 6199,
    image: morningMist,
    description:
      "Soft hydrangeas and pale blue blooms with silver dollar eucalyptus—serene and sophisticated.",
    tags: ["hydrangea", "blue", "eucalyptus"],
    rating: 4.6,
    reviews: 87,
  },
  {
    id: "p5",
    slug: "blush-harmony",
    name: "Blush Harmony",
    price: 5699,
    image: blushHarmony,
    description:
      "Blush roses, lisianthus, and baby’s breath in perfect harmony—delicate, airy, and elegant.",
    tags: ["roses", "lisianthus", "delicate"],
    rating: 4.7,
    reviews: 121,
  },
  {
    id: "p6",
    slug: "eucalyptus-whisper",
    name: "Eucalyptus Whisper",
    price: 5299,
    image: eucalyptusWhisper,
    description:
      "A fresh, modern composition of white roses and abundant eucalyptus—crisp, clean, and timeless.",
    tags: ["eucalyptus", "white-roses", "modern"],
    rating: 4.5,
    reviews: 74,
  },
];
