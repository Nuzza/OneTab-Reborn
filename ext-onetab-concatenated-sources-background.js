// Copyright 2021 OneTab Ltd.  All rights reserved.

const i = "1.56";

const o = false;

const u = false;

const c = false;

const l = false;

const f = false;

const s = false;

const d = true;

const a = "chrome://";

const p = "chrome://newtab/";

const w = "https://www.one-tab.com";

const m = false;

function j(t) {
    let e = b(t);
    if (e.toLowerCase().startsWith("www.")) return e.substring("www.".length); else return e;
}

function b(t) {
    if (!t) return "undefined";
    if (t.indexOf("//") === 0) t = "http:" + t;
    if (t.indexOf("://") === -1) t = "http://" + t;
    t = t.substring(t.indexOf("://") + "://".length);
    if (t.indexOf("/") !== -1) t = t.substring(0, t.indexOf("/"));
    if (t.indexOf(":") !== -1) t = t.substring(0, t.indexOf(":"));
    if (t.indexOf("?") !== -1) t = t.substring(0, t.indexOf("?"));
    if (t.indexOf("#") !== -1) t = t.substring(0, t.indexOf("#"));
    return t.toLowerCase();
}

function A(t) {
    if (t.indexOf("://") === -1) return "https://";
    t = t.substring(0, t.indexOf("://") + "://".length);
    return t.toLowerCase();
}

let E = [ "com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl" ];

function T(t) {
    let e = b(t);
    try {
        for (let t in E) {
            let a = "." + E[t];
            if (F(e, a)) {
                e = e.substr(0, e.length - a.length);
                while (e.indexOf(".") !== -1) e = e.substring(e.indexOf(".") + 1);
                e = e + a;
                break;
            }
        }
        if (e.indexOf("www.") === 0) e = e.substring("www.".length);
        return e;
    } catch (t) {
        return e;
    }
}

function O(t) {
    t["noCacheRandom"] = S();
}

function S() {
    return (new Date).getTime() + Math.round(Math.random() * 1e4) + "";
}

async function k(t, e) {
    O(e);
    let a = JSON.stringify(e);
    let i = await R(t, a);
    return await i.json();
}

async function R(t, e) {
    let a = {};
    if (e) {
        a.method = "POST";
        a.body = e;
    } else {
        a.method = "GET";
    }
    a.headers = new Headers;
    a.headers.append("Content-Type", "text/json");
    let i = await fetch(t, a);
    if (i.status === 200) return i; else throw new Error("http response code" + i.status);
}

function C() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (t => {
        let e = Math.random() * 16 | 0, a = t == "x" ? e : e & 3 | 8;
        return a.toString(16);
    }));
}

const B = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");

function I(t, e) {
    let a = B, i = [], s = 0;
    e = e || a.length;
    t = t || 22;
    for (s = 0; s < t; s++) i[s] = a[0 | Math.random() * e];
    return i.join("");
}

function M() {
    return I();
}

function X(t) {
    if (t === null || t === undefined) return "";
    return t.replace(/^\s+/, "").replace(/\s+$/, "");
}

const Y = (t, e) => !!e["starred"] - !!t["starred"] || t["starred"] && e["starred"] && e["starredDate"] - t["starredDate"] || e["createDate"] - t["createDate"];

function D(t) {
    if (!t) t = "";
    return t.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}

function F(t, e) {
    if (!t) return false;
    return t.indexOf(e, t.length - e.length) !== -1;
}

const L = {
    restoreWindow: "newWindow",
    pinnedTabs: "ignore",
    startupLaunch: "displayOneTab",
    restoreRemoval: "default",
    duplicates: "allow"
};

function U(t, e) {
    if (e[t]) return e[t]; else return L[t];
}

function z(t, e, a) {
    if (t.parentNode) t.remove();
    e.insertBefore(t, a === undefined || a >= e.children.length || e.children.length === 0 ? null : e.children[Math.max(0, a)]);
}

function P(t, e, a) {
    let i = e === undefined ? t : document.createElement(e);
    let s = {};
    if (a) {
        if (a.style) Object.assign(i.style, a.style);
        for (let t of Object.keys(a)) {
            if (t !== "style" && t !== "children") i[t] = a[t];
        }
        if (a.children) {
            for (const [t, e] of Object.entries(a.children)) {
                s[t] = e;
                i.appendChild(e instanceof HTMLElement ? e : e.t);
            }
        }
        if (a.o) i.appendChild(a.o);
        if (a.init) a.init(i);
    }
    if (e !== undefined && t) t.appendChild(i);
    let n = {
        t: i
    };
    Object.assign(n, s);
    return n;
}

const W = "about:reader?url=";

function $(t) {
    if (!t) return "";
    if (t.indexOf(":") === -1) return "http://" + t;
    if (t.indexOf(W) === 0) return decodeURIComponent(t.substring(W.length));
    return t;
}

async function H(t) {
    return new Promise((e => setTimeout(e, t)));
}

function N(t) {
    return parseInt(t.match(/\d+/)[0]);
}

const G = [ ...new Array(30) ].map(((t, e) => parseInt(10 + Math.pow(1.6, e))));

function* J(t) {
    let e = 0;
    while (G.slice(0, e).reduce(((t, e) => t + e), 0) < t) {
        yield G[e++];
    }
}

async function q(t, e, a) {
    for (let e of J(t)) {
        if (await a()) return; else {
            await H(e);
        }
    }
    throw new Error(`Timeout waiting for condition ${e}`);
}

class ae {
    constructor() {
        this.G = [];
        this.locked = false;
        this.debug = false;
    }
    async q() {
        if (this.debug) console.log(`begin acquire, queue len: ${this.G.length}`);
        if (this.debug) console.trace();
        if (!this.locked) {
            this.locked = true;
            if (this.debug) console.log(`acquired, queue len: ${this.G.length}`);
        } else {
            if (this.debug) console.log(`waiting to acquire, queue len: ${this.G.length}`);
            await new Promise((t => {
                this.G.push(t);
            }));
            if (this.debug) console.log(`acquired after waiting, queue len: ${this.G.length}`);
        }
    }
    release() {
        if (this.debug) console.log(`begin release, queue len: ${this.G.length}`);
        if (this.G.length === 0) {
            this.locked = false;
        } else {
            this.G.shift()();
            if (this.debug) console.log(`waiting thread notified. queue len: ${this.G.length}`);
        }
        if (this.debug) console.log(`released. queue len: ${this.G.length}`);
    }
}

