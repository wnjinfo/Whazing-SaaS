'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x470 * -0x1 + 0x60b * 0x5 + -0x1850);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x178)) / (0xa1 * 0x37 + 0x970 + 0x17 * -0x1ea) + -parseInt(t(0x17b)) / (0x2 * -0x100f + 0xc67 + 0x33 * 0x63) * (-parseInt(t(0x1a1)) / (0x939 + 0x69a + -0x1 * 0xfd0)) + parseInt(t(0x191)) / (0xc26 + 0x4bb * -0x1 + -0x767) + parseInt(u(0x1a3)) / (-0x947 * -0x3 + 0xfb * 0x7 + -0x22ad) * (-parseInt(u(0x186)) / (0x5 * 0x7a3 + 0x1 * -0x1b89 + -0xaa0)) + -parseInt(t(0x1ae)) / (0x1 * -0x56b + 0xc93 * 0x1 + -0x721) + parseInt(t(0x18a)) / (0x6a * -0x2b + 0x1 * 0x19a8 + -0x7d2) * (-parseInt(t(0x1aa)) / (0x10ba * -0x2 + -0x49d + 0x261a)) + -parseInt(u(0x19f)) / (0xc + 0xd13 + -0xc5 * 0x11);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xec4b * 0xb + -0x3fed8 + 0x156f82));
var __importDefault = this && this[v(0x193) + w(0x1ad)] || function (c) {
    const x = v;
    return c && c[x(0x18d)] ? c : { 'default': c };
};
const k = {};
k[w(0x185)] = !![], Object[v(0x17f) + w(0x17e)](exports, w(0x18d), k);
const sequelize_1 = __importDefault(require(v(0x184))), database_1 = __importDefault(require(v(0x1ac) + w(0x18c))), bcryptjs_1 = require(v(0x1a4)), ResetPassword = async (e, f, g) => {
        const y = w, z = w, h = {
                'wyKyV': function (l, m, n) {
                    return l(m, n);
                },
                'FojyO': y(0x198) + z(0x19a),
                'AJHtI': function (l, m) {
                    return l === m;
                },
                'ftPJu': function (l, m, n, o) {
                    return l(m, n, o);
                },
                'fhVqK': z(0x1a9) + z(0x19a)
            }, {
                hasResult: i,
                data: j
            } = await h[y(0x194)](filterUser, e, f);
        if (!i) {
            const l = {};
            return l[y(0x195)] = 0x194, l[y(0x18e)] = h[z(0x18f)], l;
        }
        if (h[y(0x1a6)](i, !![]))
            try {
                const m = await (0x14c4 + -0x1 * 0x2005 + -0xb41 * -0x1, bcryptjs_1[z(0x17c)])(g, -0x1 * 0x145a + 0x278 + 0x11ea), {
                        hasResults: n,
                        datas: o
                    } = await h[y(0x17d)](insertHasPassword, e, f, m);
                if (h[z(0x1a6)](o[z(0x19e)], -0xd * -0x2b9 + 0x8a5 * -0x2 + 0x203 * -0x9)) {
                    const p = {};
                    return p[y(0x195)] = 0x194, p[z(0x18e)] = h[z(0x180)], p;
                }
            } catch (q) {
                console[z(0x1a0)](q);
            }
    };
exports[v(0x19b)] = ResetPassword;
const filterUser = async (e, f) => {
        const A = w, B = w, g = {};
        g[A(0x18b)] = function (m, n) {
            return m > n;
        };
        const h = g, i = A(0x197) + B(0x1a2) + B(0x190) + B(0x1a7) + e + (B(0x17a) + A(0x179) + A(0x183)), j = {};
        j[A(0x196)] = sequelize_1[A(0x19b)][A(0x199)][B(0x1af)];
        const l = await database_1[A(0x19b)][B(0x188)](i, j);
        return {
            'hasResult': h[B(0x18b)](l[B(0x19e)], 0x1 * 0x6bb + 0x538 + -0xbf3),
            'data': l
        };
    }, insertHasPassword = async (f, g, h) => {
        const C = w, D = w, i = {};
        i[C(0x187)] = function (r, s) {
            return r > s;
        };
        const j = i, l = D(0x197) + C(0x1a2) + C(0x190) + C(0x1a7) + f + (D(0x17a) + D(0x179) + C(0x189)) + g + '\x27', m = {};
        m[C(0x196)] = sequelize_1[C(0x19b)][C(0x199)][C(0x1af)];
        const n = await database_1[C(0x19b)][C(0x188)](l, m), o = D(0x177) + C(0x1a8) + D(0x182) + D(0x19c) + h + (D(0x1ab) + C(0x192) + C(0x181) + D(0x1a5)) + f + (C(0x17a) + C(0x179) + C(0x189)) + g + '\x27', p = {};
        p[D(0x196)] = sequelize_1[D(0x19b)][C(0x199)][D(0x19d)];
        const q = await database_1[C(0x19b)][C(0x188)](o, p);
        return {
            'hasResults': j[D(0x187)](q[D(0x19e)], 0x18b5 + 0x16fc + -0x2fb1),
            'datas': n
        };
    };
function a() {
    const E = [
        'UPDATE\x20\x20\x22U',
        '650341EXdMpv',
        'etPassword',
        '\x27\x20AND\x20\x22res',
        '218340FqdrYT',
        'hash',
        'ftPJu',
        'erty',
        'defineProp',
        'fhVqK',
        '=\x20\x27\x27\x20WHERE',
        '\x20\x22password',
        '\x22\x20!=\x20\x27\x27',
        'sequelize',
        'value',
        '259668IpFASG',
        'munzW',
        'query',
        '\x22\x20=\x20\x27',
        '567272wEUdud',
        'qOukk',
        'base',
        '__esModule',
        'message',
        'FojyO',
        '\x22\x20\x20WHERE\x20e',
        '3326772AutCPG',
        'Password\x22\x20',
        '__importDe',
        'wyKyV',
        'status',
        'type',
        'SELECT\x20*\x20F',
        'Email\x20não\x20',
        'QueryTypes',
        'encontrado',
        'default',
        'Hash\x22=\x20\x27',
        'UPDATE',
        'length',
        '7963820oitWkm',
        'log',
        '18FOcmOT',
        'ROM\x20\x22Users',
        '80lEDayT',
        'bcryptjs',
        '\x20email=\x20\x27',
        'AJHtI',
        'mail\x20=\x20\x27',
        'sers\x22\x20\x20SET',
        'Token\x20não\x20',
        '9swDmgW',
        '\x27\x20,\x20\x22reset',
        '../../data',
        'fault',
        '698334ZJBlsq',
        'SELECT'
    ];
    a = function () {
        return E;
    };
    return a();
}