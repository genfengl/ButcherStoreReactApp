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
        <Container>
            <Row className="mt-3 d-none d-md-flex">
                <Col xs={6}>
                    <img src={item?.imageURL}
                        style={{
                            height: '100%',
                            width: '100%'
                        }}
                    />
                </Col>
                <Col xs={6} className="gap-3 d-flex flex-column">
                    <Row className="mb-3">
                        <Col>
                            <div className='fs-2 fw-bold pt-3 text-start'>{item?.title}</div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="fs-3 fw-bold text-butcher">
                            ${item?.price}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="w-100 border-0 rounded-0 my-3 fs-5 fw-bold p-2 text-light text-center"
                                variant="butcher" onClick={() => cart.addOneToCart(item?._id)}>ADD TO CART</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="lead">
                            {item?.description}
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="mt-3 d-md-none d-flex flex-column gap-3 align-items-center">
                <div className='fs-2 fw-bold pt-3 text-start'>{item?.title}</div>
                <img src={item?.imageURL}
                    style={{
                        width: '100%',
                        height: 'auto'
                    }} />
                <div className="fs-3 lead">
                    ${item?.price}
                </div>
                <Button className="w-100 border-0 rounded-0 fs-5 fw-bold p-2 text-light text-center"
                    variant="butcher" onClick={() => cart.addOneToCart(item?._id)}>
                    ADD TO CART
                </Button>
                <div className="lead fw-bold align-self-start">
                    Product Description
                </div>
                <div className="lead">
                    {item?.description}
                </div>
            </div>


        </Container>




    )
}

export default Show