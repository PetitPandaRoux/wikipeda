import React from "react"
import { Link } from "gatsby"

import Header from "../components/header.js"

export default () => (
  <div style={{ textAlign:'center'}}>
    <Header headerText = "WIKIPEDA"/>
    <Link to = "/contact/">Contact</Link>
    <br/>
    <Link to = "/blog/">Blog</Link>
    <br/>
    <p>Un site de collaboration sur les déroulés pédagogiques!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </div>
)