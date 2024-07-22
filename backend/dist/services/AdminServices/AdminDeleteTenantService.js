'use strict';
function a() {
    const av = [
        'Wallet',
        '__importDe',
        'rs/AppErro',
        'value',
        '1HPNkCg',
        'where',
        'ls/Setting',
        'Tag',
        'ls/ApiMess',
        'ls/User',
        'ls/Tenant',
        '1016166kROAFr',
        'kcFHT',
        'ls/FastRep',
        '4775580yFDuFP',
        '251888JzTzcY',
        '../../erro',
        '682024UPwprv',
        'ANT_FOUND',
        'findOne',
        'destroy',
        'tenantId',
        '481776ajniCl',
        'ls/ChatFlo',
        'ls/AutoRep',
        '36Lnurku',
        '1364514XTQVuo',
        'ERR_NO_TEN',
        '__esModule',
        'ls/Ticket',
        'ls/Campaig',
        '209817FAcmjJ',
        'ls/Contact',
        'ls/Whatsap',
        'age',
        'ls/Queue',
        '../../mode',
        'erty',
        'fault',
        'defineProp',
        'ls/ApiConf',
        'ls/Message',
        'ls/Tag',
        'default',
        '5ogcpSy'
    ];
    a = function () {
        return av;
    };
    return a();
}
const aq = b, ar = b;
(function (c, d) {
    const ao = b, ap = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(ao(0x198)) / (0x2 * -0x2e7 + 0x1 * 0x207b + 0xc * -0x239) * (-parseInt(ap(0x19f)) / (-0x20e9 + -0x904 + -0x13 * -0x235)) + parseInt(ao(0x1b3)) / (-0x1 * -0xc43 + -0xab5 * 0x3 + -0x13df * -0x1) + parseInt(ap(0x1a5)) / (0x2bb + 0x404 + 0x6bb * -0x1) + -parseInt(ap(0x193)) / (-0x491 * -0x1 + 0xd * 0x173 + 0x1763 * -0x1) * (-parseInt(ao(0x1ae)) / (-0x1 * -0x1ff3 + -0x8ef + -0x16fe)) + parseInt(ao(0x1a3)) / (0xd * 0xa1 + -0x2 * 0x494 + 0x102) + parseInt(ap(0x1aa)) / (-0xd0a * -0x1 + -0x12a8 + 0x5a6) * (-parseInt(ao(0x1ad)) / (-0xbcc + 0x1 * -0x1bb + 0xd90)) + -parseInt(ao(0x1a2)) / (0x1df4 + -0x2140 + 0x356);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x160ea + 0x38 * 0x28ea + -0x317d9));
