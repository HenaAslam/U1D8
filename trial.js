let arrayOfNumbers;
arrayOfNumbers=[1,2,3,4,5];
console.log(arrayOfNumbers);

console.log("\n");
let myDetails;
myDetails={name:"Hena" , surname:"Asslam" , emailAddress:"abc@gmail.com", age:25};
console.log(myDetails);
console.log("\n");


myDetails.hasLicense=false;
console.log(myDetails);
console.log("\n");

delete myDetails.age;
console.log(myDetails);
console.log("\n");

let yourDetails={name:"John" , surname:"Doe" , emailAddress:"xyz@gmail.com"};
if (myDetails.emailAddress===yourDetails.emailAddress){
    console.log("Both objects have same email address");
    
}
else{
    console.log("Both objects have different email address");
}
console.log("\n");



let totalShopCart=35;
let totalCost;
if(totalShopCart>50){
    totalCost=totalShopCart;
}
else{
    totalCost=totalShopCart+10;
}

console.log("The total cost is:", totalCost);
console.log("\n");


let newCost;
if(totalShopCart>50){
    totalCost=totalShopCart;
}
else{
    totalCost=totalShopCart+10;
}
newCost=totalCost*.8;
console.log("The total cost after black friday discount is:", newCost);
console.log("\n");


let car1={brand:"BMW", model:"x1", licensePlate:"HH12"};
let car2=Object.assign({},car1);
let car3=Object.assign({},car1);
let car4=Object.assign({},car1);
let car5=Object.assign({},car1);
car2.licensePlate="HH55";
console.log(car2);
car3.licensePlate="HH65";
console.log(car3);
car4.licensePlate="HH78";
console.log(car4);
car5.licensePlate="HH91";
console.log(car5);
console.log("The original remains unchanged:", car1);
console.log("\n");


let carsForRent=[car1,car2,car3,car4,car5];
console.log(carsForRent);
console.log("\n");



carsForRent.pop();
console.log(carsForRent);
carsForRent.splice(0,1);
console.log(carsForRent);
console.log("\n");


console.log("The type of car variable is :",typeof car1);
console.log("the type of licensePlate is:", typeof car1.licensePlate);
console.log("the type of brand is:", typeof car1.brand);
console.log("\n");


let carsForSale=[];
carsForSale.push(car1, car2, car3);
let totalCars= carsForSale.concat(carsForRent);
console.log(totalCars);
console.log("\n");


for(i=0;i<carsForSale.length;i++)
{
    console.log(carsForSale[i]);
}


/*let trialArray=[1,3,5];
for(let i=0;i<trialArray.length;i++)
{
    let j=trialArray.length;
    let newArray[i]=trialArray[j-1];
    j--;
}
console.log(newArray);*/

let trialArray=[1,3,5];
let newArray=trialArray.reverse();
console.log(newArray);



/*let maxArray=[2,15,10,9];
let maxValue;
for(let i=0;i<maxArray.length;i++)
{
    for (let j=1;j<maxArray.length;j++)
    {
       
        
        if(maxArray[i]>maxArray[j] && maxArray[i] >maxArray[k])
        {
           maxValue=maxArray[i] ;
        }
         
    }
}
console.log("The largest number is",maxValue);
*/

/*let minArray=[2,15,10,9];
let minValue;
for(let i=0;i<minArray.length;i++)
{
    for (let j=1;j<minArray.length;j++)
    {
        if(minArray[i]>minArray[j])
        {
           minValue=minArray[i] ;
        }
    }
}
console.log("The smallest number is",minValue);*/

let evenArray=[3,5,4,6,9];
for(let i=0;i<evenArray.length; i++)
{
 if(evenArray[i]%2==0){
    console.log(evenArray[i])
 }
}

/*evenArray=[3,5,4,6,9];
let oddArray;
let j=0;
for(let i=0;i<evenArray.length; i++)
{
 if(evenArray[i]%2==1){
    oddArray[j]=evenArray[i]
    j++;
 }
}
console.log(oddArray);
*/

let check="abcdu"
let newString = "";
for (let i = 0; i <check.length; i++)
 {
  if (check[i] != "a" && check[i] != "e" && check[i] != "i" && check[i] != "o" && check[i] != "u") 
  {
         newString += check[i];
  }
}
console.log(newString);


/*let incArray=[1,2,3,4];
let resArray;
for(let i=0;i<incArray.length;i++)
{

resArray[i]=incArray[i]+1;
}
console.log(resArray);
*/
  

/*let repArray=["strive", "is", "great"];
let lenArray;
let j=0;
for(i=0;i<repArray.length;i++)
{
lenArray[j]=repArray[i].length;
j++;
}

console.log(lenArray);*/