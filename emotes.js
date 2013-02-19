
// Many thanks to vidya4chan for all the help!

// Debugging box
$('#box3').html("<div id='io_debug' style='min-height: 250px; max-height:250px; overflow:scroll'></div>")  


/*
    //Turn the entire list into right/middle-clickable URLs
$(".disableFilters").click(function(){
	word_filters = {};
	Cookie.createCookie("r_animu_disable_filters", "true");
	Message.each(function(m){if(m && m.oldMsg){m.msg = m.oldMsg;}console.log(m);});
	Message && Message.clear();
	window.sp && window.sp.messages && window.sp.messages.addAll();	
});
$(".enableFilters").click(function() {
	Cookie.eraseCookie("r_animu_disable_filters");
	setupFilters();
	Message && Message.clear();
	window.sp && window.sp.messages && window.sp.messages.addAll();		
});
$(".linkify").click(function() {
$('#playlist .items li').each(function() {var id = $(this).attr('id').replace('media_', ''); var vid = Media.records[id]; if(vid.mtype === 'yt') {var url = 'http://www.youtube.com/watch?v='+vid.mid;console.log(url); var title = $(".title", this).html(); title = '<a target="_blank" class="play title" href="'+url+'">'+title+'</a>'; console.log(title); $(".title", this).html(title);}})
});
*/



function removeElement(id) {
  var element = document.getElementById(id);
  element.parentNode.removeChild(element);
}

//removeElement("adsquare");


//Theme switch
$("ul.themes a").click(function(){var theme = $(this).attr("href");themSwitch(theme);console.log("set to" + theme);});

function themSwitch(theme)
{
	switch(theme){
		case "#themeEmpty" :
		$(".customTheme link[rel=stylesheet]").attr({href : "#"} );
	break;
		case "#Based" :
		$(".customTheme link[rel=stylesheet]").attr({href : "//vidya4chan.com/qq.css"} );
	break;
		case "#d" :
		$(".customTheme link[rel=stylesheet]").attr({href : "//tntpowerhost.com/~wicked6/pink.css"} );
	break;
		case "#yotsuba" :
		$(".customTheme link[rel=stylesheet]").attr({href : "//vidya4chan.com/yotsuba.css"} );
	break;
		case "#full" :
		$(".customTheme link[rel=stylesheet]").attr({href : "//dl.dropbox.com/s/89zr5ouf1z2s0du/xmovie.css"} );
	break;
		case "#night" :
		$(".customTheme link[rel=stylesheet]").attr({href : "//vidya4chan.com/night.css"} );
	break;
		case "#blue" :
		$(".customTheme link[rel=stylesheet]").attr({href : "//vidya4chan.com/yotsubab.css"} );
	break;
	}
}

function loadExternalJS() {




var showfcmenu = false;
  
helpers.animateEmotes = function(el) { 
  message_chat = ' '+el.html()+' ';
  var spam_test = message_chat.split(":");
    
  if (spam_test.length < 12) {
   $.each(facecodes,
	 function(code, image) {regexp = new RegExp(code,'g');message_chat = typeof image==='function'?message_chat.replace(regexp,image()):message_chat.replace(regexp,image);}
   );
  }

  el.html(message_chat);
    };

	$('.controls').append('<br>');
	
	var menuHTML = '';
	var menuCount = 0;
	$.each(facecodes, function(code, image) {
		menuHTML = menuHTML+ '<a href="#" onclick="addFaceCode(\''+code+'\')">'+image+'</a> ';
		menuCount = menuCount+1;
		if(menuCount == 9) {
			menuCount = 0;
			menuHTML = menuHTML+'<br>';
		}
	  });
	
	$('#chat').append('<div id="facecodesmenu" class="hide" style="position:absolute;left:5px;top:5px;z-index:1;background-color:#FFFFFF;">'+menuHTML+'</div>');
	
	$("#showfacecodes").click(function() {
	  if(showfcmenu == false) {
		$("#facecodesmenu").removeClass('hide');
		showfcmenu = true;
	  }else{
	    $("#facecodesmenu").addClass('hide');
		showfcmenu = false;
	  }
	});
	
	jQuery.fn.extend({
	insertAtCaret: function(myValue){
	  return this.each(function(i) {
		if (document.selection) {
		  //For browsers like Internet Explorer
		  this.focus();
		  sel = document.selection.createRange();
		  sel.text = myValue;
		  this.focus();
		}
		else if (this.selectionStart || this.selectionStart == '0') {
		  //For browsers like Firefox and Webkit based
		  var startPos = this.selectionStart;
		  var endPos = this.selectionEnd;
		  var scrollTop = this.scrollTop;
		  this.value = this.value.substring(0, startPos)+myValue+this.value.substring(endPos,this.value.length);
		  this.focus();
		  this.selectionStart = startPos + myValue.length;
		  this.selectionEnd = startPos + myValue.length;
		  this.scrollTop = scrollTop;
		} else {
		  this.value += myValue;
		  this.focus();
		}
	  })
	}
	});
	
	addFaceCode = function (code) {
		$("#facecodesmenu").addClass('hide');
		showfcmenu = false;
		//$('#cin').val($('#cin').val()+' '+code);
		$('#cin').insertAtCaret(code);
	};
	
}




setTimeout(loadExternalJS, 3000);


