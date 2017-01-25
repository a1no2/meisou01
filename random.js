var countID = 0;			//リストのID
var listArray = Array();	//リスト


//追加するやつ
function addString(){
	var addStr = document.js.addText.value;		//テキストの値取得
	document.js.addText.value = "";

	//テキストが空白でないならリストに追加
	if (addStr != '') {
		//リスト
		var li = document.createElement("li");			//追加するタグ
		var str = document.createTextNode(addStr);		//追加するテキスト
		var ListId = countID;		//countID使うとデリートの時とかにバグる
		var del = "li_" + String(ListId);
		li.id = del;

		listArray.push(addStr);

		//削除ボタン
		var delBunt = document.createElement("input");
		delBunt.type = "button";
		delBunt.value = "削除";
		delBunt.onclick = function(){ liDelete(del, ListId); };


		li.appendChild(str);		//エレメントに入れる
		li.appendChild(delBunt);
		document.getElementById("textList").appendChild(li);	//生成

		countID++
	} else {
		console.log("空だよ!!");
	}
}



//削除
function liDelete(listID, arrID){
	var removeElem = document.getElementById(listID);
	removeElem.parentNode.removeChild(removeElem);

	listArray[arrID] = void 0;
}






//ランダムボタン
function random(){
	//ランダムの表示の場所　削除
	var ul = document.getElementById("randomUl");
	while (ul.firstChild) ul.removeChild(ul.firstChild);

	//リストの数
	var countList = document.getElementById('textList').childElementCount;
	var randomArray = Array();

	for (var i = 0; i < countID; i++) {
		if (listArray[i] != undefined) {
			randomArray.push(listArray[i]);
		}
	}

	var endValue = Array();		//すでにランダムで出た値を格納していく
	endValue.push(99999999);
	for (var i = 0; i < randomArray.length; i++) {
		// console.log(randomArray[i]);

		for(;;){
			var endFor = false;
			var randomValue = Math.floor( Math.random() * randomArray.length);
			for (var j = 0; j < endValue.length; j++) {
				if (randomValue ==  endValue[j]) {
					break;
				}

				if (j == (endValue.length - 1)) {
					endValue.push(randomValue);		//ランダムで出た値を入れる
					// console.log(randomArray[randomValue]);

					var li = document.createElement("li");
					var str = document.createTextNode(randomArray[randomValue]);
					li.appendChild(str);
					ul.appendChild(li);


					endFor = true;
					break;
				}
			}

			if (endFor) {
				break;
			}
		}

	}

}






//リセットボタン
function resetBtn(){
	if(window.confirm('リセットしてもよろしいですか？')){
		document.js.addText.value = "";

		var ul = document.getElementById("textList");
		while (ul.firstChild) ul.removeChild(ul.firstChild);
		ul = document.getElementById("randomUl");
		while (ul.firstChild) ul.removeChild(ul.firstChild);


		countID = 0;			//リストのID
		listArray = Array();	//リスト
	} else {

	}
}








