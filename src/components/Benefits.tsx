import { benefits } from '../items/BenefitsList'

function About() {
  return (
    <section className="mt-6 text-white">
      <ul className="flex justify-evenly">
        {benefits.map((benefit, index) => (
          <li
            className="benefits-container w-80 rounded-lg p-4 pb-6"
            style={{
              backgroundColor: 'aliceblue',
              boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
              transition: '0.2s ease-in-out',
            }}
            key={index}
          >
            <div className="mb-2 text-5xl text-blue-500">{benefit.icon}</div>
            <h3 className="mb-3 font-bold text-black">{benefit.name}</h3>
            <p className="text-black">{benefit.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default About
