import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <div>
    <h1>Checkout my website </h1>
    <p>
      I rebuilt my website using Gatsby ->{' '}
      <a
        href="https://www.maribelduran.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Maribel Duran
      </a>
    </p>

    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
