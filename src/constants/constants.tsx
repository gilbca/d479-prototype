type CuisineCategory =
  | "Restaurant"
  | "Supermarket"
  | "Grocery Store"
  | "Convenience Store";

type LodgingCategory =
  | "Four-Star Resort"
  | "Hostel"
  | "Hotel"
  | "Bed & Breakfast"
  | "Villa"
  | "Eco-Lodge"
  | "Camp"
  | "Inn";

type TransportationCategory =
  | "Public Bus"
  | "Private Bus"
  | "Taxi"
  | "Rental Car"
  | "Bicycle"
  | "Walking";

export type DataEntry = {
  category: CuisineCategory | LodgingCategory | TransportationCategory;
  name: string;
  description: string;
  cuisine?: string;
  atmosphere?: string;
  specialFeatures?: string;
  image: string;
};

export const cuisineData: DataEntry[] = [
  {
    category: "Restaurant",
    name: "Aqua Azure",
    cuisine: "Local Fish and Rice",
    description:
      "Aqua Azure Eats offers a front-row seat to the ocean's splendor with a menu rich in local seafood paired with the finest rice on the island. It's a place where every dish is a tribute to Taniti's maritime heritage.",
    atmosphere:
      "Breezy, open-air dining that's perfect for a laid-back meal with a view.",
    image: "../images/cuisine-1.png",
  },
  {
    category: "Restaurant",
    name: "Papaya Shoal",
    cuisine: "Local Fish and Rice",
    description:
      "Nestled by the serene waters of Whispering Palms Beach, Papaya Shoal offers an authentic Tanitian dining experience. Specializing in freshly caught seafood and traditional rice dishes, each meal is a celebration of local flavors and island heritage.",
    atmosphere: "Ocean-view dining with a casual, family-friendly vibe.",
    image: "../images/cuisine-placeholder.png",
  },
  {
    category: "Restaurant",
    name: "5 Fronds Cafe",
    cuisine: "American-Style Meals",
    description:
      "Whether you're craving a hearty burger or a classic club sandwich, The Fronds Cafe serves up comforting American favorites with a tropical twist. Enjoy your meal in a lively setting that’s perfect for both families and groups.",
    atmosphere: "Vibrant and energetic, with live music on weekends.",
    image: "../images/cuisine-9.png",
  },
  {
    category: "Restaurant",
    name: "Currents Cuisine",
    cuisine: "Local Fish and Rice",
    description:
      "Experience the true essence of Taniti at Currents Cuisine, where every dish is a masterpiece featuring the freshest catch and locally harvested rice. Our menu is a tribute to the island's rich culinary traditions. Try our signature seafood platter for a taste of everything.",
    atmosphere:
      "Elegant dining with breathtaking sea views, perfect for a memorable evening.",
    image: "../images/cuisine-3.png",
  },
  {
    category: "Restaurant",
    name: "Desert Sky Taqueria",
    cuisine: "American-Style Meals",
    description:
      "Desert Sky Taqueria brings the bold flavors of Texas and Mexico to the heart of Taniti. From sizzling fajitas and hearty burritos to our famous Tex-Mex chili, every dish is a fiesta of taste. Dive into our vibrant menu, complemented by a selection of margaritas and craft beers.",
    atmosphere: "Lively and colorful, with a festive Tex-Mex vibe.",
    image: "../images/cuisine-2.png",
  },
  {
    category: "Restaurant",
    name: "Kelp Kettle",
    cuisine: "Local Fish and Rice",
    description:
      "Coral Kitchen celebrates the sea's bounty, serving dishes that fuse traditional techniques with modern flavors. Our specialty lies in creatively pairing locally caught fish with aromatic rice dishes that showcase the best of Taniti's culinary heritage. Don't miss our seafood risotto!",
    atmosphere: "Intimate and modern, with a touch of the sea in every detail.",
    image: "../images/cuisine-5.png",
  },
  {
    category: "Restaurant",
    name: "Phoenix Bloom",
    cuisine: "Pan-Asian",
    description:
      "Phoenix Bloom invites you on a culinary journey through Asia with a diverse menu that spans from the streets of Bangkok to the sushi bars of Tokyo. Each dish is crafted with authentic flavors and innovative presentations.",
    atmosphere:
      "Modern and sophisticated, ideal for a romantic dinner or a special occasion.",
    image: "../images/cuisine-6.png",
  },
  {
    category: "Restaurant",
    name: "Twilight Roasters",
    cuisine: "Local Fish and Rice",
    description:
      "As the sun dips below the horizon, there’s no better place to be than Twilight Roasters. Enjoy Taniti’s freshest catch of the day, grilled to perfection, alongside a selection of locally sourced rice dishes in a setting that offers stunning sunset views.",
    atmosphere:
      "Relaxed and inviting, with an outdoor seating area for amazing ocean views.",
    image: "../images/cuisine-7.png",
  },
  {
    category: "Restaurant",
    name: "Founder's Grill",
    cuisine: "American-Style Meals",
    description:
      "Step into Founder's Grill for a slice of Americana in the heart of Taniti. From fluffy pancakes to juicy steaks and burgers, our menu offers a comforting taste of home with generous portions and friendly service.",
    atmosphere:
      "Classic diner with a cozy, retro feel. Breakfast served all day long.",
    image: "../images/cuisine-8.png",
  },
  {
    category: "Restaurant",
    name: "Eastern Winds",
    cuisine: "Pan-Asian",
    description:
      "Eastern Winds is your gateway to the flavors of the Far East, offering a meticulously curated selection of dishes that highlight the best of Asian culinary traditions. Whether you’re in the mood for spicy curries or delicate dumplings, you’ll find it here.",
    atmosphere: "Tranquil and Zen, with private dining options available.",
    image: "../images/cuisine-4.png",
  },
  {
    category: "Supermarket",
    name: "Island Fresh Market",
    description:
      "Island Fresh Market is your go-to destination for the widest selection of fresh produce, local and international groceries, and artisanal goods. Our friendly staff is always on hand to help you find the perfect ingredients for your culinary adventures.",
    specialFeatures:
      "Extensive selection of fresh seafood, organic produce, and a bakery offering freshly baked goods daily.",
    image: "../images/supermarket-2.png",
  },
  {
    category: "Supermarket",
    name: "Taniti Superfoods",
    description:
      "At Taniti Superfoods, we pride ourselves on offering health-conscious, sustainable shopping options. From organic fruits and vegetables to eco-friendly household products, we have everything you need to eat well and live better.",
    specialFeatures:
      "Health and wellness section, bulk buy discounts, and a juice bar serving fresh smoothies and health drinks.",
    image: "../images/supermarket-1.png",
  },
  {
    category: "Grocery Store",
    name: "The Corner Grocer",
    description:
      "Conveniently located in the heart of Taniti City, The Corner Grocer is your neighborhood store for quick stops and essential groceries. Find a curated selection of daily necessities, snacks, and a variety of beverages.",
    specialFeatures:
      "Local snack favorites, a fine selection of wines and craft beers, and freshly made sandwiches to go.",
    image: "../images/grocery-store-1.png",
  },
  {
    category: "Grocery Store",
    name: "Harbor View Groceries",
    description:
      "Situated with a view of the bustling harbor, Harbor View Groceries offers shoppers a unique selection of local specialties, fresh produce, and all the basics. Perfect for picking up picnic supplies or ingredients for a beachside barbecue.",
    specialFeatures:
      "Seafood section featuring the catch of the day, and a variety of Taniti-made sauces and spices.",
    image: "../images/grocery-store-2.png",
  },
  {
    category: "Convenience Store",
    name: "Island 24/7 Mart",
    description:
      "Island 24/7 Mart is your round-the-clock spot for whenever you need anything, be it early in the morning or late at night. From snacks and drinks to over-the-counter medications and beach essentials, we've got you covered at all hours.",
    specialFeatures:
      "ATM on-site, mobile charging station, and a selection of ready-to-eat meals. Open 24 hours.",
    image: "../images/convenient-store-1.png",
  },
];

