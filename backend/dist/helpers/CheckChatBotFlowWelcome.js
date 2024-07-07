'use strict';
const E = b, F = b;
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x2 * 0x10a7 + -0x2 * -0x3a9 + -0x2744);
        let h = e[f];
        return h;
    }, b(c, d);
}
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(C(0x18c)) / (0x20 * -0x86 + -0x615 + 0x16d6) + parseInt(D(0x178)) / (-0x1 * -0x1457 + -0x21 * -0x3d + -0x1c32) * (-parseInt(D(0x16a)) / (-0x1c * -0x157 + -0x1 * 0x4ed + -0x2094)) + -parseInt(D(0x182)) / (0x2f0 + 0x254a + -0x2 * 0x141b) * (parseInt(D(0x197)) / (-0x711 + 0x1fd2 * -0x1 + 0x3 * 0xcf8)) + -parseInt(D(0x18f)) / (-0x7 + -0xa23 * 0x2 + -0xb * -0x1d9) * (-parseInt(C(0x192)) / (0x3cf * 0xa + 0x1 * 0x1587 + -0x3b96)) + -parseInt(D(0x185)) / (-0x229 * 0x9 + -0x19d5 + -0x6 * -0x78d) + parseInt(D(0x186)) / (-0x7 * -0x3f2 + -0x2619 + 0xa84) + parseInt(D(0x16e)) / (-0x5c6 + 0x25e7 + -0x2017) * (parseInt(D(0x180)) / (0x58 * 0x5c + 0xf43 + -0x2ed8));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x2582e + 0x3086a + -0x3ae88));
function a() {
    const J = [
        'where',
        'findOne',
        'key',
        '56346WmOzUi',
        'userId',
        'from',
        'contactId',
        '590zbmKug',
        'Setting',
        'ticketId',
        '__importDe',
        'chatFlowId',
        'ChatFlow',
        'Services/I',
        'channel',
        'number',
        'start',
        '18nmKjmI',
        'find',
        'type',
        'ateLogTick',
        '__esModule',
        'findByPk',
        'Service',
        'flow',
        '25641TxAkDz',
        'joLUe',
        '5128JhnQbt',
        'sContactTe',
        'Contact',
        '783232KoOcUL',
        '1685124IKvpUY',
        's/ChatFlow',
        's/TicketSe',
        '../models/',
        'isDeleted',
        'erty',
        '66023TvjfMu',
        'Service/Sh',
        'fault',
        '407958AEpcnB',
        's/Whatsapp',
        'botTicketA',
        '14PKencn',
        'owWhatsApp',
        'default',
        '../service',
        'tenantId',
        '580SMeiSz',
        'isActive',
        'isGroup',
        'ctive',
        'chatBot',
        'rvices/Cre',
        'tQMql',
        'value',
        'lineList',
        'defineProp',
        'etService',
        'whatsappId',
        'update'
    ];
    a = function () {
        return J;
    };
    return a();
}
var __importDefault = this && this[E(0x171) + E(0x18e)] || function (c) {
    const G = F;
    return c && c[G(0x17c)] ? c : { 'default': c };
};
const k = {};
k[E(0x161)] = !![], Object[E(0x163) + F(0x18b)](exports, F(0x17c), k);
const Contact_1 = __importDefault(require(F(0x189) + E(0x184))), Setting_1 = __importDefault(require(F(0x189) + F(0x16f))), ChatFlow_1 = __importDefault(require(E(0x189) + E(0x173))), CreateLogTicketService_1 = __importDefault(require(F(0x195) + F(0x188) + F(0x15f) + E(0x17b) + F(0x164))), IsContactTest_1 = __importDefault(require(E(0x195) + E(0x187) + F(0x174) + F(0x183) + 'st')), ShowWhatsAppService_1 = __importDefault(require(E(0x195) + F(0x190) + F(0x18d) + E(0x193) + F(0x17e))), CheckChatBotFlowWelcome = async j => {
        const H = F, I = F, l = {};
        l[H(0x181)] = I(0x191) + I(0x15d), l[I(0x160)] = H(0x15e);
        const m = l;
        if (j[I(0x16b)] || j[H(0x15c)])
            return;
        const n = {};
        n[H(0x169)] = m[H(0x181)], n[H(0x196)] = j[H(0x196)];
        const o = {};
        o[H(0x167)] = n;
        const p = await Setting_1[I(0x194)][I(0x168)](o), q = {};
        q['id'] = j[H(0x165)], q[I(0x196)] = j[I(0x196)];
        const r = await (0x7d0 + -0x21 * 0x25 + -0x30b, ShowWhatsAppService_1[H(0x194)])(q), s = r?.[H(0x172)] || p?.[I(0x161)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[H(0x196)] = j[I(0x196)], t[I(0x198)] = !![], t[I(0x18a)] = ![];
        const u = {};
        u[I(0x167)] = t;
        const v = await ChatFlow_1[H(0x194)][I(0x168)](u);
        if (!v)
            return;
        const w = await Contact_1[I(0x194)][I(0x17d)](j[I(0x16d)]), {celularTeste: x} = v, y = w?.[I(0x176)];
        if (await (0x79b + -0x2 * 0x788 + -0x1 * -0x775, IsContactTest_1[I(0x194)])(y, x, j[H(0x175)]))
            return;
        const z = v[H(0x17f)][I(0x162)][H(0x179)](B => B[I(0x16c)] === I(0x177));
        await j[I(0x166)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[I(0x170)] = j['id'], A[H(0x17a)] = m[H(0x160)], await (-0x3d1 + 0x195f + -0x158e, CreateLogTicketService_1[H(0x194)])(A);
    };
exports[E(0x194)] = CheckChatBotFlowWelcome;