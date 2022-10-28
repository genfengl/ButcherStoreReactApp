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

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        type="text"
        required
        placeholder="Fiji"
      />
      <br />
      <input
        name="image"
        required
        type="file"
      />
      <br />
      <input
        name="visitDate"
        required
        type="date"
      />
      <br />
      <textarea name="description"></textarea>
      <br />
      <input type="submit" value="Create Post"/>
    </form>
  )
}

export default CreateMeat
