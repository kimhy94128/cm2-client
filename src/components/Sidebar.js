import React from 'react'
import { BrowserRouter as Router,  Link } from 'react-router-dom'


const menu = [
  {
    href: '/list1',
    title: '리스트1',
    icon: ''
  },
  {
    href: '/list2',
    title: '리스트2',
    icon: ''
  },
  {
    href: '/list3',
    title: '리스트3',
    icon: ''
  },
]

const menuList = () => {
  return (

    menu.map(list => (
      <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={list.href}>
                  <i></i> {list.title}
                </Link>
              </li>
          </ul>
  ))
  )
}

function Sidebar() {
  return (
    <Router>
    <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
      <div className="container-fluid">
        {/* <!-- Toggler --> */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <!-- Brand --> */}
        <Link className="navbar-brand pt-0" to="/">
          <img src="/img/brand/logo.png" className="navbar-brand-img" alt="logo image" />
        </Link>
        {/* <!-- User --> */}
        <ul className="nav align-items-center d-md-none">
          <li className="nav-item dropdown">
            <a className="nav-link" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div className="media align-items-center">
                {/* <%= account.name %> */}
              </div>
            </a>
            {/* <% include ./dropdown %> */}
          </li>
        </ul>
        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          {/* <!-- Collapse header --> */}
          <div className="navbar-collapse-header d-md-none">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="/">
                  <img src="img/brand/logo.png" />
                </a>
              </div>
              <div className="col-6 collapse-close">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- Form --> */}
          <form className="mt-4 mb-3 d-md-none">
            <div className="input-group input-group-rounded input-group-merge">
              <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <span className="fa fa-search"></span>
                </div>
              </div>
            </div>
          </form>
          {/* Navigation */}
          {menuList()}
        </div>
      </div>
    </nav>
    </Router>
  )
}

export default Sidebar
