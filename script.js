// Theme management
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem("theme") || "dark"
    this.init()
  }

  init() {
    this.applyTheme()
    this.setupToggle()
  }

  applyTheme() {
    document.documentElement.setAttribute("data-theme", this.theme)
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light"
    localStorage.setItem("theme", this.theme)
    this.applyTheme()
  }

  setupToggle() {
    const toggle = document.getElementById("theme-toggle")
    if (toggle) {
      toggle.addEventListener("click", () => this.toggleTheme())
    }
  }
}

// Initialize theme manager when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new ThemeManager()
})

// Add smooth scrolling for any future anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
