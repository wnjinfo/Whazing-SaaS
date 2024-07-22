'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x156)) / (0x1c23 + 0xb6b + -0x278d) + -parseInt(l(0x14d)) / (-0x2307 + 0xb9 * 0x1 + 0x2250) * (-parseInt(l(0x150)) / (-0x4 * 0x1eb + 0x144d + -0xc9e)) + -parseInt(l(0x14a)) / (-0x88f + 0x109c + -0x809) + parseInt(m(0x13a)) / (-0x1c8d * 0x1 + -0x85f + 0x24f1) + parseInt(l(0x145)) / (-0x1 * 0x2083 + -0xc77 + 0x2d00) + parseInt(m(0x141)) / (0x1 * -0x2141 + -0x11 * 0x89 + 0x2a61) * (-parseInt(l(0x159)) / (0x846 * -0x3 + 0x6 * 0x27e + 0x9e6)) + parseInt(m(0x15b)) / (-0x9c9 + -0x17b6 + 0x2188);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x123ee * 0x1 + -0xaa79 + 0x2c31b));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x4 * -0x3a1 + 0x1b3b + -0x1 * 0x2885);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const u = [
        'defineProp',
        '__esModule',
        '3052ibVFwf',
        'SKdBW',
        'GetWbotMes',
        'default',
        '1524948CfVkLy',
        '../errors/',
        'findByPk',
        './../model',
        'TEaVX',
        '269552JFJRPW',
        'ERR_FETCH_',
        '\x20within\x2010',
        '2TzTrAh',
        '0\x20last\x20mes',
        's/Message',
        '773805XVyJLQ',
        'value',
        'Cannot\x20fou',
        'pEpCE',
        'tWbotBaile',
        'log',
        '353541DbyRML',
        '__importDe',
        'WAPP_MSG',
        '6056gGuNsO',
        './GetTicke',
        '2736252jUuvnY',
        'AppError',
        'sage',
        '734860jgEFOh',
        'sages',
        'erty',
        'fault',
        'nd\x20message'
    ];
    a = function () {
        return u;
    };
    return a();
}
var __importDefault = this && this[n(0x157) + o(0x13d)] || function (c) {
    const p = o;
    return c && c[p(0x140)] ? c : { 'default': c };
};
const k = {};
k[o(0x151)] = !![], Object[o(0x13f) + o(0x13c)](exports, o(0x140), k), exports[n(0x143) + o(0x15d)] = void (-0xfa1 + 0x12ed + -0xd3 * 0x4);
const AppError_1 = __importDefault(require(o(0x146) + o(0x15c))), GetTicketWbotBaileys_1 = __importDefault(require(o(0x15a) + o(0x154) + 'ys')), Message_1 = __importDefault(require(o(0x148) + n(0x14f))), GetWbotMessage = async (c, d) => {
        const q = o, r = n, e = {
                'SKdBW': function (i) {
                    return i();
                },
                'TEaVX': q(0x152) + q(0x13e) + q(0x14c) + q(0x14e) + q(0x13b),
                'pEpCE': r(0x14b) + q(0x158)
            }, f = await (0x1f08 + -0x1436 + 0xa * -0x115, GetTicketWbotBaileys_1[q(0x144)])(c);
        let g = 0x35 * -0x4 + -0x28 * 0x19 + 0x4d0;
        const h = async () => {
            const s = r, t = q, i = await Message_1[s(0x144)][s(0x147)](d);
            return i;
        };
        try {
            const i = await e[r(0x142)](h);
            if (!i)
                throw new Error(e[q(0x149)]);
            return i;
        } catch (j) {
            console[r(0x155)](j);
            throw new AppError_1[(r(0x144))](e[r(0x153)]);
        }
    };
exports[n(0x143) + n(0x15d)] = GetWbotMessage, exports[n(0x144)] = exports[n(0x143) + n(0x15d)];