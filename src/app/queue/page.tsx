import ReviewQueue from "@/components/ReviewQueue";

// Review queue page
// This page displays all intakes for REVIEWERS to review

export default function QueuePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Review Queue</h1>
      <p>Review and manage submitted intakes.</p>
      <ReviewQueue />
    </main>
  );
}
