import React from 'react'
import {cocktailLists, mockTailLists} from "../constants/index.js";
import {useGSAP} from "@gsap/react";
import gsap from  "gsap"


export const Cocktails = () => {

    useGSAP(()=>{
        const parallaxTimeline=gsap.timeline({
            scrollTrigger:{
                trigger:'#cocktails',
                start:'top 30%',
                end:'bottom 80%',
                scrub:true
            }
        });
        parallaxTimeline.from('#c-left-leaf',{
            x:-100,y:100
            }
        ).from('#c-right-leaf',{x:100,y:100})

    });
    return (
        <section id="cocktails" className="noisy p-10">
            <img src='/images/cocktail-left-leaf.png'
                 alt='left-leaf' className='left-leaf'
                 id="c-left-leaf"/>
            <img src='/images/cocktail-right-leaf.png'
                 alt='right-leaf' className='right-leaf'
                 id="c-right-leaf"/>

            <div className="list">
            <div className="popular">
            <h2>Most Popular Cocktails:</h2>
                <ul>
                    {cocktailLists.map((drink)=>(
                        <li key={drink.id}>
                            <div className="md:me-28">
                                <h3>{drink.name}</h3>
                                <p>{drink.country}</p>
                            </div>
                            <span>-{drink.price}</span>

                        </li>
                    ))}
                </ul>
            </div>
                <div className="loved">
                    <h2>Most Loved Cocktails:</h2>
                    <ul>
                        {mockTailLists.map((drink)=>(
                            <li key={drink.id}>
                                <div className="md:me-28">
                                    <h3>{drink.name}</h3>
                                    <p>{drink.country}</p>
                                </div>
                                <span>-{drink.price}</span>

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
