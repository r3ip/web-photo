import { Card, Text } from 'dracula-ui'
export const Cards = ({titulo}) => {

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
      <Card className='w-[20rem]' borderColor={colors[0]} p="md" m="md">
        <Text >{titulo}</Text>
      </Card>
    </>

  )
}
