let dollar = 10000.20
let ruble = 150
if(confirm('Dollar almashtirmoqchimsiz')){
   let sum = prompt("sum miqdorini kiriting" +"  " + "UZB->USD")
   let natija = sum/dollar
   alert("sizga beriladigan dollar miqdori->"+natija+"$"+"            "+"Bizbilan ishlaganiz uchun rahmat" +"         " +"Tastiqlash uchun OK tugmasini bosing")

}else{
    let sum = prompt("sum miqdorini kiriting"+ " "+"UZB->RUB")
    let natija = sum/ruble
    alert("sizga beriladigan ruble miqdori->"+natija+ "₽"+"               "+"Bizbilan ishlaganiz uchun rahmat" +"   " +"Tastiqlash uchun OK tugmasini bosing")
 
}


