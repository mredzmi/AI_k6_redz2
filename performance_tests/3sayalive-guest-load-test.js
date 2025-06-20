import http from 'k6/http';
import { sleep, check, group } from 'k6';
import { htmlReport } from "/report/bundle.js";
import { textSummary } from "/report/index.js";
import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js';

export const options = {
    stages: [
        { duration: '10s', target: 1 }, // 
        { duration: '1m', target: 1 }, // Medium load
        /*     { duration: '10m', target: 5000 }, // Peak load (CPU should spike)
             { duration: '10s', target: 0 }, // cool down
             /*      { duration: '5m', target: 2000 }, // Ramp up to 2 VUs over 5 seconds
                   { duration: '10m', target: 4000 }, // Ramp up to 2 VUs over 5 seconds
                   { duration: '5m', target: 1000 }, // Ramp up to 50 VUs over 5 minutes
                   { duration: '5m', target: 0 }, // Ramp dowm to 0 VUs over 5 minutes
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

    // Page 1 - Event page test-5 with ALL resources
    group('page_1 - https://sayalive.io/test-5', function() {
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
            'event page response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });

        // Extract form variables for later use
        vars['_token'] = response.html().find('input[name=_token]').first().attr('value');
        vars['event_id'] = response.html().find('input[name=event_id]').first().attr('value');
        vars['pricing_type'] = response.html().find('input[name=pricing_type]').first().attr('value');
        vars['date_type'] = response.html().find('input[name=date_type]').first().attr('value');
        vars['event_date'] = response.html().find('input[name=event_date]').first().attr('value');

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

    // Page 2 - POST to check-out2 (cart submission)
    group('page_2 - https://sayalive.io/check-out2', function() {
        response = http.post(
            'https://sayalive.io/check-out2',
            new URLSearchParams({
                _token: vars['_token'] || 'default_token',
                event_id: vars['event_id'] || '129',
                pricing_type: vars['pricing_type'] || 'variation',
                date_type: vars['date_type'] || 'single',
                event_date: vars['event_date'] || '2024-04-01 09:00:00',
                'v_name[]': ['Bronze', 'Gold', 'Silver'],
                'quantity[]': ['0', '1', '0'], // Select 1 Gold ticket
                total: '3.00',
            }).toString(), {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
                tags: { stage: currentStage, endpoint: 'checkout_post' }
            }
        );

        check(response, {
            'checkout POST status is 200': (r) => r.status === 200,
            'checkout POST response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });

        // Extract new token for next step
        vars['_token2'] = response.html().find('input[name=_token]').first().attr('value');

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
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbcd881b6f_Banner_Event_v2.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbce270f3d_Event%20Tee%20Banner_black_v2.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/organizer-photo/65d4623f18bc4_The%20Boom%20Group%20Letter%20Head-02.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbce69ad29_Event%20Tee%20Banner_beige_v2.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbcea03162_Banner_Size%20chart.png', null, { tags: { stage: currentStage, type: 'image' } }],
        ]);

        // Analytics tracking calls
        http.batch([
            ['GET', 'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.205&r=stable&domain=sayalive.io&hme=91e1bfdb39aff53ea3a4a1f39ed64da8fd6f63253e5c24269dbb2994c8fed743&ex_m=74%2C128%2C113%2C117%2C65%2C6%2C106%2C73%2C19%2C101%2C93%2C55%2C58%2C11%2C184%2C205%2C212%2C208%2C209%2C211%2C32%2C107%2C57%2C81%2C210%2C179%2C182%2C51%2C50%2C206%2C207%2C192%2C140%2C45%2C197%2C194%2C195%2C37%2C152%2C18%2C54%2C201%2C200%2C142%2C21%2C44%2C2%2C47%2C69%2C70%2C71%2C75%2C97%2C20%2C17%2C100%2C96%2C95%2C114%2C56%2C116%2C42%2C115%2C33%2C98%2C43%2C90%2C29%2C180%2C183%2C149%2C14%2C15%2C16%2C8%2C9%2C28%2C25%2C26%2C61%2C66%2C68%2C79%2C105%2C108%2C30%2C80%2C12%2C10%2C84%2C52%2C24%2C110%2C109%2C111%2C102%2C13%2C23%2C4%2C41%2C78%2C22%2C162%2C136%2C77%2C1%2C99%2C60%2C88%2C36%2C31%2C86%2C87%2C92%2C40%2C7%2C94%2C85%2C48%2C35%2C38%2C0%2C72%2C118%2C91%2C5%2C89%2C249%2C177%2C126%2C165%2C158%2C3%2C39%2C67%2C46%2C112%2C49%2C83%2C64%2C63%2C34%2C103%2C62%2C59%2C53%2C82%2C76%2C27%2C104%2C119', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&rl=https%3A%2F%2Fsayalive.io%2F&if=false&ts=1749133893779&cd[event_category]=Event%20Details&cd[event_label]=HAUSBOOM%20FESTIVAL%202025&cd[event_id]=199&cd[event_type]=venue&cd[location]=Seri%20Kembangan%2C%20Malaysia&sw=1366&sh=768&v=2.9.205&r=stable&ec=0&o=4126&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133893508&coo=false&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['POST', 'https://stats.g.doubleclick.net/g/collect?v=2&tid=G-BY5N14K0MS&cid=315100340.1745589310&gtm=45je5631v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104611962~104611964~104661466~104661468', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&rl=https%3A%2F%2Fsayalive.io%2F&if=false&ts=1749133939677&cd[content_ids]=%5B%22264%22%5D&cd[content_name]=SIZE%20-%202XL&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22264%22%2C%22quantity%22%3A1%2C%22item_price%22%3A79%7D%5D&cd[value]=79&cd[currency]=MYR&sw=1366&sh=768&v=2.9.205&r=stable&ec=2&o=5150&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133893508&coo=false&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
        ]);
    });

    sleep(1);

    // Page 3 - Checkout guest page with shipping calculation
    group('page_3 - https://sayalive.io/checkout?type=guest', function() {
        response = http.get('https://sayalive.io/checkout?type=guest', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
            tags: { stage: currentStage, endpoint: 'checkout_guest' }
        });

        check(response, {
            'checkout guest page status is 200': (r) => r.status === 200,
            'checkout guest page response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });

        // Extract values for shipping calculation
        vars['total1'] = response.html().find('input[name=total]').first().attr('value');
        vars['quantity1'] = response.html().find('input[name=quantity]').first().attr('value');
        vars['shipping_cost1'] = response.html().find('input[name=shipping_cost]').first().attr('value');

        // Calculate shipping (new endpoint from Grafana recording)
        response = http.post(
            'https://sayalive.io/checkout/calculate-shipping', {
                shipment_provider_id: '4',
                shipment_organizer_id: vars['total1'] || '3.00',
                total_items: vars['quantity1'] || '1',
                _token: vars['_token2'] || 'default_token',
            }, {
                headers: {
                    accept: '*/*',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'x-csrf-token': vars['_token2'] || 'default_token',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
                tags: { stage: currentStage, endpoint: 'shipping_calculation' }
            }
        );

        check(response, {
            'shipping calculation successful': (r) => r.status === 200,
            'shipping calculation response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });
    });

    sleep(1);

    // Page 4 - Ticket booking form submission (multipart form)
    group('page_4 - https://sayalive.io/ticket-booking/129?type=guest', function() {
        // Generate dynamic boundary for multipart form
        const boundary = `----WebKitFormBoundary${Math.random().toString(36).substr(2, 16)}`;

        // Create multipart form data with test user info
        const formData = [
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="_token"\r\n\r\n${vars['_token2'] || 'default_token'}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="shipment_provider_id"\r\n\r\n4\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="shipment_rate_id"\r\n\r\n3\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="fname"\r\n\r\n${testUser.fname}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="lname"\r\n\r\n${testUser.lname}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="email"\r\n\r\n${testUser.email}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="email_confirmation"\r\n\r\n${testUser.email}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="phone"\r\n\r\n${testUser.phone}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="country"\r\n\r\nMalaysia\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="state"\r\n\r\nPutrajaya\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="city"\r\n\r\n${testUser.city}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="zip_code"\r\n\r\n${testUser.zip_code}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="address"\r\n\r\nLoad Test Address ${dynamicUserId}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="1_190_ic"\r\n\r\n${dynamicUserId.toString().padStart(6, '0')}-${Math.floor(Math.random() * 12) + 1}-${Math.floor(Math.random() * 9000) + 1000}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="1_190_country"\r\n\r\nMalaysia\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="event"\r\n\r\n`,
            `{"id":129,"organizer_id":33,"title":"Live In Test (NEW DB!!!!)","slug":"test-5","city":"PETALING JAYA","country":"Malaysia"}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="total"\r\n\r\n3.24\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="quantity"\r\n\r\n1\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="_token"\r\n\r\n${vars['_token2'] || 'default_token'}\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="coupon"\r\n\r\n\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="gateway"\r\n\r\ndummypay\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="shipping_provider"\r\n\r\n4\r\n`,
            `--${boundary}\r\n`,
            `Content-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/test-5\r\n`,
            `--${boundary}--\r\n`
        ].join('');

        response = http.post(
            'https://sayalive.io/ticket-booking/129?type=guest',
            formData, {
                headers: {
                    'content-type': `multipart/form-data; boundary=${boundary}`,
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
                tags: { stage: currentStage, endpoint: 'ticket_booking', user: testUser.email }
            }
        );

        check(response, {
            'ticket booking submitted successfully': (r) => r.status === 200 || r.status === 302,
            'ticket booking response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });

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
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749133946983&cd[content_ids]=%5B264%5D&cd[content_name]=SIZE%20-%202XL&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A264%2C%22name%22%3A%22SIZE%20-%202XL%22%2C%22category%22%3A%22PRE-ORDER%20%3A%20EVENT%20TEE%20ONLY%20-%20BEIGE%20COLOR%20(NO%20TICKET)%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A79%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=84.925&cd[currency]=MYR&sw=1366&sh=768&v=2.9.205&r=stable&ec=0&o=4126&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133946697&coo=false&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749133946993&cd[content_ids]=%5B264%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A264%2C%22name%22%3A%22SIZE%20-%202XL%22%2C%22category%22%3A%22PRE-ORDER%20%3A%20EVENT%20TEE%20ONLY%20-%20BEIGE%20COLOR%20(NO%20TICKET)%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A79%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=84.925&cd[currency]=MYR&cd[quantity]=01&sw=1366&sh=768&v=2.9.205&r=stable&ec=1&o=4126&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133946697&coo=false&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=315100340.1745589310&gtm=45je5631v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104611962~104611964~104661466~104661468&z=1152603581', null, { tags: { stage: currentStage, type: 'analytics' } }],
        ]);
    });

    sleep(1);

    // Page 5 - DummyPay payment processing
    group('page_5 - https://sayalive.io/event-booking/dummypay/process/129', function() {
        response = http.post(
            'https://sayalive.io/event-booking/dummypay/process/129', {
                _token: vars['_token2'] || 'default_token',
                simulate: 'success',
            }, {
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
                tags: { stage: currentStage, endpoint: 'payment_process' }
            }
        );

        check(response, {
            'payment processing successful': (r) => r.status === 200 || r.status === 302,
            'payment processing response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });
    });

    sleep(1);

    // Page 6 - Return to event page (completion verification)
    group('page_6 - https://sayalive.io/test-5', function() {
        response = http.get('https://sayalive.io/test-5', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
            tags: { stage: currentStage, endpoint: 'completion_verification' }
        });

        check(response, {
            'completion verification successful': (r) => r.status === 200,
            'completion verification response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });

        // Load basic resources for completion page
        http.batch([
            ['GET', 'https://sayalive.io/assets/front/css/style.css?v=20250504_1551', null, { tags: { stage: currentStage, type: 'css' } }],
            ['GET', 'https://sayalive.io/assets/front/js/jquery.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
            ['GET', 'https://sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', null, { tags: { stage: currentStage, type: 'js' } }],
        ]);
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
        testType: 'staged-load-test-sayalive-guest-test5-updated-grafana-120625',
        totalStages: options.stages.length,
        endpoints: [
            'event_page',
            'checkout_post',
            'checkout_guest',
            'shipping_calculation',
            'ticket_booking',
            'payment_process',
            'completion_verification'
        ],
        description: 'Updated guest user journey for test-5 event with latest endpoints and payloads from Grafana recording (PROD120625)',
        features: [
            'Updated event endpoint (test-5 instead of hausboomfestival2025)',
            'Event ID 129 with Bronze/Gold/Silver ticket categories',
            'URLSearchParams for check-out2 POST submission',
            'Shipping calculation endpoint integration',
            'DummyPay payment gateway instead of RazorPay',
            'Multipart form data with ID number fields',
            'Dynamic user data generation per VU',
            'Form data extraction with CSRF tokens',
            'Response time validation within 5000ms',
            'Stage-based performance tracking',
            'Complete user journey simulation'
        ]
    };

    return {
        [htmlFileName]: htmlReport(data),
        [jsonFileName]: JSON.stringify(data, null, 2),
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
    };
}