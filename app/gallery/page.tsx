import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "../components/PageHeader";
import { gallery } from "../data/content";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of school life for the Crestfield Academy concept.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Life at Crestfield"
        intro="Classrooms, reading, science and celebrations. Photos are free stock images used to illustrate this concept."
        image="/images/reading-steps.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {gallery.map((photo) => (
            <li key={photo.src} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-mist">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
