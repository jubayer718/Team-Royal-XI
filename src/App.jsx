import { useState } from "react"
import Footer from "./Components/Footer/Footer"
import Header from "./Components/header/Header"
import Players from "./Components/Player/Players"

import Subscribe from "./Components/Subscribe"

 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// import Player from "./Components/Player/Player"



function App() {
  

  const [price, setPrice] = useState((0))


  
const handleSetPr = (givenPrice) => {
    toast.success("Coin Add Successful", {
        position: "top-right",
        autoClose: 3000,
        theme:"colored"
      })
    setPrice(price+givenPrice)
   }

 
  
 
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",

  })

  

  const [selectedPlayer, setSelectedPlayer] = useState([])
  const handleDeletePlayer = (id) => {
    const remainingPlayer = selectedPlayer.filter(player => player.id !== id)
    setSelectedPlayer(remainingPlayer);
  }




  const handleSelectedPlayer = (pl) => {
  const updatedPrice = (price - pl.price)
    const handleCostPrice = (value) => {
       const updatedPrice = (price - value)
      
       if (updatedPrice < 0) {
         return toast.warn("Add more coin", {
           position: "top-center",
           autoClose: 3000,
           theme:"colored"
         })
       } else {
         
         setPrice(updatedPrice);
       }
      

  }
    const selected = [...selectedPlayer]
    
    const isExist = selectedPlayer.find(slPlayer => slPlayer.id === pl.id)
    if (isExist) {

      return toast.warn("already exist", {
        position: "top-center",
        autoClose: 3000,
        theme:"colored"
      });
    }
     
    else if(selected.length>5) {
        return toast.warn("6 Player Already Added", {
          position: "top-center",
          autoClose: 3000,
          theme:"colored"
        });
    }
      else  if (price <= 0) {
      
      return toast.warn("not enough money", {
        position: "top-center",
        autoClose: 3000,
        theme:"colored"
      });
    }
    
    else if(updatedPrice<0) {
     return  toast.warn("Add more coin", {
           position: "top-center",
           autoClose: 3000,
           theme:"colored"
         })
      
    } else {
      toast.success("Player successfully added", {
        position: "top-right",
        autoClose: 3000,
        theme:"colored"
      })
      const newSelectedPlayer = [...selectedPlayer, pl]
      setSelectedPlayer(newSelectedPlayer)
      
      handleCostPrice(pl.price)
    }
   
  }

  const handleIsActive = (status) => {
    
    if (status === "cart") {
       
      setIsActive({
        cart: true,
        status: "Available",
       
      })
    } else {
      setIsActive({
        cart: false,
        status:"Selected"
      })
    }
    
    
  }

 
   
 
  return (
    <>
      <div className=" ">
        <Header handleSetPr={handleSetPr} price={price}></Header>
        <Players handleSelectedPlayer={handleSelectedPlayer}
          handleIsActive={handleIsActive}
          isActive={isActive}
          selectedPlayer={selectedPlayer}
          price={price}
          handleDeletePlayer={handleDeletePlayer}
        ></Players>
    <Subscribe></Subscribe>
        <Footer></Footer>

        <ToastContainer/>
          
    
      </div>
   
      
       
     
    </>
  )
}

export default App
