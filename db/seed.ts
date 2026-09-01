import Database from "better-sqlite3";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as schema from "./schema";

const db = drizzle(new Database("local.db"), { schema });

const menuData = [
  // Wraps & Shared Bites
  { name: "Crispy Peri-Peri Chicken Wrap", description: "Tender spiced chicken, crisp lettuce, peri-peri drizzle wrapped in toasted flatbread", price: 24000, category: "wraps", image: "/tacos.jpg", featured: true },
  { name: "Smoky Paneer Tikka Wrap", description: "Grilled cottage cheese cubes with mint mayo, bell peppers, and fresh greens", price: 22000, category: "wraps", image: "/avocado-toast.jpg", featured: true },
  { name: "Cheesy Loaded Nachos", description: "Crisp corn tortilla chips smothered in warm cheese sauce, jalapenos, and salsa", price: 21000, category: "wraps", image: "/tacos.jpg", featured: false },
  { name: "Herb Garlic Truffle Fries", description: "Golden crispy fries tossed in rosemary herb seasoning with garlic dip", price: 18000, category: "wraps", image: "/tacos.jpg", featured: false },

  // Artisan Pizzas & Burgers
  { name: "Wood-Fired Margherita Pizza", description: "San Marzano tomatoes, fresh mozzarella, basil leaves on thin artisanal crust", price: 29000, category: "pizzas", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=800", featured: true },
  { name: "Everbloom Supreme Farmhouse Pizza", description: "Topped with baby corn, olives, bell peppers, mushroom, and mozzarella", price: 34000, category: "pizzas", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800", featured: true },
  { name: "BBQ Grilled Chicken Pizza", description: "Smoky barbecue shredded chicken, caramelized onions, cilantro, and double cheese", price: 36000, category: "pizzas", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800", featured: false },
  { name: "Gourmet Smash Burger", description: "Juicy handcrafted patty with melted cheddar, caramelized onions, and house sauce", price: 26000, category: "pizzas", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800", featured: true },

  // Signature Coolers & Mocktails
  { name: "Everbloom Berry Blossom Fizz", description: "Our house special refresher with muddled berries, mint, lime, and crushed ice", price: 19000, category: "coolers", image: "/everbloom/signature-coolers.jpg", featured: true },
  { name: "Watermelon Mint Cooler", description: "Freshly pressed watermelon, lime zest, mint leaves, and effervescent soda", price: 17000, category: "coolers", image: "/everbloom/signature-coolers.jpg", featured: true },
  { name: "Blue Ocean Curacao Fizz", description: "Vibrant tropical blue cooler with citrus notes and sparkling fizz", price: 18000, category: "coolers", image: "/everbloom/signature-coolers.jpg", featured: false },
  { name: "Peach & Passionfruit Iced Tea", description: "Slow-brewed black tea infused with sweet peach puree and passionfruit essence", price: 16000, category: "coolers", image: "/everbloom/signature-coolers.jpg", featured: false },

  // Pastas & Mains
  { name: "Classic Aglio Olio Peperoncino", description: "Spaghetti tossed in extra virgin olive oil, golden garlic, chili flakes, and parsley", price: 26000, category: "mains", image: "/pasta.jpg", featured: true },
  { name: "Creamy Alfredo Penne", description: "Penne pasta enveloped in rich parmesan cream sauce with sauteed mushrooms", price: 28000, category: "mains", image: "/pasta.jpg", featured: true },
  { name: "Spicy Arrabbiata Pasta", description: "Tangy tomato-basil sauce with red chili heat and kalamata olives", price: 27000, category: "mains", image: "/pasta.jpg", featured: false },

  // Coffee & Beverages
  { name: "Signature Iced Hazelnut Frappe", description: "Double espresso blended with hazelnut, cold milk, and topped with whipped cream", price: 21000, category: "beverages", image: "/iced-latte.jpg", featured: true },
  { name: "Artisanal Cappuccino", description: "Rich Arabica espresso topped with velvety steamed micro-foam and latte art", price: 16000, category: "beverages", image: "/cappuccino.jpg", featured: true },
  { name: "Belgian Hot Chocolate", description: "Silky 60% Belgian melted chocolate with steamed milk and cocoa dust", price: 19000, category: "beverages", image: "/hot-chocolate.jpg", featured: true },
  { name: "Classic Cold Brew on Ice", description: "14-hour steeped single origin beans served over crystal ice cubes", price: 17000, category: "beverages", image: "/iced-latte.jpg", featured: false },

  // Desserts & Bakery
  { name: "Blueberry Cheesecake Slice", description: "Creamy Philadelphia style baked cheesecake crowned with wild blueberry compote", price: 24000, category: "desserts", image: "/cheesecake.jpg", featured: true },
  { name: "Classic Espresso Tiramisu", description: "Espresso-soaked ladyfingers with whipped mascarpone and dark Dutch cocoa", price: 23000, category: "desserts", image: "/tiramisu.jpg", featured: true },
  { name: "Sizzling Chocolate Walnut Brownie", description: "Warm fudge brownie served on a hot skillet with vanilla bean ice cream", price: 22000, category: "desserts", image: "/cheesecake.jpg", featured: false },
  { name: "Butter Croissant", description: "Golden, flaky French pastry baked fresh daily in-house", price: 15000, category: "desserts", image: "/croissant-hero.jpg", featured: false },
];

async function seed() {
  console.log("Seeding Everbloom menu items...");
  db.delete(schema.menuItems).run();
  for (const item of menuData) {
    db.insert(schema.menuItems).values(item).run();
  }
  console.log(`Successfully seeded ${menuData.length} menu items.`);
}

seed().catch(console.error);
