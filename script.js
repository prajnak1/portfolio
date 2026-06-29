/* ── Hamburger menu ── */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/* ── Scroll-reveal setup ── */
document.addEventListener("DOMContentLoaded", () => {

  // Add .reveal to elements we want to animate in on scroll
  const revealSelectors = [
    ".timeline-item",
    ".details-container",
    ".color-container",
    ".contact-info-upper-container",
  ];
  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      el.classList.add("reveal");
    });
  });

  // Add stagger reveal to skill article rows
  document.querySelectorAll(".article-container").forEach(el => {
    el.classList.add("reveal-stagger");
  });

  // Intersection observer — fires when element enters viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal, .reveal-stagger").forEach(el => {
    observer.observe(el);
  });

  // Section title underline grow animation
  const titleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("title-visible");
        titleObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll("#experience .title, #skills .title, #projects .title").forEach(el => {
    titleObserver.observe(el);
  });

  // Subtle parallax on profile image (desktop only)
  const pic = document.querySelector(".section__pic-container");
  if (pic && window.innerWidth > 768) {
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      pic.style.transform = `translateY(${scrollY * 0.06}px)`;
    }, { passive: true });
  }

  // Nav: highlight active section as user scrolls
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.style.color = "";
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.style.color = "var(--sage)";
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => navObserver.observe(s));
});
   
        
    
    

    
        
    


