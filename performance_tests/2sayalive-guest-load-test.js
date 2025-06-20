import http from 'k6/http';
import { sleep, check, group } from 'k6';
import { htmlReport } from "/report/bundle.js";
import { textSummary } from "/report/index.js";

export const options = {
    stages: [
        { duration: '1m', target: 1 }, // Ramp up to 1 VU over 5 seconds
        { duration: '1m', target: 1 }, // Ramp up to 2 VUs over 5 seconds
        { duration: '1m', target: 1 }, // Ramp up to 2 VUs over 5 seconds
        /*   { duration: '5m', target: 50 },   // Ramp up to 50 VUs over 5 minutes
           { duration: '10m', target: 500 }, // Ramp up to 500 VUs over 10 minutes
           { duration: '20m', target: 1000 }, // Ramp up to 1000 VUs over 20 minutes
           { duration: '40m', target: 2000 }, // Ramp up to 2000 VUs over 40 minutes
           { duration: '60m', target: 4000 }, // Ramp up to 4000 VUs over 60 minutes
        */
    ],
};

// Track stage start time for better stage identification
let testStartTime = Date.now();

// Function to determine current stage based on elapsed time
function getCurrentStage() {
    const elapsed = (Date.now() - testStartTime) / 1000; // Convert to seconds

    if (elapsed <= 60) return 'Stage-1'; // 1m
    if (elapsed <= 180) return 'Stage-2'; // 1m + 2m = 3m total
    if (elapsed <= 360) return 'Stage-3'; // 1m + 2m + 3m = 6m total
    if (elapsed <= 660) return 'Stage-4'; // + 5m = 11m total
    if (elapsed <= 1260) return 'Stage-5'; // + 10m = 21m total
    if (elapsed <= 2460) return 'Stage-6'; // + 20m = 41m total
    if (elapsed <= 4860) return 'Stage-7'; // + 40m = 81m total
    return 'Stage-8'; // + 60m = 141m total
}

