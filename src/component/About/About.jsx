import React from 'react'
import * as Images from '../Images/index'
function About() {
  return (

    <>
    
    <section className='Header h-[300px] w-[100%]' style={{backgroundImage: `url(${Images.Slider05})`, backgroundPosition: '20% 50%', }}>
      <h2 className='text-[45px] text-center translate-y-32 font-[600]' style={{color:Images.myLightpurple}}>About</h2>
    </section>
    <section className='sec1 mt-24'>
      <div className='sec1Con flex mx-auto w-[1280px]  '>
        <div className="sec1DecCon w-[65%] px-10 m-5 ">
          <h3 className='text-[25px] font-[600]' style={{color:Images.myDarkpurple}}>Our Story</h3>
          <p className='text-[.8rem] mt-1 ' style={{color:Images.myLightpurple}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quis hic eos. Asperiores iure doloribus nihil quibusdam exercitationem vero, aperiam mollitia necessitatibus, deserunt impedit modi assumenda totam blanditiis repellendus distinctio ullam. Quas non possimus saepe aliquid dolorem voluptatem dolorum nemo earum accusamus quidem suscipit aperiam facere dolores, consequatur sit omnis atque quae eum odio! Blanditiis cumque doloremque fugiat inventore.</p>
        
          <p className='text-[.8rem] mt-3' style={{color:Images.myLightpurple}}> Cum amet incidunt quisquam, hic voluptate sed nobis perspiciatis nam. Molestias, earum possimus reiciendis nostrum repudiandae iste tenetur minus nesciunt ducimus suscipit omnis perferendis fuga facilis distinctio. Ex delectus nobis tenetur inventore voluptas iste? Veritatis voluptas provident labore id commodi nam, ad molestias maxime! Suscipit culpa rem itaque obcaecati perspiciatis distinctio eos, ipsa beatae deserunt, expedita enim illo temporibus eaque iste odit a quam amet mollitia repellat voluptas incidunt accusamus porro animi earum. </p>
          <p className='text-[.8rem] mt-3' style={{color:Images.myLightpurple}}> Inventore, odio dicta magnam deleniti quasi dolor obcaecati, similique quos libero aut ullam unde perspiciatis doloribus rem nobis? </p>
        </div>
        <div className='sec1ImgCon  w-[35%] m-5 overflow-hidden '>
          <img className='sec1Image ' src={Images.jeans} alt="" />
        </div>
      </div>
    </section>
    <section className='sec1 mt-24'>
      <div className='sec1Con flex mx-auto w-[1280px]  '>
        <div className='sec1ImgCon  w-[35%] m-5 overflow-hidden '>
          <img className='sec1Image ' src={Images.about} alt="" />
        </div>
        <div className="sec1DecCon w-[65%] px-10 m-5 ">
          <h3 className='text-[25px] font-[600]' style={{color:Images.myDarkpurple}}>Our Story</h3>
          <p className='text-[.8rem] mt-1 ' style={{color:Images.myLightpurple}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quis hic eos. Asperiores iure doloribus nihil quibusdam exercitationem vero, aperiam mollitia necessitatibus, deserunt impedit modi assumenda totam blanditiis repellendus distinctio ullam. Quas non possimus saepe aliquid dolorem voluptatem dolorum nemo earum accusamus quidem suscipit aperiam facere dolores, consequatur sit omnis atque quae eum odio! Blanditiis cumque doloremque fugiat inventore.</p>
        
          <p className='text-[.8rem] mt-3' style={{color:Images.myLightpurple}}> Cum amet incidunt quisquam, hic voluptate sed nobis perspiciatis nam. Molestias, earum possimus reiciendis nostrum repudiandae iste tenetur minus nesciunt ducimus suscipit omnis perferendis fuga facilis distinctio. Ex delectus nobis tenetur inventore voluptas iste? Veritatis voluptas provident labore id commodi nam, ad molestias maxime! Suscipit culpa rem itaque obcaecati perspiciatis distinctio eos, ipsa beatae deserunt, expedita enim illo temporibus eaque iste odit a quam amet mollitia repellat voluptas incidunt accusamus porro animi earum. </p>
          <p className='text-[.8rem] mt-3' style={{color:Images.myLightpurple}}> Inventore, odio dicta magnam deleniti quasi dolor obcaecati, similique quos libero aut ullam unde perspiciatis doloribus rem nobis? </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About