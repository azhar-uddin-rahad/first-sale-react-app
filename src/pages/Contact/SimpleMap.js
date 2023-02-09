import React, { useEffect, useState } from 'react';
import { Annotation, ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";
import { Tooltip as ReactTooltip } from 'react-tooltip'

const SimpleMap = () => {
    const [content,setContent]=useState();
    const [info,setInfo]=useState();
    const [country,setCountry]=useState();
    const geoUrl= "features.json"
    useEffect(()=>{
      fetch('targetCountryInfo.json')
      .then(res => res.json())
      .then(data => setCountry(data))
     },[])
       
      const handleClick=(name,data)=>{
        console.log(name,data)
        setInfo({name,data})
      }
    return (
        <div 
        style={{
          width:"100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems:"center",
         
        }}
        >  
          <div style={{ borderStyle: "double"}}>
          <ComposableMap data-tip="" className='w-[500px] lg:w-[1200px] lg:h-[800px] ' style={{borderStyle: "double"}}>
          {" "}
         <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography key={geo.rsmKey} geography={geo} onMouseEnter={()=>{
                  const {name}= geo.properties;
                  setContent(`${name}`);
                  
                }}
                onMouseLeave={
                  ()=>setContent( "")
                }
                fill="#48b2dc"
                style={{
                  
                  hover:{
                    fill:"#F53",
                    outline:"none" ,
                    
                  }}}
                />
              ))
            }
          </Geographies>
          {
          country?.map(({name,coordinates,markerOffset,data})=>(
            <Marker key={name} coordinates={coordinates}>
              <circle r={data/10} onClick={()=>handleClick(name,data)} fill='#103178' stroke="#F14D5D" strokeWidth={2}/>
            <text 
            textAnchor="middle" 
             y={markerOffset} 
             style={{fontFamily:'system-ui',fill:'#103178'}}  stroke="#000000">
              {name}
            </text>
             
            </Marker>
          ))}
          <Annotation
           subject={[2.3522,48.8566]}
           dx={-90}
           dy={-30}
           connectorProps={{
             stroke: '#103178',
             strokeWidth:3,
             strokeLinecap: 'round'
           }}
           
          >
    
            <text
           x={8}
           textAnchor='end'
           alignmentBaseline="middle"
           fill="#000000"
           
           >
             {'paris'}
    
           </text>
           
    
          </Annotation>
         
    
          </ComposableMap>
          </div>
           <h1 style={{color:"#fff",fontSize: "50px"}}>{info?.name}</h1>
           <h1 style={{color:"#fff",fontSize: "50px"}}>{info?.data}</h1>

         {/*   <h1>Lets build some cool maps</h1>
          <ReactTooltip style={{height:"30px",color:"#fff",fontSize: "30px", marginBottom:"5px"}}>{content}</ReactTooltip> */}
        </div>
    );
};

export default SimpleMap;