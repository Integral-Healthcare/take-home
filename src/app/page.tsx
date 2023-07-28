import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Integral's Challenge!
      </h1>

      <div className={styles.challenge}>
        <p>
          Your task is to build two pages for a movie review web application using Next.js:
        </p>

        <ol>
          <li>
            <strong>Movies List Page:</strong> Display a list of movies. Each list item should show basic information about the movie: title, genre, and a small poster image. Use JSON placeholder data or any free-to-use movie API like TMDB for the movie data. Implement a search bar to filter movies based on the title. The user should be able to click on a movie to navigate to the Movie Detail Page.
          </li>
          <li>
            <strong>Movie Detail Page:</strong> Display detailed information about a single movie. This includes title, genre, release date, poster image, and a short description or plot summary. Implement a "back" button for navigation back to the Movies List Page.
          </li>
        </ol>

        <p>
          For detailed instructions, please refer to the README file. Start coding by editing <code className={styles.code}>src/app/page.tsx</code>
        </p>
      </div>
    </main>
  )
}
