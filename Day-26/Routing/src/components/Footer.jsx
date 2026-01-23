import React from 'react'
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdb-react-ui-kit'

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="mb-3">MyPortfolio</h5>
            <p className="text-muted small mb-0">
              A showcase of my work and skills in web development.
            </p>
          </div>

          <div className="col-md-3 mb-3 mb-md-0">
            <h6 className="mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-light text-decoration-none">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-light text-decoration-none">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-3">
            <h6 className="mb-3">Connect</h6>
            <div className="d-flex gap-3">
              <a href="#" className="text-light">
                <MDBIcon fab icon="github" size="lg" />
              </a>
              <a href="#" className="text-light">
                <MDBIcon fab icon="linkedin" size="lg" />
              </a>
              <a href="#" className="text-light">
                <MDBIcon fab icon="twitter" size="lg" />
              </a>
            </div>
          </div>
        </div>

        <hr className="my-4 text-muted" />

        <div className="text-center text-muted small">
          © {currentYear} MyPortfolio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}