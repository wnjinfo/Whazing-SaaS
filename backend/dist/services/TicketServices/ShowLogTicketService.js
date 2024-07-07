'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x117)) / (0x1505 * 0x1 + -0x846 * 0x4 + 0xc14) * (parseInt(q(0x12c)) / (0x28 + 0x545 * -0x3 + 0xfa9)) + -parseInt(q(0x120)) / (0x12a6 * -0x1 + 0x13ee + -0x145) * (parseInt(q(0x112)) / (-0xa62 + 0xf98 + -0x532)) + -parseInt(q(0x129)) / (-0x1127 + -0x165 * -0x5 + -0xa33 * -0x1) + parseInt(r(0x126)) / (-0x1d77 * -0x1 + 0xef5 + -0x2c66) + parseInt(r(0x114)) / (-0x1 * 0x229d + 0x15 * -0x6a + 0x2b56) * (parseInt(r(0x113)) / (-0x1934 * -0x1 + -0x1557 + -0x9 * 0x6d)) + -parseInt(r(0x11d)) / (0x3 * -0x9c8 + 0x168f + 0x6d2) + parseInt(q(0x125)) / (0x35f * -0xb + 0x1a47 + -0x2 * -0x56c) * (parseInt(r(0x108)) / (-0x143c + 0x1b92 * -0x1 + 0x2fd9));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2638 * 0x61 + -0x94455 + 0x246f12));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1099 + 0x2 * 0x1e2 + 0x3de * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[s(0x111) + s(0x121)] || function (c) {
    const u = t;
    return c && c[u(0x11c)] ? c : { 'default': c };
};
const k = {};
function a() {
    const x = [
        'value',
        '10848IPAfDI',
        'fault',
        'ls/Queue',
        'user',
        'GpWYF',
        '211690KqoaQT',
        '1235694MNaZNk',
        'include',
        'DESC',
        '1695150BTZsyA',
        'ls/LogTick',
        'createdAt',
        '920342inNlfN',
        'attributes',
        'YWJEz',
        '1430UiUIoS',
        'NnoXq',
        'order',
        'where',
        'default',
        'DpLvc',
        'ticketId',
        '../../mode',
        'queue',
        '__importDe',
        '916gMMDrp',
        '47192fYVNbd',
        '7tdgjyA',
        'name',
        'defineProp',
        '1ZTiSbg',
        'model',
        'ls/User',
        'pDhRm',
        'erty',
        '__esModule',
        '4546692UyhcOE',
        'findAll'
    ];
    a = function () {
        return x;
    };
    return a();
}
k[t(0x11f)] = !![], Object[s(0x116) + s(0x11b)](exports, t(0x11c), k);
const LogTicket_1 = __importDefault(require(t(0x10f) + t(0x12a) + 'et')), User_1 = __importDefault(require(t(0x10f) + t(0x119))), Queue_1 = __importDefault(require(s(0x10f) + s(0x122))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = t, w = s, i = {};
        i[v(0x11a)] = v(0x123), i[w(0x124)] = w(0x115), i[w(0x107)] = w(0x110), i[v(0x10d)] = w(0x12b), i[v(0x109)] = w(0x128);
        const j = i, l = {};
        l[w(0x10e)] = h;
        const m = {};
        m[w(0x118)] = User_1[w(0x10c)], m['as'] = j[v(0x11a)], m[w(0x12d)] = [
            'id',
            j[v(0x124)]
        ];
        const n = {};
        n[w(0x118)] = Queue_1[w(0x10c)], n['as'] = j[w(0x107)], n[v(0x12d)] = [
            'id',
            j[v(0x107)]
        ];
        const o = {};
        o[w(0x10b)] = l, o[v(0x127)] = [
            m,
            n
        ], o[w(0x10a)] = [[
                j[w(0x10d)],
                j[w(0x109)]
            ]];
        const p = await LogTicket_1[w(0x10c)][v(0x11e)](o);
        return p;
    };
exports[t(0x10c)] = ShowLogTicketService;