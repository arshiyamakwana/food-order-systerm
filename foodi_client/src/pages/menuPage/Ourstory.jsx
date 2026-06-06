import React from 'react'

const Ourstory = () => {
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 py-27'
    >
        <div className="py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-5">

{/* img */}
<div className="md:w-1/2">
  <img src="/ownwe.png" alt=""style={{height:"570px"}} />
  
</div>

{/* texts */}
<div className="md:w-1/2 px-2 mt-2 space-y-2">
<h2 className="md:text-xl text-xl font-bold md:leading-snug leading-snug">
 <span className="text-red text-center">Our Story</span>
  </h2>
  <p className="text-[#4A4A4A] text-xl">
  The story of India is fastest growing pizza place started back in 2011 when <span style={{color:"red"}}>Arshiya Makawana</span>  opened his very first pizzeria in his hometown <span style={{color:"red"}}>Morbi</span> . Inspired by his own search for delicious pizza options, he started to wonder if there was a better way of doing pizza – and business. The last thing the world needed was another pizzeria, but maybe this one could be different and everyone could get exactly what they wanted, made fresh on demand. It all started sounding pretty great, and soon Sanam was opening the first pizzeria in his hometown Morbi and there was no looking back. As of today, Pizzeria has 600+ outlets across India with the recent one opening in Canada.

  </p>
 
</div>

</div>
<div className="py-20 flex flex-col md:flex-row-reverse items-center justify-between gap-5">

{/* img */}
<div className="md:w-1/3">
<div className="card w-200  bg-base-100 shadow-xl " style={{height:"300px",width:"500px"}}> 
  <div className="card-body "style={{textAlign:'center'}}>
    <h2 className="card-title ml-20" >Pizzeria goes International</h2>
    <p  >Launching soon In</p>
   <div className='inline-block ' >
   <img className="mask mask-circle " src="/australia.png" style={{height:"120px",marginLeft:"150px",marginBottom:"50px"}} />
  
   
   </div>
  
    
  </div>
</div>
  
</div>

{/* texts */}
<div className="md:w-1/2 px-2 mt-2 space-y-2">
<div tabIndex={0} className="collapse collapse-open border  border-t-red bg-base-100"> 
  <div className="collapse-title text-xl font-medium  text-red">
   2001
  </div>
  <div className="collapse-content"> 
    <p className='text-black'> Launched the 1st Outlet in Morbi
                            </p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-open border  border-t-red bg-base-100"> 
  <div className="collapse-title text-xl font-medium  text-red">
    2013
  </div>
  <div className="collapse-content"> 
    <p className='text-black'>Launched the 1st Franchise Outlet
                            </p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-open border border-t-red bg-base-100"> 
  <div className="collapse-title text-xl font-medium text-red">
 2017
  </div>
  <div className="collapse-content"> 
    <p className='text-black'>
                            Crossed 200 Outlets All Over India
                            </p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-open border  border-t-red"> 
  <div className="collapse-title text-xl font-medium  text-red">
   2019
  </div>
  <div className="collapse-content"> 
    <p className='text-black'>cross 300 outlets All Over India</p>
  </div>
</div>
<div tabIndex={0} className="collapse collapse-open border  border-t-red "> 
  <div className="collapse-title text-xl font-medium  text-red">
    2020
  </div>
  <div className="collapse-content"> 
    <p className='text-black'>cross 500 outlets all over india</p>
  </div>
</div>
 
</div>

</div></div>
    
  )
}

export default Ourstory