import "./Navbar.css"

import { Select, Option } from "@material-tailwind/react";
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiTargetLock } from "react-icons/bi"
import { TbWall, TbWeight } from "react-icons/tb"

import GridContext from "../../context/GridContext";
import { useContext } from "react";

function Navbar() {

  const { setModeStart,
          setModeTarget,
          setModeWall,
          setModeWeight,
          algorithm, 
          setAlgorithm,
          run,
          setRun,
          restart,
          setRestart 
        } = useContext(GridContext)


  return (
    <nav id="navbar" className="p-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 id="nav-logo" className="text-h3">Pathfinder Xplorer</h1>

          <div id="nav-links" className="text-shrimp">
            <ul className="flex gap-x-8">
              <li id="set-start-btn" onClick={setModeStart}>
                <HiOutlineLocationMarker className="text-h3 mx-auto mb-1" />
                Set Start
              </li>
              <li id="set-target-btn" onClick={setModeTarget}>
                <BiTargetLock className="text-h3 mx-auto mb-1" />
                Set Target
              </li>
              <li id="add-wall-btn" onClick={setModeWall}>
                <TbWall className="text-h3 mx-auto mb-1" />
                Add Wall
              </li>
              <li id="add-weight-btn" onClick={setModeWeight}>
                <TbWeight className="text-h3 mx-auto mb-1" />
                Add Weight
              </li>
            </ul>
          </div>

          <div className="flex gap-x-4 items-center text-shrimp">
            <Select color="teal" 
                    label="Select Algorithm" 
                    value={algorithm} 
                    onChange={(e) => setAlgorithm(e.target.value)}>
              <Option>Dijkstra</Option>
              <Option>A*</Option>
            </Select>

            <button className="btn-custom btn-scale">Run</button>
            <button className="btn-custom btn-scale">Reset</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar