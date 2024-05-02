import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { PiShoppingBagThin } from "react-icons/pi"
import * as Images from "../Images/index";
import { myblack, mywhite, mygrey, myred, myyellow, myorange, myLightpurple, myLightgreen, myDarkgreen, myDarkpurple } from "../Images/index";
import Cart from "../Cart/Cart";
import { useContext } from "react";
import { MyContext } from "../../Data/ContextApi";


function Homepage() {
  const { addtoKart, HomeProduct, hendelQuickView, hendelQuickViewClose, view, addi, addtocart, count, Increase, Decrease } = useContext(MyContext);
  // console.log(addi);

  const slider = [
    {
      id: 1,
      src: Images.Slider09,
      heading: "Unleash Your Style: Limited-Time Offer Inside!",
      para: "Step into style with our exclusive clothing offers. Discover trendy pieces at unbeatable prices. Don't miss out - shop now!",
    },
    {
      id: 2,
      src: Images.Slider06,
      heading: "Dress to Impress: Exclusive Clothing Deals Await!",
      para: "Step into style with our exclusive clothing offers. Discover trendy pieces at unbeatable prices. Don't miss out - shop now!",
    },
    {
      id: 3,
      src: Images.Slider08,
      heading: "Fashion Frenzy: Unbeatable Deals on Trendy Styles!",
      para: "Step into style with our exclusive clothing offers. Discover trendy pieces at unbeatable prices. Don't miss out - shop now!",
    },
  ];

  // .............................slider
  {/*data.length is equal to 6(no. of object in array) and number is the index value of array which is 1 less then no. of object */ }
  //............................................................top slider function
  const [number, setNumber] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      handelnext();
    }, 5000);
    return () => clearInterval(interval);
  }, [number]);
  // console.log(data.length);
  const handelnext = () => {
    if (number === slider.length - 1) {
      setNumber(0);
    } else {
      setNumber(number + 1);
    }
  };
  const handelprev = () => {
    if (number === 0) {
      setNumber(slider.length - 1);
    } else {
      setNumber(number - 1);
    }
  };

  // ..............................................bottom slider
  const [alpha, setalpha] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      hendelnextSslider();
    }, 5000)
    return () => clearInterval(interval)
  })
  const hendelnextSslider = () => {
    setalpha((alpha + 1) % HomeProduct.length);
  }
  const hendelprevSslider = () => {
    setalpha((alpha - 1 + HomeProduct.length) % HomeProduct.length);
  }


  // small image replace main image 
  const [thumbnail, setthumbnail] = useState(0)
  const handelthumbnail = (index) => {
    setthumbnail(index)
  }

  return (
    <>

      {/* slider................................................... */}
      <div className="slider w-[100%] h-[700px] overflow-hidden mx-auto"
        style={{ backgroundImage: `url(${slider[number].src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="hero-Sec p-10 w-[590px] text-wrap ">
          <h1 className="heroHead text-[30px] font-[800] mb-5 " style={{ color: mywhite }} > {slider[number].heading} </h1>
          <p className="heroDec mb-5 text-[14px] " style={{ color: mygrey }}> {slider[number].para} </p>
        </div>

        {/* {slider.map((i) =>(<Headingkey={i.id}heading={i.heading}para={i.para}/>))} 
        typing hero section on slider but this method not work bcoz slider.map show all value at same time */}

        <button onClick={handelnext} className="Sbtn1"> <IoIosArrowForward /> </button>
        <br />
        <button onClick={handelprev} className="Sbtn2"><IoIosArrowBack /></button>
      </div>



      {/* women and men categories....................................... */}
      <div className="sec1 w-[1280px] flex justify-between p-5 mx-auto my-32">

        <div className="Wcat w-[600px] h-[400px] border" style={{ backgroundImage: `url(${Images.womencat})`, backgroundSize: "cover", }}>
          <div className="sec1catCon h-[85%] overflow-hidden">
            <h3 className="font-[700] text-[28px]" style={{ color: myDarkpurple }}>Women</h3>
            <p className="text-[14px] tracking-[0.25rem]" style={{ color: myLightpurple }}> New Trend </p>
            <Link to={"/women"}> <p className="catSopt text-[14px] font-[600]" style={{ color: myLightpurple }} > SHOP NOW </p></Link>
          </div>
        </div>

        <div className="Mcat w-[600px] border" style={{ backgroundImage: `url(${Images.mencat})`, backgroundSize: "cover", }}>
          <div className="sec1catCon h-[85%] overflow-hidden">
            <h3 className="font-[700] text-[28px]" style={{ color: myDarkpurple }}>Men</h3>
            <p className="text-[14px] tracking-[0.25rem]" style={{ color: myLightpurple }}> New Trend </p>
            <Link to={"/men"}><p className="catSopt text-[14px] font-[600]" style={{ color: myLightpurple }}> SHOP NOW </p> </Link>
          </div>
        </div>
      </div>



      {/* card container ............................................................... */}
      <div className=" sec2 card-container relative w-[1280px] mx-auto my-32 p-2">
        <div className=" uppercase text-[35px] font-[700] mb-16 tracking-wider" style={{ color: myLightpurple }}>
          <h2>Browser Top Selling product</h2>
        </div>
        <div className="flex flex-wrap justify-around">
          {HomeProduct.map((i, index) => (
            <Card
              key={i.id}
              imgUrl={i.imgUrl[0]}
              title={i.title}
              price={i.price}
              onClick={() => hendelQuickView(index)}
            />
          ))}
        </div>
      </div>


      {/* quick view container .........................................  */}
      {/* <div> {data.map((i) =>(  <Quickview  key={i.id}  imgUrl={i.imgUrl}  title={i.title}  price={i.price}  description={i.description} /> ))} </div> 
      set the quick view through this method but it show all value*/}
      <div id="overlay" className="overlay fixed top-0 left-0 w-[100%] h-[100%] bg-[#d580ff8a] "></div>
      <div className='quickCon fixed w-[1080px] p-5 m-5 bg-white' id="quickCon">
        <button onClick={hendelQuickViewClose}>X</button>
        <div className="flex justify-between m-5 ">
          <div className='quickImgcon relative w-[480px] '>
            <div className='quickMainImg'>
              <img className="w-[100%] h-[450px] object-cover" src={HomeProduct[view].imgUrl[thumbnail]} alt="" />
            </div>
            <div className='quicksecImg absolute bottom-[1%] left-[50%] translate-x-[-50%] w-[70%]'>
              <ul className=" flex justify-evenly">
                {addi.map((item) => (
                  item.imgUrl.map((url, index) => (
                    <li className="" key={index} onClick={() => handelthumbnail(index)}><img className="w-[80px] rounded-[5px] h-[80px] object-cover hover:scale-150 transition-all duration-300 ease-in-out" src={url} alt="" /></li>
                  ))
                ))}
                {/* <li><img src={imgUrl} alt="" /></li> */}
              </ul>
            </div>
          </div>
          <div className='quickDeccon w-[480px] px-4 py-2'>
            <h2 className="text-[1.5rem] font-[700] mb-3" style={{ color: myDarkpurple }}>{HomeProduct[view].title}</h2>
            <p className="text-[1.1rem] font-[600] mb-5" style={{ color: myyellow }}>{HomeProduct[view].price}</p>
            <p className=" text-[.9rem] mb-10" style={{ color: myLightpurple }}>{HomeProduct[view].description}</p>
            <div className='flex justify-between text-[20px]'>
              <button className='px-5 py-1 rounded-[50px]' onClick={() => addtoKart(HomeProduct[view])} style={{ backgroundColor: myLightpurple, color: mywhite }}>Add to Cart</button>
              <div className='px-5 py-1 rounded-[50px]' style={{ backgroundColor: myLightpurple, color: mywhite }}>Add to Whishlist</div>
                {/* {console.log(HomeProduct[view].id)} */}

            </div>
          </div>
        </div>
      </div>


      {/* fixed image background .................... */}
      <div className="sec3 flex flex-col justify-center w-[1280px] h-[600px] mx-auto my-32 " style={{ backgroundImage: `url(${Images.Slider03})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
        <div className="sec3Con w-[40%]  ml-10 overflow-hidden p-5 " style={{ backgroundColor: mywhite }}>
          <p className=" opacity-70 text-[1rem] -mb-2" style={{ color: myyellow }}>Limited Offers 25% OFF</p>
          <h2 className="text-[1.6rem] mb-4" style={{ color: myLightpurple }}>Weekend Deals</h2>
          <p className="text-[.8rem] mb-4 opacity-70" style={{ color: myyellow }}>Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.</p>
          <button className="sec3btn px-3 py-1 rounded-[50px] mt-10 " style={{ backgroundColor: myLightpurple, color: mywhite }}>Shop Now</button>
        </div>
      </div>



      {/* small ending slider ............................. */}
      <div className="sec4 my-32 p-2">
        <div className="w-[1200px] mx-auto relative">
          <div className=" text-[20px] font-[600 mb-16 tracking-wider" style={{ color: myLightpurple }}>
            <h3 >Popular Items</h3>
          </div>

          <div id="smallSlider" className="smallSlider flex flex-nowrap overflow-hidden justify-around ">
            {HomeProduct.map((_, index) => {
              // not using alpha insted of using cardIndex bcoz alpha index value is same so we the below equation to increase alpha index value for each card
              const cardIndex = (alpha + index) % HomeProduct.length;
              return (
                <div key={cardIndex} className="card " >
                  <Card
                    imgUrl={HomeProduct[cardIndex].imgUrl[0]}
                    title={HomeProduct[cardIndex].title}
                    price={HomeProduct[cardIndex].price}
                    onClick={() => hendelQuickView(cardIndex)}
                  />
                </div>
              );
            })}
            <div className="text-[45px] text-gray-900 opacity-10">
              <button onClick={hendelprevSslider} className=" absolute top-[40%] left-[-10%] "><IoIosArrowBack /></button>
              <button onClick={hendelnextSslider} className=" absolute top-[40%] right-[-10%] "> <IoIosArrowForward /> </button>
            </div>
          </div>


        </div>
      </div>
    </>
  );
}

export default Homepage;
