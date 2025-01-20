function limitCheckbox(name, obj, max) {
   var count = 0;
   var x = document.getElementsByName(name);
   for (var i = 0; i < x.length; i++) {
      if(x[i].checked) {
         count += 1;
      }
   }
   if (count > max) {
      alert("Please select only 3 checkboxes.");
      obj.checked = false;
   }
}

document.getElementById("intro").addEventListener("click", function() {
   document.getElementById("intro").style.display = "none";
   document.getElementById("question1").style.display = "block";
});

document.getElementById("btn").addEventListener("click", function() {
   const form = document.getElementById("form1");
   const selectedStyles = getStyles(form);
   if (selectedStyles === false) {
      return;
   }
   document.getElementById("question1").style.display = "none";
   document.getElementById("question2").style.display = "block";
});

function getStyles(form) {
      const checkboxes = form.elements["style"];
      const selected = []

   for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
         selected.push(checkboxes[i].value);
      }
   }
   if (selected.length < 1) {
      alert("Please select at least 1 style.")
      return false;
   }
   console.log("Selected styles:", selected)
   return selected;
}

document.getElementById("btn2").addEventListener("click", function() {
   const form = document.getElementById("form2");
   const selectedType = getType(form);
   if (selectedType === false) {
      return;
   }
   document.getElementById("question2").style.display = "none";
   document.getElementById("question3").style.display = "block";
});

function getType(form) {
   const radios = form.elements["type"];
   const selected = [];

   for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
         selected.push(radios[i].value);
      }
   }
   if (selected.length == 0) {
      alert("Please select an option.")
      return false;
   }
   console.log("Selected dress type:", selected);
   return selected
}

document.getElementById("btn3").addEventListener("click", function() {
   const form = document.getElementById("form3");
   const selectedColor = getColor(form);
   if (selectedColor === false) {
      return;
   }
   document.getElementById("question3").style.display = "none";
   document.getElementById("question4").style.display = "block";
});

function getColor(form) {
   const radios = form.elements["color"];
   const selected = [];

   for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
         selected.push(radios[i].value);
      }
   }
   if (selected.length == 0) {
      alert("Please select an option.")
      return false;
   }
   console.log("Selected color:", selected);
   return selected
}

document.getElementById("btn4").addEventListener("click", function() {
   const form = document.getElementById("form4");
   const selectedPattern = getPattern(form);
   if (selectedPattern === false) {
      return;
   }
   document.getElementById("question4").style.display = "none";
   document.getElementById("question5").style.display = "block";
});

function getPattern(form) {
   const radios = form.elements["pattern"];
   const selected = [];

   for (var i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
         selected.push(radios[i].value);
      }
   }
   if (selected.length == 0) {
      alert("Please select an option.")
      return false;
   }
   console.log("Selected pattern:", selected);
   return selected
}

document.getElementById("btn5").addEventListener("click", function() {
   const form = document.getElementById("form5");
   const selectedAccessories = getAccessories(form);
   if (selectedAccessories === false) {
      return;
   }
   document.getElementById("question5").style.display = "none";
   document.getElementById("question6").style.display = "block";
});

function getAccessories(form) {
   const checkboxes = form.elements["accessory"];
   const selected = []

   for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
         selected.push(checkboxes[i].value);
      }
   }
   if (selected.length == 0) {
      alert("Please select at least one option.");
      return false;
   }
   console.log("Selected fashion accessories:", selected);
   return selected;
}

document.getElementById("btn6").addEventListener("click", function() {
   const form = document.getElementById("form6");
   const selectedStores = getStores(form);

   if (selectedStores === false) {
      return;
   }
   const userPreferences = combineUserPreferences();
   const recommendations = getClothingRecommendations(userPreferences);
   console.log(recommendations);

   const clothingList = document.getElementById("clothingRecs");
   const accessoryList = document.getElementById("accessoryRecs");

   recommendations.clothing.forEach(brand => {
      const listItem = document.createElement("li");
      listItem.textContent = brand;
      clothingList.appendChild(listItem);
   });

   recommendations.accessories.forEach(accessory => {
      const listItem = document.createElement("li");
      listItem.textContent = accessory;
      accessoryList.appendChild(listItem);
   });

   document.getElementById("question6").style.display = "none";
   document.getElementById("result").style.display = "block";
});

function getStores(form) {
   const select = form.elements["stores"];
   const selected = []

   for (let i = 0; i < select.selectedOptions.length; i++) {
      selected.push(select.selectedOptions[i].value);
   }
   if (selected.length < 1) {
      alert("Please select at least 1 store.")
      return false;
   }
   console.log("Selected stores:", selected)
   return selected;
}

function combineUserPreferences() {
   const styles = getStyles(document.getElementById("form1"));
   const typicalWear = getType(document.getElementById("form2"));
   const colorPalette = getColor(document.getElementById("form3"));
   const patterns = getPattern(document.getElementById("form4"));
   const accessories = getAccessories(document.getElementById("form5"));
   const stores = getStores(document.getElementById("form6"));
   return {
      styles,
      typicalWear,
      colorPalette,
      patterns,
      stores,
      accessories
   };
}

