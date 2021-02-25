
let dollorni__sumga_nisbati = 9433.34
let yevroni__sumga_nisbati = 10354.03
 alert("Sayohat uchun harajatlar")
 let ticek = prompt("borib kelish  yo'lkira  narhi faqat dollor qabul qiladi")-0
 let hotel = prompt("mehmon hona uchun  narhi faqat dollor qabul qiladi")-0
 let tirep = prompt("Kongil ochar maskanlar uchun yevro qabul qiladi")-0
 let alisherning__puli = prompt(" Alisher qancha puliz bor so'mda")-0
 let jamDollor = ticek+hotel
 let jamYevro = tirep


function dollor(dollor){
    return dollor/dollorni__sumga_nisbati
}
function yevro(yevro){
    return yevro/yevroni__sumga_nisbati
}
let alisherning_dollor_puli = dollor(jamDollor)
let alisherning__yevro_puli = yevro(jamYevro)

let jamSuma = alisherning_dollor_puli + alisherning__yevro_puli
   
if(jamSuma>alisherning__puli){
    console.log("Alisher siz biroz yana toplashiz kere ")
}else{
    console.log("Alisher yo'liz  behatar bo'lsin")
}




