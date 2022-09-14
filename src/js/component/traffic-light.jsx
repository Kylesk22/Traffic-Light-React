
import React, { useEffect, useState } from "react";

import './traffic-light.css';




const TrafficLight = (props) => {
    const [lightShadow, setLightShadow] = useState();
    const [lightShadow2, setLightShadow2] = useState();
    const [lightShadow3, setLightShadow3] = useState();
    const [lightShadow4, setLightShadow4] = useState();
    const [purpleOn, setPurpleOn] = useState(false);



    let color = "red";

    let myShadow;
 
    const redShadow = {
        boxShadow: '10px 10px 20px red, -10px 10px 20px red, -10px -10px 20px red, 10px -10px 20px red'

    }
    const yellowShadow = {
        boxShadow: '10px 10px 20px yellow, -10px 10px 20px yellow, -10px -10px 20px yellow, 10px -10px 20px yellow'

    }
    const greenShadow = {
        boxShadow: '10px 10px 20px green, -10px 10px 20px green, -10px -10px 20px green, 10px -10px 20px green'

    }
    const purpleShadow = {
        boxShadow: '10px 10px 20px purple, -10px 10px 20px purple, -10px -10px 20px purple, 10px -10px 20px purple'

    }
    

    function clickHandler(col) {
        (col === "red") ? setLightShadow(redShadow) :
        (col === "yellow") ? setLightShadow2(yellowShadow) :
        (col === "green") ? setLightShadow3(greenShadow) : 
        (col === "purple") ? setLightShadow4(purpleShadow) : ""
    }

    
    function buttonHandler() {
        setLightShadow2();
        setLightShadow();
        setLightShadow4();
        
        setLightShadow3(greenShadow);
            setTimeout(() => {
                setLightShadow3();
                setLightShadow2(yellowShadow);
            }, 1000);
            setTimeout(() => {
                setLightShadow2();
                setLightShadow(redShadow);
            }, 2000);
            setTimeout(() => {
                setLightShadow();
                setLightShadow4(purpleShadow);
            }, 3000);
            setTimeout(() => {
                setLightShadow4();
            }, 4000);

        
      
       
    }

    const AddPurple = () => {
        
        return(
            <div className = "light4" style = {lightShadow4} onClick = {() => {
                setLightShadow();
                setLightShadow2();
                setLightShadow3();
                clickHandler("purple")}}>
            </div>
        )
    }


   
     
    

    return(
        <div>
            <div className = "pole"></div>
            <div className = "container" style = {{height: purpleOn ? "600px" : "460px"}}>
                <div className = "light1" id = "light1" style = {lightShadow} onClick = {() => 
                    {   setLightShadow2();
                        setLightShadow3();
                        setLightShadow4();
                        clickHandler("red")}}>
                </div>
                <div className = "light2" style = {lightShadow2} onClick = {() => {
                    setLightShadow();
                    setLightShadow3();
                    setLightShadow4();
                    clickHandler("yellow")}}>
                </div>
                <div className = "light3" style = {lightShadow3} onClick = {() => {
                    setLightShadow();
                    setLightShadow2();
                    setLightShadow4();
                    clickHandler("green")}}>

                </div>
                {purpleOn ? <AddPurple /> : ""}
                
            </div>
            <button className="btn btn-success" id="button1" onClick = {buttonHandler}>Cycle</button>
            <button className="btn btn-primary" id="button1" onClick = {() => setPurpleOn(true)}>Add Purple</button>
            <button className= "btn btn-warning" id="button1" onClick = {() => setPurpleOn(false)}>Remove Purple</button>
        </div>
    )
}



export default TrafficLight;