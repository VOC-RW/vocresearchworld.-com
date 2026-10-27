const H = `
<header class="site-header">
  <div class="wrap nav">

    <a class="brand" href="index.html">
      <img src="logo.svg" alt="VOC Research World">
      <span>
        <strong>VOC RESEARCH WORLD</strong>
        <small>SCIENCE · INNOVATION · GLOBAL IMPACT</small>
      </span>
    </a>

    <button class="menu" aria-label="Menu">☰</button>

    <nav class="links">
      <a href="index.html">Home</a>
      <a href="research.html">Research</a>
      <a href="research-projects.html">Projects</a>
      <a href="student-research.html">Student Research</a>
      <a href="knowledge.html">Knowledge Hub</a>
      <a href="publications.html">Publications</a>
      <a href="authors.html">Authors</a>
      <a href="founder.html">Founder</a>
      <a href="instrumentation.html">Instrumentation</a>
      <a href="data-ai.html">Data &amp; AI</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
      <a class="primary" href="submit.html">Submit Research</a>
    </nav>

  </div>
</header>
`;

const F = `
<footer class="footer">
  <div class="wrap footer-grid">

    <div>
      <a class="brand" href="index.html">
        <img src="logo.svg" alt="VOC Research World">
        <span>
          <strong>VOC RESEARCH WORLD</strong>
          <small>SCIENCE · INNOVATION · GLOBAL IMPACT</small>
        </span>
      </a>

      <p>
        A developing scientific research, publication and knowledge platform.
        Advancing scientific knowledge, innovation and global impact.
      </p>
    </div>

    <div>
      <div class="footer-title">RESEARCH</div>
      <a href="research.html">Research Areas</a>
      <a href="research-projects.html">Research Projects</a>
      <a href="student-research.html">Student Research Centre</a>
      <a href="instrumentation.html">Instrumentation</a>
      <a href="data-ai.html">Data &amp; AI</a>
    </div>

    <div>
      <div class="footer-title">PUBLICATION</div>
      <a href="knowledge.html">Knowledge Hub</a>
      <a href="publications.html">Publications</a>
      <a href="authors.html">Authors</a>
    </div>

    <div>
      <div class="footer-title">ORGANIZATION</div>
      <a href="about.html">About</a>
      <a href="founder.html">Founder &amp; Creator</a>
      <a href="submit.html">Submit Research</a>
      <a href="contact.html">Contact</a>
    </div>

    <div>
      <div class="footer-title">CONTACT</div>
      <a href="mailto:vocresearchworld@gmail.com">
        vocresearchworld@gmail.com
      </a>
      <a href="mailto:aolaniyan59@gmail.com">
        aolaniyan59@gmail.com
      </a>
    </div>

  </div>

  <div class="wrap footer-bottom">
    <span>© 2026 VOC Research World. All rights reserved.</span>
    <span>Science · Innovation · Global Impact</span>
  </div>
</footer>
`;

document.getElementById("header").innerHTML = H;
document.getElementById("footer").innerHTML = F;

// Mobile navigation menu
const m = document.querySelector(".menu");
const n = document.querySelector(".links");

m?.addEventListener("click", () => {
  n?.classList.toggle("open");
});

// Highlight the current page in the navigation
const p = location.pathname.split("/").pop() || "index.html";
// Track visits to public pages across VOC Research World.
(async function trackWebsiteVisit() {
try {
const { supabase } = await import("./supabase-config.js");

let sessionKey = sessionStorage.getItem("voc_reader_session");

if (!sessionKey) {
  sessionKey =
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : Date.now() + "-" + Math.random().toString(36).slice(2);

  sessionStorage.setItem("voc_reader_session", sessionKey);
}

const { error } = await supabase.rpc("track_site_visit", {
  p_session_key: sessionKey,
  p_page_path: location.pathname,
  p_publication_id: null
});

if (error) {
  console.error("Website visit tracking failed:", error);
}

} catch (error) {
console.error("Website visit tracking failed:", error);
}
})();
