export const homeSections = [
  { id: "home", short: "H", label: "Home" },
  { id: "about", short: "01", label: "Profile" },
  { id: "skills", short: "02", label: "Capabilities" },
  { id: "projects", short: "03", label: "Selected Work" },
  { id: "journey", short: "04", label: "Journey" },
  { id: "credentials", short: "05", label: "Credentials" },
  { id: "resume", short: "06", label: "Folio" },
  { id: "record", short: "07", label: "Open Record" },
  { id: "contact", short: "08", label: "Contact" }
];

export const pageFlow = {
  "/": {
    next: { path: "/projects", label: "Projects" }
  },
  "/projects": {
    prev: { path: "/", label: "Home" },
    next: { path: "/blog", label: "Journal" }
  },
  "/blog": {
    prev: { path: "/projects", label: "Projects" },
    next: { path: "/events", label: "Events" }
  },
  "/events": {
    prev: { path: "/blog", label: "Journal" },
    next: { path: "/certifications", label: "Credentials" }
  },
  "/certifications": {
    prev: { path: "/events", label: "Events" },
    next: { path: "/", label: "Home" }
  }
};

export function getPageFlow(pathname) {
  const basePath = `/${pathname.split("/")[1] || ""}`;

  if (pathname === "/") {
    return pageFlow["/"];
  }

  return pageFlow[basePath] ?? null;
}