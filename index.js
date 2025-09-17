console.log("JS is running...");
/* Dummy Values
    vehicletype: "Bike",
    vehiclebrand: "Honda",
    vehiclemodel: "Hornet 125",
    citymileage: 47,
    highwaymileage: 55,
    onroadprice: 135000,
    exshowroomprice: 112000,
    mandatoryinsurance: 7800,
    distanceperday: 20,
    geographyresidence: "City+Highway" ,
    insurance:1500,
    accessories:3000,
    service:3000,
    repairs:1000,
    ownershipyears:3,
    ownershipmonths:0,
    expenses:200,
    tripkm:800,
    depreciationtype:"None",
    commutingdays:20,
    fueltype:"Fuel",


    Real Values
     vehicletype: "Type",
    vehiclebrand: "",
    vehiclemodel: "",
    citymileage: 40,
    highwaymileage: 50,
    onroadprice: 100000,
    exshowroomprice: 0,
    mandatoryinsurance: 0,
    distanceperday: 0,
    geographyresidence: "Place" ,
    insurance:0,
    accessories:0,
    service:0,
    repairs:0,
    ownershipyears:0,
    ownershipmonths:0,
    expenses:0,
    tripkm:0,
    depreciationtype:"None",
    commutingdays:20,
    fueltype:"Petrol",
    

*/
const data = {
    vehicletype: "Bike",
    vehiclebrand: "Honda",
    vehiclemodel: "Hornet 125",
    citymileage: 47,
    highwaymileage: 55,
    onroadprice: 135000,
    exshowroomprice: 112000,
    mandatoryinsurance: 7800,
    distanceperday: 20,
    geographyresidence: "City+Highway" ,
    insurance:1500,
    accessories:3000,
    service:3000,
    repairs:1000,
    ownershipyears:3,
    ownershipmonths:0,
    expenses:200,
    tripkm:800,
    depreciationtype:"None",
    commutingdays:20,
    fueltype:"Fuel",


    
};




/*Button Option Function*/
function optionInput(buttonClass, displayElementId, dataKey) {
    const options = document.querySelectorAll(buttonClass);
    const displayElement = document.getElementById(displayElementId);

    if (!displayElement) return;

    displayElement.textContent = data[dataKey];

    options.forEach(button => {
        button.addEventListener("click", () => {
            data[dataKey] = button.value;
            displayElement.textContent = data[dataKey];
        });
    });
}

/*Slider/Inputbox Function*/
function SliderAndInput(sliderId, inputId, dataKey) {
    const slider = document.getElementById(sliderId);
    const input = document.getElementById(inputId);
    slider.value = data[dataKey];
    input.value = data[dataKey];
        
    slider.addEventListener("input", () => {
        const value = parseFloat(slider.value);
        input.value = value;
        data[dataKey] = value;
    });

    input.addEventListener("input", () => {
        const value = parseFloat(input.value);
        slider.value = value;
        data[dataKey] = value;
    });

}

/*Input box Function*/
function InputBox(inputId,dataKey){
     const input = document.getElementById(inputId);
      input.value = data[dataKey];

        input.addEventListener("input", () => {
        const value = parseFloat(input.value);
        data[dataKey] = value;
    });
}

/*Year and Month*/
function ownership(years, months, dataKey1, dataKey2) {
    const input1 = document.getElementById(years);
    const input2 = document.getElementById(months);

    input1.value = data[dataKey1];
    input2.value = data[dataKey2];

    input1.addEventListener("input", () => {
        const value = parseFloat(input1.value);
        data[dataKey1] = isNaN(value) ? 0 : value; 
    });

    input2.addEventListener("input", () => {
        const value = parseFloat(input2.value);
        data[dataKey2] = isNaN(value) ? 0 : value;
    });
}


