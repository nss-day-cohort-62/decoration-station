import './DecorationStation.css'
import { SeasonFilter } from './SeasonFilter'
import { ItemsList } from './ItemsList'
import { NewDecorationForm } from './DecorationForm'
import { useEffect, useState } from 'react'

export const DecorationStation = () => {
  const [itemsData, setItems] = useState([])
  const [seasonsData, setSeasons] = useState([])
  const [categoriesData, setCategories] = useState([])
  const [filteredItems, setFilteredItems] = useState([])
  const [seasonChoice, setSeasonChoice] = useState(0)
  const getItems = () => {
    fetch('http://localhost:8088/items')
      .then((res) => res.json())
      .then((itemsData) => {
        setItems(itemsData)
      })
  }
  useEffect(() => {
    getItems()

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

  useEffect(() => {
    if (seasonChoice === 0) {
      setFilteredItems(itemsData)
    } else {
      const seasonItems = itemsData.filter((item) => item.seasonId === seasonChoice)
      setFilteredItems((prevState) => {
        if (prevState !== seasonItems) {
          return seasonItems
        }
      })
    }
  }, [seasonChoice, itemsData])

  return (
    <>
      <h1>Decoration Station</h1>
      <div id="filter-bar">
        <SeasonFilter
          seasonChoice={seasonChoice}
          setSeasonChoice={setSeasonChoice}
          seasons={seasonsData}

        />
      </div>
      {/* TODO: Add the DecorationForm to the page */}
      <NewDecorationForm seasons={seasonsData} categories={categoriesData} getItems={getItems} />
      <ItemsList filteredItems={filteredItems} />
    </>
  )
}
