'use strict';
const o = b, p = b;
(function (c, d) {
    const m = b, n = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(m(0x106)) / (0x1dc6 + -0x9 * 0x2b3 + -0x2 * 0x2bd) * (parseInt(m(0x102)) / (-0x12f * 0x19 + 0x42c * 0x7 + -0x1 * -0x65)) + parseInt(n(0x10a)) / (0x15d * -0xe + 0x2d3 + -0x2 * -0x823) + -parseInt(n(0xfb)) / (-0x1 * 0x1e25 + 0xd2c + -0x1 * -0x10fd) + parseInt(n(0x116)) / (-0x13bc + -0x69d * 0x5 + 0x34d2) + -parseInt(n(0x119)) / (-0x16ae + 0x383 + 0x1331) + -parseInt(m(0x111)) / (-0x175c + 0xf1f + -0x17 * -0x5c) * (-parseInt(n(0x107)) / (0x263d + 0x1 * -0x2635 + 0x0)) + -parseInt(m(0x103)) / (0x1f40 + -0x10 * -0x19a + 0x1 * -0x38d7) * (parseInt(m(0x114)) / (-0x12bb + -0x1455 + 0x2cb * 0xe));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x18b66f + 0x2693c * 0x3 + 0x1e46c7));
var __importDefault = this && this[o(0x10f) + p(0x110)] || function (c) {
    const q = p;
    return c && c[q(0x11b)] ? c : { 'default': c };
};
const k = {};
k[o(0x105)] = !![], Object[p(0x113) + o(0xfe)](exports, p(0x11b), k);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1fa5 * 0x1 + -0x7 * -0x3bb + 0x2d * -0x143);
        let h = e[f];
        return h;
    }, b(c, d);
}
function a() {
    const t = [
        'username',
        'defineProp',
        '10RSFOHh',
        'ateContact',
        '7653585yqoAYl',
        'last_name',
        'reateOrUpd',
        '804276qPKqDE',
        '../Contact',
        '__esModule',
        '3797472zjPYry',
        'getFileLin',
        'smaUK',
        'erty',
        'telegram',
        'Service',
        '_id',
        '36LIcUju',
        '16282413XsIMcj',
        'photo',
        'value',
        '3567zDRJwg',
        '296FZyvjz',
        'default',
        'Services/C',
        '1881435vrrVJR',
        'small_file',
        'mftON',
        'first_name',
        'getChat',
        '__importDe',
        'fault',
        '309813UAfKrr'
    ];
    a = function () {
        return t;
    };
    return a();
}
const CreateOrUpdateContactService_1 = __importDefault(require(p(0x11a) + o(0x109) + p(0x118) + o(0x115) + p(0x100))), VerifyContact = async (c, d) => {
        const r = o, s = o, e = {
                'mftON': function (j, l) {
                    return j(l);
                },
                'smaUK': r(0xff)
            };
        let f;
        const g = await c[r(0x10e)]();
        try {
            f = g[s(0x104)]?.[r(0x10b) + r(0x101)] ? await c[s(0xff)][s(0xfc) + 'k'](g[s(0x104)]?.[s(0x10b) + r(0x101)]) : undefined;
        } catch (j) {
            f = undefined;
        }
        const h = {
                'name': g[r(0x10d)] + '\x20' + g[r(0x117)] || g[r(0x112)] || '',
                'number': '',
                'profilePicUrl': f ? e[r(0x10c)](String, f) : undefined,
                'tenantId': d,
                'pushname': g[r(0x112)] || '',
                'isUser': !![],
                'isWAContact': ![],
                'isGroup': ![],
                'origem': e[s(0xfd)],
                'telegramId': g['id']
            }, i = await (0x2 * -0xf3d + 0x1 * 0x599 + -0x3 * -0x84b, CreateOrUpdateContactService_1[r(0x108)])(h);
        return i;
    };
exports[o(0x108)] = VerifyContact;