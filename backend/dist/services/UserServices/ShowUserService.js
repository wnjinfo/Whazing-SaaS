'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(n(0x122)) / (0x22df + 0x1739 + 0x3 * -0x135d) * (parseInt(o(0x132)) / (0x24e0 + 0x136f + -0x1d * 0x1f1)) + -parseInt(n(0x12f)) / (-0xa3 * 0x25 + 0x7cc + 0xfc6) * (-parseInt(o(0x142)) / (-0x12d * -0x9 + -0x591 + -0x500)) + parseInt(n(0x121)) / (-0xc4b + 0xade * 0x1 + 0x172) * (-parseInt(n(0x148)) / (-0x79 * 0x1 + 0xd0 + 0x9 * -0x9)) + parseInt(o(0x133)) / (-0x1d6 * -0xb + -0x1f8 + 0x3 * -0x611) + parseInt(n(0x137)) / (-0x1 * 0x212f + -0x1 * 0xdc1 + 0x5df * 0x8) * (-parseInt(o(0x13b)) / (-0x23ed + 0xf * -0xf1 + 0x3215)) + parseInt(n(0x141)) / (0x134 + -0x23f9 + -0x4f9 * -0x7) * (parseInt(o(0x13e)) / (-0x3 * 0x1cf + -0x13 * -0xc9 + -0x973)) + -parseInt(n(0x12b)) / (-0x20f1 + 0x22 * 0x95 + -0x1f * -0x6d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x44e73 + -0x11c * -0x525 + 0x1607 * 0x4));
var __importDefault = this && this[p(0x144) + q(0x123)] || function (c) {
    const r = p;
    return c && c[r(0x143)] ? c : { 'default': c };
};
function a() {
    const u = [
        '22Wesimp',
        '5637121jeaXCg',
        'defineProp',
        'profile',
        'ygWKF',
        '17240uNMUKd',
        'tenantId',
        'ls/User',
        'ls/Queue',
        '3879jqVazx',
        'R_FOUND',
        'queues',
        '555665xgHZJw',
        'tokenVersi',
        'ERR_NO_USE',
        '180slVtVj',
        '85364mmbsNX',
        '__esModule',
        '__importDe',
        'findByPk',
        'include',
        'erty',
        '343206WZBhTl',
        'email',
        'default',
        'urKXG',
        '20IRymFt',
        '71561egioDQ',
        'fault',
        'value',
        'bdYSN',
        'uIhQy',
        '../../erro',
        'rs/AppErro',
        'Qwgme',
        'KRUND',
        '4201212JHbCci',
        'sfQhs',
        'name',
        '../../mode',
        '177grFoYz',
        'attributes',
        'RDoBR'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7cc + -0x15 * -0x4e + -0x7 * -0x5c);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[p(0x124)] = !![], Object[p(0x134) + p(0x147)](exports, p(0x143), k);
const User_1 = __importDefault(require(q(0x12e) + q(0x139))), AppError_1 = __importDefault(require(p(0x127) + p(0x128) + 'r')), Queue_1 = __importDefault(require(p(0x12e) + q(0x13a))), ShowUserService = async (e, f) => {
        const s = q, t = p, g = {};
        g[s(0x125)] = s(0x12d), g[s(0x129)] = s(0x11e), g[s(0x12a)] = s(0x135), g[s(0x131)] = s(0x13f) + 'on', g[t(0x12c)] = s(0x138), g[t(0x126)] = s(0x13d), g[t(0x120)] = function (l, m) {
            return l !== m;
        }, g[t(0x136)] = t(0x140) + s(0x13c);
        const h = g, i = {};
        i[s(0x130)] = [
            h[t(0x125)],
            'id',
            h[s(0x129)],
            h[s(0x12a)],
            h[t(0x131)],
            h[s(0x12c)]
        ], i[t(0x146)] = [{
                'model': Queue_1[t(0x11f)],
                'as': h[s(0x126)]
            }];
        const j = await User_1[t(0x11f)][t(0x145)](e, i);
        if (!j || h[s(0x120)](j[t(0x138)], f))
            throw new AppError_1[(t(0x11f))](h[s(0x136)], -0x1ad9 + 0x2 * 0x45e + 0x13b1);
        return j;
    };
exports[p(0x11f)] = ShowUserService;