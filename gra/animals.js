const animalImages = {
    "Kangur": "https://upload.wikimedia.org/wikipedia/commons/2/22/Kangur.rudy.drs.jpg",
    "Lis": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Vulpes_vulpes_at_Cape_Newenham.jpg",
    "Rekin": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Great_White_Shark_%2814730719119%29.jpg/640px-Great_White_Shark_%2814730719119%29.jpg",
    "Mamut": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Woolly_mammoth_model_Royal_BC_Museum_in_Victoria.jpg/640px-Woolly_mammoth_model_Royal_BC_Museum_in_Victoria.jpg",
    "Tygrys": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Royal_Bengal_Tiger-0034.jpg/640px-Royal_Bengal_Tiger-0034.jpg",
    "Lew": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/African_Lion_Panthera_leo_Male_Pittsburgh_2800px.jpg/640px-African_Lion_Panthera_leo_Male_Pittsburgh_2800px.jpg",
    "Orka": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/JumpingOrca.jpg/640px-JumpingOrca.jpg",
    "Lama": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Llama_lying_down.jpg/640px-Llama_lying_down.jpg",
    "Delfin": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Tursiops_aduncus%2C_Port_River%2C_Adelaide%2C_Australia_-_2003.jpg/640px-Tursiops_aduncus%2C_Port_River%2C_Adelaide%2C_Australia_-_2003.jpg",
    "Wilk": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Front_view_of_a_resting_Canis_lupus_ssp.jpg/615px-Front_view_of_a_resting_Canis_lupus_ssp.jpg",
    "Motyl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Tagpfauenauge.jpg/751px-Tagpfauenauge.jpg",
    "Amonit": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Ammonite_Asteroceras.jpg",
    "Kowal": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Pyrrhocoris_apterus2.jpg/320px-Pyrrhocoris_apterus2.jpg",
    "Koń": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/White_horse-K8855-1.jpg/640px-White_horse-K8855-1.jpg",
    "Komar": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Aedes_aegypti_biting_human.jpg/606px-Aedes_aegypti_biting_human.jpg",
    "Małpa": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Macaca_sinica_-_01.jpg/400px-Macaca_sinica_-_01.jpg",
    "Żaba": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/European_Common_Frog_Rana_temporaria.jpg/640px-European_Common_Frog_Rana_temporaria.jpg",
    "Żubr": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Bison_bonasus_%28Linnaeus_1758%29.jpg/640px-Bison_bonasus_%28Linnaeus_1758%29.jpg",
    "Ankylozaur": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Ankylozaur_%28Ankylosaurus%29_-_JuraPark_Baltow_%281%29.JPG/640px-Ankylozaur_%28Ankylosaurus%29_-_JuraPark_Baltow_%281%29.JPG",
    "Elasmozaur": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Thalassomedon_haningtoni.jpg/350px-Thalassomedon_haningtoni.jpg",
    "Dunkleosteus": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Dunkleosteus_Artist%27s_Impression.png/640px-Dunkleosteus_Artist%27s_Impression.png",
    "Jeleń": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Cervus_elaphus_Luc_Viatour_5.jpg/480px-Cervus_elaphus_Luc_Viatour_5.jpg",
    "Kozica": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Kozicewmnichowym.jpg/640px-Kozicewmnichowym.jpg",
    "Nietoperz": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Southern_bentwing_bat.jpg/640px-Southern_bentwing_bat.jpg",
}

// Lawa, Larwa, Kot, Lampa
// Legwan, Lemur, Leniwiec
// Koń, kot, kos, koza
// Kowal, Komar
// Małpa, Mamut, Motyl, Markur,
// Żubr, żuk, żaba, żabnica
// Kangur, Kuguar, Kajman
// Tygrys,
// orka, owca
// jeleń, jak, chrząszcz jelonek
// renifer
// diplodok, deinocheir, deinonych
