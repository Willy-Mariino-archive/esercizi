## regola generale 

### condizione di uscita

    Vai in avanti → i < length
    Vai indietro → i >= 0


| Direzione | Dove metti il -1?                    | Perché                          |
| --------- | ------------------------------------ | ------------------------------- |
| Avanti    | Nella condizione (`< length`)        | Ci pensa il `<`                 |
| Indietro  | Nell’inizializzazione (`length - 1`) | Parti dall’ultimo indice valido |

Se l’array ha 5 elementi:

```js
length = 5
indici validi = 0, 1, 2, 3, 4
```

Ma il ciclo parte da:

```js
let i = array.length; // cioè 5
```

Quindi la prima cosa che fa è:

```js
array[5]
```

Che non esiste → quindi stampa:

```
undefined
```

Poi continua normalmente:

* i = 4 → ok
* i = 3 → ok
* i = 2 → ok
* i = 1 → ok
* i = 0 → ok
* i = -1 → -1 >= 0 ❌ stop

---

💡 Quindi il ciclo **non va in errore**, ma:

* fa una iterazione in più
* accede a un indice fuori range
* stampa `undefined`

Questo è un classico bug silenzioso ⚠️
Non rompe il codice, ma fa cose sbagliate.

---

### E quando vado in indietro `i >= 0` come condizione di uscita

Con:

```js
for (let i = array.length; i > 0; i--)
```

Supponiamo `length = 5`.

Il ciclo fa:

* i = 5 → 5 > 0 ✅ → `array[5]` → ❌ undefined
* i = 4 → 4 > 0 ✅ → `array[4]`
* i = 3 → 3 > 0 ✅
* i = 2 → 2 > 0 ✅
* i = 1 → 1 > 0 ✅
* i = 0 → 0 > 0 ❌ STOP

👉 Quindi **non entra mai quando i = 0**

Non perché “si ferma prima di arrivare a -1”,
ma perché la condizione è `> 0`, non `>= 0`.

Quando i diventa 0:

```
0 > 0 → false
```

Quindi lo 0 viene saltato completamente.

---

### 🔥 Differenza chiave

| Condizione | Include 0? |
| ---------- | ---------- |
| `i >= 0`   | ✅ Sì       |
| `i > 0`    | ❌ No       |

---

### Riassunto definitivo

Quando vai all’indietro:

```js
for (let i = array.length - 1; i >= 0; i--)
```

* Parti dall’ultimo indice valido
* Ti fermi includendo lo 0
* Non accedi mai fuori array

È la forma “perfetta”.

---

### Quando vai avanti

`for (let i = 0; i < array.length; i++)` non ci va l'uguale

Il problema è questo:

```js
for (let i = 0; i <= array.length; i++)
```

Se l’array è:

```js
[1, -2, 3]
```

Allora:

```
length = 3
indici validi = 0, 1, 2
```

Ma il ciclo fa:

* i = 0 ✅
* i = 1 ✅
* i = 2 ✅
* i = 3 ✅  ← ⚠️ PROBLEMA
* i = 4 ❌ stop

Quando `i = 3`:

```js
array[3]
```

→ `undefined`

E poi fa:

```js
undefined > 0
```

Che restituisce `false`.

Quindi:

* ❌ Non va in errore
* ❌ Non rompe il programma
* ⚠️ Ma fa un accesso fuori dall’array
* ⚠️ È un bug silenzioso

---

### Perché è pericoloso?

Perché in questo caso sembra funzionare comunque.

Ma immagina se dentro avessi scritto:

```js
array[i].toString()
```

Quando `i = 3` esplode tutto 💥
Perché stai chiamando un metodo su `undefined`.

---

### Regola d’oro definitiva

Quando parti da 0 e vai avanti:

```js
i < array.length
```

Non `<=`.

---

## Regola mentale importantissima

Se stai:

🔴 Aggiungendo o rimuovendo elementi
🔴 Modificando la lunghezza
🔴 Cambiando gli indici

👉 Itera all’indietro.

per esempio rimuovere i numeri pari tramite ciclo for:
```js
for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0) {
        array.splice(i, 1);
    }
}
```