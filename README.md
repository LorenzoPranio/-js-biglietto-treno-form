esercizio di oggi (26/06/24): calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno-form
Descrizione: Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
Questo è il primo esercizio suddiviso per milestone, quindi seguite le milestone nell'ordine: non passate alla successiva se non avete fatto la precedente
Numero minimo di push: 10
MILESTONE 0: Creare il file README.md
MILESTONE 1: Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2: Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Nota: Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.


|SOLUZIONE|

1.>Creo una costante che è il bottone dell'index

2.>Creo una funzione per il bottone per acquisire i dati inseriti dall'utente
2.1.>Creo una variabile per il nome
2.2.>Creo una variabile per i kilometri da percorrere
2.3.>Creo una variabile per l'età con IF
2.3.1>Se ha meno di 18 anni lo sconto è del 20%
2.3.1.1>Dichiare la variabile dello sconto
2.3.2>Se ha più di 65 anni lo sconto è del 40%
2.3.2.1>Dichiare la variabile dello sconto
2.3.3>Se non rientra in nessuna delle due categorie non c'è nessuno sconto

3.>Dichiarare la variabile per il prezzo finale
3.1>Impostare la variabile con massimo 2 decimali

4.>Chiedo all'utente i dati delle variabili

