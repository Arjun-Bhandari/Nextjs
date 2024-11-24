import React from 'react'
import Navbar  from "../../components/Navbar"
import fs from "fs/promises"

export default function About(props) {

let a = fs.readFile(".gitignore")
a.then(e=>{console.log(e.toString())})
    console.log("Arjun Bhandari")

    return (
        <>        <Navbar/>
     <div> <h1 className='text-xl text-center'>I am about</h1>
     </div>
     </>

    )
}
