import { Route, Routes } from "react-router-dom"
import { EachPost } from "./pages/EachPost"
import { EditPost } from "./pages/EditPost"
import { PostList } from "./pages/PostList"

export const App = () => {
  return (
    <>
      <h1 className="text-center my-2 text-blue-200">
        CRUD-Operations-Project
      </h1>
      <Routes>
        <Route
          path='/'
          element={<PostList/>}
        />
        <Route
          path='/post/:id'
          element={<EachPost/>}
        />
        <Route
          path='/post/:id/edit'
          element={<EditPost/>}
        />
      </Routes>
    </>
  )
}