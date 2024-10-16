
type MENU_LIST_TYPE = {
  item: string
  state: boolean
  price: number
  section?: string
}[]

const MENU_LIST: MENU_LIST_TYPE = [
  // Soups
  { item: "Afang Soup", price: 2000, state: false, section: "soups" },
  { item: "Amala", price: 2000, state: false, section: "soups" },
  { item: "Atama Soup", price: 2000, state: false, section: "soups" },
  { item: "Banga Soup", price: 2000, state: false, section: "soups" },
  { item: "Bitter Leaf Soup", price: 2000, state: false, section: "soups" },
  { item: "Editang Soup", price: 2000, state: false, section: "soups" },
  { item: "Egusi Soup", price: 2000, state: false, section: "soups" },
  { item: "Native Soup", price: 4500, state: false, section: "soups" },
  { item: "Oha Soup", price: 2000, state: false, section: "soups" },
  { item: "Pepper Soup", price: 1000, state: false, section: "soups" },
  { item: "Seafood Okra Soup", price: 4500, state: false, section: "soups" },
  { item: "White Soup", price: 2000, state: false, section: "soups" },

  // Yam & Potato
  { item: "Chipped Potato with 3 Egg Wrapped", price: 3500, state: false, section: "yam and potato" },
  { item: "Chipped Potato & TKmotive Sauce", price: 6000, state: false, section: "yam and potato" },
  { item: "Chipped Yam with 3 Egg Wrapped", price: 3500, state: false, section: "yam and potato" },
  { item: "Chipped Yam & TKmotive Sauce", price: 6000, state: false, section: "yam and potato" },
  { item: "Yam Vegetable Porridge", price: 4500, state: false, section: "yam and potato" },
  { item: "Onunu & Fish Peppe Soup or Sauce", price: 10000, state: false, section: "yam and potato" },

  // Plantain
  { item: "Boiled Plantain & TKmotive Sauce", price: 6000, state: false, section: "plantain" },
  { item: "Fried Plantain", price: 500, state: false, section: "plantain" },
  { item: "Gizzdodo including Liver & Veg", price: 5000, state: false, section: "plantain" },
  { item: "Plantain Vegetable Porridge", price: 4500, state: false, section: "plantain" },

  // Protein (Peppered)
  { item: "Assorted / Cow Head / Goat/ Gizzard", price: 2000, state: false, section: "protein" },
  { item: "Ferry Snail", price: 5500, state: false, section: "protein" },
  { item: "Fried Egg (2) with added Veg", price: 2000, state: false, section: "protein" },
  { item: "Fried Fish (Red Snapper)", price: 4500, state: false, section: "protein" },

  // Swallow
  { item: "Garri", price: 500, state: false, section: "swallow" },
  { item: "Fufu", price: 500, state: false, section: "swallow" },
  { item: "Pounded Yam", price: 1000, state: false, section: "swallow" },
  { item: "Semovita", price: 1000, state: false, section: "swallow" },

  // Rice/Noodles/Salad/Sauce
  { item: "Chicken Wings Sauce", price: 5000, state: false, section: "rice noodles salad sauce" },
  { item: "Chinese Fried Rice", price: 5000, state: false, section: "rice noodles salad sauce" },
  { item: "Coconut Rice", price: 3000, state: false, section: "rice noodles salad sauce" },
  { item: "Continental Fried Rice", price: 3000, state: false, section: "rice noodles salad sauce" },
  { item: "Jambalaya Rice", price: 5000, state: false, section: "rice noodles salad sauce" },
  { item: "Jellof Noodles", price: 2000, state: false, section: "rice noodles salad sauce" },
  { item: "Nigeria Jellof Rice", price: 3000, state: false, section: "rice noodles salad sauce" },
  { item: "Ofada Rice", price: 3000, state: false, section: "rice noodles salad sauce" },
  { item: "Pomodoro Spaghetti", price: 3500, state: false, section: "rice noodles salad sauce" },
  { item: "Prime Pork Sauce/Chop", price: 5000, state: false, section: "rice noodles salad sauce" },
  { item: "Salad", price: 500, state: false, section: "rice noodles salad sauce" },
  { item: "TKmotive Native Rice", price: 3000, state: false, section: "rice noodles salad sauce" },
  { item: "Tkmotive Premium Sauce", price: 6000, state: false, section: "rice noodles salad sauce" },
  { item: "Unpolished White Rice & Veg", price: 2000, state: false, section: "rice noodles salad sauce" },

  // Beans
  { item: "Boiled Vegetable Beans", price: 1500, state: false, section: "beans" },
  { item: "Moi-moi (Deluxe + N1,000)", price: 1000, state: false, section: "beans" },
  { item: "Porridge Beans", price: 1500, state: false, section: "beans" },

  // Grills/Pastries/Chops
  { item: "Grilled Chicken Wings", price: 5500, state: false, section: "grills pastries chops" },
  { item: "Doughnut / Pancakes", price: 1000, state: false, section: "grills pastries chops" },
  { item: "Fish Roll / Chicken Rolls / Scotch Egg", price: 1000, state: false, section: "grills pastries chops" },
  { item: "Shawarma (Chicken with 2 Sausage)", price: 2500, state: false, section: "grills pastries chops" }
];

export const sections = [
  { name: "soups", active: false },
  { name: "yam and potato", active: false },
  { name: "plantain", active: false },
  { name: "protein", active: false },
  { name: "swallow", active: false },
  { name: "rice noodles salad sauce", active: false },
  { name: "beans", active: false },
  { name: "grills pastries chops", active: false }
];




export default MENU_LIST