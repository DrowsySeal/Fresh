//////////////// PRICING CALCULATOR ////////////////
var base_prices = new Array();
base_prices["head"]=2700;
base_prices["partial"]=3300;
base_prices["fullsuit"]=6500;

var fur_prices = new Array();
fur_prices["fur1"]=0;
fur_prices["fur3"]=55;
fur_prices["fur4"]=110;
fur_prices["fur5"]=165;
fur_prices["fur6"]=220;

var mochi_prices = new Array();
mochi_prices["mochi1"]=0;
mochi_prices["mochi3"]=55;
mochi_prices["mochi4"]=110;
mochi_prices["mochi5"]=165;
mochi_prices["mochi6"]=220;

var addon_prices = new Array();
addon_prices["eyelids"] = 35;
addon_prices["tongues"] = 20;
addon_prices["teeth"] = 30;
addon_prices["hair"] = 50;
addon_prices["piercings"] = 50;
addon_prices["horns"] = 50;
addon_prices["antlers"] = 200;
// addon_prices["handpaw-claws"] = 50;
// addon_prices["feetpaw-claws"] = 50;
// addon_prices["wings-small"] = 300;

var complexity_prices = new Array();
complexity_prices["Simple"] = 1;
complexity_prices["Moderate"] = 1.1;
complexity_prices["Complex"] = 1.3;
complexity_prices["Very Complex"] = 1.5;

// BASE PRICING
function getBasePrice()
{
    var basePrice=0;
    var theForm = document.forms["calculator"];
    var selectedBase = theForm.elements["commType"];
    basePrice = base_prices[selectedBase.value];

    return basePrice;
}

// FUR PRICING
function getFurPrice()
{
    var furPrice=0;
    var theForm = document.forms["calculator"];
    var selectedBase = theForm.elements["furColors"];
    furPrice = fur_prices[selectedBase.value];

    return furPrice;
}

// MOCHI PRICING
function getMochiPrice()
{
    var mochiPrice=0;
    var theForm = document.forms["calculator"];
    var selectedBase = theForm.elements["mochiColors"];
    mochiPrice = mochi_prices[selectedBase.value];

    return mochiPrice;
}

// DESIGN COMPLEXITY
function getComplexityPrice()
{
    var complexityPrice=0;
    var theForm = document.forms["calculator"];
    var complexity = theForm.elements["complexity"];
    for(var i = 0; i < complexity.length; i++)
    {
        if(complexity[i].checked)
        {
            complexityPrice = complexity_prices[complexity[i].value];
            break;
        }
    }

    return complexityPrice;
}

// ADD-ONS
function getAddonsPrice() {
	var addonsCost = 0;
  var theForm = document.forms["calculator"];
	var addons = theForm.elements["addons"];

	for (var i = 0; i < addons.length; i++) {
		if (addons[i].checked) {
			addonsCost = addonsCost + addon_prices[addons[i].value];
		}
	}
	return addonsCost;
}

// TOTAL CALCULATION
function calculateTotal()
{
  var addComplexity = Math.round(getBasePrice()*getComplexityPrice());
  var totalPrice = addComplexity + getFurPrice() + getMochiPrice() + getAddonsPrice();

  document.getElementById('totalPrice').innerHTML =
    "Estimated price is $"+totalPrice;
}

// // Show or hide head/partial/fullsuit options and clear when necessary
// function changeType()
// {
//   var commDrop = document.getElementById("commType");
//   var selectedValue = commDrop.options[commDrop.selectedIndex].value;

//   var theForm = document.forms["calculator"];
// 	var addons = theForm.elements["addons"];

//     if (selectedValue == "head") {
//       // hide and clear partial and fullsuit options
//       var partialOnly = document.getElementsByClassName("partial");
//       partialOnly.checked = false;
//       partialOnly.setAttribute('hidden','true');
//     }
// }



