function clicked() {
    document.getElementById('display').innerHTML = 'Douglas firs! These make Washington even more beautiful!';
}
 
document.getElementById('btn').addEventListener('click', clicked);

function submit() {
    let favorite = document.getElementById('favorite_tree').value;
    let name = document.getElementById('what_name').value;
 
    let html = 'That is awesome! I love the <b>' + favorite + ' too! Thank you for sharing </b> ' + name;
 
    document.getElementById('result').innerHTML = html;
}
 
document.getElementById('respond').addEventListener('click', submit);

let likeTrees = confirm('Do you love trees?');

while(!likeTrees) {
likeTrees = confirm('Do you love trees?');
}

let howMany = parseInt(prompt('How many trees would you like to see? 1-3'));

   
