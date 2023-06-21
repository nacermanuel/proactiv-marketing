import React from 'react'

const KeyFobsTestimonials = () => {
  return (

    <div className="flex flex-col items-center bg-white rounded-lg shadow-md w-[90%] md:w-[52%]">

        <div className="flex flex-col mx-5 my-4 pb-2 items-center relative h-[90vh] md:w-[60%]">

            <p className="fontTitle" style={{fontWeight:'700'}}>Keyfobs Testimonials</p>

            <div className="carousel-wrapper w-[90%] h-auto ">
                <span id="item-1"></span>
                {/* <span id="item-2"></span>
                <span id="item-3"></span>
                <span id="item-4"></span>
                <span id="item-5"></span> */}

                {/* ITEM OPEN */}
                <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-1 shadow-lg bg-[#d6d6d665]">
                    {/* <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbhtt5ozr/image/upload/v1687151170/The_Salon_SL_11_-02_p8vdyu.png" alt="" /> */}
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className='fontTitle' style={{color:'#4a6bb6'}}>Sandra Wright</p>
                        <p className="fontGeneral">
                            &quot;
                            Don`t go anywhere else! My family, friends and clients have had them on their key rings for a few years now, and they are still great condition. Fobs I had from another became discoloured & pealed.
                            My husband also bought some. He is a car mechanic and is able to write MOT and service due dates on them. It is kept on the car/house keys and therefore is to hand when people want recommendations for our businesses. We are delighted

                            &quot;
                        </p>
                    </div>

                    <a className="arrow arrow-prev" href="#item-4"></a>
                    <a className="arrow arrow-next" href="#item-2"></a>
                </div>
                {/* ITEM CLOSE */}

                
                {/* ITEM OPEN */}
                {/* <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-2 shadow-lg bg-[#d6d6d665]">
                    <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbhtt5ozr/image/upload/v1687151480/BENTLEYS_Mesa_de_trabajo_1_wzvoxb.png" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2 mt-2">
                        <p className="fontGeneral">
                            &quot;
                            Our customers always comment on how good the appointment cards look. They are excellent value for money. We have saved lots on printing costs since we introduced them.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-1"></a>
                    <a className="arrow arrow-next" href="#item-3"></a>
                </div> */}
                {/* ITEM CLOSE */}

                {/* ITEM OPEN */}
                {/* <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-3 shadow-lg bg-[#d6d6d665]">
                    <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbhtt5ozr/image/upload/v1687152031/scco-1_Mesa_de_trabajo_1_copia_jcyesi.png" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontGeneral">
                            &quot;
                            People are bringing their cards back. Our issue with customers forgetting their appointments is now a thing of the past.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-2"></a>
                    <a className="arrow arrow-next" href="#item-4"></a>
                </div> */}
                {/* ITEM CLOSE */}


                {/* ITEM OPEN */}
                {/* <div className="flex flex-col justify-center h-[70vh] items-center carousel-item rounded-lg item-4 shadow-lg bg-[#d6d6d665]">
                    <img className="rounded-lg" style={{height:'5rem' , marginBottom: '10px'}} src="https://res.cloudinary.com/dbhtt5ozr/image/upload/v1687152301/Sinsssaaaa_t%C3%ADtulo-1-03_j4n92h.png" alt="" />
                    <div className="flex flex-col justify-between items-center gap-2">
                        <p className="fontGeneral">
                            &quot;
                            We are finding customers are now bringing their cards in so they are working very well for us.
                            &quot;
                        </p>
                    </div>
                    <a className="arrow arrow-prev" href="#item-3"></a>
                    <a className="arrow arrow-next" href="#item-1"></a>
                </div> */}
                {/* ITEM CLOSE */}



            </div>


        </div>

    </div>


  )
}

export default KeyFobsTestimonials