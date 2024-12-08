const newsArray = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    'It has survived not only five centuries, but also the leap into electronic typesetting.',
    'Contrary to popular belief, Lorem Ipsum is not simply random text.',
    'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.',
    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'
];

const newsList = document.getElementById('news-list');
const loadMoreButton = document.getElementById('load-more');


function addNews(newsArray) {
    newsArray.forEach(news => {
        const newsItem = document.createElement('li');
        newsItem.classList.add('news-item');
        newsItem.textContent = news;
        newsList.appendChild(newsItem);
    });
}


addNews(newsArray);


loadMoreButton.addEventListener('click', () => {
    addNews(newsArray);
});


window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
        addNews(newsArray);
    }
});