const clothingBrands = {
   style: {
      y2k: ["Forever 21", "Urban Outfitters", "Garage", "ASOS", "PacSun", "Brandy Melville", "Hot Topic"],
      streetwear: ["Supreme", "Nike", "Adidas", "PacSun", "Garage", "Champion", "Stussy"],
      classic: ["Banana Republic", "J.Crew", "Ralph Lauren", "Aritzia", "AllSaints", "Gap"],
      minimal: ["Everlane", "COS", "Uniqlo", "Madewell", "Lululemon", "Aritzia", "AllSaints"],
      grunge: ["Hot Topic", "AllSaints", "Urban Outfitters", "Zara", "PacSun", "Garage"],
      preppy: ["Lilly Pulitzer", "Ralph Lauren", "J.Crew", "Banana Republic", "Abercrombie"],
      boho: ["Free People", "Anthropologie", "Madewell", "Brandy Melville"],
      vintage: ["Madewell", "J.Crew", "Anthropologie", "Abercrombie", "Urban Outfitters", "Free People"],
   },
   type: {
     casual: ["Gap", "Old Navy", "American Eagle", "Brandy Melville", "Forever 21", "Garage", "Urban Outfitters", "Nike", "Adidas"],
     professional: ["Banana Republic", "J.Crew", "Everlane", "COS", "Ralph Lauren", "Aritzia", "Madewell", "AllSaints"],
     trendy: ["Zara", "Forever 21", "Urban Outfitters", "Free People", "PacSun", "Garage", "Hot Topic", "Anthropologie"],
     bold: ["Free People", "Anthropologie", "ASOS", "Lilly Pulitzer", "Forever 21", "Urban Outfitters"],
     minimalistic: ["Everlane", "COS", "Uniqlo", "Aritzia", "AllSaints", "Madewell", "Lululemon"],
   },
   color: {
     neutral: ["Everlane", "COS", "Madewell", "Banana Republic", "Aritzia", "AllSaints", "J.Crew", "Ralph Lauren"],
     earthy: ["Anthropologie", "Free People", "Urban Outfitters", "Zara", "Gap", "Garage", "PacSun", "Brandy Melville"],
     bright: ["Lilly Pulitzer", "Forever 21", "Urban Outfitters", "Adidas", "Champion", "Nike", "Hot Topic", "PacSun"],
     dark: ["AllSaints", "Urban Outfitters", "COS", "Zara", "Hot Topic", "Abercrombie", "Madewell", "Free People"],
     pastel: ["Brandy Melville", "Urban Outfitters", "Garage", "Anthropologie", "Lilly Pulitzer", "J.Crew"],
   },
   pattern: {
     animal: ["Forever 21", "Urban Outfitters", "Hot Topic", "Zara", "Free People", "Anthropologie", "PacSun", "Garage"],
     geometric: ["COS", "Anthropologie", "Zara", "Urban Outfitters", "Adidas", "Champion", "Madewell", "Banana Republic", "Everlane"],
     floral: ["Free People", "Madewell", "H&M", "Anthropologie", "Lilly Pulitzer", "Abercrombie", "Garage"],
     stripes: ["Abercrombie", "American Eagle", "Banana Republic", "Brandy Melville", "Madewell", "Gap", "Zara", "Urban Outfitters", "J.Crew", "Everlane", "Ralph Lauren"],
     solid: ["Lululemon", "Nike", "Adidas", "AllSaints", "Banana Republic", "Everlane", "Aritzia", "Old Navy"]
   },
};

const accessoryBrands = {
   purses: ["Coach", "Kate Spade", "Loewe", "Longchamp", "Mango", "Marc Jacobs"],
   jewelry: ["Anthropologie", "BaubleBar", "Gorjana", "Kendra Scott", "Mejuri", "Pandora", "Forever 21", "H&M", "Claire's", "Banana Republic"],
   hats: ["Carhartt", "ASOS", "Madewell", "Anthropologie", "H&M", "Forever 21", "Patagonia"],
   belts: ["Diesel", "Nordstrom", "Urban Outfitters", "Target", "Madewell", "Gap"],
   scarves: ["Acne Studios", "Zara", "Nordstrom", "Free People", "Gap", "Loft"],
};


 function getClothingRecommendations(userPreferences) {   
   let recommendedBrands = [];

   userPreferences.styles.forEach(style => {
      if (clothingBrands.style[style]) {
         recommendedBrands.push(...clothingBrands.style[style]);
      }
   });

   if (clothingBrands.type[userPreferences.typicalWear]) {
      recommendedBrands.push(...clothingBrands.type[userPreferences.typicalWear]);
   }

   if (clothingBrands.color[userPreferences.colorPalette]) {
      recommendedBrands.push(...clothingBrands.color[userPreferences.colorPalette]);
   }

   if (userPreferences.patterns.length > 0) {
      userPreferences.patterns.forEach(pattern => {
         if (clothingBrands.pattern[pattern]) {
            recommendedBrands.push(...clothingBrands.pattern[pattern]);
         }
      });
   }

   let recommendedAccessories = [];
   userPreferences.accessories.forEach(accessory => {
      if (accessoryBrands[accessory]) {
         recommendedAccessories.push(...accessoryBrands[accessory]);
      }
   });

   recommendedBrands = [...new Set(recommendedBrands)];
   recommendedAccessories = [...new Set(recommendedAccessories)];
   recommendedBrands = recommendedBrands.filter(brand => !userPreferences.stores.includes(brand));

   return {
      clothing: recommendedBrands,
      accessories: recommendedAccessories
   };
}




   


