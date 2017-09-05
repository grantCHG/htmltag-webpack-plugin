# htmltag-webpack-plugin
### 说明

在HTML指定的标签前后添加指定标志

### 安装

```javascript
   npm install htmltag-webpack-plugin --save
```

### 使用

```javascript
    
    plugins = [
        new HtmlTagWebpackPlugin({
        appendTag: /\<\s*!DOCTYPE html[^>]*\>/,
        insertTag: /\<\s*\/body[^>]*\>/,
        beginTag: "<!--kugoubegin-->",
        endTag: "<!--kugouend-->"
    })
    ]
```

