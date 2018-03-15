import React from 'react'
import Link from 'gatsby-link'

export default ({ children, data }) =>
  <div>
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
    </nav>
    <div>
      {children()}
    </div>
  </div>
