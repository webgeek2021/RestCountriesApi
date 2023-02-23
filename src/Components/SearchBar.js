
import React from 'react';
import { Form ,InputGroup} from 'react-bootstrap';
import { SearchCountryData ,getSearchList ,getAllCountryData} from './Api';
const SearchBar = (props) => {
  
  const [search,setSearch] = React.useState("")
  const [searchList , setSearchList] = React.useState([])
  const [isli , setIsli] = React.useState(false)

  React.useEffect(()=>{
    if(search !== "" )
    {
      let newData = SearchCountryData(search)
      props.setCountryData(newData)
      let list = getSearchList(search)
      setSearchList(list)
    }
    else if(search === ""){
      props.setCountryData(getAllCountryData())
    }
  },[search])


  const handleChange = (e)=>{
    const value = e.target.value
    // console.log(e.target.value)
    setSearch(value)
    
  }

  const handleKeyDown = (e)=>{
    // console.log(e)
    if(e.key === "Enter")
    {
      let newData = SearchCountryData(search)
      props.setCountryData(newData)
    }else if(e.key === "Backspace")
    {
      setIsli(false)
    }
  }
  const handleDropClick  = (country) =>{
    setSearch(country)
    setIsli(prev => !prev)
  }
  const list = searchList.map((li,index)=>{
    return(
      <li key={index} onClick={()=>handleDropClick(li)}>{li}</li>
    )
  })

  return (
    <div className='search-bar'>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search for a country..."
          value={search}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </InputGroup>
      {
        searchList.length > 0  && search !== "" &&  
        <ul className={`seachBar__options ${isli ? "hide-option" : ""}`}>
          {list}
        </ul>
      }
    </div> 
  )
}

export default SearchBar