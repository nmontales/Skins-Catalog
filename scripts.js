/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

//Variables for skin images, specified file path for images
const howl = "public/Howl.png" 
const dlore = "public/DragonLore.png"
const ak47 = "public/661.png"
const karambit = "public/Karambit.png"
const noStar = "public/noStarKarambit.png"
const pandora = "public/pandorasBox.png"

//Using an array of objects to make a custom dataset 
const skinsData = [
    {
        image: howl,
        title: "4x IBP M4A4 Howl",
        numPrice: 100000,
        price: "Price: $100k",
        description: `The M4A4 Howl skin in Counter-Strike became infamous after a copyright controversy involving its original wolf design, which was said to reference the artist's dog but led to a lawsuit from the true artist. Valve, the game's developer, declared it "Contraband," stopping its distribution and altering its design. Existing owners kept their Howls, causing their value to surge. The particular Howl shown here was customized with four rare IBuyPower Holographic stickers from the Katowice 2014 tournament, each worth over $30k at the time. This customization, known as a "craft," made it the most expensive skin sold in Counter-Strike history at the time, with a price tag of $100k."`
    },

    {
        image: dlore,
        title: "AWP Dragon Lore",
        numPrice: 60000,
        price: " Price: $5k - $60K",
        description: "The AWP Dragon Lore's high price in Counter-strike stems from its rarity, especially the souvenir versions from Cobblestone Collection cases during Major Championships, and its unique aesthetic featuring a dragon design. These factors, coupled with the status symbol it represents within the community, have made it extremely sought-after. Souvenir versions, marked with event-specific stickers, are even more valuable due to their uniqueness and historical significance. Limited supply and high demand, particularly for well-preserved skins with desirable stickers, have skyrocketed its value, making the Dragon Lore one of the most expensive and coveted skins in the game."
    },

    {
        image: ak47,
        title: "661 Ak47 Blue Gem",
        numPrice: 1000000,
        price: "Price: $750k - $1 million",
        description: `The AK-47 Case Hardened "Blue Gem" with pattern index 661, particularly in Factory New condition with StatTrak, is an extremely rare and expensive CS:GO skin. Known as a "Blue Gem" due to its dominant blue hue, this specific pattern is coveted for its aesthetic appeal and rarity. The combination of its pristine condition and StatTrak feature, which counts kills, further elevates its status. This particular "Blue Gem" is a one-of-a-kind item, unmatched in its blue coverage and quality, making it a highly sought-after collector's piece and significantly driving up its value within the Counter-Strike community. The price is heavily estimated based on the price of its "older brother" the blue gem karambit, which has a price tag of around $2 million.`
    },

    {
        image: karambit,
        title: "387 Blue Gem Karambit",
        numPrice: 2000000,
        price: "Price: $1.5 million - $2 million",
        description: `The Factory New "Blue Gem" Karambit, a one-of-one skin in Counter-Strike, is renowned for its rarity and striking aesthetics, making it the most expensive skin across the game. Characterized by its dominant blue coloration, this Case Hardened skin stands out for its uniqueness and the exceptional condition that highlights its vibrant hues. The curved blade of the Karambit further elevates its desirability among collectors. Its unmatched status was confirmed when an offer of $1.5 million USD was declined by the owner, deemed "too low" for its value. This incident not only emphasizes the skin's unparalleled worth but also solidifies its position as the pinnacle of Counter-Strike collectibles, unmatched in both rarity and market value.`
    },

    {
        image: noStar,
        title: "No Star Karambit",
        numPrice: 80000,
        price: "Price: $80k",
        description: `The "No Star" Karambit in Counter-Strike stands out for its rarity, with its distinct feature being the absence of the star symbol in its title, and it achieves the pinnacle of desirability due to its 0 float value. The intrigue around its creation, speculated to be a result of Valve restoring a skin to a scammed player in the early days of CSGO trading, has garnered it a lot of attention around collectors. The price of the knife is a speculation because its the only of its kind, but estimates suggest that it could reach as much as $80k. With how much float values matter to collectors it isn't a stretch to say that this knife could be worth a lot more than what the estimates suggest.`
    },

    {
        image: pandora,
        title: "Pandora's Box Gloves",
        numPrice: 46000,
        price: "Price: $46k",
        description: `Pandora's Box gloves are among the most expensive items in Counter-Strike, prized for their unique design with iridescent accents and rarity from glove case drops. Their appeal as a prestigious alternative to knives allows players to customize their look distinctively. The demand is especially high for Factory New versions, which showcase the design vividly. This rarity, combined with their status-enhancing effect in the gaming community, positions these gloves as a coveted accessory, pushing their value and desirability to the top tier of in-game items.`
    },
]

//initialize variable skins and save it to the div with the skins class
const skins = document.querySelector(".Skins")

//function to edit the skins content
function editSkinContent(skin) {
    const div = document.createElement("div") //makes a new div for the skin
    div.classList.add("skinsContent") //adds skins content class to div

    //appends the image from the dataset to the div
    const image = document.createElement("img")
    image.src = skin.image
    div.appendChild(image)

    //appends the title from the dataset to the div
    const title = document.createElement("h2")
    title.innerText = skin.title
    div.appendChild(title)

    //appends the price from the dataset to the div
    const price = document.createElement("h3")
    price.innerText = skin.price
    div.appendChild(price)

    //appends the description to the div 
    const description = document.createElement("p")
    description.innerText = skin.description
    div.appendChild(description)

    //appends the div to the skins class
    skins.appendChild(div)
}

//loops through the dataset and makes a new div for each skin that has its contents 
skinsData.forEach(function (skin){
    editSkinContent(skin)
})

//function for the search bar 
function handleSearch() {
    const search = document.querySelector("#search") //intializes variable to the input with the id of search
    const value = search.value.toLowerCase().trim() //saves what's typed into the search bar lowercases it and trims whitespace
    
    //if nothing is in the search bar
    if (value == null || value == undefined || value == "") {
        alert("not a valid search input")
        return
    } 

    //checks to see if what was typed in the search bar is in the title of any of the skins
    const found = skinsData.find((skin) => skin.title.toLowerCase().trim().includes(value))
    
    //if what was typed wasn't found show "Search Not Found"
    if(found == undefined) {
        const notFound = document.createElement("h1")
        notFound.innerText = "Search Not Found"
        skins.innerHTML = null;
        skins.appendChild(notFound)

    //else show result 
    } else {
        skins.innerHTML = null;
        editSkinContent(found)
    }
}

//function to handle filter 
function handleFilter() {
    const filter = document.querySelector("#filter") //variable initialized to the select element with the id filter
    const value = filter.value //initializes variable to value found in select element
    let sorted = [] //initialize sorted array

    //if user selects highest sort by most expensive 
    if (value == "highest") {
        sorted = skinsData.toSorted(function (skin1, skin2){
            return skin2.numPrice - skin1.numPrice
        })
        skins.innerHTML = null; //prevents repeats
        sorted.forEach(function (skin){
            editSkinContent(skin)
        })
      //if user selects lowest sort by least expensive  
    } else if(value == "lowest") {
        sorted = skinsData.toSorted(function (skin1, skin2){
            return skin1.numPrice - skin2.numPrice
        })
        skins.innerHTML = null;
        sorted.forEach(function (skin){
            editSkinContent(skin)
        })
        //if user wants to see original layout
    } else {
        skins.innerHTML = null;
        skinsData.forEach(function (skin){
            editSkinContent(skin)
        })
    }
}
