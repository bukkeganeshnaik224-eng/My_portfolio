import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'

export default function Contact() {
  return (
    <section id="contact" className="py-28 md:py-32">
      <div className="max-w-[1180px] mx-auto px-6">
        <Reveal>
          <div className="glass p-8 md:p-13 text-center relative overflow-hidden" style={{ padding: '52px' }}>
            <div
              className="absolute -top-[40%] left-1/2 -translate-x-1/2 pointer-events-none"
              style={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(76,201,240,.12), transparent 65%)' }}
            />
            <div className="relative z-[2]">
              <Eyebrow center>Get In Touch</Eyebrow>
              <h2 className="font-display font-bold text-[clamp(26px,4vw,40px)] mb-3.5">
                Let's build something together
              </h2>
              <p className="text-muted max-w-[480px] mx-auto mb-8 text-[15px] leading-[1.7]">
                Open to internships, placements, hackathons and collaborations. Reach out any time.
              </p>
              <div className="flex justify-center gap-9 flex-wrap mb-8 font-mono text-sm">
                <div>
                  <span className="block text-[10.5px] uppercase tracking-wide text-muted-2 mb-1.5">Email</span>
                  <a href="mailto:bukkeganeshnaik224@gmail.com" className="text-white no-underline hover:text-cyan">
                    bukkeganeshnaik224@gmail.com
                  </a>
                </div>
                <div>
                  <span className="block text-[10.5px] uppercase tracking-wide text-muted-2 mb-1.5">Mobile</span>
                  <a href="tel:+917815915648" className="text-white no-underline hover:text-cyan">
                    +91-7815915648
                  </a>
                </div>
              </div>
              <div className="flex justify-center gap-3.5 flex-wrap">
                <a
                  href="mailto:bukkeganeshnaik224@gmail.com"
                  className="inline-flex items-center gap-2 font-semibold text-[13.5px] px-5.5 py-3 rounded-[9px] bg-gradient-to-br from-cyan to-violet text-[#04070c] hover:-translate-y-0.5 transition-all"
                  style={{ padding: '11px 22px' }}
                >
                  Email Me
                </a>
                <a
                  href="https://www.linkedin.com/in/ganesh-naik-bukke-584909315/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[13.5px] rounded-[9px] border border-border-2 bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan hover:-translate-y-0.5 transition-all"
                  style={{ padding: '11px 22px' }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bukkeganeshnaik224-eng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-[13.5px] rounded-[9px] border border-border-2 bg-white/[0.03] hover:bg-white/[0.07] hover:border-cyan hover:-translate-y-0.5 transition-all"
                  style={{ padding: '11px 22px' }}
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
