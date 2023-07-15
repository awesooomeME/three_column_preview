import Image from 'next/image'
import Card from '../components/card'

import sedan from '../../public/icon-sedans.svg'
import suv from '../../public/icon-suvs.svg'
import luxury from '../../public/icon-luxury.svg'

export default function Home() {
  return (
    <main className='w-screen min-h-screen flex justify-center items-center py-10'>
      <div className='w-[90%] h-[90%] md:w-3/5 md:h-2/4 rounded-xl overflow-hidden flex md:flex-row flex-col'>
        <Card logo={sedan} color='bright_orange' desc='Choose a sedan for its affordability and 
        excellent fuel economy. Ideal for cruising in the city or on your next road trip.' carType='SEDANS'/>
        <Card logo={suv} color='dark_cyan' desc='Take an SUV for its spacious interior, power, and 
        versatility. Perfect for your next family vacation and off-road adventures.' carType='SUVS'/>
        <Card logo={luxury} color='very_dark_cyan' desc='Cruise in the best car brands without the 
        bloated prices. Enjoy the enhance comfort of a luxury rental and arrive in style.' carType='LUXURY'/>
      </div>
    </main>
  )
}
