'use strict';
const n = b, o = b;
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(l(0xf5)) / (-0x20ae * 0x1 + 0x1 * -0x1c57 + 0x3d06) * (parseInt(l(0xed)) / (-0x1ff + -0x2164 + 0x2365)) + parseInt(l(0xe6)) / (-0x1593 + -0x1fa7 + -0x79b * -0x7) + -parseInt(m(0xee)) / (0x1e2 + 0x23fc + -0xa * 0x3c9) + -parseInt(l(0xf0)) / (0x6b6 * 0x1 + -0x15df + 0xf2e) + -parseInt(m(0xf3)) / (-0x1 * -0x14a7 + -0x2 * -0x2de + -0x1 * 0x1a5d) + -parseInt(l(0xf1)) / (-0x1b * -0xf3 + -0x18d8 + -0xc2) * (parseInt(l(0xea)) / (0x1822 + 0xb77 + -0xbdb * 0x3)) + parseInt(m(0xef)) / (0x13f6 + 0xc25 * 0x3 + -0xe17 * 0x4);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x43 * 0x3efb + 0xd529e + -0x1e * -0x87d7));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x11 * -0x24c + -0x69 * -0x31 + 0x1 * -0x3a4b);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0xe5) + o(0xe3)] || function (c) {
    const p = n;
    return c && c[p(0xf2)] ? c : { 'default': c };
};
const k = {};
k[o(0xda)] = !![], Object[n(0xe8) + n(0xdc)](exports, n(0xf2), k), exports[n(0xeb) + o(0xdf)] = void (0x30f * -0x9 + -0xf7e + 0x2b05);
function a() {
    const v = [
        'response',
        '344ktqwoC',
        '3265036FaLiCY',
        '20475360HnYTDw',
        '6338730AvvoQi',
        '2268826OpZOUK',
        '__esModule',
        '1200594wpSeIk',
        'isnetsul',
        '6980uLbPNa',
        'value',
        'data',
        'erty',
        '/message_s',
        'log',
        'eToIA',
        'post',
        'env',
        'axios',
        'fault',
        'OPEN_IA_UR',
        '__importDe',
        '1850955WoHcUA',
        'IgNxu',
        'defineProp',
        'default',
        '24XVCZAc',
        'sendMessag'
    ];
    a = function () {
        return v;
    };
    return a();
}
const axios_1 = __importDefault(require(n(0xe2))), sendMessageToIA = async d => {
        const q = o, r = o, e = {
                'IgNxu': function (f, g) {
                    return f(g);
                }
            };
        try {
            const f = { ...d }, g = await axios_1[q(0xe9)][r(0xe0)](process[r(0xe1)][r(0xe4) + 'L'] + (q(0xdd) + r(0xf4)), f);
            return e[q(0xe7)](handleSucces, g);
        } catch (h) {
            return e[q(0xe7)](handleError, h);
        }
    };
exports[n(0xeb) + n(0xdf)] = sendMessageToIA;
const handleError = c => {
        const s = o, t = o;
        console[s(0xde)](c[t(0xec)]);
    }, handleSucces = c => {
        const u = n;
        return c[u(0xdb)];
    };