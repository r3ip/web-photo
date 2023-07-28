import { Col, Container, Row } from "react-grid-system"
// import { Cards } from "../components/index"
import { Card } from 'dracula-ui'

export const Caterories = () => {
  const isMobile = window.screen.width < 600
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
      <div className="flex-col lg:flex-row h-full">
        <Row className="md:hidden">
          <Col sm={6}>
            <Row className="h-full">
              {
                eventos.map((evento, i) => (
                  <Col md={4} key={i}>
                    <div className="card bg-neutral hover:bg-info m-2">
                      <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-center">
                          <button className="btn btn-outline">Buy Now</button>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))
              }
            </Row>
          </Col>
          <Col sm={6} className="w-full">
            <Row className="h-full">
              <Col className="h-full">
                <div className="h-full rounded-3xl" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                  <div className="hero-overlay bg-opacity-60 rounded-3xl">
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}
