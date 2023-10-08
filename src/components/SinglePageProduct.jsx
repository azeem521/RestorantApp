import React, { useState } from "react";
import classes from "./SinglePageProduct.module.css";
import { Link, useParams } from "react-router-dom";
import { cartAction } from "../store/CartSlice";
import { useDispatch } from "react-redux";
function SinglePageProduct() {
  const dispatch=useDispatch();

  
  const singleProduct1 = [
    {
      id: "a26",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoGrilledSalmonPizza.png?v=1673298254&width=360",
      title: "Grilled Salmon Keto Pizza",
      description:
        "Almond crust, Atlantic salmon, organic red onion, red pepper...",
      price: 12.99,
    },
    {
      id: "a22",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356",
      title: "Keto Chicken Soup",
      description:
        "Our Keto Chicken Soup is made with homemade organic farmers chicken and cauliflower rice...",
      price: 15.99,
    },
    {
      id: "a39",
      img: "https://cdn.shopify.com/s/files/1/0665/2110/4628/products/KetoChickenTenders.jpg?v=1673029425&width=360",
      title: "Air Fried Keto Chicken Tenders",
      description:
        "Air fried chicken tenderloins tossed in almond flour and spices with your choice of side and keto dressing. ...",
      price: 23.99,
    },
    {
      id: "a12",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoBagelsCheddarJalapeno.jpg?v=1679087800&width=360",
      title: "Keto Bagel Cheddar Jalapeno - 4 pack",
      description:
        "Our cheddar jalapeno bagels are made of almond flour, mozzarella...",
      price: 23.99,
    },
    
  ];
  const singleProduct = [
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
 
    {
      id: "a28",
      img: "https://www.ketodelia.ca/cdn/shop/products/ketochickensoup.jpg?v=1673029356",
      title: "Keto Chicken Soup",
      description:
        "Our Keto Chicken Soup is made with homemade organic farmers chicken and cauliflower rice...",
      price: 15.99,
    },
 
     
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
    
      
    {
      id: "a64",
      img: "https://www.ketodelia.ca/cdn/shop/products/GardenVeggieKetoPizza-ReadytoCook.jpg?v=1673029450&width=360",
      title: "Garden Veggie Keto Pizza 9" ,
      description:
        "Almond crust, organic peppers, mushrooms, tomatoes, ..",
      price: 17.99,
    },
    {
      id: "a65",
      img: "https://www.ketodelia.ca/cdn/shop/products/PepperoniKetoPizza-ReadytoCook.jpg?v=1673029453&width=360",
      title: "Pepperoni Keto Pizza 9" ,
      description:
        "Almond crust, turkey pep...",
      price: 18.99,
    },
    {
      id: "a67",
      img: "https://www.ketodelia.ca/cdn/shop/products/LocalGrilledChickenKetoPizza-ReaytoCook.jpg?v=1673029457&width=360",
      title: "Local Free Range Grilled Chicken Pizza 9" ,
      description:
        "Almond crust, organic farm chicken, ...",
      price: 20.99,
    },
    {
      id: "a68",
      img: "https://www.ketodelia.ca/cdn/shop/products/KetoPestoPizza-9inches.jpg?v=1673029461&width=360",
      title: "Keto Pesto Pizza 9" ,
      description:
        "Almond crust, organic peppers, onions, spinach, goat ...",
      price: 18.99,
    },
    {
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
    {
      id: "a100",
      img: "https://cdn.shopify.com/s/files/1/0665/2110/4628/products/ValentinesMiniKetoCheesecake.jpg?v=1675898054&width=360",
      title: " Mini Heart-Shaped Keto Cheesecake: Perfect for Valentine's Day!",
      description:
        "Indulge in this Valentine's Day...",
      price: 40.99,
    },
    {
      id: "a101",
      img: "https://cdn.shopify.com/s/files/1/0665/2110/4628/products/OrganicTea.jpg?v=1673029444&width=360",
      title: "  Organic Tea",
      description:
        "Indulge in this Valentine's DayElevate your tea time with our eco-friendly, organic blend....",
      price: 9.99,
    },
{
 id: "a102",
      img: "https://cdn.shopify.com/s/files/1/0665/2110/4628/products/Dairy-freeKetoCoffeeCake.jpg?v=1673029345&width=360",
      title: "Keto Coffee Cake",
      description:
        " A delicious and rich coffee cake keto friendly and sugar-free....",
      price: 11.99,
    }, 
{
id:"a103",
img:"https://cdn.shopify.com/s/files/1/0665/2110/4628/products/KetoChocolateCake.jpg?v=1673387538&width=360",
title:"Keto Chocolate Cake 8”",
description:
        " The perfect treat for chocoholics, this Keto Chocolate Cake ....",
      price: 79.99,
    }, 
    {
      id: "a105",
      img: "https://www.ketodelia.ca/cdn/shop/products/9RH9aAXDbuwgKAweNR1AVCoRShvRrZjB.png?v=1669955876&width=493",
      title: "  Ketodelia Restaurant Gift Card",
      description:
        "Introducing our versatile Gift Cards,...",
      price: 30.99,
    },
  ];
   const item = useParams()
   console.log(item.id)
    const product =  singleProduct.filter((single)=>{
    return (
        single.id===item.id
    )
    })[0];
    console.log(product)

  return (
    <section>
    <Link to="/menu">
      <div className={classes.back}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "#8c8980", transform: "msFilter" }}
        >
          <path d="M12.707 17.293 8.414 13H18v-2H8.414l4.293-4.293-1.414-1.414L4.586 12l6.707 6.707z"></path>
        </svg>{" "}
        Back to Menu
      </div></Link>

      <div className={classes.appContainer}>
        <div className={classes.cardContainer}>
          <div className={classes.imageCard}>
            <div className={classes.imageContainer}>
            <div className={classes.mini}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "#3D081B", transform: "msFilter" }}
                >
                  <path d="M6 9h8v2H6z"></path>
                  <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                </svg>
              </div>
              <img
                src={product.img}
                alt="Image Card"
                className={classes.cardImage}
              />
             
            </div>
          </div>
        </div>

        <div className={classes.cardContainer1}>
          <div className={classes.textCard}>
            <h6>KETODELIA RESTAURANT</h6>
            <h2>{product.title} </h2>
            {/* <h2>Cauliflower Bites</h2> */}
            <p>${product.price}</p>
            <span className="" style={{ color: "grey", fontSize: "large" }}>
              ★★★★★(4)
            </span>
            <h6>Choose your sauce</h6>
            
            <div className={classes.btn1}>
              <a href="#" className={classes.btn2}>
                Ranch
              </a>
              <a href="#" className={classes.btn2}>
                Marinara
              </a>
              <a href="#" className={classes.btn2}>
                Texas BBQ
              </a>
              <a href="#" className={classes.btn2}>
                Caesar
              </a>
              <a href="#" className={classes.btn2}>
                Blue Cheese
              </a>
              <a href="#" className={classes.btn2}>
                {" "}
                No Sauce
              </a>
            </div>
            <div>
              <h6>Quantity</h6>
              <div className={classes.btnplus}>
                <a href="#" className={classes.btn3}>
                  {" "}
                  - 1 +{" "}
                </a>{" "}
              </div>
            </div>
            <div className={classes.mainButton}>
            <button type='button' className={classes.btn} onClick={(e)=>{e.stopPropagation() ;e.preventDefault();dispatch(cartAction.addToCartItem({
            id:product.id,
            imgUrl:product.img,
            title:product.title,
            price:product.price,
            quantity:1,

          }))}}> Add To Cart</button>
            </div>
          </div>
          <div className={classes.textCard}>
            <p>
           {product.description}
            </p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#3D081B", transform: "msFilter" }}
              >
                <path d="M12 22a9.83 9.83 0 0 1-3.26-.55 2.23 2.23 0 0 0-1.7.19 3.51 3.51 0 0 1-2.47.24 3.55 3.55 0 0 1-2.45-2.45A3.51 3.51 0 0 1 2.36 17a2.23 2.23 0 0 0 .19-1.7 10.07 10.07 0 0 1 0-6.53 9.87 9.87 0 0 1 6.18-6.23 10.07 10.07 0 0 1 6.53 0A2.23 2.23 0 0 0 17 2.36a3.51 3.51 0 0 1 2.47-.24 3.55 3.55 0 0 1 2.45 2.45A3.51 3.51 0 0 1 21.64 7a2.23 2.23 0 0 0-.19 1.7 10.07 10.07 0 0 1 0 6.53 9.87 9.87 0 0 1-6.19 6.19A10.33 10.33 0 0 1 12 22zm-3.84-2.64a3.91 3.91 0 0 1 1.23.2 8 8 0 0 0 5.24 0 7.84 7.84 0 0 0 4.94-4.93 8 8 0 0 0 0-5.24 4.19 4.19 0 0 1 .29-3.23 1.53 1.53 0 0 0 .09-1.08 1.49 1.49 0 0 0-1-1 1.53 1.53 0 0 0-1.08.09 4.19 4.19 0 0 1-3.23.29 8 8 0 0 0-5.24 0 7.84 7.84 0 0 0-4.97 4.91 8 8 0 0 0 0 5.24 4.19 4.19 0 0 1-.29 3.23 1.53 1.53 0 0 0-.09 1.08 1.49 1.49 0 0 0 1 1 1.53 1.53 0 0 0 1.08-.09 4.47 4.47 0 0 1 2.03-.47z"></path>
                <path d="M8 12H6a6 6 0 0 1 6-6v2a4 4 0 0 0-4 4z"></path>
              </svg>{" "}
              Ingredinent
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#3D081B", transform: "msFilter" }}
              >
                <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
              </svg>
              {"  "}
              Nutritional Info
            </div>
            <div>
              {"  "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: "#3D081B", transform: "msFilter" }}
              >
                <path d="M5.5 15a3.51 3.51 0 0 0 2.36-.93l6.26 3.58a3.06 3.06 0 0 0-.12.85 3.53 3.53 0 1 0 1.14-2.57l-6.26-3.58a2.74 2.74 0 0 0 .12-.76l6.15-3.52A3.49 3.49 0 1 0 14 5.5a3.35 3.35 0 0 0 .12.85L8.43 9.6A3.5 3.5 0 1 0 5.5 15zm12 2a1.5 1.5 0 1 1-1.5 1.5 1.5 1.5 0 0 1 1.5-1.5zm0-13A1.5 1.5 0 1 1 16 5.5 1.5 1.5 0 0 1 17.5 4zm-12 6A1.5 1.5 0 1 1 4 11.5 1.5 1.5 0 0 1 5.5 10z"></path>
              </svg>
              {"  "}
              Share
            </div>
          </div>
        </div>
      </div>

      <h3 className={classes.mostLoved}>You may also like</h3>
      <div className={classes.card1}>
        {singleProduct1.map((data) => {
          return (
            
            <div
              className="card"
              style={{
                width: "15rem",
                marginRight: "15px",
                border: "1px solid skyblue",
              }}
            >
            <Link to={`/${data.id}`} style={{textDecoration:"none"}}>
              <img
                src={data.img}
                className={`card-img-top ${classes.imgTop}`}
                alt="..."
              />
              </Link>
              <div className="card-body " style={{ textAlign: "left" }}>
                <h5 className="card-title" style={{ fontSize: "18px" }}>
                  {data.title}
                </h5>
                <p className="card-text" style={{ fontSize: "12px" }}>
                  {data.description}
                </p>
                <span className="review-rating">★★★★★(4)</span>
                <div>{data.price}</div>
              </div>
            </div>
          
          );
        })}
      </div>
     
      <div className={classes.star} style={{ display: 'flex', alignItems: 'center' }}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "#8c8980", transform: "msFilter" }}
  >
    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "#8c8980", transform: "msFilter" }}
  >
    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
  </svg>{" "}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "#8c8980", transform: "msFilter" }}
  >
    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "#8c8980", transform: "msFilter" }}
  >
    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
  </svg>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    style={{ fill: "#8c8980", transform: "msFilter" }}
  >
    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
  </svg>{" "}
  4 Reviews{" "}
  <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "black", transform: "msFilter" }}
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>{""}
  <button
    style={{
      background: 'transparent',
      border:" 1px solid grey",
      cursor: 'pointer',
      marginLeft: 'auto', // Pushes the button to the right
      display: 'flex',
      alignItems: 'center',
      boxShadow:"0 4px 8px rgba(0, 0, 0, 0.2)",
    }}
  >
    
    Write Review
  </button>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ fill: 'black', transform: 'msFilter' }}
    >
      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
    </svg>
