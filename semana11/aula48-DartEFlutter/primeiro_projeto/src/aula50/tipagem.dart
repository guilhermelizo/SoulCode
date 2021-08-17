void printInts(List<dynamic> a){ //Dynamic aceita qualquer tipo/valor
  for(var item in a){
  print(item.isEven);
 }
}

void main(){
  List<int> list = [];  //O Dynamic aceita o Int, mas não o contrário
  list.add(10);
  list.add(11);
  
  List<String> nomes = []; // Ela pode ser chamada pois o dynamic aceita string também, mas dará erro pois isEven é uma propriedade de numeros
  nomes.add("José");
  nomes.add("João");
  
  var nome= 'jose';
  
  printInts(nomes);
  
}