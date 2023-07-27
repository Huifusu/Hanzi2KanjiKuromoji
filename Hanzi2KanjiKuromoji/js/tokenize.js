var DIC_URL = "kuromoji/dict/";

var tokenizer = null;

kuromoji.builder({ dicPath: DIC_URL }).build(function (error, _tokenizer) {
    if (error != null) {
        console.log(error);
    }
    tokenizer = _tokenizer;
});

function get() {
    var path = tokenizer.tokenize("わたしの愛は。");
    console.log(path);
}