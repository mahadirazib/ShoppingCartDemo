

// Getting name and price of the product that has been clicked on.
// Then creating table row(tr) element and adding content to the element.
// And finally adding element to the cart table.

let addToCart = (el)=>{
    let ele = el.parentElement.parentElement.getElementsByClassName("productText");
    let name = ele[0].getElementsByClassName("productName")[0].innerText;
    let price = ele[0].getElementsByClassName("productPrice")[0].innerText
    let tableRow = document.createElement("tr");
    
    tableRow.innerHTML = "<td>" + name + "</td>" + "<td class='cartPrice'>" + price.slice(0, -1) + "</td>" + "<td onclick='removeProduct(this)' class='crossButton'> X </td>";

    let parent = document.querySelector(".cartList");
    parent.appendChild(tableRow)

    calculatePrice();
    console.log("Product added successfully");
}



// Specify the element that has to be deleted
// Then remove the element from the cart table.

function removeProduct(ele){
    let parent = ele.parentElement.parentElement;
    parent.removeChild(ele.parentElement);
    calculatePrice();
    console.log("Product removed successfully");
}





// Calculating the price of products.
// It will be called when a product is added or removed.

function calculatePrice(){
    let num = document.querySelectorAll(".cartPrice").length;
    let sum = 0;
    let ele;
    for(let i=0; i<num; i++){
        ele = document.querySelectorAll(".cartPrice")[i].innerText;
        sum += Number(ele);
    }

    document.querySelector("#showPrice").innerHTML = sum;
}




// this for loop is to add eventListenner(mouseenter and mouseleave) to the products.
// It is for UI. 

let num = document.querySelectorAll(".product").length;

for(let i=0; i<num; i++){
    document.querySelectorAll(".product")[i].addEventListener("mouseenter", function(){
        this.getElementsByClassName("imageContainer")[0].style.height = "130px";
        this.getElementsByClassName("addToCartButton")[0].style.zIndex = "2";
        this.getElementsByClassName("addToCartButton")[0].style.opacity = "1";
    })
    
    document.querySelectorAll(".product")[i].addEventListener("mouseleave", function(){
        this.getElementsByClassName("imageContainer")[0].style.height = "200px";
        this.getElementsByClassName("addToCartButton")[0].style.zIndex = "-1";
        this.getElementsByClassName("addToCartButton")[0].style.opacity = "0";
    })
}





// seeCart and unseenCart is for toggling the cart details.
// It is also for UI.

function seeCart(ele){
    document.querySelector(".productContainer").style.width = "70%";
    document.querySelector(".productContainer").style.margin = "20px";
    document.querySelector(".cartDetails").style.opacity = "1";
    document.querySelector(".cartDetails").style.zIndex = "1";
    ele.innerText = "➡";    
    ele.setAttribute("onclick", "unseenCart(this)");
}

function unseenCart(ele){
    document.querySelector(".productContainer").style.width = "100%";
    document.querySelector(".productContainer").style.margin = "20px auto";
    document.querySelector(".cartDetails").style.opacity = "0";
    document.querySelector(".cartDetails").style.zIndex = "-1";
    ele.innerText = "⬅";
    ele.setAttribute("onclick", "seeCart(this)");
}




