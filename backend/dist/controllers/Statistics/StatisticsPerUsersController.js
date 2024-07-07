'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x180)) / (-0x822 * -0x3 + 0x1 * -0x270d + 0x3aa * 0x4) + parseInt(m(0x16e)) / (-0x1 * 0x2627 + 0x8df * 0x1 + 0x1d4a) + parseInt(l(0x170)) / (-0x689 + 0xbc9 + -0x53d) * (parseInt(m(0x185)) / (0xa * 0x203 + -0x1a59 + -0x27 * -0x29)) + parseInt(l(0x184)) / (0x8d9 + 0x1799 + -0x206d) * (parseInt(m(0x17e)) / (0xe * -0x1cf + -0x451 + -0x1 * -0x1da9)) + -parseInt(m(0x179)) / (0x2505 + -0x243d * 0x1 + -0xc1) + parseInt(l(0x174)) / (-0x9d2 + 0x2e * -0x51 + -0x2c * -0x8e) + -parseInt(l(0x16d)) / (-0x1 * -0x59d + 0x1ad8 * 0x1 + 0x5 * -0x67c);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2 * -0xbf143 + -0x9f52 * -0x10 + -0x1333e5 * 0x1));
var __importDefault = this && this[n(0x17d) + o(0x17b)] || function (c) {
    const p = o;
    return c && c[p(0x17c)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x5 * 0x211 + 0x1ef0 + -0x27d9);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const s = [
        'value',
        '878127LVmoNP',
        'json',
        'erty',
        'endDate',
        '9267608fNXleq',
        'index',
        'default',
        'ices/Stati',
        'user',
        '4534712IJfDEo',
        'stics/Stat',
        'fault',
        '__esModule',
        '__importDe',
        '498KBvRjC',
        'sers',
        '503146wZaaiY',
        'startDate',
        'defineProp',
        'isticsPerU',
        '45925YqJqGv',
        '8JSjzRB',
        'query',
        'tenantId',
        '../../serv',
        '4899645pGoELg',
        '297136LszNrF'
    ];
    a = function () {
        return s;
    };
    return a();
}
const k = {};
k[n(0x16f)] = !![], Object[n(0x182) + o(0x172)](exports, o(0x17c), k), exports[o(0x175)] = void (0x2659 + 0x2 * -0x2dd + -0x209f);
const StatisticsPerUsers_1 = __importDefault(require(o(0x16c) + n(0x177) + o(0x17a) + n(0x183) + o(0x17f))), index = async (d, e) => {
        const q = o, r = n, {tenantId: f} = d[q(0x178)], {
                startDate: g,
                endDate: h
            } = d[r(0x186)], i = {};
        i[r(0x181)] = g, i[r(0x173)] = h, i[q(0x187)] = f;
        const j = await (0x219 + 0xc80 + 0x1 * -0xe99, StatisticsPerUsers_1[r(0x176)])(i);
        return e[q(0x171)](j);
    };
exports[n(0x175)] = index;