export const lodgingData: DataEntry[] = [
  {
    name: "Azure Bay Resort",
    category: "Four-Star Resort",
    description:
      "Nestled on the shores of Crystal Cove, Azure Bay Resort offers luxurious accommodations with breathtaking ocean views. Guests can enjoy world-class amenities, including a spa, infinity pool, gourmet restaurants, and private beach access.",
    specialFeatures: "Spa, Infinity Pool, Gourmet Dining, Private Beach",
    image: "../images/lodging-1.png",
  },
  {
    name: "Taniti Traveller's Hostel",
    category: "Hostel",
    description:
      "A budget-friendly option for travelers, Taniti Traveller's Hostel provides clean, comfortable dormitory-style accommodations. It's a great place to meet fellow adventurers and explore Taniti together.",
    specialFeatures: "Communal Kitchen, Free Wi-Fi, Lockers, Social Events",
    image: "../images/lodging-2.png",
  },
  {
    name: "Palm Grove Inn",
    category: "Hotel",
    description:
      "Operated by a local family for generations, Palm Grove Inn offers cozy and intimate accommodations with a personal touch. Guests can enjoy homemade breakfast and the lush garden.",
    specialFeatures:
      "Homemade Breakfast, Garden, Family Rooms, Personalized Service",
    image: "../images/lodging-5.png",
  },
  {
    name: "Sunset Beach B&B",
    category: "Bed & Breakfast",
    description:
      "Wake up to stunning ocean views at Sunset Beach B&B, where each room is designed for comfort and relaxation. Guests can enjoy a hearty breakfast on the terrace overlooking the water.",
    specialFeatures: "Ocean Views, Terrace, Breakfast Included, Cozy Rooms",
    image: "../images/lodging-3.png",
  },
  {
    name: "Tropical Haven Villa",
    category: "Villa",
    description:
      "Experience the ultimate in privacy and luxury at Tropical Haven Villa, a secluded retreat surrounded by lush tropical gardens. Guests can relax in their private pool or take a short walk to the beach.",
    specialFeatures:
      "Private Pool, Tropical Gardens, Fully Equipped Kitchen, Secluded Location",
    image: "../images/lodging-6.png",
  },
  {
    name: "Orchard Lane Guesthouse",
    category: "Bed & Breakfast",
    description:
      "Orchard Lane Guesthouse is nestled amidst lush fruit orchards, offering guests a serene escape and a taste of local agriculture. Enjoy fresh, farm-to-table breakfasts each morning and relax in the quaint, beautifully appointed rooms.",
    specialFeatures:
      "Farm-to-Table Breakfast, Orchard Tours, Comfortable Rooms, Garden Patios",
    image: "../images/lodging-9.png",
  },
  {
    name: "EcoWave Lodge",
    category: "Eco-Lodge",
    description:
      "Immerse yourself in nature at EcoWave Lodge, an eco-friendly retreat that offers sustainable accommodations in harmony with the environment. Guests can enjoy guided nature walks, organic meals, and stargazing.",
    specialFeatures:
      "Nature Walks, Organic Meals, Stargazing, Eco-Friendly Practices",
    image: "../images/lodging-4.png",
  },
  {
    name: "Explorer's Camp",
    category: "Camp",
    description:
      "For those seeking adventure, Explorer's Camp provides rustic yet comfortable accommodations in close proximity to Taniti's best hiking and outdoor activities. It's the perfect base for your island adventures.",
    specialFeatures:
      "Beachfront Camping, Bonfires, Snorkeling, Outdoor Showers",
    image: "../images/lodging-8.png",
  },
  {
    name: "Seaside Inn",
    category: "Inn",
    description:
      "Seaside Inn is a charming beachfront property that offers cozy accommodations with stunning ocean views. Guests can relax on the veranda, take a dip in the sea, and enjoy fresh seafood at the inn's restaurant.",
    specialFeatures:
      "Beachfront Location, Ocean Views, Veranda, Seafood Restaurant",
    image: "../images/lodging-7.png",
  },
];

