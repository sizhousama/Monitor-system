/*! YS v1.0.0 | by YSTeam | Copyright (c) 2013-2017 http://www.ysframe.com All rights reserved. | Licensed under MIT | 2017-12-22T12:00:00+0800 */ 

(function(window, undefined) {
//配置项 ============================================================================ 
// 判断生产或者是测试环境
var envir = window.location.origin.indexOf('dev')==-1?'api':'devapi';
var conf = {
  rooturl: './',    //'https://'+envir+'.helii.cn/api/',网站根目录
  tplpath:'./html',  //每个模块的静态页面存放路径
  index:"./html/mainpage.html",//默认include进来的模板
  indexpath:'mainpage',//默认进入的模块
  jsonpath:'json_dev',//约定json路径
  debug:false,//开发模式，会所有的请求为get方法，并请求本地json;
  console:true,//ture开启，则打印一些YS提示错误信息，false关闭,不打印YS的提示信息; 
  opendomain:'http://p5u15xcze.bkt.clouddn.com',
  prvdomain:'http://p4y9n22tm.bkt.clouddn.com',
  subfix:['a','b','c','d','e','f','g','h','i','j','k'], //约定数据容器的后缀；
   ext:{ 
      jichu:['桩芯','基础承台垫层','基础承台、地梁','电梯基坑垫层','电梯基坑'],
      dixia:['一','二','三','四','五','六','七','八','九','十'],
      zhuti:['首','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','二十一','二十二','二十三','二十四','二十五','二十六','二十七','二十八','二十九','三十','三十一','三十二','三十三','三十四','三十五','三十六','三十七','三十八','三十九','四十','四十一','四十二','四十三','四十四','四十五','四十六','四十七','四十八','四十九','五十','五十一','五十二','五十三','五十四','五十五','五十六','五十七','五十八','五十九','六十','六十一','六十二','六十三','六十四','六十五','六十六','六十七','六十八','六十九','七十','七十一','七十二','七十三','七十四','七十五','七十六','七十七','七十八','七十九','八十'],
      wumian:['屋面梁板',
              '屋面柱',
              '小屋面梁板',
              
],
  },

};


var $ = layui.$;
var Jquery = layui.$;
//业务逻辑块 ============================================================================
var main = { 
  ctrl_init:function(sco) {// 主控制器初始化 
   

      





    //退出登录
    sco.com_objc.url = 'user/logout';     
     sco.com_objc.before = function(sco){
        sco.com_objc.params.uid = YSfac.getstore("uid");
     };
     sco.com_objc.done = function(re,sco){
       if (re.code==0) {
        layer.msg("退出成功，1s后将跳转");
        setTimeout(function() {
         window.location.href = "/login.html";
         YSfac.delCookie('token');
        }, 1000);
       }
     };

function newTimer(s) {


function getNow(s) {
    return s < 10 ? '0' + s: s;
}

var myDate = new Date(s);
//获取当前年
var year=myDate.getFullYear();
//获取当前月
var month=myDate.getMonth()+1;
//获取当前日
var date=myDate.getDate(); 
var h=myDate.getHours();       //获取当前小时数(0-23)
var m=myDate.getMinutes();     //获取当前分钟数(0-59)
 
var day=myDate.getDay(); 
var show_day=new Array('星期一','星期二','星期三','星期四','星期五','星期六','星期日'); 

$('#DateTime1').text(year+'年'+getNow(month)+"月"+getNow(date)+"日");
$('#DateTime2').text(getNow(h)+':'+getNow(m));
$('#DateTime3').text(show_day[day-1]);

    }




    //获取用户信息
    sco.com_objd.url = 'user/loginUserInfo';  
     sco.com_objd.before = function(sco){

     };
     sco.com_objd.done = function(re,sco){

      newTimer(re.time);
setTimeout(function(){
  sco.fetch('com_objd');
},7200000);

       if (re.code==0) {
          YSfac.setstore('uid',re.data.uid);

       }
     };

sco.fetch('com_objd');



    function stopit() {
      clearTimeout(slidint);
    }
      
    function week() {
      var d, day, x, s = " ";
      var x = new Array("星期日", "星期一", "星期二");
      var x = x.concat("星期三", "星期四", "星期五");
      var x = x.concat("星期六");
      d = new Date();
      day = d.getDay();
      return (s += x[day]);
    }
      
    window.onload = function() {
     // newTimer();
    }
//配置导航是否显示子单位下拉

//退出登录
sco.com_obja.url = 'user/logout'; 
 sco.com_obja.done = function(re,sco){
   if (re.code==0) {
    layer.msg("退出成功，1s后将跳转");
    setTimeout(function() {
     window.location.reload();
    }, 1000);
   }
 };


//修改密码11
sco.com_objb.url = 'user/updatePwd'; 

sco.com_objb.before = function(sco){

if (!sco.com_objb.params.oldPwd||sco.com_objb.params.oldPwd=='') {
  layer.msg('旧密码不能为空！');return false;
}
if (!sco.com_objb.params.reoldpaw||sco.com_objb.params.reoldpaw=='') {
  layer.msg('新密码不能为空！');return false;
}
if (!(/(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(sco.com_objb.params.reoldpaw))) {
  layer.msg('密码需要8~20位同时包含数字和大小写字母！');return false;
}
if (!sco.com_objb.params.newPwd||sco.com_objb.params.newPwd=='') {
  layer.msg('确认密码不能为空！');return false;
}
if (sco.com_objb.params.reoldpaw!=sco.com_objb.params.newPwd) {
  layer.msg('新密码不一致，请重新输入！');
  return false;
}
};
sco.com_objb.done = function(re,sco){
  if(re.code==0){
    layer.closeAll();
    layer.msg('密码修改成功！');
    sco.com_objb.params.oldPwd='';
    sco.com_objb.params.reoldpaw='';
    sco.com_objb.params.newPwd='';
  }
  else{
    layer.msg(re.msg);
  }
}


//获取用户信息
// sco.com_objc.url='user/loginUserInfo';
// sco.fetch('com_objc');






  },


// 首页模块
mainpage:function(sco) {
  $("#main_e").empty()
  sco.dtwidth=0;
  sco.link=0;
  sco.device=0;
  sco.task=0;
  sco.filelist=[];
  sco.gl='';
  sco.showf=0;
  sco.iconlist=[
   {id:1,deviceName:"GAP",status:1},{id:2,deviceName:"路由器",status:1},{id:3,deviceName:"防火墙",status:1},{id:4,deviceName:"IPS",status:1},{id:5,deviceName:"可信任安全网关",status:1},{id:6,deviceName:"交换器",status:1},{id:7,deviceName:"安管隔离网闸",status:1},{id:8,deviceName:"编码器",status:1},{id:9,deviceName:"FGAP",status:1},{id:10,deviceName:"光交换",status:2}
  ,{id:11,deviceName:"矩阵抽象",status:2},{id:12,deviceName:"摄像头",status:2},{id:13,deviceName:"3AS",status:2},{id:14,deviceName:"ADS",status:2},{id:15,deviceName:"AS",status:2},{id:16,deviceName:"ASM",status:2},{id:17,deviceName:"AWS",status:2},{id:18,deviceName:"DTI",status:2},{id:19,deviceName:"EWP",status:3},{id:20,deviceName:"IWP",status:3}
  ,{id:21,deviceName:"MOC",status:3},{id:22,deviceName:"PAS",status:3},{id:23,deviceName:"SS",status:3},{id:24,deviceName:"SSE",status:3},{id:25,deviceName:"TAS",status:3},{id:26,deviceName:"TMS",status:3},{id:27,deviceName:"UAS",status:3},{id:28,deviceName:"UMS",status:4},{id:29,deviceName:"TZ",status:4},{id:30,deviceName:"存储陈列",status:4}
  ,{id:31,deviceName:"磁盘陈列",status:4},{id:32,deviceName:"摄像头",status:4},{id:33,deviceName:"服务器",status:4},{id:34,deviceName:"矩阵",status:4},{id:35,deviceName:"内网管理员",status:4},{id:36,deviceName:"入侵ids",status:4},{id:37,deviceName:"摄像头2",status:5},{id:38,deviceName:"数据库",status:5},{id:39,deviceName:"云控制台",status:5},{id:40,deviceName:"终端",status:5}
  ,{id:41,deviceName:"主机ids",status:5},{id:42,deviceName:"政党军机构",status:5},{id:43,deviceName:"公安驻地外",status:5},{id:44,deviceName:"海关",status:5},{id:45,deviceName:"民政机构",status:5},{id:46,deviceName:"内网",status:6},{id:47,deviceName:"社保机构",status:6},{id:48,deviceName:"社会企事业单位",status:6},{id:49,deviceName:"视频内网",status:6},{id:50,deviceName:"视频终端",status:6}
  ,{id:51,deviceName:"外部接入单位",status:6},{id:52,deviceName:"外网",status:6},{id:53,deviceName:"操作台",status:6}];
  sco.navup = false;
  sco.syxmenu1 = false;
  sco.syxmenu2 = false;
// 1、获取链路监控列表 YS_lista
// 2、获取单个设备的系统占用率(cpu,内存,硬盘,网络)   YS_obja
// 3、获取链路的状态  YS_objb
// 4、获取报警总览数据 YS_objc
// 5、获取报警排行数据 YS_objd
// 6、获取报警数量统计 YS_obje
// 7、获取后台数据统计 YS_objf


//设置流动点的随机数
//随机数  
sco.suiji = ''; 
function suiji(){
function diu_Randomize(b,e){   
    if(!b && b!=0 || !e){return "?";}   
    return Math.floor( ( Math.random() * e ) + b );   
}   
setInterval(function(){
 sco.suiji = diu_Randomize(0,10);

},2000);

}
//suiji();













// 1、获取链路监控列表 YS_lista
  sco.YS_lista.url="index/topology";
  sco.YS_lista.params={};
  sco.YS_lista.load = false;
  sco.YS_lista.done = function(re, sco) {
    
      sco.fetch('YS_listb');
    if(sco.YS_lista.data&&sco.YS_lista.data.list.length>0){
      sco.YS_lista.data.list.map(function(elem,index){


        if(elem.topologyNodes.length>0){

          if(elem.topologyNodes[0].fromDeviceId==0){
            var temp = [];
            temp.push(elem.topologyNodes[0]);
            elem.topologyNodes = get_child(elem.topologyNodes,elem.topologyNodes[0].toDeviceId,temp);
          }


          elem.topologyNodes.map(function(e){


            // if(sco.YS_listb.data.hasOwnProperty(e.toDeviceId)){
            //   e.deviceStatus = 0;//正常
            //   if(sco.YS_listb.data[e.toDeviceId]>1){
            //     e.deviceStatus = 2;//报警
            //   }
            // }else{
            //   e.deviceStatus = 1;//不通
            // }



            if(!e.bottomType)e.bottomType = 0;
            if(!e.show)e.show = 0;

              //遍历获取设备名
              if(sco.YS_lista.data.devices[e.toDeviceId]){
                  e.deviceInfo = sco.YS_lista.data.devices[e.toDeviceId];
              }

                // if(sco.iconlist[e.toDeviceId]){
                //   e.deviceInfo = sco.iconlist[e.toDeviceId];
                // }else{
                //   e.deviceInfo = [];
                // }
    // elem.map(function(elem3,index3){

    // })

              // sco.iconlist.map(function(elem2){
              //   if(elem2.id==e.toDeviceId){
              //     e.deviceInfo = elem2;
              //   }
              // })




              // if(e.deviceIds&&e.deviceIds.length>0){
              //   sco.filelist=e.deviceIds
              // }

            if(e.child&&e.child.length>0){
              e.child.map(function(e2){
                // if(sco.YS_listb.data.hasOwnProperty(e2.toDeviceId)){
                //   e2.deviceStatus = 0;//正常
                //   if(sco.YS_listb.data[e2.toDeviceId]>1){
                //     e2.deviceStatus = 2;//报警
                //   }
                // }else{
                //   e2.deviceStatus = 1;//不通
                // }

                //child遍历获取设备名
                if(sco.YS_lista.data.devices[e2.toDeviceId]){
                  e2.deviceInfo = sco.YS_lista.data.devices[e2.toDeviceId];
                }
                // if(sco.iconlist[e2.toDeviceId+1]){
                //   e2.deviceInfo = sco.iconlist[e2.toDeviceId+1];
                // }else{
                //   e2.deviceInfo = [];
                // }

                // sco.iconlist.map(function(elem2){
                //   if(elem2.id==e2.toDeviceId){
                //     e2.deviceInfo = elem2;
                //   }
                // })



                if(!e2.show)e2.show = 0;
                if(!e2.bottomType)e2.bottomType = 0;
              })
            }
          })   

        }

      })   


  
    }

sco.YS_lista.data.list.map(function(elem,index){
  elem.topologyNodes.map(function(el1){
    if(el1.child){
      el1.child.map(function(el2){
        if(el2.deviceStatus==1){
         sco.gl="#666"
        }else{
          sco.gl="#046d83"
        }
      })
    }
  })
})



    YS("jsPlumb",function(){
     //   if(sco.box==true){
     //   jsPlumb.deleteEveryEndpoint();
     //   jsPlumb.detachEveryConnection();
     // sco.box=false
     // }
  function deepCopy(p, c) {  //克隆对象
          var c = c || {};  
          for (var i in p) {  
              if(! p.hasOwnProperty(i)){  
                  continue;  
              }  
              if (typeof p[i] === 'object') {  
                  c[i] = (p[i].constructor === Array) ? [] : {};  
                  deepCopy(p[i], c[i]);  
              } else {  
                  c[i] = p[i];  
              }  
          }  
          return c;  
      } 

 // function epym() {
 //       $("#leftlink").empty()
 //       jsPlumb.deleteEveryEndpoint();
 //       jsPlumb.detachEveryConnection();
 // }
 // sco.epym=epym
 jsPlumb.ready(function(){
  var gl=sco.gl
  var connectorPaintStyle = {//基本连接线样式
                  lineWidth: 0.5,
                  strokeStyle: gl,
                  joinstyle: "",
                  outlineColor: gl,
                  outlineWidth: 0
              };
     var origin = {//起点
                  endpoint: ["Dot", { radius: 2 }],
                  connectorStyle: connectorPaintStyle,
                  paintStyle: {fillStyle: "#03343d",},
                  isSource: true,
                  connector: ["Straight", { stub: [0, 0], gap: 0, cornerRadius: 0, alwaysRespectStubs: false }],  //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
                  isTarget: false,
                  maxConnections:-1,
              };
      var destination = {//终点
                  endpoint: ["Dot", { radius: 2 }], 
                  connectorStyle: connectorPaintStyle,
                  paintStyle: {fillStyle: "#03343d",},
                  isSource: false,
                  connector: ["Straight", { stub: [0, 0], gap: 0, cornerRadius: 0, alwaysRespectStubs: false }],  //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
                  isTarget: false,
                  maxConnections:-1,
              };
   jsPlumb.setContainer('leftlink')
   sco.box=true;
   $("#leftlink .linkpoint").each(function(){
        jsPlumb.addEndpoint(this, { anchors: "Center" }, deepCopy(origin, {uuid:$(this).attr("id")+"origin"}));//起点
        jsPlumb.addEndpoint(this, { anchors: "Center" },  deepCopy(destination, {uuid:$(this).attr("id")+"destination"}));//终点
   });

sco.YS_lista.data.list.map(function(elem,index){
  elem.topologyNodes.map(function(el1){
    if(el1.child){
      el1.child.map(function(el2){
        if(el2.returnToId){
          jsPlumb.connect({uuids:[index+"s"+el2.toDeviceId+"origin",index+"s"+el2.returnToId+"destination"]});
        }
      })
    }
  })
})
  

 })

})
console.log($("#leftlink").width())
sco.dtwidth=$("#leftlink").width()
  };


sco.YS_listb.url = "topology/queryAllLevel";
sco.YS_listb.load = false;
sco.YS_listb.done = function(re, sco) {
    

      if(sco.YS_lista.data&&sco.YS_lista.data.list.length>0){
        sco.YS_lista.data.list.map(function(elem,index){


          if(elem.topologyNodes.length>0){


            elem.topologyNodes.map(function(e){
                //判断主路文件夹
                if(e.deviceIds&&e.deviceIds.length>0){
                    e.deviceIdsElem = [];
                  e.deviceIds.map(function(el2){
                    var temp = {'toDeviceId':el2,'deviceStatus':0};
                    if(re.data.hasOwnProperty(el2)){
                      // temp.deviceStatus = 0;//正常
                      if(re.data[el2]==2){
                        temp.deviceStatus = 2;//报警
                        temp.alarm = 1;
                      }

                      if(re.data[el2]==3){
                        temp.deviceStatus = 1;//不通
                      }

                    }else{
                      temp.deviceStatus = 1;//不通
                    }     

                    e.deviceIdsElem.push(temp);             
                  })
                }


              //判断主路
              if(re.data.hasOwnProperty(e.toDeviceId)){
                e.deviceStatus = 0;//正常
                if(re.data[e.toDeviceId]==2){
                  e.deviceStatus = 2;//报警
                  e.alarm = 1;
                }

                if(re.data[e.toDeviceId]==3){
                  e.deviceStatus = 1;//不通
                }

              }else{
                e.deviceStatus = 1;//不通
              }


              //子节点
              if(e.child&&e.child.length>0){
                e.child.map(function(e2){

                  //子节点文件夹
                  if(e2.deviceIds&&e2.deviceIds.length>0){
                      e2.deviceIdsElem = [];
                    e2.deviceIds.map(function(el3){
                      var temp = {'toDeviceId':el3,'deviceStatus':0};
                      if(re.data.hasOwnProperty(el3)){
                        // temp.deviceStatus = 0;//正常
                        if(re.data[el3]==2){
                          temp.deviceStatus = 2;//报警
                          temp.alarm = 1;
                        }

                        if(re.data[el3]==3){
                          temp.deviceStatus = 1;//不通
                        }

                      }else{
                        temp.deviceStatus = 1;//不通
                      }     

                      e2.deviceIdsElem.push(temp);             
                    })
                  }


                  if(re.data.hasOwnProperty(e2.toDeviceId)){
                    e2.deviceStatus = 0;//正常
                    if(re.data[e2.toDeviceId]==2){
                      e2.deviceStatus = 2;//报警
                      e2.alarm = 1;
                    }
                    if(re.data[e2.toDeviceId]==3){
                      e2.deviceStatus = 1;//不通
                    }

                  }else{
                    e2.deviceStatus = 1;//不通
                  }

                })
              }
            })   

          }

        })   


      }

sco.isredx=0;
      sco.YS_lista.data.list.map(function(elem2,index2){

        elem2.lastErrorIndex = get_last_error(elem2.topologyNodes);
        if (get_last_errors(elem2.topologyNodes)) {
           elem2.deviceStatus =   get_last_errors(elem2.topologyNodes);
           if (elem2.deviceStatus==1&&elem2.topologyNodes) {
           //elem2.topologyNodes.child[0].deviceStatus=1;
        elem2.topologyNodes.map(function(el){
                if (el.child) {
                  el.child[0].deviceStatus=1;
                  sco.isredx=1;
                } 
                  else {
                    return;
                  }
      })
           } 
        }
       
        

      }) 

  
}


    console.log(sco.YS_lista);

    //获取每一条链路最后一次不通的设备下标
    function get_last_error(arr){
      var result = -1;
      arr.map(function(elem,index){
        if(elem.deviceStatus==1){
          result = index;
        }
      })
      return result;
    }

    function get_last_errors(arr){
      var result = -1;
      var dev = -1;
      arr.map(function(elem,index){
        if(elem.deviceStatus==1){
          result = index;
        }
      if (result!=-1) {
      arr.map(function(elem2,index2){
                 if (index2<result) {
                  elem2.deviceStatus = 1;
                    dev = 1;
                 } 
          })
      }

      
      })
    return dev;
    }



   sco.int = setInterval(function(){
      if(sco.YS_listb.url!="topology/queryAllLevel"){
        window.clearInterval(sco.int);
        return false;
      }
      sco.fetch('YS_listb');
   },10000)
 
      sco.fetch('YS_lista');


  sco.listkey = '';

// 获取设备资源消耗信息
  sco.YS_obja.url = "device/queryExplorer";
  // sco.YS_obja.params = {deviceId:3};
  sco.YS_obja.done=function(re,sco){
    var speeds = 0;
   if(re.code==0&&re.data&&re.data['deviceExplorer']){
    setTimeout(function(){
      var cpu = re.data.deviceExplorer.cpu.useRateStr;
      var disk = re.data.deviceExplorer.disk.useRateStr;
      var mem = re.data.deviceExplorer.mem.useRateStr;
      var ecpu = "ecpu"+sco.listkey  + sco.YS_obja.params.deviceId;
      var eyp = "eyp" +sco.listkey + sco.YS_obja.params.deviceId;
      var enc = "enc" +sco.listkey + sco.YS_obja.params.deviceId;
      var ewl = "ewl" +sco.listkey + sco.YS_obja.params.deviceId;
      cpu = Number(cpu.replace(/\%/g,''));

      disk = Number(disk.replace(/\%/g,''));
      mem = Number(mem.replace(/\%/g,''));
      var redcol1 = '#ffb71a';
      var redcol2 = '#ffb71a';
      var redcol3 = '#ffb71a';
      
    if (cpu>79.99) {var redcol1 = 'red';}
    if (disk>79.99) {var redcol2 = 'red';}
    if (mem>79.99) {
      var redcol3 = 'red';
      if(sco.YS_lista.data&&sco.YS_lista.data.list.length>0){
        sco.YS_lista.data.list.map(function(elem,index){


          if(elem.topologyNodes.length>0){


            elem.topologyNodes.map(function(e){
if (e.toDeviceId==sco.YS_obja.params.deviceId) {
   e.deviceStatus = 2;//报警
} 


            })   

          }

        })   


      }


    }

  
             var myCircle1 = Circles.create({
      id:                  ecpu,
      radius:              26,
      value:               cpu,
      maxValue:            100,
      width:               5,
      text:                function(value){return value + '%';},
      colors:              ['#868db6', redcol1],
      duration:            speeds,
      textClass:           'clt',
      styleText:           true
    });
      var myCircle2 = Circles.create({
      id:                  eyp,
      radius:              26,
      value:               disk,
      maxValue:            100,
      width:               5,
      text:                function(value){return value + '%';},
      colors:              ['#868db6',redcol2],
      duration:            speeds,
      textClass:           'clt',
      styleText:           true
    });
      var myCircle3 = Circles.create({
      id:                  enc,
      radius:              26,
      value:               mem,
      maxValue:            100,
      width:               5,
      text:                function(value){return value + '%';},
      colors:              ['#868db6',redcol3],
      duration:            speeds,
      textClass:           'clt',
      styleText:           true
    });
    //   var myCircle4 = Circles.create({
    //   id:                  ewl,
    //   radius:              26,
    //   value:               10,
    //   maxValue:            100,
    //   width:               5,
    //   text:                function(value){return value + '%';},
    //   colors:              ['#868db6', '#ffb71a'],
    //   duration:            400,
    //   textClass:           'clt',
    //   styleText:           true
    // });

      },100)

    }
    if(re.code==0&&!re.data){
      setTimeout(function(){
      var ecpu = "ecpu"+sco.listkey  + sco.YS_obja.params.deviceId;
      var eyp = "eyp" +sco.listkey + sco.YS_obja.params.deviceId;
      var enc = "enc" +sco.listkey + sco.YS_obja.params.deviceId;
      var myCircle1 = Circles.create({
      id:                  ecpu,
      radius:              26,
      value:               0,
      maxValue:            100,
      width:               5,
      text:                function(value){return '';},
      colors:              ['#868db6', '#ffb71a'],
      duration:            speeds,
      textClass:           'clt',
      styleText:           true
    });
      var myCircle2 = Circles.create({
      id:                  eyp,
      radius:              26,
      value:               0,
      maxValue:            100,
      width:               5,
      text:                function(value){return '';},
      colors:              ['#868db6', '#ffb71a'],
      duration:            speeds,
      textClass:           'clt',
      styleText:           true
    });
      var myCircle3 = Circles.create({
      id:                  enc,
      radius:              26,
      value:               0,
      maxValue:            100,
      width:               5,
      text:                function(value){return '';},
      colors:              ['#868db6', '#ffb71a'],
      duration:            speeds,
      textClass:           'clt',
      styleText:           true
    });
    },100)
    }
  }  





  // var temp = [];
  // var temp2 = [];
  // var result = [];
  //   // console.log(test);
  //   //先找出每条链路的头
  //   test.map(function(elem,index){
  //     if(elem.fromid==0){
  //       temp2.push(elem);
  //       temp.push(temp2);
  //     }
  //   })

  //   // console.log(temp2);

  //   //遍历得出每条链路
  //   temp2.map(function(elem,index){
  //     temp = [];
  //     temp.push(elem);

  //     temp = get_child(test,elem.id,temp);

  //     result.push(temp);

  //   })


  //   // console.log(result);
  //   //result为整理后每一条链路的设备
  //   //给每一条链路排序、分类

  //     var last = [];
  //     var lastre = [];
  //     var t = [];
  //     var savechild = [];




  //     result.map(function(elem,index){
  //       last = [];
  //       t = elem;

  //       last = check_fork(elem,last);

  //       lastre.push(last);

  //     })


  //     //格式化
  //     // function format_link(data){
  //     //   var format_link = [];
  //     //   lastre.map(function(elem){
  //     //     var format_temp = [];
  //     //     format_temp['list'] = elem;
  //     //     format_link.push(format_temp);


  //     //   })
  //     //   return format_link;
  //     // }





  //   console.log(lastre);

  //   //检测分岔
  //   function check_fork(elem,re){
  //       for (var i = 0; i < elem.length; i++) {
  //         if(i==0){
  //           re.push(elem[i]);
  //           continue;
  //         }


  //         if(elem[i].fromid==elem[i-1].id&&elem[i-1]['fork']){
  //           elem[i]['fork'] = 1;
  //         }


  //         if(elem[i].fromid==elem[i-1].id&&!elem[i-1]['fork']){
  //           //是子级
  //           re.push(elem[i]);
  //         }else{
  //           //分岔
  //           //此点不是上级的子级，遍历数组寻找父级
            
  //             elem[i]['fork'] = 1;
  //             for (var j = 0; j < re.length; j++) {
  //               if(re[j].id==elem[i].fromid){
  //                 var child = [];
  //                 savechild = [];
  //                 re[j].child? '':re[j].child = [];
  //                 child.push(elem[i]);
  //                 savechild=get_child(t,t[i].id,child);
  //                 //复原
  //                 savechild.map(function(e2){
  //                   e2.fork = 0;
  //                 })

  //                 savechild = check_fork(savechild,[]);

  //                 re[j].child.push(savechild);
  //               }
  //             }

  //         }

  //       }

  //       return re;
  //   }




    //获取子级
    function get_child(arr,id,re){
      var re1 = JSON.parse(JSON.stringify(re));


      if(re1[0].child&&re1[0].child.length>0){
        re1[0].child = check_return(arr,re1[0].child);
      }

      
      arr.map(function(e,index){
        
        if(e.child&&e.child.length>0){
          e.child = check_return(arr,e.child);
        }

        if(e.fromDeviceId==id){
          re1.push(e);
          if(has_child(arr,e.toDeviceId)){
            re1 = get_child(arr,e.toDeviceId,re1);
          }
        }



      })
        return re1;
    }


    //查看是否存在子级
    function has_child(arr,id){
      var bool = 0;

      for (var i = 0; i < arr.length; i++) {
        if(arr[i].fromDeviceId==id){
          bool = 1;break;
        }
      }

      // arr.map(function(e){
      //   if(e.fromid==id){
      //     bool = 1;
      //   }
      // })
      return bool;
    }


    //检查分支是否有回路
    function check_return(arr,child){
      var last = child[child.length-1];
      arr.map(function(e,index){
        if(e.toDeviceId==last.toDeviceId){

          if(child.length>1){
            child[child.length-2].returnToId = e.toDeviceId;
            child.splice(child.length-1,1);
          }else{
            child[child.length-1].returnToId = e.toDeviceId;
          }
        }
      })

      return child;
    }






















// 4、获取报警总览数据 YS_objc
 sco.YS_objb.url = "index/alarmOverview";

  sco.YS_objb.before=function(sco){
    var now = new Date();
    var nowdata = now.getDate() - 1
var time = now.getFullYear() + "-" +((now.getMonth()+1)<10?"0":"")+(now.getMonth()+1)+"-"+(now.getDate()<10?"0":"")+nowdata; 
if (!sco.YS_objb.params.selectDate) {
sco.YS_objb.params.selectDate = time;
} 

  }
 sco.YS_objb.done=function(re,sco){
  if(re.code==0&&re.data){
          if (!re.data.alarmLinkNum || !re.data.totalLinkNum) {
            var link = 0;
          } else {
            var link = (re.data.alarmLinkNum / re.data.totalLinkNum).toFixed(2);
          }

          if (!re.data.alarmDeviceNum || !re.data.totalDeviceNum) {
            var device = 0;
          } else {
            var device = (re.data.alarmDeviceNum / re.data.totalDeviceNum).toFixed(2);
          }

          if (!re.data.alarmTaskNum || !re.data.totalTaskNum) {
            var task = 0;
          } else {
            var task = (re.data.alarmTaskNum / re.data.totalTaskNum).toFixed(2);
          }


      
      


 $('#foo1').circleProgress({
        value: link,
        size: 90,
        thickness:20,
        startAngle:-1.57,
        // lineCap:'round',
        fill: {
          gradient: [["#22d7dd", .2], ["#22d7dd", .3], ["#fb0304",.8]],
           // gradient: ["#22d7dd","#22d7dd", "#fb0304"],
            gradientAngle:-3,
            // gradientDirection: [0.5, 0,0.5,0]
            
        },
        emptyFill:'#0c4a57',

    }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('span').html(stepValue.toFixed(2) * 100 + '%');
  });


 $('#foo2').circleProgress({
        value: device,
        size: 90,
        thickness:20,
        startAngle:-1.57,
         fill: {
            gradient: [["#22d7dd", .2], ["#22d7dd", .3], ["#fb0304",.8]],
            gradientAngle:-3,
            // gradientDirection: [0.5, 0,0.5,0]
            
        },
         emptyFill:'#0c4a57',
    }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('span').html(stepValue.toFixed(2) * 100 + '%');
  });
 $('#foo3').circleProgress({
        value: task,
        size: 90,
        thickness:20,
        startAngle:-1.57,
         fill: {
            gradient: [["#22d7dd", .2], ["#22d7dd", .3], ["#fb0304",.8]],
            gradientAngle:-3,
            // gradientDirection: [0.5, 0,0.5,0]
            
        },
         emptyFill:'#0c4a57',
    }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('span').html(stepValue.toFixed(2) * 100 + '%');
  });
}

if(re.code==0&&!re.data){
   $('#foo1').circleProgress({
        value: 0,
        size: 90,
        thickness:20,
        startAngle:-1.57,
        // lineCap:'round',
        fill: {
          gradient: [["#22d7dd", .2], ["#22d7dd", .3], ["#fb0304",.8]],
           // gradient: ["#22d7dd","#22d7dd", "#fb0304"],
            gradientAngle:-1.15,
            // gradientDirection: [0.5, 0,0.5,0]
            
        },
        emptyFill:'#0c4a57',

    }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('span').html(stepValue.toFixed(2) * 100 + '%');
  });


 $('#foo2').circleProgress({
        value: 0,
        size: 90,
        thickness:20,
        startAngle:-1.57,
         fill: {
            gradient: ["#22d7dd","#22d7dd", "#fb0304"],
            gradientAngle:-1.15,
            // gradientDirection: [0.5, 0,0.5,0]
            
        },
         emptyFill:'#0c4a57',
    }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('span').html(stepValue.toFixed(2) * 100 + '%');
  });
 $('#foo3').circleProgress({
        value: 0,
        size: 90,
        thickness:20,
        startAngle:-1.57,
         fill: {
            gradient: ["#22d7dd","#5c9fa3", "#fb0304"],
            gradientAngle:-1.15,
            // gradientDirection: [0.5, 0,0.5,0]
            
        },
         emptyFill:'#0c4a57',
    }).on('circle-animation-progress', function (event, progress, stepValue) {
            $(this).find('span').html(stepValue.toFixed(2) * 100 + '%');
  });
}
 
 }
 sco.fetch("YS_objb")
// 5、获取报警排行数据 YS_objd
 sco.YS_objc.url = "index/alarmRinking";
 sco.YS_objc.params = {type:1};
 sco.nodatas =0;
 sco.YS_objc.done=function(re,sco){
  if(re.code==0){

    var b=[];

    if(re.data.rinking.length>0){
       sco.nodatas = 0;
      if (re.data.rinking[0]){re.data.rinking[0].color="#0281b6";};
       if (re.data.rinking[1]){re.data.rinking[1].color="#30c4e0";};
        if (re.data.rinking[2]){ re.data.rinking[2].color="#00b5ac";};
         if (re.data.rinking[3]){re.data.rinking[3].color="#13b697";};
      
      
     
      
      if(re.data.rinking.length>4){
          re.data.rinking[4].color="#21ce98";
      }
      
     if(JSON.stringify(re.data.nameMap)!='{}'){
      re.data.rinking.map(function(el,idx){
        // if(sco.YS_objc.params.type){}
        var sname=re.data.nameMap[el.bid].slice(0, 3)+'...'
         var name= re.data.nameMap[el.bid].length>3?sname:re.data.nameMap[el.bid]
         // if(name==undefined)
         name=name==undefined?idx:name
            b.push({
              "dataname":re.data.nameMap[el.bid],
              "country":name,
               "visits": el.alarmNum,
               "color": el.color
        })
        
         
      })
      }else{

      re.data.rinking.map(function(el,idx){
             b.push({
              
              "dataname":'数据异常',
              "country":'数据异...',
               "visits": el.alarmNum,
               "color": el.color
        })
         
      })

      }    
    }
    else{
 sco.nodatas = 1;
    }


    var chart = AmCharts.makeChart("zchart", {
    "theme": "none",
    "type": "serial",
    "startDuration": 2,
    "color":"#fff",
    "dataProvider": b,
    "startDuration":2,
    "marginTop":50,
    

    "valueAxes": [{
        "position": "left",
        "axisAlpha":0,

        "gridAlpha":0         
    }],
    // "chart":[{
    //   "color":"#fff"
    // }],
    "graphs": [{
        "balloonText": "[[dataname]]: <b>[[value]]条</b>",
        "colorField": "color",
        "fillAlphas": 0.8,
        "lineAlpha": 0,
        "type": "column",
        "columnWidth":0.5,
        "topRadius":1,
        "valueField": "visits", 
        "width":10,
       
    }],
    // "column":[{
    //     "columnwidth":0.4, 
    // }],
    "depth3D": 40,
  "angle": 20,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },  
     "customBulletField":"dataname",  
    "categoryField": "country",

    "fontSize":14,    
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha":0,
        "gridAlpha":0
        
    },

},0);

  }
 }
 sco.fetch("YS_objc")
// 6、获取报警数量统计 YS_obje
 sco.YS_objd.url = "index/alarmStatistics";
 sco.YS_objd.done = function(re,sco){
 var device = [];
 var link =[];
 var task = [];
 var data = [];
 re.data.list.map(function(el){
  device.push(el.alarmDeviceNum)
  link.push(el.alarmLinkNum)
  task.push(el.alarmTaskNum)
  data.push(YSfac.numtosecond(el.createTime).replace(/2018\-/g,'').replace(/0\:0\:0/g,''))
 })


 var myChart = echarts.init(document.getElementById('lchart'));
 var option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            show:false,
            lineStyle: {
                color: '#fff',
                opacity:0
            }
        }
    },
    grid: {
        left: '2%',
        right: '8%',
        bottom: '2%',
        top: '20%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                width:3,
                color: '#019493'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 16,
                color: '#03d6fc'
            }
        },
        axisTick: {
            show: false
        },
        data: data
    }, {
        axisPointer: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#0E2A43'
            }
        },
        axisTick: {
            show: false
        },
        show:false,
        position: 'bottom',
        offset: 0

    }],
    yAxis: [{
        type: 'value',
        
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                width:2,
                color: '#03d6fc'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 16,
                color: '#03d6fc'
            }
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    legend: {
        orient: 'vertical',
        // borderRadius:50,
        top: 20,
        right: 20,
        // data: ['任务', '设备', '线路'],
        textStyle: {
            color: '#fff ',
            fontSize: 14
        },
        // formatter(name) {
        //     return name
        // },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 25
    },



    series: [
// 任务
    {
        name: '任务',
        type: 'line',
        smooth: true,
        // stack: '总量',
        symbol: 'circle',
        symbolSize: 1,
        showSymbol: false,
        animationDelay: 2000,
        animationDuration: 1000,
        markPoint: {
            // symbol: 'image://url',
            data: [{
                type: 'max',
                name: '最大值'
            }],
            animationDelay: 3000,
            animationDuration: 1000
        },
        lineStyle: {
            normal: {
                width: 3,
                color: 'rgb(250,255,24)',
                opacity: 0.1
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(250,255,24, 0.2)'
                }, {
                    offset: 0.8,
                    color: 'rgba(250,255,24, 0.2)'
                }], false),
                // shadowColor: 'rgba(0, 0, 0, 1)',
                // shadowBlur: 1
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(176,171,14)',
                borderColor: 'rgba(250,255,34,.1)',
                borderWidth: 10

            }
        },
        // data: [48, 62, 72, 75, 68, 50, 28, 24, 30, 45, 58, 65]
        data:task
    }, 

// 设备
    {
        name: '设备',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        // stack: '总量',
        symbolSize: 1,
        animationDelay: 1000,
        animationDuration: 1000,
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }],
            animationDelay: 2000,
            animationDuration: 1000
        },
        showSymbol: false,
        lineStyle: {
            normal: {
                width: 3,
                color:'rgb(0,255,246)',
                opacity: 0.3
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 255, 246, 0.6)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 255, 246, 0.6)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(1,204,199)',
                borderColor: 'rgba(0,255,246,0.2)',
                borderWidth: 10

            }
        },
        // data:  [11, 18, 27, 39, 55,74, 80, 78, 69,53, 39, 31]
        data:device
    }, 
// 线路
    {
        name: '线路',
        type: 'line',
        // stack: '总量',
        smooth: true,
        symbol: 'circle',
        symbolSize: 1,
        showSymbol: false,
        animationDelay: 0,
        animationDuration: 1000,
        markPoint: {
            data: [{
                type: 'max',
                name: '最大值'
            }],
            animationDelay: 1000,
            animationDuration: 1000
        },
        lineStyle: {
            normal: {
                width: 3,
                color: 'rgb(0,211,255)',
                opacity: 0.8
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0,211,255, 0.7)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0,211,255, 0.7)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {

                color: 'rgb(0,211,255)',
                borderColor: 'rgba(0,211,255,0.1)',
                borderWidth: 10
            }
        },
        // data:[34, 43, 39, 25, 12, 13, 24, 40, 57, 63, 57,45]
        data:link
    }, 

 ]
};

 myChart.setOption(option);


 }
 sco.fetch("YS_objd")
// 7、获取后台数据统计 YS_objf
 sco.YS_obje.url = "index/statistics";
 sco.YS_obje.done=function(re,sco){
   if(re.code==0&&re.data){
    re.data.totalFlow=YSfac.btogb(re.data.totalFlow)
   }
 }
 sco.fetch("YS_obje")

 sco.YS_objf.url = "index/rollLog";
 sco.YS_objf.done=function(re,sco){
   if(re.code==0&&re.data){
    sco.loglength=re.data.rollLog.length>10?10:re.data.rollLog.length;

$('.scrolltext li:even').addClass('lieven');
function scroll(sco){
  $("div.scrolltext").myScroll({
    speed:50, //数值越大，速度越慢
    rowHeight:20 //li的高度
  });
};
scroll()



   }
   

 }
 sco.fetch("YS_objf")
//  sco.YS_listc.url = "alarm/device";
//  sco.YS_listc.params = {
//   currentPage:1,
//   pageSize:10,
//   startDate:YSfac.getNowFormatDate(0),
//   endDate:YSfac.getNowFormatDate(1)
// };
//  sco.YS_listc.done=function(re,sco){
//   sco.YS_lista.data.list.map(function(elem,index){

//         if(elem.topologyNodes.length>0){
//           elem.topologyNodes.map(function(e){
//             if(e.deviceStatus == 0&&re.data.nameMap[e.toDeviceId]){
//               e.deviceStatus = 2;
//             }
//           })
//         }
//   })
//  }
//  sco.fetch("YS_listc")





// setTimeout(function(){


// var link= sco.link;
// var device= sco.device;
// var task= sco.task;


// },1000)










// 线性图



var myCircle1 = Circles.create({
  id:                  'cpup',
  radius:              26,
  value:               80,
  maxValue:            100,
  width:               5,
  text:                function(value){return value + '%';},
  colors:              ['#2b374d', '#ff0200'],
  duration:            400,
  textClass:           'clt',
  styleText:           true
});
var myCircle2 = Circles.create({
  id:                  'ypp',
  radius:              26,
  value:               60,
  maxValue:            100,
  width:               5,
  text:                function(value){return value + '%';},
  colors:              ['#2b374d', '#0de1b1'],
  duration:            400,
  textClass:           'clt',
  styleText:           true
});
var myCircle3 = Circles.create({
  id:                  'ncp',
  radius:              26,
  value:               40,
  maxValue:            100,
  width:               5,
  text:                function(value){return value + '%';},
  colors:              ['#2b374d', '#0de1b1'],
  duration:            400,
  textClass:           'clt',
  styleText:           true
});

var myCircle4 = Circles.create({
  id:                  'wlp',
  radius:              26,
  value:               20,
  maxValue:            100,
  width:               5,
  text:                function(value){return value + '%';},
  colors:              ['#2b374d', '#0de1b1'],
  duration:            400,
  textClass:           'clt',
  styleText:           true
});






function dx(sco){
 var i = 1;
   setInterval(function(){
    if(i==21){i=1};
    var imgsrc0 = '../images/dz00'+ i + '.png';
    var imgsrc1 = '../images/dz01'+ i + '.png';
    var imgsrc2 = '../images/dz02'+ i + '.png';
    var imgsrc3 = '../images/dz10'+ i + '.png';
    var imgsrc4 = '../images/dz11'+ i + '.png';
    var imgsrc5 = '../images/dz12'+ i + '.png';
    var imgsrc6 = '../images/pdz'+ i + '.png';
      $('.dz00').attr("src",imgsrc0);
      $('.dz01').attr("src",imgsrc1);
      $('.dz02').attr("src",imgsrc2);
      $('.dz10').attr("src",imgsrc3);
      $('.dz11').attr("src",imgsrc4);
      $('.dz12').attr("src",imgsrc5);
      $('.pdz').attr("src",imgsrc6);
      i++
   },120)

}
dx()

// function bjxz(sco){
//  var i = 1;
//    setInterval(function(){
//     if(i==41){i=1};
//     var imgsrc = '../images/bjxz'+ i + '.png';
//       $('.kdbg').attr("src",imgsrc);
//       i++
//    },120)

// }
// // bjxz()
// function tjdx(sco){
//  var i = 0;
//    setInterval(function(){
//     if(i==33){i=1};
//     var imgsrc1 = '../images/wjj'+ i + '.png';
//     var imgsrc2 = '../images/sj'+ i + '.png';
//     var imgsrc3 = '../images/ll'+ i + '.png';
//       $('.wjimg').attr("src",imgsrc1);
//       $('.sjimg').attr("src",imgsrc2);
//       $('.llimg').attr("src",imgsrc3);
//       i++
//    },50)

// }
// tjdx()

function sbflag(sco){
  var i = 1;
  setInterval(function(){
    if(i==4){i=1};
    var imgsrc1 = '/images/sarrup'+ i + '.png';
    var imgsrc2 = '/images/sarrdown'+ i +'.png';
    $('.sarrup').attr("src",imgsrc1);
    $('.sarrdown').attr("src",imgsrc2);
    i++
  },500)
}
sbflag()





},


//链路监控模块
linkmonitor:function(sco) {},

// ssdh开关模块
sshdconf:function(sco){
  // 1获取sshd开关
  // 2设置sshd开关

  // 1获取sshd开关
  sco.YS_obja.url="config/sshd/get";
  sco.YS_obja.done=function(re,sco){
    if(re.code==0){
      if(!re.data){
        return false;
      }else{
      sco.YS_objb.params.open =JSON.parse(re.data.configData).open;
    }
    }
  }
  sco.fetch('YS_obja');

  // 2设置sshd开关
  sco.YS_objb.url="config/sshd/set";
  sco.YS_objb.params.open = '';
  sco.YS_objb.done=function(re,sco){
    if(sco.YS_objb.params.open == true){
      layer.msg('开关成功打开！');
    }else{
      layer.msg('开关成功关闭！');
    }
  }
  
},

