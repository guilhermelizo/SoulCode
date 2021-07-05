let claro = false;

function darkmode() {
   let chama = document.getElementsByClassName("darkmodejs");

   let item0 = chama.item(0);
   let item1 = chama.item(1);
   let item2 = chama.item(2);
   let item3 = chama.item(3);
   let item4 = chama.item(4);
   let item5 = chama.item(5);

   if (claro){
      item0.style.backgroundColor = "#E06666"
      item1.style.backgroundColor = "#FFFFFF"
      item2.style.backgroundColor = "#FFFFFF"
      item2.style.color = "#000000"
      item3.style.backgroundColor = "#D5A6BD"
      item4.style.backgroundColor = "#8E7CC3"
      item5.style.backgroundColor = "#EA9999"
      document.getElementById("corpojs").style.color = "#000000"

      claro = false;
   }
   else{
      item0.style.backgroundColor = "#333333"
      item1.style.backgroundColor = "#666666"
      item2.style.backgroundColor = "#000000"
      item2.style.color = "#FFFFFF"
      item3.style.backgroundColor = "#4C1130"
      item4.style.backgroundColor = "#20124D"
      item5.style.backgroundColor = "#000000"
      document.getElementById("corpojs").style.color = "#FFFFFF"

      claro = true;
   }   
}

