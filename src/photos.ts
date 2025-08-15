import type { Photo } from "./components/PhotoGallery";

const sketchingPhotoURLs = [
    'https://lh3.googleusercontent.com/pw/AP1GczOgHwY3ySE265PjoV7Sa0Sd612YK2oTzUlMI5avMLM-hbIdecOgkJVTqwwOJ1R5ifVBJOVJ-3Dwjaokj4fqAnTQ8kfBEctbgzfjGxAxb6SZaSrU8U9m',
    'https://lh3.googleusercontent.com/pw/AP1GczNEnoN1iP6PUK-wIih5XlRRE3jnvfMv3Sjc6ZyuJBxlK6dhst_5d3uqYqSu4pGbcqkb8PlNC6Rvcx0tHcgyoivIQun6S4EiNOFuBbn4xG6FoQMfi_MB',
    'https://lh3.googleusercontent.com/pw/AP1GczMyB0CQ4sjpFiI4QwVon1VYIoGeGZZhgADuGcktnu9cupUoYxV7c1vHtWXy55-CS64jNF1LIyl1t7MbWwwvDaSsOsz7hvGAcEUPDsOV3B0-xacIV-JO',
    'https://lh3.googleusercontent.com/pw/AP1GczNHX-sD_--IzurG6TBhGG6_lEBMSwOqmkYlwDgxnIO9KKSTlUk4L8BKpq563FZkWvk0_UFxeAgR6Bn7L2GWmaY2mPWagd5gP992OXfzZhXieA4yNpuA',
    'https://lh3.googleusercontent.com/pw/AP1GczPJ3dIVv6r98fyNsLEm2nnBK5dgBKN_nwYPH6eejA4azC_yVfHEoT2vn1lokvFFgs_G8PZWsNdbwrMLxGYXeSMPwIBCwe7CFQwfXTKXYEUW_c9D1aqw',
    'https://lh3.googleusercontent.com/pw/AP1GczO65bSLc9WXKLLy9vGmOXmsCYmV0orU3SntGq8cS6f71T08RXbzw-p-Nmhn5cu-ts7GGBUwdsuVzYLKPE7re5uFLYah0xBJyux5N_ZwtB1Ck2BeopQd',
    'https://lh3.googleusercontent.com/pw/AP1GczMPQBXBHFvDaQIED1cKi0P66NXmuPoqRFmIozPIHn0BW-Plpl4lzWA2BAWrEGkgo3vyOml_NgkG0OM5gYjtS_jiZE-dmY0q98Hxd_oz3SOhkGDzbdC9',
    'https://lh3.googleusercontent.com/pw/AP1GczPaQMUyv_3NnjujS9E32G8IKiDrVq-nvDIeAbc0UkGkcxEgc7vc5NsntteoRo4klvfLb2RbPVOY4NsbZV1Am4l1VvF-FGYLPzc0DCgQY4_knt2rDCTh',
    'https://lh3.googleusercontent.com/pw/AP1GczNvl_1_VX8Gh9BZpEFae3hSBhYuudq5h2Di8CSL3aBmzMi_OSKwuPdeDawF4Kgpraum4yDgtAc9RES2zZH7GQ2POthpOfo5ooO8Qe_Lw9VaiCgN_QB_',
    'https://lh3.googleusercontent.com/pw/AP1GczO6xpx9nVrKWLqiWeMsI3YjsQ1seXYsWKlodjkat4NBd0bxfO5y6gSzBdcsSPlL4cb8jRjkZq0MWMtFTxuKJ7JrT56hg1VX5BlBErBBL38cdvKlbiIT',
    'https://lh3.googleusercontent.com/pw/AP1GczPTZlQBh-lzdwTNrq1e1bXSCos-zhNFrxpMqYNNDfi4MtrQ1TXn67bhlnhXxlcpzgL4vnWrBxLdLfb-vETdJX2W91nD2KfESYI3A-NQIujybQ0WsuQc',
    'https://lh3.googleusercontent.com/pw/AP1GczPuitRj9rqgQPHz4MM8U8Ps0F2OoajaMgePqUpPJRRssSnfG5ftNG1DdhXQZP2py3K76tkmDL7a3fwPvpWC02PkhqX_zrBe05_-2HKbZbbhdrUgu3CP',
    'https://lh3.googleusercontent.com/pw/AP1GczNW4LJfCT-MjMDvJQHurVHeyUPglDDbn5MNwH75SE2gHKteXCNJI-sG8N0BB2TY7AMSXJoLTBxQoLBMAW1o2_w6ZtnN9JEz97oZaMG5pC3YnxEHBag_',
    'https://lh3.googleusercontent.com/pw/AP1GczNIT2UgKyAYYc4Ppra5tPJNqy2hCkOzSGz7R8k1XuHplulPRzLAuZGti1_BfmCtA5-Bbh0B-3rdNdOaQqEkQ8ytKdG_04csM4h4AhYrooEC83bmyRPa',
    'https://lh3.googleusercontent.com/pw/AP1GczMCuB1kPs-wx8CK6_4aHXyo91Ny1uQ73fOCmJU_uUoXDJ6KgrcMDp-siU3ljJ858VEM0Z9h0u6Hz5NyeA640cdQ-_VJvbXZsnQtGgfk7DR03VW3DzHm',
    'https://lh3.googleusercontent.com/pw/AP1GczPc3cHMNS9WauzvJu2tznP8tR4QdMnLE626sQ9YFlL_TVugKnpLGK89sTwTSILkuDH1uGPuqGR2DZo2vi3zK1b0KyQG5IiQcsiz9sEA4KiWJFKj-CIo',
    'https://lh3.googleusercontent.com/pw/AP1GczM6BjweceDPtlRMdUcFLKqc4PhL1bLPG0Pdde12OGwx-811MdQ2mPts0L0aW7nqu3t1eqbaJgRuBfAjGfkt9NQo6tKydfWbQiBP4q-DKwNn6JqcMsrq',
    'https://lh3.googleusercontent.com/pw/AP1GczMY6T4tvV8DgFb25TZjQ451RuqzAc3UGXKDFGuadYM-d3I76t9MrtcGm0zHKWAZIJovCs1ik3NKG_78LmvBTCdq5kGrWzMfeixM44yNka9zQ5-rYhai',
    'https://lh3.googleusercontent.com/pw/AP1GczP0iqd22gufa1Od7D2jsMWC5zvvPJxkaEOr3J8FPieERvv_4_uiyll_b8IpJ0-obkVo4CR3xzAwyKShE7QfPLYvmaaf8rTuhnjAc5_d2bsbzPzXh6x8',
    'https://lh3.googleusercontent.com/pw/AP1GczNvgQMk5t6iI9HIL-az_6brL6ezLSoOu0D1mnQANr15paA2-YtilX1K9D1sDbJkub5nY2wetFKs-dSPHDIP1NSBwcQO4mGkyHN5LFkh9cYkXAkCBjbY',
]
export const getSketchingPhotos = (): Photo[] => sketchingPhotoURLs.map<Photo>(url => {
    return {
        url: url + '=w1920-h1080',
        thumbnail: url + '=w300'
    }
})