//一键体验模块
experience:function(sco) {
  sco.templist = [];
  sco.taskarr = [];
  sco.examine = [];
  sco.nowimg = '../images/p0.png';
  sco.nowbaifen = '0%';
  sco.zzjc = 0;
  sco.linkCheck = 0;
  sco.deviceCheck = 0;
  sco.taskCheck = 0;
  sco.tapshow = 0;
  sco.qian =0;
  sco.retest = 0;
  sco.maxStep = 0;
  sco.isyj = 0;


  //获取体检id
  sco.YS_obja.url="examine/allInOne";
  sco.YS_obja.done=function(re,sco){
    if(re.code==0){
      sco.isyj = 1;
      sco.YS_objb.params.checkId = re.data.checkId;
      sco.YS_objb.params.index = 0;
      sco.examine = [];
      sco.fetch('YS_objb');
    }
  }  
  

  //获取一键体检结果
  sco.YS_objb.url="examine/checkResult";
  sco.YS_objb.done=function(re,sco){

    if(re.code==0){
      re.data.checkItems.map(function(elem){
        sco.examine.push(elem);
      });
    }
  }  



  //设备体检
  sco.YS_objc.url="examine/device";
  sco.YS_objc.done=function(re,sco){
    sco.isyj= 0;
    if(re.code==0){
      sco.tapshow = 1;
      // sco.examine = re.data.checkItems;
      sco.deviceCheck = 1;
      sco.YS_objb.params.checkId = re.data.checkId;
      sco.retest = 2;
      if(sco.YS_objb.params.index)delete sco.YS_objb.params.index;
      sco.examine = [];
      sco.fetch('YS_objb');
    }
  }  


  //链路体检
  sco.YS_objd.url="examine/link";
  sco.YS_objd.done=function(re,sco){
    sco.isyj= 0;
    if(re.code==0){
      sco.tapshow = 1;
      sco.examine = re.data.checkItems;
      sco.linkCheck = 1;
      sco.YS_objb.params.checkId = re.data.checkId;
      sco.retest = 1;
      if(sco.YS_objb.params.index)delete sco.YS_objb.params.index;
      sco.examine = [];
      sco.fetch('YS_objb');


    }
  }  


  //任务体检
  sco.YS_obje.url="examine/task";




  sco.YS_obje.done=function(re,sco){
    sco.isyj= 0;
    if(re.code==0){
      sco.tapshow = 1;
      sco.examine = re.data.checkItems;
      sco.taskCheck = 1;
      sco.YS_objb.params.checkId = re.data.checkId;
      sco.retest = 3;
      if(sco.YS_objb.params.index)delete sco.YS_objb.params.index;
      sco.examine = [];
      sco.fetch('YS_objb');
    }
  }  

  sco.YS_objf.url="user/loginUserInfo";

  //获取链路信息接口
  sco.YS_lista.url="link/queryAll";
  sco.YS_lista.done = function(re, sco) {
      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_lista');
console.log(sco.YS_lista);

  //获取设备接口
  sco.YS_listb.url="device/query8Page";
  sco.YS_listb.params = {currentPage:1,pageSize:9999};
  sco.YS_listb.done = function(re, sco) {
  }
  sco.fetch('YS_listb');

  //获取任务接口
  sco.YS_listc.url="task/queryAll";
  sco.YS_listc.params = {currentPage:1,pageSize:9999}
  sco.YS_listc.done = function(re, sco) {
          setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_listc');


  // layer.open({
  //         type: 1,
  //         title: false, //不显示标题
  //         closeBtn: 0,
  //         shadeClose:false, 
  //         shade:0.5, 
  //         area: ['auto', 'auto'], //宽高
  //         content: $('#zsk')
  //       });
  //       
  //       
  function qian(sco){
  var i = 0;
   var int = setInterval(function(){
    if(i==13){i=0};
    var imgsrc = '../images/qian'+ i + '.png';
      $('.bf-qian').attr("src",imgsrc);
      i++
   },150)
  return int;

}
  sco.qian = qian();


function spline(sco){
  var i = 1;
  var int = setInterval(function(){
    if(i==9){i=1};
    var imgsrc = '../images/spline'+ i + '.png';
      $('.spline').attr("src",imgsrc);
      i++
   },120)
  return int;
}
sco.spline = spline

function xping(sco){
  var i = 1;
  var int = setInterval(function(){
    if(i==26){i=1};
    var imgsrc = '../images/xp'+ i + '.png';
      $('.xping').attr("src",imgsrc);
      i++
   },120)
  return int;
}
  sco.xping = xping()
},

// 任务监控模块
taskmonitor:function(sco) {
  sco.tapshow=0;
  sco.alarmlevel=["系统不可用","必须马上采取行动的事件","关键的事件","错误事件","警告事件"," 普通但重要的事件","有用的信息","调试信息"]
  // 1.获取数据交互数据
  // 2.获取数据导入数据


  // 1.获取数据交互数据
  sco.YS_plista.url="/task/monitor";



  sco.YS_plista.done = function(re, sco) {
  };


  // 2.获取链路名称
  sco.YS_lista.url="link/queryAll";
  sco.YS_lista.done = function(re, sco) {
    if (re.code==0) {
          sco.YS_plista.params.linkId = re.data.list[0].linkId;
            sco.fetch('YS_plista');
    }
      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_lista');

},

//连接报警模块
linkalarm:function(sco) {
  sco.uid=YSfac.getstore("uid");
  sco.alarmtype='';
  sco.tapshow=0;
  sco.haszan = 0;
  sco.paged=false;
  sco.alarmlevel=["系统不可用","必须马上采取行动的事件","关键的事件","错误事件","警告事件"," 普通但重要的事件","有用的信息","调试信息"]
  // 1.链接报警列表
  // 2.搜索连接报警

  // 1.链接报警列表
  sco.YS_plista.url="alarm/link";
  sco.YS_plista.method="POST";
  sco.YS_plista.before=function(sco){
  // if(!sco.YS_plista.params.name&&!sco.YS_plista.params.type&&!sco.YS_plista.params.key&&!sco.YS_plista.params.startDate&&!sco.YS_plista.params.endDate){
  //     layer.msg("搜索条件不能为空！");return false
  //   };
   YSfac.load2(1,"加载中...");
  }
  sco.YS_plista.done = function(re,sco){
    if(re.code==0){
      layer.closeAll();
        re.data.list.map(function(el){
        var time =   YSfac.numtosecond(el.createTime);
        el.createTime =time;
        el.name=re.data.nameMap[el.bid];
            sco.newList.map(function(elem) {
              if (el.type == elem.type) {
                el.typename = elem.name;
              } else {
                return;
              }
            });
         
            
      })
      }

      sco.YS_plista.data = re.data
    }



  // 获取链路信息
  sco.YS_lista.url="link/queryAll";

  sco.YS_lista.done = function(re, sco) {
      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_lista');


    // 获取报警类型
    sco.YS_listb.url="alarm/getAllAlarmType";
    sco.YS_listb.method="POST"; 
    sco.YS_listb.done = function(re, sco) {
    sco.newList = [];
re.data.list.forEach(function(v,k){ 
        for (var v2 in v) {
          if( v.hasOwnProperty( v2 ) ) {          
           var o = {type:v2,name:v[v2]}
           sco.newList.push(o)
          } 
        }
 })




  sco.fetch('YS_plista');


      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_listb');




 sco.YS_plistb.url="knowledge/query8AlarmType";
 sco.YS_plistb.method="POST";
 sco.YS_plistb.params={currentPage:1,pageSize:3};
 sco.YS_plistb.done=function(re,sco){
   if(re.code==0&&re.data.list.length>0){
    if(re.data.total>4){sco.paged=true};
      sco.jylist=re.data.list

   }
  }

 sco.YS_obja.url="knowledge/insert";
 sco.YS_obja.method="POST";
 sco.YS_obja.done=function(re,sco){
  if(re.code==0){
    layer.msg("新增成功！")
  }else{
    layer.msg("新增失败！")
  }
 }
 sco.YS_objb.url="knowledge/up";




},
//设备报警模块
equipalarm:function(sco) {
  sco.haszan = 0;
  sco.uid=YSfac.getstore("uid");
  sco.alarmtype='';
  sco.tapshow=0;
  sco.paged=false;
  sco.alarmlevel=["系统不可用","必须马上采取行动的事件","关键的事件","错误事件","警告事件"," 普通但重要的事件","有用的信息","调试信息"]
  
  // 1.设备报警列表
  // 2.搜索设备报警
  
  

  sco.currentDeviceId = YSfac.getstore('currentDeviceId');
  sco.currentLevel = YSfac.getstore('currentLevel');




  // 1.设备报警列表
  sco.YS_plista.url="alarm/device";
    sco.YS_plista.before=function(sco){
  // if(!sco.YS_plista.params.name&&!sco.YS_plista.params.type&&!sco.YS_plista.params.key&&!sco.YS_plista.params.startDate&&!sco.YS_plista.params.endDate){
  //     layer.msg("搜索条件不能为空！");return false
  //   };
    sco.currentDeviceId?sco.YS_plista.params.bid = sco.currentDeviceId:"";
    sco.currentLevel?sco.YS_plista.params.level = sco.currentLevel:"";
  }
  sco.YS_plista.done = function(re,sco){
    if(re.code==0){
        YSfac.setstore('currentDeviceId',"");
        YSfac.setstore('currentLevel',"");
        sco.currentDeviceId = "";
        sco.currentLevel = "";
        re.data.list.map(function(el){
        var time =   YSfac.numtosecond(el.createTime);
        el.createTime =time;
        el.name=re.data.nameMap[el.bid];
        sco.newList.map(function(elem) {
              if (el.type == elem.type) {
                el.typename = elem.name;
              } else {
                return;
              }
            });
      })
      sco.YS_plista.data = re.data;
            setTimeout(function(){
           layui.use('form', function(){
             layui.form.render();
        }); 
      },500)

    }
  }


  // 获取设备信息
 sco.YS_listb.url="device/query8Page";
  sco.YS_listb.params ={currentPage:1,pageSize:9999};
  
  sco.YS_listb.done =function(re, sco) {
      setTimeout(function(){
           layui.use('form', function(){
             layui.form.render();
        }); 
      },500)
  }
  
  sco.fetch('YS_listb');



    sco.YS_listc.url="alarm/getAllAlarmType";
    sco.YS_listc.method="POST"; 
    sco.YS_listc.done = function(re, sco) {
    sco.newList = [];
re.data.list.forEach(function(v,k){ 
        for (var v2 in v) {
          if( v.hasOwnProperty( v2 ) ) {          
           var o = {type:v2,name:v[v2]}
           sco.newList.push(o)
          } 
        }
 })


  sco.fetch('YS_plista');
      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_listc');




















 sco.YS_plistb.url="knowledge/query8AlarmType";
 sco.YS_plistb.method="POST";
 sco.YS_plistb.params={currentPage:1,pageSize:9999};
 sco.YS_plistb.done=function(re,sco){
   if(re.code==0&&re.data.list.length>0){
    if(re.data.total>4){sco.paged=true};
      sco.jylist=re.data.list
   }
  }

 sco.YS_obja.url="knowledge/insert";
 sco.YS_obja.method="POST";
 sco.YS_obja.done=function(re,sco){
  if(re.code==0){
    layer.msg("新增成功！")
  }else{
    layer.msg("新增失败！")
  }
 }
 sco.YS_objb.url="knowledge/up";


   
},

// 任务报警模块
taskalarm:function(sco) {
  sco.uid=YSfac.getstore("uid");
  sco.haszan = 0;
  sco.alarmtype='';
  sco.paged=false;
    // 1.任务报警列表
  // 2.搜索任务报警
  sco.tapshow=0;
  sco.currentData = YSfac.getstore('currentData');
  sco.currentTaskId = "";
  sco.currentLevel = "";
  if(sco.currentData){
    sco.currentTaskId = sco.currentData.taskId;
    sco.currentLevel = sco.currentData.level;
  }



  // 1.任务报警列表
  sco.YS_plista.url="alarm/task";
  sco.YS_plista.before = function(sco){
    if(sco.currentData){
      sco.YS_plista.params.bid = sco.currentData.taskId;
      sco.YS_plista.params.level = sco.currentData.level;
    }
  }
  sco.YS_plista.done = function(re,sco){
    YSfac.setstore('currentData',"");
    sco.currentData = "";
    if(re.code==0){
        re.data.list.map(function(el){
        var time =   YSfac.numtosecond(el.createTime);
        el.createTime =time;
        el.name=re.data.nameMap[el.bid]
sco.newList.map(function(elem) {
              if (el.type == elem.type) {
                el.typename = elem.name;
              } else {
                return;
              }
            });

      })
      sco.YS_plista.data = re.data
    }
  }

  

 // 获取任务列表
  sco.YS_listc.url="task/queryAll";
  sco.YS_listc.done = function(re, sco) {
    console.log(sco.currentData);
      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_listc');


 sco.YS_plistb.url="knowledge/query8AlarmType";
 sco.YS_plistb.method="POST";
 sco.YS_plistb.params={currentPage:1,pageSize:9999};
 sco.YS_plistb.done=function(re,sco){
   if(re.code==0&&re.data.list.length>0){
    if(re.data.total>4){sco.paged=true};
      sco.jylist=re.data.list
   }
  }


    sco.YS_listb.url="alarm/getAllAlarmType";
    sco.YS_listb.method="POST"; 
    sco.YS_listb.done = function(re, sco) {
    sco.newList = [];
re.data.list.forEach(function(v,k){ 
        for (var v2 in v) {
          if( v.hasOwnProperty( v2 ) ) {          
           var o = {type:v2,name:v[v2]}
           sco.newList.push(o)
          } 
        }
 })


  sco.fetch('YS_plista');
      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_listb');








 sco.YS_obja.url="knowledge/insert";
 sco.YS_obja.method="POST";
 sco.YS_obja.done=function(re,sco){
  if(re.code==0){
    layer.msg("新增成功！")
  }else{
    layer.msg("新增失败！")
  }
 }
 sco.YS_objb.url="knowledge/up";


  // sco.YS_obja.before=function(sco){
  //   if(!sco.YS_obja.params.name&&!sco.YS_obja.params.jibie&&!sco.YS_obja.params.type&&!sco.YS_obja.params.key&&!sco.YS_obja.params.bgtime&&!sco.YS_obja.params.edtime){
  //     layer.msg("搜索条件不能为空！");return false
  //   };
   
},
//报警配置模块
alarmconf:function(sco) {
  sco.dxbj=1;
  sco.yjbj=1;
  sco.YS_obja.url="config/alarm/set";
  // sco.YS_obja.method="POST";
  sco.YS_obja.before=function(sco){
    if(!sco.YS_obja.params.baseConfig.alarmtime){layer.tips("请输入报警间隔时间！","#alarmtime",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!(/^\+?[1-9][0-9]*$/).test(sco.YS_obja.params.baseConfig.alarmtime)){layer.tips("请输入正确的报警间隔时间！","#alarmtime",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!sco.YS_obja.params.baseConfig.maxnum){layer.tips("请输入报警最大条数！","#maxnum",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!(/^\+?[1-9][0-9]*$/).test(sco.YS_obja.params.baseConfig.maxnum)){layer.tips("请输入合法的报警最大条数！","#maxnum",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!sco.YS_obja.params.baseConfig.timeStart){layer.tips("设置开始登录时段！","#timeStart",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!sco.YS_obja.params.baseConfig.timeEnd){layer.tips("请设置结束登录时段！","#timeEnd",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(sco.dxbj==1){
      if(!sco.YS_obja.params.smsConfig.fwzxhm){layer.tips("请输入服务中心号码！","#fwzxhm",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
      if(!sco.YS_obja.params.smsConfig.fstel){layer.tips("请输入接收手机号码！","#fstel",{tips: [3, 'rgba(0,0,0,.8)','']});return false}
      if(!(/^1[34578]\d{9}$/.test(sco.YS_obja.params.smsConfig.fstel))&&!(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(sco.YS_obja.params.smsConfig.fstel))){layer.tips("请输入正确的手机号码！","#fstel",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  
    }
    if(sco.yjbj==1){
      if(!sco.YS_obja.params.emailConfig.fwmaildz){layer.tips("请输入邮件服务器地址！","#fwmaildz",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
      if(!sco.YS_obja.params.emailConfig.ports){layer.tips("请输入端口！","#ports",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
      if(!sco.YS_obja.params.emailConfig.emailbj){layer.tips("请输入邮箱地址！","#emailbj",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
      if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(sco.YS_obja.params.emailConfig.emailbj))){layer.tips("请输入合法的邮箱地址！","#emailbj",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
      if(!sco.YS_obja.params.emailConfig.alarmuser){layer.tips("请输入用户名！","#alarmuser",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
      if(!sco.YS_obja.params.emailConfig.alarpwd){layer.tips("请输入密码！","#alarpwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
      if(!sco.YS_obja.params.emailConfig.bjtitle){layer.tips("请输入报警标题！","#bjtitle",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    }
  //   var baseConfig = {
  //     alarmtime:sco.YS_obja.params.baseConfig.alarmtime,
  //     maxnum:sco.YS_obja.params.baseConfig.maxnum,
  //     timeStart:sco.YS_obja.params.baseConfig.timeStart,
  //     timeEnd:sco.YS_obja.params.baseConfig.timeEnd
  //   }
  //   var smsConfig ={
  //     fwzxhm:sco.YS_obja.params.smsConfig.fwzxhm,
  //     fstel:sco.YS_obja.params.smsConfig.fstel
  //   }
  //   var emailConfig ={
  //     fwmaildz:sco.YS_obja.params.emailConfig.fwmaildz,
  //     ports:sco.YS_obja.params.emailConfig.ports,
  //     emailbj:sco.YS_obja.params.emailConfig.emailbj,
  //     alarmuser:sco.YS_obja.params.emailConfig.alarmuser,
  //     alarpwd:sco.YS_obja.params.emailConfig.alarpwd,
  //     bjtitle:sco.YS_obja.params.emailConfig.bjtitle

  //   }
  //   sco.YS_obja.params.baseConfing=JSON.stringify(baseConfig);
  //   sco.YS_obja.params.smsConfig=JSON.stringify(smsConfig);
  //   sco.YS_obja.params.emailConfig=JSON.stringify(emailConfig)
  //   // if(!sco.YS_obja.params.alarmlevej && !sco.YS_obja.params.alarmlevec){layer.tips("请选择报警级别","#check1",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  //   // if(!sco.YS_obja.params.alarmwayd && !sco.YS_obja.params.alarmwayy){layer.tips("请选择接收报警方式","#dxswitch",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  //   // if(!sco.YS_obja.params.fwcenter){layer.tips("请输入服务中心号","#fwcenter",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  //   // if(!sco.YS_obja.params.phone){layer.tips("请输入手机号码！","#phone",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
  //   // if(!(/^1[34578]\d{9}$/.test(sco.YS_obja.params.phone))&&!(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(sco.YS_obja.params.phone))){layer.tips("请输入正确的手机号码！","#phone",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  // delete sco.YS_obja.params.baseConfig.alarmtime;
  // delete sco.YS_obja.params.baseConfig.maxnum;
  // delete sco.YS_obja.params.baseConfig.timeStart;
  // delete sco.YS_obja.params.baseConfig.timeEnd;
  // delete sco.YS_obja.params.smsConfig.fwzxhm;
  // delete sco.YS_obja.params.smsConfig.fstel;
  // delete sco.YS_obja.params.emailConfig.fwmaildz;
  // delete sco.YS_obja.params.emailConfig.ports;
  // delete sco.YS_obja.params.emailConfig.emailbj;
  // delete sco.YS_obja.params.emailConfig.alarmuser;
  // delete sco.YS_obja.params.emailConfig.alarpwd;
  // delete sco.YS_obja.params.emailConfig.bjtitle;
  }
  sco.YS_obja.done=function(re,sco){
    if(re.code==0){
re.msg?layer.msg(re.msg):layer.msg('配置成功！');
  }else{
re.msg?layer.msg(re.msg):layer.msg('配置失败！');
    }
  }  



  sco.YS_objb.url="config/alarm/get";
  sco.YS_objb.done=function(re,sco){
    if(re.code==0){

     var data = JSON.parse(re.data.configData);

     sco.YS_obja.params.baseConfig=data.baseConfig;
     sco.YS_obja.params.smsConfig=data.smsConfig;
     sco.YS_obja.params.emailConfig=data.emailConfig;
     if(!sco.YS_obja.params.smsConfig.isOpen){
      sco.dxbj=0
     }else{
      sco.YS_obja.params.smsConfig=data.smsConfig;
     }
     if(!sco.YS_obja.params.emailConfig.isOpen){
      sco.yjbj=0
    }else{
      sco.YS_obja.params.emailConfig=data.emailConfig;
    }
     

     
    }
    
  }
  sco.fetch("YS_objb")

},
//任务执行统计模块
tasksta:function(sco) {
   // 1.任务统计列表
  // 2.搜索任务
  sco.todates = '';
  sco.tapshow=0;

  // 1.设备列表
  sco.YS_plista.url="/analysis/task";

  sco.YS_plista.done = function(re, sco) {
    if (re.code==0) {
      re.data.list.map(function(el){
        var time =   YSfac.numtosecond(el.createTime);
        el.createTime =time;
      })
       sco.YS_objb.params.linkId = sco.YS_plista.params.linkId;
        if (sco.YS_plista.params.startDate) { sco.YS_objb.params.startDate =sco.YS_plista.params.startDate ;} 
        if (sco.YS_plista.params.endDate) { sco.YS_objb.params.endDate =sco.YS_plista.params.endDate ;} 
       sco.fetch("YS_objb");
             setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
    }
  }

sco.istb=0;
sco.isgb=0;
sco.ismb=0;
sco.isb=0;
sco.istb2=0;
sco.isgb2=0;
sco.ismb2=0;
sco.isb2=0;


  // 查询任务统计总计 
   sco.YS_objb.url="analysis/taskCount";
   sco.YS_objb.done = function(re,sco){
      if(re.code==0){

     //小于 1M 显示B
    if (re.data.sum.successFlow<1048576){
          sco.isb=1;
        }
//大于1M 小于1G  显示M
      if (re.data.sum.successFlow>1048576&&re.data.sum.successFlow<1073741824)
        {
          re.data.sum.successFlow = YSfac.btomb(re.data.sum.successFlow);
          sco.ismb=1;
        }
//大于1G 显示G
        if (re.data.sum.successFlow>1073741824&&re.data.sum.successFlow<1099511627776) {
          re.data.sum.successFlow = YSfac.btogb(re.data.sum.successFlow);
           sco.isgb=1;
        }
//大于1T 显示T
        if (re.data.sum.successFlow>1099511627776) {
          re.data.sum.successFlow = YSfac.btotb(re.data.sum.successFlow);
           sco.istb=1;
        }


//
      if (re.data.sum.errorFlow<1048576){
          sco.isb2=1;
        }
              if (re.data.sum.errorFlow>1048576&&re.data.sum.errorFlow<1073741824){
          re.data.sum.errorFlow = YSfac.btomb(re.data.sum.errorFlow);
          sco.ismb2=1;
        }

        if (re.data.sum.errorFlow>1073741824&&re.data.sum.errorFlow<1099511627776) {
          re.data.sum.errorFlow = YSfac.btogb(re.data.sum.errorFlow);
           sco.isgb2=1;
        }

        if (re.data.sum.errorFlow>1099511627776) {
          re.data.sum.errorFlow = YSfac.btotb(re.data.sum.errorFlow);
           sco.istb2=1;
        }




        
      }
    }


  // 获取链路信息
  sco.YS_lista.url="link/queryAll";
  sco.YS_lista.done = function(re, sco) {
      sco.fetch('YS_plista');
        
    sco.YS_plista.params.linkId = re.data.list[0].linkId;
    

      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_lista');



   
},

//设备运行统计模块
equipsta:function(sco) {
   // 1.设备统计列表
  // 2.搜索设备
  sco.tapshow=0;

  // 获取链路信息
  sco.YS_lista.url="link/queryAll";
  sco.YS_lista.done = function(re, sco) {
    sco.fetch('YS_plista');
        
    sco.YS_plista.params.linkId = re.data.list[0].linkId;
    

      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_lista');

sco.todates='';
  // 1.设备日志列表
  sco.YS_plista.url="/analysis/device";

  sco.YS_plista.done = function(re, sco) {
           sco.YS_objb.params.linkId = sco.YS_plista.params.linkId;
        if (sco.YS_plista.params.startDate) { sco.YS_objb.params.startDate =sco.YS_plista.params.startDate ;} 
        if (sco.YS_plista.params.endDate) { sco.YS_objb.params.endDate =sco.YS_plista.params.endDate ;} 

       sco.fetch("YS_objb");
    if (re.code==0) {

      re.data.list.map(function(el){
           re.data.list.map(function(el){
    
           el.name=re.data.nameMap[el.bid]
      })
    
      })
              setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)



    }
  }


  // sco.YS_listb.url="device/query8Page";
  // sco.YS_listb.params = {currentPage:1,pageSize:9999};
  // sco.YS_listb.done = function(re, sco) {
  //     sco.fetch('YS_plista');

  // }







  // 查询设备运行统计
   sco.YS_objb.url="analysis/deviceCount";

   sco.YS_objb.done = function(re,sco){
      if(re.code==0){
      
      }
    }



},

//设备日志模块
equiplog:function(sco) {
  sco.alarmlevel=["系统不可用","必须马上采取行动的事件","关键的事件","错误事件","警告事件"," 普通但重要的事件","有用的信息","调试信息"]
  // 1.设备日志列表
  // 2.搜索设备日志
  
  sco.tapshow-0;
  // 1.设备日志列表
  sco.YS_plista.url="log/device";
   sco.YS_plista.done=function(re,sco){
    if(re.code == 0){
            setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
      re.data.list.map(function(el){
        var time =   YSfac.numtosecond(el.createTime);
        // time = YSfac.numtosecond(time);
        // time.toLocaleDateString().replace(/\//g, "-") + " " + time.toTimeString().substr(0, 8)
        el.createTime =time;//time
        el.deviceName=re.data.ipMap[el.host].deviceName;
        el.id=re.data.ipMap[el.host].deviceId;
        el.deviceType=re.data.ipMap[el.host].deviceType;
        
      })
      sco.YS_plista.data = re.data
    }
  }



  sco.YS_listb.url="device/query8Page";
  sco.YS_listb.params = {currentPage:1,pageSize:9999};
  sco.YS_listb.done = function(re, sco) {
      sco.fetch('YS_plista');
    sco.YS_plista.params.deviceId = re.data.list[0].deviceId;
      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_listb');


    // if(!sco.YS_obja.params.name&&!sco.YS_obja.params.jibie&&!sco.YS_obja.params.type&&!sco.YS_obja.params.key&&!sco.YS_obja.params.bgtime&&!sco.YS_obja.params.edtime){
    //   layer.msg("搜索条件不能为空！");return false
    // };

    
},

//业务日志模块
businesslog:function(sco) {
  // 1.设备日志列表
  // 2.搜索设备日志
  

  // 1.设备日志列表
  sco.YS_plista.url="/businesslog/businesslog";
  sco.YS_plista.done=function(re,sco){
    if(re.code == 0){
      re.data.list.map(function(el){
        var time =  el.createTime;
        time = YSfac.numtosecond(time);
        el.createTime = time
      })
      sco.YS_plista.data = re.data
    }
  }

  sco.fetch('YS_plista');



    // if(!sco.YS_obja.params.name&&!sco.YS_obja.params.jibie&&!sco.YS_obja.params.type&&!sco.YS_obja.params.key&&!sco.YS_obja.params.bgtime&&!sco.YS_obja.params.edtime){
    //   layer.msg("搜索条件不能为空！");return false
    // };
},

//用户日志模块
userlog:function(sco) {
  // 1.设备日志列表
  // 2.搜索设备日志
  
  sco.tapshow=0;
  // 1.设备日志列表
  sco.YS_plista.url="log/user";

  sco.YS_plista.done=function(re,sco){
    if(re.code == 0){
      re.data.list.map(function(el){
        var time =  el.createTime;
        time = YSfac.numtosecond(time);
        el.createTime = time;
        el.name=re.data.nameMap[el.uid]
      })
      sco.YS_plista.data = re.data
    }
  }
  sco.fetch('YS_plista');


  sco.YS_listb.url="user/queryAll";
  sco.YS_listb.params = {currentPage:1,pageSize:9999};
  sco.YS_listb.done = function(re, sco) {
      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_listb');

 
},
 
// 体验日志模块
explog:function(sco) { 
  sco.exptype=["","系统一键自检","设备体检","任务体检","链体检路","本系统环境自检"]
  // 1.设备日志列表
  // 2.搜索设备日志

  sco.tapshow = 0;
  // 1.设备日志列表
  sco.YS_plista.url="log/detection";
   sco.YS_plista.done=function(re,sco){
    console.log(re);
    if(re.code == 0){
      re.data.list.map(function(el){
        var time =  el.createTime;
        time = YSfac.numtosecond(time);
        el.createTime = time;

        el.name = re.data.nameMap[el.uid];

      })
      sco.YS_plista.data = re.data
    }
  }
  sco.fetch('YS_plista');


  
  sco.YS_listb.url="user/queryAll";
  sco.YS_listb.params = {currentPage:1,pageSize:9999};
  sco.YS_listb.done = function(re, sco) {

      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },500)
  }
  sco.fetch('YS_listb');


},

//设备管理模块
equipadmin:function(sco) {
  sco.deviceServiceList =[];
  sco.tapshow=0;
  sco.countnum=0;
  console.log(111);
  debugger;
  sco.iconlist=[
   {id:1,name:"GAP",status:1},{id:2,name:"路由器",status:1},{id:3,name:"防火墙",status:1},{id:4,name:"IPS",status:1},{id:5,name:"可信任安全网关",status:1},{id:6,name:"交换器",status:1},{id:7,name:"安管隔离网闸",status:1},{id:8,name:"编码器",status:1},{id:9,name:"FGAP",status:1},{id:10,name:"光交换",status:2}
  ,{id:11,name:"矩阵抽象",status:2},{id:12,name:"摄像头",status:2},{id:13,name:"3AS",status:2},{id:14,name:"ADS",status:2},{id:15,name:"AS",status:2},{id:16,name:"ASM",status:2},{id:17,name:"AWS",status:2},{id:18,name:"DTI",status:2},{id:19,name:"EWP",status:3},{id:20,name:"IWP",status:3}
  ,{id:21,name:"MOC",status:3},{id:22,name:"PAS",status:3},{id:23,name:"SS",status:3},{id:24,name:"SSE",status:3},{id:25,name:"TAS",status:3},{id:26,name:"TMS",status:3},{id:27,name:"UAS",status:3},{id:28,name:"UMS",status:4},{id:29,name:"TZ",status:4},{id:30,name:"存储陈列",status:4}
  ,{id:31,name:"磁盘陈列",status:4},{id:32,name:"摄像头",status:4},{id:33,name:"服务器",status:4},{id:34,name:"矩阵",status:4},{id:35,name:"内网管理员",status:4},{id:36,name:"入侵ids",status:4},{id:37,name:"摄像头2",status:5},{id:38,name:"数据库",status:5},{id:39,name:"云控制台",status:5},{id:40,name:"终端",status:5}
  ,{id:41,name:"主机ids",status:5},{id:42,name:"政党军机构",status:5},{id:43,name:"公安驻地外",status:5},{id:44,name:"海关",status:5},{id:45,name:"民政机构",status:5},{id:46,name:"内网",status:6},{id:47,name:"社保机构",status:6},{id:48,name:"社会企事业单位",status:6},{id:49,name:"视频内网",status:6},{id:50,name:"视频终端",status:6}
  ,{id:51,name:"外部接入单位",status:6},{id:52,name:"外网",status:6},{id:53,name:"操作台",status:6},{id:60,name:"文件夹",status:6}];
  sco.devicetype=["","文件","探针","防火墙","可信边界安全网关","入侵检测系统","安全隔离网闸","网络防毒设备","入侵防御系统","集控系统","路由器","交换机","web应用防火墙","安全单向隔离光闸","导入前置机","导入服务器","FTP库服务器","数据库服务器","信任端数据交换系统","非信任端数据交换系统","视频接入认证服务器","视频用户认证服务器","终端","其他类型服务器","视频平台服务器","IP音视频终端","应用服务器","其他终端设备"];
  sco.area=["","路由接入区","边界保护区","应用服务器","安全隔离区","安全检测与管理区"]
  // 1.设备列表
  // 2.添加设备
  // 3.编辑设备
  

  // 1.设备列表
  sco.YS_plista.url="device/query8Page";

  sco.YS_plista.method='POST';
  sco.YS_plista.done= function(re,sco){
   if(re.code==0){
     sco.YS_plista.data=re.data
   }
  
  }
  sco.fetch('YS_plista');
  
  // 2.添加设备
  sco.YS_obja.url="device/insert";
  sco.YS_obja.method='POST';
  sco.YS_obja.params={deviceName:"",area:"",netArea:"",icon:"",deviceType:"",ip:"",deviceServiceList:[]}
  sco.YS_obja.before= function(sco){
    // sco.YS_obja.params.icon = "1123";
    if(!sco.YS_obja.params.deviceName){
      layer.tips("请输入设备名称！","#name",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };
    if(!sco.YS_obja.params.deviceType){
      layer.tips("请选择设备类型！","#type",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };
    if(!sco.YS_obja.params.area){
      layer.tips("请选择所属区域！","#area",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };
    if(!sco.YS_obja.params.netArea){
     layer.tips("请选择所属网络！","#net",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };
     if(!sco.YS_obja.params.ip){
     layer.tips("请输入IP地址！","#ip",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };
    if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_obja.params.ip)){layer.tips("请输入合法的IP地址！","#ip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
 


    
    if(sco.deviceServiceList){
      sco.deviceServiceList.map(function(elem,index){
        sco.YS_obja.params['deviceServiceList['+index+'].serviceName'] = elem.serviceName;
        sco.YS_obja.params['deviceServiceList['+index+'].serviceType'] = elem.serviceType;
        sco.YS_obja.params['deviceServiceList['+index+'].ip'] = elem.ip;

        sco.YS_obja.params['deviceServiceList['+index+'].configDataStr'] = JSON.stringify(elem.configData);
        // sco.YS_obja.params['deviceServiceList['+index+'].configData.name'] = elem.configData.name;
        // sco.YS_obja.params['deviceServiceList['+index+'].configData.pwd'] = elem.configData.pwd;
        // sco.YS_obja.params['deviceServiceList['+index+'].configData.port'] = elem.configData.port;
        // sco.YS_obja.params['deviceServiceList['+index+'].configData.rootPath'] = elem.configData.rootPath;
        // sco.YS_obja.params['deviceServiceList['+index+'].configData.community'] = elem.configData.community;
        // sco.YS_obja.params['deviceServiceList['+index+'].configData.version'] = elem.configData.version;

      })
      
    }else{
      delete sco.YS_obja.params.deviceServiceList;
    }


    // delete sco.YS_obja.params.deviceServiceList;
    // sco.YS_obja.params.deviceServiceList = [];
  }
  sco.YS_obja.done= function(re,sco){
    if(re.code==0){
 // re.msg?layer.msg(re.msg):layer.msg("添加成功！");
    re.msg?YSfac.load(1,re.msg):YSfac.load(1,"添加成功");
      setTimeout(function(){location.reload()},1000)

        sco.fetch('YS_plista')
        sco.YS_obja.params={};
   
      
    }else{
  //re.msg?layer.msg(re.msg):layer.msg("添加失败！");
  re.msg?YSfac.load(1,re.msg):YSfac.load(1,"添加失败");
    }
  }
  // 3.编辑设备
  sco.YS_objb.url="device/update";
  sco.YS_objb.params={deviceName:"",area:"",netArea:"",icon:"",deviceType:"",ip:"",deviceServiceList:[]};
  sco.YS_objb.method='POST';
  sco.YS_objb.before= function(sco){
 
    
    if(sco.deviceServiceList){
      sco.deviceServiceList.map(function(elem,index){
        sco.YS_objb.params['deviceServiceList['+index+'].serviceName'] = elem.serviceName;
        sco.YS_objb.params['deviceServiceList['+index+'].serviceType'] = elem.serviceType;
        sco.YS_objb.params['deviceServiceList['+index+'].ip'] = elem.ip;


        sco.YS_objb.params['deviceServiceList['+index+'].configDataStr'] = JSON.stringify(elem.configData);

        // sco.YS_objb.params['deviceServiceList['+index+'].configData.name'] = elem.configData.name;
        // sco.YS_objb.params['deviceServiceList['+index+'].configData.pwd'] = elem.configData.pwd;
        // sco.YS_objb.params['deviceServiceList['+index+'].configData.port'] = elem.configData.port;
        // sco.YS_objb.params['deviceServiceList['+index+'].configData.rootPath'] = elem.configData.rootPath;
        // sco.YS_objb.params['deviceServiceList['+index+'].configData.community'] = elem.configData.community;
        // sco.YS_objb.params['deviceServiceList['+index+'].configData.version'] = elem.configData.version;

      })
      
    }


    delete sco.YS_objb.params.deviceServiceList;
      }
  sco.YS_objb.done= function(re,sco){
    if(re.code==0){
          re.msg?YSfac.load(1,re.msg):YSfac.load(1,"保存成功");
      setTimeout(function(){
        sco.tapshow=0;
        sco.fetch('YS_plista')
      },1000)
      
    }else{
 re.msg?YSfac.load(1,re.msg):YSfac.load(1,"保存失败");
    }
  }

  // 4.删除设备
  sco.YS_objc.url="device/delete";
  sco.YS_objc.done= function(re,sco){
    if(re.code==0){
      layer.closeAll();
      layer.msg("删除成功！");
      
      setTimeout(function(){
        location.reload();
        // layer.closeAll();
        // sco.fetch('YS_plista')
      },1000)
      
    }else{
      layer.msg("删除失败！");
    }
  }



  // 5查询设备消耗资源
  sco.YS_objd.url="device/queryExplorer";
  sco.YS_objd.params={deviceId:""}
  sco.YS_objd.done=function(re,sco){
    if(re.code==0&&re.data&&re.data['deviceExplorer']){
  var cpu = re.data.deviceExplorer.cpu.useRateStr;
  var disk = re.data.deviceExplorer.disk.useRateStr;
  var mem = re.data.deviceExplorer.mem.useRateStr;
  var ecpu = "ecpu" + sco.YS_objd.params.deviceId;
  var eyp = "eyp" + sco.YS_objd.params.deviceId;
  var enc = "enc" + sco.YS_objd.params.deviceId;
  cpu = Number(cpu.replace(/\%/g,''));
  disk = Number(disk.replace(/\%/g,''));
  mem = Number(mem.replace(/\%/g,''))
  
         var myCircle1 = Circles.create({
  id:                  ecpu,
  radius:              32,
  value:               cpu,
  maxValue:            100,
  width:               6,
  text:                function(value){return value + '%' + "<br>cpu";},
  colors:              ['#868db6', '#ffb71a'],
  duration:            400,
  textClass:           'clt',
  styleText:           true
});
  var myCircle2 = Circles.create({
  id:                  eyp,
  radius:              32,
  value:               disk,
  maxValue:            100,
  width:               6,
  text:                function(value){return value + '%' + "<br>硬盘";},
  colors:              ['#868db6', '#ffb71a'],
  duration:            400,
  textClass:           'clt',
  styleText:           true
});
  var myCircle3 = Circles.create({
  id:                  enc,
  radius:              32,
  value:               mem,
  maxValue:            100,
  width:               6,
  text:                function(value){return value + '%' + "<br>内存";},
  colors:              ['#868db6', '#ffb71a'],
  duration:            400,
  textClass:           'clt',
  styleText:           true
});
//   var myCircle4 = Circles.create({
//   id:                  'ewl',
//   radius:              32,
//   value:               10,
//   maxValue:            100,
//   width:               6,
//   text:                function(value){return value + '%' + "<br>网络";},
//   colors:              ['#868db6', '#ffb71a'],
//   duration:            400,
//   textClass:           'clt',
//   styleText:           true
// });
    }
    if(re.code==0&&!re.data){

      var ecpu = "ecpu"+ sco.YS_objd.params.deviceId;
      var eyp = "eyp" +sco.YS_objd.params.deviceId;
      var enc = "enc" +sco.YS_objd.params.deviceId;
            var myCircle1 = Circles.create({
  id:                  ecpu,
  radius:              32,
  value:               0,
  maxValue:            100,
  width:               6,
  text:                function(value){return "cpu";},
  colors:              ['#868db6', '#ffb71a'],
  duration:            400,
  textClass:           'clt2',
  styleText:           true
});
  var myCircle2 = Circles.create({
  id:                  eyp,
  radius:              32,
  value:               0,
  maxValue:            100,
  width:               6,
  text:                function(value){return "硬盘";},
  colors:              ['#868db6', '#ffb71a'],
  duration:            400,
  textClass:           'clt2',
  styleText:           true
});
  var myCircle3 = Circles.create({
  id:                  enc,
  radius:              32,
  value:               0,
  maxValue:            100,
  width:               6,
  text:                function(value){return "内存";},
  colors:              ['#868db6', '#ffb71a'],
  duration:            400,
  textClass:           'clt2',
  styleText:           true
});

    }
  }

  // 6查询设备
  sco.YS_obje.url="device/query";
  sco.YS_obje.params.linlId = '';
  sco.YS_obje.done=function(re,sco){
    if(re.code == 0){
      sco.YS_objb.params = re.data;
      sco.deviceServiceList = re.data.deviceServiceList;

      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },300)

    }
  }

},






//链路管理模块
linkadmin:function(sco) {
  $("#leftlink").empty()
  sco.epage=0;
  sco.fileisnone=0;
  sco.e_toplist=[];
  sco.e_ctoplist=[];
  sco.showstatus=1;
  sco.filelist=[];
  sco.tapshow=0;
  sco.edtp = "";
  console.log('2');
  debugger;
  sco.timestamp = Date.parse(new Date());
  // sco.iconlist=[
  //  {id:1,name:"GAP",status:1},{id:2,name:"路由器",status:1},{id:3,name:"防火墙",status:1},{id:4,name:"IPS",status:1},{id:5,name:"可信任安全网关",status:1},{id:6,name:"交换器",status:1},{id:7,name:"安管隔离网闸",status:1},{id:8,name:"编码器",status:1},{id:9,name:"FGAP",status:1},{id:10,name:"光交换",status:2}
  // ,{id:11,name:"矩阵抽象",status:2},{id:12,name:"摄像头",status:2},{id:13,name:"3AS",status:2},{id:14,name:"ADS",status:2},{id:15,name:"AS",status:2},{id:16,name:"ASM",status:2},{id:17,name:"AWS",status:2},{id:18,name:"DTI",status:2},{id:19,name:"EWP",status:3},{id:20,name:"IWP",status:3}
  // ,{id:21,name:"MOC",status:3},{id:22,name:"PAS",status:3},{id:23,name:"SS",status:3},{id:24,name:"SSE",status:3},{id:25,name:"TAS",status:3},{id:26,name:"TMS",status:3},{id:27,name:"UAS",status:3},{id:28,name:"UMS",status:4},{id:29,name:"TZ",status:4},{id:30,name:"存储陈列",status:4}
  // ,{id:31,name:"磁盘陈列",status:4},{id:32,name:"摄像头",status:4},{id:33,name:"服务器",status:4},{id:34,name:"矩阵",status:4},{id:35,name:"内网管理员",status:4},{id:36,name:"入侵ids",status:4},{id:37,name:"摄像头2",status:5},{id:38,name:"数据库",status:5},{id:39,name:"云控制台",status:5},{id:40,name:"终端",status:5}
  // ,{id:41,name:"主机ids",status:5},{id:42,name:"政党军机构",status:5},{id:43,name:"公安驻地外",status:5},{id:44,name:"海关",status:5},{id:45,name:"民政机构",status:5},{id:46,name:"内网",status:6},{id:47,name:"社保机构",status:6},{id:48,name:"社会企事业单位",status:6},{id:49,name:"视频内网",status:6},{id:50,name:"视频终端",status:6}
  // ,{id:51,name:"外部接入单位",status:6},{id:52,name:"外网",status:6},{id:53,name:"操作台",status:6}];
// 1获取链路列表
// 2.查看编辑链路信息
// 3.创建填写基本链路信息
// 4制作拓扑图


// 1获取链路列表
sco.YS_plista.url="link/queryAll";
sco.YS_plista.params={pageSize:10,currentPage:1};
sco.YS_plista.method='POST';
sco.YS_plista.done= function(re,sco){
 if(re.code==0){
   sco.YS_plista.data=re.data
}
}
sco.fetch('YS_plista');




//获取设备信息
sco.YS_plistb.url="device/query8Page";
sco.YS_plistb.params={pageSize:999999,currentPage:1};
sco.YS_plistb.method='POST';
sco.YS_plistb.done= function(re,sco){
 if(re.code==0){
  var i = 1
  var j = 9
   re.data.list.map(function(el,idx){
    if(idx<i*j){
      el.status=i

     }else{
      i++
      el.status=i
     }
     // for(idx<=i*j;i++){
     //  el.status=i;
      
     // }
  
   })



   sco.epage=Math.ceil(re.data.list.length/9)
   sco.iconlist=re.data.list
   console.log(sco.iconlist)
}


}
sco.fetch('YS_plistb');







// 2.查看编辑链路信息
sco.YS_objb.url="link/update";
sco.YS_objb.params={linkName:"",linkType:"",dbConfigData:{dbName:"",ip:"",port:"",name:"",pwd:""}};
sco.YS_objb.method="POST";
sco.YS_objb.before=function(sco){
  if(!sco.YS_objb.params.linkName){
    layer.tips("请输入链路名称！","#xlinkName",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!sco.YS_objb.params['dbConfigData.dbName']){
    layer.tips("请输入数据库名！","#xdbName",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!sco.YS_objb.params['dbConfigData.ip']){
    layer.tips("请输入ip地址！","#xip",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_objb.params['dbConfigData.ip'])){layer.tips("请输入合法的IP地址！","#ip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  if(!sco.YS_objb.params['dbConfigData.port']){
    layer.tips("请输入端口号！","#xport",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!sco.YS_objb.params['dbConfigData.name']){
    layer.tips("请输入用户名！","#xname",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!sco.YS_objb.params['dbConfigData.pwd']){
    layer.tips("请输入密码！","#xpwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
 
  // if(sco.YS_objb.params.topologyNodes){
  //  sco.YS_objb.params.topologyNodes.map(function(elem,index){
  //     sco.YS_objb.params['topologyNodes['+index+'].toDeviceId'] = elem.toDeviceId;
  //     sco.YS_objb.params['topologyNodes['+index+'].fromDeviceId'] = elem.fromDeviceId;
  //     sco.YS_objb.params['topologyNodes['+index+'].direction'] = elem.direction;
  //   })
  // }
  // 
var topologyNodes = YSfac.getstore("topologyNodes");
if(topologyNodes.length==0){layer.msg("请绘制拓扑图！");return false};
topologyNodes.map(function(elem,index){
  
   sco.YS_objb.params['topologyNodes['+index+'].direction'] = elem.direction;
   sco.YS_objb.params['topologyNodes['+index+'].fromDeviceId'] = elem.fromDeviceId;
   sco.YS_objb.params['topologyNodes['+index+'].toDeviceId'] = elem.toDeviceId;
   if(elem.child.length>0){
    elem.child.map(function(elem2,index2){
      sco.YS_objb.params['topologyNodes['+index+'].child['+index2+'].fromDeviceId'] = elem.child[index2].fromDeviceId;
      sco.YS_objb.params['topologyNodes['+index+'].child['+index2+'].toDeviceId'] = elem.child[index2].toDeviceId;
      // sco.YS_objb.params['topologyNodes['+index+'].child['+index2+'].deviceIds'] = elem.child[index2].deviceIds;

      if(elem.child[index2].deviceIds){
        elem.child[index2].deviceIds.map(function(el2,idx2){
          sco.YS_objb.params['topologyNodes['+index+'].child['+index2+'].deviceIds['+idx2+']'] = el2; 
        })
        
      }

    })
   }

   if(elem.deviceIds){
    elem.deviceIds.map(function(el,idx){
      sco.YS_objb.params['topologyNodes['+index+'].deviceIds['+idx+']'] = el; 
    })
    sco.fileisnone=0
    
   }

   if(elem.deviceIds&&elem.deviceIds.length==0){
    sco.fileisnone=1
   }



})

if(sco.fileisnone==1){
  layer.msg("文件夹不能为空！");
  return false
}



  delete sco.YS_objb.params.topologyNodes;
  delete sco.YS_objb.params.dbConfigData;
  delete sco.YS_objb.params.deviceIds;
};
sco.YS_objb.done=function(re,sco){
  if(re.code==0){
  //  layer.msg("修改成功！")
      re.msg?YSfac.load(1,re.msg):YSfac.load(1,"修改成功");
    setTimeout(function(){
      location.reload()
      //  sco.tapshow=0;
      // sco.fetch('YS_plista')
  },1000)
  }
  else{
   //  re.msg?layer.msg(re.msg):layer.msg("修改失败！")
       re.msg?YSfac.load(1,re.msg):YSfac.load(1,"修改失败");
  }
    
}

// 3.创建填写基本链路信息
sco.YS_obja.url="link/insert";
sco.YS_obja.params={linkName:"",linkType:"","dbConfigData.dbName":"","dbConfigData.ip":"",
"dbConfigData.port":"","dbConfigData.name":"","dbConfigData.pwd":"",

};


sco.YS_obja.method="POST";
sco.YS_obja.before=function(sco){
  if(!sco.YS_obja.params.linkName){
    layer.tips("请输入链路名称！","#xlinkName",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!sco.YS_obja.params['dbConfigData.dbName']){
    layer.tips("请输入数据库名！","#xdbName",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!sco.YS_obja.params['dbConfigData.ip']){
    layer.tips("请输入ip地址！","#xip",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_obja.params['dbConfigData.ip'])){layer.tips("请输入合法的IP地址！","#ip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  if(!sco.YS_obja.params['dbConfigData.port']){
    layer.tips("请输入端口号！","#xport",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!sco.YS_obja.params['dbConfigData.name']){
    layer.tips("请输入用户名！","#xname",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  if(!sco.YS_obja.params['dbConfigData.pwd']){
    layer.tips("请输入密码！","#xpwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
  };
  delete sco.YS_obja.params.dbConfigData;
var topologyNodes = YSfac.getstore("topologyNodes");
if(topologyNodes.length==0){layer.msg("请绘制拓扑图！");return false};
topologyNodes.map(function(elem,index){
   sco.YS_obja.params['topologyNodes['+index+'].direction'] = elem.direction;
   sco.YS_obja.params['topologyNodes['+index+'].fromDeviceId'] = elem.fromDeviceId;
   sco.YS_obja.params['topologyNodes['+index+'].toDeviceId'] = elem.toDeviceId;
   if(elem.child.length>0){
    elem.child.map(function(elem2,index2){
      sco.YS_obja.params['topologyNodes['+index+'].child['+index2+'].fromDeviceId'] = elem.child[index2].fromDeviceId;
      sco.YS_obja.params['topologyNodes['+index+'].child['+index2+'].toDeviceId'] = elem.child[index2].toDeviceId;
      // sco.YS_obja.params['topologyNodes['+index+'].child['+index2+'].deviceIds'] = elem.child[index2].deviceIds;

      if(elem.child[index2].deviceIds){
        elem.child[index2].deviceIds.map(function(el2,idx2){
          sco.YS_obja.params['topologyNodes['+index+'].child['+index2+'].deviceIds['+idx2+']'] = el2; 
        })
        
      }

    })
   }
  if(elem.deviceIds){
    elem.deviceIds.map(function(el,idx){
      sco.YS_obja.params['topologyNodes['+index+'].deviceIds['+idx+']'] = el; 
     
    })
     sco.fileisnone=0
   }

   if(elem.deviceIds&&elem.deviceIds.length==0){
    sco.fileisnone=1
   }
})


if(sco.fileisnone==1){
  layer.msg("文件夹不能为空！");
  return false
}
};
sco.YS_obja.done=function(re,sco){
  if(re.code == -1){
    layer.msg(re.msg);
  };
  if(re.code==0){
   // re.msg? layer.msg(re.msg): layer.msg("新增成功！");
      re.msg?YSfac.load(1,re.msg):YSfac.load(1,"新增成功");
    setTimeout(function(){
      location.reload()
  },1000)
  }
  else{
     //re.msg? layer.msg(re.msg):layer.msg("新增失败！");
       re.msg?YSfac.load(1,re.msg):YSfac.load(1,"新增失败");
    
  }
    
}

// 获取一条链路信息
sco.YS_objc.url="link/query";
sco.YS_objc.params.linkId = '';
sco.YS_objc.done=function(re,sco){
  if(re.code == 0){
    sco.YS_objb.params = re.data;


    if(re.data.topologyNodes[0].fromDeviceId==0){
      var temp = [];
      temp.push(re.data.topologyNodes[0]);
      re.data.topologyNodes = get_child(re.data.topologyNodes,re.data.topologyNodes[0].toDeviceId,temp);
    }


    sco.e_toplist=re.data.topologyNodes;
    
    sco.e_toplist.map(function(el){
   sco.iconlist.map(function(elem1){
    if(el.toDeviceId==elem1.deviceId){
      el.icon=elem1.icon
    }
  })
    if(el.child){
      el.child.map(function(el2){
     sco.iconlist.map(function(elem2){
        if(el2.toDeviceId==elem2.deviceId){
          el2.icon=elem2.icon
        }
      })
        sco.e_ctoplist.push(el2);
        if(el2.deviceIds){
          el2.deviceIds.map(function(el3){
            var isfile='';
            sco.iconlist.map(function(elem3){
              if(el3==elem3.deviceId){
               isfile=elem3.icon
              }
            })
            // if(el3.lindex==elem.deviceId){
            //   el3.icon=elem.icon
            // }
            sco.filelist.push({lindex:el3,isfile:isfile})
          })      
        }
      })

    }
    if(el.deviceIds){
      el.deviceIds.map(function(el4){
        var isfile='';
        var name='';
        sco.iconlist.map(function(elem4){
          if(el4==elem4.deviceId){
               isfile=elem4.icon;
               name = elem4.deviceName
              }
        })
        // if(el4.lindex==elem.deviceId){
        //   el4.icon=elem.icon
        // }
        sco.filelist.push({lindex:el4,isfile:isfile,dname:name})
      })
      
    }
    
    })
 

    console.log(sco.e_toplist)
    console.log(sco.e_ctoplist)
    console.log(sco.filelist)


    sco.YS_objb.params['dbConfigData.dbName'] = re.data.dbConfigData.dbName;
    sco.YS_objb.params['dbConfigData.ip'] = re.data.dbConfigData.ip;
    sco.YS_objb.params['dbConfigData.port'] = re.data.dbConfigData.port;
    sco.YS_objb.params['dbConfigData.name'] = re.data.dbConfigData.name;
    sco.YS_objb.params['dbConfigData.pwd'] = re.data.dbConfigData.pwd;

      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },300)

  }
}


sco.YS_objd.url="link/delete";

sco.YS_objd.before=function(sco){
  layer.close(sco.dellayer);
};
sco.YS_objd.done=function(re,sco){
  if(re.code == 0){
    setTimeout(function(){
        layer.msg('删除成功');
      },1000)
        setTimeout(function(){
        sco.fetch("YS_plista")
      },4000)


  }else{
        setTimeout(function(){
        layer.msg('删除失败');
       
      },2000)
  }
}


sco.YS_objf.url="tools/testDB";

sco.YS_objf.before=function(sco){
sco.YS_objf.params.netArea=1;
sco.YS_objf.params.dbName = sco.YS_obja.params['dbConfigData.dbName'];
sco.YS_objf.params.ip = sco.YS_obja.params['dbConfigData.ip'];
sco.YS_objf.params.port = sco.YS_obja.params['dbConfigData.port'];
sco.YS_objf.params.name = sco.YS_obja.params['dbConfigData.name'];
sco.YS_objf.params.pwd = sco.YS_obja.params['dbConfigData.pwd']

};

sco.YS_obje.url="tools/testDB";

sco.YS_obje.before=function(sco){
sco.YS_obje.params.netArea=1;
sco.YS_obje.params.dbName = sco.YS_objb.params['dbConfigData.dbName'];
sco.YS_obje.params.ip = sco.YS_objb.params['dbConfigData.ip'];
sco.YS_obje.params.port = sco.YS_objb.params['dbConfigData.port'];
sco.YS_obje.params.name = sco.YS_objb.params['dbConfigData.name'];
sco.YS_obje.params.pwd = sco.YS_objb.params['dbConfigData.pwd']

};






setTimeout(function(){



YS("jsPlumb",function(){

function deepCopy(p, c) {  //克隆对象
          var c = c || {};  
          for (var i in p) {  
              if(! p.hasOwnProperty(i)){  
                  continue;  
              }  
              if (typeof p[i] === 'object') {  
                  c[i] = (p[i].constructor === Array) ? [] : {};  
                  deepCopy(p[i], c[i]);  
              } else {  
                  c[i] = p[i];  
              }  
          }  
          return c;  
      } 
      function clear(){
        var alllist=YSfac.getstore("alllist");
        var e_toplist = sco.e_toplist;
        var e_ctoplist = sco.e_ctoplist;
        var filelist= sco.filelist;
        $("#main").empty()
        $("#main_e").empty()
        alllist.map(function(elem){
                      $("#left .item").each(function(){
                          if($(this).attr("data-index")==elem.allindex){
                            $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                          }
                        });
                     })
        alllist.map(function(elem){
                      $("#left_e .item").each(function(){
                          if($(this).attr("data-index")==elem.allindex){
                            $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                          }
                        });
                     })
        e_toplist.map(function(elem){
                      $("#left_e .item").each(function(){
                          if($(this).attr("data-index")==elem.toDeviceId){
                            $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                          }
                        });
                     })
        e_ctoplist.map(function(elem){
                      $("#left_e .item").each(function(){
                          if($(this).attr("data-index")==elem.toDeviceId){
                            $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                          }
                        });
                     })
        filelist.map(function(elem){
                      $("#left_e .item").each(function(){
                          if($(this).attr("data-index")==elem.lindex){
                            $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                          }
                        });
                     })
        sco.filelist=[];
        sco.e_toplist=[];
        sco.e_ctoplist=[];
        jsPlumb.deleteEveryEndpoint()
        console.log(jsPlumb.getAllConnections())
      }
      sco.clear = clear;
      function save() {
        $(".filebox").addClass("dpn");
              var connects = [];//存储连线的数组
              var mainArr=[];//存储元素的数组
              var topologyNodes=[];
              var filelist=sco.filelist;
              $.each(jsPlumb.getAllConnections(), function (idx, connection) {
                var index = $(connection.source).attr("data-index");
                var isfile = $(connection.target).attr("data-icon");
                var cfid = $(connection.source).attr("data-index");
                var ctid = $(connection.target).attr("data-index");
                var sign=0;
                var sat;

                if(idx==0){
                  topologyNodes.push({direction:1,fromDeviceId:0,toDeviceId:index,child:[]});
                }


                  // if(!check_main(topologyNodes,cfid)){

                    topologyNodes.map(function(el,index){
                      sat=0
                      if(el.fromDeviceId==cfid){
                        topologyNodes[index-1].child.push({fromDeviceId:cfid,toDeviceId:ctid})
                        sign=1
                      }

                      if(el.child.length>0&&check_main(topologyNodes,cfid)){

                        el.child.map(function(el2,index2){
                          if(el2.toDeviceId==cfid){

                              el.child.push({fromDeviceId:cfid,toDeviceId:ctid});

                            sign=1;
                          }
                        })
                      }
                   
                      // topologyNodes.map(function(elem,index){
                      //     if(cfid==el.fromDeviceId){
                      //       sat=1
                      //     }
                      //  })
                      //  if(sat==1){
                      //   topologyNodes[index-1].child.push({fromDeviceId:cfid,toDeviceId:ctid})
                      //   sign=1
                      // }
                    })
                  // }



                  if(sign==0){
                    if(isfile=="60"){
                      topologyNodes.push({
                      direction:1,
                      fromDeviceId:$(connection.source).attr("data-index"),
                      toDeviceId:$(connection.target).attr("data-index"),
                      child:[], 
                      deviceIds:[]
                      });
                    }else{
                      topologyNodes.push({
                      direction:1,
                      fromDeviceId:$(connection.source).attr("data-index"),
                      toDeviceId:$(connection.target).attr("data-index"),
                      child:[],
                      });
                    }
                   
                  }
                   if(sign==1){
                    
                      topologyNodes.map(function(el){
                        el.child.map(function(el2){
                         if(isfile=="60"){ 
                          el2.deviceIds=[]
                          }else{ }
                        })
                      })             
                  }

           
              
              });
                topologyNodes.map(function(elem){
                   
                    if(elem.deviceIds){
                      filelist.map(function(el){
                         elem.deviceIds.push(el.lindex)
                      })
                     
                    }

                    if(elem.child.length>0){
                      elem.child.map(function(e2){
                        if(e2.deviceIds){
                         
                          filelist.map(function(el2){
                             e2.deviceIds.push(el2.lindex)
                          })
                         
                        }                        
                      })
                    }
                  })
              $("#main .item").each(function(){
                // mainArr.push({
                //   // offset:$(this).position(),
                //   // text:$(this).text(),
                //   // index:$(this).attr("data-index"),
                //   // sign:$(this).attr("data-sign"),
                // });
              });
              console.log(topologyNodes);
              // console.log(mainArr);
       YSfac.setstore('topologyNodes',topologyNodes)
      }



      //查询新增的线属于主路还是子  0--主路  1--子
      function check_main(arr,fromDeviceId){
        var bool = 1;
        arr.map(function(elem,index){
          if(elem.toDeviceId==fromDeviceId){
            bool = 0;
          }
        })
        return bool;
      }


     sco.elemt = '';

      sco.save = save;
      jsPlumb.ready(function() {//一定要加,否则你妹的老报错
                      

        var connectorPaintStyle = {//基本连接线样式
                  lineWidth: 2,
                  strokeStyle: "#0E5069",
                  joinstyle: "round",
                  outlineColor: "#0E5069",
                  outlineWidth: 0
              };
      var connectorHoverStyle = {// 鼠标悬浮在连接线上的样式
                  lineWidth: 3,
                  strokeStyle: "#216477",
                  outlineColor: "white",
                  outlineWidth: 0,
              };
        var origin = {//起点
                  endpoint: ["Dot", { radius: 8 }],  //端点的形状
                  connectorStyle: connectorPaintStyle,//连接线的颜色，大小样式
                  connectorHoverStyle: connectorHoverStyle,
                  paintStyle: {
                      strokeStyle: "#03D6FC",
                      fillStyle: "transparent",
                      radius: 4,
                      lineWidth: 2
                  },        //端点的颜色样式
                  //anchor: "AutoDefault",
                  isSource: true,    //是否可以拖动（作为连线起点）
                  connector: ["Straight", { stub: [0, 0], gap: 0, cornerRadius: 0, alwaysRespectStubs: false }],  //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
                  isTarget: false,    //是否可以放置（连线终点）
                  maxConnections:-1,    // 设置连接点最多可以连接几条线,-1表示无限大
                  connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
              };
      var destination = {//终点
                  endpoint: ["Dot", { radius: 5 }],  //端点的形状
                  connectorStyle: connectorPaintStyle,//连接线的颜色，大小样式
                  connectorHoverStyle: connectorHoverStyle,
                  paintStyle: {fillStyle: "#03D6FC",},        //端点的颜色样式
                  isSource: false,    //是否可以拖动（作为连线起点）
                  connector: ["Straight", { stub: [0, 0], gap: 0, cornerRadius: 0, alwaysRespectStubs: false }],  //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
                  isTarget: true,    //是否可以放置（连线终点）
                  maxConnections:-1,    // 设置连接点最多可以连接几条线,-1表示无限大
                  connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
              };
         
        $("#left").children().draggable({
                  helper: "clone",
                  scope: "ss",
                  revert: 'invalid',//放置不到位自动恢复原位
                  stop:function(event,ui){
          var alllist = []
              $('#main').children().each(function(){
                  alllist.push({allindex:$(this).attr("data-index")})
                  if($(this).attr("data-icon")=='60'){
                    $(this).addClass("file")
                    // $(this).append('<div class="filebox dpn"></div>')
                  }
            YSfac.setstore("alllist",alllist)      
              });
          },
              });
          
              var elementSign=0;//标志元素唯一性
              $("#main").droppable({
                  scope: "ss",
           
                  drop: function (event, ui) {//在目标(target)容器上释放鼠标 ,ui.draggable[0]为开始拖拽的元素
                    elementSign++;
                      var left = parseInt(ui.offset.left - $(this).offset().left);
                      var top = parseInt(ui.offset.top - $(this).offset().top);
                      var ele=$('<div class="item" data-sign="'+elementSign+'" data-index="'+$(ui.draggable[0]).attr("data-index")+'" data-icon="'+$(ui.draggable[0]).attr("data-icon")+'" data-name="'+$(ui.draggable[0]).attr("data-name")+'" >' + $(ui.helper).html() + '</div>');//$(ui.helper).html()取第一个JQ元素的文本
                        ele.css({"left":left,"top":top,position: "absolute",margin:0});
                        $(this).append(ele);
                        jsPlumb.addEndpoint(ele, { anchors: "BottomRight" }, origin);//起点
                        jsPlumb.addEndpoint(ele, { anchors: "BottomLeft" }, destination);//终点
                        jsPlumb.draggable(ele,{containment: "parent"});//端点可以拖动设置,并且将端点限制在父级内
                        $(ele).draggable({ //设置拖动到main区域中的元素还可以拖拽
                         
                          containment: "parent" //限制拖动不超过父级边框
                        });
                       
                        //禁止重复拖拽
                        $(ui.draggable[0]).addClass("dpn").draggable("disable"); // 禁止其拖动功能
                  }

                  
              });
              var leftlist=[]
              $("#main").on("click", ".item", function () {

                if($(this).attr("data-icon")=="60"){
                  // $(this).addClass('file')
                  $(this).find(".filebox").toggleClass("dpn");

                  // console.log(123)
                }
               });
              $("#main").on("mouseup", ".item", function () {
                var offset = []
                // var parent=$("<div class='filebox'><div>")
                $("#main .item").each(function(){
             
              var r1 = $(this).position().left+$(this).context.offsetWidth;
              var l1 = $(this).position().left;
              var b1 = $(this).position().top+$(this).context.offsetHeight;
              var t1 = $(this).position().top;
              var L = $(this)[0].offsetLeft;
              var T = $(this)[0].offsetTop;
              var uid= $(this).context.id;
              var lef = $(this).position().left+100;
              var rig = $(this).position().left-100;
              var index = $(this).attr("data-index");
              var isfile = $(this).attr("data-icon");
              var dname = $(this).attr("data-name");
                offset.map(function(el){

                   if(r1<el.left||b1<el.top||l1>el.right||t1>el.bottom){
                           // layer.msg("moom")
                      }else {
                        if(isfile!="60"&&el.isfile!="60"){
                          // jsPlumb.animate(el.uid,{left:lef},{duration:350,easing:'easeOutBack'});
                          // jsPlumb.animate(uid,{left:rig},{duration:350,easing:'easeOutBack'});
                        }else{
                          if(isfile=="60"){
                            jsPlumb.removeAllEndpoints(el.uid);
                          $("#"+el.uid).remove();

$(".filebox").append("<div class='fileimg' id='"+el.index+"fimg'><img src='../images/c"+el.isfile+"0.png' /><img class='fdben' id='fdbens' fimgdel src='../images/pla-delete.png' data-id='"+el.index+"'><div class='finame' title='"+el.dname+"'><span>"+el.dname+"</span></div></div>");
                          leftlist.push({
                          lindex : el.index,
                          filimg : el.isfile
                          })

                          // sco.$apply();
                          }
                          if(el.isfile=="60"){
                            jsPlumb.removeAllEndpoints(uid);
                          $("#"+uid).remove();  
                      $(".filebox").append("<div class='fileimg' id='"+index+"fimg'><img src='../images/c"+isfile+"0.png' /><img class='fdben' id='fdbens' fimgdel src='../images/pla-delete.png' data-id='"+index+"'><div class='finame' title='"+dname+"'><span>"+dname+"</span></div></div>");
                          leftlist.push({
                          lindex : index,
                          filimg : isfile
                          })
                          // sco.$apply();
                          }                    
                        }
                        // console.log("<img class='fileimg' src='../images/c"+el.index+"0.png' />")
                      }
                      sco.filelist=leftlist
                })
  
                offset.push({
                 
                  uid:uid,
                  left : $(this).context.offsetLeft,
                  right : $(this).context.offsetLeft+$(this)[0].offsetWidth,
                  top : $(this).context.offsetTop,
                  bottom : $(this).context.offsetTop+$(this)[0].offsetHeight,
                  index: $(this).attr("data-index"),
                  isfile:$(this).attr("data-icon"),
                  dname:$(this).attr("data-name"),
                });
                // console.log($(this))
              });
              })
              
              $("#main").on("mouseenter", ".item", function () {
                var ele=$('<img src="../images/pla-delete.png" class="spans">');
                ele.css({position:"absolute",left:"90px",top:"-15px"});
                  $(this).append(ele);
              }).on("mouseleave", ".item", function () {
                  $(".spans").remove();
              }).on("click", ".spans",function () {
//新建时 删除文件夹 
sco.removetbadd = layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#removetbadd')
          }); 
    sco.addtbparent = $(this).parent();
    sco.addtbdel =$(this);
                  // if (confirm("确定删除吗?")) {
                  //   if($(this).parent().attr("data-icon")=='60'){
                  //    $(".filebox").empty();
                  //    leftlist.map(function(elem){
                  //     $("#left .item").each(function(){
                  //         if($(this).attr("data-index")==elem.lindex){
                  //           $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                  //         }
                  //       });
                  //    })
                  //   leftlist=[]
                  //   }
                  //     jsPlumb.removeAllEndpoints($(this).parent().attr("id"));
                  //     var index=$(this).parent().attr("data-index");
                  //     $(this).parent().remove();
                  //     $("#left .item").each(function(){
                  //         if($(this).attr("data-index")==index){
                  //           $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                  //         }
                  //       });
                  // }
              });
 $("#main").on("click", "#fdbens", function (event) {
//$(document).on('click','.fdben', function(event){
  event.stopPropagation();

  var key  = $(this).attr("data-id");
 var that = $(this);
    leftlist.map(function(elem,index){
     if (elem.lindex == key) {
     leftlist.splice(index,1);
     that.parent().addClass("dpn");
      //删除时要在顶部显示
        $("#left .item").each(function(){
        if($(this).attr("data-index")==elem.lindex){
          $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
        }
      });
     } else {
      return;
     }
        });
    sco.$apply(); 
})



$('#sctbadd').on('click',  function(event) {
                layer.close(sco.removetbadd);
                    if(sco.addtbparent.attr("data-icon")=='60'){
                     $(".filebox").empty();
                     leftlist.map(function(elem){
                      $("#left .item").each(function(){
                          if($(this).attr("data-index")==elem.lindex){
                            $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                          }
                        });
                     })
                    leftlist=[]
                    }

                      jsPlumb.removeAllEndpoints(sco.addtbparent.attr("id"));
                      var index=sco.addtbparent.attr("data-index");
                      sco.addtbparent.remove();
                      $("#left .item").each(function(){
                          if($(this).attr("data-index")==index){
                            $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                          }
                        });




    });




              jsPlumb.bind("click", function (conn, originalEvent) {//点击线段删除
               // if (confirm("确定删除吗?"))   jsPlumb.detach(conn);
      // hsl的代码 不要删除
        sco.elemt = conn;
        sco.aaa = layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#removext')
          }); 
                        
       });
       // hsl的代码 不要删除
    $('#scxt').on('click',  function(event) {
                layer.close(sco.aaa);
               jsPlumb.detach(sco.elemt);
    });
              jsPlumb.bind("connection", function (connInfo, originalEvent) {//自己连自己管控 
                console.log(jsPlumb.getAllConnections())
                if (connInfo.connection.sourceId == connInfo.connection.targetId) {      
                    layer.msg("不能连自己！")     
                    setTimeout(function(){
                    jsPlumb.detach(connInfo.connection);      
                  },100);
                }   
            });
              // if(sessionStorage.getItem("flowsheet")){//判断是否有保存过
              //   var flowsheet=JSON.parse(sessionStorage.getItem("flowsheet"));
              //   var mainHTML=""
              //   for(var i=0;i<flowsheet.mainArr.length;i++){
              //     if(elementSign<flowsheet.mainArr[i].sign){//如果已经保存过,即将标记更新
              //       elementSign=flowsheet.mainArr[i].sign;
              //     }
              //     mainHTML+='<div class="item" data-sign="'+flowsheet.mainArr[i].sign+'"  data-index="'+flowsheet.mainArr[i].index+'" style="left:'+flowsheet.mainArr[i].offset.left+'px;top:'+flowsheet.mainArr[i].offset.top+'px;position:absolute;margin:0" >' + flowsheet.mainArr[i].text + '</div>';
              //   };
              //   $("#main").append(mainHTML);
              //   $("#main .item").each(function(){

              //     jsPlumb.addEndpoint(this, { anchors: "BottomRight" }, deepCopy(origin, {uuid:$(this).attr("data-sign")+"origin"}));//起点
              //     jsPlumb.addEndpoint(this, { anchors: "BottomLeft" },  deepCopy(destination, {uuid:$(this).attr("data-sign")+"destination"}));//终点
              //     jsPlumb.draggable(this,{containment: "parent"},function(){console.log(this)});//端点可以拖动设置,并且将端点限制在父级内
              //     $(this).draggable({  //设置拖动到main区域中的元素还可以拖拽
              //       containment: "parent" //限制拖动不超过父级边框

              //     });
              //   });
              //   //固定连线
              //   for(var i=0;i<flowsheet.connects.length;i++){
              //     jsPlumb.connect({uuids:[flowsheet.connects[i].originSign+"origin",flowsheet.connects[i].destinationSign+"destination"]});
              //   };
              // }

      });





 jsPlumb.ready(function() {
                      

      var connectorPaintStyle = {//基本连接线样式
                  lineWidth: 2,
                  strokeStyle: "#0E5069",
                  joinstyle: "round",
                  outlineColor: "#0E5069",
                  outlineWidth: 0
              };
      var connectorHoverStyle = {// 鼠标悬浮在连接线上的样式
                  lineWidth: 3,
                  strokeStyle: "#216477",
                  outlineColor: "white",
                  outlineWidth: 0,
              };
        var origin = {//起点
                  endpoint: ["Dot", { radius: 8 }],  //端点的形状
                  connectorStyle: connectorPaintStyle,//连接线的颜色，大小样式
                  connectorHoverStyle: connectorHoverStyle,
                  paintStyle: {
                      strokeStyle: "#03D6FC",
                      fillStyle: "transparent",
                      radius: 4,
                      lineWidth: 2
                  },        //端点的颜色样式
                  //anchor: "AutoDefault",
                  isSource: true,    //是否可以拖动（作为连线起点）
                  connector: ["Straight", { stub: [0, 0], gap: 0, cornerRadius: 0, alwaysRespectStubs: false }],  //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
                  isTarget: false,    //是否可以放置（连线终点）
                  maxConnections:-1,    // 设置连接点最多可以连接几条线,-1表示无限大
                  connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
              };
      var destination = {//终点
                  endpoint: ["Dot", { radius: 5 }],  //端点的形状
                  connectorStyle: connectorPaintStyle,//连接线的颜色，大小样式
                  connectorHoverStyle: connectorHoverStyle,
                  paintStyle: {fillStyle: "#03D6FC",},        //端点的颜色样式
                  isSource: false,    //是否可以拖动（作为连线起点）
                  connector: ["Straight", { stub: [0, 0], gap: 0, cornerRadius: 0, alwaysRespectStubs: false }],  //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
                  isTarget: true,    //是否可以放置（连线终点）
                  maxConnections:-1,    // 设置连接点最多可以连接几条线,-1表示无限大
                  connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
              };
         
        $("#left_e").children().draggable({
                  helper: "clone",
                  scope: "ss",
                  stop:function(event,ui){
         
          var alllist = []
              $('#main_e').children().each(function(){
                  alllist.push({allindex:$(this).attr("data-index")})
                  if($(this).attr("data-icon")=='60'){
                    $(this).addClass("file")
                    // $(this).append('<div class="filebox dpn"></div>')
                  }
            YSfac.setstore("alllist",alllist)      
      
              });
          },
              });
          
              var elementSign=0;//标志元素唯一性
              $("#main_e").droppable({
                  scope: "ss",
           
                  drop: function (event, ui) {//在目标(target)容器上释放鼠标 ,ui.draggable[0]为开始拖拽的元素
                    elementSign++;
                      var left = parseInt(ui.offset.left - $(this).offset().left);
                      var top = parseInt(ui.offset.top - $(this).offset().top);
                      var ele=$('<div class="item e_item" data-sign="'+elementSign+'" data-index="'+$(ui.draggable[0]).attr("data-index")+'" data-icon="'+$(ui.draggable[0]).attr("data-icon")+'" data-name="'+$(ui.draggable[0]).attr("data-name")+'" >' + $(ui.helper).html() + '</div>');//$(ui.helper).html()取第一个JQ元素的文本
                        ele.css({"left":left,"top":top,position: "absolute",margin:0});
                        $(this).append(ele);
                        jsPlumb.addEndpoint(ele, { anchors: "BottomRight" }, origin);//起点
                        jsPlumb.addEndpoint(ele, { anchors: "BottomLeft" }, destination);//终点
                        jsPlumb.draggable(ele,{containment: "parent"});//端点可以拖动设置,并且将端点限制在父级内
                        $(ele).draggable({ //设置拖动到main区域中的元素还可以拖拽
                         
                          containment: "parent" //限制拖动不超过父级边框
                        });
                        $(ui.draggable[0]).addClass("dpn").draggable("disable"); // 禁止其拖动功能
                  }

                  
              });
              
              var leftlist;
               $("#main_e").on("click", ".e_item", function () {
                
                if($(this).attr("data-icon")=="60"){
                  // $(this).addClass('file')
                  $(this).find(".filebox").toggleClass("dpn")
                   // console.log(123)
                }
               });
              $("#main_e").on("mouseup", ".e_item", function () {
                leftlist=sco.filelist
                var offset = []

                $("#main_e .e_item").each(function(){
              
              var r1 = $(this).position().left+$(this).context.offsetWidth;
              var l1 = $(this).position().left;
              var b1 = $(this).position().top+$(this).context.offsetHeight;
              var t1 = $(this).position().top;
              var L = $(this)[0].offsetLeft;
              var T = $(this)[0].offsetTop;
              var uid= $(this).context.id;
              var lef = $(this).position().left+100;
              var rig = $(this).position().left-100;
              var index = $(this).attr("data-index");
              var isfile = $(this).attr("data-icon");
              var dname = $(this).attr("data-name");
                offset.map(function(el){
                   if(r1<el.left||b1<el.top||l1>el.right||t1>el.bottom){
                           // layer.msg("moom")
                      }else {
                        if(isfile!="60"&&el.isfile!="60"){
                          // jsPlumb.animate(el.uid,{left:lef},{duration:350,easing:'easeOutBack'});
                          // jsPlumb.animate(uid,{left:rig},{duration:350,easing:'easeOutBack'});
                        }else{
                          if(isfile=="60"){
                            console.log(el)

                            jsPlumb.removeAllEndpoints(el.uid);
                          $("#"+el.uid).remove();
                          $(".filebox").append("<div class='fileimg  888'><img src='../images/c"+el.isfile+"0.png' /><div class='finame' title='"+el.dname+"'><span>"+el.dname+"</span></div></div>");
                          leftlist.push({
                          lindex : el.index,
                          isfile : el.isfile,
                          dname:el.dname,
                          })
                          // console.log(leftlist)
                          // sco.$apply();
                       
                          }
                          if(el.isfile=="60"){
                            console.log(el)
                            jsPlumb.removeAllEndpoints(uid);
                          $("#"+uid).remove();
//$(".filebox").append("<div class='fileimg  99'><img src='../images/c"+isfile+"0.png' /><div class='finame' title='"+dname+"'><span>"+dname+"</span></div></div>");
$(".filebox").append("<div class='fileimg' id='"+index+"fimg'><img src='../images/c"+isfile+"0.png' /><img class='fdben' id='fdbenedit' fimgdel src='../images/pla-delete.png' data-id='"+index+"'><div class='finame' title='"+dname+"'><span>"+dname+"</span></div></div>");                         
                          leftlist.push({
                          lindex : index,
                          isfile : isfile,
                          dname:dname,

                          })
                          // console.log(leftlist)
                          // sco.$apply();
                          }                    
                        }
                      }
                      if(leftlist.length>0){
                       sco.filelist=leftlist
                      }
                })
               
                offset.push({
                 
                  uid:uid,
                  left : $(this).context.offsetLeft,
                  right : $(this).context.offsetLeft+$(this)[0].offsetWidth,
                  top : $(this).context.offsetTop,
                  bottom : $(this).context.offsetTop+$(this)[0].offsetHeight,
                  index: $(this).attr("data-index"),
                  isfile: $(this).attr("data-icon"),
                  dname:$(this).attr("data-name"),
                });
                // console.log($(this))
              });
              })

              
              $("#main_e").on("mouseenter", ".e_item", function () {
                var ele=$('<img src="../images/pla-delete.png" class="spans">');
                ele.css({position:"absolute",left:"90px",top:"-15px"});
                  $(this).append(ele);
              }).on("mouseleave", ".e_item", function () {
                  $(".spans").remove();
              }).on("click", ".spans",function () {
//删除文件  hsl新增弹窗 
        sco.removetb = layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#removetb')
          }); 
    sco.tbparent = $(this).parent();
    sco.tbdel =$(this);

                  // if (confirm("确定删除吗?")) {
                  //   if($(this).parent().attr("data-icon")=='60'){
                  //    $(".filebox").empty();
                  //    sco.filelist.map(function(elem){
                  //     $("#left_e .item").each(function(){
                  //         if($(this).attr("data-index")==elem.lindex){
                  //           $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                  //         }
                  //       });
                  //    })
                  //    sco.filelist=[]
                  //   }
                  //     jsPlumb.removeAllEndpoints($(this).parent().attr("id"));
                  //     var index=$(this).parent().attr("data-index");
                  //     $(this).parent().remove();
                  //     $("#left_e .item").each(function(){
                  //         if($(this).attr("data-index")==index){
                  //           $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                  //         }
                  //       });
                  // }
              });
//点击确定 删除文件 参数从上边的点击时间带过来    sco.tbparent = $(this).parent();  sco.tbdel =$(this);
$('#sctb').on('click',  function(event) {
                layer.close(sco.removetb);
                    if(sco.tbparent.attr("data-icon")=='60'){
                     $(".filebox").empty();
                     sco.filelist.map(function(elem){
                      $("#left_e .item").each(function(){
                          if($(this).attr("data-index")==elem.lindex){
                            $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                          }
                        });
                     })
                     sco.filelist=[]
                    }
                      jsPlumb.removeAllEndpoints(sco.tbparent.attr("id"));
                      var index=sco.tbparent.attr("data-index");
                      sco.tbparent.remove();

                      $("#left_e .item").each(function(){
                          if($(this).attr("data-index")==index){
                            $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
                          }
                        });





    });

 $("#main_e").on("click", "#fdbenedit", function (event) {
//$(document).on('click','.fdben', function(event){
  event.stopPropagation();

  var key  = $(this).attr("data-id");
 var that = $(this);
    leftlist.map(function(elem,index){
     if (elem.lindex == key) {
     leftlist.splice(index,1);
     that.parent().addClass("dpn");
      //删除时要在顶部显示
        $("#left_e .item").each(function(){
        if($(this).attr("data-index")==elem.lindex){
          $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
        }
      });
     } else {
      return;
     }
        });
    sco.$apply(); 
})














      });


function edtp(){


  var connectorPaintStyle = {//基本连接线样式
                  lineWidth: 2,
                  strokeStyle: "#0E5069",
                  joinstyle: "round",
                  outlineColor: "#0E5069",
                  outlineWidth: 0
              };
      var connectorHoverStyle = {// 鼠标悬浮在连接线上的样式
                  lineWidth: 3,
                  strokeStyle: "#216477",
                  outlineColor: "white",
                  outlineWidth: 0,
              };
        var origin = {//起点
                  endpoint: ["Dot", { radius: 8 }],  //端点的形状
                  connectorStyle: connectorPaintStyle,//连接线的颜色，大小样式
                  connectorHoverStyle: connectorHoverStyle,
                  paintStyle: {
                      strokeStyle: "#03D6FC",
                      fillStyle: "transparent",
                      radius: 4,
                      lineWidth: 2
                  },        //端点的颜色样式
                  //anchor: "AutoDefault",
                  isSource: true,    //是否可以拖动（作为连线起点）
                  connector: ["Straight", { stub: [0, 0], gap: 0, cornerRadius: 0, alwaysRespectStubs: false }],  //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
                  isTarget: false,    //是否可以放置（连线终点）
                  maxConnections:-1,    // 设置连接点最多可以连接几条线,-1表示无限大
                  connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
              };
      var destination = {//终点
                  endpoint: ["Dot", { radius: 5 }],  //端点的形状
                  connectorStyle: connectorPaintStyle,//连接线的颜色，大小样式
                  connectorHoverStyle: connectorHoverStyle,
                  paintStyle: {fillStyle: "#03D6FC",},        //端点的颜色样式
                  isSource: false,    //是否可以拖动（作为连线起点）
                  connector: ["Straight", { stub: [0, 0], gap: 0, cornerRadius: 0, alwaysRespectStubs: false }],  //连接线的样式种类有[Bezier],[Flowchart],[StateMachine ],[Straight ]
                  isTarget: true,    //是否可以放置（连线终点）
                  maxConnections:-1,    // 设置连接点最多可以连接几条线,-1表示无限大
                  connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
              };
      var common ={
        endpoint: ["Dot", { radius: 5 }],
        connectorStyle: connectorPaintStyle,
        connector: ["Straight", { stub: [0, 0], gap: 0, cornerRadius: 0, alwaysRespectStubs: false }],
        connectorOverlays: [["Arrow", { width: 10, length: 10, location: 1 }]]
      }



  var pl=100;
  var cl=100;
  var eplist = sco.e_toplist;
  var eclist = sco.e_ctoplist
  var filelist = sco.filelist

  
// 父节点消失
  eplist.map(function(el){
    $("#left_e .item").each(function(){
     var ddlid=$(this).attr("data-index")
    if(ddlid==el.toDeviceId){
     $(this).addClass("dpn")
    }
    })
  })
// 子节点消失
  eclist.map(function(el){
    $("#left_e .item").each(function(){
     var ddlid=$(this).attr("data-index")
    if(ddlid==el.toDeviceId){
     $(this).addClass("dpn")
    }
    })
  })
 //文件夹内容消失
 filelist.map(function(el){
    $("#left_e .item").each(function(){
     var ddlid=$(this).attr("data-index")
    if(ddlid==el.lindex){
     $(this).addClass("dpn")
    }
    })
  })

  // eplist.shift();



  jsPlumb.setContainer('main_e')

   $("#main_e .e_item").each(function(){
    var left1=$(this).position().left+pl;
    var left2=$(this).position().left+cl;
    // debugger
        jsPlumb.addEndpoint(this, { anchors: "BottomRight" }, deepCopy(origin, {uuid:$(this).attr("data-index")+"origin"}));//起点
        jsPlumb.addEndpoint(this, { anchors: "BottomLeft" },  deepCopy(destination, {uuid:$(this).attr("data-index")+"destination"}));//终点
        jsPlumb.draggable(this,{containment: "parent"});//端点可以拖动设置,并且将端点限制在父级内
        $(this).draggable({  //设置拖动到main区域中的元素还可以拖拽
          containment: "parent" //限制拖动不超过父级边框
        });
    if($(this).attr("ischild")=="true"){
      // console.log($(this).attr("data-index"))
      jsPlumb.animate($(this),{top:250,left:left2},{duration:350,easing:'easeOutBack'});
      cl+=200
    }else{
      jsPlumb.animate($(this),{top:100,left:left1},{duration:350,easing:'easeOutBack'});
    } 
    pl+=200;

   });
  for(var i=1;i<eplist.length;i++){

          jsPlumb.connect({uuids:[eplist[i].fromDeviceId+"origin",eplist[i].toDeviceId+"destination"]});
   };
   for(var j=0;j<eclist.length;j++){
          
          jsPlumb.connect({uuids:[eclist[j].fromDeviceId+"origin",eclist[j].toDeviceId+"destination"]});
          if(eclist[j].returnToId){
             jsPlumb.connect({uuids:[eclist[j].toDeviceId+"origin",eclist[j].returnToId+"destination"]});
          }
   };


   // eclist.map(function(el){

   // })


}
sco.edtp=edtp
















    


  });
          },500);   

    // //获取子级
    // function get_child(arr,id,re){
    //   var re1 = JSON.parse(JSON.stringify(re));
    //   arr.map(function(e){
    //     if(e.fromDeviceId==id){
    //       re1.push(e);
    //       if(has_child(arr,e.toDeviceId)){
    //         re1 = get_child(arr,e.toDeviceId,re1);
    //       }
    //     }
    //   })
    //     return re1;
    // }


    // //查看是否存在子级
    // function has_child(arr,id){
    //   var bool = 0;

    //   for (var i = 0; i < arr.length; i++) {
    //     if(arr[i].fromDeviceId==id){
    //       bool = 1;break;
    //     }
    //   }

    //   // arr.map(function(e){
    //   //   if(e.fromid==id){
    //   //     bool = 1;
    //   //   }
    //   // })
    //   return bool;
    // }





    //获取子级
    function get_child(arr,id,re){
      var re1 = JSON.parse(JSON.stringify(re));

      if(re1[0].child&&re1[0].child.length>0){
        re1[0].child = check_return(arr,re1[0].child);
      }

      arr.map(function(e,index){
        
        if(e.child&&e.child.length>0){
          e.child = check_return(arr,e.child);
        }

        if(e.fromDeviceId==id){
          re1.push(e);
          if(has_child(arr,e.toDeviceId)){
            re1 = get_child(arr,e.toDeviceId,re1);
          }
        }



      })
        return re1;
    }


    //查看是否存在子级
    function has_child(arr,id){
      var bool = 0;

      for (var i = 0; i < arr.length; i++) {
        if(arr[i].fromDeviceId==id){
          bool = 1;break;
        }
      }

      // arr.map(function(e){
      //   if(e.fromid==id){
      //     bool = 1;
      //   }
      // })
      return bool;
    }


    //检查分支是否有回路
    function check_return(arr,child){
      var last = child[child.length-1];
      arr.map(function(e,index){
        if(e.toDeviceId==last.toDeviceId){

          if(child.length>1){
            child[child.length-2].returnToId = e.toDeviceId;
            child.splice(child.length-1,1);
          }else{
            child[child.length-1].returnToId = e.toDeviceId;
          }
        }
      })

      return child;
    }




              
  // layer.open({
  //         type: 1,
  //         title: false, //不显示标题
  //         closeBtn: 0,
  //         shadeClose:false, 
  //         shade:0.5, 
  //         area: ['auto', 'auto'], //宽高
  //         content: $('#sqlfail')
  //       });
},

// 平台注册模块
register:function(sco) {
  sco.tapshow=0;
  // 1.注册表单提交
  sco.YS_obja.url="config/systemInfo/set";
  sco.YS_obja.method='POST';
  sco.YS_obja.before=function(sco){
    if(!sco.YS_obja.params.systemName){layer.tips("请输入平台名称！","#regpt",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!sco.YS_obja.params.managerName){layer.tips("请输入负责人姓名！","#regxm",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!sco.YS_obja.params.managerPhone){layer.tips("请输入负责人联系电话！","#regphone",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!(/^1[34578]\d{9}$/.test(sco.YS_obja.params.managerPhone))&&!(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(sco.YS_obja.params.managerPhone))){layer.tips("请输入正确的电话号码！","#regphone",{tips: [3, 'rgba(0,0,0,.8)','']});return false}
    if(!sco.YS_obja.params.managerEmail){layer.tips("请输入负责人公安网邮箱地址！","#regemail",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(sco.YS_obja.params.managerEmail))){layer.tips("请输入正确的负责人公安网邮箱地址！","#regemail",{tips: [3, 'rgba(0,0,0,.8)','']});return false}
  }
  sco.YS_obja.done=function(re,sco){
    if(re.code == 0){
      layer.msg(re.msg);
       layer.open({
        type: 1,
        title: false, //不显示标题
        closeBtn: 0,
        shadeClose:false, 
        shade:0.5, 
        area: ['auto', 'auto'], //宽高
        content: $('#regsucc')
      });
     sco.fetch('YS_objb'); 
  }else{
      re.msg?layer.msg(re.msg):layer.msg('注册失败')
    }
  }
sco.has=0;
  sco.YS_objb.url="config/systemInfo/get";
  sco.YS_objb.method='POST';
  sco.YS_objb.done=function(re,sco){
    if(re.code == 0){
    sco.YS_obja.params=JSON.parse(re.data.configData);
               debugger;
      if (sco.YS_obja.params){
        sco.has=1;
      } 
  }else{
     
    }
  }
sco.fetch('YS_objb');









},

// syslog设置日志
syslog:function(sco) {
  sco.tapshow=0;
  // 1.注册表单提交
  sco.YS_obja.url="config/syslog2other/set";
  sco.YS_obja.method='POST';
  sco.YS_obja.before=function(sco){
   if(!sco.YS_obja.params.ip){
     layer.tips("请输入IP地址！","#syslogip",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };
    if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_obja.params.ip)){layer.tips("请输入合法的IP地址！","#syslogip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  
   if(!sco.YS_obja.params.port){
     layer.tips("请输入端口！","#sysport",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };



  }
  sco.YS_obja.done=function(re,sco){
    if(re.code == 0){
    //  layer.msg(re.msg);
       layer.open({
        type: 1,
        title: false, //不显示标题
        closeBtn: 0,
        shadeClose:false, 
        shade:0.5, 
        area: ['auto', 'auto'], //宽高
        content: $('#regsucc')
      });
  }else{
     re.msg?YSfac.load(1,re.msg):YSfac.load(1,'设置失败');
    }
  }

  sco.YS_objb.url="config/syslog2other/get";
  sco.YS_objb.method='POST';
  sco.YS_objb.done=function(re,sco){
    if(re.code == 0){
sco.YS_obja.params=JSON.parse(re.data.configData);
               debugger;
  }else{
     
    }
  }
sco.fetch('YS_objb');

/*日志保留设置*/


sco.YS_objc.url="config/logOverDay/get";
  sco.YS_objc.done = function(re, sco) {
    if(re.code==0){
      if(!re.data){
        return false;
      }else{
      sco.YS_objd.params.logOverDay =JSON.parse(re.data.configData).LogOverDay;
    }
    }
  };
sco.fetch("YS_objc")


sco.YS_objd.url="config/logOverDay/set";
sco.YS_objd.params.logOverDay = '';
  sco.YS_objd.before= function(sco){
if (sco.YS_objd.params.logOverDay==''){
  layer.tips("请输入保留天数！","#plarz",{tips: [3, 'rgba(0,0,0,.8)','']});return false
}
  };

  sco.YS_objd.done = function(re, sco) {
    if(re.code==0){
      //re.msg?YSfac.load(1,re.msg):YSfac.load(1,'设置成功');
      sco.fetch('YS_obja');
    }else{
    re.msg?YSfac.load(1,re.msg):YSfac.load(1,'设置失败');
    }
  };















},

//平台管理模块
platformadmin:function(sco) {
  console.log(sco.path)
  // 1保存表单验证
 
  // 4获取日志过期天数
  // 5设置日志过期天数

},

// 网络配置
networkconf:function(sco){
  sco.tapshow=0;

  sco.YS_objb.url="/system/netWorkGet";
  sco.YS_objb.done=function(re,sco){
    if(re.code==0){
        if(re.data){
          sco.YS_obja.params = JSON.parse(re.data.configData);
          console.log(sco.YS_objb);
        }
  }
  }  
sco.fetch('YS_objb');



  sco.YS_obja.url="/system/netWorkSet";
  // sco.YS_obja.params={ip:'192.168.125.1',zwym:'255.255.255.0',wg:'192.168.0.1',sxdns:'255.6.6.6',bydns:'255.5.5.5',tjlx:'内科',tjsj:[{time1:'10:01:01'},{time2:'11:10:00'}],rzts:'30'};
  sco.YS_obja.before=function(sco){
    if(!sco.YS_obja.params.localIp){layer.tips("请输入IP地址！","#plaip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_obja.params.localIp)){layer.tips("请输入合法的IP地址！","#plaip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};

    if(!sco.YS_obja.params.subnetMask){layer.tips("请输入子网掩码！","#playm",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!(/^(254|252|248|240|224|192|128|0)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(254|252|248|240|224|192|128|0))$/).test(sco.YS_obja.params.subnetMask)){layer.tips("请输入合法的子网掩码！","#playm",{tips: [3, 'rgba(0,0,0,.8)','']});return false};

    if(!sco.YS_obja.params.gateway){layer.tips("请输入网关！","#plawg",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!(/(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}/).test(sco.YS_obja.params.gateway)){layer.tips("请输入合法的网关！","#plawg",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    
    if(!sco.YS_obja.params.dns){layer.tips("请输入首选DNS服务器！","#plasxdns",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!sco.YS_obja.params.dnsBak){layer.tips("请输入备用DNS服务器！","#plabydns",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  }
  sco.YS_obja.done=function(re,sco){
    if(re.code==0){
      re.msg?YSfac.load(1,re.msg):YSfac.load(1,'提交成功');

  }else{
          re.msg?YSfac.load(1,re.msg):YSfac.load(1,'提交失败');
    }
  }  
},
// 体检配置
physicalconf:function(sco){
  sco.tapshow=0;
  // 1获取自动体检时间
  // 2设置自动体检时间

sco.timearr = [];
sco.temptime = '';
  // 1获取自动体检时间
  sco.YS_obja.url="config/autoCheckTimes/get";
  sco.YS_obja.done=function(re,sco){
    if(re.code==0){
      var rec = JSON.parse(re.data.configData);
      sco.timearr = rec.checkTimes;
      sco.YS_objb.params.checkTimes = rec.checkTimes;
      // sco.YS_objb.params.checkTimes = ["9:22","10:11","12:13"];
    }
  }
  sco.fetch('YS_obja');
  



  // 1设置自动体检时间
  sco.YS_objb.url="config/autoCheckTimes/set";
  sco.YS_objb.done=function(re,sco){
    if(re.code==0){
      YSfac.load(1,'保存成功');
    }else{
       YSfac.load(1,'保存成功');
    }
    
  }
  






},

// 日志配置
logconf:function(sco){
    // 1获取日志过期天数
    // 2设置日志过期天数
 sco.tapshow=0;
    // 1获取日志过期天数
sco.YS_obja.url="config/logOverDay/get";
  sco.YS_obja.done = function(re, sco) {
    if(re.code==0){
      if(!re.data){
        return false;
      }else{
      sco.YS_objb.params.logOverDay =JSON.parse(re.data.configData).LogOverDay;
    }
    }
  };
sco.fetch("YS_obja")


sco.YS_objb.url="config/logOverDay/set";
sco.YS_objb.params.logOverDay = '';

  sco.YS_objb.before = function(sco) {
if (sco.YS_objb.params.logOverDay = '') {
  YSfac.load(1,'天数不能为空')
} 
  };
  sco.YS_objb.done = function(re, sco) {
    if(re.code==0){
      re.msg?YSfac.load(1,re.msg):YSfac.load(1,'设置成功');
    }else{
       re.msg?YSfac.load(1,re.msg):YSfac.load(1,'设置失败');
    }
  };






},



//系统自检模块
sysexam:function(sco) {

sco.tapshow=0;
sco.zzjc = -1;
sco.templist = [];
sco.examine = [];
  // 本系统检查
sco.YS_obja.url="system/check";
sco.YS_obja.before = function(sco){
  if(sco.zzjc==1){
    return false;
  }
}

  sco.YS_obja.done = function(re, sco) {
    if(re.code==0){



      sco.YS_objb.params.checkId = re.data.checkId;
      sco.YS_objb.params.index = 0;
      sco.examine = [];
      // YSfac.setstore("checkid",re.data.checkId);
      // console.log(YSfac.getstore("checkid"))
      // setTimeout(function(){
        sco.fetch("YS_objb");
      // },2000)
    }else{
     
    }
  };

// 获取检查信息
sco.YS_objb.url="system/checkInfo";
sco.YS_objb.method="POST"
// sco.YS_objb.params={checkId:YSfac.getstore("checkid"),index:0}
sco.YS_objb.data=[];

  sco.YS_objb.done = function(re) {
    if(re.code==0){
      re.data.checkItems.map(function(elem){
        sco.examine.push(elem);
      });
    }
      // sco.YS_objb.data =re.data.checkItems;
      // sco.$apply();
  };

  function qian(sco){

  var i = 0;
   var int = setInterval(function(){
    if(i==13){i=0};
    var imgsrc = '../images/qian'+ i + '.png';
      $('.bf-qian').attr("src",imgsrc);
      i++
   },150)
  return int;

}
  sco.qian = qian();





 
  function xping(sco){
    var i = 1;
    var time =120;
    var int = setInterval(function(){
      if(i==26){i=1};
      var imgsrc = '../images/xp'+ i + '.png';
        $('.xping').attr("src",imgsrc);
        i++;
        time += 50;
     },time)
    return int;
  }
    sco.xping = xping()
},

// 恢复备份模块
restoreback:function(sco) {
  sco.tapshow=0;
  sco.rooturl = '';
  // 1恢复出厂设置
  // 2备份系统
  // 3恢复系统

  // 1恢复出厂设置
  sco.YS_obja.url="system/reset";
  sco.YS_obja.method="POST";
  // 2备份系统
  sco.YS_objb.url="system/bakupConfig";
  // 3恢复系统
  sco.YS_objc.url="system/reloadConfig";
  sco.YS_obja.method="POST";

       // layer.open({
       //    type: 1,
       //    title: false, //不显示标题
       //    closeBtn: 0,
       //    shadeClose:false, 
       //    shade:0.5, 
       //    area: ['auto', 'auto'], //宽高
       //    content: $('#resucc')
       //  });
},

//电源管理模块
power:function(sco) {
  sco.tapshow=0;
  // 1系统重启
  // 2系统关机
  // 3获取sshd开关
  // 4设置sshd开关
  // 1系统重启

 sco.YS_obja.url="system/shutDown";
 sco.YS_obja.params.reboot=true;
 sco.YS_obja.method="POST"

  sco.YS_obja.done=function(re,sco){
      if (re.code==0) {
        re.msg&&re.msg!=''?layer.msg(re.msg):layer.msg('操作成功')
      } else {
        re.msg&&re.msg!=''?layer.msg(re.msg):layer.msg('操作失败')
      }
  }  



  // 2系统关机
  sco.YS_objb.url="system/shutDown";
 sco.YS_objb.params.reboot=false;
 sco.YS_objb.method="POST"

  sco.YS_objb.done=function(re,sco){
      if (re.code==0) {
        re.msg&&re.msg!=''?layer.msg(re.msg):layer.msg('操作成功')
      } else {
        re.msg&&re.msg!=''?layer.msg(re.msg):layer.msg('操作失败')
      }
  }  


  // 3获取sshd开关
  sco.YS_objc.url="config/sshd/get";
  sco.YS_objc.done=function(re,sco){
    if(re.code==0){
      if(!re.data){
        return false;
      }else{
      sco.YS_objd.params.open =JSON.parse(re.data.configData).open;
    }
    }
  }
  sco.fetch('YS_objc');

  // 4设置sshd开关
  sco.YS_objd.url="config/sshd/set";
  sco.YS_objd.params.open = '';
  sco.YS_objd.done=function(re,sco){
    if(sco.YS_objd.params.open == true){
      layer.msg('已打开！');
    }else{
      layer.msg('已关闭！');
    }
  }









},

//licenses授权模块
licenses:function(sco) {
  sco.tapshow=0;
  sco.licenseKey = '';
  sco.filename = "";

  sco.YS_obja.url="license/key";
  sco.YS_obja.before=function(sco){
  }  
  sco.YS_obja.done=function(re,sco){
    sco.licenseKey = re.data.licenseKey;
  }  
  sco.fetch('YS_obja');



  sco.YS_objb.url="license/check";
  sco.YS_objb.before=function(sco){
  }  
  sco.YS_objb.done=function(re,sco){
  }  
  sco.fetch('YS_objb');



},

//工具箱模块
tools:function(sco) {
  sco.mesagea=[];
  sco.mesageb=[];
  sco.mesagec=[];
  sco.mesaged=[];

  sco.tapshow=0;
  //ping接口
  sco.YS_obja.url="/tools/ping";
  sco.YS_obja.method="POST";
  sco.YS_obja.params.deviceId=sco.YS_obje.params.deviceId;
  sco.YS_obja.before=function(sco){
   if(!sco.YS_obja.params.ip){
     layer.tips("请输入IP地址！","#toolip",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };
    if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_obja.params.ip)){layer.tips("请输入合法的IP地址！","#toolip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  
   if(!sco.YS_obja.params.netArea){
     layer.tips("请选择网段！","#toolwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };

if (sco.YS_obja.params.netArea==2&&!sco.YS_obja.params.deviceId) {
     layer.tips("请选择探针！","#tooltz",{tips: [3, 'rgba(0,0,0,.8)','']});return false


}
  // sco.mesage.push('检测中，请稍后......');
    YSfac.load2(1,"检测中...");
  }  
  sco.YS_obja.done=function(re,sco){
     layer.closeAll();
      sco.mesagea=[];
   if(re.code==0){     

    if(re.data.msg){
      re.data.msg = re.data.msg.split(':');

      re.data.msg.map(function(elem){
        sco.mesagea.push(elem);
      })
    }else{
      sco.mesagea.push('数据为空');
    }
        
}else{

   if (re.msg&&re.msg!='') {
   layer.msg(re.msg);
      sco.mesagea.push(re.msg);
   }else{
    sco.mesagea.push('检测失败');
   }
  
}

  } 



  //telnet接口
  sco.YS_objb.url="/tools/telnet";
  sco.YS_objb.method="POST";
  sco.YS_objb.params.deviceId=sco.YS_obje.params.deviceId;
  sco.YS_objb.before=function(sco){
   if(!sco.YS_objb.params.ip){
     layer.tips("请输入IP地址！","#telnetip",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };
    if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_objb.params.ip)){layer.tips("请输入合法的IP地址！","#telnetip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  


   if(!sco.YS_objb.params.port){
     layer.tips("请输入端口！","#telnetport",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };


   if(!sco.YS_objb.params.netArea){
     layer.tips("请选择网段！","#telnetwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };

if (sco.YS_objb.params.netArea==2&&!sco.YS_objb.params.deviceId) {
     layer.tips("请选择探针！","#telnettz",{tips: [3, 'rgba(0,0,0,.8)','']});return false


}
    YSfac.load2(1,"检测中...");
  }  
  sco.YS_objb.done=function(re,sco){
             sco.mesageb=[];

    if(re.code==0){
      layer.closeAll();
      if(re.data.isConnect){
        sco.mesageb.push("网络正常，telnet成功");
      }else{
        sco.mesageb.push("网络不通，telnet失败");
      }
    }else{
        if (re.msg&&re.msg!='') {
        layer.msg(re.msg);
        sco.mesageb.push(re.msg);
        }else{
        sco.mesageb.push('检测失败');
        }
    }
  } 



//数据库 YS_objc
  sco.YS_objc.url="/tools/testDB";
  sco.YS_objc.method="POST";
  sco.YS_objc.params.deviceId=sco.YS_obje.params.deviceId;
  sco.YS_objc.before=function(sco){


   if(!sco.YS_objc.params.dbName){
     layer.tips("请输入数据库名！","#sqldkname",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };


   if(!sco.YS_objc.params.ip){
     layer.tips("请输入IP地址！","#sqlip",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };
    if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_objc.params.ip)){layer.tips("请输入合法的IP地址！","#sqlip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
  


   if(!sco.YS_objc.params.port){
     layer.tips("请输入端口！","#sqlport",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };

   if(!sco.YS_objc.params.name){
     layer.tips("请输入用户名！","#sqluname",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };

   if(!sco.YS_objc.params.pwd){
     layer.tips("请输入密码！","#sqlpwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };





   if(!sco.YS_objc.params.netArea){
     layer.tips("请选择网段！","#sqlwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };

if (sco.YS_objc.params.netArea==2&&!sco.YS_objc.params.deviceId) {
     layer.tips("请选择探针！","#sqltz",{tips: [3, 'rgba(0,0,0,.8)','']});return false


}
 YSfac.load2(1,"检测中...");
  }  
  sco.YS_objc.done=function(re,sco){
    sco.mesageb=[];
            layer.closeAll();

    if(re.code==0){
      if(re.data.isConnect){
        sco.mesagec.push("网络正常，数据库连接成功");
      }else{
        sco.mesagec.push("网络不通，数据库连接失败");
      }
    }else{
                if (re.msg&&re.msg!='') {
        layer.msg(re.msg);
        sco.mesagec.push(re.msg);
        }else{
        sco.mesagec.push('检测失败');
        }
    }
  } 



//ftp
  sco.YS_objd.url="tools/ftp";
  sco.YS_objd.method="POST";
  sco.YS_objd.params.deviceId=sco.YS_obje.params.deviceId;
  sco.YS_objd.before=function(sco){


   if(!sco.YS_objd.params.ip){
     layer.tips("请输入ftp地址！","#ftpname",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };



   if(!sco.YS_objd.params.port){
     layer.tips("请输入端口！","#ftpport",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };

   if(!sco.YS_objd.params.name){
     layer.tips("请输入用户名！","#ftpuname",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };

   if(!sco.YS_objd.params.pwd){
     layer.tips("请输入密码！","#ftppwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };





   if(!sco.YS_objd.params.netArea){
     layer.tips("请选择网段！","#ftpwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
    };

if (sco.YS_objd.params.netArea==2&&!sco.YS_objd.params.deviceId) {
     layer.tips("请选择探针！","#ftptz",{tips: [3, 'rgba(0,0,0,.8)','']});return false
}

       YSfac.load2(1,"检测中...");

  }  
  sco.YS_objd.done=function(re,sco){
    sco.mesaged=[];
      layer.closeAll();
    if(re.code==0){
           re.msg?sco.mesaged.push(re.msg):sco.mesaged.push('检测成功,FTP连接正常');
  }else{
           re.msg?sco.mesaged.push(re.msg):sco.mesaged.push('检测失败');
    }
  } 


  //获取探针接口类型
  sco.YS_obje.url='device/queryAllDetector';
  sco.YS_obje.done=function(re,sco){
    setTimeout(function(){
      layui.use('form', function(){
        layui.form.render();
      }); 
    },100)
    sco.YS_obje.params.deviceName=re.data.list.deviceName;
    sco.YS_obje.params.deviceId=re.data.list.deviceId;
  }
  // sco.fetch('YS_obje');












},

//用户列表模块
userlist:function(sco) {


  
// 获取用户列表信息
  sco.YS_plista.url="user/queryAll";

  sco.YS_plista.done = function(re, sco) {
    if(re.code==0){
       re.data.users.map(function(el){
        var time =  el.createTime;
        var sd = el.loginTimeStart;
        var ed = el.loginTimeEnd;
        time = YSfac.numtosecond(time);  
        el.createTime = time;
      });
       sco.YS_plista.data = re.data;
       console.log(sco.YS_plista)
    }
   
  };
  sco.fetch('YS_plista');


    // 解锁
  sco.YS_obja.url="user/unlock";
  sco.YS_obja.done = function(re, sco) {
    if(re.code==0){
      layer.msg("解锁成功！")
    }else{
      layer.msg("解锁失败！")
    }
  };

  // 重置密码
  sco.resetmsg='';
  sco.YS_objb.url="user/resetPwd";

    sco.YS_objb.before=function(sco){

    };
  sco.YS_objb.done = function(re, sco) {
    if(re.code==0){
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#pwdresucc')
          });

      
    }else{
      layer.msg("密码重置失败！")
    }
  };
   
  // 删除
  sco.YS_objc.url="user/del";
  sco.YS_objc.done = function(re, sco) {
        layer.closeAll();
    if(re.code==0){
      re.msg?YSfac.load(1,re.msg):YSfac.load(1,"删除成功！");
      setTimeout(function(){
       sco.fetch('YS_plista');
      },1000)
    }else{
   re.msg?YSfac.load(1,re.msg):YSfac.load(1,"删除失败！");
      setTimeout(function(){
        sco.fetch('YS_plista');
      },1000)
    }
  };
// layer.open({
//           type: 1,
//           title: false, //不显示标题
//           closeBtn: 0,
//           shadeClose:false, 
//           shade:0.5, 
//           area: ['auto', 'auto'], //宽高
//           content: $('#remove')
//         });
},

//编辑用户模块
edituser:function(sco) {
  sco.rip=false;
  sco.rtime=false;

  // 编辑用户
  sco.YS_obja.url="user/update";
  sco.YS_obja.method="POST"
  sco.YS_obja.before = function(sco) {
    // if(sco.YS_obja.params.createTime)sco.YS_obja.params.createTime/=1000;
    // if(sco.YS_obja.params.updateTime)sco.YS_obja.params.updateTime/=1000;
    sco.YS_obja.params.uName = sco.YS_obja.params.name;
    delete sco.YS_obja.params.name;
    delete sco.YS_obja.params.status;
    delete sco.YS_obja.params.createTime;
    delete sco.YS_obja.params.updateTime;
  };
  sco.YS_obja.done = function(re, sco) {
    if(re.code==0){
   YSfac.load(1,"保存成功");

      setTimeout(function(){
        window.location.href = '/#/userlist';
      },1000)
    }else{
         YSfac.load(1,"保存失败");
    }
  };
  //查询用户信息
  sco.YS_objb.url="user/query";
  sco.YS_objb.params.uid=YSfac.getstore("uid"); 
 
  sco.YS_objb.done = function(re, sco) {
    if(re.code==0){
    //  re.data.loginTimeStart = YSfac.numtohms(re.data.loginTimeStart);
    //  re.data.loginTimeEnd = YSfac.numtohms(re.data.loginTimeEnd);
      sco.YS_obja.params =re.data;


      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },300)
      // var select = 'dd[lay-value=' + re.data.auth + ']';
      // $('#auth').siblings("div.layui-form-select").find('dl').find(select).click();
    }else{
      layer.msg(re.msg)
    }
  };
  sco.fetch("YS_objb")

  // 解锁
  sco.YS_objc.url="user/unlock";
  sco.YS_objc.params.uid=YSfac.getstore("uid"); 
  sco.YS_objc.done = function(re, sco) {
    if(re.code==0){
      layer.msg("解锁成功！")
      sco.YS_obja.params.status=1;
     //s sco.apply();
    }else{
      layer.msg("解锁失败！")
    }
  };

  // 重置密码
  sco.YS_objd.url="user/resetPwd";

    sco.YS_objd.before=function(sco){

    };
  sco.YS_objd.done = function(re, sco) {
    if(re.code==0){

     layer.msg(re.msg)
      
    }else{
      layer.msg("密码重置失败！")
    }
  };
   
  // 删除
  sco.YS_obje.url="user/del";
  sco.YS_obje.params.uid=YSfac.getstore("uid"); 
  sco.YS_obje.done = function(re, sco) {
   if(re.code==0){
      layer.msg("删除成功！");
      setTimeout(function(){

        layer.closeAll();
      },1000)
    }else{
      layer.msg("删除失败！")
      setTimeout(function(){
        layer.closeAll();
      },1000)
    }
  };
   


},
//用户信息模块
userinfo:function(sco) {
  sco.YS_obja.url="user/insert";
  sco.YS_obja.method="POST";
  sco.YS_obja.before=function(sco){
    if(!sco.YS_obja.params.uName){layer.tips("请输入用户名！","#uName",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!sco.YS_obja.params.pwd){layer.tips("请输入密码！","#pwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!(/(?![0-9A-Z]+$)(?![0-9a-z]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/.test(sco.YS_obja.params.pwd))){layer.tips("密码需要8~20位同时包含数字和大小写字母！","#pwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!$('#pwd').val()==$('#repwd').val()){layer.tips("两次输入密码不一样！","#repwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!sco.YS_obja.params.name){layer.tips("请输入姓名！","#name",{tips:[3,'rgba(0,0,0,.8)','']});return false};
    if(!sco.YS_obja.params.phone){layer.tips("请输入手机号码！","#phone",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!(/^1[34578]\d{9}$/.test(sco.YS_obja.params.phone))&&!(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(sco.YS_obja.params.phone))){layer.tips("请输入正确的电话号码！","#phone",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!sco.YS_obja.params.email){layer.tips("请输入电子邮箱！","#email",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(sco.YS_obja.params.email))){layer.tips("请输入正确的邮箱地址！","#email",{tips: [3, 'rgba(0,0,0,.8)','']});return false}
    if(!sco.YS_obja.params.auth){layer.tips("请设置权限！","#auth",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!sco.YS_obja.params.loginIpStart){layer.tips("请输入开始IP地址！","#loginIpStart",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_obja.params.loginIpStart)){layer.tips("请输入合法的IP地址！","#loginIpStart",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!sco.YS_obja.params.loginIpEnd){layer.tips("请输入结束IP地址！","#loginIpEnd",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(sco.YS_obja.params.loginIpEnd)){layer.tips("请输入合法的IP地址！","#loginIpEnd",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
    if(!sco.YS_obja.params.loginTimeStart){layer.tips("设置开始登录时段！","#loginTimeStart",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
    if(!sco.YS_obja.params.loginTimeEnd){layer.tips("请设置结束登录时段！","#loginTimeEnd",{tips: [3, 'rgba(0,0,0,.8)','']});return false}; 
  }  
  sco.YS_obja.done=function(re,sco){
    if(re.code==0){
     re.msg?YSfac.load(1,re.msg):YSfac.load(1,'添加成功');
              setTimeout(function(){
  window.location.href = '/#/userlist'; 
      },1000)
  }else{
    re.msg?YSfac.load(1,re.msg):YSfac.load(1,'添加失败');
     
    }
  }  
},


}; 











































//初始化控制器 ============================================================================
var app = angular.module("app", []);
//过滤html 
app.filter("htmlfil",["$sce",function($sce){ 
  return function(text){ return $sce.trustAsHtml(text);};
}]);  

 
app.controller('ctrl', ['$scope','$http',function($scope,$http){ 
$scope.tapshow = 0;
$scope.tapnav = 0;
$scope.ischk =true;
$scope.zzjc =-1;
$scope.box =false;
//初始化
$scope.conf = conf;
$scope.main = main;  
$scope.$http = $http;
$scope.value = {};//备用与增加或者编辑
$scope.ystab = 0; //定义tab切换变量
$scope.reload = true;



YS("tableExport");
YS("wangEditor");
//存放 html路径,模块路径，hash参数对象
$scope.hrefinfo = {url:'',path:'',hashobj:{}};

//初始化公共
$scope.com_del = {params:{},data:{}};//公共删除
$scope.com_add = {params:{},data:{}};//公共增加
$scope.com_edit = {params:{},data:{}};//公共增加

conf.subfix.map(function(elem) { //定义接口数据容器
 $scope['com_obj'+elem] = {params:{},data:{}};
 $scope['com_list'+elem] = {load:true,params:{},data:[]};
 $scope['com_plist'+elem]  = {load:true,page:true,params:{pageSize:10,currentPage:1},data:{datalist:[]}};

 $scope['YS_list'+elem] = {load:true,params:{},data:[]};
 $scope['YS_plist'+elem]  = {load:true,page:true,params:{pageSize:10,currentPage:1},data:{datalist:[]}};
 $scope['YS_obj'+elem] = {params:{},data:{}};
}); 

$scope.fetch = function(key){//定义公共方法：请求函数 
 YSfac.fetdata($scope,key); 
}; 

$scope.dealhash = function(str,sco){ //定义处理html路径，模块路径，hash的参数对象的方法
  var url = str.split('#/'); 
  sco.hrefinfo.url = conf.index;
  sco.hrefinfo.path = conf.indexpath;
  if(url[1]){
    var key = url[1].split('?'); 
    sco.hrefinfo.url = conf.tplpath +'/'+ key[0]+'.html?time='+YSfac.time();
    // sco.hrefinfo.url = window.location.origin+'/phtml?name='+key[0]+'&prcodeid='+YSfac.getstore('prcodeid');

    sco.hrefinfo.path = key[0];
    key[1]&&(sco.hrefinfo.hashobj = YSfac.hashToobj(key[1])); 
  } 
}
$scope.dealhash(location.href,$scope); //调用方法，设置hash，html路径，hash参数  

$scope.init = function(sco) { //初始化每一个模块的数据容器
 conf.subfix.map(function(elem) { 
 sco['YS_list'+elem] = {load:true,params:{},data:[]};
 sco['YS_plist'+elem]  = {load:true,page:true,params:{pageSize:10,currentPage:1},data:{datalist:[]}}; 
 sco['YS_obj'+elem] = {params:{},data:{}};
});  
main[sco.hrefinfo.path]&&main[sco.hrefinfo.path](sco);//找到相关的模块，传入$scope,执行这个函数
}
$scope.ready = function(){$scope.init($scope);}// 加载模块html完成以后，初始化让$scope有这些数据 

window.onhashchange = function(){// hash变化，要执行两个方法
  $scope.dealhash(location.href,$scope); 
  $scope.$apply();
};



main.ctrl_init($scope);//初始化ctrl，执行一些方法  
console.log("=========================");
console.log($scope);
}]);

//邀请控制器
app.controller('shouquan', ['$scope','$http',function($scope,$http){ 
//初始化
$scope.conf = conf;
$scope.main = main;  
$scope.$http = $http;
$scope.value = {};//备用与增加或者编辑

//存放 html路径,模块路径，hash参数对象
$scope.hrefinfo = {url:'',path:'',hashobj:{}};   
//初始化公共
conf.subfix.map(function(elem) { //定义接口数据容器
 $scope['com_obj'+elem] = {params:{},data:{}};
 $scope['com_list'+elem] = {load:true,params:{},data:[]};
 $scope['com_plist'+elem]  = {load:true,page:true,params:{pageSize:10,currentPage:1},data:{datalist:[]}};

 $scope['YS_list'+elem] = {load:true,params:{},data:[]};
 $scope['YS_plist'+elem]  = {load:true,page:true,params:{pageSize:10,currentPage:1},data:{datalist:[]}};
 $scope['YS_obj'+elem] = {params:{},data:{}};
}); 

$scope.fetch = function(key){//定义公共方法：请求函数 
 YSfac.fetdata($scope,key); 
}; 

$scope.dealhash = function(str,sco){ //定义处理html路径，模块路径，hash的参数对象的方法
  var url = str.split('#/'); 
  sco.hrefinfo.url = conf.index;
  if(url[1]){
    var key = url[1].split('?'); 
    sco.hrefinfo.url = conf.tplpath +'/'+ key[0]+'.html?time='+YSfac.time();
    sco.hrefinfo.path = key[0];
    key[1]&&(sco.hrefinfo.hashobj = YSfac.hashToobj(key[1])); 
  } 
}
$scope.dealhash(location.href,$scope); //调用方法，设置hash，html路径，hash参数  

$scope.init = function(sco) { //初始化每一个模块的数据容器
 conf.subfix.map(function(elem) { 
 sco['YS_list'+elem] = {load:true,params:{},data:[]};
 sco['YS_plist'+elem]  = {load:true,page:true,params:{listnum:10,curPage:1},data:{datalist:[]}}; 
 sco['YS_obj'+elem] = {params:{},data:{}};
});  
main[sco.hrefinfo.path]&&main[sco.hrefinfo.path](sco);//找到相关的模块，传入$scope,执行这个函数
}
$scope.ready = function(){$scope.init($scope);}// 加载模块html完成以后，初始化让$scope有这些数据 

window.onhashchange = function(){// hash变化，要执行两个方法
  $scope.dealhash(location.href,$scope); 
  $scope.$apply();
};


//获取工程和邀请者信息
  $scope.YS_obja.url = 'open/program_pro_info';
  $scope.YS_obja.before = function(sco) {
  $scope.YS_obja.params.codeid = obj.u;
  };
$scope.YS_obja.done = function(re, sco) {

};


  $scope.tapshow=0;
  $scope.licenseKey = '';
  $scope.filename = "";

  $scope.YS_obja.url="license/key";
  $scope.YS_obja.before=function(sco){
  }  
  $scope.YS_obja.done=function(re,sco){
    sco.licenseKey = re.data.licenseKey;
  }  
  $scope.fetch('YS_obja');



  $scope.YS_objb.url="license/check";
  $scope.YS_objb.before=function(sco){
  }  
  $scope.YS_objb.done=function(re,sco){
  }  
  $scope.fetch('YS_objb');








}]);























//公共指令 ============================================================================


//点击，赋值 setvalue="YS_listb.params.type" run='YS_listb'
app.directive('setvalue', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){
           var ctrlsco = YSfac.getscope_byid(sco,2);
           var arr = iAttrs.setvalue.split('.'); 
           var obj = ctrlsco;
           var key = '';
           arr.map(function(el,ind){ 
            ind<arr.length-1&&(obj = obj[el]);
            ind==arr.length-1&&(key=el);
          });
           obj[key] = iAttrs.value; 

if (iAttrs.dataarr==1){
  ctrlsco.dataarr=[];
}
if (ctrlsco[arr[0]][arr[1]].curPage) {
  ctrlsco[arr[0]][arr[1]].curPage =1;
}

           iAttrs.run&&ctrlsco.fetch(iAttrs.run);
           ctrlsco.$apply(); 
        });
     }
};
}); 
//点击去请求某个接口ysenter="YS_plista"
app.directive('ysfetch', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2);
           ctrlsco.fetch(iAttrs.ysfetch); 
        });
     }
};
}); 



//回车，就去请求某个接口ysenter="YS_plista"
app.directive('ysenter', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("keyup",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);

          e.keyCode==13&&ctrlsco.fetch(iAttrs.ysenter);
        });
     }
};
}); 

//checkbox 全选yschkall="YS_plista.data.datalist"
app.directive('yschkall', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2); 
           var arr = iAttrs.yschkall.split('.'); 
           var list = ctrlsco; 
           arr.map(function(el){
            list = list[el];
          }); 
           list.map(function(el){
            el.ischk = $(iElm).find('input').is(':checked');
          });
           
           ctrlsco.$apply(); 
        });
     }
};
}); 


//checkbox 单选yschk="YS_obja.params.banbe" run="YS_obja"
    app.directive('yschk', function () {
        return {
            link: function (sco, iElm, iAttrs) {
                iElm.on("click", function (e) {
                    var ctrlsco = YSfac.getscope_byid(sco, 2);
                    ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.yschk, $(iElm).find('input').is(':checked'));
                    // ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.yschk, $(iElm).is(':checked'));
                    iAttrs.run && ctrlsco.fetch(iAttrs.run);
                    ctrlsco.$apply();
                });
            }
        };
    });


//checkbox公共勾选赋值   valchk 
app.directive('valchk',function(){ 
    return { 
        link: function(sco, iElm, iAttrs) {
            iElm.on("click",function(e){ 
              var ctrlsco = YSfac.getscope_byid(sco,2); 
                   sco.value.ischk = !sco.value.ischk; 
                    ctrlsco.$apply(); 
                 });
        }
    };
});


//某一行的开关 valswitch变化进行更新 valswitch='ycys'
app.directive('valswitch', function () {
    return {
        link: function (sco, iElm, iAttrs) {
            iElm.on("click", function (e) {
              var _th = $(iElm); 
                var ctrlsco = YSfac.getscope_byid(sco, 2);
                var d = {codeid:sco.value.codeid};
                d[iAttrs.valswitch] = sco.value[iAttrs.valswitch]==1?0:1;
                ctrlsco.com_edit.params = d;
                ctrlsco.com_edit.done = function(re,scos){
                  YSfac.updatetd(re,_th);
                  if(re.code==1){
                    sco.value[iAttrs.valswitch] = d[iAttrs.valswitch];
                  }
                } 
                ctrlsco.fetch('com_edit');
                ctrlsco.$apply();
            });
        }
    };
});

//公共方法 td值变化失去 进行更新，ystd="com_edit.params.open" 
app.directive('ystd', function() {
return {
link: function(sco, iElm, iAttrs) {
iElm.on("blur", function() { 
    var ctrlsco = YSfac.getscope_byid(sco, 2);
    var _this = $(iElm);
    var x = $(this).text();
if(x==''&&sco.value[iAttrs.ystd]==undefined){return false; }
  if(sco.value[iAttrs.ystd]!=x){
      sco.value[iAttrs.ystd] = x; 
      ctrlsco.com_edit.params = {codeid: sco.value.codeid};
      ctrlsco.com_edit.params[iAttrs.ystd] = x;
      ctrlsco.com_edit.done = function(re, sco) {
      YSfac.updatetd(re,_this); 
      }
      ctrlsco.fetch('com_edit');   
  }
});
}
};
});



//公共关闭弹窗
app.directive('comclose', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){
              layer.closeAll();
        });
     }
};
});




//checkbox公共勾选  并更新接口 yschkupdate="com_objf.params.open"
app.directive('yschkupdate',function(){ 
    return { 
        link: function(sco, iElm, iAttrs) {
            iElm.on("click",function(e){ 
              var ctrlsco = YSfac.getscope_byid(sco,2); 
              var arr = iAttrs.yschkupdate.split('.'); 
              var a = [1,0];
              var key = iAttrs.yschk; 
            //  sco.value[key] = $(iElm).is(":checked")?1:0; 
               ctrlsco[arr[0]][arr[1]].menucodeid = sco.value.codeid;
               ctrlsco[arr[0]][arr[1]].prcodeid = YSfac.getstore('prcodeid');
               ctrlsco[arr[0]][arr[1]].prcodeid = YSfac.getstore('prcodeid');
               ctrlsco[arr[0]][arr[1]][arr[2]] = $(iElm).is(":checked")?1:0; 
               ctrlsco.fetch(arr[0]);
                    ctrlsco.$apply(); 
                 });
        }
    };
});








//公共增加，触发会调用接口   ysadd='YS_plista.data.datalist'  
app.directive('ysaddrun', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){
           var ctrlsco = YSfac.getscope_byid(sco,2); 
           var arr = iAttrs.ysaddrun.split('.'); 
           var list = ctrlsco; 
           arr.map(function(el){list = list[el];}); 
              ctrlsco.com_add.done = function(re,sco) {
                if(re.code==1){ 
                  list.unshift(re.data); 
                  layer.msg('成功'); 
                }else{ 
                  layer.msg('失败');
                }
              }
              ctrlsco.fetch('com_add'); 
        });
     }
};
});



 //hsl 公共增加，触发会调用接口   ysadd='YS_plista'  
app.directive('ysaddrun2', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){
           var ctrlsco = YSfac.getscope_byid(sco,2); 
              ctrlsco.com_add.done = function(re,sco) {
                if(re.code==1){ 
                  layer.msg('成功'); 
                  ctrlsco.fetch(iAttrs.ysaddrun2);
                }else{ 
                  layer.msg('失败'); 
                }
              }
              ctrlsco.fetch('com_add'); 
              layer.closeAll();
        });
     }
};
});





//公共编辑,写法：  ysedit='YS_obja.params'  
app.directive('ysaddedit', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){
           var ctrlsco = YSfac.getscope_byid(sco,2); 
           var arr = iAttrs.ysaddedit.split('.'); 
           var list = ctrlsco; 
           arr.map(function(el){list = list[el];});

        });
     }
};
}); 

//公共编辑,写法：  ysaddedit='YS_obja.params'  
app.directive('ysaddedit2', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){
           var ctrlsco = YSfac.getscope_byid(sco,2); 
           var v = sco.value||ctrlsco.value||"";
           ctrlsco = YSfac.yssetvalue(ctrlsco,iAttrs.ysaddedit2,v); 
           

        });
     }
};
}); 




 
//select 选中赋值并执行
app.directive('ysselrun', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("change",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2); 
           var arr = iAttrs.ysselrun.split('.'); 
           var obj = ctrlsco;
           var key = '';
           arr.map(function(el,ind){ 
            ind<arr.length-1&&(obj = obj[el]);
            ind==arr.length-1&&(key=el);
          });
           obj[key] = iElm.val();
           ctrlsco.fetch(arr[0]);
        });
     }
};
}); 

//select 选中赋值
app.directive('yssel', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("change",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2); 
           var arr = iAttrs.yssel.split('.'); 
           var obj = ctrlsco;
           var key = '';
           arr.map(function(el,ind){ 
            ind<arr.length-1&&(obj = obj[el]);
            ind==arr.length-1&&(key=el);
          });
           obj[key] = iElm.val(); 
        });
     }
};
}); 

//select 选中赋值 ysselvalue="status" run="YS_obja" 
app.directive('ysselvalue', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("change",function(e){  
           sco.value[iAttrs.ysselvalue] = iElm.val(); 
           sco.$apply();
        });
     }
};
}); 




//公共的 layui的select选择方法   <select  lay-filter="YS_objc.params.logourl" ysselect="YS_objc.params.logourl" run="YS_objd" codeid="{{value.codeid}}">
app.directive('ysselect', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        layui.use('form', function(){
        var key =  'select('+iAttrs.ysselect+')';
        layui.form.on(key, function(data){
          var ctrlsco = YSfac.getscope_byid(sco,2);
          var arr = iAttrs.ysselect.split('.');
          ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.ysselect, data.value); 
          iAttrs.codeid&&(ctrlsco[arr[0]][arr[1]].codeid = iAttrs.codeid);
          iAttrs.run&&ctrlsco.fetch(iAttrs.run);//如果存在run，则去跑对应的接口
          ctrlsco.$apply();
        }); 
        layui.form.render();
      }); 
     }
};
});


app.directive('dsselect', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        layui.use('form', function(){
        var key =  'select('+iAttrs.dsselect+')';

        layui.form.on(key, function(data){
          var ctrlsco = YSfac.getscope_byid(sco,2);
          var arr = iAttrs.dsselect.split('.');
          // if(ctrlsco.YS_objb.params.deviceServiceList.length>0)
          // ctrlsco.YS_objb.params.deviceServiceList[iAttrs.key].serviceType = data.value;
          // if(ctrlsco.YS_obja.params.deviceServiceList.length>0)
          // ctrlsco.YS_obja.params.deviceServiceList[iAttrs.key].serviceType = data.value;

          ctrlsco.deviceServiceList[iAttrs.key].serviceType = data.value;
          if(data.value==4){
            if(iAttrs.type=='add'){
              ctrlsco.deviceServiceList[iAttrs.key].ip = ctrlsco.YS_obja.params.ip;
            }else if(iAttrs.type=='edit'){
              ctrlsco.deviceServiceList[iAttrs.key].ip = ctrlsco.YS_objb.params.ip;
            }
          }

          ctrlsco.$apply();
        }); 
        layui.form.render();
      }); 
     }
};
});


 




//公共方法-radio点击选中，赋值并执行跑接口  ysradio="YS_objc.params.logourl" run="YS_objd"
app.directive('ysradio', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2);  
           ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.ysradio, iAttrs.value); 
           iAttrs.run&&ctrlsco.fetch(iAttrs.run);
           ctrlsco.$apply(); 
        });
     }
};
}); 

 

//开关点击已送未送，赋值并执行跑接口   ysswitch="YS_listb.params.classify_id"  run="YS_listb"
    // app.directive('ysswitch', function () {
    //     return {
    //         link: function (sco, iElm, iAttrs) {
    //             iElm.on("click", function (e) {
    //                 var ctrlsco = YSfac.getscope_byid(sco, 2);
    //                 var arr = iAttrs.ysswitch.split('.');
    //                 var a = $('#fffff').is(':checked');
    //                 var val = $(iElm).find('input').is(':checked')?1:0;
    //                 ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.ysswitch, val);
    //                 sco.value.codeid&&(ctrlsco[arr[0]][arr[1]].codeid = sco.value.codeid);
    //                 iAttrs.run && ctrlsco.fetch(iAttrs.run);
    //                 ctrlsco.$apply();
    //             });
    //         }
    //     };
    // });





//公共方法- 多选checkbox点击选中 
app.directive('yscheck', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
    var ctrlsco = YSfac.getscope_byid(sco,2); 
   ctrlsco.ischk = ctrlsco.ischk?false:true; 
    sco.$apply(); 
        });
     }
};
}); 
// 短信提醒开关
app.directive('dxbj', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
    var ctrlsco = YSfac.getscope_byid(sco,2); 
   ctrlsco.dxbj = ctrlsco.dxbj==1?0:1; 
   if (ctrlsco.dxbj==1) {
    ctrlsco.YS_obja.params.smsConfig.isOpen=true;
   }else{
    ctrlsco.YS_obja.params.smsConfig.isOpen=false;
   }
   
    sco.$apply(); 
        });
     }
};
}); 
// 邮件提醒开关
app.directive('yjbj', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
    var ctrlsco = YSfac.getscope_byid(sco,2); 
   ctrlsco.yjbj = ctrlsco.yjbj==1?0:1; 
      if (ctrlsco.yjbj==1) {
    ctrlsco.YS_obja.params.emailConfig.isOpen=true;
   }else{
    ctrlsco.YS_obja.params.emailConfig.isOpen=false;
   }
    sco.$apply(); 
        });
     }
};
}); 









