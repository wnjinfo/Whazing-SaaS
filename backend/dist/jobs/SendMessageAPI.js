'use strict';
const J = b, K = b;
(function (c, d) {
    const H = b, I = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(H(0x183)) / (-0x2149 + 0x1279 * -0x1 + 0x33c3) * (-parseInt(H(0x124)) / (0x24b3 + -0x78 * 0x2 + 0x1 * -0x23c1)) + parseInt(I(0x15a)) / (0x2 * -0x9aa + -0x6 * -0x64d + 0x1277 * -0x1) * (parseInt(I(0x171)) / (-0x1 * 0x1a4d + 0x21 * 0x122 + -0xb11)) + -parseInt(I(0x135)) / (0xc53 + -0xe47 + 0x1 * 0x1f9) + parseInt(I(0x130)) / (0xd29 + -0xbb3 + -0x170) * (-parseInt(H(0x153)) / (0x49f * -0x1 + -0x1e0f + 0x22b5 * 0x1)) + parseInt(H(0x161)) / (0x47e + -0x1309 * 0x1 + 0xe93) * (parseInt(H(0x158)) / (-0x1dc8 + -0x1dd7 * 0x1 + -0x775 * -0x8)) + parseInt(I(0x121)) / (0xd5c + -0x1984 + 0xc32) + -parseInt(H(0x17d)) / (0x76b + -0x19c5 * -0x1 + 0x6a1 * -0x5) * (parseInt(H(0x15c)) / (0x35 * -0x83 + 0xc70 + 0xebb));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x8cc50 + -0x1541 * -0xc5 + -0xf52bc));
