function memoryCostCalculation(cost){
  const memoryCost= document.getElementById('memory-cost');
  let base=0;
  const newMemoryCost= base + cost;
  memoryCost.innerText=newMemoryCost;  
  total();
}

function storageCostCalculation(cost){
  const storageCost= document.getElementById('storage-cost');
  let base=0;
  const newStorageCost= base + cost;
  storageCost.innerText=newStorageCost;
  total();  
}

function deliveryCostCalculation(cost){
  const deliveryCost=document.getElementById('delivery-cost');
  let base=0;
  const newDeliveryCost= base + cost;
  deliveryCost.innerText=newDeliveryCost;
  total();
}
function total(){
  const bestPriceTotal=parseInt(document.getElementById('best-price').innerText);
  const memoryCostTotal=parseInt(document.getElementById('memory-cost').innerText);
  const storageCostTotal=parseInt(document.getElementById('storage-cost').innerText);
  const deliveryCostTotal=parseInt(document.getElementById('delivery-cost').innerText);
  priceTotal= bestPriceTotal + memoryCostTotal + storageCostTotal + deliveryCostTotal;
  const totalPrice=document.getElementById('total-price');
  totalPrice.innerText=priceTotal;
  let bigTotal=document.getElementById('big-total');
  bigTotal.innerText=priceTotal;
}

document.getElementById('memory-1').addEventListener('click',function(){          
  memoryCostCalculation(0); 
 })

document.getElementById('memory-2').addEventListener('click',function(){
  memoryCostCalculation(180);  
})

document.getElementById('storage-1').addEventListener('click',function(){
  storageCostCalculation(0);  
})

document.getElementById('storage-2').addEventListener('click',function(){
  storageCostCalculation(100);  
})

document.getElementById('storage-3').addEventListener('click',function(){
  storageCostCalculation(180);  
})

document.getElementById('delivery-1').addEventListener('click',function(){
  deliveryCostCalculation(0);
})

document.getElementById('delivery-2').addEventListener('click',function(){
  deliveryCostCalculation(20);  
})

document.getElementById('promo-button').addEventListener('click',function(){
  const inputField=document.getElementById('promo-inputField');
  const inputFieldValue=inputField.value;
  let bigTotal= document.getElementById('big-total'); 
  let bigTotalText= bigTotal.innerText;
  let number=parseInt(bigTotalText);
  if(inputFieldValue == 'hasnine' && number > 1299){
    let discountAmount=(parseInt(bigTotalText))/20;
    newBigTotal= (parseFloat(bigTotalText)) - discountAmount;
    bigTotal.innerText=newBigTotal;  
  }
  else{
   alert('Invalid PROMO code ! or Lowest price served !')
  }
})