{
    // 1) Somma dei numeri pari
    // Scrivi una funzione sommaPari(array) che, dato un array di numeri, calcoli la somma di tutti i numeri pari presenti.

    // Dati di esempio:

    const numeri = [1, 2, 5, 8, 3, 4, 10];

    function sommaPari(array) {

        for (let i = 0; i <= array.length; i++) {
            if (i % 2 === 0) {
                const sumPari = array.reduce((acc, curr) => acc + curr, 0)
                return sumPari
            }
        }
    }


    console.log(sommaPari(numeri))
}