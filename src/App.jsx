import './App.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Rootlayout from './layout/Rootlayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Recipies from './pages/Recipies'
import About_us from './pages/About_us'
import Blog from './pages/Blog'
import Footer from './components/Footer'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Recipies" element={<Recipies />} />
        <Route path="About_us" element={<About_us />} />
        <Route path="Blog" element={<Blog />} />
      </Route>
    )
  )

  return (
    <>
    <RouterProvider router={router}/>
    <Footer />
    </>
  )
}

export default App
