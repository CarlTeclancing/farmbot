const articles = [
    {
      title: "Drip Irrigation Techniques",
      intro: "Learn how drip irrigation saves water and improves yield...",
      content: "Drip irrigation delivers water directly to the plant roots using a system of tubing, emitters, and valves. This method minimizes evaporation and runoff, ensuring efficient water usage. It is especially effective for row crops, orchards, and vegetable gardens. Farmers benefit from reduced water bills, healthier plants, and minimized weed growth."
    },
    {
      title: "Best Time to Plant Maize",
      intro: "Timing is key when planting maize. Here's what to know...",
      content: "Maize should be planted at the onset of the rainy season when soil moisture is adequate and consistent. Ideal soil temperature is between 10°C and 12°C. Early planting ensures optimal use of rainwater, helps reduce pest risks, and improves yields. Farmers are advised to monitor local weather forecasts and soil conditions before sowing."
    },
    {
      title: "Using Mulch in Irrigation",
      intro: "Mulching plays a key role in maintaining soil moisture...",
      content: "Mulching involves covering the soil with organic or synthetic materials to conserve moisture, reduce weed growth, and regulate soil temperature. Common mulching materials include straw, leaves, wood chips, and black plastic. Mulch helps retain water during dry seasons and protects roots from extreme temperatures, promoting plant health and growth."
    },
    {
      title: "Rainwater Harvesting for Farming",
      intro: "Collecting rainwater can be a game-changer for irrigation...",
      content: "Rainwater harvesting involves collecting and storing rainwater for agricultural use. This water can be stored in tanks or directed into underground reservoirs. It is a sustainable way to manage water scarcity, especially during dry periods. Proper filtration and storage help maintain water quality, making it ideal for both irrigation and livestock."
    },
    {
      title: "Irrigation Scheduling for Efficiency",
      intro: "Maximize water use by planning when and how much to irrigate...",
      content: "Irrigation scheduling is the process of determining the right timing and amount of water for crops. It involves understanding soil moisture levels, crop requirements, and weather conditions. Tools like tensiometers, weather apps, and smart sensors help automate and improve accuracy, ensuring water is not wasted and crops receive optimal hydration."
    },
    {
      title: "Flood Irrigation Pros and Cons",
      intro: "Traditional method with benefits and limitations...",
      content: "Flood irrigation involves channeling water through fields to saturate the soil. While it's simple and inexpensive, it often leads to water wastage and soil erosion. It's best suited for flat terrains and crops like rice. Farmers using this method should consider leveling their land and using barriers to control water flow."
    },
    {
      title: "Crop Rotation and Irrigation",
      intro: "Rotate crops smartly to manage water and improve soil health...",
      content: "Crop rotation involves planting different crops in the same area across seasons. This technique helps manage soil fertility, reduce pest cycles, and balance water usage. Crops with deep root systems can help improve soil structure and moisture retention. Proper planning ensures sustainable irrigation and long-term productivity."
    },
    {
      title: "How Soil Type Affects Irrigation",
      intro: "Different soils require different watering strategies...",
      content: "Clay soils retain water longer, requiring less frequent irrigation, while sandy soils drain quickly and need more frequent watering. Loam, a mix of clay, sand, and silt, is ideal for most crops. Understanding your soil type allows farmers to select the best irrigation method and schedule for optimal crop health."
    },
    {
      title: "Smart Irrigation Systems",
      intro: "Technology-driven systems help automate farm watering...",
      content: "Smart irrigation uses sensors, timers, and mobile apps to monitor soil moisture, weather, and crop needs. These systems optimize watering schedules and reduce human error. Though the initial cost may be high, long-term savings on water and improved yields make them a worthy investment for modern farmers."
    },
    {
      title: "Planting Calendar: What to Plant When",
      intro: "A month-by-month guide to planting for maximum success...",
      content: "A planting calendar outlines the best times to sow, transplant, and harvest different crops based on your region's climate. For example, leafy greens thrive in cool months while peppers prefer warmth. Aligning your planting cycle with seasonal weather helps reduce irrigation demand and increase yield."
    },
    {
      title: "Irrigation Maintenance Tips",
      intro: "Keep your irrigation system efficient and long-lasting...",
      content: "Regular maintenance includes checking for leaks, cleaning filters, adjusting emitters, and inspecting hoses. Clogged systems reduce efficiency and waste water. Preventative care extends system life and ensures consistent water delivery. Farmers should inspect their systems at least once per month, especially during peak usage."
    },
    {
      title: "Fertigation in Irrigation",
      intro: "Combine fertilizing and watering for efficient crop growth...",
      content: "Fertigation involves injecting fertilizers into the irrigation system, delivering nutrients directly to the plant roots. This method ensures even distribution, reduces labor, and enhances nutrient uptake. It's widely used in drip systems and greenhouses, allowing farmers to fine-tune fertilizer application based on plant growth stages."
    },
    {
      title: "Sprinkler vs. Drip Irrigation",
      intro: "Compare two popular irrigation methods and when to use each...",
      content: "Sprinkler systems mimic natural rainfall and are ideal for lawns and larger fields. Drip systems target roots and are better for row crops and gardens. Sprinklers are easier to install but can lead to evaporation losses, while drip systems offer precise water control. The choice depends on crop type, land size, and budget."
    },
    {
      title: "Improving Irrigation Water Quality",
      intro: "Water quality impacts crop health and soil fertility...",
      content: "Irrigation water should be free of harmful salts, heavy metals, and pathogens. Contaminated water can lead to crop diseases, poor soil structure, and reduced yield. Testing water sources regularly helps prevent issues. Using filters, settling tanks, and chemical treatments can improve irrigation water quality."
    },
    {
      title: "Using Weather Data to Plan Irrigation",
      intro: "Leverage forecasts to optimize when and how much to water...",
      content: "Modern weather apps and APIs provide real-time data on rainfall, temperature, and humidity. Farmers can use this data to delay irrigation during rain or increase it during dry spells. Integrating weather data into scheduling saves water and ensures crops aren’t over- or under-watered."
    },
    {
      title: "Sustainable Water Use in Agriculture",
      intro: "Make your farm eco-friendly by conserving water...",
      content: "Sustainable irrigation involves using water efficiently without depleting local water sources. Techniques include drip systems, rainwater harvesting, and drought-tolerant crops. Farmers should avoid over-irrigating, fix leaks promptly, and monitor usage to maintain long-term viability of farming in water-scarce regions."
    },
    {
      title: "Plant Spacing and Water Usage",
      intro: "Why spacing affects how you should irrigate...",
      content: "Proper plant spacing ensures each plant receives adequate water, light, and nutrients. Crowded crops compete for resources, leading to overwatering. Well-spaced crops allow better air circulation and root development, which helps in optimizing irrigation efforts and reducing diseases."
    },
    {
      title: "Micro Irrigation for Small Farms",
      intro: "A cost-effective solution for smallholders...",
      content: "Micro irrigation uses small emitters or sprinklers to deliver water to specific areas. It’s ideal for kitchen gardens, nurseries, and greenhouses. This system minimizes water usage and is easy to set up with limited resources. Farmers can install DIY versions using basic materials like buckets and tubes."
    },
    {
      title: "Water Retention Techniques",
      intro: "Keep more water in the soil for longer periods...",
      content: "Techniques like adding compost, using mulch, creating swales, and planting cover crops help retain soil moisture. These methods reduce the frequency of irrigation and improve soil health. Deep watering and reducing tillage are also effective strategies for boosting water retention."
    },
    {
      title: "Evaluating Your Farm's Irrigation Needs",
      intro: "Tailor irrigation systems based on your farm size and crops...",
      content: "Before installing an irrigation system, assess your soil type, crop water needs, land slope, and water availability. Each crop has a unique requirement. Tools like evapotranspiration charts and irrigation calculators help make informed decisions. A customized irrigation plan saves water and maximizes yield."
    }
  ];
  
  
  for (let i = 4; i <= 25; i++) {
    articles.push({
      title: `Farming Strategy #${i}`,
      intro: `Quick insight on strategy #${i} to boost your farm’s health.`,
      content: `This is a detailed explanation of farming strategy #${i}, covering practices such as soil testing, crop rotation, pest control, water management, and sustainable techniques suited for smallholder and large-scale farms.`
    });
  }
  
  const container = document.getElementById("articlesContainer");
  articles.forEach((article, index) => {
    const card = document.createElement("div");
    card.className = "article-card";
    card.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.intro}</p>
      <button onclick="openModal(${index})">Read More</button>
    `;
    container.appendChild(card);
  });
  
  function openModal(index) {
    document.getElementById("modalTitle").innerText = articles[index].title;
    document.getElementById("modalContent").innerText = articles[index].content;
    document.getElementById("articleModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("articleModal").style.display = "none";
  }
  