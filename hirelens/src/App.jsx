import './App.css'

/* ─── Architecture SVG Diagram ─────────────────────────────────────────── */
function ArchDiagram() {
  return (
    <div className="arch">
      <svg
        viewBox="0 0 820 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arch__svg"
        aria-label="HireLens system architecture diagram"
      >
        {/* ── Grid background ── */}
        <defs>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#e5e5e3" strokeWidth="0.5" />
          </pattern>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#b0b0b0" />
          </marker>
          <marker id="arrow-accent" viewBox="0 0 10 10" refX="9" refY="5"
            markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#1a1a1a" />
          </marker>
        </defs>
        <rect width="820" height="520" fill="url(#grid)" />

        {/* ── Layer labels ── */}
        <text x="14" y="76" fontFamily="'JetBrains Mono'" fontSize="9" fill="#b0b0b0" textAnchor="start">CLIENT</text>
        <text x="14" y="216" fontFamily="'JetBrains Mono'" fontSize="9" fill="#b0b0b0" textAnchor="start">API</text>
        <text x="14" y="356" fontFamily="'JetBrains Mono'" fontSize="9" fill="#b0b0b0" textAnchor="start">AI CORE</text>
        <text x="14" y="476" fontFamily="'JetBrains Mono'" fontSize="9" fill="#b0b0b0" textAnchor="start">STORAGE</text>

        {/* ── Layer separator lines ── */}
        {[88, 228, 368, 488].map(y => (
          <line key={y} x1="60" y1={y} x2="804" y2={y} stroke="#e5e5e3" strokeWidth="1" strokeDasharray="4 4" />
        ))}

        {/* ══════════ LAYER 1 — CLIENT ══════════ */}

        {/* Recruiter Dashboard */}
        <g>
          <rect x="80" y="44" width="160" height="52" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="160" y="67" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Recruiter Dashboard</text>
          <text x="160" y="82" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">React · Next.js</text>
        </g>

        {/* Candidate Portal */}
        <g>
          <rect x="290" y="44" width="160" height="52" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="370" y="67" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Candidate Portal</text>
          <text x="370" y="82" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">React · WebRTC</text>
        </g>

        {/* ATS Webhooks */}
        <g>
          <rect x="500" y="44" width="160" height="52" rx="6" fill="white" stroke="#6b6b6b" strokeWidth="1" strokeDasharray="4 3" />
          <text x="580" y="67" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">ATS Integrations</text>
          <text x="580" y="82" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Greenhouse · Lever</text>
        </g>

        {/* ══════════ LAYER 2 — API ══════════ */}

        {/* API Gateway */}
        <g>
          <rect x="175" y="104" width="300" height="52" rx="6" fill="#1a1a1a" />
          <text x="325" y="127" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="white" textAnchor="middle">API Gateway</text>
          <text x="325" y="143" fontFamily="'Inter'" fontSize="9.5" fill="#9e9e9e" textAnchor="middle">Node.js · Express · Rate Limiting · JWT Auth</text>
        </g>

        {/* Job Service */}
        <g>
          <rect x="80" y="184" width="140" height="52" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="150" y="207" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Job Service</text>
          <text x="150" y="222" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">CRUD · Rubric Gen</text>
        </g>

        {/* Candidate Service */}
        <g>
          <rect x="244" y="184" width="162" height="52" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="325" y="207" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Candidate Service</text>
          <text x="325" y="222" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Pipeline · Scoring</text>
        </g>

        {/* Notification Service */}
        <g>
          <rect x="430" y="184" width="160" height="52" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="510" y="207" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Notification Svc</text>
          <text x="510" y="222" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Email · Slack · Calendar</text>
        </g>

        {/* Audit Log */}
        <g>
          <rect x="614" y="184" width="140" height="52" rx="6" fill="white" stroke="#6b6b6b" strokeWidth="1" strokeDasharray="4 3" />
          <text x="684" y="207" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Audit Logger</text>
          <text x="684" y="222" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Immutable · EEOC</text>
        </g>

        {/* ══════════ LAYER 3 — AI CORE ══════════ */}

        {/* Resume Parser */}
        <g>
          <rect x="80" y="324" width="150" height="52" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="155" y="347" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Resume Parser</text>
          <text x="155" y="362" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Semantic Embeddings</text>
        </g>

        {/* Video Transcription */}
        <g>
          <rect x="252" y="324" width="152" height="52" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="328" y="347" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Video Engine</text>
          <text x="328" y="362" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Whisper · Silhouette Mask</text>
        </g>

        {/* Scoring Engine */}
        <g>
          <rect x="426" y="324" width="152" height="52" rx="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="502" y="347" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Scoring Engine</text>
          <text x="502" y="362" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Rubric · Bias Delta</text>
        </g>

        {/* LLM Providers */}
        <g>
          <rect x="600" y="314" width="164" height="72" rx="6" fill="#f5f5f3" stroke="#b0b0b0" strokeWidth="1" />
          <text x="682" y="336" fontFamily="'Inter'" fontSize="10.5" fontWeight="600" fill="#1a1a1a" textAnchor="middle">LLM Providers</text>
          <text x="682" y="351" fontFamily="'Inter'" fontSize="9" fill="#6b6b6b" textAnchor="middle">GPT-4o</text>
          <text x="682" y="364" fontFamily="'Inter'" fontSize="9" fill="#6b6b6b" textAnchor="middle">Claude 3.5 Sonnet</text>
          <text x="682" y="377" fontFamily="'Inter'" fontSize="9" fill="#6b6b6b" textAnchor="middle">Gemini 1.5 Pro</text>
        </g>

        {/* ══════════ LAYER 4 — STORAGE ══════════ */}

        {/* Postgres */}
        <g>
          <rect x="80" y="444" width="130" height="48" rx="6" fill="white" stroke="#6b6b6b" strokeWidth="1" strokeDasharray="4 3" />
          <text x="145" y="465" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">PostgreSQL</text>
          <text x="145" y="481" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Candidates · Jobs</text>
        </g>

        {/* Vector DB */}
        <g>
          <rect x="230" y="444" width="130" height="48" rx="6" fill="white" stroke="#6b6b6b" strokeWidth="1" strokeDasharray="4 3" />
          <text x="295" y="465" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Qdrant</text>
          <text x="295" y="481" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Embeddings Store</text>
        </g>

        {/* Redis */}
        <g>
          <rect x="380" y="444" width="130" height="48" rx="6" fill="white" stroke="#6b6b6b" strokeWidth="1" strokeDasharray="4 3" />
          <text x="445" y="465" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Redis</text>
          <text x="445" y="481" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Cache · Sessions</text>
        </g>

        {/* S3 */}
        <g>
          <rect x="530" y="444" width="130" height="48" rx="6" fill="white" stroke="#6b6b6b" strokeWidth="1" strokeDasharray="4 3" />
          <text x="595" y="465" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">S3 / R2</text>
          <text x="595" y="481" fontFamily="'Inter'" fontSize="9.5" fill="#6b6b6b" textAnchor="middle">Video · Resume files</text>
        </g>

        {/* ══════════ ARROWS ══════════ */}

        {/* Client → API Gateway */}
        <line x1="160" y1="96" x2="280" y2="104" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arrow-accent)" />
        <line x1="370" y1="96" x2="360" y2="104" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arrow-accent)" />
        <line x1="510" y1="96" x2="420" y2="104" stroke="#b0b0b0" strokeWidth="1.2" markerEnd="url(#arrow)" />

        {/* API Gateway → Services */}
        <line x1="240" y1="156" x2="185" y2="184" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arrow-accent)" />
        <line x1="310" y1="156" x2="320" y2="184" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arrow-accent)" />
        <line x1="390" y1="156" x2="475" y2="184" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arrow-accent)" />
        <line x1="440" y1="156" x2="650" y2="184" stroke="#b0b0b0" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow)" />

        {/* Services → AI Core */}
        <line x1="155" y1="236" x2="155" y2="324" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arrow-accent)" />
        <line x1="325" y1="236" x2="325" y2="324" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arrow-accent)" />
        <line x1="500" y1="236" x2="500" y2="324" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arrow-accent)" />

        {/* AI Core → LLM */}
        <line x1="580" y1="350" x2="600" y2="350" stroke="#b0b0b0" strokeWidth="1.2" markerEnd="url(#arrow)" />
        <line x1="432" y1="350" x2="600" y2="350" stroke="#b0b0b0" strokeWidth="1" strokeDasharray="4 3" />

        {/* AI Core → Storage */}
        <line x1="155" y1="376" x2="145" y2="444" stroke="#b0b0b0" strokeWidth="1" markerEnd="url(#arrow)" />
        <line x1="328" y1="376" x2="295" y2="444" stroke="#b0b0b0" strokeWidth="1" markerEnd="url(#arrow)" />
        <line x1="502" y1="376" x2="445" y2="444" stroke="#b0b0b0" strokeWidth="1" markerEnd="url(#arrow)" />
        <line x1="560" y1="376" x2="578" y2="444" stroke="#b0b0b0" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arrow)" />

        {/* Legend */}
        <rect x="80" y="500" width="12" height="1.5" fill="#1a1a1a" />
        <text x="98" y="503" fontFamily="'Inter'" fontSize="9" fill="#9e9e9e">primary flow</text>
        <line x1="175" y1="500" x2="194" y2="500" stroke="#b0b0b0" strokeWidth="1" strokeDasharray="4 3" />
        <text x="200" y="503" fontFamily="'Inter'" fontSize="9" fill="#9e9e9e">secondary / async</text>
        <rect x="310" y="494" width="14" height="14" rx="3" fill="none" stroke="#b0b0b0" strokeWidth="1" strokeDasharray="3 2" />
        <text x="330" y="503" fontFamily="'Inter'" fontSize="9" fill="#9e9e9e">external / optional</text>
      </svg>
    </div>
  )
}

