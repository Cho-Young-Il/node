if (!library) { var library = {}; }

library.json = {
    replacer: (match, pIndent, pKey, pVal, pEnd) => {
        var key = '<span class=json-key>';
        var val = '<span class=json-value>';
        var str = '<span class=json-string>';
        var r = pIndent || '';

        if (pKey) { r = r + key + pKey.replace(/[": ]/g, '') + '</span>: '; }
        if (pVal) { r = r + (pVal[0] == '"' ? str : val) + pVal + '</span>'; }

        return r + (pEnd || '');
    },
    prettyPrint: (obj) => {
        const jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{])?$/mg;
        return JSON.stringify(obj, null, 3)
            .replace(/&/g, '&amp;').replace(/\\"/g, '&quot;')
            .replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(jsonLine, library.json.replacer);
    }
};

const account = { active: true, codes: [48348, 28923, 39080], city: "London" };
const planets = [{ name: 'Earth', order: 3, stats: { life: true, mass: 5.9736 * Math.pow(10, 24) } }, { name: 'Saturn', order: 6, stats: { life: null, mass: 568.46 * Math.pow(10, 24) } }];
$('#account').html(library.json.prettyPrint(account));
$('#planets').html(library.json.prettyPrint(planets));