class ie {
    constructor() {
        this.J = [];
        this.V = new ae;
        this.K = new ae;
    }
    async _() {
        await this.K.q();
        try {
            let t = await Re().get("extensionKey");
            if (!t) {
                t = C();
                await Re().put("extensionKey", t);
            }
            return t;
        } finally {
            this.K.release();
        }
    }
    async Z(t) {
        let e = await de(false);
        for (let a = 0; a < e.length; a++) {
            await this.tt(e[a], true, t, a === 0);
        }
    }
    async et(t) {
        let e = qe(t);
        let a = true;
        if (o) {
            try {
                await q(1e3, t + " tabs completed loading", (async () => !(await fe()).find((t => t["status"] === "loading" && t["title"] === e.substring(e.indexOf("://") + "://".length)))));
            } catch (t) {
                console.log("showOrRefreshAndFocusScriptPage loading wait failed");
            }
        }
        let i = await fe();
        let s = i.filter((t => [ t["url"], t["pendingUrl"] ].some((t => t === e))));
        let n = s.length > 0 ? s[0] : undefined;
        if (s.length > 1 && !l) {
            s.filter((t => t !== n)).forEach((t => Te(t)));
        }
        if (n) {
            if (a) {
                be(n);
            }
            n = i.find((t => [ t["url"], t["pendingUrl"] ].some((t => t === e))));
            await ge(n);
        } else {
            await Se(e, false, true);
        }
    }
    async at(t, e) {
        let a = await this.getSettings();
        let i = U("restoreWindow", a);
        if (e === "currentWindow") i = "currentWindow";
        if (e === "newWindow") i = "newWindow";
        let s = (await ce()).tabs;
        let n = s.filter((t => !(t["pinned"] || we(t["url"]) || re(t["url"])))).length;
        if (i === "currentWindow" || i === "newWindow" && e !== "newWindow" && n === 0) {
            let e = !window.chrome.windows ? undefined : await Ae(false);
            for (const [a, i] of t.entries()) {
                let t = {
                    active: u && a === 0,
                    url: i["url"]
                };
                if (e !== undefined) t["windowId"] = e["id"];
                t["pinned"] = !!i["pinned"];
                await xe(t);
            }
        } else {
            await ke(t);
        }
        await this.it();
    }
    async U(t) {
        let e = await this.getState();
        let a = t.split("\n");
        let i = (new Date).getTime();
        let s = () => ({
            createDate: i--,
            tabsMeta: [],
            id: I()
        });
        let n = s();
        let o = [];
        for (let t of a) {
            if (!t) {
                if (n["tabsMeta"].length > 0) {
                    o.push(n);
                    n = s();
                }
            } else {
                let e;
                let a;
                if (t.indexOf(" | ") !== -1) {
                    e = t.substring(0, t.indexOf(" | "));
                    a = t.substring(t.indexOf(" | ") + " | ".length);
                } else {
                    e = $(t);
                    a = b(e);
                }
                if (e.indexOf("://") === -1) e = "http://" + e;
                n["tabsMeta"].push({
                    id: M(),
                    url: e,
                    title: D(a)
                });
            }
        }
        if (n["tabsMeta"].length > 0) {
            o.push(n);
        }
        let l = Math.max(0, e["tabGroups"].findIndex((t => !t["starred"])));
        let r = o.map(((t, e) => ({
            type: "createTabGroup",
            tabGroupId: t["id"],
            tabGroup: t,
            index: l + e
        })));
        for (let t of r) await this.st(t);
    }
    async st(t, e) {
        await this.V.q();
        try {
            let a = await this.getState();
            if (t["type"] === "createTabGroup") {
                if (!e) {
                    a["tabGroups"].splice(t["index"], 0, t["tabGroup"]);
                } else {
                    a["tabGroups"].splice(a["tabGroups"].findIndex((e => e["id"] === t["tabGroupId"])), 1);
                }
            } else if (t["type"] === "createTabs") {
                let i = a["tabGroups"].find((e => e["id"] === t["tabGroupId"]));
                if (!e) {
                    i["tabsMeta"].unshift(...t["newTabsMeta"]);
                } else {
                    let e = new Set(t["newTabsMeta"].map((t => t["id"])));
                    i["tabsMeta"] = i["tabsMeta"].filter((t => !e.has(t["id"])));
                }
            } else if (t["type"] === "deleteTabs") {
                let i = a["tabGroups"].find((e => e["id"] === t["tabGroupId"]));
                if (!e) {
                    let e = new Set(t["tabMetaIds"]);
                    i["tabsMeta"] = i["tabsMeta"].filter((t => !e.has(t["id"])));
                } else {
                    let e = [];
                    t["tabsMetaDeleted"].forEach(((a, i) => e.push([ a, t["tabIndicesDeleted"][i] ])));
                    e.sort(((t, e) => t[1] - e[1]));
                    e.forEach((([t, e]) => i["tabsMeta"].splice(e, 0, t)));
                }
            } else if (t["type"] === "deleteTabGroup") {
                if (!e) {
                    let e = a["tabGroups"].findIndex((e => e["id"] === t["tabGroupId"]));
                    a["tabGroups"].splice(e, 1);
                } else {
                    a["tabGroups"].splice(Math.max(0, t["index"]), 0, t["deletedTabGroup"]);
                }
            } else if (t["type"] === "updateTabGroup") {
                let i = e ? "old" : "new";
                let s = e ? "new" : "old";
                let n = a["tabGroups"];
                let o = n.find((e => e["id"] === t["tabGroupId"]));
                let l = t["propChanges"];
                if (l["starred"]) {
                    o["starred"] = l["starred"][i];
                    o["starredDate"] = l["starredDate"][i];
                }
                if (l["label"]) {
                    o["label"] = l["label"][i];
                }
                if (l["locked"]) {
                    o["locked"] = l["locked"][i];
                }
                if (l["index"]) {
                    n.splice(l["index"][i], 0, ...n.splice(l["index"][s], 1));
                }
            } else if (t["type"] === "reorderTab") {
                let i = a["tabGroups"].find((e => e["id"] === t["tabGroupId"]));
                let s = i["tabsMeta"].findIndex((e => e["id"] === t["tabMetaId"]));
                let n = i["tabsMeta"][s];
                let o = t["newIndex"];
                if (e) {
                    o = s;
                    s = t["newIndex"];
                }
                i["tabsMeta"].splice(s, 1);
                i["tabsMeta"].splice(Math.min(o, i["tabsMeta"].length), 0, n);
            } else if (t["type"] === "moveTabBetweenTabGroups") {
                let i = a["tabGroups"].findIndex((e => e["id"] === t["sourceTabGroupId"]));
                let s = a["tabGroups"][i];
                let n = a["tabGroups"].find((e => e["id"] === t["targetTabGroupId"]));
                if (!e) {
                    let e = s["tabsMeta"].findIndex((e => e["id"] === t["tabMetaId"]));
                    let i = s["tabsMeta"].splice(e, 1)[0];
                    n["tabsMeta"].splice(t["targetTabGroupTabIndex"], 0, i);
                    if (t["deletedSourceTabGroup"]) {
                        a["tabGroups"] = a["tabGroups"].filter((e => e["id"] !== t["deletedSourceTabGroup"]["id"]));
                    }
                } else {
                    let e = n["tabsMeta"].findIndex((e => e["id"] === t["tabMetaId"]));
                    let i = n["tabsMeta"].splice(e, 1)[0];
                    if (t["deletedSourceTabGroup"]) {
                        a["tabGroups"] = a["tabGroups"].splice(t["sourceTabGroupIndex"], 0, t["deletedSourceTabGroup"]);
                    } else {
                        s.splice(t["sourceTabGroupTabIndex"], 0, i);
                    }
                }
            }
            await this.nt(a);
            await this.ot(t, e);
        } finally {
            this.V.release();
        }
    }
    M() {
        let t = [ "addOneTabNow", "95PctMemoryReduction", "noTabsInOneTabYet", "importUrls", "exportImportUrls", "pleaseWaitTripleDot", "about", "optionTabGroupRestoreNewWindow", "optionPinnedTabsDontSend", "beforeLostInMessBrowserSlow", "sendAllTabsAllWindowsToPlaceholder", "convertTabsIntoAList", "tooManyTabsSpeedUpFirefox", "sendOnlyThisTabToPlaceholder", "emptyOneTabInfoMsg", "OneTabAlsoAvailableForFirefox", "feedback", "optionRestoreRemovalDefault", "features", "unlockBeforeDeleting", "sendRightTabsToOneTab", "tab", "sendAllTabsToPlaceholder", "options", "sendThisWebLinkToOneTab", "namedTabGroups", "export", "excludeDomainFromOneTab", "optionStartupLaunchDisplay", "lockTabGroup", "optionTabGroupRestoreCurrentWindowAlways", "noSignupRegistrationRequired", "optionStartupLaunchNone", "optionDuplicatesRejectDesc", "unstarTabGroup", "shareAllAsWebPage", "nameThisTabGroup", "afterInstantReliefRestoreLater", "languageTitle", "memoryAfter99", "sendThisWebLinkToPlaceholder", "optionRestoreRemovalDefaultDesc", "sendLeftTabsToOneTab", "optionRestoreRemovalKeepDesc", "nowAvailableInLanguage", "moreTripleDot", "sendOnlyThisTabToOneTab", "restoreAll", "optionPinnedTabsDontSendDesc", "optionPinnedTabsAllow", "exportUrls", "optionDuplicatesAllow", "bringAllTabsIntoOneTab", "import", "total0Tabs", "2tabs", "optionPinnedTabsTitle", "manifestDescription", "displayOneTab", "memoryBefore1981", "optionDuplicatesTitle", "sendAllTabsToOneTab", "optionTabGroupRestoreNewWindowAlways", "newExclamation", "userLanguage", "sendCurrentTabToOneTab", "optionDuplicatesReject", "save95PctReduceTabClutterGoogleChrome", "areYouSureYouWantToDeleteThisTab", "pasteInUrlsInstructions", "1tab", "exportThenImportNote", "optionRestoreRemovalTitle", "excludeWebSiteFromOneTab", "optionStartupLaunchNoneDesc", "sendAllTabsAllWindowsToOneTab", "optionRestoreRemovalKeep", "total2Tabs", "deleteAll", "createdPreceedingDate", "sendAllTabsExceptThisTabToPlaceholder", "optionPinnedTabsNote", "starTabGroup", "total1Tab", "unlockTabGroup", "help", "optionTabGroupRestoreTitle", "sendRightTabsToPlaceholder", "areYouSureYouWantToDeleteTheseTabs", "shareAsWebPage", "optionStartupLaunchTitle", "sendLeftTabsToPlaceholder", "reduceMemoryUsageBy95Pct", "sendAllTabsExceptThisToOneTab" ];
        let e = {};
        for (const a of t) e[a] = Dt(a);
        return e;
    }
    async lt() {
        let t = await this.getState();
        let e = [];
        let a = (new Date).getTime();
        for (let t = 0; t < 100; t++) {
            let i = {
                createDate: a--,
                tabsMeta: [],
                label: "tab group " + t,
                id: I()
            };
            e.push(i);
            for (let e = 0; e < 20; e++) {
                i["tabsMeta"].push({
                    id: M(),
                    url: "https://en.wikipedia.org/wiki/" + (20 * t + e),
                    title: "wikipedia " + (20 * t + e)
                });
            }
        }
        let i = Math.max(0, t["tabGroups"].findIndex((t => !t["starred"])));
        let s = e.map(((t, e) => ({
            type: "createTabGroup",
            tabGroupId: t["id"],
            tabGroup: t,
            index: i + e
        })));
        for (let t of s) await this.st(t);
        await this.P();
    }
    async it() {
        if (Ne["pinned"]) return;
        let t = await this.getState();
        let e = t["tabGroups"].map((t => t["tabsMeta"].length)).reduce(((t, e) => t + e), 0);
        if (e === 0) {
            let t = await fe();
            let e = t.find((t => we(t["url"])));
            if (e) await Te(e);
        }
    }
    async getSettings() {
        let t = await Re().get("settings");
        if (!t) return {}; else return JSON.parse(t);
    }
    async rt(t, e) {
        await this.K.q();
        try {
            let a = await this.getSettings();
            a[t] = e;
            await this.wt(a);
        } finally {
            this.K.release();
        }
    }
    async wt(t) {
        await Re().put("settings", JSON.stringify(t));
    }
    async ht(t) {
        let e = await this.getSettings();
        return U(t, e);
    }
    async getState() {
        let t = await Re().get("state");
        if (!t) return {}; else return JSON.parse(t);
    }
    async nt(t) {
        let e = await Re().get("state");
        let a = e;
        await Re().put("state", JSON.stringify(t));
        e = await Re().get("state");
        try {
            JSON.parse(e);
        } catch (t) {
            await Re.put("state", a);
            alert("Could not store extension state");
        } finally {}
    }
    async ct(t, e, a) {
        let i = {
            id: M(),
            url: t,
            title: D(e)
        };
        await this.ut(i, a);
    }
    async ft(t, e) {
        if (we(t["url"])) {
            return;
        }
        let a = {
            id: M(),
            url: $(t["url"]),
            title: D(t["title"])
        };
        if (t["pinned"] || t["isPinned"]) a["pinned"] = true;
        await this.ut(a, e);
        await Te(t);
    }
    async ut(t, e) {
        if (this.dt(t["url"])) {
            alert("Cannot import tabs of this type");
            return;
        }
        let a = await this.getState();
        if (typeof e === "undefined") {
            let e = a["tabGroups"].find((t => !t["starred"] && !t["locked"]));
            if (e) {
                await this.st({
                    type: "createTabs",
                    tabGroupId: e["id"],
                    newTabsMeta: [ t ]
                });
            } else {
                e = {
                    id: M(),
                    tabsMeta: [ t ],
                    createDate: (new Date).getTime()
                };
                let i = Math.max(0, a["tabGroups"].findIndex((t => !t["starred"])));
                await this.st({
                    type: "createTabGroup",
                    tabGroupId: e["id"],
                    tabGroup: e,
                    index: i
                });
            }
        } else {
            await this.st({
                type: "createTabs",
                tabGroupId: e,
                newTabsMeta: [ t ]
            });
        }
    }
    async tt(t, e, a, i) {
        let s = await this.getSettings();
        let n = await this.getState();
        let o = new Set((await fe()).map((t => t["id"])));
        let l = t.filter((t => o.has(t["id"]) && (!e || !this.bt($(t["url"]), s))));
        l.sort(((t, e) => t["index"] - e["index"]));
        let r = [];
        let w = [];
        if (l.some((t => t["url"].indexOf("://tabmemfree.appspot.com") !== -1))) {
            alert("The OneTab extension is not compatible with TabMemFree. Please ensure that none of your tabs are parked with TabMemFree, then uninstall the TabMemFree extension and restart your web browser before using OneTab.");
            return;
        }
        for (let t of l) {
            let e = t["url"];
            if (!e && t["pendingUrl"]) e = t["pendingUrl"];
            let a = $(e);
            if (t["pinned"] && U("pinnedTabs", s) === "ignore") {
                continue;
            }
            if (we(e)) {
                continue;
            }
            if (he(e) && !we(e)) {
                w.push(t);
                continue;
            }
            if (e.indexOf("chrome-devtools://") === 0) {
                continue;
            }
            if (this.dt(a)) {
                w.push(t);
                continue;
            }
            if (U("duplicates", s) === "reject") {
                if (n["tabGroups"].some((t => t["tabsMeta"].some((t => $(t["url"]) === a))))) {
                    w.push(t);
                    continue;
                }
                if (r.some((t => $(t["url"]) === a))) {
                    w.push(t);
                    continue;
                }
            }
            w.push(t);
            let i = {
                id: M(),
                url: a,
                title: D(t["title"])
            };
            if (t["pinned"] || t["isPinned"]) i["pinned"] = true;
            r.push(i);
        }
        if (r.length > 0) {
            if (typeof a === "undefined") {
                let t = {
                    id: M(),
                    tabsMeta: r,
                    createDate: (new Date).getTime()
                };
                let e = Math.max(0, n["tabGroups"].findIndex((t => !t["starred"])));
                await this.st({
                    type: "createTabGroup",
                    tabGroupId: t["id"],
                    tabGroup: t,
                    index: e
                });
            } else {
                await this.st({
                    type: "createTabs",
                    tabGroupId: a,
                    newTabsMeta: r
                });
            }
        }
        if (w.length === 0) {
            await Ft.P(false, undefined);
        } else {
            await ye(w, i);
        }
    }
    bt(t, e) {
        return this.Tt(b(t), e);
    }
    Tt(t, e) {
        if (e["excludedDomains"]) {
            for (let a of e["excludedDomains"]) if (a === t) return true;
        }
        return false;
    }
    async yt(t) {
        await this.K.q();
        try {
            let e = await this.getSettings();
            if (!this.Tt(t, e)) {
                if (!e["excludedDomains"]) e["excludedDomains"] = [];
                e["excludedDomains"].push(t);
                await this.wt(e);
            }
        } finally {
            this.K.release();
        }
    }
    async gt(t) {
        await this.K.q();
        try {
            let e = await this.getSettings();
            if (!e["excludedDomains"]) return;
            e["excludedDomains"] = e["excludedDomains"].filter((e => e !== t));
            await this.wt(e);
        } finally {
            this.K.release();
        }
    }
    dt(t) {
        for (let e of Ve) if (t.indexOf(e) === 0) return true;
        if (!t || t === "" || t.indexOf("chrome-devtools:") === 0) return true;
        return false;
    }
    async xt() {
        let t = await this.getState();
        if (!t["tabGroups"]) {
            t["tabGroups"] = [];
            await this.nt(t);
        }
        let e = false;
        t["tabGroups"].forEach((t => {
            if (t["tabsMeta"].some((t => t === null))) {
                t["tabsMeta"] = t["tabsMeta"].filter((t => t !== null));
                e = true;
            }
        }));
        if (e) {
            await this.nt(t);
            alert("Null tabsMeta found and fixed");
        }
        if (![ ...t["tabGroups"] ].sort(Y).every(((e, a) => e === t["tabGroups"][a]))) {
            console.log("Tabgroups correctly reordered");
            t["tabGroups"].sort(Y);
            await this.nt(t);
        }
    }
    async Pt() {
        await this.P();
    }
    async Ot(t) {
        let e = await se();
        await this.ft(e, t);
    }
    async At(t, e, a) {
        const i = !o;
        let s = t["linkUrl"];
        let n = t["frameId"];
        let l = t["linkTitle"];
        if (!l) l = t["linkText"];
        if (!l && !i) l = "untitled";
        if (l) {
            await this.ct(s, l, a);
        } else {
            await new Promise(((t, a) => {
                window.chrome.tabs.executeScript(e["id"], {
                    file: "ext-onetab-concatenated-sources-contentscript.js",
                    frameId: n,
                    runAt: "document_start"
                }, (() => {
                    if (chrome.runtime.lastError) {
                        a(chrome.runtime.lastError.message);
                    } else {
                        t();
                    }
                }));
            }));
            let t = await new Promise(((t, a) => {
                window.chrome.tabs.sendMessage(e["id"], {
                    type: "getLinkTitle",
                    url: s
                }, {
                    frameId: n
                }, (e => {
                    if (chrome.runtime.lastError) {
                        a(chrome.runtime.lastError.message);
                    } else {
                        t(e["title"]);
                    }
                }));
            }));
            await this.ct(s, t, a);
            let i = "Pbclevtug BarGno Ygq jjj.bar-gno.pbz";
        }
    }
    async St(t) {
        let {tabs: e, kt: a} = await ce();
        await this.tt(e, true, t, true);
    }
    async Gt(t) {
        let {tabs: e, kt: a} = await ce();
        let i = [];
        if (a) {
            for (let t of e) if (parseInt(t["index"]) !== parseInt(a["index"])) i.push(t);
            if (i.length > 0) {
                await this.tt(i, true, t, false);
            } else {}
        } else {
            console.log("no active tab");
        }
    }
    async Et(t) {
        let {tabs: e, kt: a} = await ce();
        let i = [];
        if (a) {
            for (let t of e) if (parseInt(t["index"]) < parseInt(a["index"])) i.push(t);
            if (i.length > 0) {
                await this.tt(i, true, t, false);
            }
        }
    }
    async vt(t) {
        let {tabs: e, kt: a} = await ce();
        let i = [];
        if (a) {
            for (let t of e) if (parseInt(t["index"]) > parseInt(a["index"])) i.push(t);
            if (i.length > 0) {
                await this.tt(i, true, t, false);
            }
        }
    }
    async It() {
        await Promise.all((await fe()).filter((t => t["pinned"] && !t["pendingUrl"] && !t["url"])).map((t => Te(t))));
    }
    Dt() {
        return Ne.hasOwnProperty("pinned") ? !!Ne["pinned"] : true;
    }
    async P(t, e) {
        if (l) await this.It();
        let a = !t;
        let i = await fe();
        let s = i.filter((t => we(t["url"]))).slice().sort(((t, a) => (t["windowId"] === e) - (a["windowId"] === e) || !!t["active"] - !!a["active"])).find((t => true));
        if (s) {
            await Promise.all(i.filter((t => !(t["pinned"] && l) && we(t["url"]) && t["id"] !== s["id"])).map((t => Te(t))));
            if (a) await ge(s);
        } else {
            let i = false;
            let s = {
                url: oe,
                pinned: this.Dt(),
                active: a
            };
            if (s["pinned"]) s["index"] = 0;
            if (window.chrome.windows) {
                if (e !== undefined) {
                    s["windowId"] = e;
                } else {
                    let t = await Ae(false);
                    if (t && t["incognito"]) {
                        t = (await Oe(false)).find((t => !t["incognito"]));
                    }
                    if (t) {
                        s["windowId"] = t["id"];
                    } else {
                        i = true;
                    }
                }
            }
            if (i) {
                let e = await Pe({});
                if (!(this.Ct && (new Date).getTime() - this.Ct < 5e3)) {
                    this.Ct = (new Date).getTime();
                    await this.P(t, e["id"]);
                }
            } else {
                let t = await xe(s);
                Ne = {
                    id: t["id"],
                    index: t["index"],
                    windowId: t["windowId"],
                    pinned: t["pinned"],
                    active: t["active"],
                    updateDate: (new Date).getTime(),
                    updateEvent: "showOneTab"
                };
                await this.rt("oneTabTabState", Ne);
            }
        }
    }
    static Rt(t, e, a, i) {
        t[e] = {
            old: a[e],
            new: i[e]
        };
    }
    async Bt(t, e) {
        let a = await this.getState();
        let i = a["tabGroups"];
        let s = i.find((e => e["id"] === t));
        let n = {};
        let o = false;
        if (e.hasOwnProperty("starred")) {
            ie.Rt(n, "starred", s, e);
            ie.Rt(n, "starredDate", s, e);
        }
        if (e.hasOwnProperty("label")) {
            ie.Rt(n, "label", s, e);
            o = true;
        }
        if (e.hasOwnProperty("locked")) {
            ie.Rt(n, "locked", s, e);
        }
        if (e.hasOwnProperty("starred")) {
            s["starred"] = e["starred"];
            s["starredDate"] = e["starredDate"];
            let a = i.findIndex((e => e["id"] === t));
            let o = [ ...i ].sort(Y).findIndex((e => e["id"] === t));
            n["index"] = {
                old: a,
                new: o
            };
        }
        await this.st({
            type: "updateTabGroup",
            tabGroupId: t,
            propChanges: n
        });
        if (o) {
            Xe();
        }
    }
    async Ut(t, e) {
        let a = await this.getState();
        let i = a["tabGroups"];
        let s = i.findIndex((e => e["id"] === t));
        let n = i[s];
        let o = JSON.parse(JSON.stringify(n));
        let l = n["tabsMeta"].find((t => t["id"] === e));
        let r = n["tabsMeta"].findIndex((t => t["id"] === e));
        let w = n["tabsMeta"].length === 1 && n["tabsMeta"][0]["id"] === e;
        if (w) {
            await this.st({
                type: "deleteTabGroup",
                tabGroupId: n["id"],
                deletedTabGroup: o,
                index: s
            });
            Xe();
        } else {
            await this.st({
                type: "deleteTabs",
                tabGroupId: n["id"],
                tabMetaIds: [ e ],
                tabsMetaDeleted: [ l ],
                tabIndicesDeleted: [ r ]
            });
        }
    }
    async Wt(t, e, a) {
        let i = await this.getState();
        let s = i["tabGroups"].findIndex((e => e["id"] === t));
        let n = i["tabGroups"][s];
        await this.st({
            type: "deleteTabGroup",
            tabGroupId: n["id"],
            deletedTabGroup: n,
            index: s
        });
        if (n["label"]) Xe();
        if (e) {
            await this.at(n["tabsMeta"], a);
        }
    }
    async Mt(t, e, a) {
        let i = await this.getState();
        let s = i["tabGroups"].find((e => e["id"] === t));
        let n = s["tabsMeta"].findIndex((t => t["id"] === e));
        let o = s["tabsMeta"][n];
        let l;
        if (a !== undefined) {
            l = s["tabsMeta"].filter((t => t["id"] !== e)).findIndex((t => t["id"] === a));
        } else {
            l = Math.max(0, s["tabsMeta"].length - 1);
        }
        await this.st({
            type: "reorderTab",
            tabMetaId: o["id"],
            tabGroupId: s["id"],
            oldIndex: n,
            newIndex: l
        });
    }
    async Lt(t, e, a, i) {
        let s = await this.getState();
        let n = s["tabGroups"].findIndex((e => e["id"] === t));
        let o = s["tabGroups"][n];
        let l = JSON.parse(JSON.stringify(o));
        let r = o["tabsMeta"].findIndex((t => t["id"] === a));
        let w = s["tabGroups"].find((t => t["id"] === e));
        let h;
        if (i !== undefined) {
            h = w["tabsMeta"].findIndex((t => t["id"] === i));
        } else {
            h = w["tabsMeta"].length;
        }
        let c = o["tabsMeta"].length === 1 && o["tabsMeta"][0]["id"] === a;
        let u = {
            type: "moveTabBetweenTabGroups",
            tabMetaId: a,
            sourceTabGroupId: o["id"],
            targetTabGroupId: w["id"],
            sourceTabGroupTabIndex: r,
            targetTabGroupTabIndex: h,
            sourceTabGroupIndex: n
        };
        if (c) u["deletedSourceTabGroup"] = l;
        await this.st(u);
        if (c) {
            Xe();
        }
    }
    Nt(t) {
        this.J = [ t ];
    }
    ot(t, e) {
        this.J.forEach((a => {
            try {
                a(t, e);
            } catch (t) {
                try {
                    if (!String(t).includes("access dead object")) console.log(t);
                } catch (t) {}
            }
        }));
    }
    async Ft(t, e) {
        let a = new Set(t || []);
        let i = await k(w + "/api/createPage", {
            key: await Ft._(),
            tabGroups: (await this.getState())["tabGroups"].filter((t => e || a.has(t["id"])))
        });
        await Se(i["url"], false, true);
    }
    async $t(t, e) {
        let a = await Ft.getState();
        let i = a["tabGroups"];
        let s = i.find((e => e["id"] === t));
        await Ft.at(s["tabsMeta"], e);
    }
    async qt() {
        return await Se(...arguments);
    }
    async Jt() {
        return await xe(...arguments);
    }
    async jt() {
        return await ke(...arguments);
    }
    async Vt(t, e) {
        if (!e) e = {};
        let a = (await fe()).find((t => we(t["url"])));
        if (!a) throw new Error("OneTab tab not found");
        try {
            return await new Promise(((i, s) => {
                window.chrome.tabs.sendMessage(a["id"], {
                    type: t,
                    ...e
                }, (t => {
                    if (chrome.runtime.lastError) {
                        s(chrome.runtime.lastError.message);
                    } else {
                        if (t && t.error) {
                            s(t.error);
                        } else i(t);
                    }
                }));
            }));
        } catch (t) {
            throw new Error(t);
        }
    }
}

