import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

// TODO: Add the categories, seasons as props
export const NewDecorationForm = () => {
  // TODO: Create newDecoration useState
  const [newDecoration, setNewDecoration] = useState({})
  const [seasons, setSeasons] = useState([])
  const [categories, setCategories] = useState([])
  const navigate = useNavigate()
  useEffect(() => {

    fetch('http://localhost:8088/seasons')
      .then((res) => res.json())
      .then((seasonsData) => {
        setSeasons(seasonsData)
      })

    fetch('http://localhost:8088/categories')
      .then((res) => res.json())
      .then((categoriesData) => {
        setCategories(categoriesData)
      })
  }, [])

  // TODO: Create a function that handles submitting the form. 
  // 1. Should check that the form has been filled out
  //    * Make a post request to add the decoration to the database
  //    * Make a get request to update the items state to include the new decoration
  // 2. If the form is not filled out alert the user to fill out the form
  const addDecoration = (event) => {
    event.preventDefault()
    if (newDecoration.name && newDecoration.image && newDecoration.seasonId && newDecoration.categoryId) {
      fetch('http://localhost:8088/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDecoration)
      }).then(() => navigate('/'))
    } else {
      window.alert("Please fill out the form")
    }
  }

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Add a decoration to the catalog</h2>
      {/* TODO: Create an input for the decoration name */}
      <input type="text" name="name" placeholder="Add a name" onChange={(event) => {
        const copy = { ...newDecoration }
        copy.name = event.target.value
        setNewDecoration(copy)
      }} />
      {/* TODO: Create an input for the decoration image url */}
      <input type="text" placeholder="Add an image" name="image" onChange={(event) => {
        const copy = { ...newDecoration }
        copy.image = event.target.value
        setNewDecoration(copy)
      }} />
      {/* TODO: Create radio buttons for the seasons */}
      {
        seasons.map(
          (season) => {
            return <div key={season.name}>
              <input type="radio" name="season" value={season.id} onChange={(event) => {
                const copy = { ...newDecoration }
                copy.seasonId = parseInt(event.target.value)
                setNewDecoration(copy)
              }} />
              {season.name}
            </div>
          }
        )
      }
      {/* TODO: Create a select for categories */}
      <select name="category" onChange={(event) => {
        const copy = { ...newDecoration }
        copy.categoryId = parseInt(event.target.value)
        setNewDecoration(copy)
      }}>
        <option value="0" >Choose a category</option>
        {
          categories.map((category) => {
            return <option key={category.name} value={category.id}>{category.name}</option>
          })
        }
      </select>

      {/* TODO: Create a button that calls the submit function when clicked */}
      <button onClick={(event) => { addDecoration(event) }}>Submit Decoration</button>
    </form>
  )
}
