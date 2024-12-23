// 向页面注入JS
function injectCustomJs(jsPath)
{
    if (/Play/g.test(window.location.href) == false ){
        //不是视频页面，返回假
        return false
      }    
	jsPath = jsPath || 'js/inject.js';
	var temp = document.createElement('script');
	temp.setAttribute('type', 'text/javascript');
	// 获得的地址类似：chrome-extension://ihcokhadfjfchaeagdoclpnjdiokfakg/js/inject.js
	temp.src = chrome.runtime.getURL(jsPath);
	temp.onload = function()
	{
		// 放在页面不好看，执行完后移除掉
		this.parentNode.removeChild(this);
	};
	document.head.appendChild(temp);
}
injectCustomJs("js/inject.js")