import "./Navbar.css"
import { Select, Option } from "@material-tailwind/react";


function Navbar() {
  return (
    <nav id="navbar" className="p-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <h1 id="nav-logo" className="text-h3">Pathfinder Xplorer</h1>

          <div id="nav-links" className="text-shrimp">
            <ul className="flex gap-x-8">
              <li className="underline-lr">
                Set Start
              </li>
              <li className="underline-lr">
                Set Target
              </li>
              <li className="underline-lr">
                Add Wall
              </li>
              <li className="underline-lr">
                Add Weight
              </li>
            </ul>
          </div>

          <div className="flex gap-x-4 items-center text-shrimp">
            <div className="w-52">
              <Select label="Select Algorithm" className="">
                <Option>Dijkstra</Option>
                <Option>A*</Option>
              </Select>
            </div>

            <button className="btn-custom btn-scale">Run</button>
            <button className="btn-custom btn-scale">Reset</button>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar