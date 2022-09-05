import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));


const Tile = (props) => (
  <div className='tile' onClick={() => props.onTileClick(props.tile)}>{props.tile}</div>
)



const GameBoard = () => {

  const [tileStatus, setTimeStatus] = useState('available')
  const onTileClick = (tileNo, status) => {
    
  }
  
  const [tiles, setTiles] = useState(100)
  return (
  <div className='GameBoard'>
    {([...Array(tiles).keys()]).map(tile => (
      <Tile key={tile}
        tile={Math.floor(tile/2)}
        onTileClick={onTileClick}
        tileStatus={tileStatus}
      />
    ))}
  </div>
  )
}


root.render(
  <GameBoard />
);


const colors = {
  available: 'lightgrey',
  used: 'green',
  candidate: 'aqua'
}