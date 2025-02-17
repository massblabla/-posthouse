/* Number of MOTDs: 48.
 * Kind of a misnomer, but why not?
 * The MOTDs listed are licensed under CC-BY-SA 4.0 International, otherwise noted.
 * But any other code, is waived copyright and released into the public domain.
 */
function loadMotd() {
    const motdList = [
        "<span>Should I call this posthouse or a blog?</span>",
        "<span>Never got to <span class=\"jpfont\"><ruby>𡚴原<rt>あけんばら</rt></ruby></span>, what's in there?</span>",
        "<span>&lt;span&gt;&lt;span&gt;&lt;span&gt;&lt;/span&gt;&lt;/span&gt;&lt;/span&gt;.</span>",
        "<span>Welcome to the darkest dungeon of <em>massblabla</em>.</span>",
        "<span>Nmyaachi! Mensooree!</span>",
        "<span><a href=\"https://kernal.eu/\" class=\"motdlinks\">Go check Kernal!</a></span>",
        "<span>Never got to Akenbara, what's in there?</span>",
        "<span>Ever tried Linux? If not, try it out!</span>",
        "<span>What's older? Microshaft Winblows or Michaelsoft Binbows?</span>",
        "<span><span class=\"arfont\">إِنَّ ٱلَّذِينَ كَفَرُوا۟ مِنْ أَهْلِ ٱلْكِتَـٰبِ وَٱلْمُشْرِكِينَ فِى نَارِ جَهَنَّمَ خَـٰلِدِينَ فِيهَآ ۚ أُو۟لَـٰٓئِكَ هُمْ شَرُّ ٱلْبَرِيَّةِ</span> (98:6).</span>",
        "<span><a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"motdlinks\"><s>  Not the</s> Associated YouTube Video</a>.</span>",
        "<span><a href=\"https://www.youtube.com/watch?v=pyg-DYm7b0A\" class=\"motdlinks\"><s>   Not the</s> Associated YouTube Video</a>.</span>",
        "<span><a href=\"https://www.youtube.com/watch?v=jgm455M-N3Y\" class=\"motdlinks\"><s>    Not the</s> Associated YouTube Video</a>.</span>",
        "<span>I have no idea what to put. Sorry.</span>",
        "<span>See? I put dots in the end of sentences.</span>",
        "<span>Did you know that you can actually post something here?</span>",
        "<span><q cite=\"https://parade.com/living/shower-thoughts\">Why aren't iPhone chargers called Apple juice?</q>.</span>",
        "<span>.</span>",
        "<span>Welcome!</span>",
        "<span>Selamat datang!</span>",
        "<span>What will you choose? <span class=\"jpfont\">いらっしゃい</span> or <span class=\"jpfont\">ようこそ</span>?</span>",
        "<span>Chauffeur, chauffeur.</span>",
        "<span>Irasshai!</span>",
        "<span>Youkoso!</span>",
        "<span>Hey! I have a question. Is the Windows 95 Startup sound copyrighted? If it is I would be sad.</span>",
        "<span><a href=\"https://reddit.com/r/UsefulCharts\" class=\"motdlinks\">Not my subreddit</a>.</span>",
        "<span>I moved e4. What would you move?</span>",
        "<span><q cite=\"https://parade.com/living/shower-thoughts\">Firefly is the opposite of waterfall.</q>.</span>",
        "<span>Saya tidak bisa berbahasa Jepang. Maaf.</span>",
        "<span>There is stuff at the \"excessstuff\" branch.</span>",
        "<span>What will you choose? System.out.println() or Console.WriteLine()?</span>",
        "<span>API NAN TAK KUNJUNG PADAM - Indonesian proverb (The Ever-Burning Fire).</span>",
        "<span>If you going to have Japanese text, here you are obligated to put Furigana.</span>",
        "<span>Again, I have no idea what to put. Sorry.</span>",
        "<span>If this day is the first of the month, well, that's cool!</span>",
        "<span>What will you choose? posthouse or blog?</span>",
        "<span>Did you know that I spend most of my time scrolling YouTube's homepage.</span>",
        "<span>Did you know that this file isn't sorted? PLEASE DON'T. Please don't?</span>",
        "<span>Reverse this: rood on akanoyam.</span>",
        "<span>Hot take: The Earth is a cube (I'm joking).</span>",
        "<span>Hot take: I love the Java programming language (I'm not joking).</span>",
        "<span>I have oathed I will not play Minecraft version 1.21 in the month of July.</span>",
        "<span>Ever tried Biang-biang noodles? I didn't. What's it taste like?</span>",
        "<span>1+2+3+4+5 is 15? 3+3+4+5 is 15? 6+4+5 is 15? 10+5 is 15? It is 15.</span>",
        "<span><span class=\"emoji\">🇵🇸</span>.</span>",
        "<span>Did you know how huge is the set on The Truman Show? I didn't.",
        "<span>If you wanted to post something. Add an issue with the label Post.</span>",
        "<span>If you wanted to add an MOTD. Add an issue with the label MOTD.</span>",
        "<span>Don't trust that MOTD \"There is stuff at the \"excessstuff\" branch.\". It doesn't even exist!",
        "<span>I think using \"archinstall\" is blasphemy.",
        "<span>&Topf;&hopf;&iopf;&sopf;&nbsp;&iopf;&sopf;&nbsp;&copf;&oopf;&oopf;&lopf;.</span>",
        "<span>I use Microsoft Edge btw.</span>",
        "<span><em>missingno</em>.</span>",
        "<span>&Mopf;&aopf;&topf;&sopf;&uopf;&bopf;&aopf;&ropf;&aopf;.</span>",
        "<span><del>I... hereby declare the Nonsensitate of Nonsensia on behalf of the people of Thorodon, Hairvainth, Xortho, Vallatuschun, and Ilothwii. The people had been fighting against the colonizers and with many deaths, came Nonsensitate of Nonsensia. Independent! Independent! Independent!</del></span>",
        "<span><span class=\"arfont\">يَـٰٓأَيُّهَا ٱلنَّبِىُّ لِمَ تُحَرِّمُ مَآ أَحَلَّ ٱللَّهُ لَكَ ۖ تَبْتَغِى مَرْضَاتَ أَزْوَٰجِكَ ۚ وَٱللَّهُ غَفُورٌۭ رَّحِيمٌۭ</span> (66:1).</span>",
        "<span><span class=\"arfont\">وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلْعُقَدِ</span> (113:1).</span>",
        "<span>No.</span>",
        "<span><a href=\"https://maps.app.goo.gl/mQprXoE8C7BSQzw58\" class=\"motdlinks\">Songyuan, Jilin, China</a>.</span>",
        "<span><a href=\"https://maps.app.goo.gl/DD5SrrgoyXJ8ZzFE6\" class=\"motdlinks\">Matsubara, Osaka, Japan</a>.</span>",
        "<span>THEY WERE SWITCHED!!</span>",
        "<span><a href=\"https://maps.app.goo.gl/1axYtpoygwfeRzcd6\" class=\"motdlinks\">Wakkanai, Hokkaido, Japan</a>.</span>",
        "<span>&lt;&excl;DOCTYPE html&gt;.</span>",
        "<span>What will you choose? Beit ha-Mikdash or Bayt al-Maqdis?</span>"
    ];
    const motd = motdList[Math.trunc(Math.random() * motdList.length)];
    const welcomediv = document.querySelector("#motd");
    welcomediv.innerHTML = motd;
}

loadMotd();