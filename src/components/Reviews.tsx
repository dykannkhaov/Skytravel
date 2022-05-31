import { useToggleTheme } from 'src/context/theme-context'
import { reviews } from '../items/ReviewsList'

function Reviews() {
  const { darkTheme } = useToggleTheme()

  return (
    <section>
      <div>
        <h3 className={`mt-3 mb-8 text-center text-xl font-bold ${darkTheme ? 'text-white' : 'text-black'}`}>
          Reviews from our customers
        </h3>
        <ul className="flex justify-evenly">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="reviews-container rounded-lg px-5 py-6"
              style={{
                backgroundColor: 'aliceblue',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
                transition: '0.2s ease-in-out',
              }}
            >
              <p className="mb-4 w-80">{review.desc}</p>
              <div className="flex items-center justify-center">
                <span
                  className={`mr-1 flex items-center justify-center ${review.avatarColors}`}
                  style={{
                    color: 'white',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                  }}
                >
                  {review.initials}
                </span>
                <span>{review.name}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Reviews
