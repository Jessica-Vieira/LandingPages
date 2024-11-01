import mainDog from '../assets/mainDog.png'

export function First() {
  return (
    <div className='w-full flex flex-1 md:flex-row flex-col-reverse'>
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <div>
          <h1 className='font-sansita text-5xl md:text-7xl flex flex-col'><span>Pets</span> <span>Grooming</span></h1>
            <p className='mt-4 text-lg md:text-3xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta!</p>
            <div className='w-full mt-4'>
              <button className='w-full text-lg md:text-3xl bg-azulClaro text-black py-3 rounded-lg shadow-lg hover:bg-cyan-600'>boo your appoiment</button>
            </div>
        </div>
          
      </div>

      <div className='flex-1 flex overflow-hidden w-full h-full'>
        <div className='flex justify-center items-center w-full h-full'>
          <img className='h-full' src={mainDog} alt="" />
        </div>
      </div>
    </div>
  )
}
