export function updateActiveLinks() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const href = link.getAttribute("href")?.replace(/\/$/, "") || "/";
    if (path === href || (path.startsWith(href)) && href !== "/") {
      link.setAttribute("data-active", "current");
    } else {
      link.setAttribute("data-active", "none");
    }
  });
}