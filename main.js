// Select The Start GAme Button
document.querySelector('.control-buttons span').onclick = function (){

    // Prompt Window To Ask For Name
    let yourName = prompt("Whats Your Name?")

    if (yourName == null || yourName == ""){

        // Set Name To Unknown
        document.querySelector(".name span").innerHTML = "Unknown";

        // Name Is Not Empty
    }else{

        // Set Name To Your NAme
        document.querySelector(".name span").innerHTML = yourName;
    }

    // Remove Splash Screen
    document.querySelector (".control-buttons").remove();
};

// Effect Duration
let duration = 1000;

// Select Blocks Container
let blocksContainer = document.querySelector(".memory-game-blocks");

//Create Array From Game Blocks
let blocks = Array.from(blocksContainer.children);

// Create RAnge Of Keys
//let orderRange = [...Array(blocks.length).keys()];

let orderRange = Array.from(Array(blocks.length).keys());

shuffle(orderRange);


// Add Order CSS Property To Game Blocks
blocks.forEach((block, index) => {

// Add Order CSS Property
block.style.order = orderRange[index];

    //Add Click Event
    block.addEventListener('click', function (){

        // Trigger The Flip Block Function
        flipBlock(block);

    });

});

// Flip Block Function
function flipBlock(selectedBlock){

    // Add Class is Flipped
    selectedBlock.classList.add('is-flipped');

    // Collect All Flipped Cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    // If There is Two Selected Blocks
    if (allFlippedBlocks.length === 2){

        console.log('Feras');

    // Stop Clicking Functiom
    stopClicking();

    //Check MAtched Block Function
    checkMatchedBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }

}

// Stop Clicking Function 
function stopClicking() {

    // Add Class No Clicking On Main Container
    blocksContainer.classList.add('no-clicking');

    //
    setTimeout(() => {

    //Remove Class No Clicking After The Duration
    blocksContainer.classList.remove('no-clicking');

    }, duration);
}

// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock){

    let triesElement = document.querySelector('.tries span');

    if (firstBlock.dataset.technology === secondBlock.dataset.technology){

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('has-match');
        secondBlock.classList.add('has-match');

        document.getElementById('success').onplay();
    } else{

        //
        triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

        setTimeout(() => {
        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        },duration);
        document.getElementById('fail').onplay();
    }
}

// Shuffle Function
function shuffle(array){

    // Settigs Vars
    let current = array.length,

        temp,

        rendom;

        while (current > 0){

            // Get Random Number
            random = Math.floor( Math.random () * current);

            // Decrease  Length By One
            current--;

            // [1] Save Current Element in Stash
            temp=array[current];

            // [2] Current Element = Random Element
            array[current]= array[random];

            // [3] Random Element = Get Element From Strash
            array[random] = temp;

        }

        return array;
}
