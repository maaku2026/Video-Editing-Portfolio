import { Counter } from './Media'
import { Marquee, Reveal } from './Reveal'
import { stats } from '../lib/data'

const clients = ['Play Golf', 'Sarao Tembo', 'Crypto Consulting Institute']

export default function Stats() {
  return (
    <section className="stats-band">
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} className="stat" delay={index * 0.07}>
              <span className="stat__value display">
                <Counter to={stat.value} suffix={stat.suffix} />
              </span>
              <span className="stat__label mono">{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="clients">
        <div className="clients__label mono">Brands I&apos;ve edited for</div>
        <Marquee speed={38}>
          {clients.map((client) => (
            <span className="clients__item" key={client}>
              {client}
              <i aria-hidden="true">✳</i>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
