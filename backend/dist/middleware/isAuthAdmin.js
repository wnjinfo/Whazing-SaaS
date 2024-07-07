'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x19f)) / (-0x1cfb * -0x1 + 0x1e05 + 0x1 * -0x3aff) + -parseInt(u(0x1cf)) / (0x18e * -0x6 + 0xc5c + -0x306) + -parseInt(t(0x1a3)) / (-0xea9 + 0x97b * 0x3 + -0xdc5) + parseInt(t(0x1a2)) / (0x2 * -0xfd3 + -0xd7a + 0x24 * 0x141) * (-parseInt(t(0x1d5)) / (-0x12c8 + 0x16d6 + -0x409)) + parseInt(t(0x1c0)) / (-0x2 * -0x3e6 + -0x1b34 + 0x2 * 0x9b7) + parseInt(u(0x1aa)) / (0x61f + -0x452 + 0x1c6 * -0x1) * (-parseInt(t(0x1b8)) / (-0x1bda + 0x266b + -0xa89)) + -parseInt(t(0x1c3)) / (0x14db * -0x1 + 0x23d8 + -0xef4) * (-parseInt(u(0x1d0)) / (-0x2433 + 0x11 * -0x1c5 + 0x2129 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe1d16 + -0x100a9b + 0xbf07d * 0x1));
var __importDefault = this && this[v(0x1b3) + w(0x1b0)] || function (c) {
    const x = v;
    return c && c[x(0x1b5)] ? c : { 'default': c };
};
const k = {};
function a() {
    const A = [
        'findByPk',
        'Not\x20exists',
        '../models/',
        'SEHVp',
        'ion',
        'ADMIN_DOMA',
        '28zxvPvi',
        'email',
        'authorizat',
        'MdXTe',
        'indexOf',
        'Not\x20admin\x20',
        'fault',
        'value',
        'profile',
        '__importDe',
        'qjEnd',
        '__esModule',
        '../errors/',
        'permission',
        '2099848QdnKvF',
        'ains\x20defin',
        'XwSye',
        'not\x20provid',
        'default',
        'user',
        'defineProp',
        'ken\x20or\x20not',
        '2242734GAlxZA',
        'AJpEs',
        'secret',
        '9QppSbq',
        '../config/',
        'AppError',
        'split',
        '\x20admin\x20dom',
        'Token\x20was\x20',
        'verify',
        'Invalid\x20to',
        'ed.',
        '\x20Admin',
        'headers',
        'tenantId',
        '1720820PPUpNw',
        '27479470KaKiKT',
        'jsonwebtok',
        'uxUBa',
        'mCZkS',
        'auth',
        '44645ucpoUA',
        'VlxWT',
        'KXLKO',
        'User',
        '769336zVIdBQ',
        'erty',
        'env',
        '316ZqojaG',
        '1857681xdRsPU'
    ];
    a = function () {
        return A;
    };
    return a();
}
k[w(0x1b1)] = !![], Object[w(0x1be) + w(0x1a0)](exports, v(0x1b5), k);
const jsonwebtoken_1 = require(v(0x1d1) + 'en'), AppError_1 = __importDefault(require(v(0x1b6) + v(0x1c5))), auth_1 = __importDefault(require(w(0x1c4) + v(0x1d4))), User_1 = __importDefault(require(w(0x1a6) + w(0x1d8))), isAuthAdmin = async (d, e, f) => {
        const y = w, z = w, g = {
                'SEHVp': y(0x1c8) + y(0x1bb) + z(0x1cb),
                'mCZkS': z(0x1a5) + z(0x1c7) + z(0x1b9) + z(0x1cb),
                'qjEnd': function (l, m) {
                    return l !== m;
                },
                'MdXTe': z(0x1ba),
                'VlxWT': function (l, m) {
                    return l === m;
                },
                'AJpEs': z(0x1af) + y(0x1b7),
                'uxUBa': z(0x1ca) + y(0x1bf) + y(0x1cc),
                'KXLKO': function (l) {
                    return l();
                }
            }, h = d[y(0x1cd)][z(0x1ac) + z(0x1a8)], i = process[y(0x1a1)][y(0x1a9) + 'IN'];
        if (!h)
            throw new AppError_1[(y(0x1bc))](g[y(0x1a7)], -0x111 * 0x14 + -0x5ad * -0x6 + -0xb27);
        if (!i)
            throw new AppError_1[(y(0x1bc))](g[y(0x1d3)], 0x2276 + -0x6 * 0x132 + -0x19b7);
        const [, j] = h[z(0x1c6)]('\x20');
        try {
            if (g[z(0x1b4)](g[z(0x1ad)], g[y(0x1ad)]))
                throw new d[(z(0x1bc))](g[z(0x1a7)], 0x1 * 0x7c3 + 0x1e78 + -0x24a8);
            else {
                const m = (0x2525 + 0xd41 + -0x3266, jsonwebtoken_1[y(0x1c9)])(j, auth_1[y(0x1bc)][y(0x1c2)]), {
                        id: n,
                        profile: o,
                        tenantId: p
                    } = m, q = await User_1[y(0x1bc)][y(0x1a4)](n);
                if (!q || g[z(0x1d6)](q[y(0x1ab)][z(0x1ae)](i), 0x1197 + 0xda4 + -0xf9d * 0x2))
                    throw new AppError_1[(y(0x1bc))](g[z(0x1c1)], -0x415 * -0x5 + -0x17c0 + -0x2 * -0x275);
                const r = {};
                r['id'] = n, r[y(0x1b2)] = o, r[y(0x1ce)] = p, d[z(0x1bd)] = r;
            }
        } catch (s) {
            throw new AppError_1[(z(0x1bc))](g[z(0x1d2)], -0x1 * -0x256d + -0x13d1 + 0x5 * -0x335);
        }
        return g[y(0x1d7)](f);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1d2 + -0x21b2 * 0x1 + -0x157 * -0x19);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[w(0x1bc)] = isAuthAdmin;