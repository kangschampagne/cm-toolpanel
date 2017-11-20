# cm-toolpanel
CodeMirror Tool Panel Area Dialog

CodeMirror 工具栏面板

提供更加定制化的面板工具。

所需依赖：CodeMirror文件夹下的 `codemirror/addon/display/panel.js`

1.初始化 CodeMirror 之后
```javascript
var myTextarea = document.getElementById('mytextarea')
var editor = CodeMirror.fromTextArea(myTextarea, {
  lineNumbers: true
});
```

2.通过 `editor.openToolpanelDalog(template, opts)` 创建一个新的定制化面板

```javascript
template：'<div></div>',           // html节点字符串或 dom节点
opts: {                            // 可选参数
  position: 'top'                  // panel位置， top/bottom
}
```
