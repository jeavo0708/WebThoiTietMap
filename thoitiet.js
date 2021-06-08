var nhapten = document.getElementById("nhapten");
var button = document.getElementById("submit");

button.addEventListener('click', function(name){
	fetch('https://api.openweathermap.org/data/2.5/weather?q='+nhapten.value+'&appid=e0bfdc3ce1d88496e3c84c0013aaa414')
	.then(response => response.json())
	.then(data => {
		var name = data['name'];
		var nhietdo = data['main']['temp']; //Kiểu độ K: 0°C ứng với 273,15K
		var mota = data['weather'][0]['description'];
		var thoitiet = data['weather'][0]['main'];
		var doam = data['main']['humidity'];
		var icon = data.weather[0].icon;
		
		//Dịch vài tên thời tiết
		if(thoitiet = "Clouds")
			thoitiet = "Trời mây";
		else if (thoitiet = "Rain")
			thoitiet = "Trời mưa";
		else if (thoitiet = "Fog")
			thoitiet = "Nhiều sương";
		else if (thoitiet = "Clean")
			thoitiet = "Trời trong, không mây"
		else if (thoitiet = "Mist")
			thoitiet = "Có sương mù";
		
		//Trả về các thông tin Weather
		document.getElementById("name").innerHTML = name;
		document.getElementById("mota").innerHTML = "Mô tả chi tiết:  "+mota;
		
		//Làm tròn nhiệt độ
		var ndlamtron = nhietdo - 273.15
		var n = parseFloat(ndlamtron);
		ndlamtron = Math.round(n * 1000)/1000;
		
		document.getElementById("nhietdo").innerHTML = "Nhiệt độ:  "+ndlamtron+ "°C";
		document.getElementById("thoitiet").innerHTML = "Thời tiết:  "+thoitiet;
		document.getElementById("doam").innerHTML = "Độ ẩm:  "+doam+"%";
		
		//Trả về icon weather
		document.getElementById("icon").innerHTML = `<img src="images/${icon}.png"/>`;
		
		//Trả về tọa độ
		document.getElementById("kinhdo").value = data['coord']['lon'];
		document.getElementById("vido").value = data['coord']['lat'];
		
		//Làm trống khung nhập
		nhapten.value ="";
	})
.catch(err => alert("Vui lòng nhập tên thành phố khác!"));
})