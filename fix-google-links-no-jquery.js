// ==UserScript==
// @name         Fix Google Links (no jquery)
// @version      1.0
// @namespace    Lanius
// @description  Prevent google page from replacing search results links with the redirection ones (vanilla JS)
// @author       Lanius
// @match        https://www.google.com/search?*
// @icon         https://www.google.com/favicon.ico
// @license      BSD-3-Clause
// @grant        none
// @run-at       document-end
// ==/UserScript==
(function () {
  'use strict';
  [].forEach.call(
    document.querySelectorAll('#rso a[data-jsarwt]'),
    function (el) {
      el.dataset.jsarwt = "";
    });
})();
