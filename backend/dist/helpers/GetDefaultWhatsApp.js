'use strict';
const s = b, t = b;
(function (c, d) {
    const q = b, r = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(q(0x159)) / (0x66 * -0x11 + 0x184d + -0x8c3 * 0x2) * (-parseInt(q(0x15e)) / (0x1 * 0x2509 + 0x14b * 0x1 + -0x2652)) + parseInt(r(0x154)) / (0x8 * 0x1f9 + 0x984 + 0x1 * -0x1949) * (parseInt(q(0x15f)) / (-0x1b * -0x97 + 0xf7b + 0x7d9 * -0x4)) + -parseInt(q(0x153)) / (-0x943 + 0x22d6 + -0x198e) + parseInt(q(0x152)) / (0x17cd * -0x1 + 0x998 + 0xe3b * 0x1) * (parseInt(r(0x165)) / (-0x3 * -0x6e7 + -0x2695 + 0x11e7)) + parseInt(r(0x162)) / (-0x40 * 0x97 + -0x9 * -0x229 + 0x1257) * (-parseInt(r(0x158)) / (-0x225 * -0x1 + 0x55 + 0x5 * -0x7d)) + parseInt(r(0x169)) / (0x329 * -0x1 + 0xc14 * 0x2 + -0x14f5 * 0x1) + parseInt(q(0x160)) / (-0x2065 * -0x1 + 0xe * 0x1c3 + -0x4 * 0xe41) * (parseInt(q(0x150)) / (0x9 * 0x239 + 0x208c + -0x1 * 0x3481));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x102a3 + -0x16e31 + 0x58607));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0xbd + -0xc5c + 0x2 * 0x733);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const x = [
        '1705660sRWCZb',
        '24HbjLaj',
        'whatsapp',
        'where',
        'Whatsapp',
        '2995605eWWGqI',
        '29wZxBOe',
        '__esModule',
        'AppError',
        'fault',
        'default',
        '14722ryFvqf',
        '62924ursrUW',
        '104610JONjLA',
        '__importDe',
        '8IUrJgh',
        '../errors/',
        'HABIo',
        '1589imQWiy',
        'value',
        'findOne',
        '../models/',
        '2708960BLEEwf',
        'gquje',
        '_WAPP_FOUN',
        'erty',
        'CONNECTED',
        'defineProp',
        'FHsJQ',
        'ERR_NO_DEF',
        'status',
        'type',
        'tenantId',
        '828tRUjtE',
        'xhryC',
        '966GnmwcJ'
    ];
    a = function () {
        return x;
    };
    return a();
}
var __importDefault = this && this[s(0x161) + t(0x15c)] || function (c) {
    const u = t;
    return c && c[u(0x15a)] ? c : { 'default': c };
};
const k = {};
k[t(0x166)] = !![], Object[s(0x16e) + t(0x16c)](exports, s(0x15a), k);
const AppError_1 = __importDefault(require(t(0x163) + s(0x15b))), Whatsapp_1 = __importDefault(require(s(0x168) + s(0x157))), GetDefaultWhatsApp = async (f, g) => {
        const v = s, w = s, h = {};
        h[v(0x16f)] = v(0x16d), h[w(0x16a)] = w(0x155), h[w(0x164)] = function (o, p) {
            return o || p;
        }, h[v(0x151)] = v(0x170) + w(0x16b) + 'D';
        const i = h, j = {};
        j[v(0x14f)] = f, j[v(0x14d)] = i[v(0x16f)];
        const l = j;
        g ? l['id'] = g : l[w(0x14e)] = i[w(0x16a)];
        const m = {};
        m[v(0x156)] = l;
        const n = await Whatsapp_1[w(0x15d)][v(0x167)](m);
        if (i[v(0x164)](!n, !f))
            throw new AppError_1[(v(0x15d))](i[v(0x151)]);
        return n;
    };
exports[s(0x15d)] = GetDefaultWhatsApp;