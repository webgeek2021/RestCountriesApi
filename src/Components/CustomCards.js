import React from 'react'
import Card from 'react-bootstrap/Card';

const CustomCards = (props) => {

  return (
    <Card >
      <Card.Img variant="top" src={props.Flag} alt="image of country flag" />
      <Card.Body>
        <Card.Title>{props.cardTitle}</Card.Title>
        <ul className='country-info'>
          <li>Population : <span className='country-info-value'>{props.countryInfo.population}</span></li>
          <li>Region : <span className='country-info-value'>{props.countryInfo.region}</span></li>
          <li>Capital : <span className='country-info-value'>{props.countryInfo.capital}</span></li>
        </ul>
        {/* <div className='hover-div'>
          <h1>{props.cardTitle}</h1>
        </div> */}
      </Card.Body>
    </Card>
  )
}

export default CustomCards