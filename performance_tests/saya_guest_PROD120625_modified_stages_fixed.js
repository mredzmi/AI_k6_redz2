// Creator: Grafana k6 Browser Recorder 1.0.8

import { sleep, group } from 'k6'
import http from 'k6/http'
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

import { URLSearchParams } from 'https://jslib.k6.io/url/1.0.0/index.js'
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

export const options = {
    stages: [
        { duration: '1m', target: 500 },
        { duration: '1m', target: 1000 },
        { duration: '1m', target: 30 },
        /*   { duration: '5m', target: 50 },
           { duration: '10m', target: 500 },
           { duration: '20m', target: 1000 },
           { duration: '40m', target: 2000 },
           { duration: '60m', target: 4000 },
        */
    ],
}

export default function main() {
    let formData, response

    const vars = {}

    group('page_1 - https://sayalive.io/test-5', function() {
        response = http.get('https://sayalive.io/test-5', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        vars['_token'] = response.html().find('input[name=_token]').first().attr('value')

        vars['event_id'] = response.html().find('input[name=event_id]').first().attr('value')

        vars['pricing_type'] = response.html().find('input[name=pricing_type]').first().attr('value')

        vars['date_type'] = response.html().find('input[name=date_type]').first().attr('value')

        vars['event_date'] = response.html().find('input[name=event_date]').first().attr('value')

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

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
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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

        response = http.get('https://sayalive.io/assets/admin/img/65956b5fc4783.svg', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
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

        response = http.get('https://sayalive.io/assets/front/fonts/fa-brands-400.woff2', {
            headers: {
                origin: 'https://sayalive.io',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/65c4897f1f099_65b3a6b5c1431_main.jpeg', {
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
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743926997&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743926663&coo=false&cdl=&exp=o1&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743926997&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743926663&coo=false&cdl=&exp=o1&rqm=FGET', {
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

        response = http.get('https://sayalive.io/assets/front/images/user.png', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743935429&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%20mt-20%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fcheck-out2%22%2C%22id%22%3A%22checkout-button%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Book%20Now%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22submit%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Book%20Now&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22pricing_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22date_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_date%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22total%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Live%20In%20Test%20(NEW%20DB!!!!)%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743926663&coo=false&es=automatic&tm=3&cdl=&exp=o1&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743935460&cd[content_ids]=%5B%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A3%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743926663&coo=false&cdl=&exp=o1&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743935460&cd[content_ids]=%5B%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A3%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743926663&coo=false&cdl=&exp=o1&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_2 - https://sayalive.io/check-out2', function() {
        response = http.post(
            'https://sayalive.io/check-out2',
            new URLSearchParams({
                _token: `${vars['_token']}`,
                event_id: `${vars['event_id']}`,
                pricing_type: `${vars['pricing_type']}`,
                date_type: `${vars['date_type']}`,
                event_date: `${vars['event_date']}`,
                'v_name[]': ['Bronze', 'Gold', 'Silver'],
                'quantity[]': ['0', '1', '0'],
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
            }
        )

        vars['_token2'] = response.html().find('input[name=_token]').first().attr('value')

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get('https://www.google.com/recaptcha/api.js?', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwpBsxsF3eY665Ye/recaptcha__en.js', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_3 - https://sayalive.io/checkout?type=guest', function() {
        response = http.get('https://sayalive.io/checkout?type=guest', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        vars['total1'] = response.html().find('input[name=total]').first().attr('value')

        vars['quantity1'] = response.html().find('input[name=quantity]').first().attr('value')

        vars['shipping_cost1'] = response.html().find('input[name=shipping_cost]').first().attr('value')

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65c489e26a7d2_65b3a722aa09a_thumb.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749743940128&cd[content_ids]=%5B190%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=3.243918&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743940047&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749743940128&cd[content_ids]=%5B190%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=3.243918&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743940047&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749743940130&cd[content_ids]=%5B190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=3.243918&cd[currency]=MYR&cd[quantity]=01&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743940047&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749743940130&cd[content_ids]=%5B190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=3.243918&cd[currency]=MYR&cd[quantity]=01&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743940047&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.post(
            'https://sayalive.io/checkout/calculate-shipping', {
                shipment_provider_id: '4',
                shipment_organizer_id: `${vars['total1']}`,
                total_items: `${vars['quantity1']}`,
                _token: `${vars['_token2']}`,
            }, {
                headers: {
                    accept: '*/*',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'x-csrf-token': 'rxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749743971763&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest%22%2C%22id%22%3A%22continueButton%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Proceed%20to%20Pay%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Proceed%20to%20Pay&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment_provider_id%22%2C%22name%22%3A%22shipment_provider_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipping-cost-input%22%2C%22name%22%3A%22shipping_cost%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment-rate-id%22%2C%22name%22%3A%22shipment_rate_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22fname%22%2C%22name%22%3A%22fname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20First%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22lname%22%2C%22name%22%3A%22lname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Last%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22email%22%2C%22name%22%3A%22email%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22email_confirmation%22%2C%22name%22%3A%22email_confirmation%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Reconfirm%20your%20email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22phone%22%2C%22name%22%3A%22phone%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Phone%20Number%22%2C%22inputType%22%3A%22tel%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22state%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22State%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22city%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22City%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22zip_code%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Zip%2FPostcode%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22address%22%2C%22tag%22%3A%22textarea%22%2C%22placeholder%22%3A%22Address%22%7D%2C%7B%22id%22%3A%221_190_ic%22%2C%22name%22%3A%221_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%221_190_country%22%2C%22name%22%3A%221_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22coupon-code%22%2C%22name%22%3A%22coupon%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22gateway_dummypay%22%2C%22name%22%3A%22gateway%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22radio%22%7D%2C%7B%22id%22%3A%22shipping-provider-select%22%2C%22name%22%3A%22shipping_provider%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22eventURL%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Check%20Out%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&cudff[fn]=***&cudff[ln]=***&cudff[em]=******.*******%40****.**&cudff[ph]=***********&cudff[st]=********&cudff[ct]=************&cudff[zp]=*****&udff[fn]=94419b99b12c11133a4dfeccc3e17885974beb48f7827c48239aabfbcad238d8&udff[ln]=9fe27f6f7d3c4301fa5f6c45a249caa0922d8ab3d155deb3a4e233a5cfdbd14c&ncudff[em]=******.*******%40****.**&udff[em]=9a7ab80d323b4daf7db2c2f5f2b0efbb4540cf6f83d7efba8fec4f9b68407607&ncudff[ph]=**********&udff[ph]=9260f889a03c3de5a806b802afdcca308513328a90c44988955d8dc13dd93504&udff[st]=ad9a67fefa847de87753df6794a0ae466431e76ad1fb4db58fbbe836d1dde0e7&udff[ct]=1c2cc85d86f480bca5df02cf8ead632be5d6ea21e2900420cf9cce61c1b35472&udff[zp]=a414ac7eeaac133b08fed20bacaf31d1bd0c654be68248b0ec16dfab46dba2a7&v=2.9.207&r=stable&ec=2&o=6174&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743940047&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_4 - https://sayalive.io/ticket-booking/129?type=guest', function() {
        response = http.post(
            'https://sayalive.io/ticket-booking/129?type=guest',
            '------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="shipment_provider_id"\r\n\r\n4\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="shipment_rate_id"\r\n\r\n3\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="fname"\r\n\r\nali\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="lname"\r\n\r\nabu\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="email"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="email_confirmation"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="phone"\r\n\r\n01122334455\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="country"\r\n\r\nUnited Kingdom\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="state"\r\n\r\nselangor\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="city"\r\n\r\nloughborough\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="zip_code"\r\n\r\n06000\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="address"\r\n\r\nkondo\r\ndanau\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="1_190_ic"\r\n\r\n870604-05-9800\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="1_190_country"\r\n\r\nAlbania\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="event"\r\n\r\n{"id":129,"organizer_id":33,"thumbnail":"assets\\/admin\\/img\\/event\\/thumbnail\\/65c489e26a7d2_65b3a722aa09a_thumb.jpeg","status":"1","date_type":"single","countdown_status":0,"start_date":"2024-04-01","start_time":"09:00","duration":"7975y 1mo 2912848d ","end_date":"9999-05-11","end_time":"09:00","end_date_time":"9999-05-11 09:00:00","created_at":"2024-02-08T07:59:30.000000Z","updated_at":"2025-06-12T14:21:21.000000Z","event_type":"venue","is_featured":"no","latitude":"3.2097708172520596","longitude":"101.6692582360404","is_allow_promoter":1,"is_coming_soon":0,"service_charge_percentage":null,"service_charge_fixed":null,"payment_method":"[\\"14\\"]","is_print_label":0,"is_allow_shipping":1,"is_use_old_checkout":0,"is_admin_handle_shipping":0,"google_analytics_measurement_id":null,"meta_pixel_id":null,"is_maintenance_mode":0,"title":"Live In Test (NEW DB!!!!)","slug":"test-5","city":"PETALING JAYA","country":"Malaysia"}\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="total"\r\n\r\n3.24\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="quantity"\r\n\r\n1\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="coupon"\r\n\r\n\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="gateway"\r\n\r\ndummypay\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="shipping_provider"\r\n\r\n4\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK\r\nContent-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/test-5\r\n------WebKitFormBoundaryY4KPRkIArSNApoUK--\r\n', {
                headers: {
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryY4KPRkIArSNApoUK',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/favicon.ico', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
    })

    group('page_5 - https://sayalive.io/event-booking/dummypay/process/129', function() {
        response = http.post(
            'https://sayalive.io/event-booking/dummypay/process/129', {
                _token: `${vars['_token2']}`,
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
            }
        )

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af964ced09&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749743978161&cd[content_ids]=%5B190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=3.06&cd[currency]=MYR&cd[coupon]=&cd[quantity]=1&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684af964ced09&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743978090&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af964ced09&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749743978161&cd[content_ids]=%5B190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=3.06&cd[currency]=MYR&cd[coupon]=&cd[quantity]=1&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684af964ced09&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743978090&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af964ced09&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749743982112&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684af964ced09%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743978090&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af964ced09&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749743982112&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684af964ced09%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743978090&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_6 - https://sayalive.io/test-5', function() {
        response = http.get('https://sayalive.io/test-5', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        vars['_token3'] = response.html().find('input[name=_token]').first().attr('value')

        vars['event_id2'] = response.html().find('input[name=event_id]').first().attr('value')

        vars['pricing_type2'] = response.html().find('input[name=pricing_type]').first().attr('value')

        vars['date_type2'] = response.html().find('input[name=date_type]').first().attr('value')

        vars['event_date2'] = response.html().find('input[name=event_date]').first().attr('value')

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/65c4897f1f099_65b3a6b5c1431_main.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/assets/front/images/user.png', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743988449&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743988375&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743988449&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743988375&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743995408&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%20mt-20%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fcheck-out2%22%2C%22id%22%3A%22checkout-button%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Book%20Now%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22submit%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Book%20Now&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22pricing_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22date_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_date%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22total%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Live%20In%20Test%20(NEW%20DB!!!!)%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743988375&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743995435&cd[content_ids]=%5B%22190%22%2C%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A2%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743988375&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749743995435&cd[content_ids]=%5B%22190%22%2C%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A2%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743988375&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_7 - https://sayalive.io/check-out2', function() {
        response = http.post(
            'https://sayalive.io/check-out2',
            new URLSearchParams({
                _token: `${vars['_token3']}`,
                event_id: `${vars['event_id2']}`,
                pricing_type: `${vars['pricing_type2']}`,
                date_type: `${vars['date_type2']}`,
                event_date: `${vars['event_date2']}`,
                'v_name[]': ['Bronze', 'Gold', 'Silver'],
                'quantity[]': [`${vars['shipping_cost1']}`, `${vars['quantity1']}`, `${vars['quantity1']}`],
                total: '5.00',
            }).toString(), {
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
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get('https://www.google.com/recaptcha/api.js?', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwpBsxsF3eY665Ye/recaptcha__en.js', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2'
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_8 - https://sayalive.io/checkout?type=guest', function() {
        response = http.get('https://sayalive.io/checkout?type=guest', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        vars['shipping_cost2'] = response.html().find('input[name=shipping_cost]').first().attr('value')

        vars['quantity2'] = response.html().find('input[name=quantity]').first().attr('value')

        vars['total2'] = response.html().find('input[name=total]').first().attr('value')

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65c489e26a7d2_65b3a722aa09a_thumb.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749743999478&cd[content_ids]=%5B190%2C190%5D&cd[content_name]=Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743999386&coo=false&cdl=&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749743999478&cd[content_ids]=%5B190%2C190%5D&cd[content_name]=Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743999386&coo=false&cdl=&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749743999480&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&cd[quantity]=011&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743999386&coo=false&cdl=&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749743999480&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.39593&cd[currency]=MYR&cd[quantity]=011&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743999386&coo=false&cdl=&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.post(
            'https://sayalive.io/checkout/calculate-shipping', {
                shipment_provider_id: '4',
                shipment_organizer_id: `${vars['total1']}`,
                total_items: '2',
                _token: `${vars['_token3']}`,
            }, {
                headers: {
                    accept: '*/*',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'x-csrf-token': 'rxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744043605&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest%22%2C%22id%22%3A%22continueButton%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Proceed%20to%20Pay%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Proceed%20to%20Pay&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment_provider_id%22%2C%22name%22%3A%22shipment_provider_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipping-cost-input%22%2C%22name%22%3A%22shipping_cost%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment-rate-id%22%2C%22name%22%3A%22shipment_rate_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22fname%22%2C%22name%22%3A%22fname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20First%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22lname%22%2C%22name%22%3A%22lname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Last%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22email%22%2C%22name%22%3A%22email%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22email_confirmation%22%2C%22name%22%3A%22email_confirmation%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Reconfirm%20your%20email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22phone%22%2C%22name%22%3A%22phone%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Phone%20Number%22%2C%22inputType%22%3A%22tel%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22state%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22State%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22city%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22City%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22zip_code%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Zip%2FPostcode%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22address%22%2C%22tag%22%3A%22textarea%22%2C%22placeholder%22%3A%22Address%22%7D%2C%7B%22id%22%3A%221_190_ic%22%2C%22name%22%3A%221_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%221_190_country%22%2C%22name%22%3A%221_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%222_190_ic%22%2C%22name%22%3A%222_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%222_190_country%22%2C%22name%22%3A%222_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22coupon-code%22%2C%22name%22%3A%22coupon%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22gateway_dummypay%22%2C%22name%22%3A%22gateway%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22radio%22%7D%2C%7B%22id%22%3A%22shipping-provider-select%22%2C%22name%22%3A%22shipping_provider%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22eventURL%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Check%20Out%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&cudff[fn]=***&cudff[ln]=***&cudff[em]=******.*******%40****.**&cudff[ph]=***********&cudff[st]=********&cudff[ct]=************&cudff[zp]=*****&udff[fn]=94419b99b12c11133a4dfeccc3e17885974beb48f7827c48239aabfbcad238d8&udff[ln]=9fe27f6f7d3c4301fa5f6c45a249caa0922d8ab3d155deb3a4e233a5cfdbd14c&ncudff[em]=******.*******%40****.**&udff[em]=9a7ab80d323b4daf7db2c2f5f2b0efbb4540cf6f83d7efba8fec4f9b68407607&ncudff[ph]=**********&udff[ph]=9260f889a03c3de5a806b802afdcca308513328a90c44988955d8dc13dd93504&udff[st]=ad9a67fefa847de87753df6794a0ae466431e76ad1fb4db58fbbe836d1dde0e7&udff[ct]=1c2cc85d86f480bca5df02cf8ead632be5d6ea21e2900420cf9cce61c1b35472&udff[zp]=a414ac7eeaac133b08fed20bacaf31d1bd0c654be68248b0ec16dfab46dba2a7&v=2.9.207&r=stable&ec=2&o=6174&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749743999386&coo=false&es=automatic&tm=3&cdl=&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=646187527.1749651650&gtm=45je56b0v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104617979~104617981~104661466~104661468~104736442~104736444&z=861169775', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_9 - https://sayalive.io/ticket-booking/129?type=guest', function() {
        response = http.post(
            'https://sayalive.io/ticket-booking/129?type=guest',
            '------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="shipment_provider_id"\r\n\r\n4\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="shipment_rate_id"\r\n\r\n3\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="fname"\r\n\r\nali\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="lname"\r\n\r\nabu\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="email"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="email_confirmation"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="phone"\r\n\r\n01122334455\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="country"\r\n\r\nUnited Kingdom\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="state"\r\n\r\nselangor\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="city"\r\n\r\nloughborough\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="zip_code"\r\n\r\n06000\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="address"\r\n\r\nkondo\r\ndanau\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="1_190_ic"\r\n\r\n870604-05-9800\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="1_190_country"\r\n\r\nBahrain\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="2_190_ic"\r\n\r\n880302-03-4545\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="2_190_country"\r\n\r\nBelize\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="event"\r\n\r\n{"id":129,"organizer_id":33,"thumbnail":"assets\\/admin\\/img\\/event\\/thumbnail\\/65c489e26a7d2_65b3a722aa09a_thumb.jpeg","status":"1","date_type":"single","countdown_status":0,"start_date":"2024-04-01","start_time":"09:00","duration":"7975y 1mo 2912848d ","end_date":"9999-05-11","end_time":"09:00","end_date_time":"9999-05-11 09:00:00","created_at":"2024-02-08T07:59:30.000000Z","updated_at":"2025-06-12T14:21:21.000000Z","event_type":"venue","is_featured":"no","latitude":"3.2097708172520596","longitude":"101.6692582360404","is_allow_promoter":1,"is_coming_soon":0,"service_charge_percentage":null,"service_charge_fixed":null,"payment_method":"[\\"14\\"]","is_print_label":0,"is_allow_shipping":1,"is_use_old_checkout":0,"is_admin_handle_shipping":0,"google_analytics_measurement_id":null,"meta_pixel_id":null,"is_maintenance_mode":0,"title":"Live In Test (NEW DB!!!!)","slug":"test-5","city":"PETALING JAYA","country":"Malaysia"}\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="total"\r\n\r\n5.40\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="quantity"\r\n\r\n2\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="coupon"\r\n\r\n\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="gateway"\r\n\r\ndummypay\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="shipping_provider"\r\n\r\n4\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K\r\nContent-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/test-5\r\n------WebKitFormBoundarypYQsr6BQUzoTDx1K--\r\n', {
                headers: {
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundarypYQsr6BQUzoTDx1K',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/favicon.ico', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
    })

    group('page_10 - https://sayalive.io/event-booking/dummypay/process/129', function() {
        response = http.post(
            'https://sayalive.io/event-booking/dummypay/process/129', {
                _token: `${vars['_token3']}`,
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
            }
        )

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.googletagmanager.com/td?id=G-BY5N14K0MS&v=3&t=t&pid=985119548&exp=101509157~103116026~103200004~103233427~103351869~103351871~104617979~104617981~104661466~104661468~104736442~104736444&dl=sayalive.io%2Fevent-booking-complete&tdp=G-BY5N14K0MS;218743669;0;0;0&frm=0&rtg=218743669&slo=18&hlo=0&lst=3&bt=0&ct=3&z=0', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af9ac64ef6&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744049980&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.09&cd[currency]=MYR&cd[coupon]=&cd[quantity]=2&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684af9ac64ef6&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744049904&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af9ac64ef6&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744049980&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=5.09&cd[currency]=MYR&cd[coupon]=&cd[quantity]=2&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684af9ac64ef6&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744049904&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af9ac64ef6&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744052800&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684af9ac64ef6%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744049904&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af9ac64ef6&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744052800&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684af9ac64ef6%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744049904&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_11 - https://sayalive.io/test-5', function() {
        response = http.get('https://sayalive.io/test-5', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        vars['event_id3'] = response.html().find('input[name=event_id]').first().attr('value')

        vars['pricing_type3'] = response.html().find('input[name=pricing_type]').first().attr('value')

        vars['date_type3'] = response.html().find('input[name=date_type]').first().attr('value')

        vars['event_date3'] = response.html().find('input[name=event_date]').first().attr('value')

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

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
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/65c4897f1f099_65b3a6b5c1431_main.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/assets/front/images/user.png', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744063123&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744063049&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744063123&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744063049&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744070170&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%20mt-20%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fcheck-out2%22%2C%22id%22%3A%22checkout-button%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Book%20Now%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22submit%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Book%20Now&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22pricing_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22date_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_date%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22total%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Live%20In%20Test%20(NEW%20DB!!!!)%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744063049&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744070195&cd[content_ids]=%5B%22190%22%2C%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A2%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744063049&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744070195&cd[content_ids]=%5B%22190%22%2C%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A2%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744063049&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_12 - https://sayalive.io/check-out2', function() {
        response = http.post(
            'https://sayalive.io/check-out2',
            new URLSearchParams({
                _token: `${vars['_token3']}`,
                event_id: `${vars['event_id2']}`,
                pricing_type: `${vars['pricing_type2']}`,
                date_type: `${vars['date_type2']}`,
                event_date: `${vars['event_date2']}`,
                'v_name[]': ['Bronze', 'Gold', 'Silver'],
                'quantity[]': [`${vars['shipping_cost1']}`, '2', `${vars['quantity1']}`],
                total: '8.00',
            }).toString(), {
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

        vars['_token4'] = response.html().find('input[name=_token]').first().attr('value')

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwpBsxsF3eY665Ye/recaptcha__en.js', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2'
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_13 - https://sayalive.io/checkout?type=guest', function() {
        response = http.get('https://sayalive.io/checkout?type=guest', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65c489e26a7d2_65b3a722aa09a_thumb.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744074455&cd[content_ids]=%5B190%2C190%5D&cd[content_name]=Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=8.608048&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744074367&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744074455&cd[content_ids]=%5B190%2C190%5D&cd[content_name]=Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=8.608048&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744074367&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744074457&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=8.608048&cd[currency]=MYR&cd[quantity]=021&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744074367&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744074457&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=8.608048&cd[currency]=MYR&cd[quantity]=021&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744074367&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.post(
            'https://sayalive.io/checkout/calculate-shipping', {
                shipment_provider_id: '4',
                shipment_organizer_id: `${vars['total1']}`,
                total_items: `${vars['total1']}`,
                _token: `${vars['_token4']}`,
            }, {
                headers: {
                    accept: '*/*',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'x-csrf-token': 'rxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744105389&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest%22%2C%22id%22%3A%22continueButton%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Proceed%20to%20Pay%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Proceed%20to%20Pay&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment_provider_id%22%2C%22name%22%3A%22shipment_provider_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipping-cost-input%22%2C%22name%22%3A%22shipping_cost%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment-rate-id%22%2C%22name%22%3A%22shipment_rate_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22fname%22%2C%22name%22%3A%22fname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20First%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22lname%22%2C%22name%22%3A%22lname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Last%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22email%22%2C%22name%22%3A%22email%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22email_confirmation%22%2C%22name%22%3A%22email_confirmation%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Reconfirm%20your%20email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22phone%22%2C%22name%22%3A%22phone%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Phone%20Number%22%2C%22inputType%22%3A%22tel%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22state%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22State%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22city%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22City%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22zip_code%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Zip%2FPostcode%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22address%22%2C%22tag%22%3A%22textarea%22%2C%22placeholder%22%3A%22Address%22%7D%2C%7B%22id%22%3A%221_190_ic%22%2C%22name%22%3A%221_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%221_190_country%22%2C%22name%22%3A%221_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%222_190_ic%22%2C%22name%22%3A%222_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%222_190_country%22%2C%22name%22%3A%222_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%223_190_ic%22%2C%22name%22%3A%223_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%223_190_country%22%2C%22name%22%3A%223_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22coupon-code%22%2C%22name%22%3A%22coupon%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22gateway_dummypay%22%2C%22name%22%3A%22gateway%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22radio%22%7D%2C%7B%22id%22%3A%22shipping-provider-select%22%2C%22name%22%3A%22shipping_provider%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22eventURL%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Check%20Out%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&cudff[fn]=***&cudff[ln]=***&cudff[em]=******.*******%40****.**&cudff[ph]=***********&cudff[st]=********&cudff[ct]=************&cudff[zp]=*****&udff[fn]=94419b99b12c11133a4dfeccc3e17885974beb48f7827c48239aabfbcad238d8&udff[ln]=9fe27f6f7d3c4301fa5f6c45a249caa0922d8ab3d155deb3a4e233a5cfdbd14c&ncudff[em]=******.*******%40****.**&udff[em]=9a7ab80d323b4daf7db2c2f5f2b0efbb4540cf6f83d7efba8fec4f9b68407607&ncudff[ph]=**********&udff[ph]=9260f889a03c3de5a806b802afdcca308513328a90c44988955d8dc13dd93504&udff[st]=ad9a67fefa847de87753df6794a0ae466431e76ad1fb4db58fbbe836d1dde0e7&udff[ct]=1c2cc85d86f480bca5df02cf8ead632be5d6ea21e2900420cf9cce61c1b35472&udff[zp]=a414ac7eeaac133b08fed20bacaf31d1bd0c654be68248b0ec16dfab46dba2a7&v=2.9.207&r=stable&ec=2&o=6174&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744074367&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=646187527.1749651650&gtm=45je56b0v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104617979~104617981~104661466~104661468~104736442~104736444&z=1395597764', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_14 - https://sayalive.io/ticket-booking/129?type=guest', function() {
        response = http.post(
            'https://sayalive.io/ticket-booking/129?type=guest',
            '------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="shipment_provider_id"\r\n\r\n4\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="shipment_rate_id"\r\n\r\n3\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="fname"\r\n\r\nali\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="lname"\r\n\r\nabu\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="email"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="email_confirmation"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="phone"\r\n\r\n01122334455\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="country"\r\n\r\nUnited Kingdom\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="state"\r\n\r\nselangor\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="city"\r\n\r\nloughborough\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="zip_code"\r\n\r\n06000\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="address"\r\n\r\nkondo\r\ndanau\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="1_190_ic"\r\n\r\n870604-05-9800\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="1_190_country"\r\n\r\nBelarus\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="2_190_ic"\r\n\r\n880302-03-4545\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="2_190_country"\r\n\r\nAustralia\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="3_190_ic"\r\n\r\n880703-02-5433\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="3_190_country"\r\n\r\nLibya\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="event"\r\n\r\n{"id":129,"organizer_id":33,"thumbnail":"assets\\/admin\\/img\\/event\\/thumbnail\\/65c489e26a7d2_65b3a722aa09a_thumb.jpeg","status":"1","date_type":"single","countdown_status":0,"start_date":"2024-04-01","start_time":"09:00","duration":"7975y 1mo 2912848d ","end_date":"9999-05-11","end_time":"09:00","end_date_time":"9999-05-11 09:00:00","created_at":"2024-02-08T07:59:30.000000Z","updated_at":"2025-06-12T14:21:21.000000Z","event_type":"venue","is_featured":"no","latitude":"3.2097708172520596","longitude":"101.6692582360404","is_allow_promoter":1,"is_coming_soon":0,"service_charge_percentage":null,"service_charge_fixed":null,"payment_method":"[\\"14\\"]","is_print_label":0,"is_allow_shipping":1,"is_use_old_checkout":0,"is_admin_handle_shipping":0,"google_analytics_measurement_id":null,"meta_pixel_id":null,"is_maintenance_mode":0,"title":"Live In Test (NEW DB!!!!)","slug":"test-5","city":"PETALING JAYA","country":"Malaysia"}\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="total"\r\n\r\n8.61\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="quantity"\r\n\r\n3\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="coupon"\r\n\r\n\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="gateway"\r\n\r\ndummypay\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="shipping_provider"\r\n\r\n4\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7\r\nContent-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/test-5\r\n------WebKitFormBoundaryIuGT4k2p7incz3l7--\r\n', {
                headers: {
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryIuGT4k2p7incz3l7',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/favicon.ico', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
    })

    group('page_15 - https://sayalive.io/event-booking/dummypay/process/129', function() {
        response = http.post(
            'https://sayalive.io/event-booking/dummypay/process/129', {
                _token: `${vars['_token4']}`,
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
            }
        )

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/assets/admin/img/65c375772e109.svg', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af9ea632f7&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744112001&cd[content_ids]=%5B190%2C190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=8.12&cd[currency]=MYR&cd[coupon]=&cd[quantity]=3&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684af9ea632f7&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744111932&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af9ea632f7&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744112001&cd[content_ids]=%5B190%2C190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=8.12&cd[currency]=MYR&cd[coupon]=&cd[quantity]=3&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684af9ea632f7&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744111932&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af9ea632f7&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744113889&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684af9ea632f7%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744111932&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684af9ea632f7&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744113889&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684af9ea632f7%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744111932&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_16 - https://sayalive.io/test-5', function() {
        response = http.get('https://sayalive.io/test-5', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/65c4897f1f099_65b3a6b5c1431_main.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get('https://sayalive.io/assets/front/images/user.png', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744129531&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744129453&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744129531&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744129453&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744136490&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%20mt-20%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fcheck-out2%22%2C%22id%22%3A%22checkout-button%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Book%20Now%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22submit%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Book%20Now&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22pricing_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22date_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_date%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22total%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Live%20In%20Test%20(NEW%20DB!!!!)%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744129453&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744136515&cd[content_ids]=%5B%22190%22%2C%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A2%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744129453&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744136515&cd[content_ids]=%5B%22190%22%2C%22190%22%5D&cd[content_name]=Gold&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A2%7D%5D&cd[value]=3&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744129453&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_17 - https://sayalive.io/check-out2', function() {
        response = http.post(
            'https://sayalive.io/check-out2',
            new URLSearchParams({
                _token: `${vars['_token4']}`,
                event_id: `${vars['event_id3']}`,
                pricing_type: `${vars['pricing_type3']}`,
                date_type: `${vars['date_type3']}`,
                event_date: `${vars['event_date3']}`,
                'v_name[]': ['Bronze', 'Gold', 'Silver'],
                'quantity[]': [`${vars['shipping_cost2']}`, `${vars['quantity2']}`, `${vars['quantity2']}`],
                total: '10.00',
            }).toString(), {
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
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwpBsxsF3eY665Ye/recaptcha__en.js', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2'
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_18 - https://sayalive.io/checkout?type=guest', function() {
        response = http.get('https://sayalive.io/checkout?type=guest', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65c489e26a7d2_65b3a722aa09a_thumb.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

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
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744140100&cd[content_ids]=%5B190%2C190%5D&cd[content_name]=Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=10.76006&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744139999&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744140100&cd[content_ids]=%5B190%2C190%5D&cd[content_name]=Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=10.76006&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744139999&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744140103&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=10.76006&cd[currency]=MYR&cd[quantity]=022&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744139999&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744140103&cd[content_ids]=%5B190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=10.76006&cd[currency]=MYR&cd[quantity]=022&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744139999&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.post(
            'https://sayalive.io/checkout/calculate-shipping', {
                shipment_provider_id: '4',
                shipment_organizer_id: `${vars['total1']}`,
                total_items: '4',
                _token: `${vars['_token4']}`,
            }, {
                headers: {
                    accept: '*/*',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'x-csrf-token': 'rxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744182695&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest%22%2C%22id%22%3A%22continueButton%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Proceed%20to%20Pay%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Proceed%20to%20Pay&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment_provider_id%22%2C%22name%22%3A%22shipment_provider_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipping-cost-input%22%2C%22name%22%3A%22shipping_cost%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment-rate-id%22%2C%22name%22%3A%22shipment_rate_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22fname%22%2C%22name%22%3A%22fname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20First%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22lname%22%2C%22name%22%3A%22lname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Last%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22email%22%2C%22name%22%3A%22email%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22email_confirmation%22%2C%22name%22%3A%22email_confirmation%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Reconfirm%20your%20email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22phone%22%2C%22name%22%3A%22phone%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Phone%20Number%22%2C%22inputType%22%3A%22tel%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22state%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22State%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22city%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22City%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22zip_code%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Zip%2FPostcode%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22address%22%2C%22tag%22%3A%22textarea%22%2C%22placeholder%22%3A%22Address%22%7D%2C%7B%22id%22%3A%221_190_ic%22%2C%22name%22%3A%221_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%221_190_country%22%2C%22name%22%3A%221_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%222_190_ic%22%2C%22name%22%3A%222_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%222_190_country%22%2C%22name%22%3A%222_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%223_190_ic%22%2C%22name%22%3A%223_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%223_190_country%22%2C%22name%22%3A%223_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%224_190_ic%22%2C%22name%22%3A%224_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%224_190_country%22%2C%22name%22%3A%224_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22coupon-code%22%2C%22name%22%3A%22coupon%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22gateway_dummypay%22%2C%22name%22%3A%22gateway%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22radio%22%7D%2C%7B%22id%22%3A%22shipping-provider-select%22%2C%22name%22%3A%22shipping_provider%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22eventURL%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Check%20Out%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&cudff[fn]=***&cudff[ln]=***&cudff[em]=******.*******%40****.**&cudff[ph]=***********&cudff[st]=********&cudff[ct]=************&cudff[zp]=*****&udff[fn]=94419b99b12c11133a4dfeccc3e17885974beb48f7827c48239aabfbcad238d8&udff[ln]=9fe27f6f7d3c4301fa5f6c45a249caa0922d8ab3d155deb3a4e233a5cfdbd14c&ncudff[em]=******.*******%40****.**&udff[em]=9a7ab80d323b4daf7db2c2f5f2b0efbb4540cf6f83d7efba8fec4f9b68407607&ncudff[ph]=**********&udff[ph]=9260f889a03c3de5a806b802afdcca308513328a90c44988955d8dc13dd93504&udff[st]=ad9a67fefa847de87753df6794a0ae466431e76ad1fb4db58fbbe836d1dde0e7&udff[ct]=1c2cc85d86f480bca5df02cf8ead632be5d6ea21e2900420cf9cce61c1b35472&udff[zp]=a414ac7eeaac133b08fed20bacaf31d1bd0c654be68248b0ec16dfab46dba2a7&v=2.9.207&r=stable&ec=2&o=6174&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744139999&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=646187527.1749651650&gtm=45je56b0v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104617979~104617981~104661466~104661468~104736442~104736444&z=1541846825', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_19 - https://sayalive.io/ticket-booking/129?type=guest', function() {
        response = http.post(
            'https://sayalive.io/ticket-booking/129?type=guest',
            '------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="shipment_provider_id"\r\n\r\n4\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="shipment_rate_id"\r\n\r\n3\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="fname"\r\n\r\nali\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="lname"\r\n\r\nabu\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="email"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="email_confirmation"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="phone"\r\n\r\n01122334455\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="country"\r\n\r\nUnited Kingdom\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="state"\r\n\r\nselangor\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="city"\r\n\r\nloughborough\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="zip_code"\r\n\r\n06000\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="address"\r\n\r\nkondo\r\ndanau\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="1_190_ic"\r\n\r\n870604-05-9800\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="1_190_country"\r\n\r\nAndorra\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="2_190_ic"\r\n\r\n880302-03-4545\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="2_190_country"\r\n\r\nBelarus\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="3_190_ic"\r\n\r\n880703-02-5433\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="3_190_country"\r\n\r\nEquatorial Guinea\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="4_190_ic"\r\n\r\n980504-03-2345\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="4_190_country"\r\n\r\nAustralia\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="event"\r\n\r\n{"id":129,"organizer_id":33,"thumbnail":"assets\\/admin\\/img\\/event\\/thumbnail\\/65c489e26a7d2_65b3a722aa09a_thumb.jpeg","status":"1","date_type":"single","countdown_status":0,"start_date":"2024-04-01","start_time":"09:00","duration":"7975y 1mo 2912848d ","end_date":"9999-05-11","end_time":"09:00","end_date_time":"9999-05-11 09:00:00","created_at":"2024-02-08T07:59:30.000000Z","updated_at":"2025-06-12T14:21:21.000000Z","event_type":"venue","is_featured":"no","latitude":"3.2097708172520596","longitude":"101.6692582360404","is_allow_promoter":1,"is_coming_soon":0,"service_charge_percentage":null,"service_charge_fixed":null,"payment_method":"[\\"14\\"]","is_print_label":0,"is_allow_shipping":1,"is_use_old_checkout":0,"is_admin_handle_shipping":0,"google_analytics_measurement_id":null,"meta_pixel_id":null,"is_maintenance_mode":0,"title":"Live In Test (NEW DB!!!!)","slug":"test-5","city":"PETALING JAYA","country":"Malaysia"}\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="total"\r\n\r\n10.76\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="quantity"\r\n\r\n4\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="coupon"\r\n\r\n\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="gateway"\r\n\r\ndummypay\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="shipping_provider"\r\n\r\n4\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z\r\nContent-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/test-5\r\n------WebKitFormBoundary9egIx9QufCNWUj8Z--\r\n', {
                headers: {
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundary9egIx9QufCNWUj8Z',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/favicon.ico', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
    })

    group('page_20 - https://sayalive.io/event-booking/dummypay/process/129', function() {
        response = http.post(
            'https://sayalive.io/event-booking/dummypay/process/129', {
                _token: `${vars['_token4']}`,
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
            }
        )

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

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
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684afa37bf6c5&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744189437&cd[content_ids]=%5B190%2C190%2C190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=10.15&cd[currency]=MYR&cd[coupon]=&cd[quantity]=4&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684afa37bf6c5&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744189355&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684afa37bf6c5&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744189437&cd[content_ids]=%5B190%2C190%2C190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=10.15&cd[currency]=MYR&cd[coupon]=&cd[quantity]=4&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684afa37bf6c5&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744189355&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684afa37bf6c5&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744193721&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684afa37bf6c5%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744189355&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684afa37bf6c5&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744193721&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684afa37bf6c5%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744189355&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_21 - https://sayalive.io/test-5', function() {
        response = http.get('https://sayalive.io/test-5', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get('https://sayalive.io/assets/admin/img/65c375772e109.svg', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/65c4897f1f099_65b3a6b5c1431_main.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get('https://sayalive.io/assets/front/images/user.png', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744209818&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744209733&coo=false&cdl=&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744209818&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744209733&coo=false&cdl=&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744217936&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%20mt-20%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fcheck-out2%22%2C%22id%22%3A%22checkout-button%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Book%20Now%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22submit%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Book%20Now&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22pricing_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22date_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_date%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22total%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Live%20In%20Test%20(NEW%20DB!!!!)%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744209733&coo=false&es=automatic&tm=3&cdl=&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744217966&cd[content_ids]=%5B%22190%22%2C%22190%22%2C%22190%22%5D&cd[content_name]=Bronze&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A1%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A2%7D%5D&cd[value]=1&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744209733&coo=false&cdl=&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744217966&cd[content_ids]=%5B%22190%22%2C%22190%22%2C%22190%22%5D&cd[content_name]=Bronze&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A1%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A3%7D%2C%7B%22id%22%3A%22190%22%2C%22quantity%22%3A2%2C%22item_price%22%3A2%7D%5D&cd[value]=1&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744209733&coo=false&cdl=&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_22 - https://sayalive.io/check-out2', function() {
        response = http.post(
            'https://sayalive.io/check-out2',
            new URLSearchParams({
                _token: `${vars['_token4']}`,
                event_id: `${vars['event_id3']}`,
                pricing_type: `${vars['pricing_type3']}`,
                date_type: `${vars['date_type3']}`,
                event_date: `${vars['event_date3']}`,
                'v_name[]': ['Bronze', 'Gold', 'Silver'],
                'quantity[]': [`${vars['quantity1']}`, `${vars['quantity2']}`, `${vars['quantity2']}`],
                total: '11.00',
            }).toString(), {
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
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get('https://www.google.com/recaptcha/api.js?', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/assets/admin/img/65c375772e109.svg', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwpBsxsF3eY665Ye/recaptcha__en.js', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2'
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_23 - https://sayalive.io/checkout?type=guest', function() {
        response = http.get('https://sayalive.io/checkout?type=guest', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65c489e26a7d2_65b3a722aa09a_thumb.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744221020&cd[content_ids]=%5B190%2C190%2C190%5D&cd[content_name]=Bronze%2C%20Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Bronze%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A1%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=11.851966&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744220928&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744221020&cd[content_ids]=%5B190%2C190%2C190%5D&cd[content_name]=Bronze%2C%20Gold%2C%20Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Bronze%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A1%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=11.851966&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744220928&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744221022&cd[content_ids]=%5B190%2C190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Bronze%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A1%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=11.851966&cd[currency]=MYR&cd[quantity]=0122&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744220928&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744221022&cd[content_ids]=%5B190%2C190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Bronze%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A1%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=11.851966&cd[currency]=MYR&cd[quantity]=0122&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744220928&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.post(
            'https://sayalive.io/checkout/calculate-shipping', {
                shipment_provider_id: '4',
                shipment_organizer_id: `${vars['total1']}`,
                total_items: `${vars['total2']}`,
                _token: `${vars['_token4']}`,
            }, {
                headers: {
                    accept: '*/*',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'x-csrf-token': 'rxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744254527&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest%22%2C%22id%22%3A%22continueButton%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Proceed%20to%20Pay%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Proceed%20to%20Pay&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment_provider_id%22%2C%22name%22%3A%22shipment_provider_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipping-cost-input%22%2C%22name%22%3A%22shipping_cost%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment-rate-id%22%2C%22name%22%3A%22shipment_rate_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22fname%22%2C%22name%22%3A%22fname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20First%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22lname%22%2C%22name%22%3A%22lname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Last%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22email%22%2C%22name%22%3A%22email%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22email_confirmation%22%2C%22name%22%3A%22email_confirmation%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Reconfirm%20your%20email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22phone%22%2C%22name%22%3A%22phone%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Phone%20Number%22%2C%22inputType%22%3A%22tel%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22state%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22State%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22city%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22City%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22zip_code%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Zip%2FPostcode%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22address%22%2C%22tag%22%3A%22textarea%22%2C%22placeholder%22%3A%22Address%22%7D%2C%7B%22id%22%3A%221_190_ic%22%2C%22name%22%3A%221_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%221_190_country%22%2C%22name%22%3A%221_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%222_190_ic%22%2C%22name%22%3A%222_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%222_190_country%22%2C%22name%22%3A%222_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%223_190_ic%22%2C%22name%22%3A%223_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%223_190_country%22%2C%22name%22%3A%223_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%224_190_ic%22%2C%22name%22%3A%224_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%224_190_country%22%2C%22name%22%3A%224_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%225_190_ic%22%2C%22name%22%3A%225_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%225_190_country%22%2C%22name%22%3A%225_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22coupon-code%22%2C%22name%22%3A%22coupon%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22gateway_dummypay%22%2C%22name%22%3A%22gateway%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22radio%22%7D%2C%7B%22id%22%3A%22shipping-provider-select%22%2C%22name%22%3A%22shipping_provider%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22eventURL%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Check%20Out%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&cudff[fn]=***&cudff[ln]=***&cudff[em]=******.*******%40**************.***&cudff[ph]=***********&cudff[st]=********&cudff[ct]=************&cudff[zp]=*****&udff[fn]=94419b99b12c11133a4dfeccc3e17885974beb48f7827c48239aabfbcad238d8&udff[ln]=9fe27f6f7d3c4301fa5f6c45a249caa0922d8ab3d155deb3a4e233a5cfdbd14c&ncudff[em]=******.*******%40**************.***&udff[em]=cc0e24f8e19b02956331679d403f6963f1fbfc4c89cf84383b8931e27f41bbd9&ncudff[ph]=**********&udff[ph]=9260f889a03c3de5a806b802afdcca308513328a90c44988955d8dc13dd93504&udff[st]=ad9a67fefa847de87753df6794a0ae466431e76ad1fb4db58fbbe836d1dde0e7&udff[ct]=1c2cc85d86f480bca5df02cf8ead632be5d6ea21e2900420cf9cce61c1b35472&udff[zp]=a414ac7eeaac133b08fed20bacaf31d1bd0c654be68248b0ec16dfab46dba2a7&v=2.9.207&r=stable&ec=2&o=6174&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744220928&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=646187527.1749651650&gtm=45je56b0v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104617979~104617981~104661466~104661468~104736442~104736444&z=706911554', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_24 - https://sayalive.io/ticket-booking/129?type=guest', function() {
        response = http.post(
            'https://sayalive.io/ticket-booking/129?type=guest',
            '------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="shipment_provider_id"\r\n\r\n4\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="shipment_rate_id"\r\n\r\n3\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="fname"\r\n\r\nali\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="lname"\r\n\r\nabu\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="email"\r\n\r\nredzmi.radzuan@theaccessgroup.com\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="email_confirmation"\r\n\r\nredzmi.radzuan@theaccessgroup.com\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="phone"\r\n\r\n01122334455\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="country"\r\n\r\nUnited Kingdom\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="state"\r\n\r\nselangor\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="city"\r\n\r\nloughborough\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="zip_code"\r\n\r\n06000\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="address"\r\n\r\nkondo\r\ndanau\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="1_190_ic"\r\n\r\n870604-05-9800\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="1_190_country"\r\n\r\nBelgium\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="2_190_ic"\r\n\r\n880302-03-4545\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="2_190_country"\r\n\r\nEgypt\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="3_190_ic"\r\n\r\n880703-02-5433\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="3_190_country"\r\n\r\nGuyana\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="4_190_ic"\r\n\r\n980504-03-2345\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="4_190_country"\r\n\r\nAzerbaijan\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="5_190_ic"\r\n\r\n890516-01-7866\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="5_190_country"\r\n\r\nVenezuela\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="event"\r\n\r\n{"id":129,"organizer_id":33,"thumbnail":"assets\\/admin\\/img\\/event\\/thumbnail\\/65c489e26a7d2_65b3a722aa09a_thumb.jpeg","status":"1","date_type":"single","countdown_status":0,"start_date":"2024-04-01","start_time":"09:00","duration":"7975y 1mo 2912848d ","end_date":"9999-05-11","end_time":"09:00","end_date_time":"9999-05-11 09:00:00","created_at":"2024-02-08T07:59:30.000000Z","updated_at":"2025-06-12T14:21:21.000000Z","event_type":"venue","is_featured":"no","latitude":"3.2097708172520596","longitude":"101.6692582360404","is_allow_promoter":1,"is_coming_soon":0,"service_charge_percentage":null,"service_charge_fixed":null,"payment_method":"[\\"14\\"]","is_print_label":0,"is_allow_shipping":1,"is_use_old_checkout":0,"is_admin_handle_shipping":0,"google_analytics_measurement_id":null,"meta_pixel_id":null,"is_maintenance_mode":0,"title":"Live In Test (NEW DB!!!!)","slug":"test-5","city":"PETALING JAYA","country":"Malaysia"}\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="total"\r\n\r\n11.85\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="quantity"\r\n\r\n5\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="coupon"\r\n\r\n\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="gateway"\r\n\r\ndummypay\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="shipping_provider"\r\n\r\n4\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7\r\nContent-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/test-5\r\n------WebKitFormBoundaryWOR3dVkXibiQ8XJ7--\r\n', {
                headers: {
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryWOR3dVkXibiQ8XJ7',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/favicon.ico', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
    })

    group('page_25 - https://sayalive.io/event-booking/dummypay/process/129', function() {
        response = http.post(
            'https://sayalive.io/event-booking/dummypay/process/129', {
                _token: `${vars['_token4']}`,
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
            }
        )

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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

        response = http.get(
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684afa7f84b21&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744261727&cd[content_ids]=%5B190%2C190%2C190%2C190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Bronze%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A1%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=11.18&cd[currency]=MYR&cd[coupon]=&cd[quantity]=5&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684afa7f84b21&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744261653&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=Purchase&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684afa7f84b21&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744261727&cd[content_ids]=%5B190%2C190%2C190%2C190%2C190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Bronze%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A1%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Gold%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A3%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%2C%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%222%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=11.18&cd[currency]=MYR&cd[coupon]=&cd[quantity]=5&cd[discount]=0&cd[early_bird_discount]=0&cd[booking_id]=129-1684afa7f84b21&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744261653&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684afa7f84b21&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744263808&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684afa7f84b21%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744261653&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fevent-booking-complete%3Fid%3D129%26booking_id%3D129-1684afa7f84b21&rl=https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest&if=false&ts=1749744263808&cd[buttonFeatures]=%7B%22classList%22%3A%22btn%20btn-primary%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Ftickets%2F129-1684afa7f84b21%22%2C%22id%22%3A%22%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22%20View%20Your%20Ticket%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22a%22%2C%22type%22%3Anull%2C%22name%22%3A%22%22%7D&cd[buttonText]=%20View%20Your%20Ticket&cd[formFeatures]=%5B%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20Payment%20Success%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744261653&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_26 - https://sayalive.io/test-5', function() {
        response = http.get('https://sayalive.io/test-5', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event-gallery/65c4897f1f099_65b3a6b5c1431_main.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get('https://sayalive.io/assets/front/images/user.png', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744280064&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744279975&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=view_event_details&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744280064&cd[event_category]=Event%20Details&cd[event_label]=Live%20In%20Test%20(NEW%20DB!!!!)&cd[event_id]=129&cd[event_type]=venue&cd[location]=PETALING%20JAYA%2C%20Malaysia&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744279975&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744284193&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%20mt-20%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fcheck-out2%22%2C%22id%22%3A%22checkout-button%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Book%20Now%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22submit%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Book%20Now&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22pricing_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22date_type%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event_date%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22quantityDown%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22v_name%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%5B%5D%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22quantityUP%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22total%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Live%20In%20Test%20(NEW%20DB!!!!)%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744279975&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744284219&cd[content_ids]=%5B%22190%22%5D&cd[content_name]=Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A2%7D%5D&cd[value]=2&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744279975&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=ViewContent&dl=https%3A%2F%2Fsayalive.io%2Ftest-5&rl=&if=false&ts=1749744284219&cd[content_ids]=%5B%22190%22%5D&cd[content_name]=Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A%22190%22%2C%22quantity%22%3A1%2C%22item_price%22%3A2%7D%5D&cd[value]=2&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=2&o=5150&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744279975&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_27 - https://sayalive.io/check-out2', function() {
        response = http.post(
            'https://sayalive.io/check-out2',
            new URLSearchParams({
                _token: `${vars['_token4']}`,
                event_id: `${vars['event_id3']}`,
                pricing_type: `${vars['pricing_type3']}`,
                date_type: `${vars['date_type3']}`,
                event_date: `${vars['event_date3']}`,
                'v_name[]': ['Bronze', 'Gold', 'Silver'],
                'quantity[]': [
                    `${vars['shipping_cost2']}`,
                    `${vars['shipping_cost2']}`,
                    `${vars['quantity1']}`,
                ],
                total: '2.00',
            }).toString(), {
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
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get('https://www.google.com/recaptcha/api.js?', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.gstatic.com/recaptcha/releases/GUGrl5YkSwpBsxsF3eY665Ye/recaptcha__en.js', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_28 - https://sayalive.io/checkout?type=guest', function() {
        response = http.get('https://sayalive.io/checkout?type=guest', {
            headers: {
                'upgrade-insecure-requests': '1',
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })

        response = http.get(
            'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans%3Awght%40500%3B600%3B700%3B800&family=Roboto%3Awght%40300%3B400%3B500%3B700&display=swap&family=Roboto%3Awght%40300%3B400%3B500%3B700', {
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

        response = http.get(
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/event/thumbnail/65c489e26a7d2_65b3a722aa09a_thumb.jpeg', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/footer-logo/67aa0b35f2a24_sayalive%20logo.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://sayalive.io/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js', {
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
            'https://fonts.gstatic.com/s/plusjakartasans/v11/LDIoaomQNQcsA88c7O9yZ4KMCoOg4Ko20yw.woff2', {
                headers: {
                    origin: 'https://sayalive.io',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://fonts.gstatic.com/s/roboto/v48/KFO7CnqEu92Fr1ME7kSn66aGLdTylUAMa3yUBA.woff2', {
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
            'https://sayalive.sgp1.cdn.digitaloceanspaces.com/assets/admin/img/67aabb7c18482_sayalive%20ig%20poster%202.png', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://connect.facebook.net/signals/config/1005535387858009?v=2.9.207&r=stable&domain=sayalive.io&hme=c7027faad2bd527f2b384e7a6d6c55127377ecc46dce76c1ebbdd02e9451da4e&ex_m=81%2C138%2C121%2C15%2C114%2C56%2C37%2C115%2C62%2C55%2C126%2C70%2C10%2C80%2C23%2C109%2C100%2C60%2C63%2C108%2C125%2C6%2C2%2C3%2C5%2C88%2C4%2C71%2C79%2C128%2C129%2C200%2C150%2C50%2C205%2C202%2C203%2C42%2C163%2C22%2C59%2C209%2C208%2C152%2C25%2C49%2C7%2C52%2C75%2C76%2C77%2C82%2C104%2C24%2C21%2C107%2C103%2C102%2C122%2C61%2C124%2C47%2C123%2C38%2C105%2C48%2C97%2C34%2C190%2C192%2C160%2C18%2C19%2C20%2C12%2C13%2C33%2C30%2C31%2C66%2C72%2C74%2C86%2C113%2C116%2C35%2C87%2C16%2C14%2C91%2C57%2C28%2C118%2C117%2C119%2C110%2C17%2C27%2C46%2C85%2C26%2C173%2C146%2C84%2C1%2C106%2C65%2C95%2C41%2C36%2C93%2C94%2C99%2C45%2C11%2C101%2C92%2C53%2C40%2C43%2C0%2C78%2C127%2C98%2C9%2C96%2C249%2C188%2C136%2C176%2C169%2C8%2C44%2C73%2C51%2C120%2C54%2C90%2C69%2C68%2C39%2C111%2C67%2C64%2C58%2C89%2C83%2C32%2C112%2C29%2C130', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744287293&cd[content_ids]=%5B190%5D&cd[content_name]=Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=2.183812&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744287199&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=AddToCart&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744287293&cd[content_ids]=%5B190%5D&cd[content_name]=Silver&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=2.183812&cd[currency]=MYR&sw=1366&sh=768&v=2.9.207&r=stable&ec=0&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744287199&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/tr/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744287296&cd[content_ids]=%5B190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=2.183812&cd[currency]=MYR&cd[quantity]=01&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744287199&coo=false&cdl=&exp=k2&rqm=GET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=InitiateCheckout&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744287296&cd[content_ids]=%5B190%5D&cd[content_type]=product&cd[contents]=%5B%7B%22id%22%3A190%2C%22name%22%3A%22Silver%22%2C%22category%22%3A%22Live%20In%20Concert%22%2C%22quantity%22%3A%221%22%2C%22item_price%22%3A2%2C%22early_bird_discount%22%3A0%7D%5D&cd[value]=2.183812&cd[currency]=MYR&cd[quantity]=01&sw=1366&sh=768&v=2.9.207&r=stable&ec=1&o=4126&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744287199&coo=false&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.post(
            'https://sayalive.io/checkout/calculate-shipping', {
                shipment_provider_id: '4',
                shipment_organizer_id: `${vars['total1']}`,
                total_items: `${vars['quantity1']}`,
                _token: `${vars['_token4']}`,
            }, {
                headers: {
                    accept: '*/*',
                    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    'x-csrf-token': 'rxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm',
                    'x-requested-with': 'XMLHttpRequest',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744325085&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest%22%2C%22id%22%3A%22continueButton%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Proceed%20to%20Pay%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Proceed%20to%20Pay&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment_provider_id%22%2C%22name%22%3A%22shipment_provider_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipping-cost-input%22%2C%22name%22%3A%22shipping_cost%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment-rate-id%22%2C%22name%22%3A%22shipment_rate_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22fname%22%2C%22name%22%3A%22fname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20First%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22lname%22%2C%22name%22%3A%22lname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Last%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22email%22%2C%22name%22%3A%22email%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22email_confirmation%22%2C%22name%22%3A%22email_confirmation%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Reconfirm%20your%20email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22phone%22%2C%22name%22%3A%22phone%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Phone%20Number%22%2C%22inputType%22%3A%22tel%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22state%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22State%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22city%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22City%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22zip_code%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Zip%2FPostcode%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22address%22%2C%22tag%22%3A%22textarea%22%2C%22placeholder%22%3A%22Address%22%7D%2C%7B%22id%22%3A%221_190_ic%22%2C%22name%22%3A%221_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%221_190_country%22%2C%22name%22%3A%221_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22coupon-code%22%2C%22name%22%3A%22coupon%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22gateway_dummypay%22%2C%22name%22%3A%22gateway%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22radio%22%7D%2C%7B%22id%22%3A%22shipping-provider-select%22%2C%22name%22%3A%22shipping_provider%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22eventURL%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Check%20Out%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&cudff[fn]=***&cudff[ln]=***&cudff[em]=******.*******%40****.**&cudff[ph]=***********&cudff[st]=********&cudff[ct]=************&cudff[zp]=*****&udff[fn]=94419b99b12c11133a4dfeccc3e17885974beb48f7827c48239aabfbcad238d8&udff[ln]=9fe27f6f7d3c4301fa5f6c45a249caa0922d8ab3d155deb3a4e233a5cfdbd14c&ncudff[em]=******.*******%40****.**&udff[em]=9a7ab80d323b4daf7db2c2f5f2b0efbb4540cf6f83d7efba8fec4f9b68407607&ncudff[ph]=**********&udff[ph]=9260f889a03c3de5a806b802afdcca308513328a90c44988955d8dc13dd93504&udff[st]=ad9a67fefa847de87753df6794a0ae466431e76ad1fb4db58fbbe836d1dde0e7&udff[ct]=1c2cc85d86f480bca5df02cf8ead632be5d6ea21e2900420cf9cce61c1b35472&udff[zp]=a414ac7eeaac133b08fed20bacaf31d1bd0c654be68248b0ec16dfab46dba2a7&v=2.9.207&r=stable&ec=2&o=6174&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744287199&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=1005535387858009&ev=SubscribedButtonClick&dl=https%3A%2F%2Fsayalive.io%2Fcheckout%3Ftype%3Dguest&rl=https%3A%2F%2Fsayalive.io%2Fcustomer%2Flogin%3FredirectPath%3Devent_checkout&if=false&ts=1749744328150&cd[buttonFeatures]=%7B%22classList%22%3A%22theme-btn%20w-100%22%2C%22destination%22%3A%22https%3A%2F%2Fsayalive.io%2Fticket-booking%2F129%3Ftype%3Dguest%22%2C%22id%22%3A%22continueButton%22%2C%22imageUrl%22%3A%22%22%2C%22innerText%22%3A%22Proceed%20to%20Pay%22%2C%22numChildButtons%22%3A0%2C%22tag%22%3A%22button%22%2C%22type%22%3A%22button%22%2C%22name%22%3A%22%22%2C%22value%22%3A%22%22%7D&cd[buttonText]=Proceed%20to%20Pay&cd[formFeatures]=%5B%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment_provider_id%22%2C%22name%22%3A%22shipment_provider_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipping-cost-input%22%2C%22name%22%3A%22shipping_cost%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22shipment-rate-id%22%2C%22name%22%3A%22shipment_rate_id%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22fname%22%2C%22name%22%3A%22fname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20First%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22lname%22%2C%22name%22%3A%22lname%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Last%20Name%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22email%22%2C%22name%22%3A%22email%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Enter%20Your%20Email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22email_confirmation%22%2C%22name%22%3A%22email_confirmation%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Reconfirm%20your%20email%22%2C%22inputType%22%3A%22email%22%7D%2C%7B%22id%22%3A%22phone%22%2C%22name%22%3A%22phone%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Phone%20Number%22%2C%22inputType%22%3A%22tel%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22state%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22State%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22city%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22City%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22zip_code%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22Zip%2FPostcode%22%2C%22inputType%22%3A%22number%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22address%22%2C%22tag%22%3A%22textarea%22%2C%22placeholder%22%3A%22Address%22%7D%2C%7B%22id%22%3A%221_190_ic%22%2C%22name%22%3A%221_190_ic%22%2C%22tag%22%3A%22input%22%2C%22placeholder%22%3A%22999999-99-9999%22%2C%22inputType%22%3A%22text%22%7D%2C%7B%22id%22%3A%221_190_country%22%2C%22name%22%3A%221_190_country%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22event%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22total%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22quantity%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22_token%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%2C%7B%22id%22%3A%22coupon-code%22%2C%22name%22%3A%22coupon%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22text%22%2C%22valueMeaning%22%3A%22empty%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22gateway_dummypay%22%2C%22name%22%3A%22gateway%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22radio%22%7D%2C%7B%22id%22%3A%22shipping-provider-select%22%2C%22name%22%3A%22shipping_provider%22%2C%22tag%22%3A%22select%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22%22%2C%22tag%22%3A%22button%22%7D%2C%7B%22id%22%3A%22%22%2C%22name%22%3A%22eventURL%22%2C%22tag%22%3A%22input%22%2C%22inputType%22%3A%22hidden%22%7D%5D&cd[pageFeatures]=%7B%22title%22%3A%22%20%20%20%20Check%20Out%5Cn%20%20%C2%B7%20Streamlining%20Ticketing%2C%20Enhancing%20Live%20Commerce.%22%7D&sw=1366&sh=768&cudff[fn]=***&cudff[ln]=***&cudff[em]=******.*******%40****.**&cudff[ph]=***********&cudff[st]=********&cudff[ct]=************&cudff[zp]=*****&udff[fn]=94419b99b12c11133a4dfeccc3e17885974beb48f7827c48239aabfbcad238d8&udff[ln]=9fe27f6f7d3c4301fa5f6c45a249caa0922d8ab3d155deb3a4e233a5cfdbd14c&ncudff[em]=******.*******%40****.**&udff[em]=9a7ab80d323b4daf7db2c2f5f2b0efbb4540cf6f83d7efba8fec4f9b68407607&ncudff[ph]=**********&udff[ph]=9260f889a03c3de5a806b802afdcca308513328a90c44988955d8dc13dd93504&udff[st]=ad9a67fefa847de87753df6794a0ae466431e76ad1fb4db58fbbe836d1dde0e7&udff[ct]=1c2cc85d86f480bca5df02cf8ead632be5d6ea21e2900420cf9cce61c1b35472&udff[zp]=a414ac7eeaac133b08fed20bacaf31d1bd0c654be68248b0ec16dfab46dba2a7&v=2.9.207&r=stable&ec=3&o=6174&fbp=fb.1.1749651650057.639940942831715561&ler=empty&it=1749744287199&coo=false&es=automatic&tm=3&cdl=&exp=k2&rqm=FGET', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get(
            'https://www.google.com.my/ads/ga-audiences?v=1&t=sr&slf_rd=1&_r=4&tid=G-BY5N14K0MS&cid=646187527.1749651650&gtm=45je56b0v9218743669za200&aip=1&dma=0&gcd=13l3l3l3l1l1&npa=0&frm=0&tag_exp=101509157~103116026~103200004~103233427~103351869~103351871~104617979~104617981~104661466~104661468~104736442~104736444&z=1141690484', {
                headers: {
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )
    })

    group('page_29 - https://sayalive.io/ticket-booking/129?type=guest', function() {
        response = http.post(
            'https://sayalive.io/ticket-booking/129?type=guest',
            '------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="shipment_provider_id"\r\n\r\n4\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="shipping_cost"\r\n\r\n0\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="shipment_rate_id"\r\n\r\n3\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="fname"\r\n\r\nali\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="lname"\r\n\r\nabu\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="email"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="email_confirmation"\r\n\r\nredzmi.radzuan@test.co\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="phone"\r\n\r\n01122334455\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="country"\r\n\r\nUnited Kingdom\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="state"\r\n\r\nselangor\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="city"\r\n\r\nloughborough\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="zip_code"\r\n\r\n06000\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="address"\r\n\r\nkondo\r\ndanau\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="1_190_ic"\r\n\r\n870604-05-9800\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="1_190_country"\r\n\r\nBahrain\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="event"\r\n\r\n{"id":129,"organizer_id":33,"thumbnail":"assets\\/admin\\/img\\/event\\/thumbnail\\/65c489e26a7d2_65b3a722aa09a_thumb.jpeg","status":"1","date_type":"single","countdown_status":0,"start_date":"2024-04-01","start_time":"09:00","duration":"7975y 1mo 2912848d ","end_date":"9999-05-11","end_time":"09:00","end_date_time":"9999-05-11 09:00:00","created_at":"2024-02-08T07:59:30.000000Z","updated_at":"2025-06-12T14:21:21.000000Z","event_type":"venue","is_featured":"no","latitude":"3.2097708172520596","longitude":"101.6692582360404","is_allow_promoter":1,"is_coming_soon":0,"service_charge_percentage":null,"service_charge_fixed":null,"payment_method":"[\\"14\\"]","is_print_label":0,"is_allow_shipping":1,"is_use_old_checkout":0,"is_admin_handle_shipping":0,"google_analytics_measurement_id":null,"meta_pixel_id":null,"is_maintenance_mode":0,"title":"Live In Test (NEW DB!!!!)","slug":"test-5","city":"PETALING JAYA","country":"Malaysia"}\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="total"\r\n\r\n2.18\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="quantity"\r\n\r\n1\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="_token"\r\n\r\nrxlqqrWYnuDBF2EOtHKzE1zyqNAYY7Cv4shmsESm\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="coupon"\r\n\r\n\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="gateway"\r\n\r\ndummypay\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="shipping_provider"\r\n\r\n4\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM\r\nContent-Disposition: form-data; name="eventURL"\r\n\r\nhttps://sayalive.io/test-5\r\n------WebKitFormBoundaryfLIDpKtBFyRmHWJM--\r\n', {
                headers: {
                    'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryfLIDpKtBFyRmHWJM',
                    origin: 'https://sayalive.io',
                    'upgrade-insecure-requests': '1',
                    'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                    'sec-ch-ua-mobile': '?0',
                    'sec-ch-ua-platform': '"Windows"',
                },
            }
        )

        response = http.get('https://sayalive.io/favicon.ico', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
    })

    group('page_30 - https://sayalive.io/event-booking/dummypay/process/129', function() {
        response = http.post(
            'https://sayalive.io/event-booking/dummypay/process/129', {
                _token: `${vars['_token4']}`,
                simulate: 'failed',
            }, {
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

        response = http.get('https://sayalive.io/favicon.ico', {
            headers: {
                'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"',
            },
        })
    })

    // Automatically added sleep
    sleep(1)
}

export function handleSummary(data) {
    const now = new Date().toISOString().replace(/[:.]/g, '-');
    const htmlFile = `./report/k6-testcase-report-${now}.html`;
    const jsonFile = `./report/k6-testcase-data-${now}.json`;

    return {
        [htmlFile]: htmlReport(data),
        [jsonFile]: JSON.stringify(data, null, 2),
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
    };
}