// --------------------------------------------------
// sanitizeMedia by Desuwa
    function sanitize(s) {
        return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/["']/g, '&quot;');
    }
    function sanitizeMedia(m) {
        for(field in m) {
            if(typeof(m[field]) === 'string') {
                val = m[field]
                console.log("Sanitizing %s", val);
                m[field] = sanitize(val);
            }
        }        
    }
     
    Media.create = _.wrap(Media.create, function() {
        fn = arguments[0];
        J  = arguments[1];
        sanitizeMedia(J);
        return fn.apply(Media, _.rest(arguments));
    });

//------------------------------------


$(document).ready(function () {

// $(".webcam").replaceWith('<div class="webcamx"><a href="http://tinychat.com/v4c/" target="_blank"><img src="http://i.imgur.com/cUfOF.png"></a></div>')
 
//$("#logo").replaceWith('<div id="logo"><a href="http://www.4chon.net/new/"> <img src="http://www.synchtube.com/uploads/avatars/14330/toe_avatar.jpg"></a></div>')

});

var m_x, m_y, cnt = ($(document).find("canvas").length+1);
document.onmousemove=function(evt){m_x=evt.pageX;m_y=evt.pageY;}

var lame = 0;
var facecodes =
{
/*EMOTE_DELIMITER*/
':tf:':'<img src="http://i.imgur.com/0wNsR.png" width="41" height="34">',
':shlomo:':'<img src="http://i.imgur.com/fybUG.gif" width="46" height="55">',
':shlomojew:':'<img src="http://i.imgur.com/fybUG.gif" width="46" height="55">jew',
':librage:' : '<img src="http://i.imgur.com/EDh7C.png" onclick="this.src = \'http://i.imgur.com/xSv73.png\'">',
':breivik:':'<img src="http://i.imgur.com/N5dPE.jpg">',
':lift:':'<img src="http://i.imgur.com/nbcUB.png">',
':tyrone:':'<img src="http://i.imgur.com/47IlH.png">',
':shlomomad:':'<img src="http://i.imgur.com/XvOLx.png">',
':shlomoalarmed:':'<img src="http://i.imgur.com/7PPy6.png">',
':fire:':'<img src="http://i.imgur.com/jVbOq.png">',
':flammenwerfer:':'<img src="http://i.imgur.com/ClFij.gif">',
':obama:':'<img src="http://i.imgur.com/xHrWF.jpg">',
':itshappening:':'<img src="http://i.imgur.com/Y9MdH.gif">',
':antifa:':'<img src="http://i.imgur.com/Wnl9N.png">',
':bush:':'<img src="http://i.imgur.com/XlsyM.jpg">',
':smiley:':'<img src="http://i.imgur.com/BaqlU.png">',
':pizzazog:':'<img src="http://i.imgur.com/jwXRl.gif">',
':removekebab:':'<img src="http://i.imgur.com/YCj8Q.png">',
':rope:':'<img src="http://i.imgur.com/jiYhO.jpg">',
':muzzy:':'<img src="http://i.imgur.com/xayhg.png">',
':hitler:':'<img src="http://i.imgur.com/WKSyb.png">',
':jidf:':'<img src="http://i.imgur.com/Y7HMC.gif">',
':dworkin:':'<img src="http://i.imgur.com/PX3PM.png">',
':billo:':'<img src="http://i.imgur.com/HUaWr.png">',
':shlomoworried:':'<img src="http://i.imgur.com/xeAyE.png">',
':jew:':'<img src="http://i.imgur.com/QuGwt.gif">',
':holocaust:':'<img src="http://i.imgur.com/Et5mz.gif">',
':feelsgood:':'<img src="http://i.imgur.com/cEp9A.jpg">',
':feelsmad:':'<img src="http://i.imgur.com/h5DMX.png">',
':smug:':'<img src="http://i.imgur.com/VsXwe.png">',
':asian:':'<img src="http://i.imgur.com/yflLJ.png">',
':aa:':'<img src="http://i.imgur.com/qULWC.jpg">',
':currysnatch:':'<img src="http://i.imgur.com/FphZV.jpg">',
':libfag:':'<img src="http://i.imgur.com/0guud.png">',
':timwise:':'<img src="http://i.imgur.com/AqfZg.png">',
':plainview:':'<img src="http://i.imgur.com/h32qc.jpg">',
':brony:':'<img src="http://i.imgur.com/oaV1C.jpg">',
':bueno:':'<img src="http://i.imgur.com/Zh8uf.png">',
':alexjones:':'<img src="http://i.imgur.com/EcXdj.gif">',
':dorksided:':'<img src="http://i.imgur.com/w9jFu.jpg">',
':morpheus:':'<img src="http://i.imgur.com/7QL0l.jpg">',
':handrub:':'<img src="http://i.imgur.com/oSBrQ.jpg">',
':slavsquat:':'<img src="http://i.imgur.com/2rztd.png">',
':bixnood:':'<img src="http://i.imgur.com/h5tEz.png">',
':jewgrief:':'<img src="http://i.imgur.com/q4Zhd.jpg">',
':roommodisafaggot:':'<img src="http://i.imgur.com/3gAbW.jpg">',
':faggot:':'<img src="http://i.imgur.com/kalou.png">',
':coalburner:':'<img src="http://i.imgur.com/s9w24.png">',
':rakim:':'<img src="http://i.imgur.com/fZhxg.png">',
':negress:':'<img src="http://i.imgur.com/XZ1aZ.png">',
':feel:':'<img src="http://i.imgur.com/619U0.png">',
':drunkface:':'<img src="http://i.imgur.com/oGiHE.jpg">',
':alcoholic:':'<img src="http://i.imgur.com/uymVR.jpg">',
':bob:':'<img src="http://i.imgur.com/0guoI.jpg">',
':hateface:':'<img src="http://i.imgur.com/l7h0P.jpg">',
':sluts:':'<img src="http://i.imgur.com/SxEvc.png">',
':shlomit:':'<img src="http://i.imgur.com/3hEzK.png">',
':bodywash:': '<img src="http://i.imgur.com/eEGbx.png">',
':uncle:': '<img src="http://i.imgur.com/NF0yh.png">',
':dolan:': '<img src="http://i.imgur.com/oIBaE.jpg">',
':america:': '<img src="http://i.imgur.com/3Wxtk.gif">',
':bestkorea:': '<img src="http://i.imgur.com/Kd2oh.gif">',
':jimmies:': '<img src="http://i.imgur.com/gQB3S.gif">',
':dog:': '<img src="http://i.imgur.com/OcGfN.gif">',
':reddit:': '<img src="http://i.imgur.com/wKaFk.png">',
':snoop:': '<img src="http://i.imgur.com/Bmsp9.gif">',
':sadfrog:' : '<img src="http://i.imgur.com/4lwg0.png" onmouseover="this.src = \'http://i.imgur.com/h5DMX.png\'">',
':gooby:': '<img src="http://i.imgur.com/V794a.jpg" onmouseover="this.src = \'http://i.imgur.com/GbtFl.jpg\'">',
/*
	':dolan:': '<img src="http://vidya4chan.com/dooktart.png" width="44" height="45">',
	':Dolan:': '<idmg src="http://vidya4chan.com/dooktart.png" width="44" height="45">',
	':usa:': '<img src="http://i.imgur.com/tSXNh.gif" width="60" height="42">',
	':dog:': '<img src="http://i.imgur.com/OcGfN.gif" width="53" height="53">',
	':feelsgud:': '<img src="http://i.imgur.com/BZ3WF.png" width="40" height="37">',
	':burd:': '<img src="http://i.imgur.com/kQcjC.gif" width="35" height="36">',
	':snoop:': '<img src="http://vidya4chan.com/snoop.gif" width="23" height="50">',
	':jimmies:': '<img src="http://vidya4chan.com/jimmy.gif" width="35" height="38">',
	':america:': '<img src="http://vidya4chan.com/111.gif" width="36" height="56">',
	':bioware:': '<img src="http://vidya4chan.com/biogurl.gif" width="41" height="48">',
	':reddit:': '<img src="http://i.imgur.com/wKaFk.png" width="80" height="16">',
	':bestkorea:': '<img src="http://vidya4chan.com/kim.gif" width="43" height="54">',
	':uncle:': '<img src="http://vidya4chan.com/VffoS.jpg" width="44" height="52">',
	':push:': '<img src="http://vidya4chan.com/push.gif" width="43" height="49">',
	':aliens:': '<img src="http://vidya4chan.com/aliens.gif" width="50" height="57">',
	':bodywash:': '<img src="http://vidya4chan.com/bodywash.png" width="41" height="51">',
	':sadfrog:' : '<img src="http://i.imgur.com/4lwg0.png" onmouseover="this.src = \'http://i.imgur.com/h5DMX.png\'">',
	':gooby:': '<img src="http://vidya4chan.com/o2XNE.jpg" onmouseover="this.src = \'http://i.imgur.com/GbtFl.jpg\'">',
	':costanza:': '<img src="http://vidya4chan.com/heh.png" width="41" height="58">',
*/
/*EMOTE_DELIMITER*/

':libshoot:' : '<img src="http://i.imgur.com/EDh7C.png" onclick="this.src = \'http://i.imgur.com/xSv73.png\'">',
':sadrage:' : '<img src="http://i.imgur.com/4lwg0.png" onmouseover="this.src = \'http://i.imgur.com/h5DMX.png\'">',
':testcan:': '<canvas id="testcan" width="50" height="50"></canvas>',
':testcan1:':function(){cnt++; var code = '<canvas id="testcan'+cnt+'" width="50" height="50"></canvas><script>var c'+cnt+'=document.getElementById("testcan'+cnt+'"),ctx'+cnt+'=c'+cnt+'.getContext("2d");setInterval(function(){ctx'+cnt+'.fillStyle="white";ctx'+cnt+'.fillRect(0,0,50,50);ctx'+cnt+'.fillStyle="black"; ctx'+cnt+'.fillText(m_x,10,10);ctx'+cnt+'.fillText(m_y,10,20);ctx'+cnt+'.fillText(Date.now().toString().slice(-6),10,30);ctx'+cnt+'.fillText(+'+cnt+',10,40);ctx'+cnt+'.fillText(c'+cnt+'.offsetLeft +"  "+ c'+cnt+'.offsetTop,10,50);}, 100);</script>';return code;},
':fast:' : '<marquee behavior="scroll" direction="left">',
':run:' : '<marquee behavior="scroll" direction="right">',
':knuckles:' : '<span style="color:tomato">',
':pacman:' : '<span style="color:yellow">',
':sonic:' : '<span style="color:blue">',
':krystal:' : '<span style="color:darkblue">',
':squirtle:' : '<span style="color:cyan">',
':mario:' : '<span style="color:red">',
':link:' : '<span style="color:green">',
':halo2:' : '<span style="color:darkgreen">',
':kirby:' : '<span style="color:violet">',
':nights:' : '<span style="color:purple">',
':crashbandicoot:' : '<span style="color:orange">',
':spyro:' : '<span style="color:blueviolet">',
':starfox:' : '<span style="color:brown">',
':birdo:' : '<span style="color:deeppink">',
':chao:' : '<span style="color:aqua">',
':bigthecat:' : '<span style="color:indigo">',
':orange:' : '<span style="color:orange">',
':tomba:' : '<span style="color:pink">',
':tomnook:' : '<span style="color:chocolate">',
':gex:' : '<span style="color:yellowgreen">',
':liara:' : '<span style="color:steelblue">',
':metalgear:' : '<span style="color:silver">',
':wakeupmrfreeman:' : '<span style="color:tan">',
':bluebomber:' : '<span style="color:royalblue">',
':testemote:': '<img src="http://i.imgur.com/QuGwt.gif">',
':profit:': '<img src="http://i.imgur.com/0dLBj.jpg">',
':goebbels:': '<img src="http://i.imgur.com/pHekN.jpg">',
':naziflag:': '<img src="http://i.imgur.com/Vpxjr.jpg">',
':burd:': '<img src="http://i.imgur.com/kQcjC.gif">',
':aliens:': '<img src="http://i.imgur.com/QN73Y.gif">',
':wtc:': '<img src="http://i.imgur.com/RozVm.jpg">',
':muhdick:': '<img src="http://i.imgur.com/z7K3R.jpg">',
':costanza:': '<img src="http://i.imgur.com/7VYoq.png">',
':usa:': '<img src="http://i.imgur.com/tSXNh.gif">',
':niggerprez:': '<img src="http://i.imgur.com/SitB7.png">',
':brony1:': '<img src="http://i.imgur.com/zYqHn.jpg">',
':brony2:': '<img src="http://i.imgur.com/FJLkr.jpg">',
':rommel:': '<img src="http://i.imgur.com/dqSwE.jpg">',
':engineer:': '<img src="http://i.imgur.com/sGEvD.jpg">',
':fatharold:': '<img src="http://i.imgur.com/z08bO.png">',
':zuckerjew:': '<img src="http://i.imgur.com/4kOv4.png">',
':wtc1:': '<img src="http://i.imgur.com/a2uU8.png">',
':911:': '<img src="http://i.imgur.com/pJo7C.png">',
':watomelone:': '<img src="http://i.imgur.com/2cMB2.png">',
':puke:': '<img src="http://i.imgur.com/JrrCJ.gif">',
':chongli:': '<img src="http://i.imgur.com/ao9rX.jpg">',
':sneakygook:': '<img src="http://i.imgur.com/wlfxh.jpg">',
':wtc7:': '<img src="http://i.imgur.com/69zzC.gif">',
':beaner:': '<img src="http://i.imgur.com/Ae9i2.jpg">',
':uber:': '<img src="http://i.imgur.com/uqjV4.jpg">',
':oven:': '<img src="http://i.imgur.com/zxQpJ.jpg">',
':varg:': '<img src="http://i.imgur.com/y0AbO.gif">',
':vargsentenced:': '<img src="http://i.imgur.com/C3DkQ.gif">',
':zogshill:': '<img src="http://i.imgur.com/0fxaQ.gif">',
':niggersalt:': '<img src="http://i.imgur.com/xkOsU.jpg">',
':technoviking:': '<img src="http://i.imgur.com/C5QLK.gif">',
':popcorn:': '<img src="http://i.imgur.com/uQKEP.gif">',
':thejew:': '<img src="http://i.imgur.com/3uHwv.png">',
':stardavid:': '<img src="http://i.imgur.com/NU7zu.png" onclick="this.src = \'http://i.imgur.com/BtZjw.gif\'">',
':ubermensch:': '<img src="http://i.imgur.com/DoIvp.png">',
':umuhammad:': '<img src="http://i.imgur.com/1r4m8.jpg">',
':wtfudoing:': '<img src="http://i.imgur.com/gBpuK.png">',
':rageface:': '<img src="http://i.imgur.com/OnWpD.png">',
':doompaul:': '<img src="http://i.imgur.com/7Jjdo.jpg">',
':aynrand:': '<img src="http://i.imgur.com/V5nuw.jpg">',
':shlomostressed:': '<img src="http://i.imgur.com/uqrDB.png">',
':bioware:': '<img src="http://i.imgur.com/1K4gw.gif">',
':feelfrog:': '<img src="http://i.imgur.com/4lwg0.png">',
':jewrat:': '<img src="http://i.imgur.com/YUNUC.jpg">',
':jewgold:': '<img src="http://i.imgur.com/1Phf0.jpg">',
':atlast:': '<img src="http://i.imgur.com/F68Oa.png">',
':blacksun:': '<img src="http://i.imgur.com/idPBY.png">',
':achievementunlocked:': '<img src="http://i.imgur.com/GszxM.jpg">',
':feelsgud:': '<img src="http://i.imgur.com/BZ3WF.png">',
':engineer1:': '<img src="http://i.imgur.com/9fnZi.png">',
':engineer2:': '<img src="http://i.imgur.com/bfq4f.png">',
':britfag:': '<img src="http://i.imgur.com/TLlmQ.png">',
':redbutton:': '<img src="http://i.imgur.com/lHtey.jpg">',
':dolla:': '<img src="http://i.imgur.com/WqECm.png">',
':iwonderwho:': '<img src="http://i.imgur.com/Eaqkt.png">',
':spurdo:': '<img src="http://i.imgur.com/8fjuj.jpg">',
':girltroll:': '<img src="http://i.imgur.com/TCvfT.jpg">',
':msjew:': '<img src="http://i.imgur.com/Or1CZ.png">',
':msarab:': '<img src="http://i.imgur.com/0REL8.png">',
':holowood:': '<img src="http://i.imgur.com/pLqyy.png">',
':cage:': '<img src="http://i.imgur.com/t2zvV.jpg">',
':yep:': '<img src="http://i.imgur.com/PxvME.gif">',
':thisfuckingnigger:': '<img src="http://i.imgur.com/uhMEP.gif">',
':philososloth:': '<img src="http://i.imgur.com/QM6wN.gif">',
':mindblown:': '<img src="http://i.imgur.com/BQ4HB.gif">',
':highfive:': '<img src="http://i.imgur.com/kO5V2.gif">',
':snowman:': '<img src="http://i.imgur.com/kmIEN.gif">',
':anon:': '<img src="http://i.imgur.com/UtkZZ.png">',
':tongue:': '<img src="http://i.imgur.com/oa155.gif">',
':netanyahu:': '<img src="http://i.imgur.com/Zra9h.gif">',
':monkey:': '<img src="http://i.imgur.com/dzQve.gif">',
':ban:': '<img src="http://i.imgur.com/IblqR.gif">',
':hoodlife:': '<img src="http://i.imgur.com/bK5xy.gif">',
':ss:': '<img src="http://i.imgur.com/pf3uX.png">',
':nkunda:': '<img src="http://i.imgur.com/4RQXl.jpg">',
':foreveralone:': '<img src="http://images.4chon.net/h/src/1350182878436.jpg">',
':gay:': '<img src="http://i.imgur.com/1UWuR.jpg">',
':snob:': '<img src="http://i.imgur.com/7xuJp.gif">',
':brofist:': '<img src="http://i.imgur.com/FhTvW.png">',
':killjews:': '<img src="http://i.imgur.com/GSrQy.jpg">',
':fatkike:': '<img src="http://i.imgur.com/7umtW.jpg">',
':pierce:': '<img src="http://i.imgur.com/aMVFN.jpg">',
':rachelmancow:': '<img src="http://i.imgur.com/KMsud.jpg">',
':jewrat2:': '<img src="http://i.imgur.com/9Gde3.gif">',
':obamajew:': '<img src="http://i.imgur.com/ocBWD.png">',
':frodo:': '<img src="http://i.imgur.com/UtIKV.png">',
':redpill:': '<img src="http://i.imgur.com/fOKOx.png">',
':hardship:': '<img src="http://i.imgur.com/rwTbh.png">',
':niggapls:': '<img src="http://i.imgur.com/saD6U.jpg">',
':facepalm:': '<img src="http://i.imgur.com/H0K60.jpg">',
':epilepsy:': '<img src="http://i.imgur.com/1sQPh.gif">',
':noses:': '<img src="http://i.imgur.com/OoBVz.jpg">',
':muhfreedoms:': '<img src="http://i.imgur.com/Nj31M.png">',
':strongleader:': '<img src="http://i.imgur.com/LMvFl.png">',
':allears:': '<img src="http://i.imgur.com/rKgBE.gif">',
':niggest:': '<img src="http://i.imgur.com/m7O5Q.png">',
':dasfeel:': '<img src="http://i.imgur.com/B3096.jpg">',
':lenazi:': '<img src="http://i.imgur.com/wpJkf.png">',
':woman:': '<img src="http://i.imgur.com/0S7Nz.png">',
':worthit:': '<img src="http://i.imgur.com/HczSq.png">',
':dyel:': '<img src="http://i.imgur.com/nbcUB.png">',
':winrar:': '<img src="http://i.imgur.com/oBvEJ.jpg">',
':chrischon:': '<img src="http://i.imgur.com/EGqsr.png">',
':spqr:': '<img src="http://i.imgur.com/T3h6F.jpg">',
':SPQR:': '<img src="http://i.imgur.com/T3h6F.jpg">',
':452548hasdhasjdhjh3j42h4j23:': '<img src="http://i.imgur.com/2F9Kv.gif">',
':fatkike2:': '<img src="http://i.imgur.com/cO8kQ.jpg">',
':typicalamerican:': '<img src="http://i.imgur.com/MpMFw.gif">',
':bogs:': '<img src="http://i.imgur.com/q4bxV.png">',
':sweden:': '<img src="http://i.imgur.com/tNiXA.gif">',
':frank:': '<img src="http://i.imgur.com/DgvKl.png">',
':gook:': '<img src="http://i.imgur.com/TZJy2.png">',
':chinky:': '<img src="http://i.imgur.com/TZJy2.png">',
':obamadile:': '<img src="http://i.imgur.com/kVxSh.png">',
':femalegook:': '<img src="http://i.imgur.com/sQ4wY.jpg">',
':lejokereyes:': '<img src="http://i.imgur.com/o4blE.jpg">',
':hankler:': '<img src="http://i.imgur.com/lV2kg.png">',
':ugonnagetraped:': '<img src="http://i.imgur.com/76Qwe.jpg">',
':rapeeyes:': '<img src="http://i.imgur.com/dqjap.jpg">',
':rulebritannia:': '<img src="http://i.imgur.com/EH6Ud.jpg">',
':jewsdidthis:': '<img src="http://i.imgur.com/FC6HX.gif">',
':mentok:': '<img src="http://i.imgur.com/jJkNh.gif">',
':gandalf:': '<img src="http://i.imgur.com/fF2Wj.jpg">',
':fbi:': '<img src="http://i.imgur.com/TKlDM.png">',
':fbiseal:': '<img src="http://i.imgur.com/qwHaw.png">',
':fbi1:': '<img src="http://i.imgur.com/tgy9f.png">',
':intelligentnegro:': '<img src="http://i.imgur.com/J0cKp.jpg">',
':bell:': '<img src="http://i.imgur.com/MbkSz.png">',
':orange:': '<img src="http://i.imgur.com/iO1jN.png">',
':suicidefrog:': '<img src="http://i.imgur.com/VoxH2.png">',
':gentoo:': '<img src="http://i.imgur.com/TP5hT.jpg">',
':manlytear:': '<img src="http://i.imgur.com/ZY4zU.jpg">',
':nose:': '<img src="http://i.imgur.com/e3ihX.jpg">',
':bomb:': '<img src="http://i.imgur.com/1Ri01.png">',
':ameer:': '<img src="http://i.imgur.com/zg7DE.gif">',
':mysides:': '<img src="http://i.imgur.com/vETtK.png">',
':fuckyou:': '<img src="http://i.imgur.com/mI0do.png">',
':reddit2:': '<img src="http://i.imgur.com/0uSK6.jpg">',
':handshake:': '<img src="http://i.imgur.com/LsJIy.png">',
':giftgasse:': '<img src="http://i.imgur.com/Atc3p.gif">',
':infosuck:': '<img src="http://i.imgur.com/ItaWo.png">',
':pullit:': '<img src="http://i.imgur.com/ylW7w.png">',
':topgun:': '<img src="http://i.imgur.com/pvusW.png">',
':wiper:': '<img src="http://i.imgur.com/1jMox.png">',
':puke2:': '<img src="http://i.imgur.com/zNfLS.gif">',
':killjewsman:': '<img src="http://i.imgur.com/XEYnMKp.png">',
':sperg:': '<img src="http://i.imgur.com/SNQ6QYf.png">',
':keanu:': '<img src="http://i.imgur.com/L2JuAQJ.png">',
':whiskey:': '<img src="http://i.imgur.com/rUIXABf.jpg">',
':jug:': '<img src="http://i.imgur.com/hEkb6hq.jpg">',
':noserub:': '<img src="http://i.imgur.com/NTvgxqT.jpg">',
':histanza:': '<img src="http://i.imgur.com/6uiGBUe.png">',
':terminator00:': '<img src="http://i.imgur.com/3L4ZwAq.jpg">',
':terminator01:': '<img src="http://i.imgur.com/NNNIxPc.jpg">',
':lie:': '<img src="http://i.imgur.com/CxhrpFA.jpg">',
':rockwell:': '<img src="http://i.imgur.com/0OFX0Ij.jpg">',
':stalin0:': '<img src="http://i.imgur.com/Pi45GyF.jpg">',
':mao:': '<img src="http://i.imgur.com/ccoO54u.jpg">',
':washington:': '<img src="http://i.imgur.com/s4VeMt7.jpg">',
':jefferson:': '<img src="http://i.imgur.com/owhCjgJ.jpg">',
':napoleon:': '<img src="http://i.imgur.com/yTa2ihq.jpg">',
':vlad:': '<img src="http://i.imgur.com/HjgTeuf.jpg">',
':bane:': '<img src="http://i.imgur.com/El53vfJ.png">',
':dish:': '<img src="http://i.imgur.com/kVGT2vi.png">',
':goy:': '<img src="http://i.imgur.com/I1fFH1F.gif">',
':sadhitler:': '<img src="http://i.imgur.com/XjhOFpx.jpg">',
':africa:': '<img src="http://i.imgur.com/qpadu2P.jpg">',
':dick:': '<img src="http://i.imgur.com/6XJfsw4.jpg">'/*END_FILE*/};
