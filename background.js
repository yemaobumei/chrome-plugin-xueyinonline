chrome.runtime.onInstalled.addListener(() => {
    chrome.notifications.create(null, {
        type: 'basic',
        iconUrl: 'images/icon16.png',
        title: 'demo',
        message: '下载插件已启动'
    });
});