import { useNavigate } from 'react-router-dom'

const CreateMeat = ({ posts, setPosts }) => {
//   const navigate = useNavigate()
//   // not using states to control the form cuz not using json
//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     const formData = new FormData(event.target)
//     // the event.target is the form itself in this case
//     const res = await fetch('/api/posts', {
//       method: 'POST',
//       body: formData
//     })
//     const data = await res.json()
//     setPosts([ data, ...posts ])
//     navigate('/')
//   }

//below potential handler?

// const handleSubmit = async(event) => {
// event.preventDefault()
// const newMeatData = new FormData(event.target)
// const res = await fetch('api/posts', {
// method: 'POST',
// body: newMeatData
// })
// const data = await res.json()
// setPosts([data, ...posts])
// res.redirect('/')
// }


//form data for Meat schema in models/mongoDB
  return (
    <form onSubmit={handleSubmit}>
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
      <input type="submit" value="Create Post"/>
    </form>
  )
}

export default CreateMeat
