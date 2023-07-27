# 中日汉字转换・分析器

本仓库forked自[https://github.com/manakanemu/ctoj](https://github.com/manakanemu/ctoj)。

原转换器年久失修，且支持的汉字覆盖太少。

**本网站针对shift-jis第一梯队的所有进行了逐一排查，整理出了一份基本覆盖日常需要的中日汉字转换表。**

同时，该网站使用了[Kuromoji](https://www.atilika.com/ja/kuromoji/)对转换后的汉字进行分析，可以快速获取读音，查询词义等。

网页中分析部分使用了来自[Kuromoji.js](https://github.com/takuyaa/kuromoji.js)的代码。该仓库采用和Kuromoji.js仓库相同的许可证（Apache License Version 2.0）。

Kuromoji的字典加载需要一定时间，如果不需要使用分析功能请移步：[中日汉字转换器改](https://github.com/Huifusu/Hanzi2Kanji/)

## 网站介绍

本网站可以把中文汉字转化为对应的日文汉字
例如：``爱 - 愛``、``门 - 門``、``真中合欢 - 真中合歓``
这是将汉语汉字转化为日语汉字，而不是繁体汉字，例如 ``亚``的繁体为 ``亞``，而日语中使用的是古体 ``亜`` ,本网站会将汉字转换为后者。

## 使用方法

打开[转换网页](https://kanjik.rdfzftxx.xyz/)，在“请输入中文”文本框内输入或粘贴中文，对应的日文会实时翻译在下面的文本框内。

文本框下方的空白区域会出现转换后的汉字列表，点击对应汉字后会跳转到[Sljfaq.Org漢字字典](https://kanji.sljfaq.org/k/)的对应汉字页面。

汉字列表下方会出现单词区，点击对应单词后会跳转到[goo辞書](https://dictionary.goo.ne.jp/ "的词语搜索页面")的对应单词搜索页面。

#### 汉字列表

##### 汉字颜色

转换后的文字在汉字列表中会显示三种颜色：`蓝色 / 黑色 / 灰色`

汉字列表会自动排除常见的非汉字字符。

![1689748102512](image/README/1689748102512.png)

`蓝色` ：成功在shift-jis第一梯队中找到了对应的日文汉字并翻译。

`黑色` ：该汉字已经存在于shift-jis第一梯队中，无需翻译。

`灰色` ：shift-jis第一梯队中没有找到对应的汉字。输入可能不是汉字，或是无法识别的汉字。

##### 复数对应

当出现中文汉字对应多个日语汉字时，下方的汉字列表会出现复数对应的汉字。

![1689998271440](image/README/1689998271440.png)

复数对应的汉字以 `/` 分隔。此时的汉字仍然遵循文字类型的标色。

文字框中以第一位的汉字进行显示。如有需要请自行进行替换。

#### Kuromoji词语分析

Kuromoji在开始时需要加载字典，请等待提示消失后使用。

Kuromoji提供了分词解析的功能，能够将转换后的词语分词并链接到词典。

![1690431479415](image/README/1690431479415.png)

如图，转换后的词语会进行标音后显示，并链接到词典的查询页面。

显示灰色的词语代表无法查找到。这个词语可能是一个英语词语或是无法识别的词语。

![1690432203083](image/README/1690432203083.png)
