class ClassHistoire {
    constructor(){
        this.intro="Née dans l'an 500 AP Jésus Christ dans la zone montagneuse des **Huangshan**, fils du forgeron Meiwong, et de Jido, femme couturière, dans une époque ou règnes dragons et sorciers.  \n" +
            "\n" +
            "L'école n'existait pas et les parents devaient garder eux-mêmes leurs enfants, c'est à la chaudronnerie ou travaille son père que Malao avec ses frères et sœurs grandissent. C'est donc dans la chaleur des fours, des chaudrons et sous le bruit du marteau claquant le métal froid des épées, haches, flèches que les enfants passent leur temps. \n" +
            "\n" +
            "Mais c'est à un autre destin que rêve le jeune garçon. Il passât son temps à regarder par la seule fenêtre les montagnes rocheuses de sa région. S'imaginant visiter chaque recoin à la découverte de lieux tout aussi fascinant les uns que les autres. Mais son père le rappela à l'ordre chaque jour lui en disant que le monde extérieur est peuplé de dragons et de sorciers maléfiques.  \n" +
            "\n" +
            "Comme dans chaque famille, il existe toujours un enfant différent des autres. Malao était celui-là. Il travailla avec son père et ses frères en tant que chaudronnier jusqu'à ses 14ans.  C'est à partir de 15 ans qu'il s'enfuit de la chaudronnerie la journée pour visiter les montagnes de sa région et choisi alors son destin : celui d'aventurier.";

        this.choix={"e1c1":["Malao décide de tout raconter à son père","e1c1"],
            "e1c2":["Malao décide de mentir","e1c2"],
            "e2c1":["Malao refuse d'écouter","e2c1"],
            "e2c2":["Malao écouta le vieillard","e2c2"],
            "e3c1":["Partir au combat l'épée au poing pour tuer ses maudits tortionnaires","e3c1"],
            "e3c2":["Il se rend compte que la discrétion doit être de mise pour cette petite mission","e3c2"]
        };
        this.texte={
            "un":"Un beau jour de soleil, pendant une virée en montagne, Malao s'enfonça dans une grotte de plus en plus sombre, froide et humide. Les dragons faisaient généralement leur nid dans de ce genre d'endroit à l'abris des chausseurs. Petit pas par petit pas il continue son chemin, son souffle et son poux sont de plus en plus fort. Malao ne voyait rien, seule la main sur le mur pouvait l'aider à avancer et à se situer dans la grotte... \n" +
                "\n" +
                "Mais, ne pouvant pas voir les obstacles sur le sol, il trébuchât sur une roche en hurlant et en se cognant la tête. C'est alors qu'un bruit sourd retentit. Pris de panique Malao se relève en trompe et rebrousse chemin jusqu'à la chaudronnerie pour retrouver son père. Inquiet, son père lui demande ce qu'il s'est passé :",
            "deuxMort":"celui-ci l'engueula et le prive de sorties. Il travaille alors de nouveau à la chaudronnerie et une idée s'illumine dans sa tête : se construire une dague, lui servant à se protéger de ses virées externes. Des semaines après sa chute et son retour à la chaudronnerie, le dernier coup de marteaux ressentit sur sa dague. C'est dans un fourreau de bois que la lame ondulée fut couplée. \n" +
                "\n" +
                "    Le lendemain il décide de sortir de nouveau sous le désespoir de son père. Une fois la nuit tombé et Malao rentré, son père l'amena voir un ancien combattant. Son père ayant déjà aidé cette personne dans le temps, il lui demanda de prendre son fils sous son aile pour lui apprendre l'art du combat. \n" +
                "\n" +
                "    Malheureusement, Malao avait une tout autre idée que de venir s'entrainer au combat tous les jours. Seule l'envi de revenir dans la grotte trotta dans sa tête. Alors que son père le laissa seul aller à l'entrainement un jour de pluie, le vieux combattant annula la séance quand Malao vient frapper à sa porte. Il en profita pour retourner voir dans la grotte...   \n" +
                "    Tout doucement il s'enfonça de nouveau dans la grotte, avec comme seul défense les quelques courts reçus par le vieillard et sa dague. Petit à petit il sentit une chaleur et ressentit une sensation, comme si quelqu'un ou quelque chose l'observé. Malencontreusement pour lui, ses pieds tapaient dans quelque chose de dur, c'est avec sa main qu'il découvrit quelque chose de dur, écailleux, chaud face à lui. Il recule, puis vit s'ouvrir devant lui deux yeux jaunes...\n" +
                "\n" +
                "    Il recula mais c'était déjà trop tard pour lui, le dragon avait glissé sa queue au niveau de ses pieds et le fit malencontreusement tomber sur le sol. Apeuré, il donne des grands coups de dague dans le vide tout en reculant sur le sol, le dragon s'approcha de plus en plus de lui puit finit par le manger... \n" +
                "\n" +
                "    Malao meurt...",
            "deux":"et raconte qu'il est tombé sur une roche pour pouvoir sortir de nouveau le lendemain sans subir la colère de son père. \n" +
                "   Il décide alors de se reposer et de travailler à la chaudronnerie. Des semaines après des semaines, sous la chaleur bouillante, son père lui dit \"demain tu ne viens pas travailler, je vais t'amener voir une personne\". Surprit de cette décision, le stresse s'empare de son esprit, qui allons-nous voir se demanda Malao. Impossible de lui pour dormir il attend patiemment le lendemain. \n" +
                "   Le jour se lève, son père entre dans la chambre, il sait qu'il doit le suivre. Seul sa mère sait de quoi il s'agit. A table pour le petit déjeuner, le père raconte à son fils :  \n" +
                "   *\"Malao, tu as maintenant 17 ans, il est l'heure pour toi d'aller voir une personne qui pourra t'apprendre l'art du combat.\"*   \n" +
                "   C'est sous un ciel caché par les nuages que Malao suivit son père le long d'un sentier à la sortie du village. Ils arrivent face à une vieille maison, son père tape et une vieille voix cassée lui ordonne de rentrer. Ils rentrent et Malao se retrouve en présence d'un vieux petit homme à la barbe longue et au regard creusé. Il observe l'intérieur de la maison et remarque une multitude d'armes blanches sur les murs. C'est alors que son père serra le vieil homme contre lui, comme un signe d'une amitié lointaine. Il murmure conjointaient à leurs oreilles. \n" +
                "\n" +
                "   Les deux hommes posent leurs regards sur Malao, son père lui explique alors que c'est un vieil ami à lui et que c'est un ancien combattant qui va le prendre sous son aile pour lui transmettre différentes techniques d'art martiaux. Son père sort alors une épée de sa veste et la donne à Malao en lui disant que c'est l'arme de son grand père et d'en prendre soin.\n" +
                "Le premier jour avec le vieil homme fut spécial pour Malao, le vieil homme ne dit rien et il reste tout deux sur les chaises, comme si le vieillard voulait voir la réaction du jeune homme sans discuter, juste en observant. Le soleil tombe de plus en plus et il dit alors au jeune homme *\"rentre chez toi et sois la demain à l'aube\"*. \n" +
                "\n" +
                "Excité, il rentre chez lui en courant et serre son père dans les bras, ainsi que sa mère, il mange et se couche pour être en forme le lendemain. Dès les premiers rayons de soleil posés sur son visage, il saute du lit, gobe son petit déjeuner et enfile ses habits pour courir voir le vieillard. Une fois arrivé, il le vit debout dehors et lui fit un signe de main lui indiquant de le suivre derrière la maison. \n" +
                "\n" +
                "Son premier entrainement fut basé sur le combat à main nue, Malao râle et subit un coup de bâton par le vieillard qui lui expliqua :  \n" +
                "\" Comment veux-tu te battre avec une épée si tu ne sais même pas manier tes mains ?\"  \n" +
                "Celui-ci lui montra un mannequin en bois et lui ordonna de le frapper toute la journée. Bête comme il est, Malao donna tout ce qu'il a dès le début et fit essouffler, épuisé, faible au bout de 5 minutes...  \n" +
                "Le vieillard lui dit de recommencer mais Malao recommence encore une fois. Encore un coup de bâton, le vieillard lui indique de s’assoir en lotus sur le banc à ses côtés.",

            "troisComb":"Malao refuse et essaye de nouveau de se battre contre se mannequin mais en vain. Le vieillard lui donne encore un nouveau coup de bâton, ce qui énerva le jeune homme qui décida de quitter l'entrainement et de rentrer chez lui. Le lendemain, accompagné de son épée, Malao prend le chemin de la montagne et rencontre sur son chemin différentes personnes. Il indique alors être un combattant et suis ses personnes. Ce qu'il ne savait pas c'est que ses personnes l’étaient de nature méchante et avaient une idée bien précise de quoi faire de ce jeune homme. \n" +
                "\n" +
                "    Une fois arrivé au campement de ces individus. Malao comprit que c'était un piège et fut encerclé par différents hommes, enfants. Il sort son épée et c'est alors que commence un combat entre lui et ses hommes,",
            "trois":"Le jeune combattant prit conscience de la sagesse de ce vieillard, il se pose alors en lotus comme demandé mais tomba directement. Le vieil homme resta toujours sans expression, Malao se relève et se pose délicatement. \n" +
                "   Il demande alors quoi faire ? Aucune réponse, il ferme les yeux et ses alors que le vieillard répond :  \n" +
                "   \"La respiration fait partie de la première chose à apprendre pour pouvoir combattre dignement sans s'épuiser. Apprend donc à connaitre ta respiration, rentre en harmonie avec ton corps, ta foi, ton esprit.\"  \n" +
                "   Une longue journée se passe, la nuit tombe et les deux hommes reste là sur le banc. C'est alors que le jeune combattant se dirige vers le mannequin et enchaine les coups sans faiblesse (Force qui passe de 10 à 20, Endurance et résistance de 10 à 40.). Le vieil homme ordonna à Malao de rentrer et de revenir le lendemain."+"Le jeune homme part rejoindre le vieillard pour lui expliquer et lui montrer la carte, celui-ci rentre dans sa maison, des bruits de métaux et de tissus se font entendre. Le vieil homme en ressort accompagné de l'épée et de différents tissus servant de veste pour le voyage. L'homme avança et Malao comprit que celui-ci l'accompagnerait pour son voyage. \n" +
                "\n" +
                "Des jours et des jours de marche, le vieillard ne montra aucun signe de faiblesse, Malao ne comprend pas vraiment qui est cet homme et comment il est là ou il en est. \n" +
                "\n" +
                "Dans le recoin d'une forêt sombre le vieil homme s'arrête et allume un feu, le jeune homme comprit qu'ils allaient passer la nuit ici. La nuit passe et le jeune homme trouve difficilement le sommeil. Le soleil du lendemain le réveil, Malao range ses affaires et reprend la route accompagnée du vieillard. \n" +
                "\n" +
                "Pendant leur voyage, différents bruits se font ressentir, le côté curieux de Malao le fait regarder à droite, à gauche, c'est à ce moment-là qu'il trouve un sanctuaire et décide de s'y rendre. Le vieillard le suit sagement. Une fois arrivé devant, les deux hommes s'assaillent. C'est alors qu'une épaisse fumée apparait de la statue présente dans le sanctuaire... \n" +
                "\n" +
                "Plusieurs heures passent et la nuit tombe de nouveau, un petit campement se met de nouveau en place. Malao se met alors en méditation avant de dormir comme sur le banc avec le vieil homme lors de ses premiers jours d'entrainements. \n" +
                "\n" +
                "C'est alors que le combattant se réveil et aperçoit une lumière au fond, il se lève et part en cette direction jusqu'au moment oui il observait des hommes avec des cages enfermant des dragons, Malao réfléchit alors :",
            //a faire
            "quattreCombat1-1":"Malao part alors au combat sans savoir le nombre d'ennemies, n'y contre qui se battre, il avance doucement puis tombe nez à nez avec l'une de ces personnes.",
            "quattreCombat1-2":"Malao l'emporte (Gain de force et d'endurance de 10, mais perte de vie 100 à 85). Il enchaine ses pas et avance de nouveau. Deux hommes viennent à lui en sonnant l'alarme.",
            "quattreCombat1-3":"Le jeune guerrier s'en sort fatiguer (Vie passe de 85 à 30, gain de force de 25) mais ne refuse de rebrousser chemin, il se dirige vers une cage et casse le cadenas pour y laisser sortir les dragons. Il entend un homme courir dans son dos se retourne en tendant sa main et, ne sachant pas gérer sa magie envoie un sort qui lui faire un bon arrière de plusieurs mettre, malheureusement pour lui, des pics en bois se trouvait derrière lui et lui transperças plusieurs fois le corps, ce qui le fit mourir sur le coup.",
            //a faire
            "quattre":"C'est alors qu'il avance doucement sur la pointe des pieds tout en regardant le sol pour vérifier qu'il ne rencontre pas de problème, comme précédemment dans la grotte. Au fur et à mesure de son avancé il arrive à ouvrir plusieurs cages, c'est alors que les dragons sortent tous en même temps et attaque les voleurs simultanément. Il observe cette réussite de loin. Bien évidemment le bruit des combats réveils le vieillard qui vient alors taper Malao pour lui rappeler de se tenir droit."+"La nuit tombe à sa fin et le jour se lève, les deux hommes sont prêts à reprendre la route, c'est leur dernier jour de marche avant d'arriver à l'endroit indiquer sur la carte. Le mal aux pieds se fait sentir sur Malao, ainsi que sur le vieillard, qui, malgré son expérience se fait vieux.  \n" +
                "C'est à la vue des montagnes et des vieux bâtiments construit sur les flancs de montages qu'ils compris qu'ils étaient arrivés. Un grand temple avec d'immense porte s'ouvrit devant eux, comme si leur venu était attendu. \n" +
                "A l'intérieur, très peu de lumière, des bougies éclaire la pièce, ils avancent avec un air curieux pour Malao, tandis que le vieil homme avance toujours sans aucune réaction. Celui-ci s'avance jusqu'à la statue de bronze, représentant un mage et s'assied devant elle. Malao quant à lui, avance lentement tout en observant ce temple. \n" +
                "\n" +
                "Les portes se referment et Malao se retourne au bruit des portes claquantes. Une fois arrivé devant la statue, une voix cassante lui demande de s'assoir, il ne comprend d'où celle-ci sort, mais s'exécute. C'est alors qu’un vieil homme disposant d'une longue barbe arrive d'un coin sombre de la pièce.\n" +
                "Le vieille homme assis se lève et les deux hommes se serrent dans les bras, tel de vieux amis ne s'étant pas vus depuis de nombreuses années. Les deux vieillards se retournent vers Malao et le mage demande alors à son ami si c'est bien avec lui qu'il est venu. Malao s'interroge sur le \"lui\" prononcer par cet homme. \n" +
                "\n" +
                "Celui-ci s'approche alors du jeune homme et lui explique qu'il est le descendant d'un grand sorcier et que coule dans son sang les gènes de ce sorcier. Mais que sans aide, il ne pourrait pas utiliser correctement sa magie et le vieux monsieur, à la barbe grisonnante lui indique être son maitre. \n" +
                "\n" +
                "Les jours se suivent et Malao apprend de mieux en mieux à gérer la force de sa magie. Les deux vieux hommes s'unissent pour un combat contre Malao.",
            "quattre-2":", lui demandant de gagner ce combat, tout en réfléchissant à ses actes, coups."+"Le combat se déroule parfaitement bien, Malao se défend correctement et apprend de nouvelle technique d'esquive, apprend à mieux gérer son stress et sa magie."

        };
        this.embranchementZero();
    }

