import { useEffect, useState } from 'react';
import './App.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Wheel } from 'react-custom-roulette';
import Inputform from './Inputform';
import { useNameContext } from './context';
import Swal from 'sweetalert2';
import Header from './Header';


const App = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const { nameList, colorList } = useNameContext();
  const [stopped, setStopped] = useState(false);

  const data = nameList.length > 0 ? nameList.map((name, index) => ({
    option: name,
    style: { backgroundColor: colorList[index] || 'blue' },
    id: index
  })) : [{ option: '', style: { backgroundColor: 'blue' } }];

  const winner = nameList[prizeNumber];
  const handleSpinClick = () => {
    
    if (!mustSpin && nameList.length >1) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
      setStopped(false);


    }
    else if(nameList.length===1){
      Swal.fire({
        title: 'Please enter another one value',
        icon: "warning",
        confirmButtonText: 'Okay',
      })
    }
    else if(nameList.length===0){
      Swal.fire({
        title: 'Please enter some values',
        icon: "warning",
        confirmButtonText: 'Okay',
      })
    }
  }
  useEffect(() => {
    if (stopped) {
      Swal.fire({
        title: winner,
        text: 'Selected',
        confirmButtonText: 'Done',
      })
    }
  }, [stopped,winner])

  return (
    <div>
      <Header/>
      <Container className='spin-wheel-container'>
        <Row>
          <Col md={7} className='spin-wheel'>
            <Wheel
              mustStartSpinning={mustSpin}
              prizeNumber={prizeNumber}
              data={data}
              onStopSpinning={() => {
                setMustSpin(false);
                setStopped(true);
      
              }}
            />
            <Button variant='success'size="lg" onClick={ handleSpinClick}>SPIN</Button>
          </Col>

          <Col md={5} >
            <div className='names-container rounded' >
              <Inputform />
            </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
