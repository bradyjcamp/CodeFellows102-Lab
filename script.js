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

let howMany = parseInt(prompt('How many palm trees would you like to see? 1-3'));
console.log(typeof howMany);
let treePicture = document.getElementById('palm');
 console.log(treePicture);
 while(howMany > 1) {
    //     document.getElementById('multipleTrees').appendChild(treePicture);
    //    console.log(document.getElementById('multipleTrees')) 
    let multiplyTrees = document.createElement('img');
    multiplyTrees.src = "palmtree.jpg";
    multiplyTrees.height = "400"
    multiplyTrees.width = "400"
    document.getElementById('multipleTrees').appendChild(multiplyTrees);
     howMany--;
        console.log(howMany);
    }

// break ends cycle of loop

