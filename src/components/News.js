import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types'

const News=(props)=> {
  const [articles,setArticles] = useState([])
  const [page,setPage] = useState(1)
  const [totalResults,setTotalResults]=useState(0)
 
  const updateNews = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1b7dacbf8e3b4a00896c00e06b826354&page=${page}&pageSize=${props.pageSize}`
    let data =  await fetch(url)
    let parsedata = await data.json()
    setArticles(parsedata.articles)
    setTotalResults(parsedata.totalResults)
  }

  useEffect(()=>{
    updateNews();
  },[])
 

  const  handlepreviousclick = async ()=>{
 let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1b7dacbf8e3b4a00896c00e06b826354&page=${page-1}&pageSize=${props.pageSize}`
    let data =  await fetch(url)
    let parsedata = await data.json()
    setArticles(parsedata.articles)
    setPage(page-1)

  }
   const handlenextclick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=1b7dacbf8e3b4a00896c00e06b826354&page=${page+1}&pageSize=${props.pageSize}`
    let data =  await fetch(url)
    let parsedata = await data.json()
    setArticles(parsedata.articles)
   setPage(page+1)

  }
 
    return (
      <div className="container my-3">
        <h2 className="text-center">NewsBear-Top Headlines from {props.category}</h2>
       
        <div className='row'>
        {
            articles.map((element)=>{
            return  <div className='col-md-4' key={element.url}>
            <Newsitem  title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,99):''} imageurl={element.urlToImage} newsurl={element.url}/>  
            </div>
             })

        }
        </div>
         
         <div className='container d-flex justify-content-between'>
         <button type="button" disabled={page<=1} className="btn btn-dark" onClick={handlepreviousclick}> &larr; Previous</button>
         <button type="button" disabled={page + 1 >  Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={handlenextclick}>Next &rarr;</button>

         </div>
      </div>
    )
  }

News.defaultProps = {
  pageSize:8,
  category:"general",
}

News.propTypes = {
 pageSize:PropTypes.number,
 category:PropTypes.string,
}
export default News
