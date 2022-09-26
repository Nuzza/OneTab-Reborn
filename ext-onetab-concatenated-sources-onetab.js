// Copyright 2022 OneTab Ltd.  All rights reserved.
const o = false;
const u = false;
const c = false;
const f = false;
const l = false;
const s = false;
const a = true;
const d = "chrome://";
const w = "chrome://newtab/";
const h = "https://github.com/Nuzza/OneTab-Reborn";
const p = false;
async function x() {
	return new Promise(((e, o) => {
		if(document.readyState === "complete") {
			e();
		}
		else {
			document.addEventListener("readystatechange", (o => {
				if(document.readyState === "complete") e();
			}));
		}
	}));
}
let Rt = {};
async function Ot() {
	Rt = Mt.O();
}

function St(e) {
	return Rt[e];
}
const Mt = window.chrome.extension.getBackgroundPage().core;
async function jt() {
	It();
	await Ot();
}

function Lt(e) {
	if(typeof e === "string") e = document.getElementById(e);
	if(!e) return;
	while(e.childNodes.length > 0) e.childNodes[0].remove();
}

function $t(e) {
	return J(undefined, "div", {}).t;
}
let Ct = navigator["language"] || navigator["userLanguage"];

function Et() {
	let e = ["ar", "he", "fa", "ps", "ur"];
	let o = Ct.split("-", 1)[0];
	return e.indexOf(o) >= 0 ? "rtl" : "ltr";
}
let Pt = Et();

function Bt() {
	return Pt !== "rtl";
}

function It() {
	document.getElementsByTagName("html")[0]["dir"] = Pt;
}

function zt() {
	return Bt() ? "Left" : "Right";
}

function Ft() {
	return Bt() ? "Right" : "Left";
}

function Ut() {
	return Bt() ? "left" : "right";
}

function Wt() {
	return Bt() ? "right" : "left";
}

function Ht(e, o) {}

function At(e, o) {}

function Dt(e, o) {}

function Gt(e, o) {}

function Jt(e, o) {}

function b(e, o, t) {
	let n = document.createElement("div");
	let i = document.createElement("div");
	Dt(i, "30px");
	i.textContent = o;
	n.appendChild(i);
	let a = document.createElement("div");
	Dt(a, "30px");
	a.appendChild(t.t);
	n.appendChild(a);
	i.onclick = () => {
		e = !e;
	};
	let r = {
		l: t.t
	};
	Object.assign(r, t);
	r.t = n;
	return r;
}

function settingsDiv(e, o, t, n) {
	let i = document.createElement("div");
	i.className = "clickable setting";
	let c = document.createElement("span");
	if(n) {
		let e = document.createElement("span");
		e.textContent = St("newExclamation") + " ";
		c.appendChild(e);
	}
	if(typeof e === "string") {
		c.appendChild(document.createTextNode(e));
	}
	else {
		c.appendChild(e);
	}
	i.onclick = e => {
		t(c);
	};
	i.appendChild(c);
	return i;
}
class eo {
	constructor() {
		this.eo = null;
		this.oo = null;
		this.no = null;
		this.io = null;
		this.co = null;
		this.ao = null;
		this.ro = false;
		this.so = null;
		this.mo = null;
		this.lo = 3;
		this.do = [];
	}
	uo({
		po: e,
		ho: o,
		fo: t,
		bo: n,
		wo: i,
		vo: c,
		xo: a,
		yo: r,
		ko: s,
		Ao: m
	}) {
		e.onmousedown = l => {
			if(!oo(l)) return;
			let d = false;
			ee({
				event: l,
				element: e,
				j: null,
				A: ({
					B: e,
					I: o,
					M: t,
					X: n
				}) => {
					d = s && s();
				},
				S: ({
					B: e,
					I: c,
					dx: a,
					dy: r,
					M: s,
					X: l,
					pageX: u,
					pageY: p
				}) => {
					if(!this.ro && !d) {
						if(Math.abs(a) > this.lo || Math.abs(r) > this.lo) {
							this.ro = true;
							this.eo = o;
							this.no = m.offsetWidth;
							this.io = m.offsetHeight;
							let e = vt(t);
							this.To = e.x;
							this.jo = e.y;
							this.Eo = t.offsetWidth;
							this.so = t.parentNode;
							this.mo = t.nextSibling;
							t.remove();
							this.oo = t;
							this.co = n;
							this.ao = J(document.body, "div", {
								h: this.oo
							}).t;
							i();
						}
					}
					if(this.ro) {
						let e = this.Eo - this.oo.offsetWidth;
						this.ao.style.left = this.To + a + (Et() === "rtl" ? e : 0) + "px";
						this.ao.style.top = this.jo + r + "px";
						let o = document.elementFromPoint(u - window.scrollX, p - window.scrollY);
						let t = this.do.find((e => e.objectType === this.co && (e.element === o || pt(e.element, o))));
						if(t) {
							this.Do = t;
						}
						else {
							this.Do = undefined;
						}
					}
				},
				C: ({
					B: e,
					I: o,
					Y: t,
					D: n,
					M: i,
					X: s
				}) => {
					(async () => {
						if(!this.ro) {
							c();
						}
						else {
							this.ro = false;
							let e = this.Do;
							if(this.Do) {
								await this.Do.So(this.eo);
							}
							else {
								a();
							}
							document.body.removeChild(this.ao);
							if(e) {
								this.Do = undefined;
							}
							r();
						}
					})();
				}
			});
		};
	}
	Lo({
		element: e,
		objectType: o,
		zo: t,
		So: n
	}) {
		this.do.push({
			element: e,
			objectType: o,
			zo: t,
			So: n
		});
	}
	Co() {
		return J(undefined, "div", {}).t;
	}
}

