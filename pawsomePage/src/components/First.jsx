import imagem from '../assets/mainDog.png'

export function First() {
  return (
    <div className='w-full h-[calc(100vh-4rem)] flex justify-between items-center'>
        <div className=' flex flex-col justify-center w-1/2 h-full p-8'>
            <div>
                <h1 className='text-7xl font-bold mb-4 flex flex-col font-sansita'><span>Pets</span> <span>Grooming</span></h1>
                <p className='mb-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <div className="mt-4">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none">
                        Call to Action
                    </button>
                </div>
            </div>
            
        </div>
      <div className='w-1/2 h-full'>
        <div className='flex items-center justify-center h-full w-full'>
            <img className='h-full w-full' src={imagem} alt="" />
        </div>
      </div>
    </div>
  )
}
