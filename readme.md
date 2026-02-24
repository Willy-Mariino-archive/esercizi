## 🔹 Ripasso rapido for loop

### 1️⃣ Andare avanti

```js
for (let i = 0; i < array.length; i++) {
  // visiti tutti gli elementi
}
```

* Usa `< array.length`
* Non usare `<=` → rischi indice fuori range (`undefined`)
* Iterazioni: da `0` fino all’ultimo indice valido

### 2️⃣ Andare indietro

```js
for (let i = array.length - 1; i >= 0; i--) {
  // visiti tutti gli elementi all’inverso
}
```

* Parti dall’ultimo indice valido (`length - 1`)
* Condizione `>= 0` → include lo 0
* Utile quando modifichi/rimuovi elementi (`splice`)

### 3️⃣ Regole chiave

| Caso             | Condizione    | Include ultimo/0?      |
| ---------------- | ------------- | ---------------------- |
| Andando avanti   | `i < length`  | sì ultimo indice       |
| Numero fisso     | `i <= numero` | include numero finale  |
| Andando indietro | `i >= 0`      | include primo elemento |

### 4️⃣ Bug silenzioso comune

* `i <= array.length` → ultimo ciclo legge `undefined`
* `i > 0` (indietro) → **salta lo 0**, primo elemento ignorato

### 5️⃣ Iterazioni e spinta array

```js
// avanti
for (let i = 0; i < arr.length; i++) arr.push(arr[i])

// indietro + rimuovere elementi
for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) arr.splice(i, 1)
}
```

* Iterare all’indietro quando modifichi la lunghezza

---


