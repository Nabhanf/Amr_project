const sideMenu=document.querySelector("aside");
const menuBtn=document.querySelector("#menu-btn");
const closeBtn=document.querySelector("#close-btn");
const themetoggler=document.querySelector(".theme-toggler")
// show sidebar
menuBtn.addEventListener('click',()=>{
    sideMenu.style.display ='block';
})
// close sidebar
closeBtn.addEventListener('click',()=>{
    sideMenu.style.display='none';
})
// change theme
themetoggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables');

    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//FILL ORDERS IN TABLE
orders.forEach(order=>{
    const tr=document.createElement('tr')
    const trContent=`
                    <td>${order.productName}</td>
                    <td>${order.productNumber}</td>
                    <td>${order.paymentStatus}</td>
                    <td class="${order.shipping === 'Declined' ? 'danger': order.shipping === 'pending' ? 'warning': 'primary' }</td>  ">${order.shipping}</td> 
                    <td class="primary">Details</td>`;
                    tr.innerHTML = trContent;
                    document.querySelector('table tbody ').append(tr);                    

})