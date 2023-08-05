import "./ExternalLinks.css"

import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";

import {
  PlusIcon,
  HomeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

function ExternalLinks() {
  return (
    <div id="links">
      <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-accent hover:shadow-none shadow-none">
              <PlusIcon className="h-6 w-6 transition-transform group-hover:rotate-45" />
            </IconButton>
          </SpeedDialHandler>

          <SpeedDialContent>
            <SpeedDialAction className="h-14 w-14 shadow">
              <a href="https://karimbastami.com" target="_blank" rel="noreferrer">
                <HomeIcon className="h-6 w-6" />
              </a>
            </SpeedDialAction>

            <SpeedDialAction className="h-14 w-14 shadow">
              <a href="https://github.com/KarimBastami/Pathfinder-Xplorer" target="_blank" rel="noreferrer">
                <CodeBracketIcon className="h-6 w-6" />
              </a>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
    </div> 
  )
}

export default ExternalLinks