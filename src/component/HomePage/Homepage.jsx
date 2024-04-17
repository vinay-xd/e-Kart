import React from 'react'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import * as Images from '../Images/index'


function Homepage() {

  const slider = [
    { id: 1, src: Images.Slider01 },
    { id: 2, src: Images.Slider02 },
    { id: 3, src: Images.Slider03 },
    { id: 4, src: Images.Slider04 },
    { id: 5, src: Images.Slider05 }
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
        style={{ backgroundImage: `url(${slider[number].src})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: `brightness(70%)` }}>
        <button onClick={handelnext} className='Sbtn1'><IoIosArrowForward /></button>
        <br />
        <button onClick={handelprev} className='Sbtn2'><IoIosArrowBack /></button>
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