import Section1 from '@/Components/Site/MainPage/Section1/Section1'
import Section2 from '@/Components/Site/MainPage/Section2/Section2'
import Section3 from '@/Components/Site/MainPage/Section3/Section3'
import Header from '@/Components/Site/OtherComponents/Header/Header'
import React from 'react'
import "./icons.css"
import RoadMap from '@/Components/Site/MainPage/RoadMap/RoadMap'
export default function page() {
  return (
    <div>
      <Header/>
      <main>
        <Section1/>
       <Section2/>
       <Section3/>
       <RoadMap/>
      </main>
    </div>
  )
}