function oo(e) {
	if(e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) {
		return false;
	}
	else if("buttons" in e) {
		return e.buttons === 1;
	}
	else if("which" in e) {
		return e.which === 1;
	}
	else {
		return e.button === 1 || e.type === "click";
	}
}
class to {
	constructor({
		parentElement: e,
		Go: o,
		value: t,
		Bo: n,
		fontWeight: i,
		Io: c,
		Oo: a,
		Ro: r
	}) {
		this.parentElement = e;
		this.Ro = r;
		this.value = F(t);
		this.Bo = n;
		this.fontWeight = i;
		this.Io = c;
		this.Oo = a;
		this.$o = false;
		let s = J(e, "div", {
			children: {
				Po: J(undefined, "div", {
					className: this.Io
				})
			}
		});
		this.div = s.t;
		this.Po = s.Po.t;
		this.Wo(this.value, false, true);
		this.Go = o;
		this.Po.onmousedown = e => {};
		this.Po.onmouseup = e => {
			if(this.$o) return true;
			let o = false;
			if(this.Oo) o = this.Oo();
			if(!o) this.No();
			return false;
		};
	}
	No() {
		if(this.$o) return;
		if(this.Ro) this.Ro();
		this.$o = true;
		let e = J(undefined, "input", {}).t;
		e.setAttribute("autocomplete", "off");
		e.setAttribute("spellcheck", "false");
		Lt(this.Po);
		this.Po.innerHTML = "";
		e.className = this.Io;
		this.div.appendChild(e);
		e.value = this.value;
		this.qo = this.value;
		e.onblur = () => {
			this.div.removeChild(e);
			this.Wo(this.value, false, false);
			setTimeout((() => {
				this.$o = false;
			}), 300);
			return false;
		};
		e.addEventListener("compositionend", (e => {
			this.Fo = true;
		}));
		e.onkeydown = o => {
			if(!o.isComposing && !(f && this.Fo)) {
				if(o.key === "Escape" || o.key === "Esc") {
					e.value = this.qo;
					this.value = this.qo;
					e.blur();
				}
				if(o.key === "Enter") {
					e.blur();
				}
			}
			this.Fo = false;
		};
		e.oninput = o => {
			this.value = e.value;
			let t = io(this.value, this.Io, this.Bo, this.fontWeight, false);
			this.Go(e.value, false);
			return false;
		};
		e.oninput(undefined);
		setTimeout((() => {
			e.focus();
		}), 100);
		return false;
	}
	Mo() {}
	Vo() {
		let e = io(this.value, this.Io, this.Bo, this.fontWeight, false);
		e = Math.max(e, 20);
		return e;
	}
	Wo(e, o, t) {
		this.value = F(e);
		if(F(e) == "") {
			this.Po.innerHTML = "";
			this.Po.display = "none";
		}
		else {
			this.Po.display = "block";
			this.Po.textContent = this.value;
		}
		if(o) this.Vo();
		else this.Mo();
		if(!t) this.Go(this.value, !o);
	}
}
let no;

function io(e, o, t, n, i) {
	if(!n) n = "normal";
	if(n === true) n = "bold";
	if(n === false) n = "normal";
	if(no === undefined) {
		no = J(document.body, "div", {}).t;
	}
	no.className = o;
	no.textContent = e;
	let c = no.offsetWidth;
	no.textContent = "";
	return c;
}
const k = window.chrome.runtime.getURL("onetab.html");
const T = k.substr(0, k.length - "onetab.html".length);

function R(e) {
	let o = O(e);
	if(o.toLowerCase().startsWith("www.")) return o.substring("www.".length);
	else return o;
}

function O(e) {
	if(!e) return "undefined";
	if(e.indexOf("//") === 0) e = "http:" + e;
	if(e.indexOf("://") === -1) e = "http://" + e;
	e = e.substring(e.indexOf("://") + "://".length);
	if(e.indexOf("/") !== -1) e = e.substring(0, e.indexOf("/"));
	if(e.indexOf(":") !== -1) e = e.substring(0, e.indexOf(":"));
	if(e.indexOf("?") !== -1) e = e.substring(0, e.indexOf("?"));
	if(e.indexOf("#") !== -1) e = e.substring(0, e.indexOf("#"));
	return e.toLowerCase();
}

function S(e) {
	if(e.indexOf("://") === -1) return "https://";
	e = e.substring(0, e.indexOf("://") + "://".length);
	return e.toLowerCase();
}
let M = ["com", "co.uk", "org.uk", "net", "org", "de", "ru", "info", "xyz", "nl"];

function j(e) {
	let o = O(e);
	try {
		for(let e in M) {
			let t = "." + M[e];
			if(H(o, t)) {
				o = o.substr(0, o.length - t.length);
				while(o.indexOf(".") !== -1) o = o.substring(o.indexOf(".") + 1);
				o = o + t;
				break;
			}
		}
		if(o.indexOf("www.") === 0) o = o.substring("www.".length);
		return o;
	}
	catch (e) {
		return o;
	}
}

function L(e) {
	e["noCacheRandom"] = $();
}