    embranchementZero(){
        $("main").append("<section></section>");
        $('main section').append(`<h1>${this.intro}</h1>`);
        $('main section').append("<button class='debut'>Début</button>");
        $(".debut").click(( event => {
            this.clearSection();
            this.embranchement(`${this.texte.un}`,`${this.choix.e1c1[1]}`,`${this.choix.e1c1[0]}`,`${this.choix.e1c2[1]}`,`${this.choix.e1c2[0]}`);
        }));
    }

    embranchement(texte,classeUn ="",phraseButonUn="",classedeux ="",PhraseButonDeux=""){
        $('main section').append(`<p>${texte}</p>`);
        if(classedeux===""){
            this.generateBouton(`${classeUn}`,`${phraseButonUn}`,``,``);
        }
        else {
            this.generateBouton(`${classeUn}`,`${phraseButonUn}`,`${classedeux}`,`${PhraseButonDeux}`);
        }
    }
    clearSection(){
        $('main section').empty();
    }
    clearMain(){
        $('main').empty();
    }
    generateBouton(classeUn,phraseBoutonUn,classeDeux="",phraseBoutonDeux=""){
        if(classeDeux===""){
            $('main section').append(`<button class="${classeUn}">${phraseBoutonUn}</button>`);
        }
        else {
            $('main section').append(`<button class="${classeUn}">${phraseBoutonUn}</button><button class="${classeDeux}">${phraseBoutonDeux}</button>`);
        }
            this.clicBoutonChoix()
    }
    clicBoutonChoix(){
        $("main section button").click(( event => {
            this.clearSection();
            if(event.target.className==="e1c2"){
                this.embranchement(`${this.texte.deux}`,`${this.choix.e2c1[1]}`,`${this.choix.e2c1[0]}`,`${this.choix.e2c2[1]}`,`${this.choix.e2c2[0]}`);
            }
            if(event.target.className==="e1c1"){
                this.embranchement(`${this.texte.deuxMort}`,`mort`,`Vous êtes mort !`)
            }
            if(event.target.className==="mort"){
                this.clearMain();
                this.embranchementZero();
            }
            if(event.target.className==="e2c1"){
                //combat
                this.embranchement(`${this.texte.troisComb}`,`combat`,`Lancez Combat !`)
            }
            if(event.target.className==="e2c2"){
                //mise a jour compétence
                this.embranchement(`${this.texte.trois}`,`${this.choix.e3c1[1]}`,`${this.choix.e3c1[0]}`,`${this.choix.e3c2[1]}`,`${this.choix.e3c2[0]}`);
            }
            if(event.target.className==="e3c1"){
                this.embranchement(`${this.texte["quattreCombat1-1"]}`,`combat`,`Lancez Combat !`)
            }
            if(event.target.className==="e3c2"){
                this.embranchement(`${this.texte.quattre}`,`combate3c2`,`Lancez Combat !`)
            }
            if(event.target.className==="combate3c2"){
                //mise a jour compétence
            }
        }));
    }
}