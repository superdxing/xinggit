/**
 * 播放列表
 * @type {Array}
 * 请用数组来定义总列表
 * 再用二维数组定义每个列表
 * 其中列表里的每首歌需用对象定义
 * 请在每个列表中的第一个元素定义列表信息（必须位于第一位）
 * 列表信息必须有一个basic属性，值为true
 * 还要有一个name属性，值为列表名称
 * 可选参数为singer、image，用于为定义的该属性的歌曲调用
 * 每首歌必须有name、src、lrc三个属性
 * src为歌曲相对于index.html的相对路径或绝对路径
 * 可选singer和image属性
 * 在每首歌没有定义singer或image时将使用列表的singer或image
 * 请确保一定有一个被定义
 * 其中name为歌曲名称
 * src为歌曲文件路径
 * lrc为歌词，请用\n或\r将每行歌词隔开，否则无法识别
 */
var mplayer_song = [[
	{
		"basic":true,
		"name":"试听列表",
		"singer":"许嵩",
		"img":"https://y.gtimg.cn/music/photo_new/T001R300x300M000000CK5xN3yZDJt.jpg"
	},
	{
		"name":"一睁眼",
		"singer":"沈玮琦",
		"img":"http://imgcache.qq.com/music/photo/album_500/51/500_albumpic_1796451_0.jpg",
		"src":"http://ws.stream.qqmusic.qq.com/200254836.m4a?fromtag=46",
		"lrc":"[ti:一睁眼]\n[ar:沈玮琦]\n[al:一睁眼]\n[by:]\n[offset:0]\n[00:02.65]一睁眼&#32;&#45;&#32;沈玮琦\n[00:03.36]词：许嵩\n[00:03.49]曲：许嵩\n[00:08.13]一睁眼\n[00:08.99]新的一天\n[00:10.84]跳出了多梦的一夜\n[00:13.71]可能旅店的枕垫\n[00:15.78]太软了一些\n[00:19.26]洗好脸走到窗边\n[00:22.08]有风轻轻掀动纱帘\n[00:24.90]心也\n[00:25.90]心也软了一些\n[00:30.58]一睁眼\n[00:31.56]新的一天\n[00:33.36]计划太多会添纠结\n[00:36.24]要不要试着接受\n[00:38.41]快乐一时是一时的哲学\n[00:41.92]没有你在我身边\n[00:44.72]我的幽默渐渐不见\n[00:47.56]雨斜斜&#32;歌绵绵\n[00:50.42]闭关修炼\n[00:52.95]昨晚的梦里面\n[00:55.63]楼台杏花琴弦\n[00:58.47]场面有些古典\n[01:01.02]谁飞扬了裙边\n[01:03.84]你抱着我转圈\n[01:06.40]在南方的雨天\n[01:09.44]怎么雨水都甜\n[01:12.19]怎么回忆都咸\n[01:15.43]昨晚的梦里面\n[01:18.29]时光倒回从前\n[01:21.07]心动还能重演\n[01:23.62]是爱情在身边\n[01:26.44]你送我的项链\n[01:29.23]戴上叫做想念\n[01:31.97]怎么没说再见\n[01:34.92]还没好好告别\n[01:36.95]已睁眼\n[02:06.76]一睁眼\n[02:07.61]新的一天\n[02:09.46]跳出了多梦的一夜\n[02:12.23]可能旅店的枕垫\n[02:14.31]太软了一些\n[02:17.89]洗好脸走到窗边\n[02:20.69]有风轻轻掀动纱帘\n[02:23.43]心也\n[02:24.44]心也软了一些\n[02:29.19]一睁眼\n[02:30.23]新的一天\n[02:32.08]计划太多会添纠结\n[02:34.81]要不要试着接受\n[02:36.96]快乐一时是一时的哲学\n[02:40.49]没有你在我身边\n[02:43.28]我的幽默渐渐不见\n[02:46.16]雨斜斜&#32;歌绵绵\n[02:48.92]闭关修炼\n[02:51.46]昨晚的梦里面\n[02:54.20]楼台杏花琴弦\n[02:57.01]场面有些古典\n[02:59.78]谁飞扬了裙边\n[03:02.38]你抱着我转圈\n[03:05.19]在南方的雨天\n[03:08.07]怎么雨水都甜\n[03:10.84]怎么回忆都咸\n[03:13.98]昨晚的梦里面\n[03:16.76]时光倒回从前\n[03:19.59]心动还能重演\n[03:22.09]是爱情在身边\n[03:24.94]你送我的项链\n[03:27.60]戴上叫做想念\n[03:30.60]怎么没说再见\n[03:33.38]还没好好告别\n[03:35.48]已睁眼\n[03:39.94]一睁眼\n[03:51.23]一睁眼\n[03:57.34]新的一天"
	},
	{
		"name":"江湖",
		"src":"http://ws.stream.qqmusic.qq.com/108344251.m4a?fromtag=46",
		"img":"http://imgcache.qq.com/music/photo/album_500/65/500_albumpic_1588165_0.jpg",
		"lrc":"[ti:江湖（网剧《画江湖之不良人》主题曲）][ar:许嵩][al:江湖][by:许嵩][offset:0][00:00.08]江湖 （《画江湖之不良人》超级网剧主题曲） - 许嵩[00:10.00]词：许嵩[00:11.00]曲：许嵩[00:43.55]今夕是何夕[00:46.76]晚风过花庭[00:49.10]飘零 予人乐后飘零[00:56.41]故地是何地[00:59.44]死生不复回[01:02.12]热血 风干在旧恨里[01:08.16]衣锦夜行[01:10.20]当一生尘埃落定[01:14.19]飞鸽来急[01:16.56]那落款沾染血迹[01:21.07]夜半嘱小徒复信[01:24.99]言师已故去[01:27.88]星云沉默江湖里[01:34.83]孤雁飞去 红颜来相许[01:40.24]待到酒清醒[01:42.61]她无影 原来是梦里[01:47.52]恩怨散去[01:50.65]刀剑已归隐[01:53.07]敬属江上雨[01:55.45]寒舟里 我独饮[02:24.99]衣锦夜行[02:27.06]当一生尘埃落定[02:31.03]飞鸽来急[02:33.43]那落款沾染血迹[02:37.81]夜半嘱小徒复信[02:41.81]言师已故去[02:44.65]星云沉默江湖里[02:51.64]孤雁飞去 红颜来相许[02:57.11]待到酒清醒[02:59.35]她无影 原来是梦里[03:04.28]恩怨散去[03:07.48]刀剑已归隐[03:09.81]敬属江上雨[03:12.27]寒舟里 我独饮[03:36.42]孤雁飞去 红颜来相许[03:41.71]待到酒清醒[03:44.16]她无影 原来是梦里[03:48.96]恩怨散去[03:52.22]刀剑已归隐[03:54.51]敬属江上雨[03:56.97]寒舟里 我独饮[04:04.73]我独饮"
	},
	{
		"name":"不语",
		"src":"http://ws.stream.qqmusic.qq.com/105637173.m4a?fromtag=46",
		"img":"http://imgcache.qq.com/music/photo/album_500/28/500_albumpic_1289528_0.jpg",
		"lrc":"[ti:不语（《不速之客》电影主题曲）][ar:许嵩][al:不语][by:][offset:0][00:00.09]不语 - 许嵩[00:00.77]（不速之客》电影主题曲）[00:01.25]词：火星电台[00:01.47]曲：火星电台[00:02.42]编曲：火星电台[00:22.08]冬夜 多漫长[00:31.26]迷路的孩子[00:34.78]可记得家的模样[00:40.97]有雪 有挂念[00:49.48]落幕的时候 都喝醉[00:58.65]开心 不语[01:03.66]伤心 不语[01:08.49]晴朗 不语[01:14.76]阴天 不语[01:18.08]坚强 不语[01:22.72]脆弱 不语[01:27.51]此时不语 更来不及[01:39.93]我在哪里[01:44.43]我在哪里[01:49.23]我在哪里[01:54.03]我怎么能回去[01:58.88]我在哪里[02:03.46]我在哪里[02:08.35]这是哪里[02:13.08]我怎么能回去[02:19.32]我想 还是选择沉默不语[02:46.90]我在哪里[02:52.00]我在哪里[02:56.73]我在哪里[03:01.61]我怎么能回去[03:06.58]我在哪里[03:11.55]我在哪里[03:16.46]这是哪里[03:21.41]我怎么能回去[03:27.37]我想 还是选择沉默不语"
	},
	{
		"name":"书香年华",
		"sing":"许嵩 & 孙涛",
		"src":"http://ws.stream.qqmusic.qq.com/105606046.m4a?fromtag=46",
		"img":"http://imgcache.qq.com/music/photo/album_500/44/500_albumpic_1286244_0.jpg",
		"lrc":"[ti:书香年华][ar:许嵩\/孙涛][al:书香年华][by:][offset:0][00:00.79]书香年华 - 许嵩&孙涛[00:01.86]词：许嵩&车万育[00:03.40]曲：许嵩[00:04.08]编曲：许嵩[00:05.72]童声：云对雨雪对风晚照对晴空[00:11.96]来鸿对去燕宿鸟对鸣虫[00:17.96]三尺剑六钧弓岭北对江东[00:24.04]人间清暑殿天上广寒宫[00:32.59]许：多久没有提笔为你写一首诗[00:39.07]对偶平仄押韵难道都在故纸[00:45.09]常常欲言又止表达缺乏情致[00:50.65]书到用时才恨少还真那么回事[00:56.68]孙：梦里一记钟声恍然敲回古时[01:02.97]花明柳媚春日书院里又添学子[01:09.06]苦读百卷经史不止为功名之资[01:14.66]学问里自有传承和坚持[01:19.75]合：琅琅书声如春风[01:22.79]拂过千年时空[01:25.88]少年啊壮志在胸赋首辞让人感动[01:31.91]借一场古典的梦[01:34.88]与东坡热情相拥[01:38.80]没告诉他将被千古传颂[01:45.23]童声：云对雨雪对风晚照对晴空[01:50.90]来鸿对去燕宿鸟对鸣虫[01:56.98]三尺剑六钧弓岭北对江东[02:02.95]人间清暑殿天上广寒宫[02:08.97]孙：梦里一记钟声恍然敲回古时[02:15.03]花明柳媚春日书院里又添学子[02:21.10]许：苦读百卷经史不止为功名之资[02:26.65]学问里自有传承和坚持[02:32.05]合：琅琅书声如春风[02:34.84]拂过千年时空[02:37.90]少年啊壮志在胸赋首辞让人感动[02:43.83]借一场古典的梦[02:46.81]与东坡热情相拥[02:50.63]没告诉他将被千古传颂[02:56.60]没告诉他将被千古传颂"
	}
],
[
	{
		"basic":true,
		"name":"随便听听",
		"singer":"许嵩",
		"img":"http://imgcache.qq.com/music/photo/album_500/97/500_albumpic_1492897_0.jpg"
	},
	{
		"name":"平行宇宙",
		"src":"http://ws.stream.qqmusic.qq.com/107506656.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:平行宇宙]\n[00:00.45]作曲 : 许嵩\n[00:01.76]作词 : 许嵩\n[00:03.58]我梦见我轻盈自由的腾空\n[00:09.70]随后画面切到我背着你遨游\n[00:15.89]你眼睛开始闪烁点点星光\n[00:22.60]可能是美梦来的太突然了吧\n[00:28.11]那时候在一起的时间很多\n[00:34.26]只不过珍惜的意义还没搞懂\n[00:40.55]虽然说 如今已经分开很久\n[00:46.92]有时候 还是不经意想你的笑容\n[00:55.78]深爱过 所以没有再联络\n[01:02.05]不回头 因为勉强的笑很难受\n[01:08.01]深爱过 真心感谢你陪我度过\n[01:14.50]那几年 苦中有甜的生活\n[01:29.62]床头柜 躺着一本老旧相册\n[01:35.79]也就是 闲极的时候才翻一翻\n[01:41.91]还养着你走时留下的小狗\n[01:48.54]长大后 它心事重重不太活泼\n[01:54.21]这条路我们没能走到最后\n[02:00.42]朋友说 是个意外的意料之中\n[02:06.48]有时相信在某个平行的宇宙\n[02:13.08]你的爱还一如既往陪在我左右\n[02:21.86]深爱过 所以没有再联络\n[02:28.03]不回头 因为勉强的笑很难受\n[02:34.24]深爱过 真心感谢你陪我度过那几年\n[02:43.60]深爱过 所以没有再联络\n[02:49.66]不回头 因为勉强的笑很难受\n[02:55.68]深爱过 真心感谢你陪我度过\n[03:01.90]那几年 苦中有甜的生活\n[03:08.18]多年后再想起你\n[03:12.28]镜子里一副流泪的笑容",
		"time":"03:29"

	},
	{
		"name":"摆脱",
		"src":"http://ws.stream.qqmusic.qq.com/107506657.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:摆脱]\n[00:00.21]许嵩 - 摆脱\n[00:01.62]作曲 : 许嵩\n[00:03.29]作词 : 许嵩\n[00:22.19]摆脱了二十出头的叛逆\n[00:24.77]摆脱不了倔强的脾气\n[00:27.35]摆脱了十足乏味的交际\n[00:29.93]摆脱不了群居属性\n[00:32.55]摆脱了听到谣言的揪心\n[00:35.13]摆脱不了听美言的暗喜\n[00:37.70]摆脱得了儿女私情\n[00:40.24]摆脱不了内分泌\n[00:42.65]谁有天大力气\n[00:44.63]可以拎着自己飞呀\n[00:47.81]拎着自己头发直到双脚都离地\n[00:53.07]谁有天大力气\n[00:54.94]可以拎着自己飞呀\n[00:58.22]所有力不从心都是摆脱不了自己\n[01:14.37]摆脱了对健康的在意\n[01:16.85]摆脱不了对死亡的恐惧\n[01:19.43]摆脱了生活的压力\n[01:21.96]摆脱不了人似浮萍\n[01:24.68]摆脱了那些世俗的追求\n[01:27.31]摆脱不了无求所引发的孤寂\n[01:29.91]这首歌摆脱了锻字练句\n[01:32.34]摆脱不了小心机\n[01:34.87]谁有天大力气\n[01:36.68]可以拎着自己飞呀\n[01:39.97]拎着自己头发直到双脚都离地\n[01:45.23]谁有天大力气\n[01:47.10]可以拎着自己飞呀\n[01:50.39]所有力不从心都是摆脱不了自己\n[02:27.10]谁有天大力气\n[02:28.88]可以拎着自己飞呀\n[02:32.12]拎着自己头发直到双脚都离地\n[02:37.27]谁有天大力气\n[02:39.10]可以拎着自己飞呀\n[02:42.28]所有力不从心都是摆脱不了自己\n[02:47.78]谁有天大力气\n[02:49.70]可以拎着自己飞呀\n[02:52.89]拎着自己头发直到双脚都离地\n[02:58.16]谁有天大力气\n[03:00.03]可以拎着自己飞呀\n[03:03.31]所有力不从心都是摆脱不了自己\n[03:08.78]谁有天大力气\n[03:10.55]可以拎着自己飞呀\n[03:13.73]拎着自己头发直到双脚都离地\n[03:19.05]谁有天大力气\n[03:21.07]可以拎着自己飞呀\n[03:24.00]所有力不从心都是摆脱不了自己"
	},
	{
		"name":"早睡身体好",
		"src":"http://ws.stream.qqmusic.qq.com/107506653.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:早睡身体好]\n[00:00.50]许嵩 - 早睡身体好\n[00:03.28]作曲 : 许嵩\n[00:04.75]作词 : 许嵩\n[00:32.72]姑娘你看你\n[00:34.84]一到家就哭泣\n[00:38.17]为流言几句\n[00:40.75]真的有点儿傻气\n[00:45.71]你脑子聪明\n[00:47.12]但躲不了世俗的雨\n[00:50.66]“想开点”是我送你的雨衣\n[00:58.34]他们太理性\n[01:00.79]每秒都在权衡利弊\n[01:03.58]你独自失语\n[01:06.36]撑到坚强癌晚期\n[01:11.10]夜色已浓郁\n[01:13.03]耗着也不会有惊喜\n[01:15.70]“快睡吧”是我善意的提醒\n[01:23.29]早睡身体好 睡前别吃太饱\n[01:29.50]早睡身体好 伤心容易感冒\n[01:35.82]早睡身体好 有什么值得烦恼\n[01:42.29]早睡身体好 明天还要起早\n[02:15.16]不爱被问起\n[02:17.28]那些终极命题\n[02:20.67]夏虫不可语冰\n[02:23.03]不仁的生存场域\n[02:28.01]你脑子聪明\n[02:29.64]总在替未来焦虑\n[02:32.37]“歇着吧”是我送你的药剂\n[02:40.85]三十楼望去\n[02:42.58]街道上人如蝼蚁\n[02:46.31]每个人都有\n[02:48.58]各自的恐惧和野心\n[02:53.18]死想要的 常常得不到\n[02:55.63]不想了的时候哗哗哗都来了\n[02:58.84]躺下吧 做些快乐的事情\n[03:05.74]早睡身体好 睡前别吃太饱\n[03:11.95]早睡身体好 伤心容易感冒\n[03:18.24]早睡身体好 有什么值得烦恼\n[03:24.92]早睡身体好 明天还要起早\n[03:31.42]早睡身体好 睡前别吃太饱\n[03:37.39]早睡身体好 伤心容易感冒\n[03:43.81]早睡身体好 有什么值得烦恼\n[03:50.22]早睡身体好 明天还要起早"
	},
	{
		"name":"奇谈",
		"src":"http://ws.stream.qqmusic.qq.com/107506654.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:奇谈]\n[00:00.22]许嵩 - 奇谈\n[00:01.07]词：许嵩\n[00:01.77]曲：许嵩\n[00:39.09]兽皮不要掀开你说能孵蛋\n[00:42.80]壁画不要破坏能进博物馆\n[00:46.51]猎人要吃素菜野鹿在期待\n[00:50.21]我一字一句都要意在言外\n[00:54.11]精美砾石一块打造要气派\n[00:57.71]粗糙历史一段座次怎么摆\n[01:01.52]丛林放一把火要抵御夜寒\n[01:05.02]趋炎附势的物种注定要淘汰\n[01:11.00]你靠不靠谱\n[01:13.38]靠不靠谱\n[01:15.29]可别答复\n[01:16.49]心里都清楚\n[01:18.39]你靠不靠谱\n[01:20.82]靠不靠谱\n[01:22.62]脑袋返祖\n[01:24.09]扯碎遮羞布\n[01:59.74]兽皮不要掀开你说能孵蛋\n[02:03.35]壁画不要破坏能进博物馆\n[02:07.10]猎人要吃素菜野鹿在期待\n[02:10.81]我一字一句都要意在言外\n[02:14.62]精美砾石一块打造要气派\n[02:18.30]粗糙历史一段座次怎么摆\n[02:22.16]丛林放一把火要抵御夜寒\n[02:25.56]趋炎附势的物种注定要淘汰\n[02:29.70]你靠不靠谱\n[02:32.12]靠不靠谱\n[02:33.98]可别答复\n[02:35.18]心里都清楚\n[02:37.24]你靠不靠谱\n[02:39.57]靠不靠谱\n[02:41.43]脑袋返祖\n[02:42.75]扯碎遮羞布\n[02:59.70]你靠不靠谱\n[03:02.03]靠不靠谱\n[03:03.98]可别答复\n[03:05.18]心里都清楚\n[03:07.28]你靠不靠谱\n[03:09.44]靠不靠谱\n[03:11.44]脑袋返祖\n[03:12.64]扯碎遮羞布"
	},
	{
		"name":"幻胖",
		"src":"http://ws.stream.qqmusic.qq.com/107506655.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:幻胖]\n[00:00.37]许嵩 - 幻胖\n[00:01.17]词：许嵩\n[00:01.92]曲：许嵩\n[00:21.81]得闲宁可散步\n[00:23.11]也不敢刷朋友圈\n[00:24.67]因为有的姑娘\n[00:25.62]总爱发自拍的照片\n[00:27.07]她们腰肢纤纤\n[00:28.27]她们的脸很尖\n[00:29.59]可她们总是会说\n[00:30.99]胖了胖了真纠结\n[00:32.59]一开始会以为这不过是\n[00:34.25]一种谦虚表演\n[00:35.25]后来却发现\n[00:36.00]她们真的超级关心\n[00:37.25]体重的增减\n[00:38.24]花了很多的钱\n[00:39.35]为健身房做贡献\n[00:40.82]对着镜子唏嘘\n[00:41.82]自己又胖了一圈\n[00:43.12]一起出去约个饭\n[00:44.32]姑娘却只点蔬菜\n[00:45.64]吃的比在太古里\n[00:46.73]化缘的尼姑还要清淡\n[00:48.42]CD尽情缩水\n[00:49.52]虽九死其犹未悔\n[00:50.82]反正约会时候\n[00:51.92]自我感觉要美\n[00:53.33]哎呀哎呀\n[00:53.98]赘肉看起来还是有点多\n[00:55.87]哎呀哎呀\n[00:56.57]什么时候才能变得洒脱\n[00:58.57]对比现实和小说\n[00:59.82]飞燕的轻盈虽然不错\n[01:00.94]可好像也不能\n[01:01.94]不在乎是否好摸\n[01:03.81]幻胖的女孩\n[01:05.61]需要好好的吃饭\n[01:08.11]脸圆圆的蛮可爱\n[01:10.77]干嘛要骨瘦如柴\n[01:14.07]幻胖的女孩\n[01:15.93]她的名字叫当代\n[01:18.53]自以为过度丰满\n[01:21.23]让盛唐情何以堪\n[01:35.03]秋千细腰女\n[01:36.18]摇曳逐风斜\n[01:40.49]眼看着快要入夏\n[01:41.79]衣服越穿越少啦\n[01:43.34]怎样的身材\n[01:44.24]才能让每条裙子百搭\n[01:45.69]百搭眼神不够自信\n[01:47.39]怎样都是白搭\n[01:48.82]没事别管旁人的想法\n[01:50.99]反正我们每天\n[01:51.89]遇到傻瓜的概率\n[01:52.99]比买彩票不中奖的概率\n[01:54.55]还要来得大\n[01:55.80]当你的城市忽然\n[01:56.90]冒出了第二个CBD\n[01:58.40]当你每天重复的劳作\n[01:59.95]不停贡献GDP\n[02:01.23]想要个转机\n[02:02.49]想改善外形\n[02:03.64]朋友反复指点你\n[02:04.79]提提颜值能带来福气\n[02:06.39]对自己挑剔越来越挑剔\n[02:09.00]陷入完美主义\n[02:09.90]忘了什么才是最要紧\n[02:11.59]躺在风尚的洪流里\n[02:12.95]躺在理性的缺席里\n[02:14.30]躺在各种社交网络\n[02:15.40]表演和被赞的死循环里\n[02:22.06]幻胖的女孩\n[02:23.81]需要好好的吃饭\n[02:26.41]脸圆圆的蛮可爱\n[02:29.01]干嘛要骨瘦如柴\n[02:32.27]幻胖的女孩\n[02:34.12]她的名字叫当代\n[02:36.82]自以为过度丰满\n[02:39.61]让盛唐情何以堪\n[02:43.11]幻胖的女孩\n[02:44.61]需要好好的吃饭\n[02:47.31]脸圆圆的蛮可爱\n[02:49.82]干嘛要骨瘦如柴\n[02:53.17]幻胖的女孩\n[02:55.07]她的名字叫当代\n[02:57.68]自以为过度丰满\n[03:00.33]让盛唐\n[03:14.13]幻胖的女孩\n[03:16.79]干瘪的饰带\n[03:14.21]幻胖的女孩\n[03:16.67]干瘪的饰带\n[03:24.39]幻胖的女孩\n[03:27.05]干瘪的饰带"
	},
	{
		"name":"摄影艺术",
		"src":"http://ws.stream.qqmusic.qq.com/107188869.m4a?fromtag=46",
		"time":"04:27",
		"lrc":"[ar:许嵩]\n[ti:摄影艺术]\n[00:00.03]许嵩 - 摄影艺术\n[00:01.20]词：许嵩\n[00:01.86]曲：许嵩\n[00:09.70]面朝大海\n[00:11.12]我站成了大海\n[00:13.24]你在我里面浮沉\n[00:17.03]回忆是一条狂犬\n[00:19.46]追咬了许多年\n[00:21.63]却还没掌握进退分寸\n[00:26.66]时光流转\n[00:28.03]谁还用日记本\n[00:30.21]往事有底片为证\n[00:34.05]拍照别开闪光灯\n[00:36.48]窥探爱人灵魂\n[00:38.63]要信自己的感觉够真\n[00:43.72]你带领着我穿透了黄昏\n[00:51.20]逆着光\n[00:52.32]闭上了一只眼\n[00:54.29]开启摄影的天分\n[01:00.13]拍过我的人\n[01:01.65]傻笑得多诚恳\n[01:04.22]摁下了快门\n[01:05.84]晓得心动不长存\n[01:08.57]拍过我的人\n[01:10.18]体谅了我的冷\n[01:12.76]热情没及格\n[01:14.33]真性情得高分\n[01:16.96]拍过我的人\n[01:18.67]走前还留了吻\n[01:21.25]花心思调整\n[01:22.87]爱和怨的白平衡\n[01:25.55]爱过你的人\n[01:27.17]躺在相片里等\n[01:29.75]面孔已褪色\n[01:31.41]缅怀却更深沉\n[01:36.85]镜头挺狠\n[01:38.11]岁月比它还狠\n[01:40.19]特写呈上了皱纹\n[01:44.00]情爱里受的熬煎\n[01:46.53]没修得共枕眠\n[01:48.70]却慢慢修得沉默不言\n[01:53.49]相见恨晚\n[01:55.05]相处有没恨短\n[01:57.18]别刻意夸大缘分\n[02:01.12]拍照不用想太深\n[02:03.55]什么霎那间的永恒\n[02:05.73]谁咬定自己不是过客\n[02:10.63]你带领着我穿透了黄昏\n[02:18.19]逆着光\n[02:19.31]闭上了一只眼\n[02:21.33]开启摄影的天分\n[02:27.22]拍过我的人\n[02:28.64]傻笑得多诚恳\n[02:31.27]摁下了快门\n[02:32.84]晓得心动不长存\n[02:35.58]拍过我的人\n[02:37.15]体谅了我的冷\n[02:39.77]热情没及格\n[02:41.39]真性情得高分\n[02:44.03]拍过我的人\n[02:45.65]走前还留了吻\n[02:48.33]花心思调整\n[02:49.89]爱和怨的白平衡\n[02:52.57]爱过你的人\n[02:54.19]躺在相片里等\n[02:56.78]面孔已褪色\n[02:58.34]缅怀却更深沉\n[03:06.08]一座城市的神秘景点\n[03:09.72]早让你拍腻\n[03:14.32]像原始的恋人\n[03:16.85]被开发完所有可能性\n[03:22.82]数码时代用千万像素\n[03:26.63]制造出当我把你放大\n[03:30.49]到底后只剩马赛克的失意\n[03:41.56]拍过我的人\n[03:43.03]傻笑得多诚恳\n[03:45.66]摁下了快门\n[03:47.22]晓得心动不长存\n[03:49.91]拍过我的人\n[03:51.53]体谅了我的冷\n[03:54.11]热情没及格\n[03:55.73]真性情得高分\n[03:58.36]拍过我的人\n[04:00.03]走前还留了吻\n[04:02.61]花心思调整\n[04:04.22]爱和怨的白平衡\n[04:06.90]爱过你的人\n[04:08.53]躺在相片里等\n[04:11.10]面孔已褪色\n[04:12.98]缅怀却更深沉"
	},
	{
		"name":"最佳歌手",
		"src":"http://ws.stream.qqmusic.qq.com/106501705.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:最佳歌手]\n[00:00.14]许嵩 - 最佳歌手\n[00:01.24]作词：许嵩\n[00:02.09]作曲：许嵩\n[00:03.09]我们最好的遇见\n[00:06.47]是现在这样的四月\n[00:10.67]柳絮抚着那条街\n[00:14.43]像大雪一样的热烈\n[00:18.58]你轻轻唱起我的歌\n[00:22.38]我受宠若惊的喜悦\n[00:26.78]绝佳的歌艺里面\n[00:30.33]多少故事做铺垫\n[00:38.75]我们最好的告别\n[00:42.45]是现在这样没红眼\n[00:46.70]因你而起的一泓喜悲\n[00:49.95]权当年轻留个纪念\n[00:54.66]清晨回笼做了梦\n[00:58.51]你成明星开演唱会\n[01:02.57]场馆里歌迷很多\n[01:05.87]我被人潮推到尽头\n[01:10.43]你在台上唱着我的创作\n[01:14.49]布局谋篇像本悲情小说\n[01:18.59]你太擅长表演\n[01:21.54]表情淡漠反倒有催泪效果\n[01:26.50]我在台下已经开始感动\n[01:30.55]大屏幕里忽然给我镜头\n[01:35.05]微笑挥挥手\n[01:37.30]多懂事的观众\n[01:59.10]初见和告别之间\n[02:02.46]回想只剩星星点点\n[02:06.51]曾以为刻骨细节\n[02:10.21]在骨灰里面怎么捡\n[02:14.62]沿着环路兜一圈\n[02:18.37]循环放你唱过的歌\n[02:22.53]心里的舞台已启幕\n[02:26.08]主角登场引来掌声雷动\n[02:30.43]你在台上唱着我的创作\n[02:34.48]布局谋篇像本悲情小说\n[02:38.63]你太擅长表演\n[02:41.39]表情淡漠反倒有催泪效果\n[02:46.29]我在台下已经开始感动\n[02:50.44]大屏幕里忽然给我镜头\n[02:55.00]微笑挥挥手\n[02:57.30]多懂事的观众\n[03:02.31]你在台上唱着我的创作\n[03:06.56]布局谋篇像本悲情小说\n[03:10.51]你太擅长表演\n[03:13.51]表情淡漠反倒有催泪效果\n[03:18.37]我在台下已经开始感动\n[03:22.37]整个世界全是你的镜头\n[03:26.87]听完这一首\n[03:29.17]就理性的退后\n[03:38.82]直到某一天碰面\n[03:42.32]在某家餐厅或商店\n[03:46.82]你挽着他和我擦肩\n[03:50.17]还好 我手也有人牵\n[03:54.83]广播里响起的歌\n[03:58.23]是“恍若隔世”的注解\n[04:02.53]最佳歌手的头衔\n[04:06.09]大致上有了人选\n[04:10.64]最佳歌手的感言\n[04:14.34]记得要慢慢念"
	},
	{
		"name":"雅俗共赏",
		"src":"http://ws.stream.qqmusic.qq.com/106034300.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:雅俗共赏]\n[00:00.45]许嵩 - 雅俗共赏\n[00:02.05]词曲：许嵩\n[00:16.05]是否每一部戏都看得完整场\n[00:22.95]是否每一天过得都有多难忘\n[00:29.90]表情迟钝可能因为比较爱想\n[00:36.85]不擅长眉目表达\n[00:42.61]总在盼望 总在失望\n[00:46.06]日子还不都这样\n[00:49.56]俗的无畏 雅的轻狂\n[00:53.06]还不都是一副臭皮囊\n[00:59.86]他们说快写一首情歌雅俗共赏\n[01:04.31]落笔传神还要容易传唱\n[01:07.71]上得厅堂也下得厨房\n[01:10.81]就像我一直在找的姑娘\n[01:14.67]快写一首情歌雅俗共赏\n[01:18.17]打完字谜还要接着打榜\n[01:21.62]如果胡同弄堂全都播放\n[01:24.82]气韵里居然添了些孤芳自赏\n[01:46.90]是否每一场美梦醒来都很爽\n[01:53.26]是否每一次成熟都徒增了业障\n[02:00.11]比痛和痒更多的\n[02:03.36]是不痛不痒\n[02:07.31]所以我爱进剧场\n[02:13.06]总在盼望 总在失望\n[02:16.56]日子还不都这样\n[02:19.86]俗的无畏 雅的轻狂\n[02:23.41]还不都是一副臭皮囊\n[02:29.62]他们说快写一首情歌雅俗共赏\n[02:34.72]落笔传神还要容易传唱\n[02:38.22]上得厅堂也下得厨房\n[02:41.27]就像我一直在找的姑娘\n[02:45.17]快写一首情歌雅俗共赏\n[02:48.62]打完字谜还要接着打榜\n[02:52.08]如果胡同弄堂全都播放\n[02:55.23]气韵里居然添了些孤芳自赏\n[03:02.98]谁的故事有营养\n[03:06.08]大俗或大雅的都在理直气壮\n[03:09.98]洒狗血或白雪的现场\n[03:13.83]都邀我观赏\n[03:15.43]还真是大方\n[03:20.03]快写一首情歌雅俗共赏\n[03:23.39]落笔传神还要容易传唱\n[03:26.84]上得厅堂也下得厨房\n[03:30.29]就像我一直在找的姑娘\n[03:33.89]有没有一种生活雅俗共赏\n[03:37.29]情节起伏跌宕让人向往\n[03:40.79]满纸荒唐中窥见满脸沧桑\n[03:44.09]触到神经就要懂得鼓掌\n[03:47.44]别说一不在乎二没期望\n[03:50.90]太超脱 中枪中奖感觉会一样"
	},
	{
		"name":"燕归巢",
		"src":"http://ws.stream.qqmusic.qq.com/105575471.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:燕归巢]\n[00:08.97]许嵩 - 燕归巢\n[00:15.54]作词：许嵩\n[00:18.96]作曲：许嵩\n[00:20.96]制作人：许嵩\n[00:48.09]雨后江岸天破晓\n[00:51.49]老舟新客知多少\n[00:54.99]远山见竹林芳草\n[00:58.04]晨风抚绿了芭蕉\n[01:02.19]寒梅落尽把冬了\n[01:05.74]衔春的燕想归巢\n[01:09.34]沿途的景 牵挂的人\n[01:12.89]两情迢迢\n[01:16.45]柳叶桨溅桃花浪\n[01:19.20]汀州里鹤眺远方\n[01:23.63]饮一盏岁月留香\n[01:26.23]唱一曲往事飞扬\n[01:30.80]山水间歌声回荡\n[01:34.40]回荡思念的滚烫\n[01:38.00]去年的家书两行\n[01:41.10]读来又热了眼眶\n[01:45.17]云水边静沐暖阳\n[01:48.47]烟波里久违的故乡\n[01:52.32]别来无恙\n[01:54.87]你在心上\n[02:28.41]雨后江岸天破晓\n[02:31.72]老舟新客知多少\n[02:35.28]远山见竹林芳草\n[02:38.34]晨风抚绿了芭蕉\n[02:42.50]寒梅落尽把冬了\n[02:46.05]衔春的燕想归巢\n[02:49.73]沿途的景 牵挂的人\n[02:53.20]两情迢迢\n[02:56.81]柳叶桨溅桃花浪\n[02:59.41]汀州里鹤眺远方\n[03:03.86]饮一盏岁月留香\n[03:06.62]唱一曲往事飞扬\n[03:11.07]山水间歌声回荡\n[03:14.68]回荡思念的滚烫\n[03:18.23]去年的家书两行\n[03:21.39]读来又热了眼眶\n[03:25.49]云水边静沐暖阳\n[03:28.79]烟波里久违的故乡\n[03:32.61]别来无恙\n[03:35.13]你在心上\n[03:40.73]儿时的窗 苍老的墙\n[03:44.18]是否偷换了方向\n[03:47.84]堂前的你和我相逢时\n[03:50.54]会沉默还是会诉尽衷肠\n[03:57.60]山水间歌声回荡\n[04:01.26]回荡思念的滚烫\n[04:04.76]去年的家书两行\n[04:07.82]读来又热了眼眶\n[04:11.89]云水边静沐暖阳\n[04:15.34]烟波里久违的故乡\n[04:19.93]别来无恙\n[04:21.48]你在心上\n[04:29.99]别来无恙\n[04:33.40]你在心上\n"
	}
],
[
	{
		"basic":true,
		"name":"不如吃茶去",
		"singer":"许嵩",
		"img":"http://imgcache.qq.com/music/photo/album_500/97/500_albumpic_644097_0.jpg"
	},
	{
		"name":"等到烟火清凉",
		"src":"http://ws.stream.qqmusic.qq.com/7214464.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:等到烟火清凉]\n[00:01.30]等到烟火清凉\n[00:03.35]作词：许嵩 \n[00:05.20]作曲：许嵩\n[00:07.05]演唱：许嵩\n[01:23.62]天干物燥\n[01:26.96]小心火烛\n[01:30.32]天干物燥\n[01:33.64]小心火烛\n[01:37.29]天干物燥\n[01:40.57]小心火烛\n[01:43.97]天干物燥\n[01:47.43]小心火烛\n[01:51.03]天干物燥\n[01:54.42]小心火烛\n[01:57.76]天干物燥\n[02:01.01]小心火烛\n[02:04.73]天干物燥\n[02:07.97]小心火烛\n[02:11.39]天干物燥\n[02:15.01]小心火烛\n[02:45.75]天干物燥\n[02:49.10]小心火烛\n[02:52.65]小心火烛"
	},
	{
		"name":"山水之间",
		"src":"http://ws.stream.qqmusic.qq.com/7062415.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:山水之间]\n[00:38.02]昨夜同门云集 推杯又换盏\n[00:43.82]清朝茶凉酒寒 豪言成笑谈\n[00:49.57]半生累尽徒然\n[00:52.52]碑文完美有谁看\n[00:55.42]隐居山水之间誓与浮名散\n[01:03.84]湖畔青石板上一把油纸伞\n[01:09.79]旅人停步折花淋湿了绸缎\n[01:15.59]满树玉瓣多傲然\n[01:18.49]江南烟雨却痴缠\n[01:21.39]花飞雨追一如尘缘理还乱\n[01:27.34]落花雨 你飘摇的美丽\n[01:32.89]花香氤 把往日情勾起\n[01:38.70]我愿意 化浮萍躺湖心\n[01:44.50]只陪你 泛岁月的涟漪\n[02:16.55]古木檀香小筑经文诵得缓\n[02:22.10]锦服华裳一炬粗袖如心宽\n[02:27.90]林中抚琴曲委婉\n[02:30.75]群山听懂我悲欢\n[02:33.65]泪如雨落才知过往剪不断\n[02:39.52]落花雨 你飘摇的美丽\n[02:45.22]花香氤 把往日情勾起\n[02:51.07]我愿意 化浮萍躺湖心\n[02:56.77]只陪你 泛岁月的涟漪\n[03:28.53]落花雨 你飘摇的美丽\n[03:34.37]花香氤 把往日情勾起\n[03:40.23]我愿意 化浮萍躺湖心\n[03:45.93]只陪你 泛岁月的涟漪\n[03:51.83]落花雨 你飘摇在天地\n[03:57.43]晚风急 吹皱芳华太无情\n[04:03.28]我愿意 化流沙躺湖堤\n[04:09.09]只陪你 恭候春夏的轮替\n[04:14.99]落花雨水深藏山水里\n[04:20.61]落花雨水深藏在我心"
	},
	{
		"name":"七夕",
		"src":"http://ws.stream.qqmusic.qq.com/7117101.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:七夕]\n[00:22.58]江畔暮雨纷纷 \n[00:24.53]夕阳西沉\n[00:26.39]津渡烛影深深 \n[00:28.15]是我在等\n[00:30.00]你歌声犹绕耳 \n[00:32.00]清风在侧\n[00:33.18]恍然发觉 \n[00:33.78]琴案已蒙尘\n[00:52.74]当日罗带轻分缘定今生\n[00:56.24]时光一去如梭似你穿针\n[01:00.22]魁星未拜 \n[01:00.92]禅门苔上屐痕\n[01:03.26]到访三五痴心人\n[01:11.50]夜幕垂鹊桥会 \n[01:13.15]七夕的念想\n[01:15.05]皎月归我轻随 \n[01:16.85]烟火对影赏\n[01:18.81]小城老街上 \n[01:20.67]有情人执手同徜徉\n[01:26.27]夜幕垂鹊桥会 \n[01:28.18]七夕的念想\n[01:30.06]你没归我独醉 \n[01:31.91]情话无人讲\n[01:33.81]也就不用讲 \n[01:35.62]且把浓情化作诗两行 \n[01:56.27]江畔暮雨纷纷 \n[01:58.18]夕阳西沉\n[01:59.98]津渡烛影深深 \n[02:01.78]是我在等\n[02:03.73]你歌声犹绕耳 \n[02:05.89]清风在侧\n[02:07.04]恍然发觉 \n[02:07.94]琴案已蒙尘\n[02:11.20]当日罗带轻分缘定今生\n[02:15.05]时光一去如梭似你穿针\n[02:18.76]魁星未拜 \n[02:19.71]禅门苔上屐痕\n[02:22.45]到访三五痴心人\n[02:30.26]夜幕垂鹊桥会 \n[02:31.76]七夕的念想\n[02:33.76]皎月归我轻随 \n[02:35.66]烟火对影赏\n[02:37.51]小城老街上 \n[02:39.56]有情人执手同徜徉\n[02:44.91]夜幕垂鹊桥会 \n[02:46.92]七夕的念想\n[02:48.77]你没归我独醉 \n[02:50.67]情话无人讲\n[02:52.52]也就不用讲 \n[02:54.37]且把浓情化作诗两行 \n[02:59.92]夜幕垂鹊桥会 \n[03:01.92]七夕的念想\n[03:03.72]皎月归我轻随 \n[03:05.81]烟火对影赏\n[03:07.53]小城老街上 \n[03:09.38]有情人执手同徜徉\n[03:14.84]夜幕垂鹊桥会 \n[03:16.94]七夕的念想\n[03:18.80]你没归我独醉 \n[03:20.70]情话无人讲\n[03:22.55]也就不用讲 \n[03:24.41]且把浓情化作诗两行"
	},
	{
		"name":"有桃花",
		"src":"http://ws.stream.qqmusic.qq.com/7214465.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:有桃花]\n[00:01.99](一朵溜溜的云哟\n[00:05.51]一朵溜溜的云哟\n[00:08.52]端端溜溜的照在\n[00:11.52]康定溜溜的城哟)\n[00:14.65](有桃花 有桃花\n[00:18.05]谁是谁的桃花\n[00:21.05]有桃花 有桃花)\n[00:27.17]赏花赋月不是我本领\n[00:33.27]也不如人家有型阔气\n[00:39.32]好多朋友都劝我\n[00:42.03]别再追随你\n[00:44.67]别做一条爱上沙漠的鱼\n[00:51.49]可我知道他们都不懂你\n[00:57.55]我也没那么容易放弃\n[01:03.66]在茫茫人海之中\n[01:06.31]有一颗真心\n[01:09.01]要不要选择权在你\n[01:15.76]是差点运气\n[01:18.11]可我一直在努力\n[01:21.38]每次见到你\n[01:22.78]都加固爱的决心\n[01:26.78]请爱我 \n[01:28.90]哪怕你心中还有点困惑\n[01:32.86]请爱我 \n[01:34.98]我乐意给你我有的所有\n[01:38.93]请爱我 \n[01:41.08]别再花脑细胞用理性思索\n[01:45.63]时间会证明你没有看错\n[01:55.34]可我知道他们都不懂你\n[02:01.39]我也没那么容易放弃\n[02:07.40]在茫茫人海之中\n[02:10.10]有一颗真心\n[02:12.83]要不要选择权在你\n[02:19.51]是差点运气\n[02:21.86]可我一直在努力\n[02:25.13]每次见到你\n[02:26.58]都加固爱的决心\n[02:30.64]请爱我 \n[02:32.71]哪怕你心中还有点困惑\n[02:36.61]请爱我 \n[02:38.85]我乐意给你我有的所有\n[02:42.75]请爱我 \n[02:44.93]别再花脑细胞用理性思索\n[02:49.55]时间会证明你没有看错\n[02:56.12]映日荷花别样红\n[02:58.75]映日桃花别笑春风\n[03:02.14]谁是谁的桃花还很难说\n[03:06.27]我太主动\n[03:10.05]请爱我 \n[03:12.32]哪怕你心中还有点困惑\n[03:16.17]请爱我 \n[03:18.33]我乐意给你我有的所有\n[03:22.23]请爱我 \n[03:24.48]别再花脑细胞用理性思索\n[03:28.95]时间会证明你没有看错\n[03:44.26](有桃花 有桃花\n[03:47.67]谁是谁的桃花\n[03:50.72]有桃花 有桃花)"
	},
	{
		"name":"惊鸿一面",
		"singer":"许嵩 & 黄龄",
		"src":"http://ws.stream.qqmusic.qq.com/7102716.m4a?fromtag=46",
		"lrc":"[ar:许嵩、黄龄]\n[ti:惊鸿一面]\n[00:21.50]翻手为云覆手为雨\n[00:26.12]金盆洗手止风雨\n[00:30.43]不恋红尘却难舍回忆\n[00:34.70]每一段都有你\n[00:41.43]年少初遇常在我心\n[00:45.89]多年不减你深情\n[00:49.94]江山如画又怎能比拟\n[00:54.28]你送我的风景\n[00:58.81]柳下闻瑶琴起舞和一曲\n[01:03.23]仿佛映当年翩若惊鸿影\n[01:07.55]谁三言两语撩拨了情意\n[01:11.92]谁一颦一笑摇曳了星云\n[01:16.22]纸扇藏伏笔玄机诗文里\n[01:20.79]紫烟燃心语留香候人寻\n[01:25.00]史书列豪杰功过有几许\n[01:29.37]我今生何求惟你\n[01:57.46] \n[02:08.67]年少初遇常在我心\n[02:12.88]多年不减你深情\n[02:17.51]江山如画又怎能比拟\n[02:21.42]你送我的风景\n[02:26.14]柳下闻瑶琴起舞和一曲\n[02:30.38]仿佛映当年翩若惊鸿影\n[02:34.77]谁三言两语撩拨了情意\n[02:39.20]谁一颦一笑摇曳了星云\n[02:43.39]纸扇藏伏笔玄机诗文里\n[02:48.06]紫烟燃心语留香候人寻\n[02:52.39]史书列豪杰功过有几许\n[02:56.58]我今生何求惟你\n[03:01.62]远山传来清晨悠然的曲笛\n[03:04.98]晓风掠走光阴\n[03:07.26]残月沉霜鬓里\n[03:09.99]有了你\n[03:12.16]恩怨都似飞鸿踏雪泥\n[03:14.35]飞鸿踏雪泥\n[03:18.60]柳下闻瑶琴起舞和一曲\n[03:22.95]仿佛映当年翩若惊鸿影\n[03:27.30]谁三言两语撩拨了情意\n[03:31.42]谁一颦一笑摇曳了星云\n[03:35.83]纸扇藏伏笔玄机诗文里\n[03:40.21]紫烟燃心语留香候人寻\n[03:44.83]史书列豪杰功过有几许\n[03:49.18]我今生何求惟你\n[03:53.72]我今生何求惟你"
	},
	{
		"name":"隐隐约约",
		"src":"http://ws.stream.qqmusic.qq.com/7214466.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:隐隐约约]\n[00:02.11]许嵩 - 隐隐约约\n[00:04.41]词/曲：许嵩\n[00:21.33]枕边 如此隐隐约约\n[00:24.79]发香绵延\n[00:26.54]好似江水连天\n[00:28.24]指尖 如此隐隐约约\n[00:31.83]肩上红线\n[00:33.59]忽明忽暗的坠跌 坠跌 坠跌\n[00:49.55]许愿 如此隐隐约约\n[00:53.04]落款未签\n[00:54.74]日出之后变脸\n[00:56.54]有眼 如此隐隐约约\n[01:00.06]记录一切\n[01:01.81]鱼死网破的决裂 决裂 决裂\n[01:17.87]隐隐约约\n[01:21.28]哑巴吃黄连\n[01:24.73]隐隐约约\n[01:28.23]上不了台面\n[01:31.87]隐隐约约\n[01:35.34]乌云想遮天\n[01:38.93]隐隐约约\n[01:42.42]故事到此忽然了结\n[02:35.43]隐隐约约\n[02:38.93]哑巴吃黄连\n[02:42.47]隐隐约约\n[02:46.01]上不了台面\n[02:49.56]隐隐约约\n[02:53.01]乌云想遮天\n[02:56.58]隐隐约约\n[03:00.16]故事到此忽然了结\n[03:09.78] "
	},
	{
		"name":"宇宙之大",
		"src":"http://ws.stream.qqmusic.qq.com/7214467.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:宇宙之大]\n[00:35.97]你的脾气那么温驯\n[00:39.13]如湖畔的风景\n[00:43.94]可能南极下一场雪\n[00:47.25]让人很难留意\n[00:52.07]我的脾气那么隐秘\n[00:55.23]如黑夜的骤雨\n[00:58.54]有时急 有时宁 \n[01:06.26]有时烦人心\n[01:12.03]我欠你的不只是\n[01:14.13]一句对不起\n[01:19.94]你欠我的不只是\n[01:22.09]一场远途旅行\n[01:27.85]我在南极拍下了\n[01:30.11]企鹅与冰川的剪影\n[01:34.36]宇宙之大 每个生命 \n[01:38.37]都在孤寂\n[02:00.12]你的脾气那么温驯\n[02:03.12]如湖畔的风景\n[02:07.98]可能南极下一场雪\n[02:11.09]让人很难留意\n[02:16.07]我的脾气那么隐秘\n[02:19.03]如黑夜的骤雨\n[02:22.33]有时急 有时宁 \n[02:30.26]有时烦人心\n[02:35.87]我欠你的不只是\n[02:38.12]一句对不起\n[02:43.93]你欠我的不只是\n[02:46.03]一场远途旅行\n[02:51.83]我在南极拍下了\n[02:53.99]企鹅与冰川的剪影\n[02:58.29]宇宙之大 每个生命 \n[03:02.30]都在孤寂\n[03:08.35]我走遍天涯海角\n[03:11.26]看潮起日落\n[03:16.34]也看过一张张脸\n[03:19.15]幸福或落魄\n[03:22.91]如果能再一次\n[03:26.68]把你拥入怀中\n[03:31.00]我会不会能假装\n[03:33.90]并非一无所有\n[03:44.07]我欠你的不只是\n[03:46.07]一句对不起\n[03:52.02]你欠我的不只是\n[03:54.03]一场人生旅行\n[03:59.79]我在南极经受了孤单\n[04:03.00]与严寒的洗礼\n[04:06.26]却受不起 温润如你 \n[04:14.55]断了音讯"
	},
	{
		"name":"梧桐灯",
		"src":"http://ws.stream.qqmusic.qq.com/7214468.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:梧桐灯]\n[00:02.00]许嵩 - 梧桐灯\n[00:04.25]词/曲：许嵩\n[00:22.97]梧桐树荫了整条街\n[00:29.31]灯火穿透了她的叶\n[00:35.66]窗外夜风裹走时间\n[00:42.12]后退的景谁在流连\n[00:48.53]一个人开车去赴宴\n[00:54.94]右座有张烫金喜帖\n[01:01.24]新娘的名字好亲切\n[01:07.68]搞不好曾梦里出现\n[01:13.74]孤单坐进一桌陌生人里面\n[01:20.09]主持人在进行热场的环节\n[01:25.70]你和他含情脉脉对视了一眼\n[01:32.11]回忆陪我躲在角落没露面\n[01:39.39]当时的我想不到今天\n[01:45.59]错过的人回不到从前\n[01:52.12]当时的你静静坐在我的左手边\n[01:57.70]梧桐灯下是你静美的侧脸\n[02:24.51]一个人开车去赴宴\n[02:30.90]右座有张烫金喜帖\n[02:37.26]新娘的名字好亲切\n[02:43.69]搞不好曾梦里出现\n[02:49.67]孤单坐进一桌陌生人里面\n[02:56.07]主持人在进行热场的环节\n[03:01.82]你和他含情脉脉对视了一眼\n[03:08.61]我和回忆缩在角落没露面\n[03:15.42]当时的我想不到今天\n[03:21.60]错过的人回不到从前\n[03:28.09]当时的你静静坐在我的左手边\n[03:33.74]梧桐灯下是你静美的侧脸\n[03:40.87]当时的我想不到今天\n[03:47.27]错过的人回不到从前\n[03:53.69]灰色的我怔怔留在没你的世界\n[03:59.31]梧桐灯下是我熄灯的双眼\n[04:06.97]梧桐树荫了整条街\n[04:13.30]灯火穿透了"
	},
	{
		"name":"弹指一挥间",
		"src":"http://ws.stream.qqmusic.qq.com/7183015.m4a?fromtag=46",
		"lrc":"[ar:许嵩]\n[ti:弹指一挥间]\n[00:41.50]雨掸霜叶掸落一地过往\n[00:49.32]云遮秋雁遮住十载月光 \n[00:57.11]我推开窗满手回忆沙沙作响 \n[01:03.18]枕簟凉残烛晃人惆怅 \n[01:12.43]离愁别恨是心的溃疡 \n[01:20.29]戴月披星是你在流浪 \n[01:27.96]你推开窗花灯随烟波铺江上 \n[01:34.16]露水凉老船晃人惆怅 \n[01:41.18]弹指一挥间你竟已遥远 \n[01:48.96]沧海成荒野真情永不灭 \n[01:56.79]弹指一挥间红尘已缈远 \n[02:04.56]青丝蘸白雪来路生云烟\n[02:33.68]离愁别恨是心的溃疡 \n[02:41.66]戴月披星是你在流浪 \n[02:49.04]你推开窗花灯随烟波铺江上 \n[02:55.45]露水凉老船晃人惆怅 \n[03:02.48]弹指一挥间你竟已遥远 \n[03:10.31]沧海成荒野真情永不灭 \n[03:18.09]弹指一挥间红尘已缈远 \n[03:25.86]青丝蘸白雪来路生云烟\n[03:49.13]弹指一挥间你竟已遥远 \n[03:56.70]沧海成荒野真情永不灭 \n[04:04.38]弹指一挥间红尘已缈远 \n[04:12.36]青丝蘸白雪来路生云烟"
	}
]];