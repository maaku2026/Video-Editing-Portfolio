import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { EASE, lockScroll } from '../lib/motion'
import { FilmStill } from './Media'

const REEL_SEEDS = [
  'reel-2026-01',
  'reel-2026-14',
  'reel-2026-27',
  'reel-2026-38',
  'reel-2026-49',
  'reel-2026-55',
]
const RUNTIME = 72

const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
}

export default function ShowreelModal({ onClose }: { onClose: () => void }) {
  const [playing, setPlaying] = useState(true)
  const [time, setTime] = useState(0)

  useEffect(() => {
    lockScroll(true)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === ' ') {
        event.preventDefault()
        setPlaying((value) => !value)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      lockScroll(false)
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  useEffect(() => {
    if (!playing) return
    const id = window.setInterval(() => {
      setTime((value) => (value + 1) % RUNTIME)
    }, 1000)
    return () => window.clearInterval(id)
  }, [playing])

  return (
    <motion.div
      className="modal reel-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="modal__scrim" onClick={onClose} aria-hidden="true" />
      <motion.div
        className="reel"
        role="dialog"
        aria-modal="true"
        aria-label="Showreel 2026"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="reel__bar">
          <span className="mono">Now screening — Showreel 2026</span>
          <button type="button" className="modal__close" onClick={onClose} aria-label="Close">
            <span>Close</span>
            <span aria-hidden="true">✕</span>
          </button>
        </div>

        <button
          type="button"
          className="reel__screen"
          onClick={() => setPlaying((value) => !value)}
          aria-label={playing ? 'Pause showreel' : 'Play showreel'}
        >
          <FilmStill
            seeds={REEL_SEEDS}
            className="reel__still"
            interval={playing ? 1700 : 100000}
            width={1800}
            height={1000}
          />
          <span className="reel__letterbox reel__letterbox--top" />
          <span className="reel__letterbox reel__letterbox--bottom" />
          <span className="reel__vignette" />
          <span className="reel__grain" />

          <span className="reel__hud reel__hud--tl mono">MAAKU / REEL 2026</span>
          <span className="reel__hud reel__hud--tr mono">
            <i className="dot dot--rec" /> REC
          </span>
          <span className="reel__hud reel__hud--bl mono">4K · 24 FPS · 9:16 + 16:9</span>
          <span className="reel__hud reel__hud--br mono">{formatTime(time)}</span>

          <span className={`reel__pause${playing ? ' is-playing' : ''}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>

        <div className="reel__controls">
          <div className="reel__track" aria-hidden="true">
            <span style={{ width: `${(time / RUNTIME) * 100}%` }} />
          </div>
          <div className="reel__controls-row">
            <div className="reel__buttons">
              <button
                type="button"
                className="reel__btn"
                onClick={() => setPlaying((value) => !value)}
                aria-label={playing ? 'Pause' : 'Play'}
              >
                {playing ? '❚❚' : '▶'}
              </button>
              <span className="mono">
                {formatTime(time)} / {formatTime(RUNTIME)}
              </span>
            </div>
            <span className="mono reel__hint">Press space to pause · ESC to close</span>
            <button type="button" className="reel__btn" onClick={onClose} aria-label="Close player">
              ✕
            </button>
          </div>
        </div>

        <div className="reel__foot">
          <p>
            A 72-second pass through recent work — DTC ad cuts, a VSL, a brand film and a few
            long-form moments. Full edits and individual case notes are available on request.
          </p>
          <a className="link-arrow" href="mailto:chelvin.marc@gmail.com?subject=Showreel%202026">
            Request the reel <span>↗</span>
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}
