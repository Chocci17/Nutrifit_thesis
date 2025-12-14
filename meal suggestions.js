ï»¿const mealPlans = [
      // WEIGHT LOSS MEALS
      {
        title: "Lugaw with Itlog (Rice Porridge with Egg)",
        category: "breakfast",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Filipino rice porridge with boiled egg and vegetables - filling, low-cost, and under 200 calories.",
        image: "../Picture/Lugaw with Itlog.jpg",
        prepTime: "15 min",
        calories: "195",
        protein: "10g",
        servings: "1",
        ingredients: [
          "1/4 cup rice (bigas)",
          "2 cups water",
          "1 boiled egg",
          "1 clove garlic, minced",
          "1 small onion, diced",
          "Ginger slices (luya)",
          "Fish sauce (patis) to taste",
          "Green onions for garnish",
          "Salt and pepper"
        ],
        steps: [
          "SautÃƒÂ© garlic, onion, and ginger in a pot",
          "Add rice and water, bring to boil",
          "Simmer for 20-30 minutes, stirring occasionally until thick",
          "Season with fish sauce, salt, and pepper",
          "Serve hot, top with sliced boiled egg",
          "Garnish with green onions"
        ],
        tips: [
          "Rice porridge keeps you full for hours",
          "Very budget-friendly - costs less than Ã¢â€šÂ±30 per serving",
          "Add more water if you prefer thinner consistency",
          "Perfect comfort food that supports weight loss"
        ]
      },
      {
        title: "Sinigang na Isda (Tamarind Fish Soup)",
        category: "lunch",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Tangy Filipino soup with fish and vegetables - low-calorie, high protein, and very affordable.",
        image: "../Picture/sinigang na isda.webp",
        prepTime: "25 min",
        calories: "250",
        protein: "28g",
        servings: "2",
        ingredients: [
          "500g fish (bangus or tilapia), sliced",
          "1 pack sinigang mix (sampalok)",
          "2 cups kangkong (water spinach)",
          "1 tomato, quartered",
          "1 onion, sliced",
          "2 green chili (siling haba)",
          "1 radish (labanos), sliced",
          "Fish sauce (patis) to taste",
          "4 cups water"
        ],
        steps: [
          "Boil water in a pot, add tomatoes and onions",
          "Add radish and simmer for 5 minutes",
          "Add fish and cook for 7-10 minutes",
          "Add sinigang mix, stir until dissolved",
          "Add kangkong and green chili, cook 2 minutes",
          "Season with fish sauce, serve hot with small rice portion"
        ],
        tips: [
          "Very low in calories but filling due to vegetables",
          "Fish is affordable protein source in the Philippines",
          "Costs around Ã¢â€šÂ±100-150 for 2 servings",
          "The sourness helps with digestion and fat metabolism"
        ]
      },

      // MUSCLE GAIN MEALS
      {
        title: "Beef Tapa with Garlic Rice and Eggs",
        category: "breakfast",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Classic Filipino breakfast with marinated beef, fried rice, and eggs - high protein for muscle building.",
        image: "../Picture/filipino-beef-tapa-tapsilog-0.jpg",
        prepTime: "20 min + marinating",
        calories: "620",
        protein: "42g",
        servings: "1",
        ingredients: [
          "200g beef sirloin, thinly sliced",
          "3 tablespoons soy sauce",
          "1 tablespoon calamansi or lemon juice",
          "3 cloves garlic, minced",
          "1 tablespoon brown sugar",
          "2 cups cooked rice",
          "2 whole eggs",
          "Cooking oil",
          "Black pepper",
          "Sliced tomatoes and cucumber"
        ],
        steps: [
          "Marinate beef in soy sauce, calamansi, garlic, sugar, and pepper for 2+ hours",
          "Fry beef slices in hot oil until caramelized and tender",
          "Fry eggs sunny-side up or over-easy",
          "Fry rice with garlic until crispy",
          "Serve beef tapa with garlic rice and eggs",
          "Add sliced tomatoes and cucumber on the side"
        ],
        tips: [
          "Beef provides complete protein and creatine for muscle gains",
          "Costs around Ã¢â€šÂ±150-200 per serving",
          "Perfect post-workout meal with high protein and carbs",
          "Can substitute with pork or chicken for budget option"
        ]
      },
      {
        title: "Adobong Manok with Extra Rice (Chicken Adobo)",
        category: "lunch",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Filipino chicken adobo with generous rice serving - high protein, flavorful, and affordable.",
        image: "../Picture/Chicken-Adobo-RLM-Article-Image.jpg",
        prepTime: "40 min",
        calories: "680",
        protein: "48g",
        servings: "2",
        ingredients: [
          "1kg chicken (thighs and drumsticks)",
          "1/2 cup soy sauce",
          "1/2 cup vinegar",
          "1 head garlic, crushed",
          "3 bay leaves (dahon ng laurel)",
          "1 tablespoon whole peppercorns",
          "2 tablespoons brown sugar",
          "1 cup water",
          "2 tablespoons cooking oil",
          "3 cups cooked white rice per serving"
        ],
        steps: [
          "Marinate chicken in soy sauce, vinegar, garlic, bay leaves, peppercorns for 30 min",
          "Heat oil in pot, sautÃƒÂ© garlic from marinade",
          "Add chicken and brown all sides",
          "Pour marinade and water, bring to boil",
          "Simmer for 30-40 minutes until chicken is tender",
          "Add sugar to balance flavors",
          "Serve with generous portions of rice"
        ],
        tips: [
          "Chicken thighs provide more calories and protein than breast",
          "Very affordable - costs around Ã¢â€šÂ±200-250 for 2 servings",
          "Perfect for meal prep - tastes better the next day",
          "High protein and carbs support muscle growth"
        ]
      },

      // WEIGHT GAIN MEALS
      {
        title: "Tapsilog - Beef Tapa, Sinangag, Itlog",
        category: "breakfast",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Ultimate Filipino breakfast combo - beef tapa, fried rice, and eggs for maximum calories.",
        image: "../food name/Tapsilog.webp",
        prepTime: "25 min",
        calories: "820",
        protein: "48g",
        servings: "1",
        ingredients: [
          "250g beef tapa (marinated beef)",
          "3 cups cooked rice",
          "3 eggs",
          "5 cloves garlic, minced",
          "3 tablespoons cooking oil",
          "Soy sauce for tapa marinade",
          "Calamansi or lemon juice",
          "Sliced tomatoes and cucumber",
          "Vinegar with chili for dipping"
        ],
        steps: [
          "Marinate beef in soy sauce, calamansi, garlic, and pepper",
          "Fry beef tapa until caramelized and tender",
          "Fry eggs sunny-side up with crispy edges",
          "Fry rice with lots of garlic until golden",
          "Plate everything together",
          "Serve with tomatoes, cucumber, and vinegar dip"
        ],
        tips: [
          "High-calorie breakfast perfect for bulking",
          "Costs around Ã¢â€šÂ±150-180 per serving",
          "Can substitute with pork (tocilog) or chicken (chicksilog)",
          "Add extra rice for more calories"
        ]
      },
      {
        title: "Pork Sisig with Extra Rice and Egg",
        category: "dinner",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Sizzling pork sisig with egg and generous rice - calorie-dense Filipino favorite.",
        image: "../Picture/pork sisig with rice.jpg",
        prepTime: "40 min",
        calories: "880",
        protein: "52g",
        servings: "2",
        ingredients: [
          "500g pork belly or pork mask, boiled and grilled",
          "2 eggs",
          "1 large onion, chopped",
          "5 cloves garlic, minced",
          "3 green chili (siling haba), chopped",
          "3 tablespoons soy sauce",
          "3 tablespoons calamansi or lemon juice",
          "Mayonnaise (optional)",
          "Salt, pepper, and chili flakes",
          "4 cups cooked white rice"
        ],
        steps: [
          "Boil pork until tender, then grill until crispy",
          "Chop grilled pork into small pieces",
          "SautÃƒÂ© garlic and onion in a hot pan",
          "Add chopped pork, soy sauce, and calamansi",
          "Add green chili and season with pepper",
          "Top with raw egg, serve on sizzling plate",
          "Serve with generous portions of rice"
        ],
        tips: [
          "Very high in calories and protein for weight gain",
          "Costs around Ã¢â€šÂ±200-250 for 2 servings",
          "Can use leftover lechon (roasted pig) for easier prep",
          "Perfect for those who need extra calories to bulk up"
        ]
      },

      // PHYSICALLY FIT / BALANCED MEALS
      {
        title: "Grilled Bangus (Milkfish) with Brown Rice",
        category: "dinner",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Grilled milkfish with vegetables and brown rice - balanced Filipino meal for active lifestyles.",
        image: "../food name/grilledbangus.webp",
        prepTime: "30 min",
        calories: "480",
        protein: "36g",
        servings: "1",
        ingredients: [
          "1 medium bangus (milkfish), cleaned and butterflied",
          "1.5 cups cooked brown rice",
          "2 cups mixed vegetables (sitaw, carrots, cabbage)",
          "3 cloves garlic, minced",
          "Calamansi or lemon juice",
          "Soy sauce for marinade",
          "1 tablespoon olive oil",
          "Salt and pepper",
          "Sliced tomatoes"
        ],
        steps: [
          "Marinate bangus in soy sauce, calamansi, garlic for 30 minutes",
          "Grill bangus until skin is crispy and flesh is cooked through",
          "Steam or stir-fry mixed vegetables",
          "Cook brown rice according to package",
          "Plate fish with brown rice and vegetables",
          "Garnish with fresh calamansi and tomatoes"
        ],
        tips: [
          "Bangus is affordable fish rich in omega-3 fatty acids",
          "Costs around Ã¢â€šÂ±120-150 per serving",
          "Brown rice provides more fiber than white rice",
          "Perfect balanced meal for maintaining fitness"
        ]
      },
      {
        title: "Chicken Adobo with Vegetables",
        category: "lunch",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Classic chicken adobo with added vegetables - protein-rich, balanced, and budget-friendly.",
        image: "../Picture/chicken adobo with vege.jpg",
        prepTime: "40 min",
        calories: "450",
        protein: "42g",
        servings: "3",
        ingredients: [
          "800g chicken breast and thighs, mixed",
          "1/2 cup soy sauce",
          "1/2 cup vinegar",
          "1 head garlic, crushed",
          "3 bay leaves",
          "1 tablespoon peppercorns",
          "1 cup green beans (sitaw)",
          "1 cup cabbage, chopped",
          "2 potatoes, cubed (optional)",
          "2 tablespoons cooking oil",
          "2 cups cooked brown or white rice per serving"
        ],
        steps: [
          "Marinate chicken in soy sauce, vinegar, garlic, bay leaves, peppercorns",
          "Heat oil and brown chicken pieces",
          "Add marinade and water, simmer 25-30 minutes",
          "Add potatoes and cook 10 minutes",
          "Add green beans and cabbage, cook 5 minutes",
          "Serve with rice"
        ],
        tips: [
          "Adding vegetables increases fiber and nutrients",
          "Very affordable - around Ã¢â€šÂ±180-220 for 3 servings",
          "Perfect balance of protein, carbs, and vegetables",
          "Great for active individuals and athletes"
        ]
      },
      {
        title: "Grilled Tilapia with Ensaladang Talong",
        category: "lunch",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Grilled tilapia with eggplant salad - light, protein-rich, and very affordable Filipino meal.",
        image: "../Picture/grilled tilapia with ensaladang talong.png",
        prepTime: "25 min",
        calories: "380",
        protein: "42g",
        servings: "1",
        ingredients: [
          "2 medium tilapia, cleaned",
          "2 large eggplants (talong)",
          "2 tomatoes, diced",
          "1 onion, sliced",
          "2 tablespoons fish sauce (patis)",
          "Calamansi or lemon juice",
          "Salt and pepper",
          "1.5 cups cooked brown rice",
          "Cooking oil for grilling"
        ],
        steps: [
          "Season tilapia with salt and pepper",
          "Grill tilapia until cooked through and slightly charred",
          "Grill eggplants until skin is charred and flesh is soft",
          "Peel eggplants and mash flesh",
          "Mix eggplant with tomatoes, onions, fish sauce, and calamansi",
          "Serve grilled tilapia with ensalada and brown rice"
        ],
        tips: [
          "Tilapia is one of the most affordable fish in Philippines",
          "Costs only Ã¢â€šÂ±80-100 per serving",
          "High protein, low fat - perfect for fitness goals",
          "Eggplant salad adds fiber and vitamins"
        ]
      },

      // SNACKS
      {
        title: "Boiled Kamote (Sweet Potato)",
        category: "snack",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Simple boiled sweet potato - natural energy, fiber-rich, and costs only Ã¢â€šÂ±10-15.",
        image: "../food name/kamoteque.jpg",
        prepTime: "20 min",
        calories: "180",
        protein: "4g",
        servings: "1",
        ingredients: [
          "2 medium sweet potatoes (kamote)",
          "Water for boiling",
          "Pinch of salt (optional)"
        ],
        steps: [
          "Wash sweet potatoes thoroughly",
          "Place in pot and cover with water",
          "Add pinch of salt if desired",
          "Boil for 15-20 minutes until tender",
          "Test with fork - should pierce easily",
          "Drain and let cool slightly",
          "Peel and eat warm"
        ],
        tips: [
          "Extremely budget-friendly - Ã¢â€šÂ±10-15 per serving",
          "Provides slow-release energy for workouts",
          "High in fiber, vitamins, and antioxidants",
          "Perfect pre-workout or afternoon snack"
        ]
      },
      {
        title: "Boiled Eggs (Itlog na Pula)",
        category: "snack",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Simple boiled eggs - pure protein, portable, and costs only Ã¢â€šÂ±30-40 for 3 eggs.",
        image: "../food name/itlog na pula.jpg",
        prepTime: "12 min",
        calories: "210",
        protein: "18g",
        servings: "1",
        ingredients: [
          "3 large eggs",
          "Water for boiling",
          "Salt and pepper to taste",
          "Optional: vinegar for dipping"
        ],
        steps: [
          "Place eggs in pot, cover with cold water",
          "Bring water to rolling boil",
          "Once boiling, cover and remove from heat",
          "Let sit for 10 minutes for hard-boiled",
          "Transfer to ice bath to stop cooking",
          "Peel and season with salt and pepper"
        ],
        tips: [
          "Extremely affordable protein source - Ã¢â€šÂ±10-12 per egg",
          "Perfect portable snack for muscle building",
          "Eat 2-3 times daily for extra protein",
          "Can prepare batch of 10-12 eggs for the week"
        ]
      },
      {
        title: "Saging na Saba (Boiled Banana)",
        category: "snack",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Boiled plantain banana - natural sweetness, filling fiber, costs only Ã¢â€šÂ±10-15.",
        image: "../Picture/saing na saba.jpg",
        prepTime: "15 min",
        calories: "140",
        protein: "2g",
        servings: "1",
        ingredients: [
          "2 saba bananas (plantain)",
          "Water for boiling",
          "Optional: pinch of salt"
        ],
        steps: [
          "Place unpeeled saba bananas in pot",
          "Cover with water",
          "Boil for 12-15 minutes until tender",
          "Drain and let cool slightly",
          "Peel and eat warm or cold"
        ],
        tips: [
          "Very affordable - Ã¢â€šÂ±5-8 per banana",
          "High in fiber to keep you full",
          "Natural sweetness satisfies sugar cravings",
          "Perfect healthy snack for weight loss"
        ]
      },

      // Additional WEIGHT LOSS MEALS
      {
        title: "Ginisang Monggo (SautÃƒÂ©ed Mung Bean Soup)",
        category: "lunch",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Filipino mung bean soup with vegetables - high fiber, filling, and costs less than Ã¢â€šÂ±50 per serving.",
        image: "https://images.pexels.com/photos/5638527/pexels-photo-5638527.jpeg?auto=compress&cs=tinysrgb&w=800",
        prepTime: "30 min",
        calories: "220",
        protein: "14g",
        servings: "2",
        ingredients: [
          "1 cup mung beans (monggo), soaked",
          "2 cloves garlic, minced",
          "1 onion, chopped",
          "1 tomato, diced",
          "2 cups malunggay (moringa) or spinach",
          "1 cup ampalaya (bitter gourd), sliced (optional)",
          "1 tablespoon cooking oil",
          "Fish sauce (patis) to taste",
          "4 cups water",
          "Salt and pepper"
        ],
        steps: [
          "Boil mung beans in water until soft (20-25 minutes)",
          "In another pan, sautÃƒÂ© garlic, onion, and tomato",
          "Add boiled monggo to the sautÃƒÂ©ed mixture",
          "Add malunggay or spinach and ampalaya",
          "Season with fish sauce, salt, and pepper",
          "Simmer for 5 minutes, serve hot with small rice portion"
        ],
        tips: [
          "Mung beans are very affordable and nutrient-dense",
          "High in fiber to keep you full longer",
          "Can add small amount of dried fish (dilis) for extra protein",
          "Perfect for weight loss - filling but low in calories"
        ]
      },
      {
        title: "Pandesal with Peanut Butter",
        category: "breakfast",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Classic Filipino bread roll with peanut butter - affordable breakfast with protein and carbs.",
        image: "../Picture/pandesal.jpg",
        prepTime: "5 min",
        calories: "320",
        protein: "12g",
        servings: "1",
        ingredients: [
          "4 pieces pandesal (Filipino bread rolls)",
          "3 tablespoons peanut butter",
          "1 ripe banana, sliced (optional)",
          "Coffee or hot chocolate"
        ],
        steps: [
          "Slice pandesal open or in half",
          "Spread peanut butter generously inside",
          "Add banana slices if desired",
          "Serve with hot coffee or hot chocolate"
        ],
        tips: [
          "Very affordable - pandesal costs Ã¢â€šÂ±2-3 per piece",
          "Peanut butter adds protein and healthy fats",
          "Classic Filipino breakfast loved by all",
          "Perfect quick breakfast before work or school"
        ]
      },
      {
        title: "Pakbet (Pinakbet) - Vegetable Medley",
        category: "lunch",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Traditional Filipino vegetable dish with bagoong - very low calorie, high fiber, budget-friendly.",
        image: "../Picture/pakbet.jpg",
        prepTime: "20 min",
        calories: "180",
        protein: "8g",
        servings: "2",
        ingredients: [
          "1 cup kalabasa (squash), cubed",
          "1 cup sitaw (string beans), cut into 2-inch pieces",
          "1 cup talong (eggplant), sliced",
          "1 cup okra, sliced",
          "2 tomatoes, quartered",
          "3 cloves garlic, minced",
          "1 onion, chopped",
          "2 tablespoons bagoong (shrimp paste)",
          "1 cup water",
          "1 tablespoon cooking oil"
        ],
        steps: [
          "SautÃƒÂ© garlic, onion, and tomatoes in oil",
          "Add bagoong and stir for 1 minute",
          "Add kalabasa and water, simmer for 5 minutes",
          "Add sitaw, talong, and okra",
          "Cover and simmer until vegetables are tender (10 minutes)",
          "Serve hot with small portion of rice"
        ],
        tips: [
          "Very affordable - vegetables cost around Ã¢â€šÂ±80-100 total",
          "Low in calories but very filling due to fiber",
          "Can add small amount of pork or shrimp for protein",
          "Perfect for weight loss - nutrient-dense and satisfying"
        ]
      },
      {
        title: "Chicken Tinola with Extra Chicken",
        category: "lunch",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Filipino ginger chicken soup with extra protein - warm, comforting, and muscle-building.",
        image: "../Picture/tinola.avif",
        prepTime: "35 min",
        calories: "480",
        protein: "46g",
        servings: "2",
        ingredients: [
          "1kg chicken pieces (thighs, drumsticks, breast)",
          "1 thumb-sized ginger (luya), sliced",
          "4 cloves garlic, crushed",
          "1 onion, quartered",
          "1 green papaya (papaya), sliced",
          "2 cups malunggay (moringa) leaves",
          "2 cups dahon ng sili (chili leaves)",
          "Fish sauce (patis) to taste",
          "5 cups water",
          "1 tablespoon cooking oil"
        ],
        steps: [
          "SautÃƒÂ© garlic, onion, and ginger in oil until fragrant",
          "Add chicken pieces and brown lightly",
          "Pour water and bring to boil",
          "Add green papaya and simmer 20-25 minutes until chicken is tender",
          "Add malunggay and dahon ng sili",
          "Season with fish sauce",
          "Serve hot with rice"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±150-200 for 2 servings",
          "High protein from chicken supports muscle growth",
          "Ginger aids digestion and reduces inflammation",
          "Perfect comfort food that's also nutritious"
        ]
      },
      {
        title: "Sinigang na Baboy (Pork Tamarind Soup)",
        category: "dinner",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Filipino pork soup with vegetables - high protein, savory-sour flavor, very affordable.",
        image: "../Picture/sinigang na baboy.jpg",
        prepTime: "45 min",
        calories: "550",
        protein: "44g",
        servings: "3",
        ingredients: [
          "500g pork ribs or pork belly",
          "1 pack sinigang mix (tamarind)",
          "2 tomatoes, quartered",
          "1 onion, quartered",
          "1 radish (labanos), sliced",
          "1 eggplant (talong), sliced",
          "2 cups kangkong (water spinach)",
          "2 green chili (siling haba)",
          "Fish sauce (patis) to taste",
          "6 cups water"
        ],
        steps: [
          "Boil pork in water for 30 minutes until tender",
          "Add tomatoes and onions, simmer 5 minutes",
          "Add radish and eggplant, cook 10 minutes",
          "Add sinigang mix, stir until dissolved",
          "Add kangkong and green chili",
          "Season with fish sauce",
          "Serve hot with rice"
        ],
        tips: [
          "Pork provides high protein and calories for muscle building",
          "Very affordable - around Ã¢â€šÂ±200-250 for 3 servings",
          "Perfect for meal prep - lasts 3-4 days refrigerated",
          "The sourness aids in better nutrient absorption"
        ]
      },
      {
        title: "Lechon Kawali with Rice and Atchara",
        category: "lunch",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Crispy fried pork belly with rice - calorie-dense Filipino comfort food for bulking.",
        image: "../food name/lechon-kawali.jpg",
        prepTime: "60 min",
        calories: "900",
        protein: "38g",
        servings: "2",
        ingredients: [
          "500g pork belly (liempo)",
          "5 cups water for boiling",
          "1 head garlic, crushed",
          "3 bay leaves (dahon ng laurel)",
          "1 tablespoon peppercorns",
          "Salt to taste",
          "Cooking oil for deep frying",
          "4 cups cooked white rice",
          "Atchara (pickled papaya) or liver sauce for dipping"
        ],
        steps: [
          "Boil pork belly with garlic, bay leaves, peppercorns, and salt until tender (45 min)",
          "Remove pork and let it dry and cool completely",
          "Pat dry with paper towels thoroughly",
          "Deep fry pork in hot oil until golden and crispy",
          "Drain excess oil and chop into serving pieces",
          "Serve with rice, atchara, and liver sauce"
        ],
        tips: [
          "Extremely high in calories - perfect for weight gain",
          "Costs around Ã¢â€šÂ±250-300 for 2 servings",
          "Can air-fry for slightly less oil",
          "Best eaten immediately while still crispy"
        ]
      },
      {
        title: "Sinigang na Hipon (Shrimp Tamarind Soup)",
        category: "lunch",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Light yet satisfying shrimp sinigang - high protein, low calorie, with vegetables.",
        image: "../Picture/sinigang na hipon.avif",
        prepTime: "25 min",
        calories: "320",
        protein: "32g",
        servings: "2",
        ingredients: [
          "400g fresh shrimp (hipon), cleaned",
          "1 pack sinigang mix",
          "2 tomatoes, quartered",
          "1 onion, quartered",
          "1 radish (labanos), sliced",
          "1 cup kangkong (water spinach)",
          "1 cup sitaw (string beans), cut",
          "2 green chili (siling haba)",
          "Fish sauce (patis) to taste",
          "4 cups water",
          "1.5 cups cooked rice per serving"
        ],
        steps: [
          "Boil water with tomatoes and onions",
          "Add radish and sitaw, simmer 5 minutes",
          "Add shrimp and cook 3-4 minutes until pink",
          "Add sinigang mix, stir to dissolve",
          "Add kangkong and green chili, cook 2 minutes",
          "Season with fish sauce, serve hot with rice"
        ],
        tips: [
          "Shrimp is low-calorie, high-protein seafood",
          "Costs around Ã¢â€šÂ±180-220 for 2 servings",
          "Perfect light meal for active individuals",
          "Vegetables add fiber and micronutrients"
        ]
      },
      {
        title: "Banana Cue (Fried Sweet Banana)",
        category: "snack",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Caramelized banana skewers - sweet, calorie-dense, costs only Ã¢â€šÂ±20-30.",
        image: "../Picture/banana cue.avif",
        prepTime: "15 min",
        calories: "380",
        protein: "3g",
        servings: "2",
        ingredients: [
          "4 saba bananas (ripe but firm)",
          "1/2 cup brown sugar",
          "Cooking oil for frying",
          "Bamboo skewers"
        ],
        steps: [
          "Heat oil in pan over medium heat",
          "Peel saba bananas",
          "Fry bananas until slightly golden",
          "Sprinkle brown sugar over bananas",
          "Let sugar melt and caramelize",
          "Roll bananas to coat evenly with caramel",
          "Skewer 2 bananas per stick and serve"
        ],
        tips: [
          "Very affordable street food - Ã¢â€šÂ±10-15 per piece",
          "High in calories for easy weight gain",
          "Best eaten fresh and warm",
          "Popular Filipino merienda (snack)"
        ]
      },

      // More WEIGHT LOSS MEALS
      {
        title: "Tuyo and Brown Rice with Tomatoes",
        category: "breakfast",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Dried fish with brown rice and tomatoes - traditional Filipino breakfast, high protein, budget-friendly.",
        image: "../food name/Tuyo and Brown rice with tomatoes.jpg",
        prepTime: "10 min",
        calories: "280",
        protein: "26g",
        servings: "1",
        ingredients: [
          "3 pieces tuyo (dried fish)",
          "1 cup cooked brown rice",
          "2 tomatoes, sliced",
          "1 tablespoon vinegar with chili",
          "1 teaspoon cooking oil for frying tuyo"
        ],
        steps: [
          "Fry tuyo in small amount of oil until crispy",
          "Cook or reheat brown rice",
          "Slice fresh tomatoes",
          "Plate rice with tuyo and tomatoes on side",
          "Serve with vinegar-chili dip"
        ],
        tips: [
          "Very affordable - tuyo costs Ã¢â€šÂ±5-10 per piece",
          "High protein from dried fish",
          "Tomatoes add vitamins and freshness",
          "Classic Filipino breakfast that supports weight loss"
        ]
      },
      {
        title: "Grilled Pusit (Squid) with Rice",
        category: "dinner",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Grilled squid with vegetables - high protein, low fat, very affordable Filipino seafood.",
        image: "../Picture/grilled pusit.jpg",
        prepTime: "20 min",
        calories: "280",
        protein: "34g",
        servings: "1",
        ingredients: [
          "300g squid (pusit), cleaned",
          "3 cloves garlic, minced",
          "Calamansi or lemon juice",
          "Soy sauce for marinade",
          "1 cup cooked brown rice",
          "Sliced tomatoes and onions",
          "Vinegar-chili dip (suka't sili)",
          "Salt and pepper"
        ],
        steps: [
          "Marinate squid in soy sauce, calamansi, garlic for 15 minutes",
          "Grill squid over charcoal or pan-grill until tender (3-4 minutes)",
          "Don't overcook or squid becomes tough",
          "Slice grilled squid into rings",
          "Serve with brown rice, tomatoes, and onions",
          "Dip in vinegar-chili sauce"
        ],
        tips: [
          "Squid is very affordable - Ã¢â€šÂ±120-150 per 300g",
          "Extremely high in protein, almost no fat",
          "Don't overcook - squid should be tender",
          "Perfect low-calorie, high-protein dinner"
        ]
      },
      {
        title: "Turon (Banana Spring Roll)",
        category: "snack",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Fried banana wrapped in spring roll - sweet, crispy, calorie-dense Filipino snack.",
        image: "../food name/Turon-banana-lumpia-sweet-simple-vegan-8.jpg",
        prepTime: "15 min",
        calories: "320",
        protein: "4g",
        servings: "2",
        ingredients: [
          "2 saba bananas, sliced lengthwise",
          "1/4 cup brown sugar",
          "6 spring roll wrappers (lumpia wrapper)",
          "Cooking oil for frying",
          "Optional: jackfruit strips (langka)"
        ],
        steps: [
          "Place banana slice on wrapper",
          "Sprinkle with brown sugar (and jackfruit if using)",
          "Roll wrapper tightly, seal edges with water",
          "Heat oil in pan",
          "Fry turon until golden and crispy",
          "Drain on paper towels and serve warm"
        ],
        tips: [
          "Very affordable street food - Ã¢â€šÂ±10-15 per piece",
          "High in calories perfect for weight gain",
          "Adding jackfruit gives authentic flavor",
          "Best eaten fresh and crispy"
        ]
      },

      // More MUSCLE GAIN MEALS
      {
        title: "Longganisa with Garlic Rice and Eggs",
        category: "breakfast",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Filipino sweet sausage with fried rice and eggs - high protein, high calorie breakfast.",
        image: "../Picture/longganisa with rice.jpg",
        prepTime: "20 min",
        calories: "650",
        protein: "38g",
        servings: "1",
        ingredients: [
          "6 pieces longganisa (Filipino sausage)",
          "2 cups cooked rice",
          "2 whole eggs",
          "5 cloves garlic, minced",
          "2 tablespoons cooking oil",
          "Sliced tomatoes and cucumber",
          "Vinegar with garlic for dipping"
        ],
        steps: [
          "Fry longganisa in pan with little water until cooked through",
          "Remove longganisa, fry eggs in same pan",
          "In another pan, fry rice with garlic until golden",
          "Plate garlic rice with longganisa and eggs",
          "Serve with tomatoes, cucumber, and vinegar dip"
        ],
        tips: [
          "Longganisa provides high calories and protein",
          "Costs around Ã¢â€šÂ±80-120 for 6 pieces",
          "Perfect Filipino breakfast for muscle building",
          "Sweet longganisa from different regions have unique flavors"
        ]
      },
      {
        title: "Pork BBQ Skewers with Java Rice",
        category: "lunch",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Filipino pork barbecue on sticks with garlic-turmeric rice - sweet, savory, and protein-rich.",
        image: "../Picture/pork bbq with rice.webp",
        prepTime: "30 min + marinating",
        calories: "620",
        protein: "44g",
        servings: "2",
        ingredients: [
          "500g pork shoulder, sliced thin",
          "1/2 cup soy sauce",
          "1/4 cup calamansi or lemon juice",
          "1/4 cup brown sugar",
          "5 cloves garlic, minced",
          "1 tablespoon banana ketchup",
          "Black pepper",
          "Bamboo skewers",
          "3 cups cooked Java rice (turmeric rice)"
        ],
        steps: [
          "Marinate pork in soy sauce, calamansi, sugar, garlic, ketchup, pepper for 2+ hours",
          "Thread pork onto bamboo skewers",
          "Grill over charcoal until caramelized and cooked through",
          "Baste with marinade while grilling",
          "Cook Java rice with turmeric for yellow color",
          "Serve hot BBQ skewers with rice"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±150-200 for 2 servings",
          "Popular Filipino street food",
          "High protein perfect for muscle building",
          "Can use chicken instead of pork for variation"
        ]
      },
      {
        title: "Pancit Canton with Chicken and Vegetables",
        category: "dinner",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Filipino stir-fried noodles with chicken and vegetables - high carbs and protein for gains.",
        image: "../Picture/Pancit Canton with Chicken and Vegetables Ã¢â‚¬â€ dinner.webp",
        prepTime: "25 min",
        calories: "650",
        protein: "38g",
        servings: "2",
        ingredients: [
          "500g pancit canton noodles",
          "300g chicken breast, sliced",
          "2 cups cabbage, shredded",
          "1 cup carrots, julienned",
          "1 cup green beans (sitaw)",
          "5 cloves garlic, minced",
          "1 onion, sliced",
          "1/4 cup soy sauce",
          "2 tablespoons oyster sauce",
          "3 tablespoons cooking oil",
          "Calamansi for serving"
        ],
        steps: [
          "Soak pancit canton in water until soft",
          "SautÃƒÂ© garlic and onion in oil",
          "Add chicken and cook until done",
          "Add vegetables and stir-fry",
          "Add noodles, soy sauce, and oyster sauce",
          "Toss everything together until well combined",
          "Serve hot with calamansi"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±150-180 for 2 servings",
          "Perfect for meal prep and parties",
          "High carbs support muscle glycogen recovery",
          "Can add shrimp or pork for variation"
        ]
      },
      {
        title: "Polvoron (Powdered Milk Candy)",
        category: "snack",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Filipino milk candy with toasted flour and powdered milk - energy-dense, portable snack.",
        image: "../Picture/Polvoron (Powdered Milk Candy).jpg",
        prepTime: "20 min",
        calories: "280",
        protein: "8g",
        servings: "10 pieces",
        ingredients: [
          "2 cups all-purpose flour",
          "1 cup powdered milk",
          "1 cup sugar",
          "1/2 cup melted butter",
          "Pinch of salt",
          "Optional: crushed peanuts or pinipig (rice crispies)"
        ],
        steps: [
          "Toast flour in pan over low heat until light brown",
          "Mix toasted flour, powdered milk, sugar, and salt",
          "Add melted butter and mix until crumbly",
          "Add crushed peanuts if desired",
          "Pack mixture into molds or shape by hand",
          "Wrap each piece in cellophane or Japanese paper",
          "Store in airtight container"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±50-80 for 10 pieces",
          "Popular Filipino snack, great for energy",
          "Portable and long shelf life",
          "Can make different flavors (ube, chocolate, cookies & cream)"
        ]
      },

      // More WEIGHT GAIN MEALS
      {
        title: "Bibingka (Filipino Rice Cake)",
        category: "breakfast",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Traditional baked rice cake with butter, sugar, and cheese - calorie-dense Filipino favorite.",
        image: "../Picture/Bibingka (Filipino Rice Cake) Ã¢â‚¬â€ Breakfast.jpg",
        prepTime: "40 min",
        calories: "420",
        protein: "12g",
        servings: "4",
        ingredients: [
          "2 cups rice flour (galapong)",
          "1 cup coconut milk",
          "3/4 cup sugar",
          "3 eggs",
          "1/4 cup butter, melted",
          "1 teaspoon baking powder",
          "Banana leaves for lining",
          "Grated coconut, butter, and sugar for topping",
          "Cheese slices (optional)"
        ],
        steps: [
          "Mix rice flour, sugar, and baking powder",
          "Beat eggs and add coconut milk and melted butter",
          "Combine wet and dry ingredients",
          "Line pan with banana leaves",
          "Pour batter and bake at 350Ã‚Â°F for 25-30 minutes",
          "Top with butter, sugar, grated coconut, and cheese",
          "Bake 5 more minutes until golden"
        ],
        tips: [
          "Traditional Christmas breakfast - costs Ã¢â€šÂ±100-150 for 4",
          "Calorie-dense perfect for weight gain",
          "Best eaten warm with hot chocolate (tsokolate)",
          "Banana leaves add authentic aroma"
        ]
      },
      {
        title: "Pork Asado Sandwich on Pandesal",
        category: "lunch",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Sweet braised pork on Filipino bread rolls - hearty, flavorful, calorie-dense.",
        image: "../Picture/Pork Asado Sandwich on Pandesal Ã¢â‚¬â€ Lunch.jpg",
        prepTime: "60 min",
        calories: "680",
        protein: "42g",
        servings: "3",
        ingredients: [
          "500g pork shoulder or belly, cubed",
          "1/2 cup soy sauce",
          "1/4 cup vinegar",
          "5 cloves garlic, minced",
          "1/4 cup brown sugar",
          "1 bay leaf",
          "1 cup water",
          "9 pieces pandesal",
          "Butter for spreading"
        ],
        steps: [
          "Marinate pork in soy sauce, vinegar, garlic for 30 min",
          "SautÃƒÂ© pork until browned",
          "Add marinade, water, sugar, and bay leaf",
          "Simmer 45 minutes until pork is tender and sauce thickens",
          "Slice pandesal open and butter lightly",
          "Fill with pork asado",
          "Serve warm"
        ],
        tips: [
          "Costs around Ã¢â€šÂ±200-250 for 3 servings",
          "Perfect for meal prep - asado lasts 3-4 days",
          "High in protein and calories for bulking",
          "Popular Filipino comfort food"
        ]
      },
      {
        title: "Filipino-Style Baked Macaroni",
        category: "dinner",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Sweet Filipino baked pasta with ground meat and cheese - party favorite, calorie-dense.",
        image: "../food name/Filipino style baked macaroni.jpg",
        prepTime: "50 min",
        calories: "820",
        protein: "42g",
        servings: "4",
        ingredients: [
          "500g elbow macaroni",
          "500g ground beef or pork",
          "1 can condensed cream of mushroom soup",
          "1 cup evaporated milk",
          "2 cups quickmelt cheese, grated",
          "5 hotdogs, sliced",
          "1 onion, diced",
          "5 cloves garlic, minced",
          "2 tablespoons butter",
          "Salt and pepper"
        ],
        steps: [
          "Cook macaroni according to package, drain",
          "SautÃƒÂ© garlic and onion in butter",
          "Add ground meat and hotdogs, cook until done",
          "Mix in cream of mushroom soup and evaporated milk",
          "Combine with cooked macaroni",
          "Pour into baking dish, top with cheese",
          "Bake at 350Ã‚Â°F for 20-25 minutes until cheese melts"
        ],
        tips: [
          "Costs around Ã¢â€šÂ±300-400 for 4 servings",
          "Perfect for parties and meal prep",
          "High in calories and carbs for weight gain",
          "Filipinos love the sweet-savory flavor"
        ]
      },
      {
        title: "Ginataang Bilo-Bilo (Coconut Milk Sweet Soup)",
        category: "snack",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Sweet coconut milk dessert with glutinous rice balls, banana, and sweet potato - calorie-rich.",
        image: "../Picture/Ginataang Bilo-Bilo (Coconut Milk Sweet Soup) Ã¢â‚¬â€ snack.jpg",
        prepTime: "30 min",
        calories: "420",
        protein: "6g",
        servings: "3",
        ingredients: [
          "2 cups coconut milk (gata)",
          "1/2 cup glutinous rice flour (galapong) for balls",
          "2 saba bananas, sliced",
          "1 cup sweet potato (kamote), cubed",
          "1/2 cup sugar",
          "1/4 cup sago pearls (tapioca)",
          "2 cups water",
          "Pinch of salt"
        ],
        steps: [
          "Make bilo-bilo by mixing flour with water, form into small balls",
          "Boil water, cook sago pearls until translucent",
          "In pot, boil sweet potato until tender",
          "Add coconut milk, sugar, and salt",
          "Add bilo-bilo and bananas, simmer 10 minutes",
          "Add cooked sago, stir well",
          "Serve warm"
        ],
        tips: [
          "Very affordable Filipino dessert - Ã¢â€šÂ±80-100 for 3 servings",
          "High in calories perfect for weight gain",
          "Popular merienda (snack time) treat",
          "Can add jackfruit (langka) for extra flavor"
        ]
      },

      // More PHYSICALLY FIT / BALANCED MEALS
      {
        title: "Champorado with Tuyo (Chocolate Rice Porridge)",
        category: "breakfast",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Filipino chocolate rice porridge with dried fish - unique sweet-salty combo, energizing.",
        image: "../Picture/Champorado with Tuyo (Chocolate Rice Porridge) Ã¢â‚¬â€ Breakfast.jpg",
        prepTime: "20 min",
        calories: "380",
        protein: "16g",
        servings: "1",
        ingredients: [
          "1/2 cup glutinous rice (malagkit)",
          "3 tablespoons cocoa powder (tablea or cocoa)",
          "3 tablespoons sugar",
          "2 cups water",
          "1/4 cup evaporated milk",
          "2 pieces tuyo (dried fish)",
          "Pinch of salt"
        ],
        steps: [
          "Boil water and add glutinous rice",
          "Simmer for 15-20 minutes, stirring frequently",
          "Add cocoa powder and sugar, mix well",
          "Cook until thick and creamy",
          "Pour into bowl, add evaporated milk",
          "Serve with fried tuyo on the side"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±30-40 per serving",
          "Classic Filipino breakfast comfort food",
          "Sweet-salty combination is traditional",
          "Provides quick energy for morning workouts"
        ]
      },
      {
        title: "Chicken Inasal Rice Bowl",
        category: "lunch",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Bacolod-style grilled chicken with atsuete rice and atchara - smoky, tangy, balanced.",
        image: "../Picture/Chicken Inasal Rice Bowl Ã¢â‚¬â€ Lunch.jpg",
        prepTime: "30 min + marinating",
        calories: "520",
        protein: "42g",
        servings: "1",
        ingredients: [
          "1 chicken leg quarter (200g)",
          "3 tablespoons calamansi juice",
          "2 tablespoons vinegar",
          "5 cloves garlic, minced",
          "1 tablespoon ginger, minced",
          "2 tablespoons brown sugar",
          "1.5 cups cooked rice with atsuete (annatto)",
          "Atchara (pickled papaya)",
          "Chicken oil for basting"
        ],
        steps: [
          "Marinate chicken in calamansi, vinegar, garlic, ginger, sugar for 2+ hours",
          "Grill chicken over charcoal, basting with marinade",
          "Cook until skin is crispy and meat is done",
          "Cook rice with atsuete for orange color",
          "Plate chicken over rice",
          "Serve with atchara and sinamak (spiced vinegar)"
        ],
        tips: [
          "Authentic Bacolod flavor - costs around Ã¢â€šÂ±100-120",
          "Grilling gives smoky flavor and reduces fat",
          "High protein, moderate carbs - perfect balance",
          "Popular all over the Philippines"
        ]
      },
      {
        title: "Sinaing na Tulingan (Slow-Cooked Mackerel)",
        category: "dinner",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Batangas-style slow-cooked mackerel with vegetables - tender, flavorful, affordable.",
        image: "../food name/Sinaing na tulingan.jpg",
        prepTime: "90 min",
        calories: "420",
        protein: "38g",
        servings: "2",
        ingredients: [
          "500g tulingan (mackerel/bullet tuna)",
          "1 cup kamias (bilimbi) or tamarind",
          "1 head garlic, crushed",
          "1 thumb ginger, sliced",
          "3 tomatoes, quartered",
          "1 cup water",
          "1/4 cup vinegar",
          "Salt and pepper",
          "2 cups cooked rice per serving"
        ],
        steps: [
          "Layer garlic, ginger, and tomatoes in pot",
          "Arrange fish on top",
          "Add kamias, water, vinegar, salt, pepper",
          "Cover and simmer on low heat for 1.5 hours",
          "Don't stir - fish will become tender on its own",
          "Serve with rice and cooking liquid"
        ],
        tips: [
          "Very affordable - tulingan costs Ã¢â€šÂ±120-150 per 500g",
          "Slow cooking makes bones edible and soft",
          "High in omega-3 fatty acids",
          "Traditional Batangas dish"
        ]
      },
      {
        title: "Sago't Gulaman (Tapioca and Jelly Drink)",
        category: "snack",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Refreshing Filipino drink with tapioca pearls and gelatin - cooling, energizing, affordable.",
        image: "../food name/sago_t gulaman.jpg",
        prepTime: "30 min",
        calories: "180",
        protein: "2g",
        servings: "4",
        ingredients: [
          "1/2 cup sago pearls (tapioca)",
          "1 pack brown gulaman (gelatin), cubed",
          "1 cup brown sugar",
          "4 cups water",
          "1/2 cup water for syrup",
          "Vanilla extract (optional)",
          "Ice cubes"
        ],
        steps: [
          "Cook sago pearls in boiling water until translucent, drain",
          "Prepare gulaman according to package, let set and cube",
          "Make syrup by boiling sugar with water until dissolved",
          "Add vanilla to syrup if desired",
          "In glass, add sago, gulaman, ice",
          "Pour syrup and water, stir well"
        ],
        tips: [
          "Very affordable street drink - Ã¢â€šÂ±15-25 per glass",
          "Refreshing on hot days",
          "Natural energy from sago pearls",
          "Popular Filipino refreshment"
        ]
      },

      // Additional variety meals
      {
        title: "Maja Blanca (Coconut Pudding)",
        category: "snack",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Creamy Filipino coconut pudding with corn - sweet, dense, and calorie-rich dessert.",
        image: "../Picture/Maja Blanca (Coconut Pudding) Ã¢â‚¬â€ snack.jpg",
        prepTime: "30 min + chilling",
        calories: "280",
        protein: "4g",
        servings: "8",
        ingredients: [
          "2 cans coconut milk (800ml)",
          "1 can condensed milk",
          "1 can corn kernels, drained",
          "1 cup cornstarch",
          "1/2 cup sugar",
          "Latik (toasted coconut curds) for topping",
          "Cheese (optional)"
        ],
        steps: [
          "Mix coconut milk, condensed milk, cornstarch, and sugar in pot",
          "Cook over medium heat, stirring constantly",
          "Add corn kernels when mixture thickens",
          "Continue stirring until very thick",
          "Pour into greased pan",
          "Top with latik or cheese",
          "Chill until set, cut into squares"
        ],
        tips: [
          "Popular Filipino dessert - costs Ã¢â€šÂ±150-200 for whole pan",
          "High in calories perfect for weight gain",
          "Can make with or without corn",
          "Best served cold"
        ]
      },
      {
        title: "Pork Binagoongan (Pork in Shrimp Paste)",
        category: "dinner",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Savory pork cooked in shrimp paste - rich, flavorful, high-calorie Filipino dish.",
        image: "../Picture/Pork Binagoongan (Pork in Shrimp Paste) Ã¢â‚¬â€ Dinner.jpg",
        prepTime: "40 min",
        calories: "720",
        protein: "48g",
        servings: "2",
        ingredients: [
          "500g pork belly or shoulder, cubed",
          "3 tablespoons bagoong alamang (shrimp paste)",
          "5 cloves garlic, minced",
          "1 onion, sliced",
          "2 tomatoes, diced",
          "2 green chili (siling haba)",
          "1 eggplant, cubed",
          "1/4 cup vinegar",
          "1 tablespoon cooking oil",
          "3 cups cooked rice"
        ],
        steps: [
          "SautÃƒÂ© garlic, onion, and tomatoes",
          "Add pork and brown on all sides",
          "Add bagoong and vinegar, stir well",
          "Simmer 25-30 minutes until pork is tender",
          "Add eggplant and green chili, cook 10 minutes",
          "Adjust seasoning (bagoong is salty)",
          "Serve hot with rice"
        ],
        tips: [
          "Very flavorful - costs around Ã¢â€šÂ±180-220 for 2 servings",
          "High in calories perfect for weight gain",
          "Bagoong is fermented shrimp paste - adds umami",
          "Great with lots of rice"
        ]
      },
      {
        title: "Puto (Filipino Steamed Rice Cakes)",
        category: "snack",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Fluffy steamed rice cakes - perfect Filipino snack, light and affordable.",
        image: "../Picture/Puto (Filipino Steamed Rice Cakes) Ã¢â‚¬â€ snack.jpg",
        prepTime: "30 min",
        calories: "150",
        protein: "4g",
        servings: "12 pieces",
        ingredients: [
          "2 cups rice flour",
          "3/4 cup sugar",
          "1 cup water",
          "1/2 cup coconut milk",
          "1 tablespoon baking powder",
          "1/4 teaspoon salt",
          "Cheese slices for topping (optional)"
        ],
        steps: [
          "Mix rice flour, sugar, baking powder, and salt",
          "Add water and coconut milk, mix until smooth",
          "Pour batter into small molds or muffin cups",
          "Top with cheese slices if desired",
          "Steam for 15-20 minutes until toothpick comes out clean",
          "Let cool slightly before removing from molds"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±50-70 for 12 pieces",
          "Popular Filipino merienda (snack)",
          "Can make in different colors and flavors",
          "Pairs well with hot chocolate or coffee"
        ]
      },
      // ADDITIONAL WEIGHT LOSS MEALS
      {
        title: "Pinakbet with Bagnet (Vegetables with Crispy Pork)",
        category: "dinner",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Ilocano vegetable dish with small portion of crispy pork - low-calorie, very filling.",
        image: "../Picture/Pinakbet with Bagnet (Vegetables with Crispy Pork) Ã¢â‚¬â€ dinner.webp",
        prepTime: "25 min",
        calories: "260",
        protein: "18g",
        servings: "2",
        ingredients: [
          "1 cup kalabasa (squash), cubed",
          "1 cup sitaw (string beans)",
          "1 cup talong (eggplant), sliced",
          "1 cup okra",
          "2 tomatoes, quartered",
          "3 cloves garlic, minced",
          "1 onion, chopped",
          "2 tablespoons bagoong (shrimp paste)",
          "50g bagnet (crispy pork belly), chopped",
          "1 cup water",
          "1.5 cups cooked brown rice per serving"
        ],
        steps: [
          "SautÃƒÂ© garlic, onion, and tomatoes",
          "Add bagoong and stir for 1 minute",
          "Add kalabasa and water, simmer 5 minutes",
          "Add sitaw, talong, and okra",
          "Cover and simmer until vegetables are tender",
          "Top with crispy bagnet pieces",
          "Serve with brown rice"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±100-120 for 2 servings",
          "Vegetables are low-calorie but very filling",
          "Small amount of bagnet adds flavor and protein",
          "Traditional Ilocano dish from Northern Philippines"
        ]
      },
      {
        title: "Ginisang Tuna with Pechay (SautÃƒÂ©ed Tuna with Bok Choy)",
        category: "lunch",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Filipino stir-fried canned tuna with vegetables - budget-friendly, high protein, low-calorie.",
        image: "../food name/ginisang tuna with pechay.jpg",
        prepTime: "15 min",
        calories: "220",
        protein: "26g",
        servings: "1",
        ingredients: [
          "1 can tuna in water or oil, drained",
          "2 cups pechay (bok choy) or cabbage, chopped",
          "2 tomatoes, diced",
          "1 onion, sliced",
          "3 cloves garlic, minced",
          "1 tablespoon cooking oil",
          "1 tablespoon soy sauce",
          "Salt and pepper",
          "1 cup cooked brown rice"
        ],
        steps: [
          "SautÃƒÂ© garlic, onion, and tomatoes in oil",
          "Add drained tuna and break into chunks",
          "Add soy sauce and season with salt and pepper",
          "Add pechay and stir-fry until wilted",
          "Serve hot with brown rice"
        ],
        tips: [
          "Very affordable - canned tuna costs Ã¢â€šÂ±30-50",
          "Quick and easy Filipino ulam (viand)",
          "High protein, low calorie, perfect for weight loss",
          "Can use other leafy vegetables like kangkong"
        ]
      },
      {
        title: "Simplified Halo-Halo (Filipino Shaved Ice Dessert)",
        category: "snack",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Light version of Filipino shaved ice dessert with fruits and beans - refreshing treat.",
        image: "../Picture/Simplified Halo-Halo (Filipino Shaved Ice Dessert) Ã¢â‚¬â€ snack.jpg",
        prepTime: "10 min",
        calories: "280",
        protein: "8g",
        servings: "1",
        ingredients: [
          "2 cups shaved ice",
          "1/4 cup sweetened beans (red beans or white beans)",
          "1/4 cup kaong (sugar palm fruit)",
          "1/4 cup nata de coco (coconut gel)",
          "2 tablespoons evaporated milk",
          "1 tablespoon sugar",
          "Optional: small scoop ube ice cream or leche flan"
        ],
        steps: [
          "Layer beans, kaong, and nata de coco in a tall glass",
          "Add shaved ice on top",
          "Drizzle with evaporated milk and sugar",
          "Top with ube ice cream if desired",
          "Mix everything together before eating"
        ],
        tips: [
          "Popular Filipino dessert - costs Ã¢â€šÂ±50-80 per serving",
          "Very refreshing on hot days",
          "Can customize with different toppings",
          "Mix well before eating (halo means 'mix')"
        ]
      },
      // ADDITIONAL MUSCLE GAIN MEALS
      // ADDITIONAL WEIGHT GAIN MEALS

      {
        title: "Filipino-Style Carbonara with Hotdog",
        category: "lunch",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Sweet Filipino carbonara with hotdog and mushrooms - creamy, filling, calorie-dense.",
        image: "../food name/filipino style carbonara.jpg",
        prepTime: "25 min",
        calories: "720",
        protein: "32g",
        servings: "2",
        ingredients: [
          "400g spaghetti",
          "4 hotdogs, sliced",
          "1 cup button mushrooms, sliced",
          "1 can all-purpose cream (250ml)",
          "1 cup evaporated milk",
          "1 cup quickmelt cheese, grated",
          "3 cloves garlic, minced",
          "2 tablespoons butter",
          "Salt and pepper",
          "Parsley for garnish"
        ],
        steps: [
          "Cook spaghetti according to package, drain",
          "SautÃƒÂ© garlic in butter, add hotdogs and mushrooms",
          "Add all-purpose cream and evaporated milk",
          "Simmer until sauce thickens slightly",
          "Add cheese and stir until melted",
          "Season with salt and pepper",
          "Toss with cooked spaghetti, garnish with parsley"
        ],
        tips: [
          "Costs around Ã¢â€šÂ±180-220 for 2 servings",
          "Popular Filipino pasta dish",
          "High in calories perfect for weight gain",
          "Can add bacon for extra flavor"
        ]
      },
      // ADDITIONAL PHYSICALLY FIT MEALS
      {
        title: "Balanced Chicken Tinola with Extra Veggies",
        category: "lunch",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Filipino ginger chicken soup with papaya and malunggay - light, nutritious, balanced.",
        image: "../food name/chicken tinola with extra veggies.jpg",
        prepTime: "30 min",
        calories: "380",
        protein: "36g",
        servings: "1",
        ingredients: [
          "300g chicken pieces (breast and thigh)",
          "1 thumb-sized ginger, sliced",
          "3 cloves garlic, crushed",
          "1 onion, quartered",
          "1 cup green papaya, sliced",
          "2 cups malunggay (moringa) leaves",
          "1 cup dahon ng sili (chili leaves)",
          "Fish sauce (patis) to taste",
          "3 cups water",
          "1.5 cups cooked brown rice"
        ],
        steps: [
          "SautÃƒÂ© garlic, onion, and ginger",
          "Add chicken and brown lightly",
          "Add water and bring to boil",
          "Add papaya and simmer 15 minutes",
          "Add malunggay and dahon ng sili",
          "Season with fish sauce",
          "Serve hot with brown rice"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±100-120",
          "Malunggay is superfood rich in vitamins",
          "Light but filling, perfect for active people",
          "Ginger aids digestion and recovery"
        ]
      },
      {
        title: "Menudo (Filipino Pork and Liver Stew)",
        category: "dinner",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Filipino tomato-based stew with pork, liver, and vegetables - protein-rich and flavorful.",
        image: "../Picture/Menudo (Filipino Pork and Liver Stew) Ã¢â‚¬â€ Dinner.jpg",
        prepTime: "45 min",
        calories: "420",
        protein: "38g",
        servings: "3",
        ingredients: [
          "300g pork shoulder, cubed",
          "100g pork liver, cubed",
          "2 potatoes, cubed",
          "1 carrot, cubed",
          "1 red bell pepper, cubed",
          "1 can tomato sauce (250g)",
          "5 cloves garlic, minced",
          "1 onion, chopped",
          "1 bay leaf",
          "2 tablespoons soy sauce",
          "2 cups water",
          "2 cups cooked rice per serving"
        ],
        steps: [
          "SautÃƒÂ© garlic and onion until fragrant",
          "Add pork and brown on all sides",
          "Add tomato sauce, soy sauce, bay leaf, and water",
          "Simmer 25 minutes until pork is tender",
          "Add potatoes and carrots, cook 10 minutes",
          "Add liver and bell pepper, cook 5 minutes",
          "Serve hot with rice"
        ],
        tips: [
          "Costs around Ã¢â€šÂ±200-250 for 3 servings",
          "Liver is rich in iron and protein",
          "Great for meal prep - lasts 3-4 days",
          "Popular Filipino party dish"
        ]
      },
      {
        title: "Pandesal with Kesong Puti and Tomatoes",
        category: "breakfast",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Filipino bread with fresh white cheese and tomatoes - simple, affordable, balanced.",
        image: "../Picture/Pandesal with Kesong Puti and Tomatoes Ã¢â‚¬â€ breakfast_.png",
        prepTime: "5 min",
        calories: "320",
        protein: "16g",
        servings: "1",
        ingredients: [
          "4 pieces pandesal",
          "100g kesong puti (Filipino white cheese)",
          "2 tomatoes, sliced",
          "1 tablespoon olive oil or butter",
          "Pinch of salt and pepper",
          "Fresh basil leaves (optional)",
          "Hot coffee or tsokolate"
        ],
        steps: [
          "Slice pandesal open",
          "Spread kesong puti inside",
          "Add tomato slices",
          "Drizzle with olive oil",
          "Season with salt and pepper",
          "Add basil leaves if desired",
          "Serve with hot coffee"
        ],
        tips: [
          "Very affordable - pandesal Ã¢â€šÂ±2-3 each, kesong puti Ã¢â€šÂ±50-70",
          "Kesong puti is fresh, unaged cheese similar to queso fresco",
          "Perfect light breakfast or merienda",
          "Tomatoes add freshness and vitamins"
        ]
      },
      {
        title: "Ensaladang Talong with Grilled Pork",
        category: "lunch",
        description: "Ã°Å¸ÂÆ’ PHYSICALLY FIT | Filipino eggplant salad with grilled pork - fresh, tangy, low-calorie but filling.",
        image: "../food name/ensaladang talong with grilled pork.jpg",
        prepTime: "20 min",
        calories: "360",
        protein: "28g",
        servings: "1",
        ingredients: [
          "2 large eggplants (talong)",
          "150g pork belly or liempo, grilled",
          "3 tomatoes, diced",
          "1 onion, chopped",
          "3 tablespoons fish sauce (patis)",
          "3 tablespoons vinegar",
          "Salt and pepper",
          "1.5 cups cooked brown rice"
        ],
        steps: [
          "Grill eggplants until skin is charred and flesh is soft",
          "Peel eggplants and mash flesh",
          "Grill pork until crispy, slice thinly",
          "Mix eggplant with tomatoes and onions",
          "Add fish sauce and vinegar, season to taste",
          "Plate eggplant salad with grilled pork",
          "Serve with brown rice"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±80-100 per serving",
          "Eggplants are low-calorie but very filling",
          "Grilled pork adds protein",
          "Popular Filipino side dish"
        ]
      },
      {
        title: "Escabecheng Isda (Sweet and Sour Fish)",
        category: "dinner",
        description: "Ã°Å¸â€Â¥ WEIGHT LOSS | Fried fish with sweet-sour sauce and vegetables - Filipino classic, low-calorie.",
        image: "../Picture/Escabecheng Isda (Sweet and Sour Fish) Ã¢â‚¬â€ Dinner.jpg",
        prepTime: "30 min",
        calories: "340",
        protein: "32g",
        servings: "1",
        ingredients: [
          "1 whole tilapia or bangus (300g), cleaned",
          "1 bell pepper, julienned",
          "1 carrot, julienned",
          "1 onion, sliced",
          "3 tablespoons vinegar",
          "2 tablespoons soy sauce",
          "2 tablespoons sugar",
          "1 tablespoon cornstarch",
          "Ginger, garlic, cooking oil"
        ],
        steps: [
          "Score fish and fry until crispy, set aside",
          "SautÃƒÂ© garlic, ginger, and onion",
          "Add bell pepper and carrots, stir-fry",
          "Mix vinegar, soy sauce, sugar, and cornstarch",
          "Pour sauce mixture, simmer until thickened",
          "Pour sauce over fried fish",
          "Serve with lime wedges"
        ],
        tips: [
          "Shrimp cooks quickly and is very lean protein",
          "Cabbage slaw adds crunch with minimal calories",
          "Greek yogurt provides creaminess without heavy calories",
          "Corn tortillas are lower calorie than flour"
        ]
      },
      {
        title: "Tortang Talong (Eggplant Omelette)",
        category: "snack",
        description: "Ã°Å¸â€™Âª MUSCLE GAIN | Filipino eggplant omelette - high protein, simple, budget-friendly meal.",
        image: "../Picture/Tortang Talong (Eggplant Omelette) Ã¢â‚¬â€ snack.jpg",
        prepTime: "15 min",
        calories: "240",
        protein: "18g",
        servings: "2",
        ingredients: [
          "2 large eggplants (talong)",
          "4 eggs, beaten",
          "2 cloves garlic, minced",
          "1 onion, chopped",
          "2 tomatoes, diced",
          "Salt and pepper",
          "Cooking oil for frying",
          "Ketchup or vinegar for dipping"
        ],
        steps: [
          "Grill eggplants until skin is charred and flesh is soft",
          "Peel skin while warm, flatten flesh with fork",
          "SautÃƒÂ© garlic, onion, and tomatoes (optional filling)",
          "Beat eggs with salt and pepper",
          "Dip flattened eggplant in beaten egg",
          "Fry in hot oil until golden brown on both sides",
          "Serve with ketchup or vinegar"
        ],
        tips: [
          "Very affordable - costs around Ã¢â€šÂ±40-60 for 2",
          "Popular Filipino breakfast or lunch",
          "High protein from eggs",
          "Can add ground meat for extra protein"
        ]
      },
      {
        title: "Filipino Banana Bread (Banana Cake)",
        category: "snack",
        description: "Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN | Moist Filipino banana bread - sweet, filling, calorie-dense snack or dessert.",
        image: "../food name/filipino banana bread.jpg",
        prepTime: "60 min",
        calories: "320",
        protein: "6g",
        servings: "10 slices",
        ingredients: [
          "6 ripe saba bananas or 4 regular bananas, mashed",
          "2 cups all-purpose flour",
          "1 cup sugar",
          "3 eggs",
          "1/2 cup melted butter or oil",
          "1/2 cup milk",
          "1 teaspoon baking soda",
          "1 teaspoon vanilla extract",
          "1/2 cup chopped walnuts (optional)",
          "Pinch of salt"
        ],
        steps: [
          "Preheat oven to 350Ã‚Â°F, grease loaf pan",
          "Mix mashed bananas, eggs, melted butter, milk, and vanilla",
          "In another bowl, mix flour, sugar, baking soda, and salt",
          "Combine wet and dry ingredients until just mixed",
          "Fold in walnuts if using",
          "Pour into greased loaf pan",
          "Bake 50-60 minutes until toothpick comes out clean",
          "Cool before slicing"
        ],
        tips: [
          "Costs around Ã¢â€šÂ±100-150 for whole loaf",
          "Popular Filipino merienda (snack)",
          "Great way to use overripe bananas",
          "Keeps for 3-4 days at room temperature"
        ]
      }
    ];

    let currentFilter = 'all';

    function renderMeals(filter = 'all') {
      const grid = document.getElementById('mealsGrid');
      const filteredMeals = filter === 'all' 
        ? mealPlans 
        : mealPlans.filter(meal => meal.category.toLowerCase() === filter.toLowerCase());

      grid.innerHTML = filteredMeals.map((meal, index) => `
        <div class="plan-card" onclick="showMealDetails(${mealPlans.indexOf(meal)})">
          <img src="${meal.image}" alt="${meal.title}" class="plan-image">
          <div class="plan-content">
            <div class="plan-header">
              <h3 class="plan-title">${meal.title}</h3>
              <span class="plan-badge badge-${meal.category}">${meal.category}</span>
            </div>
            <p class="plan-description">${meal.description}</p>
            <div class="plan-stats">
              <div class="stat">
                <div class="stat-value">Ã¢ÂÂ±Ã¯Â¸Â</div>
                <div class="stat-label">${meal.prepTime}</div>
              </div>
              <div class="stat">
                <div class="stat-value">Ã°Å¸â€Â¥</div>
                <div class="stat-label">${meal.calories}</div>
              </div>
              <div class="stat">
                <div class="stat-value">Ã°Å¸â€™Âª</div>
                <div class="stat-label">${meal.protein}</div>
              </div>
              <div class="stat">
                <div class="stat-value">Ã°Å¸ÂÂ½Ã¯Â¸Â</div>
                <div class="stat-label">${meal.servings}</div>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    function filterMeals(category) {
      currentFilter = category;
      
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      event.target.classList.add('active');
      
      renderMeals(category);
    }

    function showMealDetails(mealIndex) {
      const meal = mealPlans[mealIndex];
      const modal = document.getElementById('mealModal');
      
      document.getElementById('modalTitle').textContent = meal.title;
      document.getElementById('modalMeta').innerHTML = `
        <span>Ã¢ÂÂ±Ã¯Â¸Â ${meal.prepTime}</span>
        <span>Ã°Å¸â€Â¥ ${meal.calories}</span>
        <span>Ã°Å¸â€™Âª ${meal.protein}</span>
        <span>Ã°Å¸ÂÂ½Ã¯Â¸Â ${meal.servings} servings</span>
        <span class="plan-badge badge-${meal.category}">${meal.category}</span>
      `;
      
      document.getElementById('modalBody').innerHTML = `
        <div class="section-header">Ingredients</div>
        <ul class="ingredients-list">
          ${meal.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>

        <div class="section-header">Preparation Steps</div>
        <ol class="steps-list">
          ${meal.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>

        <div class="section-header">Tips & Notes</div>
        <ul class="tips-list">
          ${meal.tips.map(tip => `<li>${tip}</li>`).join('')}
        </ul>
      `;
      
      modal.classList.add('active');
    }

    function closeModal() {
      document.getElementById('mealModal').classList.remove('active');
    }

    document.getElementById('mealModal').addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal();
      }
    });

    // Navigation function for navbar
    function navigateTo(page) {
      window.location.href = page;
    }

    // Toggle sidebar dropdown
    function toggleSidebar() {
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    }
    
    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
      const sidebar = document.getElementById('dropdownSidebar');
      const brand = document.querySelector('.navbar-brand');
      if (sidebar && brand && sidebar.classList.contains('active')) {
        if (!sidebar.contains(event.target) && !brand.contains(event.target)) {
          toggleSidebar();
        }
      }
    });

    // Meal Suggestion Function
    function suggestMeal() {
      const goalType = document.getElementById('goalType').value;
      const mealType = document.getElementById('mealType').value;
      const suggestionBox = document.getElementById('suggestionBox');

      // Filter meals based on goal and meal type
      let filteredMeals = mealPlans.filter(meal => {
        let matchesGoal = true;
        let matchesMeal = true;

        // Filter by meal type
        if (mealType !== 'any') {
          matchesMeal = meal.category === mealType;
        }

        // Filter by goal (based on description emoji)
        if (goalType !== 'all') {
          if (goalType === 'weight-loss') {
            matchesGoal = meal.description.includes('Ã°Å¸â€Â¥ WEIGHT LOSS');
          } else if (goalType === 'muscle-gain') {
            matchesGoal = meal.description.includes('Ã°Å¸â€™Âª MUSCLE GAIN');
          } else if (goalType === 'weight-gain') {
            matchesGoal = meal.description.includes('Ã¢Â¬â€ Ã¯Â¸Â WEIGHT GAIN');
          } else if (goalType === 'balanced') {
            matchesGoal = meal.description.includes('Ã°Å¸ÂÆ’ PHYSICALLY FIT');
          }
        }

        return matchesGoal && matchesMeal;
      });

      if (filteredMeals.length === 0) {
        suggestionBox.innerHTML = `
          <div style="padding: 20px; color: var(--muted);">
            <p>Ã°Å¸Ëœâ€¢ No meals found matching your criteria.</p>
            <p style="margin-top: 10px; font-size: 0.9rem;">Try selecting different options or browse all meals below.</p>
          </div>
        `;
        suggestionBox.classList.add('active');
        return;
      }

      // Pick a random meal from filtered results
      const randomMeal = filteredMeals[Math.floor(Math.random() * filteredMeals.length)];
      const mealIndex = mealPlans.indexOf(randomMeal);

      suggestionBox.innerHTML = `
        <div class="suggestion-title">${randomMeal.title}</div>
        <div class="suggestion-desc">${randomMeal.description}</div>
        <img src="${randomMeal.image}" alt="${randomMeal.title}" />
        <div class="suggestion-stats">
          <span class="suggestion-stat">Ã¢ÂÂ±Ã¯Â¸Â ${randomMeal.prepTime}</span>
          <span class="suggestion-stat">Ã°Å¸â€Â¥ ${randomMeal.calories}</span>
          <span class="suggestion-stat">Ã°Å¸â€™Âª ${randomMeal.protein}</span>
          <span class="suggestion-stat">Ã°Å¸ÂÂ½Ã¯Â¸Â ${randomMeal.servings}</span>
        </div>
        <button class="view-details-btn" onclick="showMealDetails(${mealIndex})">View Full Recipe</button>
        ${filteredMeals.length > 1 ? `<button class="view-multiple-btn" onclick="showMultipleMeals()">View All ${filteredMeals.length} Matching Meals</button>` : ''}
      `;
      suggestionBox.classList.add('active');

      // Store filtered meals for later use
      window.currentFilteredMeals = filteredMeals;

      // Hide multiple meals container when showing new suggestion
      document.getElementById('multipleMealsContainer').classList.remove('active');

      // Scroll to suggestion
      suggestionBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    // Show Multiple Meals Function
    function showMultipleMeals() {
      const container = document.getElementById('multipleMealsContainer');
      const header = document.getElementById('multipleMealsHeader');
      const grid = document.getElementById('multipleMealsGrid');
      const filteredMeals = window.currentFilteredMeals || [];

      if (filteredMeals.length === 0) return;

      const goalType = document.getElementById('goalType').value;
      const mealType = document.getElementById('mealType').value;
      
      let goalText = goalType === 'all' ? 'All Goals' : 
                     goalType === 'weight-loss' ? 'Weight Loss' :
                     goalType === 'muscle-gain' ? 'Muscle Gain' :
                     goalType === 'weight-gain' ? 'Weight Gain' : 'Physically Fit';
      
      let mealText = mealType === 'any' ? 'All Meals' :
                     mealType.charAt(0).toUpperCase() + mealType.slice(1);

      header.textContent = `${filteredMeals.length} ${goalText} - ${mealText} Options`;

      grid.innerHTML = filteredMeals.map(meal => {
        const mealIndex = mealPlans.indexOf(meal);
        return `
          <div class="meal-mini-card" onclick="showMealDetails(${mealIndex})">
            <img class="meal-mini-image" src="${meal.image}" alt="${meal.title}" />
            <div class="meal-mini-content">
              <div class="meal-mini-title">${meal.title}</div>
              <div class="meal-mini-stats">
                <span class="meal-mini-stat">Ã¢ÂÂ±Ã¯Â¸Â ${meal.prepTime}</span>
                <span class="meal-mini-stat">Ã°Å¸â€Â¥ ${meal.calories}</span>
                <span class="meal-mini-stat">Ã°Å¸â€™Âª ${meal.protein}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');

      container.classList.remove('empty');
      container.classList.add('active');
    }

    // Initial render
    renderMeals();

    // About Modal Functions
    function openAboutModal() {
      const aboutModal = document.getElementById('aboutModal');
      aboutModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Close sidebar if open
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    }

    function closeAboutModal() {
      const aboutModal = document.getElementById('aboutModal');
      aboutModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Close About modal when clicking outside
    document.addEventListener('click', function(event) {
      const aboutModal = document.getElementById('aboutModal');
      if (event.target === aboutModal) {
        closeAboutModal();
      }
    });

    // Terms Modal Functions
    function openTermsModal() {
      const termsModal = document.getElementById('termsModal');
      termsModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Close sidebar if open
      const sidebar = document.getElementById('dropdownSidebar');
      const overlay = document.getElementById('sidebarOverlay');
      if (sidebar && overlay) {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      }
    }

    function closeTermsModal() {
      const termsModal = document.getElementById('termsModal');
      termsModal.classList.remove('active');
      document.body.style.overflow = '';
    }

    // Close Terms modal when clicking outside
    document.addEventListener('click', function(event) {
      const termsModal = document.getElementById('termsModal');
      if (event.target === termsModal) {
        closeTermsModal();
      }
    });

    // Logout function
    async function logout() {
      localStorage.removeItem('nutrifit_user');
      localStorage.removeItem('nutrifit_session');
      
      if (window.supabase) {
        try {
          const SUPABASE_URL = 'https://pncfzxuecxzcdyxdwuok.supabase.co';
          const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuY2Z6eHVlY3h6Y2R5eGR3dW9rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI4Njg1NzEsImV4cCI6MjA3ODQ0NDU3MX0.BlfihjUmYAgP-9UisG4EN1srsteB_SZ9ut5TiBgAQ-E';
          const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
          await supabase.auth.signOut();
        } catch (err) {
          console.error('Error signing out:', err);
        }
      }
      
      window.location.href = 'index.html';
    }

    // Community Live Toggle
    document.addEventListener('DOMContentLoaded', function() {
      const livePill = document.getElementById('livePill');
      const liveLabel = document.getElementById('liveLabel');
      
      if (livePill && liveLabel) {
        livePill.addEventListener('click', function() {
          const isOff = livePill.classList.toggle('off');
          liveLabel.textContent = isOff ? 'Community waiting for you' : 'Community live';
        });
      }
    });
