function $() {
	return (new Date).getTime() + Math.round(Math.random() * 1e4) + "";
}
async function C(e, o) {
	L(o);
	let t = JSON.stringify(o);
	let n = await E(e, t);
	return await n.json();
}
async function E(e, o) {
	let t = {};
	if(o) {
		t.method = "POST";
		t.body = o;
	}
	else {
		t.method = "GET";
	}
	t.headers = new Headers;
	t.headers.append("Content-Type", "text/json");
	let n = await fetch(e, t);
	if(n.status === 200) return n;
	else throw new Error("http response code" + n.status);
}

function P() {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (e => {
		let o = Math.random() * 16 | 0,
			t = e == "x" ? o : o & 3 | 8;
		return t.toString(16);
	}));
}
const B = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");

function I(e, o) {
	let t = B,
		n = [],
		i = 0;
	o = o || t.length;
	e = e || 22;
	for(i = 0; i < e; i++) n[i] = t[0 | Math.random() * o];
	return n.join("");
}

function z() {
	return I();
}

function F(e) {
	if(e === null || e === undefined) return "";
	return e.replace(/^\s+/, "").replace(/\s+$/, "");
}
const U = (e, o) => !!o["starred"] - !!e["starred"] || e["starred"] && o["starred"] && o["starredDate"] - e["starredDate"] || o["createDate"] - e["createDate"];

function W(e) {
	if(!e) e = "";
	return e.replace(/[\x00-\x1F\x7F-\x9F]/g, "");
}

function H(e, o) {
	if(!e) return false;
	return e.indexOf(o, e.length - o.length) !== -1;
}
const A = {
	restoreWindow: "newWindow",
	pinnedTabs: "ignore",
	startupLaunch: "displayOneTab",
	restoreRemoval: "default",
	duplicates: "allow"
};

function D(e, o) {
	if(o[e]) return o[e];
	else return A[e];
}

function G(e, o, t) {
	if(e.parentNode) e.remove();
	o.insertBefore(e, t === undefined || t >= o.children.length || o.children.length === 0 ? null : o.children[Math.max(0, t)]);
}

function J(e, o, t) {
	let n = o === undefined ? e : document.createElement(o);
	let i = {};
	if(t) {
		for(let e of Object.keys(t)) {
			if(e !== "style" && e !== "children") n[e] = t[e];
		}
		if(t.children) {
			for(const [e, o] of Object.entries(t.children)) {
				i[e] = o;
				n.appendChild(o instanceof HTMLElement ? o : o.t);
			}
		}
		if(t.h) n.appendChild(t.h);
		if(t.init) t.init(n);
	}
	if(o !== undefined && e) e.appendChild(n);
	let c = {
		t: n
	};
	Object.assign(c, i);
	return c;
}
const N = "about:reader?url=";

function X(e) {
	if(!e) return "";
	if(e.indexOf(":") === -1) return "https://" + e;
	if(e.indexOf(N) === 0) return decodeURIComponent(e.substring(N.length));
	if(e.startsWith(`${T}placeholder.html?`)) {
		const o = new URLSearchParams(e.substring(e.indexOf("?")));
		return o.get("url");
	}
	return e;
}
async function Y(e) {
	return new Promise((o => setTimeout(o, e)));
}

function q(e) {
	return parseInt(e.match(/\d+/)[0]);
}
const K = [...new Array(30)].map(((e, o) => parseInt(10 + Math.pow(1.6, o))));

function* Q(e) {
	let o = 0;
	while(K.slice(0, o).reduce(((e, o) => e + o), 0) < e) {
		yield K[o++];
	}
}
async function V(e, o, t) {
	let n = 0;
	for(let o of Q(e)) {
		if(await t(n)) return;
		else {
			await Y(o);
			n += o;
		}
	}
	throw new Error(`Timeout waiting for condition ${o}`);
}
let Xt, Yt, Nt, qt, Kt;
let Qt, Vt;
let Zt, _t;
let te = "ontouchstart" in window;

function ee({
	event: e,
	element: o,
	j: t,
	A: n,
	S: i,
	C: c
}) {
	Xt = o;
	Yt = t;
	Nt = n;
	qt = i;
	Kt = c;
	Zt = 0;
	_t = 0;
	if(te && e instanceof TouchEvent) {
		if(e.touches.length > 1) {
			return;
		}
		Qt = e.touches.item(0).pageX;
		Vt = e.touches.item(0).pageY;
		document.addEventListener("touchmove", ne, false);
		document.addEventListener("touchend", ie, false);
		e.preventDefault();
	}
	else {
		Qt = e.clientX + window.scrollX;
		Vt = e.clientY + window.scrollY;
		document.addEventListener("mousemove", ne, false);
		document.addEventListener("mouseup", ie, false);
		e.preventDefault();
	}
	Nt({
		B: Xt,
		I: Yt,
		M: Qt,
		X: Vt
	});
}

function ne(e) {
	let o, t, n, i;
	if(te && e instanceof TouchEvent) {
		if(e.touches.length > 1) {
			n = 0;
			i = 0;
			qt({
				B: Xt,
				I: Yt,
				dx: n,
				dy: i,
				M: Qt,
				X: Vt,
				pageX: o,
				pageY: t
			});
			return ie(e);
		}
		o = e.touches.item(0).pageX;
		t = e.touches.item(0).pageY;
	}
	else {
		o = e.clientX + window.scrollX;
		t = e.clientY + window.scrollY;
	}
	n = o - Qt;
	i = t - Vt;
	let c = false;
	if(Zt !== n || _t !== i) c = true;
	Zt = n;
	_t = i;
	if(c) {
		qt({
			B: Xt,
			I: Yt,
			dx: n,
			dy: i,
			M: Qt,
			X: Vt,
			pageX: o,
			pageY: t
		});
	}
	e.preventDefault();
}

