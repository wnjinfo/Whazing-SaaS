'use strict';
function a() {
    const C = [
        'NBrlW',
        'where',
        'nHZxQ',
        '83797ovXstY',
        'jXKQY',
        'hasMore',
        'profile',
        'model',
        'order',
        '15298596xOofoE',
        'like',
        '728181vgbLeW',
        'col',
        'value',
        'default',
        'LIKE',
        'include',
        'length',
        '2SRaQHq',
        '20RxVKhv',
        'NtwDx',
        'ls/User',
        '2987094IjbaUP',
        'JtYdW',
        'fault',
        'toLowerCas',
        'ls/Queue',
        '1226995BpZeie',
        'LOWER',
        'findAndCou',
        '__importDe',
        'erty',
        '321397mhzasK',
        'limit',
        'count',
        'CFLeS',
        'distinct',
        'ntAll',
        '../../mode',
        'sequelize',
        'offset',
        'name',
        '__esModule',
        'TDtbt',
        'defineProp',
        'ASC',
        '6rkVwKy',
        'pyBIk',
        'email',
        'users',
        '6UJtEOw',
        'eKoIw',
        'queue',
        '748444SVcDge',
        'tgKvG',
        'Sequelize',
        'oGGuM',
        'attributes',
        '136tdfugT'
    ];
    a = function () {
        return C;
    };
    return a();
}
const x = b, y = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x22f4 * -0x1 + -0x1e4 + 0x2671);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0x1b3)) / (0x1 * 0x1ef9 + 0x11 * -0x1da + 0x82 * 0x1) * (parseInt(w(0x1a5)) / (-0x2205 * -0x1 + -0x145 + -0x20be)) + -parseInt(v(0x1c1)) / (-0x9f8 + 0x2e0 + 0x71b) * (parseInt(w(0x1c8)) / (-0x10a2 + 0x8 * -0x1a3 + -0x8d * -0x36)) + parseInt(v(0x1ae)) / (-0xc * -0x19b + 0x19cf + -0x2d0e) * (parseInt(v(0x1c5)) / (-0x422 + 0x49a * -0x4 + 0x8 * 0x2d2)) + -parseInt(v(0x1d1)) / (-0xee9 + -0xaa4 * -0x1 + 0x44c) * (parseInt(w(0x1cd)) / (0x1638 + 0x1ed6 + -0x16 * 0x269)) + -parseInt(v(0x19e)) / (-0xca * 0x13 + 0x1529 + -0x622) * (parseInt(v(0x1a6)) / (-0x7 * 0x12e + 0x1327 * -0x1 + 0x1b73)) + -parseInt(v(0x1a9)) / (-0x54b + 0x65d * 0x4 + -0x141e) + parseInt(w(0x19c)) / (0x2 * -0xd2c + 0x4 * 0x435 + -0x4 * -0x264);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2060c + 0x3e4cf + 0xfec5));
var __importDefault = this && this[x(0x1b1) + x(0x1ab)] || function (c) {
    const z = x;
    return c && c[z(0x1bd)] ? c : { 'default': c };
};
const k = {};
k[x(0x1a0)] = !![], Object[x(0x1bf) + x(0x1b2)](exports, x(0x1bd), k);
const sequelize_1 = require(y(0x1ba)), Queue_1 = __importDefault(require(y(0x1b9) + y(0x1ad))), User_1 = __importDefault(require(y(0x1b9) + y(0x1a8))), ListUsersService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1',
        tenantId: g
    }) => {
        const A = y, B = y, h = {};
        h[A(0x1c2)] = B(0x1af), h[A(0x1aa)] = A(0x1bc), h[B(0x1d0)] = B(0x1a2), h[B(0x1b6)] = function (t, u) {
            return t * u;
        }, h[A(0x1a7)] = function (t, u) {
            return t - u;
        }, h[B(0x1cb)] = A(0x1c7), h[B(0x1ce)] = A(0x1c3), h[A(0x1c9)] = B(0x199), h[A(0x1c6)] = B(0x1c0), h[B(0x1be)] = function (t, u) {
            return t > u;
        }, h[A(0x1d2)] = function (t, u) {
            return t + u;
        };
        const i = h, j = {
                'tenantId': g,
                [sequelize_1['Op']['or']]: [
                    { 'name': sequelize_1[B(0x1ca)][B(0x1cf)](sequelize_1[B(0x1ca)]['fn'](i[A(0x1c2)], sequelize_1[B(0x1ca)][A(0x19f)](i[B(0x1aa)])), i[B(0x1d0)], '%' + searchParam[B(0x1ac) + 'e']() + '%') },
                    { 'email': { [sequelize_1['Op'][A(0x19d)]]: '%' + searchParam[A(0x1ac) + 'e']() + '%' } }
                ]
            }, l = -0x1569 + -0x1 * -0xc0b + 0x2e * 0x35, m = i[B(0x1b6)](l, i[A(0x1a7)](+pageNumber, -0x8d3 * -0x2 + -0xa6 + -0x10ff)), n = {};
        n[A(0x19a)] = Queue_1[B(0x1a1)], n[B(0x1cc)] = [
            'id',
            i[A(0x1cb)]
        ];
        const o = {};
        o[B(0x1cf)] = j, o[B(0x1a3)] = [n], o[A(0x1cc)] = [
            i[B(0x1aa)],
            'id',
            i[B(0x1ce)],
            i[B(0x1c9)]
        ], o[A(0x1b4)] = l, o[A(0x1bb)] = m, o[A(0x1b7)] = !![], o[B(0x19b)] = [[
                i[A(0x1aa)],
                i[A(0x1c6)]
            ]];
        const {
                count: p,
                rows: q
            } = await User_1[A(0x1a1)][A(0x1b0) + A(0x1b8)](o), r = i[A(0x1be)](p, i[A(0x1d2)](m, q[A(0x1a4)])), s = {};
        return s[A(0x1c4)] = q, s[B(0x1b5)] = p, s[B(0x1d3)] = r, s;
    };
exports[y(0x1a1)] = ListUsersService;