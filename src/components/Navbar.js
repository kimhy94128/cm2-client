import React from 'react'

function Navbar() {
  return (
<nav class="navbar navbar-top navbar-expand-md navbar-dark" id="navbar-main">
  <div class="container-fluid">
    
    <span class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">타이틀</span>
    
    <form class="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto" action="/users" method="get">
      <div class="form-group mb-0">
        <div class="input-group input-group-alternative">
          <div class="input-group-prepend">
            <span class="input-group-text"><i class="fas fa-search"></i></span>
          </div>
          <input class="form-control" placeholder="Search" type="text" name="q" />
        </div>
      </div>
    </form>

    <ul class="navbar-nav align-items-center d-none d-md-flex">
      <li class="nav-item dropdown">
        <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <div class="media align-items-center">
            <div class="media-body ml-2 d-none d-lg-block">
              <span class="mb-0 text-sm font-weight-bold"> 님 환영합니다</span>
            </div>
          </div>
        </a>
        {/* <% include ./dropdown %> */}
      </li>
    </ul>
  </div>
</nav>

  )
}

export default Navbar
