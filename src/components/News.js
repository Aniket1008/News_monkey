import React, { useEffect , useState } from 'react'
import NewsItem from './NewsItem'
import Loader from './Loader'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

 const capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1)
  }



    const updateNews = async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6d93827683a049eba178e597bd370207&page-1&pageSize=${props.pageSize}`
      setLoading(true);
      let data = await fetch(url);
      let parsedata = await data.json();
      setArticles(parsedata.articles)
      setTotalResults(parsedata.totalResults)
      setLoading(false)
    }

    useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`
      updateNews();
      //eslint-disable-next-line
    }, [])
    


  //  const handlePrevClick = async ()=>{
  //   setPage(page-1)
  //   updateNews()
  //   }

  // const  handleNextClick = async ()=>{
  //   updateNews()
  //   setPage(page+1)
  //   }

    const fetchMoreData = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6d93827683a049eba178e597bd370207&page=${page+1}&pageSize=${props.pageSize}`
      setPage(page+1)
      let data = await fetch(url);
      let parsedata = await data.json();
      setArticles(articles.concat(parsedata.articles))
      setTotalResults(parsedata.totalResults)
    }
    
    return (
        <>
        <h1 className='text-center' style={{margin:'35px 0px', marginTop:'90px'}}>
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
          {loading && <Loader/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loader/>}
        >
          <div className="container">
        <div className="row"> 
            { articles.map((element)=>{
            return <div className="col-md-4 mb-2" key={element.url}>
            <NewsItem  title={element.title} discription={element.description} imgUrl={element.urlToImage}
            newsUrl={element.url} author={element.author} date={element.publishedAt}  source={element.source.name} />
            </div>
            })}
        </div></div>
        </InfiniteScroll>
        </>
    )
}


News.defaultProps = {
  country : 'in',
  pageSize : 8,
  category : 'general'
}


News.propTypes = {
 country : PropTypes.string,
 pageSize : PropTypes.number,
 category : PropTypes.string
}

export default News























// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Loader from './Loader'
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {
//    static defaultProps = {
//      country : 'in',
//      pageSize : 8,
//      category : 'general'
//    }


//    static propTypes = {
//     country : PropTypes.string,
//     pageSize : PropTypes.number,
//     category : PropTypes.string
//   }

//   capitalizeFirstLetter =(string)=>{
//     return string.charAt(0).toUpperCase() + string.slice(1)
//   }

//     constructor(props){
//         super(props);
//         this.state ={
//             articles:[],
//             loading:false,
//             page:1,
//             totalResults : 0
//         }
//         document.title = `${this.capitalizeFirstLetter(props.category)} - NewsMonkey`;
//     }

//     async updateNews(){
//       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6d93827683a049eba178e597bd370207&page-1&pageSize=${props.pageSize}`
//       this.setState({loading:true});
//       let data = await fetch(url);
//       let parsedata = await data.json();
//       console.log(parsedata);
//       this.setState({
//         articles:parsedata.articles , 
//         totalResults: parsedata.totalResults,
//         loading:false
//       })
//     }

//     async componentDidMount(){
//       this.updateNews()
//     }
    
//     fetchData = async () =>{
//       this.setState({page : this.state.page+1})
//       let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=6d93827683a049eba178e597bd370207&page-1&pageSize=${props.pageSize}`
//       this.setState({loading:true});
//       let data = await fetch(url);
//       let parsedata = await data.json();
//       console.log(parsedata);
//       this.setState({
//         articles:this.state.articles.concat(parsedata.articles) , 
//         totalResults: parsedata.totalResults,
//         loading:false
//       })
//     }


//     // handlePrevClick= async ()=>{
//     //   this.setState({page:this.state.page - 1})
//     //   this.updateNews()
//     // }

//     // handleNextClick= async ()=>{
//     // this.setState({page:this.state.page - 1})
//     // this.updateNews()


//     // }
    
//   render() {
//     return (
//         <>
//       <div className='container my-3'>
//         <h1 className='text-center my-3'>NewMonkey - Top {this.capitalizeFirstLetter(props.category)} Headlines</h1>
//         {/* {this.state.loading && <Loader/>} */}
//         <InfiniteScroll
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Loader/>}
//         >
//           <div className="container">
//         <div className="row"> 
//             {!this.state.loading && this.state.articles.map((element)=>{
//             return <div className="col-md-4 mb-2" key={element.url}>
//             <NewsItem  title={element.title} discription={element.description} imgUrl={element.urlToImage}
//             newsUrl={element.url} author={element.author} date={element.publishedAt}  source={element.source.name} />
//             </div>
//             })}
//         </div></div>
//         </InfiniteScroll>
//        </div>
       
//        {/* <div className="container d-flex justify-content-between mb-4">
//             <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
//             <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
//         </div> */}
//         </>
//     )
//   }
// }

// export default News