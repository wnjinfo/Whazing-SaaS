'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x75)) / (-0x1dc + -0x1 * 0x6df + 0xac * 0xd) * (-parseInt(u(0x73)) / (0x922 + 0x1ea1 + -0x27c1)) + parseInt(u(0x76)) / (-0x30a * -0x9 + -0x2027 * 0x1 + 0x4d0) + parseInt(u(0x80)) / (-0x1f * 0x8f + 0x1eb9 + -0xd64) + parseInt(t(0x71)) / (0x152b + -0x18cb + 0x137 * 0x3) * (-parseInt(t(0x77)) / (0x1a26 + -0x6 * 0x669 + 0xc56 * 0x1)) + parseInt(u(0x82)) / (-0x1baf + 0xd * -0x1bb + 0x3235) + -parseInt(u(0x74)) / (-0x5d5 * 0x5 + 0xac2 + 0x8f * 0x21) * (parseInt(t(0x7a)) / (-0xf + -0x1 * -0xef2 + -0xeda)) + parseInt(u(0x87)) / (0x4ac + -0x59 * 0xe + 0x3c) * (-parseInt(t(0x78)) / (0xc * -0x30b + -0x2277 + 0x2383 * 0x2));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xf54bf + 0x8b * 0x1346 + -0xeff26));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xf25 + -0x4a3 * -0x3 + -0x1ca9);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x81) + w(0x70)] || function (c) {
    const x = v;
    return c && c[x(0x6d)] ? c : { 'default': c };
};
const k = {};
function a() {
    const A = [
        '1624820scfxHJ',
        '../../erro',
        '2fWFIGu',
        '680552fIsqkS',
        '1252163oxrVNc',
        '3987831aZZBar',
        '12FEAhjI',
        '173294ATRbdg',
        'contact',
        '9uCGnuV',
        'user',
        'ls/User',
        'tenantId',
        'findByPk',
        'associatio',
        '4233588NiEeGF',
        '__importDe',
        '7002807fGkPbY',
        'LUhqj',
        'include',
        'jwZGq',
        'ls/Contact',
        '440XLWGGA',
        'model',
        'ERR_NO_TIC',
        'extraInfo',
        'wallets',
        'okjFu',
        'iMZeq',
        '../../mode',
        'dPxFG',
        'attributes',
        'qAvja',
        'Jplkp',
        'btgyT',
        'isDeleted',
        'erty',
        'default',
        'rs/AppErro',
        'obpqD',
        'defineProp',
        'LJkWa',
        'ls/Ticket',
        'tags',
        'KET_FOUND',
        'value',
        '__esModule',
        'whatsapp',
        'name',
        'fault'
    ];
    a = function () {
        return A;
    };
    return a();
}
k[w(0x6c)] = !![], Object[v(0x67) + v(0x95)](exports, w(0x6d), k);
const Ticket_1 = __importDefault(require(v(0x8e) + v(0x69))), AppError_1 = __importDefault(require(w(0x72) + w(0x65) + 'r')), Contact_1 = __importDefault(require(w(0x8e) + v(0x86))), User_1 = __importDefault(require(w(0x8e) + w(0x7c))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = w, z = v, j = {};
        j[y(0x66)] = z(0x79), j[y(0x92)] = z(0x8a), j[z(0x83)] = z(0x6a), j[y(0x68)] = z(0x8b), j[z(0x91)] = y(0x6f), j[y(0x85)] = y(0x7b), j[z(0x8d)] = y(0x6e), j[y(0x8f)] = z(0x94), j[y(0x8c)] = function (r, s) {
            return r !== s;
        }, j[z(0x93)] = y(0x89) + y(0x6b);
        const l = j, m = {};
        m[z(0x88)] = Contact_1[y(0x96)], m['as'] = l[z(0x66)], m[z(0x84)] = [
            l[z(0x92)],
            l[y(0x83)],
            {
                'association': l[z(0x68)],
                'attributes': [
                    'id',
                    l[z(0x91)]
                ]
            }
        ];
        const n = {};
        n[y(0x88)] = User_1[y(0x96)], n['as'] = l[y(0x85)], n[z(0x90)] = [
            'id',
            l[y(0x91)]
        ];
        const o = {};
        o[y(0x7f) + 'n'] = l[y(0x8d)], o[y(0x90)] = [
            'id',
            l[y(0x91)],
            l[z(0x8f)]
        ];
        const p = {};
        p[y(0x84)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[y(0x96)][z(0x7e)](h, p);
        if (!q || l[y(0x8c)](q[z(0x7d)], i))
            throw new AppError_1[(z(0x96))](l[z(0x93)], -0x191c + 0x1ea5 + -0x3f5);
        return q;
    };
exports[v(0x96)] = ShowTicketService;