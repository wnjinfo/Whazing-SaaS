'use strict';
function a() {
    const x = [
        'AppError',
        'OazZY',
        'Whatsapp',
        'snYDm',
        '4899StmVXM',
        'defineProp',
        '1365204rdHeIY',
        '830zUqvBl',
        '../models/',
        '88Kntent',
        'ERR_NO_DEF',
        '184219kNDRYD',
        '85041dPXfkk',
        '5752550SBcNkv',
        'where',
        'CONNECTED',
        '_WAPP_FOUN',
        'erty',
        '__importDe',
        'foysc',
        'tenantId',
        'status',
        '295429PdJLLp',
        '__esModule',
        'bGFIs',
        '102Yawmzb',
        '../errors/',
        'default',
        'type',
        '1995032UYTOYb',
        'fault',
        'value',
        'findOne',
        'whatsapp'
    ];
    a = function () {
        return x;
    };
    return a();
}
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(q(0x74)) / (-0x2 * -0x32f + 0x399 + -0x9f6) + -parseInt(q(0x77)) / (-0x17d + -0xe7d * 0x1 + -0x1 * -0xffc) * (-parseInt(r(0x84)) / (0x3 * -0xc0b + -0x19a6 + 0x2cf * 0x16)) + parseInt(r(0x7b)) / (0x2335 + 0x2547 * -0x1 + 0x216) + parseInt(q(0x6b)) / (-0x8c8 + -0x11a4 + 0x1 * 0x1a71) + -parseInt(q(0x86)) / (-0x4 * -0x8cb + 0x1e2 * -0x1 + -0x2144 * 0x1) + -parseInt(r(0x69)) / (0x157c + -0x1439 + -0x13c) * (-parseInt(r(0x89)) / (0x2 * -0x849 + 0x6b1 + -0x9e9 * -0x1)) + parseInt(q(0x6a)) / (-0xf17 + 0xbba + 0x366) * (-parseInt(q(0x87)) / (0x2318 + -0x1 * -0x2447 + -0x3 * 0x17c7));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x7 * 0x1c0f0 + -0x13d7c1 * 0x1 + -0x147 * -0x21af));
var __importDefault = this && this[s(0x70) + t(0x7c)] || function (c) {
    const u = t;
    return c && c[u(0x75)] ? c : { 'default': c };
};
const k = {};
k[t(0x7d)] = !![], Object[t(0x85) + s(0x6f)](exports, t(0x75), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0xb6c + 0x2603 * -0x1 + -0x31d8 * -0x1);
        let h = e[f];
        return h;
    }, b(c, d);
}
const AppError_1 = __importDefault(require(s(0x78) + s(0x80))), Whatsapp_1 = __importDefault(require(s(0x88) + t(0x82))), GetDefaultWhatsApp = async (f, g) => {
        const v = t, w = s, h = {};
        h[v(0x71)] = w(0x6d), h[w(0x83)] = w(0x7f), h[w(0x76)] = function (o, p) {
            return o || p;
        }, h[v(0x81)] = v(0x8a) + v(0x6e) + 'D';
        const i = h, j = {};
        j[w(0x72)] = f, j[v(0x73)] = i[w(0x71)];
        const l = j;
        g ? l['id'] = g : l[w(0x7a)] = i[w(0x83)];
        const m = {};
        m[w(0x6c)] = l;
        const n = await Whatsapp_1[v(0x79)][v(0x7e)](m);
        if (i[v(0x76)](!n, !f))
            throw new AppError_1[(v(0x79))](i[w(0x81)]);
        return n;
    };
exports[s(0x79)] = GetDefaultWhatsApp;