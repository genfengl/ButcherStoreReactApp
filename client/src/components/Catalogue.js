import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { AiOutlinePlus, AiOutlineShoppingCart, AiOutlineClose, AiFillEdit } from 'react-icons/ai'
import { BiLike } from 'react-icons/bi'
import { FaShoppingCart } from 'react-icons/fa'


import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { CartContext } from "../CartContext"
import { useContext, useState } from "react"
import Cart from './Cart'


const Catalogue = ({ items, setItems, user }) => {


    const navigate = useNavigate()
    const cart = useContext(CartContext)
    const [item, setItem] = useState(false);
    // const getProductQuantity = cart.getProductQuantity(items._id)


    const handleLike = async (id) => {
        const res = await fetch(`/api/butcher/like/${id}`, { method: "PUT" })
        const data = await res.json()
        const newItem = items.map((_item) => {
            if (_item._id !== data._id) {
                return _item
            }
            return data
        })
        console.log(newItem)
        // setItem(newItem)
    }

    const handleDelete = async (id) => {
        const res = await fetch(`/api/butcher/${id}`, { method: 'DELETE' })
        const updatedItems = items.filter((_items) => {
            return _items._id !== id
        })
        setItems(updatedItems)
        navigate('/butcher')
    }

    return (
        <>
            {/* set the columns of row according to screen size */}
            <Row xs={2} md={2} lg={3} xl={4} className='g-4'>
                {items?.map((item) => {
                    return (
                        <Col key={item._id} >
                            {/* set the height of card to 100px */}
                            <Card className='meat-card h-100 border-0 rounded-0' key={item._id}>
                                {/* displays item.image if an imageURL exists */}
                                {item.imageURL && (
                                    <Link to={`/butcher/${item._id}`}>
                                        <Card.Img className='h-100 rounded-0'
                                            variant='top'
                                            src={item.imageURL ? item.imageURL : ''}
                                            alt={item.title}
                                            style={{
                                                objectFit: 'cover',
                                            }}
                                        />
                                        {/* <Card.ImgOverlay className='p-0 d-md-none' style={{
                                            zIndex: "100"
                                        }}>
                                            <Card.Body className='p-0 d-flex justify-content-end'>
                                                {user?.isAdmin === true ? (<>
                                                    <Link to={`/api/butcher/edit/${item._id}`} >
                                                        <Button variant='outline' className='text-primary fs-4'>
                                                            <AiFillEdit />
                                                        </Button>
                                                    </Link>
                                                    <Button variant="outline" className="text-danger fs-4" onClick={() => handleDelete(item._id)}>
                                                        <AiOutlineClose />
                                                    </Button>
                                                </>
                                                ) : (
                                                    <>
                                                        <Button variant='butcher' className="text-butcher fs-4" onClick={() => handleLike(item._id)}>
                                                            <BiLike />
                                                        </Button>
                                                        <Button variant='none' className="text-butcher fs-4" onClick={() => cart.addOneToCart(item._id)}>
                                                            <AiOutlineShoppingCart />
                                                        </Button>

                                                    </>
                                                )}
                                            </Card.Body>
                                        </Card.ImgOverlay> */}
                                    </Link>
                                )}
                                <Card.Body className='text-center'>
                                    {/* display a message when image is unavailable */}
                                    {item.imageURL ? (
                                        ''
                                    ) : (
                                        <Card.Title>No Image Available</Card.Title>
                                    )}
                                    {/* display title of the item */}
                                    <Card.Text className='lead'>{item.title}</Card.Text>
                                    <Card.Text className='text-muted'>${item.price}</Card.Text>
                                    {/* button for add to cart */}
                                    <div className='d-flex justify-content-around'>
                                        {user?.isAdmin === true ? (<>
                                            <Link to={`/butcher/edit/${item._id}`} >
                                                <Button variant='outline-primary' className='fs-4'>
                                                    <AiFillEdit />
                                                </Button></Link>
                                            <Button variant="outline-danger" className="fs-4" onClick={() => handleDelete(item._id)}>
                                                <AiOutlineClose />
                                            </Button>
                                        </>
                                        ) : (
                                            <>
                                                {/* redirects users to the login page is not logged in */}
                                                <Button variant='outline-butcher' className="fs-4" onClick={{user} ? (() => handleLike(item._id)) : (() => navigate('/butcher/login'))}>
                                                    <BiLike />
                                                </Button>
                                                <Button variant='outline-butcher' className="fs-4" onClick={{user} ? (() => cart.addOneToCart(item._id)) : (() => navigate('/butcher/login'))}>
                                                    <AiOutlineShoppingCart />
                                                </Button>
                                            </>
                                        )}
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </>

    )
}

export default Catalogue