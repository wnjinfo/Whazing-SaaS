'use strict';
const v = b, w = b;
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(t(0xa1)) / (0xf92 + 0x538 + -0x11 * 0x139) * (parseInt(t(0xb1)) / (0x157 * -0xe + 0x1 * -0x2a1 + 0x1565)) + -parseInt(u(0x9b)) / (-0xfef + -0x1089 + 0x207b * 0x1) + -parseInt(u(0x9d)) / (0x2e7 * 0x1 + 0x1002 + -0x12e5) + parseInt(u(0x94)) / (0x49 + 0x1 * -0xde9 + 0xda5) + parseInt(t(0x91)) / (-0xec9 + 0x9 * -0x2fb + 0x29a2) + -parseInt(u(0xaa)) / (0x2b3 + 0x2373 + -0x3 * 0xcb5) * (-parseInt(u(0xa9)) / (-0xbcb * -0x2 + 0x159c + 0x2d2a * -0x1)) + parseInt(u(0x8c)) / (-0x1dc3 * 0x1 + -0x19be + 0x2 * 0x1bc5) * (parseInt(u(0x99)) / (-0x8b5 * -0x1 + 0xfcc + -0x1877));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x15d88f + -0x481d + -0x23255f * -0x1));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x204d * -0x1 + 0x242 + 0x29e * -0xd);
        let h = e[f];
        return h;
    }, b(c, d);
}
var __importDefault = this && this[v(0x97) + w(0xb4)] || function (c) {
    const x = w;
    return c && c[x(0x9f)] ? c : { 'default': c };
};
const k = {};
k[v(0xb7)] = !![], Object[v(0x8a) + v(0xa8)](exports, w(0x9f), k);
const Ticket_1 = __importDefault(require(v(0xb5) + w(0xb9))), AppError_1 = __importDefault(require(v(0xa6) + v(0xa0) + 'r')), Contact_1 = __importDefault(require(w(0xb5) + w(0xa4))), User_1 = __importDefault(require(v(0xb5) + w(0xa2))), ShowTicketService = async ({
        id: h,
        tenantId: i
    }) => {
        const y = w, z = v, j = {};
        j[y(0xb3)] = y(0x98), j[y(0xac)] = y(0xa3), j[z(0x9a)] = z(0x93), j[z(0x89)] = y(0x9e), j[y(0x8e)] = z(0x95), j[y(0xb0)] = z(0xb2), j[z(0xab)] = y(0xad), j[y(0xb6)] = z(0xae), j[z(0x8d)] = function (r, s) {
            return r !== s;
        }, j[z(0xaf)] = y(0xa5) + z(0x90);
        const l = j, m = {};
        m[y(0x9c)] = Contact_1[z(0x8f)], m['as'] = l[y(0xb3)], m[z(0xb8)] = [
            l[z(0xac)],
            l[z(0x9a)],
            {
                'association': l[z(0x89)],
                'attributes': [
                    'id',
                    l[y(0x8e)]
                ]
            }
        ];
        const n = {};
        n[y(0x9c)] = User_1[z(0x8f)], n['as'] = l[z(0xb0)], n[z(0xa7)] = [
            'id',
            l[z(0x8e)]
        ];
        const o = {};
        o[y(0x8b) + 'n'] = l[y(0xab)], o[y(0xa7)] = [
            'id',
            l[z(0x8e)],
            l[z(0xb6)]
        ];
        const p = {};
        p[y(0xb8)] = [
            m,
            n,
            o
        ];
        const q = await Ticket_1[y(0x8f)][z(0x96)](h, p);
        if (!q || l[y(0x8d)](q[z(0x92)], i))
            throw new AppError_1[(z(0x8f))](l[z(0xaf)], -0x8c + 0xbe + 0x162);
        return q;
    };
function a() {
    const A = [
        '2525108gMYEAX',
        'wallets',
        '__esModule',
        'rs/AppErro',
        '1647aGbeZV',
        'ls/User',
        'extraInfo',
        'ls/Contact',
        'ERR_NO_TIC',
        '../../erro',
        'attributes',
        'erty',
        '152kpSouW',
        '197057adtSal',
        'QMIvT',
        'akvlF',
        'whatsapp',
        'isDeleted',
        'PBZYn',
        'lszgL',
        '1378uhvGnZ',
        'user',
        'XQwzX',
        'fault',
        '../../mode',
        'qDLzX',
        'value',
        'include',
        'ls/Ticket',
        'hYYye',
        'defineProp',
        'associatio',
        '7545078nckYgL',
        'nkpDh',
        'JKwWE',
        'default',
        'KET_FOUND',
        '8030562gDSSvP',
        'tenantId',
        'tags',
        '981285OhpvNZ',
        'name',
        'findByPk',
        '__importDe',
        'contact',
        '20BJmmZi',
        'rWMiB',
        '3381018IQKJbs',
        'model'
    ];
    a = function () {
        return A;
    };
    return a();
}
exports[v(0x8f)] = ShowTicketService;