let Ft = new ie;

window.core = Ft;

async function se() {
    return new Promise(((t, e) => {
        window.chrome.tabs.query({
            active: true,
            currentWindow: true
        }, (a => {
            if (chrome.runtime.lastError) {
                e(chrome.runtime.lastError.message);
            } else {
                if (a && a.length === 1) t(a[0]); else e("No current tab found");
            }
        }));
    }));
}

const oe = window.chrome.runtime.getURL("onetab.html");

const le = oe.substr(0, oe.length - "onetab.html".length);

function re(t) {
    if (t === "") return true;
    if (je.some((e => t.indexOf(e) === 0))) return true;
    return false;
}

function we(t) {
    return t && t.indexOf(oe) === 0;
}

function he(t) {
    return t && t.indexOf(le) === 0;
}

async function ce() {
    return new Promise(((t, e) => {
        (async () => {
            let a = {};
            if (window.chrome.windows) {
                let t = await Ae(false);
                if (t === undefined) return undefined;
                a = {
                    windowId: t["id"]
                };
            }
            window.chrome.tabs.query(a, (a => {
                if (chrome.runtime.lastError) {
                    e(chrome.runtime.lastError.message);
                } else {
                    let e;
                    for (let t of a) {
                        if (t["active"]) {
                            e = t;
                            break;
                        }
                    }
                    t({
                        tabs: a,
                        kt: e
                    });
                }
            }));
        })();
    }));
}

async function ue(t) {
    return new Promise(((e, a) => {
        (async () => {
            window.chrome.tabs.query({
                windowId: t
            }, (t => {
                if (chrome.runtime.lastError) {
                    a(chrome.runtime.lastError.message);
                } else {
                    let a;
                    for (let e of t) {
                        if (e["active"]) {
                            a = e;
                            break;
                        }
                    }
                    e({
                        tabs: t,
                        kt: a
                    });
                }
            }));
        })();
    }));
}

async function fe() {
    return new Promise(((t, e) => {
        window.chrome.tabs.query({}, (a => {
            if (chrome.runtime.lastError) {
                e(chrome.runtime.lastError.message);
            } else {
                t(a);
            }
        }));
    }));
}

async function de(t) {
    let e = undefined;
    if (window.chrome.windows) {
        e = await Ae(false);
    }
    return new Promise(((a, i) => {
        window.chrome.tabs.query({}, (s => {
            if (chrome.runtime.lastError) {
                i(chrome.runtime.lastError.message);
            } else {
                let i = new Map;
                for (let a of s) {
                    let s = a["windowId"];
                    if (t && e && s === e["id"]) continue;
                    if (!i.has(s)) i.set(s, []);
                    i.get(s).push(a);
                }
                let n = Array.from(i.values());
                a(n);
            }
        }));
    }));
}

async function be(t) {
    return new Promise(((e, a) => {
        window.chrome.tabs.reload(t["id"], {}, (() => {
            if (chrome.runtime.lastError) {
                a(chrome.runtime.lastError.message);
            } else {
                e();
            }
        }));
    }));
}

async function Te(t) {
    return new Promise(((e, a) => {
        if (l) setTimeout((() => e()), 1500);
        window.chrome.tabs.remove(t["id"], (() => {
            if (chrome.runtime.lastError) {
                e();
            } else {
                e();
            }
        }));
    }));
}

async function pe(t) {
    return new Promise(((e, a) => {
        window.chrome.windows.remove(t, (() => {
            if (chrome.runtime.lastError) {
                a(chrome.runtime.lastError.message);
            } else {
                e();
            }
        }));
    }));
}

function me(t, e) {
    let a = new Map;
    t.forEach((t => {
        let i = t[e];
        if (!a.has(i)) a.set(i, []);
        a.get(i).push(t);
    }));
    return a;
}