//公共切换tab的值
app.directive('setystab', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);
            ctrlsco.ystab = iAttrs.setystab;
            ctrlsco.$apply();
        });
     }
};
}); 




//点击 标记标养 原材 导入/出时用到
app.directive('sjexcel', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);
            ctrlsco.excel = iAttrs.sjexcel;
            ctrlsco.$apply();
        });
     }
};
}); 



//公共删除事件,删除1或多条
app.directive('ysdel', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2);
           var arr = iAttrs.ysdel.split('.'); 
           var list = ctrlsco;
           arr.map(function(el){list = list[el];}); 
           var delids = [];
           list.map(function(el){el.ischk&&el.isdel==0&&delids.push(el[iAttrs.delkey]);}); 
          
           if(!delids.length){layer.msg('请选择删除项');return false;} 

                 var layercon = layer.confirm('您确定要删除么？', {
                    btn: ['确定','取消'] //按钮
                  }, function(){ 
                    ctrlsco.com_del.params[iAttrs.delkey] = delids.join(','); 
                    ctrlsco.com_del.done = function(re,sco) {
                      if(re.code==1){
                        list.map(function(el,index){
                        if (el.ischk) {el.isdel = 1;}
                        }); 
                        
                      }
                       YSfac.msg(re);
                    }
                    ctrlsco.fetch('com_del');
                    layer.close(layercon);
                  }); 
            });  
       
     }
};
}); 


