import { Link } from 'react-router-dom'
import './DecorationStation.css'
import { SeasonFilter } from './SeasonFilter'
import { useEffect, useState } from 'react'

export const DecorationList = () => {
  const [itemsData, setItems] = useState([])
  const [seasonsData, setSeasons] = useState([])
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
      <div className="item-container">
        {filteredItems.map((item) => {
          return (
            <div key={item.id} className="item-card">
              <img src={item.imageUrl} alt={item.name} className="item-img"></img>
              <Link to={`/${item.id}`} className="item-name">{item.name}</Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
