Esercizio di oggi: *Griglia Campo Minato*
nome repo: *js-campominato-grid*
*Consegna*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Scomponete sempre il problema in sotto problemi, senza andare troppo nel dettaglio questa volta. Andate nel dettaglio solo quando non riusciti ad implementare in codice qualcosa.
Numero di push: 15 circa
*Bonus* (farlo in una cartella bonus)
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*Consigli del giorno:*  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


SCOMPOSIZIONE ES: 
1. - clicco sul pulsante per mostrare la griglia
2. - preventivamente svuoto il tag preddisposto al contenimento della griglia di tutti
     gli elementi interi
3. - creo la gliglia in js
3.1 - eseguo un for da 1 a 100
3.2 - all'interno del for creo la casella
3.4 - inserisco il testo all'interno della casella
3.5 - dire alla casella di rimanere in attesa dell'evento click
3.5.1 al click della casella cambia colore
3.5.2 mostro in console il num della casella cliccata
3.6 - appendo la casella nella griglia
