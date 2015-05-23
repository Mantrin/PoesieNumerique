/*

    DIVERS SCRIPT

*/

// ************************************************************************************************
// AFFICHER CACHER DIV

    $(function(){
        
        // Afficher la popup quand je clique sur l'id
        $("#bulleApropos").click(function() {
            $("#popupCredit").fadeToggle('200');
        });
            
    });

// ************************************************************************************************
// COMPTE A REBOURS

    function rechargement() {

        window.setTimeout("document.form.time.value='40'",1000)
        window.setTimeout("document.form.time.value='39'",2000)
        window.setTimeout("document.form.time.value='38'",3000)
        window.setTimeout("document.form.time.value='37'",4000)
        window.setTimeout("document.form.time.value='36'",5000)
        window.setTimeout("document.form.time.value='35'",6000)
        window.setTimeout("document.form.time.value='34'",7000)
        window.setTimeout("document.form.time.value='33'",8000)
        window.setTimeout("document.form.time.value='32'",9000)
        window.setTimeout("document.form.time.value='31'",10000)
        window.setTimeout("document.form.time.value='30'",11000)
        window.setTimeout("document.form.time.value='29'",12000)
        window.setTimeout("document.form.time.value='28'",13000)
        window.setTimeout("document.form.time.value='27'",14000)
        window.setTimeout("document.form.time.value='26'",15000)
        window.setTimeout("document.form.time.value='25'",16000)
        window.setTimeout("document.form.time.value='24'",17000)
        window.setTimeout("document.form.time.value='23'",18000)
        window.setTimeout("document.form.time.value='22'",19000)
        window.setTimeout("document.form.time.value='21'",20000)
        window.setTimeout("document.form.time.value='20'",21000)
        window.setTimeout("document.form.time.value='19'",22000)
        window.setTimeout("document.form.time.value='18'",23000)
        window.setTimeout("document.form.time.value='17'",24000)
        window.setTimeout("document.form.time.value='16'",25000)
        window.setTimeout("document.form.time.value='15'",26000)
        window.setTimeout("document.form.time.value='14'",27000)
        window.setTimeout("document.form.time.value='13'",28000)
        window.setTimeout("document.form.time.value='12'",29000)
        window.setTimeout("document.form.time.value='11'",30000)
        window.setTimeout("document.form.time.value='10'",31000)
        window.setTimeout("document.form.time.value='9'",32000)
        window.setTimeout("document.form.time.value='8'",33000)
        window.setTimeout("document.form.time.value='7'",34000)
        window.setTimeout("document.form.time.value='6'",35000)
        window.setTimeout("document.form.time.value='5'",36000)
        window.setTimeout("document.form.time.value='4'",37000)
        window.setTimeout("document.form.time.value='3'",38000)
        window.setTimeout("document.form.time.value='2'",39000)
        window.setTimeout("document.form.time.value='1'",40000)
        window.setTimeout("document.form.time.value='0'; question();",41000)

    }
	
// ************************************************************************************************
// QUESTION + INPUT

    // Dès que le CAR arrive à 0, on appelle cette fonction
    function question() {
            
        // On affiche la popup
        $("#fondPopup").fadeIn('200');
        
        // On met le volume de piano13.mp3 à 0
        var vid = document.getElementById("piano");
        vid.volume = 0;

    }

	// Lorsque l'internaute appuie sur "Soumettre ma réponse"
    function message() {
        // On affiche le message qu'il a écrit dans l'id #tonmessage
        var message = document.getElementById("message").value;
        document.getElementById("tonmessage").innerHTML = message;
        
        // On cache le champs et les deux boutons
        document.getElementById("cacheSiValide").style.display = "none";
        // On affiche un message et un bouton
        document.getElementById("afficheSiValide").style.display = "block";
        
        // On applique des conditions de réponses de l'auteur en fonction de la réponse
        if ((message == "42") || (message == "Quarante-deux") || (message == "Quarante-Deux") || (message == "quarante-deux") || (message == "quarante deux")  || (message == "Quarante Deux")) {
            document.getElementById("reponseAuteur").innerHTML = "Il faut d'abord trouver la grande question sur la vie, l'univers et le reste ...";
        }
        else if ((message == "Le néant") || (message == "Néant") || (message == "le néant") || (message == "néant") || (message == "Rien") || (message == "rien") || (message == "") || (message == " ") || (message == "Nada")) {
            document.getElementById("reponseAuteur").innerHTML = "On se rapproche ...";
        }
        else if ((message == "Amour") || (message == "L'amour") || (message == "Aimer") || (message == "Donner de l'amour") || (message == "Donner")) {
            document.getElementById("reponseAuteur").innerHTML = "C'est quand même un peu nian nian ça ...";
        }
        else {
            document.getElementById("reponseAuteur").innerHTML = "Malheureusement ce n'est pas la bonne réponse...";
        }
        
    }


// ************************************************************************************************
// IMPRIMER

    function imprimer(){

        window.print();

    }
