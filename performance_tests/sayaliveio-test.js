// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep, group } from 'k6'
import http from 'k6/http'

import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

export const options = {
  stages: [
    { duration: '5m', target: 50 },  // warmup - 50 users for 5 minutes
    { duration: '10m', target: 200 },  // 200 users for 10 minutes
    { duration: '20m', target: 400 },  // 400 users for 20 minutes
    { duration: '40m', target: 800 },  // 800 users for 40 minutes
    { duration: '60m', target: 1600 },  // 1600 users for 60 minutes
    { duration: '5m', target: 50 },   // cooldown - 50 users for 5 minutes
  ],
};

export default function main() {
  let formData, response

  const vars = {}

  group('page_1 - https://alpha.sayalive.io/', function () {
    response = http.get('https://alpha.sayalive.io/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/admin/img/65956b5fc4783.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-brands-400.woff2', {
      headers: {
        origin: 'https://alpha.sayalive.io',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-solid-900.woff2', {
      headers: {
        origin: 'https://alpha.sayalive.io',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-regular-400.woff2', {
      headers: {
        origin: 'https://alpha.sayalive.io',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(1)
    response = http.get('https://alpha.sayalive.io/assets/front/css/flaticon.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/magnific-popup.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/slick.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/jquery-ui.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/spacing.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/menu.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/datatables.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/dataTables.bootstrap4.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/dashboard.css?v=20250429', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/style.css?v=20250504_1551', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/responsive.css?v=20240804', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/daterangepicker.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/toastr.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/6659482d3137f_dp%20(2).jpg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://alpha.sayalive.io/assets/front/css/organizer.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/admin/img/loader.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/admin/img/65c375772e109.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/660a60e5b04ea_B+%20Run%2024%20Thumbnail.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/66597ace2b06f_image-320x230%20(1).jpg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/664c51118f6be_image-320x230.jpg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65c489e26a7d2_65b3a722aa09a_thumb.jpeg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/66e28156b6a9f_66aca7fe77f68_lokalfest_sayalive%20banner-07.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/664ee6d131330_image-320x230%20(1).jpg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/66598866e412e_rsz_dp_event.jpg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/6695e178992c1_Columbia_Pictures_1936.jpg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65b3a722aa09a_thumb.jpeg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/66597f8b5acb1_image-320x230%20(1).jpg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65dec3f99630c_Hausboom%20Gig%202024%20Logo%20320x230.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/66273de37d05c_azor_logo_png%20(2).png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65d35552ef892_20240218_145142_0000.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65cf96cf4a322_20240217_010656_0000.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67a96dc0b75c3_sayalive%20logo.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://alpha.sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/popper.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery-ui.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/isotope.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery.magnific-popup.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/imagesloaded.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/slick.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/vanilla-lazyload.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery-syotimer.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/datatables.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/script.js?v=250522', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/admin/js/event.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/toastr.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/cart.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/pwa.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-brands-400.woff2')
    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-regular-400.woff2')
    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-solid-900.woff2')
    response = http.get('https://alpha.sayalive.io/assets/admin/img/65956b5fc4783.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/images/features.png', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/hero-section/6822ea465b39d_67bbe099023c8_mesh.jpg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.6)
    response = http.get('https://alpha.sayalive.io/assets/admin/img/659567a6cb048.png', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(6.5)
  })

  group('page_2 - https://alpha.sayalive.io/ceramah-tiktok', function () {
    response = http.get('https://alpha.sayalive.io/ceramah-tiktok', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    vars['_token1'] = response.html().find('input[name=_token]').first().attr('value')

    vars['event_id1'] = response.html().find('input[name=event_id]').first().attr('value')

    vars['pricing_type1'] = response.html().find('input[name=pricing_type]').first().attr('value')

    vars['date_type1'] = response.html().find('input[name=date_type]').first().attr('value')

    vars['event_date1'] = response.html().find('input[name=event_date]').first().attr('value')

    sleep(0.8)

    response = http.get('https://alpha.sayalive.io/assets/front/css/flaticon.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/magnific-popup.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/slick.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/jquery-ui.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/spacing.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/menu.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/datatables.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/dataTables.bootstrap4.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/dashboard.css?v=20250429', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/style.css?v=20250504_1551', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/responsive.css?v=20240804', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/daterangepicker.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/toastr.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/organizer.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://alpha.sayalive.io/assets/admin/css/summernote-content.css?v=20240807',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67a96dc0b75c3_sayalive%20logo.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://alpha.sayalive.io/assets/admin/img/loader.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/admin/img/65c375772e109.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://alpha.sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/popper.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery-ui.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/isotope.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery.magnific-popup.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/imagesloaded.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/slick.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/vanilla-lazyload.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery-syotimer.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/datatables.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/script.js?v=250522', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/admin/js/event.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/toastr.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/cart.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/pwa.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/page_tracker.js?v=20250507', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/event_checkout.js?v=202505272', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-brands-400.woff2')

    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-regular-400.woff2')

    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-solid-900.woff2')

    response = http.get('https://alpha.sayalive.io/assets/admin/img/65956b5fc4783.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/organizer-photo/65df03cd268d7_65d4623f18bc4_The%20Boom%20Group%20Letter%20Head-02%20(1).png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/66594800072b2_wpevent%20sangkar%20(1).jpeg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(10)
  })

  group('page_3 - https://alpha.sayalive.io/check-out2', function () {
    response = http.post(
      'https://alpha.sayalive.io/check-out2',
      {
        _token: `${vars['_token1']}`,
        event_id: `${vars['event_id1']}`,
        pricing_type: `${vars['pricing_type1']}`,
        date_type: `${vars['date_type1']}`,
        event_date: `${vars['event_date1']}`,
        'quantity[]': '1',
        total: '90.00',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://alpha.sayalive.io',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.8)

    response = http.get('https://alpha.sayalive.io/assets/front/css/flaticon.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/magnific-popup.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/slick.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/jquery-ui.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/spacing.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/menu.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/datatables.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/dataTables.bootstrap4.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/dashboard.css?v=20250429', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/style.css?v=20250504_1551', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/responsive.css?v=20240804', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/daterangepicker.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/toastr.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/css/organizer.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/admin/img/loader.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/admin/img/65c375772e109.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67a96dc0b75c3_sayalive%20logo.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://alpha.sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/popper.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery-ui.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/isotope.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery.magnific-popup.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/imagesloaded.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/slick.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/vanilla-lazyload.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery-syotimer.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/datatables.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/script.js?v=250522', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/admin/js/event.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/toastr.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/cart.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/pwa.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/page_tracker.js?v=20250507', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/js/event_checkout.js?v=202505272', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-brands-400.woff2')

    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-regular-400.woff2')

    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-solid-900.woff2')

    response = http.get('https://alpha.sayalive.io/assets/admin/img/65956b5fc4783.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/organizer-photo/65df03cd268d7_65d4623f18bc4_The%20Boom%20Group%20Letter%20Head-02%20(1).png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/66594800072b2_wpevent%20sangkar%20(1).jpeg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(3.4)
  })

  group('page_4 - https://alpha.sayalive.io/checkout?type=guest', function () {
    response = http.get('https://alpha.sayalive.io/checkout?type=guest', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(0.9)
    response = http.get('https://alpha.sayalive.io/assets/front/css/flaticon.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/fontawesome.5.9.0.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/bootstrap.4.5.3.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/magnific-popup.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/slick.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/jquery-ui.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/spacing.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/menu.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/datatables.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/dataTables.bootstrap4.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/dashboard.css?v=20250429', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/style.css?v=20250504_1551', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/responsive.css?v=20240804', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/daterangepicker.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/toastr.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/css/organizer.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/admin/css/summernote-content.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/6659482d3137f_dp%20(2).jpg',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://alpha.sayalive.io/assets/admin/css/check-out-v2.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/admin/img/loader.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/admin/img/65c375772e109.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/online-gateways/logo/68401c90b3c9e_black-removebg-preview.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/online-gateways/logo/67b2ab9b5dbe5_66f6b2c4ee4e5_leanx.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67a96dc0b75c3_sayalive%20logo.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get(
      'https://alpha.sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/popper.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/bootstrap.4.5.3.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery-ui.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/isotope.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery.magnific-popup.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/imagesloaded.pkgd.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/slick.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/vanilla-lazyload.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/jquery-syotimer.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/datatables.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/script.js?v=250522', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/admin/js/event.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/toastr.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/cart.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/pwa.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/page_tracker.js?v=20250507', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/event_checkout.js?v=202505272', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/js/extractor.js?v=20250426', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-brands-400.woff2', {
      headers: {
        origin: 'https://alpha.sayalive.io',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-regular-400.woff2', {
      headers: {
        origin: 'https://alpha.sayalive.io',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/front/fonts/fa-solid-900.woff2', {
      headers: {
        origin: 'https://alpha.sayalive.io',
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get('https://alpha.sayalive.io/assets/admin/img/65956b5fc4783.svg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    response = http.get(
      'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67a96826286c8_Red%20and%20Black%20Modern%20Black%20Friday%20Sale%20Instagram%20Post.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(63)
  })

  group('page_5 - https://alpha.sayalive.io/ticket-booking/146?type=guest', function () {
    response = http.post(
      'https://alpha.sayalive.io/ticket-booking/146?type=guest',
      '------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="_token"\r\n\r\nR336CPXBvnLlqfvYsbTmZq3kYE8Z1PseHHZSLz2H\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="shipment_provider_id"\r\n\r\n\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="shipment_rate_id"\r\n\r\n\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="fname"\r\n\r\nRed\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="lname"\r\n\r\nzmie\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="email"\r\n\r\ntest@test.com\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="email_confirmation"\r\n\r\ntest@test.com\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="phone"\r\n\r\n01256791212\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="country"\r\n\r\nMalaysia\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="state"\r\n\r\nSelangor\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="city"\r\n\r\nShah Alam\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="zip_code"\r\n\r\n40000\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="address"\r\n\r\nJalan Raya\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="event"\r\n\r\n{"id":146,"organizer_id":23,"thumbnail":"assets\\/admin\\/img\\/event\\/thumbnail\\/6659482d3137f_dp (2).jpg","status":"1","date_type":"single","countdown_status":1,"start_date":"2024-07-30","start_time":"11:46","duration":"1y 365d 13h ","end_date":"2025-07-31","end_time":"00:46","end_date_time":"2025-07-31 00:46:00","created_at":"2024-05-31T03:46:54.000000Z","updated_at":"2025-05-26T03:30:09.000000Z","event_type":"venue","is_featured":"yes","latitude":"4.597479","longitude":"101.090103","is_allow_promoter":1,"is_coming_soon":0,"service_charge_percentage":null,"service_charge_fixed":null,"payment_method":"[\\"10\\",\\"11\\"]","is_print_label":0,"is_allow_shipping":0,"is_use_old_checkout":0,"is_admin_handle_shipping":0,"google_analytics_measurement_id":"G-BY5N14K0MS","meta_pixel_id":null,"title":"Ceramah Tiktok","slug":"ceramah-tiktok","city":"ads","country":"Malaysia"}\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="total"\r\n\r\n90\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="quantity"\r\n\r\n1\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="_token"\r\n\r\nR336CPXBvnLlqfvYsbTmZq3kYE8Z1PseHHZSLz2H\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="coupon"\r\n\r\n\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="gateway"\r\n\r\nrazerpay\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="agree_tc"\r\n\r\nagree\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="agree_tc"\r\n\r\n1\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP\r\nContent-Disposition: form-data; name="eventURL"\r\n\r\nhttps://alpha.sayalive.io/ceramah-tiktok\r\n------WebKitFormBoundarylFuLpjcZVbHlFiMP--\r\n',
      {
        headers: {
          'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarylFuLpjcZVbHlFiMP',
          origin: 'https://alpha.sayalive.io',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(0.6)
  })

  group('page_6 - https://sandbox.merchant.razer.com/RMS/pay/SB_sayajual/', function () {
    response = http.post(
      'https://sandbox.merchant.razer.com/RMS/pay/SB_sayajual/',
      {
        amount: '100.7',
        orderid: '146-168404df250e27',
        bill_name: 'Red zmie',
        bill_email: 'test@test.com',
        bill_mobile: '01256791212',
        bill_desc: 'sayalive.io payment',
        country: 'Malaysia',
        currency: 'MYR',
        vcode: '2a64edbd9256609c2d2479b78d82400e',
        returnurl: 'https://alpha.sayalive.io/event-booking/razerpay/notify',
        callbackurl: 'https://alpha.sayalive.io/event-booking/razerpay/callback2',
      },
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          origin: 'https://alpha.sayalive.io',
          'upgrade-insecure-requests': '1',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )
    sleep(1)

    response = http.get('https://sandbox.merchant.razer.com/MOLPay/G/assets/css/style.min.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sandbox.merchant.razer.com/MOLPay/images/icons/Tick.png', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sandbox.merchant.razer.com/MOLPay/images/icons/visa.png', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sandbox.merchant.razer.com/MOLPay/images/icons/sel.gif', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sandbox.merchant.razer.com/MOLPay/images/icons/mastercard.jpg', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sandbox.merchant.razer.com/MOLPay/images/icons/Minus.png', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/css/jquery.fancybox.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/css/jquery.autocomplete.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sandbox.merchant.razer.com/NBepay/G/assets/css/jquery.noty.css', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/css/noty_theme_default.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/css/jquery.tooltip.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/1.5.1/fingerprint2.min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/js/libs/jquery/jquery-1.7.1.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/js/libs/jquery/plugins/jquery.fancybox.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sandbox.merchant.razer.com/NBepay/G/assets/js/script.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sandbox.merchant.razer.com/RMS/G/assets/css/channel_sprites_overide.min.css',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sandbox.merchant.razer.com/MOLPay/G/assets/js/block_cardbin.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sandbox.merchant.razer.com/NBepay/G/assets/img/flag_red.png', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sandbox.merchant.razer.com/MOLPay/templates/images/razerms_logo.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/MOLPay/templates/images/icn-facebook.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/MOLPay/templates/images/icn-twitter.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/MOLPay/templates/images/icn-instagram.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/js/libs/jquery/plugins/jquery.autocomplete.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/js/libs/jquery/plugins/jquery.blockUI.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/js/libs/jquery/plugins/jquery.noty.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/js/libs/jquery/plugins/jquery.tooltip.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sandbox.merchant.razer.com/NBepay/G/assets/js/libs/date.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sandbox.merchant.razer.com/NBepay/G/assets/js/getit.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get('https://sandbox.merchant.razer.com/NBepay/G/assets/js/plugins.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.get(
      'https://sandbox.merchant.razer.com/NBepay/G/assets/js/libs/webforms/webforms2.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get(
      'https://sandbox.merchant.razer.com/RMS/G/assets/img/payment_current_v70.png',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sandbox.merchant.razer.com/NBepay/G/assets/img/down_square.png', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(1.2)

    response = http.post(
      'https://sandbox.merchant.razer.com/MOLPay/MPFingerprint.php',
      '_id=ddd781f1b818a7a081a55c33663b4744&user_agent=Mozilla%2F5.0+%28Windows+NT+10.0%3B+Win64%3B+x64%29+AppleWebKit%2F537.36+%28KHTML%2C+like+Gecko%29+Chrome%2F136.0.0.0+Safari%2F537.36&language=en-US&color_depth=24&pixel_ratio=1&hardware_concurrency=4&resolution%5B%5D=1366%2C768&available_resolution%5B%5D=1366%2C720&timezone_offset=-480&session_storage=1&local_storage=1&indexed_db=1&cpu_class=unknown&navigator_platform=Win32&do_not_track=unknown&regular_plugins%5B%5D=Chrome+PDF+Plugin%3A%3APortable+Document+Format%3A%3Aapplication%2Fx-google-chrome-pdf%7Epdf%2CChrome+PDF+Viewer%3A%3A%3A%3Aapplication%2Fpdf%7Epdf&canvas=canvas+winding%3Ayes%7Ecanvas+fp%3Adata%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAB9AAAADICAYAAACwGnoBAAAAAXNSR0IArs4c6QAAIABJREFUeF7s3Xt8XHWd%2F%2FH3mckkaXpJ73d6pRfAgpRCAQFbUBBYF5RlvQItYrkriq7sqktZ3J%2FgZXW5SUulFVZAWS%2BogKJrKyBSLMW2Qgu9pem9Tek9TTKTOb98zsxJT6aTZCaZTDLt6%2BsDmybnfM%2F3PM%2Bk%2F7zP5%2FN11MWHK3eIpEmSTpB0vKQRkoZK6i%2Bpt6QySZHkbUQlVUvaI6lK0hZJlZLWSFopaYUjZ6t%2Fy67cUcmv7c9pya%2FfHyAJ%2Ftz%2FdkXg56lf%2Fyn5swpHzqImtG5u70PO4fvo4o%2BQ5SGAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIFIeB0tVW6cidKOl%2FSuZLOlOSH2LlaqoXrdZIG5mrCdPOskvRsL%2B36wyjVv36iynZepB6akdMrWnj%2FqqSXJP1RjmOXzGi4s%2BRmdOBRdpAzV13u836UEXM7CCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCBS0QJcIFF25UyV9RNKHJZ1YqKKLJf1C0q8lvdXcTfi17lbnHqx7b%2F9N2yXt0r%2BQ49hSmh0E6O3HTp1h%2B8%2Bmv6%2BkuzPJKY4MULh4bTRW%2Bqf%2BFzy9OfdXYkYEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEOgogU4L0F251oLdarI%2F3RD6ntJRN9jR81qf%2BAUNveX%2Fp%2BENgGVtuZiF6NckG8j7TeTbMk%2FTc2wptqQFchxbYpNBgN5%2BYH%2BGbU%2Bcdl3v8shXi0pLRjmlpXJKSqTiYu%2B%2Funj4uf2hyBcHTHz07dxdkZkQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKCjBPIeoLtybT%2Fzmxv2J58ltd5S%2B%2Bdaryv0e%2B%2F%2BL9dordVezdN5OiMHHdht7u9phZ7Txd78l%2Bh5XaTh%2Bpomt%2Bq9QtKDDZuxz5Va6IduW7I%2FL2m4lMGcXkW6hen2WkFq4%2Fo9B6VvPSNdeZZ06uhW15c8wFq12xIflOPYkr1x96xL3N%2FpJD2n%2B9VTNZnOVbDH7VepLtGtetkZ%2B3XNueEbubiR5d88p8%2FI4%2FY9Udan54fC%2FU6QE90sFTmSBeilJVLZEKm0t9z4dh086N7Sc9wP7OPCQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBLiyQPkD%2F7Nwn5LifSK57r0LxCxUPXaFQ%2FD49fGOb2lIng%2FMvS7oqU4%2FXtEN3aame0gX6vTbpWv1JL%2BiSnIXnFsyfo8H6qT6gf9Yf9LK26W5NaTFAtxT625Ieb%2FUm%2FPB8m6QpmQXowTktQL8zGabXRKX7n5fWbJNu%2BGA2AXpwRlvyt3XDnMvkOnefozXHTIDuI%2BRyD%2FQd953%2BXM%2BTz71429Dr9eS8x3TCpBN0%2BWlvSwf%2FrqpeM%2FXkT1ao38AB%2BsRnPiLt%2F772VlVd0Wf8nJ%2B3%2BrHhAAQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQ6DSBpgH6DT8Ypnjoz5I2KlZ0iR79zH5d%2B8OeKoo9J2mSF6Q%2FfONr2aw22ardouBbsjnPjv2Gluot7dETOj%2FbUzM6PpsK9F0NM86W9EBGM%2FsHZVmBnm5uvyr9tjZVoKeb8YF%2Fvf7SW17qghXor2mUFmu0btXCrJQzPThXAfra2dM%2BMGDAod%2FrHx7W7DvnavlrS%2BSEHD0476saEf2Z5r34Hj3%2Fv7%2Fwvvelu%2F9d55y9V07NSyvDgx84MdO1chwCCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCORf4HCAfjgoV2N4HlzP9Q%2FfKsddnE2A7sq9SdJ%2FSurdllv7pP7ondbZAfpDkr4qaU%2FWN5GDAN2%2F5oiD0ohnpDvOki7NuIV72hWXXn%2BphukkvdGFWrj7bdYv0pv6mux9jdyPXAXoW2ef%2B2j5oOjMQx%2B4T3ff%2Fahef%2BU1OY6juY%2F%2Bm4bue0qPLztTv%2FjxTxRypDvu%2FQ%2Bd%2FZ5KlYSX6tAh9%2ByycXP%2Bkvs7Y0YEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEMiFwOEA%2FYYfnKF46AU57nea3Sf6cIX6SEkvS%2FqspN9KSvzdqtYj0Q9qt%2FOzixYet%2FWcnYOG%2FE6bdKdO0z8l9zG3FuybdNDb17xcxWlbsm%2FWQb1Pz2iDDjTe48%2F0QQ1Xd12pP%2BhpfaCxjbtVqX9dS7zjRqqH%2FqzLNEzd5c%2FxzxqruVqpSerr7XX%2B31rhHW%2FH3q6T9VOta7IH%2BlkapL9ou9fOfah6aIIu00J1b9icfL2UvIfEovy27AclPSPprOQxayQNlpL7qjfdA91eCLCf95B0WUNHdZs3OHZIXnhcF%2Fhmsbc7e%2BLYZ6ShZ0nTdkvuEqmnpNOPl647X3pjvfTw76XjB0tXnSfd95z0wZOl3y%2BXdh1IfP%2FWi6XSiHT9pZJO0un6jVbpeu1XN%2F1MD%2BujekNWBX6hblNvVet2%2FV7DtMf7vj82q7fep3%2FRBvVTuQ7pBX3fO8a%2Bt0dl3t%2FPUIU%2Bqev0pE73Tru74VnO1CuN543ULj2tubpSs7x5LtcyvaHh3teJ57hLf9a3vHmDI3hta0H%2FIb2p92mNvq7L9LKO967zef0xsd958u8Wxjee5%2FS9QnNu%2BLmablHgX2KDQvH3ZbJFwbY7p63oPbjuPVX9TlBV30u16PnfK17UUzdeUqvSA6u1rO4C%2Fer3azRoYA997NP%2FoPJDj0mRekVD8duKxz%2F237n4xWUOBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBDIvcDhAP36hz8q1%2FmZHDcRMjY3%2FEp1x%2F1e43EWSNp4ZNYnN5Tsv%2FWXdeu%2Ft8%2BNhv1g2%2FYZt%2FD6er2kJ7VGn9DxXlV5axXmwZ%2F7gfge1TWG7sEW7D0V8eZ7RdtkYbsF9BbA%2B9e2n9vxX9RfvJDdhoX0x6lHkwB9hd715l%2BsPvq8npfrhd3nKhGET5Jk1d9LJa2S9MFkqO4H%2Ffb3gYFAfXjyPPtzQvLr85LHpAL71er%2BNSyw%2F1MyPLc5g0H9aGnoemnMX6RfXyb17i7ZPunPLpXeNyERnlto3q%2BH9C%2BJe9W3npHOmShdMjkZoNv31yii%2B3WqPq1i9fH2RP%2ByrtC1%2BnNjKP5ferpJgG5T%2BdXiX9AfGn%2B2yntpQJqobV54%2Fk96vUkg%2F6h%2BpA9qpRdu27BrXa9P60Rt8SrOW6tA90Nwfz0%2F16m6Vtd4gf0J2ubN61evB%2BcKBuqNn%2B1Zc%2B5VKH6fF5YnPvePZrM9wZavTtvUd3BsWKwkpHfrzpCKeshxwg2vCoQl15HiyWfrSI5bpWGnVkrdwoq5%2Bn%2BRU5%2ByZgYMBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBDoggLBAP1rcp27Ww3Q7SYCgXlgj%2FTj3lxw5UsH6qKfXqwdulXv8fYwtwp0C88twG7t76k%2BqQH7a9rRWIF%2BgvroEj2vL2iSPuqF2mqsOv8vnaWpGugF5Pa1%2FXy%2Fokcc39we6Js0WXO8GS3Eto7bqdXiwe%2FbcX4Fuq0jGHT7AbpVkVvIfnGaqnP%2Fru08C%2Bn9gD3d34PXSQbug4ZLT02Wym1NDUs5dbS0J81%2B6c8tld7clKhC%2F%2FzlXgW6dL%2BkGi%2BkH6yT9E4y1LZpntC8Fj%2Bu39AlektDG4%2F7g07Q1IYXFPaptLHSPDiBVYc3qQZXP69i3G%2FX3lqAnno9C9Qv1uc0T4%2B1GKCnrUD3F5ZJ14U0Clu%2Fcv7aXgNjY3bt6qe3ttym8hE95MiV%2F8vkeuc4Xo6%2B%2FS8rdfm%2F%2Fa9U5igWcmZHTv%2F5XV3w3wGWhAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACXsrnj0wr0O34xLH%2F5bW8dp2pY7b1ek%2F1q7F%2FfXD7OaVWKW7h9Rka2Gpgnhqopz6RlgJ0a9MeDMjtXD8kv6ihHfhMTWjyc7%2BC3Q%2FU7fjUAP0CPa%2BdGq4KTU4uxVqqvxgIvv0q8W2BNux2aGsBuh1vwyrUW9q%2F3Fq823bxdv3Ua6dUoHvzWWi%2BIrG%2B6Uul779HOrl7%2BgDdWrz%2FYUWzAboF6u%2FT%2FfqKBusq3aa96iZrk26V4j29kL3psFbv1%2BlqPa%2F7vB9YgH6N%2FuK1gL9S1%2BtpzfFauacbVj1%2BhW7IKkC3qnYbfrDf7gDd76TgOhutc0I2%2FxpsvO2Df%2BrVL3ZeSU%2FpJ1%2F6uIrkKiR5%2F%2FnDwvOYpBHTNuu8O96QW%2BKo1q2f2e285xZkcy2ORQABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACB%2FAkcDtD9QNGubXuZP%2FqZ%2FU2WYaG5DWvv7u%2BF7rhfPHvloLOfe%2BmSK290Xx5hPz5LAzVDEzKqOG9PgO5XoFsLdmsHbyNYZZ5agd5agG67qF%2Bs51Urqxr3A%2FRAQK2XJFUmW6pbmO1XptuVWwvQbc4%2BzVSzB5VT90APBu7pAnT%2FeycnKt9HTZWukXRbMxXoW%2FYk9ktP7oEerED3K9JHqkY%2FkTQ8udf52VrXbDW6hdrWgv1MrVcvHfIC89RW63Z39r1gwH6XPqx%2F1hLN0IzGvddbq0DPeYCe2Af9uLSf9VZ%2B%2F9beeNF3e%2FaJfbFn35jWLZqkyt%2BdqLCTCNHtF8oq0OtdKV4S19nfeUm9xu5VfSiug6Fu48qn%2F2pN%2Fn69uRICCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCGQjcDhAt7P8ltZW1hwM0S08j4f%2BqUml7mfnPjFgfcmke%2F44ddy18QklVs1t%2B47frSn6WjKAbq1le3sCdL%2FC3fZZtz3PrU17sKJ8n%2BqOqFD390i3PdB7qdhr6f6ytukkDdZ6fUDV%2BkOystwC%2BeCe5N29GmvpA8n9y%2F0W7u9P1h0v9F4dSFSXp2vh7ofyVmHut3KPpDwnu56F9FObafOeLkC3KWw%2F9uWBvdIblnrOQenkZ6RTBycC89SW7i0E6NIV6qY%2F65eq0AGdqu%2FpA81WoVsl%2BWx9WGdrrb6tnzVWqlvY%2FYrG6M%2F6lreXuh1nw1q8f1n%2FpDn6H%2B9Ya8v%2BHV14xD7mwUDeR%2FKr1n%2Bmh7291dNVoB%2Bn3V7Y7x9r51qb%2BJl6JdFW3ul7hfcCyPUP23YFX2qy7%2Fn1D9%2BqaGTBES%2BOpPltWveFq88Ia%2BviXr3q1aNvTOv%2F9wzte22kwsk27nFr6F4a08jPvaF%2BZ21RPBRXrRt7peziF9%2BXzS8nxyKAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAQH4Fmgbodm2%2Fulwa2bgU13kytc31te9Z9J%2F%2F9%2FfN%2F2ZhtLVTT63wtnDcwm0b52iwztIgfVvLmv27v0%2B6HeDPtcELm6VyFesFXeJ9faX%2BoKcbQl0L0G0ErzNSPWTrsWHt3f3z%2FYDdr1C30NzmnKUT9Ky2a6UulisLtIMt2m2WYAW4hd9%2B8XAPSXXJdusWbNt%2FNs5OhtmJdSeqzncnv57SUBq%2BJzBHajv31Gv7%2BscnQ3WrcvfnTa1MXyzpXMm7BxsHpfJnpI8OliLJNV82RbpksmR7oT%2BTeC6J%2B1kn6cLA39%2BW9F7Je6qH9Ed9v9lW7OmqzW0iv5r8ZdnapU%2For%2Fq2%2Frdxb3QLwS1M90Jt9fOOse%2B9pSH6ui7zjk%2B3B7sF7vZzf5TrkBe%2BW%2BV7MDS%2FRH%2F39mK%2FSG8eDs%2BT15Hj3iHX%2BVfvY9V0vKxQ6OuKx3%2Fp9cVP14UhcHzFrTN%2FFu5W9dHuPQ6oe3m9VF%2Bs2NZ%2Bqt9dpqLR%2B1QyYbdCpTHFXamuPnpo76Ge0wd%2F4gV7UAwEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEOiiAkcG6Bks1JVrietvm%2ByhnsF57T3kNe04IkBvz5wvSPpQsuV2e%2BbJzbkWoFt4%2FZ6U6TYng%2FHECwNHDmv7bv8Fz0tWqw89S%2FpsQ1X87JSzrs%2FssdtR9pD9eD0395mbWYIV6M3ttZ56JWeu12G99TFrzjUKxf%2Bgh280%2FGbHxs%2Fd9TeV7jiltPs2FXffq%2BLudQqXxRQqdRWXq2g8pGhdSV2sttt1%2FWc993jrF%2BYIBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBDoTIHMAsXACl251mP8%2F5rpM96h92IB%2Bl1aqqd0gbfHenuGlQJfEKgdb89cuTnXWrFbhXpiP%2FfEsFDdvm97sjd3v9b2fUKytbx%2FXkq791GSrMu8%2FWkjwwDdDrXm9faw7aF3pdEhAbq%2FhYHjfkdzbvhGJve7%2FfP33h4v7jEzFD44QkXVPcORQ3LDdfWhcGyzwqHXoyWRfx%2F8%2Be%2F8PZO5OAYBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBDpXIKsA3ZU7QtKfAlFsh68%2B2Hbdb9FuzcXbMyolnSdpQ3smyfm56Vq4Fzfd27zxmlZx%2FlyyjXxqK3g%2FPE9p9x4M0bMI0O2S1sv%2FRUn28LvC8FvHW%2Fv3YBv31taWcQV6axPxcwQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQOCoFsg3QLTy37Lmgx%2FuTgXBB30RbFm8h%2BvyGgvUns3rs3pXsodvDL%2BRBgF7IT4%2B1I4AAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIINDxAhknqa7ch635d8cvqWOvcIOkOR17ia49u4Xo%2FRzptOyXaQ%2FfPgSFOgjQC%2FXJsW4EEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEE8iOQUYDuyv2spLn5WVLHXeURSbM6bvrCmbmnI41Xm0J0%2BxDYh6EQBwF6IT411owAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIBA%2FgRaDdBduRMlLZNkG3IX7Fgl6ZTkruEFexO5XvidDRPOznrSOo%2FScYyUgQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCBw1ApkE6M9JurjQ7%2FgSSc8X%2Bk10xPrbFqI%2FL8cxUgYCCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCBw1Ai0GKC7cm%2BS9GCh3%2B1Dkm4u9JvoyPW3LUS%2FWY5jtAwEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEDgqBBoNkB35faXtFpS70K%2B0ypJ4yTtKeSb6Oi1j5J0TcNFsmvnbqTj5DhGzEAAgU4SePOnVxafOKamqGqzEz7Qa1909PRFNZ20FC6LAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCBS8QEsB%2Bv2Sbin0O7xV0gOFfhP5WL%2BF6PMlTcvqYg%2FIcYyYgQACeRL46U%2BvDH%2Bo284%2BxTrUJ1Rc1ktlduGIFIkoEokoqojccFFNvRPauyfa%2Fd2hU%2BZW52lpXAYBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQKHiBtAG6K3eSpOWFfncrJJ1c6DeRz%2FW3LUQ%2FWY5j1AwEEOhggcofnjq078DIgOJip8gLzJPBuX19%2BD9bRPLvkmrrnH3vVhdvJkjv4IfD9AgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIHBUCDQXoD8m6apCv8OrJT1e6DeR7%2FVbiL5Qkv2Z2XhcjmPUDAQQ6CCBhbOnFU0av%2Bv4bkWR7pEyy8q9%2F0v%2BZ3l55HBoHvy%2BBemKKFrkxg%2FUxNf1HTt3bwctkWkRQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAgaNC4IgAPV31ea0OaJ%2B2y%2F6sV8y7cUeOQoqoh%2FqqlwYppKIuBdK26nNX0iZJuyTVJ%2B%2BneyKY8nZRt68ndvJ9rpJ0UFJfSaOTa1kv6d3crc%2FCc5sy89FiFfpNb2pwXY2GhVwdnDtFdgN5Hdct1mgVqW9nXH%2FWEk2MO%2BqumN6dNzVL1bwq5fdiVy1T97K4hpb116bvHadD%2Bb16y1ebtURlTkjj7Cg3rtVzp6jTW6BXPTL5hG5l0bLIxCsVGXGhVD5Jql4rVS2Wqn6ZuCE%2FOC%2BfKPW%2FVCqbJEX3StFVUvULikardeBQzRpC9K70aWMtCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggg0NUE0gXoD0u63hZar6h2qUKHtK9x3SGFva9d739x72sLz%2FtphMrUp8vc3w2S5mS9ms2StiXPCnmvCUg9JO%2BecxhQZ72u4Al5CNDtcnc2%2FN%2FsjBc6R45j5GkHAToBevCD8YWN6rZ3p8bbayldJaAOrq%2BrBehbvnP2yPL%2BNf018XKVTf26np73I%2F3y6aelqHT5J6%2FUlZeWS5XzvAA9GhmirWW3676779HWyrUaMXai7vjmf6i8XFL1PYrW1sWWb6x9a8qUudGMf7s5EAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBA4hgSaBOiu3P6SdlhyXK86bddqRVXj1Zr31AD11lDva39Ua7d2a5NiqvNC9IEaqxIvcO7cUSVpoBfyZzv8Su6eksZne3Kejs9TgJ7dfuhGPVCOY%2FRHDAJ0AvTgh6KrBdR5%2BsVt02W2zDmtrKym6ASVRVX2yd9p69a9%2BuxHPtVkrkd%2BsUAjqu62hFzV%2Fa%2FTPd9dqKWLF3t9M%2Bz%2FLrz8Ut14xx1S9RNSdKlUXVPlDH1wQ5sWxEkIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAwFEukBqgf6mhD%2Fi37Z53aq2qtccLxvtrtLqpV1qKOlVrh9Z41eol6q5BGt8kZO8Mv%2B80NDn%2Fcpsu7AfowfbobZqoA0%2FKU4Bud5DdfuhfluMY%2FRGDAJ0APfihIEDP%2FJ%2BHDd88Z0x5WbRPdfkQDbnmF3pi3o8077v3JSeIeCH5dbffqCvPqVR15cuKTn5I%2F3z%2BpxrDczuwvH9%2F%2Ffh3v1F078uKRBOV669vqVlOFXrmz4EjEUAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA4NgRSA3Q%2FybplBrt9wL0uOq9%2Fc37aHiLInu02TujWGXqp5Hefun2dwvdBya2Em4cB%2FWudmmD1%2F493dzb9Y7s%2Blbx3lcjtE2rVKuD6qNhKlJpsuK91psvrIjKNVg9NTDZbn6Dd%2B6HFNdKr1Le%2BhaPkFrdn90PzlNv0%2FZ1t%2FVvb6GFe50ka%2F1ube4T%2B8Mnrtdb0rA01%2FYD8CGSt%2FXz3uQ53ZKJtf1pBd1bJVlBt3Vatsdk3x8pqbKVPdDtWdkxNcl5LGKzxgJ2vSM69ievb%2Fdn2zz7%2B77bcaWSBknT%2BkkLAy41q6T4Qal4mOSUStEtUrxGkXj1OzNWnvuxeJF2H7dXm2dPb8RQcwH67DdVvKlGYyWVhVzVHYpo3eOneBu8tzxcOde%2BoSEh17sxr9DWLVJtOKptRd1UlLrfeuoe6DPWq7ToXa%2FFQCTkasvcKR52k%2BHt0V2v42P1CtUXaX1xver8fbHDJVpbW6t%2BoZj6uGGFQ67cmKuD0WJtSl1%2FcA%2F0WLF2l7ga6sZVGnfkOCHVh6U9g%2FdoU9DLFmLXj9RpuBNRmVPf2PYhqiK9O%2FxdbUs9Ph3Ytcs0IRRTj3hEux89WetSj5m9UEWbu2uCG1ZpUVjbHn6v90H2xow31NtxNTSSXKvdYzSkGtfRlgWnao9%2F3NWL1S8S0ggnpFBRSLsePlUVwetc%2FYqGlRZrUL2dH1dlsdTL9qMPHuOGFVe1NvzwbG%2BfhBbHlW%2BquFeNRiiunnZNN664QtofdrWl3tUYWaYcmKu1PejT%2FTxdwO9%2FhlpbX8jVwblTZL%2FkORk7v3nOaWXlUVVF%2BmvEdb%2FxAvQf3JMI0G3Lcxs33n67Lp%2B8StWVixU55xF95Px%2FbnLt8v7l%2Bukff6fqrS%2BoLPpL7zfm4K7oph6T5tkvPgMBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQCAg0JiounKnSnrVfvauKr0APKwiDdDxXmV5NsMPye18q0gvUknj6f7c9o3UgN3axVuAbsG9Vb2XqXdjgG5rsGp3G9ZG3gJ424XdkaNeGixrJ2%2FnL1NYl3kBdGJ%2FdsnasR%2Fv7dTe%2FLDA2bI7%2Fzx%2F%2F3MLwi3ftX3R0%2B2BvluSdUL2g%2BfE%2FvCH%2F24J15jkPur%2B1f0AvViShe92jl3XjCzTtWuvlnQgeYK%2FFruGrcf%2BbucFq%2BT9FwDs5zaXHevP6ztYa317GSDosCV5b3aOfRT8nwWD9MHSnUMP74fuB%2Bih7lLcnocrOWHJdXXS7qdmnLX9W3%2B3NH74Pq32Q950AbqFt5U9NDYUUo9swvPZrkKbl%2Bl4t957sLaHdjxUJNeNJ4Jsu3bcUfdgkJkaoNt5s5ZobNxR73iRDjx6it5O%2FWzMWqIhcUdDw44Ovb1X74zvqWIL0C34jrmqC7vqZtez61uQa9%2B3ry0kfmyqdvnzNQa0UjTkqsgPzuMxL0D3wZt4BUNp%2FxoWeto92rx2b0P3a01rIfp1KzQoVKthdVJ0VDe9Pfsk74PTOCwkD8c0uiiseHVYa%2Fzw%2FzNLNTIcVz9bq3%2F9eLEcC%2FLt7%2FUh7frhZO%2BD740b3tCoWFz97IWAqFThB%2Bw3vakeNbUaa%2Ffth%2BuzlmiEG1Zf%2F17sHHOLhVQZDObT%2Fa568x3Q2FBR4o0YO9fzTKyrznsGYYU7IkD31h1vGvz7a0w%2BU%2B9ZpnuJoIV%2FeFr80epbL%2B7Ve%2Bj%2BcRagVyuqyOU%2F1t5omT51%2FkeanPfTP%2F5Y%2FVd9SdHqqKrKL9cTL2zVC798NnlMRFdec6VuvON2Va%2B6W2UR%2B7dOqnWje0rH%2FWhtW9fGeQgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIDA0SoQDNDvaSiJ%2Ford6Da9rVod8CrKB2tC1i3Zbf%2F0rXpbccW8ivTugdzJryi361iwngjYLUy2yLjKC%2B%2FDKvauaxXmweMtRO%2BvMd7xNrft0W6huoXojsLqpxH6D%2FXRvd5sVkxrBZaWa1kI7uWtrYzmWrj737cXCSYm57CfW1W0AAAgAElEQVQKbwu6LZO0am3rd%2B6%2FaGDht53j%2F8wrdk6e5wfoRj8oWaVuP%2FJDbwu4dibX3RBce8ckdA7PaX9PF6Db9%2B06x0nqkzzPDCwotyB9QLIi3360v6HO2fIz%2B74Vcts5%2FsfB7s0Klq1CvlQaNV5aGEncoh%2Bg2xQWopeMkZzE8%2BtWvfyhq1ae8kPvRxFtevgU7bCvUwN0C8Erl2ichedWYl9cqnUPndT4xkCLz%2Bi6VzVcEQ3ygut6bZl3pveQvYrt4jqNdkKJtzUyCND7R6URxSHVB8NjO9fWt%2BV1jbcg3q%2FM9quS691EeBtytWfofm2wENuqovsc0hg73u6nZ61Wf%2B9sD8%2BC%2BonJ79tfq3vWqsL%2FmV%2BdHfQKXtuqzeedrAo53osBNlf%2FelfHhR058RJtnjcpce%2FNjS9sVLf9OzTO1hyRKudO8VoaNA4Lyh1X%2FZ2Y9j8yVe%2FYD657VYNCRV7rBEXj2jn%2FdG3yru%2FKuWGZhkalgRb%2BK6SN8yd7H1RbV8Qt0ni33vtFqB4%2BOfFCwqalmmDdBfzvzXYSb7W0pYW7vXCxoVzj7cUFN67aumKt9wL%2F5LriMQ1KBuhNqtlzVYHenLF1Udgc1Ti793hcB0ZM0Wr%2FPlv8IGfww21funBguFf1cWXlUqQ8qq3qr%2FKpd2jxyy9o1YqtXm%2BKqdPP0eTyFSqrThS9b62qVnTijXr22ZcVra5WJBLRlZ%2B8VBFVqTz6QqJsPWL%2FMsXqSk748YoMlsEhCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggMAxJRAM0N%2BUdGK9Ytqhd1SnQ2lbsGeq4%2B%2Bh7rdit%2FP8CvNE5bhFt3EN0Bh181qtW8Py9bLq9TL18b5vww%2FQLUwfpHGKeK3ME2Ovtsnax1t83lvDvJbwJ0l6y%2FuphcCWCVpbdWtrPjCDpWcToFtAb5XpfpW6ZcHBYS3dLYS2zNDySD8I9wN0y3ktX%2FSDdTvXAnfLHu1POz61db51zrY12pzpAnR7WcDavDfpkG1RZvJlAgu67Zr2p3Utt%2FzVvraA38uFA8OyVgvzreh5nDSjTJofCNCdiFQ6TnIOPw8pvvK6peErLDSNhbRrQbKddzBAH3qa3vEryOMxxUp7aG2m4bmFlRWHNKHIUbGi2j7vTO%2FGGsenXlWvshKNSVajN7bSbqYCPVLvaoIF7qnty699WT3Dxd5bF6qv09pHz9H%2BlADdC4mDQemMhSot7ulVqDdZW7ACvedArf7ecYlg3YaF5X7I7HtZGG3rslbk0dqm1ex2jlXO17vqFSnS7tR26ek%2B4I2V9ilt3P3rhB0V%2B2H8tIUqmlCu8fWuunnh%2FSneh63JCFras%2FQNPvOK%2BiqikRbu19Rpe2mxwnFHA%2BKOYqUlTZ9xWwJ0e3nAXniwavlglbu%2FOH9dqe3gOzpA933tn7faIq3NaAuCDP4lskM2fvX8YaUl7mCrQI%2BURb1XEaqj0cYQPBqNqKws8Z%2BiyX9HolJ1tR2TuIiF7Bail5VHJDsuGaDbz5yTn3g9w6VwGAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCBwzAh4Abor18qqV9rX9Yp6Fegx1XqV49ZKvS1jv3Z4%2B5Vb4O1XsR%2FQLq%2FCvFQ9vDbttrd5bw1VuYbID%2B4tZLe9z3t4VdGHA3SrPh%2FcWP2dWJHfKt46Ydte6%2BtUphMaF2vRkYXRtl%2B6BdiDM7iNbAJ0Pwi3vc69rDXNsAp1C9J7Jdun2yH%2BeRa4W5gdHNYS3raQtsdi7dZTW%2BdbcG73ZK3T0wXoVuxrc6a2q7dtxW0tVshsZeR%2BdXpLJNay3rp021y2lrLEXuhnJvdAD%2FWQSlPXL03adMclU3fcu0MxvTtvaiKADQbo8YhqFVPfbMNzm%2BfG5epTV6tRqS3Hg3fx2cUa7xapZ2sV6HaOX4HttUQPhME3%2FE3DYvUaHGzv7oe%2BXjgfqK4PXruZoN6rQLfq5EdPT9sq3msl73sFQ2xrH19re46%2FV3v9KvQMPsRNDvGDZ4tYS8r1zv3jvF8IeYF3mUY69aqP9dU7C0arxntxoLvGWoV52NG6uVO0N%2FV6%2FjOwoLp8gN4JvhDgt3K3n4WtSt1eXwlp26OTvRYIjaMtAfqMNzSqKK5%2BqdXs%2FqSNa7e3aTpgD%2FR07tcu1dCiuAb7%2B7sHW%2Fdn%2B5zSHb%2Fl9vNHRsrd%2FmVlUUXKpaqqcm3de6HKRvj%2F3gRfvkmm5ekmikjVa5%2FV5Msrmwbopz1NgJ6LB8UcCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggcFQJ%2BAH6TQ39vR%2B0O7O9xS1At9boqXuUZ3PnUR3yWqzbjP4%2B6v7%2B5xaYx1Sng9rl7XM%2BQGN1SHu1U%2BsUUthr6x7xukEfDtDThfmpAfo8lenmxkV2ZICe6dx%2BO3ar0varvP0APRiA%2B4u2inarbE9Xne4fky7kby7498%2FJZL2Wq9p%2F1trd2sVbobS%2F73oyQLfsfWUyQA%2F3lUqOfLmi977%2F%2B%2Fd%2FWvOB59IF6MHPT%2Bp%2B2Zl8tvwg3lp4hx29PXeKV2DbZPhBayYBur8HuLevd7LS3K8KD7nqFmyT7oe%2B1ia8%2FmCiKj312unW11oFtB%2B6p3rFDmmoXcuukdyHvLa%2BSLtHlKgqdS%2Fzluz8qv3iRE1yYxv3a5drTCiqPtaKfu4Ur5e%2F1yLeevz7%2B7QfqZtomGAvEaRWeifPD7ZyV3MtzdsSoF%2F7V02wlv%2FB9QbvO1i5n48A3d%2Bn3iru070kkMnnubVjNt06bXhJb2dQWVmyhXtlfy1efJ2m3jG5tVOb%2FLxq1V6tfeKXuvKbixOfguR%2Fzmm%2FJEDPSpKDEUAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA4FgQ8AP0JxtKoz%2Fu3%2FAOrdYh7WvzHuj%2BPIkg%2FqD6aLhXUW5%2Ftwpza89ule4WqFtQPlDjtU%2FbtE%2Fbjwjt%2FRbumQTo16hMTzU%2BtUxC49RHnGkFeqZzpwvEu1KAbpXp1gXd%2FvS22Q4M%2B2jY96y1ezJAt5%2FOXSV96qDUTIBeXL3s11eveu9dzQXo1tK7KK641%2Bo8uV92pntGZxKgp%2B63bktOVxlu3w9Wewf2Oi%2BvdzXGAn6%2FMtuOzST0zVWAbtezcL%2FE1VA3rlI%2FSPcfjr0cULdfFQume%2FsUtDoClfZeWO6H6k6iHrkxVPfX3%2BqE9skIq8le4%2F45jS8E2CcnpF3p2sxnYpm6htZeRMhngH7Tm%2BpRc0BjQ0UqCn7OM3HL5piKWRcNKe5bN9T2QLcqdHta8z7%2FySabPqTUoDeZPvh2yaRPrtLUa1YFKtDjUefMXy3PZj0ciwACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggcCwJ%2BgG7JsdUXe2OvtmqPtiisosbq8ZYwrBV7ldbJ9im3vchL1dM73PYnt33Krcrcvr9d78hRyGvpbhXoO7XG2sdroI7Xbm1WrQ40tnT3r5dNgD5BZV4D9MTINOQO3lmuA3S%2FAj3YWj3TAN0q1i1jTh25qkC3KnMrPLY94q1Nu1W9W6W8rdVazlsFekoLd1vKyFXS8welMekr0EO1qzdd%2B%2Bb4y9MF6Na2vdbV%2BkiJQhFplFUyp9vLvLnPWiYB%2BqwlXgX1gEwq0O06frt2v437ltc1PHl%2BY2W2HddYgR6TU1Oi1en2us5lgO4bWEX8xrfU23Y2CNWrhxv2NqW3qvQmbedb%2Bv30K%2B3DjmLWxr12r3rafuIhV3XBSv4blmlgPKrhsZDqU9uzZ%2FKPob8PumN7KljIHldcUW344dmy%2FQAaR1sC9Ovf0Lj6uHp1dgW6vXywOapxbr1Km6uwz8Qqk2OW33hpn%2F5l0TGJFu5RWSX6s%2Fddqr1ry73TWwrPg%2F8K2tfTv7lYQyZVNVaf1zr1B0rP%2Ba3tB8FAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBAICDiu3CEN%2BWCTPYprtF87tdbbp7yXBnkV5C0N2%2BvcqsctHLfq8m5KBDz%2BPCEVeRXoe7XFC9dtv%2FLgnud2DdsfPdju3b9epgF6XOM00gt%2F%2FdGRAbpdw7InC6Fb2gP9nWRL9HR7oKdr4W5bTq9L7oFu%2BxwnXkRoOtIF8H6obnum23b2qcO6jVtYHtwD3d%2Bf3VrlW4V5alhvz8NeAAjsge5Nu0r69EFpXvoAXbXrNX3jTR8a%2B%2B5v30m3B%2FrcKd4m8PL3y7aK9NISrX3oJA%2BzxeHv220V7NVhrUkXYgeC1oP%2BtZqrQLeLeXtnF2uspZFRqcKqvuviKg1WZttxwT3Qg63Qgwv2rxPc77y1yul0LdxbQrDAPx7TIKuQd%2BNaPXeKqltz8yvtrZrd1h4rVi9r3%2B46qvrhZO8tCW%2FMWiKv%2Bt5LZgP7iLc2f%2FLcxvbt4ZD22fcs8HbCqnFieifYbr8tAbr%2FYoTtC%2F%2F2Xr2zaLr35kfjmLFepUXvarz3gkGGe6AHOxAEX%2Fhobn32MkPlEo2zVvJ2X8MiWp1NO%2F1MHIPHLJw2rWjMycWn%2BHug25%2BVK8ZqxY%2BmtliFHqw8t6%2FLhlTrwkcWJqb2UveoDrnF28ou%2BI3tF8FAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBAICFiAfqGk36WqVGm9bI9xC7%2F7a7TXWj3dsKrxHV7YHjui%2FfrhkLzWawefWmHuX8PauMdUq4i6edXpFsT7I9MAfZnG6R%2FyGqBb9mQt2q3FuYXdPVJ4LEO0MNz2ER8qyd5TsNFSBbplghbMW2du2456ZAtzBgN4P0C34uQxyQry4Kl%2BJby%2Ft7r9zK5je56nC%2FLt5xa47zmyhbutf%2BRB6YW%2B0vgj90C3AH307idvuaDyq8%2B1FKBbJe%2FGao13QirJtJLXbz1eZO3fo9o%2B70yv%2F3zjuGmhetSUa2zIVVGmFeh28rXLNCEUUw9rOV4v9bZK%2BdQ91v1QtT4xd5PqdJtjxkKVFvfUOGtN77eDt%2B9nG6BbtXhR3KsOd7sP0prvHee1AmgcwZcIMg3Q7WS%2F0t4Ja380ppKwq6L6Iq1fcKr3kL0xe6GKNnfXBDes0uYqva9d6rWVHxyKqK5OWu%2B%2FxOC%2FEGHpbG1RYk%2F1kpj3ixFJbeXelgDdr6L3XnSoVeVjU703bhrH1a9oWGmxBtUXyQ0G6Nct02jF1DdepAOPnuJ96BvHp15Vr7ISjfE6IcT0rv95bW59%2FssOzVXWp%2Fyy5uSv62%2B5cGJJibr7IXqkLKoV86Zr74rEvyfNVaE3huhlUU3%2Bj5dVPtFezkmMaCSqSK8eK50pv2715Yuc3ASTIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIFJGAB%2Bucbyqi%2Fn7rmetVpu1Z7e5ZboN1TA7z26n64ba3X92uH1%2B7dKtUtaB%2BosSpJCZJ3aYMOqMqbPrVC3c636nWby0a6avdMA%2FSfapxuz2uAbiG3VXHXSV5hr3XAtwpwG1ZMbaG2%2FzNrx%2B5HXS0F6Hbu1uR%2F1l1%2FcCB4t33KbU4LvW2kC9Dt%2BxaSW7Dtr8Xms6DfjC1084N8v4LeKs8t5%2FSr9y16s1x6d%2Fo90P0XAK7qKz2WPkDvf%2FDl716%2B5uoHWwrQbaUzl2qA4jouKbN17hTv5lsc172q4YpokIWYTr22zDtT2%2B2Eq5ape6mrUdZa2%2F6eTYB%2B3QoNCtVqWL0r19qPp1Zm23wpAbobjWvn%2FNO1SY7cK99UcZ9DGhN31N2NqzYYvmcboAdfErAXC4ocrfOrty3gruyhsVYBXe%2Fo0Mi9emd2SiV2c3h%2Bpb3dn%2B2p3lwl96wlhz8k8Yh2D39XG%2F1r3LxS%2Fer26zir8rYq8zmner8A8lu3hx3Zh7bxOTaG2vYLHmjl7lvGQgqlC8Obuwe%2Fu4B1LSg5qMofnOt9SHXdqxrkhjXUe3Ype7Pb%2FcQdL%2FSPR4q1%2BeFTtMP%2FvBTXabS9wOFdr5UA3V4cKIp7v5CKhbTt0clNu3a09rlt68%2FfnvXh%2FqWltSOtfbuF5xH709ojPD1ZVYtHHFGJHqw%2BV%2F%2Boxn5uqcr91u1e7XlUNfG6A70u%2FjPt29v6UDgPAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEjmoBC9Dvl3RLuru08NyqxOsCXaJDiS2Y5SreGHwXqcSrUi9pDG0Pz2ZV7Bai2%2FF2nFWY217pNoKt4lPDdX%2BGTAP0b2qcHsprgG4rtPzOOmBblbmNhM3hv9t9WkV4sDq9tQDdzvcryu1rq8a3XDJ4Dfs6XYBue5hbwB5PrsVCc%2Fvahh1vIb%2B37b3kFfBaZbr%2F89S1Ww5tFfH2czuvT%2FK85PpH9pUq0gfoPWr%2B%2FpOPv%2F2P%2F9pagG4T%2BqGoZXs9a7X6e2c3rbhO%2FVxaG%2B3Ny3S8W5%2Fob2%2FBaKhIrlURW9W2have2wqBQLSlFu42h9%2F%2B286z%2BVIrs%2B2YYAt3%2FxoW1obqEqG7hdL2%2FaK4KuZOUWO5b7YBul3LC4RLNdSx91LsiYVUb%2F3l%2Fes49aovKtWGH5ycCJAzHX6lvR0frJJPPT9QTW4vIpht3O7P39vcqVfNsO6J9uVN9gRvqPIecbJWz3YSHyp7VpuWaoK9nRFseT5riSL1riZYeO0%2Fs7qYNqdWlR%2Fx7G3%2F8YMaZxXyvks8lliX2fvrS2nh3thavtEy8bkJm6Mb9n5hyloK0LsPkrt3p8YnOxt4Hs2Z2zp6RbXWPsc3vanBdTUaZnvPZ9MtIHXuDbdeeaKKq7uVlVV74bkfpldXlWvv0hGKrhii6NbEthkqi6psYpXKpm5V%2BTlbpcjhSN2%2BsgB9r3to5dAPv071eaa%2FOByHAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACx5SABejPSPrH5u7aikcPapdXRV6nQ14QbsOKTS0Q765%2BXuV4ovj0yGGt2bfrHcVUl6bFe9T7mQX11sbdwnWrZA%2BOTAP0GzVOv8l7gG4rtSrzjcmqc39bZgvObW90a93e9H5abuEevPOdkldc7Vec25xWAGuV6O82E6BbSG5Bt1WQ%2B%2BdZge0gSQPSPB3r3r0l2TLewnZ7hpZN2vE2jxWpWs4WbCcfeAFg%2FmhpRsq0tetVWrfuxU%2Bv%2FMCMTAJ0qxz3W30Hq5pb%2FC105Vz7hoaEXG9h3tsYVvldX6RNxfXqF3fUO5sA3c6ftURj7bwWKrPLnJDGWdV0OKaNobB6RGPq41U9W6Aa0v59pap8uiFUDq69LQF6cj3lsYgGO3Wy6zYG6VaVnu46mfyr5Vfaey8J1Gnto%2Bdof3Pn3fiS%2BtR015BIXKUWniePi8YdVT16qrZa5b19z385wUL%2B6lqt%2B%2FGZif3P%2FdFcm%2FQbl6tPNKrjGlszpGnJn25tVoW%2FsVzDQjH1sUp4C%2BCtLb1brx1OSKPs%2BaTu326BfczVceEi9fJftIi5Ohgt1qaSGg1Ukfq2FKB7%2F96FNM7a97fmHAzLcxWgr58xozTWN3xCsbMrFCmrVpm1YPer0a1xhIXk0TJF95YpMmJv2r7uUTskGtWhQ6Ft%2Fa%2F5C3uft%2FYg%2BTkCCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggcswIWoP9V0pRCFzhd0pIOuwm%2FItzaok%2FssKsU3MRWmG40R44lchx7JHkffmAdC2nXglNVkekC%2FAC9ucrsYNvx1IA202twXMcJdNXnM2uJ%2BlsL%2BZCrNXOnBFp5ZEmx%2B7bZvat0cExx6W4nEtmrSKRaFqZbRbqF6V6Ibu3d%2FXltr3j72oJzRRStjkihyLu9r34h%2FW9sluvhcAQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEDgaBWwAN0CFYtCC3pYM%2FGM09Ks75QAvVmyhZKmHfHTCjlOmv7uWcM3OeELG9Vt%2Fw6Ns2%2FGQqpccKqshL5xzFio0uKe3s8joYg2%2Bftdt3ZVf17bw7s6rDWPn%2BKV%2BTcZXTWgbe3ejpWfd8Xnk6x8H%2BPWK7z%2BkN5ZlOF%2B9c09s53%2Fcm%2FPmnjJ6Lh7KBKJVEl%2BkB6p9gJ0C9O9ID2ZoicC9DLVxcLxsNyd%2FT73c2tNwUAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEGhBwAJ020fZ%2Bo0X9LCG403S1JzezTuS1%2B06uO94Ti9QuJNZeG4hetOxR47jb5qes3ubtlBFE8o1vt5VN2tlXuRo3dwpiUJbP6wMhdQj5qpuVDe9bXt0N3fx2bMTbdH1foW29NRIa98ecrVn7hStTXdOVwxocwZ7FEzUFZ%2FPzKUaUBTSwEhEGx46SQdyxbz11vsGxIpKBoeKIhEnvN%2BRVaN7xe2Hw3O7Vjgci4aKa%2Fa%2FcbD%2FxumzZ%2Fv7S%2BRqGcyDAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCByVAhag22bZxYV%2Bd7bTd7NpaZtuznLZNcm9xOuT%2B4OPSO4H3qYJj96TjqxCr5Pj2CPJ%2Bbh6sfpFQhph%2B4Lb%2Ftfe%2FuMRbw%2F0sF3M9uKOF6vyhyd5G8U3Oz7zivqqTCOd%2BkSQHo8pVtpDa5sLOrtiQJtz3AKekOdTwA%2BPpSOAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACXUjAAvR4Mh3uQsvKfimWgrrZn9bCGYckrU5UdXrZ7ABJw3J6haNmsjsb7mR2k7tx5TiJCu8OGFctU%2FfSGg1TscqaBOdxHdhXqsqnW6g895djgWvc0fFeu3dXdeFD2vSDc2XdGNIOAtoOeJA5nJLnk0NMpkIAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEjmEBAnTv4W%2BVtELSymTVeWVDU%2FAtkqqSjeGT7ZG9Y22D4bJk1%2Fv%2BkoZKssp0y2JPkDRJ0pBj6yN1ZBv3Dg3Qjy1c7hYBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBPIlcIy2cF8l6Y%2BSXpL0qqSKHHuPknSmpHMlnS9pYo7n74LTNW3j3mEt3LvgnbMkBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBA4SgQsQLe21b0L%2FX76JGvFm7%2BPxZJ%2BIenXkt7K8%2B2eKOnDkj4iaWqer52nyzVt475HjmOPhIEAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggUjIAF6OslWcl0QY%2FRaevIrQX7gob26v%2FTEF4v6yL3d0pDm%2FhPN6x2hiRrAX%2BUDPsE2ScpMSrkOPZIGAgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggEDBCFiA%2FldJUwpmxc0s9HRJSxp%2FZvuZP9iwP%2FlcSW4XvTWnYZ%2F1WZJuTu6b3kWXmc2yDrdxXyLHsUfCQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBApGwAL0ZyT9Y8GsuJmFXibpV7Lg%2FNuSHi%2Bw27lK0pcLP0g%2FHKD%2FSo5jj4SBAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIFIyABej3S7qlYFacdqFVulV36QE9UNi3ccYt0mu2mXiBtnafJslCdOkBOc6thf0wWD0CCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCBxrAhagf17S9wv3xh%2BS9FX9t%2FbotsK9icTK7Slc1lta8J%2FSXTcV3t0c3gf9NjnOfxfeDbBiBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBA4lgUsQL9Q0u8KD2GVpC9Ket5b%2BguSLiq8m2i6YnsK9jRsVFwsTf8vqWJiYd1VYsv5i%2BQ49kgYCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAQMEIWIA%2BRNKWglmxt9BHkl3n6xqXvVXS0MK6iSNXa0%2FBnoY%2FKoqlBQ9Id322cO4ssQ%2F6UDmOPRIGAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggUDACjq3UlbtfUo%2FCWPUNDSnznLRLHW2F24VxE0eu8nD78yN%2FNvt66a6HC%2BLO%2BvyL9uz%2BltOnIBbLIhFAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIGAgB%2Bgb5c0sGvLVEq6StKLzS7zE5Ke6to30fzqPi7pyRYWX3GeNP1xqWJEl77DD52sHb9d7gzq0otkcQgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggEAaAT9Ar5LUr%2BsKLZb0MUkbWlziQ5Ju7ro30fLKHpR0UyuLrxgpTf%2BJVDG1y97ld3pp15f2Of277AJZGAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIINCMgB%2Bgu11X6AVJH5V0sNUlrpJ0QqtHddEDVjaUz0%2FMYG0V3aXpP5cqLszg4PwfYrdxghzvc8VAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEECknAceW2tPt2J9%2FLs5I%2B7O3Snuk4SdJbmR7cVY7rLWl3FoupcKSZv5YWXZrFSR1%2F6ImS3kxcZrojZ1HHX5ErIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAArkTsAB9hqT5uZsyVzNZ5fmHsgrP7cp3SLo3V0vI1zzlkv4myV5lyHR4IfpvpUVdpxL9K5LuSayfAD3T58hxCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCDQZQS6aIBue55fkFHb9lRJO%2FPMLsObxULubDh2dhbH26FeO%2Ff%2F6zJ7or8qKbk7%2B12OnGzvJsub53AEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAgtwIWoFv1uVWhd5FRKek8SRvavJ73SlrW5rM76cRpkha24doVI6XpL0oVI9pwcu5OOSVZRJ%2BccYEjZ2buZmcmBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAoOMFumCA%2Fn5JL7brzr%2FTULv%2B5XbN0Aknt2cn%2BorzpNF%2F6oRFH77ktyV96fBfFzlypnfqghX4QOYAACAASURBVLg4AggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgggkKWABehW92z1z11g3CBpTrvXUSVpYNa7p7f7su2foD1PYsH10syH27%2BGNszgSNohqf%2FhcwnQ2%2BDIKQgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggg0LkCXShAf0TSrJxp5CaKz9lyMpuoLfugB2eePlda9NnMrpXDo66XlBLdE6Dn0JepEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAgPwIWoK%2BXZA3EO3GskmS7aNflbA0rJJ2cs9nyNFFb90H3l1dRLE1fJlVMzNOCE5dZLmlS0ytWOHJG53URXAwBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBop0AXCdAvkfR8O2%2FlyNOvlvR4zmftwAnbG6Db0hZdLE1%2FrgMX2XTqqyQ9duTVCNDz9gS4EAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAII5EqgCwToD0m6OVf302SegqtCtz4A1g%2BgvWPmg9KCm9o7S0bnp6k%2Bt%2FMI0DPS4yAEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEOhKAhagu523oCpJ4yTt6bAl3CrpgQ6bPccT5ypAr%2BgtjV7dcOf9c7zAptPdIun%2BZq7gyHE69OJMjgACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCORYoJMD9I6Ptzs%2Bos%2FxE7lT0l05mHPGLdL85uLtHMyfeOthnBzHiJsMV%2B58R87MnFyFSRBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIE8CXRiC%2Ff8NVjvuCbxOX5KfgX67ByE6DbX%2FOXStEk5XmTjdDfLcYy2ybDwvKGF%2Bwwq0DuKnXkRQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKCjBDoxQL9a0uMddV9HzHuJpOfzdrU2XmiapIXJc3MRos%2B4Spr%2FWBsX0%2BJpz8txjLTJ8MNz9kDvCHLmRAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBjhbopAA9f9XnPuAqSadIquto0fbMP8OqxgMTtDdEtyr0hculUTmtQjfCU%2BQ4Rto4AuG5fa%2FCkTO6PRSciwACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCORbwAJ0q3m22uc8jhskzcnj9RKXekTSrLxfNYsLpgbodmp7Q%2FQZ10vzH85iEa0eOkuOY5SNIyU8t%2B8vcuRMb3UmDkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQS6kEAnBOhVkgZKcjuFoXOi%2Bwxv1ds9PM2x7QnRRznS%2Bh2S%2Bme4iBYPmyPHMcLGkSY8t58RoOdCmzkQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQCCvAp0QoH9H0pfzepOpF3u%2FpBc7dQXNXLyldwraE6LP%2F7Y040vtveMX5ThG1ziaCc%2Ft5wscOTPbe0HORwABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBPIpYAF6c3XPHbSO90pa1kFzZzZtpaTzJG3I7PD8HJWufXvqldsaoo86RVr%2Ft%2FbcR0XDburvl%2BMYnTda%2BdwQoLdHm3MRQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKBTBCxAt1j2zvxcfbGkM%2FNzqVauYiu5oKEW%2FmCXWI2kTF9jaGuIvvBVadrUttytEV0gxzEyb2Tw0sVMR86CtlyMcxBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIHOErAAfVpDdfHC%2FCzgDkn35udSGVzlBUkf6rTd2FMWuL6h8fmoDBZth7QlRL%2FzK9LsezK8QONh1lT%2BQ3Ico%2FJGBuG5HUaAnq00xyOAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAQKcLWIBusa3Ft3kYJ0l6Kw%2FXyfwSz0r6cGeH6Jm0b0%2B9pWxD9FEnSuvfzBzGsnKjcRwj8kaG4bkdOtqRY23fGQgggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggEDBCOQxQF8l6YQuCWPl1R%2FtzHbu2VSfBwWzDdEXrpSmTczkGVjb9o%2B2ofLcm9uR42RyEY5BAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEupKAF3S6ctsa4WZxLw9JujmL4%2FN7qG3w%2FbGG3uMb8ntZqS3V58E1ZhOiL3xQmnZTa3doleMfz3LP8yZzEqC3RszPEUAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEECgKwr4AbrtgW57oXfg%2BISkpzpw%2FvZPXSnpKkkvtn%2BqzGewRuntHZmG6DM%2BLs1%2FsqWr2a1fJccxCm9k0bbdP2WBI2dme2%2BJ8xFAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIF8C%2FgBukWwd3bsxUdLKoxtsW%2BQNKdjMRKz5%2FK1hUxC9FGjpPXNbnc%2FR45jt9442hCe27kE6Pn47HANBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBDIuYAfoFv1ucW5HTS2ShraQXN3zLSPSLpFUl3HTJ94XcFC71yOTEJ0d0vD6wFDgle1W7xFjmO33DjaGJ7b%2BTMdOQtyeVvMhQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCORDwA%2FQR0lqtjS5%2FQt5QdJF7Z8mzzOskvRFSc%2Fn%2Brod%2BbpCayH6wt9J0y7078hu7YtyHLvVxtGO8NzmGO3IKYxWA7l%2BrsyHAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIFLeAF6DZcublsKJ6C8t%2BSbitYqIckfbXhDvbk4g46Mjz319dSiD7%2F%2B9KMz9utfFWOY7fWZLQzPJcjp%2FEzlQsu5kAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQTyJRAM0Oc3bFI%2Bo0MuPObq7Vr3%2BKAOmTtPk%2B5quI7l0g%2B053qma8r5GM2E6Fd98artj3%2F3sffIcapSl9He8Jz9z%2FPxYLkGAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgh0lEAwQO%2B42uh7xr2hS9acqm9LeryjbiU%2F866Q2nYbHbHneWu3HAjRr5L0ZUmT3vv%2BKudvfxqQemoOwnObkv3PW3sm%2FBwBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBLqsQDBA77h90H%2Fd%2B239w94JnoIl0A9Kmuv1jS%2FYkfFtmKpVndvrCXke9nBnzZZuvkua5F%2F7jBP2O6%2Bt7BVcSo7Cc5uS%2Fc%2Fz%2FIy5HAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAII5E6gyX7VHbYP%2BurIJh0fG95k2dZAfIGk%2F5G0LHc3lO%2BZWryNzqg6l3SKpE8n%2B%2FH3N5BgO%2Ffhw2POpk0R3ymH4fkiR870fPtzPQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQCBXAqkBukWtFvvmdqwN79OYeJOq5yYXWNyQ%2Bv5C0q8lvZXbS7c6mzUz39nqURkd0HgbdzbchknmcZwo6cMN7yJ8RNLUdNf1Q%2FQRveJO5b6wHZLD8Nymo317Hp83l0IAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAgdwLpAboHdPGfV0oqtFuY9Vzi7exStIfJb0k6dWGMuqKHN%2B03eGZks6VdL6kiclrLGpoQP6jhlbr9mdbhs17TbLse5TUGbfR6rItRF8QcZ0N0VCOw3O7NO3bW30AHIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAl1ZoEmAbgvtkDburmO7nR9xrYxgtib3TV%2FZ0Jd8jaTKho29t0iy3ul7JFVLiiZnsoi%2BTFJvSda7fKikEQ1t4o%2BXdIISG4EPaeWqFthbiP6n5HH2d%2F8%2FC8lt2J%2F238jk3uYZ7G%2Be79to9i7vdKT%2FiFvz%2FBkZ%2BWd2EO3bM3PiKAQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQ6MIC6QJ0C1bn53TN7QnQc7oQJvPekXDctr3M0Dwf7dv5aCGAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAQMELpAvQc9%2FGPZsW7gVP2uVvoE6OW5zjVdK%2BPcegTIcAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAvkXSFuJnPM27mvD%2BzQm3iv%2Ft8cVjxBYF9qnsfW5fBYLHDkzkUYAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQKXaC5AN129V6Ys5tbHdmk42PDczYfE7VdYE3RJo2L5vJZTHfk2K7xDAQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKCgBZoL0K2Nu%2B2DbkF6%2B8eve7%2Btf9g7of0TMUO7BX5T%2FrY%2BvCdXz6LCkTO63WtiAgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKALCKQN0G1drtwZyRC9%2Fcv832F%2F1hVb3tf%2BiZih3QL3Hv%2BG7lh9arvnSUww05GzIEdzMQ0CCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCDQqQItBehWhb4%2BJ6u76sLX9Njvz8jJXEzSPoGrP%2FiaHn8hJ8%2FCkdPs56d9i%2BRsBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAIP8CLQagOatCP%2F321%2FTaf%2BUktM0%2F0VF2xTO%2B%2BJr%2B%2Bt1cPIu7HDmzjzIdbgcBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBI5hgdYC9NxUoQ%2F8yXJt%2F%2FjJx7Bz17n1QU8t146P5eJZjHbkVHSdG2MlCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAQPsEWm3B7cqdL8n2Q2%2F7CG%2FaqNhxx7V9As7MmUDRxo2qH97eZ7HAkTMzZ2tiIgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKALCGQSoOemCv23Zdt00aHBXeCej%2BUlVMhx7Xm2a7D3ebv4OBkBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBLqoQKsBuq07J3uhX3fG3%2FXIX9%2FTRR2OjWX9vxMX66tvTm3nzc505Cxo5xycjgACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCHQ5gUwDdKtatlbu09p8B6O%2BsVrrvz6uzedzYvsFpnzlVb1%2Bz5ntmGiRI2d6O87nVAQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKDLCmQUoNvqXbkWni9s850Ur9is2pOHtfl8Tmy%2FQMnyzaqb1J5nMN2Rs6j9C2EGBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAoOsJZByg29JduVaFPqPNt%2FFcrwpdvL%2Fde3C3%2BfrH8onP96zQJfvaY7%2FAkTPzWCbk3hFAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBA4OgWyDZAtwB2fZtJPn7Zn%2FXkr97X5vM5se0C7%2F%2FkCr3440ltn0CjHTkV7TifUxFAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIEuLZBVgG534sq1CnSrRM9%2BlL60VYfOG5L9iZzRboFuL25Vzblttb%2FLkTO73WtgAgQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKALC2QdoNu9uHJtL3TbEz378Wz5Wl2yb2z2J3JGmwWe67VWl%2B5tq%2FkiR870Nl%2BbExFAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIECEWhrgG6t3C1Ez35P7amfW6JX759SID5HxzLPvHWJFt%2FXFvMKR87oowOBu0AAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQRaFmhTgG5TunKtAt1C9OxGeHulYoOPk9Tma2d3wWP%2BaFfOTkfq3xaI6Y6cRW05kXMQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQACBQhNoV4jtyrV9se%2FM%2BqavOf91LVh4WtbncUL2ArOnLNJdf21Lu332Pc9emzMQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQKCABdoboFsL9%2FlZ74desnSLak4bWsBuhbP00te3qHZyttbse144T5iVIoAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIBAjgTaFaDbGly5bdsP%2Fe6TX9HXVpydo%2FtgmnQC35j0ir6%2BPFvjCknWut3%2BZCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAALHjEC7A3STSobo67NSowo9K642Hdy26nP2PW8TNichgAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggEChC%2BQkQDeENoXoV134mh77%2FRmFjtgl13%2F1B1%2FT4y9ka0t43iUfJotCAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAIF8COQsQE%2BG6DOSe6Jntvbw9kq9M7S3xsR7ZXYCR2UksC60T2O395L6Z3R48iDC82y0OBYBBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBI46gZwG6Kbjyp3d8MedGUuddserWnLvmRkfz4GtC4y%2Be7Uqvjau9QMbj5jpyFmQxfEcigACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCBx1AjkP0E0o6xD9Z4MX66Pbpx51up1xQz8ftFhXbMvG8i5Hjr30wEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQSOaYEOCdBNNKsQvXjFZq06ZaBGu5Fj%2Bmm0%2F%2BbrVLJ8p%2BomDctwKsLzDKE4DAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEjn6BDgvQjS6rEH3EvW9rwx0Tjn7yDrzDkfe8rcqvZGpI2%2FYOfBRMjQACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAAChSfQoQF6MkSfIWl%2BRjTXnP%2B6Fiw8LaNjOaipwIzpr%2BtHf8zUbrojZxGECCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAKHBTo8QLdLuXJHSVqfAXyFnhmwT%2F9YdXIGx3KIL%2FCr%2Fst12c5MzQjP%2BeQggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACaQTyEqDbdZMh%2BkJJFqY3P4rWbdLKCdLxseE8sQwE1hRt0ri1w6URrR1cIcnatlN53poUP0cAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAgWNSIG8BuukmQ3Rr5z6tRe3Sl7bqrfeXa7Rbdkw%2BlUxver1TrRP%2FtFc15w5p5RQLz63y3P5kIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAgikEchrgG7XT4boti%2F6nS0%2BkbJfb9fBfxwoKe9rLJBPiqtBT63Qjo%2B11rr9LkfO7AK5J5aJAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIdJpAp4XTGbV0L%2Fv5dh28ghD9yI%2BHq8H%2F83dt%2F9SkFj45tGzvtF8rLowAAggggAACCCCAAAIIIIAAAggggAACCCCAAAII%2FP%2F27ibEqjKMA%2Fhzc3RC0IKGCg2zMTAigxwaS4pUkEowgzYVpQYJLapNhrYpF0GItQhq12LswyBIpIgWgd7oywINVEhTZkSmD0NDHCjFapqjd2oaxu4dX5059%2FV3NvcuznPOeX7P2f1530OAAIFmFBi3AL3Aamg1erESfc%2ByKbZzr71exbbtt717oM7K82olKgub8YX0zAQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEBgvgXEN0Aeb7o%2F%2BYovxs2%2FpXnwTffeiP%2BP6P64ZL6hS3PdAS2%2FM2TqhzjfPbdleimF5CAIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEmk2gFAF6gVZ3NXpLd2%2B8P%2B%2FXuO9IvW9%2BN9sMGnveD9p2xbIdN0fMONv51Yh4rBKVYut2BwECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAiMUqA0Afrgc9f5NvrBWLHoaHRt6xhln819%2BsqFO2Lj1rP17FvnzT1dT0%2BAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQEkEShegFy51V6PPWL8vqs%2B1x3X9E0vieGEeo6dyKha81B2H1swe4QZFcL6xEpVi%2B3sHAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECCQKlDJAH%2Bzpf4P0Sbt%2FiBeXHY1ne%2FLc0n3zVV%2FHA9V5ETeMNGLfOU988ZUTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEBguECpA%2FSGgvSOtdvjvQ03RvtfU7MYb%2Fclx%2BPpJz6Pj15fMqwfK86zGLAmCBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAoq0BTBOjDgvQFA7u8vxARM%2F9BnXD4UDz86M%2Fx5iedZYVu6LmWL%2F4m3trUGdE29HTBeUN4TiJAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgECaQFMF6IOt1rZ2L4L0FRFR%2FJ45Wnf%2BGI88eSTe%2BKq5tnV%2F%2FPZd8fZrbXFy7rQh4yyC82Kr9q60EasmQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgUYEmjJAH9rYiGF6EaQ%2FuPqn6No2dyCELmePB6M%2F1i3cGRtf7YiYM9iS1eaNvLXOIUCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAwAUQKGe4fI6N1sL0lRFx1%2BmV6cXW7kvX7otVm9tjyfFZ53jZ81v2fet3seah3tiyYXFtq%2FbTofnAlvRdlagU%2Fx0ECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgMA4CWQXoQ%2F2GrEwvwvSZcelns%2BP%2Bl7tj%2BbbpcW%2Ffv99PHwv0%2FZP2x%2FP3%2FBJbVrfHiTtP1gLzqERl3Vjc3j0IECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAoL5AtgH68Nb%2FE6hf%2BcVlceum1phfvSI6eq6Nu3%2B%2Fuj7VKM440NIb6285Fi2zvo13Vs%2BOvo6PB1bEVytRqY7iKk4lQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTEUuGgC9JFMa6F6xPwPO%2BKpVybH4f7OuGPvlGg9MT1uOn55nNljvfidHBETa9c4FRG%2FRcSxiDgSe6Yei53T%2BmL53k%2FjmVUTY%2FvSnvhy6VFh%2BRi%2BxW5FgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACB8yBwUQfo58HPJQgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgEwEBeiaD1AYBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIpAkI0NP8VBMgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAJgIC9EwGqQ0CBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQSBMQoKf5qSZAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBTAQE6JkMUhsECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkCYgQE%2FzU02AAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECmQgI0DMZpDYIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIE1AgJ7mp5oAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIEMhEQoGcySG0QIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQJqAAD3NTzUBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIZCIgQM9kkNogQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgTQBAXqan2oCBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQyERAgJ7JILVBgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAmkCAvQ0P9UECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgkImAAD2TQWqDAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBNIEBOhpfqoJECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAIBMBAXomg9QGAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECKQJCNDT%2FFQTIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAQCYCAvRMBqkNAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEEgTEKCn%2BakmQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAgUwEBOiZDFIbBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJAmIEBP81NNgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABApkICNAzGaQ2CBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCBNQICe5qeaAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBDIREKBnMkhtECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgECagAA9nY2NJgAAA61JREFUzU81AQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECGQiIEDPZJDaIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIE0AQF6mp9qAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIEMhEQICeySC1QYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQJpAgL0ND%2FVBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIJCJgAA9k0FqgwABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgTSBAToaX6qCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQCATAQF6JoPUBgECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAikCQjQ0%2FxUEyBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgEAmAgL0TAapDQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBBIExCgp%2FmpJkCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAIFMBATomQxSGwQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQJiBAT%2FNTTYAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQKZCAjQMxmkNggQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgTUCAnuanmgABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQyERCgZzJIbRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAmoAAPc1PNQECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhkIiBAz2SQ2iBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgACBNAEBepqfagIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBDIRECAnskgtUGAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECaQIC9DQ%2F1QQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECCQiYAAPZNBaoMAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIE0gQE6Gl%2BqgkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIEAgEwEBeiaD1AYBAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIpAn8DZTkm15SkHcgAAAAAElFTkSuQmCC&webgl=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAAAXNSR0IArs4c6QAADOFJREFUeF7tnV2IJUcVx0%2FdmSUPQdSHICpBFwxBJH6FgJAHe%2FQhiIKKiAr6EFQQVCQoKCjMbfRB8hBBQQUFRVACgoqI%2BAHOiApC3A9mlh3ZWRyzg%2BNqxCzZuEvcOO3W%2FWDuzNw7t%2B%2B93VXnVP3mdfpWnfP%2FH35Un67qdsIfCqAAChhRwBmJkzBRAAVQQAAWRYACKGBGAYBlxioCRQEUAFjUAAqggBkFAJYZqwgUBVAAYFEDKIACZhQAWGasIlAUQAGARQ2gAAqYUQBgmbGKQFEABQAWNYACKGBGAYBlxioCRQEUAFjUAAqggBkFAJYZqwgUBVAAYFEDKIACZhQAWGasIlAUQAGARQ2gAAqYUQBgmbGKQFEABQAWNYACKGBGAYBlxioCRQEUAFjUQOMKVJUUIlI4J93GB2fArBUAWFnb307yA2CticiKc7LeziyMmqMCACtH11vOuarEw8qvssQ5vhvQstxZDQ%2BwsrI7TLKjwLrNrJJbwzC65zALwMrB5cA57ldSHSksoBXYg1SnA1ipOhspr1uVFEsia2MKC2hF8iSlaQFWSm4qyOX5StY6%2Fgnh%2BFhowivwyHIIAMuyewpjnwIsmvAKPbMUEsCy5JaBWJ%2BvpOr4p4OTY113TlYMpEKIChUAWApNsRqS71856d0STtvLQD%2FLqsmR4wZYkQ1IafpbVa%2FZXtQAlk8baKVkfqBcAFYgoXOYZkZgeUlowudQGA3mCLAaFDP3oW4N9l%2FVXGH15GInfO5VM1v%2BAGs2vbh6ggI3KymWB%2FuvZgHW7SM8NOGpqtoKAKzaUnHhSQo8V0m3I7LqC2pGYNHPorRqKwCwakvFhScp8N9Bw31OYAEtyquWAgCrlkxcNE2B50b2X82xwhoOz5PDaUJn%2Fn%2BAlXkBNJG%2B7191RvZfLQAsmvBNGJLwGAArYXNDpfafSrrLIqtDUC0CLJrwoVyzOQ%2FAsumbqqhvDg48NwQs%2Blmq3NUVDMDS5YfJaG4O%2BlcNAgtomayE9oMGWO1rnPQM1wf7rzysGgYW0Eq6cuZLDmDNpxu%2FGijg%2B1d%2B%2F1VLwKIJT6UdUgBgURALKXBj5MBzCyssHxs74RdyKK0fA6y0%2FAyezY2R84MtAYtbw%2BCu6p0QYOn1Rn1kvn81fH97W7eEIyKwqVR9RbQfIMBqX%2BNkZ7heSXdp5PxgiyusoYZAK9lqqpcYwKqnE1eNUeDZkQ9OBFhhDSPgHVoZVyPAytj8RVN%2F9sj5wQArLJrwi5pm%2FPcAy7iBscJ%2FupLi1JHzg4GARRM%2BlukK5gVYCkywGEJkYAEti0XTQMwAqwERcxzimTHnBwOusGjC51h007%2FGlKkqpD1VgWfGnB%2BMACwfJ034qW6lcwErrHS8DJaJvx30%2B6%2BOPhmMBCyO7wRzPv5EACu%2BB%2BYi0AYsvnForoTmDhhgzS1dvj%2B8NtK%2FGl1VxVphDZxgU2kGJQmwMjC56RSvjfSvFAGLJ4dNG61wPICl0BTNIfnbQTfSv1IGLJrwmoungdgAVgMi5jSEAWDRhE%2B4IAFWwua2kdrTR95%2FpXCF5dPmHVptmK9gTIClwARLIRgBFv0sS0U1Q6wAawaxcr%2F0qcH724dfd9ayD%2BsEX3hymFjRAqzEDG0zHYPAognfZkFEGBtgRRDd6pT%2FHvSvDK2welI7J9S51aI7EjdGJmJkiDSsAosmfIjqCDMHwAqjs%2FlZ%2FO1gZ8z7r5Q%2BJRynN%2F0s81UoLJUT8DBICgkAiyeHQSql3UlYYbWrbzKjPzXh%2FVeGVlhDL1hpGa5KgGXYvJChJwQsmvAhC6fhuQBWw4KmOJy%2FHZQJ778yuMLyFrET3mihAiyjxoUMO0Fg0c8KWUANzgWwGhQz1aH87eDtVYl%2FSihHV1RGV1j0s4wWK8AyalzIsBMGFiutkIXUwFwAqwERUx%2Fin5VUo7vbre10n%2BYPO%2BGnKaTn%2FwBLjxcqI%2Fn74IMTKQOLJrzK0hsbFMCy41WUSK%2Fuy1qn%2F5bRXv8qsR7WqKalW5JuFJGZtLYCAKu2VHleePVWNsASqaR0dwAtzZUOsDS7oyC2qzekmvQk0MD7sGZX0EPrTqA1u3BhfgGwwuhscpbd61KcGnPgObWm%2BxhzVtwLZN2kaYkHDbASN3iR9Pau9b7u3Nt%2FlUEPa1SqdfciWVlEO37bjgIAqx1dkxh171%2FZAqvfz7qLW0NthQywtDmiKJ69f%2FT7VxmusIYulO4lQEtRSfI%2BLE1maIpld1eKpU5vhZUzsET2pXR3Ay0ttckKS4sTyuLYuzL5%2FGAGTffDbvxPVtxpmvAaShRgaXBBYQx7OwBr1BZ3mrsRDWUKsDS4oDCGv21PPj%2BY3Qqr70%2Fp7uHWMHapAqzYDiicf3dLio6TtUlbGTIFVv%2FJ4auBVsySBVgx1Vc695Ob0l12sgqwxhjkoXUf0IpVugArlvKK593dOPn8YLYrrKFn%2B7Li3kATPkYJA6wYqiufc%2FfsyecHsweW3%2Fn%2FRprwMcoYYMVQXfGcO09Isdz%2FpNfE4zgAqyfOunuA4zuhSxlghVZc%2BXw7f5DuckdWAVYNo%2Fym0gfpZ9VQqrFLAFZjUqYx0JXf9Z4OnnjgmRXWiNceWm8GWqGqH2CFUtrIPE%2BuTz8%2FCLCOmFnJiluhCR%2BixAFWCJWNzLHzayk6Nc4PAqxjhpburayyQpQ5wAqhspE5dn4p3Y70%2B1f0sGqbVrqHgFVttRa8EGAtKGBKP9%2F5%2BcH7rwDWFGf9BtK3A6rQ9Q%2BwQiuueL6dnx70rwDWBKM8qN4JqGKVMcCKpbyyeXd%2BLIUM3t%2FOLeFYc0r3bkAVu2wBVmwHlMy%2F80MpxB28sI8V1sAYv6J6L6BSUqYcL9BiROw4dh4%2F%2FP6r7IHlQfUBQBW7Lo%2FOzwpLmyOR4vnL9w%2B%2F%2FypbYPmNoB8CVJHKcOq0AGuqROlfsP2d%2Fvvb6%2ByvSvZT9ftSeqfdw8BKc8UDLM3uBIqtB6wqY2D5278PA6pA5bbQNABrIfnS%2BPHlb%2FX3X2W4wirdRwGVpSoGWJbcainWy984%2Fv6rpHtYvk%2F1cUDVUjm1OizAalVe%2FYNvf00KN9jOkPwKy9%2F6fRJQ6a%2FKyRECLMvuNRD79lcyAJYH1SOAqoFyiT4EwIpuQdwAth%2BTNVcdf%2F9VIreEpfs0oIpbYc3ODrCa1dPcaJceHf%2F%2BK9PA8iuqzwIqc8VYI2CAVUOkVC%2FZ%2BqIUS0sHx3HM97CqwV6qzwOrVGsWYKXqbI28esAaOfBsGlj%2Byd8qoKphu%2BlLAJZp%2BxYL%2FtLq4fODJoHlpHRdQLVYJdj5NcCy41XjkV76gmlgle5LgKrxolA%2BIMBSblBb4W19ToqOO3wcx8QKyzfUvwyo2qoL7eMCLO0OtRTf1meMAcvf%2Bj0KqFoqBzPDAiwzVjUb6NYjstZxh88PKl1hle4xQNWs%2B3ZHA1h2vVso8q1PyVqnUg2s0n0VUC1kcoI%2FBlgJmjotpc1PSLFc9fdfja6qVKywhnupvg6spvmY4%2F8BVoaub35MiuXB%2FitlwCrdNwFVhiVZO2WAVVuqdC68%2BJHe08FC0QqrdN8GVOlUWHuZAKz2tFU78sWHlQDLb1H4LqBSWygKAwNYCk1pM6TND%2Fa3M0z79mCrh5%2F9FoXvAao2fU51bICVqrMT8tp8vxSdTjRgle4HgCqzkms0XYDVqJz6B7vwvoPbwWA9LL%2BiehxQ6a8O%2FRECLP0eNRrhhfcEBJbvUf0IUDVqYOaDAazMCuDCuw5%2FMLWNbQ1OpOyt3n4CrDIrr9bTBVitS6xngnPvkOKUTD7w3MTG0ducKk%2F9DFDpcT2tSABWWn6emM3G245%2Ff7CxFVYl5R2%2FAFQZlVOUVAFWFNnjTLrx0MnnB%2BdZYfnbvzt%2FBajiOJrfrAArI8833nL8g6nzrrA8qF74G0CVUfmoSBVgqbCh%2FSDOFVIsTTnwXGuF5aR88Tqgat8xZhinAMDKpC7OP9jvX829g91JedfvAVUm5aI2TYCl1ppmAzv%2FpvmA5W%2F9XvpHQNWsG4w2rwIAa17ljP3u%2FAPjP5g6qYclVX8v1cv%2FBKyMWZ10uAAraXv7yZ17vRSuxoHnIbw8rF5xHlBlUBrmUgRY5iybPeAzr5XuksjqtDc0%2BNu%2F0xuAanaF%2BUUoBQBWKKUjznPuNbLmqn7DfVzT3YPqnouAKqJFTF1TAYBVUyjLl52996B%2FdQhYTsp7%2FwyoLHubW%2BwAK3HHn3iVFEuD97cPV1iVSHnfZUCVuPVJpgewkrT1IKkzr5SuG%2FSv%2FK3f6%2F4KqBK3POn0AFbS9oqcvVvWKie%2Fvf8KoErc6izSA1iJ23zmZdK9fw9YJW5zNukBrGysJlEUsK8AwLLvIRmgQDYKAKxsrCZRFLCvAMCy7yEZoEA2CgCsbKwmURSwrwDAsu8hGaBANgoArGysJlEUsK%2FA%2FwHYKgq1SuJ76QAAAABJRU5ErkJggg%3D%3D%7Eextensions%3AANGLE_instanced_arrays%3BEXT_blend_minmax%3BEXT_clip_control%3BEXT_color_buffer_half_float%3BEXT_depth_clamp%3BEXT_disjoint_timer_query%3BEXT_float_blend%3BEXT_frag_depth%3BEXT_polygon_offset_clamp%3BEXT_shader_texture_lod%3BEXT_texture_compression_bptc%3BEXT_texture_compression_rgtc%3BEXT_texture_filter_anisotropic%3BEXT_texture_mirror_clamp_to_edge%3BEXT_sRGB%3BKHR_parallel_shader_compile%3BOES_element_index_uint%3BOES_fbo_render_mipmap%3BOES_standard_derivatives%3BOES_texture_float%3BOES_texture_float_linear%3BOES_texture_half_float%3BOES_texture_half_float_linear%3BOES_vertex_array_object%3BWEBGL_blend_func_extended%3BWEBGL_color_buffer_float%3BWEBGL_compressed_texture_s3tc%3BWEBGL_compressed_texture_s3tc_srgb%3BWEBGL_debug_renderer_info%3BWEBGL_debug_shaders%3BWEBGL_depth_texture%3BWEBGL_draw_buffers%3BWEBGL_lose_context%3BWEBGL_multi_draw%3BWEBGL_polygon_mode%7Ewebgl+aliased+line+width+range%3A%5B1%2C+1%5D%7Ewebgl+aliased+point+size+range%3A%5B1%2C+1024%5D%7Ewebgl+alpha+bits%3A8%7Ewebgl+antialiasing%3Ayes%7Ewebgl+blue+bits%3A8%7Ewebgl+depth+bits%3A24%7Ewebgl+green+bits%3A8%7Ewebgl+max+anisotropy%3A16%7Ewebgl+max+combined+texture+image+units%3A32%7Ewebgl+max+cube+map+texture+size%3A16384%7Ewebgl+max+fragment+uniform+vectors%3A1024%7Ewebgl+max+render+buffer+size%3A16384%7Ewebgl+max+texture+image+units%3A16%7Ewebgl+max+texture+size%3A16384%7Ewebgl+max+varying+vectors%3A30%7Ewebgl+max+vertex+attribs%3A16%7Ewebgl+max+vertex+texture+image+units%3A16%7Ewebgl+max+vertex+uniform+vectors%3A4096%7Ewebgl+max+viewport+dims%3A%5B32767%2C+32767%5D%7Ewebgl+red+bits%3A8%7Ewebgl+renderer%3AWebKit+WebGL%7Ewebgl+shading+language+version%3AWebGL+GLSL+ES+1.0+%28OpenGL+ES+GLSL+ES+1.0+Chromium%29%7Ewebgl+stencil+bits%3A0%7Ewebgl+vendor%3AWebKit%7Ewebgl+version%3AWebGL+1.0+%28OpenGL+ES+2.0+Chromium%29%7Ewebgl+unmasked+vendor%3AGoogle+Inc.+%28AMD%29%7Ewebgl+unmasked+renderer%3AANGLE+%28AMD%2C+AMD+Radeon%28TM%29+Vega+3+Graphics+%280x000015D8%29+Direct3D11+vs_5_0+ps_5_0%2C+D3D11%29%7Ewebgl+vertex+shader+high+float+precision%3A23%7Ewebgl+vertex+shader+high+float+precision+rangeMin%3A127%7Ewebgl+vertex+shader+high+float+precision+rangeMax%3A127%7Ewebgl+vertex+shader+medium+float+precision%3A23%7Ewebgl+vertex+shader+medium+float+precision+rangeMin%3A127%7Ewebgl+vertex+shader+medium+float+precision+rangeMax%3A127%7Ewebgl+vertex+shader+low+float+precision%3A23%7Ewebgl+vertex+shader+low+float+precision+rangeMin%3A127%7Ewebgl+vertex+shader+low+float+precision+rangeMax%3A127%7Ewebgl+fragment+shader+high+float+precision%3A23%7Ewebgl+fragment+shader+high+float+precision+rangeMin%3A127%7Ewebgl+fragment+shader+high+float+precision+rangeMax%3A127%7Ewebgl+fragment+shader+medium+float+precision%3A23%7Ewebgl+fragment+shader+medium+float+precision+rangeMin%3A127%7Ewebgl+fragment+shader+medium+float+precision+rangeMax%3A127%7Ewebgl+fragment+shader+low+float+precision%3A23%7Ewebgl+fragment+shader+low+float+precision+rangeMin%3A127%7Ewebgl+fragment+shader+low+float+precision+rangeMax%3A127%7Ewebgl+vertex+shader+high+int+precision%3A0%7Ewebgl+vertex+shader+high+int+precision+rangeMin%3A31%7Ewebgl+vertex+shader+high+int+precision+rangeMax%3A30%7Ewebgl+vertex+shader+medium+int+precision%3A0%7Ewebgl+vertex+shader+medium+int+precision+rangeMin%3A31%7Ewebgl+vertex+shader+medium+int+precision+rangeMax%3A30%7Ewebgl+vertex+shader+low+int+precision%3A0%7Ewebgl+vertex+shader+low+int+precision+rangeMin%3A31%7Ewebgl+vertex+shader+low+int+precision+rangeMax%3A30%7Ewebgl+fragment+shader+high+int+precision%3A0%7Ewebgl+fragment+shader+high+int+precision+rangeMin%3A31%7Ewebgl+fragment+shader+high+int+precision+rangeMax%3A30%7Ewebgl+fragment+shader+medium+int+precision%3A0%7Ewebgl+fragment+shader+medium+int+precision+rangeMin%3A31%7Ewebgl+fragment+shader+medium+int+precision+rangeMax%3A30%7Ewebgl+fragment+shader+low+int+precision%3A0%7Ewebgl+fragment+shader+low+int+precision+rangeMin%3A31%7Ewebgl+fragment+shader+low+int+precision+rangeMax%3A30&adblock=false&has_lied_languages=false&has_lied_resolution=false&has_lied_os=false&has_lied_browser=false&touch_support%5B%5D=0%2Cfalse%2Cfalse&js_fonts%5B%5D=Arial%2CArial+Black%2CArial+Narrow%2CBook+Antiqua%2CBookman+Old+Style%2CCalibri%2CCambria%2CCambria+Math%2CCentury%2CCentury+Gothic%2CCentury+Schoolbook%2CComic+Sans+MS%2CConsolas%2CCourier%2CCourier+New%2CGaramond%2CGeorgia%2CHelvetica%2CImpact%2CLucida+Bright%2CLucida+Calligraphy%2CLucida+Console%2CLucida+Fax%2CLucida+Handwriting%2CLucida+Sans%2CLucida+Sans+Typewriter%2CLucida+Sans+Unicode%2CMicrosoft+Sans+Serif%2CMonotype+Corsiva%2CMS+Gothic%2CMS+PGothic%2CMS+Reference+Sans+Serif%2CMS+Sans+Serif%2CMS+Serif%2CPalatino+Linotype%2CSegoe+Print%2CSegoe+Script%2CSegoe+UI%2CSegoe+UI+Light%2CSegoe+UI+Semibold%2CSegoe+UI+Symbol%2CTahoma%2CTimes%2CTimes+New+Roman%2CTrebuchet+MS%2CVerdana%2CWingdings%2CWingdings+2%2CWingdings+3',
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/x-www-form-urlencoded',
          'x-requested-with': 'XMLHttpRequest',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.post(
      'https://sandbox.merchant.razer.com/cdn-cgi/rum?',
      '{"memory":{"totalJSHeapSize":13220450,"usedJSHeapSize":8715890,"jsHeapSizeLimit":4294705152},"resources":[],"referrer":"https://alpha.sayalive.io/","eventType":1,"firstPaint":1560,"firstContentfulPaint":1560,"startTime":1749044722542.7,"versions":{"fl":"2025.5.0","js":"2024.6.1","timings":2},"pageloadId":"9a073199-41b3-4bc6-ba89-441432f2153b","location":"https://sandbox.merchant.razer.com/RMS/pay/SB_sayajual/","nt":"navigate","serverTimings":[{"name":"cfCacheStatus","dur":0,"desc":"DYNAMIC"}],"timingsV2":{"unloadEventStart":0,"unloadEventEnd":0,"domInteractive":1581.4000000357628,"domContentLoadedEventStart":1664.800000011921,"domContentLoadedEventEnd":1896.800000011921,"domComplete":2652.900000035763,"loadEventStart":2652.900000035763,"loadEventEnd":2653.300000011921,"type":"navigate","redirectCount":0,"criticalCHRestart":0,"activationStart":0,"initiatorType":"navigation","nextHopProtocol":"h2","deliveryType":"","workerStart":0,"redirectStart":0,"redirectEnd":0,"fetchStart":19.30000001192093,"domainLookupStart":55,"domainLookupEnd":101.90000003576279,"connectStart":101.90000003576279,"connectEnd":146.10000002384186,"secureConnectionStart":115.90000003576279,"requestStart":147.20000004768372,"responseStart":786.7000000476837,"responseEnd":812.6000000238419,"transferSize":11405,"encodedBodySize":11105,"decodedBodySize":47316,"responseStatus":200,"firstInterimResponseStart":0,"renderBlockingStatus":"non-blocking","finalResponseHeadersStart":786.7000000476837,"name":"https://sandbox.merchant.razer.com/RMS/pay/SB_sayajual/","entryType":"navigation","startTime":0,"duration":2653.300000011921},"dt":"","siteToken":"95f3f64e4a6141ae80c21afbef5c7541","st":2}',
      {
        headers: {
          'content-type': 'application/json',
          'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://sandbox.merchant.razer.com/favicon.ico', {
      headers: {
        'sec-ch-ua': '"Chromium";v="136", "Google Chrome";v="136", "Not.A/Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
  })
}