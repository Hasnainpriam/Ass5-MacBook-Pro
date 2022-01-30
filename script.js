function freeCostCalculation(product){
  const productCost= document.getElementById(product+'-cost');
  productCost.innerText="0";
  
}

function cost180Calculation(product){
  const productCost= document.getElementById(product+'-cost');
  productCost.innerText="180";
}

function total(){
  const bestPrice=parseInt(document.getElementById('best-price').innerText);
  const bestPrice=parseInt(document.getElementById('best-price').innerText);
  const bestPrice=parseInt(document.getElementById('best-price').innerText);
  const bestPrice=parseInt(document.getElementById('best-price').innerText);
  
}

document.getElementById('memory-1').addEventListener('click',function(){          
  freeCostCalculation('memory');
})
document.getElementById('memory-2').addEventListener('click',function(){
  cost180Calculation('memory');
})
document.getElementById('storage-1').addEventListener('click',function(){
  freeCostCalculation('storage');
})
document.getElementById('storage-2').addEventListener('click',function(){
  const storageCost= document.getElementById('storage-cost');
  storageCost.innerText='100';
})
document.getElementById('storage-3').addEventListener('click',function(){
  cost180Calculation('storage');
})
document.getElementById('delivery-1').addEventListener('click',function(){
  freeCostCalculation('delivery');
})

document.getElementById('delivery-2').addEventListener('click',function(){
  const deliveryCost= document.getElementById('delivery-cost');
  deliveryCost.innerText='100';
})