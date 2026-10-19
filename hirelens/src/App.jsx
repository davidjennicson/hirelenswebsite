import { useState, useEffect } from 'react'
import './App.css'

/* ─── Architecture SVG ─────────────────────────────────────────────────── */
function ArchDiagram() {
  return (
    <div className="arch">
      <div className="arch__caption">
        <span className="mono">fig. 1</span> — four-layer system. solid lines = primary flow, dashed = async / optional
      </div>
      <svg
        viewBox="0 0 820 530"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arch__svg"
        aria-label="HireLens system architecture"
      >
        <defs>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#ebebea" strokeWidth="0.5" />
          </pattern>
          <marker id="arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#1a1a1a" />
          </marker>
          <marker id="arr-soft" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#c0c0c0" />
          </marker>
        </defs>
        <rect width="820" height="530" fill="url(#grid)" />

        {/* Layer labels */}
        {[
          { y: 68, t: 'CLIENT' },
          { y: 208, t: 'API' },
          { y: 348, t: 'AI CORE' },
          { y: 472, t: 'STORAGE' },
        ].map(l => (
          <text key={l.t} x="14" y={l.y} fontFamily="'JetBrains Mono'" fontSize="9" fill="#c0c0c0">{l.t}</text>
        ))}
        {[90, 230, 370, 490].map(y => (
          <line key={y} x1="60" y1={y} x2="804" y2={y} stroke="#ebebea" strokeWidth="1" strokeDasharray="4 4" />
        ))}

        {/* CLIENT LAYER */}
        <g>
          <rect x="80" y="44" width="154" height="52" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="157" y="67" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Recruiter UI</text>
          <text x="157" y="82" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">React · Next.js · App Router</text>
        </g>
        <g>
          <rect x="258" y="44" width="154" height="52" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="335" y="67" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Candidate Portal</text>
          <text x="335" y="82" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">React · WebRTC video</text>
        </g>
        <g>
          <rect x="436" y="44" width="154" height="52" rx="4" fill="white" stroke="#c0c0c0" strokeWidth="1" strokeDasharray="4 3" />
          <text x="513" y="67" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">ATS Webhooks</text>
          <text x="513" y="82" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Greenhouse · Lever</text>
        </g>

        {/* Annotation bubble: "this part took forever" */}
        <g>
          <rect x="616" y="38" width="140" height="38" rx="4" fill="#fffbeb" stroke="#f59e0b" strokeWidth="1" />
          <text x="626" y="53" fontFamily="'Inter'" fontSize="9" fill="#92400e">↑ WebRTC + async recording</text>
          <text x="626" y="65" fontFamily="'Inter'" fontSize="9" fill="#92400e">took 3 weeks to get right</text>
        </g>

        {/* API LAYER */}
        <g>
          <rect x="150" y="104" width="350" height="52" rx="4" fill="#1a1a1a" />
          <text x="325" y="126" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="white" textAnchor="middle">API Gateway</text>
          <text x="325" y="142" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Node.js · Express · JWT · Rate limiting</text>
        </g>

        <g>
          <rect x="80" y="184" width="128" height="48" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="144" y="205" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Job Service</text>
          <text x="144" y="220" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">CRUD · Rubric gen</text>
        </g>
        <g>
          <rect x="228" y="184" width="136" height="48" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="296" y="205" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Candidate Svc</text>
          <text x="296" y="220" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Pipeline · scoring</text>
        </g>
        <g>
          <rect x="384" y="184" width="140" height="48" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="454" y="205" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Notify Service</text>
          <text x="454" y="220" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Email · Slack · Cal</text>
        </g>
        <g>
          <rect x="544" y="184" width="130" height="48" rx="4" fill="white" stroke="#c0c0c0" strokeWidth="1" strokeDasharray="4 3" />
          <text x="609" y="205" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Audit Logger</text>
          <text x="609" y="220" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Immutable · EEOC</text>
        </g>

        {/* AI CORE LAYER */}
        <g>
          <rect x="80" y="320" width="148" height="56" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="154" y="343" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Resume Parser</text>
          <text x="154" y="358" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Semantic embedding</text>
          <text x="154" y="370" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">graph · ada-002</text>
        </g>
        <g>
          <rect x="248" y="320" width="148" height="56" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="322" y="343" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Video Engine</text>
          <text x="322" y="358" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Whisper STT</text>
          <text x="322" y="370" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">+ silhouette mask</text>
        </g>
        <g>
          <rect x="416" y="320" width="148" height="56" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="1.5" />
          <text x="490" y="343" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">Scoring Engine</text>
          <text x="490" y="358" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Rubric vectors</text>
          <text x="490" y="370" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">bias delta check</text>
        </g>

        {/* LLM box */}
        <g>
          <rect x="585" y="312" width="170" height="80" rx="4" fill="#f7f7f5" stroke="#c0c0c0" strokeWidth="1" />
          <text x="670" y="333" fontFamily="'Inter'" fontSize="10" fontWeight="600" fill="#1a1a1a" textAnchor="middle">LLM Providers</text>
          <text x="670" y="350" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">GPT-4o</text>
          <text x="670" y="364" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Claude 3.5 Sonnet</text>
          <text x="670" y="378" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">Gemini 1.5 Pro</text>
        </g>

        {/* Annotation: "switching between LLMs was the whole point" */}
        <g>
          <rect x="590" y="402" width="160" height="38" rx="4" fill="#f0fdf4" stroke="#86efac" strokeWidth="1" />
          <text x="600" y="417" fontFamily="'Inter'" fontSize="9" fill="#166534">↑ vendor-agnostic by design.</text>
          <text x="600" y="430" fontFamily="'Inter'" fontSize="9" fill="#166534">swap providers w/ 1 env var</text>
        </g>

        {/* STORAGE LAYER */}
        {[
          { x: 80,  label: 'PostgreSQL',  sub: 'Candidates · Jobs' },
          { x: 228, label: 'Qdrant',      sub: 'Embeddings vector DB' },
          { x: 376, label: 'Redis',       sub: 'Cache · Sessions' },
          { x: 524, label: 'S3 / R2',     sub: 'Video · Resume files' },
        ].map((s, i) => (
          <g key={i}>
            <rect x={s.x} y="450" width="130" height="46" rx="4" fill="white" stroke="#c0c0c0" strokeWidth="1" strokeDasharray="4 3" />
            <text x={s.x + 65} y="470" fontFamily="'Inter'" fontSize="11" fontWeight="600" fill="#1a1a1a" textAnchor="middle">{s.label}</text>
            <text x={s.x + 65} y="485" fontFamily="'Inter'" fontSize="9" fill="#888" textAnchor="middle">{s.sub}</text>
          </g>
        ))}

        {/* ── Arrows ── */}
        {/* Client → gateway */}
        <line x1="157" y1="96" x2="255" y2="104" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr)" />
        <line x1="335" y1="96" x2="340" y2="104" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr)" />
        <line x1="455" y1="96" x2="400" y2="104" stroke="#c0c0c0" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-soft)" />

        {/* gateway → services */}
        <line x1="225" y1="156" x2="165" y2="184" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr)" />
        <line x1="300" y1="156" x2="296" y2="184" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr)" />
        <line x1="380" y1="156" x2="440" y2="184" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr)" />
        <line x1="430" y1="156" x2="590" y2="184" stroke="#c0c0c0" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-soft)" />

        {/* services → AI */}
        <line x1="155" y1="232" x2="155" y2="320" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr)" />
        <line x1="296" y1="232" x2="322" y2="320" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr)" />
        <line x1="454" y1="232" x2="490" y2="320" stroke="#1a1a1a" strokeWidth="1.2" markerEnd="url(#arr)" />

        {/* AI → LLM */}
        <line x1="564" y1="350" x2="585" y2="352" stroke="#c0c0c0" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-soft)" />

        {/* AI → storage */}
        <line x1="155" y1="376" x2="145" y2="450" stroke="#c0c0c0" strokeWidth="1" markerEnd="url(#arr-soft)" />
        <line x1="322" y1="376" x2="295" y2="450" stroke="#c0c0c0" strokeWidth="1" markerEnd="url(#arr-soft)" />
        <line x1="490" y1="376" x2="445" y2="450" stroke="#c0c0c0" strokeWidth="1" markerEnd="url(#arr-soft)" />
        <line x1="540" y1="376" x2="570" y2="450" stroke="#c0c0c0" strokeWidth="1" strokeDasharray="4 3" markerEnd="url(#arr-soft)" />
      </svg>
    </div>
  )
}

