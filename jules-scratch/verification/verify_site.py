from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.set_viewport_size({"width": 375, "height": 667})  # Mobile viewport
    page.goto("http://localhost:3000")
    assert "Putu Astika" in page.title()
    page.screenshot(path="jules-scratch/verification/homepage.png")

    # Verify navigation toggle
    nav_toggle = page.locator(".nav__toggle")
    nav_menu = page.locator(".nav__menu")

    # Check initial state (closed)
    assert not nav_menu.is_visible()

    # Open menu
    nav_toggle.click()
    assert nav_menu.is_visible()
    page.screenshot(path="jules-scratch/verification/nav_open.png")

    # Close menu
    nav_toggle.click()
    assert not nav_menu.is_visible()

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
