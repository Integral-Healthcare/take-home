import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Intake Review System</h1>

      <p className={styles.description}>
        Welcome to the Integral Take-Home Challenge! Your task is to build a web
        application for managing client intakes with a review workflow.
      </p>

      <div className={styles.challenge}>
        <h2>Challenge Overview</h2>
        <p>Build a system where:</p>
        <ul>
          <li>
            <strong>Clients</strong> can submit intakes with personal
            information
          </li>
          <li>
            <strong>Reviewers</strong> can view a queue of submitted intakes
          </li>
          <li>
            Reviewers can see <strong>privileged</strong> (full) or{" "}
            <strong>redacted</strong> (masked) views of sensitive data
          </li>
          <li>Reviewers can update intake status (Pending → In Review → Approved/Rejected)</li>
          <li>
            All actions are recorded in an <strong>audit trail</strong>
          </li>
        </ul>

        <h2>Getting Started</h2>
        <p>
          The database schema and seed data are already set up. Explore the
          codebase and implement the features described in the README.
        </p>

        <h2>Navigation</h2>
        <nav className={styles.nav}>
          <Link href="/intake" className={styles.link}>
            Submit Intake →
          </Link>
          <Link href="/queue" className={styles.link}>
            Review Queue →
          </Link>
        </nav>

        <h2>Demo Users</h2>
        <p>The database is seeded with two demo users:</p>
        <ul>
          <li>
            <code>client@demo.com</code> - CLIENT role, Organization A
          </li>
          <li>
            <code>reviewer@demo.com</code> - REVIEWER role, Integral (Internal)
          </li>
        </ul>
      </div>
    </main>
  );
}
