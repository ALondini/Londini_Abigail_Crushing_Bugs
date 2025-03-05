// variables
let theThumbnails = document.querySelectorAll('#buttonHolder img'),
    gameBoard = document.querySelector('.puzzle-board'),
    pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
    dropZones = document.querySelectorAll('.drop-zone'),
    resetPieces = document.querySelector('.reset-pieces');

// functions
function changeImageSet() { //Bug 2 in this funtcion
    gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
}

function allowDrag(event) {
    console.log('started dragging an image');

    //adds the ID of the element being dragged to the data transfer object
    // as 'draggedEl', so we can ger it later
    event.dataTransfer.setData('draggedEl', this.id);
}

function allowDragOver(event) {
    event.preventDefault();
    console.log('dragged over a drop zone ');
}

function allowDrop(event) { //Bug 1 in this function
    event.preventDefault();

    // gets the dragged element's ID from the data transfer object (using 'draggedEl')
    let droppedElId = event.dataTransfer.getData('draggedEl');

    // get the ACTUAL dragged element, using the ID
    let droppedEl = document.querySelector(`#${droppedElId}`);

    // append the dragged element to the drop zone
    this.appendChild(droppedEl);
}

// event listeners
theThumbnails.forEach(thumdnail => thumdnail.addEventListener('click', changeImageSet));
pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

dropZones.forEach(zone => {
    zone.addEventListener('dragover', allowDragOver);
    zone.addEventListener('drop', allowDrop);
});