var affix = {
  getScroll: function (top) {
    var ret = window['page' + (top ? 'Y' : 'X') + 'Offset']
    var method = 'scroll' + (top ? 'Top' : 'Left')
    if (typeof ret !== 'number') {
      var d = window.document
      // ie6,7,8 standard mode
      ret = d.documentElement[method]
      if (typeof ret !== 'number') {
        // quirks mode
        ret = d.body[method]
      }
    }
    return ret
  },
  getOffset: function (element) {
    var rect = element.getBoundingClientRect()
    var body = document.body
    var clientTop = element.clientTop || body.clientTop || 0
    var clientLeft = element.clientLeft || body.clientLeft || 0
    var scrollTop = affix.getScroll(true)
    var scrollLeft = affix.getScroll()
    return {
      top: rect.top + scrollTop - clientTop,
      left: rect.left + scrollLeft - clientLeft,
      right: rect.right + scrollTop - clientTop,
      bottom: rect.bottom + scrollLeft - clientLeft
    }
  },
  closeByElement: function (target, elem) {
    if (target === elem) {
      return true
    }
    let closest = function (parent) {
      if (parent === elem) {
        return true
      }
      if (parent === document || parent === document.body) {
        return false
      }
      return closest(parent.parentNode)
    }
    return closest(target.parentNode, elem)
  }
}
module.exports = affix
