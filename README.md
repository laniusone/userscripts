# userscripts
Userscripts for Violentmonkey / Tampermonkey / Greasemonkey

## Download Extension from Chrome Web Store

https://greasyfork.org/en/scripts/438991-download-extension-from-chrome-web-store

Script meant for Ungoogled Chromium, but may be used with any browser to directly download Chrome Extensions from Chrome Web Store.

It adds a floating button in the bottom right corner which let's you download an extension directly.

### Note

* You have to reload the page on extension page, since going to it doesn't actually reload the page, so the script isn't loaded after matching the path. This might be fixed soon, this way or another.

* The script works also for Themes. 

* For best experience using this with Ungoogled Chromium set flag `chrome://flags/#extension-mime-request-handling` to `Always prompt for install`.

Happy ungoogled browsing. :)

## Fix Google Links (no jquery)

https://greasyfork.org/en/scripts/438990-fix-google-links-no-jquery

Prevent google page from replacing search results links with the redirection ones (vanilla JS). Rewritten script found on Greasy Fork, but I don't remember the original author. It basically removes the redirect from Google URLs, and uses vanilla JS.
