import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { FcSearch } from "react-icons/fc";



<Header />

export default function Home() {
    return (
      <Navbar className="navbar" expand="lg" bg="dark" navbar-mopie fixed="top">
          <Navbar.Brand className="navbar-brand" href="/">
            <img width="30" src="" />
          </Navbar.Brand>
          <Navbar.Toggle className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="responsive-navbar-nav"
          aria-expanded="false" aria-label="Togglenavigation">
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse className="collapse" id="responsive-navbar-nav">
              <Nav className="mr-auto">
                  <NavDropdown className="nav-item dropdown" title="Movie" id="collasible-nav-dropdown">
                              <div className="col-12">
                                  <NavDropdown.Item className="dropdown-item" href="">Now Playing</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="">Popular</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="">Top Rated</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="">Coming Soon</NavDropdown.Item>
                              </div>
                  </NavDropdown>
                  <NavDropdown className="nav-item dropdown" title="Tv-Shows" id="collasible-nav-dropdown">
                              <div className="col-12">
                                  <NavDropdown.Item className="dropdown-item" href="">Airing</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="">Popular</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="">On the Air</NavDropdown.Item>
                              </div>
                  </NavDropdown>
                  <NavDropdown className="nav-item dropdown" title="Genres" id="collasible-nav-dropdown">
                              <div className="col-6 px-0">
                                  <NavDropdown.Item className="dropdown-item" href="" title="Action">Action</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Adventure">Adventure</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Animation">Animation</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Comedy">Comedy</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Crime">Crime</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Documentary">Documentary</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Drama">Drama</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Family">Family</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Fantasy">Fantasy</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="History">History</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Horror">Horror</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Music">Music</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Mystery">Mystery</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Romance">Romance</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Science Fiction">Science Fiction</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Tv Movie">Tv Movie</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Thriller">Thriller</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="War">War</NavDropdown.Item>
                                  <NavDropdown.Item className="dropdown-item" href="" title="Western">Western</NavDropdown.Item>
                              </div>
                  </NavDropdown>
              </Nav>
              <ul className="navbar-nav">
                <Form className="input-group my-2 my-md-0 mr-md-3" bg="faded" action="/" method="GET" >
                <FormControl placeholder="Search..." type="text" aria-label="Search..." name="s" />
                    <div className="input-group-append">
                        <Button className="btn btn-search focus-no-sh" type="button"><FcSearch className="fa fa-search" aria-hidden="true" /></Button>
                    </div>
                </Form>
              </ul>
          </Navbar.Collapse>
      </Navbar>
    )
  }