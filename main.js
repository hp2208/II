var audio = document.getElementById("audio"),
	content = document.getElementById("content"),
	title = document.getElementById("title"),
t, d = 0, playingTrackIndex = 0, playingTrackLesson=0, autoNext = false, firstLesson = 0, lastLessonChapterI = 22, lastLesson = 42, jsonContent = null;
window.onload = function () {
	//Add indexes to catalogue
	var catalogue = document.getElementById("catalogue");
    catalogue.innerHTML = "";
	for (let i = firstLesson; i <= lastLesson; i++) {
		catalogue.appendChild(addLessonIndex(i));
	}
}
// Define field of index
function addLessonIndex(lessonIndex) {
	let menu = document.createElement('div');
    menu.className = "btn-group";
    menu.setAttribute("role","group");
    menu.innerHTML =   '<button type="button" class="btn btn-success dropdown-toggle btn-noneBorder" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+ formatNumber(lessonIndex) + '</button>';
  
	let menuIndex = document.createElement('div');
    menuIndex.className = "dropdown-menu";
    menuIndex.setAttribute("aria-labelledby","dropdownMenuLink");
    let maxTopicIndex;
    switch(lessonIndex) {
      case 0:
        maxTopicIndex=2;
        break;
      default:
        maxTopicIndex=4;
      };

	for(let j=1;j<=maxTopicIndex;j++){
	  let topicIndex = document.createElement('a');
      topicIndex.className = "dropdown-item";
	  topicIndex.innerHTML=formatNumber(j);
      topicIndex.setAttribute("href","#");
      topicIndex.onclick = function() {
        // Stop all sound playing (if other topic loaded) and load new topic
        playingTrackLesson = lessonIndex;
        showTopicContent(lessonIndex, j, null);
        audio.pause();
        audio.src = "";
        playingTrackIndex=0;
        //Hide menu while loading topic
        $('#collapseOne').collapse('hide');
      };
      
	  menuIndex.appendChild(topicIndex);
	}

	menu.appendChild(menuIndex);

	return menu;
}








  



function showTopicContent(lessonIndex, topicIndex) {
  
	content.innerHTML = "";
	loadScript(getJsonPath(lessonIndex, topicIndex), function () {
      if(lessonIndex<=lastLessonChapterI) {
        jsonContent = loadJsonType1(gPlayData);
      } else {
        jsonContent = loadJsonType2(gPlayData);
      }
      //Set title
      title.innerHTML = jsonContent.jaTitle;
      // Set content
      jsonContent.para.forEach(function(item, index){
        content.appendChild(addSRT(item.ja,item.en,index));
      });
});
}
function addSRT(jaSRT, enSRT, mp3Index) {
	var srt = document.createElement('tr');
    srt.className = "jaSRT";
	srt.innerHTML = jaSRT;
    if(enSRT!=""||enSRT!=null){
      var en = document.createElement('tr');
      en.innerHTML = enSRT;
      en.className = "enSRT";
      srt.appendChild(en);
    }
	srt.onclick = function () {
      playingTrackIndex = mp3Index;
      loadAudio(getAudioPath(playingTrackLesson, playingTrackIndex));
      audio.play();
      autoNext = false;
	};
	return srt;
}

// Events of audio
audio.oncanplay = function () {
	for (var i = 0; i < content.children.length; i++) {
		content.children[i].style.color = "white";
	}
	content.children[playingTrackIndex].style.color = "green";
        content.children[playingTrackIndex].scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"});
};
audio.onended = function () {
	if (autoNext) {
      playingTrackIndex++;
      loadAudio(getAudioPath(playingTrackLesson, playingTrackIndex));
      audio.play();
	}
};
audio.onplaying = function() {
    $("#btn-play").addClass("shade-color");
};
audio.onpause = function() {
    $("#btn-play").removeClass("shade-color");
};
audio.onabort = function() {
    $("#btn-play").removeClass("shade-color");
};













