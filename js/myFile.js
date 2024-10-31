// بعض الملاحظات
// وضعت هذه الفاريبولز في الجلوبال لأنني سأحتاجها في اكثر من فانكشن
// وضعت اسم الفانكشن بالقوسين داخل بروبرتي اسمها كلك اون داخل البوتون في الاتش تي ام ال
// حتي يبدأ تنفيز الاوامر عند الضغط علي البوتون
// وضعت اسم الاراي داخل الفانكشن لأستطيع دفع المعطيات داخلها 
// لأن عناصر الاوبجكت لن تخرج عن اللوكال الخاص بها
// يرجي التواصل وفهم طريقة وترتيب عمل اللغه
// يرجي مراعاة الاي دي وكتابته بطريقة الكامل كيس في الجافا او الاتش تي ام ال
// يرجي مراجعه شكل الاوبجكت وشكل الاراي وشكل الفانكشن  ومتي نضع كل علامه



var productIDInput = document.getElementById("productID");
var productNameInput = document.getElementById("productName"); // شايل الانبوت كله
var productPriceInput = document.getElementById("productPrice"); // شايل الانبوت كله
var productCategoryInput = document.getElementById("productCategory"); // شايل الانبوت كله
var productDescInput = document.getElementById("productDesc"); // شايل الانبوت كله
var mezoInput = document.getElementById("mezo"); // شايل الانبوت كله
var addBtn = document.getElementById("addBtn");
var upDateBtn = document.getElementById("upDateBtn");

// localStorage.setItem("products", JSON.stringify(productContainer))

// localStorage.getItem("master")
// localStorage.removeItem()
// localStorage.clear;
// localStorage.length;
// localStorage.key(1)

var productContainer =[];
if(localStorage.getItem("products") != null )
{
  productContainer = JSON.parse(localStorage.getItem("products"));
  displayProducts(productContainer);
}
function addproduct()
{
  var product={
    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    desc:productDescInput.value
  }
  if (product.name == '' || product.price == ""){
    alert('enter value')
    
  }else{
    productContainer.push(product)
    displayProducts(productContainer);
  }
  // الفاليو خاصه بقيم الفورم من الانبوت وخيرها فقط
  console.log(productContainer);
  // clearform();
localStorage.setItem("products", JSON.stringify(productContainer))

}

function clearform() { // وظيفة هذه الفانكشن هي تفريخ الخانات بعد اضافة البيانات ورفعها ويتم استدعائها في الفورم المطلوبه
  productNameInput.value="";
  productPriceInput.value="";
  productCategoryInput.value="";
  productDescInput.value="";
}

function displayProducts(arr)
{

  var boxs =``;
  for(var i= 0;i < arr.length;i++)
  {
    boxs +=`<tr> 
    <td class="text-light fw-bold">${arr[i].name}</td>
    <td class="text-light fw-bold">${arr[i].price}</td>
    <td>${arr[i].category}</td>
    <td>${arr[i].desc}</td>
    <td><button onclick="setFormForUpDate(${i})" class="btn btn-outline-warning">Update</button></td>
    <td><button onclick="deleteProduct(${i});" class="btn btn-outline-danger ">Delete</button></td>
  </tr>`;
  }
  document.getElementById('tablebody').innerHTML = boxs;
  
}



function deleteProduct(productIndex)
{
  productContainer.splice(productIndex,1)
  displayProducts(productContainer)

  localStorage.setItem("products", JSON.stringify(productContainer))
}



function searchProducts(term)
{
  var matchedProducts = [];
  for(var i=0;i<productContainer.length;i++ )
  {
  
    if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()) === true)
    {
      matchedProducts.push(productContainer[i])
    }
  }
  
  console.log(matchedProducts); 
  displayProducts(matchedProducts)
}

function setFormForUpDate(i) // مش هتفرق اي او غيرها المهم تكون زيها زي الي في الفار الي تحتيها
{
  // addBtn.classList.add | remove | replace("") لو عايز اضيف كلاس
  addBtn.classList.replace('d-block' , 'd-none');
  upDateBtn.classList.replace('d-none' , 'd-block');
  productIDInput.value = i;
  productNameInput.value = productContainer[i].name;
  productPriceInput.value = productContainer[i].price;
  productCategoryInput.value = productContainer[i].category;
  productDescInput.value = productContainer[i].desc;


}

function replaceProduct()
{
  productContainer = JSON.parse(localStorage.getItem("products"));
  productContainer[productIDInput.value] = {
    name:productNameInput.value,
    price:productPriceInput.value,
    category:productCategoryInput.value,
    desc:productDescInput.value
  }
  localStorage.setItem("products", JSON.stringify(productContainer))
  upDateBtn.classList.replace('d-block' , 'd-none');
  addBtn.classList.replace('d-none' , 'd-block');
  displayProducts(productContainer)
}



