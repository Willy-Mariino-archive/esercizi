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
            if (element.includes(valore)) {
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
            accumulator += array[i]
        }
        return accumulator
    }

    console.log(invertiArray(numeri))


}