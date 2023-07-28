import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Integral's Challenge!
      </h1>

      <p>For detailed instructions, please refer to the README file. Start coding by editing <code className={styles.code}>src/app/page.tsx</code></p>

      <div className={styles.challenge}>
        <h1 className={styles.title}>
          Overview
        </h1>

        <h2>Milestone: Security and Legal</h2>
        <p>Status: COMPLETE</p>

        <h2>Milestone: Data Upload</h2>
        <p>Status: IN_PROGRESS</p>
        <div>
          <h3>Task: Upload dataset #1</h3>
          <p>Status: COMPLETE</p>
        </div>
        <div>
          <h3>Task: Upload data dictionary</h3>
          <p>Status: IN_PROGRESS</p>
        </div>

        <h2>Milestone: Integral Analysis</h2>
        <p>Status: NOT_STARTED</p>

        <h2>Milestone: Data Changes</h2>
        <p>Status: NOT_STARTED</p>
      </div>
    </main>
  )
}
