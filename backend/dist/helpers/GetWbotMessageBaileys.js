'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x20b)) / (-0x267b + 0x1 * 0x1726 + 0xf56 * 0x1) * (parseInt(m(0x1f0)) / (-0xe25 + -0x1501 + 0x2328)) + parseInt(l(0x201)) / (-0x1915 * -0x1 + 0x17b4 + -0x821 * 0x6) + -parseInt(l(0x213)) / (0x1687 + 0x4e * -0x1d + 0x1 * -0xdad) * (parseInt(m(0x1f8)) / (0x38 + -0x88b + 0x858)) + -parseInt(l(0x203)) / (0xc10 + 0x12cb + 0x9 * -0x36d) + parseInt(l(0x1fd)) / (-0x1 * -0x18d7 + 0xb * -0x274 + -0x116 * -0x2) * (parseInt(m(0x200)) / (-0xd1b + 0x12ca + 0x1 * -0x5a7)) + -parseInt(m(0x1f6)) / (0x76d + -0x83 * 0x1 + 0x6e1 * -0x1) + -parseInt(l(0x1f9)) / (-0xf3b * -0x1 + 0xb4c * 0x1 + -0x1a7d) * (-parseInt(m(0x202)) / (0x4d * 0x25 + 0x431 * -0x7 + 0x1241));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xc839c + -0x241cc + -0x2c941 * -0x1));
var __importDefault = this && this[n(0x1f7) + n(0x1f4)] || function (c) {
    const p = n;
    return c && c[p(0x206)] ? c : { 'default': c };
};
const k = {};
k[o(0x204)] = !![], Object[o(0x212) + n(0x1ff)](exports, o(0x206), k), exports[o(0x20c) + o(0x1fb)] = void (-0x12c4 + -0xb84 * 0x1 + 0x1e48);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x243a + -0x3b9 * -0x9 + 0x3fd * -0x11);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'WAPP_MSG',
        '6338qNRsrx',
        '\x20within\x2010',
        'nd\x20message',
        'GXFSv',
        'fault',
        '0\x20last\x20mes',
        '8589465jUVMbC',
        '__importDe',
        '2545gOCmDF',
        '3650PKNQTJ',
        'AppError',
        'sage',
        '../errors/',
        '7PXPxMd',
        'findByPk',
        'erty',
        '9292144YyZKjC',
        '3172392vUOTmn',
        '65868MMpEtb',
        '5146350LkTzRe',
        'value',
        './GetTicke',
        '__esModule',
        'default',
        'Cannot\x20fou',
        'tWbotBaile',
        'tWpHH',
        '221grTcvm',
        'GetWbotMes',
        's/Message',
        'sages',
        'uhKoS',
        'ERR_FETCH_',
        './../model',
        'defineProp',
        '8152WxLgBm',
        'log'
    ];
    a = function () {
        return u;
    };
    return a();
}
const AppError_1 = __importDefault(require(o(0x1fc) + o(0x1fa))), GetTicketWbotBaileys_1 = __importDefault(require(n(0x205) + o(0x209) + 'ys')), Message_1 = __importDefault(require(n(0x211) + n(0x20d))), GetWbotMessage = async (c, d) => {
        const q = n, r = n, e = {
                'uhKoS': function (i) {
                    return i();
                },
                'GXFSv': q(0x208) + r(0x1f2) + q(0x1f1) + q(0x1f5) + q(0x20e),
                'tWpHH': q(0x210) + r(0x1ef)
            }, f = await (0x2d4 * -0xc + 0xd * -0x1a6 + 0x375e, GetTicketWbotBaileys_1[q(0x207)])(c);
        let g = 0x1c5a + 0x700 * -0x2 + -0xe46;
        const h = async () => {
            const s = q, t = q, i = await Message_1[s(0x207)][s(0x1fe)](d);
            return i;
        };
        try {
            const i = await e[q(0x20f)](h);
            if (!i)
                throw new Error(e[q(0x1f3)]);
            return i;
        } catch (j) {
            console[r(0x1ee)](j);
            throw new AppError_1[(q(0x207))](e[r(0x20a)]);
        }
    };
exports[o(0x20c) + o(0x1fb)] = GetWbotMessage, exports[o(0x207)] = exports[o(0x20c) + o(0x1fb)];