'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x1db)) / (0x1165 * 0x1 + 0x23ad + -0x3511) + parseInt(n(0x1ee)) / (-0x7 * 0x3d9 + 0x1619 * 0x1 + 0x5 * 0xf8) * (-parseInt(m(0x1ec)) / (0x2064 + 0xb1 * -0x2b + -0x71 * 0x6)) + -parseInt(n(0x1e8)) / (0xd6 * 0x11 + -0x2 * -0x244 + -0x12ba) * (-parseInt(n(0x1d2)) / (-0x1da5 * -0x1 + 0x1 * -0x1798 + -0x608)) + parseInt(n(0x1e1)) / (-0x229e + 0x7 * -0x32 + 0x2402) + -parseInt(n(0x1d0)) / (0x1573 + 0x1 * -0x1a4d + 0x1 * 0x4e1) + parseInt(n(0x1f6)) / (-0x1 * -0x4a3 + -0x13db + 0x3d0 * 0x4) * (parseInt(n(0x1fa)) / (0x17f * 0xb + -0x2273 * 0x1 + 0x1207)) + -parseInt(n(0x1d3)) / (0x23b * -0x6 + -0x9d0 * -0x2 + -0x31a * 0x2) * (-parseInt(m(0x1f1)) / (0x2505 + -0x265b + 0x161 * 0x1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1aaced + -0xa3d29 + 0x5bdf * -0x8));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x135f + -0x1db5 + 0xc26);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[o(0x1f3) + p(0x1eb)] || function (c) {
    const q = o;
    return c && c[q(0x1e0)] ? c : { 'default': c };
};
const k = {};
function a() {
    const t = [
        'axios',
        'env',
        'fault',
        '51DUKiYZ',
        'FqKvw',
        '37566PomZIF',
        'rs/AppErro',
        'n/json',
        '1463HmkmOj',
        'post',
        '__importDe',
        'T_BUSINESS',
        'applicatio',
        '8532136yLcyqs',
        'data',
        '../../util',
        'defineProp',
        '9wisPbi',
        '9152409qdBpIi',
        'D360-API-K',
        '6261335iKFapU',
        '33870UYdCjp',
        'Content-Ty',
        's/profile',
        'API_URL_36',
        'erty',
        '/v1/settin',
        'gs/busines',
        'error',
        '319089PKyfFQ',
        'QXCRo',
        '../../erro',
        '360_NOT_SE',
        'headers',
        '__esModule',
        '394008HZBzTQ',
        'url',
        's/logger',
        'default',
        'value',
        'method',
        'logger',
        '4KKcZET'
    ];
    a = function () {
        return t;
    };
    return a();
}
k[p(0x1e5)] = !![], Object[p(0x1f9) + o(0x1d7)](exports, o(0x1e0), k);
const axios_1 = __importDefault(require(o(0x1e9))), AppError_1 = __importDefault(require(p(0x1dd) + o(0x1ef) + 'r')), logger_1 = require(p(0x1f8) + o(0x1e3)), SetBusinessProfile = async ({
        data: e,
        apiKey: f
    }) => {
        const r = o, s = p, g = {};
        g[r(0x1ed)] = s(0x1f2), g[r(0x1dc)] = s(0x1f5) + s(0x1f0);
        const h = g, i = process[r(0x1ea)][r(0x1d6) + '0'] + (s(0x1d8) + r(0x1d9) + r(0x1d5));
        try {
            const j = {};
            return j[s(0x1e6)] = h[s(0x1ed)], j[s(0x1e2)] = i, j[s(0x1f7)] = e, j[r(0x1df)] = {}, j[r(0x1df)][r(0x1d1) + 'EY'] = f, j[r(0x1df)][s(0x1d4) + 'pe'] = h[r(0x1dc)], await (-0x654 + 0x1 * -0x26dd + 0x2d31, axios_1[s(0x1e4)])(j), !![];
        } catch (l) {
            logger_1[r(0x1e7)][s(0x1da)](l);
            throw new AppError_1[(s(0x1e4))](r(0x1de) + s(0x1f4) + ':\x20' + l);
        }
    };
exports[p(0x1e4)] = SetBusinessProfile;