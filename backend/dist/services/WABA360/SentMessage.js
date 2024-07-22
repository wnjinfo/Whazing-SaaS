'use strict';
const r = b, s = b;
function a() {
    const w = [
        '4KfMYaq',
        'Content-Ty',
        'url',
        'defineProp',
        '../../erro',
        'n/json',
        'env',
        '/v1/messag',
        'applicatio',
        'logger',
        'D360-API-K',
        'data',
        'error',
        'NT_MESSAGE',
        '__importDe',
        'API_URL_36',
        'EjmHo',
        '3852611wYhanV',
        'mxmvS',
        'erty',
        '__esModule',
        '398590ugcvMF',
        '7080wWPfBs',
        '2181054YNYjwk',
        'fault',
        '267xXzjFR',
        'value',
        'method',
        '1103776xAhFKw',
        '360_NOT_SE',
        '329735rstPvl',
        'axios',
        'rs/AppErro',
        '1906848JpKrkL',
        'post',
        'headers',
        's/logger',
        'default',
        '../../util'
    ];
    a = function () {
        return w;
    };
    return a();
}
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x164)) / (-0x4 * -0x33a + -0x7bc + 0x31 * -0x1b) + parseInt(q(0x15c)) / (0x2f3 * 0x5 + 0x24df * -0x1 + 0x1622) * (parseInt(q(0x15f)) / (-0x602 * 0x1 + 0xfcc + -0x9c7 * 0x1)) + parseInt(q(0x16d)) / (-0xc2a + 0x1 * 0x5f9 + 0x7 * 0xe3) * (parseInt(p(0x15b)) / (0x179 + -0xb7a + 0xa06)) + -parseInt(p(0x15d)) / (-0x88d * -0x1 + -0x728 * -0x5 + -0xec5 * 0x3) + parseInt(p(0x157)) / (-0xeb4 + 0xfd3 + -0x8c * 0x2) + -parseInt(p(0x162)) / (-0x1d3e + -0x243a + 0x2 * 0x20c0) + parseInt(p(0x167)) / (0x150e + -0x227b + 0xd76);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x273a1 * 0x1 + 0x7 * 0xfc43 + -0x460c7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xe * 0x27f + 0x1448 + -0x3 * -0x553);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[r(0x154) + r(0x15e)] || function (c) {
    const t = s;
    return c && c[t(0x15a)] ? c : { 'default': c };
};
const k = {};
k[r(0x160)] = !![], Object[s(0x170) + s(0x159)](exports, r(0x15a), k);
const axios_1 = __importDefault(require(r(0x165))), AppError_1 = __importDefault(require(s(0x171) + r(0x166) + 'r')), logger_1 = require(r(0x16c) + r(0x16a)), SentMessage = async ({
        message: f,
        apiKey: g
    }) => {
        const u = r, v = s, h = {};
        h[u(0x156)] = v(0x168), h[u(0x158)] = u(0x175) + v(0x172);
        const i = h, j = process[v(0x173)][u(0x155) + '0'] + (u(0x174) + 'es');
        try {
            const l = { ...f }, m = {};
            m[u(0x161)] = i[u(0x156)], m[v(0x16f)] = j, m[u(0x151)] = l, m[v(0x169)] = {}, m[v(0x169)][u(0x150) + 'EY'] = g, m[v(0x169)][v(0x16e) + 'pe'] = i[v(0x158)];
            const n = await (0x285 * -0x8 + 0x1613 + -0x1eb * 0x1, axios_1[v(0x16b)])(m);
            return n[v(0x151)];
        } catch (o) {
            logger_1[u(0x14f)][v(0x152)](o);
            throw new AppError_1[(u(0x16b))](u(0x163) + u(0x153) + ':\x20' + o);
        }
    };
exports[r(0x16b)] = SentMessage;