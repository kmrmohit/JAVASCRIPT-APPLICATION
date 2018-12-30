alert("hello back again");
alert("hello lets go");
document.write("hello");
console.log("program completed.");
var message = "Hello!";//variable declaration
alert(message);
var visitorname = prompt("what is your name?");
alert(visitorname);
function randomnum(upper)
{
	return Math.floor(Math.random()*upper)+1;
}
var counter=0;
while(counter<10)
{
	counter++;
	document.write(randomnum(counter)+ ' ');
}
for(counter=0;counter<10;counter++)
{
	document.write('<div>'+counter+'</div>');
}