'use strict';
const v = b, w = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * 0xf7 + 0xabf + -0x554);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0xa8)) / (0x17 * 0x194 + -0x164f + -0xdfc) + parseInt(u(0xb3)) / (-0x488 + 0x166f + -0x3 * 0x5f7) * (parseInt(u(0xa5)) / (0x41e + -0xde5 * -0x1 + -0x1200)) + parseInt(t(0x98)) / (0x2b * -0x5 + 0xa81 * 0x3 + -0xa38 * 0x3) * (-parseInt(t(0x9b)) / (-0x1132 + 0x7f6 * 0x3 + 0x3 * -0x239)) + -parseInt(u(0xb2)) / (0x1a * 0x76 + -0x6d * -0x43 + -0x287d) + -parseInt(t(0xb7)) / (-0x8f4 + 0x265 * -0x1 + -0xe0 * -0xd) * (parseInt(u(0xb9)) / (0x1434 + 0x1 * 0x19b1 + -0x2ddd * 0x1)) + parseInt(u(0x99)) / (-0x481 * -0x8 + 0x3 * 0x801 + 0x3c02 * -0x1) * (-parseInt(t(0xb0)) / (-0x657 + 0x328 * 0x1 + 0xb * 0x4b)) + parseInt(u(0xa4)) / (-0xc4f * -0x3 + -0x60d * -0x1 + -0x2aef);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x2418a + -0x1 * -0xc2e3 + -0x16e94 * -0x3));
var __importDefault = this && this[v(0xb5) + w(0xa1)] || function (c) {
    const x = v;
    return c && c[x(0x9e)] ? c : { 'default': c };
};
function a() {
    const A = [
        '473460acCGZH',
        '42vrfMex',
        'email',
        '__importDe',
        'cnpj',
        '7Hiyrnt',
        'ions',
        '1089616OLmZtv',
        '1280ElhoAR',
        '185697XhKEgr',
        'planId',
        '510FJmznS',
        'value',
        'findByPk',
        '__esModule',
        'name',
        'update',
        'fault',
        '../../mode',
        'default',
        '1775312pkLKlt',
        '29244SgOhBQ',
        'ownerId',
        'erty',
        '292188byoUsB',
        'ls/Tenant',
        'defineProp',
        'maxConnect',
        'phone',
        'dueDate',
        'status',
        'maxUsers',
        '110ZDHrSG',
        'recurrence'
    ];
    a = function () {
        return A;
    };
    return a();
}
const k = {};
k[v(0x9c)] = !![], Object[w(0xaa) + w(0xa7)](exports, w(0x9e), k);
const Tenant_1 = __importDefault(require(v(0xa2) + v(0xa9))), AdminUpdateTenantService = async ({
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
        const y = v, z = v, p = await Tenant_1[y(0xa3)][z(0x9d)](e), q = {};
        q[z(0x9f)] = f, q[y(0xb6)] = g, q[y(0xaf)] = h, q[z(0xab) + z(0xb8)] = i, q[z(0x9a)] = j, q[z(0xac)] = l, q[y(0xb4)] = m, q[z(0xad)] = n, q[y(0xb1)] = o, await p[y(0xa0)](q);
        const r = {};
        r['id'] = p['id'], r[z(0x9f)] = p[y(0x9f)], r[z(0xb6)] = p[y(0xb6)], r[z(0xae)] = p[z(0xae)], r[y(0xa6)] = p[y(0xa6)], r[z(0xaf)] = p[y(0xaf)], r[y(0xab) + y(0xb8)] = p[z(0xab) + z(0xb8)], r[z(0x9a)] = p[y(0x9a)], r[z(0xac)] = p[z(0xac)], r[z(0xb4)] = p[y(0xb4)], r[y(0xad)] = p[z(0xad)], r[z(0xb1)] = p[y(0xb1)];
        const s = r;
        return s;
    };
exports[w(0xa3)] = AdminUpdateTenantService;