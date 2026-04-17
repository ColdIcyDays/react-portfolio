import './App.css'
import {Sidebar} from "./components/sidebar/Sidebar.tsx";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {HomeContainer} from "./components/home/HomeContainer.tsx";
import {ProjectsContainer} from "./components/projects/ProjectsContainer.tsx";
import {ProjectsListContainer} from "./components/projects/list-overview/ProjectsListContainer.tsx";


function App() {
  return (
      <BrowserRouter>
        <div style={{display:"flex"}}>
          <Sidebar
              somePageNames={["Home", "Projects", "Contact"]}
          />
            <Routes>
                <Route path="*" element={
                    <Navigate to={"/Home"}/>
                }>

                </Route>

                <Route path="/Home" element={
                    <HomeContainer/>
                }/>

                <Route path="/Projects" element={
                    <ProjectsContainer/>
                }/>

                <Route path="/Contact" element={
                    <div>
                        <p>Contact</p>
                    </div>
                }/>

                <Route path="/Projects/:category" element={
                    <ProjectsListContainer/>
                }/>


            </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
