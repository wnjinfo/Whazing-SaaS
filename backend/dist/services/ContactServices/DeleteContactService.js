'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x114)) / (-0x185a + -0x1 * 0x8ad + 0x2108) * (-parseInt(v(0x10a)) / (-0x1f * -0x25 + -0x1039 * 0x1 + 0xbc0)) + parseInt(v(0x106)) / (0x1b52 + 0x2560 + -0x40af) + parseInt(v(0x110)) / (-0x322 + -0x84d * 0x1 + -0x1 * -0xb73) + parseInt(u(0xfd)) / (-0x25f + 0x25a * 0x1 + 0x1 * 0xa) + -parseInt(v(0x121)) / (0x32e * 0x1 + -0x621 + -0x1 * -0x2f9) * (-parseInt(v(0x11f)) / (-0x972 + 0x9d6 + 0x1f * -0x3)) + parseInt(v(0x108)) / (0x1cad + 0xbf * 0x29 + -0x3b3c) + parseInt(v(0x120)) / (-0x7 * -0x419 + 0x2 * -0x54a + 0x2 * -0x909) * (parseInt(u(0x116)) / (-0x2e * -0x41 + -0x7 * 0x433 + 0x11c1));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xfc5f0 + 0x1 * -0x5602d + -0x1c * 0x77e));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * 0xfb + -0x1e7d + -0x5b5 * -0x5);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0x10e) + x(0x118)] || function (c) {
    const y = x;
    return c && c[y(0x111)] ? c : { 'default': c };
};
const k = {};
k[x(0x101)] = !![], Object[w(0x117) + x(0x104)](exports, w(0x111), k);
function a() {
    const B = [
        'xkyWZ',
        'TACT_FOUND',
        'default',
        '21khKvRk',
        '156375zELQdM',
        '1566930ufFCQN',
        'count',
        'lete',
        'QCtrd',
        'Emit',
        'payload',
        'findOne',
        '205605OtlNjw',
        'destroy',
        'contact:de',
        'contactId',
        'value',
        'ls/Ticket',
        'ERR_CONTAC',
        'erty',
        '../../mode',
        '1888086yHagwU',
        'ers/socket',
        '245048OMtehD',
        '../../erro',
        '15018CwgWoq',
        '../../help',
        'tenantId',
        'ERR_NO_CON',
        '__importDe',
        'type',
        '490124HRYron',
        '__esModule',
        'T_TICKETS_',
        'where',
        '142ltMJCF',
        'ls/Contact',
        '50snQnlV',
        'defineProp',
        'fault',
        'rs/AppErro',
        'xlBLE',
        'REGISTERED'
    ];
    a = function () {
        return B;
    };
    return a();
}
const Contact_1 = __importDefault(require(x(0x105) + w(0x115))), AppError_1 = __importDefault(require(x(0x109) + x(0x119) + 'r')), Ticket_1 = __importDefault(require(w(0x105) + x(0x102))), socketEmit_1 = __importDefault(require(w(0x10b) + x(0x107) + w(0x125))), DeleteContactService = async ({
        id: i,
        tenantId: j
    }) => {
        const z = w, A = x, l = {};
        l[z(0x124)] = A(0x10d) + z(0x11d), l[A(0x11a)] = A(0x103) + z(0x112) + z(0x11b), l[A(0x11c)] = z(0xff) + A(0x123);
        const m = l, n = {};
        n['id'] = i, n[A(0x10c)] = j;
        const o = {};
        o[z(0x113)] = n;
        const p = await Contact_1[z(0x11e)][z(0x127)](o);
        if (!p)
            throw new AppError_1[(z(0x11e))](m[z(0x124)], 0x11 * -0x202 + 0x1464 + 0xf52);
        const q = {};
        q[A(0x100)] = i;
        const r = {};
        r[z(0x113)] = q;
        const s = await Ticket_1[z(0x11e)][z(0x122)](r);
        if (s)
            throw new AppError_1[(A(0x11e))](m[z(0x11a)], -0x1f54 + -0x1f * -0x4c + -0x1 * -0x17b4);
        await p[A(0xfe)]();
        const t = {};
        t[A(0x10c)] = j, t[z(0x10f)] = m[z(0x11c)], t[z(0x126)] = p, (-0x815 + -0x1 * 0x1d95 + 0x25aa, socketEmit_1[z(0x11e)])(t);
    };
exports[w(0x11e)] = DeleteContactService;