export const transportationData: DataEntry[] = [
  {
    category: "Public Bus",
    name: "Taniti BlueHound",
    description:
      "The BlueHound is Taniti's main public bus service, offering convenient and affordable transportation across the island. With regular routes and stops at key locations, it's a great way to explore Taniti like a local.",
    image: "../images/transportation-1.png",
    specialFeatures:
      "From 5 a.m. to 11 p.m. every day, Wi-Fi on board, air-conditioned",
  },
  {
    category: "Private Bus",
    name: "Island Tours",
    description:
      "Island Tours offers private bus services for guided tours of Taniti's most popular attractions. Whether you're exploring the city, visiting the volcano, or hiking through the rainforest, Island Tours can take you there in comfort and style.",
    image: "../images/transportation-2.png",
    specialFeatures: "Customizable tours, knowledgeable guides, luxury buses",
  },
  {
    category: "Private Bus",
    name: "Cultural Excursions",
    description:
      "Cultural Excursions offers private bus services for travelers interested in Taniti's rich history and heritage. Visit traditional villages, historic sites, and cultural landmarks with knowledgeable guides who bring the island's stories to life.",
    image: "../images/transportation-3.png",
    specialFeatures: "Educational tours, immersive experiences, local guides",
  },
  {
    category: "Taxi",
    name: "Island Cabs",
    description:
      "Island Cabs is Taniti's premier taxi service, providing reliable transportation for visitors and locals alike. Whether you need a ride to the airport, a tour of the city, or a night out on the town, Island Cabs has you covered.",
    image: "../images/transportation-4.png",
    specialFeatures: "24/7 service, airport transfers, group bookings",
  },
  {
    category: "Taxi",
    name: "Beachside Taxis",
    description:
      "Beachside Taxis offers scenic tours of Taniti's coastal roads and beachfront promenades, giving passengers a unique perspective of the island's beauty. Sit back, relax, and enjoy the ride with Beachside Taxis.",
    image: "../images/transportation-5.png",
    specialFeatures: "knowledgeable drivers, quick service, scenic routes",
  },
  {
    category: "Rental Car",
    name: "Coastal Cruisers",
    description:
      "Coastal Cruisers specializes in off-road vehicles and beach buggies for travelers seeking adventure on Taniti's rugged terrain. Rent a Coastal Cruiser and explore the island's hidden gems. Perfect for beach hopping and off-road exploration.",
    image: "../images/transportation-6.png",
    specialFeatures: "4x4 vehicles, beach buggies, GPS navigation",
  },
  {
    category: "Rental Car",
    name: "EcoWheels",
    description:
      "City Drives offers compact cars and electric vehicles for navigating Taniti City's bustling streets and narrow lanes. Rent a City Drive and zip around the city with ease. Low emissions, high efficiency, and a smooth ride guaranteed.",
    image: "../images/transportation-7.png",
    specialFeatures:
      "Electric vehicles, fuel-efficient cars, Luxury Models available",
  },
  {
    category: "Bicycle",
    name: "Island Pedals",
    description:
      "Island Pedals provides bicycle rentals for eco-conscious travelers looking to explore Taniti on two wheels. Cruise along the coastal bike paths, pedal through the city, and discover the island's hidden gems with Island Pedals.",
    image: "../images/transportation-8.png",
    specialFeatures: "road bikes, city bikes, easy rentals, helmets included",
  },
  {
    category: "Bicycle",
    name: "Jungle Rides",
    description:
      "Jungle Rides offers mountain bikes and trail bikes for adventurers seeking off-road thrills in Taniti's rainforests. Rent a bike from Jungle Rides and hit the trails for an adrenaline-pumping experience. Quick and easy rentals available.",
    image: "../images/transportation-9.png",
    specialFeatures: "Mountain bikes, trail bikes, safety gear included",
  },
];
