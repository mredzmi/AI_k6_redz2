import http from 'k6/http';
import { sleep, check, group } from 'k6';
import { htmlReport } from "/report/bundle.js";
import { textSummary } from "/report/index.js";

export const options = {
  stages: [
    { duration: '1m', target: 1 },   // Ramp up to 1 VU over 5 seconds
    { duration: '2m', target: 2 },   // Ramp up to 2 VUs over 5 seconds
    { duration: '3m', target: 3 },   // Ramp up to 2 VUs over 5 seconds
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
  
  if (elapsed <= 60) return 'Stage-1';     // 1m
  if (elapsed <= 180) return 'Stage-2';    // 1m + 2m = 3m total
  if (elapsed <= 360) return 'Stage-3';    // 1m + 2m + 3m = 6m total
  if (elapsed <= 660) return 'Stage-4';    // + 5m = 11m total
  if (elapsed <= 1260) return 'Stage-5';   // + 10m = 21m total
  if (elapsed <= 2460) return 'Stage-6';   // + 20m = 41m total
  if (elapsed <= 4860) return 'Stage-7';   // + 40m = 81m total
  return 'Stage-8';                        // + 60m = 141m total
}

export default function () {
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
  group('page_1 - https://sayalive.io/', function () {
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
  group('page_2 - https://sayalive.io/hausboomfestival2025', function () {
    response = http.get('https://sayalive.io/hausboomfestival2025', {
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
    vars['event_id1'] = response.html().find('input[name=event_id]').first().attr('value');
    vars['pricing_type1'] = response.html().find('input[name=pricing_type]').first().attr('value');
    vars['date_type1'] = response.html().find('input[name=date_type]').first().attr('value');
    vars['event_date1'] = response.html().find('input[name=event_date]').first().attr('value');

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

    // Event images and gallery (including additional ones from Grafana)
    http.batch([
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbcd881b6f_Banner_Event_v2.png', null, { tags: { stage: currentStage, type: 'image' } }],
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbce270f3d_Event%20Tee%20Banner_black_v2.png', null, { tags: { stage: currentStage, type: 'image' } }],
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/organizer-photo/65d4623f18bc4_The%20Boom%20Group%20Letter%20Head-02.png', null, { tags: { stage: currentStage, type: 'image' } }],
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbce69ad29_Event%20Tee%20Banner_beige_v2.png', null, { tags: { stage: currentStage, type: 'image' } }],
      ['GET', 'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbcea03162_Banner_Size%20chart.png', null, { tags: { stage: currentStage, type: 'image' } }],
    ]);

    // Analytics tracking calls (comprehensive Facebook Pixel and Google Analytics)
    http.batch([
      ['GET', 'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.205&r=stable&domain=sayalive.io&hme=91e1bfdb39aff53ea3a4a1f39ed64da8fd6f63253e5c24269dbb2994c8fed743&ex_m=74%2C128%2C113%2C117%2C65%2C6%2C106%2C73%2C19%2C101%2C93%2C55%2C58%2C11%2C184%2C205%2C212%2C208%2C209%2C211%2C32%2C107%2C57%2C81%2C210%2C179%2C182%2C51%2C50%2C206%2C207%2C192%2C140%2C45%2C197%2C194%2C195%2C37%2C152%2C18%2C54%2C201%2C200%2C142%2C21%2C44%2C2%2C47%2C69%2C70%2C71%2C75%2C97%2C20%2C17%2C100%2C96%2C95%2C114%2C56%2C116%2C42%2C115%2C33%2C98%2C43%2C90%2C29%2C180%2C183%2C149%2C14%2C15%2C16%2C8%2C9%2C28%2C25%2C26%2C61%2C66%2C68%2C79%2C105%2C108%2C30%2C80%2C12%2C10%2C84%2C52%2C24%2C110%2C109%2C111%2C102%2C13%2C23%2C4%2C41%2C78%2C22%2C162%2C136%2C77%2C1%2C99%2C60%2C88%2C36%2C31%2C86%2C87%2C92%2C40%2C7%2C94%2C85%2C48%2C35%2C38%2C0%2C72%2C118%2C91%2C5%2C89%2C249%2C177%2C126%2C165%2C158%2C3%2C39%2C67%2C46%2C112%2C49%2C83%2C64%2C63%2C34%2C103%2C62%2C59%2C53%2C82%2C76%2C27%2C104%2C119', null, { tags: { stage: currentStage, type: 'analytics' } }],
      ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&rl=https%3A%2F%2Fsayalive.io%2F&if=false&ts=1749292353302&cd[event_category]=Event%20Details&cd[event_label]=HAUSBOOM%20FESTIVAL%202025&cd[event_id]=199&cd[event_type]=venue&cd[location]=Seri%20Kembangan%2C%20Malaysia&sw=1440&sh=900&v=2.9.205&r=stable&ec=0&o=4126&fbp=fb.1.1748957013743.1524724929324944', null, { tags: { stage: currentStage, type: 'analytics' } }],
      ['GET', 'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=315100340.1745589310&gtm=45je5641v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871&z=1696471391', null, { tags: { stage: currentStage, type: 'analytics' } }],
    ]);
  });

  sleep(1);

  // Page 3 - POST to check-out2 (from Grafana recording)
  group('page_3 - https://sayalive.io/check-out2', function () {
    response = http.post(
      'https://sayalive.io/check-out2',
      '_token=GYPRHS9DBGYcIDOFTfPcGvwJfQw0xpAVkwuijxO2&event_id=199&pricing_type=variation&date_type=single&event_date=Sat%2C+Oct+11%2C+2025+12%3A00pm&quantity%5B%5D=0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C0%2C1%2C0%2C0%2C0%2C0&v_name%5B%5D=GENERAL+ADMISSION%2CROCKZONE%2CGENERAL+ADMISSION+-+1%2CROCKZONE+-+1%2CGENERAL+ADMISSION+-+2%2CROCKZONE+-+2%2CGENERAL+ADMISSION+-+3%2CROCKZONE+-+3%2CSIZE+-+S%2CSIZE+-+M%2CSIZE+-+L%2CSIZE+-+XL%2CSIZE+-+2XL%2CSIZE+-+S%2CSIZE+-+M%2CSIZE+-+L%2CSIZE+-+XL%2CSIZE+-+2XL%2CTEST%2CSIZE+-+S%2CSIZE+-+M%2CSIZE+-+L&total=79.00',
      {
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

    // Extract token for next request
    vars['_token1'] = response.html().find('input[name=_token]').first().attr('value');
  });

  sleep(1);

  // Page 4 - Checkout Page with ALL resources
  group('page_4 - https://sayalive.io/checkout?type=guest', function () {
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

    // reCAPTCHA JavaScript (from Grafana recording)
    http.batch([
      ['GET', 'https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwqiWrzO3ShIKDlu/recaptcha__en.js', null, { tags: { stage: currentStage, type: 'js' } }],
    ]);

    // Analytics for checkout (comprehensive tracking)
    http.batch([
      ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout&rl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&if=false&ts=1749292385240&cd[content_ids]=%5B264%5D&cd[content_name]=SIZE%20-%202XL&cd[content_type]=product&cd[value]=84.925&cd[currency]=MYR&sw=1440&sh=900&v=2.9.205', null, { tags: { stage: currentStage, type: 'analytics' } }],
      ['GET', 'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout&rl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&if=false&ts=1749292385246&cd[content_ids]=%5B264%5D&cd[content_type]=product&cd[value]=84.925&cd[currency]=MYR&cd[quantity]=01&sw=1440&sh=900&v=2.9.205', null, { tags: { stage: currentStage, type: 'analytics' } }],
    ]);
  });

  sleep(1);

  // Page 5 - Ticket Booking Form Submission (with realistic form data from Grafana recording)
  group('page_5 - https://sayalive.io/ticket-booking/199?type=guest', function () {
    // Multipart form data submission (from Grafana recording)
    const formData = [
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="_token"\r\n\r\n`,
      `${vars['_token1'] || 'GYPRHS9DBGYcIDOFTfPcGvwJfQw0xpAVkwuijxO2'}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="shipment_provider_id"\r\n\r\n\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="shipment_rate_id"\r\n\r\n\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="fname"\r\n\r\n${testUser.fname}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="lname"\r\n\r\n${testUser.lname}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="email"\r\n\r\n${testUser.email}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="email_confirmation"\r\n\r\n${testUser.email}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="phone"\r\n\r\n${testUser.phone}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="country"\r\n\r\nMalaysia\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="state"\r\n\r\nSelangor\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="city"\r\n\r\n${testUser.city}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="zip_code"\r\n\r\n${testUser.zip_code}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="address"\r\n\r\nLoad Test Address ${dynamicUserId}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="event"\r\n\r\n`,
      `{"id":199,"organizer_id":35,"title":"HAUSBOOM FESTIVAL 2025","slug":"hausboomfestival2025","city":"Seri Kembangan","country":"Malaysia"}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="total"\r\n\r\n79\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="quantity"\r\n\r\n1\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="_token"\r\n\r\n`,
      `${vars['_token1'] || 'GYPRHS9DBGYcIDOFTfPcGvwJfQw0xpAVkwuijxO2'}\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="coupon"\r\n\r\n\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="gateway"\r\n\r\nrazerpay\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW\r\n`,
      `Content-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/hausboomfestival2025\r\n`,
      `------WebKitFormBoundaryBTAYc6fxdrWBOpeW--\r\n`
    ].join('');

    response = http.post(
      'https://sayalive.io/ticket-booking/199?type=guest',
      formData,
      {
        headers: {
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryBTAYc6fxdrWBOpeW',
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

  // Page 6 - Payment Gateway Simulation (Razer Pay from Grafana recording)
  group('page_6 - https://pay.merchant.razer.com/RMS/pay/SJsayalive/', function () {
    // Generate dynamic payment data
    const orderId = `199-${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const amount = (79 + (Math.random() * 5.93)).toFixed(2); // Add service charge variation

    const paymentData = {
      amount: amount,
      orderid: orderId,
      bill_name: `${testUser?.fname || 'TestUser'} ${testUser?.lname || 'LoadTest'}`,
      bill_email: testUser?.email || `loadtest${Math.floor(Math.random() * 10000)}@example.com`,
      bill_mobile: testUser?.phone || `012${Math.floor(Math.random() * 10000000)}`,
      bill_desc: 'sayalive.io payment - Load Test',
      country: 'Malaysia',
      currency: 'MYR',
      vcode: '8853ab8c1322b6b24f40663529a128f6', // Static verification code from recording
      returnurl: 'https://sayalive.io/event-booking/razerpay/notify',
      callbackurl: 'https://sayalive.io/event-booking/razerpay/callback2'
    };

    response = http.post(
      'https://pay.merchant.razer.com/RMS/pay/SJsayalive/',
      paymentData,
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://sayalive.io',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: { stage: currentStage, endpoint: 'payment_gateway', order_id: orderId }
      }
    );

    check(response, {
      'payment gateway loads successfully': (r) => r.status === 200,
      'payment gateway response time < 2000ms': (r) => r.timings.duration < 2000,
      'payment page contains expected elements': (r) => r.body.includes('pay.merchant.razer.com'),
    }, { stage: currentStage });

    // Load payment gateway assets (simulate user staying on payment page)
    const paymentAssets = [
      'https://pay.merchant.razer.com/RMS/G/assets/css/bootstrap.min.css',
      'https://pay.merchant.razer.com/RMS/G/assets/css/style_v2.min.css',
      'https://pay.merchant.razer.com/RMS/G/assets/js/jquery-3.5.1.min.js',
      'https://www.googletagmanager.com/gtag/js?id=G-WS9GV6HP27'
    ];

    paymentAssets.forEach(url => {
      http.get(url, {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
        tags: { stage: currentStage, type: 'payment_asset' }
      });
    });
  });

  sleep(1);

  // Page 7 - Google OAuth Simulation (from Grafana recording)
  group('page_7 - https://sayalive.io/customer/auth/google', function () {
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
      'OAuth response time < 1500ms': (r) => r.timings.duration < 1500,
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
    testType: 'staged-load-test-sayalive-comprehensive-with-data-payloads',
    totalStages: options.stages.length,
    endpoints: [
      'homepage', 
      'event_page', 
      'checkout_post', 
      'checkout', 
      'ticket_booking_submit', 
      'payment_gateway', 
      'google_oauth_start'
    ],
    description: 'Comprehensive user journey with realistic data payloads including multipart form submissions, payment gateway integration, OAuth flows, and dynamic user data generation',
    features: [
      'Dynamic user data generation per VU',
      'Multipart form data submissions',
      'Payment gateway simulation (Razer Pay)',
      'Google OAuth flow simulation',
      'Comprehensive analytics tracking',
      'Real form validation and CSRF tokens',
      'Complete resource loading (CSS, JS, images, fonts)',
      'Stage-based performance tracking'
    ]
  };

  return {
    [htmlFileName]: htmlReport(data),
    [jsonFileName]: JSON.stringify(data, null, 2),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}
