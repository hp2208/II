var gPlayData = {
    "beforelink": "play_all.html?0501",//そのまま
    "nextlink": "play_all.html?0503",//ファイル名は固定、後ろの数字だけ1個後のセクション
    "jptitle": "５　シドニーは<ruby>今<rt>いま</rt></ruby><ruby>何<rt>なん</rt></ruby><ruby>時<rt>じ</rt></ruby>ですか",//タイトルはplaylist.htmlから書き写す
    "jp": [//日本語データ
        '<th>Ⅱ．</th><td colspan="2"><ruby>○<rt>まる</rt></ruby>ですか、<ruby>×<rt>ばつ</rt></ruby>ですか。</td>',
        '<th><ruby>例<rt>れい</rt></ruby>　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>山田<rt>やまだ</rt></ruby>さんはいつも<ruby>何<rt>なん</rt></ruby><ruby>時<rt>じ</rt></ruby>ごろ<ruby>寝<rt>ね</rt></ruby>ますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>１１<ruby>時<rt>じ</rt></ruby>ごろ<ruby>寝<rt>ね</rt></ruby>ます。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>土曜日<rt>どようび</rt></ruby>も１１<ruby>時<rt>じ</rt></ruby>ごろ<ruby>寝<rt>ね</rt></ruby>ますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>いいえ、<ruby>午前<rt>ごぜん</rt></ruby>１<ruby>時<rt>じ</rt></ruby>ごろ<ruby>寝<rt>ね</rt></ruby>ます。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>山田<rt>やまだ</rt></ruby>さんは<ruby>土曜日<rt>どようび</rt></ruby>１１<ruby>時<rt>じ</rt></ruby>ごろ<ruby>寝<rt>ね</rt></ruby>ます。</td>',
        '<th>１　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>佐藤<rt>さとう</rt></ruby>さん、<ruby>毎日<rt>まいにち</rt></ruby><ruby>何<rt>なん</rt></ruby><ruby>時<rt>じ</rt></ruby>から<ruby>何<rt>なん</rt></ruby><ruby>時<rt>じ</rt></ruby>まで<ruby>働<rt>はたら</rt></ruby>きますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>９<ruby>時<rt>じ</rt></ruby><ruby>半<rt>はん</rt></ruby>から５<ruby>時<rt>じ</rt></ruby><ruby>半<rt>はん</rt></ruby>までです。<ruby>時々<rt>ときどき</rt></ruby>８<ruby>時<rt>じ</rt></ruby>ごろまで<ruby>働<rt>はたら</rt></ruby>きます。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>そうですか。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>毎日<rt>まいにち</rt></ruby>９<ruby>時<rt>じ</rt></ruby><ruby>半<rt>はん</rt></ruby>から８<ruby>時<rt>じ</rt></ruby>ごろまで<ruby>働<rt>はたら</rt></ruby>きます。</td>',
        '<th>２　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ユナさん、<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>金曜日<rt>きんようび</rt></ruby><ruby>何<rt>なに</rt></ruby>をしましたか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>大学<rt>だいがく</rt></ruby>で９<ruby>時<rt>じ</rt></ruby>から１２<ruby>時<rt>じ</rt></ruby>まで<ruby>日本<rt>にほん</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しました。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>午後<rt>ごご</rt></ruby>は<ruby>何<rt>なに</rt></ruby>をしましたか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>寮<rt>りょう</rt></ruby>で<ruby>韓国<rt>かんこく</rt></ruby>の<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。それから、<ruby>晩<rt>ばん</rt></ruby>ご<ruby>飯<rt>はん</rt></ruby>を<ruby>作<rt>つく</rt></ruby>りました。</td>',
        '<th>　　</th><td colspan="2" class="star">★ユナさんは<ruby>先週<rt>せんしゅう</rt></ruby>の<ruby>金曜日<rt>きんようび</rt></ruby><ruby>寮<rt>りょう</rt></ruby>で<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。</td>',
        '<th>３　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>わたしはローズです。<ruby>研究員<rt>けんきゅういん</rt></ruby>です。<ruby>毎日<rt>まいにち</rt></ruby>９<ruby>時<rt>じ</rt></ruby>から５<ruby>時<rt>じ</rt></ruby>まで<ruby>大学<rt>だいがく</rt></ruby>でコンピューターを<ruby>研究<rt>けんきゅう</rt></ruby>します。それから、<ruby>夜<rt>よる</rt></ruby>うちで<ruby>日本<rt>にほん</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。いつも１２<ruby>時<rt>じ</rt></ruby>ごろ<ruby>寝<rt>ね</rt></ruby>ます。</td>',
        '<th>　　</th><td colspan="2" class="star">★ローズさんは<ruby>毎日<rt>まいにち</rt></ruby>９<ruby>時<rt>じ</rt></ruby>から５<ruby>時<rt>じ</rt></ruby>まで<ruby>大学<rt>だいがく</rt></ruby>で<ruby>日本<rt>にほん</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>します。</td>',
    ],
    "en": [//英語データ。　【注】日本語データと件数を同じにしてください。
    ],
    "mp3": [//音声データ。　【注】日本語データと件数を同じにしてください。
        //本文会話はsx_h_xx.mp3を使います。hが目印です
        "@1",

        "A20_01.mp3",
        "A20_02.mp3",
        "A20_03.mp3",
        "A20_04.mp3",
        "A20_05.mp3",

        "A20_06.mp3",
        "A20_07.mp3",
        "A20_08.mp3",
        "A20_09.mp3",
        "A20_10.mp3",

        "A20_11.mp3",
        "A20_12.mp3",
        "A20_13.mp3",
        "A20_14.mp3",
        "A20_15.mp3",

        "A20_16.mp3",
        "A20_17.mp3",
    ]
};
