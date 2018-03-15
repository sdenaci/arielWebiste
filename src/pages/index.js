import React from 'react'
import Link from 'gatsby-link'
import cv from './cv.pdf'

export default () =>
  <div>
    <img src='/ariel.jpg'/>
    <h1>Ariel Leutheusser</h1>
    <h2>Ph.D. Candidate, Comparative Literature at CUNY Grad Center</h2>
    <a href={cv}>Download CV</a>
    <h3>Bio</h3>
    <p>Ariel is the coolest grad student there is and has a ton of cool interests. They know a ton about Creative Non-Fiction and also German and French and also Truman Capote. Also cooking very chill foods.</p>
    <h3>Research Interests</h3>
    <ul>
      <li>Non-Fiction</li>
      <li>German</li>
      <li>French</li>
    </ul>
  </div>


// I think I'd want it similar to Logan's, with "home" with a bio and list of interests and picture, a "research" tab, and a "teaching" tab - no grants and awards tab as we determined that was dork
