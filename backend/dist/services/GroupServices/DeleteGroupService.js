'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x129)) / (-0x1d14 + 0x1 * 0x6ee + -0x6b * -0x35) + parseInt(p(0x138)) / (-0x2278 * -0x1 + -0x1 * -0xa39 + 0x9 * -0x4f7) + parseInt(p(0x13d)) / (0x3de + -0x1 * -0x1445 + -0x1820) * (-parseInt(p(0x12c)) / (0x12c8 + -0x7fb * 0x3 + 0x52d)) + -parseInt(o(0x139)) / (-0xaea * 0x1 + 0x202a * 0x1 + -0x153b) + -parseInt(p(0x132)) / (0x1 * 0x1801 + 0x126d + -0x2a68) * (-parseInt(o(0x133)) / (0x15a6 + 0x1634 + -0x2bd3 * 0x1)) + -parseInt(o(0x124)) / (-0x1331 + 0x87c + 0xabd) * (-parseInt(p(0x12b)) / (-0x26a9 + 0x16c2 + 0x5 * 0x330)) + parseInt(p(0x122)) / (0x669 + 0x176e + -0x1dcd);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4258f + 0x6d * -0x1009 + 0x17ace5));
function a() {
    const v = [
        'UP_FOUND',
        '3126mlefEn',
        'AGOaJ',
        '../../mode',
        'where',
        '43660eoHvbE',
        'ls/Group',
        '8PBRcIs',
        'NO_EXISTS',
        'erty',
        'bsXtn',
        '__esModule',
        '1651204WmTGUM',
        'findOne',
        '11567403tlgoIf',
        '1408OEhpbp',
        'default',
        'defineProp',
        'destroy',
        'ERR_GRUOP_',
        'value',
        '28698ynGrXi',
        '1799JgzbDU',
        'rs/AppErro',
        '../../erro',
        'ERR_NO_GRO',
        'tenantId',
        '3057042glGHWR',
        '5985060oNrijm',
        'fault',
        '__importDe'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x13b) + r(0x13a)] || function (c) {
    const s = r;
    return c && c[s(0x128)] ? c : { 'default': c };
};
const k = {};
k[q(0x131)] = !![], Object[r(0x12e) + r(0x126)](exports, q(0x128), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x11b * 0x18 + -0x2669 * -0x1 + 0xcc3 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(q(0x135) + q(0x134) + 'r')), Group_1 = __importDefault(require(q(0x13f) + q(0x123))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0x13e)] = t(0x136) + t(0x13c), h[u(0x127)] = u(0x130) + u(0x125);
        const i = h, j = {};
        j['id'] = f, j[u(0x137)] = g;
        const l = {};
        l[t(0x140)] = j;
        const m = await Group_1[t(0x12d)][t(0x12a)](l);
        if (!m)
            throw new AppError_1[(u(0x12d))](i[t(0x13e)], 0x21d3 + -0xafd + -0x6 * 0x38b);
        try {
            await m[t(0x12f)]();
        } catch (n) {
            throw new AppError_1[(t(0x12d))](i[t(0x127)], 0x223d + 0x2631 * 0x1 + -0xbcf * 0x6);
        }
    };
exports[r(0x12d)] = DeleteGroupService;