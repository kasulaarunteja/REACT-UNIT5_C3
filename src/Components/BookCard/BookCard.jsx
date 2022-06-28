import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookCard = ({ id, imageUrl, title, price }) => {

  const Container = styled.div`
  border : 1px solid black;
  text-align: center;`

  // Bookcard is a card looking component, that is also a 'Link' for react-router
  //  it's basically shows one books information.
  // You can style custom tags with styled components in following way:
  // styled(Link)
  //   color: xyz;
  // `
  //  now this container is a link that is also a card.
  //  card will have following 'children':
  //  div with className 'bookCard'
  //  Image of the book
  //  title of the book. h2 with classname 'title'
  //  price of book with class 'price'
  //
  // rough example:
  // <YourStyledLink to={}>
  //    title, image price etc here
  // </YourStyledLink>

  return (
    <Container className = "bookCard">
    <Link to = {`/book/${id}`}>
      <h2 className = "title">{title}</h2>
      <img className = "image" src = {imageUrl} />
      <p className = "price">{price}</p>

    </Link>
  </Container>

  )
   
  
 
 
};
