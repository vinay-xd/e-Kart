import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { Link } from 'react-router-dom';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import * as Images from '../Images/index'
import { myblack, mywhite, mygrey, myred, myyellow, myorange, myLightpurple, myLightgreen, myDarkgreen,myDarkpurple } from '../Images/index';


function Homepage() {

  const slider = [
    { id: 1, src: Images.Slider09, heading: "Unleash Your Style: Limited-Time Offer Inside!",
    para:"Step into style with our exclusive clothing offers. Discover trendy pieces at unbeatable prices. Don't miss out - shop now!"},
    { id: 2, src: Images.Slider06, heading: "Dress to Impress: Exclusive Clothing Deals Await!",
    para:"Step into style with our exclusive clothing offers. Discover trendy pieces at unbeatable prices. Don't miss out - shop now!"},
    { id: 3, src: Images.Slider08, heading: "Fashion Frenzy: Unbeatable Deals on Trendy Styles!",
    para:"Step into style with our exclusive clothing offers. Discover trendy pieces at unbeatable prices. Don't miss out - shop now!"}
  ]
  

  // .............................slider 
  {/*data.length is equal to 6(no. of object in array) and number is the index value of array which is 1 less then no. of object */ }
  const [number, setNumber] = useState(0)

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
      handelnext()
    }, 5000)
    return () => clearInterval(interval)
  }, [number])
  // console.log(data.length);
  const handelnext = () => {
    if (number === slider.length - 1) {
      setNumber(0)
    }
    else {
      setNumber(number + 1)
    }
  }
  const handelprev = () => {
    if (number === 0) {
      setNumber(slider.length - 1)
    }
    else {
      setNumber(number - 1)
    }
  }

  const data = [
    {
      id: 1,
      imgUrl: Images.blackShirt01,
      title: "Product1",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 2,
      imgUrl: Images.blacktShirt01,
      title: "Product2",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 3,
      imgUrl: Images.browntShirt,
      title: "Product3",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 4,
      imgUrl: Images.brownTop,
      title: "Product4",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 5,
      imgUrl: Images.lightGreenShirt01,
      title: "Product5",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 6,
      imgUrl: Images.pinkShirt01,
      title: "Product6",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    }
  ]




  return (
    <>

      <div className='slider w-[100%] h-[630px] overflow-hidden mx-auto'
        style={{ backgroundImage: `url(${slider[number].src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='hero-Sec p-10 w-[590px] text-wrap ' >
                <h1 className='heroHead text-[30px] font-[800] mb-5 ' style={{color:mywhite}} >{slider[number].heading}</h1>
                <p className='heroDec mb-5 text-[14px] ' style={{color:mygrey}}>{slider[number].para}</p>
            </div>

         {/* {slider.map((i) =>(<Headingkey={i.id}heading={i.heading}para={i.para}/>))} */}
         
          <button onClick={handelnext} className='Sbtn1'><IoIosArrowForward /></button>
          <br />
          <button onClick={handelprev} className='Sbtn2'><IoIosArrowBack /></button>
      </div>

      <div className='sec1 w-[1280px] flex justify-between p-5 mx-auto my-36'>
        <div className='Wcat w-[600px] h-[400px] border' style={{backgroundImage:`url(${Images.womencat})`, backgroundSize: "cover"}}>
          {/* <img className='w-[100%]' src={Images.womencat} alt="" /> */}
          <div className='sec1catCon h-[85%] overflow-hidden'>
            <h3 className='font-[700] text-[28px]' style={{color:myDarkpurple}}>Women</h3>
            <p className='text-[14px] tracking-[0.25rem]' style={{color:myLightpurple}}>New Trend</p>
            <Link to={'/women'}><p className='catSopt text-[14px] font-[600]' style={{color:myDarkpurple}}>SHOP NOW</p></Link>
          </div>
          
        </div>
        <div className='Mcat w-[600px] border' style={{backgroundImage:`url(${Images.mencat})`, backgroundSize: "cover"}}>
          {/* <img className='w-[100%]' src={Images.mencat} alt="" /> */}
          <div className='sec1catCon h-[85%] overflow-hidden'>
            <h3 className='font-[700] text-[28px]' style={{color:myDarkpurple}}>Men</h3>
            <p className='text-[14px] tracking-[0.25rem]' style={{color:myLightpurple}}>New Trend</p>
            <Link to={'/men'}><p className='catSopt text-[14px] font-[600]' style={{color:myDarkpurple}}>SHOP NOW</p></Link>
          </div>
          
        </div>

      </div>

      <div className="card-container">
        {
          data.map((i) => (
            <Card
              key={i.id}
              imgUrl={i.imgUrl}
              title={i.title}
              description={i.description}
            />
          ))
        }
      </div>


    </>

  )


}

export default Homepage