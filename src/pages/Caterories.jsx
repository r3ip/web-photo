import { Col, Row } from "react-grid-system"
import { Cards } from "../components/index"

export const Caterories = () => {

  const eventos = [
    {
      name: 'Cumpleaños',
      img: ''
    },
    {
      name: 'Quinceñeros',
      img: ''
    },
    {
      name: 'Bautizos',
      img: ''
    },
    {
      name: 'Personal',
      img: ''
    },
    {
      name: 'Retratos',
      img: ''
    },
    {
      name: 'Análogo',
      img: ''
    }

  ]
  return (
    <>
      {/* <Cards /> */}
      <Row className="h-full">
        {
          eventos.map( (evento, i) => (
            <Col sm={4} key={i} style={{ border: '1px solid blue'}}>
              <h1>{evento.name}</h1>
            </Col>
           ) )
        }
      </Row>
    </>
  )
}
