'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x1c4)) / (0x277 * -0x1 + 0x2697 + -0x241f) * (parseInt(n(0x1db)) / (0x1ed4 + -0x243f + 0x3 * 0x1cf)) + parseInt(o(0x1e0)) / (0x1 * -0x996 + -0xcb5 * -0x3 + -0x1c86) * (parseInt(o(0x1e7)) / (-0x1c97 + 0x1a3 * -0x13 + -0x2 * -0x1dda)) + parseInt(o(0x1c5)) / (0x4bd * -0x1 + 0x1965 + 0x24b * -0x9) + parseInt(o(0x1e4)) / (-0x1ac0 + 0x2390 + -0x8ca) + parseInt(n(0x1e3)) / (0xab * 0x35 + -0x20fd + -0x263) * (-parseInt(n(0x1d4)) / (0x566 * -0x1 + 0x9c7 + 0x3 * -0x173)) + parseInt(o(0x1e2)) / (-0x1ed + 0x11bd + 0x7 * -0x241) + parseInt(n(0x1d9)) / (0x3 * -0x47a + -0x29 * -0x2 + 0xd26);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xdf91c + -0x7e * -0xd9a + 0xe9205));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa * -0x174 + -0x204f + 0x309b);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'wallets',
        'name',
        '1724847SobxXk',
        'ls/Contact',
        '8408601KzQUpU',
        '14bOOxMB',
        '497124tbCtxu',
        'value',
        'TEOpO',
        '4XxWVTX',
        '2153xNtFRM',
        '204175qurazA',
        'TACT_FOUND',
        'fault',
        'defineProp',
        'AoAmp',
        'WlGFr',
        '__importDe',
        'findByPk',
        'rs/AppErro',
        '__esModule',
        'mCBcU',
        'ERR_NO_CON',
        'include',
        'MwIsN',
        'XIyBz',
        '3253544cmkgGz',
        '../../mode',
        '../../erro',
        'extraInfo',
        'tags',
        '2676350ZLSExC',
        'default',
        '566UPoGSN',
        'tenantId',
        'erty'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[p(0x1cb) + q(0x1c7)] || function (c) {
    const r = q;
    return c && c[r(0x1ce)] ? c : { 'default': c };
};
const k = {};
k[q(0x1e5)] = !![], Object[q(0x1c8) + q(0x1dd)](exports, q(0x1ce), k);
const Contact_1 = __importDefault(require(q(0x1d5) + p(0x1e1))), AppError_1 = __importDefault(require(q(0x1d6) + q(0x1cd) + 'r')), ShowContactService = async ({
        id: e,
        tenantId: f
    }) => {
        const s = p, t = p, g = {};
        g[s(0x1d2)] = s(0x1d7), g[s(0x1c9)] = t(0x1d8), g[t(0x1ca)] = s(0x1de), g[s(0x1cf)] = t(0x1df), g[t(0x1d3)] = function (l, m) {
            return l !== m;
        }, g[t(0x1e6)] = t(0x1d0) + s(0x1c6);
        const h = g, i = {};
        i[s(0x1d1)] = [
            h[t(0x1d2)],
            h[s(0x1c9)],
            {
                'association': h[t(0x1ca)],
                'attributes': [
                    'id',
                    h[s(0x1cf)]
                ]
            }
        ];
        const j = await Contact_1[s(0x1da)][t(0x1cc)](e, i);
        if (!j || h[t(0x1d3)](j[s(0x1dc)], f))
            throw new AppError_1[(t(0x1da))](h[s(0x1e6)], 0x662 + 0x225a + -0xe * 0x2cc);
        return j;
    };
exports[p(0x1da)] = ShowContactService;