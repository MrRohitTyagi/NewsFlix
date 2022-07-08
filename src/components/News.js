import React, { useState, useEffect } from 'react'
// import data from '../sampledata.json'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import axios from 'axios';

// export class News extends Component {
const News = (props) => {

    const [allarticles, setallarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    let [totalArticles, settotalArticles] = useState(0);
    const key = 'Your KEY'






   


    useEffect(() => {
        //eslint-disable-next-line

        async function material(){

            const options = {
                method: 'GET',
                url: 'https://free-news.p.rapidapi.com/v1/search',
                params: { q: props.customurl, lang: props.langg, page: '1' },
                headers: {
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
            }
        };
        
        
        setloading(true)
        let res = await axios.request(options)
        console.log("effect");
        console.log(res.data);
        
        setallarticles(res.data.articles)
        settotalArticles(res.data.total_pages)
        setloading(false)
    }
    material()
        
        
    },[])
    


    const handleNext = async () => {
        const options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: { q: props.customurl, lang: props.langg, page: page + 1 },
            headers: {
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
            }
        };
        setloading(true)

        let res = await axios.request(options)

        console.log(res.data);



        setallarticles(res.data.articles)
        setpage(page + 1)
        settotalArticles(totalArticles)

        setloading(false)
    }
    const handlePrev = async () => {
        const options = {
            method: 'GET',
            url: 'https://free-news.p.rapidapi.com/v1/search',
            params: { q: props.customurl, lang: props.langg, page: page - 1 },
            headers: {
                'X-RapidAPI-Key': key,
                'X-RapidAPI-Host': 'free-news.p.rapidapi.com'
            }
        };
        setloading(true)

        let res = await axios.request(options)

        console.log(res.data);



        setallarticles(res.data.articles)
        setpage(page - 1)
        settotalArticles(totalArticles = props.pageSize)

        setloading(false)
    }






    return (

        <>
            <h1 className='heading1' style={{ textAlign: "center" }}>NewsFlix Top {props.headline} Headlines</h1>


            {loading === true && <Spinner />}
            <div className='allnews'>

                {

                    loading === false && allarticles !== undefined ? allarticles.map((ele) => (


                        ele.title !== null && ele.description !== null ?

                            <div className="percard" key={ele._id}>
                                {/* {console.log(ele.description)} */}

                                <NewsItem content={ele.summary} source={ele.rights != null ? ele.rights.length > 50 ? ele.rights.slice(0,45):ele.rights : "NA"} title={ele.title !== null ? ele.title : null} description={ele.summary !== null ? ele.summary.slice(0, 170) + "..." : null} Imageurl={ele.media} url={ele.link} publish={ele.published_date} />
                            </div>
                            :
                            <div key={ele._id} style={{ display: "none" }}></div>



                    )) : !loading && <div className="alert alert-success" role="alert">
                        <h4 className="alert-heading">Nothing to show here !</h4>
                        <img src="https://i.gifer.com/ZOsv.gif" alt="" height='200px' />
                        <hr />
                    </div>

                }
            </div>

            {loading == false &&

            <div className="flex btns2">

                <button disabled={page <= 1} onClick={handlePrev} className='btn pagebtn btn-success  mx-4'>Previous Page</button>
                <button disabled={totalArticles - page <= 1} onClick={handleNext} className='btn pagebtn btn-success mx-4'>Next Page</button>
            </div>
            }

            {/* {console.log(this.state.totalArticles)} */}
        </>
    )

}

export default News
