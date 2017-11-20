
(function (mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
      mod(require("codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
      define(["codemirror"], mod);
  else // Plain browser env
      mod(CodeMirror);
})((CodeMirror) => {
  let createPanel = (cm, temp, position) => {
    let el = document.createElement('div')
    el.className = 'cm-toolpenl-dialog'
    
    if (typeof temp === 'string') {
      el.innerHTML = temp
    } else {
      el.appendChild(temp)
    }

    let panel = cm.addPanel(el, {
      position: position
    })
    return panel
  }

  let closePanel = (cm) => {
    let state = cm.state.toolpanelDialog
    if (!state || !state.current) return

    state.current.panel.clear()

    if (state.current.onClose) {
      state.current.onClose(state.current.panel.node)
      state.current = null
      delete state.current;
      cm.focus()
    }
  }

  CodeMirror.defineExtension('openToolpanelDialog', (temp, options) => {
    if (!this.addPanel) return
    if (!options) options = {}
    if (!this.state.toolpanelDialog) this.state.toolpanelDialog = {}

    if (this.state.toolpanelDialog.current) {
      closePanel(this)
    }

    let panel = createPanel(this, temp, options.position)
    this.state.toolpanelDialog.current = {
      panel: panel,
      onClose: options.onClose
    }

    return () => closePanel(this)
  })
})