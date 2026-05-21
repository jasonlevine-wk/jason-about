/**
 * Jason Levine — playful about page
 * Edit the CONTENT object to tune copy.
 */

const CONTENT = {
  name: "Jason Levine",
  titleLine: "Product Design Director · Seattle",
  bio: `I am a design leader who still loves pixels, systems, and the messy middle where research meets launch. I have spent years scaling UX orgs, teaching designers how to think in information architecture, and lately helping teams design trustworthy AI-native experiences. When I am not on my Mac, I am probably on a bike, in the kitchen, or razzing my teenage daughters.`,

  linkedInUrl: "https://www.linkedin.com/in/jasonl/",
  portfolioUrl: "http://www.perfectpixels.com",

  /** Optional Slack deep link: Profile → … → Copy member ID, then slack://user?team=YOUR_TEAM_ID&id=YOUR_MEMBER_ID */
  slackDmLink: null,

  /** Preferred file if present (also listed first in candidates below) */
  profileImage: "profile.png",
  /** Tried in order until one loads — keep your file next to index.html or add paths here */
  profileImageCandidates: [
    "./profile.jpg",
    "./profile.jpeg",
    "./profile.png",
    "./Profile.jpg",
    "profile.jpg",
    "profile.jpeg",
    "profile.png",
    "images/profile.jpg",
    "images/profile.png",
  ],
  /** Shown when the user picks Simon Templar in the Volvo quiz — save your still as this file next to index.html */
  saintRevealImage: "templer.jpg",

  cosmicNote:
    "Born Oct 14, 1971 · 8:00 PM · Santa Monica, CA. Sun + Moon follow that date and time (Moon is commonly Leo for this window—chart sites agree in spirit if not to the minute). Rising sign is a playful placeholder until you paste your own Ascendant from a full chart calculator.",

  placements: [
    {
      label: "Sun",
      sign: "Libra",
      sym: "♎",
      blurb: "Partnership, taste, and “what’s fair for everyone in the room?”",
    },
    {
      label: "Moon",
      sign: "Leo",
      sym: "♌",
      blurb: "Warm-hearted reactions, loyal hype, and storytelling with feeling.",
    },
    {
      label: "Rising",
      sign: "Gemini (placeholder)",
      sym: "♊",
      blurb: "Swap me for your real Ascendant from a chart app — first impressions move fast with time and latitude.",
    },
  ],

  howIWork: [
    { emoji: "🎯", label: "What I value", text: "Do not bury the “why” or the “so what.”" },
    { emoji: "🧠", label: "How I evaluate", text: "Show me your thinking, not just the deck." },
    { emoji: "🌙", label: "Best hours", text: "Night owl. I get clarity when the inbox goes quiet." },
    { emoji: "💬", label: "Preferred channel", text: "Slack over email, every time." },
    { emoji: "🤝", label: "Feedback style", text: "Direct but kind. Tell me the hard stuff early." },
    { emoji: "🛠️", label: "Learning style", text: "I learn by doing — prototypes beat debates." },
  ],

  milestones: [
    {
      era: "Growing up",
      title: "Santa Monica kid",
      text: "California roots, curiosity about culture and craft, and an early love of organized chaos (books, music, and big ideas).",
    },
    {
      era: "College",
      title: "Graphic design at CSUN",
      text: "Formal training in visual design — typography, layout, and the discipline of making ideas legible.",
    },
    {
      era: "Agencies + brands",
      title: "From IA to creative direction",
      text: "Siegel+Gale in New York / LA / SF, then Virgin in London — brand systems, storytelling, and global creative leadership.",
    },
    {
      era: "Product era",
      title: "Ramp → Amazon",
      text: "Deep enterprise UX at Ramp, then years at Amazon shipping customer experiences at massive scale.",
    },
    {
      era: "2018",
      title: "Indeed in Austin",
      text: "Director of User Experience — leading UX through a high-growth job-search product chapter.",
    },
    {
      era: "2019 – 2026",
      title: "AWS — emergent + agentic AI",
      text: "Principal UX designer → Head of UX for emergent technologies → Head of UX for Agentic AI Experiences — building the next wave of AI-native products.",
    },
    {
      era: "Teaching",
      title: "University of Washington",
      text: "Affiliate instructor since 2012 — Informatics + MCDM — IA, interactive design, and translating industry practice for students.",
    },
    {
      era: "Now",
      title: "Still designing the future",
      text: "Leading multidisciplinary UX for agentic AI experiences while mentoring the next generation of designers and researchers.",
    },
  ],

  intoNow: [
    { emoji: "🪵", text: "Rebuilding my backyard deck" },
    { emoji: "🎨", text: "Painting" },
    { emoji: "🚴", text: "Biking" },
    { emoji: "🎙️", text: "Listening to Pivot Podcast" },
    { emoji: "🍝", text: "Cooking Italian + Mexican dishes" },
    { emoji: "🎮", text: "GTA V — driving around LA, zero chaos" },
    { emoji: "☢️", text: "Watching Fallout season 2" },
    { emoji: "📖", text: "Rereading the Steve Jobs biography" },
    { emoji: "🎓", text: "Teaching on the side at UW" },
  ],

  favoriteMovieQuote: {
    film: "Office Space",
    line: "Brian here has 37 pieces of Flair today, and a terrific smile.",
    youtubeId: "_ChQK8j6so8",
  },

  truths: [
    { id: "t1", text: "I went to Richard Branson's private island.", lie: false },
    { id: "t2", text: "I have lived in New York, London, Seattle, and Los Angeles.", lie: false },
    { id: "t3", text: "I was an amateur competitive surfer.", lie: true },
  ],

  bands: [
    { artist: "New Order", song: "Blue Monday", spotifyQuery: "New Order Blue Monday" },
    { artist: "Joy Division", song: "Love Will Tear Us Apart", spotifyQuery: "Joy Division Love Will Tear Us Apart" },
    { artist: "Arcade Fire", song: "After Life", spotifyQuery: "Arcade Fire After Life" },
    { artist: "Clairo", song: "Sofia", spotifyQuery: "Clairo Sofia" },
  ],

  spotifyUserUrl: "https://open.spotify.com/user/1276466774?si=21d8ead350cb447f",

  car: {
    title: "1971 Volvo P1800",
    blurb:
      "She is in the garage and very much part of the family — just patiently waiting for a summer of TLC to get back on the road. Classic lines, analog soul, and the best kind of project car energy.",
  },

  spyQuiz: {
    prompt: "Which superspy made the Volvo P1800 iconic on screen?",
    options: [
      {
        id: "bond",
        label: "James Bond",
        sub: "GoldenEye",
        correct: false,
        fact: "GoldenEye’s Bond famously leaned into BMW roadsters and the DB5 — different spy, different silhouette.",
      },
      {
        id: "saint",
        label: "Simon Templar",
        sub: "The Saint (TV)",
        correct: true,
        fact: "Roger Moore’s Saint turned the P1800 into a small-screen legend — white hat, dry wit, Swedish steel.",
      },
      {
        id: "phelps",
        label: "Jim Phelps",
        sub: "Mission: Impossible (original TV)",
        correct: false,
        fact: "Phelps had tape decks and rubber masks on lock — the P1800’s starring role belongs to another British troublemaker.",
      },
    ],
  },
};

