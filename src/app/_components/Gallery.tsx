"use client";
import antonFont from "@/fonts/Anton";
import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import frame1 from "@/assets/images/gallery/frame1.svg";
import frame2 from "@/assets/images/gallery/frame2.svg";
import frame3 from "@/assets/images/gallery/frame3.svg";
import frame4 from "@/assets/images/gallery/frame4.svg";
import frame5 from "@/assets/images/gallery/frame5.svg";

const frames = [frame1, frame2, frame3, frame4, frame5];

const Gallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);
  return (
    <div id="gallery" className="py-[50px]">
      <h2 className={`text-[--foreground-green] ${antonFont} text-center px-[--padding-x]`}>
        OUR GALLERY
      </h2>
      <p className="max-w-[800px] text-center mx-auto px-[--padding-x]">
        Whether you&apos;re craving something savory, sweet, or refreshing, our
        menu has something for every taste.
      </p>

      <section className="gallery_carousel pt-10">
        <div className="embla overflow-hidden">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex gap-[18px] px-[18px]">
                {frames.map((frame, index) => (
                    <div key={'frame_'+(index+1)} className="embla__slide gallery__slide">
                      <Image src={frame} alt={`Frame ${index + 1}`} className="w-full object-cover" />
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
