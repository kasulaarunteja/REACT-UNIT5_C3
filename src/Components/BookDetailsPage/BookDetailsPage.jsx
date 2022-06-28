import axios from "axios";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { NotFound} from "../NotFound/NotFound"

export const BookDetailsPage = () => {
  // const [books, setBooks] = useState({}
  // //   {
  // //     "title":" ",
  // //  "imageUrl" :"",
  // //  "description" :"",
  // //  "reviews" :"",
  // //  "author" :"",
  // //  "price" : "",
  // //  "section" : "",
  // //  "id" : "",
  // //   }
    
  // );

   const [notFound,setNotFound] = useState(true);
  // const { id } = useParams();
  // console.log(id)

  // useEffect(() => {
  //   getBook();
  // },)

  // Get book details based on ID whenever user lands on the page
  // ID will come from route
     
  // useEffect(() => {
  //   axios.get(`http://localhost:8080/books/${id}`).then((res) => {
  //     setBooks(res.data);
      
  //   });
  // },[])

  // async function getBook (){
  //   await axios.get(`http://localhost:8080/books/${id}`).then((res) =>{
  //     // console.log(res)

  //     setBooks({...res.data})
  //   })
  // }
  const [book, setBook] = useState({});
  const { id } = useParams();


  useEffect(() => {
    axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      setBook(res.data)
    }).catch((err) =>{
      console.log("not found error", err)
      setNotFound(false)
    })
  },[])

  // if(book == null){
  //   return null;
  // }

  return (
    <li>
      <div className="bookContainer">
        <h2 className="title">{book.title}</h2>
        <img className="image" src={book.imageUrl} alt="#" />
        <div className="author">{book.author}</div>
        <div className="description">{book.description}</div>
        <div className="price">{book.price}</div>
        <div className="section">{book.section}</div>
        <div className="isbnNumber">{book.isbnNumber}</div>
        <ul className="reviews">
          {/* Reviews will be an array, iterate over them and create a new <li> for every review */}
          {/* {book.reviews.map((ele, i) => {
            return <li>{ele}</li>
          })} */}
        
        </ul>
      </div>
    </li>
  );
};


// "title": "Flying Saucer, The",
// "imageUrl": "http://dummyimage.com/181x100.png/5fa2dd/ffffff",
// "description": "Golf III",
// "reviews": "Sci-Fi",
// "author": "Flowdesk",
// "price": "14 - Conveying Systems",
// "section": "Drama|Romance",
// "id": 1