const SIGNS = [
  { id: "aries", name: "Aries", sym: "♈" },
  { id: "taurus", name: "Taurus", sym: "♉" },
  { id: "gemini", name: "Gemini", sym: "♊" },
  { id: "cancer", name: "Cancer", sym: "♋" },
  { id: "leo", name: "Leo", sym: "♌" },
  { id: "virgo", name: "Virgo", sym: "♍" },
  { id: "libra", name: "Libra", sym: "♎" },
  { id: "scorpio", name: "Scorpio", sym: "♏" },
  { id: "sagittarius", name: "Sagittarius", sym: "♐" },
  { id: "capricorn", name: "Capricorn", sym: "♑" },
  { id: "aquarius", name: "Aquarius", sym: "♒" },
  { id: "pisces", name: "Pisces", sym: "♓" },
];

const VIBE_LINES = {
  aries: "Aries + my Libra Sun? We would argue beautifully, then ship the v1 before dinner.",
  taurus: "Taurus: you bring the calm playlist; I bring the wild roadmap. Somehow we make it elegant.",
  gemini: "Gemini squared: two curious minds, zero boring meetings, possibly too many side quests.",
  cancer: "Cancer: you guard the vibes; I polish the narrative. Instant trust-building energy.",
  leo: "Leo: we would hype each other’s decks sincerely and mean it.",
  virgo: "Virgo: you catch the edge cases; I hold the vision. Unstoppable combo if we remember snacks.",
  libra: "Libra: double scales — we debate fonts until the stars align, then celebrate with something well-designed.",
  scorpio: "Scorpio: intensity meets diplomacy. We go deep fast, but we land on something honest.",
  sagittarius: "Sagittarius: big ideas, bigger road trips, and at least one “what if we prototyped it this weekend?”",
  capricorn: "Capricorn: you build the plan; I paint the north star. Executive-ready and still human.",
  aquarius: "Aquarius: future-forward chaos (the good kind). We would whiteboard speculative AI until someone makes us stop.",
  pisces: "Pisces: dream logic meets systems thinking. We would make something strangely poetic and still usable.",
};

