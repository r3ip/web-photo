// import { Theme, Button, Navbar } from 'react-daisyui'
import { useState } from 'react';
import { NavBar } from './components/index';
import { Contact, Home, Caterories, About } from './pages/index'
import { Container, Row, Col } from 'react-grid-system';
import { BiHome, BiInfoCircle, BiCategoryAlt } from 'react-icons/bi'
import { RiContactsLine } from 'react-icons/ri'

const App = () => {

  const [container, setContainer] = useState(<Home />);

  const changeContainerView = (cont) => {
    setContainer(cont)
  }


  return (
    <>
      <NavBar />
      <Container className='w-full md:my-10 my-5'>
        <Row>
          <Col md={1} className='md:h-[46rem]'>
            <Row className='grid grid-cols-1 gap-4 content-center lg:h-full'>
              <Col>
                <div className='tooltip' data-tip='Home'>
                  <button className='btn btn-ghost btn-circle mb-5' onClick={() => changeContainerView(<Home />)}>
                    <BiHome className='w-5 h-5' /><span className='md:hidden'>Home</span>
                  </button>
                </div>
              </Col>
              <Col>
                <div className='tooltip' data-tip='Caterory'>
                  <button className='btn btn-ghost btn-circle mb-5' onClick={() => changeContainerView(<Caterories />)}>
                    <BiCategoryAlt className='w-5 h-5' /><span className='md:hidden'>Category</span>
                  </button>
                </div>
              </Col>
              <Col>
                <div className='tooltip' data-tip='About'>
                  <button className='btn btn-ghost btn-circle mb-5' onClick={() => changeContainerView(<About />)}>
                    <BiInfoCircle className='w-5 h-5' /><span className='md:hidden'>About</span>
                  </button>
                </div>
              </Col>
              <Col>
                <div className='tooltip' data-tip='Contact'>
                  <button className='btn btn-ghost btn-circle mb-5' onClick={() => changeContainerView(<Contact />)}>
                    <RiContactsLine className='w-5 h-5' /><span className='md:hidden'>Contact</span>
                  </button>
                </div>
              </Col>
            </Row>
          </Col>

          <Col sm={11} className='h-[46rem]'>
            <div className='w-full h-full' style={{border: '1px solid green'}}>
              {container}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
