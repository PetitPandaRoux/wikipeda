import React from 'react' 
import headerStyle from "./header.module.css"

export default (props) => (
  <h1 style ={headerDivStyle}>{props.headerText}</h1>
)

const headerDivStyle = {
  color:'grey',
  margin : '2rem auto 2rem auto',
};
