var mime_samples = [
  { 'mime': 'application/javascript', 'samples': [
    { 'url': 'http://10.10.10.2/mysite/bootstrap.min.cs', 'dir': '_m0/0', 'linked': 2, 'len': 67285 } ]
  },
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://10.10.10.2/', 'dir': '_m1/0', 'linked': 2, 'len': 1964 },
    { 'url': 'http://10.10.10.2/icons/', 'dir': '_m1/1', 'linked': 2, 'len': 291 },
    { 'url': 'http://10.10.10.2/images/', 'dir': '_m1/2', 'linked': 2, 'len': 1125 },
    { 'url': 'http://10.10.10.2/mysite/', 'dir': '_m1/3', 'linked': 5, 'len': 2206 },
    { 'url': 'http://10.10.10.2/mysite/register.html', 'dir': '_m1/4', 'linked': 5, 'len': 1987 },
    { 'url': 'http://10.10.10.2/index.htm', 'dir': '_m1/5', 'linked': 2, 'len': 2186 } ]
  },
  { 'mime': 'image/gif', 'samples': [
    { 'url': 'http://10.10.10.2/icons/a.gif', 'dir': '_m2/0', 'linked': 0, 'len': 246 },
    { 'url': 'http://10.10.10.2/icons/back.gif', 'dir': '_m2/1', 'linked': 2, 'len': 216 },
    { 'url': 'http://10.10.10.2/icons/blank.gif', 'dir': '_m2/2', 'linked': 2, 'len': 148 },
    { 'url': 'http://10.10.10.2/icons/image2.gif', 'dir': '_m2/3', 'linked': 2, 'len': 309 },
    { 'url': 'http://10.10.10.2/icons/p.gif', 'dir': '_m2/4', 'linked': 0, 'len': 237 },
    { 'url': 'http://10.10.10.2/images/m.gif', 'dir': '_m2/5', 'linked': 2, 'len': 400000 } ]
  },
  { 'mime': 'image/jpeg', 'samples': [
    { 'url': 'http://10.10.10.2/images/game.jpg', 'dir': '_m3/0', 'linked': 2, 'len': 38032 } ]
  },
  { 'mime': 'text/css', 'samples': [
    { 'url': 'http://10.10.10.2/mysite/all.css', 'dir': '_m4/0', 'linked': 2, 'len': 55183 },
    { 'url': 'http://10.10.10.2/landing.css', 'dir': '_m4/1', 'linked': 2, 'len': 879 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://10.10.10.2/mysite/bootstrap.bundle.min.js', 'dir': '_m5/0', 'linked': 2, 'len': 78635 },
    { 'url': 'http://10.10.10.2/mysite/bootstrap.min.css', 'dir': '_m5/1', 'linked': 2, 'len': 155758 },
    { 'url': 'http://10.10.10.2/mysite/jquery.slim.min.js', 'dir': '_m5/2', 'linked': 5, 'len': 71037 },
    { 'url': 'http://10.10.10.2/mysite/register.css', 'dir': '_m5/3', 'linked': 2, 'len': 2503 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40401, 'samples': [
    { 'url': 'http://10.10.10.2/mysite/jquery.slim.min.js', 'extra': 'Delimited database dump', 'sid': '0', 'dir': '_i0/0' } ]
  },
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://10.10.10.2/', 'extra': 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js', 'sid': '0', 'dir': '_i1/0' },
    { 'url': 'http://10.10.10.2/', 'extra': 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/1' },
    { 'url': 'http://10.10.10.2/', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js', 'sid': '0', 'dir': '_i1/2' },
    { 'url': 'http://10.10.10.2/index.htm', 'extra': 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js', 'sid': '0', 'dir': '_i1/3' },
    { 'url': 'http://10.10.10.2/index.htm', 'extra': 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', 'sid': '0', 'dir': '_i1/4' },
    { 'url': 'http://10.10.10.2/index.htm', 'extra': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.slim.min.js', 'sid': '0', 'dir': '_i1/5' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://10.10.10.2/', 'extra': '', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://10.10.10.2/mysite/all.css', 'extra': '', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://10.10.10.2/mysite/bootstrap.bundle.min.js', 'extra': '', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://10.10.10.2/mysite/bootstrap.min.cs', 'extra': '', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://10.10.10.2/mysite/bootstrap.min.css', 'extra': '', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://10.10.10.2/mysite/jquery.slim.min.js', 'extra': '', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://10.10.10.2/mysite/register.css', 'extra': '', 'sid': '0', 'dir': '_i2/6' },
    { 'url': 'http://10.10.10.2/mysite/register.html', 'extra': '', 'sid': '0', 'dir': '_i2/7' },
    { 'url': 'http://10.10.10.2/index.htm', 'extra': '', 'sid': '0', 'dir': '_i2/8' },
    { 'url': 'http://10.10.10.2/index.html', 'extra': '', 'sid': '0', 'dir': '_i2/9' },
    { 'url': 'http://10.10.10.2/landing.css', 'extra': '', 'sid': '0', 'dir': '_i2/10' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://10.10.10.2/mysite/bootstrap.min.cs', 'extra': 'application/javascript', 'sid': '0', 'dir': '_i3/0' } ]
  },
  { 'severity': 0, 'type': 10601, 'samples': [
    { 'url': 'http://10.10.10.2/mysite/jquery.slim.min.js', 'extra': '', 'sid': '0', 'dir': '_i4/0' },
    { 'url': 'http://10.10.10.2/mysite/register.html', 'extra': '', 'sid': '0', 'dir': '_i4/1' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://10.10.10.2/icons/a.gif', 'extra': '', 'sid': '0', 'dir': '_i5/0' },
    { 'url': 'http://10.10.10.2/icons/p.gif', 'extra': '', 'sid': '0', 'dir': '_i5/1' },
    { 'url': 'http://10.10.10.2/index.html', 'extra': '', 'sid': '0', 'dir': '_i5/2' } ]
  },
  { 'severity': 0, 'type': 10404, 'samples': [
    { 'url': 'http://10.10.10.2/images/', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://10.10.10.2/images/?C=9876sfi;O=D', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://10.10.10.2/images/?C=N;O=9876sfi', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://10.10.10.2/mysite/', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i6/3' },
    { 'url': 'http://10.10.10.2/mysite/?C=9876sfi;O=D', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i6/4' },
    { 'url': 'http://10.10.10.2/mysite/?C=N;O=9876sfi', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i6/5' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://10.10.10.2/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://10.10.10.2/', 'extra': 'Apache/2.4.38 (Debian)', 'sid': '0', 'dir': '_i8/0' } ]
  }
];

