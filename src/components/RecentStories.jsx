import React from "react";
import "./RecentStories.css";

const stories = [
    
  {
    image: "https://res.cloudinary.com/tubirssu/image/upload/v1789911468/packages/IMG_4475.jpg?auto=format&fit=crop&w=800&q=80",
    title: "It Was Always You: Mike & Rose's New Jersey Wedding",
    description:
      "Two stories that started worlds apart, brought together not by chance but by faith. There's favour on this love\u2026",
  },
  {
    image: "https://res.cloudinary.com/tubirssu/image/upload/v1789911468/packages/IMG_4475.jpg?auto=format&fit=crop&w=800&q=80",  
    title: "Golden Hour in Accra: Kwame & Efua's Garden Wedding",
    description:
      "An afternoon of laughter and light, where two families became one under a sky the color of honey.",
  },
  {
    image: "https://res.cloudinary.com/tubirssu/image/upload/v1789911468/packages/IMG_4475.jpg?auto=format&fit=crop&w=800&q=80",
    title: "Vows by the Coast: Daniel & Abena in Cape Coast",
    description:
      "Salt air, old stone, and a promise made where the Atlantic meets the shore they both grew up on.",
  },
   {
    image: "https://res.cloudinary.com/tubirssu/image/upload/v1789911468/packages/IMG_4475.jpg?auto=format&fit=crop&w=800&q=80",
    title: "Vows by the Coast: Daniel & Abena in Cape Coast",
    description:
      "Salt air, old stone, and a promise made where the Atlantic meets the shore they both grew up on.",
  },
   {
    image: "https://res.cloudinary.com/tubirssu/image/upload/v1789911468/packages/IMG_4475.jpg?auto=format&fit=crop&w=800&q=80",
    title: "Vows by the Coast: Daniel & Abena in Cape Coast",
    description:
      "Salt air, old stone, and a promise made where the Atlantic meets the shore they both grew up on.",
  },
   {
    image: "https://res.cloudinary.com/tubirssu/image/upload/v1789911468/packages/IMG_4475.jpg?auto=format&fit=crop&w=800&q=80",
    title: "Vows by the Coast: Daniel & Abena in Cape Coast",
    description:
      "Salt air, old stone, and a promise made where the Atlantic meets the shore they both grew up on.",
  },

];

function StoryCard({ image, title, description }) {
  return (
    <article className="story-card">
      <div className="story-card__image-wrap">
        <img
          src={image}
          alt={title}
          className="story-card__image"
          loading="lazy"
        />
      </div>
      <h3 className="story-card__title">{title}</h3>
      <p className="story-card__description">{description}</p>
    </article>
  );
}

export default function RecentStories() {
  return (
    <section className="bg-[#F5F1E8] px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="story-eyebrow text-xs font-semibold text-[#8A7F78]">
              FROM THE JOURNAL
            </p>
            <h2 className="story-heading mt-2 text-[42px] leading-tight text-[#1A1A1A]">
              Recent stories
            </h2>
          </div>

          <a
            href="#"
            className="inline-flex items-center rounded-full border border-[#D6D0C8] px-6 py-3 text-sm text-[#1A1A1A] transition-colors hover:bg-[#EFE8D9]"
          >
            All stories &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.title} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { StoryCard };