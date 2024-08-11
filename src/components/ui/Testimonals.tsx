import React from 'react'
import MaxwidthWrapper from './MaxwidthWrapper'
import { InfiniteMovingCardsDemo } from './Cards';


const Testimonals = () => {
  return (
    <div>
        <section>
            <h2 className="max-w-7xl mb-1 pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                See What our customers Have Say about us                 
            </h2>
            <div className='-mt-55'><InfiniteMovingCardsDemo/></div>
            


        </section>
    </div>
  )
}

export default Testimonals