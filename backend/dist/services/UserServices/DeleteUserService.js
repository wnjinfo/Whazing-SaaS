'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * -0xbf + 0x135d + -0x1 * 0xf92);
        let h = e[f];
        return h;
    }, b(c, d);
}
const t = b, u = b;
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(r(0xf4)) / (-0x2e * 0xd4 + -0x1e33 + -0x11a * -0x3e) + -parseInt(s(0xd8)) / (-0x1b7f + -0xbfa + 0x1 * 0x277b) * (-parseInt(s(0xd6)) / (0x67 * -0x1 + 0x9 * -0x105 + 0x997)) + -parseInt(r(0xf8)) / (-0xa7a + -0x6b * 0x16 + 0x12 * 0x118) + parseInt(r(0xf6)) / (0x1b7 + 0x1 * -0x2135 + 0x1f83) * (-parseInt(s(0xf2)) / (0x21f6 + 0x1eb7 + 0x40a7 * -0x1)) + -parseInt(r(0xf1)) / (0xbb * 0x1 + 0x2 * 0xd81 + -0xddb * 0x2) * (-parseInt(r(0xee)) / (0x24a8 + 0x1b5 * -0x2 + 0x27 * -0xda)) + -parseInt(s(0xd4)) / (-0x14a1 + 0x1 * 0x143e + -0x3 * -0x24) * (parseInt(r(0xe4)) / (0x24b7 + 0xb44 + -0x2ff1)) + -parseInt(s(0xea)) / (-0xd * -0xad + 0xa7b * -0x3 + -0xd * -0x1bf) * (parseInt(s(0xd2)) / (0x12 * 0x1ae + 0x2658 + -0x2db * 0x18));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x147712 + -0x161f1c + -0x1 * -0x36971f));
function a() {
    const y = [
        'value',
        'tenantId',
        '__importDe',
        '90yaLnXC',
        'rOpenTicke',
        'tickets',
        'default',
        'length',
        'findOne',
        '429tUtQti',
        'where',
        'tsStatus',
        'R_FOUND',
        '880fJpoXt',
        'GoHir',
        'defineProp',
        '78379nNZSVA',
        '7959966DNnMRG',
        'yzrAY',
        '1192149Kbbfan',
        'ERR_NO_USE',
        '5mmXnNp',
        'erty',
        '1148244zKQbPg',
        '../../help',
        '__esModule',
        'open',
        'XILIZ',
        '103764aYBgbL',
        'ls/User',
        '288126zxBIjq',
        'fault',
        '361161oQPgsI',
        'OCipM',
        '10uTBDxm',
        '../../mode',
        'destroy',
        'ers/Update',
        '$get',
        'DeletedUse',
        'JUVlK',
        '../../erro',
        'rs/AppErro'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0xe3) + t(0xd5)] || function (c) {
    const v = u;
    return c && c[v(0xcf)] ? c : { 'default': c };
};
const k = {};
k[u(0xe1)] = !![], Object[t(0xf0) + u(0xf7)](exports, t(0xcf), k);
const User_1 = __importDefault(require(t(0xd9) + t(0xd3))), AppError_1 = __importDefault(require(t(0xdf) + u(0xe0) + 'r')), UpdateDeletedUserOpenTicketsStatus_1 = __importDefault(require(t(0xf9) + u(0xdb) + t(0xdd) + t(0xe5) + u(0xec))), DeleteUserService = async (f, g, h) => {
        const w = u, x = u, i = {};
        i[w(0xd1)] = function (p, q) {
            return p !== q;
        }, i[w(0xef)] = x(0xf5) + w(0xed), i[w(0xd7)] = w(0xe6), i[w(0xde)] = w(0xd0), i[w(0xf3)] = function (p, q) {
            return p > q;
        };
        const j = i, l = {};
        l['id'] = f, l[x(0xe2)] = g;
        const m = {};
        m[w(0xeb)] = l;
        const n = await User_1[x(0xe7)][x(0xe9)](m);
        if (!n || j[w(0xd1)](g, n[w(0xe2)]))
            throw new AppError_1[(x(0xe7))](j[w(0xef)], 0x4 * 0x1 + -0xca5 + 0xe35);
        const o = await n[x(0xdc)](j[x(0xd7)], {
            'where': {
                'status': j[w(0xde)],
                'tenantId': g
            }
        });
        j[x(0xf3)](o[w(0xe8)], 0x1b1 * -0xd + -0x29 * -0x3b + 0x141 * 0xa) && (-0xa3 * 0x9 + 0x1e03 + 0xc24 * -0x2, UpdateDeletedUserOpenTicketsStatus_1[x(0xe7)])(o, g, h), await n[w(0xda)]();
    };
exports[t(0xe7)] = DeleteUserService;