const NEW_ORDER_ANSWER = 8;

let truthsLocked = false;
let spyLocked = false;
let bandMeta = [];
let currentPlaying = -1;
const audioEl = () => document.getElementById("preview-audio");

function esc(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = `
    <header class="hero">
      <img
        id="hero-avatar"
        class="hero-avatar"
        src=""
        alt=""
        width="112"
        height="112"
        decoding="async"
      />
      <h1>${esc(CONTENT.name)}</h1>
      <p class="title">${esc(CONTENT.titleLine)}</p>
      <p class="bio">${esc(CONTENT.bio)}</p>
      <div class="hero-btn-row">
        <a class="btn btn-primary" href="${esc(CONTENT.linkedInUrl)}" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn btn-primary" href="${esc(CONTENT.portfolioUrl)}" target="_blank" rel="noopener">My portfolio</a>
      </div>
    </header>

    <section class="section" id="truths">
      <div class="section-head-row section-head">
        <span class="emoji">🎲</span><h2>Two truths &amp; a lie</h2>
        <span class="badge" id="truth-badge">0/1</span>
      </div>
      <div class="card">
        <p class="game-hint" style="margin:0">Can you spot the lie? Tap the one you think is made up.</p>
        <div class="truth-options" id="truth-options"></div>
        <div class="game-feedback" id="truth-feedback" style="display:none"></div>
        <button type="button" class="btn btn-primary" style="width:100%;margin-top:0.85rem;display:none" id="truth-replay">Play again →</button>
      </div>
    </section>

    <section class="section" id="work">
      <div class="section-head"><span class="emoji">📡</span><h2>How I work</h2></div>
      <div class="card nested" style="padding:0.85rem">
        <div class="work-grid">
          ${CONTENT.howIWork
            .map(
              (w) => `
            <div class="work-item">
              <span class="wi-emoji">${w.emoji}</span>
              <div>
                <p class="label">${esc(w.label)}</p>
                <p class="body">${esc(w.text)}</p>
              </div>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="path">
      <div class="section-head"><span class="emoji">🛤️</span><h2>My path here</h2></div>
      <div class="card">
        <div class="timeline">
          ${CONTENT.milestones
            .map(
              (m) => `
            <div class="tl-item">
              <p class="tl-era">${esc(m.era)}</p>
              <h3>${esc(m.title)}</h3>
              <p>${esc(m.text)}</p>
            </div>`
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="music">
      <div class="section-head"><span class="emoji">🎧</span><h2>Favorite bands (tap the cover)</h2></div>
      <div class="card" id="band-card">
        <p class="game-hint" style="margin:0 0 0.5rem">
          ~30s preview via Apple’s catalog when available — otherwise we bounce you to Spotify search.
        </p>
        <div id="band-rows"></div>
        <p class="now-playing" id="now-playing" aria-live="polite"></p>
        <div class="follow-row">
          <a class="btn btn-primary" href="${esc(CONTENT.spotifyUserUrl)}" target="_blank" rel="noopener">Follow on Spotify</a>
        </div>
      </div>
    </section>

    <section class="section" id="new-order-game">
      <div class="section-head"><span class="emoji">🪩</span><h2>New Order live counter</h2></div>
      <div class="card">
        <p class="game-hint" style="margin:0">How many times have I seen <strong>New Order</strong> live?</p>
        <div class="guess-row">
          <label for="no-guess" class="game-hint">Your guess</label>
          <input id="no-guess" type="number" inputmode="numeric" min="0" max="99" placeholder="?" />
          <button type="button" class="btn btn-primary" id="no-submit">Guess</button>
        </div>
        <div class="game-feedback" id="no-feedback" style="display:none"></div>
      </div>
    </section>

    <section class="section" id="into">
      <div class="section-head"><span class="emoji">🔥</span><h2>What I am into right now</h2></div>
      <div class="card">
        <div class="pill-cloud">
          ${CONTENT.intoNow.map((p) => `<span class="pill"><span>${p.emoji}</span>${esc(p.text)}</span>`).join("")}
        </div>
      </div>
    </section>

    <section class="section" id="movie-quote">
      <div class="section-head"><span class="emoji">🎬</span><h2>Favorite movie line</h2></div>
      <div class="card">
        <blockquote class="movie-quote">
          <p>“${esc(CONTENT.favoriteMovieQuote.line)}”</p>
        </blockquote>
        <p class="movie-film">${esc(CONTENT.favoriteMovieQuote.film)}</p>
        <div class="yt-embed">
          <iframe
            src="https://www.youtube-nocookie.com/embed/${esc(CONTENT.favoriteMovieQuote.youtubeId)}"
            title="${esc(CONTENT.favoriteMovieQuote.film)} — YouTube"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <section class="section" id="car">
      <div class="section-head"><span class="emoji">🚗</span><h2>My Volvo summer project</h2></div>
      <div class="card">
        <h3 style="margin:0 0 0.5rem">${esc(CONTENT.car.title)}</h3>
        <p class="game-hint" style="margin:0">${esc(CONTENT.car.blurb)}</p>
        <p class="game-hint" style="margin-top:0.85rem;margin-bottom:0">${esc(CONTENT.spyQuiz.prompt)}</p>
        <div class="spy-options" id="spy-options"></div>
        <div class="game-feedback" id="spy-feedback" style="display:none;margin-top:0.75rem"></div>
        <figure id="spy-reveal-photo" class="spy-reveal-photo" hidden>
          <img
            src="${esc(CONTENT.saintRevealImage)}"
            alt="Roger Moore as Simon Templar with the Volvo P1800, license plate ST 1"
            width="800"
            height="520"
            loading="lazy"
            decoding="async"
          />
          <figcaption class="game-hint spy-reveal-caption">The Saint — ST 1</figcaption>
        </figure>
        <button type="button" class="btn btn-primary" id="spy-replay" style="display:none;width:100%;margin-top:0.85rem">Play again →</button>
      </div>
    </section>

    <section class="section" id="cosmic">
      <div class="section-head"><span class="emoji">✨</span><h2>Cosmic blueprint</h2></div>
      <div class="card">
        ${CONTENT.placements
          .map(
            (p) => `
          <div class="placement-card">
            <p class="pc-label">${esc(p.label)}</p>
            <div class="placement-row">
              <div class="z-sym" aria-hidden="true">${p.sym}</div>
              <div>
                <h3>${esc(p.sign)}</h3>
                <p>${esc(p.blurb)}</p>
              </div>
            </div>
          </div>`
          )
          .join("")}
        <p class="game-hint" style="margin:0.5rem 0 0">${esc(CONTENT.cosmicNote)}</p>
      </div>
      <div class="card" style="margin-top:0.75rem">
        <h3 style="margin:0 0 0.35rem;font-size:1.05rem">How would we vibe?</h3>
        <p class="zodiac-intro">Pick your sun sign:</p>
        <div class="zodiac-grid" id="zodiac-grid">
          ${SIGNS.map(
            (s) => `
            <button type="button" class="z-btn" data-sign="${s.id}" aria-label="${esc(s.name)}">
              <span class="z-sym">${s.sym}</span>
              <span>${esc(s.name)}</span>
            </button>`
          ).join("")}
        </div>
        <div class="vibe-result" id="vibe-result" role="status"></div>
      </div>
    </section>

    <section class="section" id="say-hi">
      <div class="section-head"><span class="emoji">👋</span><h2>Say hi sometime!</h2></div>
      <div class="card" style="text-align:center">
        <p class="game-hint" style="margin:0 0 1rem">Working on something fun, or just want to compare notes on design and AI?</p>
        <button type="button" class="btn btn-primary" id="slack-me-btn" style="width:100%">Slack me @jason.levine</button>
        <p class="game-hint" id="slack-me-hint" style="margin:0.75rem 0 0;display:none" role="status"></p>
      </div>
    </section>

    <footer>
      Built as a tiny static page — tweak <code style="color:var(--muted)">app.js</code> and ship anywhere.
    </footer>
  `;

  mountBands();
  mountTruths();
  mountSpy();
  mountZodiac();
  mountNewOrderGame();
  mountSayHi();
  prefetchBandArt();
  setupHeroAvatar();
}

const HERO_AVATAR_FALLBACK_SVG =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#a855f7"/><stop offset="1" stop-color="#5b21b6"/></linearGradient></defs><circle cx="56" cy="56" r="56" fill="url(#g)"/><text x="56" y="64" text-anchor="middle" fill="white" font-family="system-ui,sans-serif" font-size="32" font-weight="700">JL</text></svg>`
  );

function setupHeroAvatar() {
  const img = document.getElementById("hero-avatar");
  if (!img) return;

  const paths = [];
  if (CONTENT.profileImage) {
    const p = CONTENT.profileImage.replace(/^\.\//, "");
    paths.push("./" + p, p);
  }
  if (Array.isArray(CONTENT.profileImageCandidates)) {
    paths.push(...CONTENT.profileImageCandidates);
  }
  const unique = [...new Set(paths.filter(Boolean))];

  let i = 0;
  const applyFallback = () => {
    img.src = HERO_AVATAR_FALLBACK_SVG;
    img.alt = "";
  };

  const tryNext = () => {
    if (i >= unique.length) {
      applyFallback();
      return;
    }
    const url = unique[i];
    const probe = new Image();
    probe.onload = () => {
      img.src = url;
      img.alt = "Jason Levine";
    };
    probe.onerror = () => {
      i += 1;
      tryNext();
    };
    probe.src = url;
  };

  tryNext();
}

function mountBands() {
  const host = document.getElementById("band-rows");
  host.innerHTML = CONTENT.bands
    .map(
      (b, i) => `
    <div class="band-row" data-band="${i}">
      <img class="band-cover" data-band="${i}" src="" alt="${esc(b.artist)} cover" loading="lazy" width="72" height="72" />
      <div class="band-meta">
        <h3>${esc(b.artist)}</h3>
        <p class="track">${esc(b.song)}</p>
      </div>
      <button type="button" class="btn btn-ghost band-open" data-band="${i}">Spotify</button>
    </div>`
    )
    .join("");

  host.querySelectorAll(".band-cover").forEach((img) => {
    img.addEventListener("click", () => playBand(Number(img.dataset.band)));
  });
  host.querySelectorAll(".band-open").forEach((btn) => {
    btn.addEventListener("click", () => openSpotifySearch(CONTENT.bands[Number(btn.dataset.band)]));
  });
}

async function prefetchBandArt() {
  const results = await Promise.all(
    CONTENT.bands.map((b) => itunesLookup(`${b.artist} ${b.song}`).catch(() => null))
  );
  bandMeta = results;
  results.forEach((meta, i) => {
    const img = document.querySelector(`.band-cover[data-band="${i}"]`);
    if (img && meta?.artwork) img.src = meta.artwork;
  });
}

async function itunesLookup(term) {
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("itunes http");
  const data = await res.json();
  const r = data.results?.[0];
  if (!r) return null;
  const art = r.artworkUrl100?.replace("100x100bb", "600x600bb");
  return {
    previewUrl: r.previewUrl || null,
    artwork: art || null,
    trackName: r.trackName,
    artistName: r.artistName,
    spotifyFallback: `https://open.spotify.com/search/${encodeURIComponent(term)}/tracks`,
  };
}

function openSpotifySearch(band) {
  const q = `${band.artist} ${band.song}`;
  window.open(`https://open.spotify.com/search/${encodeURIComponent(q)}/tracks`, "_blank", "noopener,noreferrer");
}

async function playBand(index) {
  const np = document.getElementById("now-playing");
  const a = audioEl();
  document.querySelectorAll(".band-cover").forEach((el) => el.classList.remove("playing"));

  if (currentPlaying === index) {
    a.pause();
    a.removeAttribute("src");
    currentPlaying = -1;
    np.textContent = "";
    return;
  }

  a.pause();
  let meta = bandMeta[index];
  if (!meta) {
    np.textContent = "Looking up preview…";
    try {
      meta = await itunesLookup(`${CONTENT.bands[index].artist} ${CONTENT.bands[index].song}`);
      bandMeta[index] = meta;
    } catch {
      meta = null;
    }
  }

  const cover = document.querySelector(`.band-cover[data-band="${index}"]`);
  if (meta?.artwork && cover && !cover.getAttribute("src")) cover.src = meta.artwork;

  if (meta?.previewUrl) {
    a.src = meta.previewUrl;
    a.load();
    try {
      await a.play();
      currentPlaying = index;
      if (cover) cover.classList.add("playing");
      np.textContent = `Playing preview: ${meta.trackName || CONTENT.bands[index].song}`;
      a.onended = () => {
        currentPlaying = -1;
        document.querySelectorAll(".band-cover").forEach((el) => el.classList.remove("playing"));
        np.textContent = "";
      };
    } catch {
      np.textContent = "Preview blocked by the browser — opening Spotify.";
      openSpotifySearch(CONTENT.bands[index]);
      currentPlaying = -1;
    }
  } else {
    np.textContent = "No preview in catalog — opening Spotify search.";
    openSpotifySearch(CONTENT.bands[index]);
    currentPlaying = -1;
  }
}

function mountTruths() {
  truthsLocked = false;
  const host = document.getElementById("truth-options");
  host.innerHTML = CONTENT.truths
    .map(
      (t) => `
    <button type="button" class="truth-choice" data-lie="${t.lie}" data-id="${t.id}">
      ${esc(t.text)}
    </button>`
    )
    .join("");

  host.querySelectorAll(".truth-choice").forEach((btn) => {
    btn.addEventListener("click", () => onTruthPick(btn));
  });
  const replay = document.getElementById("truth-replay");
  replay.style.display = "none";
  replay.onclick = () => {
    truthsLocked = false;
    mountTruths();
  };
  document.getElementById("truth-feedback").style.display = "none";
  document.getElementById("truth-badge").textContent = "0/1";
}

function onTruthPick(btn) {
  if (truthsLocked) return;
  truthsLocked = true;
  const pickedLie = btn.dataset.lie === "true";
  const all = () => document.querySelectorAll("#truth-options .truth-choice");

  const tagFor = (b, text, colorVar) => {
    const t = document.createElement("span");
    t.className = "choice-tag";
    t.textContent = text;
    t.style.color = `var(${colorVar})`;
    b.appendChild(t);
  };

  if (pickedLie) {
    all().forEach((b) => {
      b.disabled = true;
      const isLie = b.dataset.lie === "true";
      b.classList.add(isLie ? "lie-reveal" : "truth-reveal");
      tagFor(b, isLie ? "← the lie!" : "Truth ✓", isLie ? "--danger" : "--success");
    });
    const fb = document.getElementById("truth-feedback");
    fb.style.display = "block";
    fb.textContent =
      "Nice detective work — you spotted the lie. (I have never been a competitive surfer; I just admire people who can stand on boards.)";
  } else {
    all().forEach((b) => {
      b.disabled = true;
    });
    btn.classList.add("truth-reveal");
    tagFor(btn, "Truth — not the lie", "--success");
    const fb = document.getElementById("truth-feedback");
    fb.style.display = "block";
    fb.textContent =
      "That one is true — I only reveal the card you tapped. Want another shot? Hit play again and guess again.";
  }

  document.getElementById("truth-badge").textContent = "1/1";
  document.getElementById("truth-replay").style.display = "block";
}

function mountSpy() {
  spyLocked = false;
  const host = document.getElementById("spy-options");
  const fb = document.getElementById("spy-feedback");
  const replay = document.getElementById("spy-replay");
  const saintPhoto = document.getElementById("spy-reveal-photo");
  fb.style.display = "none";
  fb.innerHTML = "";
  replay.style.display = "none";
  if (saintPhoto) {
    saintPhoto.hidden = true;
  }
  replay.onclick = () => {
    spyLocked = false;
    mountSpy();
  };

  host.innerHTML = CONTENT.spyQuiz.options
    .map(
      (o) => `
    <button type="button" class="spy-choice" data-spy="${esc(o.id)}">
      <strong>${esc(o.label)}</strong> · ${esc(o.sub)}
    </button>`
    )
    .join("");

  const tag = (el, text, colorVar) => {
    const span = document.createElement("span");
    span.className = "spy-choice-tag";
    span.textContent = text;
    span.style.color = `var(${colorVar})`;
    el.appendChild(span);
  };

  host.querySelectorAll(".spy-choice").forEach((btn) => {
    btn.addEventListener("click", () => {
      if (spyLocked) return;
      spyLocked = true;
      const id = btn.dataset.spy;
      const opt = CONTENT.spyQuiz.options.find((o) => o.id === id);
      if (!opt) return;

      const buttons = () => host.querySelectorAll(".spy-choice");

      if (opt.correct) {
        buttons().forEach((b) => {
          b.disabled = true;
          const bid = b.dataset.spy;
          const o = CONTENT.spyQuiz.options.find((x) => x.id === bid);
          if (o.correct) {
            b.classList.add("spy-correct-reveal");
            tag(b, "Correct ✓", "--success");
          } else {
            b.classList.add("spy-wrong-reveal");
            tag(b, "Not this one", "--muted");
          }
        });
        fb.style.display = "block";
        fb.innerHTML = `<p style="margin:0 0 0.5rem"><strong>Yes!</strong> ${esc(opt.fact)}</p>
          <p style="margin:0;color:var(--success)">Simon Templar + Volvo P1800 = icon energy.</p>`;
        if (saintPhoto) {
          saintPhoto.hidden = false;
        }
      } else {
        buttons().forEach((b) => {
          b.disabled = true;
        });
        btn.classList.add("spy-picked-wrong");
        fb.style.display = "block";
        fb.innerHTML = `<p style="margin:0"><strong>Not quite.</strong> ${esc(opt.fact)}</p>`;
      }
      replay.style.display = "block";
    });
  });
}

function mountSayHi() {
  const btn = document.getElementById("slack-me-btn");
  const hint = document.getElementById("slack-me-hint");
  if (!btn || !hint) return;

  btn.addEventListener("click", async () => {
    const link = CONTENT.slackDmLink;
    if (link) {
      window.location.href = link;
      return;
    }
    try {
      await navigator.clipboard.writeText("@jason.levine");
      hint.textContent =
        "Copied @jason.levine — open Slack, press ⌘K (Mac) or Ctrl+K (Windows), paste, then Enter to open a DM.";
      hint.style.display = "block";
    } catch {
      hint.textContent =
        "Find me in Slack as @jason.levine — Quick Switcher (⌘K / Ctrl+K), type my handle, Enter. Or set slackDmLink in app.js to a slack://user deep link from your Slack profile.";
      hint.style.display = "block";
    }
  });
}

function mountZodiac() {
  const grid = document.getElementById("zodiac-grid");
  const out = document.getElementById("vibe-result");
  grid.querySelectorAll(".z-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      grid.querySelectorAll(".z-btn").forEach((b) => b.classList.remove("selected"));
      btn.classList.add("selected");
      const id = btn.dataset.sign;
      out.classList.add("visible");
      out.textContent = VIBE_LINES[id] || "We would get along.";
    });
  });
}