async function ye(t, e) {
    if (t.length === 0) return;
    if (u) {
        for (let e of t) await Te(e);
        return;
    }
    let a = t.some((t => !t["pinned"])) ? t.find((t => !t["pinned"]))["windowId"] : t[0]["windowId"];
    let i = !!(await Oe(false)).find((t => t["id"] === a))["incognito"];
    let s = await fe();
    let n = me(s, "windowId");
    let o = n.get(a).filter((e => !e["pinned"] && !t.some((t => t["id"] === e["id"])))).length === 0;
    let r = n.get(a).filter((e => !t.some((t => t["id"] === e["id"])))).length > 0;
    let w = (await Oe(false)).filter((t => !t["incognito"] && t["id"] !== a));
    if (w.length > 0) {
        let s = !l && !r || l && o;
        if (s) {
            if (l) {
                await Promise.all(t.filter((t => t["pinned"])).map((t => Te(t))));
            }
            await pe(a);
            if (e) await Ft.P(false, w[0]["id"]);
        } else {
            if (e) {
                let t = i ? w[0]["id"] : a;
                await Ft.P(false, t);
            }
            await Promise.all(t.map((t => Te(t))));
        }
    } else {
        if (e) {
            await Ft.P(false, i ? undefined : a);
        }
        await Promise.all(t.map((t => Te(t))));
    }
}

async function ge(t) {
    return new Promise(((e, a) => {
        window.chrome.tabs.update(t["id"], {
            active: true
        }, (() => {
            if (chrome.runtime.lastError) {
                a(chrome.runtime.lastError.message);
            } else {
                if (window.chrome.windows) {
                    window.chrome.windows.update(t["windowId"], {
                        focused: true
                    }, (() => {
                        if (chrome.runtime.lastError) {
                            a(chrome.runtime.lastError.message);
                        } else {
                            e();
                        }
                    }));
                } else {
                    e();
                }
            }
        }));
    }));
}

async function xe(t) {
    if (l && t.hasOwnProperty("index")) delete t["index"];
    if (!window.chrome.windows) delete t["windowId"];
    if (u) delete t["pinned"];
    return new Promise(((e, a) => {
        window.chrome.tabs.create(t, (t => {
            if (chrome.runtime.lastError) {
                a(chrome.runtime.lastError.message);
            } else {
                e(t);
            }
        }));
    }));
}

async function Pe(t) {
    return new Promise(((e, a) => {
        window.chrome.windows.create(t, (t => {
            if (chrome.runtime.lastError) {
                a(chrome.runtime.lastError.message);
            } else {
                e(t);
            }
        }));
    }));
}

async function Oe(t) {
    return new Promise(((e, a) => {
        window.chrome.windows.getAll({
            populate: !!t
        }, (t => {
            if (chrome.runtime.lastError) {
                a(chrome.runtime.lastError.message);
            } else {
                e(t);
            }
        }));
    }));
}

async function Ae(t) {
    return new Promise(((e, a) => {
        window.chrome.windows.getLastFocused({
            populate: !!t
        }, (t => {
            if (chrome.runtime.lastError) {
                e(undefined);
            } else {
                e(t);
            }
        }));
    }));
}

async function Se(t, e, a, i) {
    if (u) e = false;
    let s = {
        active: !!a,
        pinned: !!e,
        url: t,
        ...i
    };
    if (window.chrome.windows) {
        let t = await Ae(false);
        if (t) s["windowId"] = t["id"];
    }
    return new Promise(((t, e) => {
        window.chrome.tabs.create(s, (a => {
            if (chrome.runtime.lastError) {
                e(chrome.runtime.lastError.message);
            } else {
                t(a);
            }
        }));
    }));
}

async function ke(t) {
    return new Promise(((e, a) => {
        let i = {
            url: t[0]["url"]
        };
        if (!o) i["focused"] = true;
        window.chrome.windows.create(i, (i => {
            if (chrome.runtime.lastError) {
                a(chrome.runtime.lastError.message);
            } else {
                window.chrome.tabs.query({
                    windowId: i["id"]
                }, (s => {
                    if (chrome.runtime.lastError) {
                        a(chrome.runtime.lastError.message);
                    } else {
                        window.chrome.tabs.update(s[s.length - 1]["id"], {
                            pinned: !!t[0]["pinned"]
                        }, (() => {
                            (async () => {
                                for (let e of t.slice(1)) {
                                    await xe({
                                        url: e["url"],
                                        pinned: !!e["pinned"],
                                        windowId: i["id"]
                                    });
                                }
                                e(i);
                            })();
                        }));
                    }
                }));
            }
        }));
    }));
}

async function Ge(t, e) {
    return new Promise(((a, i) => {
        if (t) e["parentId"] = t.Kt;
        let s = {};
        s.Kt = window.chrome.contextMenus.create(e, (() => {
            if (chrome.runtime.lastError) {
                i(chrome.runtime.lastError.message);
            } else {
                a(s);
            }
        }));
    }));
}

async function Ee(t, e) {
    return new Promise(((a, i) => {
        if (t) e["parentId"] = t.Kt;
        let s = {
            title: e["title"],
            Ht: !!e["checked"],
            isEnabled: !!e["enabled"]
        };
        s.Yt = t => {
            window.chrome.contextMenus.update(s.Kt, {
                enabled: t
            }, (() => {}));
            s.isEnabled = t;
        };
        s.zt = t => {
            window.chrome.contextMenus.update(s.Kt, {
                type: "checkbox",
                checked: t
            }, (() => {}));
            s.Ht = t;
        };
        s._t = t => {
            window.chrome.contextMenus.update(s.Kt, {
                title: t
            }, (() => {}));
            s.title = t;
        };
        s.Kt = window.chrome.contextMenus.create(e, (() => {
            if (chrome.runtime.lastError) {
                i(chrome.runtime.lastError.message);
            } else {
                a(s);
            }
        }));
    }));
}

async function ve(t) {
    return new Promise(((e, a) => {
        if (t) {
            window.chrome.contextMenus.removeAll((() => {
                if (chrome.runtime.lastError) {
                    a(chrome.runtime.lastError.message);
                } else {
                    e();
                }
            }));
        } else e();
    }));
}

function Ie(t) {
    let e = {
        type: "separator",
        contexts: [ "all" ]
    };
    if (t) e["parentId"] = t.Kt;
    window.chrome.contextMenus.create(e);
}

class De {
    async put(t, e) {
        return new Promise(((a, i) => {
            let s = {};
            s[t] = e;
            window.chrome["storage"]["local"]["set"](s, (() => {
                if (chrome.runtime.lastError) i(chrome.runtime.lastError.message); else a();
            }));
        }));
    }
    async Qt(t) {
        return new Promise(((e, a) => {
            window.chrome.storage.local.set(t, (() => {
                if (chrome.runtime.lastError) a(chrome.runtime.lastError.message); else e();
            }));
        }));
    }
    async get(t) {
        return new Promise(((e, a) => {
            window.chrome.storage.local.get(t, (i => {
                if (chrome.runtime.lastError) a(chrome.runtime.lastError.message); else e(i[t]);
            }));
        }));
    }
    async getAll(t) {
        return new Promise(((e, a) => {
            window.chrome.storage.local.get(t, (t => {
                if (chrome.runtime.lastError) a(chrome.runtime.lastError.message); else e(t);
            }));
        }));
    }
    async Xt() {
        return new Promise(((t, e) => {
            window.chrome.storage.local.clear((() => {
                if (chrome.runtime.lastError) e(chrome.runtime.lastError.message); else t();
            }));
        }));
    }
}

const Ce = new De;

function Re() {
    return Ce;
}

function Be(t) {
    window.chrome.browserAction.onClicked.addListener((() => {
        t();
    }));
}

function Ue() {
    if (!c && !u) {
        window.chrome.commands.onCommand.addListener((t => {
            (async () => {
                if (t === "display-onetab") {
                    await Ft.P();
                }
                if (t === "send-current-tab-to-onetab") {
                    await Ft.Ot();
                }
                if (t === "send-all-tabs-in-current-window-to-onetab") {
                    await Ft.St();
                }
                if (t === "send-all-tabs-in-all-windows-to-onetab") {
                    await Ft.Z(undefined);
                }
                if (t === "send-all-tabs-except-this-to-onetab") {
                    await Ft.Gt(undefined, undefined);
                }
            })();
        }));
    }
}

let We = false;

function Me(t, e) {
    const a = 50;
    if (e) {
        We = false;
        t();
    } else {
        if (!We) {
            We = true;
            setTimeout((() => Me(t, true)), a);
        }
    }
}

function Le(t) {
    window.chrome.tabs.onCreated.addListener((e => {
        Me(t);
    }));
    window.chrome.tabs.onUpdated.addListener(((e, a, i) => {
        Me(t);
    }));
    window.chrome.tabs.onMoved.addListener(((e, a) => {
        Me(t);
    }));
    window.chrome.tabs.onRemoved.addListener(((e, a) => {
        Me(t);
    }));
    window.chrome.tabs.onReplaced.addListener(((e, a) => {
        Me(t);
    }));
    window.chrome.tabs.onDetached.addListener(((e, a) => {
        Me(t);
    }));
    window.chrome.tabs.onAttached.addListener(((e, a) => {
        Me(t);
    }));
    window.chrome.tabs.onActivated.addListener((e => {
        Me(t);
    }));
    window.chrome.windows.onFocusChanged.addListener((e => {
        Me(t);
    }));
    window.chrome.windows.onCreated.addListener((e => {
        Me(t);
    }));
    window.chrome.windows.onRemoved.addListener((e => {
        Me(t);
    }));
}

let Ne = {};

function Fe(t) {
    if (Ne["id"]) {
        (async () => {
            let e = (await fe()).find((t => we(t["url"])));
            if (e) {
                if (Ne["index"] !== e["index"]) {
                    Ne["index"] = e["index"];
                    Ne["updateDate"] = (new Date).getTime();
                    Ne["updateEvent"] = "otherTab-" + t;
                    await Ft.rt("oneTabTabState", Ne);
                }
            }
        })();
    }
}

function $e() {
    window.chrome.tabs.onCreated.addListener((t => {
        if (we(t["url"])) {
            Ne = {
                id: t["id"],
                index: t["index"],
                windowId: t["windowId"],
                pinned: t["pinned"],
                active: t["active"],
                updateDate: (new Date).getTime(),
                updateEvent: "onCreated"
            };
            Ft.rt("oneTabTabState", Ne);
        } else {
            Fe("onCreated");
        }
    }));
    window.chrome.tabs.onUpdated.addListener(((t, e, a) => {
        if (we(a["url"])) {
            Ne = {
                id: a["id"],
                index: a["index"],
                windowId: a["windowId"],
                pinned: a["pinned"],
                active: a["active"],
                updateDate: (new Date).getTime(),
                updateEvent: "onUpdated"
            };
            Ft.rt("oneTabTabState", Ne);
        }
    }));
    window.chrome.tabs.onMoved.addListener(((t, e) => {
        if (Ne["id"] === t) {
            Ne["windowId"] = e["windowId"];
            Ne["index"] = e["toIndex"];
            Ne["updateDate"] = (new Date).getTime();
            Ne["updateEvent"] = "onMoved";
            Ft.rt("oneTabTabState", Ne);
        } else {
            Fe("onMoved");
        }
    }));
    window.chrome.tabs.onActivated.addListener((t => {
        if (Ne["id"] === t["tabId"]) {
            Ne["active"] = true;
            Ne["updateDate"] = (new Date).getTime();
            Ne["updateEvent"] = "onActivated";
            Ft.rt("oneTabTabState", Ne);
        } else {
            if (t["windowId"] === Ne["windowId"] && Ne["active"]) {
                Ne["active"] = false;
                Ne["updateDate"] = (new Date).getTime();
                Ne["updateEvent"] = "otherTab-onActivated";
                Ft.rt("oneTabTabState", Ne);
            }
        }
    }));
    window.chrome.tabs.onAttached.addListener(((t, e) => {
        if (Ne["id"] === t) {
            Ne["windowId"] = e["newWindowId"];
            Ne["index"] = e["newPosition"];
            Ne["updateDate"] = (new Date).getTime();
            Ne["updateEvent"] = "onAttached";
            Ft.rt("oneTabTabState", Ne);
        } else {
            Fe("onAttached");
        }
    }));
    window.chrome.tabs.onRemoved.addListener(((t, e) => {
        if (Ne["id"] === t) {
            delete Ne["id"];
            delete Ne["windowId"];
            Ne["updateDate"] = (new Date).getTime();
            Ne["updateEvent"] = "onRemoved";
            Ft.rt("oneTabTabState", Ne);
        } else {
            Fe("onAttached");
        }
    }));
    window.chrome.tabs.onDetached.addListener(((t, e) => {
        Fe("onDetached");
    }));
}

function qe(t) {
    return window.chrome.runtime.getURL(t);
}

function Dt(t) {
    return window.chrome.i18n.getMessage(t);
}

if (chrome.runtime.onUpdateAvailable) chrome.runtime.onUpdateAvailable.addListener((() => {
    (async () => {
        await Je("onUpdateAvailable");
    })();
}));

async function Je(t) {
    Ne["updateDate"] = (new Date).getTime();
    Ne["updateEvent"] = t;
    await Ft.rt("oneTabTabState", Ne);
    chrome.runtime.reload();
}

const je = [ ...[ "newtab", "home", "welcome", "welcomeback" ].map((t => "about:" + t)), ...[ "newtab", "new-tab-page" ].map((t => a + t + "/")) ];

