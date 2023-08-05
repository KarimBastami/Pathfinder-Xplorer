import NavbarMobile from "../../components/navbar-mobile/NavbarMobile"
import SadCat from "../../assets/img/sad-cat.png"

import { useWindowSize } from '@uidotdev/usehooks'

function Mobile() {

  const windowSize = useWindowSize()
  const showCatImg = windowSize.height > 600

  return (
    <>
      <NavbarMobile />

      <section id="mobile-showcase" className="px-6 py-4">
        <div className="container">
          <div className="h-75 flex flex-col text-center items-center justify-center">
            {showCatImg && <img width={120} height={120} src={SadCat} className="mb-2"/>}
            
            <h3 className="text-h1 xs:text-chungus mb-8">Unavailable On Mobile & Tablet Devices</h3>

            <p>Due to the grid and the nature of the implemented drag mechanics, a mobile version of this app would not provide a seamless UX experience and therefore was disabled</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mobile