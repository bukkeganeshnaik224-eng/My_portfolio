import Reveal from './Reveal.jsx'
import profile from '../assets/profile.jpg'

export default function About() {
  return (
    <section id="about" className="py-28 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[.85fr_1.15fr] gap-14 items-center">
        <Reveal className="glass p-8">
          <div className="flex justify-between items-center mb-5 font-mono text-[11px] text-muted-2">
            <span>ID_CARD // 0x01</span>
            <span className="flex items-center gap-1.5 text-green">
              <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_#39d98a]" />
              ACTIVE
            </span>
          </div>
          <div className="w-16 h-16 rounded-[14px] overflow-hidden border border-border-2 mb-4">
            <img src={profile} alt="Ganesh Naik" className="w-full h-full object-cover" />
          </div>
          <Field k="Name" v="Bukke Ganesh Naik" />
          <Field k="Role" v="B.Tech CSE Student · Developer" />
          <Field k="Focus" v="AI & Cybersecurity" />
          <Field k="University" v="Mohan Babu University, Tirupati" last />
        </Reveal>

        <div>
          <Reveal>
            <div className="font-mono text-xs tracking-[0.15em] uppercase text-cyan flex items-center gap-2.5 mb-3.5">
              <span className="inline-block bg-cyan" style={{ width: 22, height: 1 }} />
              About Me
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display font-bold text-[clamp(28px,4vw,44px)] tracking-tight mb-5">
              The person behind the code
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="text-muted text-base leading-[1.85]">
              I am a <strong className="text-white font-semibold">B.Tech student at Mohan Babu University, Tirupati</strong>.
              I am passionate about technology, programming, AI and cybersecurity. I enjoy learning
              new technologies, solving problems and building practical projects.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <p className="text-muted text-base leading-[1.85] mt-5">
              Every project starts with a question I want answered — that curiosity is what pulls
              me from a Java console app to an AI pipeline to a security concept, and back again.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({ k, v, last }) {
  return (
    <div className={last ? '' : 'mb-3.5'}>
      <div className="font-mono text-[11px] text-muted-2 uppercase tracking-wide">{k}</div>
      <div className="text-[14.5px] text-white mt-1">{v}</div>
    </div>
  )
}
