import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CategoryDetail = () => {
  // TODO: Create a category state
  const [category, setCategory] = useState({})

  // TODO: Get the category id from the url
  const { categoryId } = useParams()

  // TODO: Write a useEffect that fetches the category by the id and set the category
  useEffect(() => {
    fetch(`http://localhost:8088/categories/${categoryId}?_embed=items`).then(res => res.json())
      .then(data => {
        console.log(data)
        setCategory(data)
      })
  }, [categoryId])

  // TODO: Add the category name, and name of each decoration item associated with the category
  return (
    <article>
      <h1>{category.name}</h1>

      <h3>Items</h3>
      {
        category.items?.map((decoration) => {
          return <div className="item-detail-container">
            <h3 className="item-detail-name">Item details for item: {decoration.name}</h3>
            <img src={decoration.imageUrl} alt={decoration.name} className="item-img" />
          </div>
        })
      }
    </article>
  )
}
