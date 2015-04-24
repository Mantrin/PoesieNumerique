/*

    MODIFIER LE TEXTE

*/

// ************************************************************************************************
// TABLEAUX DES LETTRES ET CODES CORRESPONDANT

    // Tableau correspondance entre lettres et codes
    mem = new Array();
    mem[65]="a"; mem[66]="b"; mem[67]="c"; mem[68]="d"; mem[69]="e"; mem[70]="f"; mem[71]="g"; mem[72]="h"; 
    mem[73]="i"; mem[74]="j"; mem[75]="k"; mem[76]="l"; mem[77]="m"; mem[78]="n"; mem[79]="o"; mem[80]="p"; 
    mem[81]="q"; mem[82]="r"; mem[83]="s"; mem[84]="t"; mem[85]="u"; mem[86]="v"; mem[87]="w"; mem[88]="x"; 
    mem[89]="y"; mem[90]="z";

    lettre = new Array()
    
    for(i=0;i<mem.length;i++){
        
        lettre [i]=mem[i];
        
    }

    // Fonction jQuery pour lier code et lettre
    $(function(){

        $(document).keydown(function(touche) {

                var poeme = $("#animtext").text();
                var press = touche.which || touche.keyCode;
                modifTexte(poeme,press);

        });

    });
    
    // Fonction modification du texte
    function modifTexte(phrase, lchiffre) {
        var str = phrase;
        var HTMLa = "";
        mem[lchiffre]=mem[lchiffre].big();

        for(i =0; i<phrase.length;i++){
            memi =0;
            for(j=0;j<lettre.length;j++){
                if (phrase[i]==lettre[j]){
                    HTMLa +=mem[j];
                    memi=1;
                }
            }
            if(memi==0){
                    HTMLa +=phrase[i]
            }
        }
        document.getElementById("animtext").innerHTML = HTMLa;
    }