//公共删除事件,删除一条   yun="com_listf"
app.directive('ysdelone', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function($event){
           $event.stopPropagation(); 
          var ctrlsco = YSfac.getscope_byid(sco,2);
            var _sco = sco;  
            var layercon = layer.confirm('您确定要删除么？', {
              btn: ['确定','取消'] //按钮
            }, function(){ 
              ctrlsco.com_del.params[iAttrs.ysdelone] = sco.value[iAttrs.ysdelone]; 
              ctrlsco.com_del.done = function(re,sco) {
                if(re.code==1){
                  _sco.value.isdel = 1;
                  layer.msg('删除成功');
              iAttrs.run&&ctrlsco.fetch(iAttrs.run);
                }else{
                  layer.msg(re.msg);
                }
              }
              ctrlsco.fetch('com_del');
              layer.close(layercon);
            }); 
            
        });
     }
};
});


//td编辑状态下面 赋值
app.directive('tdedit', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("keyup",function($event){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);
          var val = $(this).text();
          sco.value[iAttrs.tdedit] = val;
          sco.$apply();
          // ctrlsco = YSfac.yssetvalue(ctrlsco,iAttrs.tdedit,val);  
        });
     }
};
});



//结合layui的文件上传 ysupload = "YS_obja.params.imgurl"  run="YS_obja" 
app.directive('ysupload', function(){ 
return { 
link: function(sco, iElm, iAttrs) { 
var ctrlsco = YSfac.getscope_byid(sco, 2); 

var uploadInst = layui.upload.render({
    elem: $(iElm), 
    accept:'file', 
    url: conf.rooturl + 'license/up', 
    done: function(re,index, upload){ 
        if(re.code == 0){ 
          
          ctrlsco.filename = "licenseData";
          ctrlsco.$apply();
          layer.open({
              type: 1,
              title: false, //不显示标题
              closeBtn: 0,
              shadeClose:false, 
              shade:0.5, 
              area: ['auto', 'auto'], //宽高
              content: $('#sqsucc')
          });
              }else{
                layer.open({
                  type: 1,
                  title: false, //不显示标题
                  closeBtn: 0,
                  shadeClose:false, 
                  shade:0.5, 
                  area: ['auto', 'auto'], //宽高
                  content: $('#sqfail')
                });
                    // layer.msg(re.msg);
        } 
    } 
    
}); 
}
};
});







