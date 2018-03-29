import React from 'react'
import Link from 'gatsby-link'

import './index.css'

const activeLink = {
  backgroundColor: '#b5efe4',
  color: '#293241'
}

export default ({ children, data }) =>
  <div>
    <p id="name">Ariel Leutheusser</p>
    <nav>
      <Link exact to={`/`}
        activeStyle={
        activeLink}>
        Home
      </Link>
      <Link to={`/research`}
        activeStyle={
        activeLink}>
        Research
      </Link>
      <Link to={`/teaching`}
        activeStyle={
        activeLink}>
        Teaching
      </Link>
    </nav>
    <div>
      {children()}
    </div>
    <footer>
     <p className="heading">Contact</p>
     <p>CUNY</p>
     <p>CunyBox</p>
     <p>email@email.com</p>
    </footer>
  </div>
