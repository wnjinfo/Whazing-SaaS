'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x156)) / (0x2660 + 0x1539 + 0x4 * -0xee6) * (-parseInt(v(0x166)) / (0x1 * 0x25e1 + 0x7a * 0x3d + -0x1 * 0x42f1)) + parseInt(v(0x15e)) / (0x5e + -0x1 * 0x1f8a + 0x1f2f) * (-parseInt(u(0x142)) / (-0x1bca + 0x1 * -0x5 + 0x1bd3)) + parseInt(u(0x150)) / (0x2 * 0xad9 + 0x254b + -0x3af8) + -parseInt(v(0x149)) / (-0x1 * -0x3dd + -0x646 * -0x1 + -0xa1d) + parseInt(u(0x154)) / (-0x7f * -0x1 + 0x125f + 0x173 * -0xd) * (-parseInt(v(0x15b)) / (0x3 * 0x839 + 0x1 * 0x1edf + 0x23 * -0x196)) + -parseInt(v(0x14e)) / (-0x1fbe + 0x1 * 0x924 + 0x16a3) + parseInt(u(0x15a)) / (0xa33 + -0x1291 + 0x10d * 0x8) * (parseInt(u(0x151)) / (-0x9e4 + 0xfaa * -0x1 + 0x1 * 0x1999));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2ce2d + 0x4a41f + -0x4d9cd));
var __importDefault = this && this[w(0x168) + w(0x14b)] || function (c) {
    const y = w;
    return c && c[y(0x157)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xbdc * -0x1 + -0x5e * 0x50 + 0x2a7d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[x(0x169)] = !![], Object[w(0x152) + x(0x15c)](exports, x(0x157), k);
const Contact_1 = __importDefault(require(x(0x165) + w(0x143))), AppError_1 = __importDefault(require(x(0x163) + x(0x159) + 'r')), Ticket_1 = __importDefault(require(w(0x165) + x(0x14c))), socketEmit_1 = __importDefault(require(x(0x146) + x(0x16a) + x(0x15d))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = x, A = w, l = {};
        l[z(0x160)] = A(0x14d) + z(0x164), l[z(0x14a)] = A(0x16b) + A(0x14f) + z(0x145), l[A(0x167)] = A(0x16c) + z(0x155);
        const m = l, n = {};
        n['id'] = i, n[A(0x161)] = j;
        const o = {};
        o[z(0x144)] = n;
        const p = await Contact_1[z(0x15f)][A(0x153)](o);
        if (!p)
            throw new AppError_1[(A(0x15f))](m[z(0x160)], 0x1fb * 0x3 + -0x23cf + 0x1f72);
        const q = {};
        q[A(0x147)] = i;
        const r = {};
        r[z(0x144)] = q;
        const s = await Ticket_1[A(0x15f)][A(0x162)](r);
        if (s)
            throw new AppError_1[(A(0x15f))](m[z(0x14a)], -0x1b60 + -0x158a * -0x1 + 0x76a);
        await p[A(0x141)]();
        const t = {};
        t[z(0x161)] = j, t[A(0x148)] = m[z(0x167)], t[A(0x158)] = p, (-0xb38 + -0x997 + -0x14cf * -0x1, socketEmit_1[A(0x15f)])(t);
    };
function a() {
    const B = [
        'ls/Contact',
        'where',
        'REGISTERED',
        '../../help',
        'contactId',
        'type',
        '270324UwMyBx',
        'CZgDx',
        'fault',
        'ls/Ticket',
        'ERR_NO_CON',
        '1984896mzHAaa',
        'T_TICKETS_',
        '1476805MKBFnH',
        '6366965IRLySu',
        'defineProp',
        'findOne',
        '7edDklI',
        'lete',
        '478MAcbzz',
        '__esModule',
        'payload',
        'rs/AppErro',
        '10CwipMs',
        '2718728HhgmhQ',
        'erty',
        'Emit',
        '612KAsaaF',
        'default',
        'HPYbh',
        'tenantId',
        'count',
        '../../erro',
        'TACT_FOUND',
        '../../mode',
        '26lQFrHh',
        'FXsmY',
        '__importDe',
        'value',
        'ers/socket',
        'ERR_CONTAC',
        'contact:de',
        'destroy',
        '1812KlEXsj'
    ];
    a = function () {
        return B;
    };
    return a();
}
exports[x(0x15f)] = DeleteContactService;