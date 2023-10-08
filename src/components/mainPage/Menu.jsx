import React, { Fragment } from 'react'
import classes from "./menu.module.css"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../store/CartSlice';


const Menu = () => {

  const dispatch=useDispatch();
  const menuPage1= [
   
  {
    id: "a1",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoPizzaBitesPepperoni.jpg?v=1676051844&width=360",
    title: "Keto Pepperoni Pizza Bites",
    description:
      "Crisp, golden bites of pepperoni pizza are a delicious addition...",
    price: 9.99,
  },
  {
    id: "a2",
    img: "https://www.ketodelia.ca/cdn/shop/files/shrimpguacamolecucumberbites.jpg?v=1691451964&width=360",
    title: "Gourmet Shrimp Guacamole Bites",
    description:
      "Six Extra Jumbo Black Tiger Shrimps, layered on crisp cucumber...",
    price: 22.99,
  },
  {
    id: "a3",
    img: "https://www.ketodelia.ca/cdn/shop/products/grilledhalloumicheese.jpg?v=1673029374&width=360",
    title: "Grilled Halloumi Cheese",
    description:
      "Grilled halloumi cheese and organic tomatoes served on ...",
    price: 12.99,
  },
  {
    id: "a4",
    img: "https://www.ketodelia.ca/cdn/shop/products/organicchickenwings.jpg?v=1673049924&width=360",
    title: "Local Free Range Air Fried Keto Chicken Wings",
    description:
      "7 air-fried organic farm chicken wings with a side of celery sticks....",
    price: 19.99,
  },
  {
    id: "a5",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoSalmonSushiRoll.jpg?v=1673029360&width=360",
    title: "Keto Salmon Sushi Roll (8 pcs.)",
    description:
      "Cauliflower rice, cream cheese, smoked salmon, organic avocado,...",
    price: 12.99,
  },
  {
    id: "a6",
    img: "https://www.ketodelia.ca/cdn/shop/products/cauliflowerbites.jpg?v=1673029354&width=360",
    title: "Air Fried Keto Buffalo Cauliflower Bites",
    description:
      "Lightly battered organic cauliflower tossed in homemade buffalo...",
    price: 12.99,
  },
  {
    id: "a7",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoLasagna_34fcd752-5d4b-4ccd-a3f3-515c488130b7.jpg?v=1673300561&width=360",
    title: "Keto Lasagna Hearts of Palm",
    description:
      "Noodles made from hearts of palm make for the perfect low-carb...",
    price: 14.99,
  },
];


   const menuPage= [
      
    {
      id: "a8",
      img: "https://www.ketodelia.ca/cdn/shop/products/AlmondFlourWaffles.jpg?v=1673029390&width=360",
      title: "Almond Flour Belgian Waffle",
      description:
        "Our almond flour waffles are crispy on the outside, and tender  ...",
      price: 10.99,
    },
    {
      id: "a9",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoLoxandCreamCheeseBagel.jpg?v=1673029393&width=360",
      title: "Keto Lox and Cream Cheese Bagel",
      description:
        "Keto bagel (almond flour and mozzarella), cream cheese and premium...",
      price: 12.99,
    },
    {
      id: "a10",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoStrawberryJam.png?v=1673029403&width=360",
      title: "Keto Strawberry Jam",
      description:
        "Our Keto Strawberry Jam is delicious on just about everything. It's...",
      price: 8.99,
    },
    {
      id: "a11",
      img: "https://www.ketodelia.ca/cdn/shop/products/RaspberryChiaPudding.jpg?v=1673029406&width=360",
      title: "Keto Raspberry Chia Pudding",
      description:
        "Our keto pudding is made of fresh raspberries, chia seeds and 35% whipping cream....",
      price: 15.99,
    },
    {
      id: "a12",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our cheddar jalapeno bagels are made of almond flour, mozzarella...",
      price: 23.99,
    },
    {
      id: "a13",
      img: "https://www.ketodelia.ca/cdn/shop/products/BlueberryKetoBagels.jpg?v=1679087774&width=360",
      title: "Keto Bagel Blueberry - 4 pack",
      description:
        "Our blueberry keto bagels are made of almond flour, mozzarella,....",
      price: 23.99,
    }, 
    {
      id: "a14",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsAssorted.jpg?v=1679087749&width=360",
      title: "Assorted Keto Bagels - 4 Pack",
      description:
        "Our keto bagels are made of almond flour, mozzarella and cream cheese....",
      price: 23.99,
    },
    {
      id: "a15",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our keto bagels are made of....",
      price: 23.99,
    },
     {
      id: "a16",
      img: "https://www.ketodelia.ca/cdn/shop/products/HalalTurkeyBaconWrappedKetoBagels.jpg?v=1679087926&width=360",
      title: "Keto Bagel Turkey Bacon Wrapped 4 Pack",
      description:
        "Our bacon wrapped keto bagels  ....",
      price: 23.99,
    },
    {
      id: "a17",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoCinnamonBagels.jpg?v=1678745477&width=360",
      title: "Keto Cinnamon Sugar (No Sugar) Bagels - 4 pack",
      description:
        "Our bacon wrapped keto bagels  ...",
      price: 23.99,
    },
  ];
  const menuPage2= [
   
  {
    id: "a18",
    img: "https://www.ketodelia.ca/cdn/shop/products/avocadogreensalad.jpg?v=1665715489&width=360",
    title: "Green Garden Avocado Salad",
    description:
      "Organic avocado, spring mix, tomatoes, and homemade Caesar...",
    price: 12.99,
  },
  {
    id: "a19",
    img: "https://www.ketodelia.ca/cdn/shop/products/GrilledCaesarSalad.jpg?v=1673292810&width=360",
    title: "Grass Fed Grilled Steak Salad",
    description:
      "Grass-fed top sirloin, organic romaine lettuce, arugula, red onion,...",
    price: 19.99,
  },
  {
    id: "a20",
    img: "https://www.ketodelia.ca/cdn/shop/products/smokedsalmonsalad.jpg?v=1673029468&width=360",
    title: "Smoked Salmon Avocado Salad",
    description:
      "Atlantic Salmon, organic avocado, arugula, free-run hard-boiled ...",
    price: 18.99,
  },
  {
    id: "a21",
    img: "https://www.ketodelia.ca/cdn/shop/products/grilledsteaksalad.jpg?v=1669748820&width=360",
    title: "Organic Free Range Grilled Caesar Salad",
    description:
    "Organic farm chicken breast, romaine lettuce, grated parmesan,....",
    price: 18.99,
  },
  
];
const ketoPizza= [
   
  {
    id: "a21",
    img: "https://www.ketodelia.ca/cdn/shop/products/ketogardenveggiepizza.jpg?v=1673293248&width=360",
    title: "Garden Veggie Keto Pizza",
    description:
      "Almond crust, organic peppers, mushrooms and tomatoes,...",
    price: 11.99,
  },
  {
    id: "a22",
    img: "https://www.ketodelia.ca/cdn/shop/products/ketopepperonipizza.jpg?v=1673297218&width=360",
    title: "Pepperoni Keto Pizza",
    description:
      "Almond crust, halal turkey pepperoni, organic garlic, tomatoes,...",
    price: 12.99,
  },
  {
    id: "a23",
    img: "https://www.ketodelia.ca/cdn/shop/products/GrilledChickenKetoPizza.jpg?v=1673029384&width=493",
    title: "Organic Free Range Grilled Chicken Pizza",
    description:
      "Almond crust, organic farm chicken, red pepper, red onion, cheese...",
    price: 13.99,
  },
  {
    id: "a24",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoPestoPizza.jpg?v=1673297490&width=360",
    title: "Keto Pesto Pizza",
    description:
      "Almond crust, organic peppers, onions, goat cheese, mozzarella,....",
    price: 12.99,
  },
  {
    id: "a25",
    img: "https://www.ketodelia.ca/cdn/shop/products/GrilledSteakhousePizza.jpg?v=1673297710&width=360",
    title: "Grass Fed Grilled Steakhouse Keto Pizza",
    description:
      "Almond crust, 100% grass fed steak, mozzarella, portobello...",
    price: 13.99,
  },
  {
    id: "a26",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoGrilledSalmonPizza.png?v=1673298254&width=360",
    title: "Grilled Salmon Keto Pizza",
    description:
      "Almond crust, Atlantic salmon, organic red onion, red pepper...",
    price: 12.99,
  },
  {
    id: "a27",
    img: "https://www.ketodelia.ca/cdn/shop/products/CheeseFlatbreadKhachapuri.jpg?v=1673298493&width=360",
    title: "Keto Cheese Flatbread Khachapuri (Georgian Flatbread) - for 2 people",
    description:"Almond mozzarella pie with 3 cheese stuffing, oven baked with egg...",
    price: 25.99,
  },
];
const soupPage=[
  {
    id: "a28",
    img: "https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356",
    title: "Keto Chicken Soup",
    description:
      "Our Keto Chicken Soup is made with homemade organic farmers chicken and cauliflower rice...",
    price: 15.99,
  },
] 
const ketoBurger= [
   
  {
    id: "a29",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoChickenBurger.jpg?v=1673029418&width=360",
    title: "Keto Chicken Burger",
    description:
      "Psyllium almond bun, chicken patty, tomato, onion, lettuce and...",
    price: 15.99,
  },
  {
    id: "a30",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoPortobelloBurger.jpg?v=1669778521&width=360",
    title: "Portobello Mushroom Keto Burger (Vegetarian)",
    description:
      "Psyllium almond bun, portobello mushroom, homemade mayo,...",
    price: 13.99,
  },
  {
    id: "a31",
    img: "https://www.ketodelia.ca/cdn/shop/products/BlueCheeseKetoBurger.jpg?v=1673300226&width=360",
    title: "Local Grass Fed Blue Cheese Burger",
    description:
      "Psyllium almond bun, 100% Grass fed beef patty, blue cheese,...",
    price: 20.99,
  },
  {
    id: "a32",
    img: "https://www.ketodelia.ca/cdn/shop/products/ClassicKetoGlutenFreeBurger.jpg?v=1673029421&width=360",
    title: "Local Grass Fed Classic Keto Burger",
    description:
      "Psyllium almond bun, 100% grass fed beef patty, homemade mayo,....",
    price: 19.99,
  },
  {
    id: "a33",
    img: "https://www.ketodelia.ca/cdn/shop/products/sauteedmushroomsketoburger.jpg?v=1673299556&width=360",
    title: "Local Grass Fed Sautéed Mushrooms Keto Burger",
    description:
      "Psyllium almond bun, 100% grass fed beef patty, homemade mayo,...",
    price: 25.99,
  },
  {
    id: "a34",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoCheeseburger.jpg?v=1673299276&width=360",
    title: "Local Grass Fed Keto Cheeseburger",
    description:
      "Psyllium almond bun, 100% Grass fed beef patty, Swiss or Cheddar...",
    price: 20.99,
  },
  
];
const ketoPasta= [
   
  {
    id: "a35",
    img: "https://www.ketodelia.ca/cdn/shop/products/CreamyMushroomFettuccineAlfredo.jpg?v=1673029366&width=360",
    title: "Creamy Mushroom Fettuccine Alfredo Shirataki",
    description:
      "Alfredo sauce and portobello mushrooms tossed with organic konjac...",
    price: 19.99,
  },
  {
    id: "a36",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoSpaghettiBolognese.jpg?v=1673300950&width=360",
    title: "Keto Spaghetti Bolognese",
    description:
      "Organic konjac noodles tossed with a rich meat sauce - made with...",
    price: 22.99,
  },
  {
    id: "a37",
    img: "https://www.ketodelia.ca/cdn/shop/products/GrilledSalmonSpagettiShiratakiPasta.jpg?v=1673300891&width=360",
    title: "Grilled Salmon Spaghetti Shirataki",
    description:
      "Creamy sauce, spinach, roasted garlic, Atlantic salmon pieces, tossed...",
    price: 25.99,
  },
  {
    id: "a38",
    img: "https://www.ketodelia.ca/cdn/shop/products/GarlicShrimpZiti.png?v=1673301020&width=360",
    title: "Konjac Garlic Shrimp Fettuccine",
    description:
      "Homemade garlic sauce and jumbo shrimps with fettuccine style....",
    price: 19.99,
  },
    
  
  ];
  const ketoMains = [
    
    {
      id: "a39",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoChickenTenders.jpg?v=1673029425&width=360",
      title: "Air Fried Keto Chicken Tenders",
      description:
        "Air fried chicken tenderloins tossed in almond flour and spices with...",
      price: 23.99,
    },
    {
      id: "a40",
      img: "https://www.ketodelia.ca/cdn/shop/products/RoastedChicken.jpg?v=1673301273&width=360",
      title: "Organic Free Range Roasted Chicken",
      description:
        "Slow-roasted organic farm chicken, served with your...",
      price: 29.99,
    },
    {
      id: "a41",
      img: "https://www.ketodelia.ca/cdn/shop/products/GarlicButterSalmonKeto.jpg?v=1673029428&width=360",
      title: "Garlic Butter Salmon",
      description:
        "Fresh Atlantic salmon in creamy garlic butter sauce. ...",
      price: 37.99,
    },
    {
      id: "a42",
      img: "https://www.ketodelia.ca/cdn/shop/products/cauliflowersteak.jpg?v=1665714729&width=493",
      title: "Cauliflower Steak (Vegetarian)",
      description:
        "Roasted organic cauliflower, topped with roasted cherry ...",
      price: 17.99,
    },
    {
      id: "a43",
      img: "https://www.ketodelia.ca/cdn/shop/products/LocalGrassFedRibeyeSteak.jpg?v=1673029430&width=360",
      title: "Local Grass Fed Ribeye Steak",
      description:
        "6-ounce 100% Grass Fed charbroiled dry-aged rib eye ...",
      price: 48.99,
    },
  ];
  const ketoSides = [
    
    {
      id: "a44",
      img: "https://www.ketodelia.ca/cdn/shop/products/mashedcauliflower.jpg?v=1673301567&width=360",
      title: "Mashed Cauliflower",
      description:
        "330 cals | 30g fat | 6g protein | 5g net carbs",
      price: 9.99,
    },
    {
      id: "a45",
      img: "https://www.ketodelia.ca/cdn/shop/products/GrilledVeggies.jpg?v=1673301711&width=360",
      title: "Grilled Vegetables",
      description:
        "330 cals | 30g fat | 6g protein | 5g net carbs...",
      price: 9.99,
    },
    {
      id: "a46",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoPsylliumBun.jpg?v=1673029504&width=360",
      title: "Keto Psyllium Bun",
      description:
        "These soft and fluffy keto buns are made with almond ...",
      price: 3.99,
    },
    {
      id: "a47",
      img: "https://www.ketodelia.ca/cdn/shop/products/homemadegrassfedbutter.jpg?v=1673029508&width=360",
      title: "Homemade Grass-Fed Butter (20 gm)",
      description:
        "140 cals | 16g fat | 0.1g protein | 0.1 net carbs...",
      price: 2.99,
    },
   {
      id: "a48",
      img: "https://www.ketodelia.ca/cdn/shop/products/grilledacovadoside.jpg?v=1673029511&width=360",
      title: "Grilled Avocado",
      description:
        "Grilled Avocado is a delicious and healthy appetizer or snack. Lightly...",
      price:10.99,
    },
    {
      id: "a49",
      img: "https://www.ketodelia.ca/cdn/shop/products/AlmondBreadBasket.jpg?v=1673029513&width=360",
      title: "Homemade Almond Bread Basket",
      description:
        "Half loaf of home baked, gluten free, low carb bread loaf...",
      price: 14.99,
    },
    {
      id: "a50",
      img: "https://www.ketodelia.ca/cdn/shop/products/HomemadeKetoBreadLoaf.jpg?v=1673029516&width=360",
      title: "Low Carb Gluten Free Almond Bread Loaf",
      description:
        "Home baked, gluten free, low carb bread loaf, made with almond...",
      price: 24.99,
    },
    {
      id: "a51",
      img: "https://www.ketodelia.ca/cdn/shop/products/VeganKetoBread.jpg?v=1673029519&width=360",
      title: "Keto Seed Bread",
      description:
        "This keto seed bread is vegan and made entirely of...",
      price: 15.99,
    },
  ];
  const SugarFreeDesserts = [
    
    {
      id: "a52",
      img: "https://www.ketodelia.ca/cdn/shop/products/ValentinesMiniKetoCheesecake.jpg?v=1675898054&width=493",
      title: "Mini Heart-Shaped Keto Cheesecake: Perfect for Valentine's Day!",
      description:
        "Indulge in a delicious an...",
      price: 22.99,
    },
    {
      id: "a53",
      img: "https://www.ketodelia.ca/cdn/shop/products/ChocolateChipCookies.jpg?v=1673029334&width=360",
      title: "Keto Chocolate Chip Cookies",
      description:
        "160 cals | 16g fat | 2g protein | 2g net carbs...",
      price: 9.99,
    },
    {
      id: "a54",
      img: "https://www.ketodelia.ca/cdn/shop/products/NoSugarCheesecake.jpg?v=1673029341&width=360",
      title: "Keto Cheesecake",
      description:
        "A classic cheesecake, made Keto-friendly. Deliciously rich and...",
      price: 12.99,
    },
    {
      id: "a55",
      img: "https://www.ketodelia.ca/cdn/shop/products/Dairy-freeKetoCoffeeCake.jpg?v=1673029345&width=360",
      title: "Homemade Grass-Fed Butter (20 gm)",
      description:
        "140 cals | 16g fat | 0.1g protein | 0.1 net carbs...",
      price: 2.99,
    },
   
    {
      id: "a56",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketochocolatemousse.jpg?v=1673029339&width=493",
      title: "Sugar Free Chocolate Mousse",
      description:
        "Made of whipping cream and cocoa powder, sweetened...",
      price: 10.99,
    },
    
  ];
  const KetoCupcakes = [
    
    {
      id: "a56",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketovanillacupcakessugarfree.jpg?v=1673386183&width=360",
      title: "Keto Vanilla Cupcakes (Nut-Free)",
      description:
        "These coconut flour vanilla cupcakes are nut-free, sugar..",
      price: 5.99,
    },
    {
      id: "a57",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketosugarfreechocolatecupcakes.jpg?v=1673029473&width=360",
      title: "Keto Chocolate Cupcakes",
      description:
        "These almond and coconut flour chocolate cupcakes are keto...",
      price: 5.99,
    },
    {
      id: "a58",
      img: "https://www.ketodelia.ca/cdn/shop/products/sugarfreeredvelvetcupcakes.jpg?v=1673029479&width=360",
      title: "Sugar Free Red Velvet Cupcakes",
      description:
        "These almond and coconut flour chocolate ...",
      price: 5.99,
    },
    {
      id: "a59",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoTiramisuCupcakes.jpg?v=1673029483&width=360",
      title: "Keto Tiramisu Cupcakes",
      description:
        "These almond and coconut flour tiramisu cupcakes are ke...",
      price: 5.99,
    },
   
    {
      id: "a60",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoPeanutButterCupcakes_97b2217a-8bbb-4485-a6e5-d6f0e694c619.jpg?v=1673385864&width=360",
      title: "Keto Peanut Butter Cupcakes",
      description:
        "These almond and coconut flour peanut butter cupcakes ...",
      price: 5.99,
    },
    {
      id: "a61",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketolemoncupcakes.jpg?v=1673385649&width=360",
      title: "Keto Lemon Cupcakes",
      description:
        "These almond and coconut flour lemon cupcakes are keto friendly,..",
      price: 5.99,
    },
    {
      id: "a62",
      img: "https://www.ketodelia.ca/cdn/shop/products/sugarfreeketoblueberrymuffins.jpg?v=1673029493&width=360",
      title: "Keto Blueberry Muffins",
      description:
        "These blueberry keto muffins are freshly baked from almond ...",
      price: 5.99,
    },
    {
      id: "a63",
      img: "https://www.ketodelia.ca/cdn/shop/products/sugarfreechocolatechipmuffins.jpg?v=1673029499&width=360",
      title: "Keto Chocolate Chip Muffins",
      description:
      "These chocolate chip keto muffins are freshly baked f...",
      price: 5.99,
    },
  ];
  
 const ReadyToCook = [
    
  {
    id: "a1",
    img: "https://www.ketodelia.ca/cdn/shop/products/GardenVeggieKetoPizza-ReadytoCook.jpg?v=1673029450&width=360",
    title: "Garden Veggie Keto Pizza 9" ,
    description:
      "Almond crust, organic peppers, mushrooms, tomatoes, ..",
    price: 17.99,
  },
  {
    id: "a2",
    img: "https://www.ketodelia.ca/cdn/shop/products/PepperoniKetoPizza-ReadytoCook.jpg?v=1673029453&width=360",
    title: "Pepperoni Keto Pizza 9" ,
    description:
      "Almond crust, turkey pep...",
    price: 18.99,
  },
  {
    id: "a3",
    img: "https://www.ketodelia.ca/cdn/shop/products/LocalGrilledChickenKetoPizza-ReaytoCook.jpg?v=1673029457&width=360",
    title: "Local Free Range Grilled Chicken Pizza 9" ,
    description:
      "Almond crust, organic farm chicken, ...",
    price: 20.99,
  },
  {
    id: "a4",
    img: "https://www.ketodelia.ca/cdn/shop/products/KetoPestoPizza-9inches.jpg?v=1673029461&width=360",
    title: "Keto Pesto Pizza 9" ,
    description:
      "Almond crust, organic peppers, onions, spinach, goat ...",
    price: 18.99,
  },
 
  
];
const KetoCakes=[{
  id: "a69",
  img: "https://www.ketodelia.ca/cdn/shop/products/NosugarKetoCheesecake.jpg?v=1669755789&width=360",
  title: "Keto Cheesecake 8”" ,
  description:
    "The crumbly almond flour crust and luscious cream cheese will...",
  price: 78.99,
},{
  id: "a70",
  img: "https://www.ketodelia.ca/cdn/shop/products/KetoRedVelvetCake.jpg?v=1673387280&width=360",
  title:" Keto Red Velvet Cake 8”" ,
  description:
    "This coconut flour red velvet cake is layered with velvety...",
  price: 78.99,
},
{
  id: "a71",
  img: "hhttps://www.ketodelia.ca/cdn/shop/products/KetoChocolateCake.jpg?v=1673387538&width=360",
  title: "Keto Chocolate Cake 8”" ,
  description:
    "The perfect treat for chocoholics, this Keto Chocolate Cake has an...",
  price: 78.99,
},
{
  id: "a72",
  img: "https://www.ketodelia.ca/cdn/shop/products/SugarFreeStrawberryCake.jpg?v=1673387601&width=360",
  title: "Keto Strawberry Cake 8”" ,
  description:
    "Decadent layers of cream cheese, cottage cheese, whipped cream,...",
  price: 78.99,
},
{
  id: "a73",
  img: "https://www.ketodelia.ca/cdn/shop/products/WalnutMeringueSugarFreeCake.jpg?v=1673387676&width=360",
  title: "Keto Walnut Meringue Cake 8”" ,
  description:
    "Re-imagined with healthy almond flour and almonds, this Keto...",
  price: 78.99,
},
{
  id: "a74",
  img: "https://www.ketodelia.ca/cdn/shop/products/KetoPeanutButterChocolatePie.jpg?v=1673387792&width=360",
  title: "Keto Peanut Butter And Chocolate Pie" ,
  description:
    "You are just going to love this creamy peanut butter pie with...",
  price: 65.99,
},


]

  
  
  return (
    <Fragment>
<div className={classes.header}><h6 style={{marginTop:"2%"}}>Order for pickup or delivery in Toronto and nearby. Delivery minimum $25, ETA 45 mins-1.5 hrs, depending on location. Orders outside of Toronto delivered next day.</h6></div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Appetizers</h3></div>
        
          <div className={classes.verticalBox}>
  {
    menuPage1.map((data1)=>{
      return (
        <Link to={`/${data1.id}`} style={{textDecoration:"none"}}>
        <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data1.title}</h6>
          <p>{data1.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data1.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data1.id,
            imgUrl:data1.img,
            title:data1.title,
            price:data1.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
       
          <img src={data1.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
  </Link>
      )
    })
  }
  
    </div>
  <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Breakfast</h3> </div>
  
  <div className={classes.verticalBox}>
  {
    menuPage.map((data)=>{
      return (
        <Link to={`/${data.id}`} style={{textDecoration:"none"}}> 
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data.title}</h6>
          <p>{data.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data.id,
            imgUrl:data.img,
            title:data.title,
            price:data.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
         <img src={data.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Salad</h3> </div>
  <div className={classes.verticalBox}>
  {
    menuPage2.map((data2)=>{
      return (
        <Link to={`/${data2.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data2.title}</h6>
          <p>{data2.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data2.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data2.id,
            imgUrl:data2.img,
            title:data2.title,
            price:data2.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data2.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Soup</h3> </div>
  <div className={classes.verticalBox}>
  {
    soupPage.map((data3)=>{
      return (
        
  <div className={classes.box}>
    <div className={classes.card} style={{textDecoration:"none"}}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data3.title}</h6>
          <p>{data3.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data3.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data3.id,
            imgUrl:data3.img,
            title:data3.title,
            price:data3.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        <Link to={`/${data3.id}`} style={{textDecoration:"none"}}>
          <img src={data3.img} alt="Image" /></Link>
        </div>
        </div>
      </div>
  </div>

      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Pizzas</h3> </div>
  <div className={classes.verticalBox}>
  {
    ketoPizza.map((data4)=>{
      return (
        <Link to={`/${data4.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data4.title}</h6>
          <p>{data4.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data4.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data4.id,
            imgUrl:data4.img,
            title:data4.title,
            price:data4.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data4.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Burgers</h3> </div>
  <div className={classes.verticalBox}>
  {
    ketoBurger.map((data5)=>{
      return (
        <Link to={`/${data5.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data5.title}</h6>
          <p>{data5.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data5.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data5.id,
            imgUrl:data5.img,
            title:data5.title,
            price:data5.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data5.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Pastas</h3> </div>
  <div className={classes.verticalBox}>
  {
    ketoPasta.map((data6)=>{
      return (
        <Link to={`/${data6.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data6.title}</h6>
          <p>{data6.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data6.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data6.id,
            imgUrl:data6.img,
            title:data6.title,
            price:data6.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data6.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Mains</h3> </div>
  <div className={classes.verticalBox}>
  {
    ketoMains.map((data7)=>{
      return (
        <Link to={`/${data7.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data7.title}</h6>
          <p>{data7.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data7.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data7.id,
            imgUrl:data7.img,
            title:data7.title,
            price:data7.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data7.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Sides</h3> </div>
  <div className={classes.verticalBox}>
  {
    ketoSides.map((data8)=>{
      return (
        <Link to={`/${data8.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data8.title}</h6>
          <p>{data8.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data8.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data8.id,
            imgUrl:data8.img,
            title:data8.title,
            price:data8.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data8.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
    
    </div>
    <div className={classes.text}><h3 style={{color:'#3D081B'}}>Sugar Free Desserts</h3> </div>
  <div className={classes.verticalBox}>
  {
    SugarFreeDesserts.map((data9)=>{
      return (
        <Link to={`/${data9.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data9.title}</h6>
          <p>{data9.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data9.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data9.id,
            imgUrl:data9.img,
            title:data9.title,
            price:data9.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data9.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
  </div>
  <div className={classes.text}><h3 style={{color:'#3D081B'}}>Keto Cupcakes</h3> </div>
  <div className={classes.verticalBox}>
  {
     KetoCupcakes.map((data10)=>{
      return (
        <Link to={`/${data10.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data10.title}</h6>
          <p>{data10.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data10.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data10.id,
            imgUrl:data10.img,
            title:data10.title,
            price:data10.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data10.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
  </div>
  <div className={classes.text}><h3 style={{color:'#3D081B'}}>Ready To Cook</h3> </div>
  <div className={classes.verticalBox}>
  {
     ReadyToCook.map((data11)=>{
      return (
        <Link to={`/${data11.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data11.title}</h6>
          <p>{data11.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data11.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data11.id,
            imgUrl:data11.img,
            title:data11.title,
            price:data11.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data11.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
  </div>
  <div className={classes.text}><h3 style={{color:'#3D081B'}}>Ready To Cook</h3> </div>
  <div className={classes.verticalBox}>
  {
     KetoCakes.map((data12)=>{
      return (
        <Link to={`/${data12.id}`} style={{textDecoration:"none"}}>
  <div className={classes.box}>
    <div className={classes.card}>
      <div className={classes.horizontalLayout}>
        <div className={classes.textSide}>
          <h6>{data12.title}</h6>
          <p>{data12.description}</p>
          <span className="review-rating">★★★★★(4)</span>
          <div>${data12.price}</div>
          <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:data12.id,
            imgUrl:data12.img,
            title:data12.title,
            price:data12.price,
            quantity:1,

          }))}}>
              Add to Cart
            </button>
        </div>
        <div className={classes.imageSide}>
        
          <img src={data12.img} alt="Image" />
        </div>
        </div>
      </div>
  </div>
</Link>
      )
    })
  }
  </div>
    </Fragment>
  )
}

export default Menu;

    