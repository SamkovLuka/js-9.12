let lastSelected = null;

document.querySelectorAll('#book-list li').forEach((item, index, array) => {
    item.addEventListener('click', (e) => {
        const isCtrl = e.ctrlKey;
        const isShift = e.shiftKey;

        if (isCtrl) {
            item.classList.toggle('selected');
        } else if (isShift && lastSelected !== null) {
            let start = Math.min(index, lastSelected);
            let end = Math.max(index, lastSelected);

            for (let i = start; i <= end; i++) {
                array[i].classList.add('selected');
            }
        } else {
            item.classList.add('selected');
            if (lastSelected !== null && lastSelected !== item) {
                lastSelected.classList.remove('selected');
            }
        }
        lastSelected = item;
    });
});
