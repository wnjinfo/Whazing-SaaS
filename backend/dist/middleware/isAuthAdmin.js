'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x146)) / (-0xd * 0x26f + -0x1f3f * 0x1 + 0x1 * 0x3ee3) * (-parseInt(u(0x124)) / (0x56b + -0x101 * 0x26 + 0x121 * 0x1d)) + parseInt(u(0x14b)) / (0x79 * -0x4a + 0x2 * -0x9f7 + -0x1 * -0x36eb) * (parseInt(u(0x156)) / (0x4 * 0x1a6 + 0x4 * -0x787 + 0x3ec * 0x6)) + -parseInt(t(0x136)) / (-0x56 + -0x210f + 0xe * 0x263) * (-parseInt(u(0x155)) / (-0xe * 0xe3 + 0x23cb * -0x1 + -0x1 * -0x303b)) + -parseInt(u(0x132)) / (-0x14a0 + -0x1fdc + -0x1 * -0x3483) + -parseInt(u(0x13b)) / (-0x1423 + 0x6 * -0x641 + 0x39b1) + parseInt(t(0x14f)) / (0x66e + -0x22 + 0x1 * -0x643) * (-parseInt(u(0x12a)) / (-0x1 * 0xa43 + -0xd * 0xfb + 0x170c)) + -parseInt(t(0x13f)) / (-0x1e31 + 0x109d + 0xd9f) * (-parseInt(t(0x135)) / (-0x4b3 * 0x3 + -0x14e5 + 0x5d7 * 0x6));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x6 * 0x7782 + -0x8bbfe + 0xef71d));
function a() {
    const A = [
        'defineProp',
        'value',
        '132354ammbiY',
        '__esModule',
        '../models/',
        '__importDe',
        'email',
        'erty',
        '1146lAyWws',
        '171752QrZWlS',
        'INcVE',
        'env',
        'rHYhE',
        'headers',
        'Not\x20admin\x20',
        'split',
        'owWyw',
        'ken\x20or\x20not',
        'Not\x20exists',
        '24ouQhuU',
        'default',
        'authorizat',
        'profile',
        'Invalid\x20to',
        '../errors/',
        '50CVLRxc',
        'User',
        'ion',
        'AppError',
        '\x20Admin',
        'AEfhX',
        'tenantId',
        'ADMIN_DOMA',
        '2118011eCGflJ',
        'secret',
        'jsonwebtok',
        '16005516ShGktE',
        '4735KfFJnj',
        '../config/',
        'ed.',
        'permission',
        'mMPlM',
        '8227000ORBcuX',
        'not\x20provid',
        'iHbOA',
        'verify',
        '22XWFHrL',
        'ains\x20defin',
        'indexOf',
        'auth',
        'user',
        'BNoMK',
        'findByPk',
        '96053fRqqAX',
        'Token\x20was\x20',
        'fault',
        'PMTuJ',
        'wHydC',
        '21hYWSJd',
        '\x20admin\x20dom'
    ];
    a = function () {
        return A;
    };
    return a();
}
var __importDefault = this && this[v(0x152) + w(0x148)] || function (c) {
    const x = v;
    return c && c[x(0x150)] ? c : { 'default': c };
};
const k = {};
k[w(0x14e)] = !![], Object[w(0x14d) + w(0x154)](exports, w(0x150), k);
const jsonwebtoken_1 = require(w(0x134) + 'en'), AppError_1 = __importDefault(require(v(0x129) + v(0x12d))), auth_1 = __importDefault(require(v(0x137) + v(0x142))), User_1 = __importDefault(require(w(0x151) + w(0x12b))), isAuthAdmin = async (d, e, f) => {
        const y = w, z = w, g = {
                'AEfhX': y(0x147) + z(0x13c) + y(0x138),
                'INcVE': z(0x123) + z(0x14c) + y(0x140) + z(0x138),
                'PMTuJ': function (l, m) {
                    return l === m;
                },
                'owWyw': y(0x15b) + y(0x139),
                'rHYhE': function (l, m) {
                    return l !== m;
                },
                'wHydC': y(0x13a),
                'BNoMK': y(0x128) + z(0x15e) + y(0x12e),
                'iHbOA': function (l) {
                    return l();
                }
            }, h = d[y(0x15a)][y(0x126) + y(0x12c)], i = process[y(0x158)][y(0x131) + 'IN'];
        if (!h)
            throw new AppError_1[(z(0x125))](g[y(0x12f)], -0x72 * 0x19 + -0x2d * 0x59 + 0xe2d * 0x2);
        if (!i)
            throw new AppError_1[(y(0x125))](g[y(0x157)], 0x1 * 0x7b5 + 0x1b5d + 0x1 * -0x217f);
        const [, j] = h[z(0x15c)]('\x20');
        try {
            const l = (0x80b + -0x1c45 * 0x1 + 0x143a, jsonwebtoken_1[y(0x13e)])(j, auth_1[z(0x125)][z(0x133)]), {
                    id: m,
                    profile: n,
                    tenantId: o
                } = l, p = await User_1[y(0x125)][z(0x145)](m);
            if (!p || g[z(0x149)](p[z(0x153)][z(0x141)](i), 0x706 + -0xc50 + 0x54b))
                throw new AppError_1[(y(0x125))](g[y(0x15d)], -0x2480 + -0x1a1e + 0x4031);
            const q = {};
            q['id'] = m, q[z(0x127)] = n, q[z(0x130)] = o, d[y(0x143)] = q;
        } catch (r) {
            if (g[z(0x159)](g[z(0x14a)], g[y(0x14a)]))
                throw new d[(z(0x125))](g[y(0x12f)], -0x1d35 * 0x1 + -0x3 * 0x841 + 0x378b);
            else
                throw new AppError_1[(y(0x125))](g[y(0x144)], -0x31 * -0xbf + -0x21e + -0x20de);
        }
        return g[z(0x13d)](f);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * -0x5f6 + -0xb75 + 0x6a2);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[w(0x125)] = isAuthAdmin;