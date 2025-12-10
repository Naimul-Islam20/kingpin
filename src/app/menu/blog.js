import P_Text from "@/components/ui/p_tag";
import { useState } from "react";

export default function MenuPage() {
  const [activeTab, setActiveTab] = useState("drinks");

  const tabs = [
    { id: "drinks", label: "DRINKS" },
    { id: "food", label: "FOOD" },
    { id: "addons", label: "Add Ons" },
  ];


  // first content

   const firstItems = [
     {
       title: "Small Plates",
       description: "2 for $35, 4 for $56, 6 for $70",
       subItems: [
         {
           name: "Falafel",
           desc: "Artisanal handcrafted beetroot falafel & chickpea falafel with beetroot hummus",
           price: "",
         },
         { name: "Halloumi Chips", desc: "Spicy tomato chutney", price: "" },
         {
           name: "Southern Fried Chicken",
           desc: "Crispy fried chicken, fiery Sriracha ranch",
           price: "",
         },
         {
           name: "Tokyo Style Chicken Skewers",
           desc: "Yakitori glaze, Japanese pickled cucumber",
           price: "",
         },
       ],
     },
     {
       title: "Burgers",
       description: "Our signature burgers",
       subItems: [
         {
           name: "The Smo'King Signature Burger",
           desc: "Stacked double Angus beef patties, smoky cheese sauce, crispy prosciutto, sweet & spicy pickles, charred tomato, crispy fried onions, truffle aioli",
           price: "",
         },
         {
           name: "Double Beef Double Cheese Burger",
           desc: "Smashed beef patty, smoked brisket, Monterey Jack cheese, cheese sauce, rocket, truffle mayo",
           price: "",
         },
       ],
     },
     {
       title: "Burgers",
       description: "Our signature burgers",
       subItems: [
         {
           name: "The Smo'King Signature Burger",
           desc: "Stacked double Angus beef patties, smoky cheese sauce, crispy prosciutto, sweet & spicy pickles, charred tomato, crispy fried onions, truffle aioli",
           price: "",
         },
         {
           name: "Double Beef Double Cheese Burger",
           desc: "Smashed beef patty, smoked brisket, Monterey Jack cheese, cheese sauce, rocket, truffle mayo",
           price: "",
         },
       ],
     },
     {
       title: "Burgers",
       description: "Our signature burgers",
       subItems: [
         {
           name: "The Smo'King Signature Burger",
           desc: "Stacked double Angus beef patties, smoky cheese sauce, crispy prosciutto, sweet & spicy pickles, charred tomato, crispy fried onions, truffle aioli",
           price: "",
         },
         {
           name: "Double Beef Double Cheese Burger",
           desc: "Smashed beef patty, smoked brisket, Monterey Jack cheese, cheese sauce, rocket, truffle mayo",
           price: "",
         },
       ],
     },
   ];

  const foodItems = [
    {
      title: "Small Plates",
      description: "2 for $35, 4 for $56, 6 for $70",
      subItems: [
        {
          name: "Falafel",
          desc: "Artisanal handcrafted beetroot falafel & chickpea falafel with beetroot hummus",
          price: "$15",
        },
        { name: "Halloumi Chips", desc: "Spicy tomato chutney", price: "$12" },
        {
          name: "Southern Fried Chicken",
          desc: "Crispy fried chicken, fiery Sriracha ranch",
          price: "$18",
        },
        {
          name: "Tokyo Style Chicken Skewers",
          desc: "Yakitori glaze, Japanese pickled cucumber",
          price: "$16",
        },
      ],
    },
    {
      title: "Burgers",
      description: "Our signature burgers",
      subItems: [
        {
          name: "The Smo'King Signature Burger",
          desc: "Stacked double Angus beef patties, smoky cheese sauce, crispy prosciutto, sweet & spicy pickles, charred tomato, crispy fried onions, truffle aioli",
          price: "$28",
        },
        {
          name: "Double Beef Double Cheese Burger",
          desc: "Smashed beef patty, smoked brisket, Monterey Jack cheese, cheese sauce, rocket, truffle mayo",
          price: "$25",
        },
      ],
    },
    {
      title: "Burgers",
      description: "Our signature burgers",
      subItems: [
        {
          name: "The Smo'King Signature Burger",
          desc: "Stacked double Angus beef patties, smoky cheese sauce, crispy prosciutto, sweet & spicy pickles, charred tomato, crispy fried onions, truffle aioli",
          price: "$28",
        },
        {
          name: "Double Beef Double Cheese Burger",
          desc: "Smashed beef patty, smoked brisket, Monterey Jack cheese, cheese sauce, rocket, truffle mayo",
          price: "$25",
        },
      ],
    },
    {
      title: "Burgers",
      description: "Our signature burgers",
      subItems: [
        {
          name: "The Smo'King Signature Burger",
          desc: "Stacked double Angus beef patties, smoky cheese sauce, crispy prosciutto, sweet & spicy pickles, charred tomato, crispy fried onions, truffle aioli",
          price: "$28",
        },
        {
          name: "Double Beef Double Cheese Burger",
          desc: "Smashed beef patty, smoked brisket, Monterey Jack cheese, cheese sauce, rocket, truffle mayo",
          price: "$25",
        },
      ],
    },
  ];

  return (
    <div className="max-w-[1330px]  py-10">
      {/* TABS */}
      <div className="flex justify-center items-center gap-4 mb-10">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            className={`text-4xl font-bold py-2 px-4 
    ${
      activeTab === t.id
        ? "text-black border-b-4 border-yellow-600"
        : "text-gray-500 border-b-4 border-white "
    }
  `}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      {activeTab === "drinks" && (
        <div>
          <div className="pb-10">
            <P_Text
              text={
                "Enjoy our extensive range of classic, specialty and seasonal cocktails with a BRAND NEW MENU! From playful surprises to luxurious elegance,"
              }
            />
          </div>

          <div className="columns-1 sm:columns-2 gap-6">
            {firstItems.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid border-t border-black "
              >
                <div className="bg-white  pt-9 pb-6 px-10">
                  <h1 className="text-3xl text-black uppercase font-bold mb-2">
                    {item.title}
                  </h1>
                  <p className="text-black text-lg mb-8">{item.description}</p>

                  {item.subItems.map((sub, i) => (
                    <div key={i} className="flex  justify-between mb-4">
                      {/* Left text */}
                      <div className="flex-1">
                        <h2 className="text-xl text-black font-bold">
                          {sub.name}
                        </h2>
                        <p className="text-black text-xl mt-1">{sub.desc}</p>
                      </div>

                      {/* Price box on right */}
                      <div className=" h-fit  py-1 flex items-center justify-center text-xl font-bold text-black">
                        {sub.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "food" && (
        <div>
          <div className="pb-10">
            <P_Text
              text={
                "Enjoy our extensive range of classic, specialty and seasonal cocktails with a BRAND NEW MENU! From playful surprises to luxurious elegance, our new drinks and cocktail menu has it all. We also have a variety of wines, beers and spirits."
              }
            />
          </div>

          <div className="columns-1 sm:columns-2 gap-6">
            {foodItems.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid border-t border-black "
              >
                <div className="bg-white  pt-9 pb-6 px-10">
                  <h1 className="text-3xl text-black uppercase font-bold mb-2">
                    {item.title}
                  </h1>
                  <p className="text-black text-lg mb-8">{item.description}</p>

                  {item.subItems.map((sub, i) => (
                    <div key={i} className="flex  justify-between mb-4">
                      {/* Left text */}
                      <div className="flex-1">
                        <h2 className="text-xl text-black font-bold">
                          {sub.name}
                        </h2>
                        <p className="text-black text-xl mt-1">{sub.desc}</p>
                      </div>

                      {/* Price box on right */}
                      <div className=" h-fit  py-1 flex items-center justify-center text-xl font-bold text-black">
                        {sub.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "addons" && (
        <div>
          <div className="pb-10">
            <P_Text
              text={
                "Enjoy our extensive range of classic, specialty and seasonal cocktails with a BRAND NEW MENU! From playful surprises to luxurious elegance, our new drinks and cocktail menu has it all. We also have a variety of wines, beers and spirits."
              }
            />
          </div>

          <div className="columns-1 sm:columns-2 gap-6">
            {foodItems.map((item, index) => (
              <div
                key={index}
                className="break-inside-avoid border-t border-black "
              >
                <div className="bg-white  pt-9 pb-6 px-10">
                  <h1 className="text-3xl text-black uppercase font-bold mb-2">
                    {item.title}
                  </h1>
                  <p className="text-black text-lg mb-8">{item.description}</p>

                  {item.subItems.map((sub, i) => (
                    <div key={i} className="flex  justify-between mb-4">
                      {/* Left text */}
                      <div className="flex-1">
                        <h2 className="text-xl text-black font-bold">
                          {sub.name}
                        </h2>
                        <p className="text-black text-xl mt-1">{sub.desc}</p>
                      </div>

                      {/* Price box on right */}
                      <div className=" h-fit  py-1 flex items-center justify-center text-xl font-bold text-black">
                        {sub.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      <p class="text-sm  md:text-lg mt-5   text-black italic">
        *It is each individual's responsibility to safely manage their own
        allergies. Information for allergenic ingredients of menu items is
        available upon request. TEEG is unable to guarantee that any food item
        prepared in our venue is free from traces of allergens.
      </p>
    </div>
  );
}
