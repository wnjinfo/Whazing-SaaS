'use strict';
function a() {
    const N = [
        '250ezSyov',
        'cFAeJ',
        'CampaignCo',
        'allowNull',
        'DATE',
        '1418989aEHxBz',
        'DataTypes',
        'erty',
        'EyIRT',
        'mSTyw',
        'defineProp',
        '12fopoeb',
        'ntacts',
        '520ClkHtN',
        'primaryKey',
        'createTabl',
        '4859586zKwsxc',
        '__esModule',
        '22855RdRXOA',
        '105PQrSgq',
        'seIPU',
        'Contacts',
        '64112pGOqda',
        'CASCADE',
        'defaultVal',
        '3584675PKQldz',
        'sequelize',
        'INTEGER',
        'dropTable',
        'STRING',
        'exports',
        'autoIncrem',
        'WdndA',
        'ent',
        'type',
        'TEXT',
        'all',
        'value',
        '960976yeeYye',
        '2509488VINmlR',
        'Campaigns'
    ];
    a = function () {
        return N;
    };
    return a();
}
const H = b, I = b;
(function (c, d) {
    const F = b, G = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(F(0x126)) / (-0xd48 + 0x1827 + -0x6b * 0x1a) + parseInt(G(0x127)) / (-0x55f + -0x1a1e + 0x1f7f) + -parseInt(F(0x13c)) / (-0xcb * -0x1d + 0x3 * 0x32d + -0x2083) * (parseInt(F(0x13f)) / (-0x1bcc + -0x166d * -0x1 + 0xc5 * 0x7)) + -parseInt(G(0x119)) / (-0xb79 * 0x1 + -0x11 * 0x1d4 + 0x2a92) * (parseInt(G(0x134)) / (0x7 * 0x212 + -0xd2 * -0x2a + -0x30ec)) + parseInt(F(0x13b)) / (0x1eb9 + 0x11c * -0x8 + -0x3 * 0x746) * (-parseInt(G(0x136)) / (-0x31 * 0x17 + -0xc5a * 0x2 + 0x1d23)) + -parseInt(G(0x139)) / (0x6f * -0xd + 0x18da + 0x5 * -0x3d6) + -parseInt(F(0x129)) / (-0x2 * 0x2b5 + 0x1a1b + -0x14a7) * (-parseInt(G(0x12e)) / (-0x639 + -0x1 * -0x1aa7 + -0x1463));
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x4 * -0x33c34 + -0x1 * 0xd7e57 + 0xc5409));
const E = {};
E[H(0x125)] = !![], Object[H(0x133) + H(0x130)](exports, I(0x13a), E);
const sequelize_1 = require(H(0x11a));
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2098 + -0x8bb + 0x2a6c);
        let h = e[f];
        return h;
    }, b(c, d);
}
module[I(0x11e)] = {
    'up': l => {
        const J = I, K = I, m = {};
        m[J(0x13d)] = K(0x12b) + K(0x135), m[J(0x12a)] = K(0x13e), m[K(0x132)] = J(0x140), m[J(0x131)] = K(0x128);
        const n = m, o = {};
        o[J(0x122)] = sequelize_1[J(0x12f)][K(0x11b)], o[J(0x137)] = !![], o[K(0x11f) + K(0x121)] = !![], o[K(0x12c)] = ![];
        const p = {};
        p[J(0x122)] = sequelize_1[J(0x12f)][K(0x11d)], p[J(0x12c)] = ![];
        const q = {};
        q[J(0x122)] = sequelize_1[J(0x12f)][J(0x123)], q[J(0x12c)] = !![], q[J(0x141) + 'ue'] = null;
        const r = {};
        r[K(0x122)] = sequelize_1[K(0x12f)][K(0x11d)], r[J(0x12c)] = !![], r[K(0x141) + 'ue'] = null;
        const s = {};
        s[J(0x122)] = sequelize_1[K(0x12f)][J(0x11d)], s[J(0x12c)] = !![], s[J(0x141) + 'ue'] = null;
        const t = {};
        t[K(0x122)] = sequelize_1[K(0x12f)][K(0x11d)], t[K(0x12c)] = !![], t[K(0x141) + 'ue'] = null;
        const u = {};
        u[K(0x122)] = sequelize_1[K(0x12f)][J(0x11b)], u[K(0x12c)] = ![], u[J(0x141) + 'ue'] = 0x0;
        const v = {};
        return v[K(0x122)] = sequelize_1[K(0x12f)][J(0x11b)], v[K(0x12c)] = !![], v[J(0x141) + 'ue'] = null, Promise[J(0x124)]([l[J(0x138) + 'e'](n[J(0x13d)], {
                'id': o,
                'messageRandom': p,
                'body': q,
                'mediaName': r,
                'messageId': s,
                'jobId': t,
                'ack': u,
                'timestamp': v,
                'contactId': {
                    'type': sequelize_1[K(0x12f)][J(0x11b)],
                    'references': {
                        'model': n[K(0x12a)],
                        'key': 'id'
                    },
                    'onUpdate': n[K(0x132)],
                    'onDelete': n[K(0x132)]
                },
                'campaignId': {
                    'type': sequelize_1[J(0x12f)][J(0x11b)],
                    'references': {
                        'model': n[J(0x131)],
                        'key': 'id'
                    },
                    'onUpdate': n[J(0x132)],
                    'onDelete': n[K(0x132)],
                    'allowNull': ![],
                    'defaultValue': 0x0
                },
                'createdAt': {
                    'type': sequelize_1[J(0x12f)][K(0x12d)],
                    'allowNull': ![]
                },
                'updatedAt': {
                    'type': sequelize_1[K(0x12f)][J(0x12d)],
                    'allowNull': ![]
                }
            })]);
    },
    'down': d => {
        const L = I, M = I, e = {};
        e[L(0x120)] = L(0x12b) + L(0x135);
        const f = e;
        return Promise[M(0x124)]([d[M(0x11c)](f[L(0x120)])]);
    }
};