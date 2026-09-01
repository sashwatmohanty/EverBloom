import { createRouter, publicQuery } from "./middleware";

const LINKS = [
  { id: 1, title: "Official Instagram", url: "https://instagram.com/ekaivabakehouse", icon: "Instagram", description: "Follow us for daily specials and behind-the-scenes" },
  { id: 2, title: "Google Maps", url: "https://maps.google.com/?q=Ekaiva+Bakehouse+Bhubaneswar", icon: "MapPin", description: "Find us in Chandrasekharpur, Bhubaneswar" },
  { id: 3, title: "Zomato", url: "https://zomato.com", icon: "Utensils", description: "Check our reviews and ratings on Zomato" },
  { id: 4, title: "Swiggy", url: "https://swiggy.com", icon: "Bike", description: "Order your favorites for delivery" },
  { id: 5, title: "Reservation", url: "/booking", icon: "Calendar", description: "Book a table for your special occasion" },
  { id: 6, title: "Contact Us", url: "/contact", icon: "Phone", description: "Get in touch for events and queries" },
];

export const linkHubRouter = createRouter({
  list: publicQuery.query(() => {
    return LINKS;
  }),
});
