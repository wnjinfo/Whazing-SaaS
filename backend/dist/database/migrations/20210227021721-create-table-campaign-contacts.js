'use strict';
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(F(0x18d)) / (0x1 * 0xf63 + 0xd83 * 0x2 + -0x2a68) * (-parseInt(F(0x19d)) / (0x137 * 0xd + 0xab8 * 0x1 + 0x73 * -0x3b)) + parseInt(G(0x18e)) / (0x85d + -0x218 + 0x216 * -0x3) * (parseInt(F(0x1ae)) / (-0x1 * -0xcf + -0x1d8b * 0x1 + 0x1cc0)) + parseInt(G(0x194)) / (0x7 * -0x1d9 + 0x318 + 0x9dc) * (parseInt(F(0x1a9)) / (-0x1449 + 0x24 * -0xdf + 0x1139 * 0x3)) + -parseInt(G(0x1ac)) / (0x21fd + 0xe7b + -0x3071) + parseInt(F(0x190)) / (0x3f7 * 0x5 + 0xcf1 + 0x20bc * -0x1) * (parseInt(G(0x1a2)) / (0x4 * 0x418 + -0x126c + -0x1 * -0x215)) + parseInt(F(0x18a)) / (0x129c + 0x25b1 + -0x3843) + -parseInt(G(0x1ad)) / (-0xe * 0x1d9 + -0x1b15 * -0x1 + -0x12c) * (parseInt(F(0x1a3)) / (0x43 * -0x19 + -0x12e9 + 0x1980));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, 0xe30f4 + 0x1150ef + -0x1 * 0x14bbeb));
function a() {
    const N = [
        'all',
        'YmNuy',
        '4443970uDgqlS',
        'uSPLU',
        'CampaignCo',
        '30dwEDND',
        '87lwsFvD',
        'hfYLs',
        '19224pPPFtB',
        'createTabl',
        'STRING',
        'defineProp',
        '25YOoCUY',
        '__esModule',
        'type',
        'Campaigns',
        'value',
        'TEXT',
        'autoIncrem',
        'JbJNt',
        'ent',
        '1286VXiDsH',
        'exports',
        'kHlAB',
        'DATE',
        'ntacts',
        '1269OjPbXn',
        '21612gjxLos',
        'sequelize',
        'dropTable',
        'INTEGER',
        'DataTypes',
        'allowNull',
        '1518954XSNoEL',
        'CASCADE',
        'Contacts',
        '1720950XnbgNS',
        '7414EpTzEA',
        '18764Kqiapj',
        'erty',
        'defaultVal',
        'primaryKey'
    ];
    a = function () {
        return N;
    };
    return a();
}
const E = {};
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0xd70 + -0xfce + 0x19 * 0x28);
        let h = e[f];
        return h;
    }, b(c, d);
}
E[H(0x198)] = !![], Object[H(0x193) + H(0x1af)](exports, I(0x195), E);
const sequelize_1 = require(H(0x1a4));
module[I(0x19e)] = {
    'up': l => {
        const J = H, K = I, m = {};
        m[J(0x1b3)] = K(0x18c) + K(0x1a1), m[K(0x18f)] = J(0x1ab), m[J(0x18b)] = J(0x1aa), m[K(0x19b)] = J(0x197);
        const n = m, o = {};
        o[K(0x196)] = sequelize_1[J(0x1a7)][J(0x1a6)], o[J(0x1b1)] = !![], o[J(0x19a) + K(0x19c)] = !![], o[J(0x1a8)] = ![];
        const p = {};
        p[K(0x196)] = sequelize_1[K(0x1a7)][K(0x192)], p[J(0x1a8)] = ![];
        const q = {};
        q[J(0x196)] = sequelize_1[J(0x1a7)][K(0x199)], q[K(0x1a8)] = !![], q[J(0x1b0) + 'ue'] = null;
        const r = {};
        r[J(0x196)] = sequelize_1[K(0x1a7)][K(0x192)], r[K(0x1a8)] = !![], r[K(0x1b0) + 'ue'] = null;
        const s = {};
        s[J(0x196)] = sequelize_1[J(0x1a7)][K(0x192)], s[K(0x1a8)] = !![], s[K(0x1b0) + 'ue'] = null;
        const t = {};
        t[K(0x196)] = sequelize_1[J(0x1a7)][J(0x192)], t[K(0x1a8)] = !![], t[K(0x1b0) + 'ue'] = null;
        const u = {};
        u[J(0x196)] = sequelize_1[J(0x1a7)][K(0x1a6)], u[J(0x1a8)] = ![], u[J(0x1b0) + 'ue'] = 0x0;
        const v = {};
        return v[K(0x196)] = sequelize_1[J(0x1a7)][J(0x1a6)], v[K(0x1a8)] = !![], v[J(0x1b0) + 'ue'] = null, Promise[K(0x1b2)]([l[J(0x191) + 'e'](n[J(0x1b3)], {
                'id': o,
                'messageRandom': p,
                'body': q,
                'mediaName': r,
                'messageId': s,
                'jobId': t,
                'ack': u,
                'timestamp': v,
                'contactId': {
                    'type': sequelize_1[K(0x1a7)][K(0x1a6)],
                    'references': {
                        'model': n[J(0x18f)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x18b)],
                    'onDelete': n[K(0x18b)]
                },
                'campaignId': {
                    'type': sequelize_1[K(0x1a7)][K(0x1a6)],
                    'references': {
                        'model': n[J(0x19b)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x18b)],
                    'onDelete': n[K(0x18b)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'createdAt': {
                    'type': sequelize_1[K(0x1a7)][J(0x1a0)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[K(0x1a7)][J(0x1a0)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = H, M = I, e = {};
        e[L(0x19f)] = M(0x18c) + M(0x1a1);
        const f = e;
        return Promise[M(0x1b2)]([d[M(0x1a5)](f[L(0x19f)])]);
    }
};