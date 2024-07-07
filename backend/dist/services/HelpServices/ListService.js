'use strict';
function a() {
    const z = [
        '2134650zSssqo',
        'title',
        'LOWER',
        'fault',
        'PXeVB',
        'ls/Help',
        'value',
        'where',
        'ntAll',
        'trim',
        '59112mfikEC',
        '__importDe',
        'gsRPf',
        'length',
        'hasMore',
        'JAbfX',
        '1667199unGORO',
        '1YtvlTC',
        'sxZaS',
        'toLowerCas',
        'OeQbx',
        'records',
        'NRLZg',
        'sequelize',
        'count',
        'LIKE',
        'jvalI',
        '35679580HPtWAS',
        'limit',
        'findAndCou',
        'Sequelize',
        '1341TUMSZc',
        '3809916NIkoPj',
        'col',
        '2305276XMChQw',
        '4FtmoJP',
        '9313640OPPvUm',
        'ASC',
        'uuYsp',
        'offset',
        'default',
        'defineProp',
        '../../mode',
        '__esModule',
        'order',
        'erty'
    ];
    a = function () {
        return z;
    };
    return a();
}
const u = b, v = b;
(function (c, d) {
    const s = b, t = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(s(0x1a2)) / (0x1e8e * 0x1 + 0x18bd + -0x374a) * (parseInt(s(0x1b3)) / (0x119b * -0x1 + -0x943 + 0x1ae0)) + parseInt(s(0x1a1)) / (-0x1 * -0x4ef + -0x1158 + -0x31b * -0x4) * (parseInt(s(0x1b4)) / (-0x2f * 0x8a + 0x1a79 + 0x29 * -0x7)) + -parseInt(t(0x1bf)) / (0x1b0b + -0x94e + -0x11b8) + parseInt(s(0x1b1)) / (0x2 * -0xfd1 + 0x3dd * 0x4 + 0x1034) + -parseInt(t(0x1b5)) / (0x3c0 + 0xe21 + -0x11da) + parseInt(s(0x1c9)) / (0x10f * -0x3 + -0x989 * -0x4 + -0x22ef) * (-parseInt(s(0x1b0)) / (-0x26ab + -0xc * -0x161 + 0x1628)) + parseInt(t(0x1ac)) / (-0x632 * -0x1 + 0x176c + 0x9dc * -0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0xf634c + -0x101 * 0xa31 + -0xc57a3 * -0x3));
var __importDefault = this && this[u(0x1ca) + u(0x1c2)] || function (c) {
    const w = v;
    return c && c[w(0x1bc)] ? c : { 'default': c };
};
const k = {};
k[u(0x1c5)] = !![], Object[v(0x1ba) + v(0x1be)](exports, u(0x1bc), k);
const sequelize_1 = require(v(0x1a8)), Help_1 = __importDefault(require(v(0x1bb) + u(0x1c4))), ListService = async ({
        searchParam: searchParam = '',
        pageNumber: pageNumber = '1'
    }) => {
        const x = v, y = v, f = {};
        f[x(0x1a3)] = x(0x1c1), f[x(0x1ce)] = x(0x1c0), f[y(0x1a5)] = x(0x1aa), f[x(0x1a7)] = function (q, r) {
            return q * r;
        }, f[y(0x1c3)] = function (q, r) {
            return q - r;
        }, f[y(0x1b7)] = y(0x1b6), f[x(0x1cb)] = function (q, r) {
            return q > r;
        }, f[x(0x1ab)] = function (q, r) {
            return q + r;
        };
        const g = f, h = { [sequelize_1['Op']['or']]: [{ 'title': sequelize_1[x(0x1af)][y(0x1c6)](sequelize_1[y(0x1af)]['fn'](g[y(0x1a3)], sequelize_1[y(0x1af)][y(0x1b2)](g[x(0x1ce)])), g[y(0x1a5)], '%' + searchParam[x(0x1a4) + 'e']()[y(0x1c8)]() + '%') }] }, i = 0x18 * 0x2c + -0xb49 + 0x11 * 0x6d, j = g[y(0x1a7)](i, g[x(0x1c3)](+pageNumber, 0x53 * 0x42 + -0x8d * 0x1d + 0x1 * -0x56c)), l = {};
        l[y(0x1c6)] = h, l[x(0x1ad)] = i, l[x(0x1b8)] = j, l[x(0x1bd)] = [[
                g[x(0x1ce)],
                g[y(0x1b7)]
            ]];
        const {
                count: m,
                rows: n
            } = await Help_1[x(0x1b9)][y(0x1ae) + x(0x1c7)](l), o = g[x(0x1cb)](m, g[y(0x1ab)](j, n[x(0x1cc)])), p = {};
        return p[y(0x1a6)] = n, p[y(0x1a9)] = m, p[y(0x1cd)] = o, p;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * 0x64d + -0xfa2 + 0x611 * 0x7);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[v(0x1b9)] = ListService;