import React from 'react'
import Card from './Card'
import { user1, user2, user3 } from '../assets'

const Testimonial = () => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem] px-[2rem] md:px-[3rem] lg:px-[6rem] mt-[7rem] lg:mt-[12rem]'>
      <Card text='"Great session! Dani was super helpful. She shared some practical advice on how can lorem ip we go about refining our service offerings."' image={user1} name="Hadid Khan" occupation="UIUX Designer" />
      <Card text={`"It's is both attractive and highly adaptable. It's exactly what I've been looking forefinitely wo lorem ipsum dolorth the investment."`} image={user2} name={`Wade Warren`} occupation={`Web Designer`} />
      <Card text={`"I am really satisfied with it. I'm good to go. It really saves me time and effort. It's is exactly what our business has been lacking. "`} image={user3} name={`Jenny Wilson`} occupation={`Trust Administrator`} />
    </div>
  )
}

export default Testimonial