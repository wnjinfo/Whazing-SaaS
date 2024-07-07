'use strict';
const w = b, x = b;
function a() {
    const B = [
        '__importDe',
        '781566qoWFLp',
        'whatsappId',
        'stringify',
        '4887300RxkyNi',
        'where',
        '7060584KaaAXI',
        '11350035fiqXKI',
        '35UFQBHG',
        'default',
        'contacts',
        '94VQQgBO',
        'push',
        'chats',
        'fault',
        'create',
        'ls/Baileys',
        'update',
        'parse',
        '../../mode',
        'erty',
        'defineProp',
        '69441sFUreO',
        '10NonDvW',
        'findIndex',
        'findOne',
        'filter',
        '__esModule',
        '81717WSkomg',
        'sort',
        'log',
        'value',
        '4890315XxiAwD'
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
            const f = parseInt(u(0x1ca)) / (-0x26e6 + -0x1dd8 + 0x44bf) + -parseInt(u(0x1e0)) / (-0x1097 + -0x17f * 0x18 + 0x3481) * (-parseInt(u(0x1d0)) / (0x3e0 + -0x17b2 + 0x13d5)) + -parseInt(v(0x1d9)) / (-0x93 + -0x1716 + -0xb * -0x227) + -parseInt(v(0x1d4)) / (0xaef * -0x3 + -0x235a + -0x4 * -0x110b) + -parseInt(u(0x1d6)) / (-0x7f6 + 0x2 * -0xce + 0x998) * (parseInt(u(0x1dd)) / (-0x1566 + 0x10d7 * 0x1 + 0x496)) + parseInt(v(0x1db)) / (0x12ed + -0x2225 + 0xf40) + -parseInt(v(0x1dc)) / (0x2046 + -0x88f + 0x7 * -0x362) * (-parseInt(v(0x1cb)) / (0xa6 + -0x1 * -0x13d5 + 0x1 * -0x1471));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x759a * -0xd + 0x3e3 * 0x43 + -0x2b * -0x10ba));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x3 * -0x3ec + -0xd1e + -0x1aa7 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[w(0x1d5) + w(0x1e3)] || function (c) {
    const y = w;
    return c && c[y(0x1cf)] ? c : { 'default': c };
};
const k = {};
k[x(0x1d3)] = !![], Object[w(0x1c9) + x(0x1c8)](exports, x(0x1cf), k);
const Baileys_1 = __importDefault(require(w(0x1c7) + w(0x1e5))), createOrUpdateBaileysService = async ({
        whatsappId: e,
        contacts: f,
        chats: g
    }) => {
        const z = w, A = w;
        try {
            const h = {};
            h[z(0x1d7)] = e;
            const i = {};
            i[z(0x1da)] = h;
            const j = await Baileys_1[A(0x1de)][z(0x1cd)](i);
            if (j) {
                const m = j[z(0x1e2)] ? JSON[z(0x1c6)](j[A(0x1e2)]) : [], n = j[z(0x1df)] ? JSON[z(0x1c6)](j[A(0x1df)]) : [];
                if (g) {
                    m[A(0x1e1)](...g), m[A(0x1d1)]();
                    const o = m[z(0x1ce)]((p, q, r) => r[z(0x1cc)](s => s['id'] === p['id']) === q);
                    return await j[z(0x1c5)]({ 'chats': JSON[z(0x1d8)](o) });
                }
                if (f) {
                    n[A(0x1e1)](...f), n[A(0x1d1)]();
                    const p = n[z(0x1ce)]((q, r, s) => s[z(0x1cc)](t => t['id'] === q['id']) === r);
                    return await j[z(0x1c5)]({ 'contacts': JSON[z(0x1d8)](p) });
                }
            }
            const l = await Baileys_1[A(0x1de)][A(0x1e4)]({
                'whatsappId': e,
                'contacts': JSON[A(0x1d8)](f),
                'chats': JSON[z(0x1d8)](g)
            });
            return await new Promise(q => setTimeout(q, -0x1e54 + 0x7b5 * 0x4 + 0x368 * 0x1)), l;
        } catch (q) {
            console[A(0x1d2)](q);
            throw new Error(q);
        }
    };
exports[x(0x1de)] = createOrUpdateBaileysService;