'use strict';
const q = b, r = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x8f9 * 0x1 + -0x1b06 + -0x1 * -0x2549);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const o = b, p = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(o(0x161)) / (-0x301 + -0x1 * 0x59b + -0x15 * -0x69) + parseInt(p(0x14a)) / (-0x15a1 * 0x1 + -0x782 + 0x3 * 0x9b7) * (-parseInt(p(0x159)) / (-0x339 * -0x5 + 0x1977 * -0x1 + 0x95d)) + -parseInt(p(0x16e)) / (-0x25bc + 0x99d + 0x1c23) + -parseInt(p(0x157)) / (-0xe * -0x293 + -0xa90 + -0x1975) * (-parseInt(p(0x163)) / (-0x7 * 0x277 + -0xb * -0x1f + -0xff2 * -0x1)) + -parseInt(p(0x156)) / (0x1436 + -0xd81 + -0x6ae) + parseInt(o(0x152)) / (0x66 * -0x23 + -0x3e5 * 0x2 + 0x15c4) * (parseInt(o(0x14c)) / (-0x1 * -0xfb5 + -0x1 * 0x4f3 + -0x9 * 0x131)) + -parseInt(o(0x150)) / (-0x251 + 0x605 + 0x3aa * -0x1) * (-parseInt(p(0x14d)) / (-0x1753 + 0x611 + -0x67 * -0x2b));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x11f79 + -0x946eb + -0x4599b * -0x5));
function a() {
    const v = [
        'tenantId',
        'fromMe',
        '19092860yvpTRq',
        'contactId',
        '7181912aYoGRe',
        'received',
        'getTime',
        'default',
        '6179950SleEqz',
        '6065YWPkUU',
        'fault',
        '2769GzgprO',
        '../Message',
        'defineProp',
        'Services/C',
        'body',
        'geService',
        'ticketId',
        'value',
        '980862FFEKrN',
        'Jgxmy',
        '7278EwsGCH',
        'messageDat',
        '__esModule',
        'mediaType',
        'read',
        '__importDe',
        'messageId',
        'erty',
        'text',
        'reateMessa',
        'timestamp',
        '1832068pxVUPL',
        'type',
        'update',
        '2628YUrxdS',
        'status',
        '9ICvIJv',
        '11CsuvCt'
    ];
    a = function () {
        return v;
    };
    return a();
}
var __importDefault = this && this[q(0x168) + q(0x158)] || function (c) {
    const s = q;
    return c && c[s(0x165)] ? c : { 'default': c };
};
const k = {};
k[q(0x160)] = !![], Object[q(0x15b) + r(0x16a)](exports, q(0x165), k);
const CreateMessageService_1 = __importDefault(require(r(0x15a) + r(0x15c) + r(0x16c) + q(0x15e))), VerifyMessage360 = async (f, g, h) => {
        const t = q, u = q, i = {};
        i[t(0x162)] = t(0x153);
        const j = i, l = {};
        l[u(0x169)] = f['id'] || '', l[t(0x15f)] = g['id'], l[u(0x151)] = f[t(0x14f)] ? undefined : h['id'], l[u(0x15d)] = f[u(0x16b)]?.[t(0x15d)] || '', l[t(0x14f)] = f[t(0x14f)], l[u(0x166)] = f[t(0x16f)], l[u(0x167)] = f[u(0x14f)], l[u(0x16d)] = +f[u(0x16d)], l[u(0x14b)] = j[t(0x162)];
        const m = l;
        await g[t(0x170)]({
            'lastMessage': m[u(0x15d)],
            'lastMessageAt': new Date()[u(0x154)](),
            'answered': f[u(0x14f)] || ![]
        });
        const n = {};
        n[u(0x164) + 'a'] = m, n[t(0x14e)] = g[u(0x14e)], await (0x534 + 0x1974 + -0x1ea8, CreateMessageService_1[t(0x155)])(n);
    };
exports[q(0x155)] = VerifyMessage360;