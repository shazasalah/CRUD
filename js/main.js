//declare var inputs
var productName = document.getElementById("productName");
var productModel = document.getElementById("productModel");
var productPrice = document.getElementById("productPrice");
var productDescInput = document.getElementById("productDescInput");
var productArr = []
var updateBTN =  document.getElementById("updateBTN");
var addBTN = document.getElementById("addBTN");
var currentIndex;

if (localStorage.getItem("myProducts") != null){

    productArr = JSON.parse(localStorage.getItem("myProducts"));
    displayProduct();

}else{
    productArr = []
}

function AddProduct(){
    var products = {
        name:productName.value ,
        model:productModel.value ,
        price:productPrice.value ,
        desc:productDescInput.value ,
        
    }
    localStorage.setItem("myProducts", JSON.stringify(productArr))
    console.log(products);
    productArr.push(products);
    console.log(productArr)
    displayProduct();
    clearForm();
}

function clearForm(){
    productName.value = "",
    productModel.value = "",
    productPrice.value = "",
    productDescInput.value = ""
}

function displayProduct(){
    var box = ""
    for (var i = 0; i<productArr.length; i++){
        box +=`                <tr>
        <td>${i+1} </td>
        <td> ${productArr[i].name} </td>
        <td> ${productArr[i].model} </td>
        <td> ${productArr[i].desc}</td>
        <td>${productArr[i].price} </td>
        <td> <button onclick="readForUpdate(${i})" class="btn btn-outline-warning btn-sm"> <i class="fa-solid fa-pen-to-square"></i> </button> </td>
        <td> <button onclick="deleteProduct(${i})" class="btn btn-outline-danger btn-sm"> <i class="fa-solid fa-trash-can"></i> </button> </td>
    </tr>
`
    }
    document.getElementById("tBody").innerHTML=box;
    
    
}

function deleteProduct(deleteIndex){
    productArr.splice(deleteIndex,1)
    localStorage.setItem("myProducts", JSON.stringify(productArr))
    displayProduct();

}

function readForUpdate(i){
    productName.value=productArr[i].name;
    productModel.value=productArr[i].model;
    productPrice.value=productArr[i].price;
    productDescInput.value=productArr[i].desc;

    updateBTN.classList.replace("d-none", "d-inline-block");
    addBTN.classList.add("d-none")
    currentIndex = i;
    return currentIndex

    
}



function updateProduct(){

    console.log(currentIndex);

    
    productArr.splice(currentIndex, 1,{
            name: productName.value,
            model: productModel.value ,
            price: productPrice.value ,
            desc: productDescInput.value,
})
localStorage.setItem("myProducts", JSON.stringify(productArr))
displayProduct();
clearForm();
updateBTN.classList.add("d-none");
addBTN.classList.replace("d-none", "d-inline-block")
console.log(productArr)
}
