import React from 'react'
import Card from '../Card/Card'
// import Images from '../assets/Images'




function Men() {
    const data = [
        {
          id: 1,
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
          title: "Product1",
          description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
        },
        {
          id: 2,
          imgUrl: 'https://cdn.pixabay.com/photo/2015/04/23/21/59/tree-736875_1280.jpg',
          title: "Product2",
          description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
        },
        {
          id: 3,
          imgUrl: 'https://cdn.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897_960_720.jpg',
          title: "Product3",
          description: "lorem hlfaldjhfaak a;kj  aksdjf a djh jadjf haj lkjha"
        },
        {
          id: 4,
          imgUrl: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_1280.jpg',
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
          imgUrl: 'https://cdn.pixabay.com/photo/2020/11/28/02/17/island-5783440_1280.jpg',
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

export default Men