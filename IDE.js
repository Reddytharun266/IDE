function allow_drop(ev) {
		  ev.preventDefault();
		}

		function drag(ev) {
		  ev.dataTransfer.setData("text", ev.target.id);
		}

		function drop(ev) {
		  ev.preventDefault();
		  var data = ev.dataTransfer.getData("text");
		  ev.target.append(document.getElementById(data).cloneNode(true));

		  var data = document.getElementById(data).cloneNode(true);

		  document.getElementById("div3").append(data.outerHTML);
		}


		function save() 
		{

			var div1 = document.getElementById("div3");
			var htmlContent = [div1.textContent];
			var bl = new Blob(htmlContent, {type: "text/html;charset=utf-8"});
			var a = document.createElement("a");
			a.href = URL.createObjectURL(bl);
			a.download = "draganddrop.html";
			a.hidden = true;
			document.body.appendChild(a);
			a.click();
		}