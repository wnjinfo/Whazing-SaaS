'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x824 * -0x2 + 0x3e * -0x83 + 0x31a9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1aa)) / (-0x1686 + -0xd * -0x2f5 + -0xfea) + parseInt(l(0x1b8)) / (-0x1 * 0x2467 + 0xd1f * -0x2 + -0x175 * -0x2b) * (-parseInt(m(0x1a7)) / (0x1257 + 0x231b * 0x1 + -0x1 * 0x356f)) + -parseInt(m(0x1be)) / (-0x1a6b + -0x6a0 + 0x5b * 0x5d) * (parseInt(l(0x1b9)) / (-0x5 * 0x63f + 0x8d0 + -0x1670 * -0x1)) + -parseInt(m(0x1c3)) / (0x3ff * 0x8 + -0x1 * 0x2fb + -0x1cf7) * (parseInt(l(0x1b3)) / (0x2679 + -0x216d + -0x505)) + parseInt(l(0x1a8)) / (0xee1 + -0x138f * -0x1 + -0x5bc * 0x6) + parseInt(m(0x1bd)) / (-0x1a * -0x1f + -0x23ac + -0x208f * -0x1) * (-parseInt(m(0x1c1)) / (-0xfe * -0x15 + -0x410 + 0x3 * -0x594)) + parseInt(l(0x1b4)) / (-0x50 * 0x17 + 0x1e2 + -0x559 * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3df2f + -0x1 * -0x3259 + 0x3bf31));
function a() {
    const s = [
        '5514kBSMcb',
        '3865024ySYOHc',
        'RkAoJ',
        '102907dsdCRd',
        'urs',
        'inessHours',
        '__importDe',
        'rs/AppErro',
        'attributes',
        'erty',
        'value',
        'ERR_NO_TEN',
        '21KqToNB',
        '25173610dwlYUr',
        'findByPk',
        'default',
        '../../erro',
        '796YUTeja',
        '5DmfATk',
        'ANT_FOUND',
        'messageBus',
        '../../mode',
        '36CKXBzV',
        '671276BfCuGj',
        'ls/Tenant',
        'jKWOe',
        '1498310AmVeGr',
        'businessHo',
        '1315758nKxQAu',
        'defineProp',
        'fault',
        '__esModule',
        'sxEGr'
    ];
    a = function () {
        return s;
    };
    return a();
}
var __importDefault = this && this[n(0x1ad) + n(0x1c5)] || function (c) {
    const p = o;
    return c && c[p(0x1c6)] ? c : { 'default': c };
};
const k = {};
k[n(0x1b1)] = !![], Object[o(0x1c4) + o(0x1b0)](exports, o(0x1c6), k);
const Tenant_1 = __importDefault(require(n(0x1bc) + o(0x1bf))), AppError_1 = __importDefault(require(n(0x1b7) + n(0x1ae) + 'r')), ShowBusinessHoursAndMessageService = async ({tenantId: e}) => {
        const q = o, r = o, f = {};
        f[q(0x1c7)] = r(0x1c2) + q(0x1ab), f[q(0x1a9)] = q(0x1bb) + q(0x1ac), f[r(0x1c0)] = r(0x1b2) + r(0x1ba);
        const g = f, h = {};
        h[q(0x1af)] = [
            g[q(0x1c7)],
            g[q(0x1a9)]
        ];
        const i = await Tenant_1[r(0x1b6)][r(0x1b5)](e, h);
        if (!i)
            throw new AppError_1[(q(0x1b6))](g[r(0x1c0)], 0x11d0 + 0x91c + -0x1958);
        return i;
    };
exports[o(0x1b6)] = ShowBusinessHoursAndMessageService;