'use strict';
function a() {
    const E = [
        'fault',
        '1160178DGZxrF',
        'format',
        '212wkMRtR',
        'error',
        'status',
        '../utils/l',
        '3747MVXjXX',
        'Invoices',
        'defineProp',
        'info',
        'oices\x20Init',
        'IKJOO',
        'duration',
        'fy\x20Invoice',
        'YYYY-MM-DD',
        'iated',
        '../models/',
        'OORDy',
        'tenantId',
        'name',
        'DD/MM/yyyy',
        'diff',
        'zEheZ',
        'mplete',
        'Error\x20Veri',
        '11935zLDKWY',
        'Verify\x20Inv',
        'dueDate',
        'planId',
        'findByPk',
        '__esModule',
        '327695YPJaaE',
        'detail',
        'message',
        'Tenant',
        'Finalized\x20',
        'zSrMK',
        'logger',
        'count',
        'InvoiceCre',
        'nriAn',
        'erty',
        'create',
        'like',
        'gDNZG',
        'Plan',
        '226381BzmpoZ',
        'repeat',
        '__importDe',
        'map',
        'asDays',
        'XNbwO',
        'findAll',
        '1116496mBpSmN',
        'removeOnCo',
        'cHhpw',
        'every',
        'ate',
        'removeOnFa',
        'ogger',
        'iSOcV',
        'open',
        'sequelize',
        'jobId',
        'updatedAt',
        'createdAt',
        'default',
        'value',
        'moment',
        '8306112vcdiiP'
    ];
    a = function () {
        return E;
    };
    return a();
}
const x = b, y = b;
(function (c, d) {
    const v = b, w = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(v(0xce)) / (0xb7b * 0x1 + 0x2175 + -0x2cef) + parseInt(w(0xe9)) / (-0x12db + 0x1 * -0x1b9a + 0xf7d * 0x3) * (-parseInt(w(0xed)) / (-0x268b + 0x23d6 + -0x8 * -0x57)) + -parseInt(v(0xd5)) / (-0x3df + -0x16 + -0x9 * -0x71) + -parseInt(v(0x106)) / (-0x579 * 0x3 + -0x18ae + 0x2 * 0x148f) + -parseInt(v(0xe7)) / (0x1d * -0x4a + -0x2250 + 0x4 * 0xaae) + -parseInt(w(0x100)) / (-0xa19 + -0x1 * -0x449 + 0x5d7) + parseInt(v(0xe5)) / (-0x7 * 0xb + 0x12ff * -0x1 + 0x1354);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2f2e8 + 0x3fda8 + 0x5eaa * -0xd));
var __importDefault = this && this[x(0xd0) + y(0xe6)] || function (c) {
    const z = x;
    return c && c[z(0x105)] ? c : { 'default': c };
};
const k = {};
k[x(0xe3)] = !![], Object[x(0xef) + y(0xc9)](exports, x(0x105), k);
const Tenant_1 = __importDefault(require(y(0xf7) + y(0x109))), Plan_1 = __importDefault(require(y(0xf7) + x(0xcd))), logger_1 = require(y(0xec) + y(0xdb)), moment_1 = __importDefault(require(x(0xe4))), Invoices_1 = __importDefault(require(y(0xf7) + y(0xee))), sequelize_1 = require(y(0xde)), l = {};
l[x(0xd8)] = (0x145a + -0x13e3 + 0x3b * -0x1) * (0xad6 + 0x15bf * -0x1 + 0x1 * 0xed1);
const m = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x76 * 0x14 + 0x2ef * 0x9 + -0x1066);
        let h = e[f];
        return h;
    }, b(c, d);
}
m[y(0xd6) + y(0xfe)] = !![], m[y(0xda) + 'il'] = ![], m[y(0xdf)] = x(0x10e) + y(0xd9), m[y(0xcf)] = l, exports[x(0xe2)] = {
    'key': x(0x10e) + y(0xd9),
    'options': m,
    async 'handle'() {
        const A = y, B = y, e = {};
        e[A(0xf2)] = B(0xfb), e[A(0xd3)] = function (g, h) {
            return g < h;
        }, e[B(0xdc)] = function (g, h) {
            return g + h;
        }, e[A(0xd7)] = B(0xf5), e[A(0x10f)] = function (g, h) {
            return g === h;
        }, e[B(0xfd)] = B(0xdd), e[A(0xf8)] = B(0x101) + A(0xf1) + A(0xf6), e[A(0x10b)] = B(0x10a) + A(0xee), e[B(0xcc)] = A(0xff) + A(0xf4) + 's';
        const f = e;
        try {
            logger_1[B(0x10c)][B(0xf0)](f[A(0xf8)]);
            const g = await Tenant_1[A(0xe2)][A(0xd4)]();
            g[A(0xd1)](async h => {
                const C = B, D = A, {dueDate: i} = h, j = (0x39 * 0xa6 + 0x26c2 + -0x4bb8, moment_1[C(0xe2)])(i)[C(0xe8)](), n = (-0x13 * -0x17 + -0x1 * 0xb32 + 0x97d, moment_1[C(0xe2)])()[C(0xe8)](), o = (-0x628 + -0xf03 + -0x152b * -0x1, moment_1[D(0xe2)])((-0x3 * -0x31e + 0xb1 * -0x11 + 0x267, moment_1[C(0xe2)])())[C(0xe8)](f[D(0xf2)]), p = (-0x2538 + -0xb6b * -0x2 + 0xe * 0x107, moment_1[D(0xe2)])(i)[C(0xe8)](f[D(0xf2)]), q = (-0x8ad * 0x3 + 0x20d7 + -0x6d0, moment_1[D(0xe2)])(p, f[C(0xf2)])[D(0xfc)]((0x2245 + 0x1 * -0x1df9 + -0x44c, moment_1[D(0xe2)])(o, f[C(0xf2)])), r = moment_1[D(0xe2)][D(0xf3)](q)[C(0xd2)]();
                if (f[D(0xd3)](r, 0x8 * -0x2e6 + 0x541 + 0x1203)) {
                    const s = await Plan_1[D(0xe2)][D(0x104)](h[C(0x103)]), t = await Invoices_1[C(0xe2)][D(0x10d)]({
                            'where': {
                                'tenantId': h['id'],
                                'dueDate': { [sequelize_1['Op'][D(0xcb)]]: f[D(0xdc)]((0x12ca + 0x11e6 + 0x4 * -0x92c, moment_1[D(0xe2)])(i)[C(0xe8)](f[C(0xd7)]), '%') }
                            }
                        });
                    if (f[D(0x10f)](t, 0x753 * -0x2 + -0xc * 0x1e9 + 0x2592)) {
                        const u = {};
                        u[C(0x107)] = s[C(0xfa)], u[C(0xeb)] = f[D(0xfd)], u[D(0xe3)] = s[C(0xe3)], u[C(0xe0)] = n, u[D(0xe1)] = n, u[D(0x102)] = j, u[D(0xf9)] = h['id'], await Invoices_1[C(0xe2)][C(0xca)](u);
                    }
                }
            }), logger_1[A(0x10c)][B(0xf0)](f[B(0x10b)]);
        } catch (h) {
            const i = {};
            i[B(0x108)] = f[A(0xcc)], i[A(0xea)] = h, logger_1[B(0x10c)][B(0xea)](i);
            throw new Error(h);
        }
    }
};