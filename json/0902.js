var gPlayData = {
    "beforelink": "play_all.html?0901",//そのまま
    "nextlink": "play_all.html?0903",//ファイル名は固定、後ろの数字だけ1個後のセクション
    "jptitle": "９　どんなスポーツが<ruby>好<rt>す</rt></ruby>きですか",//タイトルはplaylist.htmlから書き写す
    "jp": [//日本語データ
        '<th>Ⅱ．</th><td colspan="2"><ruby>○<rt>まる</rt></ruby>ですか、<ruby>×<rt>ばつ</rt></ruby>ですか。</td>',
        '<th><ruby>例<rt>れい</rt></ruby>　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>サムさんのお<ruby>姉<rt>ねえ</rt></ruby>さんは<ruby>料理<rt>りょうり</rt></ruby>をしますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>あまり<ruby>上手<rt>じょうず</rt></ruby>じゃありませんが、しますよ。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>どんな<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>りますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>時々<rt>ときどき</rt></ruby>フランス<ruby>料理<rt>りょうり</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ります。あまりおいしくないですが。</td>',
        '<th>　　</th><td colspan="2" class="star">★サムさんのお<ruby>姉<rt>ねえ</rt></ruby>さんはフランス<ruby>料理<rt>りょうり</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>です。</td>',
        '<th>１　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>サムさんは<ruby>日本<rt>にほん</rt></ruby><ruby>語<rt>ご</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>ですね。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ありがとうございます。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>日本<rt>にほん</rt></ruby><ruby>語<rt>ご</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>はどうですか。<ruby>分<rt>わ</rt></ruby>かりますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>少<rt>すこ</rt></ruby>し<ruby>分<rt>わ</rt></ruby>かりますが、<ruby>難<rt>むずか</rt></ruby>しいですね。</td>',
        '<th>　　</th><td colspan="2" class="star">★サムさんは<ruby>日本<rt>にほん</rt></ruby><ruby>語<rt>ご</rt></ruby>の<ruby>新聞<rt>しんぶん</rt></ruby>が<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>分<rt>わ</rt></ruby>かりません。</td>',
        '<th>２　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ユナさん、<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ませんか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>いいですね。いつですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>あしたです。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>すみません。あしたは<ruby>約束<rt>やくそく</rt></ruby>がありますから、ちょっと……。</td>',
        '<th>　　</th><td colspan="2" class="star">★ユナさんはあした<ruby>暇<rt>ひま</rt></ruby>ですから、<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>と<ruby>映画<rt>えいが</rt></ruby>を<ruby>見<rt>み</rt></ruby>ます。</td>',
        '<th>３　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>ビール、<ruby>飲<rt>の</rt></ruby>みませんか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>すみません。<ruby>今日<rt>きょう</rt></ruby>はちょっと……。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>ビールが<ruby>嫌<rt>きら</rt></ruby>いですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>いいえ、<ruby>好<rt>す</rt></ruby>きですが、<ruby>今日<rt>きょう</rt></ruby>は<ruby>車<rt>くるま</rt></ruby>で<ruby>来<rt>き</rt></ruby>ましたから。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そうですか。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>車<rt>くるま</rt></ruby>で<ruby>来<rt>き</rt></ruby>ましたから、ビールを<ruby>飲<rt>の</rt></ruby>みません。</td>',
        '<th>４　</th><td class="subhead">男：</td><td><ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>暇<rt>ひま</rt></ruby>なとき、<ruby>何<rt>なに</rt></ruby>をしますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をします。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>そうですか。<ruby>今日<rt>きょう</rt></ruby>もしますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>昨日<rt>きのう</rt></ruby>たくさん<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をしましたから、<ruby>今日<rt>きょう</rt></ruby>はお<ruby>金<rt>かね</rt></ruby>がありません。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>佐藤<rt>さとう</rt></ruby>さんは<ruby>今日<rt>きょう</rt></ruby>お<ruby>金<rt>かね</rt></ruby>がたくさんありますから、<ruby>買<rt>か</rt></ruby>い<ruby>物<rt>もの</rt></ruby>をします。</td>',
    ],
    "en": [//英語データ。　【注】日本語データと件数を同じにしてください。
    ],
    "mp3": [//音声データ。　【注】日本語データと件数を同じにしてください。
        //本文会話はsx_h_xx.mp3を使います。hが目印です
        "@1",

        "A36_01.mp3",
        "A36_02.mp3",
        "A36_03.mp3",
        "A36_04.mp3",
        "A36_05.mp3",

        "A36_06.mp3",
        "A36_07.mp3",
        "A36_08.mp3",
        "A36_09.mp3",
        "A36_10.mp3",

        "A36_11.mp3",
        "A36_12.mp3",
        "A36_13.mp3",
        "A36_14.mp3",
        "A36_15.mp3",

        "A36_16.mp3",
        "A36_17.mp3",
        "A36_18.mp3",
        "A36_19.mp3",
        "A36_20.mp3",

        "A36_21.mp3",
        "A36_22.mp3",
        "A36_23.mp3",
        "A36_24.mp3",
        "A36_25.mp3",

        "A36_26.mp3",
        "A36_27.mp3",
    ]
};
