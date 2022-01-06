function clicked() {
    document.getElementById('display').innerHTML = 'Douglas firs! These make Washington even more beautiful!';
}
 
document.getElementById('btn').addEventListener('click', clicked);

function submit() {
    let favorite = document.getElementById('favorite_tree').value;
    let name = document.getElementById('why').value;
 
    let html = 'That is awesome! I love the <b>' + favorite + ' too! Thank you for sharing </b> ' + name;
 
    document.getElementById('result').innerHTML = html;
}
 
document.getElementById('respond').addEventListener('click', submit);

let words = prompt('Do you love trees?');

if (words == 'Yes' || 'yes' || 'Yes!' || 'yes!' || 'YES' || 'YES!' || 'heck ya!'){
    confirm('Yay me too! Come on in!');
}
else { 
    confirm('Uh oh! You must love trees to enter!')
}



