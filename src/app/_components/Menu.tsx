'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import bigImg from '@/assets/images/bigImg.svg'

const initalState = [
    {item: 'Jollof Rice', state: false},
    {item: 'Grilled Chicken', state: false},
    {item: 'Suya Platters', state: false},
    {item: 'Cocktails', state: false},
    {item: 'Mocktails', state: false},
    {item: 'Smoothies', state: false},
    {item: 'Meat Pies', state: false},
    {item: 'Croissants', state: false},
    {item: 'Soups', state: false},
    {item: 'Swallow', state: false},
    {item: 'Eba', state: false},
]

const Menu = () => {
    const [menu, setMenu] = useState(initalState)
    const handleMenu = (a:string) => {
        // const index = initalState.findIndex(o => o.item == a)
        // setMenu(prev => menu.map(({item, state},i) => ({item, state: i == index ? !state : state}))) // Approved
        setMenu(prev => menu.map(({item, state}, i) => ({item, state: item == a ? !state : state})))
    }
  return (
    <div id="menu">
      <section className="px-[--padding-x] pt-10 pb-20">
        <h3 className="pb-[50px] font-normal">MENU</h3>
        <div className="flex flex-col lg:flex-row">
            <div className="col flex-1">
                <h3 className="lg:w-8/12 xl:w-7/12 text-[25px] lg:text-[40px] leading-tight font-medium">Get a glimpse of our vibrant atmosphere, mouth-watering dishes, & more...</h3>
            </div>
            <div className="col flex-1 flex flex-wrap items-center gap-[10px]">
                {menu.map(({item, state}) =>(
                    <button key={item} className={`px-5 py-[10px] border border-[--foreground-green] ${state?'bg-[--foreground-green] text-white':'bg-white text-black'}`} onClick={() => handleMenu(item)}>{item}</button>
                ))}
                <p>Infused with rich spices and cooked to perfection</p>
            </div>
        </div>
      </section>
      <div className="big-img">
        <Image src={bigImg} alt="big image" className="w-full object-cover" />
      </div>
    </div>
  );
};

export default Menu;