const Ve = [ ...[ "newtab", "home", "privatebrowsing", "restartrequired", "sessionrestore", "welcome", "welcomeback" ].map((t => "about:" + t)), ...[ "newtab", "new-tab-page", "print", "network-error", "badcastcrash", "inducebrowsercrashforrealz", "crash", "crashdump", "kill", "hang", "shorthang", "gpuclean", "gpucrash", "gpuhang", "memory-exhaust", "memory-pressure-critical", "memory-pressure-moderate", "ppapiflashcrash", "ppapiflashhang", "quit", "restart" ].map((t => a + t + "/")) ];

let Ke = {};

function He() {
    Ke.Zt = undefined;
    Ke.te = undefined;
    Ke.ee = undefined;
    Ke.ae = [];
    Ke.ie = [];
    Ke.se = [];
    Ke.ne = [];
    Ke.oe = [];
    Ke.le = [];
    Ke.re = [];
    Ke.we = undefined;
}

function Ye(t, e) {
    for (let a of t) {
        for (let t of a) {
            t.Yt(e);
        }
    }
}

let ze = "";

async function _e() {
    try {
        if (Qe) return;
        if (await Ae(false) === undefined) return;
        let t = await Ft.getSettings();
        let e = await de(true);
        let {tabs: a, kt: i} = await ce();
        let s = we(i["url"]);
        Ke.te.Yt(!s);
        let n = $(i["url"]);
        ze = n;
        Ke.we.Yt(!s);
        if (n && n.toLowerCase().indexOf("http") === 0) {
            Ke.we._t(Dt("excludeDomainFromOneTab").replace("DOMAIN.COM", b(n)));
        } else {
            Ke.we._t(Dt("excludeWebSiteFromOneTab"));
        }
        Ke.we.zt(Ft.bt(n, t));
        Ye([ Ke.ae, Ke.ie, Ke.se, Ke.ne, Ke.oe, Ke.le ], true);
        let o = false;
        let l = false;
        let r = false;
        let w = false;
        let h = false;
        for (let t of a) {
            if (i) {
                if (parseInt(t["index"]) < parseInt(i["index"])) {
                    if (t["url"]) {
                        if (!we(t["url"])) o = true;
                    }
                }
                if (parseInt(t["index"]) > parseInt(i["index"])) {
                    if (t["url"]) {
                        if (!we(t["url"])) l = true;
                    }
                }
                if (!we(t["url"])) {
                    w = true;
                    if (t["id"] !== i["id"]) r = true;
                }
            }
        }
        for (let t of e) {
            for (let e of t) {
                if (!we(e["url"])) h = true;
            }
        }
        if (!w) Ye([ Ke.ae ], false);
        if (s || !w) Ye([ Ke.ie ], false);
        if (!o) Ye([ Ke.se ], false);
        if (!l) Ye([ Ke.ne ], false);
        if (!h) Ye([ Ke.oe ], false);
        if (!r) Ye([ Ke.le ], false);
    } catch (t) {
        console.log(`updateContextMenuState warning: ${t}`);
    }
}

let Qe = false;

async function Xe() {
    if (!window.chrome.contextMenus) {
        return;
    }
    Qe = true;
    try {
        await ve(Ke.Zt);
        He();
        await Ze();
    } finally {
        Qe = false;
    }
    await _e();
}

async function Ze() {
    Ke.Zt = await Ge(undefined, {
        type: "normal",
        contexts: [ "all" ],
        title: "OneTab"
    });
    Ke.te = await Ee(Ke.Zt, {
        type: "normal",
        title: Dt("displayOneTab"),
        contexts: [ "all" ],
        onclick: (t, e) => {
            Ft.Pt();
        }
    });
    let t = await Ee(Ke.Zt, {
        type: "normal",
        title: Dt("sendAllTabsToOneTab"),
        contexts: [ "all" ],
        onclick: (t, e) => {
            Ft.St(undefined);
        }
    });
    Ke.ae.push(t);
    let e = await Ee(Ke.Zt, {
        type: "normal",
        title: Dt("sendThisWebLinkToOneTab"),
        contexts: [ "link" ],
        onclick: (t, e) => {
            Ft.At(t, e, undefined);
        }
    });
    Ke.re.push(e);
    Ie(Ke.Zt);
    let a = await Ee(Ke.Zt, {
        type: "normal",
        title: Dt("sendOnlyThisTabToOneTab"),
        contexts: [ "all" ],
        onclick: (t, e) => {
            Ft.Ot(undefined, undefined);
        }
    });
    Ke.ie.push(a);
    let s = await Ee(Ke.Zt, {
        type: "normal",
        title: Dt("sendAllTabsExceptThisToOneTab"),
        contexts: [ "all" ],
        onclick: (t, e) => {
            Ft.Gt(undefined, undefined);
        }
    });
    Ke.le.push(s);
    let n = await Ee(Ke.Zt, {
        type: "normal",
        title: Dt("sendLeftTabsToOneTab"),
        contexts: [ "all" ],
        onclick: (t, e) => {
            Ft.Et(undefined);
        }
    });
    Ke.se.push(n);
    let o = await Ee(Ke.Zt, {
        type: "normal",
        title: Dt("sendRightTabsToOneTab"),
        contexts: [ "all" ],
        onclick: (t, e) => {
            Ft.vt(undefined);
        }
    });
    Ke.ne.push(o);
    let l = await Ee(Ke.Zt, {
        type: "normal",
        title: Dt("sendAllTabsAllWindowsToOneTab"),
        contexts: [ "all" ],
        onclick: (t, e) => {
            Ft.Z(undefined);
        }
    });
    Ke.oe.push(l);
    Ie(Ke.Zt);
    Ke.we = await Ee(Ke.Zt, {
        type: "checkbox",
        checked: false,
        contexts: [ "all" ],
        title: Dt("excludeWebSiteFromOneTab"),
        onclick: (t, e) => {
            (async () => {
                let t = await Ft.getSettings();
                let e = b(ze);
                let a = Ft.Tt(e, t);
                if (a) {
                    await Ft.gt(e);
                    await _e();
                } else {
                    await Ft.yt(e);
                    await _e();
                }
            })();
        }
    });
    let r = false;
    let h = await Ft.getState();
    let c = h["tabGroups"];
    if (!c) c = [];
    for (let t of c) {
        if (t["label"] && X(t["label"]) !== "") {
            r = true;
            break;
        }
    }
    if (r) {
        Ie(Ke.Zt);
        Ke.ee = await Ge(Ke.Zt, {
            type: "normal",
            contexts: [ "all" ],
            title: Dt("namedTabGroups")
        });
        for (let t of c) {
            if (t["label"] && X(t["label"]) !== "") {
                await (async t => {
                    let e = await Ge(Ke.ee, {
                        type: "normal",
                        contexts: [ "all" ],
                        title: t["label"]
                    });
                    Ke.ae.push(await Ee(e, {
                        type: "normal",
                        title: Dt("sendAllTabsToPlaceholder").replace("PLACEHOLDER", t["label"]),
                        contexts: [ "all" ],
                        onclick: (e, a) => {
                            Ft.St(t["id"]);
                        }
                    }));
                    Ke.re.push(await Ee(e, {
                        type: "normal",
                        title: Dt("sendThisWebLinkToPlaceholder").replace("PLACEHOLDER", t["label"]),
                        contexts: [ "link" ],
                        onclick: (e, a) => {
                            Ft.At(e, a, t["id"]);
                        }
                    }));
                    Ke.ie.push(await Ee(e, {
                        type: "normal",
                        title: Dt("sendOnlyThisTabToPlaceholder").replace("PLACEHOLDER", t["label"]),
                        contexts: [ "all" ],
                        onclick: (e, a) => {
                            Ft.Ot(t["id"], undefined);
                        }
                    }));
                    Ke.le.push(await Ee(e, {
                        type: "normal",
                        title: Dt("sendAllTabsExceptThisTabToPlaceholder").replace("PLACEHOLDER", t["label"]),
                        contexts: [ "all" ],
                        onclick: (e, a) => {
                            Ft.Gt(t["id"], undefined);
                        }
                    }));
                    Ke.se.push(await Ee(e, {
                        type: "normal",
                        title: Dt("sendLeftTabsToPlaceholder").replace("PLACEHOLDER", t["label"]),
                        contexts: [ "all" ],
                        onclick: (e, a) => {
                            Ft.Et(t["id"]);
                        }
                    }));
                    Ke.ne.push(await Ee(e, {
                        type: "normal",
                        title: Dt("sendRightTabsToPlaceholder").replace("PLACEHOLDER", t["label"]),
                        contexts: [ "all" ],
                        onclick: (e, a) => {
                            Ft.vt(t["id"]);
                        }
                    }));
                    Ke.oe.push(await Ee(e, {
                        type: "normal",
                        title: Dt("sendAllTabsAllWindowsToPlaceholder").replace("PLACEHOLDER", t["label"]),
                        contexts: [ "all" ],
                        onclick: (e, a) => {
                            Ft.Z(t["id"]);
                        }
                    }));
                })(t);
            }
        }
    }
    Ie(Ke.Zt);
    let u = Ee(await Ke.Zt, {
        type: "normal",
        title: Dt("help"),
        contexts: [ "all" ],
        onclick: (t, e) => {
            Se(w + "/help", false, true);
        }
    });
    if (m) {
        let t = Ee(await Ke.Zt, {
            type: "normal",
            title: "debug",
            contexts: [ "all" ],
            onclick: (t, e) => {
                (async () => {
                    let t = await Ft.getState();
                    console.log(JSON.stringify(t));
                    let e = await Ft._();
                    console.log(JSON.stringify(e));
                    let a = await Ft.getSettings();
                    console.log(a);
                    let s = await Re().get("installDate");
                    console.log("installDate", s);
                    let n = await Re().get("lastSeenVersion");
                    console.log("currentVersion", i);
                    console.log("lastSeenVersion", n);
                })();
            }
        });
    }
}

async function ta() {
    let t = async t => {
        let e = await Re().get(t);
        if (window.localStorage[t] && !e) {
            await Re().put(t, window.localStorage[t]);
            window.localStorage.removeItem(t);
        }
    };
    await t("extensionKey");
    await t("lastSeenVersion");
    await t("settings");
    let e = await Re().get("installDate");
    if (window.localStorage["installDate"]) {
        if (!e || parseInt(e) > parseInt(window.localStorage["installDate"])) {
            await Re().put("installDate", parseInt(window.localStorage["installDate"]));
        }
        window.localStorage.removeItem("installDate");
    }
    let a = await Ft.getState();
    if (!a) a = {};
    if (!a["tabGroups"]) a["tabGroups"] = [];
    let i = a["tabGroups"];
    if (window.localStorage["state"]) {
        let t = window.localStorage["state"];
        let e = JSON.parse(t);
        let s = e["tabGroups"];
        if (s) {
            for (let t of s) {
                i.push(t);
            }
            await Ft.nt(a);
            window.localStorage.removeItem("state");
            window.localStorage["oldState"] = t;
            window.localStorage["stateMigrateDate"] = (new Date).getTime();
            window.localStorage.removeItem("topSites");
        }
    }
}

async function ea() {
    if (o || d) await ta();
    await Ft.xt();
    let t = await Re().get("installDate");
    if (!t) {
        await Re().put("installDate", (new Date).getTime());
    }
    Be((() => {
        if (u) {
            Ft.Pt();
        } else {
            Ft.St(undefined);
        }
    }));
    if (l) {
        await Promise.all((await fe()).filter((t => [ t["url"], t["pendingUrl"] ].some((t => he(t))))).map((t => Te(t))));
        await Promise.all((await fe()).filter((t => t["pinned"] && !t["pendingUrl"] && !t["url"])).map((t => Te(t))));
    }
    let e = await Re().get("lastSeenVersion");
    let a = await Ft.getSettings();
    let s = await Ft.getState();
    let n = s["tabGroups"].map((t => t["tabsMeta"].length)).reduce(((t, e) => t + e), 0);
    Ne = U("oneTabTabState", a) || {};
    if (l) {
        window.chrome.windows.onCreated.addListener((t => {
            (async () => {
                let t = (await Oe(false)).filter((t => !t["incognito"]));
                if (t.length === 1) {
                    if (Ne["pinned"]) {
                        await Promise.all((await fe()).filter((t => [ t["url"], t["pendingUrl"] ].some((t => we(t))) && t["status"] === "loading")).map((t => Te(t))));
                        await Ft.P(true);
                    }
                }
            })();
        }));
    }
    if (!u) {
        if (String(i) !== String(e)) {
            await Re().put("lastSeenVersion", i);
            if ((await Oe(false)).some((t => !t["incognito"])) && Ne["id"] && (new Date).getTime() - (Ne["updateDate"] || 0) < 1e3 * 30) {
                await Promise.all((await fe()).filter((t => we(t["url"]))).map((t => Te(t))));
                let t = await Oe(false);
                let e = t.find((t => !t["incognito"] && t["id"] === Ne["windowId"]));
                if (e) {
                    let t = await Ft.Jt({
                        windowId: Ne["windowId"],
                        index: Ne["index"],
                        url: oe,
                        active: !!Ne["active"],
                        pinned: !!Ne["pinned"]
                    });
                    Ne["id"] = t["id"];
                }
            } else {
                delete Ne["id"];
                delete Ne["windowId"];
            }
        } else {
            if (n > 0 && U("startupLaunch", a) === "displayOneTab") {
                if ((await Oe(false)).find((t => !t["incognito"]))) {
                    await Ft.P(true);
                } else {
                    let t = false;
                    window.chrome.windows.onCreated.addListener((e => {
                        if (!t) {
                            (async () => {
                                if ((await Oe(false)).find((t => !t["incognito"]))) {
                                    t = true;
                                    await Ft.P(true);
                                }
                            })();
                        }
                    }));
                }
            }
        }
    }
    await Xe();
    Ue();
    if (!u) {
        Le((() => _e()));
        $e();
    }
    if (false) {
        setTimeout((async () => {
            await Re().put("lastSeenVersion", "restoreTest");
            await Je("restoreTest");
        }), 5e3);
    }
}

