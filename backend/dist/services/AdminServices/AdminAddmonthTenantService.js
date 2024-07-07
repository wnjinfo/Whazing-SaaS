'use strict';
const r = b, s = b;
(function (c, d) {
    const p = b, q = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(p(0x18d)) / (0x1a18 + 0x18ee + 0x25 * -0x161) * (parseInt(q(0x176)) / (0x101 + 0x1e3 + -0x2e2)) + parseInt(q(0x188)) / (0x11ac + 0xd * 0x1b4 + -0x1bb * 0x17) * (-parseInt(q(0x186)) / (-0x1945 + 0x11f + 0x182a)) + -parseInt(q(0x174)) / (-0x427 * 0x1 + -0xb92 + 0x7df * 0x2) + -parseInt(q(0x187)) / (-0x1251 * -0x1 + -0x1921 + 0x6d6) * (parseInt(p(0x17e)) / (0xd02 + -0x1e * -0x5b + -0x1 * 0x17a5)) + -parseInt(q(0x179)) / (0xdcc + -0x1fad + 0x11e9) * (parseInt(q(0x196)) / (-0x131 * -0x4 + 0x48d + -0x18 * 0x63)) + parseInt(q(0x183)) / (0x2534 + 0x10b + -0x2635) + parseInt(p(0x19a)) / (-0x11f6 + 0x2265 * -0x1 + 0x3466);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xd83 * 0x59 + 0x1 * 0x10a4f3 + -0x14b * 0x58a));
function a() {
    const w = [
        'update',
        'Invalid\x20du',
        'maxConnect',
        '56707yMbntP',
        'IHWvK',
        'isValid',
        'dueDate',
        'ions',
        '16276190WpleFw',
        'defineProp',
        'add',
        '1020444LzkPqf',
        '1206YFWYAK',
        '3OWEuYL',
        'erty',
        '__esModule',
        'recurrence',
        'cJAPd',
        '4CUAtHX',
        'fault',
        'maxUsers',
        'findByPk',
        '../../mode',
        '\x20HH:mm:ss.',
        'value',
        '__importDe',
        'months',
        '178209icBmwE',
        'Tenant\x20not',
        'ls/Tenant',
        'planId',
        '36489849RuLyql',
        'eDate\x20form',
        'nZZqH',
        'moment',
        'toISOStrin',
        'cnpj',
        'email',
        'ownerId',
        'YYYY-MM-DD',
        '\x20found',
        'SSS\x20Z',
        'phone',
        '1437385bNDyKx',
        'BtipU',
        '912446bQuxtw',
        'default',
        'name',
        '8UFGmLn',
        'status'
    ];
    a = function () {
        return w;
    };
    return a();
}
var __importDefault = this && this[r(0x194) + s(0x18e)] || function (c) {
    const t = r;
    return c && c[t(0x18a)] ? c : { 'default': c };
};
const k = {};
k[s(0x193)] = !![], Object[r(0x184) + s(0x189)](exports, s(0x18a), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x12 * -0xc1 + -0x18a2 * -0x1 + -0x24c6);
        let h = e[f];
        return h;
    }, b(c, d);
}
const Tenant_1 = __importDefault(require(s(0x191) + s(0x198))), moment_1 = __importDefault(require(s(0x19d))), AdminAddmonthTenantService = async ({tenantId: f}) => {
        const u = s, v = r, g = {};
        g[u(0x19c)] = v(0x197) + u(0x171), g[v(0x175)] = v(0x170) + v(0x192) + v(0x172), g[u(0x17f)] = v(0x17c) + v(0x19b) + 'at', g[u(0x18c)] = u(0x195);
        const h = g, i = await Tenant_1[v(0x177)][v(0x190)](f);
        if (!i)
            throw new Error(h[u(0x19c)]);
        const j = (-0x1134 + -0x1 * 0xe45 + 0x1f79, moment_1[v(0x177)])(i[v(0x181)], h[v(0x175)]);
        if (!j[u(0x180)]())
            throw new Error(h[v(0x17f)]);
        const l = j[u(0x185)](-0x694 + -0x655 * -0x1 + 0x1 * 0x40, h[v(0x18c)])[u(0x19e) + 'g'](), m = {};
        m[v(0x181)] = l, await i[u(0x17b)](m);
        const n = {};
        n['id'] = i['id'], n[v(0x178)] = i[u(0x178)], n[v(0x19f)] = i[v(0x19f)], n[v(0x18f)] = i[v(0x18f)], n[u(0x17d) + v(0x182)] = i[v(0x17d) + v(0x182)], n[u(0x199)] = i[u(0x199)], n[v(0x173)] = i[v(0x173)], n[v(0x16e)] = i[v(0x16e)], n[v(0x181)] = i[u(0x181)], n[v(0x18b)] = i[u(0x18b)], n[v(0x17a)] = i[v(0x17a)], n[u(0x16f)] = i[u(0x16f)];
        const o = n;
        return o;
    };
exports[r(0x177)] = AdminAddmonthTenantService;