

document.addEventListener('DOMContentLoaded', function(event) {

    $('.ui.checkbox').checkbox();
    $('.ui.dropdown').dropdown();
});


function generate() {

    var element = document.getElementById('output-ipsum');

    var numparagraphs = document.getElementById("numparagraphs").value;

    if(document.getElementById("calvinradio").checked){

        element.innerHTML = generateCalvinText(numparagraphs);
        return;
    }


    if(document.getElementById("hobbesradio").checked){

        element.innerHTML = generateHobbesText(numparagraphs);
        return;
    }


    if(document.getElementById("spiffradio").checked){

        element.innerHTML = generatespiffText();
        return;
    }


    if(document.getElementById("suseyradio").checked){

        element.innerHTML = generatesuseyText();
        return;
    }


    
}


function generateCalvinText(numparagraphs) {

    var quotes = "";

    for(let i = 0; i < numparagraphs ;i++ )    {

        quotes += "<p>";    
        
        for(let j = 0; j < 7 ;j++ ){

            var randomindex = Math.floor(Math.random() * calvinQuotes.length);

            quotes += calvinQuotes[randomindex];  
            quotes += "  ";

        }  
        
        quotes += "</p>";
    }
    
    return quotes;

}

function generateHobbesText(numparagraphs) {

    var quotes = "";

    for(let i = 0; i < numparagraphs ;i++ )    {

        quotes += "<p>";    
        
        for(let j = 0; j < 7 ;j++ ){

            var randomindex = Math.floor(Math.random() * hobbesQuotes.length);

            quotes += hobbesQuotes[randomindex];  
            quotes += "  ";

        }  
        
        quotes += "</p>";
    }
    
    return quotes;

}

