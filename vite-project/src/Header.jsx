import './App.css'
import React,{useState,useEffect} from 'react';

function Header(){
    return (
        <>
    <div>
        <section>
            <img src="/img/admatel.jpg" alt="" onClick={()=>{window.location.href = "dashboard"}} 
            style={{cursor:"pointer", width:"350px", height:"auto"}} />
            


        </section>
    </div>
        </>
    )
}
export default Header;