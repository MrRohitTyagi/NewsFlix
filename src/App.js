import React, { useState } from 'react'
import News from "./components/News"
// import NavBar from './components/NavBar'

import "./App.css"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'



const App = () => {

  const [inputValue, setinputValue] = useState('');
  const [lang, setlang] = useState('en');
  const [Langtitle, setLangtitle] = useState('English');


  const UniversalSEarch = async () => {


    console.log(inputValue);

  }

  const topFunction = () => {


    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  const DownFunction = () => {


    document.body.scrollTop = 100000;
    document.documentElement.scrollTop = 100000;
  }
  const handleLanguage = (l) => {

    setlang(l)
    setLangtitle(l === "hi" ? "hindi" : "English")


    console.log(lang);
  }
  


  const changemode = (l, d) => {
    console.log(d, l);

    let r = document.querySelector(':root');
    
    
    r.style.setProperty('--bgdark', d);
    r.style.setProperty('--bglight', l);
    r.style.setProperty('--col', d === "#c0c0c0" ? "black" : "white");



  }
  const changemodegrad = () => {
    

    let r = document.querySelector('.allnews');
    let c = document.querySelector('.mycardc');
    r.style.background = "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"
    
    




  }


  return (
    <>

      <BrowserRouter>
        <>




          <nav className="navbar fixed-top stickyNav1 navbar-expand-lg navbar-dark bg-dark" style={{ backgroundColor: "lightyellow" }}>
            <div style={{ display: "flex", alignItems: "center" }}>

              <img style={{ textAlign: "center" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVkAAACSCAMAAADYdEkqAAAAkFBMVEX39/f/AAD3+Pj2///3/f336+v/FRX38vL7mZn+PDz+MjL5x8f/Dw/37u740tL429v44eH+ODj6tLT7nZ37h4f9WVn6srL7lJT+SEj+QkL5wcH5ubn42Nj44+P5y8v8dnb9VVX9YWH+JCT6rKz8cXH6pKT8gYH7jo76qKj8hIT9Tk79X1/8bW39WFj+ICD8e3toQcckAAATnElEQVR4nO2dWWMiKxCFFXCJGjVmMSaaRJ2ZmGWS///vrm03UMApoM3ofenzNBOxl0+6qCoKutVq1KhRo0aNGjVq1KhRo0aNGjVq1KhRo3yJUHXa8s1x4/iXMg8ZO1m0ceT0qVMrJUspxQPCl0S0Pwr4PgepaB2eLA4W3kGKPPsx+iJqHDl+/MxKdZ76z++Dr83ic/7QUQo1ciVfri5CLV4++8OW9E6iblHbfev371nPbyz/4saVBo/hxQmhT3D1gi5dLDf6jJfO2dTSHrg7LD8SU934qqcbi8uBPv3QO4HaVR8NpiF0JR8+Rm2i20eZZCsHbVafY7crqiu+bft5pbIPXGgGyI7tx0/oeTWfjxyyagqOKybmT5Zsx/xt1HJPoK71JxP/zEI9fgWX352lbEIcwJvzdXURZbV1uq2M/QxtSFZ+24//gD5hyXYpWbUiNz6TunGcbPtGOsfmyarVC7yBj0682ya61gs1Owmy7Rt6qvpkRYt+3gOWG5IVHfKgGrBJsu2xcwEsWfXA3sI4ijb10L6Sb6fItn+TxvXJqhn9HNlhRFb0yInu7JeSZBdOp+XIyrvIPUTRpsjSEyXJ0sZHkHWeuhfpfw7Jiha5gRn5TpKs0w84suoxehOriK1NkiWdNk321t5abbJi6jYIrxqQFa13+407esg0WecMmKxautc02rhj2XtkGLNk5+OnSg/X5HIHFpYl2zdtn4bbNTnV0pzJkh3cA108+GTVq3sX/dAQB2SFuCdgnV6eQZb0A0xWtDaE6s1YFIHCtE/o7nh7YMnOpPX8qdm2Q4kl+2jaFmHC0p7q2pzJkt37fkDBjy27LtlB0CQgK9SagHVvMoNsm/y6kKya27afHSmqk/Z+Wdx8wErIOiO7NdwrQNZ9lIk/+QnIAv8KKByDxymyLljPLueQ/SK9BpAVK9v0mriUQt7Y07I3x5AVLdODpkmyLfmhP7g/mqz8rJovtBP17I9hHllB/d/gDnPItt/MKRBZAvDNtTTKGKF1XbItaSh20mTVb/3BANjZLLL2preGl+/SumSF/EPABp5EFlnrNwGyomeaXXiWyY5s3UvOHLBkNRhiSXiyxhNdHNtn1VY3Xw25L7pkJTGCW+CiZZFd6LsDZIl/7WcZCIowzaABpKzBGvkGPlljldfHkjXNX2RPD4h+WsYhmwCbIGvCtuvqq4js2vAPjq929y8HLVCCo7wjZgQzHjIdP1my5rLejiQrzOO1VepZ/9tzaSlZuSNgYWIsSvbb3HZl7EKywvzCbkxR3XKVrPVTfFaUrPWk5JP+6y2Mbv0R7Db8HeJel3898s1iUObkc8+RsmRbxnjgHpsi+2rO8aE4svYAsVCLlSX7ezWttHzU43S72yEHTXtd3R4Ywf7M7gJ5z5DoaZd877YJoZ/VAUd2Q8B+Q7AJsjfWnSkTFCFZa+K+IrMsOWSR7p1MGYkUbP/ed/CliVRI3BSPbr89c+IYH2W8HXfkoPlboiW0NimydjA7ZGoBWWPIP7Lcxjpku7+9zLchez1Zlposn+5MB29vSDo5TvYPY04Ovrsl+J1DNgzWMsgq6yn+kZis8f7oVRj7anQM2dHzuE7mu/1F7VEdsjbYOdylEOa7jkvLkMX2IEW2JRf6P08KkZVr/RealLLBgxaHNpHrWvfy87Ou6ahD1t5WaX9tcsZ1BRmy7SC7k0NWmaMVSSdA9q/+S/8UZNujaWYW8eLBdUBqkBUt3XZT/tn6YPf0ulmybRAIJcmS4HWP7vxk2xuU6wK6mvecnlOHrCGmnzt7VTRbypMF0XuaLMmNrMQprcG219GaPpCQ3NrvlJ0dY2uwuA30cu00NaGBGT3MfVKX1iP7TWZ3rmvmDQ5Tdja99iIzR7CjyM4cT2plk99mXErOKeAR7DEYTqV0jYFuea9jCmmGtAGtw3DIPit1a/839XttBlkSvz7KiNf198dknQuz6XTTbSzZm0etWZ/MXr3DGcZUdGtd8pf+XMtElsSldcg+S0ETLAOvfiCLrLjU/+/2QrJ2CsweW82/BqUMnrpkyQNp8hF0TsEGqnJiTTVJVtcgi+fzK/2yV07J/ir8QUVCsbdame9qAt86tW/mUCa6tfl8OwclWr1SwrSvTZbchsm04ehWdcxIQJLV2WT9mUVfNr4ml/RcOiJ2lAlcryyyQhmjZ45kMzIGzSv5dSvZREd9svaGO3GyNPGNotsEWTrZhGRnC8LqI/s4BznoLLK0lU+2pcx015dvaiiLn5BdJciS+7NjWDZZGQdLjDeYFaf1AG6FQh7ZlvRmjClZk4IP04jW4z7Czpo8W7LPkqkdNCseJ0uun5HJ2qNKDjrJuHPCijyyNssWkBXKziZ3vE4r7fRtbbJk+i5hZ/cfGKOD8rMJsgQNlnHUYY1Mj7SkWa9MsuEva2MTa+XaF+6cnCQTzTXJCmlPCHwD1o+YQbKRymTiOQ1d9fXfTXoU1nVRe0CzXrlknVHQJUtmFdr3l/bYwk4MZJGlDr1YEfNj4iWerLm7HSBrU+pEk+oZt/3i25t6sJWJ2qXFtYjkwSxTZTXJOrWMbbeSg1Z1bXtFHXxRudJxwoU02ZfvZ631gn4VxGCsh4ZqZLCq4Mo28+dHTQGCKQ9hqjypPbDWKJtsS5EpNZes258337PhePywWzvNj8/IkMidJ2v8iJtssuV8tB1jgyCKGEDtYzGVybS6xhrgbLIkU1vIyQH1kniOJ3uRUW9gM9fPNclah/vGv0LRM09pNTnLkCWOJ8l61SArnIpDt8pz1U7pWLJX5B54spcawm09smSMWHpdliabLmSUrGgRS6ldzxpkXafWrUxWKw7QTWWtjiT7Qb0NnqxJXXfNCJpF1g4RGzClb81BebccWdceVFmvOmSFIHWQfjX9JcmoEa11duwost48AUuWWPppLbLSJGOuQ7LkfqvUFEe2RUu8rkqDXYes49T6K0CEnIVLa/ZOtv4OS9YPQYxG30/COz8XVRDfyYaN7IFLFb4BcWaDtUItGqyMDnBIRsYj69iDMlEdJ+sv3VF2Ajq8EmVTjPrih8rkMDmy6ncf6Ho2vAxXMYpd9fHcN4qiM9dfjR/YaneY/p6T/wUSE/3x/OD5iZX+/7VfpqiW5gL6r2VxLbkkG7BVf5v7c5Li0pzKD2SLT5UcfpsHdvM5PGTuxfWhPRthonpsWJNN2wYfCuvgpw5MG4Kv4aMK+H/YNNaYP1/k0OXdSNFZPtzttg/Tnp4RiVx5oxoqlxkUYdj/fSWNGjU6p8pn30w1F0agsQI/194XaK3Gs/7N8/rl/v797+fbfPu06qFdHCICxQB8JXNYiecXD1SXho+aoeQxMs6UdzEcpT3WyW4N4pzBx+9JDbgSxBdOGsYB+wc1DtdHOIm9WrJzWeIJNrj34mo08esnNfCpgN9a3KIa34zwFwp99ad8/bxHFke3fRhZgAqRQoBs5OKisgs23TX5Rl03RoBr5F1mTDUY3PVDqdkCtib6XOax5fIGYerpzGRJTsGRu2bAX6x7kBtguYv7jcJlvcXmG13Y1tPnKic84MjeI4NyVrKqD1u4+x74k1gHuXPYuRfdUp1osQ7VLKPbsrkuZA/OSlYsYQs3TofFCmvn0tUHatMOijMk7ttYv9I+GJ9FBIvzzksWD4MONjw6DeiVOyvpre79jiP9fFZcL2HZTDZZYA/OSpapROhSJMwmL9QWCzzf4pvZsFYmoUUKbSTz/TtcE3lestjQOivUcEejq82YGhxvQZrcwlYxrROubWxOIbAH5yXLuEuUCRzA3AkKDH/kTfewdfoRvXI57zTZwOU7M1l8FLrKVuAq9GfShBZ6WP11LlmoxAQI1g92lfLtwXnJktUtVKRGl7GhzqpSfIOumWWMSkpXUQchPnfrLeU9M1l8w6Rkn4mA6QI9JrZ9cuoNejDET4vf6iRJ1rMHZyaLPVpiItm+Zm0xY6ydgV3VH75KfcUGsUS9wd1R4cy/Ios9WrJl0DNsQG0xjm3fHTMn31GbHKHFk5lkXXtwZrKMR0sqSbmBxy4bwem5vmsMmKNcvD6OJ5PxwzW094Viq8hTZJ3Vgacn63Ym/LSb+JZJh7WLHXXMIWCFi+PNcntKzsRhJqGYW1hxDwe7P09GxRy1Bz8lezFJaZWRADT9mh3A2iMdTuDBaeSkIpmIZOfs0MUkFcC+mNlkaczzU7ILWPwNKsGjxxmZGvQd+LSUToJiv+zWuWDs8Xp+kcS3/vYTssQe/AOy7IXgq4MWTv/WDJJCegjDT7rrzWYlghljfMXHYWmypMefnSw2tNoZVXz+X9dtxQ9QtcGugfegKzyM/aTPEntwdrLYo60y2/4CAyo9XYYTC26aSt2jNu2uu9u06F0i8deeQ9ZsI3l+svAZ/OUXKgNV8KBf5jogXJ9tb56cmdqMcaE2WfNgwFmnU5LFHu19tSyHH8BMLXOwXV8hLzfLJMz2+ngS9UoMnMPmkNVeCrNE9pRkkZ2s4lu7vg9o5tUyU3nbrzJz/QddvI6lPK5ILoustgdkUR/VCcliNGWHlLGNLMohTKH9z0de8S1sRPRrO23VLI/JJ1sFyMw1ZJO9j1XHwFEWH+nQIYWIXXA5zyVRd7z1zsRMZVINPrfTun03k2yZl2PiwH8T3b5CtBJFp4eS/TiQcjtkuClFUGmQWq1e6XO7qmN2c8kedhtjwsl/QxaXpUMDdKhRYio0tCaHRVGoMiPY1zRmaF0tbsbZdiGX7MEeMH7OKcnininTPAp/Bse2waQr2D4ioptlXgV9NtliXwrmATwpWejRFpGnn1X1Qt3CYkDr9R4GpGRlTY7eH3M6bjbZYjEQs+XLKclij3b/AIlLL4vlWapinIJeIirogm5vRF93ItlvIVnM5UkxM3qnJYs82msVPMLv3oRXsT85jAGClwm0EkEH1GKcKu3CfRaeqLv/bWGt3knJQtv+KYM3ytz47m1HwOJg35utMMSiDqybhA+GyS5hGPsmg01XDjotWTS+7+NbP9Ke+R30UcGH3Pdmq7PUNLWF3uFvlCA7VPDPT/jPJyWLPdqO8F3ViV/yNlfQSQQLfEu0ONsU0ya6/zcm+yih57qRMCN6WrLQ0C6Fcv/wdekXcN1KONvN7dIvom8Cwwp2u0iT3Sk8OzGH6d/TkoWu3tbf0uFd+TUbGyHRvCAPQ3VwpW1Et1lvsaLqK1x2Ojq/ncUztDfSc1X/qJb0TjpFiVfgzdozqWG2D1oJvsohRrbYrJmdGA10WrLQj3+Xnqs6U2RLn+qyWuAqGDOrTyWHbG0BFj+KYbLFFgH0TUZxnZosMrT+uLYUwex2H7kGyJt1TqYmr1nLQPRJ2F8Kky3mQ4TILX08MVno0U69696bL38I+wViW+zNuqdTcvyaXLukxQ9imOxhJjy9Y2GlU2YRi6O1QCfyYpliDx8/QrwCsS32ZkO4YnXHlcV4Yh8CTLasQYR5Y6D8OYVORBGLBcZsb3Aqd0T3ojAwJxs3sw5cKVez5+Q7PXlzgMmWc3g4vRnqH9XIsHeZUTh8GKP5qUIj9p1TDF2xeniLG8U152xgspX1yLQHJ5wHKw+Xnk45VBtl/ALJtUb+qQ/7IG7xxlIHbeqR1ZsEQ1870MnJsjWHWuUrodIdIebNRs6v1Ipf1FRzv67K6IlWTp35qcmmM9NlSQy3KtwKmVm6tw+7QZGQl1yAdhzZ2PvKrU5PNvWYV+8E8qOwQGAgF52HYaiHYMWWwJW4R5PNsgcnJxutMypUFfn6UZgv5M0yfSes5uYW8hxLNsc1PT1Z5NFSVX2RqTE2QsXv3PAY/AhCQFTdY8nm2IOTk4UeLVV13FSuA5pZpiDEf/MFN+YES6OzySYfsX9b843RM2VPWvqt8qmZQujNcnOsQ3+ZITZJ3/UiBUo2bQ/y1yms0JbfruBVJjxaXYccRGGuRtCbZScTHp0aT7XCEQObR0yTDebyAv3DtTVMWi7h0Zp92+NR2At8cHkTsp5IvbpGqi1j6tEmpLlkk/bg9GQTHq1xpuLuGU4aiBaf7r6YP0xWq8nwN7sigtklKpNsygM/B9kYspEt949GYUxa6sj1zKX4TVJzyKbswRnIRg2t3cMrOoRxudl4uWhCeNevbLKJV6Ccg2wszCavEJMRxxe8rLG6u2NXNDtbAhxHNr5p3BnIRj1aMjzHhgQ+N8sFrmnxXTaTbLzi/BxkYx4tcVNjURifm61dMacVmbrNJRv1Z85BNlbjSl+CyUdh2JutfpD8iWqqz1hSMpds7Gc9C1neo6W558hlYm9Wo0357EjxjaVyycaK189BNuLR0teKR6Kw+BSYrI82sWNXNtmImT8PWdbQOtsg8lYrUWlQ2yDcJibY88nyD9pZyPIerYOMdfuTlQaqU2vTk/lxlcnw/li37zxk2Q2KHM+HjcJiG5NUZxCJ9C7RIL5XV02yrD04C1n2OV+4S7q5Jyuj0kDITl598uAOrws8mix31echyxlaz/XhorCsSgOhJmm2F7NWTj2IvBh1Q3F5kW0bNQ4uev/koqPmiCe792jhF3bube6jMNBqtMmsNBCyd433Oyi1eJ1mrrUTl7AUiGud2zhWZhRX5FKzqpZEDzfLnicSSk13sOcOvu+mNdaH1qsEym2cMS1TZ7YmetCjWsWZKCk7w93r5+17oZf1r9fdw0SFb59qdIToK0DKl4D831fUqFGjRo0aNWrUqNGJ9R8kClG/S8gsnwAAAABJRU5ErkJggg==" height="25px" alt="" />
              {/* <img style={{ textAlign: "center" }} src="https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png" height="25px" alt="" /> */}
              <a className="navbar-brand ml-1 mr-4" href="/">News Flix</a>
            </div>

            <div className="dropdown" >
              <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

              </button>
              <div className="dropdown-menu dpm " aria-labelledby="dropdownMenu2">


                {/* //d       l  */}
                <div onClick={() => changemode("#333333", '#43302e')} className="nav-item active mx-2 my-2 Mode black "></div>

                <div onClick={() => changemode("#f5f5dc", "#c0c0c0")} className="nav-item active mx-2 my-2 Mode white "></div>

                <div onClick={() => changemode("#014421", "#228b22")} className="nav-item active mx-2 my-2 Mode green"></div>

                <div onClick={() => changemode("#002147", "#003366")} className="nav-item active mx-2 my-2 Mode navy "></div>

                <div onClick={() => changemode("#32174d", "#4b0082")} className="nav-item active mx-2 my-2 Mode  indigo"></div>
                
                <div onClick={() => changemodegrad("#32174d", "#4b0082")} className="nav-item active mx-2 my-2 Mode  grad"></div>

                



              </div>
            </div>


            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <Link to={"/bareilly"}><li className="nav-item active "><div ><strong>Bareilly News</strong></div></li></Link>
                <Link to={"/gaming"}><li className="nav-item active "><div >Gaming</div></li></Link>
                <Link to={"/food"}><li className="nav-item active "><div >Food</div></li></Link>
                <Link to={"/job"}><li className="nav-item active "><div >Jobs</div></li></Link>
                <Link to={"/entertainment"}><li className="nav-item active "><div >Movies</div></li></Link>
                <Link to={"/sports"}><li className="nav-item active "><div >Sports</div></li></Link>
                <Link to={"/stocks"}><li className="nav-item active "><div >Stocks</div></li></Link>




              </ul>


              <div className=" form d-flex">

                <div className="dropdown">
                  <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {Langtitle}
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link to={"/hi"}><button className="dropdown-item" onClick={() => handleLanguage("hi")}>Hindi</button></Link>
                    <Link to={"/en"}><button className="dropdown-item" onClick={() => handleLanguage("en")}>English</button></Link>

                  </div>

                </div>

                <div className="flexbuttons">

                  <input value={inputValue} onChange={(e) => setinputValue(e.target.value)} className="inp mx-4" type="search" placeholder="Search news" aria-label="Search" />
                  <div>

                    <Link to={inputValue} ><button onClick={UniversalSEarch} className="btn btn-outline-success" >Search </button></Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* <NavBar/> */}
        </>


        {/* Unique keys are used to reload the  page  when tap on the catagory tab to load the respective news lang={lang}  */}
        <Routes>


          <Route exact path='/bareilly' element={<News langg={lang} headline="" key="9" pageSize={25} catagory="general" country="in" customurl="bareilly" />} />

          <Route exact path='/' element={<News langg={lang} headline="" key="1" pageSize={25} catagory="general" country="in" customurl="indian" />} />

          <Route exact path='/hi' element={<News langg="hi" headline="" key="10" pageSize={25} catagory="general" country="in" customurl="india" />} />

          <Route exact path='/en' element={<News langg="en" headline="" key="11" pageSize={25} catagory="general" country="in" customurl="india" />} />


          <Route exact path='/sports' element={<News langg={lang} headline="Sports" key="2" pageSize={25} catagory="sports" country="in" customurl="sports" />} />


          <Route exact path='/food' element={<News langg={lang} headline="Food" key="3" pageSize={25} catagory="business" country="in" customurl="food" />} />


          <Route exact path='/entertainment' element={<News langg={lang} headline="Movie" key="4" pageSize={25} catagory="entertainment" country="in" customurl="movies" />} />


          <Route exact path='/gaming' element={<News langg={lang} headline="Gaming" key="5" pageSize={25} catagory="health" country="in" customurl="gaming" />} />


          <Route exact path='/job' element={<News langg={lang} headline=" Job" key="6" pageSize={25} catagory="science" country="in" customurl="job" />} />


          <Route exact path='/stocks' element={<News langg={lang} headline=" Market" key="7" pageSize={25} catagory="technology" country="in" customurl="stocks" />} />


          <Route path={"/" + inputValue} element={<News langg={lang} headline="" key="8" pageSize={25} catagory={inputValue} country="in" customurl={inputValue} />} />
        </Routes>



      </BrowserRouter>


      <button onClick={topFunction} id="myBtn" title="Go to top">↑↑↑</button>
      <button onClick={DownFunction} id="myBtn1" title="Go to top">↓↓↓</button>

      {/* <News lang={lang} pageSize={25} catagory="health" country="in" /> */}
    </>
  )

}

export default App
