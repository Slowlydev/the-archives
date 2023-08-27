// If `prefers-color-scheme` is not supported, fall back to light mode.
// In this case, light.css will be downloaded with `highest` priority.
if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all') {
    document.documentElement.style.display = 'none';
    document.head.insertAdjacentHTML(
        'beforeend',
        '<link rel="stylesheet" href="/resources/css/light.css" onload="document.documentElement.style.display = \'\'">'
    );
}