//公共方法-radio点击选中，赋值并执行跑接口  ysradio="YS_objc.params.logourl" run="YS_objd"
app.directive('ysradio', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2);  
           var arr = iAttrs.ysradio.split('.'); 
           ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.ysradio, iAttrs.value); 
           iAttrs.run&&ctrlsco.fetch(iAttrs.run);
           ctrlsco.$apply(); 
        });
     }
};
}); 

//公共方法- 多选checkbox点击选中，赋值并执行跑接口  checkbox="YS_objc.params.logourl" run="YS_objd"
app.directive('checkbox', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2); 
           ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.checkbox, iAttrs.value); 
           iAttrs.run&&ctrlsco.fetch(iAttrs.run);
           ctrlsco.$apply(); 
        });
     }
};
}); 
 

//select 选中赋值，赋值codeid, upselect="status" 
app.directive('upselect', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("change",function(e){
        var ctrlsco = YSfac.getscope_byid(sco,2);   
        var _this = $(this);
           ctrlsco.com_edit.params[iAttrs.upselect] = iElm.val();
           ctrlsco.com_edit.params.codeid = sco.value.codeid;
           ctrlsco.com_edit.done =function(re,sco){
            if(re.code==1){
                _this.addClass('ipright').removeClass('ipwrong');
               }else{
                _this.addClass('ipwrong').removeClass('ipright');
               } 
           }
           ctrlsco.fetch('com_edit');
        });
     }
};
}); 



//公共的编辑方法   comedit='byyl'
app.directive('comedit', function(){
    return {
      link: function(sco, iElm, iAttrs) {
        iElm.on("change", function(event){ 
          var _this = $(iElm);
          var ctrlsco = YSfac.getscope_byid(sco,2); 
          ctrlsco.com_edit.params.codeid = sco.value.codeid;
          ctrlsco.com_edit.params[iAttrs.comedit] = iElm.val(); 
          ctrlsco.com_edit.done = function(re,sco){ 
            YSfac.updatetd(re,_this);
            ctrlsco.com_edit.params = []; 
          }
         ctrlsco.fetch('com_edit'); 
        });
      }
    };
  });



//公共时间插件 ——单个 yslaytime = "YS_plista.params.begintime" run="YS_plista"
app.directive('yslaytime',function(){
    return {
      link: function(sco, iElm, iAttrs) { 
      var ctrlsco = YSfac.getscope_byid(sco, 2); 
      var str = iAttrs.yslaytime; 
      layui.laydate.render({

            elem:$(iElm)[0], 
            type: 'time',
            done: function(value, date, endDate){  
              if(str){
                ctrlsco = YSfac.yssetvalue(ctrlsco,str,value);
                iAttrs.run&&ctrlsco.fetch(iAttrs.run);
                ctrlsco.$apply();
              } 
            }
      }); 
      }
    };
  });


//私有时间插件 ——单个 yslaytime = "YS_plista.params.begintime" run="YS_plista"
app.directive('yslaytimeone',function(){
    return {
      link: function(sco, iElm, iAttrs) { 
      var ctrlsco = YSfac.getscope_byid(sco, 2); 
      var str = iAttrs.yslaytimeone; 
      layui.laydate.render({

            elem:$(iElm)[0], 
            type: 'time',
            done: function(value, date, endDate){  
              if(str){
                ctrlsco = YSfac.yssetvalue(ctrlsco,str,value);

               var key = iAttrs.key;
        ctrlsco.timearr.map(function(e,index){
       if (index == key) {
        ctrlsco.timearr.splice(index,1,value);
       } 


        });





               ctrlsco.YS_objb.params.checkTimes = ctrlsco.timearr;
                ctrlsco.$apply();
              } 
            }
      }); 
      }
    };
  });




//公共月份插件 ——单个 yslaymonth = "YS_plista.params.begintime" run="YS_plista"
app.directive('yslaymonth',function(){
    return {
      link: function(sco, iElm, iAttrs) { 
      var ctrlsco = YSfac.getscope_byid(sco, 2); 
      var str = iAttrs.yslaymonth; 
      layui.laydate.render({

            elem:$(iElm)[0], 
            type: 'month',
            done: function(value, date, endDate){  
              if(str){
                ctrlsco = YSfac.yssetvalue(ctrlsco,str,value);
                iAttrs.run&&ctrlsco.fetch(iAttrs.run);
                ctrlsco.$apply();
              } 
            }
      }); 
      }
    };
  });

//公共日期插件 ——单个 yslaydate = "YS_plista.params.begintime" run="YS_plista"
app.directive('yslaydate',function(){
    return {
      link: function(sco, iElm, iAttrs) { 
      var ctrlsco = YSfac.getscope_byid(sco, 2); 
      var str = iAttrs.yslaydate; 
      layui.laydate.render({
            elem:$(iElm)[0], 
            done: function(value, date, endDate){  
              if(str){
                ctrlsco = YSfac.yssetvalue(ctrlsco,str,value);
                iAttrs.run&&ctrlsco.fetch(iAttrs.run);
                ctrlsco.$apply();
              } 
            }
      }); 
      }
    };
  });

//公共日期插件 ——两个日期连续 ystwodate = "YystwS_plista.params.begintime" to="YS_plista.params.endtime"  run="YS_plista"
app.directive('ystwodate',function(){
    return {
      link: function(sco, iElm, iAttrs) { 
      var ctrlsco = YSfac.getscope_byid(sco, 2); 
      var str = iAttrs.ystwodate;
      var to = iAttrs.to; 
      
      layui.laydate.render({
        //采用click弹出 trigger: 'click',
            elem:$(iElm)[0],
            range: true, 
            // showBottom:false,
            done: function(value, date, endDate){  
              if(str){
                var valarr = value.split(' - ');
                ctrlsco = YSfac.yssetvalue(ctrlsco,str,valarr[0]);
                ctrlsco = YSfac.yssetvalue(ctrlsco,to,valarr[1]);
                iAttrs.run&&ctrlsco.fetch(iAttrs.run);
                ctrlsco.$apply();
              } 
            }
      }); 
iElm.on("mouseup", function(e) {
e.stopPropagation();
return false;
});

      }
    };
  });


//公共日期插件,统一用com_edit单个日期值变化就更新， valdate = "com_edit.params.begintime" 
app.directive('valdate',function(){
    return {
      link: function(sco, iElm, iAttrs) { 
      var ctrlsco = YSfac.getscope_byid(sco, 2);
      var _this = $(iElm);
      var str = iAttrs.valdate;
function vfun(value){
   if(str){
            ctrlsco.com_edit.params={};
            ctrlsco = YSfac.yssetvalue(ctrlsco,str,value); 
            ctrlsco.com_edit.params.codeid = sco.value.codeid;
            ctrlsco.com_edit.done=function(re,sco){
              YSfac.updatetd(re,_this);
            }
            ctrlsco.fetch('com_edit'); 

            ctrlsco.$apply();
          }
}


      layui.laydate.render({
        elem:$(iElm)[0], 
        done: function(value, date, endDate){  
          vfun(value)
        }
      });


iElm.on("change",function(e){ 
var a = YSfac.IsDate(e.target.value);
if(a){
vfun(e.target.value);
} 


 });


      }
    };
  });



//今日


//benzhou 
app.directive('todate', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);

var now = new Date(); //当前日期 
var nowDayOfWeek = now.getDay(); //今天本周的第几天 
var nowDay = now.getDate(); //当前日 
var nowMonth = now.getMonth()+1; //当前月 
var nowYear = now.getYear(); //当前年 
nowYear += (nowYear < 2000) ? 1900 : 0; // 

//获得某月的天数 
function getMonthDays(myMonth){ 
var monthStartDate = new Date(nowYear, myMonth, 1); 
var monthEndDate = new Date(nowYear, myMonth + 1, 1); 
var days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24); 
return days; 
} 


if (iAttrs.todate=='t') {
    var stime = nowYear+'-'+nowMonth+'-'+nowDay;    
    var etime = nowYear+'-'+nowMonth+'-'+nowDay;
} 

if (iAttrs.todate=='w') {
    var Nowdate=new Date();     
    var WeekFirstDay=new Date(Nowdate-(Nowdate.getDay()-1)*86400000);   
        var WeekLastDay=new Date((WeekFirstDay/1000+6*86400)*1000);    
    M=Number(WeekFirstDay.getMonth())+1  
    M2=Number(WeekLastDay.getMonth())+1      
    var sdate = nowYear+"-"+M+"-"+WeekFirstDay.getDate();    
debugger;     
    
   var edate = nowYear+"-"+M2+"-"+WeekLastDay.getDate();     

/*debugger;
var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek); 
var weekEndDate = new Date(nowYear, nowMonth, nowDay + (6 - nowDayOfWeek)); */
   var  stime =sdate;

   var  etime =edate;
} 

if (iAttrs.todate=='m') {
var monthStartDate = new Date(nowYear, nowMonth, 1); 
   var  stime =YSfac.formatDate2(monthStartDate);

var monthEndDate = new Date(nowYear, nowMonth,getMonthDays(nowMonth)); 
   var  etime =YSfac.formatDate2(monthEndDate);

} 
ctrlsco.YS_plista.params.startDate= stime;

ctrlsco.YS_plista.params.endDate= etime;

ctrlsco.todates = stime+' - '+etime;












          ctrlsco.$apply(); 
        });
     }
};
});










//自定义私有指令 ============================================================================
app.directive('tapshow', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);
          ctrlsco.tapshow = iAttrs.tapshow;
          // sco.tapshow = iAttrs.tapshow;
          ctrlsco.$apply(); 
        });
     }
};
});

app.directive('showload', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);
          var time = iAttrs.showload;
             YSfac.loadclose(time)
          ctrlsco.$apply(); 
        });
     }
};
});




app.directive('tapnav', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);
          ctrlsco.tapnav = iAttrs.tapnav;
          sco.tapnav = iAttrs.tapnav;
          ctrlsco.$apply(); 
        });
     }
};
});


app.directive('tapparams', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);
          ctrlsco[iAttrs.name] = iAttrs.tapparams;
          ctrlsco.$apply(); 
        });
     }
};
});

//重新检测
app.directive('retest', function(){
  return{
    link: function(sco, iElm, iAttrs) {
      iElm.on("click",function(e){
        var ctrlsco = YSfac.getscope_byid(sco,2);
        var ran = 1000;
        var index = 0;
        var times = 0;
        var int = 0;
        if(ctrlsco.retest == 1){
            ctrlsco.fetch('YS_objd');
          }
          if(ctrlsco.retest == 2){
            ctrlsco.fetch('YS_objc');
          }
          if(ctrlsco.retest == 3){
            ctrlsco.fetch('YS_obje');
          }
          if(ctrlsco.retest == 0){
            ctrlsco.fetch('YS_objb');
          }    
            if(iAttrs.cancle){
              ctrlsco.zzjc=0;
              ctrlsco.nowimg = '../images/p0.png'; 
              ctrlsco.nowbaifen = ""; 
              ctrlsco.tapshow = 0;
              ctrlsco.$apply();
              return false;
            }
           
           if(iAttrs.yjjc){
             ctrlsco.fetch(iAttrs.yjjc); 
             if(iAttrs.yjjc=='YS_objc'){
                var a = ctrlsco.YS_objc;
               if(!a.params||!a.params.deviceId){
                layer.msg('请选择设备类型');
                return false;
               }
                // a.params.deviceId = '';
             }else if(iAttrs.yjjc=='YS_objd'){
                var a = ctrlsco.YS_objd;
               if(!a.params||!a.params.linkId){
                layer.msg('请选择链路类型');
                return false;
               }
                // a.params.linkId = '';
             }else if(iAttrs.yjjc=='YS_obje'){
                var a = ctrlsco.YS_obje;
               if(!a.params||!a.params.taskId){
                layer.msg('请选择任务类型');
                return false;
               }
                // a.params.taskId = '';
             }
    
             // var a = iAttrs.yjjc;
           }
    
           ctrlsco.tapshow = 1;
           if(ctrlsco.zzjc==1){
            ctrlsco.zzjc=0;
            window.clearInterval(int);
            ctrlsco.nowimg = '../images/p0.png'; 
            ctrlsco.nowbaifen = ""; 
           }else{
            ctrlsco.templist = [];
            int = ctrlsco.spline();
            ctrlsco.zzjc=1;
            ctrlsco.nowimg = '../images/p0.png'; 
            ctrlsco.nowbaifen = "0%"; 
           }
    
    
           i=1;
           j=1;
    
    
              var ax = setInterval(function(){
                if(i==12){ctrlsco.zzjc=0;ctrlsco.$apply();};
                   if(i>12){ctrlsco.zzjc=0;ctrlsco.$apply();window.clearInterval(ax);};
    
                var imgsrc = '../images/p'+ i +'.png';
    
                if(i>12){
                  ctrlsco.nowimg = '../images/p12.png'; 
                  ctrlsco.nowbaifen = "100%";
                }else{
                  if(ctrlsco.zzjc==0){
                  ctrlsco.nowimg = '../images/p0.png'; 
                  ctrlsco.nowbaifen = ""; 
                    window.clearInterval(ax);
                    window.clearInterval(int);
                  }
                }
    
              if(ctrlsco.examine.length>0&&index<ctrlsco.examine.length){
    
    
                if(ctrlsco.examine.length<13){
    
                  i = i + Math.floor(12/ctrlsco.examine.length) - 1;
                  if(ctrlsco.zzjc==0&&i>ctrlsco.examine.length){
                    return false;
                  }
    
    
                  ctrlsco.templist.unshift(ctrlsco.examine[index]);
                  index++;
                     $('.baifen').text(Math.floor(index/ctrlsco.examine.length*100)+"%");
                     if(index==ctrlsco.examine.length){
                      imgsrc = '../images/p12.png';
                      ctrlsco.zzjc=0;ctrlsco.$apply();window.clearInterval(ax);
                      window.clearInterval(int);
                    }
                    $('.bfimg').attr("src",imgsrc);
                }else{
                  times = Math.ceil(ctrlsco.examine.length/12);
                  i = i + Math.ceil(ctrlsco.examine.length/12) - 1;
    
                  if(ctrlsco.zzjc==0&&i<ctrlsco.examine.length){
                    return false;
                  }
    
                  for (var j = 0; j<times; j++) {
                    ctrlsco.templist.unshift(ctrlsco.examine[index]);
                    index++;
                     $('.baifen').text(Math.floor(index/ctrlsco.examine.length*100)+"%");
                     if(index==ctrlsco.examine.length)imgsrc = '../images/p12.png';
                    $('.bfimg').attr("src",imgsrc);
                  }
                  // if(i>12)i=12;
                }
    
                i++;
                ctrlsco.$apply();
              }
              ran = Math.floor(Math.random()*(5000-200+1)+200);
           },ran)
    
            ctrlsco.$apply();
                })
    }
  }
});
// 恢复系统备份
app.directive('bfload', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) { 
  var ctrlsco = YSfac.getscope_byid(sco, 2); 
  
  var uploadInst = layui.upload.render({
      elem: $(iElm), 
      accept:'file', 
      url: conf.rooturl + '/system/reloadConfig', 
      done: function(re,index, upload){ 
          if(re.code == 0){ 
            ctrlsco.filename = "configData";
            ctrlsco.$apply();
            layer.msg('上传成功'); 
            layer.open({
              type: 1,
              title: false, //不显示标题
              closeBtn: 0,
              shadeClose:false, 
              shade:0.5, 
              area: ['auto', 'auto'], //宽高
              content: $('#sysrecoed')
            });
              }else{
            layer.msg(re.msg);
          } 
      },
      error: function(){
      $('i').addClass('xgico');
    }
      
  }); 
  }
  };
  });
  


app.directive('findtable', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);
          ctrlsco.YS_listb.params.pid = sco.value.pid;
          ctrlsco.fetch('YS_listb');
          ctrlsco.ystab = 2;
          ctrlsco.$apply(); 
        });
     }
};
});



//////文件上传
app.directive('import22', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("change",function(e){ 
          var ctrlsco = YSfac.getscope_byid(sco,2);
var file = $("#upfile")[0].files[0];
var prcodeid =YSfac.getstore('prcodeid');
var token =YSfac.getCookie('token');
var formdata = new FormData();
 formdata.append("file",file);
 formdata.append("prcodeid",prcodeid);
 formdata.append("token",token);

    $.ajax({
        url:  conf.rooturl + '/proauth/invite_import', 
        type : 'POST',
        async : false,
        data :formdata, 
        processData : false,
        contentType : false,
        beforeSend:function(){
        },
        success : function(re) {
            if(re.code>0){
               layer.msg(re.msg);
            }else{
                layer.msg(re.msg);
            }
        }
    });
          ctrlsco.$apply(); 
        });
     }
};
});



