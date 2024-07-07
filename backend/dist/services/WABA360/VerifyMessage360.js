'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x122)) / (-0x1e8f + -0x1 * 0x20ab + -0x3f3b * -0x1) + -parseInt(p(0x112)) / (-0x65b * 0x3 + 0x456 * -0x2 + 0x1bbf) * (parseInt(o(0x11a)) / (-0x2546 + -0x1197 * 0x1 + 0x36e0)) + -parseInt(o(0x11d)) / (-0x14b7 + 0x10ee + -0x7 * -0x8b) * (parseInt(p(0x10c)) / (-0xea6 + -0x1 * 0x1d42 + 0x8c9 * 0x5)) + parseInt(o(0x108)) / (-0xc8f + 0x4fe + 0x797) * (-parseInt(o(0x110)) / (-0x212 * -0x10 + 0x14f * 0x1d + -0x1 * 0x470c)) + -parseInt(o(0x125)) / (0xedf + -0x69f * -0x3 + -0x22b4) * (-parseInt(o(0x120)) / (-0x15b * -0x16 + -0x16b + -0x1c5e)) + -parseInt(p(0x121)) / (-0x2f * 0x1d + -0xb34 + 0x1091) + -parseInt(p(0x116)) / (0x17e5 + -0x1d8 + -0x1602) * (-parseInt(o(0x115)) / (0x3e * -0x3d + 0x2 * 0x88a + 0x22 * -0x11));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xe0c5e + -0x1862ba + 0x14c4 * 0x11e));
var __importDefault = this && this[q(0x10b) + r(0x111)] || function (c) {
    const s = q;
    return c && c[s(0x128)] ? c : { 'default': c };
};
const k = {};
k[r(0x10a)] = !![], Object[r(0x11c) + r(0x107)](exports, q(0x128), k);
function a() {
    const v = [
        'muNGr',
        'messageId',
        '3311jYYIUD',
        'fault',
        '353178HtpMts',
        'reateMessa',
        'Services/C',
        '13332iLDVCF',
        '39985xmcEAg',
        'text',
        'ticketId',
        'messageDat',
        '21BbIaAo',
        '../Message',
        'defineProp',
        '323920xGGBJf',
        'fromMe',
        'update',
        '9IQSqJs',
        '16083270USzlTz',
        '118212mtDBWe',
        'status',
        'geService',
        '12133792TaiJaC',
        'received',
        'body',
        '__esModule',
        'tenantId',
        'type',
        'default',
        'read',
        'mediaType',
        'getTime',
        'erty',
        '17058WypQrV',
        'timestamp',
        'value',
        '__importDe',
        '25zrkuTF',
        'contactId'
    ];
    a = function () {
        return v;
    };
    return a();
}
const CreateMessageService_1 = __importDefault(require(q(0x11b) + q(0x114) + r(0x113) + q(0x124))), VerifyMessage360 = async (f, g, h) => {
        const t = q, u = r, i = {};
        i[t(0x10e)] = t(0x126);
        const j = i, l = {};
        l[t(0x10f)] = f['id'] || '', l[t(0x118)] = g['id'], l[u(0x10d)] = f[t(0x11e)] ? undefined : h['id'], l[t(0x127)] = f[t(0x117)]?.[u(0x127)] || '', l[t(0x11e)] = f[u(0x11e)], l[u(0x105)] = f[t(0x12a)], l[t(0x104)] = f[u(0x11e)], l[t(0x109)] = +f[u(0x109)], l[t(0x123)] = j[u(0x10e)];
        const m = l;
        await g[t(0x11f)]({
            'lastMessage': m[u(0x127)],
            'lastMessageAt': new Date()[u(0x106)](),
            'answered': f[t(0x11e)] || ![]
        });
        const n = {};
        n[u(0x119) + 'a'] = m, n[t(0x129)] = g[t(0x129)], await (-0x9 * -0x281 + -0x2 * 0xda1 + 0x1 * 0x4b9, CreateMessageService_1[u(0x12b)])(n);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1bbb + 0x59 * 0x43 + -0x3202);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x12b)] = VerifyMessage360;