'use strict';
function a() {
    const J = [
        'defineProp',
        's/ChatFlow',
        '../models/',
        'whatsappId',
        'chatBot',
        'findByPk',
        '14412735nAUbCc',
        '11328970hsqWMS',
        'erty',
        '1aDZWLu',
        'value',
        '1169AOJloz',
        '1604ZjpBfR',
        'where',
        'fault',
        '__importDe',
        'channel',
        'ctive',
        'ChatFlow',
        'OiciB',
        'contactId',
        'Contact',
        '3659134jyracu',
        'key',
        'default',
        'isGroup',
        'number',
        'isActive',
        'find',
        'owWhatsApp',
        'ateLogTick',
        '2300386JnfzfW',
        '6126fMlDZc',
        '__esModule',
        'flow',
        'Setting',
        'userId',
        '2308570wgxVyS',
        's/Whatsapp',
        'etService',
        'start',
        'botTicketA',
        '../service',
        's/TicketSe',
        'update',
        'isDeleted',
        'ticketId',
        'rvices/Cre',
        'Services/I',
        'Service/Sh',
        'from',
        'Service',
        'type',
        '8dfSuTA',
        'lineList',
        'tenantId',
        'sContactTe',
        'findOne',
        'OchGa',
        'chatFlowId',
        '2607IDRtwh'
    ];
    a = function () {
        return J;
    };
    return a();
}
const E = b, F = b;
(function (c, d) {
    const C = b, D = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(C(0x110)) / (0x79 * -0x27 + 0x1a5 * 0x11 + -0x985 * 0x1) * (parseInt(C(0x11d)) / (-0x47 * -0x25 + -0x1643 * -0x1 + -0x2084)) + -parseInt(D(0x106)) / (-0x2 * 0xe86 + -0x3 * 0x7a2 + 0x33f5) * (parseInt(D(0x113)) / (-0x1098 + -0x1 * 0x179b + 0x2837)) + parseInt(D(0x12c)) / (-0x1e1d + -0x8e * 0x33 + 0x3a6c) + -parseInt(C(0x127)) / (-0xccf + -0x19b2 * 0x1 + 0x2687) * (-parseInt(D(0x112)) / (0x12a4 + 0x106d + -0x230a)) + -parseInt(D(0x13c)) / (0x1 * -0x111b + 0x21e4 + 0x1 * -0x10c1) * (-parseInt(C(0x10d)) / (-0x1 * -0xb3e + -0x13 * 0x37 + -0x4 * 0x1c8)) + parseInt(C(0x10e)) / (-0x22b + -0x78c + 0x9c1) + -parseInt(D(0x126)) / (0x431 * -0x2 + 0x26cb * 0x1 + -0x2 * 0xf2f);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0x1c46fe + 0x1bc6d7 + -0x291c2a));
var __importDefault = this && this[E(0x116) + E(0x115)] || function (c) {
    const G = F;
    return c && c[G(0x128)] ? c : { 'default': c };
};
const k = {};
k[E(0x111)] = !![], Object[E(0x107) + E(0x10f)](exports, E(0x128), k);
const Contact_1 = __importDefault(require(F(0x109) + F(0x11c))), Setting_1 = __importDefault(require(E(0x109) + F(0x12a))), ChatFlow_1 = __importDefault(require(F(0x109) + E(0x119))), CreateLogTicketService_1 = __importDefault(require(F(0x131) + E(0x132) + E(0x136) + E(0x125) + F(0x12e))), IsContactTest_1 = __importDefault(require(F(0x131) + F(0x108) + F(0x137) + E(0x102) + 'st')), ShowWhatsAppService_1 = __importDefault(require(F(0x131) + E(0x12d) + F(0x138) + E(0x124) + F(0x13a))), CheckChatBotFlowWelcome = async j => {
        const H = E, I = E, l = {};
        l[H(0x11a)] = H(0x130) + I(0x118), l[I(0x104)] = I(0x10b);
        const m = l;
        if (j[H(0x12b)] || j[H(0x120)])
            return;
        const n = {};
        n[I(0x11e)] = m[H(0x11a)], n[H(0x13e)] = j[I(0x13e)];
        const o = {};
        o[H(0x114)] = n;
        const p = await Setting_1[I(0x11f)][I(0x103)](o), q = {};
        q['id'] = j[H(0x10a)], q[I(0x13e)] = j[I(0x13e)];
        const r = await (-0x11c8 + 0x1 * 0x2b0 + 0xf18, ShowWhatsAppService_1[I(0x11f)])(q), s = r?.[I(0x105)] || p?.[H(0x111)];
        if (!s)
            return;
        const t = {};
        t['id'] = +s, t[I(0x13e)] = j[I(0x13e)], t[H(0x122)] = !![], t[H(0x134)] = ![];
        const u = {};
        u[H(0x114)] = t;
        const v = await ChatFlow_1[I(0x11f)][I(0x103)](u);
        if (!v)
            return;
        const w = await Contact_1[I(0x11f)][H(0x10c)](j[H(0x11b)]), {celularTeste: x} = v, y = w?.[I(0x121)];
        if (await (-0x432 * -0x7 + 0x133 * 0x3 + -0x20f7, IsContactTest_1[I(0x11f)])(y, x, j[H(0x117)]))
            return;
        const z = v[H(0x129)][H(0x13d)][H(0x123)](B => B[H(0x139)] === H(0x12f));
        await j[H(0x133)]({
            'chatFlowId': v['id'],
            'stepChatFlow': z['to'],
            'lastInteractionBot': new Date()
        });
        const A = {};
        A[I(0x135)] = j['id'], A[I(0x13b)] = m[H(0x104)], await (0xc4 + 0x17ef + -0x18b3, CreateLogTicketService_1[H(0x11f)])(A);
    };
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x96 * 0x42 + 0x1 * 0x13bb + 0x7 * -0x833);
        let h = e[f];
        return h;
    }, b(c, d);
}
exports[E(0x11f)] = CheckChatBotFlowWelcome;