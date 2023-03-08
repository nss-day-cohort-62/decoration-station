import { Routes, Outlet, Route } from "react-router-dom"
import { NavBar } from "./NavBar"
import { DecorationList } from "./DecorationList"
import { NewDecorationForm } from "./DecorationForm"
import { DecorationDetail } from "./DecorationDetail"
import { CategoryDetail } from "./CategoryDetail"


export const DecorationStation = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<DecorationList />} />
        <Route path="form" element={<NewDecorationForm />} />
        <Route path=":decorationId" element={<DecorationDetail />} />
        <Route path="category/:categoryId" element={<CategoryDetail />} />
      </Route>
    </Routes>
  )
}
