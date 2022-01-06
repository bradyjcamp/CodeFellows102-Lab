function clicked() {
    document.getElementById('display').innerHTML = 'Me too! These make Washington even more beautiful!';
}
 
document.getElementById('btn').addEventListener('click', clicked);

function say_hi() {
    var favorite = document.getElementById('favorite_tree').value;
    var lname = document.getElementById('why').value;
 
    var html = 'That is awesome! I love the <b>' + favorite + ' too! Thank you for sharing </b> ' + lname;
 
    document.getElementById('result').innerHTML = html;
}
 
document.getElementById('respond').addEventListener('click', say_hi);

let age = 26;
console.log(age);
prompt('what is your age?');

window.confirm('You must love trees to enter this site');