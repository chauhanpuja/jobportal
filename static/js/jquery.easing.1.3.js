jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, e, t, r, u) {
        return jQuery.easing[jQuery.easing.def](n, e, t, r, u)
    },
    easeInQuad: function(n, e, t, r, u) {
        return r * (e /= u) * e + t
    },
    easeOutQuad: function(n, e, t, r, u) {
        return -r * (e /= u) * (e - 2) + t
    },
    easeInOutQuad: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? r / 2 * e * e + t : -r / 2 * (--e * (e - 2) - 1) + t
    },
    easeInCubic: function(n, e, t, r, u) {
        return r * (e /= u) * e * e + t
    },
    easeOutCubic: function(n, e, t, r, u) {
        return r * ((e = e / u - 1) * e * e + 1) + t
    },
    easeInOutCubic: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? r / 2 * e * e * e + t : r / 2 * ((e -= 2) * e * e + 2) + t
    },
    easeInQuart: function(n, e, t, r, u) {
        return r * (e /= u) * e * e * e + t
    },
    easeOutQuart: function(n, e, t, r, u) {
        return -r * ((e = e / u - 1) * e * e * e - 1) + t
    },
    easeInOutQuart: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? r / 2 * e * e * e * e + t : -r / 2 * ((e -= 2) * e * e * e - 2) + t
    },
    easeInQuint: function(n, e, t, r, u) {
        return r * (e /= u) * e * e * e * e + t
    },
    easeOutQuint: function(n, e, t, r, u) {
        return r * ((e = e / u - 1) * e * e * e * e + 1) + t
    },
    easeInOutQuint: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? r / 2 * e * e * e * e * e + t : r / 2 * ((e -= 2) * e * e * e * e + 2) + t
    },
    easeInSine: function(n, e, t, r, u) {
        return -r * Math.cos(e / u * (Math.PI / 2)) + r + t
    },
    easeOutSine: function(n, e, t, r, u) {
        return r * Math.sin(e / u * (Math.PI / 2)) + t
    },
    easeInOutSine: function(n, e, t, r, u) {
        return -r / 2 * (Math.cos(Math.PI * e / u) - 1) + t
    },
    easeInExpo: function(n, e, t, r, u) {
        return 0 == e ? t : r * Math.pow(2, 10 * (e / u - 1)) + t
    },
    easeOutExpo: function(n, e, t, r, u) {
        return e == u ? t + r : r * (-Math.pow(2, -10 * e / u) + 1) + t
    },
    easeInOutExpo: function(n, e, t, r, u) {
        return 0 == e ? t : e == u ? t + r : (e /= u / 2) < 1 ? r / 2 * Math.pow(2, 10 * (e - 1)) + t : r / 2 * (-Math.pow(2, -10 * --e) + 2) + t
    },
    easeInCirc: function(n, e, t, r, u) {
        return -r * (Math.sqrt(1 - (e /= u) * e) - 1) + t
    },
    easeOutCirc: function(n, e, t, r, u) {
        return r * Math.sqrt(1 - (e = e / u - 1) * e) + t
    },
    easeInOutCirc: function(n, e, t, r, u) {
        return (e /= u / 2) < 1 ? -r / 2 * (Math.sqrt(1 - e * e) - 1) + t : r / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
    },
    easeInElastic: function(n, e, t, r, u) {
        var a = 1.70158,
            i = 0,
            s = r;
        if (0 == e) return t;
        if (1 == (e /= u)) return t + r;
        if (i || (i = .3 * u), s < Math.abs(r)) {
            s = r;
            var a = i / 4
        } else var a = i / (2 * Math.PI) * Math.asin(r / s);
        return -(s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * u - a) * (2 * Math.PI) / i)) + t
    },
    easeOutElastic: function(n, e, t, r, u) {
        var a = 1.70158,
            i = 0,
            s = r;
        if (0 == e) return t;
        if (1 == (e /= u)) return t + r;
        if (i || (i = .3 * u), s < Math.abs(r)) {
            s = r;
            var a = i / 4
        } else var a = i / (2 * Math.PI) * Math.asin(r / s);
        return s * Math.pow(2, -10 * e) * Math.sin((e * u - a) * (2 * Math.PI) / i) + r + t
    },
    easeInOutElastic: function(n, e, t, r, u) {
        var a = 1.70158,
            i = 0,
            s = r;
        if (0 == e) return t;
        if (2 == (e /= u / 2)) return t + r;
        if (i || (i = u * (.3 * 1.5)), s < Math.abs(r)) {
            s = r;
            var a = i / 4
        } else var a = i / (2 * Math.PI) * Math.asin(r / s);
        return 1 > e ? -.5 * (s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * u - a) * (2 * Math.PI) / i)) + t : s * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * u - a) * (2 * Math.PI) / i) * .5 + r + t
    },
    easeInBack: function(n, e, t, r, u, a) {
        return void 0 == a && (a = 1.70158), r * (e /= u) * e * ((a + 1) * e - a) + t
    },
    easeOutBack: function(n, e, t, r, u, a) {
        return void 0 == a && (a = 1.70158), r * ((e = e / u - 1) * e * ((a + 1) * e + a) + 1) + t
    },
    easeInOutBack: function(n, e, t, r, u, a) {
        return void 0 == a && (a = 1.70158), (e /= u / 2) < 1 ? r / 2 * (e * e * (((a *= 1.525) + 1) * e - a)) + t : r / 2 * ((e -= 2) * e * (((a *= 1.525) + 1) * e + a) + 2) + t
    },
    easeInBounce: function(n, e, t, r, u) {
        return r - jQuery.easing.easeOutBounce(n, u - e, 0, r, u) + t
    },
    easeOutBounce: function(n, e, t, r, u) {
        return (e /= u) < 1 / 2.75 ? r * (7.5625 * e * e) + t : 2 / 2.75 > e ? r * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t : 2.5 / 2.75 > e ? r * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t : r * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
    },
    easeInOutBounce: function(n, e, t, r, u) {
        return u / 2 > e ? .5 * jQuery.easing.easeInBounce(n, 2 * e, 0, r, u) + t : .5 * jQuery.easing.easeOutBounce(n, 2 * e - u, 0, r, u) + .5 * r + t
    }
});