function ie(e) {
	if(te && e instanceof TouchEvent) {
		document.removeEventListener("touchmove", ne, false);
		document.removeEventListener("touchend", ie, false);
	}
	else {
		document.removeEventListener("mousemove", ne, false);
		document.removeEventListener("mouseup", ie, false);
	}
	Kt({
		B: Xt,
		I: Yt,
		Y: Zt,
		D: _t,
		M: Qt,
		X: Vt
	});
}
class Z {
	constructor(e, o) {
		this.x = e;
		this.y = o;
	}
	p(e) {
		return new Z(this.x - e.x, this.y - e.y);
	}
}
class _ {
	constructor(e, o, t, n) {
		this.m = e;
		this.type = o;
		this.listener = t;
		this.g = n;
	}
	remove() {
		this.m.removeEventListener(this.type, this.listener, this.g);
	}
}

function tt(e, o) {
	e.onmousemove = t => {
		o(new xt(e, t));
	};
}

function nt(e, o) {
	e.onmousedown = t => {
		o(new xt(e, t));
	};
}

function et(e, o) {
	e.onmouseover = t => {
		o(new xt(e, t));
	};
}

function it(e, o) {
	e.onmouseup = t => {
		o(new xt(e, t));
	};
}

function rt(e, o) {
	e.onmouseout = t => {
		o(new xt(e, t));
	};
}

function ot(e, o) {
	e.onclick = t => {
		o(new xt(e, t));
	};
}

function ut(e, o) {
	e.ondblclick = t => {
		o(new xt(e, t));
	};
}

function ct(e, o) {
	mt(e, "click", o);
}

function ft(e, o) {
	mt(e, "dblclick", o);
}

function lt(e, o) {
	return mt(e, "mouseover", o);
}

function st(e, o) {
	return mt(e, "mouseup", o);
}

function at(e, o) {
	let t;
	t = t => {
		let n, i;
		n = t.currentTarget;
		i = t.relatedTarget;
		if(n === e && n !== i && !pt(n, i)) {
			o(new xt(e, t));
		}
	};
	e.addEventListener("mouseout", t, false);
	return new _(e, "mouseout", t, false);
}

function dt(e, o) {
	e.onmouseout = t => {
		let n, i;
		n = t.currentTarget;
		i = t.relatedTarget;
		if(n === e && n !== i && !pt(n, i)) {
			o(new xt(e, t));
		}
	};
}

function wt(e, o) {
	for(let t of e) {
		t.onmouseout = ht(t, e, o);
	}
}

function ht(e, o, t) {
	return n => {
		let i, c;
		i = n.currentTarget;
		c = n.relatedTarget;
		if(i === e && i !== c && !pt(i, c)) {
			for(let e of o)
				if(c === e) return;
			t(new xt(e, n));
		}
	};
}

function pt(e, o) {
	try {
		if(!o) return false;
		while(o.parentNode)
			if((o = o.parentNode) === e) return true;
		return false;
	}
	catch (e) {
		return false;
	}
}
class xt {
	constructor(e, o) {
		this.element = e;
		this.event = o;
		this.v = null;
		this.k = null;
	}
	T() {
		if(this.v === null) {
			let e = yt(this.element);
			this.v = e.x;
			this.k = e.y;
		}
		return this.v;
	}
	R() {
		if(this.v === null) {
			this.T();
		}
		return this.k;
	}
}

function mt(e, o, t) {
	let n = o => {
		let n = new xt(e, o);
		t(n);
	};
	e.addEventListener(o, n, false);
	return new _(e, o, n, false);
}

function gt(e) {
	return bt(e);
}

function yt(e, o) {
	return bt(o).p(vt(e));
}

function bt(e) {
	let o, t;
	o = e.clientX + window.scrollX;
	t = e.clientY + window.scrollY;
	return new Z(o, t);
}

function vt(e) {
	let o = e;
	let t = 0;
	let n = 0;
	let loop = true;
	while(loop) {
		let e = o.offsetParent;
		if(e === null) loop = false;
		t += o.offsetLeft;
		n += o.offsetTop;
		o = e;
	}
	return new Z(t, n);
}

function kt() {
	return window.scrollY;
}

function Tt() {
	return window.scrollX;
}
let co = {};
co.Yo = 32;
co.imageWidth = 1024;
co.imageHeight = 1024;
class ao {
	constructor({
		parent: e,
		label: o,
		Uo: t,
		Qo: n,
		isEnabled: i,
		Ho: c,
		className: a
	}) {
		this.div = J(e, "div", {
			className: "clickable" + (a ? " " + a : ""),
			textContent: o,
			onclick: e => {
				if(this.isEnabled) n(e, this.div);
				else if(this.Ho) this.Ho(e);
			}
		}).t;
		this.ae(i);
		this.Ho = c;
	}
	ae(e) {
		this.isEnabled = e;
	}
}

function ro(e) {
	return "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://" + e + "&size=32";
}