//Toggle RT tag
document.getElementById('btn-rt').onclick = function () {
  let rt = document.getElementsByTagName("rt");
  for(var i = 0; i < rt.length; i++) {
    rt[i].classList.toggle("visible-visibility");
  }
};
//Toggle contents of Japanese 
document.getElementById('btn-jaSRT').onclick = function () {
  $('td').toggleClass("visible-visibility");
};
//Toggle contents of English
document.getElementById('btn-enSRT').onclick = function () {
  $(".enSRT").toggle();
};
$("#btn-play").click(function() {
  if(!audio.paused) {
        audio.pause();
      } else if(audio.currentTime>0) {
        audio.play();
      } else {
        loadAudio(getAudioPath(playingTrackLesson, playingTrackIndex));
      audio.play();
      }
  autoNext = true
});
$("#btn-next").click(function() {
  let a = getLessonTopic(jsonContent.nextLink);
  showTopicContent(a[0], a[1]);
  audio.pause();
  audio.src = "";
  playingTrackIndex=0;
});
$("#btn-prev").click(function() {
  let a = getLessonTopic(jsonContent.beforeLink);
  showTopicContent(a[0], a[1]);
  audio.pause();
  audio.src = "";
  playingTrackIndex=0;
});




function loadJsonType1(j) {
  let e = {
      beforeLink: "",
      nextLink: "",
      jaTitle: "",
      enTitle: "",
      para: []
    };
  e.beforeLink = j.beforelink.split("?")[1];
  e.nextLink = j.nextlink.split("?")[1];
  e.jaTitle = j.jptitle;
  try {
    if(j.mp3[0]=="@1"){
      j.mp3.shift();
    }
  } catch(e) {}
  try {
    e.enTitle = j.entitle;
  } catch(e) {};
  for(var i = 0; i < j.jp.length;i++) {
    let el = {
      mp3 : "",
      ja: "",
      en: ""
    }
    el.ja = j.jp[i];
    if(j.en[i]!=null){
      el.en = j.en[i];
    }
    el.mp3 = j.mp3[i]
    e.para.push(el);
  }
  return e;
}

function loadJsonType2(j) {
  let e = {
      beforeLink: "",
      nextLink: "",
      jaTitle: "",
      enTitle: "",
      para: []
    };
  e.beforeLink = j.beforelink.split("?")[1];
  e.nextLink = j.nextlink.split("?")[1];
  e.jaTitle = j.jptitle;
  try {
    e.enTitle = j.entitle;
  } catch(e) {};
  for(var i = 0; i < j.para.length;i++) {
    let el = {
      mp3 : "",
      ja: "",
      en: ""
    }
    el.ja = j.para[i].script;
    if(j.para[i].en!=null) {
      el.en = j.para[i].en;
    }
    el.mp3 = j.para[i].fileName;
    e.para.push(el);
  }
  return e;
}












function getAudioPath(lessonIndex, mp3Index) {
  if(lessonIndex<=lastLessonChapterI) {
    return "sound\/" + jsonContent.para[mp3Index].mp3;
  } else {
    return "sound2\/" + jsonContent.para[mp3Index].mp3;;
  }
}
function getJsonPath(lessonIndex, topicIndex) {
    return "json\/"+formatNumber(lessonIndex)+formatNumber(topicIndex)+".js";
}












function loadScript(url, callback) {

	var script = document.createElement("script")
	script.type = "text/javascript";

	if (script.readyState) { //IE
		script.onreadystatechange = function () {
			if (script.readyState == "loaded" ||
				script.readyState == "complete") {
				script.onreadystatechange = null;
				callback();
			}
		};
	} else { //Others
		script.onload = function () {
			callback();
		};
	}

	script.src = url;
	document.getElementsByTagName("head")[0].appendChild(script);
}

function formatNumber(num) {
	if (num<10) {
		return "0" + num
	} else{
      return num
    }
}
function getLessonTopic(link){
  return [parseInt(link.slice(0,2)), parseInt(link.slice(2,4))];
}















function loadAudio(audioSrc) {
  if(!loadAudioFrLocalStorage(audioSrc)){
    loadAudioFrInternet(audioSrc);
  }
}

function loadAudioFrInternet(audioSrc) {
  audio.src = audioSrc;
  saveAudioToLocalStorage(audio);
}
function loadAudioFrLocalStorage(audioSrc) {
  var loadOK = false;
  
  return loadOK;
}
function saveAudioToLocalStorage(audio) {
    
}
