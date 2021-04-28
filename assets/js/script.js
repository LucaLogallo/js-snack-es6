$(function(){
  /* Creare una squadra di basket e per ogni giocatore generare casualmente le statistiche di gioco, secondo queste regole:
  il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
  la media punti fatti per partita deve essere compresa tra 0 e 50
  la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100 */


  // creare array che contiene la squadra di basket (quindi oggetti). cardinalità 12
  const arrSquadra = [
    {
      'nome': 'Luca'
    },
    {
      'nome': 'Marco'
    },
    {
      'nome': 'Matteo'
    },
    {
      'nome': 'Giovanni'
    },
    {
      'nome': 'Giacomo'
    },
    {
      'nome': 'Aldo'
    },
    {
      'nome': 'Matteo'
    },
    {
      'nome': 'Gabriele'
    },
    {
      'nome': 'Antonio'
    },
    {
      'nome': 'Giuseppe'
    },
    {
      'nome': 'Vincenzo'
    },
    {
      'nome': 'Andrea'
    }
  ]; //array che contiene i giocatori
  const numGiocatori = 12;  //numero di giocatori della squadra(cardinalità di arrSquadra)
  const alfabetoMaiusc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  //creo il prototipo di oggetto del giocatore
  /* var giocatore = {
    'codice' = ,
    'mediaPunti' = ,
    'percentualeSuccesso' =
  };
 */

  for(var i = 0; i < numGiocatori; i++){
    let codice = codice(); //dopo aggiungi il controllo per vedere se il codice generato non sia contenuto già nell'array squadra
    let mediaPunti = getRandomIntInclusive(0,50);//messo 44 per provare
    //console.log(mediaPuntiGenerato);
    let percentualeSuccesso = getRandomIntInclusive(0,100); // messo a 55 per provare
    //console.log(percentualeSuccessoGenerato);

    
      arrSquadra[i].codice =  codice;
      arrSquadra[i].mediaPunti =  mediaPunti;
      arrSquadra[i].percentualeSuccesso = percentualeSuccesso+"%";
   
  }
  
  console.log(arrSquadra);

  /* FUNZIONI */
  //funzione random che include il num minimo e il num massimo
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Il max è incluso e il min è incluso
  }
  
  //funzione che crea il codice giocatore
  function codice(){
    let arrLettere = []; //array che contiene 3 lettere generate randomicamente 
    let arrNumeri = []; //array che conterrà 3 numeri generati randomicamente
    //il return sarò la concatenazione concat di arrLettere e arrayNumeri
    let numPosLettera = 0;
    for( var i = 0; i < 3; i++){
      numPosLettera = getRandomIntInclusive(0,25);
      //console.log(numPosLettera);
      arrLettere[i] = alfabetoMaiusc[numPosLettera];
      //console.log(alfabetoMaiusc[numPosLettera]);
      //console.log(arrLettere[i]);
      arrNumeri[i] =  getRandomIntInclusive(1,100);
      //console.log(arrNumeri[i]);
    }
    var arrConcat = []; //la concatenazione dell'array contenente lettere e quello contenente i numeri
    arrConcat = arrLettere.concat(arrNumeri);
    //console.log(arrConcat);
    return arrConcat;
  }

});