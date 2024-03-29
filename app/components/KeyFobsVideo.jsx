import React from 'react'

const KeyFobsVideo = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-[100vw] md:w-[55%]">
      <div className="flex flex-col mx-5 my-4 pb-2 items-center bg-white rounded-lg shadow-md relative ">

      <p className="fontTitle" style={{fontWeight:'700'}}>Before you go have a look @ these to put on your clients keys</p>
      <p className="fontSubTitle text-center" style={{fontWeight: '700', color: '#4a6bb6'}}>50% discount today only</p>
      {/* {How would you like to make sure all your counts come back?} */}
      <video controls className="w-[80vw] rounded-md md:w-[45%]" poster={"https://res.cloudinary.com/dbhtt5ozr/image/upload/v1687214138/previewvideo4_tqzwyp.png"}>
        <source src={'https://res.cloudinary.com/dbhtt5ozr/video/upload/v1687204903/keyfobs_j4in3j.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>        
    </div>
  )
}

export default KeyFobsVideo