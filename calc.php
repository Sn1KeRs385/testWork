<?php
	$date = new DateTime($_POST['date']);
	$sum=$_POST['deposit'];
	$sumAdd=0;
	//echo $date->format('m');
	//echo (10/date('z', mktime(0, 0, 0, 12, 31, $date->format('Y'))));
	if($_POST['check_depositAdd'] == "1")
		$sumAdd = intval($_POST['depositAdd']);
	for($i=0;$i<$_POST['year'];$i++)
	{
		for($j=0;$j<12;$j++)
		{
			$percent = (10/date('z', mktime(0, 0, 0, 12, 31, $date->format('Y'))));
			$dayInMonth = cal_days_in_month(CAL_GREGORIAN, $date->format('m'), $date->format('Y'));
			$sum = $sum + ($sum + $sumAdd)*$dayInMonth*$percent;
			$date->modify('+1 month');
		}
	}
	echo round($sum);
?>