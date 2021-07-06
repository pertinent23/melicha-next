/**
* algo de construction d'une grille de chercher le mot
*/

(function(){
    //voici le générateur
    const wordFinder = {
        //listes des mots à chercher
        words : Array(),
        /**
         * utilise cette fonction pour définir la liste de mot à chercher
         * @param {Array} list 
         */
        setWords(list){
            this.words = list;
        },
        //grille de mots
        grille : {
            //ici je stocke les données générer
            data: {
                // la grille de chercher le mot sous forme de tableau de tableau
                grille : Array(),
                // les solution du chercher le mot sous forme de json, les clé d'entrer sont les différents mots
                // chaque clé est associée à un objet literal qui contient la position de la première lètre du mots
                // et la direction dans laquelle chercher
                solution : Array()
            },
            // appel cette fonction pour générer une grille vide
            setGrille(){
                /**
                * crée les cases de la grille
                */
                for(let i = 0; i <= 19 ; i++){
                    this.data.grille[i] = Array(20);
                }
            },
            /**
            * place une valeur dans la grille
            * @param {Array} pos 
            * @param {char} val
            */
            setVal(pos, val){
                this.data.grille[pos.y][pos.x] = val;
            },
            /**
             * recupère une valeur dans la grille
             * @param {Array} pos 
             * @returns 
             */
            getVal(pos){
                if(this.data.grille.length === 0)
                    this.setGrille();
                return this.data.grille[pos.y][pos.x];
            },
            /**
             * enregistre la position d'un mot dans la grille
             * @param {String} word 
             * @param {Array} pos 
             * @param {Number} dir 
             */
            saveSolution(word, pos, dir){
                this.data.solution[word] = {
                    start : pos, 
                    direction : dir
                };
            },
            /**
             * 
             * @returns la grille
             */
            get(){
                return this.data
            }
        },
        
        /**
        * teste une case de la grille pour savoir si on peut y placer une certaine lettre 
        * pos a deux éléments ; l'abscisse et l'ordonnée
        * @param {Array} pos
        * val est le caractère à vérivier 
        * @param {char} val
        */
        availableCase(pos, val){
            if(pos.x >= 0 && pos.x <=19){
                if(pos.y >= 0 && pos.y <=19){
                    if( this.grille.getVal(pos) === undefined 
                    || this.grille.getVal(pos) === val
                    ){
                        return true;
                    }
                }
            }
            return false;
        },
        
        /**
        * parcoure une région de la grille, soit pour placer un mot,
        * soit pour vérifier si la région peut acceuillir un certain mot
        * @param {Array} pos
        * @param {integer} length
        */
        workInRange(word, pos, dir, set = false){
            if(true){
                let charPos = 0, x = pos.x, y = pos.y;
                while( charPos < word.length ){
                    if(set){
                        // place la lettre courante du mot
                        this.grille.setVal( {x : x, y : y}, word[charPos]);
                    }else{
                        // vérifie si la case courante de la grille est diponible pour la lettre courante du mot
                        if(! ( this.availableCase( {x : x, y: y}, word[charPos] ) ) ) 
                            return false;
                    }

                    //calcule la position suivante dans la direction spécifié
                    switch(dir){
                        case 1 :
                        y--;
                        x--;
                        break;
                        case 2 : 
                        y--;
                        break;
                        case 3 : 
                        y--;
                        x++;
                        break;
                        case 4 : 
                        x++;
                        break;
                        case 5 : 
                        y++;
                        x++;
                        break;
                        case 6 : 
                        y++;
                        break;
                        case 7 :
                        y++;
                        x--;
                        break;
                        case 8 :
                        x--;
                        break;
                    }
                    charPos++;
                }
                return true;
            }
            return false;
            
            
        },
        //génère une position alèatoire
        getPos(border){
            let pos = {
                x: Number(),
                y: Number()
            };

            do{
                pos.x = Math.round( Math.random() * 20 );
                pos.y = Math.round( Math.random() * 20 );
            }while(
                !(
                true
                && border <= pos.x
                && pos.x <= 19 - border
                && border <= pos.y
                && pos.y <= 19 - border
                )
            );

            return pos;
        },
        //génère une direction aléatoire
        getDir(){
            let dir

            do{
                dir = Math.round( Math.random() * 8 );
            }while(
                !(
                true
                && 1 <= dir
                && dir <= 8
                )
            );

            return dir;
        },
        //place les mots dans la grille
        placeWord(fill = true){
            for(word of this.words){
                let pos, dir, available = false;
                //cherche une plage disponible pour placer le mot
                do {
                    pos = this.getPos(word.length);
                    dir = this.getDir();
                    if( this.workInRange(word, pos, dir) )
                        available = true;
                }
                while(!available);

                //sauvegarde la position du mot
                this.grille.saveSolution(word, pos, dir);
                //place le mot sur la plage dédié
                this.workInRange(word, pos, dir, true);
            }
            //remplie éventuellement les trous
            if(fill)
                this.fillBlank();
        },

        fillBlank(){
            let pos = {x : Number(), y : Number()};
            //cherche les positions vide dans la grille
            for (pos.y = 0; pos.y <= 19; pos.y++){
                for (pos.x = 0; pos.x <= 19; pos.x++){
                    if( this.grille.getVal(pos) === undefined ){
                        //génère une lettre au hasard
                        let random_pos = Math.round( Math.random() * 25 );
                        let letters = "azertyuiopqsdfghjklmwxcvbn";
                        //place la lettre à cette position
                        this.grille.setVal(pos, letters[random_pos] );
                    }
                }
            }
        },
        //affichage brut de la grille pour d'éventuel test
        consoleShow(){
            for(let i = 0; i <= 19; i++ ){
                for(let j = 0; j <= 19; j++){
                    document.write( `<span>${wordFinder.grille.get().grille[j][i]}</span>`);
                }
                document.write("</br>");
            }
        }
    };

    /*
    //test
    //création d'une grille vide (facultatif)
    wordFinder.grille.setGrille();
    //définition des mots à chercher (obligatoire)
    wordFinder.setWords(["fermer", "ouvrir", "danser", "chanter", "palabre"]);
    //place les mots dans la grille (obligatoire)
    wordFinder.placeWord();
    //rempli les trou (facultatif)
    wordFinder.fillBlank();
    //affiche une ébauche de grille (très facutatifs)
    wordFinder.consoleShow();
    console.log(wordFinder.grille.get());
    */
    window.initSearchWord = function ( arr ) {
        wordFinder.grille.setGrille();
            wordFinder.setWords( arr );
            wordFinder.placeWord();
            wordFinder.fillBlank();
        return wordFinder.grille.get();
    };

    window.initSearchWord.direction = [
        1, 2, 3,
        8, 0, 4,
        7, 6, 5
    ];
}
)();