/*

    DIVERS SCRIPT

*/

// ************************************************************************************************
// TWITTER

    function tweet() {
        
        // Récupérer les infos du compte sauvegardé dans le navigateur 
        // et ajout des variables de texte inscrits aléatoirement dans le HTML
        adresse="http://twitter.com/share?related=[your_twitter_account]&via=poesienum&lang=[fr]&text= "+document.getElementById('sujet1').innerHTML+' '+document.getElementById('verbe1').innerHTML+' '+document.getElementById('cod1').innerHTML+' '+document.getElementById('sujet2').innerHTML+' '+document.getElementById('verbe2').innerHTML+' '+document.getElementById('cod2').innerHTML+' '+document.getElementById('sujet3').innerHTML+' '+document.getElementById('verbe3').innerHTML+' '+document.getElementById('cod3').innerHTML+'#generationAutomatique'+"&url=[www.google.com]";

        // Ouvre l'adresse dans la fenêtre du navigateur
        window.location.href=adresse;
        
    }


// ************************************************************************************************
// AFFICHER CACHER DIV

    function cachermontrer(which){
        
        if (!document.getElementById)
        return
        if (which.style.display=="block")
        which.style.display="none"
        else
        which.style.display="block"
        
    }

// ************************************************************************************************
// COMPTE A REBOURS
function rechargement() {
    
    window.setTimeout("document.form.time.value='10'",1000)
    window.setTimeout("document.form.time.value='9'",2000)
    window.setTimeout("document.form.time.value='8'",3000)
    window.setTimeout("document.form.time.value='7'",4000)
    window.setTimeout("document.form.time.value='6'",5000)
    window.setTimeout("document.form.time.value='5'",6000)
    window.setTimeout("document.form.time.value='4'",7000)
    window.setTimeout("document.form.time.value='3'",8000)
    window.setTimeout("document.form.time.value='2'",9000)
    window.setTimeout("document.form.time.value='1'",10000)
    window.setTimeout("document.form.time.value='0';location.reload();",11000)
    
}
