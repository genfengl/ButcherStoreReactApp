import Button from "react-bootstrap/esm/Button"
import { useParams } from "react-router-dom"
import { useEffect, useState, useContext } from "react"
import { CartContext } from "../CartContext"
import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


//need to be styled to have no li styles showing no dotpoint

const handleFavourite = (event) => {

}


const Show = ({ user, items }) => {
    const [item, setItem] = useState(null)
    const { id } = useParams()
    const cart = useContext(CartContext)
    const [liked, setLiked] = useState(false);

    // const handleLike = async (id) => {
    //   const res = await fetch(`/api/butcher/like/${id}`, { method: "PUT"})
    //   const data = await res.json()
    //   const newItem = items.map((_item) => {
    //     if (_item._id !== data._id) {
    //       return _item
    //     }
    //     return data
    //   })
    //   console.log(newItem)
    //   // setItem(newItem)
    // }
      console.log(items)
    useEffect(() => {
        const getItem = async () => {
          const res = await fetch(`/api/butcher/${id}`)
          const data = await res.json()
          setItem(data)
          console.log(data)
        }
        getItem()
      }, [id])

      return (
          
              <Container >
                 
                  <Row>
                      <Col xs={6}>
                          <img src={item?.imageURL}
                              style={{
                                  height: '100%',
                                  width: '100%'
                              }}
                          />
                      </Col>       
                              <Col xs={6}>

                                <Row className="mb-3">
                                    <Col xs={9}>
                                    <div className='fs-1 fw-bold text-center p-5 text-butcher'>{item?.title}</div>
                                    </Col>
                                    <Col xs={9} className="d-flex justify-content-end">
                                        {item?.stock}
                                    </Col>
                                </Row>
                                <Row className="d-flex align-items-center">
                                    <Col xs={6} className="text-muted">
                                        ${item?.price}
                                    </Col>
                                  
                                </Row>
                            </Col>

                      </Row>

          </Container> 




        /* <h2> {item?.title} </h2>
        <img src={item?.imageURL} alt={item?.title}/>
        <div>
            <ul className="details-list">
                <li>${item?.price}</li>
                <li>{item?.description}</li>
                <li>{item?.category}</li>
                {item?.stock === 0 ? <li>Sorry, we have no stock remaining</li> : <li>We have {item?.stock} in stock!</li>} </ul> 
                <Button onClick={() => cart.addOneToCart(item._id)} variant='outline-dark'>Add to Cart</Button>
                <Button onClick={handleFavourite} variant='outline-dark'>Favourite</Button>
                {/* <Button variant='outline-dark' onClick={handleLike}>Like</Button> */
               
                /* <span>Item liked by: {item?.likes.length} customers</span> */
                
       
    )
}

export default Show