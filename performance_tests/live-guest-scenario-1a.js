// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep, group } from 'k6'
import http from 'k6/http'

import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js'
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

import { htmlReport } from "/report/bundle.js";
import { textSummary } from "/report/index.js";

export const options = {
  stages: [
    { duration: '1m', target: 1 },    // Ramp up to 50 VUs over 5 minutes
 //   { duration: '10m', target: 500 },  // Ramp up to 500 VUs over 10 minutes
 //   { duration: '20m', target: 1000 }, // Ramp up to 1000 VUs over 20 minutes
 //   { duration: '40m', target: 2000 }, // Ramp up to 2000 VUs over 40 minutes
 //   { duration: '60m', target: 4000 }, // Ramp up to 4000 VUs over 60 minutes
  ],
}

export default function main() {
  let formData, response

  const vars = {}

  group('page_1 - https://sayalive.io/', function () {
    response = http.get('https://sayalive.io/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://sayalive.io/assets/front/css/flaticon.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/magnific-popup.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/slick.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/jquery-ui.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/spacing.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/menu.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/datatables.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/dataTables.bootstrap4.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/dashboard.css?v=20250429', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/style.css?v=20250504_1551', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/responsive.css?v=20240804', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/daterangepicker.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/toastr.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/organizer.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/img/loader.gif', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/img/65c375772e109.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/683dbd15df937_hbm25_%20saylive%20thumbnail_v2.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/6836d35180f5d_thumbnail.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/67ca6349ef33b_B+%20Run%2025%20Thumbnail.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/67f4ea6f2d616_thumbnail.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/67ac2d16670b3_Poster.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/673459b01771c_putrajaya%20night%20thumbnail%20(2).png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/670f4874c0931_THUMBNAIL%20KICKSTART.jpg',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/670dcd0991aae_BKPTN3.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/660a60e5b04ea_B+%20Run%2024%20Thumbnail.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/664b1a21c05fe_HBM24_sayalive%20banner-02.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/66aca7fe77f68_lokalfest_sayalive%20banner-07.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/66b43237221a4_Poster%20From%20Zero%20To%20Hero_BULANBINTANG_THUMBNAILSIZE%20(1).png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/666a93e1499fd_HB%20gig%20website%20banner%203-02.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/6639f45396ce7_HB%20gig%20Poster%202nd_Banner-02.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65dec3f99630c_Hausboom%20Gig%202024%20Logo%20320x230.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65d35552ef892_20240218_145142_0000.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65cf96cf4a322_20240217_010656_0000.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://sayalive.io/assets/front/js/jquery.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/popper.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/jquery-ui.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/isotope.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/jquery.magnific-popup.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/imagesloaded.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/slick.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/vanilla-lazyload.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/jquery-syotimer.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/datatables.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/script.js?v=250522', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/js/event.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/toastr.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/cart.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/pwa.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/img/65956b5fc4783.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2',
      {
        headers: {
          origin: 'https://sayalive.io',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2',
      {
        headers: {
          origin: 'https://sayalive.io',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://sayalive.io/assets/front/fonts/fa-solid-900.woff2', {
      headers: {
        origin: 'https://sayalive.io',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/fonts/fa-regular-400.woff2', {
      headers: {
        origin: 'https://sayalive.io',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2',
      {
        headers: {
          origin: 'https://sayalive.io',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://sayalive.io/assets/images/features.png', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/fonts/fa-brands-400.woff2', {
      headers: {
        origin: 'https://sayalive.io',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/hero-section/6822d08bdc4ef_smerat%20woo.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://sayalive.io/assets/admin/img/659567a6cb048.png', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })

  group('page_2 - https://sayalive.io/hausboomfestival2025', function () {
    response = http.get('https://sayalive.io/hausboomfestival2025', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    vars['_token1'] = response.html().find('input[name=_token]').first().attr('value')

    vars['event_id1'] = response.html().find('input[name=event_id]').first().attr('value')

    vars['pricing_type1'] = response.html().find('input[name=pricing_type]').first().attr('value')

    vars['date_type1'] = response.html().find('input[name=date_type]').first().attr('value')

    vars['event_date1'] = response.html().find('input[name=event_date]').first().attr('value')

    response = http.get(
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sayalive.io/assets/front/css/flaticon.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/magnific-popup.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/slick.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/jquery-ui.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/spacing.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/menu.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/datatables.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/dataTables.bootstrap4.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/dashboard.css?v=20250429', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/style.css?v=20250504_1551', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/responsive.css?v=20240804', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/daterangepicker.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/toastr.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/organizer.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/admin/css/summernote-content.css?v=20240807', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/admin/img/loader.gif', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/admin/img/65c375772e109.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sayalive.io/assets/front/js/jquery.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/popper.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/jquery-ui.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/isotope.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/jquery.magnific-popup.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/imagesloaded.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/slick.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/vanilla-lazyload.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/jquery-syotimer.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/datatables.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/script.js?v=250522', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/admin/js/event.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/toastr.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/cart.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/pwa.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/page_tracker.js?v=20250507', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/event_checkout.js?v=202505272', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2'
    )

    response = http.get(
      'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2'
    )

    response = http.get(
      'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2'
    )

    response = http.get('https://sayalive.io/assets/front/fonts/fa-brands-400.woff2')

    response = http.get('https://sayalive.io/assets/front/fonts/fa-regular-400.woff2')

    response = http.get('https://sayalive.io/assets/front/fonts/fa-solid-900.woff2')

    response = http.get('https://sayalive.io/assets/admin/img/65956b5fc4783.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.googletagmanager.com/gtag/js?id=G-BY5N14K0MS', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://connect.facebook.net/en_US/fbevents.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbcd881b6f_Banner_Event_v2.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbce270f3d_Event%20Tee%20Banner_black_v2.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.205&r=stable&domain=sayalive.io&hme=91e1bfdb39aff53ea3a4a1f39ed64da8fd6f63253e5c24269dbb2994c8fed743&ex_m=74%2C128%2C113%2C117%2C65%2C6%2C106%2C73%2C19%2C101%2C93%2C55%2C58%2C11%2C184%2C205%2C212%2C208%2C209%2C211%2C32%2C107%2C57%2C81%2C210%2C179%2C182%2C51%2C50%2C206%2C207%2C192%2C140%2C45%2C197%2C194%2C195%2C37%2C152%2C18%2C54%2C201%2C200%2C142%2C21%2C44%2C2%2C47%2C69%2C70%2C71%2C75%2C97%2C20%2C17%2C100%2C96%2C95%2C114%2C56%2C116%2C42%2C115%2C33%2C98%2C43%2C90%2C29%2C180%2C183%2C149%2C14%2C15%2C16%2C8%2C9%2C28%2C25%2C26%2C61%2C66%2C68%2C79%2C105%2C108%2C30%2C80%2C12%2C10%2C84%2C52%2C24%2C110%2C109%2C111%2C102%2C13%2C23%2C4%2C41%2C78%2C22%2C162%2C136%2C77%2C1%2C99%2C60%2C88%2C36%2C31%2C86%2C87%2C92%2C40%2C7%2C94%2C85%2C48%2C35%2C38%2C0%2C72%2C118%2C91%2C5%2C89%2C249%2C177%2C126%2C165%2C158%2C3%2C39%2C67%2C46%2C112%2C49%2C83%2C64%2C63%2C34%2C103%2C62%2C59%2C53%2C82%2C76%2C27%2C104%2C119',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&rl=https%3A%2F%2Fsayalive.io%2F&if=false&ts=1749133893779&cd[event_category]=Event%20Details&cd[event_label]=HAUSBOOM%20FESTIVAL%202025&cd[event_id]=199&cd[event_type]=venue&cd[location]=Seri%20Kembangan%2C%20Malaysia&sw=1366&sh=768&v=2.9.205&r=stable&ec=0&o=4126&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133893508&coo=false&exp=k2&rqm=GET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&rl=https%3A%2F%2Fsayalive.io%2F&if=false&ts=1749133893779&cd[event_category]=Event%20Details&cd[event_label]=HAUSBOOM%20FESTIVAL%202025&cd[event_id]=199&cd[event_type]=venue&cd[location]=Seri%20Kembangan%2C%20Malaysia&sw=1366&sh=768&v=2.9.205&r=stable&ec=0&o=4126&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133893508&coo=false&exp=k2&rqm=FGET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://stats.g.doubleclick.net/g/collect?v=2&tid=G-BY5N14K0MS&cid=315100340.1745589310&gtm=45je5631v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104611962~104611964~104661466~104661468',
      null,
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=315100340.1745589310&gtm=45je5631v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104611962~104611964~104661466~104661468&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104611962~104611964~104661466~104661468&z=480521722',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/organizer-photo/65d4623f18bc4_The%20Boom%20Group%20Letter%20Head-02.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbce69ad29_Event%20Tee%20Banner_beige_v2.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/683dbcea03162_Banner_Size%20chart.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/6836d35180f5d_thumbnail.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&rl=https%3A%2F%2Fsayalive.io%2F&if=false&ts=1749133939569&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%20mt-20%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fcheck-out2%22%2C%22id%22%3A%22checkout-button%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Book%20Now%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22submit%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Book%20Now&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22pricing_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22date_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_date%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20HAUSBOOM%20FESTIVAL%202025%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.205&r=stable&ec=1&o=5150&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133893508&coo=false&es=automatic&tm=3&exp=k2&rqm=FGET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&rl=https%3A%2F%2Fsayalive.io%2F&if=false&ts=1749133939677&cd[content_ids]=%5B%22264%22%5D&cd[content_name]=SIZE%20-%202XL&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22264%22%2C%22quantity%22%3A1%2C%22item_price%22%3A79%7D%5D&cd[value]=79&cd[currency]=MYR&sw=1366&sh=768&v=2.9.205&r=stable&ec=2&o=5150&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133893508&coo=false&exp=k2&rqm=GET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Fhausboomfestival2025&rl=https%3A%2F%2Fsayalive.io%2F&if=false&ts=1749133939677&cd[content_ids]=%5B%22264%22%5D&cd[content_name]=SIZE%20-%202XL&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22264%22%2C%22quantity%22%3A1%2C%22item_price%22%3A79%7D%5D&cd[value]=79&cd[currency]=MYR&sw=1366&sh=768&v=2.9.205&r=stable&ec=2&o=5150&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133893508&coo=false&exp=k2&rqm=FGET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group('page_3 - https://sayalive.io/check-out2', function () {
    response = http.post(
      'https://sayalive.io/check-out2',
      new URLSearchParams({
        _token: `${vars['_token1']}`,
        event_id: `${vars['event_id1']}`,
        pricing_type: `${vars['pricing_type1']}`,
        date_type: `${vars['date_type1']}`,
        event_date: `${vars['event_date1']}`,
        'quantity[]': [
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '0',
          '1',
          '0',
          '0',
          '0',
          '0',
        ],
        'v_name[]': [
          'GENERAL ADMISSION',
          'ROCKZONE',
          'GENERAL ADMISSION - 1',
          'ROCKZONE - 1',
          'GENERAL ADMISSION - 2',
          'ROCKZONE - 2',
          'GENERAL ADMISSION - 3',
          'ROCKZONE - 3',
          'SIZE - S',
          'SIZE - M',
          'SIZE - L',
          'SIZE - XL',
          'SIZE - 2XL',
          'SIZE - S',
          'SIZE - M',
          'SIZE - L',
          'SIZE - XL',
          'SIZE - 2XL',
          'TEST',
          'SIZE - S',
          'SIZE - M',
          'SIZE - L',
        ],
        total: '79.00',
      }).toString(),
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://sayalive.io',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sayalive.io/assets/front/css/flaticon.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/magnific-popup.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/slick.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/jquery-ui.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/spacing.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/menu.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/datatables.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/dataTables.bootstrap4.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/dashboard.css?v=20250429', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/style.css?v=20250504_1551', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/responsive.css?v=20240804', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/daterangepicker.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/toastr.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/css/organizer.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/admin/img/loader.gif', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/admin/img/65c375772e109.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://www.google.com/recaptcha/api.js?', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sayalive.io/assets/front/js/jquery.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/popper.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/jquery-ui.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/isotope.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/jquery.magnific-popup.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/imagesloaded.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/slick.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/vanilla-lazyload.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/jquery-syotimer.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/datatables.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/script.js?v=250522', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/admin/js/event.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/toastr.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/cart.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sayalive.io/assets/front/js/pwa.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2'
    )

    response = http.get(
      'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2'
    )

    response = http.get(
      'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2'
    )

    response = http.get('https://sayalive.io/assets/front/fonts/fa-brands-400.woff2')

    response = http.get('https://sayalive.io/assets/front/fonts/fa-regular-400.woff2')

    response = http.get('https://sayalive.io/assets/front/fonts/fa-solid-900.woff2')

    response = http.get('https://sayalive.io/assets/admin/img/65956b5fc4783.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwqiWrzO3ShIKDlu/recaptcha__en.js',
      {
        headers: {
          origin: 'https://sayalive.io',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group('page_4 - https://sayalive.io/checkout?type=guest', function () {
    response = http.get('https://sayalive.io/checkout?type=guest', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://sayalive.io/assets/front/css/flaticon.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/magnific-popup.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/slick.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/jquery-ui.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/spacing.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/menu.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/datatables.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/dataTables.bootstrap4.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/dashboard.css?v=20250429', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/style.css?v=20250504_1551', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/responsive.css?v=20240804', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/daterangepicker.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/toastr.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/css/organizer.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/css/summernote-content.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/css/check-out-v2.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/img/loader.gif', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/img/65c375772e109.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/683dbd15df937_hbm25_%20saylive%20thumbnail_v2.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/online-gateways/logo/68401cc8154a9_black-removebg-preview.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://sayalive.io/assets/front/js/jquery.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/popper.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/jquery-ui.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/isotope.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/jquery.magnific-popup.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/imagesloaded.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/slick.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/vanilla-lazyload.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/jquery-syotimer.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/datatables.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/script.js?v=250522', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/js/event.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/toastr.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/cart.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/pwa.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/page_tracker.js?v=20250507', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/event_checkout.js?v=202505272', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/js/extractor.js?v=20250426', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2',
      {
        headers: {
          origin: 'https://sayalive.io',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMaxKUBGEe.woff2',
      {
        headers: {
          origin: 'https://sayalive.io',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2',
      {
        headers: {
          origin: 'https://sayalive.io',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://sayalive.io/assets/front/fonts/fa-brands-400.woff2', {
      headers: {
        origin: 'https://sayalive.io',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/fonts/fa-regular-400.woff2', {
      headers: {
        origin: 'https://sayalive.io',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/front/fonts/fa-solid-900.woff2', {
      headers: {
        origin: 'https://sayalive.io',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://sayalive.io/assets/admin/img/65956b5fc4783.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://www.googletagmanager.com/gtag/js?id=G-BY5N14K0MS', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://connect.facebook.net/en_US/fbevents.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.205&r=stable&domain=sayalive.io&hme=91e1bfdb39aff53ea3a4a1f39ed64da8fd6f63253e5c24269dbb2994c8fed743&ex_m=74%2C128%2C113%2C117%2C65%2C6%2C106%2C73%2C19%2C101%2C93%2C55%2C58%2C11%2C184%2C205%2C212%2C208%2C209%2C211%2C32%2C107%2C57%2C81%2C210%2C179%2C182%2C51%2C50%2C206%2C207%2C192%2C140%2C45%2C197%2C194%2C195%2C37%2C152%2C18%2C54%2C201%2C200%2C142%2C21%2C44%2C2%2C47%2C69%2C70%2C71%2C75%2C97%2C20%2C17%2C100%2C96%2C95%2C114%2C56%2C116%2C42%2C115%2C33%2C98%2C43%2C90%2C29%2C180%2C183%2C149%2C14%2C15%2C16%2C8%2C9%2C28%2C25%2C26%2C61%2C66%2C68%2C79%2C105%2C108%2C30%2C80%2C12%2C10%2C84%2C52%2C24%2C110%2C109%2C111%2C102%2C13%2C23%2C4%2C41%2C78%2C22%2C162%2C136%2C77%2C1%2C99%2C60%2C88%2C36%2C31%2C86%2C87%2C92%2C40%2C7%2C94%2C85%2C48%2C35%2C38%2C0%2C72%2C118%2C91%2C5%2C89%2C249%2C177%2C126%2C165%2C158%2C3%2C39%2C67%2C46%2C112%2C49%2C83%2C64%2C63%2C34%2C103%2C62%2C59%2C53%2C82%2C76%2C27%2C104%2C119',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749133946983&cd[content_ids]=%5B264%5D&cd[content_name]=SIZE%20-%202XL&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A264%2C%22name%22%3A%22SIZE%20-%202XL%22%2C%22category%22%3A%22PRE-ORDER%20%3A%20EVENT%20TEE%20ONLY%20-%20BEIGE%20COLOR%20(NO%20TICKET)%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A79%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=84.925&cd[currency]=MYR&sw=1366&sh=768&v=2.9.205&r=stable&ec=0&o=4126&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133946697&coo=false&rqm=GET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749133946983&cd[content_ids]=%5B264%5D&cd[content_name]=SIZE%20-%202XL&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A264%2C%22name%22%3A%22SIZE%20-%202XL%22%2C%22category%22%3A%22PRE-ORDER%20%3A%20EVENT%20TEE%20ONLY%20-%20BEIGE%20COLOR%20(NO%20TICKET)%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A79%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=84.925&cd[currency]=MYR&sw=1366&sh=768&v=2.9.205&r=stable&ec=0&o=4126&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133946697&coo=false&rqm=FGET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749133946993&cd[content_ids]=%5B264%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A264%2C%22name%22%3A%22SIZE%20-%202XL%22%2C%22category%22%3A%22PRE-ORDER%20%3A%20EVENT%20TEE%20ONLY%20-%20BEIGE%20COLOR%20(NO%20TICKET)%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A79%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=84.925&cd[currency]=MYR&cd[quantity]=01&sw=1366&sh=768&v=2.9.205&r=stable&ec=1&o=4126&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133946697&coo=false&rqm=GET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749133946993&cd[content_ids]=%5B264%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A264%2C%22name%22%3A%22SIZE%20-%202XL%22%2C%22category%22%3A%22PRE-ORDER%20%3A%20EVENT%20TEE%20ONLY%20-%20BEIGE%20COLOR%20(NO%20TICKET)%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A79%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=84.925&cd[currency]=MYR&cd[quantity]=01&sw=1366&sh=768&v=2.9.205&r=stable&ec=1&o=4126&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133946697&coo=false&rqm=FGET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=315100340.1745589310&gtm=45je5631v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104611962~104611964~104661466~104661468&z=1152603581',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749133993377&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fticket-booking%2F199%3Ftype%3Dguest%22%2C%22id%22%3A%22continueButton%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Proceed%20to%20Pay%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Proceed%20to%20Pay&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment_provider_id%22%2C%22name%22%3A%22shipment_provider_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22shipping-cost-input%22%2C%22name%22%3A%22shipping_cost%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment-rate-id%22%2C%22name%22%3A%22shipment_rate_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22fname%22%2C%22name%22%3A%22fname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20First%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22lname%22%2C%22name%22%3A%22lname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Last%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22email%22%2C%22name%22%3A%22email%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22email_confirmation%22%2C%22name%22%3A%22email_confirmation%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Reconfirm%20your%20email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22phone%22%2C%22name%22%3A%22phone%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Phone%20Number%22%2C%22inputType%22%3A%22tel%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22state-dropdown%22%2C%22name%22%3A%22state%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22city%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22City%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22zip_code%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Zip%2FPostcode%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22address%22%2C%22tag%22%3A%22textarea%22%2C%22placeholder%22%3A%22Address%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22coupon-code%22%2C%22name%22%3A%22coupon%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22gateway_razerpay%22%2C%22name%22%3A%22gateway%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22radio%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Check%20Out%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&udff[fn]=fc7fd912fb0d65fc62b131e7906b5779eb7431322642b756a9e4c86c32ee05e7&udff[ln]=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08&udff[em]=3ef0c73e3b535253cba84b76bb8c6b305654e4a0a42703e958e01b8a3c427d71&udff[ph]=35e55f6246e406656b67f41fa301cb6ca240f7ade337b0d9907f1e86ed595c65&udff[ct]=cfda0f9ef8bc2a21051ce5f42ba585d5d04dfa5cf938c09d332de20b0594d797&udff[zp]=4948963369b682612d22b081bdc92c13d23fb921cdd44e50f45d7e86b4b52022&v=2.9.205&r=stable&ec=2&o=6174&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133946697&coo=false&es=automatic&tm=3&rqm=FGET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749134002834&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fticket-booking%2F199%3Ftype%3Dguest%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22I%20agree%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22submit%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=I%20agree&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment_provider_id%22%2C%22name%22%3A%22shipment_provider_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22shipping-cost-input%22%2C%22name%22%3A%22shipping_cost%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment-rate-id%22%2C%22name%22%3A%22shipment_rate_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22fname%22%2C%22name%22%3A%22fname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20First%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22lname%22%2C%22name%22%3A%22lname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Last%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22email%22%2C%22name%22%3A%22email%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22email_confirmation%22%2C%22name%22%3A%22email_confirmation%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Reconfirm%20your%20email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22phone%22%2C%22name%22%3A%22phone%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Phone%20Number%22%2C%22inputType%22%3A%22tel%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22state-dropdown%22%2C%22name%22%3A%22state%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22city%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22City%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22zip_code%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Zip%2FPostcode%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22address%22%2C%22tag%22%3A%22textarea%22%2C%22placeholder%22%3A%22Address%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22coupon-code%22%2C%22name%22%3A%22coupon%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22gateway_razerpay%22%2C%22name%22%3A%22gateway%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22radio%22%7D%2C%7B%22id%22%3A%22continueButton%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Check%20Out%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&udff[fn]=fc7fd912fb0d65fc62b131e7906b5779eb7431322642b756a9e4c86c32ee05e7&udff[ln]=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08&udff[em]=3ef0c73e3b535253cba84b76bb8c6b305654e4a0a42703e958e01b8a3c427d71&udff[ph]=35e55f6246e406656b67f41fa301cb6ca240f7ade337b0d9907f1e86ed595c65&udff[ct]=cfda0f9ef8bc2a21051ce5f42ba585d5d04dfa5cf938c09d332de20b0594d797&udff[zp]=4948963369b682612d22b081bdc92c13d23fb921cdd44e50f45d7e86b4b52022&v=2.9.205&r=stable&ec=3&o=6174&fbp=fb.1.1748957013743.1524724929324944&cdl=API_unavailable&it=1749133946697&coo=false&es=automatic&tm=3&rqm=FGET',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group('page_5 - https://sayalive.io/ticket-booking/199?type=guest', function () {
    response = http.post(
      'https://sayalive.io/ticket-booking/199?type=guest',
      '------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="_token"\r\n\r\noL7OmcWSYxNPs5y7qgXrb7SMLo0PAMH5IZgsIDh9\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="shipment_provider_id"\r\n\r\n\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="shipment_rate_id"\r\n\r\n\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="fname"\r\n\r\nRed Test\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="lname"\r\n\r\nTest\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="email"\r\n\r\nredtest@test.com\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="email_confirmation"\r\n\r\nredtest@test.com\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="phone"\r\n\r\n01251117171\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="country"\r\n\r\nMalaysia\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="state"\r\n\r\nPutrajaya\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="city"\r\n\r\nPutrajaya\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="zip_code"\r\n\r\n40000\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="address"\r\n\r\nJalan Raya\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="event"\r\n\r\n{"id":199,"organizer_id":35,"thumbnail":"assets\\/admin\\/img\\/event\\/thumbnail\\/683dbd15df937_hbm25_ saylive thumbnail_v2.png","status":"1","date_type":"single","countdown_status":0,"start_date":"2025-10-11","start_time":"12:00","duration":"1d 11h 59m","end_date":"2025-10-12","end_time":"23:59","end_date_time":"2025-10-12 23:59:00","created_at":"2025-05-14T06:59:35.000000Z","updated_at":"2025-06-02T15:02:46.000000Z","event_type":"venue","is_featured":"yes","latitude":"101\\u00b041\'57.2\\"E","longitude":"2\\u00b058\'53.2\\"N","is_allow_promoter":0,"is_coming_soon":0,"service_charge_percentage":7.5,"service_charge_fixed":null,"payment_method":null,"is_print_label":0,"is_allow_shipping":0,"is_use_old_checkout":0,"is_admin_handle_shipping":0,"google_analytics_measurement_id":null,"meta_pixel_id":null,"title":"HAUSBOOM FESTIVAL 2025","slug":"hausboomfestival2025","city":"Seri Kembangan","country":"Malaysia"}\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="total"\r\n\r\n79\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="quantity"\r\n\r\n1\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="_token"\r\n\r\noL7OmcWSYxNPs5y7qgXrb7SMLo0PAMH5IZgsIDh9\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="coupon"\r\n\r\n\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="gateway"\r\n\r\nrazerpay\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF\r\nContent-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/hausboomfestival2025\r\n------WebKitFormBoundarym3NswZDW9fVCBjbF--\r\n',
      {
        headers: {
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarym3NswZDW9fVCBjbF',
          origin: 'https://sayalive.io',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  group('page_6 - https://pay.merchant.razer.com/RMS/pay/SJsayalive/', function () {
    response = http.post(
      'https://pay.merchant.razer.com/RMS/pay/SJsayalive/',
      {
        amount: '84.93',
        orderid: '199-16841aab4111e3',
        bill_name: 'Red Test Test',
        bill_email: 'redtest@test.com',
        bill_mobile: '01251117171',
        bill_desc: 'sayalive.io payment',
        country: 'Malaysia',
        currency: 'MYR',
        vcode: 'be8b373689e608f199c74f2c1f306ff3',
        returnurl: 'https://sayalive.io/event-booking/razerpay/notify',
        callbackurl: 'https://sayalive.io/event-booking/razerpay/callback2',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://sayalive.io',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://www.googletagmanager.com/gtag/js?id=G-WS9GV6HP27', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/css/bootstrap.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://src.mastercard.com/srci/integration/components/src-ui-kit/src-ui-kit.css',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://src.mastercard.com/srci/integration/components/src-ui-kit/src-ui-kit.esm.js',
      {
        headers: {
          origin: 'https://pay.merchant.razer.com',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/css/style_v2.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/css/font-awesome.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/css/pretty-checkbox.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/css/select2.min.css', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://pay.merchant.razer.com/RMS/vendor/jackocnr/intl-tel-input/build/css/intlTelInput.min.css',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://src.mydebit.my/sdk/srcsdk.mydebit.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/js/jquery-3.5.1.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/js/bootstrap.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/js/select2.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/js/jquery.jeditable.min.js', {
      headers: {
        origin: 'https://pay.merchant.razer.com',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://pay.merchant.razer.com/RMS/G/assets/js/jquery.jeditable.autogrow.min.js',
      {
        headers: {
          origin: 'https://pay.merchant.razer.com',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/js/popper.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/js/tippy.min.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.google.com/gp/p/js/pay.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/js/mobileCountryCode.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://pay.merchant.razer.com/RMS/vendor/jackocnr/intl-tel-input/build/js/intlTelInput.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pay.merchant.razer.com/RMS/vendor/jackocnr/intl-tel-input/build/js/utils.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pay.merchant.razer.com/RMS/API/seamless/3.28/js/MOLPay_seamless.deco.js',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://pay.merchant.razer.com/RMS/GooglePay/xdk_v2.js', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://pay.merchant.razer.com/RMS/G/assets/img/payment_options_v2/card-payment.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pay.merchant.razer.com/RMS/G/assets/img/payment_options_v2/online-banking.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015',
      {
        headers: {
          origin: 'https://pay.merchant.razer.com',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pay.merchant.razer.com/RMS/G/assets/img/payment_options_v2/ewallet.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://pay.merchant.razer.com/RMS/G/assets/img/payment_options_v2/fiuu_cash.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://src.mastercard.com/srci/integration/components/src-ui-kit/p-5cd60ac0.js',
      {
        headers: {
          origin: 'https://pay.merchant.razer.com',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://pay.merchant.razer.com/RMS/API/seamless/fpx_banklist.php', {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'x-newrelic-id': 'VQIAUV9UDBAHUVhRAAYBVA==',
        'x-requested-with': 'XMLHttpRequest',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://pay.merchant.razer.com/RMS/pay/SJsayalive/SJsayalive_logo.png', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://pay.merchant.razer.com/RMS/templates/RazerF5%20font/RazerF5-Reg.otf',
      {
        headers: {
          origin: 'https://pay.merchant.razer.com',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://pay.merchant.razer.com/RMS/G/assets/webfonts/fa-solid-900.woff2', {
      headers: {
        origin: 'https://pay.merchant.razer.com',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://fonts.googleapis.com/css?family=Google+Sans_old:500', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://www.gstatic.com/images/icons/material/system/1x/payment_white_36dp.png',
      {
        headers: {
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://www.gstatic.com/instantbuy/svg/dark_gpay.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://fonts.gstatic.com/s/googlesans/v60/4Ua_rENHsxJlGDuGo1OIlJfC6l_24rlCK1Yo_Iqcsih3SAyH6cAwhX9RFD48TE63OOYKtrw2IJllpyk.woff2',
      {
        headers: {
          origin: 'https://pay.merchant.razer.com',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://www.gstatic.com/instantbuy/svg/transparent_square.svg', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://js-agent.newrelic.com/nr-full-1.291.0.min.js', {
      headers: {
        origin: 'https://pay.merchant.razer.com',
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://pay.merchant.razer.com/cdn-cgi/rum?',
      '{"memory":{"totalJSHeapSize":19938064,"usedJSHeapSize":13814268,"jsHeapSizeLimit":4294705152},"resources":[],"referrer":"https://sayalive.io/","eventType":1,"firstPaint":3196,"firstContentfulPaint":3196,"startTime":1749134003734.4,"versions":{"fl":"2025.5.0","js":"2024.6.1","timings":2},"pageloadId":"d349e20e-63f7-4258-a7e1-002185ab67d4","location":"https://pay.merchant.razer.com/RMS/pay/SJsayalive/","nt":"navigate","serverTimings":[{"name":"cfCacheStatus","dur":0,"desc":"DYNAMIC"}],"timingsV2":{"unloadEventStart":0,"unloadEventEnd":0,"domInteractive":3848.899999999907,"domContentLoadedEventStart":3869.7999999998137,"domContentLoadedEventEnd":3873.899999999907,"domComplete":4889.0999999996275,"loadEventStart":4889.299999999814,"loadEventEnd":4893.0999999996275,"type":"navigate","redirectCount":0,"criticalCHRestart":0,"activationStart":0,"initiatorType":"navigation","nextHopProtocol":"h2","deliveryType":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":20.299999999813735,"domainLookupStart":55.39999999990687,"domainLookupEnd":67.39999999990687,"connectStart":67.39999999990687,"connectEnd":146.79999999981374,"secureConnectionStart":95.5,"requestStart":149.29999999981374,"responseStart":2162.7999999998137,"responseEnd":2178.0999999996275,"transferSize":35674,"encodedBodySize":35374,"decodedBodySize":148856,"responseStatus":200,"firstInterimResponseStart":0,"renderBlockingStatus":"non-blocking","finalResponseHeadersStart":2162.7999999998137,"name":"https://pay.merchant.razer.com/RMS/pay/SJsayalive/","entryType":"navigation","startTime":0,"duration":4893.0999999996275},"dt":"","siteToken":"95f3f64e4a6141ae80c21afbef5c7541","st":2}',
      {
        headers: {
          'x-newrelic-id': 'VQIAUV9UDBAHUVhRAAYBVA==',
          'content-type': 'application/json',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://pay.merchant.razer.com/favicon.ico', {
      headers: {
        'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://bam.nr-data.net/1/c73fff7d0f?a=75937762&v=1.291.0&to=b1QEZRRQCEFUB0wIV1YeM0MPHjR/Zkt/TlFWVQNJSEEOQg%3D%3D&rst=5354&ck=0&s=21fd8166b3ff35a4&ref=https://pay.merchant.razer.com/RMS/pay/SJsayalive/&ptid=c00f36b49e9fd8b5&af=err,xhr,stn,ins&ap=1940&be=2162&fe=2731&dc=1712&at=QxMTE1xKGx4XBRpbQ0VM&fsh=1&perf=%7B%22timing%22:%7B%22of%22:1749134003733,%22n%22:0,%22f%22:20,%22dn%22:55,%22dne%22:67,%22c%22:67,%22s%22:96,%22ce%22:147,%22rq%22:149,%22rp%22:2163,%22rpe%22:2178,%22di%22:3849,%22ds%22:3870,%22de%22:3874,%22dc%22:4889,%22l%22:4889,%22le%22:4893%7D,%22navigation%22:%7B%7D%7D&fp=3196&fcp=3196',
      null,
      {
        headers: {
          'content-type': 'text/plain',
          'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
  })

  // Automatically added sleep
  sleep(1)
}

// ✅ Auto-generate HTML report with timestamp
export function handleSummary(data) {
  const now = new Date();
  const timestamp = now.toISOString().replace(/[:.]/g, '-');
  const fileName = `./report/k6-testcase-report-${timestamp}.html`;

  return {
    [fileName]: htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true }),
  };
}