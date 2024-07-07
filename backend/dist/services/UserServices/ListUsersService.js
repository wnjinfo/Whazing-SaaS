'use strict';
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x167)) / (-0x2e7 * 0x5 + 0x7a * -0x37 + 0x28ba * 0x1) + -parseInt(v(0x160)) / (0x179d + -0x118c + 0x21 * -0x2f) + -parseInt(v(0x168)) / (-0x2 * 0xeae + 0x1662 + 0x1 * 0x6fd) + -parseInt(w(0x163)) / (0x1 * 0x21f9 + -0xcae + -0xd * 0x1a3) * (-parseInt(w(0x16c)) / (0xc12 + 0x716 * -0x3 + -0x1 * -0x935)) + -parseInt(w(0x158)) / (-0x2189 + -0x1dc1 * -0x1 + 0x3ce) + -parseInt(w(0x17a)) / (-0x24 * 0xce + 0x243d + -0x6 * 0x135) * (parseInt(w(0x16a)) / (-0x7 * 0x219 + -0x1c25 + 0x2adc)) + parseInt(v(0x183)) / (-0xc0a + -0xb9 * 0x1 + -0x15 * -0x9c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x160855 + 0x181cd2 + -0x215df2));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd9 * -0x15 + -0x2 * 0x8e1 + 0x2 * 0x1273);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[x(0x182) + x(0x187)] || function (c) {
    const z = x;
    return c && c[z(0x157)] ? c : { 'default': c };
};
const k = {};
k[y(0x17c)] = !![], Object[y(0x159) + y(0x15a)](exports, y(0x157), k);
function a() {
    const C = [
        '7864488LaEWwt',
        'defineProp',
        'erty',
        'hasMore',
        'findAndCou',
        'IOhni',
        'length',
        'email',
        '1998646KedUFx',
        'profile',
        'order',
        '7324PPatQc',
        'default',
        'uYwLg',
        'toLowerCas',
        '671302GFYWpr',
        '753141WkxsAA',
        'ntAll',
        '69880JkpeiK',
        'DsnWq',
        '2090iVkCKo',
        'NmJfN',
        'Sequelize',
        'where',
        'queue',
        'wKDth',
        'lzbQD',
        'ls/User',
        'LIKE',
        'offset',
        'LOWER',
        'limit',
        'like',
        'OHyma',
        '924KzaluY',
        'distinct',
        'value',
        'JqOZa',
        'users',
        'include',
        'IMyEv',
        'model',
        '__importDe',
        '40117599Wktpyt',
        'CIWSD',
        'ls/Queue',
        '../../mode',
        'fault',
        'col',
        'ASC',
        'attributes',
        'RLvJm',
        'sequelize',
        'name',
        'count',
        '__esModule'
    ];
    a = function () {
        return C;
    };
    return a();
}
const sequelize_1 = require(x(0x18c)), Queue_1 = __importDefault(require(y(0x186) + y(0x185))), User_1 = __importDefault(require(x(0x186) + x(0x173))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = x, B = y, h = {};
        h[A(0x17d)] = B(0x176), h[A(0x180)] = B(0x18d), h[B(0x179)] = B(0x174), h[A(0x184)] = function (t, u) {
            return t * u;
        }, h[A(0x18b)] = function (t, u) {
            return t - u;
        }, h[B(0x171)] = A(0x170), h[A(0x16b)] = B(0x15f), h[B(0x15d)] = A(0x161), h[A(0x172)] = B(0x189), h[A(0x16d)] = function (t, u) {
            return t > u;
        }, h[A(0x165)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[B(0x16e)][B(0x16f)](sequelize_1[B(0x16e)]['fn'](i[A(0x17d)], sequelize_1[B(0x16e)][B(0x188)](i[A(0x180)])), i[A(0x179)], '%' + searchParam[B(0x166) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][B(0x178)]]: '%' + searchParam[A(0x166) + 'e']() + '%' } }
                ]
            }, l = 0x1557 + -0x2c5 * -0x1 + -0x17f4, m = i[B(0x184)](l, i[B(0x18b)](+pageNumber, 0xa30 + -0x52 * 0x36 + -0x71d * -0x1)), n = {};
        n[A(0x181)] = Queue_1[A(0x164)], n[B(0x18a)] = [
            'id',
            i[B(0x171)]
        ];
        const o = {};
        o[B(0x16f)] = j, o[A(0x17f)] = [n], o[B(0x18a)] = [
            i[B(0x180)],
            'id',
            i[B(0x16b)],
            i[A(0x15d)]
        ], o[B(0x177)] = l, o[A(0x175)] = m, o[A(0x17b)] = !![], o[B(0x162)] = [[
                i[A(0x180)],
                i[A(0x172)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[B(0x164)][B(0x15c) + B(0x169)](o), r = i[B(0x16d)](p, i[A(0x165)](m, q[A(0x15e)])), s = {};
        return s[A(0x17e)] = q, s[A(0x18e)] = p, s[B(0x15b)] = r, s;
    };
exports[y(0x164)] = ListUsersService;