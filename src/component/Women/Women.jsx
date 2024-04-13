import React from 'react'
import Card from '../Card/Card'
// import Images from '../assets/Images'




function Women() {
    const data = [
        {
          id: 1,
          imgUrl: 'https://cdn.pixabay.com/photo/2015/10/05/14/42/river-972708_960_720.jpg',
          title: "Product1",
          description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
        },
        {
          id: 2,
          imgUrl: 'https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg',
          title: "Product2",
          description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
        },
        {
          id: 3,
          imgUrl: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg',
          title: "Product3",
          description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
        },
        {
          id: 4,
          imgUrl: 'https://cdn.pixabay.com/photo/2017/02/08/17/24/fantasy-2049567_1280.jpg',
          title: "Product4",
          description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
        },
        {
          id: 5,
          imgUrl: 'https://cdn.pixabay.com/photo/2019/03/14/20/22/road-4055838_960_720.jpg',
          title: "Product5",
          description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
        },
        {
          id: 6,
          imgUrl: 'https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg',
          title: "Product6",
          description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
        }
      ]

  return (
    <>
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

export default Women