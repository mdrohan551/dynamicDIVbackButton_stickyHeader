getData = async ()=>{
    let cardRoot = document.getElementById('cardRoot');
    let getdummy = await fetch('https://dummyjson.com/products');
    let productData=await getdummy.json();
     function ratingStart(rating){
         const maxStart = 5;
         let startHtml = '';


         for(let i = 1; i <= maxStart; i++){
            if(i <= rating ){
                startHtml += '<span class ="star selected">&#9733;</span>'
            }
            else if(i - 1 < rating && rating < i){
                startHtml += '<span class ="star selected">&#9733;</span>' 
            }
            else {
                startHtml += '<span class ="star ">&#9733;</span>' 
            }
         }
         return startHtml;
    }
   
     cardRoot.innerHTML=productData.products.map(seeProduct => `
           <div class="card">
            <img src="${seeProduct.images[0]}" class="header" alt="">
            <div class="info">
                <p class="title">${seeProduct.title} </p>
                <p>${seeProduct.description}</p>
                   <p>Rating: <span class="star-rating">${ratingStart(seeProduct.rating)}</span></p>

                <p>in stock: ${seeProduct.stock}</p>
            </div>
            
            <div class="footer">
                <a href="" class="action">get start</a>
            </div>
        </div>
        
        
        `).join('')
}
getData()







// nav bar scroll stciky
let NavBar = document.querySelector('#Nav-bar');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 50){
        NavBar.classList.add('Stciky')
    }
    else{
        NavBar.classList.remove('Stciky')
    }
})

// back to top button function 
let backTOtop = document.querySelector('.button');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 50){
        backTOtop.classList.add('active')
    }
    else{
        backTOtop.classList.remove('active')
    }
})



















