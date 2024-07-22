'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x1b7)) / (0x9a3 * -0x4 + 0x1857 * 0x1 + 0xe36) * (parseInt(l(0x1be)) / (-0x37d + 0x87b * 0x1 + 0x16 * -0x3a)) + parseInt(m(0x1b0)) / (0x1 * 0x1f8e + -0x1617 + 0x2c * -0x37) + parseInt(m(0x1bc)) / (-0x10f2 + -0x1 * -0x407 + -0x1 * -0xcef) + -parseInt(m(0x1aa)) / (-0x201b + -0x1 * 0x191d + 0x393d) + parseInt(l(0x1b2)) / (-0x1 * -0x1b37 + -0x9b * -0x12 + -0x2617) + -parseInt(l(0x1b6)) / (0x166c + -0x1a * -0x13a + -0x3649 * 0x1) * (-parseInt(l(0x1ab)) / (0x1 * 0x1165 + 0x2503 + 0x122 * -0x30)) + -parseInt(m(0x1bb)) / (0x1798 + 0x7ac + -0x1 * 0x1f3b) * (parseInt(m(0x1ae)) / (-0xa2c + -0x2546 + 0x2f7c));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x73420 + -0x76fcd + 0x1ac666));
var __importDefault = this && this[n(0x1b3) + n(0x1a9)] || function (c) {
    const p = o;
    return c && c[p(0x1b9)] ? c : { 'default': c };
};
const k = {};
k[o(0x1b8)] = !![], Object[n(0x1b5) + n(0x1ac)](exports, n(0x1b9), k);
function a() {
    const s = [
        'type',
        '2dsCQsf',
        '../../mode',
        'create',
        'fault',
        '5228405movfWj',
        '2272RPKdLM',
        'erty',
        'default',
        '20QbHGXu',
        'queueId',
        '2689236uaIfKb',
        'ls/LogTick',
        '6507210ZdbXhj',
        '__importDe',
        'ticketId',
        'defineProp',
        '23891hSWmgK',
        '1120565UzYUbA',
        'value',
        '__esModule',
        'userId',
        '46341PEspSZ',
        '86248pzljaQ'
    ];
    a = function () {
        return s;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x13b4 + 0xdf * -0x15 + 0x3e);
        let h = e[f];
        return h;
    }, b(c, d);
}
const LogTicket_1 = __importDefault(require(o(0x1a7) + o(0x1b1) + 'et')), CreateLogTicketService = async ({
        type: d,
        userId: e,
        ticketId: f,
        queueId: g
    }) => {
        const q = n, r = n, h = {};
        h[q(0x1ba)] = e, h[r(0x1b4)] = f, h[q(0x1bd)] = d, h[q(0x1af)] = g, await LogTicket_1[r(0x1ad)][r(0x1a8)](h);
    };
exports[o(0x1ad)] = CreateLogTicketService;