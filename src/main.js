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
    const risultato = console.log(`somma dei numeri pari è: ${sommaPari(numeri)}`)

    display.innerText = `somma dei numeri pari è: ${sommaPari(numeri)}`
}

{
    console.log("esercizio 2")

    /*
    2. Conta le occorrenze
  Crea una funzione contaOccorrenze(array, valore) che conta quante volte compare un valore specifico all’interno di un array.

  Dati di esempio:
   */

    const frutti = ["mela", "pera", "mela", "banana", "mela"];
    const valore = "mela";

    function contaOccorrenze(array, valore) {

        let accumulator = 0
        array.forEach(element => element.includes(valore) {
            counter = accumulator + 1
        });

        return accumulator

    }

    console.log(contaOccorrenze(frutti, valore))

}