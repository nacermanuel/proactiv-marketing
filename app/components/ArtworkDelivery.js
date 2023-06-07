

const ArtworkDelivery = () => {

  return (
    <div className="flex flex-col justify-center items-center  h-full w-[100vw]">
      <p className="fontTitle">Artworks and Delivery Explained</p>

      <video controls className="w-[80vw] rounded-md" poster={"https://res.cloudinary.com/dbhtt5ozr/image/upload/v1686088520/imagenposter_ut847d.png"}>
        <source src={'https://res.cloudinary.com/dbhtt5ozr/video/upload/v1686066069/VIDEO_3_FINAL_v3_wau6e4.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="h-[20px]"></div>
      
    </div>
  )
}

export default ArtworkDelivery