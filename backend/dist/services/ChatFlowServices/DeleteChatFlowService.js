'use strict';
const t = b, u = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * 0x3b0 + 0x9 * 0x166 + -0x2f7 * 0x9);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const r = b, s = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(r(0xb2)) / (-0x4b0 + -0xa37 * -0x1 + 0xca * -0x7) * (parseInt(s(0xac)) / (0x3 * -0x763 + 0x74a * -0x1 + 0x1d75)) + parseInt(s(0xbf)) / (-0xb91 * 0x3 + -0x3 * 0xbc4 + -0x1 * -0x4602) + -parseInt(r(0xc9)) / (-0xb9b * 0x2 + -0x9b8 + 0x1 * 0x20f2) + parseInt(r(0xca)) / (0x11a4 + -0x1cc1 + 0xb22) + -parseInt(r(0xc4)) / (0x21cf + 0x1c80 + -0x1 * 0x3e49) * (-parseInt(s(0xab)) / (-0x1081 + -0x5ae * -0x4 + -0xc * 0x84)) + parseInt(r(0xc7)) / (0x2021 + 0x25eb + -0x4604) * (parseInt(r(0xc5)) / (0x2461 + 0x1943 + -0x3d9b)) + parseInt(r(0xb5)) / (-0x158 * -0x15 + -0x1a0b + -0x223) * (-parseInt(r(0xc0)) / (-0x1b76 + -0x7 * -0xb7 + 0x10 * 0x168));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x5c25 * 0x3 + -0xfdde + 0x1cd * 0x103));
function a() {
    const y = [
        'findOne',
        'default',
        'tenantId',
        '../../erro',
        '447517orBKLa',
        '2MbpTkR',
        'fault',
        'update',
        'defineProp',
        '../../mode',
        '__importDe',
        '44369ZkhYPC',
        'UNyAI',
        'promisify',
        '20YiwoDr',
        'rs/AppErro',
        'ls/ChatFlo',
        'NfSPU',
        'value',
        'isActive',
        'writeFile',
        'ERR_NO_CHA',
        'util',
        'isDeleted',
        '617175aHXeMR',
        '871783ZLNhBS',
        'xIUlo',
        'T_FLOW_FOU',
        '__esModule',
        '12SkzAsa',
        '6156YcKqHl',
        'erty',
        '2512jwKcba',
        'where',
        '939420SrFkDx',
        '72715VLvCqM',
        'attributes',
        'reload'
    ];
    a = function () {
        return y;
    };
    return a();
}
var __importDefault = this && this[t(0xb1) + t(0xad)] || function (c) {
    const v = u;
    return c && c[v(0xc3)] ? c : { 'default': c };
};
const k = {};
k[t(0xb9)] = !![], Object[t(0xaf) + t(0xc6)](exports, t(0xc3), k);
const util_1 = require(u(0xbd)), fs_1 = require('fs'), ChatFlow_1 = __importDefault(require(t(0xb0) + u(0xb7) + 'w')), AppError_1 = __importDefault(require(t(0xaa) + t(0xb6) + 'r')), writeFileAsync = (0x1b2b + -0x22d4 + 0x7a9, util_1[u(0xb4)])(fs_1[u(0xbb)]), DeleteChatFlowService = async ({
        id: h,
        tenantId: i
    }) => {
        const w = t, x = t, j = {};
        j[w(0xc1)] = w(0xbc) + x(0xc2) + 'ND', j[x(0xb8)] = x(0xba), j[x(0xb3)] = x(0xbe);
        const l = j, m = {};
        m['id'] = h, m[w(0xa9)] = i;
        const n = {};
        n[w(0xc8)] = m;
        const o = await ChatFlow_1[w(0xa8)][w(0xa7)](n);
        if (!o)
            throw new AppError_1[(w(0xa8))](l[x(0xc1)], 0x1 * 0x244e + -0x1 * -0x2115 + -0x43cf);
        const p = {};
        p[x(0xba)] = ![], p[x(0xbe)] = !![], await o[w(0xae)](p);
        const q = {};
        q[w(0xcb)] = [
            l[w(0xb8)],
            l[w(0xb3)]
        ], await o[x(0xcc)](q);
    };
exports[t(0xa8)] = DeleteChatFlowService;