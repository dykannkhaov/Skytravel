function Form() {
  return (
    <div className="rounded-lg bg-sky-900 p-3">
      <form action="#" className="form-flight">
        <div>
          <input className="mr-1 cursor-pointer" type="radio" name="ticket" id="return" defaultChecked />
          <label className="mr-3 cursor-pointer text-white" htmlFor="return">
            Return
          </label>
          <input className="mr-1 cursor-pointer" type="radio" name="ticket" id="oneway" />
          <label className="cursor-pointer text-white" htmlFor="oneway">
            One way
          </label>
        </div>

        <div className="mt-2 flex">
          <label className="text-white" htmlFor="departure">
            From
            <div>
              <input
                className="rounded-l-md border-r p-3 text-black"
                type="text"
                placeholder="Country, city or airport"
                id="departure"
              />
            </div>
          </label>

          <label className="text-white" htmlFor="arrival">
            To
            <div>
              <input
                className="border-r p-3 text-black"
                type="text"
                placeholder="Country, city or airport"
                id="arrival"
              />
            </div>
          </label>

          <label className="text-white" htmlFor="check-in">
            Check-in
            <div>
              <input className="h-12 cursor-pointer border-r p-3 text-black" type="date" id="check-in" />
            </div>
          </label>
          <label className="text-white" htmlFor="check-out">
            Check-out
            <div>
              <input className="h-12 cursor-pointer border-r p-3 text-black" type="date" id="check-out" />
            </div>
          </label>

          <label className="text-white" htmlFor="guest">
            Guests
            <div>
              <input className="rounded-r-md p-3 text-black" type="text" id="guest" />
            </div>
          </label>
        </div>

        <div className="mt-4 flex justify-end">
          <input
            className="cursor-pointer rounded-lg bg-orange-500 p-3 font-semibold text-white hover:bg-orange-600"
            type="reset"
          />
          <button
            className="ml-2 rounded-lg bg-green-500 p-3 font-semibold text-white hover:bg-green-700"
            type="submit"
          >
            Search flights
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
