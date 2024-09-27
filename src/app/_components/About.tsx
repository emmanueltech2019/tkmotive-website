"use client";
import React, { useEffect, useCallback } from "react";
import antonFont from "@/fonts/Anton";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import ourEssence from "@/assets/images/our_essence.svg";
import { Icon } from "@iconify/react/dist/iconify.js";

const carouselObj = [
  {
    image: ourEssence,
    title: "OUR Essence",
    text: `TKmotive is a one-of-a-kind lounge that blends premium dining, vibrant bar vibes, and an unforgettable chill experience. 
        Whether you're catching up with friends or seeking a solo unwind, we've got you covered.`,
  },
  {
    image: ourEssence,
    title: "More Than Just a Spot",
    text: `TKmotive isn’t just a place to eat and drink – it’s where good vibes meet great company. Experience the magic of a truly personal chill zone.`,
  },
  {
    image: ourEssence,
    title: "Lounge, Sip, Dine",
    text: `From our cozy lounge setting to our finely curated drink menu, everything is designed for comfort and class. Sip on crafted cocktails while you relax in style.`,
  },
];

const About = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div id="about" className="bg-white">
      <section className="flex flex-col items-center px-[--padding-x] py-[50px] gap-y-20">
        <h2 className={`${antonFont} text-[--foreground-green]`}>
          WHO WE ARE!
        </h2>
        <div className="carousel flex justify-center items-center gap-x-3 lg:gap-x-11">
          <div className="prev_btn">
            <button onClick={scrollPrev}>
              <span className="bg-[--foreground-green] rounded-full block">
                <Icon
                  icon="material-symbols:play-arrow"
                  className="text-white text-4xl"
                />
              </span>
            </button>
          </div>
          <div className="embla w-8/12 lg:w-11/12 xl:w-8/12 overflow-hidden">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container flex">
                {carouselObj.map(({ image, title, text },i) => (
                  <div key={title+i} className="about embla__slide flex flex-col lg:flex-row justify-center items-center gap-x-11 gap-y-8">
                    <div className="col w-full">
                      <div className="embla_image"><Image src={image} alt="our essence" className="w-full object-cover" /></div>
                    </div>
                    <div className="col">
                      <h3 className="text-xl lg:text-2xl uppercase font-extrabold">{title}</h3>
                      <p className="w-full max-w-[467px]">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="next_btn">
            <button onClick={scrollNext}>
              <span className="bg-[--foreground-green] rounded-full block">
                <Icon
                  icon="material-symbols:play-arrow"
                  className="text-white text-4xl"
                />
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
