'use strict';
function a() {
    const w = [
        'ions',
        'DFpfV',
        '__importDe',
        'fault',
        'default',
        'value',
        'vfRLz',
        '43254312GPYovn',
        'JYwHS',
        'moment',
        'toISOStrin',
        '\x20found',
        '77544QndBrJ',
        'update',
        'Tenant\x20not',
        'YYYY-MM-DD',
        'months',
        '1523288MOHFcq',
        '\x20HH:mm:ss.',
        '1259762eOvcGE',
        '9OLRLcx',
        '613052uPDXIo',
        'planId',
        'erty',
        'phone',
        'dueDate',
        'isValid',
        '216DelDcx',
        '100020NTykBE',
        'cnpj',
        'name',
        'add',
        'email',
        'ls/Tenant',
        '602LHQnKN',
        '12rQTfiX',
        '../../mode',
        'defineProp',
        'findByPk',
        'ownerId',
        '488470rsXNMy',
        'mjzSV',
        'recurrence',
        'maxConnect',
        'Invalid\x20du',
        '143IhRTZZ',
        'maxUsers',
        'SSS\x20Z',
        '__esModule',
        'status',
        'eDate\x20form'
    ];
    a = function () {
        return w;
    };
    return a();
}
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x189)) / (-0x1 * 0x119 + 0x269e + -0x2584 * 0x1) + -parseInt(q(0x18b)) / (0x2 * 0xde0 + -0x218 + 0xcd3 * -0x2) * (parseInt(p(0x199)) / (-0x22a8 + 0x171 * -0x10 + -0x39bb * -0x1)) + parseInt(p(0x191)) / (0x1d * 0xed + 0x66b + -0x4 * 0x850) * (-parseInt(p(0x192)) / (-0xf * -0xa0 + -0x1 * 0x7f5 + 0x166 * -0x1)) + parseInt(p(0x182)) / (0x1 * 0x806 + 0x1069 + -0x3 * 0x823) * (parseInt(q(0x198)) / (0x990 * -0x3 + -0x2 * 0x797 + 0x2be5)) + parseInt(q(0x187)) / (-0x665 * -0x6 + 0x1955 * 0x1 + -0x3fab) * (parseInt(p(0x18a)) / (-0xf6c + 0xb * 0x30b + -0x902 * 0x2)) + -parseInt(q(0x19e)) / (0x595 + -0x115 * 0x9 + 0x432) * (parseInt(p(0x1a3)) / (-0xb26 + 0xac7 + -0x6a * -0x1)) + parseInt(q(0x17d)) / (0xf8 + 0x16 * 0x11 + 0xa * -0x3d);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1f * -0xa95d + 0xe2fdf + -0x17ef06));
var __importDefault = this && this[r(0x1ab) + r(0x1ac)] || function (c) {
    const t = s;
    return c && c[t(0x1a6)] ? c : { 'default': c };
};
const k = {};
k[r(0x1ae)] = !![], Object[s(0x19b) + r(0x18d)](exports, s(0x1a6), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2525 + -0x1549 * 0x1 + 0x1df5 * 0x2);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tenant_1 = __importDefault(require(s(0x19a) + r(0x197))), moment_1 = __importDefault(require(s(0x17f))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = r, v = r, g = {};
        g[u(0x19f)] = u(0x184) + u(0x181), g[u(0x17c)] = u(0x185) + u(0x188) + v(0x1a5), g[v(0x17e)] = v(0x1a2) + v(0x1a8) + 'at', g[u(0x1aa)] = v(0x186);
        const h = g, i = await Tenant_1[v(0x1ad)][v(0x19c)](f);
        if (!i)
            throw new Error(h[u(0x19f)]);
        const j = (0x3 * -0x22d + 0xb * -0x1bf + 0x19bc, moment_1[u(0x1ad)])(i[v(0x18f)], h[u(0x17c)]);
        if (!j[v(0x190)]())
            throw new Error(h[v(0x17e)]);
        const l = j[u(0x195)](-0x8b * 0x3b + -0xaac + 0x2ab6, h[v(0x1aa)])[v(0x180) + 'g'](), m = {};
        m[v(0x18f)] = l, await i[v(0x183)](m);
        const n = {};
        n['id'] = i['id'], n[u(0x194)] = i[v(0x194)], n[u(0x193)] = i[v(0x193)], n[v(0x1a4)] = i[v(0x1a4)], n[v(0x1a1) + u(0x1a9)] = i[v(0x1a1) + v(0x1a9)], n[v(0x18c)] = i[u(0x18c)], n[v(0x18e)] = i[v(0x18e)], n[u(0x196)] = i[v(0x196)], n[v(0x18f)] = i[v(0x18f)], n[v(0x1a0)] = i[v(0x1a0)], n[u(0x1a7)] = i[u(0x1a7)], n[v(0x19d)] = i[u(0x19d)];
        const o = n;
        return o;
    };
exports[r(0x1ad)] = AdminAddmonthTenantService;