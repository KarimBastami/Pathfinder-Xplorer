import "./Navbar.css"

import { useContext } from "react"

import { Select, Option } from "@material-tailwind/react"
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiTargetLock } from "react-icons/bi"
import { TbWall, TbWeight } from "react-icons/tb"

import GridContext from "../../context/GridContext"

function Navbar() {

  const { mode,
          setModeStart,
          setModeTarget,
          setModeWall,
          setModeWeight,
          algorithm, 
          handleAlgoChange,
          onRunClick,
          resetGrid,
        } = useContext(GridContext)
  
  const selectStart = mode === "start" ? "selected" : ""
  const selectTarget = mode === "target" ? "selected" : ""
  const selectWall = mode === "wall" ? "selected" : ""
  const selectWeight = mode === "weight" ? "selected" : ""

  return (
    <nav id="navbar" className="p-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 id="nav-logo" className="text-h3">Pathfinder Xplorer</h1>

          <div id="nav-links" className="text-shrimp">
            <ul className="grid grid-cols-4">
              <li id="set-start-btn" className={`${selectStart}`} onClick={setModeStart}>
                <HiOutlineLocationMarker className="text-h3 mx-auto mb-1" />
                Set Start
              </li>
              <li id="set-target-btn" className={`${selectTarget}`} onClick={setModeTarget}>
                <BiTargetLock className="text-h3 mx-auto mb-1" />
                Set Target
              </li>
              <li id="add-wall-btn" className={`${selectWall}`} onClick={setModeWall}>
                <TbWall className="text-h3 mx-auto mb-1" />
                Add Wall
              </li>
              <li id="add-weight-btn" className={`${selectWeight}`} onClick={setModeWeight}>
                <TbWeight className="text-h3 mx-auto mb-1" />
                Add Weight
              </li>
            </ul>
          </div>

          <div className="flex gap-x-4 items-center text-shrimp">
            <Select color="teal" 
                    label="Select Algorithm" 
                    value={algorithm} 
                    onChange={handleAlgoChange}>
              <Option value="a*">A*</Option>
              <Option value="bfs">BFS</Option>
              <Option value="dfs">DFS</Option>
            </Select>

            <button className="btn-custom btn-scale" onClick={onRunClick}>Run</button>
            <button className="btn-custom btn-scale" onClick={resetGrid}>Reset</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar