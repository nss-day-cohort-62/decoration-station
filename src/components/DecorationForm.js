
// TODO: Add the userChoices, setUserChoices, seasons, setItems as props
export const NewDecorationForm = ({ }) => {
  // TODO: Create categories state

  // TODO: Create a useEffect that gets the categories from the database

  // TODO: Create a function that handles submitting the form. 
  // 1. Should check that the form has been filled out
  //    * Make a post request to add the decoration to the database
  //    * Make a get request to update the items state to include the new decoration
  // 2. If the form is not filled out alert the user to fill out the form

  return (
    <form className="decoration-form">
      <h2 className="decoration-form-title">Add a decoration to the catalog</h2>
      {/* TODO: Create an input for the decoration name */}

      {/* TODO: Create an input for the decoration image url */}

      {/* TODO: Create radio buttons for the seasons */}

      {/* TODO: Create a select for categories */}

      {/* TODO: Create a button that calls the submit function when clicked */}
    </form>
  )
}
