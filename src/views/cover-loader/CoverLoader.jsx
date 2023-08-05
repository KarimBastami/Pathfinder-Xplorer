import Loader from "../../components/loader/Loader"

function CoverLoader() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="mb-24 flex flex-col items-center">
        <Loader />
      </div>
    </section>
  )
}

export default CoverLoader