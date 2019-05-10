/*! YS v1.0.0 | by YSTeam | Copyright (c) 2013-2017 http://www.ysframe.com All rights reserved. | Licensed under MIT | 2017-12-22T12:00:00+0800 */
// 公共方法函数
(function(window, undefined) {
    var YSfac = {
        chklogin: function(da) {
            if (da.code == -200) {
                layer.msg('登陆过期，请重新登陆！');
                setTimeout(function() {
                    window.location.href = "./login.html";
                }, 1000);
            }

            if (da.code == -2) {
             
            }

        },
        //把地址栏的参数转成对象  a=1&c=3 > {a:1,c:3}
        hashToobj: function(str) {
            var obj = {};
            if (!str) return obj;
            if (str.indexOf('&') > 0) {
                var arr = str.split('&');
                arr.map(function(el) {
                    var t = el.split('=');
                    var a = t.length > 1 ? obj[t[0]] = t[1] : '';
                });
            } else {
                var t = str.split('=');
                var a = t.length > 1 ? obj[t[0]] = t[1] : '';
            }
            return obj;
        },
        setarr: function(str, num) {
            var arr = [];
            if (!str) { return arr; }
            var a = str.split(',');
            a.map(function(em) {
                if (num) {
                    var rate = parseInt(em) / parseInt(num) * 100;
                    rate = rate.toFixed(1);
                    var clas = 'qdyes';
                    if (rate < 100 || (parseInt(em) - parseInt(num)) > 15) { clas = 'qdno'; }
                    arr.push({ val: em, rate: rate ? (rate + '%') : '', clas: clas });

                } else {
                    arr.push({ val: em });
                }
            });
            return arr;
        },
        findpower: function(str, arr) {
            if (!arr.length) return false;
            var has = false;
            arr.map(function(el) {
                el.child && el.child.map(function(elem) {
                    if (elem.url == str && elem.has == 1) { has = true; }
                })
            });
            return has;
        },

        updatetd: function(re, _this) {
            if (re.code > 0) {
                _this.addClass('ipright').removeClass('ipwrong');
            } else {
                _this.addClass('ipwrong').removeClass('ipright')
            }
            YSfac.msg(re);
        },
        yssetvalue: function(ctrlsco, str, val) {
            var arr = str.split('.');
            var obj = ctrlsco;
            var key = '';
            arr.map(function(el, ind) {
                ind < arr.length - 1 && (obj = obj[el]);
                ind == arr.length - 1 && (key = el);
            });
            obj[key] = val;
            return ctrlsco;
        },
        //获取地址栏参数
        GetQueryString: function(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
            var r = window.location.search.substr(1).match(reg);
            if (r !== null) { return decodeURI(r[2]); }
            return '';
        },
        time: function(str) {
            //返回时间戳；str 为空则返回当前时间戳；
            var timestamp = !str ? Date.parse(new Date()) : Date.parse(new Date(str));
            return timestamp;
        },
        numtotime: function(time) {
            //数字转换成时间格式
            var retime = '';
            if (parseInt(time) > 0) {
                var date = new Date(time);
                var year = date.getYear() + 1900;
                var month = date.getMonth() + 1;
                month = month < 10 ? '0' + month : month;
                var datev = date.getDate();
                datev = datev < 10 ? '0' + datev : datev;
                return year + '-' + month + '-' + datev;
            } else {
                return retime;
            }

        },
        getNowFormatDate: function(day) {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate()+day;
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate;
            return currentdate;
        },

dateFormatConversion:function(inputTime) {
    var date = new Date(inputTime);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d;
},


        btomb: function(limit) {
            var size = "";
           
        size = (limit/(1024 * 1024)).toFixed(2)

    var sizeStr = size + "";                        
     var index = sizeStr.indexOf(".");                  
    var dou = sizeStr.substr(index + 1 ,2)           
     if(dou == "00"){                                  
         return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
     return size;
        },

          btogb: function(limit) {
            var size = "";
        size = (limit/(1024 * 1024 * 1024)).toFixed(2) 
       var sizeStr = size + "";                        
       var index = sizeStr.indexOf(".");                  
       var dou = sizeStr.substr(index + 1 ,2)           
     if(dou == "00"){                                  
         return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
     return size;
        },
          btotb: function(limit) {
            var size = "";
        size = (limit/(1024 * 1024 * 1024* 1024)).toFixed(2) 
       var sizeStr = size + "";                        
       var index = sizeStr.indexOf(".");                  
       var dou = sizeStr.substr(index + 1 ,2)           
     if(dou == "00"){                                  
         return sizeStr.substring(0, index) + sizeStr.substr(index + 3, 2)
    }
     return size;
        },



        numtosecond: function(time) {
            var date = new Date(time);
            Y = date.getFullYear() + '-';
            M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            D = date.getDate() + ' ';
            h = date.getHours() + ':';
            m = date.getMinutes() + ':';
            s = date.getSeconds(); 
            return (Y+M+D+h+m+s); 
        },
        numtohms: function(time) {
            var date = new Date(time);
            h = date.getHours() + ':';
            m = date.getMinutes() + ':';
            s = date.getSeconds(); 
            return (h+m+s); 
        },
        IsDate: function(mystring) {
            var reg = /^(\d{4})-(\d{2})-(\d{2})$/;
            var str = mystring;
            var arr = reg.exec(str);
            if (str == "") return false;
            if (!reg.test(str) && RegExp.$2 <= 12 && RegExp.$3 <= 31) {
                layer.msg('日期格式必须是yyyy-mm-dd');
                return false;
            }
            return true;
        },

formatDate:function(date) { 
var myyear = date.getFullYear(); 
var mymonth = date.getMonth()+1; 
var myweekday = date.getDate(); 

if(mymonth < 10){ 
mymonth = "0" + mymonth; 
} 
if(myweekday < 10){ 
myweekday = "0" + myweekday; 
} 
return (myyear+"-"+mymonth + "-" + myweekday); 
},


formatDate2:function(date) { 
var myyear = date.getFullYear(); 
var mymonth = date.getMonth(); 
var myweekday = date.getDate(); 

if(mymonth < 10){ 
mymonth = "0" + mymonth; 
} 
if(myweekday < 10){ 
myweekday = "0" + myweekday; 
} 
return (myyear+"-"+mymonth + "-" + myweekday); 
},




//获得某月的天数 
 getMonthDays:function(myMonth){ 
var monthStartDate = new Date(nowYear, myMonth, 1); 
var monthEndDate = new Date(nowYear, myMonth + 1, 1); 
var days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24); 
return days; 
},




        donere: function(re) {
            // YS('layer',function(){layer.msg(re.msg,{icon:da.code});});
        },
        load: function(num, str) {
            if (num) {
                if (window.ysload == null) {
                    window.ysload = layer.msg(str ? str : '正在加载中……', { icon: 16, time: 2000, shade: 0.08 }, function() { window.ysload = null; });
                }
            } else {
                setTimeout(function() {
                    layer.close(ysload);
                    window.ysload = null;
                }, 400);
            }
        },

                load2: function(num, str) {
            if (num) {
                if (window.ysload == null) {
                    window.ysload = layer.msg(str ? str : '正在加载中……', { icon: 16, time: 20000, shade: 0.08 }, function() { window.ysload = null; });
                }
            } else {
                setTimeout(function() {
                    layer.close(ysload);
                    window.ysload = null;
                }, 400);
            }
        },



   loadclose:function(time){
    var index = layer.load(1, {
  time:time,
  shade: [0.1,'#fff'] //0.1透明度的白色背景
});
   },

        ystip: function() {
            YS('poshytip', function() {
                setTimeout(function() {
                    $('.poshytip').poshytip({
                        className: 'tip-skyblue',
                        showTimeout: 1,
                        bgImageFrameSize: 11,
                        offsetX: -5,
                        alignX: 'right',
                    });
                }, 1000)

            })
        },
        fetdata: function(sco, key) {
            var url, path, page, load, method = '';
            // 开启调试模式关闭调试模式
            url = sco.conf.debug ? sco.conf.jsonpath : sco.conf.rooturl;
            path = (sco[key] && sco[key].url) || (sco.conf[key] && sco.conf[key].url);
            if (!path) { console.log(key + '未配置路径信息，可conf中配置或者给sco.' + key + '.url赋值路径'); return false; }
            url += path + (sco.conf.debug ? '' : '');
            load = (sco.reload && sco[key] && sco[key].load) || (sco.reload && sco.conf[key] && sco.conf[key].load);
            page = (sco[key] && sco[key].page) || (sco.conf[key] && sco.conf[key].page);
            method = (sco[key] && sco[key].method) || (sco.conf[key] && sco.conf[key].method) || 'GET';
            method = sco.conf.debug ? 'GET' : method;
            //运行前 ，执行的函数；
            if (typeof(sco[key].before) === "function") { var v = sco[key].before(sco); if (v === false) { return false; } }
            if (load) { YSfac.load(1); }
            //执行请求 
            var scon = {
                method: method,
                url: url,
                withCredentials: true,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'
                ,"X-Requested-With": "XMLHttpRequest"
                 }
            };
            var params = sco[key].params || {};
            // params.token = YSfac.getstore('token');
            method == 'GET' ? scon.params = params : scon.data = $.param(params);

            sco.$http(scon).success(function(re) {
                sco[key] && !sco[key].nologin && YSfac.chklogin(re);
                //调试模式打印路径信息
                sco.conf.console ? console.log('接口调试信息，url:' + url, '参数params:', sco[key].params, '返回re:', re) : '';
                sco[key].data = {};
                if (re.code == 0) {
                	
                    sco[key].data = re.data;
                    sco[key].ext = re.ext;
                    //接口如果需要分页的话，会调用
                    page && YS('laypage', function() {
                        var id = '#' + key;
                        if ($(id).length == 0) { console.log('未设置分页的id="' + key + '"的div容器'); return false; }
layui.laypage.render({
      elem: key
      ,count: re.data.total
      ,curr: sco[key].params.currentPage || 1 //当前页
      ,limit:sco[key].params.pageSize
      ,limits:[10,20,30,40,50]
      ,layout: ['count', 'prev', 'page', 'next', 'limit', 'skip']
      ,prev: '<'
      ,next: '>'
      ,pages: re.data.totalPage //总页数
      ,jump: function(obj, first) { //触发分页后的回调
                                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                                    sco[key].params.currentPage = obj.curr;
                                    sco[key].params.pageSize = obj.limit;
                                    sco.fetch(key);
                                    sco.$apply();
                                }
                            }
    });




                        // laypage({ 
                        //     cont: key, //容器。值支持id名、原生dom对象，jquery对象,
                        //     pages: re.data.totalPage, //总页数
                        //     skin: 'molv', //皮肤
                        //     first: 1, //将首页显示为数字1,。若不显示，设置false即可
                        //     //last: 11, 将尾页显示为总页数。若不显示，设置false即可
                        //     curr: sco[key].params.currentPage || 1, //当前页
                        //     prev: '<', //若不显示，设置false即可
                        //     next: '>', //若不显示，设置false即可
                        //     layout: ['count', 'prev', 'page', 'next', 'limit', 'refresh', 'skip'],
                        //     jump: function(obj, first) { //触发分页后的回调
                        //         if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                        //             sco[key].params.currentPage = obj.curr;
                        //             sco.fetch(key);
                        //             sco.$apply();
                        //         }
                        //     }
                        // });
                    })
                }
                //运行后拿到数据，执行函数
                if (typeof(sco[key].done) === "function") { sco[key].done(re, sco); }
                if (load) { YSfac.load(0); }
            }).
            error(function(re) {
                debugger;
                sco.conf.console ? console.log('模块：' + key + '的接口' + url, '参数params:', sco[key].params, '返回err:', re) : '';
                // layer.msg('模块：'+key+'的接口'+url+'网络超时！',{icon:0,time: 2000});
            });
        },
        setstore: function(key, value) {
            value = typeof(value) === 'object' ? JSON.stringify(value) : value;
            localStorage.setItem(key, value);
            return true;
        },
        isArr: function(arr) {
            return Object.prototype.toString.call(arr) === '[object Array]';
        },
        getstore: function(key) {
            var tem = '';
            try {
                tem = localStorage.getItem(key);
                tem = JSON.parse(tem);
            } catch (e) { tem = localStorage.getItem(key); }
            return tem;
        },
        unsetstore: function(key) { localStorage.removeItem(key); return true; },
        setsestore: function(key, value) {
            value = typeof(value) === 'object' ? JSON.stringify(value) : value;
            sessionStorage.setItem(key, value);
            return true;
        },
        getsestore: function(key) {
            var tem = '';
            try {
                tem = sessionStorage.getItem(key);
                tem = JSON.parse(tem);
            } catch (e) { tem = sessionStorage.getItem(key); }
            return tem;
        },
        unsetsestore: function(key) { sessionStorage.removeItem(key); return true; },
        setCookie: function(name, value) {
            //写cookies 
            var d = new Date();
            d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = name + "=" + value + "; " + expires;
        },
        getCookie: function(cname) {
            //读取cookies 
            var name = cname + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        },
        delCookie: function(name) {
            //删除cookies 
            f.setCookie(name, "", -1);
        },
        getscope_byid: function(sc, id) {
            /*递归，找到$id为 num 的scope.并返回；*/
            var sp = sc.$id == id ? sc : this.getscope_byid(sc.$parent, id);
            return sp;
        },
        //验证手机号码是否正确，正确返回true  错误返回false；
        testphone: function(num) {
            var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1})|145|147|159|153)+\d{8})$/;
            if (!myreg.test(num)) {
                return false;
            } else {
                return true;
            }
        },
        //发送短信
        sendphone: function(obj) {
            var i = 59;
            obj.attr("disabled", "true").css("opacity", 0.7);
            var int = setInterval(function() {
                if (i === 0) {
                    obj.val('发送验证码');
                    obj.removeAttr("disabled").css("opacity", 1);
                    clearInterval(int);
                    return false;
                }
                obj.val('' + i + '秒重发');
                i--;
            }, 1000);
        },

        hidemission: function() {
            $('#missionson').offCanvas('close');
            $('#mission').offCanvas('close');
        },
        qiniuupload: function(bucketurl, token, button, multi_selection, UploadComplete, FilesAdded, BeforeUpload, UploadProgress, FileUploaded) {
            // 引用方法  YSfac.qiniuupload(bucketurl,token,browse_button,)
            var uploader = Qiniu.uploader({
                runtimes: 'html5,flash,html4', //上传模式,依次退化
                browse_button: button, //上传选择的点选按钮，**必需**
                uptoken: token,
                // putExtra:putExtra,
                multi_selection: multi_selection,
                // uptoken_url: getToken(), //Ajax请求upToken的Url，**强烈建议设置**（服务端提供）
                // uptoken : '', //若未指定uptoken_url,则必须指定 uptoken ,uptoken由其他程序生成
                unique_names: true, // 默认 false，key为文件名。若开启该选项，SDK为自动生成上传成功后的key（文件名）。
                // save_key: true, // 默认 false。若在服务端生成uptoken的上传策略中指定了 `sava_key`，则开启，SDK会忽略对key的处理
                domain: bucketurl, //bucket 域名，下载资源时用到，**必需**
                get_new_uptoken: true, //设置上传文件的时候是否每次都重新获取新的token
                // container: 'container', //上传区域DOM ID，默认是browser_button的父元素，
                max_file_size: '1000mb', //最大文件体积限制
                flash_swf_url: 'Moxie.swf', //引入flash,相对路径
                max_retries: 3, //上传失败最大重试次数
                dragdrop: false, //开启可拖曳上传
                // drop_element: 'container', //拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
                chunk_size: '4mb', //分块上传时，每片的体积
                auto_start: true, //选择文件后自动上传，若关闭需要自己绑定事件触发上传
                init: {
                    'FilesAdded': function(up, files) {
                        typeof(FilesAdded) === "function" && FilesAdded(up, files);
                    },
                    'BeforeUpload': function(up, file) {
                        YSfac.load(1, '上传中……');
                        typeof(BeforeUpload) === "function" && BeforeUpload(up, files);
                        // 每个文件上传前,处理相关的事情
                    },
                    'UploadProgress': function(up, file) {
                        typeof(UploadProgress) === "function" && UploadProgress(up, files);

                        // 每个文件上传时,处理相关的事情
                    },
                    'FileUploaded': function(up, file, info) {
                        typeof(FileUploaded) === "function" && FileUploaded(up, file, info);

                    },
                    'UploadComplete': function(up, file) {
                        typeof(UploadComplete) === "function" && UploadComplete(up, file);
                    },
                    'Error': function(up, err, errTip) {
                        //上传出错时,处理相关的事情
                    }
                }
            });













        },
        //建立一個可存取到該file的url
        getObjectURL: function(file) {
            var url = null;
            if (window.createObjectURL !== undefined) { // basic
                url = window.createObjectURL(file);
            } else if (window.URL !== undefined) { // mozilla(firefox)
                url = window.URL.createObjectURL(file);
            } else if (window.webkitURL !== undefined) { // webkit or chrome
                url = window.webkitURL.createObjectURL(file);
            }
            return url;
        },
        ispc: function() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"
            ];
            var flag = true;
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = false;
                    break;
                }
            }
            return flag;
        },

        msg: function(re) {
            var type = re.code == 1 ? 'success' : 'error';
            YS('toastr', function() {
                toastr.options = {
                    "closeButton": true,
                    "debug": false,
                    "positionClass": "toast-bottom-right",
                    "onclick": null,
                    "showDuration": "300",
                    "hideDuration": "1000",
                    "timeOut": "2000",
                    "extendedTimeOut": "1000",
                    "showEasing": "swing",
                    "hideEasing": "linear",
                    "showMethod": "fadeIn",
                    "hideMethod": "fadeOut"
                };
                toastr[type](re.msg);
            });
        },
        //md5加密
        MD5: function(sMessage) {
            function RotateLeft(lValue, iShiftBits) {
                return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
            }

            function AddUnsigned(lX, lY) {
                var lX4, lY4, lX8, lY8, lResult;
                lX8 = (lX & 0x80000000);
                lY8 = (lY & 0x80000000);
                lX4 = (lX & 0x40000000);
                lY4 = (lY & 0x40000000);
                lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
                if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
                if (lX4 | lY4) {
                    if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                    else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                } else return (lResult ^ lX8 ^ lY8);
            }

            function F(x, y, z) {
                return (x & y) | ((~x) & z);
            }

            function G(x, y, z) {
                return (x & z) | (y & (~z));
            }

            function H(x, y, z) {
                return (x ^ y ^ z);
            }

            function I(x, y, z) {
                return (y ^ (x | (~z)));
            }

            function FF(a, b, c, d, x, s, ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            }

            function GG(a, b, c, d, x, s, ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            }

            function HH(a, b, c, d, x, s, ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            }

            function II(a, b, c, d, x, s, ac) {
                a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
                return AddUnsigned(RotateLeft(a, s), b);
            }

            function ConvertToWordArray(sMessage) {
                var lWordCount;
                var lMessageLength = sMessage.length;
                var lNumberOfWords_temp1 = lMessageLength + 8;
                var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
                var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
                var lWordArray = Array(lNumberOfWords - 1);
                var lBytePosition = 0;
                var lByteCount = 0;
                while (lByteCount < lMessageLength) {
                    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                    lBytePosition = (lByteCount % 4) * 8;
                    lWordArray[lWordCount] = (lWordArray[lWordCount] | (sMessage.charCodeAt(lByteCount) << lBytePosition));
                    lByteCount++;
                }
                lWordCount = (lByteCount - (lByteCount % 4)) / 4;
                lBytePosition = (lByteCount % 4) * 8;
                lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
                lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
                lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
                return lWordArray;
            }

            function WordToHex(lValue) {
                var WordToHexValue = "",
                    WordToHexValue_temp = "",
                    lByte, lCount;
                for (lCount = 0; lCount <= 3; lCount++) {
                    lByte = (lValue >>> (lCount * 8)) & 255;
                    WordToHexValue_temp = "0" + lByte.toString(16);
                    WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2)
                }
                return WordToHexValue;
            }
            var x = Array();
            var k, AA, BB, CC, DD, a, b, c, d
            var S11 = 7,
                S12 = 12,
                S13 = 17,
                S14 = 22;
            var S21 = 5,
                S22 = 9,
                S23 = 14,
                S24 = 20;
            var S31 = 4,
                S32 = 11,
                S33 = 16,
                S34 = 23;
            var S41 = 6,
                S42 = 10,
                S43 = 15,
                S44 = 21;
            x = ConvertToWordArray(sMessage);
            a = 0x67452301;
            b = 0xEFCDAB89;
            c = 0x98BADCFE;
            d = 0x10325476;
            for (k = 0; k < x.length; k += 16) {
                AA = a;
                BB = b;
                CC = c;
                DD = d;
                a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
                d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
                c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
                b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
                a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
                d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
                c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
                b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
                a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
                d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
                c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
                b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
                a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
                d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
                c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
                b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
                a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
                d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
                c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
                b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
                a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
                d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
                c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
                b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
                a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
                d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
                c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
                b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
                a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
                d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
                c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
                b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
                a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
                d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
                c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
                b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
                a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
                d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
                c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
                b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
                a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
                d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
                c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
                b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
                a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
                d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
                c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
                b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
                a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
                d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
                c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
                b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
                a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
                d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
                c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
                b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
                a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
                d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
                c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
                b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
                a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
                d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
                c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
                b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
                a = AddUnsigned(a, AA);
                b = AddUnsigned(b, BB);
                c = AddUnsigned(c, CC);
                d = AddUnsigned(d, DD);
            }
            var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
            return temp.toLowerCase();
        }





    };
    window.YSfac = YSfac;
    return YSfac;
})(window);