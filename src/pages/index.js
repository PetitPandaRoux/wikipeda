import React from "react"
import { Link } from "gatsby"
import Header from "../components/header.js"

export default () => (
  <div style={{ color: `purple`, fontSize: `16px` }}>
  <Header headerText = "Welcome page"/>
  <Link to = "/contact/">Contact</Link>
  <h4>Enfin ça marche!</h4>
  <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)