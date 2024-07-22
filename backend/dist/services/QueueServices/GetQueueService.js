'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0xd4)) / (0x1 * 0x18e + 0x1143 * -0x2 + 0x1 * 0x20f9) * (parseInt(l(0xcc)) / (0x7ec + 0x159 * -0x13 + 0x11b1)) + parseInt(l(0xd7)) / (0x49e * 0x4 + 0x3b * 0x7e + -0x2f7f) * (-parseInt(l(0xce)) / (-0x1 * 0x134f + -0xcb * 0x10 + -0x5 * -0x667)) + parseInt(l(0xc9)) / (-0x67d * 0x3 + -0x16a7 + 0x2a23) + -parseInt(m(0xdc)) / (-0x1 * 0x2680 + -0x1294 + 0x1 * 0x391a) + parseInt(l(0xd1)) / (0xd * 0x28d + 0x98 + 0xb3e * -0x3) * (-parseInt(m(0xc8)) / (-0x211d + 0x15 * -0x10f + -0x3760 * -0x1)) + parseInt(l(0xe0)) / (-0x2 * 0x6f3 + 0xf * -0x10c + -0x1b * -0x119) * (parseInt(l(0xcb)) / (-0x972 + -0x1b12 + 0x248e)) + parseInt(l(0xdd)) / (-0x14cd + 0x21a1 * -0x1 + 0x3679) * (parseInt(m(0xd6)) / (0x24f5 * -0x1 + 0x238e + 0x173));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x651e3 * -0x4 + 0x873a6 + -0x142781));
var __importDefault = this && this[n(0xd0) + n(0xdb)] || function (c) {
    const p = n;
    return c && c[p(0xda)] ? c : { 'default': c };
};
function a() {
    const s = [
        'Mytgf',
        '14643hUOVdp',
        'findByPk',
        '../../erro',
        '197848kZzXTa',
        '8133340NEPLEn',
        '../../mode',
        '500BKGWkQ',
        '1060856vVWyah',
        'ERR_NO_QUE',
        '828kLbsxs',
        'defineProp',
        '__importDe',
        '112XPUxEN',
        'default',
        'ls/Queue',
        '1pQhTrP',
        'UE_FOUND',
        '120VWUSkS',
        '24267JrwQRt',
        'value',
        'erty',
        '__esModule',
        'fault',
        '2447844snNPek',
        '2409308jGesFh',
        'rs/AppErro'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x13c7 + 0x73 * 0x3b + -0x5f3);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[o(0xd8)] = !![], Object[o(0xcf) + o(0xd9)](exports, o(0xda), k);
const AppError_1 = __importDefault(require(n(0xc7) + n(0xde) + 'r')), Queue_1 = __importDefault(require(o(0xca) + n(0xd3))), GetQueueService = async d => {
        const q = n, r = n, e = {};
        e[q(0xdf)] = q(0xcd) + r(0xd5);
        const f = e, g = await Queue_1[r(0xd2)][r(0xe1)](d);
        if (!g)
            throw new AppError_1[(q(0xd2))](f[q(0xdf)], 0x237 * -0xc + 0x1 * 0x98f + -0x17 * -0xcf);
        return g;
    };
exports[o(0xd2)] = GetQueueService;