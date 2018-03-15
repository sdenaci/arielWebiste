import React from 'react'
import Link from 'gatsby-link'

import './index.css'

export default ({ children, data }) =>
  <div>
    <p id="name">Ariel Leutheusser</p>
    <nav>
      <Link to={`/`}>
        Home
      </Link>
      <Link to={`/research`}>
        Research
      </Link>
      <Link to={`/teaching`}>
        Teaching
      </Link>
      <Link to={`/contact`}>
        Contact
      </Link>
    </nav>
    <div>
      {children()}
    </div>
  </div>
