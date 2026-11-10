export const still = (seed: string, w = 1600, h = 900) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}?grayscale`

export type Project = {
  id: string
  title: string
  client: string
  year: string
  category: string
  role: string
  duration: string
  format: string
  seeds: string[]
  summary: string
  body: string[]
  credits: { label: string; value: string }[]
  stats: { label: string; value: string }[]
}

export const projects: Project[] = [
  {
    id: 'tee-time',
    title: 'Tee Time',
    client: 'Play Golf',
    year: '2026',
    category: 'Short-Form Ads',
    role: 'Editor / Motion',
    duration: '00:15 × 6',
    format: '9:16 · 4:5 · 1:1',
    seeds: ['tee-time-01', 'tee-time-14', 'tee-time-27', 'tee-time-38'],
    summary:
      'Six 15-second ad cuts for a DTC golf brand — one shoot, six angles, built to be tested against each other.',
    body: [
      'The shoot gave us clean product shots and a lot of good swing footage. The real work was deciding what each ad was selling: feel, performance, price or the look. Six different first frames, six different promises.',
      'Every cut lands inside 15 seconds with a hook under three, burned-in captions and a clear end card. Delivered in vertical, feed and square so the media buyer could test without waiting on re-exports.',
    ],
    credits: [
      { label: 'Client', value: 'Play Golf' },
      { label: 'Direction', value: 'Maaku' },
      { label: 'Edit & motion', value: 'Maaku' },
      { label: 'Sound', value: 'Licensed track' },
    ],
    stats: [
      { label: 'Ad variants', value: '6' },
      { label: 'Ratios', value: '3' },
      { label: 'First cut', value: '48h' },
    ],
  },
  {
    id: 'long-game',
    title: 'The Long Game',
    client: 'Crypto Consulting Institute',
    year: '2025',
    category: 'Long-Form / VSL',
    role: 'Editor / Captions',
    duration: '08:42',
    format: '16:9 · 4K',
    seeds: ['long-game-04', 'long-game-22', 'long-game-41', 'long-game-09'],
    summary:
      'An eight-minute video sales letter cut to hold attention past the first minute — where most VSLs lose the room.',
    body: [
      'We had a strong script but a dry interview. The edit breaks the talking head every few seconds: b-roll, simple motion callouts, screen recordings and tight jump cuts that remove every wasted breath.',
      'Chapters are built in for YouTube, and the whole piece is captioned by hand rather than auto-generated. The result reads clearly with the sound off and does not feel like a lecture with the sound on.',
    ],
    credits: [
      { label: 'Client', value: 'Crypto Consulting Institute' },
      { label: 'Script', value: 'Client team' },
      { label: 'Edit & captions', value: 'Maaku' },
      { label: 'Motion', value: 'Maaku' },
    ],
    stats: [
      { label: 'Runtime', value: '8:42' },
      { label: 'Revision rounds', value: '2' },
      { label: 'Turnaround', value: '5 days' },
    ],
  },
  {
    id: 'morning-light',
    title: 'Morning Light',
    client: 'Sarao Tembo',
    year: '2025',
    category: 'Brand Film',
    role: 'Editor / Sound',
    duration: '03:18',
    format: '2.39:1 · 4K',
    seeds: ['morning-light-33', 'morning-light-12', 'morning-light-77', 'morning-light-05'],
    summary:
      'A three-minute brand story cut from a day of interviews and quiet b-roll. Slow where it matters, sharp where it counts.',
    body: [
      'The first assembly ran eleven minutes. Most of the work was subtraction — letting pauses sit, cutting around the interview instead of over it, and refusing to illustrate every line with a shot.',
      'Sound carries the transitions: room tone, footsteps, a single music cue that arrives late and leaves early. The grade stays warm and neutral so the film feels like memory rather than a campaign.',
    ],
    credits: [
      { label: 'Client', value: 'Sarao Tembo' },
      { label: 'Direction', value: 'Client team' },
      { label: 'Editor', value: 'Maaku' },
      { label: 'Colour & sound', value: 'Maaku' },
    ],
    stats: [
      { label: 'Runtime', value: '03:18' },
      { label: 'Footage', value: '4 h' },
      { label: 'Cut versions', value: '3' },
    ],
  },
  {
    id: 'hook-stack',
    title: 'Hook Stack',
    client: 'Aura Skin (Concept)',
    year: '2025',
    category: 'UGC Ads',
    role: 'Editor / Captions',
    duration: '00:21 × 10',
    format: '9:16 · 1080p',
    seeds: ['hook-stack-08', 'hook-stack-31', 'hook-stack-52', 'hook-stack-19'],
    summary:
      'A self-initiated study in hooks: one product, one creator, ten different openings — and what each does to retention.',
    body: [
      'A concept project built from a single UGC-style clip. Ten edits, each opening on a different angle: problem, proof, price, weird visual, direct callout. The body stays consistent so only the hook changes.',
      'It is the same testing framework I bring to client work: make the variable obvious, cut the rest tight, and give each version a clean file name so the results mean something.',
    ],
    credits: [
      { label: 'Concept', value: 'Maaku' },
      { label: 'Footage', value: 'Licensed UGC' },
      { label: 'Edit & captions', value: 'Maaku' },
      { label: 'Music', value: 'Licensed track' },
    ],
    stats: [
      { label: 'Hooks', value: '10' },
      { label: 'Ratio', value: '9:16' },
      { label: 'Delivery', value: '3 days' },
    ],
  },
  {
    id: 'founder-series',
    title: 'Founder Series',
    client: 'Northline (Concept)',
    year: '2024',
    category: 'Podcast → Shorts',
    role: 'Editor / Motion',
    duration: '12:04 + 12 shorts',
    format: '16:9 + 9:16',
    seeds: ['founder-series-11', 'founder-series-46', 'founder-series-29', 'founder-series-63'],
    summary:
      'One 12-minute founder interview turned into twelve vertical shorts — without the clips feeling like leftovers.',
    body: [
      'The long-form is multi-cam with clean lower thirds and a cold open pulled from the strongest 20 seconds of the conversation. The shorts are built from scratch: new first frame, new pacing, captions designed for mute viewing.',
      'Each short gets its own hook and end card, plus a title that could work as a standalone post. The full set is named for the source episode so the team can find any clip later.',
    ],
    credits: [
      { label: 'Concept', value: 'Maaku' },
      { label: 'Format', value: 'Interview / multi-cam' },
      { label: 'Edit & motion', value: 'Maaku' },
      { label: 'Captions', value: 'Maaku' },
    ],
    stats: [
      { label: 'Shorts', value: '12' },
      { label: 'Long-form', value: '12:04' },
      { label: 'Versions', value: '2' },
    ],
  },
  {
    id: 'manila-five-am',
    title: 'Manila / 5AM',
    client: 'Personal',
    year: '2024',
    category: 'Travel Short',
    role: 'Editor / Sound',
    duration: '01:48',
    format: '16:9 · 4K',
    seeds: ['manila-5am-21', 'manila-5am-58', 'manila-5am-03', 'manila-5am-44'],
    summary:
      'A personal cut of one morning in Metro Manila. Shot handheld, edited quietly, kept as a reminder to shoot for myself.',
    body: [
      'No brief, no client, no deadline. Just an hour of footage before the city woke up and a rule: no shot longer than it needed to be, no music until the last third.',
      'It is where I test ideas that are too small for a client project — new transition sounds, caption timing, a slower pace than an ad would ever allow.',
    ],
    credits: [
      { label: 'Camera', value: 'Maaku' },
      { label: 'Editor', value: 'Maaku' },
      { label: 'Sound', value: 'Maaku' },
      { label: 'Location', value: 'Metro Manila' },
    ],
    stats: [
      { label: 'Runtime', value: '01:48' },
      { label: 'Shots', value: '46' },
      { label: 'Location', value: 'Manila' },
    ],
  },
]

export const services = [
  {
    index: '01',
    title: 'Short-Form Ads',
    blurb:
      'Hook-first edits for Meta, TikTok and YouTube Shorts. UGC, founder-led and product demos, cut to be tested — not just watched.',
    points: ['Hook & angle variants', 'UGC / product footage', 'Burned-in captions', '9:16, 4:5, 1:1 exports'],
  },
  {
    index: '02',
    title: 'Long-Form Edits',
    blurb:
      'YouTube videos, VSLs, interviews and documentary-style pieces. Structure first, then pacing, b-roll and sound until it holds.',
    points: ['Story structure', 'Multi-cam sync', 'B-roll & sound design', 'YouTube chapters'],
  },
  {
    index: '03',
    title: 'Motion & Captions',
    blurb:
      'Kinetic type, simple callouts and subtitle systems that feel native to the platform — built in After Effects, delivered editable.',
    points: ['Kinetic typography', 'Brand stings & end cards', 'Subtitle styling', 'Editable templates'],
  },
  {
    index: '04',
    title: 'Monthly Editing',
    blurb:
      'A steady output of ads and long-form without hiring in-house. Monthly batches, priority turnaround and one organised asset library.',
    points: ['Ad batches', 'Long-form + shorts', 'Shared review board', 'Priority queue'],
  },
]

export const process = [
  {
    index: '01',
    title: 'Brief',
    caption: 'Goals before cuts',
    body: 'We agree on the offer, the audience, the platform and the length of every deliverable. No footage gets touched until the target is clear.',
    meta: 'Day 0 — 1',
  },
  {
    index: '02',
    title: 'Hook',
    caption: 'Win the first 3 seconds',
    body: 'For ads, I map hooks and angles before the first cut. For long-form, I find the strongest opening in the footage and build backwards.',
    meta: 'Day 1 — 2',
  },
  {
    index: '03',
    title: 'Cut',
    caption: 'Rhythm, captions, sound',
    body: 'You see a rough cut early, while changing the story is still cheap. We refine pacing, captions, motion and mix together — in one feedback pass.',
    meta: 'Day 2 — 5',
  },
  {
    index: '04',
    title: 'Deliver',
    caption: 'Every format, named right',
    body: 'Vertical, feed, square and widescreen exports. Captions burned in and as SRT. Files named the way your media buyer or editor expects.',
    meta: 'Day 5+',
  },
]

export const stats = [
  { value: 3, suffix: '+', label: 'Years freelancing' },
  { value: 120, suffix: '+', label: 'Videos delivered' },
  { value: 3, suffix: '', label: 'Long-term brands' },
  { value: 48, suffix: 'h', label: 'Typical first cut' },
]

export const tools = [
  'CapCut',
  'Premiere Pro',
  'After Effects',
  'Audition',
  'Media Encoder',
  'Frame.io',
  'Google Drive',
  'Notion',
]

export const approach = [
  {
    index: '01',
    title: 'Hook first',
    tag: '0 — 3s',
    body: 'The first three seconds decide the rest. I front-load the strongest frame, claim or visual and build the edit around it — not around the footage order.',
  },
  {
    index: '02',
    title: 'Cut for retention',
    tag: 'Pacing',
    body: 'Pattern interrupts, clean jump cuts and captions that read with the sound off. Every beat earns the next one, whether the video runs 15 seconds or 15 minutes.',
  },
  {
    index: '03',
    title: 'Built to ship',
    tag: 'Delivery',
    body: 'Every ratio, length and file name your platform or media buyer needs. No last-minute re-exports, no missing caption files, no guessing which version is final.',
  },
]

export const packages = [
  {
    name: 'Single edit',
    price: 'Custom',
    unit: '/ project',
    note: 'One video',
    features: ['1 ad or long-form edit', 'Hook + burned-in captions', 'All standard ratios', '2 revision rounds', '72h first cut'],
    highlight: false,
  },
  {
    name: 'Ad pack',
    price: 'Custom',
    unit: '/ campaign',
    note: 'Most booked',
    features: ['6–10 ad variations', 'Hook / angle testing', 'UGC or product footage', 'Motion callouts', 'Priority turnaround'],
    highlight: true,
  },
  {
    name: 'Monthly',
    price: 'Custom',
    unit: '/ retainer',
    note: 'Limited slots',
    features: ['Monthly ad batches', 'Long-form + shorts', 'Shared review board', 'Priority queue', 'Direct chat access'],
    highlight: false,
  },
]

export const faqs = [
  {
    q: 'What do you need to start an edit?',
    a: 'The raw footage, any brand assets, a reference or two, and a short brief: who it is for, where it will run and what you want the viewer to do. For long-form I also need the script or interview notes if they exist.',
  },
  {
    q: 'How fast can you turn a project around?',
    a: 'Short-form ads usually take 48 to 72 hours from receiving footage. Long-form edits run three to five days depending on length and feedback speed. Rush work is possible when the schedule allows — ask before booking.',
  },
  {
    q: 'Is CapCut enough, or do you use Premiere?',
    a: 'Both. CapCut for fast, native-feeling short-form and quick turnaround. Premiere Pro and After Effects for long-form, multi-cam, sound work and custom motion. The tool follows the job, not the other way around.',
  },
  {
    q: 'How many revisions are included?',
    a: 'Two rounds on every project, collected in one pass with timecodes so nothing gets lost. Extra rounds are billed hourly. I would rather get notes early on a rough cut than polish something that is going the wrong way.',
  },
  {
    q: 'Can you work with UGC and phone footage?',
    a: 'Yes — most DTC work starts as vertical phone footage. I can clean up audio, stabilise, add captions and cut around imperfect takes. Send what you have and I will tell you honestly what is usable.',
  },
  {
    q: 'Do you work with agencies and in-house teams?',
    a: 'Regularly. I can join your Frame.io, Drive or Slack, follow your naming conventions and deliver in whatever folder structure your team already uses. White-label work is welcome.',
  },
]

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Packages', href: '#packages' },
  { label: 'Contact', href: '#contact' },
]
