'use strict';
const p = b, q = b;
(function (c, d) {
    const n = b, o = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(n(0x203)) / (-0x1c94 + 0x37 * -0x8e + 0x3b17) * (parseInt(o(0x1df)) / (0x26b5 + 0x3 * -0x684 + 0x1327 * -0x1)) + parseInt(n(0x1e8)) / (0x1 * 0xc56 + 0x558 + -0x11ab) * (-parseInt(o(0x1d3)) / (-0x76 + -0x8f * -0xf + -0x7e7)) + parseInt(n(0x1fd)) / (-0x264e * -0x1 + 0x9f3 + -0x303c) + parseInt(n(0x1e3)) / (0x1265 + -0x199 * 0x6 + -0x8c9) * (-parseInt(n(0x1ed)) / (0x2177 + -0x232f + 0x1bf)) + -parseInt(o(0x201)) / (0xcd4 + -0x1 * -0x1baf + -0x287b) * (parseInt(o(0x1d2)) / (-0xac4 + 0xdba + -0x2ed)) + parseInt(n(0x1e0)) / (-0x1ab4 + -0x49c * -0x4 + 0x84e) * (-parseInt(n(0x1db)) / (0x1d99 + 0x1 * -0x3da + -0x19b4)) + parseInt(n(0x1f4)) / (-0x1 * -0x457 + -0x176 + -0x2d5);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x23f * 0x435 + -0x89326 + 0x50ae9));
var __importDefault = this && this[p(0x1e9) + p(0x1d0)] || function (c) {
    const r = q;
    return c && c[r(0x1ce)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x6 * -0x28f + 0x242b + -0xd * 0x3d3);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[q(0x1fa)] = !![], Object[p(0x1e5) + q(0x1fc)](exports, q(0x1ce), k);
const User_1 = __importDefault(require(p(0x1f0) + q(0x1e1))), logger_1 = require(q(0x1e2) + q(0x200)), socket_1 = require(q(0x1f6) + q(0x202)), l = {};
function a() {
    const w = [
        'verifyOnli',
        'Finalized\x20',
        'logger',
        '14cpOXkP',
        '10jydpNO',
        'User',
        '../utils/l',
        '12JmOkYi',
        'error',
        'defineProp',
        'removeOnCo',
        'update',
        '12ZJvtgf',
        '__importDe',
        'fyOnlineUs',
        'info',
        'getIO',
        '1635571xSELAP',
        'itiated',
        'BAYBe',
        '../models/',
        'emit',
        'removeOnFa',
        'every',
        '13820952UJFzUX',
        'message',
        '../libs/so',
        'jobId',
        'forEach',
        'VerifyOnli',
        'value',
        'neUsers\x20In',
        'erty',
        '3125635VmGalh',
        'ers',
        'yUwpY',
        'ogger',
        '730544GogUhC',
        'cket',
        '1511IsNmLf',
        '__esModule',
        'findAll',
        'fault',
        'mplete',
        '27QjEpqC',
        '70284hwyDtu',
        'neUsers',
        'AUPkd',
        'GLvLA',
        'Error\x20Veri',
        'default',
        'repeat',
        'isOnline',
        '6469276XUESpG'
    ];
    a = function () {
        return w;
    };
    return a();
}
l[q(0x1f3)] = (0x1030 + -0xccf + -0x325) * (0x196 + 0x1b1 * -0x1 + 0x1 * 0x403);
const m = {};
m[q(0x1e6) + p(0x1d1)] = !![], m[q(0x1f2) + 'il'] = ![], m[q(0x1f7)] = q(0x1f9) + p(0x1d4), m[p(0x1d9)] = l, exports[p(0x1d8)] = {
    'key': p(0x1f9) + p(0x1d4),
    'options': m,
    async 'handle'() {
        const s = p, t = p, e = {};
        e[s(0x1d5)] = s(0x1f9) + t(0x1fb) + t(0x1ee), e[s(0x1d6)] = s(0x1dc) + s(0x1d4), e[s(0x1ff)] = t(0x1dd) + t(0x1f9) + s(0x1d4), e[t(0x1ef)] = s(0x1d7) + s(0x1ea) + s(0x1fe);
        const f = e;
        try {
            logger_1[s(0x1de)][s(0x1eb)](f[s(0x1d5)]);
            const g = await User_1[s(0x1d8)][t(0x1cf)]();
            g[t(0x1f8)](async i => {
                const u = t, v = s, j = {};
                j[u(0x1da)] = ![], await i[u(0x1e7)](j);
            });
            const h = (-0x37f * 0x2 + -0x24b * -0x3 + 0x1d, socket_1[t(0x1ec)])();
            h[t(0x1f1)](f[s(0x1d6)]), logger_1[t(0x1de)][s(0x1eb)](f[t(0x1ff)]);
        } catch (i) {
            const j = {};
            j[s(0x1f5)] = f[s(0x1ef)], j[t(0x1e4)] = i, logger_1[t(0x1de)][s(0x1e4)](j);
            throw new Error(i);
        }
    }
};