app.directive('import', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("change",function(){
              var ctrlsco = YSfac.getscope_byid(sco, 2); 
           var file = $("#upfile")[0].files[0];
            var prcodeid =YSfac.getstore('prcodeid');
            var token =YSfac.getCookie('token');
            var sdata = {'prcodeid':prcodeid,'token':token,'file':file};
              YS('form',function(){
                $('#formid').ajaxSubmit({
                    url:conf.rooturl + '/proauth/invite_import',
                    data:sdata,
                    success: function(re) {
                      
                     // ctrlsco.YS_obja.params.invitearr = re.data;
                     // ctrlsco.tapshow = 1;
                      ctrlsco.$apply(); 
                    }
                }); 
              }) 
                
            });
     }
};
});


//结合layui的文件上传
app.directive('ysimgupload', function(){ 
return { 
link: function(sco, iElm, iAttrs) { 
var ctrlsco = YSfac.getscope_byid(sco, 2); 

var prcodeid =YSfac.getstore('prcodeid');
var token =YSfac.getCookie('token');
var sdata = {'prcodeid':prcodeid,'token':token};

var uploadInst = layui.upload.render({
    elem: '.layupload', 
    accept:'file',
    url: conf.rooturl + '/proauth/invite_import', 
    data:sdata, 
    done: function(res){ 
        if(res.code > 0){ 
        sco.invitelist = res.data;
        sco.upload = 1;
        sco.tapshow="drall2";
        sco.YS_obja.params.imgurl = res.data.fileurl;
        sco.$apply();
        return layer.msg('上传成功'); 
        }else{
          layer.msg(res.msg);
        } 
    } 
}); 
}
};
});

//导入送检计划  
app.directive('sjupload', function(){ 
return { 
link: function(sco, iElm, iAttrs) { 
var ctrlsco = YSfac.getscope_byid(sco, 2); 
//参数 import_type yc-- by  prcodeid  工程codeid  scodeid 导入送检部位时需要
var sdata ={};
var uploadInst = layui.upload.render({
    elem: '.layupload', 
    accept:'file',
    url: conf.rooturl + '/proauth/sjtz_import', 
    data:{
          prcodeid: function(){
            return YSfac.getstore('prcodeid')
          },
          token:function(){
            return YSfac.getCookie('token')
          },
          import_type:function(){
            return ctrlsco.YS_listb.params.field;
          },
          scodeid:function(){
            return ctrlsco.YS_listb.params.codeid
          }, 
        }, 
    done: function(res){ 
        if(res.code > 0){  
         layer.msg('上传成功'); 
         ctrlsco.fetch('YS_listb');
        }else{
          layer.msg(res.msg);
        } 
    } 
}); 
}
};
});




//送检汇总查询 
  app.directive('findsj', function() {
    return {
      link: function(sco, iElm, iAttrs) {
        iElm.on("click", function(e) {
          var ctrlsco = YSfac.getscope_byid(sco, 2);
          //先校验时间大小
          if (!ctrlsco.YS_lista.params.btime||!ctrlsco.YS_lista.params.etime) {
            layer.msg('时间不能为空');
          };
          if (ctrlsco.YS_lista.params.btime > ctrlsco.YS_lista.params.etime) {
            layer.msg('结束时间必须大于开始时间！');
          };
          ctrlsco.fetch(iAttrs.findsj);
          ctrlsco.YS_lista.done = function(re, sco) {
            if (re.code > 0) {
              layer.msg('查询成功');
            } else {
              layer.msg('查询失败');
            }
          };


        });
      }
    };
  });

//七牛一张图上传   id="pickfiles" qiniuimg="com_obja.params.proimg"
//工程概况图片，子单位图片，机械图片，个人头像 都走这个
app.directive('qiniuimg', function() {
  return {
    link: function(sco, iElm, iAttrs) {
      var _this = $(iElm);
      YS('Qiniu', function() {
        var button = iAttrs.id;
        var arr = iAttrs.qiniuimg.split('.'); 
        var multi_selection = false;
/*        $.ajax({
          url: conf.rooturl + '/open/get_qiniuinfo',
          data: {
            "token": YSfac.getstore('token'),
            type: 'open'
          },
          async: false,
          success: function(qnobj) {
            setTimeout(function() {*/
           
              YSfac.qiniuupload(JSON.parse(decodeURIComponent(YSfac.getCookie('QiniuInfo'))).domain, JSON.parse(decodeURIComponent(YSfac.getCookie('QiniuInfo'))).token, button, multi_selection, function(up, res) {
                YSfac.load(0);
                var ctrlsco = YSfac.getscope_byid(sco, 2);
                ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.qiniuimg, JSON.parse(decodeURIComponent(YSfac.getCookie('QiniuInfo'))).domain + '/' + res[res.length - 1].target_name);
                var imgurl = JSON.parse(decodeURIComponent(YSfac.getCookie('QiniuInfo'))).domain + '/' + res[res.length - 1].target_name;
                //个人中心没有这个参数
                if (sco.value[arr[2]]) {sco.value[arr[2]] = imgurl;}
                
                //公共修改接口 带参数  带codeid
                ctrlsco[iAttrs.qiniuimg] = imgurl
                if (arr[2] == 'proimg') {
                ctrlsco[arr[0]][arr[1]].codeid = YSfac.getstore('prcodeid');
                }

                if (arr[2] == 'sinimg') {
                ctrlsco[arr[0]][arr[1]].codeid = YSfac.getstore('scodeid');
                }
                if (arr[2] == 'jximg') {
                ctrlsco[arr[0]][arr[1]].codeid = YSfac.getstore('jxcodeid');
                }
                ctrlsco.fetch(arr[0]);
                if (arr[2] == 'proimg' || arr[2] == 'sinimg' || arr[2] == 'jximg') {
                  ctrlsco[arr[0]].done = function(re, sco) {
                    re.code == 1 ? _this.addClass('ipright').removeClass('ipwrong') : _this.addClass('ipwrong').removeClass('ipright');
                    YSfac.msg(re);
                  }
                }
                ctrlsco.$apply();
/*              });
            }, 500);
          }*/
        });
      });


    }
  };
});



//七牛一张图上传   id="pickfiles" qiniuupload="com_obja.params.proimg" 
app.directive('qiniupu', function() {
return {
  link: function(sco, iElm, iAttrs) {
    var _this = $(iElm);
    YS('Qiniu', function() {
      var button = iAttrs.id;
      var arr = iAttrs.qiniupu.split('.'); 
      var multi_selection = false;
/*      $.ajax({
        url: conf.rooturl + '/open/get_qiniuinfo',
        data: {
          "token": YSfac.getstore('token'),
          type: 'open'
        },
        async: false,
        success: function(qnobj) {*/
          setTimeout(function() {
            
            YSfac.qiniuupload(JSON.parse(decodeURIComponent(YSfac.getCookie('QiniuInfo'))).domain, JSON.parse(decodeURIComponent(YSfac.getCookie('QiniuInfo'))).token, button, multi_selection, function(up, res) {
              YSfac.load(0);
              var ctrlsco = YSfac.getscope_byid(sco, 2);
              var imgurl = JSON.parse(decodeURIComponent(YSfac.getCookie('QiniuInfo'))).domain + '/' + res[res.length - 1].target_name;
              ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.qiniupu,imgurl); 
              ctrlsco.$apply();
            });
/*          }, 500);
        }*/
      });
    });


    }
  };
});




//公共的编辑方法   comedit='byyl'
app.directive('editpro', function(){
    return {
      link: function(sco, iElm, iAttrs) {
        iElm.on("change", function(event){ 
          var _this = $(iElm);
          var ctrlsco = YSfac.getscope_byid(sco,2); 
          ctrlsco.com_objd.params.codeid = sco.value.codeid;
          ctrlsco.com_objd.params[iAttrs.editpro] = iElm.val(); 
          ctrlsco.com_objd.done = function(re,sco){ 
            YSfac.updatetd(re,_this);
          }
         ctrlsco.fetch('com_objd'); 
        });
      }
    };
  });


//提示
app.directive('showtips', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("mouseover",function(e){  
         $('.tips').removeClass('dpn')
        });
        iElm.on("mouseleave",function(e){  
         $('.tips').addClass('dpn')
        });

     }
};
});

// 用户个人中心菜单
app.directive('showumenu', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) {
    iElm.on("mouseover",function(e){  
      $('.h_umenu').slideDown(200);
      $('.h_umenu').show();
     });
     iElm.on("mouseleave",function(e){
      $('.h_umenu').hide();
     });
       }
  };
  });
   app.directive('colseinfo', function(){ 
    return { 
    link: function(sco, iElm, iAttrs) {
      iElm.on("mouseout",function(e){  
        var ctrlsco = YSfac.getscope_byid(sco,2); 
        ctrlsco.YS_lista.data.list.map(function(elem){
          elem.topologyNodes.map(function(ele){
            ele['show'] = 0;
            if(ele.child){
              ele.child.map(function(el){
                el['show'] = 0
              })
            }
          })
        })
        ctrlsco.$apply();
       });
      }
    };
    });


  app.directive('colseumenu', function(){ 
    return { 
    link: function(sco, iElm, iAttrs) {
      iElm.on("click",function(e){  
        var ctrlsco = YSfac.getscope_byid(sco,2); 
        $('.h_umenu').addClass('dpn');
       });
      }
    };
    });
  //更多

  app.directive('showmore', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  

  $(this).next().toggleClass("dpn");
   });
     }
};
});

app.directive('cfclose', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
         layer.open({
          type: 1,
          title: false, //不显示标题
          closeBtn: 0,
          shadeClose:false, 
          shade:0.5, 
          area: ['auto', 'auto'], //宽高
          content: $('#powertc')
        });
      });
     }
};
});

app.directive('cfrestar', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) {
          iElm.on("click",function(e){  
           layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose:false, 
            shade:0.5, 
            area: ['auto', 'auto'], //宽高
            content: $('#powerrestar')
          });
        });
       }
  };
  });
  
app.directive('rest', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 

 if (ctrlsco.YS_plista.params.name) {ctrlsco.YS_plista.params.name=''} 
 if (ctrlsco.YS_plista.params.type) {ctrlsco.YS_plista.params.type=''} 
 if (ctrlsco.YS_plista.params.key) {ctrlsco.YS_plista.params.key=''} 
 if (ctrlsco.YS_plista.params.level) {ctrlsco.YS_plista.params.level=''} 

 if (ctrlsco.YS_plista.params.startDate) {ctrlsco.YS_plista.params.startDate=''} 
 if (ctrlsco.YS_plista.params.endDate) {ctrlsco.YS_plista.params.endDate=''} 

 if (ctrlsco.YS_objb.params.startDate) {ctrlsco.YS_objb.params.startDate=''} 
 if (ctrlsco.YS_objb.params.endDate) {ctrlsco.YS_objb.params.endDate=''} 


 if (ctrlsco.YS_plista.params.bid) {ctrlsco.YS_plista.params.bid=''} 

 if (ctrlsco.YS_plista.params.linkId) {
   if (ctrlsco.YS_lista.data.list[0].linkId) {
   ctrlsco.YS_plista.params.linkId = ctrlsco.YS_lista.data.list[0].linkId;
   }
} 

 if (ctrlsco.YS_plista.params.deviceId) {
   if (ctrlsco.YS_listb.data.list[0].deviceId) {
   ctrlsco.YS_plista.params.deviceId = ctrlsco.YS_listb.data.list[0].deviceId;
   }

   
} 



 if (ctrlsco.YS_plista.params.keyword) {ctrlsco.YS_plista.params.keyword=''} 
 if (ctrlsco.YS_plista.params.uid) {ctrlsco.YS_plista.params.uid=''} 
if ($('.choosetime input')) {$('.choosetime input').attr("checked",false)}

       
       $(".layui-form input").val("");
      ctrlsco.$apply();
      });
     }
};
});
// 系统备份位置询问弹窗
app.directive('sysbackup', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#sysbackup')
          });
        });
      });
    }
  };
});

// 系统恢复位置查找弹窗
app.directive('sysreco', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#sysreco')
          });
        });
      });
    }
  };
});

// 系统恢复中和系统恢复完成
app.directive('sysrecoing', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#sysrecoing')
          });
        });
        setTimeout(function(){
          YS('layer', function () {
            layer.open({
              type: 1,
              title: false, //不显示标题
              closeBtn: 0,
              shadeClose: false,
              shade: 0.5,
              area: ['auto', 'auto'], //宽高
              content: $('#sysrecoed')
            });
          });
          },3000)
    });
    }
  };
});



// 恢复出厂备份弹窗
app.directive('chuchang', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#reask')
          });
        });
      });
    }
  };
});
//恢复成功弹窗
app.directive('hfcg', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
layer.closeAll();


        YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#resucc')
          });
        });
      });
    }
  };
});
// 处理建议弹窗
app.directive('dealshow', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2); 
        ctrlsco.alarmtype=iAttrs.type;
        ctrlsco.YS_plistb.params.alarmType=sco.value.type;
        ctrlsco.YS_plistb.params.typename=sco.value.typename;

        if (ctrlsco.YS_plistb.params.currentPage) {ctrlsco.YS_plistb.params.currentPage=1;} 
        
        sco.fetch("YS_plistb")
        YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#dealtip')
          });
        });
      });
    }
  };
});

// 新增知识库
app.directive('addknow', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2);
        if(ctrlsco.YS_obja.params.knowledgeDesc){
          var desc=ctrlsco.YS_obja.params.knowledgeDesc;
          ctrlsco.YS_obja.params.alarmType=ctrlsco.alarmtype;
          sco.fetch("YS_obja");
          ctrlsco.jylist.unshift({knowledgeDesc:desc,upNum:1});
          ctrlsco.$apply(); 
        }else{
          layer.closeAll()
        }

      });
    }
  };
});
// 建议点赞
app.directive('upknow', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2);
        ctrlsco.YS_objb.params.knowledgeId=iAttrs.id;
        sco.fetch("YS_objb")
       ctrlsco.haszan = iAttrs.id;
        sco.value.upNum+=1;
        ctrlsco.$apply(); 
        // setTimeout(function(){
        //   sco.fetch("YS_plistb")
          
        // },500)
        
      });
    }
  };
});

app.directive('lempty', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        sco.reload = false;
        location.reload()
         // $("#main_e").empty()
      });
    }
  };
});


app.directive('mempty', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       // debugger
         // $("#leftlink").empty()
        jsPlumb.deleteEveryEndpoint();
        jsPlumb.detachEveryConnection();
      });
    }
  };
});
//用户列表删除
app.directive('ulistdel', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.YS_objc.params.uid=sco.value.uid;
        YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#userremove')
          });
        });
      });
    }
  };
});

// 设备删除
app.directive('elistdel', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.YS_objc.params.deviceId=sco.value.deviceId?sco.value.deviceId:iAttrs.elistdel;
        YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#remove')
          });
        });
      });
    }
  };
});


// 用户解锁
app.directive('userjs', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.YS_obja.params.uid = sco.value.uid;
      sco.fetch("YS_obja")
      });
     }
};
});

//scwjs 
app.directive('scwjs', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
       var _this = $(iElm);
           e.stopPropagation();
       var ctrlsco = YSfac.getscope_byid(sco,2); 
        var key  = iAttrs.index;
        ctrlsco.filelist.map(function(elem,index){
     if (elem.lindex == key) {
      ctrlsco.filelist.splice(index,1);
      //删除时要在顶部显示
        $("#left_e .item").each(function(){
        if($(this).attr("data-index")==elem.lindex){
          $(this).removeClass("dpn").draggable("enable"); // 激活其拖动功能
        }
      });
     } else {
      return;
     }
        });
  ctrlsco.$apply(); 
      });
     }
};
});


app.directive('sbinfo', function () {
  return {
    link: function (sco, iElm, iAttrs) {

      iElm.on("mouseover", function (e) {
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.YS_objd.params.deviceId = sco.value.deviceId; 
       sco.fetch("YS_objd")

    });
  }
};
});

//重新注册 rezc
app.directive('rezc', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
       var ctrlsco = YSfac.getscope_byid(sco,2); 
             debugger;
  var oldinfo = JSON.parse(ctrlsco.YS_objb.data.configData)




if (ctrlsco.YS_obja.params.systemName==oldinfo.systemName&&ctrlsco.YS_obja.params.managerName==oldinfo.managerName
  &&ctrlsco.YS_obja.params.managerPhone==oldinfo.managerPhone&&ctrlsco.YS_obja.params.managerEmail==oldinfo.managerEmail)
   {
    YSfac.load(1,'请勿重复提交');return false;

} else {

   sco.fetch('YS_obja');


}

        });
     }
};
});

// 选择图标
app.directive('chicon', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
       layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#chicon')
          });
        });
     }
};
});

app.directive('sicon', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){  
        var _this = $(iElm);
        var ctrlsco = YSfac.getscope_byid(sco,2); 
        ctrlsco.YS_obja.params.icon = sco.value.id;  
        ctrlsco.YS_objb.params.icon = sco.value.id;  
        ctrlsco.$apply(); 
      });
     }
};
});





























//修改密码 

app.directive('xgpwd', function () {
  return {
    link: function (sco, iElm, iAttrs) {
 var ctrlsco = YSfac.getscope_byid(sco,2); 
      iElm.on("click", function (e) {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#repwd2')
          });
      });

    }
  };
});









// 重置密码
app.directive('repwd', function () {
  return {
    link: function (sco, iElm, iAttrs) {
 var ctrlsco = YSfac.getscope_byid(sco,2); 
      iElm.on("click", function (e) {

                    ctrlsco.YS_objb.params.uid = sco.value.uid; 

                    ctrlsco.fetch('YS_objb');
    

      });
    }
  };
});


// 重置密码
app.directive('repwd2', function () {
  return {
    link: function (sco, iElm, iAttrs) {
 var ctrlsco = YSfac.getscope_byid(sco,2); 
      iElm.on("click", function (e) {

                    ctrlsco.YS_objd.params.uid =  ctrlsco.YS_objb.params.uid

                    ctrlsco.fetch('YS_objd');
    

      });
    }
  };
});




// 导航栏用户名忘记密码选项
app.directive('fgpwd', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) {
          iElm.on("click",function(e){
          layer.open({
          type: 1,
          title: false, //不显示标题
          closeBtn: 0,
          shadeClose:false, 
          shade:0.5, 
          area: ['auto', 'auto'], //宽高
          content: $('#repwd2')
        });
      });
       }
  };
  });

//编辑用户时关闭弹窗，重置表单值
app.directive('closenull', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) {
          iElm.on("click",function(e){
            layer.closeAll();
          });
       }
  };
  });
  









// 查看/编辑设备
app.directive('editep', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.YS_objb.params.deviceId=sco.value.deviceId;
       ctrlsco.YS_objb.params.deviceName=sco.value.deviceName;
       ctrlsco.YS_objb.params.area=sco.value.area;
       ctrlsco.YS_objb.params.netArea=sco.value.netArea;
       ctrlsco.YS_objb.params.deviceType=sco.value.deviceType;
       ctrlsco.YS_objb.params.ip=sco.value.ip;
       ctrlsco.YS_objb.params.icon=sco.value.icon;
       // $("#sbtype option[value='2']").attr('selected','selected');
       // $("#sbarea option[value='2']").attr('selected',"selected");
       // $("#netarea option[value='sco.value.netArea']").attr('selected','selected');
       ctrlsco.tapshow = 1;
       sco.tapshow = 1;
       ctrlsco.YS_obje.params.deviceId = sco.value.deviceId;
       ctrlsco.fetch('YS_obje');
      setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },300)

       ctrlsco.$apply(); 
      });
    }
  };
});

//切换的时候render下拉框
app.directive('renderselect', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
if (ctrlsco.YS_obje.params.deviceId) {
  ctrlsco.YS_obje.params.deviceId='';
}
       setTimeout(function(){
        layui.use('form', function(){
          layui.form.render();
        }); 
      },300)

       ctrlsco.$apply(); 
      });
    }
  };
});



// 链路管理查看编辑
app.directive('editlink', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.YS_objc.params.linkId=sco.value.linkId;
       sco.fetch("YS_objc");
       ctrlsco.tapshow = 3;
       ctrlsco.filelist = [];
       ctrlsco.$apply(); 
      });
    }
  };
});
// 编辑用户
app.directive('edituser', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       YSfac.setstore('uid',sco.value.uid)     
       ctrlsco.$apply(); 
      });
    }
  };
});
// 
app.directive('linknext', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       if(!ctrlsco.YS_obja.params.linkName){
        layer.tips("请输入链路名称！","#xlinkName",{tips: [3, 'rgba(0,0,0,.8)','']});return false
       };
       if(!ctrlsco.YS_obja.params.linkType){
        layer.tips("请选择链路类型！","#linktype",{tips: [3, 'rgba(0,0,0,.8)','']});return false
       };
       if(!ctrlsco.YS_obja.params['dbConfigData.dbName']){
       layer.tips("请输入数据库名！","#xdbName",{tips: [3, 'rgba(0,0,0,.8)','']});return false
      };
       if(!ctrlsco.YS_obja.params['dbConfigData.ip']){
       layer.tips("请输入ip地址！","#xip",{tips: [3, 'rgba(0,0,0,.8)','']});return false
      };
     if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(ctrlsco.YS_obja.params['dbConfigData.ip'])){layer.tips("请输入合法的IP地址！","#xip",{tips: [3, 'rgba(0,0,0,.8)','']});return false};
     if(!ctrlsco.YS_obja.params['dbConfigData.port']){
      layer.tips("请输入端口号！","#xport",{tips: [3, 'rgba(0,0,0,.8)','']});return false
     };
     if(!ctrlsco.YS_obja.params['dbConfigData.name']){
     layer.tips("请输入用户名！","#xname",{tips: [3, 'rgba(0,0,0,.8)','']});return false
     };
      if(!ctrlsco.YS_obja.params['dbConfigData.pwd']){
     layer.tips("请输入密码！","#xpwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
     };

       sco.fetch("YS_objf")

      ctrlsco.YS_objf.done = function(re, sco) {
        if (re.code == 0) {

          if (re.data.isConnect) {
        var msgs = re.msg ? re.msg : '数据库检测中';
              YSfac.load2(1, msgs);
            setTimeout(function() {
              layer.closeAll();
             ctrlsco.tapshow=2;  
             ctrlsco.$apply();
            },1000);
          } else {
             var msgs = re.msg ? re.msg : '数据库检测失败';
                         setTimeout(function() {
                       layer.msg(msgs); 
            },500);
          }
        } else {
            var msgs = re.msg ? re.msg : '数据库检测失败';
         setTimeout(function() {
                       layer.msg(msgs); 
            },500);
        }
      }
       ctrlsco.$apply();

      });
    }
  };
});

// 添加链路拓扑图
app.directive('savelink', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.save()
       setTimeout(function(){
        sco.fetch("YS_obja")
       },1000)
       
      });
    }
  };
});

// 编辑链路拓扑图
app.directive('etoplog', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.save()
       setTimeout(function(){
        sco.fetch("YS_objb")
       },1000)
       
      });
    }
  };
});



app.directive('showfile', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       if(iAttrs.key=='true'){
        $(".filebox").toggleClass("dpn")
       }
      });
    }
  };
});



app.directive('tijian', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       var ran = 1000;
      var index = 0;
      var times = 0;
      var int = 0;
      var currentStep = 0;
      var waitTime = 0;
      var ran = 1000;
      var maxCheckId = 0;
   window.clearInterval(ctrlsco.ax);

        if(iAttrs.cancle){
          ctrlsco.zzjc=0;
          ctrlsco.nowimg = '../images/p0.png'; 
          ctrlsco.nowbaifen = ""; 
          ctrlsco.tapshow = 0;
          ctrlsco.$apply();
          return false;
        }


       
       if(iAttrs.tijian){
         ctrlsco.fetch(iAttrs.tijian); 
         ctrlsco.currentTijian = iAttrs.tijian;
         if(iAttrs.tijian=='YS_objc'){
            var a = ctrlsco.YS_objc;
           if(!a.params||!a.params.deviceId){
            layer.msg('请选择设备类型');
            return false;
           }
            // a.params.deviceId = '';
         }else if(iAttrs.tijian=='YS_objd'){
            var a = ctrlsco.YS_objd;
           if(!a.params||!a.params.linkId){
            layer.msg('请选择链路类型');
            return false;
           }
            // a.params.linkId = '';
         }else if(iAttrs.tijian=='YS_obje'){
            var a = ctrlsco.YS_obje;
            if (!ctrlsco.YS_objf.params.linkId) {
               layer.msg('请先选择任务所属链路'); return false;
            } 
           if(!a.params||!a.params.taskId){
            layer.msg('请选择任务类型');
            return false;
           }
         }
         // var a = iAttrs.tijian;
       }


       if(iAttrs.reset){
        ctrlsco.fetch(ctrlsco.currentTijian);
       }



       ctrlsco.tapshow = 1;
       if(ctrlsco.zzjc==1){
        ctrlsco.zzjc=0;
        window.clearInterval(int);
        ctrlsco.nowimg = '../images/p0.png'; 
        ctrlsco.nowbaifen = 0; 
       }else{
        ctrlsco.templist = [];
        int = ctrlsco.spline();
        ctrlsco.zzjc=1;
        ctrlsco.nowimg = '../images/p0.png'; 
        ctrlsco.nowbaifen = 0; 
       }


       i=1;
       j=1;


          ctrlsco.ax = setInterval(function(){

            //等待时间超过一分钟直接显示100%，并结束
            if(waitTime > 60000){
                ctrlsco.nowimg = '../images/p12.png'; 
                ctrlsco.nowbaifen = 100;
                ctrlsco.zzjc=0;
                ctrlsco.$apply();
                window.clearInterval(ctrlsco.ax);
                return;
            }


            //无数据
            if(ctrlsco.YS_objb.data.checkItems.length==0){

                waitTime += 1000;
                ctrlsco.fetch("YS_objb");
                return false;
            }



          //当有数据时并且不是最后一步
          // if(ctrlsco.maxStep>0&&currentStep<ctrlsco.maxStep){
          if(ctrlsco.examine.length>0){

              //插入数组展示
              ctrlsco.templist.unshift(ctrlsco.examine[currentStep]);
              //每次覆盖总数
              ctrlsco.maxStep = ctrlsco.examine[currentStep].totalStep;
              //赋值当前itemId
              if(maxCheckId<ctrlsco.examine[currentStep].itemId){
                maxCheckId = ctrlsco.examine[currentStep].itemId;
              }
              ctrlsco.YS_objb.params.index = maxCheckId;
              //淡入效果
              //step+1
              currentStep++;

              ran = 600;

              // if(ctrlsco.maxStep<13){
              //   i = Math.floor(i + ctrlsco.maxStep/12);
              // }else{
              //   i = i + Math.ceil(currentStep/ctrlsco.maxStep);
              // }
              


              var imgsrc = '../images/p'+ i +'.png';
              var progress = Math.floor(currentStep/ctrlsco.maxStep*100);

              //当百分比变大时才变化
              if(ctrlsco.nowbaifen<progress&&progress<100){

                ctrlsco.nowbaifen = progress;
                i = Math.floor(progress/8.33)<1?1:Math.floor(progress/8.33);
                ctrlsco.nowimg = '../images/p'+i+'.png';
              }
 

            //执行到最后一步
            if(currentStep==ctrlsco.maxStep&&currentStep==ctrlsco.examine.length){
              ctrlsco.nowimg = '../images/p12.png'; 
              ctrlsco.nowbaifen = "100";
              ctrlsco.zzjc=0;
              window.clearInterval(ctrlsco.ax);
            }else if(currentStep<ctrlsco.maxStep&&currentStep==ctrlsco.examine.length){//当前数组遍历完，拿最大checkid重新跑接口
              ctrlsco.fetch("YS_objb");
            }

            // if(currentStep==maxStep){
            //   ctrlsco.zzjc=0;ctrlsco.$apply();window.clearInterval(ax);
            // }

            ctrlsco.$apply();
          }
          //Math.floor(Math.random()*(5000-200+1)+200);
       },ran)

        ctrlsco.$apply();
      });
    }
  };
});





app.directive('yjjc', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       var ran = 1000;
      var index = 0;
      var times = 0;
      var int = 0;

        if(iAttrs.cancle){
          ctrlsco.zzjc=0;
          ctrlsco.nowimg = '../images/p0.png'; 
          ctrlsco.nowbaifen = ""; 
          ctrlsco.tapshow = 0;
          ctrlsco.$apply();
          return false;
        }
       
       if(iAttrs.yjjc){
         ctrlsco.fetch(iAttrs.yjjc); 
         if(iAttrs.yjjc=='YS_objc'){
            var a = ctrlsco.YS_objc;
           if(!a.params||!a.params.deviceId){
            layer.msg('请选择设备类型');
            return false;
           }
            // a.params.deviceId = '';
         }else if(iAttrs.yjjc=='YS_objd'){
            var a = ctrlsco.YS_objd;
           if(!a.params||!a.params.linkId){
            layer.msg('请选择链路类型');
            return false;
           }
            // a.params.linkId = '';
         }else if(iAttrs.yjjc=='YS_obje'){
            var a = ctrlsco.YS_obje;
           if(!a.params||!a.params.taskId){
            layer.msg('请选择任务类型');
            return false;
           }
            // a.params.taskId = '';
         }

         // var a = iAttrs.yjjc;
       }

       ctrlsco.tapshow = 1;
       if(ctrlsco.zzjc==1){
        ctrlsco.zzjc=0;
        window.clearInterval(int);
        ctrlsco.nowimg = '../images/p0.png'; 
        ctrlsco.nowbaifen = ""; 
       }else{
        ctrlsco.templist = [];
        int = ctrlsco.spline();
        ctrlsco.zzjc=1;
        ctrlsco.nowimg = '../images/p0.png'; 
        ctrlsco.nowbaifen = "0%"; 
       }


       i=1;
       j=1;


          var ax = setInterval(function(){
            if(i==12){ctrlsco.zzjc=0;ctrlsco.$apply();};
               if(i>12){ctrlsco.zzjc=0;ctrlsco.$apply();window.clearInterval(ax);};

            var imgsrc = '../images/p'+ i +'.png';

            if(i>12){
              ctrlsco.nowimg = '../images/p12.png'; 
              ctrlsco.nowbaifen = "100%";
            }else{
              if(ctrlsco.zzjc==0){
              ctrlsco.nowimg = '../images/p0.png'; 
              ctrlsco.nowbaifen = ""; 
                window.clearInterval(ax);
                window.clearInterval(int);
              }
            }

          if(ctrlsco.examine.length>0&&index<ctrlsco.examine.length){


            if(ctrlsco.examine.length<13){

              i = i + Math.floor(12/ctrlsco.examine.length) - 1;
              if(ctrlsco.zzjc==0&&i>ctrlsco.examine.length){
                return false;
              }


              ctrlsco.templist.unshift(ctrlsco.examine[index]);
              index++;
                 $('.baifen').text(Math.floor(index/ctrlsco.examine.length*100)+"%");
                 if(index==ctrlsco.examine.length){
                  imgsrc = '../images/p12.png';
                  ctrlsco.zzjc=0;ctrlsco.$apply();window.clearInterval(ax);
                  window.clearInterval(int);
                }
                $('.bfimg').attr("src",imgsrc);
            }else{
              times = Math.ceil(ctrlsco.examine.length/12);
              i = i + Math.ceil(ctrlsco.examine.length/12) - 1;

              if(ctrlsco.zzjc==0&&i<ctrlsco.examine.length){
                return false;
              }

              for (var j = 0; j<times; j++) {
                ctrlsco.templist.unshift(ctrlsco.examine[index]);
                index++;
                 $('.baifen').text(Math.floor(index/ctrlsco.examine.length*100)+"%");
                 if(index==ctrlsco.examine.length)imgsrc = '../images/p12.png';
                $('.bfimg').attr("src",imgsrc);
              }
              // if(i>12)i=12;
            }

            i++;
            ctrlsco.$apply();
          }
          ran = Math.floor(Math.random()*(5000-200+1)+200);
       },ran)

        ctrlsco.$apply();
      });
    }
  };
});
app.directive('addtjsj', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.deviceServiceList.push({time:ctrlsco.YS_obja.params.tjsj})
       ctrlsco.$apply();
      });
    }
  };
});

app.directive('deltjsj', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.deviceServiceList.pop();
       ctrlsco.$apply();
      });
    }
  };
});


app.directive('addsbs', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
      //  if(ctrlsco.deviceServiceList.length == 0){
      //     ctrlsco.countnum = ctrlsco.deviceServiceList.length;
      //  }
       var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
      //  ctrlsco.countnum += 1;
      ctrlsco.countnum = ctrlsco.deviceServiceList.length+1;
       var count;
       var obj = {serviceName:"",serviceType:"",serviceType:"",ip:"",configData:{dbName:"",ip:"",name:"",pwd:"",port:""},count:ctrlsco.countnum}
       // if(!ctrlsco.YS_obja.params.deviceServiceList)ctrlsco.YS_obja.params.deviceServiceList = [];
       // ctrlsco.YS_obja.params.deviceServiceList.push(obj);
       // ctrlsco.YS_objb.params.deviceServiceList.push(obj);
       ctrlsco.deviceServiceList.push(obj);
       ctrlsco.$apply();
      });
    }
  };
});

app.directive('delsbs', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2); 
        ctrlsco.deviceServiceList.splice(iAttrs.delsbs,1);
        ctrlsco.$apply();
      });
    }
  };
});

