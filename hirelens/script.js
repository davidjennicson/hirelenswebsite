// Simulation profiles
const profiles = {
  profile1: {
    role: "Senior Frontend Engineer",
    candidate: "Elena Rostova",
    matchScore: 96,
    skills: ["React 19", "TypeScript", "Micro-frontends", "Web Workers", "TailwindCSS"],
    aiSummary: "Elena demonstrated deep mastery of asynchronous state machine management in her 3-minute video breakdown. Code samples show zero memory leaks across large DOM trees.",
    cultureFit: 9.4,
    technicalDepth: 9.7,
    recommendation: "Immediate Hire Recommendation"
  },
  profile2: {
    role: "Data Scientist / ML Engineer",
    candidate: "Karthik Menon",
    matchScore: 91,
    skills: ["PyTorch", "LLM Fine-tuning", "vLLM", "Vector DBs (Qdrant)", "Kubernetes"],
    aiSummary: "Authored two papers on quantization (4-bit LoRA). Clear communication on trade-offs between inference latency and model perplexity.",
    cultureFit: 8.9,
    technicalDepth: 9.5,
    recommendation: "Invite for System Architecture Panel"
  },
  profile3: {
    role: "Product Manager (Growth)",
    candidate: "Camila Fernandez",
    matchScore: 89,
    skills: ["Funnel Optimization", "SQL", "Amplitude", "A/B Testing", "B2B Pricing"],
    aiSummary: "Spearheaded 44% lift in PLG activation at Series B SaaS. Articulates metric-driven roadmaps with clear prioritization frameworks.",
    cultureFit: 9.2,
    technicalDepth: 8.5,
    recommendation: "Proceed to VP of Product Round"
  }
};

