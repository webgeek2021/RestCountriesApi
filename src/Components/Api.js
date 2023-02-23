import { data } from "../data.js"


export const getAllCountryData = ()=>{
    return data
}

export const SearchCountryData = (country)=>{
    let c = country.toLowerCase()
    let d = data.filter((dt)=>{
        return dt.name.toLowerCase().includes(c)
    })
    console.log(d)
    return d
}

export const getSearchList = (country) =>{
    // console.log("LIST",country)
    let c = country.toLowerCase()
    let list = []
    data.map((dt)=>{
        if(dt.name.toLowerCase().includes(c))
        {
            list.push(dt.name)
        }
    })
    return list
}

export const getFillterData = (region) =>{
    let reg = region.toLowerCase()
    let list = data.filter((dt)=>{
        return dt.region.toLowerCase().includes(reg)
    })
    return list
}

export const getCountryData = (name)=>{
    // console.log("Details Country",name)
    let n = name.toLowerCase()
    let newData = data.find((c)=>c.name.toLowerCase() === n)
    return newData
}