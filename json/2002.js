var gPlayData = {
    "beforelink": "play_all.html?2001",//そのまま
    "nextlink": "play_all.html?2003",//ファイル名は固定、後ろの数字だけ1個後のセクション
    "jptitle": "20　これは<ruby>彼女<rt>かのじょ</rt></ruby>にもらったTシャツです",//タイトルはplaylist.htmlから書き写す
    "jp": [//日本語データ
        '<th>Ⅱ．</th><td colspan="2"><ruby>○<rt>まる</rt></ruby>ですか、<ruby>×<rt>ばつ</rt></ruby>ですか。</td>',
        '<th><ruby>例<rt>れい</rt></ruby>　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>その<ruby>青<rt>あお</rt></ruby>いシャツは<ruby>珍<rt>めずら</rt></ruby>しいですね。どこのですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>インドのです。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そうですか。インドへ<ruby>行<rt>い</rt></ruby>ったことがありますか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>いいえ、これは<ruby>友達<rt>ともだち</rt></ruby>にもらったシャツです。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そうですか。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はインドで<ruby>青<rt>あお</rt></ruby>いシャツを<ruby>買<rt>か</rt></ruby>いました。</td>',
        '<th>１　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>この<ruby>白<rt>しろ</rt></ruby>いパン、おいしくないね。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そう？　<ruby>昨日<rt>きのう</rt></ruby><ruby>新宿<rt>しんじゅく</rt></ruby>のデパートで<ruby>買<rt>か</rt></ruby>ったパンだよ……。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>このちょっと<ruby>黄色<rt>きいろ</rt></ruby>いパンはおいしい。これも<ruby>新宿<rt>しんじゅく</rt></ruby>のデパート？</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>ううん、それは<ruby>駅<rt>えき</rt></ruby>の<ruby>近<rt>ちか</rt></ruby>くのスーパーで<ruby>買<rt>か</rt></ruby>ったもの。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>スーパーのパンのほうがいいね。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そう？　わたしはその<ruby>白<rt>しろ</rt></ruby>いパンのほうがおいしいと<ruby>思<rt>おも</rt></ruby>う。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はデパートで<ruby>買<rt>か</rt></ruby>ったパンはおいしくないと<ruby>言<rt>い</rt></ruby>いました。</td>',
        '<th>２　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>この<ruby>音楽<rt>おんがく</rt></ruby>、どこかで<ruby>聞<rt>き</rt></ruby>いたことがある。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>そう？　どこで？</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>リンさんとドライブに<ruby>行<rt>い</rt></ruby>って、<ruby>車<rt>くるま</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>聞<rt>き</rt></ruby>いたと<ruby>思<rt>おも</rt></ruby>う。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>本当<rt>ほんとう</rt></ruby>？</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>うん、そうだ。この<ruby>曲<rt>きょく</rt></ruby>は<ruby>忘<rt>わす</rt></ruby>れない。</td>',
        '<th>　　</th><td colspan="2" class="star">★この<ruby>音楽<rt>おんがく</rt></ruby>は<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>がリンさんと<ruby>車<rt>くるま</rt></ruby>の<ruby>中<rt>なか</rt></ruby>で<ruby>聞<rt>き</rt></ruby>いた<ruby>音楽<rt>おんがく</rt></ruby>です。</td>',
        '<th>３　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>いい<ruby>時計<rt>とけい</rt></ruby>しているね。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>ありがとう。<ruby>高校<rt>こうこう</rt></ruby>の<ruby>卒業<rt>そつぎょう</rt></ruby>プレゼント。<ruby>父<rt>ちち</rt></ruby>にもらった<ruby>時計<rt>とけい</rt></ruby>だよ。これ、<ruby>知<rt>し</rt></ruby>っている？　スイスの<ruby>時計<rt>とけい</rt></ruby>。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>うん、<ruby>知<rt>し</rt></ruby>っているよ。いろいろなデザインがあるね。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>うん。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>女<rt>おんな</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はお<ruby>父<rt>とう</rt></ruby>さんにもらった<ruby>時計<rt>とけい</rt></ruby>をしています。</td>',
        '<th>４　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>昨日<rt>きのう</rt></ruby><ruby>夢<rt>ゆめ</rt></ruby>を<ruby>見<rt>み</rt></ruby>ました。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>へえ、どんな<ruby>夢<rt>ゆめ</rt></ruby>ですか。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ホテルを<ruby>経営<rt>けいえい</rt></ruby>している<ruby>夢<rt>ゆめ</rt></ruby>です。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>いい<ruby>夢<rt>ゆめ</rt></ruby>ですね。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>いいえ、<ruby>全然<rt>ぜんぜん</rt></ruby><ruby>人<rt>ひと</rt></ruby>が<ruby>来<rt>こ</rt></ruby>ないホテルです。<ruby>働<rt>はたら</rt></ruby>いている<ruby>人<rt>ひと</rt></ruby>にお<ruby>金<rt>かね</rt></ruby>を<ruby>払<rt>はら</rt></ruby>うことができないと<ruby>思<rt>おも</rt></ruby>って、<ruby>泣<rt>な</rt></ruby>いていました。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>そうですか。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>昨日<rt>きのう</rt></ruby><ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>が<ruby>見<rt>み</rt></ruby>た<ruby>夢<rt>ゆめ</rt></ruby>は<ruby>楽<rt>たの</rt></ruby>しい<ruby>夢<rt>ゆめ</rt></ruby>でした。</td>',
    ],
    "en": [//英語データ。　【注】日本語データと件数を同じにしてください。
    ],
    "mp3": [//音声データ。　【注】日本語データと件数を同じにしてください。
        //本文会話はsx_h_xx.mp3を使います。hが目印です
        "@1",

        "B30_01.mp3",
        "B30_02.mp3",
        "B30_03.mp3",
        "B30_04.mp3",
        "B30_05.mp3",

        "B30_06.mp3",
        "B30_07.mp3",
        "B30_08.mp3",
        "B30_09.mp3",
        "B30_10.mp3",

        "B30_11.mp3",
        "B30_12.mp3",
        "B30_13.mp3",
        "B30_14.mp3",
        "B30_15.mp3",

        "B30_16.mp3",
        "B30_17.mp3",
        "B30_18.mp3",
        "B30_19.mp3",
        "B30_20.mp3",

        "B30_21.mp3",
        "B30_22.mp3",
        "B30_23.mp3",
        "B30_24.mp3",
        "B30_25.mp3",

        "B30_26.mp3",
        "B30_27.mp3",
        "B30_28.mp3",
        "B30_29.mp3",
        "B30_30.mp3",

        "B30_31.mp3",
        "B30_32.mp3",
    ]
};
