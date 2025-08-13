import twave from '../assets/top-wave.svg'

export default function Process(){
    return(
        <section className="relative h-screen">
            <img src={twave} className='w-full absolute top-0 left-0 ring-0'/>
        </section>
    )
}