// document.addEventListener('DOMContentLoaded', function() {
//     let ele = document.getElementsByTagName("video");
//     for (let i = 0; i < ele.length; i++) {
//         console.log(i)
//         let uri = ele[i].src;
//         console.log(uri);
//         let downuri = uri.split('?')[0]
//         let strarray = downuri.split(".");
//         let srctype = strarray[strarray.length - 1];
//         downloadUrlFile(downuri, document.title + "." + srctype);
//     }
// });

function downloadUrlFile(url, fileName) {
    const url2 = url.replace(/\\/g, "/")
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url2, true);
    xhr.responseType = 'blob'//'arraybuffer';
    xhr.onload = () => {
        if (xhr.status === 200) {
            // 获取文件blob数据并保存
            saveAs(xhr.response, fileName);
            console.log(fileName)
        }
    };
    xhr.send();
}

function saveAs(data, name) {
    const urlObject = window.URL || window.webkitURL || window;
    const export_blob = new Blob([data],{ type: 'video/mp4' });
    //createElementNS() 方法可创建带有指定命名空间的元素节点。
    //此方法可返回一个 Element 对象。
    const save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
    save_link.href = urlObject.createObjectURL(export_blob);
    save_link.download = name;
    save_link.click();
}
function getVideoUrl(){
   // var iframe = document.querySelector("iframe");
   // var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
   var videos = $("video")
   if(videos.length >0){
      var video = videos[0]
       $("#reader").append("<button  id='#download' style='color:red;font-size:25px;float:left'>下载该视频</button")
       console.log(1111,$("#download").text())
       $("#download").click(function (event){
          console.log(video.title,video.src)
          downloadUrlFile(video.src,"test")
       })
   }
}
var monitor1 = setInterval(function() {
    if(!/studentstudy/g.test(window.location.href)){
        return
    }
    var iframeArr = $("#iframe").contents().find("iframe.ans-insertvideo-online");
    // console.log(iframeArr)
    var flag = false
    if(iframeArr.length > 0){
        for(let i =0;i<iframeArr.length;i++){
            let iframe = iframeArr[i]
            let video = iframe.contentDocument.querySelector('video')
            console.log("视频下载",video)
            if(video !== null && video !== undefined){
                flag = true
            }
            let reader = iframe.contentDocument.querySelector("#reader")
            // console.log(reader)
            $(reader).append("<button  id='download' style='color:red;font-size:25px;float:left'>下载该视频</button>")
            let down = iframe.contentDocument.querySelector("#download")
            // console.log(down)
            $(down).click(function (){
                $this = $(this)
                let url = video.src
                // console.log($this.text(),i,url)
                alert("开始下载，稍等一会!")
                downloadUrlFile(url,new Date().getTime()+".mp4")
            })
        }
        if(flag){
           clearInterval(monitor1)
        }
    }
},2e3)

var monitor2 = setInterval(function (){
    if(!/visitnodedetail/g.test(window.location.href)){
        return
    }
    var flag = false
    let iframeArr = document.querySelectorAll("iframe.ans-insertvideo-online")
    if(iframeArr.length>0){
        let iframe = iframeArr[0]
        let video =iframe.contentDocument.querySelector("video")
        console.log(video)
        if(video !== null && video !== undefined){
            flag = true
        }
        let div = iframe.contentDocument.querySelector("#reader")
        $(div).append("<button  id='download' style='color:red;font-size:25px;float:left'>下载该视频</button>")
        let down = iframe.contentDocument.querySelector("#download")
        $(down).click(function (){
            $this = $(this)
            let url = video.src
            // console.log($this.text(),i,url)
            alert("开始下载，稍等一会!")
            downloadUrlFile(url,new Date().getTime()+".mp4")
        })
        if(flag){
           clearInterval(monitor2)
        }
    }

},3e3)

