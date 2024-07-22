'use strict';
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x7a2 + 0x2a3 + 0x64d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const z = b, A = b;
(function (c, d) {
    const x = b, y = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(x(0x190)) / (0x142e + -0x1 * 0xfcd + -0x460) + parseInt(y(0x16e)) / (-0x643 + 0x527 * -0x6 + 0x252f) + -parseInt(y(0x157)) / (0x6 * 0xc3 + -0x1fbb * -0x1 + -0x244a) + -parseInt(y(0x14e)) / (0x148f + 0x1 * -0x68f + 0x5 * -0x2cc) * (-parseInt(x(0x16b)) / (0x1 * 0x829 + -0x1ba * -0x9 + -0x1b1 * 0xe)) + parseInt(x(0x16c)) / (-0x1 * -0x1fae + 0x485 * -0x3 + -0x29 * 0x71) * (-parseInt(y(0x180)) / (0x13df * 0x1 + -0x44c + 0x31c * -0x5)) + parseInt(y(0x168)) / (-0x1 * 0x2195 + -0x899 * 0x3 + 0x2 * 0x1db4) * (-parseInt(x(0x183)) / (0x8fc * 0x4 + 0x1b37 + 0xa85 * -0x6)) + parseInt(x(0x18f)) / (0x2174 * -0x1 + 0x7b * 0x26 + 0x1a * 0x96);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x72d73 + 0x66fc + -0x2 * -0x71dc5));
var __importDefault = this && this[z(0x162) + z(0x14f)] || function (c) {
    const B = z;
    return c && c[B(0x188)] ? c : { 'default': c };
};
const k = {};
k[z(0x177)] = !![], Object[z(0x15a) + z(0x17b)](exports, z(0x188), k);
function a() {
    const E = [
        '742734gZNcDU',
        'user',
        '232400ocXMAx',
        'split',
        'ken\x20or\x20not',
        'Not\x20exists',
        'ejTPb',
        'env',
        'auth',
        'tenantId',
        'vSXBN',
        'value',
        'yOcTL',
        'kQfZQ',
        'zfaTe',
        'erty',
        'authorizat',
        'verify',
        'ion',
        'headers',
        '42NkfoRU',
        '../config/',
        'ByHdV',
        '288927RwWULq',
        'vfciC',
        'ADMIN_DOMA',
        'PeVCC',
        'not\x20provid',
        '__esModule',
        'uEwmE',
        'findByPk',
        'Token\x20was\x20',
        '\x20Admin',
        'AppError',
        'BSkpZ',
        '20413240jimoMJ',
        '280470jQkjzq',
        'indexOf',
        'bBBKC',
        'profile',
        'ukSLB',
        '../models/',
        'XqtPM',
        'EsFUl',
        '12lSXrYX',
        'fault',
        'ed.',
        'secret',
        'User',
        'Not\x20admin\x20',
        'gdyCp',
        'Invalid\x20to',
        'SWnpx',
        '1170027vBToLK',
        'iiGlK',
        '../errors/',
        'defineProp',
        'ains\x20defin',
        'PigPy',
        'email',
        'bbCpP',
        'JTJPS',
        'jsonwebtok',
        'fMccW',
        '__importDe',
        '\x20admin\x20dom',
        'default',
        'QUcfm',
        'PEYio',
        'JFjZE',
        '232HhLpHp',
        'XttEd',
        'permission',
        '190765GgcFff'
    ];
    a = function () {
        return E;
    };
    return a();
}
const jsonwebtoken_1 = require(z(0x160) + 'en'), AppError_1 = __importDefault(require(z(0x159) + A(0x18d))), auth_1 = __importDefault(require(z(0x181) + z(0x174))), User_1 = __importDefault(require(z(0x195) + z(0x152))), isAuthAdmin = async (d, e, f) => {
        const C = z, D = z, g = {
                'yOcTL': C(0x153) + D(0x16a),
                'PeVCC': C(0x18b) + D(0x187) + C(0x150),
                'iiGlK': D(0x155) + D(0x170) + C(0x18c),
                'kQfZQ': D(0x171) + C(0x163) + C(0x15b) + D(0x150),
                'vfciC': function (l, m) {
                    return l === m;
                },
                'SWnpx': D(0x15f),
                'XttEd': function (l, m) {
                    return l !== m;
                },
                'QUcfm': D(0x172),
                'XqtPM': function (l, m) {
                    return l !== m;
                },
                'EsFUl': D(0x15c),
                'vSXBN': C(0x17a),
                'gdyCp': C(0x15e),
                'ByHdV': C(0x166),
                'BSkpZ': function (l, m) {
                    return l === m;
                },
                'ukSLB': D(0x192),
                'JFjZE': C(0x161),
                'uEwmE': function (l) {
                    return l();
                }
            }, h = d[D(0x17f)][C(0x17c) + D(0x17e)], i = process[C(0x173)][D(0x185) + 'IN'];
        if (!h) {
            if (g[D(0x184)](g[D(0x156)], g[C(0x156)]))
                throw new AppError_1[(D(0x164))](g[D(0x186)], -0xbf * 0x7 + 0x622 + 0xaa);
            else
                throw new d[(D(0x164))](g[C(0x178)], 0x3 * 0xa75 + -0xe5d + -0xf6f);
        }
        if (!i) {
            if (g[D(0x169)](g[D(0x165)], g[D(0x165)]))
                throw new d[(D(0x164))](g[D(0x186)], 0x501 + 0x7a2 + -0xb10);
            else
                throw new AppError_1[(C(0x164))](g[C(0x179)], 0x1 * 0x75b + -0x24ab + 0x1ee3);
        }
        const [, j] = h[D(0x16f)]('\x20');
        try {
            if (g[C(0x196)](g[D(0x197)], g[D(0x176)])) {
                const n = (0x19ba + -0x667 * -0x5 + 0x1 * -0x39bd, jsonwebtoken_1[C(0x17d)])(j, auth_1[C(0x164)][D(0x151)]), {
                        id: o,
                        profile: p,
                        tenantId: q
                    } = n, r = await User_1[C(0x164)][D(0x18a)](o);
                if (!r || g[C(0x184)](r[D(0x15d)][C(0x191)](i), 0x1 * 0x2552 + 0x37 * 0x97 + -0x1 * 0x45c2)) {
                    if (g[D(0x169)](g[C(0x154)], g[D(0x182)]))
                        throw new AppError_1[(C(0x164))](g[C(0x178)], -0xf13 + 0x342 + -0x2 * -0x6b2);
                    else {
                        const u = {};
                        return u[C(0x164)] = j, g && h[C(0x188)] ? i : u;
                    }
                }
                const s = {};
                s['id'] = o, s[D(0x193)] = p, s[C(0x175)] = q, d[D(0x16d)] = s;
            } else
                throw new d[(C(0x164))](g[D(0x158)], -0x5 * 0x5d7 + 0x190 * 0x16 + 0x1 * -0x39a);
        } catch (v) {
            if (g[D(0x18e)](g[D(0x194)], g[D(0x167)]))
                throw new d[(D(0x164))](g[C(0x179)], 0x1549 * -0x1 + 0x20cc + -0x9f0);
            else
                throw new AppError_1[(C(0x164))](g[C(0x158)], 0x56b * 0x4 + -0x127 * -0xf + -0x2562);
        }
        return g[D(0x189)](f);
    };
exports[z(0x164)] = isAuthAdmin;