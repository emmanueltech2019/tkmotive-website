"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import bigImg from "@/assets/images/bigImg.svg";
import axios from "axios";
import Swal from 'sweetalert2'
import MENU_LIST from "./menu_list";
import { sections } from "./menu_list";
import { Icon } from "@iconify/react/dist/iconify.js";
import { v4 as uuidv4 } from 'uuid'; // To generate unique IDs

const Menu = () => {
  const [menu, setMenu] = useState(MENU_LIST);
  const [userId, setUserId] = useState<string>(''); // Ensure userId is always a string

  const handleMenu = async (item: string) => {
    const updatedMenu = menu.map(({ item: menuItem, price, state, section }) => ({
      item: menuItem,
      price,
      section,
      state: menuItem === item ? !state : state,
    }));
    setMenu(updatedMenu);

    // Add item to cart via API
    const selectedItem = updatedMenu.find((menuItem) => menuItem.item === item);
    if (selectedItem?.state) {
      try {
        let savedUserId = localStorage.getItem('userId');
        await axios({
          url: "https://api.tkmotive.com/cart/add",
          method: "post",
          data: {
            userId: savedUserId,
            productName: selectedItem.item,
            quantity: 1,
            price: selectedItem.price,
          },
        });
        console.log(`${item} added to cart.`);
      } catch (error) {
        console.error(`Failed to add ${item} to cart:`, error);
        Swal.fire({
          title: 'Connction Error!',
          text: `Failed to add ${item} to cart`,
          icon: 'error',
          confirmButtonText: 'Try Again'
        })
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


  // Create state for each item
  const [sectionState, setSectionState] = useState(sections)

  const toggleItem = (selectedItem: string) => {
    // Create a new array and toggle the selected index
    setSectionState(prev =>
      prev.map(({ name, active }) => ({ name, active: name === selectedItem ? !active : active }))
    );
    setSectionState(prev =>
      prev.map(({ name, active }) => ({ name, active: name !== selectedItem ? false : active }))
    );

  };


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
          <div className="col flex-1 flex flex-col gap-3 py-3">
            {sectionState.map(({ name, active }) => (
              <div key={name}>
                <button className="flex items-center justify-between cursor-pointer w-full group" onClick={() => { toggleItem(name) }}>
                  <span className="text-xl font-medium group-hover:underline">
                    {name}
                  </span>
                  <Icon icon='tabler:chevron-down' className={`text-xl font-medium transition-all duration-300 ${active ? 'rotate-180' : 'rotate-0'}`} />
                </button>

                <div className={`flex flex-wrap items-center gap-[10px] menu_box transition-all duration-300 ${active ? 'max-h-96 overflow-auto' : 'max-h-0 overflow-hidden'}`}>
                  {menu.filter(({ section }) => section === name).map(({ item, state }) => (
                    <button key={item}
                      className={`px-5 py-[10px] border border-[--foreground-green] ${state
                        ? "bg-[--foreground-green] text-white"
                        : "bg-white text-black"
                        }`}
                      onClick={() => handleMenu(item)}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            <p className="pt-[10px]">Infused with rich spices and cooked to perfection</p>
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
