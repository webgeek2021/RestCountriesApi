import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { NavLink, useParams } from "react-router-dom"
import { getCountryData } from './Api'
import {BiArrowBack} from "react-icons/bi"
const DetailsPage = () => {
    const { name } = useParams()

    const [countryInfo, setCountryInfo] = React.useState([])

    React.useEffect(() => {
        let data = getCountryData(name)
        console.log(data)
        setCountryInfo(data)
    }, [])
    console.log("COUNTRYDATA", countryInfo.currencies)
    const languages = countryInfo.languages?.map((lang) => {
        return lang.name
    })
    const border_countries = countryInfo.borders?.map((border) => {
        return (
            <div className='border__country'>
                {border}
            </div>
        )
    })
    return (
        <section className='page-container'>
            
            <div className='country__details'>
                <Container>
            <NavLink to={"/"}className="back_btn"> <BiArrowBack /> Back</NavLink>
                    <Row className='outer__wrapper'>
                        <Col sm={12} md={6}>
                            <Image className='country__flag' src={countryInfo.flag} alt="image of country flag" />
                        </Col>
                        <Col sm={12} md={6} className="country__section_right">
                            <h1 className='country__name'>{countryInfo.name}</h1>
                            <section className='country__info'>
                                <Row>
                                    <Col sm={12} md={6} >
                                        <div className='left'>
                                            <ul className='country-info'>
                                                <li>Native Name : <span className='country-info-value'>{countryInfo.nativeName}</span></li>
                                                <li>Population : <span className='country-info-value'>{countryInfo.population}</span></li>
                                                <li>Region : <span className='country-info-value'>{countryInfo.region}</span></li>
                                                <li>Sub Region : <span className='country-info-value'>{countryInfo.subregion}</span></li>
                                                <li>Capital : <span className='country-info-value'>{countryInfo.capital}</span></li>
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <div className='right'>
                                            <ul className='country-info'>
                                                <li>Top Level Domain : <span className='country-info-value'>{countryInfo.topLevelDomain}</span></li>
                                                {/* <li>Currencies : <span className='country-info-value'>{countryInfo.currencies[0].name}</span></li> */}
                                                <li>Languages : <span className='country-info-value'>{languages}</span></li>
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </section>
                            <section className='border__countries'>
                                <span>Border Countries :</span>
                                <div className='border__container'>{border_countries}</div>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    )
}

export default DetailsPage