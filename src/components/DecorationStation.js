import './DecorationStation.css'

export const DecorationStation = () => {
  // TODO: Create State for items, seasons, filteredItems, seasonChoice

  // TODO: Create a useEffect that fetches items and seasons

  // TODO: Create a useEffect that updates the filteredItems state if seasonChoice changes


  return (
    <>
      <h1>Decoration Station</h1>
      <div id="filter-bar">
        {/* TODO: Create a select element that shows the seasons as options. Select should have an onChange function that sets the seasonChoice */}
      </div>

      <div className="item-container">
        {/* TODO: Display the filteredItems */}
      </div>
    </>
  )
}