function so(e) {
	let n = document.createElement("div");
	let o = j(e);
	let t = ro(o);
	let r = document.createElement("img");
	let icon = document.createElement("span");
	icon.className = "icon";
	icon.style.display = "none";
	icon.textContent = "";
	r.className = "favicon";
	n.appendChild(r);
	n.appendChild(icon);
	if(!(!o || !o.includes(".") || o === "localhost" || o.startsWith("192.168.") || o.startsWith("172.16.") || o.startsWith("10."))) {
		if(a || c) {
			r.onload = () => {
				if(Ao === ko(r)) {
					r.onload = null;
					icon.style.display = "block";
					r.style.display = "none";
				}
			};
			(async () => {
				await x();
				r.src = d + "favicon/size/16@2x/" + S(e) + O(e);
			})();
		}
		else {
			(async () => {
				await x();
				r.src = t;
			})();
		}
	}
	else {
		icon.style.display = "block";
		r.style.display = "none";
	}
	return n;
}
class mo {
	constructor(e, o) {
		this.Jo = o;
		this.url = e["url"];
		this.title = e["title"];
		this.Ko = e["pinned"];
		this.Zo = e["id"];
		let t = F(W(e["title"]));
		if(t === "") t = "Untitled";
		let n = Mt.it(X(this.url));
		const i = J(undefined, "div", {
			className: "clickable tabLink tab",
			onclick: e => {
				let o = go(e);
				let t = bo(e);
				(async () => {
					let e = await Mt.Tt("restoreRemoval");
					if(o || this.Jo.locked || e === "keep") {
						if(t) {
							await Mt.Xt([{
								url: n,
								pinned: this.Ko
							}]);
						}
						else {
							let e = u;
							await Mt._t(n, !!this.Ko, e);
						}
					}
					else {
						Mt.Jt(this.Jo.dn, this.Zo);
						let e = u;
						await Mt._t(n, !!this.Ko, e);
						await Mt.wt();
					}
				})();
				return false;
			},
			children: {
				_o: Eo.Co(),
				pn: J(undefined, "div", {
					className: "delete icon",
					textContent: "",
					onmousedown: e => {
						c.parentNode.removeChild(c);
						Mt.Jt(this.Jo.dn, this.Zo);
					}
				}).t,
				sn: so(n, this.Jo.locked),
				mn: J(undefined, "div", {
					className: "title",
					textContent: t
				})
			},
			init: e => {
				lt(e, (e => {
					if(!this.Jo.locked) {
						if(!Eo.ro) i.pn.style.visibility = "visible";
					}
				}));
				at(e, (e => {
					i.pn.style.visibility = "hidden";
				}));
			}
		});
		this.div = i.t;
		const c = i.t;
		let a = i._o;
		this.sn = i.sn;
		Eo.uo({
			po: c,
			ho: {
				dn: this.Jo.dn,
				hn: this.Zo,
				gn: this.Jo.gn
			},
			fo: i.t,
			Ao: c,
			bo: "tab",
			wo: () => {},
			vo: () => {},
			xo: () => {
				Eo.so.insertBefore(Eo.oo, Eo.mo);
			},
			yo: () => {},
			ko: () => !!this.Jo.locked
		});
		Eo.Lo({
			element: i.t,
			objectType: "tab",
			zo: a,
			So: async e => {
				let o = this.Zo;
				await this.Jo.fn(o, e);
			}
		});
	}
	bn(e) {}
}
class lo {
	constructor(e) {
		this.wn = new Map;
		this.da = !!e["starred"];
		this.vn = e["starredDate"];
		this.xn = e["createDate"];
		this.locked = !!e["locked"];
		this.label = e["label"];
		this.dn = e["id"];
		this.yn = new ao({
			label: "",
			Uo: 30,
			Qo: e => {
				let o = St("areYouSureYouWantToDeleteThisTab");
				if(this.kn() >= 2) o = St("areYouSureYouWantToDeleteTheseTabs");
				if(jo || confirm(o)) {
					Mt.jt(this.dn, false);
				}
			},
			isEnabled: !this.locked,
			Ho: e => {
				if(!jo) alert(St("unlockBeforeDeleting"));
			},
			className: "deleteAllButton icon"
		});
		let o = (e, o, t, n) => {
			let i = J(undefined, "div", {
				className: "clickable" + (t ? " " + t : ""),
				textContent: e
			}).t;
			i.addEventListener("mousedown", (e => {
				e.stopPropagation();
				setTimeout((() => So()), 1);
				setTimeout((() => So()), 200);
				n(e);
			}), false);
			return i;
		};
		let n = J(undefined, "div", {
			className: "tabGroup",
			children: {
				tn: J(undefined, "div", {
					children: {
						Gn: J(undefined, "h2", {
						}).t,
						// hide: J(undefined, "div", {
						// 	display: this.da ? "inline-block" : "none",
						// 	className: "hideicon icon",
						// 	textContent: ""
						// }).t,
						In: J(undefined, "div", {
							className: "tabCount",
							onclick: () => {
								this.Tn.No();
							}
						}).t,
						On: J(undefined, "div", {
							className: "tabOptions",
							children: {
								Rn: J(undefined, "div", {
									textContent: St("createdPreceedingDate") + " " + new Date(this.xn).toLocaleString()
								}),
								$n: new ao({
									label: "",
									Uo: 30,
									Qo: e => {
										let o = go(e);
										let t = bo(e);
										let n;
										if(o) {
											n = t ? "newWindow" : "currentWindow";
										}
										if(u) n = "currentWindow";
										(async () => {
											let e = await Mt.Tt("restoreRemoval");
											if(o || this.locked || e === "keep") {
												await Mt.zt(this.dn, n);
											}
											else {
												await Mt.jt(this.dn, true, n);
											}
										})();
									},
									isEnabled: true,
									className: "restoreAllButton icon"
								}).div,
								Pn: this.yn.div,
								Yt: new ao({
									label: "",
									Uo: 30,
									Qo: (e, o) => {
										o.textContent = "";
										Mt.Yt([this.dn], false).then((() => {
											Lt(o);
											o.textContent = "";
										}));
									},
									isEnabled: true,
									className: "shareAsWebPageButton icon"
								}).div,
								An: o("", 6, "nameThisTabGroupButton icon", (e => {
									if(this.label == "") {
										this.Tn.Wo("", false, true);
									}
									this.Tn.No();
								})),
								jn: o(this.locked ? "" : "", 6, "toggleLockTabGroupButton icon", (e => {
									this.locked = !this.locked;
									Mt.qt(this.dn, {
										locked: this.locked
									});
								})),
								En: o(this.da ? "" : "", 6, "toggleStarTabGroupButton icon", (e => {
									this.da = !this.da;
									if(this.da) this.vn = (new Date).getTime();
									Mt.qt(this.dn, {
										starred: this.da,
										starredDate: this.vn,
									});
								})),
								// hide: o(this.hidden ? St("unhideTabGroup") : St("hideTabGroup"), 6, "toggleHideTabGroupButton", (e => {
								// 	this.hidden = !this.hidden;
								// 	Mt.qt(this.dn, {
								// 		hidden: this.hidden
								// 	});
								// })),
								zn: o("", 0, "tabGroupHelpButton icon", (e => {
									(async () => {
										await Mt._t(h + "/wiki/Help", false, true);
									})();
								}))
							}
						})
					}
				}),
				Nn: J(undefined, "div", {
					className: "tabList",
				}).t,
				qn: J(undefined, "div", {
					children: {
						Fn: Eo.Co()
					}
				})
			}
		});
		this.Dn = n.tn.On;
		this.div = n.t;
		let i = n.tn.Gn;
		this.Tn = new to({
			parentElement: i,
			Go: (e, o) => {
				if(o) {
					e = F(e);
					if(e === "") e = undefined;
					Mt.qt(this.dn, {
						label: e
					});
				}
			},
			value: this.label,
			Bo: 24,
			fontWeight: "300",
			Io: "tabGroupTitleText",
			Oo: () => this.locked,
			Ro: undefined
		});
		this.In = n.tn.In;
		this.Nn = n.Nn;
		for(let o of e["tabsMeta"]) this.Mn(o);
		this.Vn();
		this.fn = async (e, o) => {
			let t = o.dn;
			let n = this.dn;
			if(t === n) await Mt.Vt(t, o.hn, e);
			else await Mt.Kt(t, n, o.hn, e);
		};
		Eo.Lo({
			element: n.qn.t,
			objectType: "tab",
			zo: n.qn.Fn,
			So: async e => {
				let o = undefined;
				await this.fn(o, e);
			}
		});
	}
	Yn(e) {
		this.Dn.En.textContent = e ? "" : "";
	}
	bn(e) {
		this.locked = e;
		Array.from(this.wn.values()).forEach((o => o.bn(e)));
		this.Dn.jn.textContent = this.locked ? "" : "";
		this.yn.ae(!this.locked);
	}
	Vn() {
		this.In.textContent = ho(this.kn());
	}
	kn() {
		return this.wn.size;
	}
	Xn(e) {
		let o = 0;
		e.forEach((e => {
			let t = new mo(e, this);
			this.wn.set(e["id"], t);
			G(t.div, this.Nn, o++);
		}));
	}
	Mn(e, o) {
		let t = new mo(e, this);
		this.wn.set(e["id"], t);
		G(t.div, this.Nn, o);
	}
	Un(e) {
		let o = this.wn.get(e);
		if(o.div.parentElement) o.div.remove();
		this.wn.delete(e);
	}
	Qn(e, o) {
		let t = this.wn.get(e);
		G(t.div, this.Nn, o);
	}
	Hn(e) {
		return this.wn.get(e);
	}
	Jn(e) {
		G(this.div, this.div.parentElement, e);
	}
}

