// ======== Config (edit sesuai punyamu) ========
const OWNER_EMAIL = "astika327@gmail.com";
const WA_NUMBER   = "6282146178461"; // int'l format tanpa '+'
const RESUME_URL  = "assets/Putu-Astika-Resume.pdf"; // pastikan file ini ada

// ======== Theme toggle ========
const html = document.documentElement;
const themeBtn = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) html.dataset.theme = savedTheme;
themeBtn?.addEventListener("click", () => {
  const next = html.dataset.theme === "dark" ? "light" : "dark";
  html.dataset.theme = next;
  localStorage.setItem("theme", next);
});

// ======== Smooth in-page anchors ========
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior:"smooth", block:"start" }); }
  });
});

// ======== Footer year ========
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

// ======== Contact actions ========
const form    = document.getElementById("mailForm");
const copyBtn = document.getElementById("copyEmail");
const waLink  = document.getElementById("wa");
const printBtn= document.getElementById("printBtn");
const shareBtn= document.getElementById("shareBtn");
const dlResume= document.getElementById("dlResume");

// Ensure resume link points to config
if (dlResume) dlResume.setAttribute("href", RESUME_URL);

function getPayload() {
  const n = form?.elements["name"]?.value?.trim()  || "";
  const e = form?.elements["email"]?.value?.trim() || "";
  const m = form?.elements["msg"]?.value?.trim()   || "";
  return { n, e, m };
}
function buildMailto({n,e,m}) {
  const subject = encodeURIComponent(`Work inquiry — ${n || "Portfolio visitor"}`);
  const body    = encodeURIComponent(`${m}\n\n— ${n}${e ? " ("+e+")" : ""}`);
  return `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
}

// Send via mailto
form?.addEventListener("submit", (ev) => {
  ev.preventDefault();
  const p = getPayload();
  if (!p.n || !p.e || !p.m) { alert("Please fill name, email, and a short message."); return; }
  window.location.href = buildMailto(p);
});

// Copy email
copyBtn?.addEventListener("click", async (ev) => {
  ev.preventDefault();
  try {
    await navigator.clipboard.writeText(OWNER_EMAIL);
    copyBtn.textContent = "Copied!";
    setTimeout(() => (copyBtn.textContent = "Copy Email"), 1200);
  } catch {
    alert("Clipboard blocked. Copy manually: " + OWNER_EMAIL);
  }
});

// WhatsApp deep link
waLink?.addEventListener("click", (ev) => {
  const { n, e, m } = getPayload();
  if (!m) { ev.preventDefault(); alert("Please write a short message first."); return; }
  const text = encodeURIComponent(`Hi, I'm ${n}${e ? " ("+e+")" : ""}. ${m}`);
  waLink.setAttribute("href", `https://wa.me/${6282146178461}?text=${text}`);
});

// Print page (use print CSS to show résumé)
printBtn?.addEventListener("click", () => window.print());

// Share Page (Web Share API + clipboard fallback)
shareBtn?.addEventListener("click", async () => {
  const shareData = { title: document.title, text: "My portfolio — Putu Astika", url: window.location.href };
  if (navigator.share) {
    try { await navigator.share(shareData); } catch { /* user cancelled */ }
  } else {
    try {
      await navigator.clipboard.writeText(shareData.url);
      shareBtn.textContent = "Link Copied";
      setTimeout(() => (shareBtn.textContent = "Share Page"), 1200);
    } catch {
      alert("Copy this URL:\n" + shareData.url);
    }
  }
});
