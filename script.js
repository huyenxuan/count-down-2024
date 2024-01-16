document.addEventListener('DOMContentLoaded', function () {
    const newYearDate = new Date('02/10/2024 00:00:00 GMT+07');

    function updateCountdown() {
        const currentDate = new Date();
        const timeDifference = newYearDate - currentDate;
        if (timeDifference > 0) {
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById('countdown-text').innerText = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây đến Năm Mới!`;
        } else {
            document.getElementById('countdown').style.display = 'none';
            document.getElementById('fireworks').style.display = 'block';
        }
        // Lấy phần tử iframe YouTube
        const youtubeIframe = document.getElementById('youtube-iframe');
        document.getElementById('youtube-iframe').style.display = 'none';

        // Gọi phương thức play() để phát video
        youtubeIframe.play();
    }
    setInterval(updateCountdown, 1000);
});
