import React from 'react'

export default function DataList(props:any) {
    const data = props.data;
    
  return (
    <div>
        {
            data.map((item:any) => {
                return (
                    <>
                        <div>{item.name}</div>
                        <div>{item.capital}</div>
                        <div>{item.population}</div>
                        <div>{item.latlng}</div>
                        <div><img width={300} height={300} src={item.flag} alt="flag"/></div>
                    </>
                )
            })
        }
    </div>
  )
}
