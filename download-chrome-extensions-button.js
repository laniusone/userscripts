// ==UserScript==
// @name        Download Extension from Chrome Web Store
// @namespace   laniusone
// @match       https://chrome.google.com/webstore/detail/*/*
// @grant       none
// @version     1.0
// @author      laniusone
// @description Script meant for Ungoogled Chromium, but may be used with any browser to directly download Chrome Extensions from Chrome Web Store. It adds floating button to download extensions from Chrome Web Store in bottom right corner.
// ==/UserScript==
let bookmarklet = function () {location.href='https://clients2.google.com/service/update2/crx?response=redirect&acceptformat=crx2,crx3&prodversion='+(navigator.appVersion.match(/Chrome\/(\S+)/)[1])+'&x=id%'+'3D'+(document.querySelector('a[href^="https://chrome.google.com/webstore/report/"]').pathname.match(/[^\/]+\/*$/)[0])+'%'+'26installsource%'+'3Dondemand%'+'26uc';};
button = document.createElement('button');
button.type = 'button;'
button.style.cssText = 'position: fixed; z-index: 9999; bottom: 2%; right: 2%; padding: 10px; color: white; background-color: blue; text-decoration: none;';
button.onclick = bookmarklet;
button.innerText = '+';
button.id = 'custom-extension-download';
document.body.appendChild(button);
