/*									------------
										V1.2
									------------
						Changement de la gestion des variables : mises dans un tableau.
						Remplacement de l'annonce du nombre de variables par NomTableau.length dans Math.random
						--> permet une syntaxe moins lourde
						et de pouvoir ajouter des mots à volonté sans gérer l'annonce du nombre de variables
*/


// PENSER A
// ajouter une console log
// une manipulation d'objet
// recuperation d'un input

 //LISTES
	// Tableaux pour ver 1
		// tableau sujets
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
			"La réthorique","L'espérance", "la mort"
		);
		// tableau verbes	
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
		// tableau complements
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
// VER 1
	// sujets
    function sujet () {
		// variable nommée "obj" va chercher l'élément "txt" (nom de l'id d'une span)
		var obj=document.getElementById("txt");
		// aleatoire = 
		aleatoire=Math.floor(Math.random()*lisujets.length);
		obj.innerHTML = lisujets [aleatoire];
		console.log('Nombre sujets : '+lisujets.length);
    }
	// verbes
	function verbe () {
		var obj=document.getElementById("vrb");
        aleatoire=Math.floor(Math.random()*liverbes.length);
		obj.innerHTML = liverbes [aleatoire];
		console.log('Nombre verbes : '+liverbes.length);
	}
	// cod
	function complement () {
        var obj=document.getElementById("cod"),
		aleatoire=Math.floor(Math.random()*licomplements.length);
		obj.innerHTML = licomplements [aleatoire];
		console.log('Nombre complements : '+licomplements.length);
	}
	
// VER 2
	// sujet2
	function sujet2 () {
		var obj=document.getElementById("txt2");
		aleatoire=Math.floor(Math.random()*lisujets.length);
		obj.innerHTML = lisujets [aleatoire];
    }
	// verbes 2
	function verbe2 () {
		var obj=document.getElementById("vrb2");
        aleatoire=Math.floor(Math.random()*liverbes.length);
		obj.innerHTML = liverbes [aleatoire];
	}
	// cod2
	function complement2 () {
        var obj=document.getElementById("cod2"),
		aleatoire=Math.floor(Math.random()*licomplements.length);
		obj.innerHTML = licomplements [aleatoire];
	}
	
// VER 3
	// sujet3
	function sujet3 () {
		var obj=document.getElementById("txt3");
		aleatoire=Math.floor(Math.random()*lisujets.length);
		obj.innerHTML = lisujets [aleatoire];
    }
	// verbes 3
	function verbe3 () {
		var obj=document.getElementById("vrb3");
        aleatoire=Math.floor(Math.random()*liverbes.length);
		obj.innerHTML = liverbes [aleatoire];
	}
	// cod3
	function complement3 () {
        var obj=document.getElementById("cod3"),
		aleatoire=Math.floor(Math.random()*licomplements.length);
		obj.innerHTML = licomplements [aleatoire];
	}
	
	// FONDS COULEURS
		// variable changeCol abrite un tableau qui liste toutes les couleurs possibles
		var changeCol = new Array("#36341b","#323f38","#7c8f7c","#92996f","#e3bd72","#ba944d","#b35a48","#42271c","#08589e","#7bccc4","#a8ddb5","#4eb3d3","#d2d904","#f23d30","#572436","#4a3970","#7f6aa0","#b4ace2","#49006a","#ae017e","#776677","#665555","#554455","#fe9711","#ee6644","#fb0b81","#22ee88","#5b0796","#7c1c32","#4e1833","#8b5974","#6e4373","#454b81","#445511","#CCEEFF","#806315","#553E00","#354F00","#226666");
		 
		 // Creation de la fonction pour initier une sélection aléatoire.
		function randomColor()
		{
		 var bcgimg = changeCol.length;
		 var img; 
		 
		 img = Math.round(Math.random()*bcgimg);
		 document.body.style.background = changeCol[img];
		 
		}
		
		// Ouverture fenêtre pour twitter avec récupération du poème
		function tweet() {
			// adresse de twitter récupérant les infos du compte sauvegardé dans le navigateur et ajout des variables de texte inscrits aléatoirement dans le HTML
			adresse="http://twitter.com/share?related=[your_twitter_account]&via=poesienum&lang=[fr]&text= "+document.getElementById('txt').innerHTML+' '+document.getElementById('vrb').innerHTML+' '+document.getElementById('cod').innerHTML+' '+document.getElementById('txt2').innerHTML+' '+document.getElementById('vrb2').innerHTML+' '+document.getElementById('cod2').innerHTML+' '+document.getElementById('txt3').innerHTML+' '+document.getElementById('vrb3').innerHTML+' '+document.getElementById('cod3').innerHTML+'#generationAutomatique'+"&url=[www.google.com]";
			
			// ouvre adresse dans la fenêtre du navigateur
			window.location.href=adresse;
		}
		
		//Cacher/Montrer copyright
			function cachermontrer(which){
			if (!document.getElementById)
			return
			if (which.style.display=="block")
			which.style.display="none"
			else
			which.style.display="block"
			}