function uo(e) {
	if(!e) return "";
	if(e.toLowerCase().startsWith("file://")) return "";
	if(e.indexOf("://docs.google.com/spreadsheets/d/") !== -1) return "docs.google.com-spreadsheets";
	if(e.indexOf("://docs.google.com/document/d/") !== -1) return "docs.google.com-document";
	if(e.indexOf("://docs.google.com/presentation/d/") !== -1) return "docs.google.com-presentation";
	if(e.indexOf("://docs.google.com/forms/d/") !== -1) return "docs.google.com-forms";
	let o = R(e);
	if(o.endsWith(".wikipedia.org")) o = "wikipedia.org";
	return o;
}

function po(e) {
	if(e === 0) return "0 total tabs";
	if(e === 1) return "1 total tab";
	return e + " total tabs";
}

function ho(e) {
	return e === 1 ? St("1tab") : St("2tabs").replace("2", e + "");
}

function go(e) {
	return e.ctrlKey || e.shiftKey || e.metaKey;
}

function fo(e) {
	return e.ctrlKey || e.metaKey;
}

function bo(e) {
	return e.shiftKey;
}

function vo() {
	let e = document.createElement("span");
	let o = document.createElement("span");
	o.appendChild(document.createTextNode("One"));
	e.appendChild(o);
	e.appendChild(document.createTextNode("Tab"));
	return e;
}
async function xo(e) {
	return new Promise(((o, t) => {
		if(f) {
			o(true);
			return;
		}
		let n = {
			alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA=="
		};
		let i = new Image;
		i.onload = () => {
			let e = i.width > 0 && i.height > 0;
			o(e);
		};
		i.onerror = () => {
			t();
		};
		i.src = "data:image/webp;base64," + n[e];
	}));
}
async function yo(e) {
	return new Promise(((o, t) => {
		let n = new Image;
		n.onload = () => {
			o(ko(n));
		};
		n.onerror = e => {
			t(e);
		};
		n.src = e;
	}));
}

