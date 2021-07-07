'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "a968a244a1bf24e03514a6a70717bc6f",
"index.html": "90620c66b960e295a6714b48989b1b86",
"/": "90620c66b960e295a6714b48989b1b86",
"main.dart.js": "0d7114ef36d51134beb215b7fc03d30c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d8ec665371b09c60583808902225708e",
"assets/AssetManifest.json": "9b48b7f1b4634c8e81e8b52c45a58af5",
"assets/NOTICES": "ba9352af260fef1231654ac078fba4ff",
"assets/FontManifest.json": "89ffd93ecc55b0fababdc58d8cce599e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/heroicons/assets/solid/hand.svg": "3b3dba83a8332edfb5504621496048c5",
"assets/packages/heroicons/assets/solid/search.svg": "57decc4779385c568aa077da436126c0",
"assets/packages/heroicons/assets/solid/arrow-down.svg": "02d962a3f413589e9f0dda47542f864e",
"assets/packages/heroicons/assets/solid/volume-off.svg": "4f9f7704db59a015800eac7a85e8b472",
"assets/packages/heroicons/assets/solid/dots-horizontal.svg": "772a4104be0a576a33475182a5b2bf8c",
"assets/packages/heroicons/assets/solid/scissors.svg": "72838c408b196d4f1497b1204650992a",
"assets/packages/heroicons/assets/solid/cog.svg": "abdf58dc9a306bc6c724584b425ac918",
"assets/packages/heroicons/assets/solid/currency-pound.svg": "16a1ca0aa6e316336f68bdaaec665d33",
"assets/packages/heroicons/assets/solid/sort-descending.svg": "7b2ca7ab6d7a887c553f4f30eb25bdf7",
"assets/packages/heroicons/assets/solid/reply.svg": "62c3f3c849374cb9f714bf967aa85175",
"assets/packages/heroicons/assets/solid/thumb-up.svg": "45f4480e189cca4e83a0a58319b24528",
"assets/packages/heroicons/assets/solid/translate.svg": "01aa86a8c12a37dfd0fefd1979a2796b",
"assets/packages/heroicons/assets/solid/adjustments.svg": "842a41fe5324d8fb935cb8effe84cec1",
"assets/packages/heroicons/assets/solid/user.svg": "8f4ee005b2d794ffbfb842ebcdd53d9a",
"assets/packages/heroicons/assets/solid/view-grid.svg": "535bb88c279a867406beb46668078fe6",
"assets/packages/heroicons/assets/solid/receipt-tax.svg": "d5c3c7288f7c4fb10c7dcb6e8e58780e",
"assets/packages/heroicons/assets/solid/x-circle.svg": "11d7c7716d18f6995d7064983d57388a",
"assets/packages/heroicons/assets/solid/view-list.svg": "eaefdaed3390458c6ebf8b4add80ed3f",
"assets/packages/heroicons/assets/solid/home.svg": "29c1b1daffc4a4048ba1e90f85248328",
"assets/packages/heroicons/assets/solid/globe-alt.svg": "1727f23588b66e66e0252e426dbdf97f",
"assets/packages/heroicons/assets/solid/chevron-double-right.svg": "52aef104867ab4e453745d23be6e94a6",
"assets/packages/heroicons/assets/solid/library.svg": "c94b970517ed382af0eb99bfff020024",
"assets/packages/heroicons/assets/solid/chevron-down.svg": "c6d8120182db803db5825b895873c390",
"assets/packages/heroicons/assets/solid/chevron-double-left.svg": "005d1684bc5af8cf88092886df18bb0f",
"assets/packages/heroicons/assets/solid/logout.svg": "cfe0a52f0b175f525f3f638029fb2bc0",
"assets/packages/heroicons/assets/solid/chip.svg": "af6f63a679d6a72bd9893c614b0f4ee5",
"assets/packages/heroicons/assets/solid/ticket.svg": "d2dad7bfdc38d801da40e4c117d6fa1e",
"assets/packages/heroicons/assets/solid/tag.svg": "dbf709dffeb5aeedc8415fafe153dd8b",
"assets/packages/heroicons/assets/solid/briefcase.svg": "7a39e2464df5b0f047e9a402ae186907",
"assets/packages/heroicons/assets/solid/arrow-circle-up.svg": "e1643118f812ff1e168bcb5e69e1895a",
"assets/packages/heroicons/assets/solid/save-as.svg": "9a54c953474237a0f358992ac5376677",
"assets/packages/heroicons/assets/solid/document-search.svg": "581089b29ea2778819ce4a54e9f10afc",
"assets/packages/heroicons/assets/solid/map.svg": "a00c27fb55fef9115c2183663fbbb23b",
"assets/packages/heroicons/assets/solid/inbox.svg": "60d0a3ddab3d4c881e1644a47423a47f",
"assets/packages/heroicons/assets/solid/microphone.svg": "97f8e9c0042b908ce50690b5728a3243",
"assets/packages/heroicons/assets/solid/database.svg": "59bf4681cb43820e07817abce440344f",
"assets/packages/heroicons/assets/solid/puzzle.svg": "68ab08a177968ea0faf5274345568641",
"assets/packages/heroicons/assets/solid/duplicate.svg": "e511353e164925b0029c73de0dc06d9f",
"assets/packages/heroicons/assets/solid/folder-remove.svg": "c5eda6e96ef8bc83cd5447ad174ba846",
"assets/packages/heroicons/assets/solid/terminal.svg": "3c90cecbf01632f04dc1e7b1059556cb",
"assets/packages/heroicons/assets/solid/sparkles.svg": "8154ad373bd6cf4ccff9b0739788e11f",
"assets/packages/heroicons/assets/solid/chevron-up.svg": "c09ae314b7d403f704abeeaaa55ac686",
"assets/packages/heroicons/assets/solid/folder-open.svg": "c9461e61fc5d4037b782f66bb96dea29",
"assets/packages/heroicons/assets/solid/document-add.svg": "c59098f623349b2352816bcd8df5741b",
"assets/packages/heroicons/assets/solid/x.svg": "01d7545073842f80a0fe28984b2fd74e",
"assets/packages/heroicons/assets/solid/at-symbol.svg": "b020f878160102519553dca22a763eca",
"assets/packages/heroicons/assets/solid/bookmark-alt.svg": "326440a733d980e52eb968941ce74695",
"assets/packages/heroicons/assets/solid/cloud-upload.svg": "091ce90eb1fa98cc1806f9f681534278",
"assets/packages/heroicons/assets/solid/fire.svg": "73688be3e6fe21d65d9b2732af373a99",
"assets/packages/heroicons/assets/solid/ban.svg": "5b4003ab4471bd4a0155f223aede9255",
"assets/packages/heroicons/assets/solid/shopping-bag.svg": "53622782417872ce4936751294d0106b",
"assets/packages/heroicons/assets/solid/chat-alt-2.svg": "9fd257c59220bdca76796a18913e7d51",
"assets/packages/heroicons/assets/solid/arrow-sm-up.svg": "427e48e85029c6a8d05c9a779d944127",
"assets/packages/heroicons/assets/solid/chevron-right.svg": "4450371d52cad57c9d1a16c01020b964",
"assets/packages/heroicons/assets/solid/clipboard.svg": "488a62140e86aa38bb3c29ca4d2d2934",
"assets/packages/heroicons/assets/solid/link.svg": "45c5a836fcf68e82ffc236a8cc5a9965",
"assets/packages/heroicons/assets/solid/key.svg": "36ed8f7648cead635c7e494e7bec6e97",
"assets/packages/heroicons/assets/solid/beaker.svg": "ab165738519eaa1bc3f1b3dfef664853",
"assets/packages/heroicons/assets/solid/arrow-right.svg": "512460a7f16af471c5937c15bee90122",
"assets/packages/heroicons/assets/solid/selector.svg": "3a1dac2aab4d069e01670b4b8ed2205d",
"assets/packages/heroicons/assets/solid/qrcode.svg": "20789d28b2188003322dbdf4fb40a9af",
"assets/packages/heroicons/assets/solid/currency-rupee.svg": "aaba0652318c07ab73e6f530f3ab919d",
"assets/packages/heroicons/assets/solid/menu-alt-4.svg": "68a780ffd84290f76744d92bfbd326c2",
"assets/packages/heroicons/assets/solid/paper-clip.svg": "6f3b6774165699b3a880b88ada0cbbfb",
"assets/packages/heroicons/assets/solid/archive.svg": "502ad1ce0b0320f9a5f91aca994ea513",
"assets/packages/heroicons/assets/solid/phone-outgoing.svg": "41ab98d97916ec9c58f5bfbb2ecf8334",
"assets/packages/heroicons/assets/solid/mail.svg": "7093c3c1087f50ad539a4e0ae78a80a1",
"assets/packages/heroicons/assets/solid/currency-bangladeshi.svg": "5f3b5918b1d7eaf4368f049e12396d9c",
"assets/packages/heroicons/assets/solid/download.svg": "a38d7f61c813fbdef16fb11200d9b62a",
"assets/packages/heroicons/assets/solid/chat-alt.svg": "a6bf6fec1b5fa6afcda1a0bd7f073285",
"assets/packages/heroicons/assets/solid/book-open.svg": "fbe951fb67cf743ce64388f529ada77e",
"assets/packages/heroicons/assets/solid/location-marker.svg": "3a53be93e2bcd84047fb3dd11f348814",
"assets/packages/heroicons/assets/solid/arrow-sm-down.svg": "f7ca01a239fea330c8d4aab444fc2336",
"assets/packages/heroicons/assets/solid/server.svg": "0c698240a013608abb496a9cf7737e9a",
"assets/packages/heroicons/assets/solid/plus-sm.svg": "84c34efbd66084e4597901b649ac0cb7",
"assets/packages/heroicons/assets/solid/inbox-in.svg": "f81cc8e067cd5cbad9b0196531eae15f",
"assets/packages/heroicons/assets/solid/arrow-narrow-left.svg": "fa8f4e627d8da32f0c419489d36d2330",
"assets/packages/heroicons/assets/solid/login.svg": "0c953fb239cdc2874c43f0a55bf9755f",
"assets/packages/heroicons/assets/solid/variable.svg": "32c31ccfcab1f9d3765501510f5f8849",
"assets/packages/heroicons/assets/solid/menu-alt-1.svg": "56e2b469e16b4cdd66ed8bb86866b586",
"assets/packages/heroicons/assets/solid/bell.svg": "d276b27988c7c9ce4e929adab71e507d",
"assets/packages/heroicons/assets/solid/code.svg": "5f59fecb1e3d13291ce5f73b381109d4",
"assets/packages/heroicons/assets/solid/cake.svg": "600a71fd6cf096623b09e51ebdd48593",
"assets/packages/heroicons/assets/solid/arrow-narrow-up.svg": "bf3b1dcfc30d72fee39dab3d9bdf0620",
"assets/packages/heroicons/assets/solid/flag.svg": "f4f21b12bcfc2a4961836873f4e4fe5f",
"assets/packages/heroicons/assets/solid/eye-off.svg": "773ca3ebf04daf277d4d29d51a6b371c",
"assets/packages/heroicons/assets/solid/stop.svg": "3de20e38272667e3d0a81f4dcceeff3a",
"assets/packages/heroicons/assets/solid/arrow-circle-left.svg": "56a52d905b8377109d6150ad189e3315",
"assets/packages/heroicons/assets/solid/newspaper.svg": "4c1b4ec12b4011c8bccfd939e2a80433",
"assets/packages/heroicons/assets/solid/cube.svg": "696a77dc280e159e70df06fa4b598c26",
"assets/packages/heroicons/assets/solid/emoji-happy.svg": "2072658ba6713b160118ff88ffaa3477",
"assets/packages/heroicons/assets/solid/minus-sm.svg": "524408dae8f8cad73992210e08bf15e1",
"assets/packages/heroicons/assets/solid/dots-circle-horizontal.svg": "810b96e9d2ab201c70f4338eb010dc94",
"assets/packages/heroicons/assets/solid/support.svg": "5ac3677ac9ad7cbbd9e73f5b3ba48b76",
"assets/packages/heroicons/assets/solid/clipboard-list.svg": "43cb6b36027fcb7488d276b099636572",
"assets/packages/heroicons/assets/solid/user-remove.svg": "76e3d1f3e332d0149b27f44db44a7eed",
"assets/packages/heroicons/assets/solid/plus.svg": "84c34efbd66084e4597901b649ac0cb7",
"assets/packages/heroicons/assets/solid/document.svg": "734cad7615d144e58af1ec41d069fb54",
"assets/packages/heroicons/assets/solid/music-note.svg": "ba7046cfdeff9197a4e0e7d1b141d30c",
"assets/packages/heroicons/assets/solid/check.svg": "47fd6c56e3262cadae79661db6c14901",
"assets/packages/heroicons/assets/solid/menu-alt-2.svg": "cffe3ee192b025a5a0704a23e81a592d",
"assets/packages/heroicons/assets/solid/view-boards.svg": "36da1118e003aad248b9563d9b755c70",
"assets/packages/heroicons/assets/solid/rss.svg": "e26d256888c65f15da47d8be3b251a15",
"assets/packages/heroicons/assets/solid/wifi.svg": "664ab3a07c54081c6e60682409ce47a3",
"assets/packages/heroicons/assets/solid/menu-alt-3.svg": "883b4831aae9a5794b287097647ae598",
"assets/packages/heroicons/assets/solid/scale.svg": "ef3ac2af5ad2924ea3e444d76678cedf",
"assets/packages/heroicons/assets/solid/arrow-circle-right.svg": "04b1748f81412262dee41f7c5e92d13a",
"assets/packages/heroicons/assets/solid/user-add.svg": "f03993d1d69f248289e57f1485cd3d53",
"assets/packages/heroicons/assets/solid/arrow-sm-left.svg": "aa723ce7d328530bcc0d69e300944822",
"assets/packages/heroicons/assets/solid/zoom-in.svg": "183056fefedbc50ff9dba6d11fe3b7d0",
"assets/packages/heroicons/assets/solid/arrow-sm-right.svg": "b94e4b3a87e3eb888b540b56d34afb8b",
"assets/packages/heroicons/assets/solid/cube-transparent.svg": "e5529250978fa7f4db4024f63d5b3e47",
"assets/packages/heroicons/assets/solid/refresh.svg": "ef8a0d4314103e4523db3d5f3105e6e4",
"assets/packages/heroicons/assets/solid/check-circle.svg": "8f033089b925014fa254c5d99b6d367b",
"assets/packages/heroicons/assets/solid/thumb-down.svg": "dba0ac62b6d0e5a911138fa23a59b95e",
"assets/packages/heroicons/assets/solid/device-tablet.svg": "65089ccbcf3668ad002fc5ef2204b29d",
"assets/packages/heroicons/assets/solid/save.svg": "a1e58e867bcc2ac7bf49c5ad3c955bb3",
"assets/packages/heroicons/assets/solid/status-online.svg": "8407625fc5068e4fcbed08deae0ee9f4",
"assets/packages/heroicons/assets/solid/paper-airplane.svg": "03afa7175c96a619e7adde6331b83701",
"assets/packages/heroicons/assets/solid/shield-exclamation.svg": "a09b165360bad24a2f4e2ce8c9b35596",
"assets/packages/heroicons/assets/solid/fast-forward.svg": "fc60d9c2ba6b39f2a2473a4a754d626f",
"assets/packages/heroicons/assets/solid/currency-yen.svg": "b634377fd0cd82164b4923cd97e0ad8a",
"assets/packages/heroicons/assets/solid/zoom-out.svg": "8a7ab401bf6a7166ddd0f4c9d00ca89f",
"assets/packages/heroicons/assets/solid/play.svg": "bd46a41d20075c447ae98ff3f62fe9a9",
"assets/packages/heroicons/assets/solid/chat.svg": "38590d4c88ba9e2851c74107350b3d83",
"assets/packages/heroicons/assets/solid/pencil-alt.svg": "9592d6bf1a445174b747774606542a6b",
"assets/packages/heroicons/assets/solid/cursor-click.svg": "ed0617868b2cbbe512df6c952b3e7e21",
"assets/packages/heroicons/assets/solid/table.svg": "10c9fc6246fc042f5f771cf763f05cd3",
"assets/packages/heroicons/assets/solid/badge-check.svg": "4fc6ad140fa523bb8a60a6664aec0e1d",
"assets/packages/heroicons/assets/solid/document-text.svg": "4c5a105c423ac6d58e4e132ee67896eb",
"assets/packages/heroicons/assets/solid/camera.svg": "953be44652e42911459112c43cd1d1b3",
"assets/packages/heroicons/assets/solid/printer.svg": "4b7192b90f28f2232d7445819eece295",
"assets/packages/heroicons/assets/solid/truck.svg": "5462da1064968234aff1d62355757cd2",
"assets/packages/heroicons/assets/solid/identification.svg": "00d8a09c6e29c9b03484f8e554da0a8e",
"assets/packages/heroicons/assets/solid/device-mobile.svg": "fb56ab4ef6d153d60807a5487d402b00",
"assets/packages/heroicons/assets/solid/document-report.svg": "80832bb071eab8d2a85a22dfc50c3057",
"assets/packages/heroicons/assets/solid/document-download.svg": "359ac3410b945fc04359c915c8f66a26",
"assets/packages/heroicons/assets/solid/emoji-sad.svg": "65417122d61247e6a62bf9b6c7aeaf8d",
"assets/packages/heroicons/assets/solid/exclamation-circle.svg": "3cb236b258b8bd1bcacb107a22822cb5",
"assets/packages/heroicons/assets/solid/currency-euro.svg": "81b6a8855f5e25e695da4c1690851ad9",
"assets/packages/heroicons/assets/solid/arrows-expand.svg": "0667f1031212016b4b961e8af1b79de3",
"assets/packages/heroicons/assets/solid/trash.svg": "bf9b1afb6651280487f8e46cb203b5ea",
"assets/packages/heroicons/assets/solid/chart-bar.svg": "c1b034cc34869b540aea8b343cb36491",
"assets/packages/heroicons/assets/solid/view-grid-add.svg": "62a104cd96aeeb571ae84c834813e655",
"assets/packages/heroicons/assets/solid/switch-horizontal.svg": "363fba296106e87decdd16362dc917a1",
"assets/packages/heroicons/assets/solid/volume-up.svg": "87b30adee9f25777ca6ae54619a35e14",
"assets/packages/heroicons/assets/solid/hashtag.svg": "bcebabb61fdb6084a97251e847d993b4",
"assets/packages/heroicons/assets/solid/presentation-chart-line.svg": "7e72e82120394f76e994fb779ae3ee21",
"assets/packages/heroicons/assets/solid/template.svg": "74b31091aa51d9d1b854a1175201edf8",
"assets/packages/heroicons/assets/solid/star.svg": "b87c198d63235d3f20ac50c38635bba8",
"assets/packages/heroicons/assets/solid/sun.svg": "72a0e2049852abbe8be59a67dcd387ed",
"assets/packages/heroicons/assets/solid/receipt-refund.svg": "b49c033848e3139a3067e3661d4e54c6",
"assets/packages/heroicons/assets/solid/arrow-circle-down.svg": "aea9a79a67710ed72c9788d0444e8ee4",
"assets/packages/heroicons/assets/solid/folder-download.svg": "3d63d2c075fb50c69c577ffbd73b824c",
"assets/packages/heroicons/assets/solid/chart-pie.svg": "f1da22824416787a528bd4b7f5d81586",
"assets/packages/heroicons/assets/solid/cash.svg": "d59b24d446c8add91075df03bcc5a70d",
"assets/packages/heroicons/assets/solid/mail-open.svg": "c96d922a22736671786e2421e15b45e1",
"assets/packages/heroicons/assets/solid/collection.svg": "a35cd7aad7abda462aaa707e01a72668",
"assets/packages/heroicons/assets/solid/search-circle.svg": "9c990ab5cfac760c4aacf5f0880325e1",
"assets/packages/heroicons/assets/solid/plus-circle.svg": "ca68560fa61ac3dc1631bca4fbd114cd",
"assets/packages/heroicons/assets/solid/arrow-narrow-down.svg": "03d726444e23ad658b32594d30ce3363",
"assets/packages/heroicons/assets/solid/information-circle.svg": "ef7f744a2d4055a51a2b5a75fffc0e38",
"assets/packages/heroicons/assets/solid/credit-card.svg": "509267b9c51d798531bb61e7d4d3ff05",
"assets/packages/heroicons/assets/solid/user-circle.svg": "02e458c2c1dd49183f4de858042b2374",
"assets/packages/heroicons/assets/solid/lightning-bolt.svg": "3134bc945052828259fb22c674957480",
"assets/packages/heroicons/assets/solid/office-building.svg": "9d323e1944e31797454cf81eaafe8f79",
"assets/packages/heroicons/assets/solid/pencil.svg": "47cbe132349195674663bc565f006bc5",
"assets/packages/heroicons/assets/solid/status-offline.svg": "d6e4b7a769a10388e5e5fa84aa2ee801",
"assets/packages/heroicons/assets/solid/user-group.svg": "7ae54e4e2a8b5312cca7a70abc7d55d4",
"assets/packages/heroicons/assets/solid/document-duplicate.svg": "1770a27deabe20fa777edecc1949831b",
"assets/packages/heroicons/assets/solid/clock.svg": "9c670e74a9e345e6c48d9164b2bce4b4",
"assets/packages/heroicons/assets/solid/phone.svg": "511ed113e660890b71c2398502eb7564",
"assets/packages/heroicons/assets/solid/eye.svg": "0292b5a8819268e8980ba40111aa0876",
"assets/packages/heroicons/assets/solid/light-bulb.svg": "1abf74c1a85c8bbf828e801dc253d952",
"assets/packages/heroicons/assets/solid/phone-missed-call.svg": "35c0adcd7c89ba278356a09d4596323f",
"assets/packages/heroicons/assets/solid/gift.svg": "50a0f820741fab0ea237513119ad9135",
"assets/packages/heroicons/assets/solid/external-link.svg": "b0c03c8df9bf11006cf04de4bc8e3e6f",
"assets/packages/heroicons/assets/solid/question-mark-circle.svg": "de866f034746c6a344405fdcf383179d",
"assets/packages/heroicons/assets/solid/share.svg": "7106478605fd0dc9b20975ab4007165a",
"assets/packages/heroicons/assets/solid/arrow-up.svg": "c55ec8620b93b8fb581166ec4050bec9",
"assets/packages/heroicons/assets/solid/folder-add.svg": "fc938666684c6679dd078022628c76aa",
"assets/packages/heroicons/assets/solid/filter.svg": "eb79b0288fe2902368292d2b09a590f8",
"assets/packages/heroicons/assets/solid/arrow-narrow-right.svg": "cbcc78cbc27511bfb8a02cd8268ef23a",
"assets/packages/heroicons/assets/solid/phone-incoming.svg": "1bce9d757ad6bc8c266bc4bee766ac8b",
"assets/packages/heroicons/assets/solid/photograph.svg": "50dabf9ab1cc4908c672dca94d473f41",
"assets/packages/heroicons/assets/solid/calendar.svg": "5f8081a68b4cd77ece687eff3a332727",
"assets/packages/heroicons/assets/solid/video-camera.svg": "10d7d312b7d39ffc6464c2318c89b7cb",
"assets/packages/heroicons/assets/solid/globe.svg": "b8bb98252409632bc50de09c24d11042",
"assets/packages/heroicons/assets/solid/arrow-left.svg": "420815c030b13300a013c4607281b88c",
"assets/packages/heroicons/assets/solid/minus-circle.svg": "b2df671026b90a98e62015880a380e1d",
"assets/packages/heroicons/assets/solid/desktop-computer.svg": "e02abde303d3b93913196ae74b9da258",
"assets/packages/heroicons/assets/solid/lock-closed.svg": "e2cdcc714d5d612a94d4d1ade8ded52a",
"assets/packages/heroicons/assets/solid/finger-print.svg": "dff537635f40c219ac7ef8e6377ebfff",
"assets/packages/heroicons/assets/solid/cloud.svg": "0a3a6847e2ba6096a6eaff5f036ec1d9",
"assets/packages/heroicons/assets/solid/document-remove.svg": "42c414dc960ca4c5d132787e62667428",
"assets/packages/heroicons/assets/solid/rewind.svg": "2c2c6766f89027f587f2797b0f819512",
"assets/packages/heroicons/assets/solid/speakerphone.svg": "bd24ae4ca3fff6106109f51204857cee",
"assets/packages/heroicons/assets/solid/upload.svg": "9e5e2c418440831960cd77a6072aa839",
"assets/packages/heroicons/assets/solid/trending-down.svg": "6eb18a441d2dfa28a00fe252b791d1ba",
"assets/packages/heroicons/assets/solid/pause.svg": "eb10e6c2631691e532619adfc29556a7",
"assets/packages/heroicons/assets/solid/bookmark.svg": "e4853e1a0edfb894d571599b90176094",
"assets/packages/heroicons/assets/solid/switch-vertical.svg": "97bc275a53f61b25a50193a4cb064aed",
"assets/packages/heroicons/assets/solid/currency-dollar.svg": "1c7e4726692529bce2ac136f03e655ef",
"assets/packages/heroicons/assets/solid/cloud-download.svg": "bb812f79db9827eeb9ceec0b92e4cb33",
"assets/packages/heroicons/assets/solid/lock-open.svg": "da2ea97f641098e0c831a57f2d30a870",
"assets/packages/heroicons/assets/solid/menu.svg": "28b72d2efaab257135e44c2b73f24a5c",
"assets/packages/heroicons/assets/solid/backspace.svg": "3ecb36f76f8180ac7b6712a012094724",
"assets/packages/heroicons/assets/solid/shopping-cart.svg": "d8d4130662998c9295ec7ff965b70dd7",
"assets/packages/heroicons/assets/solid/sort-ascending.svg": "8f2dceed28bd2d1876fd23a8dfc85c8f",
"assets/packages/heroicons/assets/solid/calculator.svg": "8e47923bb8da245bbd642cf402e60dfc",
"assets/packages/heroicons/assets/solid/chart-square-bar.svg": "68531af389979a319f753a131d448eeb",
"assets/packages/heroicons/assets/solid/shield-check.svg": "d8d2e3a929f6bae3ffe02f13437be873",
"assets/packages/heroicons/assets/solid/clipboard-copy.svg": "89aa71a604af334c2572bfe926c27fbd",
"assets/packages/heroicons/assets/solid/presentation-chart-bar.svg": "74b6e0bf691f926c1477d843e07a8702",
"assets/packages/heroicons/assets/solid/folder.svg": "153f3f5d07e5777ffee813dc09ed65fb",
"assets/packages/heroicons/assets/solid/users.svg": "ede889cc0c5e5eecb26132b629a3edad",
"assets/packages/heroicons/assets/solid/color-swatch.svg": "0e89110f71d0f99d562ba846b4bf7912",
"assets/packages/heroicons/assets/solid/clipboard-check.svg": "99c048cdb53ee150296850c0b515fd30",
"assets/packages/heroicons/assets/solid/minus.svg": "ec5854d45b1d0551f19da50272e955bd",
"assets/packages/heroicons/assets/solid/chevron-double-down.svg": "4000b9e64c88d1bbf4c46535b72d51f4",
"assets/packages/heroicons/assets/solid/chevron-left.svg": "21c3b545b14dc937935156e154aaa390",
"assets/packages/heroicons/assets/solid/annotation.svg": "d6602a3882675dc8174db351475ae80f",
"assets/packages/heroicons/assets/solid/film.svg": "8acc788b167a48c0526abd779bcea730",
"assets/packages/heroicons/assets/solid/moon.svg": "81c4fd0f82ce3579ee8d0714dbef2acb",
"assets/packages/heroicons/assets/solid/exclamation.svg": "e4e296d7a856e3bd86ad1fa8ff6da550",
"assets/packages/heroicons/assets/solid/dots-vertical.svg": "6a45dd795d12d6a4b9b598af186573ca",
"assets/packages/heroicons/assets/solid/chevron-double-up.svg": "32e0a565af47bff0664486cb1d00f588",
"assets/packages/heroicons/assets/solid/heart.svg": "f9613f31e86a40f47c77fe8a8f89b6b4",
"assets/packages/heroicons/assets/solid/trending-up.svg": "833eca86e6a0a6cf6665c75b42298ec0",
"assets/packages/heroicons/assets/solid/academic-cap.svg": "21178874f201c21ec2e64f4cbdb8c87f",
"assets/packages/heroicons/assets/outline/hand.svg": "6abf2bf926347c0845fb86ac79716991",
"assets/packages/heroicons/assets/outline/search.svg": "0ee5a79d6731c7d253d80f4a9d9bae69",
"assets/packages/heroicons/assets/outline/arrow-down.svg": "0a4693c7c312d0f880508bda82c767a4",
"assets/packages/heroicons/assets/outline/volume-off.svg": "d5949f073b244b9a12b34b96dbd2ebf4",
"assets/packages/heroicons/assets/outline/dots-horizontal.svg": "54925088058c3c0b07c0f1aa1d137faa",
"assets/packages/heroicons/assets/outline/scissors.svg": "2a28dba95a5ccb3b2813626d3f78a917",
"assets/packages/heroicons/assets/outline/cog.svg": "3c122bf2905096bcde74fbf574b351ca",
"assets/packages/heroicons/assets/outline/currency-pound.svg": "916f02844d4602b2b3a9457105f1851f",
"assets/packages/heroicons/assets/outline/sort-descending.svg": "f9d676aa7d10e5274855bc1e08f1563f",
"assets/packages/heroicons/assets/outline/reply.svg": "cfbb9f34997bb23fb4d2f91a94239a79",
"assets/packages/heroicons/assets/outline/thumb-up.svg": "78f2a4c23645f6d79f10cf63e740bc86",
"assets/packages/heroicons/assets/outline/translate.svg": "a279b0b874a425df7f3bea8746a2449a",
"assets/packages/heroicons/assets/outline/adjustments.svg": "914090a135646c8bbf9c13bcb585a2c9",
"assets/packages/heroicons/assets/outline/user.svg": "f20251571d32e6029df2bca941f94b79",
"assets/packages/heroicons/assets/outline/view-grid.svg": "e3e0b8fc01f0335743b92de84f1b13a8",
"assets/packages/heroicons/assets/outline/receipt-tax.svg": "a23e6da02af7bb0cd6a65f5a57a4e757",
"assets/packages/heroicons/assets/outline/x-circle.svg": "424df6ccbb85f55b594b986cab9b8bf0",
"assets/packages/heroicons/assets/outline/view-list.svg": "f217766931ad92d73f3878f890e8fbf6",
"assets/packages/heroicons/assets/outline/home.svg": "4a571552d528bef2b2a04bc59bce61de",
"assets/packages/heroicons/assets/outline/globe-alt.svg": "e7cb84e3cc19c5296dc4c91654a918cf",
"assets/packages/heroicons/assets/outline/chevron-double-right.svg": "edbc6f8637c92ce2ee361a222a455cd0",
"assets/packages/heroicons/assets/outline/library.svg": "ee8ed88aa75eb792e252ce1a5ffb46af",
"assets/packages/heroicons/assets/outline/chevron-down.svg": "d35e377341e52f0cfd5b9de8d82c5cfd",
"assets/packages/heroicons/assets/outline/chevron-double-left.svg": "e421d52295ff8165c98cda93ad30510d",
"assets/packages/heroicons/assets/outline/logout.svg": "fb9c679859f03bf84c805371b1fed993",
"assets/packages/heroicons/assets/outline/chip.svg": "7661037103c5eeba1576107656b00a59",
"assets/packages/heroicons/assets/outline/ticket.svg": "3c4bf34dd4d8bd29f12cfdecd7caf97f",
"assets/packages/heroicons/assets/outline/tag.svg": "ab2ee2bd342eff93b635c30da95ca998",
"assets/packages/heroicons/assets/outline/briefcase.svg": "110041e26696c3a738c8a17baf160b1b",
"assets/packages/heroicons/assets/outline/arrow-circle-up.svg": "7680025449bca2d14cfbcd55aeef0412",
"assets/packages/heroicons/assets/outline/save-as.svg": "cba10b66c5c1765e1ba4cd2bcbcae09f",
"assets/packages/heroicons/assets/outline/document-search.svg": "4e09ee3af9ec752521b993085900510c",
"assets/packages/heroicons/assets/outline/map.svg": "494ac976c0b293aa14242c660f78d80f",
"assets/packages/heroicons/assets/outline/inbox.svg": "317c075f7a2309baf3cb6a1e93f700c1",
"assets/packages/heroicons/assets/outline/microphone.svg": "e659537ebbee65eb60c2b2100bee3ff9",
"assets/packages/heroicons/assets/outline/database.svg": "8c6122f80d5da288ec4a32a444e988e9",
"assets/packages/heroicons/assets/outline/puzzle.svg": "3eb807f15da9b45030e709098e77e86b",
"assets/packages/heroicons/assets/outline/duplicate.svg": "1eab611d18967bf0954847f3302cdbdc",
"assets/packages/heroicons/assets/outline/folder-remove.svg": "7a4249840c926356effe2b02e4327a50",
"assets/packages/heroicons/assets/outline/terminal.svg": "3301beb0f703c073c11b8ed9297831fd",
"assets/packages/heroicons/assets/outline/sparkles.svg": "d73fe0f2c6f912d336f670849c4ebcac",
"assets/packages/heroicons/assets/outline/chevron-up.svg": "a77aec240c8f74a241fd7990722c4fdf",
"assets/packages/heroicons/assets/outline/folder-open.svg": "6b7bc44283239747d131970030b69604",
"assets/packages/heroicons/assets/outline/document-add.svg": "715264099209260174bd88076a7e3e3c",
"assets/packages/heroicons/assets/outline/x.svg": "fdadaaac9303f3877e62df984b086e56",
"assets/packages/heroicons/assets/outline/at-symbol.svg": "743a93e5ad71926230c4639c450a451a",
"assets/packages/heroicons/assets/outline/bookmark-alt.svg": "2aa0964cddc83b2956c405d93d4ca726",
"assets/packages/heroicons/assets/outline/cloud-upload.svg": "90df5c756df781a69b5e20328728fa0a",
"assets/packages/heroicons/assets/outline/fire.svg": "674d6600c03f38b463052043f8a37883",
"assets/packages/heroicons/assets/outline/ban.svg": "229756a86945b7a809f7cf04b217b795",
"assets/packages/heroicons/assets/outline/shopping-bag.svg": "e2cb38952df30fa71b3498d91fcac989",
"assets/packages/heroicons/assets/outline/chat-alt-2.svg": "3cb420988116ec0fa782fc0d9b09bbe4",
"assets/packages/heroicons/assets/outline/arrow-sm-up.svg": "bc536713125b9c3aa82ad8c754b0113c",
"assets/packages/heroicons/assets/outline/chevron-right.svg": "6eff55877382f5a58d1b9cfd1e30579f",
"assets/packages/heroicons/assets/outline/clipboard.svg": "a035098415e80fd07024d38d4838f4b6",
"assets/packages/heroicons/assets/outline/link.svg": "97e61a9ba6a65c060dd72f34dc604c50",
"assets/packages/heroicons/assets/outline/key.svg": "7fbf50bb419540840f87d1e3e73363ee",
"assets/packages/heroicons/assets/outline/beaker.svg": "a9f4ee9ac02aca091f41a38058f1010f",
"assets/packages/heroicons/assets/outline/arrow-right.svg": "eb1331913d4e0569f9e637e3bc970cc3",
"assets/packages/heroicons/assets/outline/selector.svg": "d887761e6ebc77c5bb5a42e038b4950a",
"assets/packages/heroicons/assets/outline/qrcode.svg": "25d075d647ea719e545e9673e2975ccc",
"assets/packages/heroicons/assets/outline/currency-rupee.svg": "65e43f0412e991a4d111b563959c6b3f",
"assets/packages/heroicons/assets/outline/menu-alt-4.svg": "e0e219d5092d0fc329c44fb2a8552f40",
"assets/packages/heroicons/assets/outline/paper-clip.svg": "b6fcb2e30e595cb5648d3ec2608cc13f",
"assets/packages/heroicons/assets/outline/archive.svg": "68a6885e09c0d48c3fbae674da1dc31f",
"assets/packages/heroicons/assets/outline/phone-outgoing.svg": "1fe55fe009206e039877622cd2e2789f",
"assets/packages/heroicons/assets/outline/mail.svg": "fa7158d9a1223fb153cbf44bbee4ce98",
"assets/packages/heroicons/assets/outline/currency-bangladeshi.svg": "038771bb908d9e331d577d3b553f75fa",
"assets/packages/heroicons/assets/outline/download.svg": "ec20f5c10705a4d7f3070390abdf9f14",
"assets/packages/heroicons/assets/outline/chat-alt.svg": "08d0e09ba68cdd617fa672e3cd2daff2",
"assets/packages/heroicons/assets/outline/book-open.svg": "d3a084b4deee085200d1fe2e37068c5c",
"assets/packages/heroicons/assets/outline/location-marker.svg": "f4ac4f54510a3504b05129df28a4d854",
"assets/packages/heroicons/assets/outline/arrow-sm-down.svg": "95d4733ec2c721e0462cf482b0fae5a7",
"assets/packages/heroicons/assets/outline/server.svg": "28ad30292040fee8485c8b1e8f80dd60",
"assets/packages/heroicons/assets/outline/plus-sm.svg": "674a072adabdf0c21f330ef9585eeb82",
"assets/packages/heroicons/assets/outline/inbox-in.svg": "7ac6993c695d3e8ae7418c716c437bb9",
"assets/packages/heroicons/assets/outline/arrow-narrow-left.svg": "4e04ab175a250aae21e522e1ba44bf72",
"assets/packages/heroicons/assets/outline/login.svg": "ed92f13a4598b7799dc358244ad50f91",
"assets/packages/heroicons/assets/outline/variable.svg": "17fbd305cd09815260515d00ce0f9913",
"assets/packages/heroicons/assets/outline/menu-alt-1.svg": "9858497be081fb80763397d74a2afbcb",
"assets/packages/heroicons/assets/outline/bell.svg": "a27f7ba8d44980a03a8d16f84c1d36f9",
"assets/packages/heroicons/assets/outline/code.svg": "9fa080f55a66b24061ba6ba037872074",
"assets/packages/heroicons/assets/outline/cake.svg": "90b071efb70b8d46e283c2ef6261315f",
"assets/packages/heroicons/assets/outline/arrow-narrow-up.svg": "066e0434431cd6792f252b51e24102e2",
"assets/packages/heroicons/assets/outline/flag.svg": "413b63aa42f59ea97c20e2b2fcc7e557",
"assets/packages/heroicons/assets/outline/eye-off.svg": "df0f32c4ce7ac167d46fd18085394f71",
"assets/packages/heroicons/assets/outline/stop.svg": "293abb90f9e67df8709e93c1556541db",
"assets/packages/heroicons/assets/outline/arrow-circle-left.svg": "331ba0aee67a58f90df9ec1be14aac75",
"assets/packages/heroicons/assets/outline/newspaper.svg": "bacb965996efef565835ef635059fe04",
"assets/packages/heroicons/assets/outline/cube.svg": "030cb1f28ab353215c0fc52ecd10af66",
"assets/packages/heroicons/assets/outline/emoji-happy.svg": "d4ab76e6f9fd8c0ef37765900779f9cd",
"assets/packages/heroicons/assets/outline/minus-sm.svg": "b43691132916b6a28d53a8e573b286db",
"assets/packages/heroicons/assets/outline/dots-circle-horizontal.svg": "479f7ed9bdb21c486a89812861ce0a06",
"assets/packages/heroicons/assets/outline/support.svg": "cb2ba50b364dace0778dee32b07e9a0c",
"assets/packages/heroicons/assets/outline/clipboard-list.svg": "302a4bca355ab68db7d747f7596c426f",
"assets/packages/heroicons/assets/outline/user-remove.svg": "cb5b943bc139e5ff0b229ea234c2c395",
"assets/packages/heroicons/assets/outline/plus.svg": "674a072adabdf0c21f330ef9585eeb82",
"assets/packages/heroicons/assets/outline/document.svg": "27052c3237426dc96a4e52ad72d85b43",
"assets/packages/heroicons/assets/outline/music-note.svg": "f18fd0d2e608cde907a02ee776f60c59",
"assets/packages/heroicons/assets/outline/check.svg": "a843ac437cfe2ac1c389d15dcfc122f2",
"assets/packages/heroicons/assets/outline/menu-alt-2.svg": "f79a6915efc77bc000f005a6bfbeac05",
"assets/packages/heroicons/assets/outline/view-boards.svg": "52bcc6058c8bde459b1145102f4667f8",
"assets/packages/heroicons/assets/outline/rss.svg": "fddcaf8d3cd955bea6648f638505214c",
"assets/packages/heroicons/assets/outline/wifi.svg": "1316e8bf16cf3b675f1697b4fea1a24a",
"assets/packages/heroicons/assets/outline/menu-alt-3.svg": "bcb1d4c143151dcec1b580547c049e26",
"assets/packages/heroicons/assets/outline/scale.svg": "c0e9a9a25454bd8a17a3abb3dd03f835",
"assets/packages/heroicons/assets/outline/arrow-circle-right.svg": "6ae43170fa4271454cea75bdf83d7073",
"assets/packages/heroicons/assets/outline/user-add.svg": "af274333b5d9cda3d2d4a0b4db49bcfd",
"assets/packages/heroicons/assets/outline/arrow-sm-left.svg": "e01ddd43083017ff3438bdb5b1774f6d",
"assets/packages/heroicons/assets/outline/zoom-in.svg": "8044312393b52b9373bd46684b12fa0d",
"assets/packages/heroicons/assets/outline/arrow-sm-right.svg": "8e63b77481ae766438c7c4ee8c9463c3",
"assets/packages/heroicons/assets/outline/cube-transparent.svg": "6898d2915bc9d9185dc25f244180a962",
"assets/packages/heroicons/assets/outline/refresh.svg": "19aa5e73c8f5247b56082ccadc3ba2dc",
"assets/packages/heroicons/assets/outline/check-circle.svg": "b5e1d618960e6aacd72c82890d251a42",
"assets/packages/heroicons/assets/outline/thumb-down.svg": "a344f39ebb11453e114548c76d35023d",
"assets/packages/heroicons/assets/outline/device-tablet.svg": "854964ef02514a5bf76216bbe0729afd",
"assets/packages/heroicons/assets/outline/save.svg": "63ee39336f5844476c8386d77776428c",
"assets/packages/heroicons/assets/outline/status-online.svg": "e1db5a033eef0e830b2a49fb27890ebd",
"assets/packages/heroicons/assets/outline/paper-airplane.svg": "94b21836f70e4e6cbe50829c6023f388",
"assets/packages/heroicons/assets/outline/shield-exclamation.svg": "c8a2973cc74b43704ec2635d47fe6689",
"assets/packages/heroicons/assets/outline/fast-forward.svg": "382613e1241b3a50534f3b23beefb523",
"assets/packages/heroicons/assets/outline/currency-yen.svg": "2e417e395336a5dfd7992e6a14b17045",
"assets/packages/heroicons/assets/outline/zoom-out.svg": "ad7ac90b68117ed7ee29307525abed4a",
"assets/packages/heroicons/assets/outline/play.svg": "b04e66db42da2ee0e9175909c1353dad",
"assets/packages/heroicons/assets/outline/chat.svg": "40d480ea5723e9237eae68de284b7fd3",
"assets/packages/heroicons/assets/outline/pencil-alt.svg": "67d42606db10190b33f3c8743accf40a",
"assets/packages/heroicons/assets/outline/cursor-click.svg": "feb2caa3445bcbb256d3cf8139dc43b6",
"assets/packages/heroicons/assets/outline/table.svg": "5535af0567f098137b6afc0c1655311f",
"assets/packages/heroicons/assets/outline/badge-check.svg": "e54eb373723bccabfe5b7d13c6a7b4e5",
"assets/packages/heroicons/assets/outline/document-text.svg": "c9178ea37841f4afca652a903b5c86ee",
"assets/packages/heroicons/assets/outline/camera.svg": "9ee819620ed5e1b9302272573805b447",
"assets/packages/heroicons/assets/outline/printer.svg": "dd65537f6c17d4af75723410c8b8d4b8",
"assets/packages/heroicons/assets/outline/truck.svg": "def14bcceeeedca5cef1c425dfe86f0e",
"assets/packages/heroicons/assets/outline/identification.svg": "3c4564bb71ffd5bf896f4427a6223647",
"assets/packages/heroicons/assets/outline/device-mobile.svg": "36aeb4bb9f0c20d275673c76bcf2ee6e",
"assets/packages/heroicons/assets/outline/document-report.svg": "754bf021df7ca26ee3b3c295ce53ee45",
"assets/packages/heroicons/assets/outline/document-download.svg": "865e8fda3ff5aaebd2b5f5acf44b0d92",
"assets/packages/heroicons/assets/outline/emoji-sad.svg": "9836ec8cbc649e42455acb8ea30526ae",
"assets/packages/heroicons/assets/outline/exclamation-circle.svg": "3c668404e3ff2d347a8e345dc864bace",
"assets/packages/heroicons/assets/outline/currency-euro.svg": "3e566e43ceeb516892755de376e2e590",
"assets/packages/heroicons/assets/outline/arrows-expand.svg": "f12d5dd1063a2ec4e99ae27d5f6029b9",
"assets/packages/heroicons/assets/outline/trash.svg": "b623d7a8d302c59295bf5bbe2ae13171",
"assets/packages/heroicons/assets/outline/chart-bar.svg": "60f5cb1b4896f78b76a44f77ba69eb26",
"assets/packages/heroicons/assets/outline/view-grid-add.svg": "ade01739c0f24a42fe8e212795400110",
"assets/packages/heroicons/assets/outline/switch-horizontal.svg": "c49eb94f778b92c75739ad18a57de96a",
"assets/packages/heroicons/assets/outline/volume-up.svg": "e72d0bf53bb3de357f4adda3d512589f",
"assets/packages/heroicons/assets/outline/hashtag.svg": "4d7feaf968409f0e4d6973116d89d3f3",
"assets/packages/heroicons/assets/outline/presentation-chart-line.svg": "cf8647f249163741bf3ade98bd0f7a04",
"assets/packages/heroicons/assets/outline/template.svg": "1a9a15425f65aa31bb701ab06f8f6827",
"assets/packages/heroicons/assets/outline/star.svg": "df5e4d04c582d44d3daa927a3b8a4e78",
"assets/packages/heroicons/assets/outline/sun.svg": "84c10d38bb37e603f4c8f1abe2cad7b3",
"assets/packages/heroicons/assets/outline/receipt-refund.svg": "8a5827f36fef647fe5d44a1a411981d4",
"assets/packages/heroicons/assets/outline/arrow-circle-down.svg": "1811d0842db9857b35bb1cc945d26c6f",
"assets/packages/heroicons/assets/outline/folder-download.svg": "82a4f11e636b222ade2f454173e5a409",
"assets/packages/heroicons/assets/outline/chart-pie.svg": "175307e76dd82b72e6ff4ba9af1b0129",
"assets/packages/heroicons/assets/outline/cash.svg": "b21e60bd46694ecabe044fb67f31e1a7",
"assets/packages/heroicons/assets/outline/mail-open.svg": "bc522c8ba72c212af0468aa820780891",
"assets/packages/heroicons/assets/outline/collection.svg": "9d2783b977ca786d811114d932479b90",
"assets/packages/heroicons/assets/outline/search-circle.svg": "d40f33e252ce7d652276274ac9260a6d",
"assets/packages/heroicons/assets/outline/plus-circle.svg": "44265bae4d47c4f0589aedaa8bb30a73",
"assets/packages/heroicons/assets/outline/arrow-narrow-down.svg": "17862ee96777de0bf288c28bc5a9feab",
"assets/packages/heroicons/assets/outline/information-circle.svg": "7560f63cf4505a0ef29e205154ce8a46",
"assets/packages/heroicons/assets/outline/credit-card.svg": "f31dfcbddadd0fced64f6cfcfe6d7055",
"assets/packages/heroicons/assets/outline/user-circle.svg": "5ef5bebc0cf53adb3075ef50495ac663",
"assets/packages/heroicons/assets/outline/lightning-bolt.svg": "7eee3f1e1b8c8fa3bfbd58ea704e7815",
"assets/packages/heroicons/assets/outline/office-building.svg": "f846426fff53269c389c5ccb3973ab17",
"assets/packages/heroicons/assets/outline/pencil.svg": "099cb3356b0575b35165f8f3178d844b",
"assets/packages/heroicons/assets/outline/status-offline.svg": "eaf757e688f2986977e8f72ff859e159",
"assets/packages/heroicons/assets/outline/user-group.svg": "ad54ca5de41682bdd6ddabf98236b94c",
"assets/packages/heroicons/assets/outline/document-duplicate.svg": "078913d5aac85e109978cd8d8e96d533",
"assets/packages/heroicons/assets/outline/clock.svg": "b4f04b6c47476f5ba0ed39e5316b726b",
"assets/packages/heroicons/assets/outline/phone.svg": "a171b68b472cf7beeda8e30ca8270f56",
"assets/packages/heroicons/assets/outline/eye.svg": "22b64f9996cc8204dddc3fb8e4cd4a31",
"assets/packages/heroicons/assets/outline/light-bulb.svg": "94a970a4053dea3b2ab23179f522bb20",
"assets/packages/heroicons/assets/outline/phone-missed-call.svg": "a46dfd22755ac53d42f7d1fb26f8a64d",
"assets/packages/heroicons/assets/outline/gift.svg": "66d9c9970ccd06d0626e95b12db27168",
"assets/packages/heroicons/assets/outline/external-link.svg": "7f328171cfd2948db8be3cd05845f5e9",
"assets/packages/heroicons/assets/outline/question-mark-circle.svg": "5e0b6ef667282c0769ba36776b5b388d",
"assets/packages/heroicons/assets/outline/share.svg": "14898222d74b07973c9b1f240fb381ee",
"assets/packages/heroicons/assets/outline/arrow-up.svg": "6b80f75afdf74ddca5ed9f2fc16a8f11",
"assets/packages/heroicons/assets/outline/folder-add.svg": "63f1f6811527bde93126196972b0a90a",
"assets/packages/heroicons/assets/outline/filter.svg": "b724962a73566bbcc4ed27552fd9cb49",
"assets/packages/heroicons/assets/outline/arrow-narrow-right.svg": "a97e9bdc4cb23384f5ee8168db942137",
"assets/packages/heroicons/assets/outline/phone-incoming.svg": "049496425e53e370db2d391517e0b846",
"assets/packages/heroicons/assets/outline/photograph.svg": "fb6ccf9ea85b08a56a58f105172a7d7c",
"assets/packages/heroicons/assets/outline/calendar.svg": "d792fd51379a0234eee964aa633f59b8",
"assets/packages/heroicons/assets/outline/video-camera.svg": "d5b049441ef0f09aa36870c459729093",
"assets/packages/heroicons/assets/outline/globe.svg": "f212d867b7f8bf6e1c2e8795232644f2",
"assets/packages/heroicons/assets/outline/arrow-left.svg": "45a767454ee2d7d5a557dfd12cff427f",
"assets/packages/heroicons/assets/outline/minus-circle.svg": "93cdca5b730bb588df71bcc280963501",
"assets/packages/heroicons/assets/outline/desktop-computer.svg": "1ed8496ad621136ee1f4570cc1271bc1",
"assets/packages/heroicons/assets/outline/lock-closed.svg": "859c1db18a820139736eb9c54cfa700c",
"assets/packages/heroicons/assets/outline/finger-print.svg": "c684b41a7d1406f54ab68eed2b471728",
"assets/packages/heroicons/assets/outline/cloud.svg": "e391af91f55970f56066bc6545f2646c",
"assets/packages/heroicons/assets/outline/document-remove.svg": "80504489806b0ea35e384f4cbbef4da0",
"assets/packages/heroicons/assets/outline/rewind.svg": "a7ccc4ab7dbfca908d5cafeaf46d9a14",
"assets/packages/heroicons/assets/outline/speakerphone.svg": "93820654e69b2203ae4811e775b3e826",
"assets/packages/heroicons/assets/outline/upload.svg": "3898ceca7965d7d069f2481196a9b6ca",
"assets/packages/heroicons/assets/outline/trending-down.svg": "83cb6f96bfaef80433574df892f5c086",
"assets/packages/heroicons/assets/outline/pause.svg": "384475b112d799246aa70c9c1b33a52b",
"assets/packages/heroicons/assets/outline/bookmark.svg": "dba6235d82568aacfe823ee30a6e7863",
"assets/packages/heroicons/assets/outline/switch-vertical.svg": "df1d884c22a5997ca3f216298a659db1",
"assets/packages/heroicons/assets/outline/currency-dollar.svg": "6c620c8cbcf4527ef302990dd6f3848b",
"assets/packages/heroicons/assets/outline/cloud-download.svg": "de8faee9c9c0a97a352ba25a8f09a455",
"assets/packages/heroicons/assets/outline/lock-open.svg": "3d3dec11b73dd9496ec4ec0ca4f014b0",
"assets/packages/heroicons/assets/outline/menu.svg": "cc171ff1e64a6d8ed3195942bf6d77be",
"assets/packages/heroicons/assets/outline/backspace.svg": "1e0df8e6ba067a9eaddcbc8d15d01197",
"assets/packages/heroicons/assets/outline/shopping-cart.svg": "64791906b2dce33a650479c132f8ec77",
"assets/packages/heroicons/assets/outline/sort-ascending.svg": "d3fd5d0ed22177f2b7e70358bca7abe3",
"assets/packages/heroicons/assets/outline/calculator.svg": "e1d74ca2ccbbfd7267d28b2bc4f2c02e",
"assets/packages/heroicons/assets/outline/chart-square-bar.svg": "de62e3db25e76685b30302ea2134ba5f",
"assets/packages/heroicons/assets/outline/shield-check.svg": "873880bddfce2cc2c309b439f37058de",
"assets/packages/heroicons/assets/outline/clipboard-copy.svg": "e95a552ee044dfee50527b649fc7086e",
"assets/packages/heroicons/assets/outline/presentation-chart-bar.svg": "2442563fe786e161097f51b28504167f",
"assets/packages/heroicons/assets/outline/folder.svg": "f5096ef8d0147b0248e712c27d61e06f",
"assets/packages/heroicons/assets/outline/users.svg": "40c20ebfee895030e4b264626c281b92",
"assets/packages/heroicons/assets/outline/color-swatch.svg": "7d721d815d8cba51d85670b19f045f31",
"assets/packages/heroicons/assets/outline/clipboard-check.svg": "72cdc3f3fcbe311119719e36805249ea",
"assets/packages/heroicons/assets/outline/minus.svg": "f57139a4b382b1e375301faca2552e48",
"assets/packages/heroicons/assets/outline/chevron-double-down.svg": "5c65e5ebc7d3301bfb6334a984ec3e6b",
"assets/packages/heroicons/assets/outline/chevron-left.svg": "44f40190de13ed1f2c52431f9a0084e4",
"assets/packages/heroicons/assets/outline/annotation.svg": "339e5a5b0dc354dab722f1e837489682",
"assets/packages/heroicons/assets/outline/film.svg": "d6765d49e8be3d3b8d343d54033b6681",
"assets/packages/heroicons/assets/outline/moon.svg": "8313f8ef9061edd4917996b7b45c1f46",
"assets/packages/heroicons/assets/outline/exclamation.svg": "bd58ac820c50ad1831bd8de659df674b",
"assets/packages/heroicons/assets/outline/dots-vertical.svg": "4ceeea284d5c3bce9fd1a0624e788b3a",
"assets/packages/heroicons/assets/outline/chevron-double-up.svg": "10c70a4991ab0a8a6f19bd436d1f48fc",
"assets/packages/heroicons/assets/outline/heart.svg": "dbd9bcbf2ae565d66bb5f3a6104c8166",
"assets/packages/heroicons/assets/outline/trending-up.svg": "c203d61880af7ac7f6d4f1e7c335d1e7",
"assets/packages/heroicons/assets/outline/academic-cap.svg": "df99206ea401345cc78ce30a9faabfa8",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/icons/config.json": "0d90422d0ec1670d81a0f8f8789b88a9",
"assets/assets/icons/ic_launcher_android.png": "1e0ffa8d314468b4eefbd1edaff89a3e",
"assets/assets/icons/AlgorandIcons.ttf": "10909a5bb0849788d7fa54c0c12fe282",
"assets/assets/icons/ic_launcher.png": "4b46afcd6de515f9d785db92863b7c86",
"assets/assets/fonts/publicsans/PublicSans-Regular.ttf": "2ae2eb250f2d7264c3db2a7aadb47f1f",
"assets/assets/fonts/publicsans/PublicSans-Bold.ttf": "0c5a6e21b9435203276a4e445c31b9e1",
"assets/assets/fonts/publicsans/PublicSans-SemiBold.ttf": "3f0abe2402b7d1e37ce27ac94d475601",
"assets/assets/fonts/publicsans/PublicSans-Medium.ttf": "d1ff97d22c94d02b7ccd2b7c80544822",
"assets/assets/fonts/publicsans/PublicSans-Light.ttf": "d9487133e7cb18eca13d163e5d423fb5",
"assets/assets/animations/nodes.json": "60eaf56f46c082c6dda4b700e3bb38a0"
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
