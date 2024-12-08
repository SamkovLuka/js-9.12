const trackbar = document.getElementById('trackbar');
const thumb = document.getElementById('thumb');

thumb.addEventListener('mousedown', (e) => {
    const trackbarRect = trackbar.getBoundingClientRect();

    const onMouseMove = (event) => {
        let newLeft = event.clientX - trackbarRect.left - thumb.offsetWidth / 2;
        if (newLeft < 0) newLeft = 0;
        if (newLeft > trackbar.offsetWidth - thumb.offsetWidth) {
            newLeft = trackbar.offsetWidth - thumb.offsetWidth;
        }

        thumb.style.left = newLeft + 'px';
    };

    const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});