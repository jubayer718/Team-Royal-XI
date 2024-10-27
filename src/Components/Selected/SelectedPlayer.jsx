import PropTypes from "prop-types";


const SelectedPlayer = ({ selectedPlayer,handleDeletePlayer }) => {
  console.log(selectedPlayer)
const {player_name,hand,
image_url}=selectedPlayer
  return (
    <div >
     
      
      <div className=" flex justify-between items-center gap-2 p-2 rounded-lg bg-base-300 m-2">
        <div className="flex items-center gap-2">
          <img className="w-20 h-28 object-cover" src={image_url} alt="" />
          <div><p className="text-nowrap">{player_name}</p>
          <p className="text-nowrap">{ hand}</p></div>
        </div>
       <div> <button onClick={()=>handleDeletePlayer(selectedPlayer.id)}><img className="w-16 h-16" src="https://img.icons8.com/?size=160&id=102350&format=png" alt="" /></button></div>
      </div>
    </div>
  );
};
SelectedPlayer.propTypes = {
  selectedPlayer: PropTypes.object,
  handleDeletePlayer:PropTypes.func
}
export default SelectedPlayer;