/*Year, Month, day and expense*/
function frequentexpenses(name,years,months,days,expenses,dataKey1,dataKey2,dataKey3,dataKey4,dataKey5){
    const input1 = document.getElementById(name);
    const input2 = document.getElementById(years);
    const input3 = document.getElementById(months);
    const input4 = document.getElementById(days);
    const input5 = document.getElementById(expenses);
    
      input1.value = data[dataKey1];
      input2.value = data[dataKey2];
      input3.value = data[dataKey3];
      input4.value = data[dataKey4];
      input5.value = data[dataKey5];

    input1.addEventListener("input", () => {
        const value = parseFloat(input1.value);
        data[dataKey1] = value;
    });
    input2.addEventListener("input", () => {
        const value = parseFloat(input2.value);
        data[dataKey2] = value;
    });
    input3.addEventListener("input", () => {
        const value = parseFloat(input3.value);
        data[dataKey3] = value;
    });
    input4.addEventListener("input", () => {
        const value = parseFloat(input2.value);
        data[dataKey4] = value;
    });
    input5.addEventListener("input", () => {
        const value = parseFloat(input5.value);
        data[dataKey5] = value;
    });
}


/*Trip Km*/
function frequenttrips(tripkm,dataKey1){
    const input1 = document.getElementById(tripkm);

      input1.value = data[dataKey1];

    input1.addEventListener("input", () => {
        const value = parseFloat(input1.value);
        data[dataKey1] = value;
    });
}






/*Slider Function Calls*/
SliderAndInput('slider-city-mileage', 'input-city-mileage', 'citymileage');
SliderAndInput('slider-highway-mileage', 'input-highway-mileage', 'highwaymileage');
SliderAndInput('slider-onroadprice', 'input-onroadprice', 'onroadprice');
SliderAndInput('slider-exshowroomprice', 'input-exshowroomprice', 'exshowroomprice');
SliderAndInput('slider-distance-per-day', 'input-distance-per-day', 'distanceperday');

/*Options Function Calls*/
optionInput('.brandoptions', 'brandanswer', 'brand');
optionInput('.vehicle-type', 'vtypeanswer', 'vehicletype');
optionInput('.depreciationtype', 'depanswer', 'depreciationtype');
optionInput('.geography-residence', 'geographyanswer', 'geographyresidence');
optionInput('.fuel-type', 'fueltypeanswer', 'fueltype');

/*Input Function Calls*/
InputBox('input-insurance','insurance');
InputBox('input-accessories','accessories');
InputBox('input-service','service');
InputBox('input-repairs','repairs');
InputBox('input-mandatoryinsurance','mandatoryinsurance');
InputBox('input-brand','vehiclebrand');
InputBox('input-model','vehiclemodel');
InputBox('input-commutingdays','commutingdays');
InputBox('input-expenses','expenses');


/*year and Month Function Calls*/
ownership('input-year','input-month', 'ownershipyears', 'ownershipmonths');

/*Trips Function Calls*/
 frequenttrips('input-tripkm','tripkm')





/*------------------- Calculation oriented Functions---------------- */

function totalownershipmonths() {
    return (data.ownershipmonths || 0) + ((data.ownershipyears || 0) * 12);
}

function totalownershipyears() {
    return (data.ownershipyears || 0) + ((data.ownershipmonths || 0) / 12);
}

function totalcommuntingdayspermonth(){
    const totalcommuntingdayspermonth = data.commutingdays
    return totalcommuntingdayspermonth
}
function totalkm() {
    const months = totalownershipmonths();
    const daysPerMonth = data.commutingdays || 0;
    const dailyDistance = data.distanceperday || 0;
    const trips = (data.tripkm || 0) * (data.ownershipyears || 0);

    return Math.floor((dailyDistance * months * daysPerMonth) + trips);
}


function totalfuelcosts() {
    let fueltype = 0;
    if(data.fueltype === "Petrol"){
        fueltype = 100;
    }
    else if(data.fueltype === "Diesel"){
        fueltype = 92.5;
    }
    const totalKms = totalkm();
    const cityMileage = data.citymileage || 1;
    const highwayMileage = data.highwaymileage || 1;
    const tripKms = (data.tripkm || 0) * (data.ownershipyears || 1);
    const fuelPrice = fueltype; // Rs per litre

    // commuting kms = total - trip kms
    const commuteKms = totalKms - tripKms;

    if (totalKms <= 0) return 0;

    let commuteCost = 0;
    if (data.geographyresidence === "City") {
        commuteCost = (commuteKms / cityMileage) * fuelPrice;
    } else if (data.geographyresidence === "Highway") {
        commuteCost = (commuteKms / highwayMileage) * fuelPrice;
    } else if (data.geographyresidence === "City+Highway") {

        const avgMileage = (cityMileage + highwayMileage) / 2;
        commuteCost = (commuteKms / avgMileage) * fuelPrice;
    }

    const tripCost = (tripKms / highwayMileage) * fuelPrice;

    return Math.floor(commuteCost + tripCost);
}

