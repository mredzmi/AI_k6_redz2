import http from 'k6/http';
import { sleep, check, group } from 'k6';
import { htmlReport } from "/report/bundle.js";
import { textSummary } from "/report/index.js";

export const options = {
    stages: [
        { duration: '1m', target: 1000 }, // Ramp up to 1 VU over 5 seconds
        { duration: '1m', target: 2000 }, // Ramp up to 2 VUs over 5 seconds
        { duration: '1m', target: 3000 }, // Ramp up to 2 VUs over 5 seconds
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
            'homepage response time < 5000ms': (r) => r.timings.duration < 5000,
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

        // Load ALL images and assets from homepage (including missing ones from Grafana recording)
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
            // Additional images from Grafana recording
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/66aca7fe77f68_lokalfest_sayalive%20banner-07.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/66b43237221a4_Poster%20From%20Zero%20To%20Hero_BULANBINTANG_THUMBNAILSIZE%20(1).png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/666a93e1499fd_HB%20gig%20website%20banner%203-02.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/6639f45396ce7_HB%20gig%20Poster%202nd_Banner-02.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65dec3f99630c_Hausboom%20Gig%202024%20Logo%20320x230.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65d35552ef892_20240218_145142_0000.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65cf96cf4a322_20240217_010656_0000.png', null, { tags: { stage: currentStage, type: 'image' } }],
        ]);

        // Load fonts (including additional variants from Grafana)
        http.batch([
            ['GET', 'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
            ['GET', 'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
            ['GET', 'https://sayalive.io/assets/front/fonts/fa-solid-900.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
            ['GET', 'https://sayalive.io/assets/front/fonts/fa-regular-400.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
            ['GET', 'https://sayalive.io/assets/front/fonts/fa-brands-400.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
            ['GET', 'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2', null, { tags: { stage: currentStage, type: 'font' } }],
        ]);

        // Load additional UI assets
        http.batch([
            ['GET', 'https://sayalive.io/assets/front/css/images/ui-icons_ffffff_256x240.png', null, { tags: { stage: currentStage, type: 'image' } }],
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
            'event page response time < 5000ms': (r) => r.timings.duration < 5000,
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

        // Event images and gallery (from latest Grafana recording)
        http.batch([
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/65c4897f1f099_65b3a6b5c1431_main.jpeg', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.io/assets/front/images/user.png', null, { tags: { stage: currentStage, type: 'image' } }],
        ]);

        // Analytics tracking calls (from latest Grafana recording)
        http.batch([
            ['GET', 'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749656988633&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1920&sh=1080&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749656986549&coo=false&cdl=&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749656988633&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1920&sh=1080&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749656986549&coo=false&cdl=&exp=k2&rqm=FGET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=646187527.1749651650&gtm=45je56a0h2v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104617979~104617981~104661466~104661468&z=128700871', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749656998194&cd[content_ids]=%5B%22190%22%2C%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A2%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1920&sh=1080&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749656986549&coo=false&cdl=&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749656998194&cd[content_ids]=%5B%22190%22%2C%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A2%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1920&sh=1080&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749656986549&coo=false&cdl=&exp=k2&rqm=FGET', null, { tags: { stage: currentStage, type: 'analytics' } }],
        ]);
    });

    sleep(1);

    // Page 3 - POST to check-out2 (from latest Grafana recording)
    group('page_3 - https://sayalive.io/check-out2', function() {
        response = http.post(
            'https://sayalive.io/check-out2',
            `_token=${vars['_token']}&event_id=${vars['event_id']}&pricing_type=${vars['pricing_type']}&date_type=${vars['date_type']}&event_date=${vars['event_date']}&v_name%5B%5D=Bronze&v_name%5B%5D=Gold&v_name%5B%5D=Silver&quantity%5B%5D=0&quantity%5B%5D=1&quantity%5B%5D=1&total=5.00`, {
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
            'checkout POST response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });

        // Extract additional form variables for new checkout flow
        vars['quantity1'] = response.html().find('input[name=quantity]').first().attr('value');
        vars['shipment_rate_id1'] = response.html().find('input[name=shipment_rate_id]').first().attr('value');
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
            'checkout page response time < 5000ms': (r) => r.timings.duration < 5000,
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

        // Payment gateway images (from latest recording)
        http.batch([
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65c489e26a7d2_65b3a722aa09a_thumb.jpeg', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/online-gateways/logo/68401cc8154a9_black-removebg-preview.png', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/online-gateways/logo/66fa1ea11a9a8_atome.jpg', null, { tags: { stage: currentStage, type: 'image' } }],
            ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', null, { tags: { stage: currentStage, type: 'image' } }],
        ]);

        // reCAPTCHA JavaScript (from Grafana recording)
        http.batch([
            ['GET', 'https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwqiWrzO3ShIKDlu/recaptcha__en.js', null, { tags: { stage: currentStage, type: 'js' } }],
        ]);

        // Analytics for checkout (from latest Grafana recording)
        http.batch([
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout&rl=https%3A%2F%2Fsayalive.io%2Ftest-5&if=false&ts=1749657001476&cd[content_ids]=%5B190%2C190%5D&cd[content_name]=Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&sw=1920&sh=1080&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749657001377&coo=false&cdl=&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout&rl=https%3A%2F%2Fsayalive.io%2Ftest-5&if=false&ts=1749657001476&cd[content_ids]=%5B190%2C190%5D&cd[content_name]=Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&sw=1920&sh=1080&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749657001377&coo=false&cdl=&exp=k2&rqm=FGET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout&rl=https%3A%2F%2Fsayalive.io%2Ftest-5&if=false&ts=1749657001478&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&cd[quantity]=011&sw=1920&sh=1080&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749657001377&coo=false&cdl=&exp=k2&rqm=GET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            ['GET', 'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout&rl=https%3A%2F%2Fsayalive.io%2Ftest-5&if=false&ts=1749657001478&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&cd[quantity]=011&sw=1920&sh=1080&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749657001377&coo=false&cdl=&exp=k2&rqm=FGET', null, { tags: { stage: currentStage, type: 'analytics' } }],
            // Add shipping calculation API call from latest recording
            ['POST', 'https://sayalive.io/checkout/calculate-shipping', { shipment_provider_id: '4', shipment_organizer_id: '3', total_items: vars['quantity1'], _token: vars['_token'] }, { tags: { stage: currentStage, type: 'api' } }],
        ]);
    });

    sleep(1);

    // Page 5 - Ticket Booking Form Submission (from latest Grafana recording)
    group('page_5 - https://sayalive.io/ticket-booking/129?type=guest', function() {
        // Multipart form data submission (from latest recording structure)
        const formData = [
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="_token"\r\n\r\n`,
            `${vars['_token'] || 'ulKwppYHlwexeE3JqhwIznBXkXLnWBxDJAcIwOsb'}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="shipment_provider_id"\r\n\r\n4\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="shipment_rate_id"\r\n\r\n3\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="fname"\r\n\r\n${testUser.fname}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="lname"\r\n\r\n${testUser.lname}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="email"\r\n\r\n${testUser.email}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="email_confirmation"\r\n\r\n${testUser.email}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="phone"\r\n\r\n${testUser.phone}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="country"\r\n\r\nMalaysia\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="state"\r\n\r\nKedah\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="city"\r\n\r\n${testUser.city}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="zip_code"\r\n\r\n${testUser.zip_code}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="address"\r\n\r\nLoad Test Address ${dynamicUserId}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="1_190_ic"\r\n\r\n880831-03-5098\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="1_190_country"\r\n\r\nBarbados\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="2_190_ic"\r\n\r\n880302-03-4545\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="2_190_country"\r\n\r\nBahrain\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="event"\r\n\r\n`,
            `{"id":129,"organizer_id":33,"title":"Live In Test (NEW DB!!!!)","slug":"test-5","city":"PETALING JAYA","country":"Malaysia"}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="total"\r\n\r\n5.40\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="quantity"\r\n\r\n2\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="_token"\r\n\r\n`,
            `${vars['_token'] || 'ulKwppYHlwexeE3JqhwIznBXkXLnWBxDJAcIwOsb'}\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="coupon"\r\n\r\n\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="gateway"\r\n\r\nleanx\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="shipping_provider"\r\n\r\n4\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq\r\n`,
            `Content-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/test-5\r\n`,
            `------WebKitFormBoundaryfUqJnkwFqCXBAvqq--\r\n`
        ].join('');

        response = http.post(
            'https://sayalive.io/ticket-booking/129?type=guest',
            formData, {
                headers: {
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryfUqJnkwFqCXBAvqq',
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
            'ticket booking response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });
    });

    sleep(1);

    // Page 7 - Google OAuth Simulation (from Grafana recording)
    group('page_7 - https://sayalive.io/customer/auth/google', function() {
        response = http.get('https://sayalive.io/customer/auth/google', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
            tags: { stage: currentStage, endpoint: 'google_oauth_start' }
        });

        check(response, {
            'Google OAuth redirect initiated': (r) => r.status === 200 || r.status === 302,
            'OAuth response time < 5000ms': (r) => r.timings.duration < 5000,
        }, { stage: currentStage });

        // Extract OAuth variables if present
        vars['pstMsg1'] = response.html().find('input[name=pstMsg]').first().attr('value');
        vars['checkConnection1'] = response.html().find('input[name=checkConnection]').first().attr('value');

        // Load Google OAuth assets
        const oauthAssets = [
            'https://accounts.google.com/_/bscframe',
            'https://www.google.com/favicon.ico',
            'https://fonts.googleapis.com/css?family=Google+Sans_old:500'
        ];

        oauthAssets.forEach(url => {
            http.get(url, {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
                tags: { stage: currentStage, type: 'oauth_asset' }
            });
        });
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
        testType: 'staged-load-test-sayalive-gmail-test-5-with-data-payloads',
        totalStages: options.stages.length,
        endpoints: [
            'homepage',
            'event_page',
            'checkout_post',
            'checkout',
            'ticket_booking_submit',
            'google_oauth_start'
        ],
        description: 'Comprehensive test-5 event user journey with realistic data payloads including multipart form submissions, Google OAuth flow simulation, and dynamic user data generation. Updated to match latest Gmail Grafana recording.',
        eventDetails: {
            eventName: 'Live In Test (NEW DB!!!!)',
            eventSlug: 'test-5',
            eventId: 129,
            location: 'PETALING JAYA, Malaysia',
            ticketTypes: ['Bronze', 'Gold', 'Silver'],
            totalAmount: '5.40 MYR'
        },
        features: [
            'Dynamic user data generation per VU',
            'Multipart form data submissions',
            'Google OAuth flow simulation',
            'Comprehensive analytics tracking',
            'Real form validation and CSRF tokens',
            'Complete resource loading (CSS, JS, images, fonts)',
            'Stage-based performance tracking',
            'Bronze/Gold/Silver ticket system'
        ]
    };

    return {
        [htmlFileName]: htmlReport(data),
        [jsonFileName]: JSON.stringify(data, null, 2),
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
    };
}