var gPlayData = {
    "beforelink": "play_all.html?1001",//そのまま
    "nextlink": "play_all.html?1003",//ファイル名は固定、後ろの数字だけ1個後のセクション
    "jptitle": "10　わたしは<ruby>渡辺<rt>わたなべ</rt></ruby>さんにお<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>習<rt>なら</rt></ruby>いました",//タイトルはplaylist.htmlから書き写す
    "jp": [//日本語データ
        '<th>Ⅱ．</th><td colspan="2"><ruby>○<rt>まる</rt></ruby>ですか、<ruby>×<rt>ばつ</rt></ruby>ですか。</td>',
        '<th><ruby>例<rt>れい</rt></ruby>　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ユナさん、その<ruby>英<rt>えい</rt></ruby><ruby>語<rt>ご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>はユナさんのですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>いいえ、<ruby>図書館<rt>としょかん</rt></ruby>で<ruby>借<rt>か</rt></ruby>りました。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>もう<ruby>読<rt>よ</rt></ruby>みましたか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>いいえ、<ruby>今晩<rt>こんばん</rt></ruby><ruby>読<rt>よ</rt></ruby>みます。</td>',
        '<th>　　</th><td colspan="2" class="star">★ユナさんは<ruby>英<rt>えい</rt></ruby><ruby>語<rt>ご</rt></ruby>の<ruby>本<rt>ほん</rt></ruby>を<ruby>買<rt>か</rt></ruby>いました。</td>',
        '<th>１　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>ジェフさんはどこでお<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>習<rt>なら</rt></ruby>いましたか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>アメリカです。<ruby>日本<rt>にほん</rt></ruby><ruby>人<rt>じん</rt></ruby>の<ruby>友達<rt>ともだち</rt></ruby>に<ruby>習<rt>なら</rt></ruby>いました。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そうですか。<ruby>上手<rt>じょうず</rt></ruby>ですね。</td>',
        '<th>　　</th><td colspan="2" class="star">★ジェフさんは<ruby>日本<rt>にほん</rt></ruby>で<ruby>友達<rt>ともだち</rt></ruby>にお<ruby>茶<rt>ちゃ</rt></ruby>を<ruby>習<rt>なら</rt></ruby>いました。</td>',
        '<th>２　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>その<ruby>時計<rt>とけい</rt></ruby>、すてきですね。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>去年<rt>きょねん</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby><ruby>姉<rt>あね</rt></ruby>にもらいました。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>いいお<ruby>姉<rt>ねえ</rt></ruby>さんですね。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>去年<rt>きょねん</rt></ruby>の<ruby>誕生日<rt>たんじょうび</rt></ruby>お<ruby>姉<rt>ねえ</rt></ruby>さんに<ruby>時計<rt>とけい</rt></ruby>をあげました。</td>',
        '<th>３　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>いらっしゃいませ。ご<ruby>注文<rt>ちゅうもん</rt></ruby>は？</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>このりんごを４つとこのみかんを３つお<ruby>願<rt>ねが</rt></ruby>いします。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>はい。りんご４つとみかん３つですね。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>果物<rt>くだもの</rt></ruby>を７つ<ruby>買<rt>か</rt></ruby>いました。</td>',
        '<th>４　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>シンさんは<ruby>何<rt>なん</rt></ruby>でカレーを<ruby>食<rt>た</rt></ruby>べますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>手<rt>て</rt></ruby>で<ruby>食<rt>た</rt></ruby>べます。おいしいですよ。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そうですか！　わたしはスプーンで<ruby>食<rt>た</rt></ruby>べます。</td>',
        '<th>　　</th><td colspan="2" class="star">★シンさんは<ruby>手<rt>て</rt></ruby>でカレーを<ruby>食<rt>た</rt></ruby>べます。</td>',
    ],
    "en": [//英語データ。　【注】日本語データと件数を同じにしてください。
    ],
    "mp3": [//音声データ。　【注】日本語データと件数を同じにしてください。
        //本文会話はsx_h_xx.mp3を使います。hが目印です
        "@1",

        "A40_01.mp3",
        "A40_02.mp3",
        "A40_03.mp3",
        "A40_04.mp3",
        "A40_05.mp3",

        "A40_06.mp3",
        "A40_07.mp3",
        "A40_08.mp3",
        "A40_09.mp3",
        "A40_10.mp3",

        "A40_11.mp3",
        "A40_12.mp3",
        "A40_13.mp3",
        "A40_14.mp3",
        "A40_15.mp3",

        "A40_16.mp3",
        "A40_17.mp3",
        "A40_18.mp3",
        "A40_19.mp3",
        "A40_20.mp3",

        "A40_21.mp3",
        "A40_22.mp3",
    ]
};
