import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto("http://localhost:3000")
        await page.screenshot(path="jules-scratch/verification/verification.png")

        # Check that the other pages have been updated
        await page.click('a:has-text("About")')
        await page.wait_for_load_state("networkidle")
        await page.screenshot(path="jules-scratch/verification/about_page.png")

        await browser.close()

asyncio.run(main())