export default function() {
    const currentStage = getCurrentStage();
    let response;
    const vars = {}; // Add vars object for form data extraction

    // Generate dynamic user data for more realistic testing (available throughout the function)
    const dynamicUserId = Math.floor(Math.random() * 10000);
    const testUser = {
        fname: `TestUser${dynamicUserId}`,
        lname: `LoadTest${currentStage}`,
        email: `loadtest${dynamicUserId}@example.com`,
        phone: `012${Math.floor(Math.random() * 10000000).toString().padStart(7, '0')}`,
        city: ['Kuala Lumpur', 'Shah Alam', 'Petaling Jaya', 'Subang Jaya'][Math.floor(Math.random() * 4)],
        zip_code: [40000, 50000, 46000, 47500][Math.floor(Math.random() * 4)]
    };

    // Page 1 - Homepage with ALL resources
    group('page_1 - https://sayalive.io/', function() {
        response = http.get('https://sayalive.io/', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
            tags: { stage: currentStage, endpoint: 'homepage' }
        });

        check(response, {
            'homepage status is 200': (r) => r.status === 200,
            'homepage response time < 500ms': (r) => r.timings.duration < 500,
        }, { stage: currentStage });

        // Load ALL CSS files from homepage
        http.batch([
            ['GET', 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/flaticon.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/magnific-popup.min.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/slick.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/jquery-ui.min.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/spacing.min.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/menu.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/datatables.min.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/dataTables.bootstrap4.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/dashboard.css?v=20250429', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/style.css?v=20250504_1551', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/responsive.css?v=20240804', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/daterangepicker.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/toastr.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/css/organizer.css', null, { tags: { stage: currentStage, type: 'css' } }],
        ]);

        // Load ALL JavaScript files from homepage
        http.batch([
            ['GET', 'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/jquery.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/popper.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/jquery-ui.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/isotope.pkgd.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/jquery.magnific-popup.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/imagesloaded.pkgd.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/slick.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/vanilla-lazyload.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/jquery-syotimer.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/datatables.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/script.js?v=250522', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/admin/js/event.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/toastr.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/cart.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/pwa.js', null, { tags: { stage: currentStage, type: 'js' } }],
        ]);

        // Load ALL images and assets from homepage
        http.batch([
            ['GET', 'https://sayalive.io/assets/admin/img/loader.gif', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.io/assets/admin/img/65c375772e109.svg', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/683dbd15df937_hbm25_%20saylive%20thumbnail_v2.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/6836d35180f5d_thumbnail.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/67ca6349ef33b_B+%20Run%2025%20Thumbnail.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/67f4ea6f2d616_thumbnail.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/67ac2d16670b3_Poster.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/673459b01771c_putrajaya%20night%20thumbnail%20(2).png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/670f4874c0931_THUMBNAIL%20KICKSTART.jpg', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/670dcd0991aae_BKPTN3.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/660a60e5b04ea_B+%20Run%2024%20Thumbnail.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/664b1a21c05fe_HBM24_sayalive%20banner-02.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.io/assets/admin/img/65956b5fc4783.svg', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.io/assets/images/features.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/hero-section/6822d08bdc4ef_smerat%20woo.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.io/assets/admin/img/659567a6cb048.png', null, { tags: { stage: currentStage, type: 'image' } }],
        ]);

        // Load fonts
        http.batch([
            ['GET', 'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
            ['GET', 'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
            ['GET', 'https://sayalive.io/assets/front/fonts/fa-solid-900.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
            ['GET', 'https://sayalive.io/assets/front/fonts/fa-regular-400.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
            ['GET', 'https://sayalive.io/assets/front/fonts/fa-brands-400.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
        ]);
    });

    sleep(1);

    // Page 2 - Event Page with ALL resources  
    group('page_2 - https://sayalive.io/test-5', function() {
        response = http.get('https://sayalive.io/test-5', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
            tags: { stage: currentStage, endpoint: 'event_page' }
        });

        check(response, {
            'event page status is 200': (r) => r.status === 200,
            'event page response time < 500ms': (r) => r.timings.duration < 500,
        }, { stage: currentStage });

        // Extract form variables (from Grafana recording)
        vars['_token'] = response.html().find('input[name=_token]').first().attr('value');
        vars['event_id'] = response.html().find('input[name=event_id]').first().attr('value');
        vars['pricing_type'] = response.html().find('input[name=pricing_type]').first().attr('value');
        vars['date_type'] = response.html().find('input[name=date_type]').first().attr('value');
        vars['event_date'] = response.html().find('input[name=event_date]').first().attr('value');

        // Event page specific CSS
        http.batch([
            ['GET', 'https://sayalive.io/assets/admin/css/summernote-content.css?v=20240807', null, { tags: { stage: currentStage, type: 'css' } }],
        ]);

        // Event page specific JS
        http.batch([
            ['GET', 'https://sayalive.io/assets/front/js/page_tracker.js?v=20250507', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/event_checkout.js?v=202505272', null, { tags: { stage: currentStage, type: 'js' } }],
        ]);

        // Analytics
        http.batch([
            ['GET', 'https://www.googletagmanager.com/gtag/js?id=G-BY5N14K0MS', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://connect.facebook.net/en_US/fbevents.js', null, { tags: { stage: currentStage, type: 'analytics' } }],
        ]);

        // Event images and gallery
        http.batch([
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/65c4897f1f099_65b3a6b5c1431_main.jpeg', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.io/assets/front/images/user.png', null, { tags: { stage: currentStage, type: 'image' } }],
        ]);

        // Analytics tracking calls
        http.batch([
            ['GET', 'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749654723299&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1920&sh=1080&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749654722807&coo=false&cdl=&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749654723299&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1920&sh=1080&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749654722807&coo=false&cdl=&exp=k2&rqm=FGET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=646187527.1749651650&gtm=45je5690v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104617979~104617981~104661466~104661468&z=1771432102', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749654733130&cd[content_ids]=%5B%22190%22%2C%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A2%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1920&sh=1080&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749654722807&coo=false&cdl=&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
        ]);
    });

    sleep(1);

    // Page 3 - POST to check-out2 (from Grafana recording)
    group('page_3 - https://sayalive.io/check-out2', function() {
        // Create URLSearchParams with extracted form data (from Grafana recording)
        const postData = new URLSearchParams({
            _token: vars['_token'] || 'GYPRHS9DBGYcIDOFTfPcGvwJfQw0xpAVkwuijxO2',
            event_id: vars['event_id'] || '129',
            pricing_type: vars['pricing_type'] || 'variation',
            date_type: vars['date_type'] || 'single',
            event_date: vars['event_date'] || '',
            'v_name[]': ['Bronze', 'Gold', 'Silver'],
            'quantity[]': ['0', '1', '1'],
            total: '5.00'
        }).toString();

        response = http.post(
            'https://sayalive.io/check-out2',
            postData, {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
                tags: { stage: currentStage, endpoint: 'checkout_post', user: testUser.email }
            }
        );

        check(response, {
            'checkout POST status is 200': (r) => r.status === 200,
            'checkout POST response time < 500ms': (r) => r.timings.duration < 500,
        }, { stage: currentStage });
    });

    sleep(1);

    // Page 4 - Checkout Page with ALL resources
    group('page_4 - https://sayalive.io/checkout?type=guest', function() {
        response = http.get('https://sayalive.io/checkout?type=guest', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
            tags: { stage: currentStage, endpoint: 'checkout' }
        });

        check(response, {
            'checkout page status is 200': (r) => r.status === 200,
            'checkout page response time < 500ms': (r) => r.timings.duration < 500,
        }, { stage: currentStage });

        // Extract additional form variables for new checkout flow
        vars['_token2'] = response.html().find('input[name=_token]').first().attr('value');
        vars['quantity1'] = response.html().find('input[name=quantity]').first().attr('value');
        vars['shipment_rate_id1'] = response.html().find('input[name=shipment_rate_id]').first().attr('value');

        // Checkout specific CSS
        http.batch([
            ['GET', 'https://sayalive.io/assets/admin/css/summernote-content.css', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/admin/css/check-out-v2.css', null, { tags: { stage: currentStage, type: 'css' } }],
        ]);

        // Checkout specific JS
        http.batch([
            ['GET', 'https://sayalive.io/assets/front/js/extractor.js?v=20250426', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://www.google.com/recaptcha/api.js?', null, { tags: { stage: currentStage, type: 'js' } }],
        ]);

        // Payment gateway images
        http.batch([
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/online-gateways/logo/68401cc8154a9_black-removebg-preview.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', null, { tags: { stage: currentStage, type: 'image' } }],
        ]);

        // Analytics for checkout (comprehensive tracking from Grafana recording)
        http.batch([
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749654754313&cd[content_ids]=%5B190%2C190%5D&cd[content_name]=Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&sw=1920&sh=1080&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749654754114&coo=false&cdl=&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Llogin%3FredirectPath%3Devent_checkout&if=false&ts=1749654754316&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&cd[quantity]=011&sw=1920&sh=1080&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749654754114&coo=false&cdl=&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=646187527.1749651650&gtm=45je5690v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104617979~104617981~104661466~104661468&z=2013936197', null, { tags: { stage: currentStage, type: 'analytics' } }],
        ]);

        // Shipping calculation API call (from latest recording)
        http.post(
            'https://sayalive.io/checkout/calculate-shipping', {
                shipment_provider_id: '4',
                shipment_organizer_id: '3',
                total_items: vars['quantity1'] || '2',
                _token: vars['_token2'] || '',
            }, {
                headers: {
                    accept: '*/*',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'x-csrf-token': vars['_token2'] || '',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
                tags: { stage: currentStage, type: 'api_call' }
            }
        );
    });

    sleep(1);

    // Page 5 - Ticket Booking Form Submission (with multipart form data from Grafana recording)
    group('page_5 - https://sayalive.io/ticket-booking/129?type=guest', function() {
        // Generate dynamic order data
        const dynamicToken = vars['_token2'] || 'ulKwppYHlwexeE3JqhwIznBXkXLnWBxDJAcIwOsb';
        const amount = (5 + (Math.random() * 0.40)).toFixed(2); // Add service charge variation for test event

        // Multipart form data submission (from Grafana recording structure - exact format)
        const formData = [
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="_token"\r\n\r\n${dynamicToken}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="shipment_provider_id"\r\n\r\n4\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="shipment_rate_id"\r\n\r\n3\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="fname"\r\n\r\n${testUser.fname}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="lname"\r\n\r\n${testUser.lname}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="email"\r\n\r\n${testUser.email}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="email_confirmation"\r\n\r\n${testUser.email}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="phone"\r\n\r\n${testUser.phone}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="country"\r\n\r\nUnited Kingdom\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="state"\r\n\r\nselangor\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="city"\r\n\r\n${testUser.city}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="zip_code"\r\n\r\n${testUser.zip_code}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="address"\r\n\r\nLoad Test Address ${dynamicUserId}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="1_190_ic"\r\n\r\n${Math.floor(Math.random() * 900000) + 100000}-${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 9000) + 1000}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="1_190_country"\r\n\r\nKenya\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="2_190_ic"\r\n\r\n${Math.floor(Math.random() * 900000) + 100000}-${Math.floor(Math.random() * 90) + 10}-${Math.floor(Math.random() * 9000) + 1000}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="2_190_country"\r\n\r\nAzerbaijan\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="event"\r\n\r\n`,
            `{"id":129,"organizer_id":33,"thumbnail":"assets\\/admin\\/img\\/event\\/thumbnail\\/65c489e26a7d2_65b3a722aa09a_thumb.jpeg","status":"1","date_type":"single","countdown_status":0,"start_date":"2024-04-01","start_time":"09:00","duration":"7975y 1mo 2912848d ","end_date":"9999-05-11","end_time":"09:00","end_date_time":"9999-05-11 09:00:00","created_at":"2024-02-08T07:59:30.000000Z","updated_at":"2025-06-11T06:32:07.000000Z","event_type":"venue","is_featured":"no","latitude":"3.2097708172520596","longitude":"101.6692582360404","is_allow_promoter":1,"is_coming_soon":0,"service_charge_percentage":null,"service_charge_fixed":null,"payment_method":"[\\"10\\",\\"11\\",\\"13\\"]","is_print_label":0,"is_allow_shipping":1,"is_use_old_checkout":0,"is_admin_handle_shipping":0,"google_analytics_measurement_id":null,"meta_pixel_id":null,"is_maintenance_mode":0,"title":"Live In Test (NEW DB!!!!)","slug":"test-5","city":"PETALING JAYA","country":"Malaysia"}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="total"\r\n\r\n5.40\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="quantity"\r\n\r\n2\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="_token"\r\n\r\n${dynamicToken}\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="coupon"\r\n\r\n\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="gateway"\r\n\r\nleanx\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="shipping_provider"\r\n\r\n4\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq\r\n`,
            `Content-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/test-5\r\n`,
            `------WebKitFormBoundaryO6yp5AdiCZtUADMq--\r\n`
        ].join('');

        response = http.post(
            'https://sayalive.io/ticket-booking/129?type=guest',
            formData, {
                headers: {
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryO6yp5AdiCZtUADMq',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
                tags: { stage: currentStage, endpoint: 'ticket_booking_submit', user: testUser.email }
            }
        );

        check(response, {
            'ticket booking form submitted successfully': (r) => r.status === 200 || r.status === 302,
            'ticket booking response time < 1000ms': (r) => r.timings.duration < 1000,
        }, { stage: currentStage });
    });

    sleep(1);

    // Page 6 - Payment Gateway (LeanX from Grafana recording)
    group('page_6 - https://payment.leanx.io/bill', function() {
        // The response from ticket booking redirects to LeanX payment gateway
        // Simulate loading the LeanX payment page

        response = http.get('https://payment.leanx.io/bill?id=dp-TESTID-lx', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
            tags: { stage: currentStage, endpoint: 'payment_gateway_leanx' }
        });

        check(response, {
            'payment gateway loads successfully': (r) => r.status === 200,
            'payment gateway response time < 2000ms': (r) => r.timings.duration < 2000,
            'payment page contains expected elements': (r) => r.body.includes('payment.leanx.io') || r.status === 200,
        }, { stage: currentStage });

        // Load LeanX payment gateway CSS files (from Grafana recording)
        http.batch([
            ['GET', 'https://payment.leanx.io/_nuxt/entry.CnU0y5HI.css', null, { tags: { stage: currentStage, type: 'payment_css' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/BaseSelect.BorJ7Bfs.css', null, { tags: { stage: currentStage, type: 'payment_css' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/PayPage.D2cXdGNv.css', null, { tags: { stage: currentStage, type: 'payment_css' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/Icon.GoXizu70.css', null, { tags: { stage: currentStage, type: 'payment_css' } }],
        ]);

        // Load LeanX payment JavaScript files (from Grafana recording)
        http.batch([
            ['GET', 'https://payment.leanx.io/_nuxt/BaYaQ4VH.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/CT78aXYi.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/D5nEHOva.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/C8TJ6p0R.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/BVmQI_yz.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/CddDXk0d.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/Bs42Hm39.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/fcUIP8eJ.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/Bj8Rvzku.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/BqBfdjJr.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/BI62cRQD.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/hpacpOg0.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/BDQ5ptpc.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/rm7m6--6.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/CE9Noya-.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/SPOBPBCh.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
            ['GET', 'https://payment.leanx.io/_nuxt/CxHuvXqI.js', null, { tags: { stage: currentStage, type: 'payment_js' } }],
        ]);

        // Load LeanX metadata and Cloudflare assets
        http.batch([
            ['GET', 'https://payment.leanx.io/_nuxt/builds/meta/6aa3294b-6aa0-4025-b469-5ae3550b104b.json', null, { tags: { stage: currentStage, type: 'payment_metadata' } }],
            ['GET', 'https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015', null, { tags: { stage: currentStage, type: 'payment_js' } }],
        ]);

        // Load LeanX images and branding
        http.batch([
            ['GET', 'https://lean.sgp1.digitaloceanspaces.com/CD3CFF_LP_FavIcon.png', null, { tags: { stage: currentStage, type: 'payment_image' } }],
            ['GET', 'https://lean.sgp1.digitaloceanspaces.com/BD3C4A_LP_Logo.png', null, { tags: { stage: currentStage, type: 'payment_image' } }],
            ['GET', 'https://payment.leanx.io/img/WEB_PAYMENT.png', null, { tags: { stage: currentStage, type: 'payment_image' } }],
            ['GET', 'https://payment.leanx.io/img/CC_SANDBOX.png', null, { tags: { stage: currentStage, type: 'payment_image' } }],
            ['GET', 'https://payment.leanx.io/_ipx/_/img/WEB_PAYMENT.png', null, { tags: { stage: currentStage, type: 'payment_image' } }],
            ['GET', 'https://payment.leanx.io/_ipx/_/img/CC_SANDBOX.png', null, { tags: { stage: currentStage, type: 'payment_image' } }],
        ]);

        // Load LeanX fonts
        http.batch([
            ['GET', 'https://payment.leanx.io/cf-fonts/v/rubik/5.0.18/latin/wght/normal.woff2', null, { tags: { stage: currentStage, type: 'payment_font' } }],
        ]);

        // LeanX analytics/telemetry call (from Grafana recording)
        http.post(
            'https://payment.leanx.io/cdn-cgi/rum?',
            `{"memory":{"totalJSHeapSize":5311779,"usedJSHeapSize":4243343,"jsHeapSizeLimit":2248146944},"resources":[],"referrer":"https://sayalive.io/","eventType":1,"firstPaint":0,"firstContentfulPaint":0,"startTime":${Date.now()},"versions":{"fl":"2025.6.2","js":"2024.6.1","timings":2},"pageloadId":"${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 4)}-${Math.random().toString(36).substr(2, 4)}-${Math.random().toString(36).substr(2, 4)}-${Math.random().toString(36).substr(2, 12)}","location":"https://payment.leanx.io/bill","nt":"navigate","serverTimings":[{"name":"cfCacheStatus","dur":0,"desc":"DYNAMIC"}],"timingsV2":{"unloadEventStart":0,"unloadEventEnd":0,"domInteractive":9195.700000047684,"domContentLoadedEventStart":9436,"domContentLoadedEventEnd":9436.099999904633,"domComplete":9555.900000095367,"loadEventStart":9555.900000095367,"loadEventEnd":9556.700000047684,"type":"navigate","redirectCount":0,"criticalCHRestart":0,"activationStart":0,"initiatorType":"navigation","nextHopProtocol":"h2","deliveryType":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":4685.299999952316,"domainLookupStart":4685.299999952316,"domainLookupEnd":4685.299999952316,"connectStart":4685.299999952316,"connectEnd":4685.299999952316,"secureConnectionStart":4685.299999952316,"requestStart":4689.400000095367,"responseStart":8782.900000095367,"responseEnd":8846.799999952316,"transferSize":58425,"encodedBodySize":58125,"decodedBodySize":287161,"responseStatus":200,"firstInterimResponseStart":0,"renderBlockingStatus":"non-blocking","finalResponseHeadersStart":8782.900000095367,"name":"https://payment.leanx.io/bill?id=dp-TESTID-lx","entryType":"navigation","startTime":0,"duration":9556.700000047684},"dt":"","siteToken":"090caa67da1743da848b687892a70f11","st":2}`, {
                headers: {
                    'content-type': 'application/json',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
                tags: { stage: currentStage, type: 'payment_analytics' }
            }
        );
    });

    sleep(1);
}

// ✅ Auto-generate HTML report with timestamp + JSON for dashboard
export function handleSummary(data) {
    const now = new Date();
    const timestamp = now.toISOString().replace(/[:.]/g, '-');
    const htmlFileName = `./report/k6-testcase-report-${timestamp}.html`;
    const jsonFileName = `./report/k6-testcase-data-${timestamp}.json`;

    // Add stage configuration to summary data
    data.stageConfig = options.stages;
    data.testInfo = {
        timestamp: timestamp,
        testType: 'staged-load-test-sayalive-guest-comprehensive-with-data-payloads',
        totalStages: options.stages.length,
        endpoints: [
            'homepage',
            'event_page',
            'checkout_post',
            'checkout',
            'ticket_booking_submit',
            'payment_gateway_leanx'
        ],
        description: 'Comprehensive guest user journey with realistic data payloads for test-5 event including multipart form submissions, LeanX payment gateway integration, analytics tracking, and dynamic user data generation',
        features: [
            'Dynamic user data generation per VU',
            'Form data extraction with CSRF tokens',
            'Multipart form data submissions',
            'Payment gateway simulation (LeanX)',
            'Comprehensive analytics tracking (Facebook Pixel, Google Analytics)',
            'Real form validation and data extraction',
            'Complete resource loading (CSS, JS, images, fonts)',
            'Stage-based performance tracking',
            'URLSearchParams for form submissions',
            'Shipping calculation API calls',
            'Test-5 event with Bronze/Gold/Silver tickets',
            'LeanX payment gateway integration testing'
        ]
    };

    return {
        [htmlFileName]: htmlReport(data),
        [jsonFileName]: JSON.stringify(data, null, 2),
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
    };
}