'use client'
import React, { useState } from "react";
import {motion} from 'framer-motion'



function Ha() {

    
    const [cards] = useState([

        {
            title: 'card1',
            text: 'meh meh meh mehhhhhhh hhhhhh hhhhhhhhh hhhhh hhhhhhh'
        },

        {
            title: 'card2',
            text: 'meh meh meh mehhhhh hhhhhhh hhhhhhhhh hhhhh hhhhhhhh'
        },
        {
            title: 'card3',
            text: 'meh meh meh mehhhh hhhhh hhhhhhhhh hhhh hhhhhh hhhhhh'
        },
    ])
    return (

        <div>

            <section>
                <div className="container">
                    <h1>ብሔራዊ </h1>
                    <div className="cards">
                        {
                            cards.map((card, i)=>(

                                <div key={i} className="card">
                                <h3>{
                                    card.title
                                    }</h3>
                                <p>{
                                    card.text}</p>
                            </div>
                            ))
                        }
                     
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ha


