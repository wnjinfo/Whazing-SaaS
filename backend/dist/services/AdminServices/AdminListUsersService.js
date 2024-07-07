'use strict';
const y = b, z = b;
(function (c, d) {
    const w = b, x = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(w(0x94)) / (-0x69d + -0x43f * -0x8 + -0x12 * 0x185) * (-parseInt(w(0xc4)) / (-0x1df4 + 0x2394 + -0x59e)) + -parseInt(x(0xab)) / (0x228b + -0x2 * -0x1189 + -0x459a) * (-parseInt(w(0xc5)) / (0x136c + -0x1e1f + 0xab7)) + -parseInt(w(0x95)) / (-0x1b47 + 0xe6c + 0xce0) * (parseInt(x(0x9d)) / (-0xaab * -0x2 + 0x2084 + -0x35d4)) + -parseInt(x(0xad)) / (-0x14f3 * -0x1 + -0xfe4 + 0xb8 * -0x7) + -parseInt(w(0xc3)) / (-0xfec + 0x1061 * -0x1 + 0x2055) + -parseInt(w(0xc6)) / (0x10d5 * 0x1 + 0xd11 + 0x8b * -0x37) + parseInt(x(0x9a)) / (-0x6d * -0x2c + 0xc58 * 0x2 + 0x73b * -0x6);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0xf989 + 0xda462 + -0x48cb2));
function a() {
    const D = [
        'stWBw',
        '26246230czdMJJ',
        'attributes',
        'fault',
        '15252ZzalXp',
        'length',
        'limit',
        'uBmlz',
        'erty',
        '__esModule',
        'LIKE',
        'model',
        'toLowerCas',
        'uaheT',
        'sequelize',
        'xFouh',
        'offset',
        'defineProp',
        '585354WPbzbl',
        'ls/Queue',
        '5322653awDDLj',
        'LOWER',
        'AdLmg',
        'ls/Tenant',
        'email',
        'ls/User',
        'User.name',
        'RjzAV',
        'Sequelize',
        'order',
        'include',
        'tztmS',
        'value',
        'profile',
        'name',
        'ntAll',
        'distinct',
        'default',
        'ASC',
        '__importDe',
        'users',
        'ugYcD',
        '7276808XDTUcN',
        '11226mqTipx',
        '8OzFuQY',
        '1746549dUlgaa',
        'col',
        'count',
        'like',
        'AzPej',
        '../../mode',
        'wFefh',
        'where',
        'hasMore',
        'EDvZf',
        '103wkijXK',
        '80kiuENa',
        'queue',
        'findAndCou',
        'ejmPK'
    ];
    a = function () {
        return D;
    };
    return a();
}
var __importDefault = this && this[y(0xc0) + y(0x9c)] || function (c) {
    const A = y;
    return c && c[A(0xa2)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1f78 + 0xa6b + -0x2952);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[z(0xb9)] = !![], Object[z(0xaa) + y(0xa1)](exports, z(0xa2), k);
const sequelize_1 = require(z(0xa7)), Queue_1 = __importDefault(require(y(0xcb) + z(0xac))), Tenant_1 = __importDefault(require(y(0xcb) + y(0xb0))), User_1 = __importDefault(require(z(0xcb) + y(0xb2))), AdminListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const B = y, C = y, h = {};
        h[B(0xcc)] = C(0xae), h[B(0xaf)] = C(0xb3), h[C(0xc2)] = C(0xa3), h[B(0xca)] = function (u, v) {
            return u * v;
        }, h[B(0xa0)] = function (u, v) {
            return u - v;
        }, h[C(0x98)] = C(0x96), h[B(0x99)] = B(0xbb), h[B(0xb8)] = B(0xb1), h[C(0x93)] = B(0xba), h[B(0xb4)] = C(0xbf), h[B(0xa8)] = function (u, v) {
            return u > v;
        }, h[C(0xa6)] = function (u, v) {
            return u + v;
        };
        const i = h, j = {
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[C(0xb5)][B(0x91)](sequelize_1[C(0xb5)]['fn'](i[C(0xcc)], sequelize_1[B(0xb5)][B(0xc7)](i[C(0xaf)])), i[C(0xc2)], '%' + searchParam[B(0xa5) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0xc9)]]: '%' + searchParam[B(0xa5) + 'e']() + '%' } }
                ]
            }, l = 0x2 * -0x102 + 0x1 * 0x78d + -0x561, m = i[B(0xca)](l, i[B(0xa0)](+pageNumber, -0xca * 0x24 + 0x16fb + -0x5 * -0x116)), n = {};
        n[C(0xa4)] = Queue_1[B(0xbe)], n[B(0x9b)] = [
            'id',
            i[C(0x98)]
        ];
        const o = {};
        o[B(0xa4)] = Tenant_1[B(0xbe)], o[B(0x9b)] = [
            'id',
            i[C(0x99)]
        ];
        const p = {};
        p[C(0x91)] = j, p[C(0xb7)] = [
            n,
            o
        ], p[C(0x9b)] = [
            i[B(0x99)],
            'id',
            i[B(0xb8)],
            i[B(0x93)]
        ], p[C(0x9f)] = l, p[C(0xa9)] = m, p[B(0xbd)] = !![], p[B(0xb6)] = [[
                i[B(0x99)],
                i[B(0xb4)]
            ]];
        const {
                count: q,
                rows: r
            } = await User_1[C(0xbe)][C(0x97) + C(0xbc)](p), s = i[C(0xa8)](q, i[B(0xa6)](m, r[B(0x9e)])), t = {};
        return t[B(0xc1)] = r, t[C(0xc8)] = q, t[B(0x92)] = s, t;
    };
exports[y(0xbe)] = AdminListUsersService;