import React from 'react'
import SearchBar from './SearchBar'
import CustomDropDown from './CustomDropDown'
import { Container, Row, Col } from 'react-bootstrap'
import CustomCards from './CustomCards'
import { getAllCountryData ,getFillterData} from './Api'
import {NavLink} from "react-router-dom"
const HomePage = () => {
  const dropDownList = [
    {
      title:"ALL",
      id:"ALL"
    },
    {
      title: "Africa",
      id: "AFRICA",
    },
    {
      title: "America",
      id: "AMERICA"
    },
    {
      title: "Asia",
      id: "ASIA"
    },
    {
      title: "Europe",
      id: "EUROPE"
    },
    {
      title: "Oceania",
      id: "OCEANIA"
    }
  ]
  const [countryData, setCountryData] = React.useState(getAllCountryData())
  // console.log(countryData)
  
  const handleDropDown = (id) => {
    // console.log("DropDown is ", id)
    if(id === "ALL")
    {
      setCountryData(getAllCountryData())
    }
    else{
      setCountryData(getFillterData(id))
    }
  }

  const cards = countryData.map((country, index) => {

    let countryInfo = {
      population: country.population,
      region: country.region,
      capital: country.capital
    }
    return (
      <Col sm={12} md={6} lg={3} key={index} className="card-col">
        <NavLink to={`/country/${country.name}`}>
        <CustomCards
          Flag={country.flags.png}
          countryInfo={countryInfo}
          cardTitle={country.name}
        />
        </NavLink>
      </Col>
    )
  })
  return (
    <section className='page-container'>
      <div className='input-fields'>
        <Container>
          <Row>
            <Col  sm={12} md={6} >
              <SearchBar 
                setCountryData ={setCountryData}
              />
            </Col>
            <Col sm={12} md={6} >
              <CustomDropDown
                dropList={dropDownList}
                handleClick={handleDropDown}
              />
            </Col>
          </Row>
        </Container>
      </div>
      <div className='cards-container'>
        <Container>
          <Row>
            { cards.length > 0 ? cards : 
              <h1 className='cards_not_found'>
                No Country Found
              </h1>
            }
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default HomePage