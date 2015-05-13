/*

    GENERATION DU POEME

*/

// ************************************************************************************************
// TABLEAUX DES SUJETS VERBES COMPLEMENTS
    
    // Tableaux pour récupération variables --> twitter
    sujetOriginal = new Array (
    );
    verbeOriginal = new Array (
    );
    codOriginal = new Array (
    );

    // Sujets
    lisujets = new Array (
        "La vie","La métaphysique","Le ciel","Le soleil",
        "L'étoile","La Terre","L'eau","L'arbre",
        "Le miroir","L'âme","L'ego","Le démon",
        "L'air","Le feu","L'éther","La mère",
        "Le fils","Le père","Le peuple","La mer",
        "L'or","L'argent","Le cuivre","La pierre",
        "Le temps","La télé","Le mot","L'art",
        "La philo","Le chemin","La fille","La femme",
        "Le nous","Notre vie","Votre vie","Ta vie",
        "L'être","La fleur","Le magicien","L'Odyssée",
        "Le Dieu","L'océan","La forêt","Le fleuve",
        "L'enfant","L'espace","Le verbe","La prose",
        "La réthorique","L'espérance", "La mort"
    );

    // Verbes	
    liverbes = new Array (
        "abaisse","abandonne","arbore","abolit",
        "est","possède","fait","définie",
        "trouve","exige","tue","libère",
        "évolue","brûle","rêve","absorbe",
        "tourne","marche","crée","imagine",
        "pense","souffle","montre","aspire",
        "lève","transforme","révolutionne","illustre",
        "dessine","éclaire", "explique", "fabrique",
        "guide", "murmure", "nie", "ourdit", "revendique",
        "visite"
    );

    // Compléments
    licomplements = new Array (
        "la fin.","la frontière.","un tatouage étrange.",
        "l'érance du monde.","le gouffre du monde.",
        "un rêve irréaliste.","le tourbillon de désirs.",
        "le printemps.","le reflet.","la beauté.","la réalité.",
        "dieu.","la révolution.","le monde.","l'ère du temps.",
        "le réel.","la tristesse.","l'automne.","l'été.",
        "l'hivers.","la folie.","l'horloge du coeur.","l'amour.",
        "l'être.","le paraître.","un paradigme.","l'égrégore.",
        "la croyance.","la physique.","l'alchimie.", "l'œuvre.",
        "la spiritualité.", "le sablier."
    );


// ************************************************************************************************
// APPEL DES FONCTIONS

    function genPoem() {
        sujet();
        verbe();
        complement();
        
        randomColor();
    }


// ************************************************************************************************
// GENERER LES SUJETS VERBES COMPLEMENTS

    // Sujets
    function sujet() {
        
		// Une boucle "for" pour générer 3 sujets différent
        for (var a=0; a<3; a++) {
            
            aleatoire=Math.floor(Math.random()*lisujets.length);    

            // Un id "sujet" pour plusieurs sujets
            id = "sujet"+(a+1);
            var obj=document.getElementById(id);
            // On écrit les sujets dans la page html
            obj.innerHTML = lisujets [aleatoire];
            
            sujetOriginal[a] = (lisujets [aleatoire]);
            
            console.log('Nombre sujets : '+lisujets.length);
            
        }
    }
        
	// Verbes
	function verbe() {
        
        // Une boucle "for" pour générer 3 verbes différent
        for (var a=0; a<3; a++) {
            
            aleatoire=Math.floor(Math.random()*liverbes.length);
            
            // Un id "verbe" pour plusieurs verbes
            id = "verbe"+(a+1);
            var obj=document.getElementById(id);
            // On écrit les verbes dans la page html
            obj.innerHTML = liverbes [aleatoire];
            
            verbeOriginal[a] = (liverbes [aleatoire]);
            
            console.log('Nombre verbes : '+liverbes.length);
        
        }
	}

	// Compléments
	function complement() {
        
        // Une boucle "for" pour générer 3 compléments différent
        for (var a=0; a<3; a++) {
            
            aleatoire=Math.floor(Math.random()*licomplements.length);
            
            // Un id "cod" pour plusieurs compléments
            id = "cod"+(a+1);
            var obj=document.getElementById(id);
            // On écrit les compléments dans la page html
            obj.innerHTML = licomplements [aleatoire];
            
            codOriginal[a] = (licomplements [aleatoire]);
            
            console.log('Nombre complements : '+licomplements.length);
            
        }
	}

// ************************************************************************************************
// BACKGROUND ALEATOIRE

    // Variable "changeCol" abrite un tableau qui liste toutes les couleurs possibles
    var changeCol = new Array("#36341b","#323f38","#7c8f7c","#92996f","#ba944d","#b35a48",
                              "#42271c","#08589e","#4eb3d3","#d2d904","#f23d30","#572436","#4a3970",
                              "#7f6aa0","#b4ace2","#49006a","#ae017e","#776677","#665555","#554455","#fe9711","#ee6644",
                              "#fb0b81","#5b0796","#7c1c32","#4e1833","#8b5974","#6e4373","#454b81","#445511",
                              "#806315","#553E00","#354F00","#226666");

    // Fonction pour générer une couleur aléatoire
    function randomColor() {

        var bcgimg = changeCol.length;
        var img; 

        img = Math.round(Math.random()*bcgimg);
        document.body.style.background = changeCol[img];

    }

// ************************************************************************************************
// TWITTER

    function tweet() {
        
        // Récupérer les infos du compte sauvegardé dans le navigateur 
        // et ajout des variables de texte inscrits aléatoirement dans le HTML grâce à la sauvergarde dans les Array
        adresse="http://twitter.com/share?related=[your_twitter_account]&via=poesienum&lang=[fr]&text= "+sujetOriginal[0]+" "+verbeOriginal[0]+" "+codOriginal[0]+" "+sujetOriginal[1]+" "+verbeOriginal[1]+" "+codOriginal[1]+" "+sujetOriginal[2]+" "+verbeOriginal[2]+" "+codOriginal[2]+'#generationAutomatique'+"&url=[www.google.com]";

        // Ouvre l'adresse dans la fenêtre du navigateur
        window.location.href=adresse;
        
    }


// ************************************************************************************************
// JQUERY

    
    $(function(){
        
        // Cacher le poeme avec un bloc blanc
        setInterval(function(){augmenteTaille();},1000);
        
        function augmenteTaille() {
            
            $(".carChiffre").css({
                fontSize: "+=1px"
            });
            
        }
        
        // Apparition du poeme
        $( "span" ).first().show( "fast", function showNext() {
            $( this ).next( "span" ).show( "fast", showNext );
        });
        
            
    });

