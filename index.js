function HtmlTagWebpackPlugin(options) {
    this.options = options;
}

HtmlTagWebpackPlugin.prototype.addTag = function (params) {
    let { htmlPluginData, appendTag, insertTag, beginTag, endTag, callback } = params;
    let html = htmlPluginData.html;
    appendTag = appendTag || /\<\s*!DOCTYPE html[^>]*\>/;
    insertTag = insertTag || /\<\s*\/body[^>]*\>/;
    beginTag = beginTag || "<!--kugoubegin-->";
    endTag = endTag || "<!--kugouend-->";
    html = html.replace(appendTag, (a, b) => {
        return a + beginTag;
    });
    html = html.replace(insertTag, (a, b) => {
        return endTag + a;
    });
    htmlPluginData.html = html;
    callback(null, htmlPluginData);

}
HtmlTagWebpackPlugin.prototype.apply = function (compiler) {
    let self = this,
        options = self.options || {},
        appendTag = options.appendTag,
        insertTag = options.insertTag,
        beginTag = options.beginTag,
        endTag = options.endTag;
    compiler.plugin('compilation', function (compilation) {

        compilation.plugin('html-webpack-plugin-after-html-processing', function (htmlPluginData, callback) {
            self.addTag({ htmlPluginData: htmlPluginData, appendTag: appendTag, insertTag: insertTag, beginTag: beginTag, endTag: endTag, callback: callback });
        });
    });

};

module.exports = HtmlTagWebpackPlugin;
