{
    // 1) Somma dei numeri pari
    // Scrivi una funzione sommaPari(array) che, dato un array di numeri, calcoli la somma di tutti i numeri pari presenti.

    // Dati di esempio:

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
    console.log(`somma dei numeri pari è: ${sommaPari(numeri)}`)
}

{
    console.log("esercizio 2")



}