import "./Navbar.css"
import { Select, Option } from "@material-tailwind/react";
import { HiOutlineLocationMarker } from "react-icons/hi"
import { BiTargetLock } from "react-icons/bi"
import { TbWall, TbWeight } from "react-icons/tb"

function Navbar() {
  return (
    <nav id="navbar" className="p-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 id="nav-logo" className="text-h3">Pathfinder Xplorer</h1>

          <div id="nav-links" className="text-shrimp">
            <ul className="flex gap-x-8">
              <li>
                <HiOutlineLocationMarker className="text-h3 mx-auto mb-1" />
                Set Start
              </li>
              <li>
                <BiTargetLock className="text-h3 mx-auto mb-1" />
                Set Target
              </li>
              <li>
                <TbWall className="text-h3 mx-auto mb-1" />
                Add Wall
              </li>
              <li>
                <TbWeight className="text-h3 mx-auto mb-1" />
                Add Weight
              </li>
            </ul>
          </div>

          <div className="flex gap-x-4 items-center text-shrimp">
            <Select color="teal" label="Select Algorithm">
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