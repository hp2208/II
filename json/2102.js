var gPlayData = {
    "beforelink": "play_all.html?2101",//そのまま
    "nextlink": "play_all.html?2103",//ファイル名は固定、後ろの数字だけ1個後のセクション
    "jptitle": "21　<ruby>雨<rt>あめ</rt></ruby>が<ruby>降<rt>ふ</rt></ruby>ったら、ツアーは<ruby>中止<rt>ちゅうし</rt></ruby>です",//タイトルはplaylist.htmlから書き写す
    "jp": [//日本語データ
        '<th>Ⅱ．</th><td colspan="2"><ruby>○<rt>まる</rt></ruby>ですか、<ruby>×<rt>ばつ</rt></ruby>ですか。</td>',
        '<th><ruby>例<rt>れい</rt></ruby>　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ちょっとコンビニへ<ruby>行<rt>い</rt></ruby>くね。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>あ、コートは？　<ruby>外<rt>そと</rt></ruby>、<ruby>寒<rt>さむ</rt></ruby>いよ。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>着<rt>き</rt></ruby>なくても、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はコートを<ruby>着<rt>き</rt></ruby>ます。</td>',
        '<th>１　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>あ、１２<ruby>時<rt>じ</rt></ruby>ですね。<ruby>授業<rt>じゅぎょう</rt></ruby>が<ruby>終<rt>お</rt></ruby>わる<ruby>時間<rt>じかん</rt></ruby>ですが……。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>先生<rt>せんせい</rt></ruby>。まだ<ruby>作文<rt>さくぶん</rt></ruby>が<ruby>終<rt>お</rt></ruby>わりません。もう<ruby>少<rt>すこ</rt></ruby>し<ruby>時間<rt>じかん</rt></ruby>が<ruby>欲<rt>ほ</rt></ruby>しいです。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>そうですか。じゃ、ここで<ruby>書<rt>か</rt></ruby>いてください。<ruby>終<rt>お</rt></ruby>わったら、わたしの<ruby>部屋<rt>へや</rt></ruby>に<ruby>持<rt>も</rt></ruby>って<ruby>来<rt>き</rt></ruby>てください。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>はい。<ruby>分<rt>わ</rt></ruby>かりました。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>学生<rt>がくせい</rt></ruby>はこれから<ruby>先生<rt>せんせい</rt></ruby>の<ruby>部屋<rt>へや</rt></ruby>で<ruby>作文<rt>さくぶん</rt></ruby>を<ruby>書<rt>か</rt></ruby>きます。</td>',
        '<th>２　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>はい、スバル<ruby>日本<rt>にほん</rt></ruby><ruby>語<rt>ご</rt></ruby><ruby>学校<rt>がっこう</rt></ruby>です。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>あのう、<ruby>日本<rt>にほん</rt></ruby><ruby>語<rt>ご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>したいんですが、<ruby>夏<rt>なつ</rt></ruby>のクラスの<ruby>申込書<rt>もうしこみしょ</rt></ruby>を<ruby>送<rt>おく</rt></ruby>ってくださいませんか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>はい。<ruby>今日<rt>きょう</rt></ruby><ruby>送<rt>おく</rt></ruby>りますから、<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>が<ruby>分<rt>わ</rt></ruby>からなかったら、また<ruby>電話<rt>でんわ</rt></ruby>してください。</td>',
        '<th>　　</th><td class="subhead">女：</td><td>はい、<ruby>分<rt>わ</rt></ruby>かりました。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>じゃ、<ruby>住所<rt>じゅうしょ</rt></ruby>を<ruby>教<rt>おし</rt></ruby>えてください。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>申込書<rt>もうしこみしょ</rt></ruby>の<ruby>書<rt>か</rt></ruby>き<ruby>方<rt>かた</rt></ruby>が<ruby>分<rt>わ</rt></ruby>かりませんでしたから、<ruby>電話<rt>でんわ</rt></ruby>しました。</td>',
        '<th>３　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>あしたの<ruby>野球<rt>やきゅう</rt></ruby>の<ruby>試合<rt>しあい</rt></ruby>、<ruby>雨<rt>あめ</rt></ruby>だったら、どうしますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>雨<rt>あめ</rt></ruby>だったら、<ruby>試合<rt>しあい</rt></ruby>はありません。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>雨<rt>あめ</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>しだけでも、<ruby>中止<rt>ちゅうし</rt></ruby>ですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>はい、<ruby>少<rt>すこ</rt></ruby>しでも<ruby>降<rt>ふ</rt></ruby>ったら、<ruby>中止<rt>ちゅうし</rt></ruby>です。</td>',
        '<th>　　</th><td colspan="2" class="star">★あした<ruby>雨<rt>あめ</rt></ruby>が<ruby>少<rt>すこ</rt></ruby>しだったら、<ruby>試合<rt>しあい</rt></ruby>があります。</td>',
        '<th>４　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>お<ruby>父<rt>とう</rt></ruby>さん、<ruby>今日<rt>きょう</rt></ruby>はお<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>まないでね。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>どうして？</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>今日<rt>きょう</rt></ruby>はわたしの<ruby>彼<rt>かれ</rt></ruby>に<ruby>初<rt>はじ</rt></ruby>めて<ruby>会<rt>あ</rt></ruby>うでしょう。お<ruby>父<rt>とう</rt></ruby>さんは<ruby>時々<rt>ときどき</rt></ruby>お<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んで、<ruby>寝<rt>ね</rt></ruby>るから。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>寝<rt>ね</rt></ruby>ないよ。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そうね。でも、<ruby>今日<rt>きょう</rt></ruby>はお<ruby>願<rt>ねが</rt></ruby>い。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>のお<ruby>父<rt>とう</rt></ruby>さんはお<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>んだら、<ruby>時々<rt>ときどき</rt></ruby><ruby>寝<rt>ね</rt></ruby>ます。</td>',
    ],
    "en": [//英語データ。　【注】日本語データと件数を同じにしてください。
    ],
    "mp3": [//音声データ。　【注】日本語データと件数を同じにしてください。
        //本文会話はsx_h_xx.mp3を使います。hが目印です
        "@1",

        "B34_01.mp3",
        "B34_02.mp3",
        "B34_03.mp3",
        "B34_04.mp3",
        "B34_05.mp3",

        "B34_06.mp3",
        "B34_07.mp3",
        "B34_08.mp3",
        "B34_09.mp3",
        "B34_10.mp3",

        "B34_11.mp3",
        "B34_12.mp3",
        "B34_13.mp3",
        "B34_14.mp3",
        "B34_15.mp3",

        "B34_16.mp3",
        "B34_17.mp3",
        "B34_18.mp3",
        "B34_19.mp3",
        "B34_20.mp3",

        "B34_21.mp3",
        "B34_22.mp3",
        "B34_23.mp3",
        "B34_24.mp3",
        "B34_25.mp3",

        "B34_26.mp3",
        "B34_27.mp3",
    ]
};
