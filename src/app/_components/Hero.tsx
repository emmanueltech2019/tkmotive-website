"use client";
import React, { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Navbar from "@/components/Navbar";
import antonFont from "@/fonts/Anton";
import HeroImage from "@/assets/images/hero-image.svg";
import Cart from "@/components/modal/Cart";
import Verification from "@/components/modal/Verification";
import Details from "@/components/modal/Details";

const Hero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  useEffect(() => {
    if (emblaApi) {
      console.log(true); // Access API
    }
  }, [emblaApi]);

  // modals creation and states
  const [showCart, setShowCart] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [showV, setV] = useState(false)

  // Cart Modal Functions
  const closeCart = () => {
    setShowCart(false);
  }
  const openCart = () => {
    setShowCart(true);
  }

  // Details Modal Functions
  const closeDetails = () => {
    setShowDetails(false);
  }
  const openDetails = () => {
    closeCart();
    setShowDetails(true);
  }

  // Verification Modal Functions
  const closeV = () => {
    setV(false);
  }
  const openV = () => {
    closeDetails();
    setV(true);
  }

  return (
    <>
      <div className="px-[--padding-x] sticky top-0 bg-[--foreground-green] z-50">
        <Navbar func={openCart} />
      </div>
      <div className="bg-[--foreground-green]">
        {/* modal */}
        <Cart func={closeCart} modalState={showCart} handleV={openV} />
        <Verification func={closeV} modalState={showV} />
        <Details func={closeDetails} modalState={showDetails} verfication={openV} />

        <section className="flex flex-col lg:flex-row items-center pb-16 gap-y-14 px-[--padding-x]">
          <div
            className={`col flex-1 lg:flex-[1.5] xl:flex-1 text-[--foreground-light-orange] ${antonFont} `}
          >
            <h1 className="text-[">Relax, Unwind, and Savor the Flavors</h1>
            <p className="text-sm lg:text-6">
              Let&apos;s Chill – Book Your Spot Now
            </p>
          </div>
          <div className="col flex-1">
            <div className="hero-image">
              <Image src={HeroImage} alt="hero image" />
            </div>
          </div>
        </section>
        <div className="embla overflow-hidden bg-white">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container flex gap-[50px] py-[18px] px-10">
              {new Array(20).fill("TKMOTIVE").map((text, i) => (
                <p key={i} className={`embla__slide text-6 ${antonFont}`}>{text}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
