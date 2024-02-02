document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const swiperjs = document.getElementById('swiperjs');
    const home = document.querySelector('.home');
    const url_api = 'https://api-production-3310.up.railway.app';

    const tiktok_loading = document.querySelector('.tiktok-loading');
    const button_video = document.querySelector('.button-video');
    const button_audio = document.querySelector('.button-audio');
    const ilham_sek = document.querySelector('.ilham-sek');
    const tiktok_result = document.getElementById('tiktok-result');
    const form_tiktok = document.getElementById('form-tiktok');
    const url_input = document.getElementById('tiktok-url');

    const tiktok_img = document.getElementById('tiktok-image');
    const tiktok_nm = document.getElementById('tiktok-nama');
    const tiktok_usr = document.getElementById('tiktok-username');
    const tiktok_md = document.getElementById('tiktok-media');
    const tiktok_vid = document.getElementById('tiktok-video');
    const tiktok_lik = document.getElementById('tiktok-like');
    const tiktok_kom = document.getElementById('tiktok-komen');
    const tiktok_ser = document.getElementById('tiktok-share');
    const tiktok_sav = document.getElementById('tiktok-save');
    const tiktok_se = document.getElementById('tiktok-see');
    const tiktok_des = document.getElementById('tiktok-desc');
    const tiktok_dy = document.getElementById('tiktok-day');
    const tiktok_sz = document.getElementById('size-vid');
    const tiktok_sa = document.getElementById('size-aud');
    const tiktok_res = document.getElementById('resolusi-vid');

    const heroObserve = new IntersectionObserver(
        entries => {
            const [entry] = entries;
            if (!entry.isIntersecting) {
                navbar.classList.add('active');
            } else {
                navbar.classList.remove('active');
            }
        },
        { threshold: 1 }
    );

    heroObserve.observe(home);

    new Typed('.type-writer', {
        strings: ['Web Developer', 'Gamer', 'Utraman'],
        typeSpeed: 80,
        loop: true,
        backSpeed: 50
    });

    new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        spaceBetween: -100,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 800,
            modifier: 1,
            slideShadows: false
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    const header = {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
        'Content-Type': 'application/json; charset=UTF-8',
        'sec-ch-ua': '"Not)A;Brand";v="24", "Chromium";v="116"',
        'sec-ch-ua-mobile': '?1',
        'sec-ch-ua-platform': '"Android"',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-origin',
        'User-Agent':
            'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    };

    function formatNumber(number) {
        number = parseInt(number, 10);
        if (number >= 1000000) {
            let pros = number / 1000000;
            let n = pros.toString().split('.');
            return n[0] + 'M';
        } else if (number >= 1000) {
            let pros = number / 1000;
            let n = pros.toString().split('.');
            return n[0] + 'K';
        } else {
            return number.toString();
        }
    }

    function getSize(url) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(url, { method: 'HEAD' });
                const size = await response.headers.get('content-length');
                const animiya = size ? formatSize(size) : 'Size not available';
                resolve(animiya);
            } catch (error) {
                reject(error);
            }
        });
    }

    function formatSize(bytes) {
        const kilobytes = bytes / 1024;
        return kilobytes < 1024
            ? kilobytes.toFixed(2) + ' KB'
            : (kilobytes / 1024).toFixed(2) + ' MB';
    }

    function getVideoResolution() {
        return new Promise((resolve, reject) => {
            try {
                const video_element = document.getElementById('tiktok-video');
                const availableResolutions = [340, 420, 720, 1080];
                const currentResolution = video_element.videoWidth;

                const closestResolution = availableResolutions.reduce(
                    function (prev, curr) {
                        return Math.abs(curr - currentResolution) <
                            Math.abs(prev - currentResolution)
                            ? curr
                            : prev;
                    }
                );

                resolve(closestResolution);
            } catch (error) {
                reject(error);
            }
        });
    }

    let url_videonya, url_audionya, url_typenya;

    function rndNumber() {
        const nm = '1234567890';
        let re = '';
        for (let i = 0; i < 8; i++) {
            let rn = Math.floor(Math.random() * 10);
            let hehe = nm.charAt(rn);
            re += hehe;
        }
        return re;
    }

    function axiosDownloadFile(videoUrl, fileName) {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const headers = {
            Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'sec-ch-ua': '"Not)A;Brand";v="24", "Chromium";v="116"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-origin',
            'User-Agent':
                'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
            'X-Requested-With': 'XMLHttpRequest'
        };

        Swal.fire({
            title: 'Loading...',
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        axios({
            method: 'get',
            url: proxyUrl + videoUrl,
            responseType: 'blob', // Set the responseType to 'blob' to handle binary data
            headers: headers
        })
            .then(response => {
                Swal.close();
                // Use FileSaver.js to save the blob as a file
                saveAs(response.data, fileName);
            })
            .catch(error => {
                console.error('Error downloading and saving video:', error);
            });
    }

    button_audio.addEventListener('click', () => {
        axiosDownloadFile(url_audionya, `fh-tiktok-${rndNumber()}.mp3`);
    });

    button_video.addEventListener('click', () => {
        axiosDownloadFile(url_videonya, `fh-tiktok-${rndNumber()}.mp4`);
    });

    // FORM SUBMIT TIKTOK VALIDATION
    form_tiktok.addEventListener('submit', async e => {
        e.preventDefault();

        let tiktok_image,
            tiktok_nama,
            tiktok_user,
            tiktok_media,
            tiktok_type,
            tiktok_like,
            tiktok_share,
            tiktok_save,
            tiktok_see,
            tiktok_desc,
            tiktok_day,
            tiktok_size,
            tiktok_size_audio,
            tiktok_resolusi,
            tiktok_komen;

        const input_value = url_input.value;

        tiktok_loading.style.display = 'flex';
        tiktok_result.style.display = 'none';
        ilham_sek.style.display = 'none';

        tiktok_vid.pause();
        url_input.value = '';
        const fet = await fetch(url_api + '/tiktok', {
            method: 'POST',
            headers: header,
            body: JSON.stringify({
                url: input_value.toString()
            })
        });
        const fetjs = fet.json();
        await fetjs.then(async res => {
            tiktok_result.style.display = 'block';
            ilham_sek.style.display = 'block';

            tiktok_result.style.opacity = '0';
            ilham_sek.style.opacity = '0';

            switch (res.result.type) {
                case 'video':
                    tiktok_type = 'video/mp4';
                    url_typenya = 'video/mp4';
                    break;
                case 'audio':
                    tiktok_type = 'audio/mp3';
                    url_typenya = 'audio/mp3';
                    break;
                default:
                    tiktok_type = 'video/mp4';
                    url_typenya = 'video/mp4';
                    break;
            }

            tiktok_image = res.result.author.avatarThumb[0];
            tiktok_nama = res.result.author.nickname;
            tiktok_user = res.result.author.username;
            tiktok_media = res.result.video[0];
            url_videonya = res.result.video[0];
            url_audionya = res.result.music.playUrl[0];
            tiktok_like = res.result.statistics.likeCount;
            tiktok_komen = res.result.statistics.commentCount;
            tiktok_share = res.result.statistics.shareCount;
            tiktok_save = res.result.statistics.favoriteCount;
            tiktok_see = res.result.statistics.playCount;
            tiktok_desc = res.result.description;
            tiktok_day = res.result.statistics.favoriteCount;
            await getSize(tiktok_media).then(res => {
                tiktok_size = res;
            });
            await getSize(res.result.music.playUrl[0]).then(res => {
                tiktok_size_audio = res;
            });
            await getVideoResolution().then(res => {
                tiktok_resolusi = res;
            });
            tiktok_loading.style.display = 'none';
            tiktok_result.style.opacity = '1';
            ilham_sek.style.opacity = '1';
            console.log(res);
        });

        tiktok_img.src = tiktok_image;
        tiktok_nm.innerText = tiktok_nama;
        tiktok_usr.innerText = '@' + tiktok_user;
        tiktok_md.src = tiktok_media;
        tiktok_md.type = tiktok_type;
        tiktok_vid.load();
        tiktok_vid.autoplay = true;
        tiktok_lik.innerText = formatNumber(tiktok_like);
        tiktok_kom.innerText = formatNumber(tiktok_komen);
        tiktok_ser.innerText = formatNumber(tiktok_share);
        tiktok_sav.innerText = formatNumber(tiktok_save);
        tiktok_se.innerText = 'Dilihat ' + formatNumber(tiktok_see);
        tiktok_des.innerText = '@' + tiktok_user + ': ' + tiktok_desc;
        tiktok_sz.innerText = 'Size : ' + tiktok_size;
        tiktok_sa.innerText = 'Size : ' + tiktok_size_audio;
        tiktok_res.innerText = 'Resolution : ' + tiktok_resolusi + 'p';
    });
});
