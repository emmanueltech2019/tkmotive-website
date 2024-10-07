"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import bigImg from "@/assets/images/bigImg.svg";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid'; // To generate unique IDs

const initalState = [
  { item: "Jollof Rice", state: false, price: 100 },
  { item: "Grilled Chicken", state: false, price: 100 },
  { item: "Suya Platters", state: false, price: 100 },
  { item: "Cocktails", state: false, price: 100 },
  { item: "Mocktails", state: false, price: 100 },
  { item: "Smoothies", state: false, price: 100 },
  { item: "Meat Pies", state: false, price: 100 },
  { item: "Croissants", state: false, price: 100 },
  { item: "Soups", state: false, price: 100 },
  { item: "Swallow", state: false, price: 100 },
  { item: "Eba", state: false, price: 100 },
];

const Menu = () => {
  const [menu, setMenu] = useState(initalState);
  const [userId, setUserId] = useState<string>(''); // Ensure userId is always a string

  const handleMenu = async (item: string) => {
    const updatedMenu = menu.map(({ item: menuItem, price, state }) => ({
      item: menuItem,
      price,
      state: menuItem === item ? !state : state,
    }));
    setMenu(updatedMenu);

    // Add item to cart via API
    const selectedItem = updatedMenu.find((menuItem) => menuItem.item === item);
    if (selectedItem?.state) {
      try {
        let savedUserId = localStorage.getItem('userId');
        await axios({
          url: "http://localhost:4000/cart/add",
          method: "post",
          data: {
            userId:savedUserId,
            productName: selectedItem.item,
            quantity: 1,
            price: selectedItem.price,
          },
        });
        console.log(`${item} added to cart.`);
      } catch (error) {
        console.error(`Failed to add ${item} to cart:`, error);
      }
    }

  };
  useEffect(() => {
    let savedUserId = localStorage.getItem('userId');
    
    // Ensure savedUserId is always a string
    if (!savedUserId) {
      const newUserId = uuidv4(); // Generate a new UUID if none is found
      localStorage.setItem('userId', newUserId);
      setUserId(newUserId);
    } else {
      setUserId(savedUserId); // savedUserId is now safely handled as a string
    }
  }, []);


  return (
    <div id="menu">
      <section className="px-[--padding-x] pt-10 pb-20">
        <h3 className="pb-[50px] font-normal">MENU</h3>
        <div className="flex flex-col lg:flex-row">
          <div className="col flex-1">
            <h3 className="lg:w-8/12 xl:w-7/12 text-[25px] lg:text-[40px] leading-tight font-medium">
              Get a glimpse of our vibrant atmosphere, mouth-watering dishes,
              & more...
            </h3>
          </div>
          <div className="col flex-1 flex flex-wrap items-center gap-[10px]">
            {menu.map(({ item, state }) => (
              <button
                key={item}
                className={`px-5 py-[10px] border border-[--foreground-green] ${
                  state
                    ? "bg-[--foreground-green] text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => handleMenu(item)}
              >
                {item}
              </button>
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