var __importDefault = this && this[aq(0x195) + aq(0x18d)] || function (c) {
    const as = ar;
    return c && c[as(0x1b0)] ? c : { 'default': c };
};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x24d5 + -0x201b + 0x467d);
        let h = e[f];
        return h;
    }, b(c, d);
}
const k = {};
k[aq(0x197)] = !![], Object[ar(0x18e) + aq(0x1b9)](exports, ar(0x1b0), k);
const AppError_1 = __importDefault(require(ar(0x1a4) + ar(0x196) + 'r')), Tenant_1 = __importDefault(require(aq(0x1b8) + aq(0x19e))), ApiConfig_1 = __importDefault(require(ar(0x1b8) + ar(0x18f) + 'ig')), ApiMessage_1 = __importDefault(require(aq(0x1b8) + ar(0x19c) + ar(0x1b6))), AutoReply_1 = __importDefault(require(aq(0x1b8) + ar(0x1ac) + 'ly')), Campaign_1 = __importDefault(require(aq(0x1b8) + aq(0x1b2) + 'n')), ChatFlow_1 = __importDefault(require(ar(0x1b8) + ar(0x1ab) + 'w')), ContactTag_1 = __importDefault(require(aq(0x1b8) + aq(0x1b4) + ar(0x19b))), ContactWallet_1 = __importDefault(require(ar(0x1b8) + aq(0x1b4) + aq(0x194))), Contact_1 = __importDefault(require(aq(0x1b8) + ar(0x1b4))), FastReply_1 = __importDefault(require(aq(0x1b8) + aq(0x1a1) + 'ly')), Message_1 = __importDefault(require(aq(0x1b8) + aq(0x190))), Queue_1 = __importDefault(require(aq(0x1b8) + aq(0x1b7))), Setting_1 = __importDefault(require(ar(0x1b8) + aq(0x19a))), Tag_1 = __importDefault(require(aq(0x1b8) + aq(0x191))), Ticket_1 = __importDefault(require(aq(0x1b8) + ar(0x1b1))), User_1 = __importDefault(require(ar(0x1b8) + ar(0x19d))), Whatsapp_1 = __importDefault(require(aq(0x1b8) + ar(0x1b5) + 'p')), AdminDeleteTenantService = async ({tenantId: M}) => {
        const at = aq, au = aq, N = {};
        N[at(0x1a0)] = au(0x1af) + au(0x1a6);
        const O = N, P = {};
        P['id'] = M;
        const Q = {};
        Q[au(0x199)] = P;
        const R = await Tenant_1[au(0x192)][at(0x1a7)](Q);
        if (!R)
            throw new AppError_1[(au(0x192))](O[at(0x1a0)], 0x1211 + -0x70e * -0x4 + -0x147 * 0x23);
        const S = {};
        S[at(0x1a9)] = M;
        const T = {};
        T[au(0x199)] = S, await ApiConfig_1[at(0x192)][at(0x1a8)](T);
        const U = {};
        U[au(0x1a9)] = M;
        const V = {};
        V[at(0x199)] = U, await ApiMessage_1[at(0x192)][at(0x1a8)](V);
        const W = {};
        W[at(0x1a9)] = M;
        const X = {};
        X[au(0x199)] = W, await AutoReply_1[au(0x192)][au(0x1a8)](X);
        const Y = {};
        Y[au(0x1a9)] = M;
        const Z = {};
        Z[au(0x199)] = Y, await Campaign_1[au(0x192)][at(0x1a8)](Z);
        const a0 = {};
        a0[at(0x1a9)] = M;
        const a1 = {};
        a1[au(0x199)] = a0, await ChatFlow_1[au(0x192)][at(0x1a8)](a1);
        const a2 = {};
        a2[at(0x1a9)] = M;
        const a3 = {};
        a3[au(0x199)] = a2, await ContactTag_1[at(0x192)][at(0x1a8)](a3);
        const a4 = {};
        a4[au(0x1a9)] = M;
        const a5 = {};
        a5[at(0x199)] = a4, await ContactWallet_1[au(0x192)][au(0x1a8)](a5);
        const a6 = {};
        a6[au(0x1a9)] = M;
        const a7 = {};
        a7[au(0x199)] = a6, await Contact_1[at(0x192)][au(0x1a8)](a7);
        const a8 = {};
        a8[au(0x1a9)] = M;
        const a9 = {};
        a9[at(0x199)] = a8, await FastReply_1[au(0x192)][at(0x1a8)](a9);
        const aa = {};
        aa[au(0x1a9)] = M;
        const ab = {};
        ab[au(0x199)] = aa, await Message_1[at(0x192)][at(0x1a8)](ab);
        const ac = {};
        ac[au(0x1a9)] = M;
        const ad = {};
        ad[au(0x199)] = ac, await Queue_1[au(0x192)][at(0x1a8)](ad);
        const ae = {};
        ae[at(0x1a9)] = M;
        const af = {};
        af[au(0x199)] = ae, await Setting_1[at(0x192)][at(0x1a8)](af);
        const ag = {};
        ag[au(0x1a9)] = M;
        const ah = {};
        ah[at(0x199)] = ag, await Tag_1[au(0x192)][au(0x1a8)](ah);
        const ai = {};
        ai[au(0x1a9)] = M;
        const aj = {};
        aj[at(0x199)] = ai, await Ticket_1[au(0x192)][at(0x1a8)](aj);
        const ak = {};
        ak[au(0x1a9)] = M;
        const al = {};
        al[at(0x199)] = ak, await User_1[au(0x192)][at(0x1a8)](al);
        const am = {};
        am[at(0x1a9)] = M;
        const an = {};
        an[au(0x199)] = am, await Whatsapp_1[at(0x192)][at(0x1a8)](an), await R[at(0x1a8)]();
    };
exports[ar(0x192)] = AdminDeleteTenantService;