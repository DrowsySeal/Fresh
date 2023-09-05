let receipt = {};
const prices = {
  'rail': 4,
  'call': 6,
  'premium': 8
};

// clear the receipt
document.querySelector('#reset').addEventListener('click', function(e) {
    e.preventDefault();
    receipt = {};
    document.querySelector('#outputarea').innerHTML = '';
});

document.querySelector('#calculator').addEventListener('submit', function(e) {
  e.preventDefault();
  let commType = this.commType.value;
  let amount = this.numColors.value * 1;
  if(commType in receipt) {
    receipt[spirit] += amount;
  } else {
    receipt[spirit] = amount;
  }
  let list = '';
  let total = 0;
  for(const e in receipt) {
    let sum = prices[e] * receipt[e];
    list += `<div>${e} x ${receipt[e]} = ${sum.toFixed(2)}</div>`;
    total += sum;
  }
  list += `<hr>${total.toFixed(2)} ¤`;
  document.querySelector('#outputarea').innerHTML = list;
})