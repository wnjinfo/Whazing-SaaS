'use strict';
function a() {
    const C = [
        'attributes',
        'email',
        'findAndCou',
        'hasMore',
        'erty',
        'ls/User',
        'count',
        'Sequelize',
        'ASC',
        'JVUKu',
        'LOWER',
        'name',
        'ls/Queue',
        '36282VdKRNg',
        'sequelize',
        '495TKHfQx',
        '7544PkqpeS',
        'order',
        'SaFgk',
        'hthGg',
        'yyCYF',
        'OeHYZ',
        'value',
        'distinct',
        'users',
        'LIKE',
        'KVXMK',
        '4927662pFiMXo',
        'toLowerCas',
        'length',
        '10089058ciFmnp',
        'OgaNj',
        'BcqyA',
        'like',
        'queue',
        'GzqnV',
        '__esModule',
        'include',
        'offset',
        'model',
        '__importDe',
        'default',
        'vgkNA',
        'limit',
        'ntAll',
        'where',
        'hLbAT',
        '757104AHofKz',
        'col',
        '../../mode',
        '2013028mIslbt',
        'profile',
        '1000sqGgLd',
        '581432GcbAwu',
        'defineProp',
        'fault'
    ];
    a = function () {
        return C;
    };
    return a();
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(v(0x134)) / (-0x10bb + 0x1 * 0x1aec + -0xa30) + -parseInt(v(0x11e)) / (-0x2428 + -0x11b * -0x7 + 0x1c6d) + -parseInt(w(0x13f)) / (-0x874 + -0x25d9 + 0x2e50) + -parseInt(w(0x153)) / (0x9c2 + -0x24b * 0x1 + 0x773 * -0x1) + parseInt(w(0x120)) / (-0x181d * -0x1 + -0x44 * 0x6a + 0x410) * (parseInt(w(0x131)) / (0x1cc4 + -0xb3f + -0x1 * 0x117f)) + -parseInt(w(0x142)) / (-0x1ff5 + -0x19 * 0x133 + -0x1 * -0x3df7) + parseInt(v(0x121)) / (-0x1 * 0x266 + -0xd * -0x19 + 0x129) * (parseInt(v(0x133)) / (-0x1 * -0xb01 + -0x2 * 0xa79 + 0x1 * 0x9fa));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x11 * -0x7a7 + -0x39c5 + 0x4ff9d * 0x3));
var __importDefault = this && this[x(0x14c) + y(0x123)] || function (c) {
    const z = x;
    return c && c[z(0x148)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x148c + 0x1bb * -0x11 + 0x9fc);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[x(0x13a)] = !![], Object[x(0x122) + y(0x128)](exports, x(0x148), k);
const sequelize_1 = require(x(0x132)), Queue_1 = __importDefault(require(y(0x11d) + y(0x130))), User_1 = __importDefault(require(x(0x11d) + x(0x129))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = y, B = y, h = {};
        h[A(0x14e)] = A(0x12e), h[A(0x144)] = A(0x12f), h[B(0x138)] = A(0x13d), h[A(0x139)] = function (t, u) {
            return t * u;
        }, h[A(0x13e)] = function (t, u) {
            return t - u;
        }, h[B(0x147)] = A(0x146), h[B(0x12d)] = A(0x125), h[A(0x137)] = B(0x11f), h[B(0x136)] = A(0x12c), h[B(0x152)] = function (t, u) {
            return t > u;
        }, h[A(0x143)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[B(0x12b)][B(0x151)](sequelize_1[B(0x12b)]['fn'](i[A(0x14e)], sequelize_1[B(0x12b)][A(0x154)](i[B(0x144)])), i[B(0x138)], '%' + searchParam[B(0x140) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0x145)]]: '%' + searchParam[B(0x140) + 'e']() + '%' } }
                ]
            }, l = -0x1a27 + -0x9f * -0x3b + -0xa56 * 0x1, m = i[A(0x139)](l, i[A(0x13e)](+pageNumber, -0x1 * -0x20c8 + -0x15f7 * -0x1 + -0x36be)), n = {};
        n[A(0x14b)] = Queue_1[B(0x14d)], n[A(0x124)] = [
            'id',
            i[B(0x147)]
        ];
        const o = {};
        o[A(0x151)] = j, o[A(0x149)] = [n], o[A(0x124)] = [
            i[A(0x144)],
            'id',
            i[A(0x12d)],
            i[A(0x137)]
        ], o[A(0x14f)] = l, o[B(0x14a)] = m, o[B(0x13b)] = !![], o[A(0x135)] = [[
                i[B(0x144)],
                i[B(0x136)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[A(0x14d)][B(0x126) + B(0x150)](o), r = i[B(0x152)](p, i[A(0x143)](m, q[A(0x141)])), s = {};
        return s[B(0x13c)] = q, s[A(0x12a)] = p, s[A(0x127)] = r, s;
    };
exports[x(0x14d)] = ListUsersService;