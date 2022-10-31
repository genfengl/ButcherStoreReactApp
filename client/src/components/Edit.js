const handleEditSubmit = (event) => {

}

const Edit = () => {
    return (
    <form onSubmit={handleEditSubmit} method="post" /* put? */ >
    <input
      name="title"
      type="text"
      required
      placeholder="Aged Beef"
      
    />
    <br />
    <input
      name="imageURL"
      required
      type="text"
    />
    <br />
    <input
      name="price"
      required
      type="number"
    />
      <br />
    <input
      name="stock"
      required
      type="number"
    />
      <br />
    <input
      name="category"
      required
      type="text"
    />
    <br />
    <textarea name="description"></textarea>
    <br />
    <input type="submit" value="Edit Post"/>
  </form>
    )
}

export default Edit