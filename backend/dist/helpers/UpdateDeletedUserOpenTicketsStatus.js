'use strict';
function a() {
    const w = [
        '__esModule',
        'default',
        'defineProp',
        '634257pYLkkf',
        'ticketData',
        'toString',
        's/TicketSe',
        '2286792HbtWtl',
        'userIdRequ',
        '2342415sFbSKe',
        'rvices/Upd',
        '5115920KUsJzI',
        'status',
        'forEach',
        'tenantId',
        'fault',
        'value',
        '3uFsQHU',
        'ticketId',
        '3252942YLEZzx',
        '1434510ibnYru',
        '172014mtvudk',
        'cJodF',
        '../service',
        'est',
        'pending',
        'ervice',
        'ateTicketS',
        'erty',
        '__importDe'
    ];
    a = function () {
        return w;
    };
    return a();
}
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0xaa)) / (0x1 * -0x24cb + 0x2 * 0x1fd + 0x20d2) + -parseInt(n(0xbc)) / (0x1c81 + 0x1a80 + 0x3 * -0x1255) * (-parseInt(o(0xb8)) / (0xb1 * -0x1d + -0x14c + 0x155c)) + parseInt(n(0xae)) / (-0x1eeb + 0x15c4 + 0x1 * 0x92b) + parseInt(o(0xb0)) / (0x156e + -0x1e83 + -0x5 * -0x1d2) + -parseInt(o(0xba)) / (-0x613 * -0x1 + -0x10f + 0x1aa * -0x3) + -parseInt(n(0xbb)) / (0x8 * 0x36a + 0x1 * 0x145d + -0x2fa6) + -parseInt(n(0xb2)) / (-0x210d + -0x88e + 0xde1 * 0x3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xb24fc + -0x4 * -0x919 + -0x594f4 * 0x1));
var __importDefault = this && this[p(0xc4) + q(0xb6)] || function (c) {
    const r = q;
    return c && c[r(0xc5)] ? c : { 'default': c };
};
const k = {};
k[q(0xb7)] = !![], Object[p(0xc7) + q(0xc3)](exports, p(0xc5), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x1 * 0xe13 + -0x7b1 + 0x166e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const UpdateTicketService_1 = __importDefault(require(p(0xbe) + q(0xad) + p(0xb1) + p(0xc2) + q(0xc1))), UpdateDeletedUserOpenTicketsStatus = async (d, e, f) => {
        const s = q, t = p, g = {};
        g[s(0xbd)] = t(0xc0);
        const h = g;
        d[s(0xb4)](async i => {
            const u = t, v = s, j = i['id'][u(0xac)](), l = {};
            l[v(0xb3)] = h[v(0xbd)], l[v(0xb5)] = e;
            const m = {};
            m[v(0xab)] = l, m[v(0xb9)] = j, m[u(0xaf) + u(0xbf)] = f, await (-0xf7d + 0x1387 + -0x40a, UpdateTicketService_1[v(0xc6)])(m);
        });
    };
exports[q(0xc6)] = UpdateDeletedUserOpenTicketsStatus;