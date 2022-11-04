import { useNavigate } from "react-router-dom"

const CreateMeat = ({ items, setItems }) => {
  console.log(items)
  const navigate = useNavigate()
  const handleCreateSubmit = async (event) => {
    event.preventDefault()
    const newMeatData = new FormData(event.target)
    const res = await fetch('/api/butcher', {
      method: 'POST',
      body: newMeatData
    })
    const data = await res.json()
    console.log(items)
    setItems([...items, data])
    navigate('/butcher')
  }

  return (
    <div className="create-page">
      <h1>Add a new product to your store</h1>
      <form onSubmit={handleCreateSubmit}>
        <label>Product Name: </label>
        <br />
        <input
          name="title"
          type="text"
          required
          placeholder="Aged Beef"
        />
        <br />
        <label>Image: </label>
        <br />
        <input
          name="image"
          required
          type="file"
        />
        <br />
        <label>Price (Dollars): </label>
        <br />
        <input
          name="price"
          required
          type="number"
        />
        <br />
        <label>Stock Ammount: </label>
        <br />
        <input
          name="stock"
          required
          type="number"
        />
        <br />
        <label>Category (Beef, Seafood, Poultry, Lamb, Pork) </label>
        <br />
        <input
          name="category"
          required
          type="text"
        />
        <br />
        <label>Description: </label>
        <br />
        <textarea name="description"></textarea>
        <br />
        <input type="submit" value="Create Post" />
      </form>
    </div>
  )
}

export default CreateMeat
