// Catalogo prodotti di TJ Spesa: "Nome emoji" per reparto.
// Per aggiungere un prodotto basta scrivere una nuova riga nel reparto giusto.
const GREZZO = {
  frutta: `
Mele 🍎|Pere 🍐|Banane 🍌|Arance 🍊|Mandarini 🍊|Clementine 🍊|Limoni 🍋|Kiwi 🥝|Uva 🍇|Fragole 🍓|
Pesche 🍑|Albicocche 🍑|Ciliegie 🍒|Melone 🍈|Anguria 🍉|Ananas 🍍|Mango 🥭|Avocado 🥑|Mirtilli 🫐|
Frutti di bosco 🫐|Cocco 🥥|Prugne 🍑|Fichi 🍐|Pomodori 🍅|Pomodorini 🍅|Insalata 🥬|Lattuga 🥬|
Insalata in busta 🥬|Rucola 🥬|Spinaci 🥬|Bietole 🥬|Carote 🥕|Zucchine 🥒|Cetrioli 🥒|Melanzane 🍆|
Peperoni 🫑|Peperoncino 🌶️|Patate 🥔|Patate dolci 🍠|Cipolle 🧅|Cipollotti 🧅|Aglio 🧄|Sedano 🥬|
Finocchi 🥬|Broccoli 🥦|Cavolfiore 🥦|Cavolo 🥬|Verza 🥬|Funghi 🍄|Champignon 🍄|Pannocchie 🌽|
Fagiolini 🫛|Zucca 🎃|Porri 🧅|Radicchio 🥬|Carciofi 🥬|Asparagi 🌱|Basilico 🌿|Prezzemolo 🌿|
Rosmarino 🌿|Salvia 🌿|Menta 🌿|Zenzero 🫚|Noci 🌰|Mandorle 🌰|Nocciole 🌰|Castagne 🌰|Arachidi 🥜|
Frutta secca 🥜|Datteri 🌴`,
  carne: `
Petto di pollo 🍗|Cosce di pollo 🍗|Ali di pollo 🍗|Pollo intero 🐔|Fesa di tacchino 🦃|
Carne macinata 🥩|Bistecche 🥩|Fettine 🥩|Spezzatino 🥩|Arrosto 🥩|Braciole di maiale 🥩|
Lonza di maiale 🥩|Costine 🍖|Salsicce 🌭|Hamburger 🍔|Polpette 🍖|Cotolette 🍗|Agnello 🍖|
Coniglio 🐇|Salmone 🐟|Merluzzo 🐟|Orata 🐟|Branzino 🐟|Tonno fresco 🐟|Pesce spada 🐟|Alici 🐟|
Baccalà 🐟|Gamberi 🦐|Calamari 🦑|Seppie 🦑|Polpo 🐙|Cozze 🦪|Vongole 🦪`,
  latte: `
Latte 🥛|Latte senza lattosio 🥛|Latte di soia 🥛|Latte di mandorla 🥛|Yogurt 🥣|Yogurt greco 🥣|
Burro 🧈|Panna 🥛|Panna da cucina 🥛|Uova 🥚|Mozzarella 🧀|Burrata 🧀|Parmigiano 🧀|Grana 🧀|
Formaggio grattugiato 🧀|Pecorino 🧀|Ricotta 🧀|Stracchino 🧀|Mascarpone 🧀|Scamorza 🧀|Provola 🧀|
Gorgonzola 🧀|Fontina 🧀|Asiago 🧀|Emmental 🧀|Feta 🧀|Sottilette 🧀|Formaggio spalmabile 🧀|
Prosciutto cotto 🥓|Prosciutto crudo 🥓|Salame 🥓|Ciauscolo 🥓|Mortadella 🥓|Bresaola 🥓|Speck 🥓|
Pancetta 🥓|Guanciale 🥓|Tacchino affettato 🥓|Porchetta 🥓|Wurstel 🌭`,
  pane: `
Pane 🍞|Pane in cassetta 🍞|Pane integrale 🍞|Panini 🥖|Baguette 🥖|Piadine 🫓|Focaccia 🫓|
Pizza base 🍕|Grissini 🥖|Crackers 🍘|Taralli 🥨|Fette biscottate 🍞|Biscotti 🍪|Cornetti 🥐|
Brioche 🥐|Merendine 🧁|Torta 🍰|Cereali 🥣|Muesli 🥣|Fiocchi d'avena 🥣|Marmellata 🍓|
Crema alla nocciola 🍫|Miele 🍯|Caffè ☕|Caffè in capsule ☕|Caffè solubile ☕|Orzo ☕|Tè 🍵|
Tisane 🍵|Camomilla 🍵|Cacao 🍫`,
  dispensa: `
Pasta 🍝|Spaghetti 🍝|Penne 🍝|Fusilli 🍝|Rigatoni 🍝|Linguine 🍝|Pasta all'uovo 🍝|Lasagne 🍝|
Gnocchi 🥔|Tortellini 🥟|Ravioli 🥟|Riso 🍚|Riso basmati 🍚|Riso per risotto 🍚|Cous cous 🍚|
Farina 🌾|Farina di mais 🌽|Pangrattato 🍞|Lievito 🧁|Zucchero 🍬|Sale 🧂|Sale grosso 🧂|Pepe 🧂|
Olio extravergine 🫒|Olio di semi 🫗|Aceto 🫗|Aceto balsamico 🫗|Passata di pomodoro 🥫|Pelati 🥫|
Polpa di pomodoro 🥫|Concentrato di pomodoro 🥫|Sugo pronto 🥫|Pesto 🌿|Ragù pronto 🥫|
Tonno in scatola 🥫|Sgombro in scatola 🥫|Ceci 🫘|Fagioli 🫘|Lenticchie 🫘|Mais in scatola 🌽|
Piselli in scatola 🫛|Olive 🫒|Capperi 🫒|Sottaceti 🥒|Funghi sott'olio 🍄|Dado 🧂|Brodo 🍲|
Maionese 🥚|Ketchup 🍅|Senape 🌭|Spezie 🌿|Origano 🌿|Curry 🌿|Noce moscata 🌰|Cioccolato 🍫|
Cioccolato fondente 🍫|Patatine 🥔|Popcorn 🍿|Salatini 🥨|Caramelle 🍬|Gomme da masticare 🍬|
Gallette di riso 🍘|Budino 🍮|Panna spray 🍦|Purè 🥔`,
  bevande: `
Acqua naturale 💧|Acqua frizzante 💧|Vino rosso 🍷|Vino bianco 🥂|Prosecco 🍾|Spumante 🍾|Birra 🍺|
Succhi di frutta 🧃|Spremuta 🍊|Cola 🥤|Aranciata 🥤|Tè freddo 🧋|Gassosa 🥤|Acqua tonica 🥤|
Bibite 🥤|Liquore 🥃|Amaro 🥃|Aperitivo 🍹`,
  surgelati: `
Gelato 🍨|Ghiaccioli 🍦|Pizza surgelata 🍕|Bastoncini di pesce 🐟|Verdure surgelate 🥦|
Minestrone surgelato 🍲|Spinaci surgelati 🥬|Piselli surgelati 🫛|Patatine surgelate 🍟|
Cotolette surgelate 🍗|Frutti di mare surgelati 🦐|Ghiaccio 🧊`,
  casa: `
Carta igienica 🧻|Carta da cucina 🧻|Tovaglioli 🧻|Fazzoletti 🤧|Detersivo piatti 🧽|
Pastiglie lavastoviglie 🧼|Detersivo lavatrice 🧺|Ammorbidente 🧺|Candeggina 🧴|Sgrassatore 🧴|
Detergente pavimenti 🧹|Anticalcare 🧴|Spugne 🧽|Sacchetti spazzatura 🗑️|Pellicola trasparente 📦|
Alluminio 📦|Carta forno 📜|Sacchetti gelo 📦|Shampoo 🧴|Balsamo 🧴|Bagnoschiuma 🧴|Sapone 🧼|
Sapone mani 🧼|Dentifricio 🪥|Spazzolini 🪥|Collutorio 🪥|Deodorante 🧴|Rasoi 🪒|Schiuma da barba 🪒|
Crema mani 🧴|Cotton fioc 🧴|Dischetti struccanti 🧴|Assorbenti 🌸|Pannolini 👶|Salviette 🧻|
Cerotti 🩹|Batterie 🔋|Lampadine 💡`,
  animali: `
Crocchette cane 🐕|Crocchette gatto 🐈|Cibo umido cane 🐕|Cibo umido gatto 🐈|Lettiera 🐈|
Snack per cane 🦴|Sacchetti per cani 🐕`
};

export const CATALOGO = [];
for (const [reparto, testo] of Object.entries(GREZZO)) {
  for (const voce of testo.split("|")) {
    const t = voce.trim();
    if (!t) continue;
    const i = t.lastIndexOf(" ");
    CATALOGO.push({ nome: t.slice(0, i), em: t.slice(i + 1), reparto });
  }
}
