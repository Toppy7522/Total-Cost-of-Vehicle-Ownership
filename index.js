console.log("JS is running...");
/*Values*/
const data = {
    citymileage: 60.0,
    highwaymileage: 60.0,
    onroadprice: 500000,
    brand: "Brand",
    distanceperday: 10,
    geographyresidence: "Place" ,
    insurance:2000,
    accessories:0,
    service:0,
    repairs:0,
    ownershipyears:0,
    ownershipmonths:0,
    expensesname:"",
    expensesyears:0,
    expensesmonths:0,
    expensesdays:0,
    expenses:0,
    tripkm:0
    
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
SliderAndInput('slider-distance-per-day', 'input-distance-per-day', 'distanceperday');

/*Options Function Calls*/
optionInput('.brandoptions', 'brandanswer', 'brand');
optionInput('.geography-residence', 'geographyanswer', 'geographyresidence');


/*Input Function Calls*/
InputBox('input-insurance','insurance');
InputBox('input-accessories','accessories');
InputBox('input-service','service');
InputBox('input-repairs','repairs');

/*year and Month Function Calls*/
ownership('input-year','input-month', 'ownershipyears', 'ownershipmonths');

/*year,month,day, expense Function Calls*/
frequentexpenses('input-name','input-expyear','input-expmonth','input-expday','input-expense','expensesname','expensesyears','expensesmonths','expensesdays','expenses')

/*Trips Function Calls*/
 frequenttrips('input-tripkm','tripkm')


 


/*------------------- Calculation oriented Functions---------------- */
function totalownershipyears(){
    const totalmonths = data.ownershipmonths + (data.ownershipyears * 12)
    return totalmonths
}
function totalkm(){

    const totalkmsmonths = data.distanceperday * data.ownershipmonths * 30;
    const totalkmsyears = data.distanceperday * data.ownershipyears * 365;
    const totalkmstrips = data.tripkm * data.ownershipyears
    const totalkms = totalkmsmonths + totalkmsyears + totalkmstrips;
    return Math.floor(totalkms)

}

function totalfuelcosts(){
    if(data.geographyresidence == "City"){
        const mileage = data.citymileage
        const totalkms =  totalkm()
        const totalfuelcost = ((totalkms)/mileage) *100
        return Math.floor(totalfuelcost)
        
    }

    if(data.geographyresidence == "Highway"){
        const mileage = data.highwaymileage
        const totalkms =  totalkm()
        const totalfuelcost = ((totalkms)/mileage) *100
        return Math.floor(totalfuelcost)
        
    }

    if(data.geographyresidence == "City+Highway"){
        const mileage = (data.citymileage + data.highwaymileage)/2
        const totalkms =  totalkm()
        const totalfuelcost = ((totalkms)/mileage) *100
        return Math.floor(totalfuelcost)
        
    }

}

function recurringexpenses(){
 let expense = 0;

     if (data.expensesdays > 0) {
        const total_days = data.ownershipyears * 365 + data.ownershipmonths * 30 + data.expensesdays;
        const freq = total_days / data.expensesdays;
        expense = freq * data.expenses;
    } else if (data.expensesmonths > 0) {
        const total_months = data.ownershipyears * 12 + data.ownershipmonths;
        const freq = total_months / data.expensesmonths;
        expense = freq * data.expenses;
    } else if (data.expensesyears > 0) {
        const total_years = data.ownershipyears;
        const freq = total_years / data.expensesyears;
        expense = freq * data.expenses;
    }

    return Math.floor(expense);
}

function totalrecurringexpenses(){
    const totalrecurringexpenses = ((data.service + data.insurance)*data.ownershipyears) + recurringexpenses() + totalfuelcosts()
    return totalrecurringexpenses
}

function onetimeexpenses(){
    const onetimeexpenses = data.accessories + data.repairs
    return Math.floor(onetimeexpenses)
}

function IRDAIdepreciation(){
 const totalMonths = totalownershipyears();
    let depreciatedValue = 0;

    if (totalMonths <= 6) {
        depreciatedValue = data.onroadprice * 0.05; 
    } 
    else if (totalMonths <= 12) {
        depreciatedValue = data.onroadprice * 0.15; 
    } 
    else if (totalMonths <= 24) {
        depreciatedValue = data.onroadprice * 0.20; 
    } 
    else if (totalMonths <= 36) {
        depreciatedValue = data.onroadprice * 0.30; 
    } 
    else if (totalMonths <= 48) {
        depreciatedValue = data.onroadprice * 0.40; 
    } 
    else if (totalMonths <= 60) {
        depreciatedValue = data.onroadprice * 0.50; 
    } 
    else {

        const totalYears = Math.floor(totalMonths / 12);
        const remainingValue = data.onroadprice * Math.pow(0.9, totalYears);
        depreciatedValue = data.onroadprice - remainingValue;
    }

    return Math.floor(depreciatedValue);
}

function TCO(){
    const TCO = onetimeexpenses() + totalrecurringexpenses() + IRDAIdepreciation()
    return Math.floor(TCO)
}

function costperKm(){
    const kms = totalkm();
    return kms > 0 ? (TCO()/kms).toFixed(2) : 0;
}

function costperyear(){
    const years = totalownershipyears()/12;
    return years > 0 ? (TCO()/years).toFixed(2) : 0;
}

function costpermonth(){
    const months = totalownershipyears();
    return months > 0 ? (TCO()/months).toFixed(2) : 0;
}

function costperweek(){
    const weeks = totalownershipyears()*4;
    return weeks > 0 ? (TCO()/weeks).toFixed(2) : 0;
}
function costperday(){
    const days = totalownershipyears()*30;
    return days > 0 ? (TCO()/days).toFixed(2) : 0;
}

function remainingvehiclevalue(){
    const vehiclevalue = data.onroadprice - TCO()
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





const displaytotalrecurringexpenses = document.getElementById("displaytotalrecurringexpenses")
const displaydistanceperday = document.getElementById("displaydistanceperday");
const displayMileagecost = document.getElementById("displayMileagecost");
const displayIRDAIdep = document.getElementById("displayIRDAIdep")
const displayTCO = document.getElementById("displayTCO")
const displaycostperKm = document.getElementById("displaycostperKm")
const displaycostperyear = document.getElementById("displaycostperyear")
const displaycostpermonth = document.getElementById("displaycostpermonth")
const displaycostperweek = document.getElementById("displaycostperweek")
const displaycostperday = document.getElementById("displaycostperday")
const displayremainingvehiclevalue = document.getElementById("displayremainingvehiclevalue")
/*


    
    displayHighwayMileage.textContent = data.highwaymileage;
    displayOnroadprice.textContent = data.onroadprice;
    displayBrand.textContent = data.brand;

    displaygeography.textContent = data.geographyresidence;
    displayinsurance.textContent = data.insurance;
    displayaccessories.textContent = data.accessories;
    displayservice.textContent = data.service;
    displayrepairs.textContent = data.repairs;
    displayownership.textContent = data.ownershipyears + " Years " + data.ownershipmonths + " Months ";
    displayreexpenses.textContent = data.expensesname + data.expensesyears + "  Years " + data.expensesmonths + " Months " + data.expensesdays + " Days Rs. " + data.expenses;
    displaytrips.textContent = data.tripkm;



*/
displayButton.addEventListener("click", () => {
    displaydistanceperday.textContent = totalkm();
    displayMileagecost.textContent = totalfuelcosts();
    displaytotalrecurringexpenses.textContent = totalrecurringexpenses();
    displayIRDAIdep.textContent = IRDAIdepreciation();
    displayTCO.textContent = TCO();
    displaycostperKm.textContent = costperKm();
    displaycostperyear.textContent = costperyear();
    displaycostpermonth.textContent = costpermonth();
    displaycostperday.textContent = costperday();
    displaycostperweek.textContent = costperweek();
    displayremainingvehiclevalue.textContent = remainingvehiclevalue();
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