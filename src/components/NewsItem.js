import React from 'react'


const NewsItem = (props) => {
    let {title , discription ,imgUrl,newsUrl,author,date,source} = props

    return (
        <>
      <div className='my-5'>
        <div className="card" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning text-dark" style={{left:'90%', zIndex:'1'}}>{source}</span>
        <img src={!imgUrl ?"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/06/messi-apple-scaled.jpeg?fit=2560%2C1729&quality=50&strip=all&ssl=1":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className='card-title'>{title}</h5>
            <p className="card-text">{discription}</p>
             <p className="card-text"><small className="text-primary">By {!author?"Aniket":author} on {new Date(date).toGMTString()} </small></p>
            <a href={newsUrl} target="_blank" rel='noreferrer' className='btn btn-sm btn-dark'>Read more</a>
        </div>
        </div>
    </div>
    </>
    )
}

export default NewsItem





// import React, { Component } from 'react'


// export class NewsItem extends Component {
//   render() {
//     let {title , discription ,imgUrl,newsUrl,author,date,source} = this.props

//     return (
//         <>
//       <div className='my-5'>
//         <div className="card" >
//         <span className="position-absolute top-0 translate-middle badge rounded-pill bg-warning text-dark" style={{left:'90%', zIndex:'1'}}>{source}</span>
//         <img src={!imgUrl ?"https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2023/06/messi-apple-scaled.jpeg?fit=2560%2C1729&quality=50&strip=all&ssl=1":imgUrl} className="card-img-top" alt="..."/>
//         <div className="card-body">
//             <h5 className='card-title'>{title}</h5>
//             <p className="card-text">{discription}</p>
//              <p className="card-text"><small className="text-primary">By {!author?"Aniket":author} on {new Date(date).toGMTString()} </small></p>
//             <a href={newsUrl} target="_blank" rel='noreferrer' className='btn btn-sm btn-dark'>Read more</a>
//         </div>
//         </div>
//     </div>
//     </>
//     )
//   }
// }

// export default NewsItem