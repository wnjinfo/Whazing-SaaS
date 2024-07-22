'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x8d)) / (-0x8 * -0x33d + -0x26 * 0x8a + 0x1 * -0x56b) * (parseInt(u(0xa2)) / (0x2389 + -0x1996 + -0x9f1)) + parseInt(v(0x9f)) / (0x1048 + 0x17ca + -0x1 * 0x280f) * (parseInt(u(0x7b)) / (0x2 * 0x1252 + -0x147e + -0x33a * 0x5)) + parseInt(u(0x83)) / (0x89a * 0x2 + -0x1 * 0xdf + -0x1050) * (parseInt(u(0x8e)) / (0x214d + -0x883 * -0x1 + -0x29ca)) + parseInt(u(0x93)) / (0x4d0 + -0x1473 + 0x191 * 0xa) + parseInt(v(0x87)) / (-0x24b5 * 0x1 + 0xa33 * -0x2 + 0x3923) + -parseInt(v(0x7c)) / (-0x1 * 0xda3 + 0x1e0 + -0x14 * -0x97) + parseInt(v(0x85)) / (0xda + 0x2 * -0xf71 + 0x1e12) * (-parseInt(v(0x90)) / (-0xb * 0xb3 + -0x2633 + 0x2def));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x127498 + 0x1 * -0x5387 + -0x67a38));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xfb2 + -0x176d * 0x1 + 0x279a);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0x80) + w(0x89)] || function (c) {
    const y = x;
    return c && c[y(0x81)] ? c : { 'default': c };
};
const k = {};
k[x(0x88)] = !![], Object[w(0x99) + w(0x91)](exports, x(0x81), k);
function a() {
    const B = [
        '../../help',
        '14504YUVwyl',
        'count',
        'ERR_CONTAC',
        'findOne',
        'ERR_NO_CON',
        '11524qUlusK',
        '4093659fTimgZ',
        'TACT_FOUND',
        'payload',
        'contact:de',
        '__importDe',
        '__esModule',
        'rs/AppErro',
        '2495jLksEL',
        'T_TICKETS_',
        '10krbFRE',
        'contactId',
        '7898928LYblmq',
        'value',
        'fault',
        'ls/Ticket',
        'lete',
        'default',
        '127IUTGSG',
        '5142JszhfI',
        '../../mode',
        '11678843oohoGm',
        'erty',
        'ers/socket',
        '2238173SCbgCX',
        'type',
        'zWiOu',
        'VATgb',
        'REGISTERED',
        'ls/Contact',
        'defineProp',
        'tenantId',
        'zkwsd',
        '../../erro',
        'where',
        'destroy',
        '1527htGakT',
        'Emit'
    ];
    a = function () {
        return B;
    };
    return a();
}
const Contact_1 = __importDefault(require(w(0x8f) + w(0x98))), AppError_1 = __importDefault(require(w(0x9c) + w(0x82) + 'r')), Ticket_1 = __importDefault(require(w(0x8f) + w(0x8a))), socketEmit_1 = __importDefault(require(x(0xa1) + x(0x92) + x(0xa0))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = w, A = w, l = {};
        l[z(0x9b)] = z(0xa6) + z(0x7d), l[z(0x96)] = z(0xa4) + A(0x84) + A(0x97), l[z(0x95)] = z(0x7f) + A(0x8b);
        const m = l, n = {};
        n['id'] = i, n[z(0x9a)] = j;
        const o = {};
        o[z(0x9d)] = n;
        const p = await Contact_1[z(0x8c)][z(0xa5)](o);
        if (!p)
            throw new AppError_1[(z(0x8c))](m[A(0x9b)], 0x8eb + -0x50 * -0x48 + -0x1dd7);
        const q = {};
        q[A(0x86)] = i;
        const r = {};
        r[A(0x9d)] = q;
        const s = await Ticket_1[z(0x8c)][z(0xa3)](r);
        if (s)
            throw new AppError_1[(z(0x8c))](m[z(0x96)], 0x9 * 0x125 + -0x12c1 + 0xa08);
        await p[A(0x9e)]();
        const t = {};
        t[A(0x9a)] = j, t[A(0x94)] = m[z(0x95)], t[z(0x7e)] = p, (-0x1f5b + -0x1929 + 0x3884, socketEmit_1[A(0x8c)])(t);
    };
exports[w(0x8c)] = DeleteContactService;