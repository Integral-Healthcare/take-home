"use client";

// TODO: Implement the audit log component
// This component should display the audit trail for an intake
//
// Features to implement:
// - Fetch and display audit log entries for a specific intake
// - Show action type, user who performed it, and timestamp
// - Display additional details (e.g., status changes, what was viewed)
// - Sort by most recent first

interface AuditLogProps {
  intakeId: string;
}

export default function AuditLog({ intakeId }: AuditLogProps) {
  return (
    <div>
      <h3>Audit Trail</h3>
      <p>Intake ID: {intakeId}</p>
      <p>TODO: Implement audit log display</p>
    </div>
  );
}