function recurringexpenses(){
    const expense = data.expenses * totalownershipmonths()

    return Math.floor(expense);
}

function totalrecurringexpenses(){
    let total = 0;

    if (data.ownershipyears < 5) {
        total = (data.service * data.ownershipyears) 
              + recurringexpenses() 
              + totalfuelcosts();
    } else {
        total = ((data.insurance * (data.ownershipyears - 5)) + data.service) 
              + recurringexpenses() 
              + totalfuelcosts();
    }
    return Math.floor(total);
}

function onetimeexpenses(){
    const onetimeexpenses = data.accessories + data.repairs + (data.onroadprice - data.exshowroomprice)
    return Math.floor(onetimeexpenses)
}

function IRDAIdepreciation(){
 const totalMonths = totalownershipyears();
    let depreciatedValue = 0;

    if (totalMonths <= 6) {
        depreciatedValue = data.exshowroomprice * 0.05; 
    } 
    else if (totalMonths <= 12) {
        depreciatedValue = data.exshowroomprice * 0.15; 
    } 
    else if (totalMonths <= 24) {
        depreciatedValue = data.exshowroomprice * 0.20; 
    } 
    else if (totalMonths <= 36) {
        depreciatedValue = data.exshowroomprice * 0.30; 
    } 
    else if (totalMonths <= 48) {
        depreciatedValue = data.exshowroomprice * 0.40; 
    } 
    else {
        depreciatedValue = data.exshowroomprice * 0.50; 
    } 


    return Math.floor(depreciatedValue);
}
function resalevaluedepreciation() {
    let depreciation = 0;

    if (data.ownershipyears < 1) {
        depreciation = data.exshowroomprice * 0.15;
    } 
    else {
        depreciation = data.exshowroomprice * Math.pow(0.90, totalownershipyears());
    }

    return Math.floor(data.exshowroomprice - depreciation);
}

function totaldepreciation(){
    let depreciationValue = 0;
    if (data.depreciationtype === "IRDAI") {
        depreciationValue = IRDAIdepreciation();
    } 
    else if (data.depreciationtype === "Resale-value") {
        depreciationValue = resalevaluedepreciation();
    } 
    else {
        depreciationValue = 0;
    }
    return Math.floor(depreciationValue);
}

function TCO(){
    const TCO = onetimeexpenses() + totalrecurringexpenses() + totaldepreciation() 
    return Math.floor(TCO)
}

function costperKm() {
    const kms = totalkm();
    return kms > 0 ? (TCO() / kms).toFixed(2) : 0;
}
/*

function costperyear() {
    const years = totalownershipyears();
    return years > 0 ? (TCO() / years).toFixed(2) : 0;
}

function costpermonth() {
    const months = totalownershipmonths();
    return months > 0 ? (TCO() / months).toFixed(2) : 0;
}

function costperweek() {
    const weeks = totalownershipmonths() * 4;
    return weeks > 0 ? (TCO() / weeks).toFixed(2) : 0;
}

function costperday() {
    const days = totalownershipmonths() * 30;
    return days > 0 ? (TCO() / days).toFixed(2) : 0;
}
    */

function profitorloss(){
    const vehiclevalue = data.exshowroomprice -totaldepreciation() - TCO()
    return vehiclevalue
}

/*cost without depreciation value*/

function TCO2(){
    const TCO = onetimeexpenses() + totalrecurringexpenses() 
    return Math.floor(TCO)
}

function costperKm2() {
    const kms = totalkm();
    return kms > 0 ? (TCO2() / kms).toFixed(2) : 0;
}

function costperyear2() {
    const years = totalownershipyears();
    return years > 0 ? (TCO2() / years).toFixed(2) : 0;
}

function costpermonth2() {
    const months = totalownershipmonths();
    return months > 0 ? (TCO2() / months).toFixed(2) : 0;
}

function costperweek2() {
    const weeks = totalownershipmonths() * 4;
    return weeks > 0 ? (TCO2() / weeks).toFixed(2) : 0;
}