function runSimulation() {
  const select = document.getElementById('sim-select');
  const output = document.getElementById('sim-output');
  if (!select || !output) return;

  const data = profiles[select.value];
  if (!data) return;

  output.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
      <div>
        <span style="font-size: 0.8rem; color: #38bdf8; text-transform: uppercase; font-weight: 700;">Analyzed Profile</span>
        <h3 style="font-size: 1.3rem; margin-top: 2px;">${data.candidate}</h3>
        <p style="font-size: 0.85rem; color: #94a3b8;">Target Role: ${data.role}</p>
      </div>
      <div style="text-align: right;">
        <span style="font-size: 1.8rem; font-weight: 800; color: #34d399;">${data.matchScore}%</span>
        <span style="display: block; font-size: 0.75rem; color: #94a3b8;">Vector Alignment</span>
      </div>
    </div>

    <div style="margin-bottom: 16px;">
      <span style="font-size: 0.8rem; color: #cbd5e1; display: block; margin-bottom: 6px;">Extracted Core Competencies:</span>
      <div style="display: flex; flex-wrap: wrap; gap: 6px;">
        ${data.skills.map(s => `<span style="background: rgba(99, 102, 241, 0.2); border: 1px solid rgba(99, 102, 241, 0.4); color: #c7d2fe; font-size: 0.78rem; padding: 3px 10px; border-radius: 6px;">${s}</span>`).join('')}
      </div>
    </div>

    <div style="background: rgba(255, 255, 255, 0.04); border-left: 3px solid #6366f1; padding: 12px; border-radius: 0 8px 8px 0; margin-bottom: 16px;">
      <span style="font-size: 0.75rem; text-transform: uppercase; color: #818cf8; font-weight: 700;">AI Video Assessment Synthesis</span>
      <p style="font-size: 0.86rem; color: #cbd5e1; margin-top: 4px;">"${data.aiSummary}"</p>
    </div>

    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 12px;">
      <span style="color: #94a3b8;">Verdict: <strong style="color: #38bdf8;">${data.recommendation}</strong></span>
      <span style="color: #34d399; font-weight: 600;">Confidence: 97.4%</span>
    </div>
  `;
}

// Modal handling
function openLensModal(type) {
  const modal = document.getElementById('lens-modal');
  const body = document.getElementById('lens-modal-body');
  if (!modal || !body) return;

  if (type === 'demo') {
    body.innerHTML = `
      <h3 style="margin-bottom: 6px; font-size: 1.4rem;">Book HireLens Product Demo</h3>
      <p style="font-size: 0.88rem; color: #94a3b8; margin-bottom: 20px;">See how HireLens automates initial screening for your open requisitions.</p>
      <form onsubmit="handleDemoSubmit(event)">
        <div class="form-field">
          <label>Work Email</label>
          <input type="email" required placeholder="you@company.com">
        </div>
        <div class="form-field">
          <label>Company Name</label>
          <input type="text" required placeholder="e.g. Acme Tech Corp">
        </div>
        <div class="form-field">
          <label>Current Monthly Hires</label>
          <select>
            <option>1 - 5 hires / month</option>
            <option>5 - 20 hires / month</option>
            <option>20+ high-volume hiring</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Reserve Demo Slot</button>
      </form>
    `;
  } else if (type === 'signin') {
    body.innerHTML = `
      <h3 style="margin-bottom: 6px; font-size: 1.4rem;">Talent Dashboard Login</h3>
      <p style="font-size: 0.88rem; color: #94a3b8; margin-bottom: 20px;">Access your candidate pipelines, video auditions, and ATS integrations.</p>
      <form onsubmit="handleSignInSubmit(event)">
        <div class="form-field">
          <label>Email Address</label>
          <input type="email" required placeholder="recruiter@company.com">
        </div>
        <div class="form-field">
          <label>Password</label>
          <input type="password" required placeholder="••••••••">
        </div>
        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Sign In to Console</button>
      </form>
    `;
  }

  modal.classList.add('show');
}

function openScorecard(name, match, skills, notes) {
  const modal = document.getElementById('lens-modal');
  const body = document.getElementById('lens-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
      <div>
        <span style="font-size: 0.8rem; color: #38bdf8; text-transform: uppercase; font-weight: 700;">Detailed Assessment Report</span>
        <h3 style="font-size: 1.4rem;">${name}</h3>
      </div>
      <span class="score-pill score-high" style="font-size: 1rem; padding: 6px 14px;">${match}% Fit</span>
    </div>

    <div style="background: rgba(0, 0, 0, 0.3); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; padding: 16px; margin-bottom: 18px;">
      <div style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 8px;"><strong>Verified Skill Stack:</strong> ${skills}</div>
      <div style="font-size: 0.88rem; color: #e2e8f0; line-height: 1.5;"><strong>Evaluator Notes:</strong> ${notes}</div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 20px;">
      <div style="background: rgba(255, 255, 255, 0.03); padding: 12px; border-radius: 8px; text-align: center;">
        <span style="display: block; font-size: 0.75rem; color: #94a3b8;">Speech Clarity</span>
        <strong style="color: #38bdf8; font-size: 1.2rem;">9.6 / 10</strong>
      </div>
      <div style="background: rgba(255, 255, 255, 0.03); padding: 12px; border-radius: 8px; text-align: center;">
        <span style="display: block; font-size: 0.75rem; color: #94a3b8;">Bias Risk Index</span>
        <strong style="color: #34d399; font-size: 1.2rem;">0.00 (Neutral)</strong>
      </div>
    </div>

    <div style="display: flex; gap: 10px;">
      <button class="btn btn-primary" style="flex: 1;" onclick="scheduleInterview('${name}')">Schedule Interview</button>
      <button class="btn btn-secondary" onclick="closeLensModal()">Close</button>
    </div>
  `;

  modal.classList.add('show');
}

function scheduleInterview(candidateName) {
  closeLensModal();
  alert(`Interview invitation link & calendar invite sent to ${candidateName}!`);
}

function closeLensModal() {
  const modal = document.getElementById('lens-modal');
  if (modal) modal.classList.remove('show');
}

function closeLensModalOnBackdrop(e) {
  if (e.target.id === 'lens-modal') {
    closeLensModal();
  }
}

function handleDemoSubmit(e) {
  e.preventDefault();
  closeLensModal();
  alert("Thank you! Our recruitment solutions specialist will reach out within 1 business hour.");
}

function handleSignInSubmit(e) {
  e.preventDefault();
  closeLensModal();
  alert("Signing into HireLens Console... Redirecting to dashboard.");
}

// Initial simulator execution
document.addEventListener('DOMContentLoaded', () => {
  runSimulation();
});
