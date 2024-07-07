'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x189)) / (0x1 * 0x23d7 + 0x25b8 + -0x498e) * (parseInt(m(0x18b)) / (-0x2612 + -0x1 * -0x12a1 + 0x1373)) + -parseInt(m(0x186)) / (-0x5d * -0x4 + 0xc12 + -0x3 * 0x481) + parseInt(l(0x194)) / (0xd8a * -0x1 + -0x3fb * -0x7 + -0xe4f) * (parseInt(m(0x184)) / (0x286 + -0xd9 * 0x1 + 0x1 * -0x1a8)) + -parseInt(l(0x178)) / (-0x40d + -0xfaf + 0x13c2) + -parseInt(l(0x185)) / (0x82e * 0x3 + -0x475 + -0x140e) + -parseInt(m(0x190)) / (-0x76f + -0x10b * 0x4 + 0xba3) * (-parseInt(l(0x172)) / (0x22f8 + -0x1a39 + 0x45b * -0x2)) + parseInt(m(0x174)) / (-0x1ffc + -0x78e + -0x12a * -0x22);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x87cdb + 0x5aab6 + 0x86bdf));
function a() {
    const u = [
        '1468860XcKxot',
        'IHloM',
        'EctSh',
        '1BFJbOu',
        'default',
        '394706jTYZam',
        '../errors/',
        'lnSiB',
        './GetTicke',
        'sage',
        '32kkyUMg',
        'nd\x20message',
        'Cannot\x20fou',
        '__importDe',
        '68ikoGhQ',
        'sages',
        'erty',
        '320364qWzkIw',
        'ERR_FETCH_',
        '11742970eRshJE',
        'AppError',
        '__esModule',
        '\x20within\x2010',
        '870414CiHJAl',
        'WAPP_MSG',
        'fault',
        'defineProp',
        './../model',
        'log',
        'tWbotBaile',
        's/Message',
        'value',
        'GetWbotMes',
        'findByPk',
        '0\x20last\x20mes',
        '72790PkCdoM',
        '2555637HBjmib'
    ];
    a = function () {
        return u;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x9 * 0x3ab + 0x1e02 + -0x3d94);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x193) + o(0x17a)] || function (c) {
    const p = n;
    return c && c[p(0x176)] ? c : { 'default': c };
};
const k = {};
k[o(0x180)] = !![], Object[n(0x17b) + o(0x171)](exports, n(0x176), k), exports[o(0x181) + n(0x18f)] = void (0x1f14 + -0xbde + -0x1336);
const AppError_1 = __importDefault(require(n(0x18c) + n(0x175))), GetTicketWbotBaileys_1 = __importDefault(require(n(0x18e) + o(0x17e) + 'ys')), Message_1 = __importDefault(require(o(0x17c) + n(0x17f))), GetWbotMessage = async (c, d) => {
        const q = n, r = n, e = {
                'IHloM': function (i) {
                    return i();
                },
                'EctSh': q(0x192) + q(0x191) + q(0x177) + r(0x183) + q(0x195),
                'lnSiB': q(0x173) + q(0x179)
            }, f = await (0x1cb1 + -0x5c3 + -0x16ee, GetTicketWbotBaileys_1[r(0x18a)])(c);
        let g = -0x2356 + 0xdb * 0x22 + 0x654;
        const h = async () => {
            const s = q, t = r, i = await Message_1[s(0x18a)][s(0x182)](d);
            return i;
        };
        try {
            const i = await e[r(0x187)](h);
            if (!i)
                throw new Error(e[q(0x188)]);
            return i;
        } catch (j) {
            console[r(0x17d)](j);
            throw new AppError_1[(r(0x18a))](e[q(0x18d)]);
        }
    };
exports[n(0x181) + n(0x18f)] = GetWbotMessage, exports[n(0x18a)] = exports[n(0x181) + n(0x18f)];