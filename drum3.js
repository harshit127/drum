var a = '';
a = window.prompt("ENTER YOUR NAME");
if(a === null || a === '')
{
window.alert("WELCOME  "+a);
document.querySelector("marquee").innerHTML = "Please enter your name";
}
else if(a ==='Asfa127@')
{
    document.querySelector("marquee").innerHTML = "ao chale chae pr web bad me dekhna";
}
else if (a === 'rohit')
{
    document.querySelector("marquee").innerHTML = "aur beta";
}
else
{
    var b = a.toUpperCase();
    window.alert("WELCOME  "+b);
    document.querySelector("marquee").innerHTML = "HII "+b;
}
var n = document.querySelectorAll(".con").length;
for (var i = 0; i<n; i++)
{
    document.querySelectorAll(".con")[i].addEventListener("click",function(){
        var ex = this.innerHTML;
        switch(ex)
        {
            case 'J':
                var audio = new Audio("song4.m4a");
                audio.play();
                break;
            case 'A':
                var audio = new Audio("song2.m4a");
                audio.play();
                break;
            case 'I':
                var audio = new Audio("song1.m4a");
                audio.play();
                break;   
            case 'S':
                var audio = new Audio("song3.m4a");
                audio.play();
                break;  
            default:
                console.log('ERROR 404');   
                break;    

        }
    });
}
