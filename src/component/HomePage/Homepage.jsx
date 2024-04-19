import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { PiShoppingBagThin } from "react-icons/pi"
import * as Images from "../Images/index";
import { myblack, mywhite, mygrey, myred, myyellow, myorange, myLightpurple, myLightgreen, myDarkgreen, myDarkpurple } from "../Images/index";


function Homepage() {
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
  {
    /*data.length is equal to 6(no. of object in array) and number is the index value of array which is 1 less then no. of object */
  }
  const [number, setNumber] = useState(0);

  let interval;
  useEffect(() => {
    interval = setInterval(() => {
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

  const data = [
    {
      id: 1,
      imgUrl: Images.blackTop,
      title: "Black Top",
      price: '₹1500',
      description: 'Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.',
    },
    {
      id: 2,
      imgUrl: Images.lightGreenShirt01,
      title: "Green Shirt",
      price: '₹1000',
      description: 'Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.'
    },
    {
      id: 3,
      imgUrl: Images.redTop01,
      title: "Red top",
      price: '₹1200',
      description: 'Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.'
    },
    {
      id: 4,
      imgUrl: Images.brownTop,
      title: "Brown T-shirt",
      price: '₹700',
      description: 'Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.'
    },
    {
      id: 5,
      imgUrl: Images.redtShirt01,
      title: "Red T-shirt",
      price: '₹900',
      description: 'Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.'
    },
    {
      id: 6,
      imgUrl: Images.blacktShirt01,
      title: "Black T-shirt",
      price: '₹800',
      description: 'Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.'
    },
    {
      id: 7,
      imgUrl: Images.whiteTop01,
      title: "White T-shirt",
      price: '₹800',
      description: 'Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.'
    },
    {
      id: 8,
      imgUrl: Images.whitetShirt01,
      title: "White T-shirt",
      price: '₹700',
      description: 'Introducing our newest addition, the "StyleShift Collection." Dive into a world where comfort meets elegance. Crafted from premium fabrics, each piece is meticulously designed to elevate your wardrobe. From versatile basics to statement pieces, redefine your style effortlessly with the StyleShift Collection.'
    },
  ];
  const [alpha, setalpha] = useState(0)

  const hendelQuickView = (index) => {
    const quickCon = document.getElementById('quickCon');
    const overlay = document.getElementById('overlay');
    quickCon.style.display = quickCon.style.display === 'none' ? 'block' : 'none';
    overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
    setalpha(index);
    // console.log(index);
    // console.log('clicked');
  }

  return (
    <>
      <div
        className="slider w-[100%] h-[630px] overflow-hidden mx-auto"
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

      <div className=" sec2 card-container relative w-[1280px] mx-auto my-32">
        <div className=" uppercase text-[35px] font-[700] text-center mb-16 tracking-wider" style={{ color: myLightpurple }}>
          <h2>Browser Top Selling product</h2>
        </div>
        <div className="flex flex-wrap justify-around">
          {data.map((i, index) => (
            <Card
              key={i.id}
              imgUrl={i.imgUrl}
              title={i.title}
              price={i.price}
              onClick={() => hendelQuickView(index)}
            />
          ))}
        </div>

        {/* <div> {data.map((i) =>(  <Quickview  key={i.id}  imgUrl={i.imgUrl}  title={i.title}  price={i.price}  description={i.description} /> ))} </div> 
      set the quick view through this method but it show all value*/}
        <div id="overlay" className="overlay fixed top-0 left-0 w-[100%] h-[100%] bg-[#d580ff8a] "></div>
        <div className='quickCon absolute w-[1080px] p-5 m-5' id="quickCon">
          <div className="flex justify-between m-5">
            <div className='quickImgcon w-[480px]'>
              <div className='quickMainImg'><img className="w-[100%] object-cover" src={data[alpha].imgUrl} alt="" /></div>
              <ul className='quicksecImg'>
                {/* <li><img src={imgUrl} alt="" /></li> */}
              </ul>
            </div>
            <div className='quickDeccon w-[480px] px-4 py-2'>
              <h2 className="text-[25px] font-[700] mb-3">{data[alpha].title}</h2>
              <p className="text-[18px] font-[600] mb-5">{data[alpha].price}</p>
              <p className=" text-[.8rem] mb-10">{data[alpha].description}</p>

              <div className='mr-5 flex'>
                <Link to={'/cart'}> <div className='Nav-icon'><PiShoppingBagThin /></div></Link>
                <Link to={'/login'}><div className='Nav-icon'><GoPerson /></div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default Homepage;
