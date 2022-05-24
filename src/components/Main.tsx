import Form from './Form'
import Benefits from './Benefits'
import Destinations from './Destinations'

function Main() {
  return (
    <>
      <main>
        <section className="main-img--container flex flex-col items-center justify-center rounded-md">
          <p className="text-4xl font-bold tracking-widest text-white">Wherever you are, travel with us!</p>
          <Form />
        </section>
        <Benefits />
        <Destinations />
      </main>
    </>
  )
}

export default Main
