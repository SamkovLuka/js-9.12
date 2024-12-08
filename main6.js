const links = document.querySelectorAll('#link-list a');


links.forEach(link => {
    if (link.href.startsWith('http://')) {
        link.style.textDecoration = 'dotted underline';
    }
});
