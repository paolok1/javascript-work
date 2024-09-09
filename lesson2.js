// tipi di dato:

// Primitivi: immutabili e leggeri.

// Non primitivi o strutturali: Mutabili e pesanti.


// Elenco dati primitivi: number, string, boolean, undefined, null, symbol;

// Elenco dati Strutturali: Object;

// Typeof: è un operatore che mi permette di identificare il tipo di dato.

// Number: operatori matematici +(somma) -(sottrazione) *(moltiplicazione) /(divisione)  %(modulo) **(elevazione a potenza) Math(è un oggetto che ci permette di effetuare delle operazioni matematiche)
// % ci restituisce il resto di una divisione.
// Math.max ci restituisce il numero più grande da un elenco. 
// Math.min ci restituisce il numero più piccolo da un elenco.
// Math.round ci permette di arrotondare un numero, per eccesso se >=5, altrimenti per difetto.
// Math.floor arrotonda sempre per difetto.
// Math.ceil arrotonda sempre per eccesso.
// Math.random genera un numero casuale tra 0 e 1 MA non arriva mai ad 1.

// .toFixed(): serve per arrotondare un numero alla cifra decimale che voglio(però trasforma il numero in "stringa" quindi non potrà essere più utilizzato per i calcoli a meno che non venga riconvertito in numero nuovamente). es. let number = 5.123456789; console.log( number.toFixed(2)); e lo arrotonderà al secondo numero. quindi darà 5.12


// Il . serve per legare i comandi (Dot syntax)

// String: 
// tipi di apici: ''  ""  ``(backtick Alt 96 dal tastierino numerico laterale!)

// concatenazione tra stringhe: per concatenare le stringhe si utilizza il simbolo + Es: let name= 'Pippo';
//  console.log( "ciao a tutti mi chiamo" + name );
// con le pecktik la sintassi sarà: console.log('Ciao a tutti mi chiamo ${name}');

//  \n(backslash n) per mandare accapo una stringa.

// 

// Type cohertion: js si accorge che sono due tipi di dato differenti, non per questo va in errore ma cerca di andare avanti. Per farlo converte uno dei due dati nel tipo dell'altro.

// NaN: Not a Number

// Boolean: true e false

// undefined rappresenta un assenza di valore;

// Null: rappresenta l'assenza INTENZIONALE di un oggetto; Primitiva strutturale

// Operatori 
// operatori unari: typeof, incremento, decremento
// operatori binari: matematici (+, ecc), confronto e logici
// operatore ternario: condizioni


// incremento: ++
// decremento: --

// confronto: mi restituisce SEMPRE un valore booleano
// Uguaglianza == non tiene in considerazione il tipo di dato ma fa scattare la "type cohertion"
// Stretta uguaglianza ===
// Maggiore >
// Minore <
// maggiore-uguale >=
// minore-uguale <=
// Not ! 


// OPERATORI LOGICI: &&(AND AND)  ||(OR)
// CONTESTO BOOLANO: qualunque tipo di dato in questo contesto assumono un valore Truthy (veritiero) o Falsy(potenzialmente falso)
// truthy: numeri >0, le stringhe non vuote, tutti gli oggetti, true.
// Falsy:<= 0, le stringhe vuote, null, undefined, NaN, false.  
// &&: ci restituisce il primo valore FALSY che trova, se non ne trova ci restituisce l'ultimo valore TRUTHY
// ||: Ci restituisce il primo valore TRUTHY, se non ne trova ci restituisce l'ultimo valore FALSY.

// OPERATOR OVERLOADING: +
//  Questo operatore fa tante operazioni insieme



