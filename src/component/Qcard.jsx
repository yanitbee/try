'use client'
import React, { useState } from "react";
import {motion} from 'framer-motion'
import './Qcard.css'


function Qcard() {

    const db = [
        {
          name: 'ብሔራዊ',
          q1:'gjgwvdgh',
          q2:'wertyuikj',
          image:'/image/photo_2023-10-08_03-57-33.jpg'
          
        },
       {
          name:'መርካቶ',
          q1:'abcdefg',
          q2:'wertyuikj',
          image:'/image/photo_2023-10-08_03-57-33.jpg'
          
        },
        {
            name:'ፒያሳ',
            q1:'hijklmnop',
            q2:'wertyuikj',
            image:'/image/photo_2023-10-08_03-57-33.jpg'
        },
        {
            name:'4ኪሎ',
            q1:'qrstuv',
            q2:'wertyuikj',
            image:'/image/photo_2023-10-08_03-57-33.jpg'
            
          }

      ]

      let index = 0;
      while(db[index].name!='4ኪሎ') {
         index++
      }

    const [cards] = useState([

        {
            id:'first',
            title: 'card1',
            q: db[index].q1,
        },

        {
            id:'second',
            title: 'card2',
            q: db[index].q2,
        },
        {
            id:'third',
            title: 'card3',
            q: db[index].image,
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

                                <div key={i} id={card.id} className="card">
                                <h3>{
                                    card.title
                                    }</h3>
                                <p>{
                                    card.q}</p>
                            </div>
                            ))
                        }
                     
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Qcard


