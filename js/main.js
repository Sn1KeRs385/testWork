function change_slider(inputName, sliderName)
{
	var input = document.getElementsByName(inputName)[0];
	var slider = document.getElementById(sliderName);
	
	if(parseInt(input.value)<1000 || parseInt(input.value) > 3000000)
		input.value = 1000;
	slider.value=parseInt(input.value) - 1000;
}
function change_input(inputName, sliderName)
{
	var input = document.getElementsByName(inputName)[0];
	var slider = document.getElementById(sliderName);
	
	input.value = parseInt(slider.value)+1000;
}
function calc()
{
	if(document.getElementById('calendar'))
	{
		alert("Введите дату!");
		return 0;
	}
	var check_depositAdd = 0;
	if(document.getElementsByName('radio')[0].checked)
		check_depositAdd = 1;
	//alert(document.getElementsByName('depositAdd')[0].value);
	$.ajax({
			type: "POST",
			url: "calc.php",
			data: {
				date: document.getElementById('calendar').value,
				deposit: document.getElementsByName('deposit')[0].value,
				year: document.getElementsByName('year')[0].value,
				check_depositAdd: check_depositAdd,
				depositAdd:document.getElementsByName('depositAdd')[0].value,
				  },
			success: function(html) {
				document.getElementById('result').innerHTML = html;
			}
		});
}