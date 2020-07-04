var gPlayData = {
    "beforelink": "play_all.html?1801",//そのまま
    "nextlink": "play_all.html?1803",//ファイル名は固定、後ろの数字だけ1個後のセクション
    "jptitle": "18　<ruby>相撲<rt>すもう</rt></ruby>を<ruby>見<rt>み</rt></ruby>たことがありません",//タイトルはplaylist.htmlから書き写す
    "jp": [//日本語データ
        '<th>Ⅱ．</th><td colspan="2"><ruby>○<rt>まる</rt></ruby>ですか、<ruby>×<rt>ばつ</rt></ruby>ですか。</td>',
        '<th><ruby>例<rt>れい</rt></ruby>　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>１：</td><td>みどりさんの<ruby>彼<rt>かれ</rt></ruby>、すてきですね。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>２：</td><td>すてきでしょう。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>１：</td><td>どこで<ruby>初<rt>はじ</rt></ruby>めて<ruby>会<rt>あ</rt></ruby>いましたか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>２：</td><td><ruby>大学<rt>だいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>するまえに、<ruby>友達<rt>ともだち</rt></ruby>と<ruby>京都<rt>きょうと</rt></ruby>へ<ruby>旅行<rt>りょこう</rt></ruby>に<ruby>行<rt>い</rt></ruby>って、<ruby>京都<rt>きょうと</rt></ruby>で<ruby>会<rt>あ</rt></ruby>いました。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>１：</td><td>へえ、そうですか。</td>',
        '<th>　　</th><td colspan="2" class="star">★みどりさんは<ruby>大学<rt>だいがく</rt></ruby>を<ruby>卒業<rt>そつぎょう</rt></ruby>したあとで、<ruby>彼<rt>かれ</rt></ruby>に<ruby>会<rt>あ</rt></ruby>いました。</td>',
        '<th>１　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>子供<rt>こども</rt></ruby>のとき、うちの<ruby>仕事<rt>しごと</rt></ruby>を<ruby>手伝<rt>てつだ</rt></ruby>いましたか。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>はい。<ruby>子供<rt>こども</rt></ruby>のときは、<ruby>朝<rt>あさ</rt></ruby><ruby>新聞<rt>しんぶん</rt></ruby>を<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>ったり、お<ruby>風呂<rt>ふろ</rt></ruby>を<ruby>掃除<rt>そうじ</rt></ruby>したりしました。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>そうですか。わたしもです。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>は<ruby>子供<rt>こども</rt></ruby>のとき、うちの<ruby>手伝<rt>てつだ</rt></ruby>いをしませんでした。</td>',
        '<th>２　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td><ruby>昨日<rt>きのう</rt></ruby>バスに<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>をしました。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td><ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>？　<ruby>何<rt>なに</rt></ruby>を？</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>かばんです。バスを<ruby>降<rt>お</rt></ruby>りたあとで、すぐ<ruby>気<rt>き</rt></ruby>がつきましたが、バスはもう……。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>それで、<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>でしたか？</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>ええ、うちからバスの<ruby>会社<rt>かいしゃ</rt></ruby>に<ruby>電話<rt>でんわ</rt></ruby>をしました。<ruby>今日<rt>きょう</rt></ruby>バスの<ruby>会社<rt>かいしゃ</rt></ruby>へ<ruby>取<rt>と</rt></ruby>りに<ruby>行<rt>い</rt></ruby>きます。</td>',
        '<th>　　</th><td colspan="2" class="star">★うちへ<ruby>帰<rt>かえ</rt></ruby>ってから、<ruby>忘<rt>わす</rt></ruby>れ<ruby>物<rt>もの</rt></ruby>に<ruby>気<rt>き</rt></ruby>がつきました。</td>',
        '<th>３　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>このレストラン、<ruby>入<rt>はい</rt></ruby>ったこと、あるね。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>えっ、ないよ。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>えっ、<ruby>先月<rt>せんげつ</rt></ruby><ruby>一緒<rt>いっしょ</rt></ruby>に、ワインを<ruby>飲<rt>の</rt></ruby>んで……あ、ほかの<ruby>人<rt>ひと</rt></ruby>だった。</td>',
        '<th>　　</th><td class="subhead"><ruby>男<rt>おとこ</rt></ruby>：</td><td>えっ、だれ？　その<ruby>人<rt>ひと</rt></ruby>。</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>：</td><td>うーん。<ruby>同<rt>おな</rt></ruby>じクラスの<ruby>女<rt>おんな</rt></ruby>の<ruby>子<rt>こ</rt></ruby>。</td>',
        '<th>　　</th><td colspan="2" class="star">★<ruby>男<rt>おとこ</rt></ruby>の<ruby>人<rt>ひと</rt></ruby>はこのレストランに<ruby>入<rt>はい</rt></ruby>ったことがありません。</td>',
        '<th>４　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>１：</td><td>あ、みどりさん、<ruby>昨日<rt>きのう</rt></ruby>クラス、<ruby>休<rt>やす</rt></ruby>んだね。<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>？</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>２：</td><td>うん。<ruby>大丈夫<rt>だいじょうぶ</rt></ruby>。<ruby>今<rt>いま</rt></ruby>は<ruby>元気<rt>げんき</rt></ruby>だから。<ruby>昨日<rt>きのう</rt></ruby>クラスで<ruby>何<rt>なに</rt></ruby>、<ruby>勉強<rt>べんきょう</rt></ruby>した？</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>１：</td><td>ええと、これ、わたしのノート。<ruby>見<rt>み</rt></ruby>る？</td>',
        '<th>　　</th><td class="subhead"><ruby>女<rt>おんな</rt></ruby>２：</td><td>うん。ありがとう。あした<ruby>返<rt>かえ</rt></ruby>すね。</td>',
        '<th>　　</th><td colspan="2" class="star">★みどりさんは<ruby>昨日<rt>きのう</rt></ruby>クラスへ<ruby>行<rt>い</rt></ruby>きませんでしたから、ノートを<ruby>借<rt>か</rt></ruby>りました。</td>',
    ],
    "en": [//英語データ。　【注】日本語データと件数を同じにしてください。
    ],
    "mp3": [//音声データ。　【注】日本語データと件数を同じにしてください。
        //本文会話はsx_h_xx.mp3を使います。hが目印です
        "@1",

        "B22_01.mp3",
        "B22_02.mp3",
        "B22_03.mp3",
        "B22_04.mp3",
        "B22_05.mp3",

        "B22_06.mp3",
        "B22_07.mp3",
        "B22_08.mp3",
        "B22_09.mp3",
        "B22_10.mp3",

        "B22_11.mp3",
        "B22_12.mp3",
        "B22_13.mp3",
        "B22_14.mp3",
        "B22_15.mp3",

        "B22_16.mp3",
        "B22_17.mp3",
        "B22_18.mp3",
        "B22_19.mp3",
        "B22_20.mp3",

        "B22_21.mp3",
        "B22_22.mp3",
        "B22_23.mp3",
        "B22_24.mp3",
        "B22_25.mp3",

        "B22_26.mp3",
        "B22_27.mp3",
        "B22_28.mp3",
    ]
};
