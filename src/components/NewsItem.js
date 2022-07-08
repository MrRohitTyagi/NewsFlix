import React  from 'react'
// import data from '../sampledata.json'

// export class NewsItem extends Component {
    const NewsItem = (props)=>{
    
        let { title, description, Imageurl, url, publish, source} = props



        return (


            <div className='percardclass' style={{ position: "relative" }}>
                

                <span className="mybadge badge badge-danger">{source}</span>

                <div className="card mycardc" style={{ width: "20rem" }}>
                    <img src={Imageurl} height="150px" className="card-img-top" alt="Broken Link" />
                    <div className='text-center my-1'>Published at : {publish}</div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                    <a rel="noreferrer" target="_blank" href={url} className="btn btn-sm btn1 btn-primary">Read More</a>


                </div>
            </div>
        )
    
}

export default NewsItem