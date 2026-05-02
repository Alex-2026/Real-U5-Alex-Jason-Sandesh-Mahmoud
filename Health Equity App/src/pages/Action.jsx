import React from "react";

export default function Action() {
  return (
    <div style={{ padding: "2rem", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ color: "#1d4ed8", fontSize: "2.5rem", marginBottom: "1rem" }}>
        Direct Action: Steps for Citizens & Government
      </h1>
      <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>
        Health inequalities and flawed government policies continue to impact millions of Americans. Here are actionable steps, inspired by research and real-world case studies, that both citizens and government can take to address these issues at their root.
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#2563eb" }}>For Citizens</h2>
        <ul style={{ marginLeft: "1.5rem" }}>
          <li>
            <strong>Advocate for Policy Change:</strong> Contact your representatives to support policies that expand access, reduce polarization, and address social determinants of health.
          </li>
          <li>
            <strong>Support Nonprofits:</strong> Engage with and donate to organizations like Trust for America’s Health (TFAH) that work to reduce health disparities and provide resources to marginalized communities.
          </li>
          <li>
            <strong>Community Involvement:</strong> Volunteer for local health initiatives, food banks, or educational programs that address root causes of health inequality.
          </li>
          <li>
            <strong>Stay Informed:</strong> Educate yourself and others about how government policies affect healthcare access and outcomes.
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ color: "#2563eb" }}>For Government</h2>
        <ul style={{ marginLeft: "1.5rem" }}>
          <li>
            <strong>Reduce Polarization:</strong> Foster bipartisan cooperation to pass essential healthcare funding and reforms.
          </li>
          <li>
            <strong>Address Social Determinants:</strong> Invest in housing, education, and food security to tackle the root causes of health disparities.
          </li>
          <li>
            <strong>Uniform Healthcare Financing:</strong> Work towards reducing regional spending disparities and ensure equitable access to care.
          </li>
          <li>
            <strong>Empower Nonprofits:</strong> Provide autonomy and stable funding to organizations like TFAH to maximize their impact.
          </li>
        </ul>
      </section>

      <section>
        <h2 style={{ color: "#2563eb" }}>Why This Matters</h2>
        <p>
          Health inequities are avoidable, unfair, and unjust. By taking direct action—whether as a citizen or policymaker—we can move toward a system that prioritizes health equity, addresses root causes, and ensures fair access for all.
        </p>
      </section>
    </div>
  );
}