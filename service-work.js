const CACHE_NAME = 'omok-ai-v1';
const urlsToCache = [
'./',
'./index.html'
// 여기에 필요한 아이콘 파일 경로도 추가합니다. 예: './omok-icon-192.png'
];

self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => {
console.log('Opened cache');
return cache.addAll(urlsToCache);
})
);
});

self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
// 캐시에 파일이 있으면 캐시된 파일을 반환합니다.
if (response) {
return response;
}
// 없으면 네트워크를 통해 요청합니다.
return fetch(event.request);
})
);
});