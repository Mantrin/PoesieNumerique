mem = new Array();
mem[65]="a"; mem[66]="b"; mem[67]="c"; mem[68]="d"; mem[69]="e"; mem[69]="f"; mem[70]="g"; mem[71]="h"; mem[72]="i"; mem[73]="j"; mem[74]="k"; mem[75]="l"; mem[76]="m"; mem[77]="n"; mem[78]="o"; mem[79]="p"; mem[80]="q"; mem[81]="r"; mem[83]="s"; mem[83]="t"; mem[84]="u"; mem[85]="v"; mem[86]="w"; mem[87]="x"; mem[88]="y"; mem[89]="z";
lettre = new Array()
for(i=0;i<mem.length;i++){
    lettre [i]=mem[i];
}

$(function(){
                
    $(document).keydown(function(touche) {

            var poeme = $("#animtext").text();
            var press = touche.which || touche.keyCode;
            myFunction(poeme,press);

    });

});
    
function myFunction(phrase, lchiffre) {
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