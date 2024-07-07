'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0xb7)) / (0x36 * -0xb5 + -0x8de + 0x447 * 0xb) * (parseInt(r(0xb8)) / (-0x200e + 0x18d * -0xd + 0x3439)) + parseInt(q(0xb9)) / (0xe03 + 0x240d + -0x10af * 0x3) + parseInt(r(0xae)) / (0x1 * 0x9f5 + -0x1 * -0x1cb5 + -0x26a6) + -parseInt(q(0xb5)) / (0x1 * 0x130a + 0x885 + -0x1b8a) + parseInt(q(0xc5)) / (0x1b2e + 0x57 * 0x3d + -0x2fe3) + parseInt(r(0xbc)) / (-0xe * 0x259 + -0x7cf * 0x3 + 0x1b * 0x216) + -parseInt(r(0xba)) / (0xba0 + 0x642 * 0x4 + -0x20 * 0x125);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3 * 0x1431 + 0x735ce * 0x1 + 0x17bf * -0x17));
var __importDefault = this && this[s(0xc2) + t(0xc0)] || function (c) {
    const u = t;
    return c && c[u(0xb0)] ? c : { 'default': c };
};
const k = {};
function a() {
    const x = [
        '__importDe',
        'update',
        'pzFKa',
        '165294vMtJbV',
        'defineProp',
        '../../erro',
        'tenantId',
        '2017472dNdQHm',
        'erty',
        '__esModule',
        'TING_FOUND',
        'findOne',
        'where',
        '../../mode',
        '2446835pkqdwR',
        'default',
        '76OhmLKM',
        '2384DqmSyd',
        '611580nuhFOl',
        '278712HGpgOO',
        'ls/Setting',
        '1373561eULHos',
        'ERR_NO_SET',
        'rs/AppErro',
        'value',
        'fault',
        'key'
    ];
    a = function () {
        return x;
    };
    return a();
}
k[t(0xbf)] = !![], Object[s(0xab) + t(0xaf)](exports, t(0xb0), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x71d + 0x190b + -0x1f7d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0xac) + t(0xbe) + 'r')), Setting_1 = __importDefault(require(t(0xb4) + t(0xbb))), UpdateSettingService = async ({
        key: g,
        value: h,
        tenantId: i
    }) => {
        const v = s, w = s, j = {};
        j[v(0xc4)] = w(0xbd) + v(0xb1);
        const l = j, m = {};
        m[v(0xc1)] = g, m[v(0xad)] = i;
        const n = {};
        n[v(0xb3)] = m;
        const o = await Setting_1[w(0xb6)][w(0xb2)](n);
        if (!o)
            throw new AppError_1[(v(0xb6))](l[w(0xc4)], -0x1100 + 0x1fe2 + -0xd4e * 0x1);
        const p = {};
        return p[w(0xbf)] = h, await o[v(0xc3)](p), o;
    };
exports[t(0xb6)] = UpdateSettingService;