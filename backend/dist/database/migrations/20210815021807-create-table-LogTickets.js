'use strict';
const v = b, w = b;
function a() {
    const B = [
        'primaryKey',
        '35712ZbTinZ',
        'sequelize',
        'allowNull',
        'LtqGF',
        'defineProp',
        'LogTickets',
        'DataTypes',
        '589971QGcRXL',
        '5IMDQsB',
        '236756lARFwq',
        'type',
        'dropTable',
        '__esModule',
        '1604739lXFUAU',
        '245FOoMlX',
        'Tickets',
        'CASCADE',
        'createTabl',
        'exports',
        '8742033nhTfoc',
        'DATE',
        'erty',
        '2974428QosDRK',
        'pnEnB',
        'ent',
        'LLIQh',
        'value',
        'Users',
        'Queues',
        'INTEGER',
        'STRING',
        '80440mLimYL',
        'xHOvg',
        'autoIncrem',
        'jkuqC',
        'MACuI'
    ];
    a = function () {
        return B;
    };
    return a();
}
(function (c, d) {
    const t = b, u = b, e = c();
    while (!![]) {
        try {
            const f = parseInt(t(0x10a)) / (-0x1e95 + 0xc * 0x260 + -0x10b * -0x2) + -parseInt(u(0x103)) / (-0x5 * 0x3c8 + 0x21 * -0xf7 + 0x32c1) + parseInt(u(0x110)) / (-0x36 * -0x5 + -0x25dc + -0x24d1 * -0x1) + parseInt(u(0x10c)) / (-0x251 + -0x2 * 0xeaa + -0x1 * -0x1fa9) + -parseInt(u(0x10b)) / (0x1 * 0x188f + -0xe * -0xad + -0x2200) * (-parseInt(t(0x119)) / (-0xde1 + 0x15e1 * -0x1 + -0x28 * -0xe5)) + parseInt(u(0x111)) / (-0x2 * 0x5bb + -0x769 + 0x29 * 0x76) * (-parseInt(u(0x122)) / (0x41 * -0x3e + 0x1 * 0x1b64 + -0x2 * 0x5cf)) + -parseInt(t(0x116)) / (0x3 * -0x9d9 + -0x1 * -0xdfb + -0x1 * -0xf99);
            if (f === d)
                break;
            else
                e['push'](e['shift']());
        } catch (g) {
            e['push'](e['shift']());
        }
    }
}(a, -0x61dbe + -0x1 * -0xed + 0x2ea * 0x3df));
const s = {};
s[v(0x11d)] = !![], Object[w(0x107) + w(0x118)](exports, v(0x10f), s);
function b(c, d) {
    const e = a();
    return b = function (f, g) {
        f = f - (0x23a2 + -0x1845 * -0x1 + -0x3ae9);
        let h = e[f];
        return h;
    }, b(c, d);
}
const sequelize_1 = require(w(0x104));
module[v(0x115)] = {
    'up': e => {
        const x = v, y = v, f = {};
        f[x(0x101)] = x(0x108), f[y(0x11a)] = x(0x11e), f[y(0x106)] = x(0x113), f[y(0x100)] = y(0x112), f[y(0xfe)] = y(0x11f);
        const g = f, h = {};
        return h[x(0x10d)] = sequelize_1[y(0x109)][y(0x120)], h[y(0xff) + y(0x11b)] = !![], h[y(0x102)] = !![], h[x(0x105)] = ![], e[y(0x114) + 'e'](g[y(0x101)], {
            'id': h,
            'userId': {
                'type': sequelize_1[x(0x109)][y(0x120)],
                'references': {
                    'model': g[x(0x11a)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x106)],
                'onDelete': g[x(0x106)],
                'allowNull': !![],
                'defaultValue': null
            },
            'ticketId': {
                'type': sequelize_1[y(0x109)][x(0x120)],
                'references': {
                    'model': g[x(0x100)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x106)],
                'onDelete': g[y(0x106)],
                'allowNull': ![]
            },
            'queueId': {
                'type': sequelize_1[y(0x109)][y(0x120)],
                'references': {
                    'model': g[y(0xfe)],
                    'key': 'id'
                },
                'onUpdate': g[x(0x106)],
                'onDelete': g[x(0x106)],
                'defaultValue': null,
                'allowNull': !![]
            },
            'type': {
                'type': sequelize_1[x(0x109)][y(0x121)],
                'allowNull': ![]
            },
            'createdAt': {
                'type': sequelize_1[y(0x109)][x(0x117)],
                'allowNull': ![]
            },
            'updatedAt': {
                'type': sequelize_1[x(0x109)][y(0x117)],
                'allowNull': ![]
            }
        });
    },
    'down': d => {
        const z = v, A = v, e = {};
        e[z(0x11c)] = A(0x108);
        const f = e;
        return d[A(0x10e)](f[A(0x11c)]);
    }
};