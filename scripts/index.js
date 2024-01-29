

// let item={
// item_image:'images/1.jpg',
// rating:{
// stars:4.5,
// noOfReviews:1400,
// },
// companyName:'Carlton London',
// itemName:'Rhodium-Plated CZ Floral',
// currentPrice:606,
// originalPrice:1045,
// discountPercent:46,
// }

let bagItems;
olLoad();

function olLoad(){
  let bagItemstr=localStorage.getItem('bagItems');
  bagItems= bagItemstr ? JSON.parse(bagItemstr) : [];

  displayItems();
  displayBagIcon();
}




function addTobag(itemId){
bagItems.push(itemId);
localStorage.setItem('bagItems',JSON.stringify(bagItems));
displayBagIcon();

}
function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItems(){
  let itemConatainerElement=document.querySelector('.items-contianer');

  if(!itemConatainerElement){
    return;
  }
  
  let innerHTML=``;
  items.forEach(item => {
    innerHTML+=`
    <div class="item-container">
  <img src="${item.image}" alt="item-image" class="item-img">
  <div class="rating">
     ${item.rating.stars}⭐ | ${item.rating.count} 
  </div>
  <div class="comapany-name">
  ${item.company}
  </div>
  <div class="item-name">
   ${item.item_name}
  </div>
  <div class="price">
     <span class="current-price">Rs ${item.current_price}</span>
     <span class="original-price"> Rs ${item.original_price}</span>
     <span class="discount">(${item.discount_percentage}% OFF)</span>
  </div>
  <button class="btn-add-bag" onclick="addTobag(${item.id})">
  Add to bag
  </button>
  </div>
  `
  });
  
  itemConatainerElement.innerHTML=innerHTML;
}

