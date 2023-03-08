import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const DecorationDetail = () => {
  // TODO: Create a decoration state
  const [decoration, setDecoration] = useState({})

  // TODO: Get the decoration id from the url
  const { decorationId } = useParams()

  // TODO: Write a useEffect that fetches the decoration by the id and set the decoration
  useEffect(() => {
    fetch(`http://localhost:8088/items/${decorationId}?_expand=season&_expand=category`).then(res => res.json())
      .then(data => {
        console.log(data)
        setDecoration(data)
      })
  }, [decorationId])

  if (!decoration.name) {
    console.log('is loading')
    return <div>Is Loading</div>
  }

  // TODO: Add the decoration name, image, season name, and category name to the page
  return (
    <div className="item-detail-container">
      <h3 className="item-detail-name">Item details for item: {decoration.name}</h3>
      <img src={decoration.imageUrl} alt={decoration.name} className="item-img" />
      <div className="item-details">Category: {decoration.category.name}</div>
      <div className="item-details">Season: {decoration.season.name}</div>
    </div>
  )
}
