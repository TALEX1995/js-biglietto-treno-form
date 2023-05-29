# Traccia

DESCRIZIONE:
Scrivere un programma che chieda all’utente:
-Il proprio nome

- Il numero di chilometri da percorrere
- Età del passeggero
  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
  MILESTONE 1:
  Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
  MILESTONE 2:
  Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form (non tag <form>) in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
  Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).

## Steps

1. Andare a inserire nell'html degli input per il nome, l'età del passeggero e i km della tratta
1. Cambiare nel js i prompt con gli input
1. Andare a prendere i valori scritti dall'utente e creare delle variabili che riportino il suo nome e il costo del biglietto
1. Creare due variabili che vadano a randomizzare un numero di carrozza e un codice CP.
1. Creare un biglietto nel momento in cui l'utente va a cliccare su genera biglietto con il suo nome, il numero di carrozza il codice CP e il costo del biglietto
