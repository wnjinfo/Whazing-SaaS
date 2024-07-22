'use strict';
const A = b, B = b;
(function (c, d) {
    const y = b, z = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(y(0x108)) / (0xaa + -0x2459 + -0x8 * -0x476) * (-parseInt(z(0x12c)) / (0x17a5 + -0x375 + -0x142e)) + parseInt(y(0x120)) / (0x1 * -0x9a3 + -0x26e1 * 0x1 + 0x3087) + -parseInt(y(0x103)) / (0xa23 + 0x1822 + 0x3 * -0xb6b) + parseInt(z(0x133)) / (-0x133 + -0x1 * 0x72d + 0x133 * 0x7) * (-parseInt(y(0x114)) / (-0xa * 0x30a + 0x1e29 + 0x41)) + parseInt(y(0x13b)) / (0x56 * 0x5c + 0x8ed + -0x27ce) * (-parseInt(z(0x107)) / (-0x4 * 0x721 + 0x1c8b + 0x1)) + parseInt(z(0x118)) / (0x1dc3 + 0x207a + -0x3e34) + -parseInt(y(0x13d)) / (-0x1044 + 0x21b * -0x1 + 0x1269) * (-parseInt(z(0x12a)) / (-0x1 * 0x1d0b + -0xad * -0x23 + 0x56f));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x20486 + 0xdb100 + -0x3fa77));
var __importDefault = this && this[A(0x113) + A(0x124)] || function (c) {
    const C = A;
    return c && c[C(0x109)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x10 + 0x3f * -0x3b + 0xf97);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[B(0x137)] = !![], Object[A(0x13a) + A(0x105)](exports, B(0x109), k);
function a() {
    const F = [
        'ls/Ticket',
        '../../help',
        '5940720vsIrbc',
        'update',
        'include',
        'ketWbotBai',
        'ileys',
        'ers/GetTic',
        'parse',
        'JNSzq',
        '1067178TTfIBH',
        'key',
        'ls/Message',
        'g.us',
        'fault',
        'leys',
        'ticket',
        'tMessageBa',
        'No\x20message',
        '../../erro',
        '64581GLsZLI',
        'mLugK',
        '278bpJbLZ',
        'where',
        'log',
        'model',
        '../../mode',
        'ZjDIR',
        'isDeleted',
        '1332035dAnBCP',
        'ERR_DELETE',
        '\x20found\x20wit',
        's.whatsapp',
        'value',
        'h\x20this\x20ID.',
        'contact',
        'defineProp',
        '7JQyvlR',
        'CkHUn',
        '1920xWCSQJ',
        'findOne',
        '407692UeoUjX',
        'rs/AppErro',
        'erty',
        'isGroup',
        '6055136TBbAua',
        '139WhrKIm',
        '__esModule',
        'delete',
        'nUBvg',
        'dataJson',
        'default',
        '.net',
        '_WAPP_MSG',
        'ers/GetWbo',
        'number',
        'sendMessag',
        '__importDe',
        '18DhcOii',
        'dLjlL'
    ];
    a = function () {
        return F;
    };
    return a();
}
const AppError_1 = __importDefault(require(B(0x129) + A(0x104) + 'r')), Message_1 = __importDefault(require(A(0x130) + B(0x122))), Ticket_1 = __importDefault(require(B(0x130) + A(0x116))), GetTicketWbotBaileys_1 = __importDefault(require(A(0x117) + A(0x11d) + B(0x11b) + B(0x125))), GetWbotMessageBaileys_1 = __importDefault(require(B(0x117) + A(0x110) + B(0x127) + A(0x11c))), DeleteWhatsAppMessage = async i => {
        const D = B, E = B, j = {};
        j[D(0x115)] = D(0x126), j[E(0x10b)] = E(0x139), j[E(0x13c)] = D(0x128) + D(0x135) + D(0x138), j[E(0x131)] = E(0x123), j[E(0x11f)] = E(0x136) + E(0x10e), j[D(0x12b)] = D(0x134) + D(0x10f);
        const l = j, m = {};
        m['id'] = i;
        const n = {};
        n[D(0x12f)] = Ticket_1[E(0x10d)], n['as'] = l[D(0x115)], n[D(0x11a)] = [l[E(0x10b)]];
        const o = {};
        o[E(0x12d)] = m, o[E(0x11a)] = [n];
        const p = await Message_1[E(0x10d)][E(0x102)](o);
        if (!p)
            throw new AppError_1[(E(0x10d))](l[E(0x13c)]);
        const {ticket: q} = p, r = await (-0x95 * 0x1d + 0x24c6 + -0x13e5, GetWbotMessageBaileys_1[E(0x10d)])(q, i);
        try {
            const t = await (0xe86 + 0x2261 + -0xd * 0x3c3, GetTicketWbotBaileys_1[E(0x10d)])(q), u = r, v = JSON[E(0x11e)](u[E(0x10c)]), w = {};
            w[D(0x10a)] = v[D(0x121)], await t[D(0x112) + 'e'](q[E(0x139)][E(0x111)] + '@' + (q[E(0x106)] ? l[E(0x131)] : l[D(0x11f)]), w);
        } catch (x) {
            console[D(0x12e)](x);
            throw new AppError_1[(D(0x10d))](l[D(0x12b)]);
        }
        const s = {};
        return s[D(0x132)] = !![], await p[D(0x119)](s), p;
    };
exports[B(0x10d)] = DeleteWhatsAppMessage;