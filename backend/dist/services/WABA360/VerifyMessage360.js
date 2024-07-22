'use strict';
const q = b, r = b;
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x1d9)) / (0x15ce + 0x256d + 0x13 * -0x31e) * (-parseInt(o(0x1dc)) / (0x5 * -0x38b + -0x4 * -0x404 + 0x1a9)) + parseInt(p(0x1c1)) / (0x109d * -0x1 + -0x833 + 0x18d3) + -parseInt(o(0x1ce)) / (-0x1ad4 + 0x417 + 0x16c1) + -parseInt(o(0x1cb)) / (-0x1a38 + 0x258d + -0xb50) + parseInt(o(0x1bf)) / (-0x414 + 0x2 * 0x12ef + -0x21c4) + -parseInt(p(0x1d2)) / (0x6db * -0x1 + -0x1cc4 + -0x2 * -0x11d3) + parseInt(o(0x1d8)) / (-0xc01 * -0x1 + -0xe66 * 0x2 + 0x10d3);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x3fed6 * 0x2 + 0xb22d * -0x11 + 0x1 * 0xaddf7));
var __importDefault = this && this[q(0x1c4) + r(0x1da)] || function (c) {
    const s = q;
    return c && c[s(0x1be)] ? c : { 'default': c };
};
function a() {
    const v = [
        '__importDe',
        'status',
        'messageDat',
        'received',
        'haggH',
        'body',
        'text',
        '2538030LytVTi',
        'fromMe',
        'messageId',
        '2990000fkBjVi',
        'reateMessa',
        'Services/C',
        'ticketId',
        '49378EYjXVf',
        'defineProp',
        'geService',
        'type',
        'getTime',
        'default',
        '8061056OSKlMG',
        '2ErvMEP',
        'fault',
        'read',
        '92264hMWeNW',
        'value',
        'erty',
        '../Message',
        'timestamp',
        'update',
        '__esModule',
        '2386872hMUpia',
        'mediaType',
        '674718BGzjzP',
        'tenantId',
        'contactId'
    ];
    a = function () {
        return v;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xa1 * 0x13 + 0x11e9 + -0x1 * 0x1c22);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[q(0x1dd)] = !![], Object[q(0x1d3) + q(0x1ba)](exports, q(0x1be), k);
const CreateMessageService_1 = __importDefault(require(r(0x1bb) + q(0x1d0) + r(0x1cf) + q(0x1d4))), VerifyMessage360 = async (f, g, h) => {
        const t = q, u = q, i = {};
        i[t(0x1c8)] = u(0x1c7);
        const j = i, l = {};
        l[u(0x1cd)] = f['id'] || '', l[t(0x1d1)] = g['id'], l[t(0x1c3)] = f[u(0x1cc)] ? undefined : h['id'], l[t(0x1c9)] = f[u(0x1ca)]?.[u(0x1c9)] || '', l[u(0x1cc)] = f[t(0x1cc)], l[t(0x1c0)] = f[u(0x1d5)], l[u(0x1db)] = f[u(0x1cc)], l[u(0x1bc)] = +f[u(0x1bc)], l[u(0x1c5)] = j[t(0x1c8)];
        const m = l;
        await g[u(0x1bd)]({
            'lastMessage': m[u(0x1c9)],
            'lastMessageAt': new Date()[u(0x1d6)](),
            'answered': f[u(0x1cc)] || ![]
        });
        const n = {};
        n[u(0x1c6) + 'a'] = m, n[t(0x1c2)] = g[t(0x1c2)], await (-0xb * -0xa3 + -0x13f * 0x13 + 0x10ac, CreateMessageService_1[u(0x1d7)])(n);
    };
exports[r(0x1d7)] = VerifyMessage360;