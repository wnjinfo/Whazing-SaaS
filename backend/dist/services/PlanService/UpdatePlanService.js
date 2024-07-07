'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x9d)) / (0x661 + -0x755 * -0x2 + -0x150a) * (-parseInt(q(0x9c)) / (0x3c7 * -0x3 + -0x2273 + 0x16e5 * 0x2)) + -parseInt(r(0xaa)) / (-0x10c9 + -0x100f * -0x1 + 0x7 * 0x1b) + parseInt(q(0xa5)) / (0x1 * -0x1801 + -0xfd9 + 0x27de) * (parseInt(q(0x9a)) / (-0x231b + 0x11d8 + -0x9e * -0x1c)) + parseInt(q(0x90)) / (0x3 * -0x611 + 0xed1 + 0x368) + -parseInt(r(0xad)) / (-0x1bc0 + -0x75 * 0x54 + 0x422b) + parseInt(q(0x95)) / (-0x2a0 + 0x119d + -0x7 * 0x223) + -parseInt(q(0xa8)) / (-0x1 * -0x1a81 + 0x11f2 * 0x2 + -0x3e5c) * (-parseInt(q(0x9f)) / (-0x1a4d + -0x137e + 0x3 * 0xf47));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x138ac1 + 0xad * -0x1686 + 0x7cc64));
var __importDefault = this && this[s(0x99) + s(0xab)] || function (c) {
    const u = s;
    return c && c[u(0x91)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x8 * -0x92 + 0x4cd * 0x4 + -0x5 * 0x2d1);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[t(0x98)] = !![], Object[s(0xac) + s(0x97)](exports, s(0x91), k);
const AppError_1 = __importDefault(require(t(0xa9) + s(0xa3) + 'r')), Plan_1 = __importDefault(require(s(0xa4) + s(0x96))), UpdatePlanService = async e => {
        const v = s, w = s, f = {};
        f[v(0x94)] = v(0x9e) + w(0xa0);
        const g = f, {
                id: h,
                name: i,
                maxUsers: j,
                maxConnections: l,
                value: m,
                isPublic: n
            } = e, o = await Plan_1[v(0xa7)][w(0x9b)](h);
        if (!o)
            throw new AppError_1[(w(0xa7))](g[w(0x94)], -0x1 * -0x25 + -0x1667 + 0x12 * 0x153);
        const p = {};
        return p[v(0x8f)] = i, p[w(0xa2)] = j, p[w(0x93) + w(0x92)] = l, p[v(0x98)] = m, p[w(0xa1)] = n, await o[w(0xa6)](p), o;
    };
exports[s(0xa7)] = UpdatePlanService;
function a() {
    const x = [
        'findByPk',
        '470026CRIBZU',
        '4pRcmXN',
        'ERR_NO_PLA',
        '85710ZyYFre',
        'N_FOUND',
        'isPublic',
        'maxUsers',
        'rs/AppErro',
        '../../mode',
        '4nHkJuW',
        'update',
        'default',
        '1413MZUGos',
        '../../erro',
        '2297763ZsziMO',
        'fault',
        'defineProp',
        '1999725lqIygx',
        'name',
        '7746006wYOicx',
        '__esModule',
        'ions',
        'maxConnect',
        'CvFrv',
        '1141544OiWeWL',
        'ls/Plan',
        'erty',
        'value',
        '__importDe',
        '32850MYHwQf'
    ];
    a = function () {
        return x;
    };
    return a();
}