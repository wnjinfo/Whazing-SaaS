'use strict';
function a() {
    const F = [
        'PRspp',
        'rs/AppErro',
        '1945426hfKYGW',
        'value',
        'ERR_DELETE',
        '_WAPP_MSG',
        'g.us',
        'sendMessag',
        '11QVOOXA',
        'default',
        'defineProp',
        '\x20found\x20wit',
        'log',
        '__importDe',
        'where',
        'isGroup',
        'ls/Message',
        'No\x20message',
        'leys',
        '18YAbRVf',
        '6kzHpAa',
        'ticket',
        '../../mode',
        's.whatsapp',
        'rWqqh',
        '177893PmHrIx',
        'ketWbotBai',
        'hKUCP',
        '.net',
        'model',
        '32pdUYyD',
        'jZdsp',
        'isDeleted',
        '6379850UTPXfP',
        'erty',
        '3167523ZODcnF',
        'ers/GetWbo',
        'number',
        'EArBR',
        '68055780JifapD',
        '8cyHfVk',
        'tMessageBa',
        'update',
        'contact',
        'ls/Ticket',
        'ileys',
        'parse',
        'ers/GetTic',
        '../../help',
        '../../erro',
        'dataJson',
        '16961930LTFjpt',
        'delete',
        '__esModule',
        'include',
        '510897tDEjMX',
        'h\x20this\x20ID.',
        'fault',
        'key',
        'findOne',
        'kguTX'
    ];
    a = function () {
        return F;
    };
    return a();
}
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(y(0x17b)) / (0x5b7 + -0x2124 * 0x1 + 0x1b6e) * (parseInt(y(0x175)) / (-0x1e38 + -0xf88 + 0x2dc2)) + parseInt(y(0x199)) / (-0x51 * 0x1a + 0x9 * 0x3ba + -0x194d) * (parseInt(z(0x180)) / (-0xcb4 + 0x4 * -0x50e + 0x20f0)) + parseInt(z(0x183)) / (0x128e + 0x13e3 + -0x266c) * (parseInt(y(0x176)) / (-0x183a + 0x67 * -0x61 + -0x3f47 * -0x1)) + parseInt(z(0x1a1)) / (0x3 * -0xc5a + 0x24c * -0x3 + -0x1 * -0x2bf9) * (parseInt(z(0x18a)) / (-0x1067 + 0x865 + 0x93 * 0xe)) + parseInt(z(0x185)) / (-0x19 * -0x187 + 0x21 * -0x31 + -0x1fd5) + -parseInt(z(0x195)) / (-0xa4 * 0x3b + -0x13ed + -0x35 * -0x117) * (-parseInt(y(0x1a7)) / (-0x1e48 + -0x1c53 + 0x3aa6 * 0x1)) + -parseInt(y(0x189)) / (-0xbd * -0xb + -0x4f9 + 0x2 * -0x18d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3c447 + -0x89015 * 0x2 + 0x1b00a1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x287 * 0x3 + 0x17 * -0x26 + -0x1 * 0x2bf);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[A(0x16f) + B(0x19b)] || function (c) {
    const C = B;
    return c && c[C(0x197)] ? c : { 'default': c };
};
const k = {};
k[A(0x1a2)] = !![], Object[B(0x16c) + A(0x184)](exports, B(0x197), k);
const AppError_1 = __importDefault(require(B(0x193) + A(0x1a0) + 'r')), Message_1 = __importDefault(require(B(0x178) + B(0x172))), Ticket_1 = __importDefault(require(B(0x178) + A(0x18e))), GetTicketWbotBaileys_1 = __importDefault(require(B(0x192) + B(0x191) + A(0x17c) + B(0x174))), GetWbotMessageBaileys_1 = __importDefault(require(B(0x192) + B(0x186) + B(0x18b) + B(0x18f))), DeleteWhatsAppMessage = async i => {
        const D = B, E = B, j = {};
        j[D(0x17d)] = E(0x177), j[E(0x19e)] = D(0x18d), j[E(0x188)] = D(0x173) + D(0x16d) + D(0x19a), j[D(0x17a)] = D(0x1a5), j[E(0x19f)] = E(0x179) + D(0x17e), j[E(0x181)] = E(0x1a3) + D(0x1a4);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[D(0x17f)] = Ticket_1[E(0x1a8)], n['as'] = l[E(0x17d)], n[E(0x198)] = [l[D(0x19e)]];
        const o = {};
        o[E(0x170)] = m, o[D(0x198)] = [n];
        const p = await Message_1[E(0x1a8)][E(0x19d)](o);
        if (!p)
            throw new AppError_1[(E(0x1a8))](l[D(0x188)]);
        const {ticket: q} = p, r = await (-0x4 * 0x1ca + 0xa75 * -0x1 + 0x5df * 0x3, GetWbotMessageBaileys_1[E(0x1a8)])(q, i);
        try {
            const t = await (-0x36d * 0xb + 0x2398 + 0x217, GetTicketWbotBaileys_1[D(0x1a8)])(q), u = r, v = JSON[E(0x190)](u[D(0x194)]), w = {};
            w[D(0x196)] = v[E(0x19c)], await t[D(0x1a6) + 'e'](q[E(0x18d)][E(0x187)] + '@' + (q[D(0x171)] ? l[E(0x17a)] : l[D(0x19f)]), w);
        } catch (x) {
            console[E(0x16e)](x);
            throw new AppError_1[(E(0x1a8))](l[D(0x181)]);
        }
        const s = {};
        return s[D(0x182)] = !![], await p[E(0x18c)](s), p;
    };
exports[A(0x1a8)] = DeleteWhatsAppMessage;