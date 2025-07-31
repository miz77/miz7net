// public/js/random-logo.js
;(function () {
  const logos = [
    '/animation/miz7net_loading_1.svg',
    '/animation/miz7net_loading_2.svg',
    '/animation/miz7net_loading_4.svg',
  ];

  async function loadRandomLogo() {
    try {
      const idx = Math.floor(Math.random() * logos.length);
      const url = logos[idx];
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP status ${res.status}`);
      const svgText = await res.text();
      const wrapper = document.getElementById('logo-wrapper');
      wrapper.innerHTML = svgText;
      wrapper.style.visibility = 'visible';
      console.log('[RandomLogo] loaded:', url);
    } catch (e) {
      console.error('[RandomLogo] failed:', e);
    }
  }

  
  document.addEventListener('DOMContentLoaded', loadRandomLogo);

  
  document.addEventListener('astro:page-load', loadRandomLogo);
})();