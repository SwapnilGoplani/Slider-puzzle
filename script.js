const positions = {
    pos1: ['pos2', 'pos4'],
    pos2: ['pos1', 'pos5', 'pos3'],
    pos3: ['pos2', 'pos6'],
    pos4: ['pos1', 'pos5', 'pos7'],
    pos5: ['pos2', 'pos4', 'pos6', 'pos8'],
    pos6: ['pos3', 'pos5', 'pos9'],
    pos7: ['pos4', 'pos8'],
    pos8: ['pos7', 'pos5', 'pos9'],
    pos9: ['pos8', 'pos6']
  };
  
  const tiles = document.querySelectorAll('.tile');
  
  function clickAPiece(event, tileArray) {
    const clickedClasses = [...event.target.classList]; 
    const allTiles = [...tiles];
    const empty = allTiles.find((tile) => tile.classList.contains('empty')).classList[1]; //gets the position of empty tile
    console.log(empty);
    const clickedTile = clickedClasses[1]; //finds the position of tile clicked
    console.log(clickedTile);
    const possiblePos = positions[clickedTile]; //finds the possible moves for tile clicked
    const move = possiblePos[possiblePos.indexOf(empty)]; //checks if empty tile is within possible moves, will be undefined if not possible
    console.log(move);
    if (move) { //if move isnt undefined, go into this loop
      (document.getElementsByClassName(move)[0].classList.remove('empty')); //removes empty from classname of tile which is empty
      (document.getElementsByClassName(clickedTile)[0].classList.add('empty')); //adds empty to classname of tile which will be empty
      (document.getElementsByClassName(move)[0].innerText = allTiles.find((tile) => tile.classList.contains(clickedTile)).innerText); //these 2 lines change inner text
      (document.getElementsByClassName(clickedTile)[0].innerText = '');
      // eslint-disable-next-line prefer-destructuring
    }//problem is that since its changing the inner text based on positions, once positions get scrambled the inner text gets fucked up too
  }//SOLVED
  
  async function windowActions() {
    //console.log(tiles);
    const tileArray = [...tiles];
    console.log('tiles', tileArray);

    tileArray.forEach((tile) => tile.addEventListener('click', (event) => { clickAPiece(event, tileArray); }));
  }
  
  window.onload = windowActions; 
  //EVERYTHING WORKING AS INTENDED. SHOW ALEX.