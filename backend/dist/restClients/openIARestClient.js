'use strict';
const n = b, o = b;
function a() {
    const v = [
        'post',
        'data',
        'value',
        '2MlCxUo',
        '__esModule',
        'default',
        'env',
        'eToIA',
        '1316360wfEYGh',
        'OPEN_IA_UR',
        '5595327rYltNF',
        '__importDe',
        'defineProp',
        '7vlgGtz',
        '/message_s',
        'LaXFW',
        'sendMessag',
        '50270jaifLo',
        '1010495PPZwff',
        '267576QynUva',
        'erty',
        '824424trpbxJ',
        'axios',
        'isnetsul',
        'log',
        '484683lRfSVE',
        'fault',
        'response'
    ];
    a = function () {
        return v;
    };
    return a();
}
(function (c, d) {
    const l = b, m = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(l(0x208)) / (0x1 * -0xcbc + -0xb * -0x33e + -0x16ed) + parseInt(l(0x1fa)) / (-0x2374 + 0x25b3 + 0xbf * -0x3) * (parseInt(l(0x1f4)) / (-0x2564 + -0x343 + -0x411 * -0xa)) + parseInt(l(0x20c)) / (-0x146e + -0x12fc + 0x276e) + parseInt(m(0x209)) / (0xed2 + -0x1cad + 0xde0) + parseInt(l(0x20a)) / (-0x4d4 + 0x1 * 0x3c3 + 0x117 * 0x1) + parseInt(m(0x204)) / (-0x80d + 0x135 * -0x1b + 0x28ab) * (parseInt(l(0x1ff)) / (0x2 * 0x5fb + -0x397 * -0x1 + -0xf85)) + -parseInt(m(0x201)) / (-0x11af * -0x1 + -0x1e73 * -0x1 + -0x3019 * 0x1);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x1 * -0xcea9 + -0x118a8 + 0x1ebb5));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xa41 + 0x23e1 + -0x17ac);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[n(0x202) + n(0x1f5)] || function (c) {
    const p = o;
    return c && c[p(0x1fb)] ? c : { 'default': c };
};
const k = {};
k[n(0x1f9)] = !![], Object[n(0x203) + n(0x20b)](exports, n(0x1fb), k), exports[o(0x207) + o(0x1fe)] = void (0xe5 * -0x5 + -0x174 + 0x25 * 0x29);
const axios_1 = __importDefault(require(n(0x20d))), sendMessageToIA = async d => {
        const q = n, r = o, e = {
                'LaXFW': function (f, g) {
                    return f(g);
                }
            };
        try {
            const f = { ...d }, g = await axios_1[q(0x1fc)][r(0x1f7)](process[r(0x1fd)][r(0x200) + 'L'] + (q(0x205) + q(0x20e)), f);
            return e[q(0x206)](handleSucces, g);
        } catch (h) {
            return e[q(0x206)](handleError, h);
        }
    };
exports[o(0x207) + o(0x1fe)] = sendMessageToIA;
const handleError = c => {
        const s = n, t = n;
        console[s(0x20f)](c[t(0x1f6)]);
    }, handleSucces = c => {
        const u = o;
        return c[u(0x1f8)];
    };