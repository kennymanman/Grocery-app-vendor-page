import React from 'react'
import mack from "./Video/mack.mp4"




export default function Load() {
    return (
        <div>

<video className="video">

<source  src={mack} type="video/mp4"/>


</video>
            
        </div>
    )
}
