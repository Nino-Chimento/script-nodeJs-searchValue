# script-nodeJs-searchValue

Allego il file nella medesima cartella con path "data.csv",restitusico un array contenente tutti i valori matchati, e la posizione della colonna dove eseguire la ricerca e ovviamente anche il value da cercare sono dinamici.

Inoltre la comparazione viene fatta con === quindi oltre il valore anche il tipo deve corrispondere.

Essendo poco ingombrante ho allegato direttamente anche il file node per la lettura del csv

Lo svolgimento e'stato rendere tramite una Regex ogni singola riga del file csv un array,dove poi andare tramite indice a effettuare la comparazione.

Gli argomenti sono passati tramite riga di comando e quindi salvati nelle rispettive variabili tramite process.arg,per cui devono essere passate in sequenza coem da esercizio. Path,Column;Value

Per qualsiasi chiarimento rimango a Vostra disposizione.
