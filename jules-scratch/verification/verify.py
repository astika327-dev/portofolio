import asyncio
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()

        # Mobile viewport
        await page.set_viewport_size({"width": 375, "height": 667})
        await page.goto("http://localhost:3000")
        await page.screenshot(path="jules-scratch/verification/screenshot-mobile.png")

        # Tablet viewport
        await page.set_viewport_size({"width": 768, "height": 1024})
        await page.goto("http://localhost:3000")
        await page.screenshot(path="jules-scratch/verification/screenshot-tablet.png")

        # Desktop viewport
        await page.set_viewport_size({"width": 1920, "height": 1080})
        await page.goto("http://localhost:3000")
        await page.screenshot(path="jules-scratch/verification/screenshot-desktop.png")

        await browser.close()

asyncio.run(main())
