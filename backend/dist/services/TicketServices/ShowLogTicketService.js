'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x98)) / (-0x1473 + 0x208b + -0xc17) + -parseInt(r(0xbb)) / (-0x22 * -0x63 + 0x527 * 0x2 + -0x1772) + -parseInt(q(0xa4)) / (0x11 * -0x18c + 0x1815 + 0x2 * 0x11d) + parseInt(q(0xbc)) / (0x2b6 + 0x1 * 0xaff + -0xdb1 * 0x1) * (parseInt(r(0xac)) / (-0x2088 + 0x825 + 0x1868)) + parseInt(r(0xa9)) / (-0x29 * -0x1f + -0xc0b * 0x1 + 0x71a) * (parseInt(r(0xa8)) / (0x1 * -0x1223 + 0xd * 0x258 + -0xc4e)) + -parseInt(r(0xb0)) / (-0x1695 + -0x21 * 0xd0 + 0x316d) * (-parseInt(r(0xb9)) / (0xfd9 + -0x1ec * -0xc + 0x8 * -0x4dc)) + parseInt(q(0xa1)) / (-0x2671 * -0x1 + -0x5 * -0x689 + -0x4 * 0x11c5) * (-parseInt(r(0x9d)) / (-0xf70 + -0x24e0 + 0x345b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x48 * -0x34a9 + -0x1136e2 + 0x7f0be * 0x2));
var __importDefault = this && this[s(0x99) + t(0x9e)] || function (c) {
    const u = s;
    return c && c[u(0x9b)] ? c : { 'default': c };
};
const k = {};
function a() {
    const x = [
        '155766WEuXYN',
        'nUzPF',
        'findAll',
        '5PoOzzK',
        'model',
        'default',
        'ls/LogTick',
        '32696ihEaih',
        '../../mode',
        'name',
        'user',
        'ls/User',
        'ticketId',
        'DESC',
        'include',
        'pOmRg',
        '2889hiuYEI',
        'attributes',
        '949462MIDaUE',
        '2014148wPtjNA',
        'order',
        'noIvU',
        '1756214jykSRB',
        '__importDe',
        'tQagt',
        '__esModule',
        'where',
        '5236hKhqGB',
        'fault',
        'erty',
        'value',
        '43080sghBAw',
        'jtmtY',
        'createdAt',
        '2747922rqIlQg',
        'defineProp',
        'ls/Queue',
        'queue',
        '203ICmftG'
    ];
    a = function () {
        return x;
    };
    return a();
}
k[t(0xa0)] = !![], Object[s(0xa5) + s(0x9f)](exports, s(0x9b), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x69d + 0x1f37 * 0x1 + -0x1803);
        let h = e[f];
        return h;
    }, b(c, d);
}
const LogTicket_1 = __importDefault(require(t(0xb1) + t(0xaf) + 'et')), User_1 = __importDefault(require(s(0xb1) + s(0xb4))), Queue_1 = __importDefault(require(t(0xb1) + s(0xa6))), ShowLogTicketService = async ({ticketId: h}) => {
        const v = t, w = s, i = {};
        i[v(0xaa)] = w(0xb3), i[w(0xa2)] = w(0xb2), i[w(0x97)] = w(0xa7), i[v(0xb8)] = v(0xa3), i[v(0x9a)] = w(0xb6);
        const j = i, l = {};
        l[w(0xb5)] = h;
        const m = {};
        m[w(0xad)] = User_1[v(0xae)], m['as'] = j[v(0xaa)], m[w(0xba)] = [
            'id',
            j[w(0xa2)]
        ];
        const n = {};
        n[w(0xad)] = Queue_1[w(0xae)], n['as'] = j[v(0x97)], n[w(0xba)] = [
            'id',
            j[w(0x97)]
        ];
        const o = {};
        o[w(0x9c)] = l, o[w(0xb7)] = [
            m,
            n
        ], o[v(0xbd)] = [[
                j[w(0xb8)],
                j[v(0x9a)]
            ]];
        const p = await LogTicket_1[v(0xae)][v(0xab)](o);
        return p;
    };
exports[s(0xae)] = ShowLogTicketService;