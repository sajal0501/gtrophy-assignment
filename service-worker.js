if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"4b97b2a570ba41d1a1d9023c084eda4c","url":"2df8de709567e293b27c.worker.js"},{"revision":"aebdecfb6283d7621b97ff9e6c2be996","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"aebdecfb6283d7621b97ff9e6c2be996","url":"index.html"},{"revision":"bc55dbedd958c9cb5466f92c350e3447","url":"static/css/22.82de5fb4.chunk.css"},{"revision":"cde61785a0fd95f82b577d693bc32a02","url":"static/js/0.22cbb2c9.chunk.js"},{"revision":"6d41409af01dcd47263dfcaa43d60b25","url":"static/js/1.5949e984.chunk.js"},{"revision":"d36dbe73ce42b2a4c1017b5151b84ff8","url":"static/js/10.9ba183cb.chunk.js"},{"revision":"499e58bbee633ba4b2f9dbd2923f282a","url":"static/js/11.2837961b.chunk.js"},{"revision":"9807797f60422ac604164b69623f647b","url":"static/js/14.c4624bc0.chunk.js"},{"revision":"d23f3d874fa5d8410311cb94b0e670b4","url":"static/js/15.c6767194.chunk.js"},{"revision":"7d7cc46a8f345ebcbf21e040e2768c79","url":"static/js/16.5b6651c3.chunk.js"},{"revision":"c985b25e5fb98e6a9c80df1cf8c920ee","url":"static/js/17.c3f74389.chunk.js"},{"revision":"36bff4aaf860aa9bad6dac5bff83d848","url":"static/js/18.58f46f3f.chunk.js"},{"revision":"057548bd757cedf1ee323f320fc97227","url":"static/js/19.8980d026.chunk.js"},{"revision":"75f0b18f2ad67fe683e3fb5691c3d545","url":"static/js/2.39f723d2.chunk.js"},{"revision":"ab824a4c99ab6f4f3840995ff00c5328","url":"static/js/20.6dd97221.chunk.js"},{"revision":"6233678fb89690ae0daad803bac6d5e0","url":"static/js/21.13be0bb6.chunk.js"},{"revision":"4cef45e7356194d952c9d6600082b2ca","url":"static/js/22.e13d44c2.chunk.js"},{"revision":"6de1c27765edfcaf5634a946a186c972","url":"static/js/23.533e907d.chunk.js"},{"revision":"101353813c1402f4de7c407b624b9022","url":"static/js/24.1ac48085.chunk.js"},{"revision":"100c23f29af739c84ab4ad50a968881d","url":"static/js/25.6a66d3cc.chunk.js"},{"revision":"3ab865cb9b1fe74a992ad7cda476db53","url":"static/js/26.a2a2c5a4.chunk.js"},{"revision":"72224e3e74cfd794be2a5fb59f83e501","url":"static/js/27.62be3f50.chunk.js"},{"revision":"98211d766f90173fd5da695118b042a8","url":"static/js/28.dceb66b6.chunk.js"},{"revision":"0ae301bd52102ab08a8e50a9b115dbfe","url":"static/js/29.f5d1161c.chunk.js"},{"revision":"5c909b13fabf261c07c9617096f5261a","url":"static/js/3.e2da794f.chunk.js"},{"revision":"895ccd3293a3cc72b46de72160cbf75b","url":"static/js/30.bf3abb12.chunk.js"},{"revision":"50f5afbe7e4e26cb7f328d2c7f40aef6","url":"static/js/31.51d4372d.chunk.js"},{"revision":"da4ee3a22905a2ba62f02e1528433496","url":"static/js/32.4593fc19.chunk.js"},{"revision":"5bc2de4608480931f9ddb3dcdf086c1f","url":"static/js/33.3af0eb6a.chunk.js"},{"revision":"d5f3faf6a3a19849a8de2f2b0ae9fcb1","url":"static/js/34.989f4fff.chunk.js"},{"revision":"4fffda601f18f5ff7f9521a02ba4eb97","url":"static/js/35.af7b0841.chunk.js"},{"revision":"99df44cc804ed9c4dcf1ed67d2e432b1","url":"static/js/36.d52b4760.chunk.js"},{"revision":"419c9a67466d0cfc3252dbf1e133f0a1","url":"static/js/37.e97b36a1.chunk.js"},{"revision":"7b5ea8f669e8118c73031d6fd62dac16","url":"static/js/38.7a044e7f.chunk.js"},{"revision":"2334a86864630db76afb57aa2ec10340","url":"static/js/39.f4a3c0d8.chunk.js"},{"revision":"fcd658e017bce407f2b2c1c8bc2638ef","url":"static/js/4.1154b0fb.chunk.js"},{"revision":"64fa400b8bff886dc7a8b97b3171289d","url":"static/js/40.91251e24.chunk.js"},{"revision":"0a4429817d19a9f076c580cf4b0ba0c0","url":"static/js/41.cf098f83.chunk.js"},{"revision":"35c1b37040ee8ab2509e7b212e6ce501","url":"static/js/42.197a8744.chunk.js"},{"revision":"2e74b6e11c1619b727753594570ad3c7","url":"static/js/5.b45eb95d.chunk.js"},{"revision":"e981971d8d8350a0601ce41b297f0441","url":"static/js/6.ea2c60bb.chunk.js"},{"revision":"1b011f1e9035ce6c460552266a683365","url":"static/js/7.854fe25b.chunk.js"},{"revision":"32fa1cc77d8e1b9b9e6087132983bdcb","url":"static/js/8.51d776c9.chunk.js"},{"revision":"74945b3be7c492159dc6a7579c99d4d6","url":"static/js/9.47cd4671.chunk.js"},{"revision":"ebe0b56d79c9b5ec9fdff5a8b68145e0","url":"static/js/main.cc497af4.chunk.js"},{"revision":"097b274030db6eea1762f7455f4dcfe8","url":"static/js/runtime-main.ae82559c.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