var __importDefault = this && this[J(0x181) + K(0x126)] || function (c) {
    const L = J;
    return c && c[L(0x157)] ? c : { 'default': c };
};
const x = {};
x[K(0x16d)] = !![], Object[J(0x14b) + J(0x17c)](exports, K(0x157), x);
const Queue_1 = __importDefault(require(J(0x127) + K(0x137))), FindOrCreateTicketService_1 = __importDefault(require(K(0x131) + K(0x144) + K(0x14e) + J(0x186) + J(0x13f) + 'ce')), CreateMessageSystemService_1 = __importDefault(require(K(0x131) + K(0x12b) + J(0x17f) + K(0x139) + J(0x151) + J(0x165))), wbot_baileys_1 = require(K(0x129) + K(0x173)), Contact_1 = __importDefault(require(J(0x13d) + K(0x141))), CreateContactService_1 = __importDefault(require(K(0x175) + K(0x136) + J(0x159) + J(0x185) + J(0x138))), AppError_1 = __importDefault(require(K(0x179) + J(0x182))), y = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x4 * 0x1e2 + -0xd * -0x1eb + -0x1f58);
        let h = e[f];
        return h;
    }, b(c, d);
}
y[J(0x163)] = 0x1f4, y[K(0x172)] = 0x1, y[K(0x140) + J(0x16f)] = !![], y[K(0x178) + 'il'] = ![], exports[K(0x149)] = {
    'key': K(0x123) + J(0x169),
    'options': y,
    async 'handle'({data: m}) {
        const M = J, N = K, n = {};
        n[M(0x15e)] = function (q, r) {
            return q == r;
        }, n[N(0x142)] = N(0x154) + N(0x13a), n[N(0x12c)] = N(0x155), n[N(0x14d)] = M(0x147), n[N(0x176)] = M(0x16c), n[N(0x125)] = N(0x162) + M(0x143), n[M(0x166)] = N(0x160) + N(0x12e), n[N(0x146)] = N(0x13e) + 'I';
        const o = n, p = (-0x12cf * -0x2 + -0x3 * -0x663 + 0x33 * -0x11d, wbot_baileys_1[M(0x17b)])(m[M(0x167)]);
        try {
            const q = m[M(0x14f)] + (N(0x128) + N(0x11f)), r = await p[N(0x13b)](q);
            if (o[N(0x15e)](r[-0x2040 + 0x301 * -0xd + -0x474d * -0x1][M(0x17a)], ![]))
                throw new AppError_1[(M(0x149))](o[N(0x142)], 0x2448 + 0x1b75 + -0x3e29);
            m[M(0x14f)] = r[-0x2568 + 0x1f22 + 0x1 * 0x646][N(0x174)][M(0x120)]('@')[0x1aa4 + -0x938 + -0x116c];
            const s = {};
            s[M(0x14f)] = m[M(0x14f)], s[N(0x152)] = m[M(0x152)];
            const t = {};
            t[N(0x156)] = s;
            let u = await Contact_1[N(0x149)][N(0x14a)](t);
            if (!u) {
                const C = {};
                C[N(0x145)] = m[N(0x14f)], C[M(0x14f)] = m[M(0x14f)], C[N(0x152)] = m[M(0x152)], u = await (0x1ed + -0xfd9 + 0xdec, CreateContactService_1[N(0x149)])(C);
            }
            const v = {};
            v[M(0x134)] = u, v[N(0x132)] = p['id'], v[N(0x133) + M(0x177)] = 0x0, v[N(0x152)] = m[N(0x152)], v[N(0x150) + 'ct'] = undefined, v[N(0x17e)] = o[N(0x12c)];
            const w = await (0x694 * -0x1 + 0xfbf + -0x1 * 0x92b, FindOrCreateTicketService_1[N(0x149)])(v), z = {};
            z[N(0x122)] = m, z[M(0x152)] = m[N(0x152)], z[N(0x16b)] = w, z[M(0x184)] = o[M(0x14d)], z[M(0x15b)] = o[M(0x176)], await (0x1325 + -0x1fc9 + 0xca4, CreateMessageSystemService_1[N(0x149)])(z);
            const A = { ...m[N(0x170)] };
            A[N(0x148) + 'y'] = m[N(0x148) + 'y'];
            const B = {};
            B[N(0x170)] = A, await w[M(0x12d)](B);
        } catch (D) {
            const E = {};
            E[M(0x15d)] = -(-0x1 * 0x1401 + 0x1970 + -0x56d), E[M(0x12f)] = m[M(0x12f)], E[N(0x15f)] = '', E[N(0x14f)] = m[M(0x14f)], E[N(0x148) + 'y'] = m[M(0x148) + 'y'], E[M(0x13c)] = o[N(0x125)], E[M(0x16a)] = o[M(0x166)], E[N(0x14c)] = m[N(0x14c)];
            const F = E;
            if (m?.[N(0x170)]?.[M(0x16e) + M(0x168)]) {
                const G = {};
                G[M(0x164)] = m[N(0x170)][N(0x16e) + N(0x168)], G[N(0x16a)] = F[M(0x16a)], G[N(0x180)] = F, Queue_1[N(0x149)][N(0x12a)](o[N(0x146)], G);
            }
            throw new Error(D);
        }
    }
};
function a() {
    const O = [
        'rvices/Fin',
        'number',
        'groupConta',
        'eSystemSer',
        'tenantId',
        '4011dETAhE',
        'NUMBER_NOT',
        'whatsapp',
        'where',
        '__esModule',
        '306522DjwURY',
        'tServices/',
        '13881PjCfXj',
        'status',
        '5064hnFHWq',
        'ack',
        'iROPa',
        'messageId',
        'hookMessag',
        '136wFVsDs',
        'error\x20sess',
        'delay',
        'url',
        'vice',
        'PWMhf',
        'sessionId',
        'Status',
        'eAPI',
        'type',
        'ticket',
        'pending',
        'value',
        'urlMessage',
        'mplete',
        'apiConfig',
        '404EUceTD',
        'attempts',
        'ot-baileys',
        'jid',
        './../servi',
        'PRcQz',
        'ages',
        'removeOnFa',
        '../errors/',
        'exists',
        'getWbot',
        'erty',
        '10857itEEhr',
        'channel',
        'ervices/Cr',
        'payload',
        '__importDe',
        'AppError',
        '18eslgri',
        'sendType',
        'CreateCont',
        'dOrCreateT',
        'pp.net',
        'split',
        '7476410QEGOyT',
        'msg',
        'SendMessag',
        '52718VVjdnl',
        'YqfOr',
        'fault',
        '../libs/Qu',
        '@$s.whatsa',
        '../libs/wb',
        'add',
        's/MessageS',
        'Qqjhe',
        'update',
        'eStatus',
        'body',
        '12516ZOILAZ',
        '../service',
        'whatsappId',
        'unreadMess',
        'contact',
        '61875nHDVfa',
        'ces/Contac',
        'eue',
        'actService',
        'eateMessag',
        '_FOUND',
        'onWhatsApp',
        'error',
        '../models/',
        'WebHooksAP',
        'icketServi',
        'removeOnCo',
        'Contact',
        'kuGvg',
        'ion',
        's/TicketSe',
        'name',
        'EZPzD',
        'API',
        'externalKe',
        'default',
        'findOne',
        'defineProp',
        'authToken',
        'sJzBp'
    ];
    a = function () {
        return O;
    };
    return a();
}