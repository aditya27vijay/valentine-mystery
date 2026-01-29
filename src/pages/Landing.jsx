import "../styles/landing.css";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="case-file">
        <p className="case-id">CASE FILE #0214</p>

        <h1 className="title">THE MISSING HEART</h1>

        <p className="subtitle">
          A heart has gone missing under mysterious circumstances.
          <br /><br />
          The detective assigned to this case is <span>you</span>.
        </p>

        <div className="details">
          <p><strong>Victim:</strong> Unknown</p>
          <p><strong>Status:</strong> Unresolved</p>
          <p><strong>Last Seen:</strong> The moment I met you</p>
        </div>

        <button className="start-btn">
          Start Investigation
        </button>

        <p className="warning">
          ⚠️ This case contains sensitive emotional material.
        </p>
      </div>
    </div>
  );
}