// 平台注册联系人电话验证
app.directive('checkphone',function(){
  return{
    link:function(sco, iElm, iAttrs) {
      iElm.on("blur",function(obj){
        var phone = $('#regphone').val();
        var check_phone = document.getElementById('check_phone');
        var regphone = document.getElementById('regphone');
        if (phone.trim().length == 0) {
          check_phone.innerHTML = "电话号码不能为空";
          regphone.setAttribute ("style","border:1px solid red !important;");
          return;
      }
      if(!(/^1[34578]\d{9}$/.test(phone))&&!(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(sco.YS_obja.params.managerPhone))){ 
        check_phone.innerHTML = "请输入正确的电话号码";
        regphone.setAttribute ("style","border:1px solid red !important;");
        return;
      }
        else {
          check_phone.innerHTML = "";
          regphone.setAttribute("style","border:1px solid #0b4c63 !important;")
      }
          })
    }
  }
});
// 平台注册邮箱地址验证
app.directive('checkemail',function(){
  return{
    link:function(sco,iElm,iAttrs){
      iElm.on("blur",function(re){
        var email = $('#regemail').val();
        var check_email = document.getElementById('check_email');
        var regemail = document.getElementById('regemail');
        if(email.trim().length == 0) {
          check_email.innerHTML = "负责人公安网邮箱地址不能为空";
          regemail.setAttribute ("style","border:1px solid red !important;");
          return;
        }
        if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email))){
          check_email.innerHTML = "请输入正确的负责人公安网邮箱地址";
          regemail.setAttribute("style","border:1px solid red !important;");
          return;         
        }
        else{
          check_email.innerHTML = "";
          regemail.setAttribute("style","border:1px solid #0b4c63 !important;")
        }
      })
    }
  }
});

// 校验报警配置邮箱
app.directive('checkacemail',function(){
  return{
    link:function(sco,iElm,iAttrs){
      iElm.on("blur",function(re){
       var ctrlsco = YSfac.getscope_byid(sco,2); 
        var emailbj ="";
        if(iAttrs.checkacemail=='YS_obja'){
          emailbj = ctrlsco.YS_obja.params.emailConfig.emailbj;
   if(!(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(emailbj)))
    {layer.tips("请输入合法的邮箱地址！","#"+iAttrs.id,{tips: [3, 'rgba(0,0,0,.8)','']});return false};
        }

      })
    }
  }
});
// 验证手机号码
app.directive('chkbjphone',function(){
  return{
    link:function(sco,iElm,iAttrs){
      iElm.on("blur",function(re){
       var ctrlsco = YSfac.getscope_byid(sco,2); 
        var phone ="";
        if(iAttrs.chkbjphone=='YS_obja'){
          phone = ctrlsco.YS_obja.params.smsConfig.fstel;
   if(!(/^1[34578]\d{9}$/.test(phone))&&!(/^([0-9]{3,4}-)?[0-9]{7,8}$/.test(phone)))
    {layer.tips("请输入合法的手机号码！","#"+iAttrs.id,{tips: [3, 'rgba(0,0,0,.8)','']});return false};
        }

      })
    }
  }
});
// 校验IP
app.directive('checkip',function(){
  return{
    link:function(sco,iElm,iAttrs){
      iElm.on("blur",function(re){
       var ctrlsco = YSfac.getscope_byid(sco,2); 
        var ip ="";
        if(iAttrs.checkip=='YS_obja'){
          ip = ctrlsco.YS_obja.params.ip;
if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(ip))
  {layer.tips("请输入合法的IP地址！","#"+iAttrs.id,{tips: [3, 'rgba(0,0,0,.8)','']});return false};
        }else if(iAttrs.checkip=='YS_objb'){
          ip = ctrlsco.YS_objb.params.ip;
if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(ip))
  {layer.tips("请输入合法的IP地址！","#"+iAttrs.id,{tips: [3, 'rgba(0,0,0,.8)','']});return false};
        }else if(iAttrs.checkip=="YS_obja.params['dbConfigData.ip']"){
          ip = ctrlsco.YS_obja.params['dbConfigData.ip'];
if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(ip))
  {layer.tips("请输入合法的IP地址！","#"+iAttrs.id,{tips: [3, 'rgba(0,0,0,.8)','']});return false};
        }else if(iAttrs.checkip=="YS_obja.params.localIp"){
          ip = ctrlsco.YS_obja.params.localIp;
if(!(/^(?:(?:1[0-9][0-9]\.)|(?:2[0-4][0-9]\.)|(?:25[0-5]\.)|(?:[1-9][0-9]\.)|(?:[0-9]\.)){3}(?:(?:1[0-9][0-9])|(?:2[0-4][0-9])|(?:25[0-5])|(?:[1-9][0-9])|(?:[0-9]))$/).test(ip))
  {layer.tips("请输入合法的IP地址！","#"+iAttrs.id,{tips: [3, 'rgba(0,0,0,.8)','']});return false};
        }else if(iAttrs.checkip=="YS_obja.params.subnetMask"){
          ip = ctrlsco.YS_obja.params.subnetMask;
if(!(/^(254|252|248|240|224|192|128|0)\.0\.0\.0$|^(255\.(254|252|248|240|224|192|128|0)\.0\.0)$|^(255\.255\.(254|252|248|240|224|192|128|0)\.0)$|^(255\.255\.255\.(254|252|248|240|224|192|128|0))$/).test(ip))
  {layer.tips("请输入合法的子网掩码","#"+iAttrs.id,{tips: [3, 'rgba(0,0,0,.8)','']});return false};
        }else if(iAttrs.checkip=="YS_obja.params.gateway"){
          ip = ctrlsco.YS_obja.params.gateway;
if(!(/(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}/).test(ip))
  {layer.tips("请输入合法的网关","#"+iAttrs.id,{tips: [3, 'rgba(0,0,0,.8)','']});return false};

        }else if(iAttrs.checkip=="YS_obja.params.dns"){
          ip = ctrlsco.YS_obja.params.dns;
          
        }else if(iAttrs.checkip=="YS_obja.params.dnsBak"){
          ip = ctrlsco.YS_obja.params.dnsBak;
        }


        if(ip==""){
          layer.tips("请输入信息！","#"+iAttrs.id,{tips: [3, 'rgba(0,0,0,.8)','']});return false
        }





      })
    }
  }
});

































// 编辑链路
app.directive('etuopu', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2); 



        if(ctrlsco.YS_objb.params.linkName==""||!ctrlsco.YS_objb.params.linkName){
          layer.tips("链路名称不能为空","#blinkName",{tips: [3, 'rgba(0,0,0,.8)','']});return false
          return false;
        }

        if(ctrlsco.YS_objb.params.linkType==""||!ctrlsco.YS_objb.params.linkType){
          layer.tips("请选择链路类型","#linkType",{tips: [3, 'rgba(0,0,0,.8)','']});return false
          return false;
        }



        if(ctrlsco.YS_objb.params['dbConfigData.dbName']==""||!ctrlsco.YS_objb.params['dbConfigData.dbName']){
          layer.tips("数据库名不能为空","#bdbName",{tips: [3, 'rgba(0,0,0,.8)','']});return false
          return false;
        }

        if(ctrlsco.YS_objb.params['dbConfigData.ip']==""||!ctrlsco.YS_objb.params['dbConfigData.ip']){
          layer.tips("ip不能为空","#bip",{tips: [3, 'rgba(0,0,0,.8)','']});return false
          return false;
        }

        if(ctrlsco.YS_objb.params['dbConfigData.port']==""||!ctrlsco.YS_objb.params['dbConfigData.port']){
          layer.tips("端口不能为空","#bport",{tips: [3, 'rgba(0,0,0,.8)','']});return false
          return false;
        }

        if(ctrlsco.YS_objb.params['dbConfigData.name']==""||!ctrlsco.YS_objb.params['dbConfigData.name']){
          layer.tips("用户名不能为空","#bname",{tips: [3, 'rgba(0,0,0,.8)','']});return false
          return false;
        }


        if(ctrlsco.YS_objb.params['dbConfigData.pwd']==""||!ctrlsco.YS_objb.params['dbConfigData.pwd']){
          layer.tips("密码不能为空","#bpwd",{tips: [3, 'rgba(0,0,0,.8)','']});return false
          return false;
        }
       sco.fetch("YS_obje")

      ctrlsco.YS_obje.done = function(re, sco) {
        if (re.code == 0) {

          if (re.data.isConnect) {
        var msgs = re.msg ? re.msg : '数据库检测成功';
              YSfac.load(1, msgs);
     ctrlsco.tapshow=4;

              
           
          } else {
             var msgs = '数据库检测失败';
     
                       layer.msg(msgs); 

          }
        } else {
            var msgs = '数据库检测失败';

                       layer.msg(msgs); 

        }
      }



        
      
        ctrlsco.edtp()
        console.log(ctrlsco.filelist)
        ctrlsco.$apply();
        

      });
    }
  };
});



// 首页隐藏展开导航栏
app.directive('indexnav', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2); 
        $('.nav').slideToggle(400);
          ctrlsco.navup =!ctrlsco.navup
          ctrlsco.$apply();
      });
    }
  };
});

// 首页隐藏展开报警总览
app.directive('symenus1', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2); 
        $('.allalarm').animate({width:'toggle'},350);
          ctrlsco.syxmenu1 =!ctrlsco.syxmenu1
          ctrlsco.$apply();
      });
    }
  };
});
// 首页隐藏展开报警排行榜
app.directive('symenus2', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2); 
        $('.alarmph').animate({width:'toggle'},350);
          ctrlsco.syxmenu2 =!ctrlsco.syxmenu2
          ctrlsco.$apply();
      });
    }
  };
});
// 
app.directive('iright', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2); 
        // if(ctrlsco.YS_plistb.params.currentPage<ctrlsco.YS_plistb.data.totalPage){
        //   ctrlsco.YS_plistb.params.currentPage ++;
        //   ctrlsco.fetch("YS_plistb");
        // }else{
        //   return false
        // }

        if(ctrlsco.showstatus<sco.epage){
          ctrlsco.showstatus=ctrlsco.showstatus+1
        }else{
          return false
        }
       ctrlsco.$apply();

      });
    }
  };
});



app.directive('ileft', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var ctrlsco = YSfac.getscope_byid(sco,2); 


        // if(ctrlsco.YS_plistb.params.currentPage>1){
        //   ctrlsco.YS_plistb.params.currentPage --;
        //   ctrlsco.fetch("YS_plistb");
        // }else{
        //   return false
        // }




        if(ctrlsco.showstatus>1){
          ctrlsco.showstatus=  ctrlsco.showstatus-1
         }else{
          return false
         }
          ctrlsco.$apply();
      });
    }
  };
});


app.directive('bxip',function(){
  return{
    link:function(sco,iElm,iAttrs){
      iElm.on("click",function(re){

       var ctrlsco = YSfac.getscope_byid(sco,2); 

       ctrlsco.YS_obja.params.loginIpStart ="0.0.0.0";
       ctrlsco.YS_obja.params.loginIpEnd ="255.255.255.255";
       ctrlsco.rip = !ctrlsco.rip;
       
       ctrlsco.$apply();
      })
    }
  }
});

app.directive('bxtime',function(){
  return{
    link:function(sco,iElm,iAttrs){
      iElm.on("click",function(re){

       var ctrlsco = YSfac.getscope_byid(sco,2); 

       ctrlsco.YS_obja.params.loginTimeStart ="00:00:00";
       ctrlsco.YS_obja.params.loginTimeEnd ="23:59:59";
      // ctrlsco.rtime = !ctrlsco.rtime;
       
       ctrlsco.$apply();

      })
    }
  }
});



// 体检添加时间
app.directive('addnewtime',function(){
  return{
    link:function(sco,iElm,iAttrs){
      iElm.on("click",function(re){

       var ctrlsco = YSfac.getscope_byid(sco,2); 
       if(!ctrlsco.temptime){
        layer.msg("时间不能为空！");return false;
       }
       ctrlsco.timearr.push(ctrlsco.temptime);
       // ctrlsco.YS_objb.params.checkTimes.push(ctrlsco.temptime);
       ctrlsco.$apply();
      })
    }
  }
});

app.directive('reload',function(){
  return{
    link:function(sco,iElm,iAttrs){
      iElm.on("click",function(re){
        location.reload()
      })
    }
  }
});


// 体检删除时间
app.directive('delnewtime',function(){
  return{
    link:function(sco,iElm,iAttrs){
      iElm.on("click",function(re){

       var ctrlsco = YSfac.getscope_byid(sco,2); 

       ctrlsco.timearr.splice(iAttrs.delnewtime,1);
       
       ctrlsco.$apply();

      })
    }
  }
});
// 设备删除
app.directive('linkdel', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       ctrlsco.YS_objd.params.linkId=sco.value.linkId;
        YS('layer', function () {
       ctrlsco.dellayer =  layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#remove')
          });
        });
      });
    }
  };
});


// 设置时间段
app.directive('setfwtime', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
            var date = new Date();
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = date.getDate() + ' ';
            var ctrlsco = YSfac.getscope_byid(sco,2); 
            var today = Y+M+D;

        if(iAttrs.setfwtime=='now'){
          ctrlsco.fwtime = today +' - ' +today;
        }else if(iAttrs.setfwtime=='weak'){
          console.log(2);
        }else if(iAttrs.setfwtime=='month'){
          console.log(3);
        }

        ctrlsco.$apply();

      });
    }
  };
});





app.directive('xitongzijian', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
       var ctrlsco = YSfac.getscope_byid(sco,2); 
       var ran = 1000;
      var index = 0;
      var times = 0;
      var int = 0;
      var currentStep = 0;
      var waitTime = 0;
      var ran = 1000;


        if(iAttrs.cancle){
          ctrlsco.zzjc=0;
          ctrlsco.nowimg = '../images/p0.png'; 
          ctrlsco.nowbaifen = ""; 
          ctrlsco.tapshow = 0;
          ctrlsco.$apply();
          return false;
        }


       
       // if(iAttrs.tijian){
       ctrlsco.fetch(iAttrs.xitongzijian); 
       //   ctrlsco.currentTijian = iAttrs.tijian;
       //   if(iAttrs.tijian=='YS_objc'){
       //      var a = ctrlsco.YS_objc;
       //     if(!a.params||!a.params.deviceId){
       //      layer.msg('请选择设备类型');
       //      return false;
       //     }
       //      // a.params.deviceId = '';
       //   }else if(iAttrs.tijian=='YS_objd'){
       //      var a = ctrlsco.YS_objd;
       //     if(!a.params||!a.params.linkId){
       //      layer.msg('请选择链路类型');
       //      return false;
       //     }
       //      // a.params.linkId = '';
       //   }else if(iAttrs.tijian=='YS_obje'){
       //      var a = ctrlsco.YS_obje;
       //     if(!a.params||!a.params.taskId){
       //      layer.msg('请选择任务类型');
       //      return false;
       //     }
       //   }
       //   // var a = iAttrs.tijian;
       // }


       // if(iAttrs.reset){
       //  ctrlsco.fetch(ctrlsco.currentTijian);
       // }



       ctrlsco.tapshow = 1;
       if(ctrlsco.zzjc==1){
        ctrlsco.zzjc=0;
        window.clearInterval(int);
        ctrlsco.nowimg = '../images/p0.png'; 
        ctrlsco.nowbaifen = 0; 
       }else{
        ctrlsco.templist = [];
        // int = ctrlsco.spline();
        ctrlsco.zzjc=1;
        ctrlsco.nowimg = '../images/p0.png'; 
        ctrlsco.nowbaifen = 0; 
       }


       i=1;
       j=1;


          var ax = setInterval(function(){

            //等待时间超过一分钟直接显示100%，并结束
            if(waitTime > 60000){
                ctrlsco.nowimg = '../images/p12.png'; 
                ctrlsco.nowbaifen = 100;
                ctrlsco.zzjc=0;
                ctrlsco.$apply();
                window.clearInterval(ax);
                return;
            }


            //无数据
            if(ctrlsco.YS_objb.data.checkItems.length==0){

                waitTime += 1000;
                ctrlsco.fetch("YS_objb");
                return false;
            }



          //当有数据时并且不是最后一步
          // if(ctrlsco.maxStep>0&&currentStep<ctrlsco.maxStep){
          if(ctrlsco.examine.length>0){

              //插入数组展示
              ctrlsco.templist.unshift(ctrlsco.examine[currentStep]);
              //每次覆盖总数
              ctrlsco.maxStep = ctrlsco.examine[currentStep].totalStep;
              //赋值当前itemId
              ctrlsco.YS_objb.params.index = ctrlsco.examine[currentStep].itemId;
              //淡入效果
              //step+1
              currentStep++;

              ran = 600;

              // if(ctrlsco.maxStep<13){
              //   i = Math.floor(i + ctrlsco.maxStep/12);
              // }else{
              //   i = i + Math.ceil(currentStep/ctrlsco.maxStep);
              // }
              

              var imgsrc = '../images/p'+ i +'.png';
              var progress = Math.floor(currentStep/ctrlsco.maxStep*100);

              //当百分比变大时才变化
              if(ctrlsco.nowbaifen<progress){

                if(progress==100){
                  progress=99;
                }
                ctrlsco.nowbaifen = progress;
                i = Math.floor(progress/8.33)<1?1:Math.floor(progress/8.33);
                ctrlsco.nowimg = '../images/p'+i+'.png';
              }





            //执行到最后一步
            if(currentStep==ctrlsco.maxStep&&currentStep==ctrlsco.examine.length){
              ctrlsco.nowimg = '../images/p12.png'; 
              ctrlsco.nowbaifen = 100;
              ctrlsco.zzjc=0;
              window.clearInterval(ax);
            }else if(currentStep<ctrlsco.maxStep&&currentStep==ctrlsco.examine.length){//当前数组遍历完，拿最大checkid重新跑接口
              ctrlsco.fetch("YS_objb");
            }

            // if(currentStep==maxStep){
            //   ctrlsco.zzjc=0;ctrlsco.$apply();window.clearInterval(ax);
            // }

            ctrlsco.$apply();
          }
          //Math.floor(Math.random()*(5000-200+1)+200);
       },ran)

        ctrlsco.$apply();
      });
    }
  };
});


app.directive('sysjc', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
        var _this = $(iElm);
       var ctrlsco = YSfac.getscope_byid(sco,2); 
            var i = 0;
            var arr = ["0%","12%","21%","29%","37%","46%","54%","62%","70%","79%","90%","99%","100%"]
            var ran = 1000;
            var index = 0;
            var div = document.getElementById("exambox");
            var times = 0;

        if(iAttrs.sysjc=='cancle'){
          ctrlsco.zzjc=0;
          $('.bfimg').attr("src",'../images/p0.png');
          $('.baifen').text("");
          ctrlsco.tapshow=0;
          ctrlsco.$apply();
          return false;
        }

        ctrlsco.tapshow=1;
       if(ctrlsco.zzjc==1){
        ctrlsco.zzjc=0;
        $('.bfimg').attr("src",'../images/p0.png');
        $('.baifen').text("");
        ctrlsco.$apply();
       }else{
        ctrlsco.templist = [];
        ctrlsco.zzjc=1;
        $('.bfimg').attr("src",'../images/p0.png');
        $('.baifen').text("0%");
       }
       i=1;

      var ax = setInterval(function(){
        if(i==12){ctrlsco.zzjc=0;ctrlsco.$apply();};
           if(i>12){ctrlsco.zzjc=0;ctrlsco.$apply();window.clearInterval(ax);};

        var imgsrc = '../images/p'+ i +'.png';

        if(i>12){
          $('.bfimg').attr("src",'../images/p12.png');
           $('.baifen').text("100%");
        }else{
          if(ctrlsco.zzjc==0){
            $('.bfimg').attr("src",'../images/p0.png');
            $('.baifen').text("0%");
            window.clearInterval(ax);
          }else{

            // $('.bfimg').attr("src",imgsrc);
             // $('.baifen').text(arr[i]);
          }
        }

      if(ctrlsco.YS_objb.data.length>0&&index<ctrlsco.YS_objb.data.length){


        if(ctrlsco.YS_objb.data.length<13){

          i = i + Math.floor(12/ctrlsco.YS_objb.data.length) - 1;
          if(ctrlsco.zzjc==0&&i>ctrlsco.YS_objb.data.length){
            return false;
          }


          ctrlsco.templist.unshift(ctrlsco.YS_objb.data[index]);

          index++;             $('.baifen').text(Math.floor(index/ctrlsco.YS_objb.data.length*100)+"%");
             if(index==ctrlsco.YS_objb.data.length)imgsrc = '../images/p12.png';
            $('.bfimg').attr("src",imgsrc);
        }else{
          times = Math.ceil(ctrlsco.YS_objb.data.length/12);
          i = i + Math.ceil(ctrlsco.YS_objb.data.length/12) - 1;

          if(ctrlsco.zzjc==0&&i<ctrlsco.YS_objb.data.length){
            return false;
          }

          for (var j = 0; j<times; j++) {
            ctrlsco.templist.unshift(ctrlsco.YS_objb.data[index]);

            index++;             $('.baifen').text(Math.floor(index/ctrlsco.YS_objb.data.length*100)+"%");
             if(index==ctrlsco.YS_objb.data.length)imgsrc = '../images/p12.png';
            $('.bfimg').attr("src",imgsrc);
          }
          // if(i>12)i=12;
        }

        i++;
        ctrlsco.$apply();
      }
      div.scrollTop = div.scrollHeight;
      ran = Math.floor(Math.random()*(5000-200+1)+200);
   },ran)
      });
    }
  };
});




app.directive('cfinfo', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("mouseout", function (e) {
     var ctrlsco = YSfac.getscope_byid(sco,2);
     // setTimeout(function(){
       ctrlsco.showf=0
        ctrlsco.$apply();
     // },500)
    

    })
   }
 }
})

app.directive('showfinfo', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("mouseover", function (e) {
         var ctrlsco = YSfac.getscope_byid(sco,2);
          if(iAttrs.status&&iAttrs.status==1){
         return false;
         } else{

        ctrlsco.showf=iAttrs.showfinfo;
        var infoid="finfo"+iAttrs.listkey+iAttrs.showfinfo;
        ctrlsco.YS_obja.params.deviceId = iAttrs.showfinfo;
        ctrlsco.listkey = iAttrs.listkey;

        ctrlsco.fetch('YS_obja');
        e.stopPropagation();
        // ctrlsco.showf=ctrlsco.showf!=0?0:iAttrs.showfinfo
        // console.log(infoid)
        // $("#"+infoid).removeClass("dpn")
        // }
         }

    })
   
   }
 }
})


// 显示信息
app.directive('showinfo', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("mouseover", function (e) {
         var ctrlsco = YSfac.getscope_byid(sco,2); 

    if(iAttrs.status&&iAttrs.status==1){
      return false;
    }
var listkey=iAttrs.listkey;
if(iAttrs.file=='false'||!iAttrs.file||iAttrs.file=='undefined'){
        ctrlsco.YS_obja.params.deviceId = iAttrs.showinfo;
        ctrlsco.listkey = iAttrs.listkey;//iAttrs.showinfo;
        ctrlsco.YS_lista.data.list.map(function(elem){
          elem.topologyNodes.map(function(ele){
            ele['show'] = 0;
            if(ele.child){
              ele.child.map(function(el){
                el['show'] = 0
              })
            }
          })
        })
        var show = sco.val.show ? 0:1;
       
        if(iAttrs.childkey){
          sco.val.child[iAttrs.childkey].show=show;
        }else{
          sco.val.show =show;
        }
        ctrlsco.fetch('YS_obja');

        e.stopPropagation();
}else{
      ctrlsco.filelist = [];
      if(iAttrs.ischild){
        // debugger
        if(iAttrs.childkey==0){
           ctrlsco.filelist =sco.val.child?sco.val.child[0].deviceIdsElem:[];
        }else{
           ctrlsco.filelist = sco.v?sco.v.deviceIdsElem:[];
        } 
      }else{
        ctrlsco.filelist = sco.val?sco.val.deviceIdsElem?sco.val.deviceIdsElem:[] :[];
      }
     
      if(ctrlsco.filelist.length>0){
        console.log(ctrlsco.filelist)
        ctrlsco.filenamelist = [];

        ctrlsco.filelist.map(function(elem,index){
          var name = "";
          var icon = "";
          var ip = "";
          if(ctrlsco.YS_lista.data.devices[elem.toDeviceId]){

            deviceId = elem.toDeviceId;
            status = elem.deviceStatus;
            name = ctrlsco.YS_lista.data.devices[elem.toDeviceId].deviceName;
            // ctrlsco.filelist[index] = ctrlsco.YS_lista.data.devices[elem].icon;
            icon = ctrlsco.YS_lista.data.devices[elem.toDeviceId].icon;
            ip = ctrlsco.YS_lista.data.devices[elem.toDeviceId].ip;

          }
                // ctrlsco.iconlist.map(function(elem2){
                //   if(elem2.id==elem){
                //     temp = elem2.deviceName;
                //   }
                // })

          ctrlsco.filenamelist.push({name:name,icon:icon,deviceId:deviceId,status:status,listkey:listkey,ip:ip});
        })
      }


     YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#filebox')
          });
        });
}
        ctrlsco.$apply();
         
      });
    }
  };
});

//文件夹点击
app.directive('showinfo2', function () {
  return {
    link: function (sco, iElm, iAttrs) {
      iElm.on("click", function (e) {
         var ctrlsco = YSfac.getscope_byid(sco,2); 

    if(iAttrs.status&&iAttrs.status==1){
      return false;
    }
var listkey=iAttrs.listkey;
if(iAttrs.file=='false'||!iAttrs.file||iAttrs.file=='undefined'){
        ctrlsco.YS_obja.params.deviceId = iAttrs.showinfo2;
        ctrlsco.listkey = iAttrs.listkey;//iAttrs.showinfo2;
        ctrlsco.YS_lista.data.list.map(function(elem){
          elem.topologyNodes.map(function(ele){
            ele['show'] = 0;
            if(ele.child){
              ele.child.map(function(el){
                el['show'] = 0
              })
            }
          })
        })
        var show = sco.val.show ? 0:1;
       
        if(iAttrs.childkey){
          sco.val.child[iAttrs.childkey].show=show;
        }else{
          sco.val.show =show;
        }
        ctrlsco.fetch('YS_obja');

        e.stopPropagation();
}else{
      ctrlsco.filelist = [];
      if(iAttrs.ischild){
        // debugger
        if(iAttrs.childkey==0){
           ctrlsco.filelist =sco.val.child?sco.val.child[0].deviceIdsElem:[];
        }else{
           ctrlsco.filelist = sco.v?sco.v.deviceIdsElem:[];
        } 
      }else{
        ctrlsco.filelist = sco.val?sco.val.deviceIdsElem?sco.val.deviceIdsElem:[] :[];
      }
     
      if(ctrlsco.filelist.length>0){
        console.log(ctrlsco.filelist)
        ctrlsco.filenamelist = [];

        ctrlsco.filelist.map(function(elem,index){
          var name = "";
          var icon = "";
          var ip = "";
          if(ctrlsco.YS_lista.data.devices[elem.toDeviceId]){

            deviceId = elem.toDeviceId;
            status = elem.deviceStatus;
            name = ctrlsco.YS_lista.data.devices[elem.toDeviceId].deviceName;
            // ctrlsco.filelist[index] = ctrlsco.YS_lista.data.devices[elem].icon;
            icon = ctrlsco.YS_lista.data.devices[elem.toDeviceId].icon;
            ip = ctrlsco.YS_lista.data.devices[elem.toDeviceId].ip;

          }
          ctrlsco.filenamelist.push({name:name,icon:icon,deviceId:deviceId,status:status,listkey:listkey,ip:ip});
        })
      }


     YS('layer', function () {
          layer.open({
            type: 1,
            title: false, //不显示标题
            closeBtn: 0,
            shadeClose: false,
            shade: 0.5,
            area: ['auto', 'auto'], //宽高
            content: $('#filebox')
          });
        });
}
        ctrlsco.$apply();
         
      });
    }
  };
});



app.directive('clearicon', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2);

           ctrlsco.clear(); 
        });
     }
};
}); 

// app.directive('fimgdel', function(){ 
// return { 
// link: function(sco, iElm, iAttrs) {
//         iElm.on("click",function(e){ 
//            var ctrlsco = YSfac.getscope_byid(sco,2);

//            var id = iAttrs.id+'fimg';
//            $('#'+id).hide()
//         });
//      }
// };
// }); 


//搜索接口search="todatetodate"
app.directive('searchinter', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2);
           ctrlsco[iAttrs.searchinter].params.currentPage = 1;
           ctrlsco.fetch(iAttrs.searchinter); 
        });
     }
};
}); 

app.directive('alarmnav', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) {
          iElm.on("click",function(e){ 
            if(iAttrs.key=='true'){
              window.location.href="#/taskalarm";
              // console.log(sco.val);
              YSfac.setstore('currentData',sco.value);
            }
            else{
              return false;
            }
          });
       }
  };
  }); 

app.directive('devicewrong', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) {
          iElm.on("click",function(e){ 
              window.location.href="#/equipalarm";
              // console.log(sco.val);
              YSfac.setstore('currentDeviceId',sco.val.toDeviceId);
              YSfac.setstore('currentLevel',3);

          });
       }
  };
  }); 

app.directive('devicealarm', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) {
          iElm.on("click",function(e){ 
              window.location.href="#/equipalarm";
              // console.log(sco.val);
              YSfac.setstore('currentDeviceId',sco.val.toDeviceId);
              YSfac.setstore('currentLevel',2);

          });
       }
  };
  }); 



// license授权上传
app.directive('licensesupload', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) { 
  var ctrlsco = YSfac.getscope_byid(sco, 2); 
  
  var uploadInst = layui.upload.render({
      elem: $(iElm), 
      accept:'file', 
      url: conf.rooturl + 'license/up', 
      done: function(re,index, upload){ 
          if(re.code == 0){ 
            
            ctrlsco.filename = "licenseData";
            ctrlsco.tapshow = 1;
            ctrlsco.$apply();
            layer.open({
              type: 1,
              title: false, //不显示标题
              closeBtn: 0,
              shadeClose: false,
              shade: 0.5,
              area: ['auto', 'auto'], //宽高
              content: $('#sqsucc')
            });
  
          }else{
            ctrlsco.tapshow = 2;
            ctrlsco.$apply();
                layer.open({
                  type: 1,
                  title: false, //不显示标题
                  closeBtn: 0,
                  shadeClose:false, 
                  shade:0.5, 
                  area: ['auto', 'auto'], //宽高
                  content: $('#sqfail')
                });
          } 
      } ,
      error: function(){
      $('i').addClass('xgico');
    }
      
  }); 
  }
  };
  });
  
app.directive('licensesupload2', function(){ 
return { 
link: function(sco, iElm, iAttrs) { 
var ctrlsco = YSfac.getscope_byid(sco, 2); 
var uploadInst = layui.upload.render({
    elem: $(iElm), 
    accept:'file', 
    url: conf.rooturl + 'license/up', 
    done: function(re,index, upload){ 

        if(re.code == 0){ 
           ctrlsco.filename = "licenseData";
            ctrlsco.tapshow = 1;
            ctrlsco.$apply();
           layer.msg('授权成功,即将跳转到登录页');
          setTimeout(function(){
             window.location.href = '/login.html';
          },2000);


              }else{
                  
        layer.msg('授权失败');


        } 
    } 
    
}); 
}
};
});




//
app.directive('setzzjc', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) {
          iElm.on("click",function(e){
            var ctrlsco = YSfac.getscope_byid(sco, 2); 
            ctrlsco.zzjc = -1;
            ctrlsco.templist = [];
            window.clearInterval(ctrlsco.qian);
          });
       }
  };
  }); 
app.directive('delinput', function(){ 
  return { 
  link: function(sco, iElm, iAttrs) {
          iElm.on("click",function(e){
            var ctrlsco = YSfac.getscope_byid(sco, 2); 
         debugger;
            ctrlsco[iAttrs.delinput] ='';
             ctrlsco.$apply();
          });
       }
  };
  }); 


app.directive('fetrinking', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2);
           ctrlsco.YS_objc.params.type = iAttrs.fetrinking;
           ctrlsco.fetch("YS_objc"); 
           ctrlsco.$apply();
        });
     }
};
}); 


app.directive('test', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2);

           console.log(sco.value);
        });
     }
};
}); 
app.directive('tonei', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        iElm.on("click",function(e){ 
           var ctrlsco = YSfac.getscope_byid(sco,2);
  
           delete  ctrlsco.YS_obja.params.deviceId;
           ctrlsco.$apply();
        });
     }
};
}); 





app.directive('llselect', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        layui.use('form', function(){
        var key =  'select('+iAttrs.llselect+')';
        layui.form.on(key, function(data){
          var ctrlsco = YSfac.getscope_byid(sco,2);
          var arr = iAttrs.llselect.split('.');
          ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.llselect, data.value); 
          iAttrs.codeid&&(ctrlsco[arr[0]][arr[1]].codeid = iAttrs.codeid);
          iAttrs.run&&ctrlsco.fetch(iAttrs.run);//如果存在run，则去跑对应的接口


          ctrlsco.YS_listc.params.linkId = ctrlsco.YS_objd.params.linkId;


          ctrlsco.$apply();
        }); 
        layui.form.render();
      }); 
     }
};
});


app.directive('toselecttask', function(){ 
return { 
link: function(sco, iElm, iAttrs) {
        layui.use('form', function(){
        var key =  'select('+iAttrs.toselecttask+')';
        layui.form.on(key, function(data){
          var ctrlsco = YSfac.getscope_byid(sco,2);
          var arr = iAttrs.toselecttask.split('.');
          ctrlsco = YSfac.yssetvalue(ctrlsco, iAttrs.toselecttask, data.value); 

//选择链路后，带所选的id来循环任务接口,把所属的任务都堆到数组里边
    var linkid =ctrlsco.YS_objf.params.linkId;
    if (ctrlsco.YS_obje.params.taskId) {
      ctrlsco.YS_obje.params.taskId=='';
    } 
    ctrlsco.taskarr=[];
//YS_listc.data.list 任务接口返回的数据 
          if (ctrlsco.YS_listc.data.list){
                ctrlsco.YS_listc.data.list.map(function(e){
                      if (e.linkId==linkid){
                         ctrlsco.taskarr.push(e); 
                      }else{
                        return;
                      }

                });


          } 
$('#xlu').removeAttr("disabled");
          ctrlsco.$apply();
        setTimeout(function(){
          layui.form.render();
        },500);



        }); 
      }); 
     }
};
});


























//绑定dom ============================================================================
 angular.element(document).ready(function() {angular.bootstrap(document, ['app']);}); 
})(window);
 


