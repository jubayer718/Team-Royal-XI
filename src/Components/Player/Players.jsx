
import { useEffect } from "react";
import { useState } from "react";
import Player from "./Player";
import PropTypes from "prop-types";
import SelectedPlayer from "../Selected/SelectedPlayer";



const Players = ({ handleIsActive, isActive, handleSelectedPlayer, selectedPlayer,handleDeletePlayer }) => {


  const basketPlayer = [...selectedPlayer]
 

  

  const [player, setPlayer] = useState([]);
  useEffect(() => {
    fetch('player.json')
      .then(res => res.json())
    .then(data=>setPlayer(data))
  }, [])
 
  return (
    <div>
      
      <div className="w-11/12 mx-auto  pb-56 ">
        <div className="flex items-center justify-between">
          {
            isActive.cart ? <h2 className="font-bold text-2xl my-5">Available Players</h2> : <h2 className="font-bold text-2xl my-5">Selected Player({basketPlayer.length }/6)</h2>
          }
          
         
        <div className="flex items-center">
            {/* functionality btn */}
            

            <button className={`${isActive.cart ? "btn btn-warning font-semibold" : "btn font-semibold"}`} onClick={() => handleIsActive("cart")}>AvailAble</button>
            

            <button onClick={() => handleIsActive("selected")} className={`${isActive.cart ? "btn font-semibold " : "btn btn-warning font-semibold"} ` }>Selected:{ basketPlayer.length}</button>
            
        </div>
      </div>
       {/* player container */}
        <div className={`${isActive.cart?"grid grid-cols-1 lg:grid-cols-3 gap-5 m-3":"w-full"}`}>
        
          {isActive.cart ? player.map(pl =>
            <Player key={pl.id} pl={pl}
              handleSelectedPlayer={handleSelectedPlayer}
              isActive={isActive}
              // selectedPlayer={basketPlayer}
            >
              
              </Player>) : basketPlayer.map((basPl,idx)=><SelectedPlayer key={idx}  selectedPlayer={basPl} handleDeletePlayer={handleDeletePlayer}></SelectedPlayer>)}
        
          
        </div>
        {
          isActive.cart ? <button className="btn btn-warning" onClick={() => handleIsActive("selected")}>Show selected Player</button> : <button onClick={() => handleIsActive("cart")} className="btn btn-warning">Add more Player</button>
        }
           
           
      </div>
     
      
      {/* //   basketPlayer.map((basPl,idx)=><SelectedPlayer key={idx}  selectedPlayer={basPl}></SelectedPlayer>) 
      //  */}

      {/* {
        isActive.cart?"": basketPlayer.map((pl,idx)=> <Player key={idx} selectedPlayer={pl} ></Player>)
      } */}
      
      
    </div>
  );
};
Players.propTypes = {
  handleIsActive: PropTypes.func,
  isActive: PropTypes.string,
  handleSelectedPlayer: PropTypes.func,
  selectedPlayer: PropTypes.obj,
  handleDeletePlayer:PropTypes.func
}
export default Players;