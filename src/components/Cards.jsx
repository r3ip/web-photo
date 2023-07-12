import { Card, Text } from 'dracula-ui'
export const Cards = ({ titulo }) => {

  const colors = [
    'cyan',
    'pink',
    'green',
    'purple',
  ]

  const colorsRandom = () => {
    return Math.floor(Math.random() * 4);
  }

  return (
    <>
      {/* <Card className='w-[20rem]' borderColor={colors[0]} p="md" m="md">
        <Text >{titulo}</Text>
      </Card> */}

      <div className="card w-96 bg-base-100 shadow-xl image-full">
        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"/></figure>
        <div className="card-body">
          <h2 className="card-title">{titulo}!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
    </>

  )
}