const woodWorkingURLs = [
    'https://lh3.googleusercontent.com/pw/AP1GczP66iCgL78ZVadbqIfSl75nO437LmROx6FA7vah6Pr4Ams4b9q37Nvw--i1tqXsxsuQbhgLYVx47DebN2UPjlP0G2PFARx-13Myc5Qic3crOB1HnRuu',
    'https://lh3.googleusercontent.com/pw/AP1GczN8GRiBW6X925LWSKdvAKxGjGQWXibOMybAn39uh6fDa9cOYUpxUGhFC4igvyJ2pYl2x5Y0mum1t2VO7S4n99Y0bTF9Iw9yQ3eaGULZVdqykj_acOHb',
    'https://lh3.googleusercontent.com/pw/AP1GczO5BjxyPF4XbCDqe0f1Ou94B7WJjmwG4yKpMfD-xj31wTORgErO4MuFFYQyoj_wvq16Al655J-28AOJIsW2W6JxENUlLC-ZC7iyev4zziYUPPh3MnHa',
    'https://lh3.googleusercontent.com/pw/AP1GczOxyH4KvDIWC91C43FPPdwhRYKIkRQ3Ms2qViit3IAqy0hZcXMJpj4WMYdSkrlXxZ1CCH8tAPC8zciilbx1peQWZjSS9OU-GrvOCwi9w4JvPvXp3Z6t',
    'https://lh3.googleusercontent.com/pw/AP1GczMP2kYw-WohNapo_jPViwGcck8ZMCJ-gW1CRBGH-38mgASD3mUUboyTWag0eoCInYO73DpX0S16quLYfyIlP4cUUKLApBMWcTOjliVCmhrBJ6ymP-1F',
    'https://lh3.googleusercontent.com/pw/AP1GczNhyaxtBxlnIUhDZHD6Hm6VwnW_jAkwZ2nD1S35dh3vus-jfRGFSNjkBTm0id8_EbDT8qQsVM5dGBeKqvPi2YkA1nMI5crEGS4sRByadDqSsH7TzSjS',
    'https://lh3.googleusercontent.com/pw/AP1GczNaHY8KN-1OXqjzuB3gaH_xzTuwhjkmGQNr9tmweZzS0OCh3clyhiYtcs2nKnkKcGtBBRwdnWB-evvnRZUSUAo8jwLtj4oQnG3LMeZO16OJhtl4f9Zi',
    'https://lh3.googleusercontent.com/pw/AP1GczOUI4cRjAI8Lub2hCGVSy-jPqpJXWjP2EHY-8Y3xoqpwo-QmQn_Lm8Wamz-GB_lGrKdj8VeV1UsiiZjyUU2ii4oDMS7mdjsgI7dXKTuwa0HJBC-ZwoX',
    'https://lh3.googleusercontent.com/pw/AP1GczOZcP1YLf7SOHe6mWjV5zYf1brA8Gn8Q8ZteBexwXM4fVBJ4g_8xKiCxpA0MM2ex1RZ8t9aP-dSRx19lfIQzIZa8uqlZNVfECIYX4TyY6CZHjzMwA-s',
    'https://lh3.googleusercontent.com/pw/AP1GczOu24hBGWDXNRKYtYLWPcUd_83UBHgxbDeWTupnPKRVFBuP2UY_rlF004F7dPlDyCGaErgus_DqoGYt9hwGrm8rPCQXxeCTZcc7hDzFwWnLsYMwniUe',
    'https://lh3.googleusercontent.com/pw/AP1GczNo1QXLyQCC3QZU9FVe3WjU4jczNh8_vk6zN7uzdCyOs2ZsD3407mRDc4TEYxiTArSeIK3DFPZFl6wj2mitP_36DWb8dlPnQ8bdP7mX42jRS49NVl7E',
    'https://lh3.googleusercontent.com/pw/AP1GczO0H-d6CHlieiIsOV5apw_yj-krsWq1Ss-OKSNMpSzaHbZ3SCV1z1jXHNQyVMUEiy6INWnugDjyrKPloDAcNnTn93ysn6bfBI181PMeh1Uqu8N7qJ23',
    'https://lh3.googleusercontent.com/pw/AP1GczMGQHMlWsPo0y5AQS9ItBahrxXAmyj8pyy2VWNX9BtaNU9-w1l0cbRohFBdDAqSVf5yiRV4WZbnfdYeSZMfTytXom3bwGBly6JrkHrd0WW31o9YvSVx',
    'https://lh3.googleusercontent.com/pw/AP1GczN5XKXWzm45I1WIU6MeAtm1sLUuyVYarIA7UJnJgKcrrPyKOximGwsDIgZIyLypjakOKsd96l6dNH5JQ0yhN5nkRN5uzNjJDaJ2wiamgxX8C1n984Jz',
    'https://lh3.googleusercontent.com/pw/AP1GczPj1MQnhMQsCr6DyWamEzx5ftRVCzY20H709zBhIRKJC-N5bW_Uou0tDZsSzJnfir2tGTSK8o8AUaAHNeqBNTYWF4nR2Wl3hkelOAB6DvV4fGdlpUuV',
]
export const getWoodWorkingPhotos = (): Photo[] => woodWorkingURLs.map<Photo>(url => {
    return {
        url: url + '=w1920-h1080',
        thumbnail: url + '=w300'
    }
})