</div>


      <div className={classes.card2}>
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid grey",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="card-body " style={{ textAlign: "left" }}>
            <h3>Keven D.</h3>
            <span className="review-rating">★★★★☆</span>
            <p className="card-text" style={{ fontSize: "12px" }}>
              Excellent With ranch sauce, it is excellent. I would not say no to
              more spicy though !
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid grey",
          }}
        >
          <div className="card-body " style={{ textAlign: "left" }}>
            <h3>Keven D.</h3>
            <span className="review-rating">★★★★☆</span>

            <p className="card-text" style={{ fontSize: "12px" }}>
              Perfect Perfect as usual, always a go to when I come in Toronto
              for work !
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid grey",
          }}
        >
          <div className="card-body " style={{ textAlign: "left" }}>
            <h3>Katiya.</h3>
            <span className="review-rating">★★★★☆</span>

            <p className="card-text" style={{ fontSize: "12px" }}>
              Full of flavor Full of flavor and a great serving size. Made you
              feel like you were being naughty.
            </p>
          </div>
        </div>
        <div
          className="card"
          style={{
            width: "15rem",
            marginRight: "15px",
            border: "1px solid grey",
          }}
        >
          <div className="card-body " style={{ textAlign: "left" }}>
            <h3>Lila</h3>
            <span className="review-rating">★★★★☆</span>

            <p className="card-text" style={{ fontSize: "12px" }}>
              Thank you Ketodelia for the your Air Fried Buffalo Cauliflower &
              Blue cheese dip. It could have been better crispier, however
              delicious. Next time I will reheat it in my Air Fryer. Even though
              we're not cauliflower lovers, we loved it & enjoyed it
              tremendously. Looking forward to my next order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SinglePageProduct;
