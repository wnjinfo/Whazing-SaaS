'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0xa3f + -0x1 * 0x185b + 0xfad * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1b6)) / (-0x1f * 0x35 + -0x2575 + 0x2be1) * (parseInt(o(0x196)) / (-0x16b7 + -0x2 * -0x11cf + -0xce5)) + -parseInt(o(0x195)) / (0x1 * -0x586 + 0x11d7 * -0x1 + 0x1760) + -parseInt(o(0x1b5)) / (-0x1e18 + 0x234 + 0x1be8) * (parseInt(p(0x1ac)) / (-0xa * 0x2d7 + -0x2039 + -0x1e52 * -0x2)) + parseInt(o(0x1a2)) / (0x860 + -0x1e15 + 0x15bb) * (parseInt(o(0x1b0)) / (0x1c57 + -0x1ced + 0x9d)) + parseInt(o(0x19a)) / (-0x4e7 * 0x6 + 0x249 + 0x11 * 0x199) + -parseInt(o(0x1af)) / (-0x60 * 0x6 + -0xd2 + 0x31b) + parseInt(p(0x197)) / (-0x214c + -0x2079 + 0x41cf);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x12e8f + -0x9781 * -0x5 + 0x8415));
var __importDefault = this && this[q(0x1b1) + q(0x1a5)] || function (c) {
    const s = r;
    return c && c[s(0x191)] ? c : { 'default': c };
};
const k = {};
function a() {
    const v = [
        'method',
        '1748061uzzNWa',
        '2100hjfWrq',
        '__importDe',
        's/logger',
        'headers',
        'Content-Ty',
        '47176ZlWOrC',
        '85pSnDrd',
        'default',
        'D360-API-K',
        'env',
        'axios',
        'logger',
        '__esModule',
        'url',
        'defineProp',
        'text',
        '497970SlAdVy',
        '2586HXhHeL',
        '4551500xhQdxx',
        'erty',
        'patch',
        '900440QkDvUT',
        'ATnzu',
        '/about',
        '/v1/settin',
        'data',
        'API_URL_36',
        'value',
        '../../util',
        '5064YLvVap',
        '360_NOT_SE',
        'n/json',
        'fault',
        'rs/AppErro',
        'applicatio',
        'T_ABOUT:\x20',
        'jMiKI',
        'error',
        'gs/profile',
        '85CzhIKQ',
        '../../erro'
    ];
    a = function () {
        return v;
    };
    return a();
}
k[r(0x1a0)] = !![], Object[q(0x193) + r(0x198)](exports, r(0x191), k);
const axios_1 = __importDefault(require(r(0x1ba))), AppError_1 = __importDefault(require(q(0x1ad) + r(0x1a6) + 'r')), logger_1 = require(q(0x1a1) + r(0x1b2)), SetAboutProfileInfo = async ({
        text: f,
        apiKey: g
    }) => {
        const t = q, u = q, h = {};
        h[t(0x1a9)] = u(0x199), h[u(0x19b)] = u(0x1a7) + t(0x1a4);
        const i = h, j = process[t(0x1b9)][t(0x19f) + '0'] + (t(0x19d) + u(0x1ab) + u(0x19c));
        try {
            const l = {};
            l[t(0x194)] = f;
            const m = {};
            return m[t(0x1ae)] = i[t(0x1a9)], m[u(0x192)] = j, m[u(0x19e)] = l, m[u(0x1b3)] = {}, m[u(0x1b3)][u(0x1b8) + 'EY'] = g, m[u(0x1b3)][t(0x1b4) + 'pe'] = i[u(0x19b)], await (0x95 * -0xb + -0x7fd * -0x3 + -0x1190, axios_1[u(0x1b7)])(m), !![];
        } catch (n) {
            logger_1[t(0x1bb)][u(0x1aa)](n);
            throw new AppError_1[(u(0x1b7))](t(0x1a3) + u(0x1a8) + n);
        }
    };
exports[r(0x1b7)] = SetAboutProfileInfo;