function costperday2() {
    const days = totalownershipmonths() * 30;
    return days > 0 ? (TCO2() / days).toFixed(2) : 0;
}

function profitorloss2(){
    const vehiclevalue = data.exshowroomprice -totaldepreciation() - TCO2()
    return vehiclevalue
}










/*Results display*/
const displayButton = document.getElementById("displayButton");
const displayCityMileage = document.getElementById("displayCityMileage");
const displayOnroadprice = document.getElementById("displayOnroadprice");
const displayBrand = document.getElementById("displayBrand"); 
const displaygeography = document.getElementById("displaygeography");
const displayinsurance = document.getElementById("displayinsurance")
const displayaccessories = document.getElementById("displayaccessories")
const displayservice = document.getElementById("displayservice")
const displayrepairs = document.getElementById("displayrepairs")
const displayownership = document.getElementById("displayownership")
const displaytrips = document.getElementById("displaytrips")
const displayresaledep = document.getElementById("displayresaledep")
const displaytotalrecurringexpenses = document.getElementById("displaytotalrecurringexpenses")
const displaytotaonetimeexpenses = document.getElementById("displaytotalonetimeexpenses")
const displaydistanceperday = document.getElementById("displaydistanceperday");
const displayMileagecost = document.getElementById("displayMileagecost");
const displayIRDAIdep = document.getElementById("displayIRDAIdep")


const displayTCO = document.getElementById("displayTCO")
const displaycostperKm = document.getElementById("displaycostperKm")
/*cost with depreciaton
const displaycostperyear = document.getElementById("displaycostperyear")
const displaycostpermonth = document.getElementById("displaycostpermonth")
const displaycostperweek = document.getElementById("displaycostperweek")
const displaycostperday = document.getElementById("displaycostperday")
*/
const displayremainingvehiclevalue = document.getElementById("displayremainingvehiclevalue")


/*cost without depreciaton*/

const displayTCO2 = document.getElementById("displayTCO2")
const displaycostperKm2 = document.getElementById("displaycostperKm2")
const displaycostperyear2 = document.getElementById("displaycostperyear2")
const displaycostpermonth2 = document.getElementById("displaycostpermonth2")
const displaycostperweek2 = document.getElementById("displaycostperweek2")
const displaycostperday2 = document.getElementById("displaycostperday2")
const displayremainingvehiclevalue2 = document.getElementById("displayremainingvehiclevalue2")


displayButton.addEventListener("click", () => {
    console.log("DEBUG DATA:", data);   
    console.log("Total KM:", totalkm());
    console.log("Fuel Costs:", totalfuelcosts());
    console.log("TCO:", TCO());
    displaytotaonetimeexpenses.textContent = onetimeexpenses();
    displayresaledep.textContent = data.exshowroomprice - resalevaluedepreciation();
    displaydistanceperday.textContent = totalkm();
    displayMileagecost.textContent = totalfuelcosts();
    displaytotalrecurringexpenses.textContent = totalrecurringexpenses();
    displayIRDAIdep.textContent = totaldepreciation();
    
    


    displayTCO.textContent = TCO();
    displaycostperKm.textContent = costperKm();
        /*Cost with depreciaton
    displaycostperyear.textContent = costperyear();
    displaycostpermonth.textContent = costpermonth();
    displaycostperday.textContent = costperday();
    displaycostperweek.textContent = costperweek();
    */
    displayremainingvehiclevalue.textContent = profitorloss();


        /*Cost without depreciaton*/

    displayTCO2.textContent = TCO2();
    displaycostperKm2.textContent = costperKm2();
    displaycostperyear2.textContent = costperyear2();
    displaycostpermonth2.textContent = costpermonth2();
    displaycostperday2.textContent = costperday2();
    displaycostperweek2.textContent = costperweek2();
    displayremainingvehiclevalue2.textContent = profitorloss2();



    });

    /*Slider Animation */

document.querySelectorAll(".slider").forEach(slider => {
  function updateSliderBackground(slider) {
    let min = slider.min ? slider.min : 0;
    let max = slider.max ? slider.max : 100;
    let val = slider.value;

    let percent = ((val - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(90deg, #007bff ${percent}%, #ddd ${percent}%)`;
  }

  updateSliderBackground(slider);


  slider.addEventListener("input", () => updateSliderBackground(slider));
});
