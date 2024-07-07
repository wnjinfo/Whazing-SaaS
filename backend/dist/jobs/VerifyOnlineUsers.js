'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x1b0)) / (-0x18c1 * 0x1 + -0x10 * -0x78 + 0x1142) + parseInt(o(0x1d0)) / (-0x347 * -0x7 + 0x5a2 + -0x1c91) * (parseInt(o(0x1b5)) / (-0x88f + 0x20a0 + -0x1 * 0x180e)) + -parseInt(o(0x1cc)) / (-0x6 * 0xfe + 0x2 * -0x2b5 + 0xb62) * (-parseInt(o(0x1c1)) / (0xb6d + -0x515 + -0x653)) + parseInt(n(0x1af)) / (0x2db + 0x1187 * 0x2 + 0x1 * -0x25e3) + parseInt(n(0x1b3)) / (0x1 * 0x1d73 + 0xd06 + 0x2 * -0x1539) * (-parseInt(n(0x1ce)) / (-0x21 * 0xc6 + 0x19d + 0x17f1)) + -parseInt(n(0x1bd)) / (0x1b00 + 0x1d55 + -0xc * 0x4b1) * (parseInt(o(0x1ba)) / (0x2db + -0x19ef + -0x21a * -0xb)) + -parseInt(o(0x1b9)) / (0x137 * 0x8 + 0x8 * -0x106 + -0x17d) * (parseInt(o(0x1b7)) / (-0x82 + -0x92 * -0x33 + -0xb * 0x298));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2 * -0x2417f + -0x754f9 + 0x190130));
var __importDefault = this && this[p(0x1b1) + q(0x1ca)] || function (c) {
    const r = q;
    return c && c[r(0x1ac)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x77 * -0x49 + -0x1f0f + -0x69 * 0x3);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const w = [
        'EFUif',
        '__esModule',
        'findAll',
        '../models/',
        '7687176WbYfxp',
        '799479SilTpb',
        '__importDe',
        'ers',
        '84NLEfWj',
        'Finalized\x20',
        '9HJibmA',
        'default',
        '9020832UZJMrd',
        'getIO',
        '22bhjefB',
        '5333410ypfNXf',
        'ogger',
        'message',
        '18XvpBie',
        'UIoEs',
        'logger',
        'every',
        '25rjxHsP',
        '../utils/l',
        'mplete',
        'itiated',
        'AimWf',
        'neUsers',
        'Error\x20Veri',
        'verifyOnli',
        'removeOnCo',
        'fault',
        'forEach',
        '768388VMsEkF',
        'neUsers\x20In',
        '637144MWQPPp',
        'defineProp',
        '898154BWfdom',
        'VerifyOnli',
        'jobId',
        'VEJnQ',
        'repeat',
        'erty',
        'fyOnlineUs',
        'error',
        '../libs/so',
        'value',
        'emit',
        'removeOnFa',
        'cket',
        'User',
        'update',
        'isOnline',
        'info'
    ];
    a = function () {
        return w;
    };
    return a();
}
k[p(0x1d9)] = !![], Object[p(0x1cf) + p(0x1d5)](exports, p(0x1ac), k);
const User_1 = __importDefault(require(p(0x1ae) + p(0x1a7))), logger_1 = require(p(0x1c2) + q(0x1bb)), socket_1 = require(q(0x1d8) + q(0x1a6)), l = {};
l[p(0x1c0)] = (0x12 * -0x199 + 0x1964 + -0x39a * -0x1) * (0x4bb + -0x1229 * 0x1 + -0x7 * -0x27a);
const m = {};
m[q(0x1c9) + p(0x1c3)] = !![], m[q(0x1a5) + 'il'] = ![], m[p(0x1d2)] = q(0x1d1) + p(0x1c6), m[q(0x1d4)] = l, exports[p(0x1b6)] = {
    'key': q(0x1d1) + p(0x1c6),
    'options': m,
    async 'handle'() {
        const s = p, t = p, e = {};
        e[s(0x1c5)] = t(0x1d1) + s(0x1cd) + s(0x1c4), e[t(0x1d3)] = s(0x1c8) + t(0x1c6), e[t(0x1ab)] = s(0x1b4) + s(0x1d1) + s(0x1c6), e[s(0x1be)] = s(0x1c7) + s(0x1d6) + t(0x1b2);
        const f = e;
        try {
            logger_1[s(0x1bf)][t(0x1aa)](f[s(0x1c5)]);
            const g = await User_1[t(0x1b6)][t(0x1ad)]();
            g[s(0x1cb)](async i => {
                const u = s, v = t, j = {};
                j[u(0x1a9)] = ![], await i[v(0x1a8)](j);
            });
            const h = (0x1 * -0x761 + 0x1643 + -0x5 * 0x2fa, socket_1[s(0x1b8)])();
            h[s(0x1da)](f[s(0x1d3)]), logger_1[t(0x1bf)][t(0x1aa)](f[s(0x1ab)]);
        } catch (i) {
            const j = {};
            j[t(0x1bc)] = f[t(0x1be)], j[t(0x1d7)] = i, logger_1[s(0x1bf)][s(0x1d7)](j);
            throw new Error(i);
        }
    }
};