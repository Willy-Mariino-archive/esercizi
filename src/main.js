{
    // 1) Somma dei numeri pari
    // Scrivi una funzione sommaPari(array) che, dato un array di numeri, calcoli la somma di tutti i numeri pari presenti.

    // Dati di esempio:

    const display = document.getElementById("sommaPari")

    const numeri = [1, 2, 5, 8, 3, 4, 10];

    function sommaPari(array) {

        let accumulator = 0

        for (let i = 0; i < array.length; i++) {
            if (array[i] % 2 === 0) {
                accumulator += array[i]
            }
        }

        return accumulator

    }

    console.log("esercizio 1")
    console.log(`La somma dei numeri pari è: ${sommaPari(numeri)}`)

    display.innerText = `La somma dei numeri pari è: ${sommaPari(numeri)}`
}

{
    console.log("esercizio 2")

    /*
    2. Conta le occorrenze
  Crea una funzione contaOccorrenze(array, valore) che conta quante volte compare un valore specifico all’interno di un array.

  Dati di esempio:
   */

    const display = document.getElementById("contaValore")


    const frutti = ["mela", "pera", "mela", "banana", "mela"];
    const valore = "mela";

    function contaOccorrenze(array, valore) {

        let accumulator = 0
        array.forEach(element => {
            //  if (element.includes(valore)) { 
            if (element === valore) {
                accumulator += 1

            }

        });

        return accumulator

    }

    console.log(contaOccorrenze(frutti, valore))

    display.innerText = `Il conteggio dei valori è: ${contaOccorrenze(frutti, valore)}`

}

{

    console.log("esercizio 3")


    /*
    
    3. Inverti un array
    Scrivi una funzione invertiArray(array) che, senza usare metodi già pronti come reverse(), restituisca un nuovo array con gli elementi in ordine inverso.
    
    Dati di esempio:

    regola generale 

    Vai in avanti → i < length
    Vai indietro → i >= 0

    Perché in entrambi i casi stai includendo solo indici validi.

    
    */

    const numeri = [10, 20, 30, 40, 50];

    function invertiArray(array) {

        let accumulator = []

        for (let i = array.length - 1; i >= 0; i--) {
            accumulator.push(array[i])
        }
        return accumulator
    }

    console.log(invertiArray(numeri))


}


{
    console.log("esercizio 4")

    //     4. Trova il valore massimo
    // Crea una funzione trovaMassimo(array) che restituisca il valore più grande contenuto in un array di numeri.

    // Dati di esempio:

    const valori = [7, 12, 99, 34, 21];


    function trovaMassimo(array) {

        let max = 0
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i]

            }

        }
        return max

    }

    console.log(trovaMassimo(valori))


}


{

    //     5. Filtra le stringhe lunghe
    // Scrivi una funzione filtraStringheLunghe(array, lunghezzaMinima) che restituisca un nuovo array contenente solo le stringhe con una lunghezza maggiore o uguale al valore indicato.

    // Dati di esempio:

    const parole = ["hello", "js", "informatica", "ciao", "html"];
    const lunghezzaMinima = 4;

    function filtraStringheLunghe(array, lunghezzaMinima) {

        const paroleFiltrate = array.filter(p => p.length >= lunghezzaMinima)

        return paroleFiltrate
    }

    console.log(filtraStringheLunghe(parole, 4))
}

{
    console.log("esercizio 6")

    //     6. Genera una tabellina
    // Crea una funzione tabellina(numero) che utilizzi un ciclo for per stampare la tabellina di un numero da 1 a 10.

    // Dati di esempio:

    const numero = 7;

    function tabellina(numero) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${numero}* ${i} = ${numero * i}`)
        }
    }

    tabellina(numero)



}

{
    console.log("esercizio 7")

    // 7. Unisci due array
    // Scrivi una funzione unisciArray(a, b) che riceve due array e restituisce un nuovo array contenente tutti gli elementi dei due array di partenza, senza usare il metodo concat().

    // Dati di esempio:

    const a = ["x", "y", "z"];
    const b = ["a", "b", "c", "d"];

    function unisciArray(a, b) {

        // const arrayUniti = []

        // for (let i = 0; i < a.length; i++) {
        //     arrayUniti.push(a[i])
        // }

        // for (let i = 0; i < b.length; i++) {
        //     arrayUniti.push(b[i])
        // }

        // versione spread operator

        // const arrayUniti = [...a, ...b]

        // versione ciclo while

        let i = 0

        const arrayUniti = []

        while (i < a.length) {
            arrayUniti.push(a[i])
            i++
        }

        i = 0

        while (i < b.length) {
            arrayUniti.push(b[i])
            i++
        }

        return arrayUniti

    }

    console.log(unisciArray(a, b))

}

{
    console.log("esercizio 8")


    //     8. Calcola la media
    // Crea una funzione media(array) che calcoli la media aritmetica dei numeri presenti in un array.

    // Dati di esempio:

    const voti = [25, 28, 18, 30];

    function media(array) {

        let somma = array.reduce((acc, curr) => acc + curr, 0)

        return somma / array.length

    }

    console.log(media(voti))

}


{
    console.log("esercizio 9")

    //     9. Rimuovi un elemento
    // Scrivi una funzione rimuoviElemento(array, indice) che rimuova l’elemento all’indice specificato e restituisca un nuovo array.

    // Dati di esempio:

    const numeri = [3, 7, 10, 5, 9];
    const indice = 2;

    function rimuoviElemento(array, indice) {
        array.splice(indice, 1)
        return array
    }

    console.log(rimuoviElemento(numeri, indice))

}

{
    console.log("esercizio 11")

    // 11. Calcola l’età media degli utenti
    // Scrivi una funzione etaMedia(utenti) che calcoli l’età media degli utenti presenti nell’array.

    // Dati di esempio:

    const utenti = [
        { nome: "Luca", eta: 25 },
        { nome: "Maria", eta: 30 },
        { nome: "Giulia", eta: 22 },
        { nome: "Carlo", eta: 28 }
    ];

    function etaMedia(utenti) {

        let somma = utenti.reduce((acc, curr) => acc + curr.eta, 0)
        return somma / utenti.length
    }

    console.log(etaMedia(utenti))

}

{
    console.log("esercizio 14")

    // 14. Calcola il totale del carrello
    // Crea una funzione totaleCarrello(carrello) che calcoli e restituisca la somma totale dei prezzi (prezzo × quantità) di tutti gli articoli presenti.

    // Dati di esempio:

    const carrello = [
        { nome: "Penna", prezzo: 1.5, quantità: 4 },
        { nome: "Quaderno", prezzo: 2.0, quantità: 3 },
        { nome: "Zaino", prezzo: 35.0, quantità: 1 }
    ];

    const totale = carrello.reduce((tot, curr) => tot + (curr.prezzo * curr.quantità), 0)

    console.log(totale)
}