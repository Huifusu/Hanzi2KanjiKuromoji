# 中日汉字转换器改

本仓库forked自[https://github.com/manakanemu/ctoj](https://github.com/manakanemu/ctoj)。

原版网页的字典过小，这里使用了来自[https://github.com/NoHeartPen/Kanji2Hanzi](https://github.com/NoHeartPen/Kanji2Hanzi)的汉字字典，并修复了一点bug。

## 网站介绍

本网站可以把中文汉字转化为对应的日文汉字
例如：``爱 - 愛``、``门 - 門``、``真中合欢 - 真中合歓``
这是将汉语汉字转化为日语汉字，而不是繁体汉字，例如 ``亚``的繁体为 ``亞``，而日语中使用的是古体 ``亜`` ,本网站会将汉字转换为后者。
转换字典使用的是《1948个日文中汉字对应简体中文汉字表》

## 使用方法

打开[转换网页](https://kanji.rdfzftxx.xyz/)，在“请输入中文”文本框内输入或粘贴中文，对应的日文会实时翻译在下面的文本框内。

如果您使用的是**Chrome浏览器**，在输入或粘贴中文后，无需任何操作，转换结果会自动复制到剪贴板。
如果您使用的是**Firefox或Safari浏览器**，无法自动复制转换结果，您需要单击一下转换结果，即可将结果复制到剪贴板。

## 相关项目

[UTF8 相似字符计算](https://github.com/manakanemu/SimilarCharacters)

## 其他

如果您有任何建议、意见，或遇到您需要转换，但网站没有收录的中日汉字，可以发issue，我会添加到字典中。
目前Firefox和Safari还无法自动复制。
另外，网页没有后端处理，所有代码都在前端，可以离线访问。