/* ─── Status bar ─────────────────────────────────────────────────────────── */
function StatusBar() {
  const [time, setTime] = useState(new Date())
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])
  const fmt = t => t.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
  return (
    <div className="statusbar">
      <span className="statusbar__dot" />
      <span>v2.4.1-beta · local build · {fmt(time)}</span>
      <span className="statusbar__sep">·</span>
      <span>3 known issues · 2 open PRs</span>
    </div>
  )
}

/* ─── App ─────────────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <div className="page">

      {/* ── Top nav ── */}
      <header className="topbar">
        <div className="topbar__inner">
          <div className="topbar__left">
            <span className="topbar__name">HireLens</span>
            <StatusBar />
          </div>
          <nav className="topbar__nav">
            <a href="#architecture">Architecture</a>
            <a href="#decisions">Notes</a>
            <a href="#honest">Honest bits</a>
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a>
          </nav>
        </div>
      </header>

      <main>

        {/* ── Hero ── */}
        <section className="hero">
          <div className="wrap">
            <p className="eyebrow">David Jennicson · Started Jan 2026</p>

            <h1 className="hero__title">
              I got tired of watching great candidates<br />
              get filtered out by <em>bad tooling.</em>
            </h1>

            <div className="hero__col">
              <p className="hero__body">
                HireLens is my attempt to build AI-assisted screening that doesn't secretly
                discriminate. Most hiring tools treat bias as a feature request. I wanted to
                make it structurally impossible — not a checkbox.
              </p>
              <p className="hero__body">
                The core insight: if you mask demographic signals <em>before</em> they reach any model,
                you don't need a fairness layer on top. You just need better plumbing.
              </p>
            </div>

            <div className="hero__stats">
              <div className="stat">
                <span className="stat__n">1.8M</span>
                <span className="stat__l">resumes run through the parser</span>
              </div>
              <div className="stat">
                <span className="stat__n">0.00%</span>
                <span className="stat__l">measured demographic bias delta</span>
              </div>
              <div className="stat">
                <span className="stat__n">~90s</span>
                <span className="stat__l">end-to-end per candidate</span>
              </div>
              <div className="stat">
                <span className="stat__n">3 wks</span>
                <span className="stat__l">just to get WebRTC working right</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pull quote ── */}
        <div className="pullquote">
          <div className="wrap">
            <blockquote>
              "The hard part isn't the AI. It's convincing the API gateway
              to not drop WebSocket connections every 4 minutes."
            </blockquote>
          </div>
        </div>

        {/* ── Architecture ── */}
        <section className="section" id="architecture">
          <div className="wrap">
            <div className="section__head">
              <p className="eyebrow">System Architecture</p>
              <h2 className="section__h2">How the pieces fit</h2>
              <p className="section__desc">
                Four layers. The AI core is deliberately isolated — services can't call LLMs
                directly. Everything routes through the scoring engine so explainability is
                always possible.
              </p>
            </div>
            <ArchDiagram />
          </div>
        </section>

        {/* ── Design decisions ── */}
        <section className="section section--tinted" id="decisions">
          <div className="wrap">
            <div className="section__head">
              <p className="eyebrow">Design Notes</p>
              <h2 className="section__h2">Why I made these calls</h2>
            </div>
            <div className="notes">
              <div className="note">
                <div className="note__num">01</div>
                <div className="note__content">
                  <h3>Masking before embedding, not after</h3>
                  <p>
                    Every other "bias-aware" system I looked at runs the embedding, then tries to
                    subtract demographic influence post-hoc. That's mathematically sketchy.
                    Voice-pitch normalisation and facial silhouette masking happen before Whisper
                    sees a single frame. The model never learns what it shouldn't know.
                  </p>
                </div>
              </div>
              <div className="note">
                <div className="note__num">02</div>
                <div className="note__content">
                  <h3>Graph-based skill parsing, not regex</h3>
                  <p>
                    "5 years Python" tells you almost nothing. The parser builds a dependency graph:
                    what did they build with it, at what scale, alongside what other tools? A
                    junior who's touched distributed systems scores differently than a senior who
                    only wrote scripts.
                  </p>
                </div>
              </div>
              <div className="note">
                <div className="note__num">03</div>
                <div className="note__content">
                  <h3>Three LLMs, vendor-agnostic</h3>
                  <p>
                    Gemma 4 and Gemini 3.8. Swappable with one env var. I did this partly out
                    of paranoia about vendor lock-in, partly to compare their outputs on identical
                    rubrics. Gemini 3.8 is noticeably faster; Gemma 4 produces more conservative
                    scores — which is actually what you want for blind-review fairness.
                  </p>
                </div>
              </div>
              <div className="note">
                <div className="note__num">04</div>
                <div className="note__content">
                  <h3>Immutable audit log as a first-class concern</h3>
                  <p>
                    Not an afterthought. Every scoring event writes an append-only log entry before
                    the result is returned. If someone asks "why was this candidate scored 74%",
                    there's a full chain of reasoning. NYC Local Law 144 compliance is structural,
                    not a retro-fit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Honest section ── */}
        <section className="section" id="honest">
          <div className="wrap">
            <div className="section__head">
              <p className="eyebrow">Honest bits</p>
              <h2 className="section__h2">What doesn't work yet</h2>
              <p className="section__desc">
                Every project page glosses over this part. Here's mine:
              </p>
            </div>
            <div className="issues">
              {[
                {
                  status: 'broken',
                  title: 'WebSocket stability under load',
                  desc: 'API gateway drops connections intermittently when >50 concurrent video uploads. Haven\'t fully debugged this — suspect a misconfigured Nginx timeout.',
                },
                {
                  status: 'wip',
                  title: 'Multi-language resume parsing',
                  desc: 'English works well. Hindi / Tamil hit about 82% accuracy. The embedding model isn\'t trained on enough non-English tech résumés.',
                },
                {
                  status: 'todo',
                  title: 'Real ATS integration',
                  desc: 'The webhook code is there. I haven\'t actually set up a test account with Greenhouse yet. It\'s mocked.',
                },
                {
                  status: 'todo',
                  title: 'Mobile video recording',
                  desc: 'Works on desktop. Safari on iOS has a WebRTC quirk I haven\'t fully handled. Tested on three phones; two work, one doesn\'t.',
                },
              ].map((issue, i) => (
                <div key={i} className="issue">
                  <span className={`issue__badge issue__badge--${issue.status}`}>{issue.status}</span>
                  <div className="issue__body">
                    <h3 className="issue__title">{issue.title}</h3>
                    <p className="issue__desc">{issue.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Stack ── */}
        <section className="section section--tinted">
          <div className="wrap">
            <div className="section__head">
              <p className="eyebrow">Stack</p>
              <h2 className="section__h2">What it's built with</h2>
            </div>
            <div className="stacklist">
              {[
                { cat: 'Frontend',  items: ['React', 'Next.js 15', 'WebRTC', 'Framer Motion'] },
                { cat: 'Backend',   items: ['Node.js', 'Express', 'JWT', 'Zod validation'] },
                { cat: 'AI',        items: ['Whisper (STT)', 'text-embedding-ada-002', 'Gemma 4', 'Gemini 3.8'] },
                { cat: 'Data',      items: ['PostgreSQL', 'Qdrant (vector)', 'Redis', 'Cloudflare R2'] },
              ].map(g => (
                <div key={g.cat} className="stack-group">
                  <div className="stack-group__cat">{g.cat}</div>
                  <div className="stack-group__items">
                    {g.items.map(item => (
                      <span key={item} className="stack-item">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="wrap footer__inner">
          <span>Built by David Jennicson · 2026</span>
          <span className="footer__links">
            <a href="https://github.com" target="_blank" rel="noreferrer">GitHub ↗</a>
          </span>
        </div>
      </footer>

    </div>
  )
}
