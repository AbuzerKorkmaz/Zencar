/*
	JS: Global CSS BLOCKS JS
	Developed By:	LayoutFlow
	URL:			https://layoutflow.com
	Version:		1.0
	License: 		https://creativecommons.org/licenses/by-nc-sa/4.0/	
*/


// JAVASCRIPT

// COPYRIGHT YEAR (AUTOMATIC)
let getyear = new Date().getFullYear();
let getyeardiv = document.getElementById('year');
getyeardiv.innerHTML = getyear;


// HEADER FIXED
function headerfixed() {
	let getheaderdiv = document.getElementsByTagName('header')[0].classList;
	if (document.documentElement.scrollTop > 100) {
		getheaderdiv.add('fixed');
	} else {
		getheaderdiv.remove('fixed');
	}
}
window.onscroll = headerfixed;


// JQUERY
$(document).ready(function () {


	// NAV MENU MANAGEMENT 
	$('a.showmenu').click(function () { $('.navigation').fadeIn(); $(this).hide(); $('a.hidemenu').fadeIn('slow'); });
	$('a.hidemenu').click(function () { $('.navigation').fadeOut(); $(this).hide(); $('a.showmenu').fadeIn('slow'); });
	$('.navigation ul li').click(function () {
		let getscreenwidth = $(window).width();
		if (getscreenwidth < 1201) {
			$('.navigation').fadeOut();
			$('a.showmenu').fadeIn('slow');
			$('a.hidemenu').hide();
		}
	});


});

function tabloYap() {


	let strJsonData = [{ Model: "ZENCAR XS4", Fiyat: "3000" }, { Model: "Tesla Model Y", Fiyat: "12000" }, { Model: "TOOG 10x", Fiyat: "4000" }]

	document.writeln("<h1>Kredi Aylık Ödeme Tutarları </h1>")



	const head = document.createElement("h1");
	head.setAttribute("id", "baslik")
	head.innerText = "X Bankası Kredi Aylık Ödeme Tutarları"
	document.body.appendChild(head)
	let q = document.getElementById("baslik")
	q.style.color = "Orange"

	document.writeln("<table border :3px>")
	document.writeln("<tr><td>Model </td>")
	document.writeln("<td>İki yıl için</td>")
	document.writeln("<td>Üç yıl için</td>")
	document.writeln("<td>Ay</td>")

	for (let i = 0; i < strJsonData.length; i++) {



		for (let j = 0; j < 24; j++) {

			document.writeln("<tr><td>" + strJsonData[i].Model + "</td>")
			document.writeln("<td>" + " $" + parseInt(strJsonData[i].Fiyat / 24) + "</td>")
			document.writeln("<td>" + " $" + parseInt(strJsonData[i].Fiyat / 36) + "</td>")
			document.writeln("<td>" + `${j + 1}` + "." + "</td>")
		}
		for (let j = 24; j < 36; j++) {

			document.writeln("<tr><td></td>")
			document.writeln("<td></td>")
			document.writeln("<td>" + " $" + parseInt(strJsonData[i].Fiyat / 36) + "</td>")
			document.writeln("<td>" + `${j + 1}` + "." + "</td>")
		}


	}
}