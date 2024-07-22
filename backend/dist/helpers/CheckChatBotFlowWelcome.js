'use strict';
const E = b, F = b;
function a() {
    const J = [
        'lineList',
        'ctive',
        'findByPk',
        '__importDe',
        '79SaAcDu',
        'whatsappId',
        'fault',
        'isDeleted',
        'LrXWV',
        '__esModule',
        'type',
        'defineProp',
        'owWhatsApp',
        '5534YADKFJ',
        'chatFlowId',
        'userId',
        'tenantId',
        'botTicketA',
        '3703665GSxiWU',
        'etService',
        'number',
        'ticketId',
        'key',
        'rvices/Cre',
        'erty',
        's/TicketSe',
        'channel',
        '3620088CGSeQM',
        'chatBot',
        '1902792wAkeUR',
        '5693778efgiGd',
        '../service',
        'isGroup',
        'Service/Sh',
        'Service',
        's/Whatsapp',
        'Services/I',
        'contactId',
        'hjqVw',
        's/ChatFlow',
        '2681476OOicuv',
        'sContactTe',
        'flow',
        'Setting',
        'findOne',
        'isActive',
        'default',
        'value',
        'Contact',
        '376AJXWts',
        'from',
        'start',
        '67774CJUDOf',
        'find',
        'ChatFlow',
        'where',
        'update',
        '../models/',
        'ateLogTick'
    ];
    a = function () {
        return J;
    };
    return a();
}
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x10a)) / (0x1 * -0x11c + 0x10c6 + -0x1 * 0xfa9) * (parseInt(D(0xd8)) / (0x402 + -0x2182 + 0x1d82)) + parseInt(D(0xe8)) / (0x4 * 0x496 + 0x1bfd + 0x2e52 * -0x1) + -parseInt(D(0xf3)) / (-0x91e + -0x3d * 0x2 + 0x99c) + parseInt(D(0xdd)) / (0x9c1 + 0x1b2 * -0xf + 0x1 * 0xfb2) + parseInt(C(0xe6)) / (-0x66e + 0x1ea3 + -0x182f) + -parseInt(D(0xff)) / (-0x1753 + -0x6 * 0x52a + 0x3656) * (parseInt(D(0xfc)) / (-0x1 * -0x5e5 + 0x2a1 * -0xc + -0x19 * -0x107)) + -parseInt(C(0xe9)) / (0x806 + 0x1b9c + -0x2399);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x76d * 0x3d + 0x56 * -0x1673 + -0x1043 * -0xfc));
var __importDefault = this && this[E(0x109) + F(0x10c)] || function (c) {
    const G = E;
    return c && c[G(0x10f)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x1 * -0x2079 + 0x1597 + 0xbb7);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[F(0xfa)] = !![], Object[E(0xd6) + E(0xe3)](exports, E(0x10f), k);
const Contact_1 = __importDefault(require(F(0x104) + E(0xfb))), Setting_1 = __importDefault(require(E(0x104) + F(0xf6))), ChatFlow_1 = __importDefault(require(F(0x104) + E(0x101))), CreateLogTicketService_1 = __importDefault(require(E(0xea) + F(0xe4) + E(0xe2) + E(0x105) + F(0xde))), IsContactTest_1 = __importDefault(require(F(0xea) + E(0xf2) + E(0xef) + E(0xf4) + 'st')), ShowWhatsAppService_1 = __importDefault(require(F(0xea) + F(0xee) + F(0xec) + F(0xd7) + E(0xed))), CheckChatBotFlowWelcome = async j => {
        const H = F, I = F, l = {};
        l[H(0xf1)] = H(0xdc) + I(0x107), l[H(0x10e)] = H(0xe7);
        const m = l;
        if (j[I(0xda)] || j[I(0xeb)])
            return;
        const n = {};
        n[I(0xe1)] = m[I(0xf1)], n[I(0xdb)] = j[I(0xdb)];
        const o = {};
        o[H(0x102)] = n;
        const p = await Setting_1[H(0xf9)][H(0xf7)](o), q = {};
        q['id'] = j[I(0x10b)], q[H(0xdb)] = j[I(0xdb)];
        const r = await (-0x24fa + 0x2046 + 0x25a * 0x2, ShowWhatsAppService_1[I(0xf9)])(q), s = r?.[I(0xd9)] || p?.[I(0xfa)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[I(0xdb)] = j[H(0xdb)], t[I(0xf8)] = !![], t[I(0x10d)] = ![];
        const u = {};
        u[I(0x102)] = t;
        const v = await ChatFlow_1[H(0xf9)][I(0xf7)](u);
        if (!v)
            return;
        const w = await Contact_1[H(0xf9)][I(0x108)](j[H(0xf0)]), {celularTeste: x} = v, y = w?.[I(0xdf)];
        if (await (-0x1ec8 + -0x131 * 0xa + 0x2ab2, IsContactTest_1[H(0xf9)])(y, x, j[H(0xe5)]))
            return;
        const z = v[I(0xf5)][H(0x106)][H(0x100)](B => B[I(0xfd)] === I(0xfe));
        await j[I(0x103)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[I(0xe0)] = j['id'], A[I(0xd5)] = m[H(0x10e)], await (0xd0e + -0x2fd * 0x5 + 0x17 * 0x15, CreateLogTicketService_1[I(0xf9)])(A);
    };
exports[E(0xf9)] = CheckChatBotFlowWelcome;