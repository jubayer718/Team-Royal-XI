import PropTypes from "prop-types";
// import SelectedPlayer from "../Selected/SelectedPlayer";


const Player = ({ pl,handleSelectedPlayer}) => {
 const {
bowling_type,country,hand,image_url, player_name,
position
,
    price } = pl
  
    
 return(   <div>
      
   
      <div >
          <div className="card  shadow-xl  p-3 ">
  <figure>
    <img className="h-60 rounded-lg"
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className=" mt-4">
            <h2 className="card-title"><i className="fa-solid fa-user"></i>{player_name}</h2>
            

            <div className="flex items-center justify-between my-2">
              <h3 className="font-semibold"><i className="fa-solid fa-flag mr-2"></i>{country}</h3>
              <p>{ position}</p>
            </div>
            <hr className="border-2 rounded-sm" />
            <p className="card-title">Rating</p>
            <div className="flex items-center justify-between my-2">
              <p className="font-semibold text-nowrap">{hand} </p>
              <p className="text-nowrap ml-1">{bowling_type} </p>
            </div>
            


            <div className="flex justify-between items-center ">
              <p className="font-semibold">${price} </p>
      <button onClick={()=>handleSelectedPlayer(pl)} className="btn btn-primary">Choose Player</button>
    </div>
  </div>
        </div>
        
   </div>
   

   {/* <SelectedPlayer selectedPlayer={selectedPlayer}></SelectedPlayer> */}
   
      {/* {`${isActive.status ? "" :selectedPlayer.map((mapPlayer,idx)=> <SelectedPlayer key={idx} selectedPlayer={mapPlayer}></SelectedPlayer>)}`} */}
      
   {/* {
     selectedPlayer.map((mapPlayer,idx)=> <SelectedPlayer key={idx} selectedPlayer={mapPlayer}></SelectedPlayer>)
   } */}

    </div>
  
  );
};

Player.propTypes = {
  pl: PropTypes.object.isRequired,
  handleSelectedPlayer: PropTypes.func,
  selectedPlayer: PropTypes.object,
  isActive:PropTypes.string,
}

export default Player;