import Image from "next/image";
import { Lexend_Deca, Big_Shoulders_Display } from 'next/font/google'

const lexend_deca = Lexend_Deca({ subsets: ['latin'], weight: ['400'] })
const big_shoulders_display = Big_Shoulders_Display({ subsets: ['latin'], weight: ['700'] })

const Card = ({logo, carType, desc, color}) => {
    return (
        <div className={`bg-${color} flex-1 flex flex-col justify-between gap-5 py-5 md:py-10 px-10`}>
            <Image src={logo} alt='logo'/>
            <h1 className={`${big_shoulders_display.className} text-transparent_white
                text-3xl md:text-4xl`}>
                {carType}
            </h1>
            <h1 className={`${lexend_deca.className} text-very_light_gray/60 md:pr-10 
                pr-5 text-sm md:text-lg`}>
                {desc}
            </h1>
            <button className={`text-${color} ${lexend_deca.className} bg-transparent_white 
                w-3/4 p-2 md:p-3 rounded-full mt-5 md:mt-16 shadow-lg border-2 hover:border-transparent_white
                hover:bg-transparent_white/0 hover:text-transparent_white`}>
                Learn More
            </button>
        </div>
    )
}

export default Card;