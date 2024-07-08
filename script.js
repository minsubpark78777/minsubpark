// 최신 뉴스 데이터 (임의의 데이터)
const newsData = [
    {
        title: "Inside Out 2 제작 확정",
        description: "Pixar가 감정 캐릭터들의 새로운 모험을 담은 '인사이드 아웃 2'의 방영이 시작되었습니다.",
        image: "https://i.ytimg.com/vi/EiCmnIaj4u8/maxresdefault.jpg",
        date: "2024년 7월 8일"
    },
    {
        title: "목소리 배우진 공개",
        description: "'인사이드 아웃 2'의 목소리 배우진이 공개되었습니다. 이번 작품에는 새롭게 합류한 목소리도 있습니다.",
        image: "https://i.ytimg.com/vi/iM5YyNqq-1A/maxresdefault.jpg",
        date: "2024년 7월 9일"
    },
    {
        title: "줄거리 내용 유출",
        description: "'인사이드 아웃 2'의 중요한 줄거리 내용이 유출되었습니다. 주인공들의 감정적인 여정이 다시 시작됩니다.",
        image: "https://i.ytimg.com/vi/nXsiVXEYmao/maxresdefault.jpg",
        date: "2024년 7월 10일"
    }
];

// 최신 뉴스 아이템 생성 함수
function createNewsItem(news) {
    return `
        <div class="col-md-6 mb-4">
            <div class="card">
                <img src="${news.image}" class="card-img-top" alt="${news.title}">
                <div class="card-body">
                    <h5 class="card-title">${news.title}</h5>
                    <p class="card-text">${news.description}</p>
                    <p class="card-text"><small class="text-muted">${news.date}</small></p>
                </div>
            </div>
        </div>
    `;
}

// 최신 뉴스 아이템 추가
const newsList = document.getElementById('news-list');
newsData.forEach(news => {
    const newsItem = createNewsItem(news);
    newsList.innerHTML += newsItem;
});