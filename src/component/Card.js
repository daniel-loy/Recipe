function Card(props) {
    console.log(props.title.urlToImage)
    return (
      
        <div style={{ paddingTop: "5rem",marginLeft:"2rem"}}  >
            {console.log(props)}
            <div className="card" >
           
            <div className="card" style={{ width: "14rem", marginRight: "1rem"}} >
                <img src={props.title.urlToImage==null?'https://static.feber.se/article_images/58/80/51/588051.jpg':props.title.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title.title}</h5>
                    {/* <p className="card-text">{props.title.content}</p> */}
                </div>
            </div>
        </div>
        </div>

    )
}
export default Card;
