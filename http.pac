// Generated by gfwlist2pac
// https://github.com/clowwindy/gfwlist2pac

var proxy = "SOCKS5 192.168.0.101:19888";

var domains = {
  "co.hk": 1,
  "co.uk": 1,
  "github.com": 1,
  "google.co.jp": 1,
  "google.com": 1,
  "googleapis.com": 1,
  "googlesyndication.com": 1,
  "wikipedia.org": 1
};

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    for (;;) {
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        if (pos <= 0) {
            return direct;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
