var gPlayData = {
    "beforelink": "",//そのまま
    "nextlink":"play_all.html?1402",//ファイル名は固定、後ろの数字だけ1個後のセクション
    "jptitle": "14　わたしの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>音楽<rt>おんがく</rt></ruby>を<ruby>聞<rt>き</rt></ruby>くことです",//タイトルはplaylist.htmlから書き写す
    "jp": [//日本語データ
        '<th>Ⅰ．</th><td colspan="2"><ruby>正<rt>ただ</rt></ruby>しいものを<ruby>選<rt>えら</rt></ruby>んでください。</td>',
        '<th><ruby>例<rt>れい</rt></ruby>　</th><td colspan="2" class="star">★ユナさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ユナさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>歌<rt>うた</rt></ruby>を<ruby>作<rt>つく</rt></ruby>ることです。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>へえ、どんな<ruby>歌<rt>うた</rt></ruby>を<ruby>作<rt>つく</rt></ruby>りますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>ラブソングが<ruby>多<rt>おお</rt></ruby>いです。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>そうですか。</td>',
        '<th>　　</th><td colspan="2" class="star">★ユナさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。</td>',
        '<th>１　</th><td colspan="2" class="star">★ジェフさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>ジェフさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>山<rt>やま</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ることです。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>山<rt>やま</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>ですか。<ruby>高<rt>たか</rt></ruby>い<ruby>山<rt>やま</rt></ruby>に<ruby>登<rt>のぼ</rt></ruby>りますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>いいえ、<ruby>高<rt>たか</rt></ruby>い<ruby>山<rt>やま</rt></ruby>は<ruby>登<rt>のぼ</rt></ruby>りません。<ruby>遠<rt>とお</rt></ruby>いところから<ruby>山<rt>やま</rt></ruby>の<ruby>写真<rt>しゃしん</rt></ruby>を<ruby>撮<rt>と</rt></ruby>ります。</td>',
        '<th>　　</th><td colspan="2" class="star">★ジェフさんの<ruby>趣味<rt>しゅみ</rt></ruby>は<ruby>何<rt>なん</rt></ruby>ですか。</td>',
        '<th>２　</th><td colspan="2" class="star">★みどりさんはいつギターの<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めましたか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>みどりさんはギターを<ruby>弾<rt>ひ</rt></ruby>くことができますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>ええ、<ruby>少<rt>すこ</rt></ruby>し。でも、<ruby>下手<rt>へた</rt></ruby>です。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>何<rt>なん</rt></ruby><ruby>歳<rt>さい</rt></ruby>から<ruby>練習<rt>れんしゅう</rt></ruby>していますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>１９<ruby>歳<rt>さい</rt></ruby>からです。１４<ruby>歳<rt>さい</rt></ruby>のとき、<ruby>父<rt>ちち</rt></ruby>にギターをもらいましたが、５<ruby>年<rt>ねん</rt></ruby>ぐらい<ruby>練習<rt>れんしゅう</rt></ruby>しませんでした。</td>',
        '<th>　　</th><td colspan="2" class="star">★みどりさんはいつギターの<ruby>練習<rt>れんしゅう</rt></ruby>を<ruby>始<rt>はじ</rt></ruby>めましたか。</td>',
        '<th>３　</th><td colspan="2" class="star">★<ruby>寮<rt>りょう</rt></ruby>のルールはどれですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>寮<rt>りょう</rt></ruby>はどうですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>とても<ruby>楽<rt>たの</rt></ruby>しいですが、ルールは<ruby>厳<rt>きび</rt></ruby>しいです。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>どんなルールがありますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>部屋<rt>へや</rt></ruby>でお<ruby>酒<rt>さけ</rt></ruby>を<ruby>飲<rt>の</rt></ruby>むことができません。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>へえ、じゃ、<ruby>食堂<rt>しょくどう</rt></ruby>は？</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>食堂<rt>しょくどう</rt></ruby>は<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>です。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>寮<rt>りょう</rt></ruby>のルールはどれですか。</td>',
        '<th>４　</th><td colspan="2" class="star">★どこで<ruby>電話<rt>でんわ</rt></ruby>をしますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>天<rt>てん</rt></ruby>ぷらを<ruby>作<rt>つく</rt></ruby>りたいんですが……。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>じゃ、<ruby>土曜日<rt>どようび</rt></ruby>うちに<ruby>来<rt>き</rt></ruby>ますか。<ruby>教<rt>おし</rt></ruby>えますよ。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ありがとうございます。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>じゃ、うちを<ruby>出<rt>で</rt></ruby>るまえに、<ruby>電話<rt>でんわ</rt></ruby>をください。<ruby>駅<rt>えき</rt></ruby>へ<ruby>迎<rt>むか</rt></ruby>えに<ruby>行<rt>い</rt></ruby>きます。</td>',
        '<th>　　</th><td colspan="2" class="star">★どこで<ruby>電話<rt>でんわ</rt></ruby>をしますか。</td>',
    ],
    "en": [//英語データ。　【注】日本語データと件数を同じにしてください。
    ],
    "mp3": [//音声データ。　【注】日本語データと件数を同じにしてください。
        //本文会話はsx_h_xx.mp3を使います。hが目印です
        "@1",

        "B05_01.mp3",
        "B05_02.mp3",
        "B05_03.mp3",
        "B05_04.mp3",
        "B05_05.mp3",

        "B05_06.mp3",
        "B05_07.mp3",
        "B05_08.mp3",
        "B05_09.mp3",
        "B05_10.mp3",

        "B05_11.mp3",
        "B05_12.mp3",
        "B05_13.mp3",
        "B05_14.mp3",
        "B05_15.mp3",

        "B05_16.mp3",
        "B05_17.mp3",
        "B05_18.mp3",
        "B05_19.mp3",
        "B05_20.mp3",

        "B05_21.mp3",
        "B05_22.mp3",
        "B05_23.mp3",
        "B05_24.mp3",
        "B05_25.mp3",

        "B05_26.mp3",
        "B05_27.mp3",
        "B05_28.mp3",
        "B05_29.mp3",
        "B05_30.mp3",

        "B05_31.mp3",
        "B05_32.mp3",
        "B05_33.mp3",
        "B05_34.mp3",
    ]
};
