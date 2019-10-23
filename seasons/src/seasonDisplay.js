import React from 'react';

 const SeasonConfig={
     Summer:{
         text:"Lets hit the Beach",
         iconName:'sun'
     },
     Winter:{
        text: 'Burr, its chilly', 
        iconName:'snowflake'
    }
 }

const SeasonDisplay = (props)=>{
    const season = getSeason(props.lat, new Date().getMonth());
    const seasonConfig = SeasonConfig[season];
    return <div>
            <i className={`massive ${seasonConfig.iconName} icon`}/>
            <h1>{seasonConfig.text} </h1>
            <i className={`massive ${seasonConfig.iconName} icon`}/>
        </div>
}

const getSeason = (lat, month)=>{
    if(month>2 && month<9){
        return lat<0?'Summer':'Winter'
    }else{
        return lat<0?'Winter':'Summer'
    }
}

export default SeasonDisplay;