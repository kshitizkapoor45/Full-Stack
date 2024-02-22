const baseURL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const text = document.querySelector("#text");
const btn = document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".To select");

for (let select1 of dropdowns) {
    for (currCode in countryList) 
    {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if(select1.name === "from" && currCode === "USD")
        {
            newOption.selected = "selected";
        }
        else if(select1.name === "To" && currCode === "INR")
        {
            newOption.selected = "selected";
        }
        select1.append(newOption);
    }
    select1.addEventListener("change",(evt) => {
        updateFlag(evt.target);
        
    });
}
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
};

btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".amount input");
    let amtval = amount.value;
    if(amtval === "" || amtval < 1)
    {
        amtval = 1;
        amount.value = "1";
    }
    //console.log(fromCurr.value,toCurr.value);
    const URL = `${baseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];

    let finalAmount = amtval * rate;
    text.innerText = `${amtval} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
    
});


