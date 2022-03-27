// Copyright 2021 OneTab Ltd.  All rights reserved.

function e(e) {
    return !(e == null || !e || !(e + "")["trim"]());
}

function t(n, r, i) {
    if (!r) return null;
    try {
        if (r["tagName"] === "A") {
            if (r.href === n && e(r["textContent"])) return r["textContent"];
        } else {
            if (i === "down") {
                if (r["childNodes"]) {
                    for (let i of Array.from(r.childNodes)) {
                        let r = t(n, i, "down");
                        if (e(r)) return r;
                    }
                }
            } else if (i === "up") {
                if (r["parentElement"]) return t(n, r["parentElement"], "up");
            } else if (i === "both") {
                let i = t(n, r, "down");
                if (!i) i = t(n, r, "up");
                if (e(i)) return i;
            }
        }
    } catch (e) {
        console.log(e);
        return null;
    }
}

function n(e) {
    if (!e) return e;
    e = e.replace(/\s\s+/g, " ")["trim"]();
    return e;
}

function r(e) {
    try {
        let r;
        try {
            let i = window["getSelection"]()["extentNode"];
            r = t(e, i, "both");
            r = n(r);
        } catch (e) {
            console.log(e);
        }
        if (r) {
            return r;
        } else {
            let t = document["links"];
            for (let r = 0; r < t.length; r++) {
                let i = t[r].href;
                let l = new URL(i, document["baseURI"]).href;
                if (l === e) {
                    let e = t[r]["textContent"];
                    e = n(e);
                    if (!e) continue;
                    return e;
                }
            }
        }
    } catch (e) {
        console.log(e);
    }
    return e;
}

if (!window.alreadyListening) {
    window.alreadyListening = true;
    window.chrome.runtime.onMessage.addListener(((e, t, n) => {
        if (e["type"] === "getLinkTitle") {
            let t = e["url"];
            let i = r(t);
            n({
                url: t,
                title: i
            });
        } else {
            n();
        }
    }));
}