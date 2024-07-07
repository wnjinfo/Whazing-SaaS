'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(p(0x103)) / (0x22a * 0x4 + 0x1884 + -0x212b) + parseInt(q(0x116)) / (-0x1 * 0x1351 + 0x1ac7 + -0x774) * (-parseInt(q(0x11c)) / (0xbe9 * 0x2 + -0xa7a + -0xd55)) + parseInt(q(0x11a)) / (-0x210f + -0x1624 + 0x3737) + -parseInt(p(0xfc)) / (-0x2203 + -0x1d5d * 0x1 + 0x3f65) + -parseInt(q(0x120)) / (-0x1 * 0xb8d + -0x797 * 0x4 + 0x29ef) + parseInt(p(0x10a)) / (0x161 * -0x2 + -0x1 * -0x249b + 0x4e * -0x6f) + parseInt(q(0x105)) / (0x1e47 + 0x1 * -0x1724 + -0x71b);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x52cc4 + 0x272 * -0x3e + -0x6a1f));
var __importDefault = this && this[r(0xff) + s(0x126)] || function (c) {
    const t = r;
    return c && c[t(0x110)] ? c : { 'default': c };
};
function a() {
    const w = [
        'oVyzZ',
        '2455824UVuwNn',
        'erty',
        'phone',
        'default',
        'months',
        'moment',
        'fault',
        'maxConnect',
        'value',
        'maxUsers',
        '../../mode',
        '2029205lAQmIv',
        'ownerId',
        'dueDate',
        '__importDe',
        'ions',
        'status',
        'planId',
        '26966YjXWke',
        'findByPk',
        '3059448PLEyHI',
        '\x20HH:mm:ss.',
        'update',
        'Tenant\x20not',
        'Invalid\x20du',
        '1921997oQbCOp',
        'toISOStrin',
        'isValid',
        'vNbqR',
        'DygGE',
        'email',
        '__esModule',
        'name',
        'eDate\x20form',
        'SSS\x20Z',
        'YYYY-MM-DD',
        'defineProp',
        '241726dxTsED',
        'recurrence',
        'ls/Tenant',
        'add',
        '2100804hznAmp',
        'cnpj',
        '3tgCGcF',
        'EksMd',
        '\x20found'
    ];
    a = function () {
        return w;
    };
    return a();
}
const k = {};
k[r(0x128)] = !![], Object[r(0x115) + s(0x121)](exports, r(0x110), k);
const Tenant_1 = __importDefault(require(r(0x12a) + s(0x118))), moment_1 = __importDefault(require(r(0x125))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = s, v = s, g = {};
        g[u(0x11d)] = u(0x108) + v(0x11e), g[v(0x10e)] = v(0x114) + v(0x106) + u(0x113), g[u(0x10d)] = u(0x109) + u(0x112) + 'at', g[v(0x11f)] = v(0x124);
        const h = g, i = await Tenant_1[v(0x123)][u(0x104)](f);
        if (!i)
            throw new Error(h[v(0x11d)]);
        const j = (0x10a * -0x2 + -0x1d5 * 0x8 + 0x165 * 0xc, moment_1[u(0x123)])(i[v(0xfe)], h[v(0x10e)]);
        if (!j[u(0x10c)]())
            throw new Error(h[v(0x10d)]);
        const l = j[v(0x119)](0x2f9 * -0x7 + -0x3 * 0x916 + 0x3012, h[v(0x11f)])[v(0x10b) + 'g'](), m = {};
        m[v(0xfe)] = l, await i[u(0x107)](m);
        const n = {};
        n['id'] = i['id'], n[v(0x111)] = i[u(0x111)], n[u(0x11b)] = i[u(0x11b)], n[u(0x129)] = i[u(0x129)], n[u(0x127) + v(0x100)] = i[v(0x127) + u(0x100)], n[v(0x102)] = i[v(0x102)], n[v(0x122)] = i[u(0x122)], n[u(0x10f)] = i[v(0x10f)], n[u(0xfe)] = i[v(0xfe)], n[u(0x117)] = i[v(0x117)], n[v(0x101)] = i[v(0x101)], n[u(0xfd)] = i[v(0xfd)];
        const o = n;
        return o;
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x161 * 0x11 + -0x22f * -0xb + -0x2e7a);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[r(0x123)] = AdminAddmonthTenantService;