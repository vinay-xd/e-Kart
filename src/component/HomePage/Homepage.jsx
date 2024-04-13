import React from 'react'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import { FcNext, FcPrevious } from "react-icons/fc";
import * as Images from '../Images/index'


function Homepage() {

  const data = [
    {
      id: 1,
      imgUrl: Images.image,
      title: "Product1",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 2,
      imgUrl: Images.image1,
      title: "Product2",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 3,
      imgUrl: 'https://cdn.pixabay.com/photo/2022/08/27/08/04/magma-7413903_1280.jpg',
      title: "Product3",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 4,
      imgUrl: 'https://cdn.pixabay.com/photo/2024/03/01/20/05/volcano-8607158_1280.png',
      title: "Product4",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 5,
      imgUrl: 'https://cdn.pixabay.com/photo/2017/07/27/00/46/fantasy-2543658_960_720.jpg',
      title: "Product5",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    },
    {
      id: 6,
      imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/12/32/hell-735995_1280.jpg',
      title: "Product6",
      description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
    }
  ]

  // .............................slider 
  {/*data.length is equal to 6(no. of object in array) and number is the index value of array which is 1 less then no. of object */}
  const [number, setNumber] = useState(0)
  useEffect(() => {
   const interval = setInterval(() => {
      handelnext()
    }, 3000)

    return () => clearInterval(interval)
  })
  // console.log(data.length);

  const handelnext = () => {
    if (number === data.length - 1) {
      setNumber(0)
    }
    else {
      setNumber(number + 1)
    }

  }

  const handelprev = () => {
    if (number === 0) {
      setNumber(data.length - 1)
    }
    else {
      setNumber(number - 1)
    }

  }


  return (
    <>
      {/* .....................Slider */}
      <div className='slider'>
        <div className='number-display w-[100%] h-[400px] overflow-hidden mx-auto '><img className='Nimg w-[100%] origin-center' src={data[number].imgUrl} /></div>
        <button onClick={handelnext} className='Sbtn1'><FcNext /></button>
        <br />
        <button onClick={handelprev} className='Sbtn2'><FcPrevious /></button>
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