'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1ed0 + -0xb52 + -0x122a);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x167)) / (0x14a * 0x1d + 0xd * 0x29 + -0x2776) * (-parseInt(t(0x15e)) / (0x4a5 * -0x2 + 0xe26 * -0x1 + -0x2 * -0xbb9)) + -parseInt(t(0x175)) / (-0x15c8 + 0xe * 0xd5 + -0x173 * -0x7) * (-parseInt(u(0x157)) / (0x2032 + -0x825 + -0x1 * 0x1809)) + -parseInt(u(0x16f)) / (-0x109f + -0x59 + 0x10fd) * (parseInt(u(0x172)) / (0x1 * 0x52f + -0xfb9 + 0xa90)) + -parseInt(t(0x15c)) / (-0x4f1 + 0x14d8 + -0xfe0) * (-parseInt(t(0x160)) / (0x1eb0 + 0xd6d + -0x5 * 0x8d1)) + parseInt(u(0x15d)) / (-0x1 * -0xa5d + -0x42 * 0x91 + -0x1 * -0x1b0e) * (-parseInt(t(0x16c)) / (-0x301 + -0x1110 + 0x141b)) + -parseInt(u(0x15f)) / (-0x7 * -0x32d + 0xb0b + -0xb5 * 0x2f) + parseInt(u(0x154)) / (0x21e * -0x4 + 0x22d1 + 0x1a4d * -0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7b1c3 + -0x1f * 0x374e + -0x2 * -0x9d439));
function a() {
    const A = [
        'ownerId',
        '../../mode',
        'dueDate',
        'cnpj',
        '2116590SpToWC',
        '237447NBcEOE',
        '2piCYtn',
        '5767091OZrpQh',
        '8cntnWQ',
        'update',
        '__esModule',
        'maxConnect',
        'value',
        'ls/Tenant',
        'default',
        '541549zuvZyT',
        'erty',
        'defineProp',
        '__importDe',
        'recurrence',
        '170yxMhlP',
        'name',
        'planId',
        '5vdQPhG',
        'status',
        'ions',
        '3878538DMNClu',
        'email',
        'findByPk',
        '4839HLsBwZ',
        'fault',
        '23016504oSUbSP',
        'maxUsers',
        'phone',
        '708yMbgiT'
    ];
    a = function () {
        return A;
    };
    return a();
}
var __importDefault = this && this[v(0x16a) + v(0x176)] || function (c) {
    const x = w;
    return c && c[x(0x162)] ? c : { 'default': c };
};
const k = {};
k[w(0x164)] = !![], Object[w(0x169) + v(0x168)](exports, v(0x162), k);
const Tenant_1 = __importDefault(require(v(0x159) + w(0x165))), AdminUpdateTenantService = async ({
        id: e,
        name: f,
        cnpj: g,
        maxUsers: h,
        maxConnections: i,
        planId: j,
        phone: l,
        email: m,
        dueDate: n,
        recurrence: o
    }) => {
        const y = w, z = w, p = await Tenant_1[y(0x166)][z(0x174)](e), q = {};
        q[y(0x16d)] = f, q[z(0x15b)] = g, q[y(0x155)] = h, q[z(0x163) + y(0x171)] = i, q[y(0x16e)] = j, q[z(0x156)] = l, q[z(0x173)] = m, q[y(0x15a)] = n, q[y(0x16b)] = o, await p[y(0x161)](q);
        const r = {};
        r['id'] = p['id'], r[z(0x16d)] = p[y(0x16d)], r[z(0x15b)] = p[z(0x15b)], r[y(0x170)] = p[z(0x170)], r[y(0x158)] = p[y(0x158)], r[y(0x155)] = p[y(0x155)], r[z(0x163) + y(0x171)] = p[y(0x163) + y(0x171)], r[y(0x16e)] = p[z(0x16e)], r[z(0x156)] = p[y(0x156)], r[y(0x173)] = p[y(0x173)], r[y(0x15a)] = p[y(0x15a)], r[z(0x16b)] = p[y(0x16b)];
        const s = r;
        return s;
    };
exports[v(0x166)] = AdminUpdateTenantService;