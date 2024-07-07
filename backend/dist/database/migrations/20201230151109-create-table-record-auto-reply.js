'use strict';
const B = b, C = b;
(function (c, d) {
    const z = b, A = b, e = c();
    while (!![]) {
        try {
            const f = -parseInt(z(0x1e6)) / (0x3d * -0x97 + 0x9d7 + 0x1a25) * (-parseInt(z(0x1e3)) / (0x19 * 0xd + 0x1 * 0x233 + -0x1 * 0x376)) + -parseInt(z(0x1e0)) / (0xbd9 + -0x12a * -0x20 + -0x3116) * (parseInt(z(0x1d0)) / (-0x14e0 + 0x1328 + 0x1bc)) + parseInt(A(0x1db)) / (0x101 * 0xb + 0x22af * 0x1 + 0x1 * -0x2db5) * (-parseInt(A(0x1c2)) / (-0x131 * -0x17 + -0x1 * 0x267c + 0xb1b)) + parseInt(A(0x1c7)) / (-0xe08 + 0xfb * -0x5 + -0x652 * -0x3) * (-parseInt(z(0x1e1)) / (0x1 * -0x19a3 + 0xab * -0x1d + 0x481 * 0xa)) + parseInt(A(0x1d7)) / (-0xe95 + 0x7 * 0x37d + -0x9cd) + -parseInt(A(0x1d2)) / (0x1a06 + -0x7 * -0x481 + -0x3983) * (parseInt(A(0x1d3)) / (0x4b9 + -0x1830 + 0x1382)) + parseInt(A(0x1de)) / (0xe * -0x21f + -0x11c9 + -0x211 * -0x17);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x3f * -0x2fb1 + 0x2 * 0xee6 + 0x2163e));
const y = {};
function a() {
    const H = [
        '22zHlREA',
        'dropTable',
        'allowNull',
        'jnokI',
        'ent',
        '510CwAreg',
        'GQkMz',
        'defineProp',
        'ogs',
        'DATE',
        '77fzmqxt',
        'sequelize',
        'restrict',
        'autoIncrem',
        'HglXn',
        'primaryKey',
        'Contacts',
        'Tickets',
        'AutoReplyL',
        '12hiZzOw',
        'DataTypes',
        '213230tLuJdp',
        '638DOcSHx',
        'IAuQi',
        'uzHBm',
        'type',
        '1639269KUzeHt',
        'erty',
        'value',
        'rkRUG',
        '59665qsjYMT',
        '__esModule',
        'STRING',
        '23070588AYPAjX',
        'exports',
        '362907igBBXV',
        '12952NfIKGM',
        'INTEGER',
        '130966yhWsap',
        'createTabl',
        'CASCADE'
    ];
    a = function () {
        return H;
    };
    return a();
}
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (-0x2 * -0x10c8 + 0x59d + -0x63d * 0x6);
        let h = e[f];
        return h;
    }, b(c, d);
}
y[B(0x1d9)] = !![], Object[B(0x1c4) + B(0x1d8)](exports, C(0x1dc), y);
const sequelize_1 = require(B(0x1c8));
module[B(0x1df)] = {
    'up': j => {
        const D = C, E = C, k = {};
        k[D(0x1d4)] = E(0x1cf) + D(0x1c5), k[D(0x1c0)] = D(0x1cd), k[E(0x1d5)] = D(0x1e5), k[D(0x1c3)] = D(0x1c9), k[D(0x1cb)] = E(0x1ce);
        const l = k, m = {};
        m[E(0x1d6)] = sequelize_1[E(0x1d1)][D(0x1e2)], m[D(0x1ca) + E(0x1c1)] = !![], m[E(0x1cc)] = !![], m[E(0x1bf)] = ![];
        const n = {};
        n[D(0x1d6)] = sequelize_1[E(0x1d1)][E(0x1e2)], n[D(0x1bf)] = ![];
        const o = {};
        o[D(0x1d6)] = sequelize_1[D(0x1d1)][E(0x1dd)], o[D(0x1bf)] = ![];
        const p = {};
        p[E(0x1d6)] = sequelize_1[D(0x1d1)][D(0x1e2)], p[E(0x1bf)] = ![];
        const q = {};
        q[D(0x1d6)] = sequelize_1[E(0x1d1)][D(0x1dd)], q[D(0x1bf)] = ![];
        const r = {};
        return r[D(0x1d6)] = sequelize_1[D(0x1d1)][D(0x1dd)], r[E(0x1bf)] = ![], j[E(0x1e4) + 'e'](l[D(0x1d4)], {
            'id': m,
            'autoReplyId': n,
            'autoReplyName': o,
            'stepsReplyId': p,
            'stepsReplyMessage': q,
            'wordsReply': r,
            'contactId': {
                'type': sequelize_1[E(0x1d1)][D(0x1e2)],
                'references': {
                    'model': l[E(0x1c0)],
                    'key': 'id'
                },
                'onUpdate': l[D(0x1d5)],
                'onDelete': l[D(0x1c3)]
            },
            'ticketId': {
                'type': sequelize_1[D(0x1d1)][D(0x1e2)],
                'references': {
                    'model': l[E(0x1cb)],
                    'key': 'id'
                },
                'onUpdate': l[E(0x1d5)],
                'onDelete': l[E(0x1c3)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[D(0x1d1)][D(0x1c6)](-0xdd * 0xc + -0x18a + 0xbec),
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[E(0x1d1)][D(0x1c6)](-0x3b0 + -0x1 * -0xacf + -0x719),
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const F = C, G = C, e = {};
        e[F(0x1da)] = G(0x1cf) + F(0x1c5);
        const f = e;
        return d[G(0x1e7)](f[F(0x1da)]);
    }
};