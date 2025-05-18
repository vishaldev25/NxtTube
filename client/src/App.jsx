import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ProtectedRoute from "./Routes/ProtectedRoute"
import {
  Home, Gaming, SavedVideos, VideoItemDetails,
  Login, Trending, NotFound
} from "./pages"
 

const App = () =>
{
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:id" element={<VideoItemDetails />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/gaming" element={<Gaming />} />
          <Route path="/saved-videos" element={<SavedVideos />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
        </Routes>
      
    </BrowserRouter>
  )
}

export default App
