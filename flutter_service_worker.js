'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "105cd20b07554e59685be8809a9d78d1",
"index.html": "a89322c7cadd0057ffd2632f5937029d",
"/": "a89322c7cadd0057ffd2632f5937029d",
"main.dart.js": "6947a358c9e0372cb354282b07f9fd52",
"favicon.png": "7976c428456849d71c76f0476964bc94",
"icons/Icon-192.png": "fed4ddaddff3242c73797014cf234b08",
"icons/Icon-maskable-192.png": "fed4ddaddff3242c73797014cf234b08",
"icons/Icon-maskable-512.png": "5b191c867bfeaba9af969856abcf4176",
"icons/Icon-512.png": "5b191c867bfeaba9af969856abcf4176",
"manifest.json": "9643d22929aaca8492a44ef33a01ab75",
"assets/AssetManifest.json": "b8cecc52b96d3ee1bd965448b45d8ac6",
"assets/NOTICES": "58a6f34d18339cc41c664e275caf74ac",
"assets/FontManifest.json": "28ac6c335bffee91f2eae742bae57ba6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/images/imgtest/comics/003.jpg": "8d3857dfcb633f3e28d99b06a039504b",
"assets/assets/images/imgtest/comics/001.jpg": "f3dcc20298f2928a18dfdf59258dc0c4",
"assets/assets/images/imgtest/comics/004.jpg": "49fb08e0d3a7274db85b28459ac6261a",
"assets/assets/images/imgtest/comics/010.jpg": "57bb9d0bc9de67b3285b7a3bd398c016",
"assets/assets/images/imgtest/comics/011.jpg": "50966f50a2fed9cad83edd1768329380",
"assets/assets/images/imgtest/comics/005.jpg": "501dbdde1b0aca0cded68f6df48efaba",
"assets/assets/images/imgtest/comics/007.jpg": "1cd35575c81a3b07b553b3f96faaff74",
"assets/assets/images/imgtest/comics/006.jpg": "76af2d93d9aa68c00e2bbce63a353c92",
"assets/assets/images/imgtest/comics/012.jpg": "ee32a766ad803aa1bf5d445b29b3ed20",
"assets/assets/images/imgtest/comics/008.jpg": "8fc4815cd4482c27b6d9b13310e7208a",
"assets/assets/images/imgtest/comics/009.jpg": "a5ee3b9b67e1d88ea4326f97d7b0964d",
"assets/assets/images/home/icon_quangcao.png": "96ec7da95e56127a8201f43b542741f4",
"assets/assets/images/home/shop.svg": "d851743d7685e486b6b9a42472aede8f",
"assets/assets/images/home/ticket.svg": "11375176c6686a048139c1e6f4001d84",
"assets/assets/images/home/icon_nhiemvu.png": "1bd9ba083d8a79feb145b1def73a39ef",
"assets/assets/images/home/play-alt.svg": "17ccdb18876c7493564942c2a7c104a4",
"assets/assets/images/home/fi-rs-bell.svg": "45c4f0755dea7be6baa76c79b55d6f9d",
"assets/assets/images/home/fi-rs-search.svg": "55595d3fb01cfedbb8dc1666ece9dca7",
"assets/assets/images/home/icon_clock.png": "aba200c01eea51753d4d63b783c4652f",
"assets/assets/images/home/xu.svg": "36ad340033b1dc93ddffa84b921bf59c",
"assets/assets/images/home/diem.svg": "e902c61bb7ef99b132f98cc2c4e6b9b8",
"assets/assets/images/home/kite.svg": "c8f7f31054fc0ac86d9f388f89ffc53b",
"assets/assets/images/home/fi-rs-menu-burger.svg": "dfbb5250ed626d09b46ad45259e08ec5",
"assets/assets/images/home/btn_khamphathem.png": "353ed0bd6a224f11258dbba436f7c18f",
"assets/assets/images/home/diamond.svg": "6c63df882c2ca806e03bdc4f89b2e8ba",
"assets/assets/images/home/icon_lich.png": "b2bfe98d10d92ffe61fdb3d8b821a747",
"assets/assets/images/home/money.svg": "c4e805438539ab30b524e5bcb26d23e6",
"assets/assets/images/home/bg_home.png": "1198c2f531e54aa0dcce755375fb468f",
"assets/assets/images/home/calendar.svg": "33781b94407e2c0b8a5895010cd9e62a",
"assets/assets/images/home/comment-alt.svg": "819a9d8e708a3ecc5862938adffd7c4e",
"assets/assets/images/defaultImage.svg": "0017a292dcad182dfcb3f51f792a59b0",
"assets/assets/images/banner.jpg": "badc1d41a876853910aa2ede3b92beee",
"assets/assets/images/notification/clock.png": "aba200c01eea51753d4d63b783c4652f",
"assets/assets/images/comment/ic_delete.svg": "dbc68b8e9d26635d1851ebb538faf2e3",
"assets/assets/images/comment/ic_flag.svg": "8af0cfd028aa25cb4e0c2978c748ccdc",
"assets/assets/images/comment/ic_reply.svg": "9d0e9314c6488054b054207f232b885e",
"assets/assets/images/comment/icon_near_me.svg": "bfaab6c75e1ed68810e78e4c0065c062",
"assets/assets/images/comic_update.png": "3928f8c6ccdada0d807e28e6fcb7abfc",
"assets/assets/images/iconxu.jpg": "6084192fd30bd794f89020fc7097bfc4",
"assets/assets/images/bookcase/ic_horizontal_distribute.svg": "7665ce9f7856139397e2a29e8b1890e9",
"assets/assets/images/readcomic/ic_points.svg": "48a55c047722964e817094e55a815c6e",
"assets/assets/images/readcomic/ic_favorite.svg": "7b93aef76b1202804a7dd265dc8072fd",
"assets/assets/images/readcomic/ic_share.svg": "a447c5e31af3967c18ddfb77718e880f",
"assets/assets/images/readcomic/ic_comment.svg": "2061a11adb9666a0caba62b975eeae95",
"assets/assets/images/readcomic/ic_visibility.svg": "b2cb7a01d2cabc549264c6a8e8ce9e4b",
"assets/assets/images/readcomic/ic_time_quarter_to.svg": "3e105a74857e190a6b662bbe0478cd75",
"assets/assets/images/readcomic/ic_chapter_new.svg": "08cac178bfea0f76a9b1a9e8d20f5bf3",
"assets/assets/images/readcomic/ic_bookmark.svg": "bb122188bc3707d3fc5135e9f92fb921",
"assets/assets/images/readcomic/ic_follow.svg": "dd2beea84b42176889ce2df0e7ce53ad",
"assets/assets/images/readcomic/ic_xu.svg": "21ed0ec8d67c10c923852617beb77d83",
"assets/assets/images/readcomic/ic_play.svg": "be87b0027d51d9204a2738e769a5d507",
"assets/assets/images/readcomic/ic_download.svg": "d591d717c5f8086fad6478b8cfbba3ee",
"assets/assets/images/readcomic/ic_full.svg": "20f925b808fddfdabbfea823048d0970",
"assets/assets/images/readcomic/ic_apps_sort.svg": "b79b51fb5d2c8ff438885e4a252babf9",
"assets/assets/images/lauching_screen.jpg": "bb9b967b439b804794ffb088241c3b6c",
"assets/assets/images/banner_mission.png": "55e1641beb3c1a0b162d771d1a3e8c4e",
"assets/assets/images/qrcode_app.png": "7ece3f5a9acb9d5e4b443c571badb0cc",
"assets/assets/images/icons/task.svg": "fed2d6a9ebd765621229c7999e13a923",
"assets/assets/images/icons/229.png": "7ada7dd4d99345021862accf450d7fd3",
"assets/assets/images/icons/459.png": "c86f1fe740d0ef6b9e74331e449a73c0",
"assets/assets/images/icons/ic_code.png": "b5d3988ff0014cc97347dbacc33270f7",
"assets/assets/images/icons/114.png": "e02b6b4ab65ef052c36830267aa48476",
"assets/assets/images/icons/ic_delete_user.svg": "1eb39047dbff848c69f0c0392238b5ba",
"assets/assets/images/icons/ic_app.png": "2aa0ca661ebd3edf9df33fbf12b6e066",
"assets/assets/images/icons/achievements.svg": "1da25b0aa857ab2791ca2d8a33f5a8a3",
"assets/assets/images/icons/icon_happy.svg": "625acf673358077f0b0dcfb848c49a65",
"assets/assets/images/icons/22.png": "8f084c078e8d8f04a3a1ecb3ce07c554",
"assets/assets/images/icons/error.png": "db916de8097d302a0257e86e061f5bad",
"assets/assets/images/icons/icon_code.svg": "d58fcf974f2fa21a3e61da0f71e05eb3",
"assets/assets/images/icons/fi-rs-angle-right.svg": "3c1d96d30166248ad2f65698d581658a",
"assets/assets/images/icons/ic_happy.png": "6a514b4ab805aa7fe6163c57b04cca28",
"assets/assets/images/icons/watch_ads.png": "c4ce8c99daae7f77a9f2a6b0ea5d4578",
"assets/assets/images/icons/45.png": "53fd0c39ae1ed498c3f02e43810568b5",
"assets/assets/images/icons/1149.png": "07790eeabfffa1c0237b97779c6caa83",
"assets/assets/images/icons/1x/search.svg": "51d47b53a51769e17762d4ee9fd95531",
"assets/assets/images/icons/1x/angle-top.svg": "9561224ef43f12a9415e8821ecbaa669",
"assets/assets/images/icons/1x/eye-crossed.svg": "77f338d9d22c26401282399c04639ff5",
"assets/assets/images/icons/1x/book-alt.svg": "f1ba3356087f78742af0ee1ebfd60811",
"assets/assets/images/icons/1x/user.svg": "427acf0cd6d75709310d85f60d723284",
"assets/assets/images/icons/1x/khung_popup.svg": "d19f85cdf952ff29aa980bb0468c7b82",
"assets/assets/images/icons/1x/logout.svg": "d023e2a2ff905f3c91ff5dc426981ee1",
"assets/assets/images/icons/1x/bg_popup.png": "61d44feb129edd26d46080eb422152af",
"assets/assets/images/icons/1x/chungnhan.svg": "f3591d8beca9cc231b89501e8c7b7ed1",
"assets/assets/images/icons/1x/sign-in-alt.svg": "28980d7dcbdd252634a71dac1c1c5b20",
"assets/assets/images/icons/1x/bg_diemfree.png": "64e51f43bfec9dd833aaa20bf1c9d90a",
"assets/assets/images/icons/1x/angle-down.svg": "298dc15518407f0482a4543edec24ee0",
"assets/assets/images/icons/1x/clear.svg": "c7aa914923bbff0cf479a68e7dbab713",
"assets/assets/images/icons/1x/eye%25201.svg": "70c6089708c2171c038ff4966793c667",
"assets/assets/images/icons/1x/lock.svg": "efbbeb33feb9d018434894ab8fe53e5f",
"assets/assets/images/icons/1x/open%2520present%25202%25201.png": "178bead510243dcf3cc11a78ef76b2f8",
"assets/assets/images/icons/1x/settings.svg": "0edcd4a98640f3b237432b60509e6831",
"assets/assets/images/icons/1x/user.png": "387b94d2b0df2cb0fd17d9a0ea624c1d",
"assets/assets/images/icons/1x/interrogation.svg": "7d64340240424e110d52695e3ae911d5",
"assets/assets/images/icons/1x/fi-rr-smartphone.svg": "f2c79ef46eeedcbbaa34484182c0858a",
"assets/assets/images/icons/1x/comment-info.svg": "93f6a5513e88854fb338e6226c4e887f",
"assets/assets/images/icons/1x/angle-right.svg": "823241dae1cdae9ebaeec42d698ede2e",
"assets/assets/images/icons/1x/info.svg": "ea2f62e06aa0d6dbd52d433b83290eb4",
"assets/assets/images/icons/1x/refresh.svg": "b9d7f56ec63669761029b72f8bbe2465",
"assets/assets/images/icons/1x/arrow%25201.svg": "05980614810aa76404a63d6fe54949e6",
"assets/assets/images/icons/1x/logo.png": "8194c2cb63e324958fe847706a996be0",
"assets/assets/images/icons/1x/baomat%25201.svg": "3d88ff6d54ed9dc7474c2702cb0d8ab2",
"assets/assets/images/icons/1x/checkGetRewarded.svg": "b81e8739d8922dd45db39ff66460918d",
"assets/assets/images/icons/1x/language.svg": "9d10977e27d84fb92f814d000740df0e",
"assets/assets/images/icons/1x/bell-ring.svg": "2e0cba14e1db7846d6f2688c9f50fe6f",
"assets/assets/images/icons/1x/share.svg": "8b9cbad24c422e088fc8f79dc0946c08",
"assets/assets/images/icons/1x/filter.svg": "9b9179303a47947a772f2bfc093c4382",
"assets/assets/images/icons/1x/fi-rs-shield-exclamation.svg": "75d352194e3cdad3836bf667694649c3",
"assets/assets/images/icons/1x/present%25202.png": "706e6499c969309606674e78b64a7951",
"assets/assets/images/icons/1x/present%25203.png": "71e145e2397ccb6f2da1d71728e27cce",
"assets/assets/images/icons/1x/present%25207.png": "afedb6fd957a1d38e0319241e5997ece",
"assets/assets/images/icons/1x/present%25206.png": "4a0889f243b070feebdb371f0cba14e8",
"assets/assets/images/icons/1x/closex.svg": "2f58908b0d15115e648bc7d19729e57d",
"assets/assets/images/icons/1x/arrow%25201.png": "666cd9348034cf8dd4b1dbf906ece8e8",
"assets/assets/images/icons/1x/present%25204.png": "61abe92d770714e97a6a817d9ad1bb71",
"assets/assets/images/icons/1x/present%25205.png": "01dcfdd2c44cb25b5a282ef484ebffab",
"assets/assets/images/icons/1x/close.png": "65bbc7f04e3199b3f3b4d477c4d0b4fe",
"assets/assets/images/icons/1x/heart.svg": "c985d3e25a9b93c4d76d944b3f769394",
"assets/assets/images/comic_full.png": "27cbef3e839ddc5b24fa4c8f69eb93ef",
"assets/assets/images/taikhoan/abc.svg": "90d504b55a188a18db26fca1c75aa893",
"assets/assets/images/taikhoan/point.svg": "e902c61bb7ef99b132f98cc2c4e6b9b8",
"assets/assets/images/taikhoan/icon_drafts.svg": "2b77289955b2041b8d39aa716d8cae3f",
"assets/assets/images/taikhoan/ic_check_circle.svg": "96891b54a822fc77e719181410cc6919",
"assets/assets/images/taikhoan/ic_user.svg": "54db3d1cfecc6c8dd3e4e2271206b5d1",
"assets/assets/images/taikhoan/icon_nangcap.svg": "90d504b55a188a18db26fca1c75aa893",
"assets/assets/images/taikhoan/link.svg": "4522f65d89e61daa496a2c68bc68023f",
"assets/assets/images/taikhoan/ic_upgrade.png": "4458b9d2f8c47ae5cf322712fcfc3907",
"assets/assets/images/taikhoan/emoji_events1.svg": "554087e3948274c69f8236aaab5cee01",
"assets/assets/images/taikhoan/icon_check_circle.svg": "0eceb36ff6784aac9bc3cde97ed63a51",
"assets/assets/images/taikhoan/emoji_events2.svg": "250632c9316f69a73dba24e69544d1b2",
"assets/assets/images/taikhoan/emoji_events3.svg": "74bdab7ce22c0cdf8b510b2384700dbd",
"assets/assets/images/taikhoan/icon_menu/ic-gift.svg": "452c171fc8ddeb97d1f343929f5c561d",
"assets/assets/images/taikhoan/icon_menu/ic_diamond.svg": "e416996ab59d43a3f1f0f34243d30053",
"assets/assets/images/taikhoan/icon_menu/ic_calendar.svg": "d44074e500089ce93b30c43ed74efd7b",
"assets/assets/images/taikhoan/icon_menu/ic_group.svg": "241254dfaee8964b68074bba5f63d5fa",
"assets/assets/images/taikhoan/icon_menu/ic_comment_alt.svg": "02ee95c977cf376f968fcea7cece513e",
"assets/assets/images/taikhoan/icon_menu/ic_kite.svg": "0efdc782985f3eeb17faa47de1480641",
"assets/assets/images/taikhoan/icon_menu/ic_ticket.svg": "46dada1238778aa880f4edb7f92972f3",
"assets/assets/images/taikhoan/ic_errdata.svg": "3deda2a5814a4da84a3d87a009f06ea7",
"assets/assets/images/taikhoan/img_moiban.svg": "8a684c32948882ce77ee674cd421ebef",
"assets/assets/images/taikhoan/frame_moiban.svg": "8ddfd466feedc657f22ea5c0243a16b5",
"assets/assets/images/taikhoan/balance.svg": "36ad340033b1dc93ddffa84b921bf59c",
"assets/assets/images/taikhoan/noava.png": "39877b4bd9aa7d0fdfa5046c3973e21f",
"assets/assets/images/icon_diem.png": "5a41cb3a68e528e30934593f4ce5403b",
"assets/assets/images/report_comics.svg": "4907de27a3d9c74ce2dad2fcced6e957",
"assets/assets/images/icon_xu.png": "10bddb985abcea3cbaa3745f71ba219e",
"assets/assets/images/stickers.jpg": "65388392e88beaa8c1e5110de53bf31a",
"assets/assets/images/google_play.png": "35cc005d6299e3f3b8bc919a07aeb533",
"assets/assets/images/OB%2520screen%25203.png": "ff029f5d3e13f39e9c4c71cd7a744872",
"assets/assets/images/app_store.png": "846ea013fa6c775bc89ace0fdb926448",
"assets/assets/images/chappter_new.png": "8e59ad0b1272bae78ec7ab87c4b9a0dc",
"assets/assets/images/OB%2520screen%25202.png": "bbac666244749aac2b7a6aef12e1d8f3",
"assets/assets/images/login/email.png": "06d1a1694487cbdd9d1357a701f1dc9d",
"assets/assets/images/login/password_set.png": "00c400517199d48ff8087426a0d104be",
"assets/assets/images/login/forgot_password.png": "3725ceeaadb7055c048deeb48513ce7a",
"assets/assets/images/login/lock.png": "eeaf273ad9509919dae70b2ce75a6a71",
"assets/assets/images/login/visibility.png": "05028621ed45c1dc14fe15c274b0dc87",
"assets/assets/images/login/Referr%25201.png": "54f84f55bcd4c03661441e03b94b4603",
"assets/assets/images/login/otp.png": "9e4424606a22b0b16054fc587af5b00a",
"assets/assets/images/login/user-add.svg": "e1c6c4c5551d7b966cdd005496c4ecc6",
"assets/assets/images/login/apple.png": "1681f2fa63ac46d61f3e81be4dd92e54",
"assets/assets/images/login/logo.png": "29e5586f1f577d0cb3f0b95e8c488f0a",
"assets/assets/images/login/phone.png": "2c46fb6c2fddcc1fef665f2f66b0a28b",
"assets/assets/images/login/password_set_successfully.png": "a1f310973135371e4a7cc69e3cc2d08c",
"assets/assets/images/login/nhanvat.png": "e6c0774120b5dd4a2a1bfa9733057237",
"assets/assets/images/login/sign_up_successfully.png": "2202d2d0d13948f9fb21ceb4b62a8bbd",
"assets/assets/images/login/lock_hovered.png": "cd8a700c5c133a5dc46b5ecd14b0f6ef",
"assets/assets/images/login/google.png": "7ebc57f930d2ea9ae3cfa532b3dc58d8",
"assets/assets/images/login/facebook.png": "cab802817bc6160deb71da590e6c6af0",
"assets/assets/images/login/vtcid.png": "43bd64f82190e896c950fdf2657048c3",
"assets/assets/images/OB%2520screen%25201.png": "f1d49ea16f6779359c5937537cb9bfe1",
"assets/assets/images/icon_no_wifi.png": "d6fa53495636678c815df2a6efdcb5de",
"assets/assets/images/bottom_tabbar/fi-rs-home.svg": "63ddcf22377a24635a0fdffc2703087f",
"assets/assets/images/bottom_tabbar/fi-rs-paper-plane.svg": "ac9b0014b580345fc48e2dd8dcf3acc9",
"assets/assets/images/bottom_tabbar/user.png": "664dad1233148c4ea73cc917bf7fe855",
"assets/assets/images/bottom_tabbar/fi-rs-flame.svg": "ae87b02ea3bde4c74b6fe4e2fd6053cb",
"assets/assets/images/bottom_tabbar/icon_user.png": "88d0d79918021c55b0700f73fc8db406",
"assets/assets/images/bottom_tabbar/fi-rs-book-alt.svg": "23e1fddb207b11e0fa37d5ab17c16721",
"assets/assets/fonts/Be_Vietnam/BeVietnam-Italic.ttf": "ac7c313785eaccbb99fe392219e61505",
"assets/assets/fonts/Be_Vietnam/BeVietnam-Regular.ttf": "bd27b3ec97d12655c7a2803cb6464924",
"assets/assets/fonts/Be_Vietnam/BeVietnam-Light.ttf": "733aa3d52dce5199258447e16bc2c362",
"assets/assets/fonts/Be_Vietnam/BeVietnam-SemiBoldItalic.ttf": "cebe932125363155b87e23c49a9f1ed1",
"assets/assets/fonts/Be_Vietnam/BeVietnam-BoldItalic.ttf": "d0efd2e724674626ab085e2276d0b7e4",
"assets/assets/fonts/Be_Vietnam/BeVietnam-ThinItalic.ttf": "687fbea6daa418ba64800f1b4aec3b62",
"assets/assets/fonts/Be_Vietnam/BeVietnam-SemiBold.ttf": "2c95a09f666bc78b983bd31eb8bc4772",
"assets/assets/fonts/Be_Vietnam/BeVietnam-MediumItalic.ttf": "19162448f0ab4774d429333c84dd908b",
"assets/assets/fonts/Be_Vietnam/BeVietnam-Thin.ttf": "996cb662e9a173edfe2644c1a1ce8515",
"assets/assets/fonts/Be_Vietnam/BeVietnam-Medium.ttf": "66240f9736234de524bd5de7b4ea76f7",
"assets/assets/fonts/Be_Vietnam/BeVietnam-ExtraBoldItalic.ttf": "b41922145b57d60b49f76d940014a317",
"assets/assets/fonts/Be_Vietnam/BeVietnam-LightItalic.ttf": "a95cc4684dff8f13fcce4dc7ea2a06f6",
"assets/assets/fonts/Be_Vietnam/BeVietnam-Bold.ttf": "c8f387f689a365dc8d854d876408f95c",
"assets/assets/fonts/Be_Vietnam/BeVietnam-ExtraBold.ttf": "046770cebc6f46b9a7b269b859733c91",
"assets/assets/fonts/Roboto-Regular_0.ttf": "18d44f79b3979ec168862093208c6d7d",
"assets/assets/fonts/icielpanton-black.otf": "52ce1d83f4f93be90fd3c5b286a149cb",
"assets/assets/fonts/SFU_Futura/SFUFuturaHeavy.ttf": "b0b099d3af26f079037c06e3453d3c96",
"assets/assets/fonts/SFU_Futura/SFUFuturaBook.ttf": "c10f1b4a7754f4c792a5b249af27d22f",
"assets/assets/fonts/SFU_Futura/SFUFuturaObliqueTTF.ttf": "ef767e5d9997db16fcf0a7019b9b19bb",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
