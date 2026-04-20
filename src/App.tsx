import './App.css'
import {Sidebar} from "./components/sidebar/Sidebar.tsx";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {HomeContainer} from "./components/home/HomeContainer.tsx";
import {ProjectsContainer} from "./components/projects/ProjectsContainer.tsx";
import {ContactContainer} from "./components/contact/ContactContainer.tsx";

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

                <Route path={"/Projects"} element={<ProjectsContainer/>}>
                    <Route path={":category"} element={null}/>
                    <Route path={":category/:projectname"} element={null}/>
                </Route>

                <Route path="/Contact" element={
                    <ContactContainer/>
                }/>
            </Routes>
        </div>
      </BrowserRouter>
  )
}

export default App
