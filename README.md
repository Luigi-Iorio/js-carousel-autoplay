# Carosello (riproduzione automatica)

### Descrizione

L'obbiettivo di questo esercizio è quello di aggiungere la funzionalità "riproduzione automatica" al carosello creato nella repository [js-array-carousel](https://github.com/Luigi-Iorio/js-array-carousel.git).

## Risoluzione in linguaggio naturale

1. Per scorrere automaticamente le immagini del carosello utilizzare la timing function **setInterval()** con un tempo per ogni ripetizione di 3000 (3 secondi).

2. Creare la funzione **play()**, all'interno sarà posizionato il contatore per scorrere le immagini.

3. Invocare la funzione **setInterval(play, 3000)**

Bonus ------

4. Aggiungere 2 bottoni **(start / stop)** e salvare i 2 elementi in due variabili

5. Salvare la funzione **setInterval(play, 3000)** nella variabile autoPlay

6. Al click del bottone **start** invocare la funzione **setInterval(play, 3000)**

7. Al click del bottone **stop** invocare la funzione **clearInterval(autoPlay)**
