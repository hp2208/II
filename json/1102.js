var gPlayData = {
    "beforelink": "play_all.html?1101",//そのまま
    "nextlink": "play_all.html?1103",//ファイル名は固定、後ろの数字だけ1個後のセクション
    "jptitle": "11　<ruby>東京<rt>とうきょう</rt></ruby>とソウルとどちらが<ruby>寒<rt>さむ</rt></ruby>いですか",//タイトルはplaylist.htmlから書き写す
    "jp": [//日本語データ
        '<th>Ⅱ．</th><td colspan="2"><ruby>○<rt>まる</rt></ruby>ですか、<ruby>×<rt>ばつ</rt></ruby>ですか。</td>',
        '<th><ruby>例<rt>れい</rt></ruby>　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>山田<rt>やまだ</rt></ruby>さんの<ruby>大学<rt>だいがく</rt></ruby>はどうですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>いい<ruby>先生<rt>せんせい</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いですよ。<ruby>図書館<rt>としょかん</rt></ruby>もコンピューターも<ruby>新<rt>あたら</rt></ruby>しいです。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>いいですね。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>キャンパスも<ruby>広<rt>ひろ</rt></ruby>くて、<ruby>春<rt>はる</rt></ruby>は<ruby>桜<rt>さくら</rt></ruby>の<ruby>花<rt>はな</rt></ruby>がとてもきれいですよ。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そうですか。いい<ruby>大学<rt>だいがく</rt></ruby>ですね。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>山田<rt>やまだ</rt></ruby>さんの<ruby>大学<rt>だいがく</rt></ruby>は<ruby>環境<rt>かんきょう</rt></ruby>がいいです。</td>',
        '<th>１　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>ジェフさん、<ruby>新<rt>あたら</rt></ruby>しい<ruby>車<rt>くるま</rt></ruby>ですね。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ええ、<ruby>先月<rt>せんげつ</rt></ruby><ruby>買<rt>か</rt></ruby>いました。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>サムさんの<ruby>車<rt>くるま</rt></ruby>より<ruby>大<rt>おお</rt></ruby>きいですね。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>そうです。<ruby>少<rt>すこ</rt></ruby>し<ruby>大<rt>おお</rt></ruby>きいです。</td>',
        '<th>　　</th><td colspan="2" class="star">★ジェフさんの<ruby>新<rt>あたら</rt></ruby>しい<ruby>車<rt>くるま</rt></ruby>はサムさんの<ruby>車<rt>くるま</rt></ruby>より<ruby>大<rt>おお</rt></ruby>きいです。</td>',
        '<th>２　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>来週<rt>らいしゅう</rt></ruby><ruby>奈良<rt>なら</rt></ruby>と<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>行<rt>い</rt></ruby>きます。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そうですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>奈良<rt>なら</rt></ruby>と<ruby>京都<rt>きょうと</rt></ruby>とどちらが<ruby>古<rt>ふる</rt></ruby>いですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>奈良<rt>なら</rt></ruby>のほうが<ruby>古<rt>ふる</rt></ruby>いです。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>奈良<rt>なら</rt></ruby>は<ruby>京都<rt>きょうと</rt></ruby>より<ruby>古<rt>ふる</rt></ruby>いです。</td>',
        '<th>３　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>お<ruby>父<rt>とう</rt></ruby>さんとお<ruby>母<rt>かあ</rt></ruby>さんとどちらが<ruby>料理<rt>りょうり</rt></ruby>が<ruby>上手<rt>じょうず</rt></ruby>ですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>どちらも<ruby>上手<rt>じょうず</rt></ruby>ですが、<ruby>父<rt>ちち</rt></ruby>は<ruby>料理<rt>りょうり</rt></ruby>をあまりしません。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>そうですか。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>のお<ruby>父<rt>とう</rt></ruby>さんは<ruby>料理<rt>りょうり</rt></ruby>があまり<ruby>上手<rt>じょうず</rt></ruby>じゃありません。</td>',
        '<th>４　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>山田<rt>やまだ</rt></ruby>さん、<ruby>山田<rt>やまだ</rt></ruby>さんの<ruby>大学<rt>だいがく</rt></ruby>は<ruby>学生<rt>がくせい</rt></ruby>が<ruby>何人<rt>なんにん</rt></ruby>いますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>だいたい10,000<ruby>人<rt>にん</rt></ruby>です。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>多<rt>おお</rt></ruby>いですね。わたしの<ruby>大学<rt>だいがく</rt></ruby>は6,000<ruby>人<rt>にん</rt></ruby>です。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>そうですか。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>の<ruby>大学<rt>だいがく</rt></ruby>は<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>の<ruby>大学<rt>だいがく</rt></ruby>より<ruby>学生<rt>がくせい</rt></ruby>が<ruby>多<rt>おお</rt></ruby>いです。</td>',
    ],
    "en": [//英語データ。　【注】日本語データと件数を同じにしてください。
    ],
    "mp3": [//音声データ。　【注】日本語データと件数を同じにしてください。
        //本文会話はsx_h_xx.mp3を使います。hが目印です
        "@1",

        "A44_01.mp3",
        "A44_02.mp3",
        "A44_03.mp3",
        "A44_04.mp3",
        "A44_05.mp3",

        "A44_06.mp3",
        "A44_07.mp3",
        "A44_08.mp3",
        "A44_09.mp3",
        "A44_10.mp3",

        "A44_11.mp3",
        "A44_12.mp3",
        "A44_13.mp3",
        "A44_14.mp3",
        "A44_15.mp3",

        "A44_16.mp3",
        "A44_17.mp3",
        "A44_18.mp3",
        "A44_19.mp3",
        "A44_20.mp3",

        "A44_21.mp3",
        "A44_22.mp3",
        "A44_23.mp3",
        "A44_24.mp3",
        "A44_25.mp3",

        "A44_26.mp3",
    ]
};
