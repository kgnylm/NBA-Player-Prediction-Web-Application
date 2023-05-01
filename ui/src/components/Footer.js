import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <span className="text text-light">© 2023 Kağan Yalım-</span>
        <a
          href="https://github.com/kgnylm"
          target="_blank"
          rel="noopener noreferrer"
          className="text text-link"
        >
          Github
        </a>
      </div>
    </footer>
  )
}

export default Footer
