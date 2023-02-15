import Image from 'next/image'
import Slideshow from 'components/Slideshow'
import {images} from 'gallery/images'





const page = () => {
 
  return (
    <div className='pt-60 pb-56'>
        <div className='grid lg:grid-cols-2 grid-cols-1'>
      {images.map((p,index)=>{
        return(
            <div key={index}>
            <h1 className='text-center font-bold pt-3'>{p.title}</h1>
            <Slideshow photos={p.photos}/>
            </div>
        )
        })}
        </div>
        
        </div>
);
};

export default page;
