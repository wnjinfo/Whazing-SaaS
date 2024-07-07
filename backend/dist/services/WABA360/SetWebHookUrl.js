'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1c6 * 0xf + -0x1cc6 + -0x9 * -0x655);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const v = [
        '61860sTmhrH',
        's/logger',
        'defineProp',
        'AwFcI',
        'logger',
        '201848bwkXfx',
        'D360-API-K',
        'fault',
        'Content-Ty',
        'url',
        '1625181ZqmlXP',
        'axios',
        'data',
        'env',
        '__importDe',
        '18WSXiKa',
        '/v1/config',
        'n/json',
        'value',
        '../../util',
        '449944ciWbcB',
        '2oSWVRq',
        'headers',
        'method',
        '6467346YLVfZJ',
        '647400WrOdzq',
        'API_URL_36',
        '360_NOT_SE',
        '9054955LJtYEA',
        'T_WEBHOOK:',
        '../../erro',
        'default',
        'applicatio',
        'error',
        'WDMtP',
        'erty',
        'post',
        '__esModule',
        'rs/AppErro',
        's/webhook',
        '4XmVlZC',
        '5346kbdLdL'
    ];
    a = function () {
        return v;
    };
    return a();
}
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x1ac)) / (-0x2 * 0xdb7 + -0xc9f + -0x6 * -0x6ad) * (parseInt(p(0x1ad)) / (-0x42 * 0x75 + 0x2b3 * -0x6 + -0x172f * -0x2)) + parseInt(o(0x1a2)) / (-0x15c * -0x1 + 0x1 * -0x1132 + 0x1 * 0xfd9) * (-parseInt(o(0x1c0)) / (-0x3 * -0x67 + -0x1 * -0x1d62 + -0x1e93)) + parseInt(p(0x1b1)) / (0x1cb5 + 0x2c * 0x23 + -0x22b4 * 0x1) + -parseInt(p(0x1b0)) / (-0x30d * -0x2 + -0x84e * -0x1 + -0xe62) + -parseInt(o(0x1b4)) / (0x190c + -0x3e * -0x49 + -0x2ab3) + -parseInt(p(0x19d)) / (0xb09 + -0x1c * -0x16 + -0xd69 * 0x1) * (-parseInt(p(0x1a7)) / (-0x133a + -0x25a7 * -0x1 + 0xb * -0x1ac)) + parseInt(p(0x1c2)) / (-0x11 * 0xdf + -0x1 * -0x1e11 + -0xf38) * (parseInt(o(0x1c1)) / (0xd3 * -0x19 + -0x1 * 0x19c3 + -0x6d * -0x6d));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x110848 + 0x9 * 0x149bd + 0x10793e));
var __importDefault = this && this[q(0x1a6) + r(0x19f)] || function (c) {
    const s = q;
    return c && c[s(0x1bd)] ? c : { 'default': c };
};
const k = {};
k[r(0x1aa)] = !![], Object[r(0x1c4) + q(0x1bb)](exports, q(0x1bd), k);
const axios_1 = __importDefault(require(r(0x1a3))), AppError_1 = __importDefault(require(q(0x1b6) + q(0x1be) + 'r')), logger_1 = require(q(0x1ab) + q(0x1c3)), SetWebHookUrl = async ({
        url: f,
        apiKey: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x1c5)] = t(0x1bc), h[u(0x1ba)] = t(0x1b8) + t(0x1a9);
        const i = h, j = process[u(0x1a5)][t(0x1b2) + '0'] + (t(0x1a8) + u(0x1bf));
        try {
            const l = {};
            l[u(0x1a1)] = f;
            const m = {};
            return m[t(0x1af)] = i[t(0x1c5)], m[u(0x1a1)] = j, m[u(0x1a4)] = l, m[u(0x1ae)] = {}, m[u(0x1ae)][t(0x19e) + 'EY'] = g, m[u(0x1ae)][t(0x1a0) + 'pe'] = i[t(0x1ba)], await (-0xce2 + -0x13d5 + 0x20b7, axios_1[t(0x1b7)])(m), !![];
        } catch (n) {
            logger_1[u(0x1c6)][t(0x1b9)](n);
            throw new AppError_1[(t(0x1b7))](t(0x1b3) + t(0x1b5) + '\x20' + n);
        }
    };
exports[r(0x1b7)] = SetWebHookUrl;