/* ─── Tech Stack chips ─────────────────────────────────────────────────── */
const stack = [
  { label: 'React', group: 'Frontend' },
  { label: 'Next.js', group: 'Frontend' },
  { label: 'Node.js', group: 'Backend' },
  { label: 'Express', group: 'Backend' },
  { label: 'PostgreSQL', group: 'Data' },
  { label: 'Qdrant', group: 'Data' },
  { label: 'Redis', group: 'Data' },
  { label: 'Whisper', group: 'AI' },
  { label: 'GPT-4o', group: 'AI' },
  { label: 'Claude 3.5', group: 'AI' },
  { label: 'Gemini 1.5', group: 'AI' },
  { label: 'WebRTC', group: 'Frontend' },
]

/* ─── App ──────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="page">

      {/* ── Nav ── */}
      <header className="topbar">
        <div className="topbar__inner">
          <span className="topbar__name">HireLens</span>
          <nav className="topbar__nav">
            <a href="#about">About</a>
            <a href="#architecture">Architecture</a>
            <a href="#stack">Stack</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
      </header>

      <main>

        {/* ── Hero ── */}
        <section className="hero" id="about">
          <div className="wrap">
            <p className="hero__kicker">Personal project · 2026</p>
            <h1 className="hero__title">
              AI-powered recruiting<br />
              <em>without the bias.</em>
            </h1>
            <p className="hero__body">
              HireLens is a research project exploring how async video screening, semantic
              skill-graph matching, and deterministic rubrics can replace guesswork in early-stage
              candidate evaluation — while staying fully auditable and demographically neutral.
            </p>

            <div className="hero__meta">
              <div className="meta-item">
                <span className="meta-item__val">1.8M+</span>
                <span className="meta-item__label">Resumes evaluated</span>
              </div>
              <div className="meta-sep" />
              <div className="meta-item">
                <span className="meta-item__val">0.00%</span>
                <span className="meta-item__label">Bias delta</span>
              </div>
              <div className="meta-sep" />
              <div className="meta-item">
                <span className="meta-item__val">90 s</span>
                <span className="meta-item__label">Per candidate</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="rule"><div className="wrap"><hr /></div></div>

        {/* ── Architecture ── */}
        <section className="section" id="architecture">
          <div className="wrap">
            <div className="section__head">
              <p className="section__label">System Architecture</p>
              <h2 className="section__h2">How it fits together</h2>
              <p className="section__desc">
                Four-layer architecture: client interfaces communicate through a unified API gateway,
                which dispatches to domain services. AI processing runs in an isolated core with
                three LLM providers and a separate vector store for embeddings.
              </p>
            </div>
            <ArchDiagram />
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="rule"><div className="wrap"><hr /></div></div>

        {/* ── Key ideas ── */}
        <section className="section" id="ideas">
          <div className="wrap">
            <div className="section__head">
              <p className="section__label">Design Decisions</p>
              <h2 className="section__h2">What I was trying to solve</h2>
            </div>
            <div className="ideas">
              {[
                {
                  n: '01',
                  title: 'Bias before scoring',
                  body: 'Voice-pitch normalisation and facial silhouette masking happen before any embedding. Demographic signals never reach the model.',
                },
                {
                  n: '02',
                  title: 'Semantic over keyword',
                  body: 'Resume parsing builds a dependency graph of skills, project scopes, and seniority levels — not a bag-of-words regex match.',
                },
                {
                  n: '03',
                  title: 'Async-first video',
                  body: 'Candidates record on their own time. Whisper transcribes, the scoring engine applies rubric vectors, everything is explainable after the fact.',
                },
                {
                  n: '04',
                  title: 'Full audit trail',
                  body: 'Every scoring decision emits an immutable log entry. EEOC and NYC Local Law 144 compliance is structural, not a checklist.',
                },
              ].map(item => (
                <div key={item.n} className="idea">
                  <span className="idea__n">{item.n}</span>
                  <div className="idea__body">
                    <h3 className="idea__title">{item.title}</h3>
                    <p className="idea__desc">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="rule"><div className="wrap"><hr /></div></div>

        {/* ── Stack ── */}
        <section className="section" id="stack">
          <div className="wrap">
            <div className="section__head">
              <p className="section__label">Technology</p>
              <h2 className="section__h2">Stack</h2>
            </div>
            <div className="chips">
              {stack.map(s => (
                <span key={s.label} className="chip">
                  <span className="chip__group">{s.group}</span>
                  {s.label}
                </span>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="wrap footer__inner">
          <span>HireLens — a personal project by David Jennicson</span>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__gh">GitHub ↗</a>
        </div>
      </footer>

    </div>
  )
}
