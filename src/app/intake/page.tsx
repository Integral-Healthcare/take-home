import IntakeForm from "@/components/IntakeForm";

// Client intake submission page
// This page allows CLIENTs to submit new intakes

export default function IntakePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Submit Intake</h1>
      <p>Use this form to submit a new intake for review.</p>
      <IntakeForm />
    </main>
  );
}
