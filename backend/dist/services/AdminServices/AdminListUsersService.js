'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(w(0xcf)) / (0xb * -0x2a9 + 0x7 * 0x31d + -0x779 * -0x1) + parseInt(w(0xfe)) / (-0x398 + -0x26e * 0xb + 0x1e54) + parseInt(w(0xd7)) / (0x7a8 + -0x23fd + 0x4 * 0x716) + parseInt(w(0xd9)) / (-0xd94 + -0x15dc + 0x2 * 0x11ba) + -parseInt(x(0xed)) / (-0x17 * 0x98 + 0x53 * -0x47 + 0x24b2) + -parseInt(w(0xdb)) / (-0x2f * -0x13 + 0x199a + 0x427 * -0x7) * (parseInt(w(0xf8)) / (-0x4bf + 0x9fc * -0x2 + 0x18be)) + parseInt(w(0xf5)) / (0x1846 + 0x6eb + -0x1f29) * (parseInt(x(0xf7)) / (0x1 * 0xf7e + -0x1aa * 0x4 + -0x8cd));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x886fe + 0x397a * 0x27 + -0x518 * 0x18d));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xc37 * -0x1 + 0xbb1 + 0x172 * -0x10);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const D = [
        '1712cmAgrf',
        'sequelize',
        '50697PytyaL',
        '42uxANcK',
        'OYBrZ',
        'name',
        'defineProp',
        'queue',
        'toLowerCas',
        '1095020AYVEMN',
        'attributes',
        'qOPNm',
        'findAndCou',
        'include',
        'limit',
        'ASC',
        'erty',
        'oCcDI',
        '__esModule',
        'Sequelize',
        'ETsUk',
        '642754Wxsxmu',
        'BbpnB',
        'hasMore',
        'fault',
        'order',
        'email',
        'value',
        'gmIYk',
        '1083864gtJgdK',
        'LOWER',
        '1376684duuqtw',
        'ntAll',
        '619212qVkpTH',
        'pxxLS',
        'offset',
        'zDcKb',
        'where',
        'profile',
        'model',
        'ls/Queue',
        'LIKE',
        'ls/User',
        'User.name',
        'BmJSO',
        'col',
        'oGveu',
        'OyOLi',
        'like',
        'ls/Tenant',
        '__importDe',
        '2907305LdEMag',
        'count',
        'sVWoK',
        'default',
        'users',
        'distinct',
        '../../mode',
        'length'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0xec) + y(0xd2)] || function (c) {
    const A = z;
    return c && c[A(0xcc)] ? c : { 'default': c };
};
const k = {};
k[y(0xd5)] = !![], Object[y(0xfb) + z(0xca)](exports, y(0xcc), k);
const sequelize_1 = require(z(0xf6)), Queue_1 = __importDefault(require(y(0xf3) + z(0xe2))), Tenant_1 = __importDefault(require(z(0xf3) + y(0xeb))), User_1 = __importDefault(require(z(0xf3) + z(0xe4))), AdminListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const B = z, C = y, h = {};
        h[B(0xde)] = C(0xd8), h[B(0xce)] = C(0xe5), h[C(0xe6)] = C(0xe3), h[B(0xd6)] = function (u, v) {
            return u * v;
        }, h[C(0xe9)] = function (u, v) {
            return u - v;
        }, h[B(0xe8)] = B(0xfc), h[B(0xf9)] = C(0xfa), h[B(0xd0)] = C(0xd4), h[C(0x100)] = C(0xe0), h[C(0xef)] = C(0xc9), h[C(0xdc)] = function (u, v) {
            return u > v;
        }, h[B(0xcb)] = function (u, v) {
            return u + v;
        };
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[B(0xcd)][B(0xdf)](sequelize_1[B(0xcd)]['fn'](i[B(0xde)], sequelize_1[C(0xcd)][B(0xe7)](i[C(0xce)])), i[B(0xe6)], '%' + searchParam[B(0xfd) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][C(0xea)]]: '%' + searchParam[B(0xfd) + 'e']() + '%' } }
                ]
            }, l = 0x1297 + -0x1c45 * 0x1 + 0x2 * 0x4eb, m = i[C(0xd6)](l, i[C(0xe9)](+pageNumber, 0x20dd * 0x1 + 0x963 * -0x1 + -0x1779)), n = {};
        n[C(0xe1)] = Queue_1[C(0xf0)], n[C(0xff)] = [
            'id',
            i[B(0xe8)]
        ];
        const o = {};
        o[B(0xe1)] = Tenant_1[B(0xf0)], o[C(0xff)] = [
            'id',
            i[B(0xf9)]
        ];
        const p = {};
        p[B(0xdf)] = j, p[B(0x102)] = [
            n,
            o
        ], p[B(0xff)] = [
            i[C(0xf9)],
            'id',
            i[C(0xd0)],
            i[C(0x100)]
        ], p[B(0xc8)] = l, p[C(0xdd)] = m, p[C(0xf2)] = !![], p[C(0xd3)] = [[
                i[B(0xf9)],
                i[B(0xef)]
            ]];
        const {
                count: q,
                rows: r
            } = await User_1[B(0xf0)][C(0x101) + B(0xda)](p), s = i[C(0xdc)](q, i[B(0xcb)](m, r[C(0xf4)])), t = {};
        return t[B(0xf1)] = r, t[B(0xee)] = q, t[B(0xd1)] = s, t;
    };
exports[y(0xf0)] = AdminListUsersService;