function mountNewOrderGame() {
  const fb = document.getElementById("no-feedback");
  document.getElementById("no-submit").onclick = () => {
    const raw = document.getElementById("no-guess").value;
    const n = Number(raw);
    fb.style.display = "block";
    if (raw === "" || Number.isNaN(n)) {
      fb.textContent = "Pick a number — even a dramatic one.";
      return;
    }
    if (n === NEW_ORDER_ANSWER) {
      fb.textContent = "Eight! Confetti canon. You are officially on the guest list for the next show.";
      confettiBurst();
      return;
    }
    const d = Math.abs(n - NEW_ORDER_ANSWER);
    if (d >= 6) fb.textContent = "Ice cold — think smaller arena tours, bigger devotion.";
    else if (d >= 3) fb.textContent = "Warm-ish! You feel the fandom, but dial the counter up.";
    else if (d === 1) fb.textContent = "So close I can hear the encore from here.";
    else fb.textContent = "Close enough to feel the smoke machine — try one tick away.";
  };
}

function confettiBurst() {
  const layer = document.createElement("div");
  layer.className = "confetti";
  document.body.appendChild(layer);
  for (let i = 0; i < 48; i++) {
    const p = document.createElement("div");
    const hue = Math.floor(Math.random() * 360);
    const left = Math.random() * 100;
    const dur = 1.8 + Math.random() * 1.2;
    const rot = Math.random() * 360;
    p.className = "conf-piece";
    p.style.setProperty("--r", `${rot}deg`);
    p.style.left = `${left}vw`;
    p.style.background = `hsl(${hue} 85% 60%)`;
    p.style.animationDuration = `${dur}s`;
    p.style.animationDelay = `${Math.random() * 0.4}s`;
    layer.appendChild(p);
  }
  setTimeout(() => layer.remove(), 3200);
}

document.addEventListener("DOMContentLoaded", render);
