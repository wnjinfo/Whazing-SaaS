'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x16e)) / (-0xa23 + -0x6e7 * -0x5 + 0x11 * -0x16f) + parseInt(p(0x15c)) / (-0xa5b * -0x2 + 0x1 * -0xf4f + -0x565) * (-parseInt(p(0x160)) / (-0x2445 + -0x1169 * 0x2 + 0x471a)) + -parseInt(o(0x166)) / (0x457 * -0x9 + 0xcf4 + 0x2e7 * 0x9) + parseInt(p(0x16b)) / (-0x1a * 0x16 + 0x16e + 0xd3) + parseInt(p(0x148)) / (-0x11ec * 0x2 + 0x642 + 0x1d9c) * (-parseInt(p(0x151)) / (0x11a5 + -0x1 * -0x1ad7 + -0x2c75)) + -parseInt(o(0x16f)) / (0x5 * 0xc5 + -0x17fd + 0x4 * 0x50b) + -parseInt(p(0x158)) / (-0x8df + 0x1d1b + 0x1433 * -0x1) * (-parseInt(p(0x167)) / (-0x1db3 * 0x1 + 0x204e + 0x3 * -0xdb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x39956 + -0x47 * -0x1835 + 0xf6 * 0x3ee));
var __importDefault = this && this[q(0x15d) + r(0x14b)] || function (c) {
    const s = r;
    return c && c[s(0x165)] ? c : { 'default': c };
};
const k = {};
k[r(0x155)] = !![], Object[q(0x16a) + r(0x163)](exports, r(0x165), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x11b7 * 0x1 + 0x125 * -0x6 + 0x19db * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        'Content-Ty',
        'API_URL_36',
        '7mJJucq',
        'env',
        'headers',
        'patch',
        'value',
        'NlMwE',
        'logger',
        '7043157ZycEDS',
        'gs/profile',
        '../../erro',
        'method',
        '2uzCtcq',
        '__importDe',
        '360_NOT_SE',
        'error',
        '2248881wljYPf',
        '/v1/settin',
        '/about',
        'erty',
        'default',
        '__esModule',
        '1510448fyEGZs',
        '20IgXCkf',
        'url',
        'text',
        'defineProp',
        '1093400TvADrC',
        'kNmAi',
        'data',
        '384872NoHHhw',
        '216368sWZZky',
        'axios',
        'applicatio',
        'D360-API-K',
        '3376872ttpupe',
        'T_ABOUT:\x20',
        's/logger',
        'fault',
        '../../util',
        'n/json',
        'rs/AppErro'
    ];
    a = function () {
        return v;
    };
    return a();
}
const axios_1 = __importDefault(require(q(0x170))), AppError_1 = __importDefault(require(r(0x15a) + q(0x14e) + 'r')), logger_1 = require(q(0x14c) + q(0x14a)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = q, u = r, h = {};
        h[t(0x156)] = t(0x154), h[u(0x16c)] = u(0x146) + u(0x14d);
        const i = h, j = process[t(0x152)][t(0x150) + '0'] + (t(0x161) + u(0x159) + t(0x162));
        try {
            const l = {};
            l[u(0x169)] = f;
            const m = {};
            return m[t(0x15b)] = i[t(0x156)], m[t(0x168)] = j, m[t(0x16d)] = l, m[t(0x153)] = {}, m[t(0x153)][u(0x147) + 'EY'] = g, m[t(0x153)][t(0x14f) + 'pe'] = i[t(0x16c)], await (0xbfb * -0x1 + 0x42 + 0xbb9, axios_1[t(0x164)])(m), !![];
        } catch (n) {
            logger_1[t(0x157)][t(0x15f)](n);
            throw new AppError_1[(u(0x164))](t(0x15e) + u(0x149) + n);
        }
    };
exports[q(0x164)] = SetAboutProfileInfo;