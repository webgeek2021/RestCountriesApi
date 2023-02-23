import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
export default function CustomDropDown(props) {

  const list = props.dropList?.map((li , index) => {
    return (
      <Dropdown.Item href="#" key={index}>
        <div className='dropdown-div 'onClick={()=>props.handleClick(li.id)}>
            {li.title}
        </div>
      </Dropdown.Item>
    )
  })
  return (
    <Dropdown  className="customDropdown">
      <Dropdown.Toggle  id="dropdown-basic">
        Filter by Region
      </Dropdown.Toggle>

      <Dropdown.Menu >
        {list}
      </Dropdown.Menu>
    </Dropdown>
  )
}