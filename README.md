# script-nodeJs-searchValue

Allego il file nella medesima cartella con path "data.csv",restitusico un array contenente tutti i valori matchati, e la posizione della colonna dove eseguire la ricerca e ovviamente anche il value da cercare sono dinamici.

Inoltre la comparazione viene fatta con === quindi oltre il valore anche il tipo deve corrispondere.

Essendo poco ingombrante ho allegato direttamente anche il file node per la lettura del csv

Dopo aver sfruttato la regex per calcolare la lunghezza delle righe e poter staccare uan riga dall'altra,tramite lo split ho creato un array per ogni valore presente nella riga,quindi tramite index passato dinamicamente ho contrallato il valore di quella cella.

Gli argomenti sono passati tramite riga di comando e quindi salvati nelle rispettive variabili tramite process.arg,per cui devono essere passate in sequenza come da esercizio. Path,Column,Value

Per qualsiasi chiarimento rimango a Vostra disposizione.