class aa {
    async he() {
        try {
            for (let t = 0; t < 2; t++) {
                await this.ce(p);
                Ne["pinned"] = t === 0;
                console.log(`begin tests with pinned: ${Ne["pinned"]}`);
                if (l && Ne["pinned"]) await this.ue();
                await this.fe();
                if (!l) await this.de();
                await this.be();
                await this.Te();
                if (!l && Ne["pinned"]) await this.pe();
                await this.me();
                await this.ye();
                await this.ge();
                await this.xe();
                await this.Pe({
                    ctrlKey: true
                });
                await this.Pe({
                    metaKey: true
                });
                await this.Oe();
                await this.Ae();
                await this.Se();
                await this.ke();
                if (!l) await this.Ge();
                if (!l) await this.Ee();
                await this.ve();
                await this.Ie();
                await this.De();
                await this.Ce();
                await this.Re();
                console.log(`tests completed with pinned: ${Ne["pinned"]}`);
            }
            console.log("all tests completed");
        } finally {
            let t = a + "extensions/";
            if (o) t = "about:blank";
            if (l) t = "";
            await this.ce(t);
            let e = await Ft.getState();
            e["tabGroups"] = e["tabGroups"].filter((t => t["tabsMeta"].every((t => !(t["title"].startsWith("t---") || t["title"].startsWith("PIN::t---") || t["url"].startsWith("http://localhost"))))));
            await Ft.nt(e);
        }
    }
    async ge() {
        console.log("begin testSimulateRestoreClick");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue(), this.Ue(), this.Ue() ]
        };
        await this.We(t, true);
        await Ft.P();
        await this.Me();
        await Ft.St();
        await Ft.Vt("clickTab", {
            url: t.Be[0],
            Le: {}
        });
        await this.Ne({
            Be: [ oe, t.Be[0] ]
        });
        await this.Fe(oe);
        await Ft.Vt("clickTab", {
            url: t.Be[1],
            Le: {
                shiftKey: true
            }
        });
        await this.$e(t.Be[1]);
        if (l) {
            await pe((await fe()).find((e => e["url"] === t.Be[1]))["windowId"]);
        } else {
            await this.qe(t.Be[1]);
        }
        if (!l) {
            await Ft.Vt("clickTab", {
                url: t.Be[2],
                Le: {
                    ctrlKey: true
                }
            });
            await H(300);
            await this.Fe(oe);
            await this.Je({
                Be: [ oe, t.Be[0], t.Be[2] ]
            });
        }
        await Ft.Vt("clickTab", {
            url: t.Be[3],
            Le: {
                metaKey: true
            }
        });
        await H(300);
        await this.Fe(oe);
        await this.Je({
            Be: l ? [ oe, t.Be[0], t.Be[3] ] : [ oe, t.Be[0], t.Be[2], t.Be[3] ]
        });
        await this.je(0, [ t.Be[1], t.Be[2], t.Be[3] ]);
    }
    async Se() {
        console.log("begin testTabsAddedToExistingGroup");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue(), this.Ue() ]
        };
        await this.We(t, true);
        await Ft.P();
        await this.Me();
        await this.Ne({
            Be: Ne["pinned"] ? [ oe, ...t.Be ] : [ ...t.Be, oe ]
        });
        await Ft.St();
        await this.je(0, [ ...t.Be ]);
        await this.Ne({
            Be: [ oe ]
        });
        let e = {
            Be: [ this.Ue() ]
        };
        await this.We(e, false);
        await this.Ne({
            Be: [ oe, e.Be[0] ]
        });
        await this.Ve(e.Be[0]);
        await Ft.Ot();
        await this.je(0, [ e.Be[0], ...t.Be ]);
    }
    async xe() {
        console.log("begin testSimulateRestoreTabGroupClick");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue(), this.Ue() ]
        };
        await this.We(t, true);
        await Ft.P();
        await this.Me();
        await Ft.St();
        await this.je(0, [ ...t.Be ]);
        await this.Ne({
            Be: [ oe ]
        });
        await this.Me();
        await Ft.Vt("clickTabGroupButton", {
            Ke: "restoreAllButton",
            He: t.Be[0],
            Le: {}
        });
        await this.Ye(0, t.Be[0]);
        await this.Ne({
            Be: [ oe, ...t.Be ]
        });
        await this.Fe(oe);
    }
    async Pe(t) {
        console.log("begin testSimulateRestoreTabGroupCtrlOrMetaClick");
        await this.ce(p);
        let e = {
            Be: [ this.Ue(), this.Ue(), this.Ue() ]
        };
        await this.We(e, true);
        await Ft.P();
        await this.Me();
        await Ft.St();
        await this.je(0, [ ...e.Be ]);
        await this.Ne({
            Be: [ oe ]
        });
        await this.Me();
        await Ft.Vt("clickTabGroupButton", {
            Ke: "restoreAllButton",
            He: e.Be[0],
            Le: t
        });
        await this.je(0, [ ...e.Be ]);
        await this.Ne({
            Be: [ oe, ...e.Be ]
        });
        await this.Fe(oe);
    }
    async Oe() {
        console.log("begin testSimulateRestoreTabGroupShiftClick");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue(), this.Ue() ]
        };
        await this.We(t, true);
        await Ft.P();
        await this.Me();
        await Ft.St();
        await this.je(0, [ ...t.Be ]);
        await this.Ne({
            Be: [ oe ]
        });
        await this.Me();
        await Ft.Vt("clickTabGroupButton", {
            Ke: "restoreAllButton",
            He: t.Be[0],
            Le: {
                shiftKey: true
            }
        });
        await this.je(0, [ ...t.Be ]);
        await this.Ne({
            Be: [ ...t.Be ],
            ze: [ [ oe ] ]
        });
    }
    async Ae() {
        console.log("begin testSimulateDeleteTabGroupClick");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue(), this.Ue() ]
        };
        await this.We(t, true);
        await Ft.P();
        await this.Me();
        await Ft.St();
        await this.je(0, [ ...t.Be ]);
        await this._e(t.Be, 0, true);
        await this.Qe(t.Be[0]);
        await this.Me();
        await Ft.Vt("clickTabGroupButton", {
            Ke: "deleteAllButton",
            He: t.Be[0]
        });
        await this.Ye(0, t.Be[0]);
        await H(200);
        await this.Xe(t.Be[0]);
    }
    async Ye(t) {
        let e = await Ft.Vt("getVisibleStructure");
        this.assert(e.Ze.every((e => !e.tabs.some((e => e === t)))));
    }
    async je(t, e) {
        let a = await Ft.Vt("getVisibleStructure");
        let i = a.Ze.findIndex((t => !t.ta));
        this.assert(this.ea([ e ], a.Ze.slice(i + t, i + t + 1).map((t => t.tabs))), `assertUnstarredTabGroup fail: expected: ${e}`);
    }
    async ye() {
        console.log("begin testOneTabTabUpdated");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue() ],
            aa: [ [ this.Ue(), this.Ue() ], [ this.Ue(), this.Ue() ] ]
        };
        await this.We(t, true);
        await Ft.P(false);
        await this.Je({
            Be: Ne["pinned"] ? [ oe, ...t.aa[1] ] : [ ...t.aa[1], oe ],
            ze: [ t.Be, ...t.aa.slice(0, -1) ]
        });
        await Ft.Z();
        let e = await Ft.Vt("getVisibleStructure");
        this.ia(e.sa, e.Ze.reduce(((t, e) => t + e.na), 0), "visible total tab count === summed visible tabgroup counts");
        this.ia(e.sa, e.Ze.reduce(((t, e) => t + e.tabs.length), 0), "visible total tab count === summed visible tabs");
        this.assert(e.Ze.every((t => t.na === t.tabs.length)));
        let a = e.Ze.findIndex((t => !t.ta));
        this.assert(e.Ze.every(((t, e) => e < a && t.ta || e >= a && !t.ta)));
        this.assert(this.ea([ t.Be, ...t.aa ], e.Ze.slice(a, a + 3).map((t => t.tabs))));
    }
    ea(t, e) {
        return t.map((t => t.join(" "))).sort().join("\n") === e.map((t => t.join(" "))).sort().join("\n");
    }
    async me() {
        console.log("begin testOneTabTabComms");
        await Ft.P(false);
        let t = await Ft.Vt("ping");
        if (!t["pong"]) throw new Error("comms test failed");
    }
    async fe() {
        console.log("begin testBrowserActionClick");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue() ],
            aa: [ [ this.Ue(), this.Ue() ] ]
        };
        await this.We(t, true);
        await this.Je({
            Be: t.aa[0],
            ze: [ t.Be ]
        });
        await this.oa();
        await this.Je({
            la: Ne["pinned"] ? [ oe, ...t.aa[0] ] : [ ...t.aa[0], oe ],
            ze: []
        });
    }
    async de() {
        console.log("begin testContextMenus");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue() ],
            aa: [ [ this.Ue(), this.Ue() ], [ this.Ue(), this.Ue(), this.Ue() ] ]
        };
        await this.We(t, true);
        await this.Je({
            Be: t.aa[1],
            ze: [ t.Be, t.aa[0] ]
        });
        await this.Ve(t.Be[0]);
        await H(200);
        this.assert(Ke.se.length > 0 && Ke.se.every((t => !t.isEnabled)));
        this.assert(Ke.ne.length > 0 && Ke.ne.every((t => t.isEnabled)));
        this.assert(Ke.oe.length > 0 && Ke.oe.every((t => t.isEnabled)));
        this.assert(Ke.le.length > 0 && Ke.le.every((t => t.isEnabled)));
        this.assert(Ke.ae.length > 0 && Ke.ae.every((t => t.isEnabled)));
        this.assert(Ke.te.isEnabled);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude localhost from OneTab");
        await this.Ve(t.Be[1]);
        await H(200);
        this.assert(Ke.se.length > 0 && Ke.se.every((t => t.isEnabled)));
        this.assert(Ke.ne.length > 0 && Ke.ne.every((t => !t.isEnabled)));
        this.assert(Ke.oe.length > 0 && Ke.oe.every((t => t.isEnabled)));
        this.assert(Ke.le.length > 0 && Ke.le.every((t => t.isEnabled)));
        this.assert(Ke.ae.length > 0 && Ke.ae.every((t => t.isEnabled)));
        this.assert(Ke.ie.length > 0 && Ke.ie.every((t => t.isEnabled)));
        this.assert(Ke.te.isEnabled);
        this.assert(Ke.te.isEnabled);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude localhost from OneTab");
        await this.Ve(t.aa[0][0]);
        await H(200);
        this.assert(Ke.se.length > 0 && Ke.se.every((t => !t.isEnabled)));
        this.assert(Ke.ne.length > 0 && Ke.ne.every((t => t.isEnabled)));
        this.assert(Ke.oe.length > 0 && Ke.oe.every((t => t.isEnabled)));
        this.assert(Ke.le.length > 0 && Ke.le.every((t => t.isEnabled)));
        this.assert(Ke.ae.length > 0 && Ke.ae.every((t => t.isEnabled)));
        this.assert(Ke.ie.length > 0 && Ke.ie.every((t => t.isEnabled)));
        this.assert(Ke.te.isEnabled);
        this.assert(Ke.te.isEnabled);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude localhost from OneTab");
        await this.Ve(t.aa[1][1]);
        await H(200);
        this.assert(Ke.se.length > 0 && Ke.se.every((t => t.isEnabled)));
        this.assert(Ke.ne.length > 0 && Ke.ne.every((t => t.isEnabled)));
        this.assert(Ke.oe.length > 0 && Ke.oe.every((t => t.isEnabled)));
        this.assert(Ke.le.length > 0 && Ke.le.every((t => t.isEnabled)));
        this.assert(Ke.ae.length > 0 && Ke.ae.every((t => t.isEnabled)));
        this.assert(Ke.ie.length > 0 && Ke.ie.every((t => t.isEnabled)));
        this.assert(Ke.te.isEnabled);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude localhost from OneTab");
        await Ft.P();
        await this.Je({
            Be: Ne["pinned"] ? [ oe, ...t.aa[1] ] : [ ...t.aa[1], oe ],
            ze: [ t.Be, t.aa[0] ]
        });
        await this.Fe(oe);
        await this.Me();
        await H(200);
        if (Ne["pinned"]) {
            this.assert(Ke.se.length > 0 && Ke.se.every((t => !t.isEnabled)));
            this.assert(Ke.ne.length > 0 && Ke.ne.every((t => t.isEnabled)));
        } else {
            this.assert(Ke.se.length > 0 && Ke.se.every((t => t.isEnabled)));
            this.assert(Ke.ne.length > 0 && Ke.ne.every((t => !t.isEnabled)));
        }
        this.assert(Ke.oe.length > 0 && Ke.oe.every((t => t.isEnabled)));
        this.assert(Ke.le.length > 0 && Ke.le.every((t => t.isEnabled)));
        this.assert(Ke.ae.length > 0 && Ke.ae.every((t => t.isEnabled)));
        this.assert(Ke.ie.length > 0 && Ke.ie.every((t => !t.isEnabled)));
        this.assert(!Ke.te.isEnabled);
        this.assert(!Ke.we.isEnabled);
        await this.Ve(t.aa[1][0]);
        await H(200);
        this.assert(Ke.se.length > 0 && Ke.se.every((t => !t.isEnabled)));
        this.assert(Ke.ne.length > 0 && Ke.ne.every((t => t.isEnabled)));
        this.assert(Ke.oe.length > 0 && Ke.oe.every((t => t.isEnabled)));
        this.assert(Ke.le.length > 0 && Ke.le.every((t => t.isEnabled)));
        this.assert(Ke.ae.length > 0 && Ke.ae.every((t => t.isEnabled)));
        this.assert(Ke.ie.length > 0 && Ke.ie.every((t => t.isEnabled)));
        this.assert(Ke.te.isEnabled);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude localhost from OneTab");
        await this.Ve(t.aa[0][0]);
        await this.Fe(t.aa[0][0]);
        await Ft.P();
        await this.Fe(oe);
        await this.Ve(t.aa[1][0]);
        await this.Fe(t.aa[1][0]);
        await this.qe(t.aa[1][1]);
        await this.qe(t.aa[1][2]);
        await H(200);
        this.assert(Ke.se.length > 0 && Ke.se.every((t => !t.isEnabled)));
        this.assert(Ke.ne.length > 0 && Ke.ne.every((t => !t.isEnabled)));
        this.assert(Ke.oe.length > 0 && Ke.oe.every((t => t.isEnabled)));
        this.assert(Ke.le.length > 0 && Ke.le.every((t => !t.isEnabled)));
        this.assert(Ke.ae.length > 0 && Ke.ae.every((t => t.isEnabled)));
        this.assert(Ke.ie.length > 0 && Ke.ie.every((t => t.isEnabled)));
        this.assert(Ke.te.isEnabled);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude localhost from OneTab");
        await this.qe(t.aa[1][0]);
        await H(200);
        this.assert(Ke.ae.length > 0 && Ke.ae.every((t => !t.isEnabled)));
        await Promise.all((await fe()).filter((e => e["url"] !== oe && e["url"] !== t.Be[0])).map((t => Te(t))));
        await this.Ve(t.Be[0]);
        await H(200);
        this.assert(Ke.oe.length > 0 && Ke.oe.every((t => !t.isEnabled)));
    }
    async be() {
        console.log("begin testExcludeWebSiteContextMenu");
        await this.ce(p);
        await Ft.gt("127.0.0.1");
        let t = {
            Be: [ this.Ue("127.0.0.1"), this.Ue() ],
            aa: [ [ this.Ue(), this.Ue() ], [ this.Ue(), this.Ue("127.0.0.1"), this.Ue() ] ]
        };
        await this.We(t, true);
        await this.Je({
            Be: t.aa[1],
            ze: [ t.Be, ...t.aa.slice(0, -1) ]
        });
        await H(200);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude localhost from OneTab");
        this.Ve(t.aa[1][1]);
        await H(200);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude 127.0.0.1 from OneTab");
        await Ft.yt("127.0.0.1");
        {
            let t = await Ft.getSettings();
            let e = Ft.Tt("127.0.0.1", t);
            this.assert(e);
        }
        this.Ve(t.Be[1]);
        await H(200);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude localhost from OneTab");
        this.Ve(t.Be[0]);
        await H(200);
        this.assert(Ke.we.isEnabled);
        this.assert(Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude 127.0.0.1 from OneTab");
        await Ft.gt("127.0.0.1");
        await _e();
        await H(200);
        this.assert(Ke.we.isEnabled);
        this.assert(!Ke.we.Ht);
        this.assert(Ke.we.title === "Exclude 127.0.0.1 from OneTab");
    }
    async Te() {
        console.log("begin testIgnoreOneTabContentPages");
        let t = {
            Be: [ this.Ue(), this.Ue() ]
        };
        await this.We(t, true);
        await Ft.et("import-export.html");
        await Ft.et("options.html");
        await Ft.et("import-export.html");
        await Ft.et("options.html");
        let e = {
            aa: [ [ this.Ue(), this.Ue() ] ]
        };
        await this.We(e, false);
        await Ft.et("import-export.html");
        await Ft.et("options.html");
        await this.qe(e.aa[0][0]);
        await this.qe(e.aa[0][1]);
        await this.Je({
            Be: [ ...t.Be, le + "import-export.html", le + "options.html" ]
        });
        await this.oa();
        await this.Je({
            Be: [ oe ]
        });
    }
    async pe() {
        console.log("begin testExistingOneTabSwitchedTo");
        let t = {
            Be: [ this.Ue() ],
            aa: [ [ this.Ue(), this.Ue() ], [ this.Ue(), this.Ue(), this.Ue() ] ]
        };
        await this.We(t, true);
        await this.Je({
            Be: t.aa[1],
            ze: [ t.Be, ...t.aa.slice(0, -1) ]
        });
        await Ft.P();
        await this.Je({
            Be: Ne["pinned"] ? [ oe, ...t.aa[1] ] : [ ...t.aa[1], oe ],
            ze: [ t.Be, ...t.aa.slice(0, -1) ]
        });
        await this.Ve(t.Be[0]);
        await this.Fe(t.Be[0]);
        await Ft.P(true);
        await this.Fe(t.Be[0]);
        await Ft.P();
        await this.Fe(oe);
        await this.Je({
            Be: Ne["pinned"] ? [ oe, ...t.aa[1] ] : [ ...t.aa[1], oe ],
            ze: [ t.Be, ...t.aa.slice(0, -1) ]
        });
    }
    async ue() {
        console.log("begin safariPinnedTabsTest");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue() ],
            aa: [ [ this.Ue(), this.Ue() ] ]
        };
        await this.We(t, true);
        await this.Je({
            Be: t.aa[0],
            ze: [ t.Be ]
        });
        await Ft.P();
        await this.Me();
        let e = await Oe(true);
        this.assert((await Oe(true)).find((t => t["focused"]))["id"] === e[0]["id"]);
        await ge(e[0]["tabs"][1]);
        await Ft.P();
        await H(100);
        this.assert((await Oe(true)).find((t => t["focused"]))["id"] === e[0]["id"]);
        await ge(e[1]["tabs"][1]);
        await H(100);
        await Ft.P();
        await H(100);
        this.assert((await Oe(true)).find((t => t["focused"]))["id"] === e[1]["id"]);
    }
    async ke() {
        console.log("begin testPinnedTabsOption");
        await this.ce(p);
        let t = await Ft.getSettings();
        let e = U("pinnedTabs", t);
        try {
            await Ft.rt("pinnedTabs", "ignore");
            let t = {
                Be: [ this.ra(), this.Ue() ]
            };
            await this.We(t, true);
            await this.Je({
                Be: t.Be
            });
            await this.oa();
            await H(100);
            if (!Ne["pinned"]) {
                await this.Je({
                    Be: [ t.Be[0], oe ]
                });
            } else {
                await this.Je({
                    Be: l ? [ t.Be[0], oe ] : [ oe, t.Be[0] ]
                }, true);
            }
            await this.qe(t.Be[0]);
            await this.Je({
                Be: [ oe ]
            });
            await Ft.rt("pinnedTabs", "allow");
            await this.We(t, true);
            await this.Je({
                Be: t.Be
            });
            await this.oa();
            await H(100);
            await this.Je({
                Be: [ oe ]
            });
            await this._e(t.Be, 0, true);
            await Ft.Vt("clickTab", {
                url: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: Ne["pinned"] ? l ? [ oe, t.Be[0], "" ] : [ oe, t.Be[0] ] : [ t.Be[0], oe ]
            });
            await this.wa(t.Be[0]);
        } finally {
            await Ft.rt("pinnedTabs", e);
        }
    }
    async Ge() {
        console.log("begin testPinnedTabsOption2");
        await this.ce(p);
        let t = await Ft.getSettings();
        let e = U("pinnedTabs", t);
        try {
            await Ft.rt("pinnedTabs", "allow");
            let t = {
                Be: [ this.ra(), this.ra() ]
            };
            await this.We(t, true);
            await this.Je({
                Be: t.Be
            });
            await this.oa();
            await this.Je({
                Be: [ oe ]
            });
            let a = {
                Be: [ this.Ue() ]
            };
            await this.We(a, false);
            await this.Je({
                Be: [ oe, ...a.Be ]
            });
            await this.Me();
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ ...t.Be ],
                ze: [ [ oe, ...a.Be ] ]
            });
            await this.oa();
            await this.je(0, [ ...t.Be ]);
            await this.qe(a.Be[0]);
            await this.Je({
                Be: [ oe ]
            });
            await this.Me();
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: Ne["pinned"] ? [ oe, ...t.Be ] : [ ...t.Be, oe ]
            });
        } finally {
            await Ft.rt("pinnedTabs", e);
        }
    }
    async Ee() {
        console.log("begin testPinnedTabsOption3");
        await this.ce(p);
        let t = await Ft.getSettings();
        let e = U("pinnedTabs", t);
        try {
            await Ft.rt("pinnedTabs", "allow");
            let t = {
                Be: [ this.ra() ]
            };
            await this.We(t, true);
            await this.Je({
                Be: t.Be
            });
            await this.oa();
            await this.Je({
                Be: [ oe ]
            });
            let a = {
                Be: [ this.Ue() ]
            };
            await this.We(a, false);
            await this.Je({
                Be: [ oe, ...a.Be ]
            });
            await this.Me();
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ ...t.Be ],
                ze: [ [ oe, ...a.Be ] ]
            });
            await this.oa();
            await this.je(0, [ ...t.Be ]);
            await this.qe(a.Be[0]);
            await this.Je({
                Be: [ oe ]
            });
            await this.Me();
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: Ne["pinned"] ? [ oe, ...t.Be ] : [ ...t.Be, oe ]
            });
        } finally {
            await Ft.rt("pinnedTabs", e);
        }
    }
    async ve() {
        console.log("begin testRestoreRemovalOption");
        await this.ce(p);
        let t = await Ft.getSettings();
        let e = U("restoreRemoval", t);
        try {
            await Ft.rt("restoreRemoval", "default");
            let t = {
                Be: [ this.Ue(), this.Ue() ]
            };
            await this.We(t, true);
            await this.oa();
            await this.Me();
            await this.je(0, [ ...t.Be ]);
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ oe, ...t.Be ]
            });
            await this.Ye(t.Be[0]);
            await Ft.rt("restoreRemoval", "keep");
            await this.oa();
            await this.Me();
            await this.je(0, [ ...t.Be ]);
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ oe, ...t.Be ]
            });
            await this.je(0, [ ...t.Be ]);
        } finally {
            await Ft.rt("restoreRemoval", e);
        }
    }
    async Ie() {
        console.log("begin testDuplicatesOption");
        await this.ce(p);
        let t = await Ft.getSettings();
        let e = U("restoreRemoval", t);
        try {
            await Ft.rt("restoreRemoval", "default");
            let t = {
                Be: [ this.Ue(), this.Ue() ]
            };
            await this.We(t, true);
            await this.oa();
            await this.Me();
            await this.je(0, [ ...t.Be ]);
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ oe, ...t.Be ]
            });
            await this.Ye(t.Be[0]);
            await Ft.rt("restoreRemoval", "keep");
            await this.oa();
            await this.Me();
            await this.je(0, [ ...t.Be ]);
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ oe, ...t.Be ]
            });
            await this.je(0, [ ...t.Be ]);
        } finally {
            await Ft.rt("restoreRemoval", e);
        }
    }
    async De() {
        console.log("begin testRestoreWindowOption");
        await this.ce(p);
        let t = await Ft.getSettings();
        let e = U("restoreWindow", t);
        try {
            await Ft.rt("restoreWindow", "newWindow");
            let t = {
                Be: [ this.Ue(), this.Ue() ]
            };
            await this.We(t, true);
            await this.oa();
            await this.Me();
            await this.Ne({
                Be: [ oe ]
            });
            await this.je(0, [ ...t.Be ]);
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ oe, ...t.Be ]
            });
            await this.oa();
            await this.Ne({
                Be: [ oe ]
            });
            await this.je(0, [ ...t.Be ]);
            let a = {
                Be: [ this.Ue() ]
            };
            await this.We(a, false);
            await Ft.P();
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ ...t.Be ],
                ze: [ [ oe, ...a.Be ] ]
            });
            await Ft.rt("restoreWindow", "newWindowAlways");
            await this.oa();
            await this.Me();
            await this.qe(a.Be[0]);
            await this.Ne({
                Be: [ oe ]
            });
            await this.je(0, [ ...t.Be ]);
            await Ft.P();
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ ...t.Be ],
                ze: [ [ oe ] ]
            });
            await this.oa();
            await this.Me();
            await this.Ne({
                Be: [ oe ]
            });
            await this.je(0, [ ...t.Be ]);
            await Ft.rt("restoreWindow", "currentWindow");
            await Ft.P();
            await this.We(a, false);
            await Ft.Vt("clickTabGroupButton", {
                Ke: "restoreAllButton",
                He: t.Be[0],
                Le: {}
            });
            await this.Ne({
                Be: [ oe, a.Be[0], ...t.Be ]
            });
        } finally {
            await Ft.rt("restoreWindow", e);
        }
    }
    async Ce() {
        console.log("begin testLockUnlock");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue() ]
        };
        await this.We(t, true);
        await this.oa();
        await this.Me();
        await this.Ne({
            Be: [ oe ]
        });
        await this.je(0, [ ...t.Be ]);
        await H(150);
        this.assert(!(await Ft.Vt("getTabGroupElementDisplayed", {
            ca: "lockImg",
            He: t.Be[0]
        })).ha);
        this.assert(!(await this.ua(t.Be[0]))["starred"]);
        await Ft.Vt("clickTabGroupButton", {
            Ke: "moreButton",
            He: t.Be[0],
            Le: {}
        });
        await Ft.Vt("clickTabGroupButton", {
            Ke: "toggleLockTabGroupButton",
            He: t.Be[0],
            fa: "mousedown",
            Le: {}
        });
        await H(150);
        this.assert((await this.ua(t.Be[0]))["locked"]);
        await Ft.Vt("clickTabGroupButton", {
            Ke: "restoreAllButton",
            He: t.Be[0],
            Le: {}
        });
        await H(200);
        await this.Ne({
            Be: [ oe, ...t.Be ]
        });
        await this.je(0, [ ...t.Be ]);
        await Ft.Vt("clickTabGroupButton", {
            Ke: "deleteAllButton",
            He: t.Be[0]
        });
        await H(200);
        await this.je(0, [ ...t.Be ]);
        await Ft.Vt("clickTab", {
            url: t.Be[0],
            Le: {}
        });
        await H(200);
        await this.je(0, [ ...t.Be ]);
        this.assert((await Ft.Vt("getTabGroupElementDisplayed", {
            ca: "lockImg",
            He: t.Be[0]
        })).ha);
    }
    async Re() {
        console.log("begin testStarUnstar");
        await this.ce(p);
        let t = {
            Be: [ this.Ue(), this.Ue() ]
        };
        await this.We(t, true);
        await this.oa();
        await this.Me();
        await this.Ne({
            Be: [ oe ]
        });
        await this.je(0, [ ...t.Be ]);
        let e = {
            Be: [ this.Ue(), this.Ue() ]
        };
        await this.We(e, true);
        await this.oa();
        await this.Me();
        await this.Ne({
            Be: [ oe ]
        });
        await this.je(0, [ ...e.Be ]);
        let a = await Ft.Vt("getVisibleStructure");
        let i = a.Ze.findIndex((e => e.tabs.some((e => e === t.Be[0]))));
        let s = a.Ze.findIndex((t => t.tabs.some((t => t === e.Be[0]))));
        this.assert(i > 0);
        this.assert(!(await Ft.Vt("getTabGroupElementDisplayed", {
            ca: "starImg",
            He: t.Be[0]
        })).ha);
        await Ft.Vt("clickTabGroupButton", {
            Ke: "moreButton",
            He: t.Be[0],
            Le: {}
        });
        await Ft.Vt("clickTabGroupButton", {
            Ke: "toggleStarTabGroupButton",
            He: t.Be[0],
            fa: "mousedown",
            Le: {}
        });
        await H(600);
        this.assert((await Ft.Vt("getTabGroupElementDisplayed", {
            ca: "starImg",
            He: t.Be[0]
        })).ha);
        a = await Ft.Vt("getVisibleStructure");
        let n = a.Ze.findIndex((e => e.tabs.some((e => e === t.Be[0]))));
        this.assert(n === 0);
        this.assert(n === await this.da(t.Be[0]));
        this.assert((await this.ua(t.Be[0]))["starred"]);
        await Ft.Vt("clickTabGroupButton", {
            Ke: "moreButton",
            He: t.Be[0],
            Le: {}
        });
        await Ft.Vt("clickTabGroupButton", {
            Ke: "toggleStarTabGroupButton",
            He: t.Be[0],
            fa: "mousedown",
            Le: {}
        });
        await H(600);
        a = await Ft.Vt("getVisibleStructure");
        let o = a.Ze.findIndex((e => e.tabs.some((e => e === t.Be[0]))));
        this.assert(i === o);
        this.assert(i === await this.da(t.Be[0]));
        this.assert(!(await this.ua(t.Be[0]))["starred"]);
        this.assert(!(await Ft.Vt("getTabGroupElementDisplayed", {
            ca: "starImg",
            He: t.Be[0]
        })).ha);
    }
    async _e(t, e, a) {
        let i = await Ft.getState();
        if (a) e += i["tabGroups"].findIndex((t => !t["starred"]));
        let s = i["tabGroups"].some(((a, i) => {
            if (e !== undefined && e !== i) return false;
            return a["tabsMeta"].every(((e, a) => {
                let i = this.ba(t[a], "title") === e["title"];
                if (this.ba(t[a], "title").startsWith("PIN::") && !e["pinned"]) i = false;
                return i;
            }));
        }));
        this.assert(s, `assertStoredTabGroup fail, expected: ${t} at index ${e}`);
    }
    async Qe(t) {
        let e = await Ft.getState();
        this.assert(e["tabGroups"].some((e => e["tabsMeta"].some((e => e["url"] === t)))));
    }
    async Xe(t) {
        let e = await Ft.getState();
        this.assert(!e["tabGroups"].some((e => e["tabsMeta"].some((e => e["url"] === t)))));
    }
    async da(t) {
        return (await Ft.getState())["tabGroups"].findIndex((e => e["tabsMeta"][0]["url"] === t));
    }
    async ua(t) {
        return (await Ft.getState())["tabGroups"].find((e => e["tabsMeta"][0]["url"] === t));
    }
    ba(t, e) {
        t = t.substring(t.indexOf("?") + 1);
        var a = t.split("&");
        for (var i in a) {
            var s = a[i].split("=");
            if (s[0] === e) {
                return decodeURIComponent(s[1]);
            }
        }
        return undefined;
    }
    async ce(t) {
        let e = await fe();
        let i = e.filter((t => t["url"] && !(t["title"] && t["title"].startsWith("t---") || t["title"] && t["title"].startsWith("PIN::t---") || t["title"] && t["title"].startsWith("localhost:")) && ![ t["url"], t["pendingUrl"] ].some((t => [ le, a ].some((e => t && t.startsWith(e)))))));
        i = i.filter((t => !t["url"].startsWith("http://localhost")));
        if (i.length > 0) {
            console.log(i);
            throw new Error(`Non-empty tabs found, aborting browser reset. ${i.map((t => t["url"])).join(",")}`);
        }
        let s = await Oe(true);
        if (s.length === 0) {
            console.log("resetToSingleEmptyTabOpen: no open windows");
            await Pe({
                url: t
            });
        } else {
            s.slice(1).forEach((t => pe(t["id"])));
            let e = s[0];
            let {tabs: a, kt: i} = await ue(e["id"]);
            await xe({
                windowId: e["id"],
                url: t
            });
            await Promise.all(a.map((t => Te(t))));
        }
        await this.Ta();
    }
    async Ta() {
        if (o) if ((await fe()).some((t => t["url"] === "about:blank"))) await H(200);
        await q(1e4, "waitForAllTabsLoaded", (async () => !(await fe()).some((t => t["status"] === "loading"))));
    }
    async We(t, e) {
        let a = [];
        if (e) a = await fe();
        if (t.Be) {
            for (let e = 0; e < t.Be.length; e++) await this.pa(t.Be[e]);
        }
        if (t.aa) {
            for (let e = 0; e < t.aa.length; e++) {
                await this.ma(t.aa[e]);
            }
        }
        await Promise.all(a.map((t => Te(t))));
        await this.Ta();
        if (l) await Promise.all((await fe()).filter((t => t["url"] === "")).map((t => Te(t))));
    }
    async Ne(t, e) {
        for (let e of J(5e3)) {
            try {
                await this.Je(t);
                return;
            } catch (t) {
                await H(e);
            }
        }
        this.assert(false, "waitForAndAssertTabStructure failed after time-out");
    }
    async wa(t) {
        let e = await de();
        this.assert(e.some((e => e.some((e => [ e["url"], e["pendingUrl"] ].some((e => e === t)) && e["pinned"])))));
    }
    async Je(t, e) {
        if (!e) {
            if (l && (await fe()).some((t => we(t["url"]) && t["pinned"]))) {
                t = JSON.parse(JSON.stringify(t));
                if (t.Be && t.Be[0] !== oe) t.Be.unshift(oe);
                if (t.ze) t.ze.forEach((t => {
                    if (t[0] !== oe) t.unshift(oe);
                }));
            }
        }
        await this.Ta();
        let a = await de(true);
        let i = (await ce()).tabs;
        if (t.Be) {
            let e = i.map((t => [ t["url"], t["pendingUrl"] ].find((t => t)))).join(" , ");
            let a = t.Be.join(" , ");
            if (e !== a) {
                throw new Error(`No match for tabs in last focused window (actual, expected): \n${e}\n\n${a}`);
            }
        }
        if (t.ze) {
            let e = a.map((t => t.map((t => [ t["url"], t["pendingUrl"] ].find((t => t)))).join(" , "))).sort().join("\n");
            let i = t.ze.map((t => t.join(" , "))).sort().join("\n");
            if (e !== i) {
                throw new Error(`No match for tabs in non focused windows (actual, expected):\n${e}\n\n${i}`);
            }
        }
    }
    async $e(t) {
        for (let e of J(5e3)) {
            try {
                await this.Fe(t);
                return;
            } catch (t) {
                await H(e);
            }
        }
        throw new Error("waitForAndAssertActiveTab failed after time-out");
    }
    async Me() {
        for (let t of J(1e4)) {
            try {
                if ((await fe()).some((t => we(t["url"])))) {
                    try {
                        await Ft.Vt("ping");
                        return;
                    } catch (t) {}
                }
            } catch (e) {
                await H(t);
            }
        }
        throw new Error("waitForOneTabTabExistsAndRespondsToRpc failed after time-out");
    }
    async Fe(t) {
        let e = (await se())["url"];
        if (e !== t) {
            throw new Error(`active tab not as expected (actual, expected): ${e} ${t}`);
        }
    }
    async pa(t) {
        await Ft.qt(t, t.includes("?title=" + encodeURIComponent("PIN::")));
    }
    async ma(t) {
        return (await Ft.jt(t.map((t => ({
            url: t,
            pinned: t.includes("?title=" + encodeURIComponent("PIN::"))
        })))))["id"];
    }
    async oa() {
        await Ft.St(undefined);
    }
    async Ve(t) {
        await ge((await fe()).find((e => e["url"] === t)));
    }
    async qe(t) {
        let e = (await fe()).find((e => e["url"] === t));
        if (!e) {
            throw new Error("Could not find tab with URL: " + t);
        }
        await Te(e);
    }
    ya(t, e) {
        if (!e) e = "localhost";
        return "http://" + e + ":3000/" + `?title=${encodeURIComponent(t)}`;
    }
    Ue(t) {
        return this.ya(this.uuid(), t);
    }
    ra(t) {
        return this.ya("PIN::" + this.uuid(), t);
    }
    uuid() {
        return "t---" + I(6, 16).toLowerCase();
    }
    assert(t, e) {
        if (!t) {
            throw new Error("Assertion failed" + (e ? " " + e : ""));
        }
    }
    ia(t, e, a) {
        if (t !== e) {
            throw new Error(`Assertion failed, ${t} !== ${e}, ${a}`);
        }
    }
}

window["runTestSuite"] = () => {
    (async () => await (new aa).he())();
};

window["loopTestSuite"] = t => {
    (async () => {
        for (let e = 0; e < t; e++) await (new aa).he();
    })();
};

(async () => {
    await ea();
})();