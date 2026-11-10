import { useCallback, useEffect, useState } from 'react'
import type { MouseEvent } from 'react'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import { projects, type Project } from '../lib/data'
import { EASE, lockScroll } from '../lib/motion'
import { FilmStill } from './Media'
import { LineReveal, Reveal } from './Reveal'

export default function Work() {
  const [active, setActive] = useState<Project | null>(null)
  const [hovered, setHovered] = useState<Project | null>(null)
  const closeProject = useCallback(() => setActive(null), [])
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const previewX = useSpring(x, { stiffness: 260, damping: 30, mass: 0.6 })
  const previewY = useSpring(y, { stiffness: 260, damping: 30, mass: 0.6 })

  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    const width = 380
    const height = 250
    const offset = 34
    const px =
      event.clientX + offset + width > window.innerWidth
        ? event.clientX - width - offset
        : event.clientX + offset
    const py = Math.min(
      Math.max(event.clientY - height / 2, 20),
      window.innerHeight - height - 20,
    )
    x.set(px)
    y.set(py)
  }

  return (
    <section className="section work" id="work">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">
              <i className="dot" />
              Selected work / 01
            </span>
            <h2 className="section-title display">
              <LineReveal>Recent</LineReveal>
              <LineReveal delay={0.08}>
                <span className="outline">Cuts</span>
              </LineReveal>
            </h2>
          </div>
          <Reveal className="section-head__note" delay={0.15}>
            <p>
              Six edits from the last two years — DTC ad batches, a VSL, a brand film and one
              personal cut. Short-form and long, all finished and delivered by me.
            </p>
            <span className="mono section-head__count">06 PROJECTS / 2024—2026</span>
          </Reveal>
        </div>

        <div
          className="work-list"
          onMouseMove={handleMove}
          onMouseLeave={() => setHovered(null)}
        >
          {projects.map((project, index) => (
            <motion.button
              type="button"
              key={project.id}
              className="work-row"
              onMouseEnter={() => setHovered(project)}
              onFocus={() => setHovered(project)}
              onBlur={() => setHovered(null)}
              onClick={() => setActive(project)}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-12% 0px' }}
              transition={{ duration: 0.9, ease: EASE, delay: index * 0.045 }}
            >
              <span className="work-row__index mono">{String(index + 1).padStart(2, '0')}</span>
              <span className="work-row__main">
                <span className="work-row__thumb" aria-hidden="true">
                  <FilmStill seeds={project.seeds} width={400} height={240} playing={false} />
                </span>
                <span className="work-row__title display">{project.title}</span>
              </span>
              <span className="work-row__client mono">{project.client}</span>
              <span className="work-row__category mono">{project.category}</span>
              <span className="work-row__year mono">{project.year}</span>
              <span className="work-row__arrow" aria-hidden="true">
                ↗
              </span>
            </motion.button>
          ))}

          <AnimatePresence>
            {hovered && (
              <motion.div
                className="work-preview"
                style={{ x: previewX, y: previewY }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, ease: EASE }}
                aria-hidden="true"
              >
                <FilmStill
                  seeds={hovered.seeds}
                  className="work-preview__still"
                  width={700}
                  height={440}
                  interval={1100}
                />
                <span className="work-preview__meta mono">
                  <span>{hovered.category}</span>
                  <span>{hovered.duration}</span>
                </span>
                <span className="work-preview__play" aria-hidden="true" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Reveal className="work-foot" delay={0.1}>
          <span className="mono">More cuts available on request</span>
          <a className="link-arrow" href="mailto:chelvin.marc@gmail.com?subject=Full%20reel">
            Request the full reel <span>↗</span>
          </a>
        </Reveal>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={closeProject} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    lockScroll(true)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      lockScroll(false)
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <motion.div
      className="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="modal__scrim" onClick={onClose} aria-hidden="true" />
      <motion.div
        className="modal__panel"
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — project details`}
        initial={{ y: 46, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.65, ease: EASE }}
      >
        <div className="modal__bar">
          <span className="mono">
            Project / {project.year} — {project.category}
          </span>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            <span>Close</span>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <div className="modal__hero">
          <FilmStill
            seeds={project.seeds}
            className="modal__still"
            width={1800}
            height={1000}
            interval={3400}
          />
          <div className="modal__hero-overlay" />
          <div className="modal__hero-copy">
            <h2 className="display">{project.title}</h2>
            <div className="modal__hero-tags mono">
              <span>{project.client}</span>
              <span>{project.format}</span>
              <span>{project.duration}</span>
            </div>
          </div>
        </div>

        <div className="modal__body">
          <p className="modal__summary">{project.summary}</p>

          <div className="modal__facts">
            <div>
              <span className="mono">Client</span>
              <strong>{project.client}</strong>
            </div>
            <div>
              <span className="mono">Role</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span className="mono">Year</span>
              <strong>{project.year}</strong>
            </div>
            <div>
              <span className="mono">Runtime</span>
              <strong>{project.duration}</strong>
            </div>
          </div>

          <div className="modal__copy">
            {project.body.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <div className="modal__stats">
            {project.stats.map((stat) => (
              <div key={stat.label}>
                <strong className="display">{stat.value}</strong>
                <span className="mono">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="modal__lower">
            <div className="modal__credits">
              <span className="eyebrow">
                <i className="dot" />
                Credits
              </span>
              <ul>
                {project.credits.map((credit) => (
                  <li key={credit.label}>
                    <span className="mono">{credit.label}</span>
                    <span>{credit.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="modal__cta">
              <h3 className="display">Want the full cut?</h3>
              <p>Full edits, ad variations and case notes are shared privately on request.</p>
              <a
                className="btn btn--solid"
                href={`mailto:chelvin.marc@gmail.com?subject=${encodeURIComponent(project.title)}`}
              >
                <span>Request the cut</span>
                <span className="btn__arrow">↗</span>
              </a>
            </div>
          </div>

          <div className="modal__end mono">
            <span>© {project.year} — Shared privately</span>
            <span>Cut &amp; finished by Maaku</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
