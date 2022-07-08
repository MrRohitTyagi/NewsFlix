import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const NavBar = () => {

  const [InpValue,setInpValue] = useState('');

 
  let UniversalSEarch = async () => {


    console.log(InpValue);

  }

    return (



      <>


        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ backgroundColor: "lightyellow" }}>
          <div>

            <img style={{ textAlign: "center" }} src="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png" height="25px" alt="" />
            <a className="navbar-brand mx-1" href="/">News Flix</a>
          </div>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <Link to={"/sports"}><li className="nav-item active mx-1"><div href='/'>Sports</div></li></Link>
              <Link to={"/business"}><li className="nav-item active mx-1"><div href='/'>Business</div></li></Link>
              <Link to={"/entertainment"}><li className="nav-item active mx-1"><div href='/'>Entertainment</div></li></Link>
              <Link to={"/health"}><li className="nav-item active mx-1"><div href='/'>Health</div></li></Link>
              <Link to={"/science"}><li className="nav-item active mx-1"><div href='/'>Science</div></li></Link>
              <Link to={"/technology"}><li className="nav-item active mx-1"><div href='/'>Technology</div></li></Link>

            </ul>


            <div className=" form d-flex">
              <input value={InpValue} onChange={(e) => setInpValue(e.target.value )} className="inp  btn mx-4" type="search" placeholder="Search" aria-label="Search" />
              <button onClick={UniversalSEarch} className="btn btn-outline-success" ><Link to={`Custon${InpValue}`} >Search</Link></button>
            </div>
          </div>
        </nav>

      </>
    )
  
}

export default NavBar