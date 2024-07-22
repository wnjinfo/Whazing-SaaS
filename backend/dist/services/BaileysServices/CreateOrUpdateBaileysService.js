'use strict';
const w = b, x = b;
function a() {
    const B = [
        'erty',
        'default',
        'chats',
        '../../mode',
        '24sWwFFE',
        '1694441qJfwMU',
        '99lpEeop',
        '6933vUCUjy',
        'findOne',
        '6044952gNwpbv',
        '8714420uorcya',
        '1035896lTSBSY',
        'update',
        'whatsappId',
        'ls/Baileys',
        'fault',
        '2928350XSiNcZ',
        '__importDe',
        'parse',
        '3527838upoKSZ',
        'value',
        'log',
        'findIndex',
        'where',
        '__esModule',
        'defineProp',
        'push',
        'sort',
        'contacts',
        '86rMInsB',
        'create',
        'filter',
        'stringify'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(u(0x1a0)) / (0x1 * -0x184d + 0x1438 + 0x416) + -parseInt(v(0x191)) / (-0x1 * 0x221f + -0x2fd * 0xb + 0x4300 * 0x1) * (-parseInt(u(0x19c)) / (-0x1334 + 0x1aa * -0x7 + 0x1 * 0x1edd)) + -parseInt(v(0x19e)) / (0x76 * 0x4 + -0x2 * 0xaca + 0x13c0) + -parseInt(u(0x19f)) / (0xc0a * -0x2 + -0x2327 * -0x1 + 0x11b * -0xa) + parseInt(u(0x1a8)) / (0x16ff + -0x583 * -0x2 + -0x21ff) + -parseInt(u(0x19a)) / (-0x817 + -0x35a + -0x4 * -0x2de) * (parseInt(u(0x199)) / (0x3 * 0x738 + 0x135e + -0x28fe)) + parseInt(u(0x19b)) / (0x13a1 + 0x245b + 0x1 * -0x37f3) * (parseInt(u(0x1a5)) / (0x1d4 + -0x5e * 0x59 + 0x1ee4));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1 * -0x2e483 + -0x13ee10 + 0x2588a7));
var __importDefault = this && this[w(0x1a6) + w(0x1a4)] || function (c) {
    const y = x;
    return c && c[y(0x1ad)] ? c : { 'default': c };
};
const k = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x64 * -0x7 + -0x14b2 + 0x1387);
        let h = e[f];
        return h;
    }, b(c, d);
}
k[w(0x1a9)] = !![], Object[x(0x1ae) + w(0x195)](exports, x(0x1ad), k);
const Baileys_1 = __importDefault(require(w(0x198) + x(0x1a3))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f,
        chats: g
    }) => {
        const z = x, A = w;
        try {
            const h = {};
            h[z(0x1a2)] = e;
            const i = {};
            i[A(0x1ac)] = h;
            const j = await Baileys_1[z(0x196)][z(0x19d)](i);
            if (j) {
                const m = j[z(0x197)] ? JSON[z(0x1a7)](j[A(0x197)]) : [], n = j[A(0x1b1)] ? JSON[z(0x1a7)](j[A(0x1b1)]) : [];
                if (g) {
                    m[A(0x1af)](...g), m[z(0x1b0)]();
                    const o = m[z(0x193)]((p, q, r) => r[z(0x1ab)](s => s['id'] === p['id']) === q);
                    return await j[A(0x1a1)]({ 'chats': JSON[A(0x194)](o) });
                }
                if (f) {
                    n[A(0x1af)](...f), n[A(0x1b0)]();
                    const p = n[A(0x193)]((q, r, s) => s[A(0x1ab)](t => t['id'] === q['id']) === r);
                    return await j[z(0x1a1)]({ 'contacts': JSON[A(0x194)](p) });
                }
            }
            const l = await Baileys_1[A(0x196)][A(0x192)]({
                'whatsappId': e,
                'contacts': JSON[z(0x194)](f),
                'chats': JSON[A(0x194)](g)
            });
            return await new Promise(q => setTimeout(q, 0x3e2 + 0x6 * -0x269 + -0x1 * -0xe7c)), l;
        } catch (q) {
            console[A(0x1aa)](q);
            throw new Error(q);
        }
    };
exports[w(0x196)] = createOrUpdateBaileysService;