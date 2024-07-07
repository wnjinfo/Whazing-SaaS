'use strict';
const w = b, x = b;
(function (c, d) {
    const u = b, v = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(u(0x13a)) / (0xd * 0x27e + -0xab7 + 0x6f * -0x32) * (parseInt(v(0x12d)) / (-0x4 * 0x37 + -0x11f5 * -0x1 + -0x1117)) + -parseInt(u(0x12b)) / (-0x176c + -0x24ea + 0x3c59) + parseInt(v(0x13d)) / (0x1858 + 0xe9 * 0x25 + -0x3a01) * (-parseInt(u(0x140)) / (0x7ef + -0x242f * 0x1 + 0x1c45 * 0x1)) + parseInt(v(0x144)) / (-0x2 * 0x3cb + -0x1fc6 + 0x2762) + parseInt(v(0x130)) / (0x1f8 * 0xd + -0x3 * -0xbdd + -0x3d28) * (-parseInt(u(0x137)) / (-0x6 * -0x286 + -0xda9 + -0x173)) + parseInt(v(0x126)) / (-0x75d + 0x21b + 0x54b) * (-parseInt(v(0x127)) / (-0x4d6 + 0x332 + 0x1ae)) + parseInt(v(0x12e)) / (-0x3 * -0x577 + 0x1302 + -0x1f * 0x124);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x95855 + -0x110f32 + 0x16112b * 0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x5 * 0x2f9 + 0x2 * 0xe87 + 0x1 * -0xd0d);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const B = [
        '5454638gUccWK',
        'update',
        'fault',
        'chats',
        'parse',
        'sort',
        'contacts',
        '16GegzgA',
        'log',
        'push',
        '359039zULaHm',
        'create',
        'default',
        '1124ALiWhw',
        'stringify',
        'whatsappId',
        '3945QIJhqM',
        'findIndex',
        '../../mode',
        'findOne',
        '9997482nhKcRh',
        'value',
        'ls/Baileys',
        '__esModule',
        '27ZhJQba',
        '5423420wmpFaz',
        'where',
        'defineProp',
        '__importDe',
        '2603163KVxTNE',
        'erty',
        '2odZmYM',
        '42991718JHYtyY',
        'filter'
    ];
    a = function () {
        return B;
    };
    return a();
}
var __importDefault = this && this[w(0x12a) + x(0x132)] || function (c) {
    const y = w;
    return c && c[y(0x125)] ? c : { 'default': c };
};
const k = {};
k[x(0x145)] = !![], Object[w(0x129) + x(0x12c)](exports, w(0x125), k);
const Baileys_1 = __importDefault(require(x(0x142) + w(0x124))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f,
        chats: g
    }) => {
        const z = x, A = w;
        try {
            const h = {};
            h[z(0x13f)] = e;
            const i = {};
            i[z(0x128)] = h;
            const j = await Baileys_1[A(0x13c)][z(0x143)](i);
            if (j) {
                const m = j[z(0x133)] ? JSON[A(0x134)](j[z(0x133)]) : [], n = j[A(0x136)] ? JSON[A(0x134)](j[z(0x136)]) : [];
                if (g) {
                    m[z(0x139)](...g), m[A(0x135)]();
                    const o = m[A(0x12f)]((p, q, r) => r[z(0x141)](s => s['id'] === p['id']) === q);
                    return await j[z(0x131)]({ 'chats': JSON[A(0x13e)](o) });
                }
                if (f) {
                    n[A(0x139)](...f), n[A(0x135)]();
                    const p = n[z(0x12f)]((q, r, s) => s[A(0x141)](t => t['id'] === q['id']) === r);
                    return await j[A(0x131)]({ 'contacts': JSON[z(0x13e)](p) });
                }
            }
            const l = await Baileys_1[z(0x13c)][z(0x13b)]({
                'whatsappId': e,
                'contacts': JSON[z(0x13e)](f),
                'chats': JSON[z(0x13e)](g)
            });
            return await new Promise(q => setTimeout(q, 0x1d * -0x59 + -0x2451 + 0x324e)), l;
        } catch (q) {
            console[A(0x138)](q);
            throw new Error(q);
        }
    };
exports[w(0x13c)] = createOrUpdateBaileysService;