function ko(e) {
	let o = document.createElement("canvas");
	o.width = 32;
	o.height = 32;
	let t = o.getContext("2d");
	t.drawImage(e, 0, 0, 32, 32);
	let n = o.toDataURL("image/png");
	return n.replace(/^data:image\/png;base64,/, "");
}
let Ao;
let To;
setTimeout((async () => {
	async function e() {
		return new Promise(((e, o) => {
			chrome.tabs.getCurrent((t => {
				if(chrome.runtime.lastError) {
					o(chrome.runtime.lastError.message);
				}
				else {
					e(t);
				}
			}));
		}));
	}
	let o = await Mt.Nt((await e())["id"]);
	if(o) {
		return;
	}
	let t = a || c;
	try {
		if(t) Ao = await yo(d + "favicon/size/16@2x/" + "http://example.com");
	}
	catch (e) {
		console.log(e);
	}
	To = await xo("alpha");
	await jt();
	await re();
	Co();
}), 1);
let jo = false;
const Eo = new eo;
let zo = undefined;
const Do = 11;

function So() {
	zo = undefined;
}

function Lo(e) {
	let o = Array.from(document.getElementsByClassName("tabGroup")).filter((o => {
		let t = Array.from(o.getElementsByClassName("tabLink")).map((e => e.href));
		return t.length > 0 && t[0] === e;
	}));
	if(o.length === 0) throw new Error("No matching tab group");
	if(o.length > 1) throw new Error("More than one matching tab group");
	return o;
}

