'use strict';
const q = b, r = b;
function a() {
    const v = [
        '1353728tAAYje',
        'NtzuN',
        'value',
        'ERR_NO_GRO',
        'default',
        'NO_EXISTS',
        '1799586gweKxV',
        'ERR_GRUOP_',
        'findOne',
        '4456doalne',
        'destroy',
        '__esModule',
        '794982ITVwrl',
        '../../mode',
        '1795635kOMYym',
        '__importDe',
        'defineProp',
        '133393pUaISK',
        '../../erro',
        'fault',
        'UP_FOUND',
        'erty',
        'where',
        'ls/Group',
        'rs/AppErro',
        '77222tniald',
        '8435uFDfWK',
        'uJWul',
        'tenantId'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(o(0x10d)) / (0x17c * -0x13 + 0x2 * -0x91d + 0x2e6f * 0x1) + parseInt(o(0xf8)) / (-0x1192 + -0xe09 + 0x1f9d) + -parseInt(p(0x108)) / (0x183a + 0x43 * 0x71 + -0x10e * 0x33) + -parseInt(p(0xfc)) / (-0x296 * -0x3 + -0x1 * 0xdd5 + 0x617) + -parseInt(o(0x10a)) / (0x337 + 0x1 * -0x1aad + 0x177b) + parseInt(p(0x102)) / (0xcd5 + 0xf6a * -0x2 + 0x1205) + parseInt(p(0xf9)) / (-0x1bc5 + 0x259b * 0x1 + -0x5d * 0x1b) * (parseInt(o(0x105)) / (0x2 * 0x57 + 0x5 * 0x2 + 0x4 * -0x2c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x51ac2 + 0x4 * 0x145e7 + -0x77107));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x84d * -0x4 + 0x20f + -0x224e * 0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[q(0x10b) + r(0x10f)] || function (c) {
    const s = q;
    return c && c[s(0x107)] ? c : { 'default': c };
};
const k = {};
k[r(0xfe)] = !![], Object[q(0x10c) + r(0x111)](exports, q(0x107), k);
const AppError_1 = __importDefault(require(q(0x10e) + r(0xf7) + 'r')), Group_1 = __importDefault(require(r(0x109) + q(0xf6))), DeleteGroupService = async ({
        id: f,
        tenantId: g
    }) => {
        const t = r, u = r, h = {};
        h[t(0xfa)] = u(0xff) + u(0x110), h[t(0xfd)] = t(0x103) + t(0x101);
        const i = h, j = {};
        j['id'] = f, j[u(0xfb)] = g;
        const l = {};
        l[t(0xf5)] = j;
        const m = await Group_1[u(0x100)][u(0x104)](l);
        if (!m)
            throw new AppError_1[(u(0x100))](i[u(0xfa)], 0x394 + -0x195f + 0xc1 * 0x1f);
        try {
            await m[u(0x106)]();
        } catch (n) {
            throw new AppError_1[(t(0x100))](i[u(0xfd)], -0x1bc3 + 0x1dd + 0x1b7a);
        }
    };
exports[q(0x100)] = DeleteGroupService;