function myFunction() {
    input = document.getElementById("Search");
    filter = input.value.toUpperCase();
    var length = document.getElementsByClassName('middle-text').length;

    for (i=0; i<length; i++){
if(document.getElementsByClassName('middle-text')[i].innerHTML.toUpperCase().indexOf(filter) > -1) {     
    document.getElementsByClassName("col")[i].style.display = "block";
            }
        else{
        	document.getElementsByClassName("col")[i].style.display = "none";
        } 
    }
}