function Co() {
	window.chrome.runtime.onMessage.addListener(((e, o, t) => {
		(async () => {
			try {
				if(e["type"] === "ping") {
					await V(1e4, "waiting for tab groups to appear in onetab", (() => !!document.getElementById("tabGroupsDiv")));
					t({
						pong: true
					});
				}
				else if(e["type"] === "testExtFavIconLoad") {
					let e = document.createElement("img");
					e.onload = () => {
						t({
							Ia: true
						});
					};
					e.onerror = () => {
						t({
							Ia: false
						});
					};
					e.src = ro("example.com");
				}
				else if(e["type"] === "getVisibleStructure") {
					await V(1e4, "waiting for tab groups to appear in onetab", (() => !!document.getElementById("tabGroupsDiv")));
					t({
						ma: q(document.getElementById("headerText").textContent),
						fa: Array.from(document.getElementsByClassName("tabGroup")).map((e => ({
							ya: q(e.getElementsByClassName("tabCount")[0].textContent),
							Kn: e.getElementsByClassName("tabGroupTitleText")[0].textContent,
							da: e.getElementsByClassName("starImg")[0].style.display !== "none",
							locked: e.getElementsByClassName("lockImg")[0].style.display !== "none",
							// hidden: e.getElementsByClassName("hideicon")[0].style.display !== "none",
							tabs: Array.from(e.getElementsByClassName("tabLink")).map((e => e.href))
						})))
					});
				}
				else if(e["type"] === "clickTab") {
					let o = Array.from(document.getElementsByClassName("tabLink")).find((o => o.href === e.url));
					o.onclick(new MouseEvent("click", e.ta));
					t();
				}
				else if(e["type"] === "clickTabGroupButton") {
					let o = Lo(e.la);
					let n = o[0].getElementsByClassName(e.oa)[0];
					jo = true;
					let i = e.Ga ? e.Ga : "click";
					n.dispatchEvent(new MouseEvent(i, e.ta ? e.ta : {}));
					jo = false;
					t();
				}
				else if(e["type"] === "getTabGroupElementDisplayed") {
					let o = Lo(e.la);
					let n = o[0].getElementsByClassName(e.Ea)[0];
					t({});
				}
				else {
					t();
				}
			}
			catch (e) {
				t({
					error: String(e)
				});
			}
		})();
		return true;
	}));
}
async function re() {
	if(u) {
		let e = document.createElement("meta");
		e.name = "viewport";
		e.content = "initial-scale=0.8";
		document.getElementsByTagName("head")[0].appendChild(e);
	}
	let e = new Go;
	await e.Zn();
}
class Go {
	async Zn() {
		await this._n();
		this.ei();
		document.addEventListener("mousedown", (() => {
			So();
		}), false);
	}
	async _n() {
		let e = [];
		Mt.Ht(((o, t) => {
			e.push({
				oi: o,
				ti: t
			});
		}));
		let o = await Mt.getState();
		let t = J(document.getElementById("contentAreaDiv"), undefined, {
		});
		let header = J(document.getElementById("header"), undefined, {
			children: {
				L: J(undefined, "div", {
					id: "headerText",
					textContent: e
				}).t
			}
		});
		let n = t.t;
		let i = header.L;
		let c = o["tabGroups"];
		// if(u) {
		// 	settingsDiv(document.createTextNode("Bring all tabs into OneTab Reborn"), 14, (() => {
		// 		(async () => {
		// 			await Mt.nt(undefined);
		// 		})();
		// 	}));
		// }
		let a = document.createElement("div");
		a.id = "tabGroupsDiv";
		let r = new Map;
		let s = () => Array.from(r.values()).map((e => e.wn.size)).reduce(((e, o) => e + o), 0);
		c.forEach((e => {
			let o = new lo(e);
			a.appendChild(o.div);
			r.set(e["id"], o);
		}));
		// let l = J(n, "div", {
		// 	textContent: St("emptyOneTabInfoMsg")
		// }).t;
		let d = e => {
			i.textContent = po(e);
		};
		d(s());
		let p = (e, o) => {
			if(e["type"] === "createTabGroup") {
				if(!o) {
					let o = new lo(e["tabGroup"]);
					G(o.div, a, e["index"]);
					r.set(e["tabGroupId"], o);
					Fe("tabGroupView.scrollIntoView", 50, (() => o.div.scrollIntoView()));
				}
				else {
					let o = r.get(e["tabGroupId"]);
					r.delete(e["tabGroupId"]);
					o.div.remove();
				}
				d(s());
			}
			else if(e["type"] === "createTabs") {
				let t = r.get(e["tabGroupId"]);
				if(!o) {
					t.Xn(e["newTabsMeta"]);
					Fe("tabGroupView.scrollIntoView", 50, (() => t.div.scrollIntoView()));
				}
				else {
					e["newTabsMeta"].forEach((e => t.Un(e["id"])));
				}
				t.Vn();
				d(s());
			}
			else if(e["type"] === "deleteTabs") {
				let t = r.get(e["tabGroupId"]);
				if(!o) {
					e["tabMetaIds"].forEach((e => t.Un(e)));
				}
				else {
					e["tabsMetaDeleted"].forEach(((o, n) => t.Mn(o, e["tabIndicesDeleted"][n])));
				}
				t.Vn();
				d(s());
			}
			else if(e["type"] === "deleteTabGroup") {
				if(!o) {
					let o = r.get(e["tabGroupId"]);
					r.delete(e["tabGroupId"]);
					o.div.remove();
				}
				else {
					let o = new lo(e["tabGroup"]);
					G(o.div, a, e["index"]);
					r.set(e["deletedTabGroup"]["id"], o);
				}
				d(s());
			}
			else if(e["type"] === "updateTabGroup") {
				let t = o ? "old" : "new";
				let n = e["propChanges"];
				let i = r.get(e["tabGroupId"]);
				if(n["label"]) i.Tn.Wo(n["label"][t], false, true);
				if(n["starred"]) i.Yn(n["starred"][t]);
				if(n["locked"]) i.bn(n["locked"][t]);
				if(n["index"]) i.Jn(n["index"][t]);
			}
			else if(e["type"] === "reorderTab") {
				let t = r.get(e["tabGroupId"]);
				t.Qn(e["tabMetaId"], e[o ? "oldIndex" : "newIndex"]);
			}
			else if(e["type"] === "moveTabBetweenTabGroups") {
				if(o && e["deletedSourceTabGroup"]) {
					let o = new lo(e["deletedSourceTabGroup"]);
					G(o.div, a, e["sourceTabGroupIndex"]);
					r.set(o.dn, o);
				}
				let t = r.get(e["targetTabGroupId"]);
				if(!o) {
					let o = r.get(e["sourceTabGroupId"]);
					let n = o.Hn(e["tabMetaId"]);
					let i = {
						url: n.url,
						title: n.title,
						pinned: n.Ko,
						id: n.Zo
					};
					o.Un(e["tabMetaId"]);
					t.Mn(i, e["targetTabGroupTabIndex"]);
					if(e["deletedSourceTabGroup"]) {
						r.delete(e["deletedSourceTabGroup"]["id"]);
						o.div.remove();
					}
					else {
						o.Vn();
					}
				}
				else {
					t.Un(e["tabMetaId"]);
				}
				t.Vn();
			}
		};
		n.appendChild(a);
		document.getElementById("loadingSpinner").remove();
		while(e.length > 0) {
			let o = e.shift();
			p(o.oi, o.ti);
		}
		Mt.Ht(p);
	}
	ei() {
		if(u) return;
		let e = 12.25;
		J(document.getElementById("settingsDiv"), undefined, {
			children: {
				ii: settingsDiv(document.createTextNode("Pull all tabs"), 14, (() => {
					(async () => {
						await Mt.nt(undefined);
					})();
				})),
				ci: settingsDiv("Share", e, (e => {
					(async () => {
						e.textContent = "Please wait...";
						let o = [];
						let t = await Mt.getState();
						let n = t["tabGroups"];
						if(!n) n = [];
						for(let e of n) {
							if(!e["createDate"]) e["createDate"] = (new Date).getTime();
						}
						for(let e of n) {
							for(let t of e["tabsMeta"]) o.push(t);
						}
						if(o.length === 0) {
							alert(St("noTabsInOneTabYet"));
						}
						else {
							await Mt.Yt(undefined, true);
							e.textContent = "Share";
						}
					})();
				})),
				settings: settingsDiv("Settings", e, (() => {
					Mt.lt("settings.html");
				})),
				ai: settingsDiv("Export / Import", e, (() => {
					Mt.lt("import-export.html");
				})),
				ri: settingsDiv("About / Feedback", e, (() => {
					Mt._t(h, false, true);
				}))
			}
		});
	}
}
let Ne = {};

function Fe(e, o, t, n) {
	if(n) {
		delete Ne[e];
		t();
	}
	else {
		if(!Ne[e]) {
			Ne[e] = true;
			setTimeout((() => Fe(e, o, t, true)), o);
		}
	}
}
